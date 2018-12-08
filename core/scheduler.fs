module Sakhe.Scheduler
open System
open Sakhe

type T =
    private
    | Local of (Time.T -> Pith<O, unit>)
and O =
    | Now of T
    | Delay of Time.Delay * T

let return' f = Local <| f

module O =
    let now f = Now << return' <| f

    let delay delay f = Delay (Time.Delay.return' delay, return' f)

[<AutoOpen>]
module private Private =
    let rec map (canceled: bool ref) (offset: Time.Offset) (Local io) =
        Local <| fun now ->
            if canceled.Value then P.empty
            else
            P.pmap
                <| fun p o ->
                    p <| function
                        | Now io            -> o <| O.Now (map canceled offset io)
                        | Delay (delay, io) -> o <| O.Delay (delay, map canceled offset <| io)
                <| io (now + offset)
    let mappend (Local l) (Local r) = Local <| fun t -> P.mappend Unit.mappend (l t) (r t)
    let rec runAllNows
        (now, (Local io)) = P.return' <| fun o' ->
        // let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (Local io)  -> P.run o' (P.pmap ring << io <| now)
            | Delay (delay, io) -> o <| (delay + now, io)
        P.run o' (P.pmap ring << io <| now)
let run tf timer =
    let mutable nextRun = None
    let mutable timerd = Disposable.empty
    let rec schedule = function
        | None -> ()
        | Some timeline ->
            printfn "<-"
            let (nextArrival, _) = TimeLine.getBounds timeline
            match nextRun with
            | None                                  ->
                nextRun <- Some (nextArrival, timeline)
                timerd <- timer (Time.Delay.fromTo (tf()) nextArrival) onTimer
            | Some (nr, tl) when nr > nextArrival  ->
                nextRun <- Some (nextArrival, TimeLine.mappend mappend tl timeline)
                timerd.Dispose()
                timerd <- timer (Time.Delay.fromTo (tf()) nextArrival) onTimer
            | Some (nr, tl)                         ->
                nextRun <- Some (nr, TimeLine.mappend mappend tl timeline)
    and onTimer () =
        printfn "->"
        let (nr, tl) = nextRun.Value
        nextRun <- None
        let mutable p = P.empty
        let r =
            P.run
            <| fun (t, io) -> p <- (P.mappend Unit.mappend) p (runAllNows (t, io))
            <| TimeLine.runTo (tf()) tl
        let l = TimeLine.fromPith mappend p
        schedule (Option.mappend (TimeLine.mappend mappend) l  r)
    fun io ->
        let canceled = ref false
        let now = tf()
        let io = map canceled (Time.zero - now) io
        schedule << TimeLine.fromPith mappend <| runAllNows (now, io)
        Disposable.return' <| fun () -> canceled.Value <- true
