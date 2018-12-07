module Sakhe.Scheduler
open System
open Sakhe

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
    let rec map (canceled: bool ref) (Local io) =
        Local <| fun now ->
            if canceled.Value then Pith.empty
            else
            Pith.pmap
                <| fun p o ->
                    p <| function
                        | Now io            -> o <| O.Now (map canceled io)
                        | Delay (delay, io) -> o <| O.Delay (delay, map canceled <| io)
                <| io now

    let mappend (Local l) (Local r) = Local <| fun t -> Pith.mappend Unit.mappend (l t) (r t)
    let rec runAllNows
        (now, (Local io)) = Pith.return' <| fun o' ->
        // let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (Local io)  -> Pith.run o' (Pith.pmap ring << io <| now)
            | Delay (delay, io) -> o <| (delay + now, io)
        Pith.run o' (Pith.pmap ring << io <| now)
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
                timerd <- setTimer nextArrival
            | Some (nr, tl) when nr > nextArrival  ->
                nextRun <- Some (nextArrival, TimeLine.mappend mappend tl timeline)
                timerd.Dispose()
                timerd <- setTimer nextArrival
            | Some (nr, tl)                         ->
                nextRun <- Some (nr, TimeLine.mappend mappend tl timeline)
    and setTimer nextArrival =
        timer (Time.Delay.fromTo (tf()) nextArrival) <| fun () ->
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let mutable p = Pith.empty
            let r =
                Pith.run
                <| fun (t, io) -> p <- (Pith.mappend Unit.mappend) p (runAllNows (t, io))
                <| TimeLine.runTo (tf()) tl
            let l = TimeLine.fromPith mappend p
            schedule (Option.mappend (TimeLine.mappend mappend) l  r)
    fun io ->
        let canceled = ref false
        let io = map canceled io
        schedule << TimeLine.fromPith mappend <| runAllNows (tf(), io)
        Disposable.return' <| fun () -> canceled.Value <- true
