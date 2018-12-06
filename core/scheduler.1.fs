module Sakhe.Scheduler1
open System
open Sakhe
open Sakhe.Sink

type T =
    private
    | Local of (Time.T -> Pith.T<O, unit>)
and O =
    | Now of T
    | Delay of Time.Delay * T

let return' f = Local <| f

module O =
    let now f = Now << return' <| f

    let delay delay f = Delay (Time.Delay.return' delay, return' f)

[<AutoOpen>]
module private Private =
    let pair a b = a, b

    let rec ring (canceled: bool ref) p o = p <| function
        | Now io            -> o << O.Now << map canceled <| io
        | Delay (delay, io) -> o << O.Delay << pair delay << map canceled <| io
    and map (canceled: bool ref) (Local io) =
        Local <| fun now ->
            if canceled.Value then Pith.empty
            else
            Pith.pmap (ring canceled) <| io now

    let mappend (Local l) (Local r) = Local <| fun t -> Pith.mappend Unit.mappend (l t) (r t)

    let rec runAllNows
        (now, (Local io)) = Pith.return' <| fun o' ->
        // let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (Local io)  -> Pith.run2 (Pith.pmap ring << io <| now) o'
            | Delay (delay, io) -> o <| (delay + now, io)
        Pith.run2 (Pith.pmap ring << io <| now) o'

let run tf timer =
    let mutable nextRun = None
    let mutable timerd = Disposable.empty

    let rec schedule timeline =
        printfn "<-"
        let nextArrival = TimeLine.nextArrival timeline
        match nextRun with
        | None                                  ->
            nextRun <- Some (nextArrival, timeline)
            setTimer nextArrival
        | Some (nr, tl) when nr > nextArrival  ->
            nextRun <- Some (nextArrival, TimeLine.mappend mappend tl timeline)
            setTimer nextArrival
        | Some (nr, tl)                         ->
            nextRun <- Some (nr, TimeLine.mappend mappend tl timeline)
    and setTimer nextArrival =
        timerd.Dispose()
        timerd <- timer (Time.Delay.fromTo (tf()) nextArrival) <| fun () ->
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let (l, r) = TimeLine.takeUntil (tf()) tl
            let l = l |> Option.bind (fun l ->
                let mutable v = Pith.empty
                Pith.run2 (Pith.omap runAllNows << TimeLine.toPith <| l) <| fun p ->
                    v <- (Pith.mappend Unit.mappend) v p
                TimeLine.fromPith mappend v)
            match (Option.mappend (TimeLine.mappend mappend) l r) with
            | None -> ()
            | Some timeline -> schedule timeline
    fun io ->
        let canceled = ref false
        let now = tf()
        let io = map canceled io
        let timeline = TimeLine.fromPith mappend <| runAllNows (now, io)
        match timeline with
        | None -> ()
        | Some timeline -> schedule timeline
        Disposable.return' <| fun () -> canceled.Value <- true
