module Sakhe.Scheduler
open System
open Sakhe
open Sakhe.Sink

type T =
    private
    | Local of Abo.T<Time.T * Time.Offset, unit, O<T>>
    | Origin of Abo.T<Time.T, unit, O<T>>
and O<'a> =
    | Now of 'a
    | Delay of Time.Delay * 'a


let return'
    f = Local << Abo.return' <| f

module O =
    let now
        f = Now << return' <| f
    let nowOrigin
        f = Now << Origin << Abo.return' <| f

    let delay
        delay f = Delay (Time.Delay.return' delay, return' f)
    let delayOrigin
        delay f = Delay (Time.Delay.return' delay, Origin << Abo.return' <| f)



type OriginT = OriginT of Abo.T<Time.T, unit, O<OriginT>>

let rec ring offset p o = p <| function
    | Now io            -> o << O.Now   <|         map offset io
    | Delay (delay, io) -> o << O.Delay <| (delay, map offset io)

and map offset = function
    | Local io  ->
        OriginT << Abo.pmap (ring offset) << Abo.contraMap (fun now -> (now + offset, offset)) <| io
    | Origin io ->
        OriginT << Abo.return' <| fun now o ->
            Abo.run now (O.proxy o) (Abo.pmap (ring (Time.zero - now)) io)

let mappend (OriginT l) (OriginT r) = OriginT <| Abo.mappend Unit.mappend l r

let rec private runAllNows
    (now, OriginT io) =
    fun () o ->
        let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (OriginT io)  -> Abo.run now o' << Abo.pmap ring <| io
            | Delay (delay, io) -> o <| (delay + now, io)
        Abo.run now o' (Abo.pmap ring io)
    |> Abo.return'
    |> TimeLine.return' mappend

let run
    tf timer =
    let mutable nextRun = None
    let settable = new Disposable.SettableDisposable()
    let rec delay nextArrival timeline =
        nextRun <-
            match nextRun with
            | None -> (nextArrival, timeline)
            | Some (nr, tl) when nr <= nextArrival -> (nr, TimeLine.mappend mappend tl timeline)
            | Some (nr, tl) -> (nextArrival, TimeLine.mappend mappend tl timeline)
            |> Some
        printfn "<-"
        settable.Set << timer (Time.Delay.fromTo (tf()) nextArrival) <| fun () ->
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let (l, r) = TimeLine.takeUntil (tf()) tl
            let l =
                fun l ->
                    let o = O.contraMap runAllNows <| O.return' (Option.mappend (TimeLine.mappend mappend)) None
                    Abo.run () o (TimeLine.value l)
                    o.Value
                |> Option.bind <| l
            match (Option.mappend (TimeLine.mappend mappend) l r) with
            | None -> ()
            | Some timeline ->
                let nextArrival = TimeLine.nextArrival timeline
                delay nextArrival timeline
    fun io ->
        let now = tf()
        let io = map (Time.zero - now) io
        let timeline = runAllNows (now, io)

        match timeline with
        | None -> ()
        | Some timeline ->
            let nextArrival = TimeLine.nextArrival timeline
            delay nextArrival timeline

        settable :> IDisposable
