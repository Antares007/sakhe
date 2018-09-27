module Sakhe.Scheduler
open System
open Sakhe

type T =
    private
    | Scheduler of IO.T<Time.T, O, unit>
and O =
    | Now of T
    | Delay of Time.Delay * T

let return' f = Scheduler << IO.return' <| f

let mappend (Scheduler l) (Scheduler r) =
    Scheduler <| IO.mappend (fun () () -> ()) l r

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)

let private toFlatTimeLineIO now (Scheduler io) = IO.return' <| fun () o ->
    let o = O.proxy o
    let rec go io = IO.run now o (IO.pmap ring io)
    and ring p o = p <| function
        | Now (Scheduler io) -> go io
        | Delay (delay, io) -> o <| (delay + now, io)
    go io

let private runFlatTimeLineIO io =
    let o =
        Map.empty |> O.return' (fun map (time, r) ->
            map |> match Map.tryFind time map with
                    | Some l -> Map.add time (mappend l r)
                    | None -> Map.add time r)
    IO.run () o io
    TimeLine.return' o.Value

let private from now (io) =
    runFlatTimeLineIO <| toFlatTimeLineIO now io

let private runTo now l =
    let (io, l) = l |> TimeLine.foldUntil now (fun l (now, r) ->
        IO.mappend (fun () () -> ()) l (toFlatTimeLineIO now r)) (IO.empty)
    let r = runFlatTimeLineIO io
    match l, r with
    | None, None -> None
    | Some l, None -> Some l
    | None, Some r -> Some r
    | Some l, Some r -> Some <| TimeLine.merge mappend l r

let run tf timer io =
    let now = Time.zero
    let offSet = now - tf()
    let settable = new Disposable.SettableDisposable()

    let rec nextRun now = function
        | None -> ()
        | Some timeline ->
            printfn "setTimeOut %A" now
            settable.Set << timer (Time.Delay.fromTo now (TimeLine.nextArrival timeline)) <| fun () ->
                let now = offSet + tf()
                printfn "timeOut %A" now
                nextRun now (runTo now timeline)

    nextRun now <| from now io
    settable :> IDisposable
