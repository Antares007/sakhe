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
    Scheduler <| IO.mappend Unit.mappend l r

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)

let private toFlatTimeLineIO now (Scheduler io) = IO.return' <| fun () o ->
    let o' = O.proxy o
    let rec ring p o = p <| function
        | Now (Scheduler io) -> IO.run now o' (IO.pmap ring io)
        | Delay (delay, io)  -> o <| (delay + now, io)
    IO.run now o' (IO.pmap ring io)

let private runFlatTimeLineIO io =
    let o =
        fun map (time, r) ->
                map |>
                match Map.tryFind time map with
                    | Some l -> Map.add time (mappend l r)
                    | None -> Map.add time r
        |> O.return' <| Map.empty

    IO.run () o io

    TimeLine.return' o.Value

let private from now (io) =
    runFlatTimeLineIO <| toFlatTimeLineIO now io

let private runTo now l =
    let (s, l) = TimeLine.takeUntil now l
    let io =
        s
        |> Seq.map (fun (now, io) -> Some <| toFlatTimeLineIO now io)
        |> Seq.fold (Option.mappend (IO.mappend Unit.mappend)) None

    match io, l with
    | None, None -> None
    | Some io, None -> runFlatTimeLineIO io
    | None, Some _ -> l
    | Some io, Some _ ->
        Option.mappend (TimeLine.mappend mappend) l (runFlatTimeLineIO io)

open Fable.Core.JsInterop
let timeStamp (s: string): unit =
    Fable.Import.JS.console?timeStamp(s)
    // Fable.Import.JS.console.log s

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
                nextRun now (runTo now timeline)

    nextRun now <| from now io
    settable :> IDisposable
