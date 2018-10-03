module Sakhe.Scheduler
open System
open Sakhe
open Sakhe.Sink

type T =
    private
    | Scheduler of Abo.T<Time.T * Time.Offset, unit, O>
and O =
    | Now of T
    | Delay of Time.Delay * T

let return'
    f = Scheduler << Abo.return' <| f

let contraMap
    g (Scheduler abo) = Scheduler <| Abo.contraMap g abo

module O =
    let now
        f = Now << return' <| f
    let delay
        delay f = Delay (Time.Delay.return' delay, return' f)

let map offset abo =
    fun p o ->
        p <| function
        | Now (Scheduler abo) ->
            o (-1, abo |> Abo.contraMap (fun t -> (t + offset, offset)) )
        | Delay (delay, Scheduler abo) -> ()
    |> Abo.pmap
    <| abo

let rec private runAllNows
    ((now, offset), Scheduler io) =
    fun () o ->
        let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (Scheduler io) -> Abo.run (now, offset) o' (Abo.pmap ring io)
            | Delay (delay, io)  ->
                o <|( (delay + now, offset)
                    , (fun (now, offset) -> now + offset, offset) |> contraMap <| io)
        Abo.run (now, offset) o' (Abo.pmap ring io)
    |> Abo.return'
    |> TimeLine.return'

let run
    tf timer =
    let mutable nextRun = None
    let settable = new Disposable.SettableDisposable()
    let rec delay nextArrival timeline =
        nextRun <-
            match nextRun with
            | None -> (nextArrival, timeline)
            | Some (nr, tl) when nr <= nextArrival -> (nr, TimeLine.mappend tl timeline)
            | Some (nr, tl) -> (nextArrival, TimeLine.mappend tl timeline)
            |> Some
        printfn "<-"
        settable.Set << timer (Time.Delay.fromTo (tf()) nextArrival) <| fun () ->
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let (l, r) = TimeLine.takeUntil (tf()) tl
            let l =
                fun l ->
                    let o = O.contraMap runAllNows <| O.return' (Option.mappend TimeLine.mappend) None
                    Abo.run () o (TimeLine.value l)
                    o.Value
                |> Option.bind <| l
            add (Option.mappend TimeLine.mappend l r)
    and add = function
        | None -> ()
        | Some timeline ->
            let nextArrival = TimeLine.nextArrival timeline
            delay nextArrival timeline
    fun localNow io ->
        let offSet = localNow - tf()
        let now = tf()
        let timeline = runAllNows ((now, offSet), io)
        add timeline
        settable :> IDisposable
