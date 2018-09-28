module Sakhe.Scheduler
open System
open Fable.Core
open Sakhe

type T =
    private
    | Scheduler of IO.T<Time.T, O, unit>
and O =
    | Now of T
    | Delay of Time.Delay * T
    | Dispose of IDisposable

let return' f = Scheduler << IO.return' <| f

let mappend (Scheduler l) (Scheduler r) =
    Scheduler <| IO.mappend Unit.mappend l r

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)

let private toFlatTimeLineIO now (Scheduler io) = IO.return' <| fun () o ->
    let o = O.proxy o
    let rec go io = IO.run now o (IO.pmap ring io)
    and ring p o = p <| function
        | Now (Scheduler io) -> go io
        | Delay (delay, io)  -> o << U2.Case1 <| (delay + now, io)
        | Dispose d          -> o << U2.Case2 <| d
    go io

let private runFlatTimeLineIO io =
    let o =
        (None, Map.empty) |> O.return' (fun (d, map) -> function
            | U2.Case1 (time, r) ->
                        let map =
                            map |>
                            match Map.tryFind time map with
                                | Some l -> Map.add time (mappend l r)
                                | None -> Map.add time r
                        (d, map)
            | U2.Case2 (l) -> (Option.mappend Disposable.append (Some l) d, map))
    IO.run () o io
    let (d, map) = o.Value
    (d, TimeLine.return' map)

let private from now (io) =
    runFlatTimeLineIO <| toFlatTimeLineIO now io

let private runTo now l =
    let (io, l) = l |> TimeLine.foldUntil now (fun l (now, r) ->
        IO.mappend Unit.mappend l (toFlatTimeLineIO now r)) (IO.empty)
    let (d, r) = runFlatTimeLineIO io
    d, Option.mappend (TimeLine.mappend mappend) l r

open Fable.Core.JsInterop
let timeStamp (s: string): unit =
    Fable.Import.JS.console?timeStamp(s)

let run tf timer io =
    let now = Time.zero
    let offSet = now - tf()
    let settable = new Disposable.SettableDisposable()

    let rec nextRun now = function
        | None -> ()
        | Some timeline ->

            timeStamp <| sprintf "setTimeOut %A" now
            settable.Set << timer (Time.Delay.fromTo now (TimeLine.nextArrival timeline)) <| fun () ->
                let now = offSet + tf()

                timeStamp <| sprintf "timeOut %A" now
                let (d, tl) = runTo now timeline
                nextRun now tl

    let (d, tl) = from now io
    nextRun now <| tl
    settable :> IDisposable
