module Sakhe.Scheduler
open System
open Sakhe

type T =
    private
    | Scheduler of Abo.T<Time.T * Time.Offset, unit, O>
and O =
    | Now of T
    | Delay of Time.Delay * T

let return' f = Scheduler << Abo.return' <| f

let mappend (Scheduler l) (Scheduler r) =
    Scheduler <| Abo.mappend Unit.mappend l r

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)

let private toTimeLineIO now (offSet: Time.Offset) (Scheduler io) =
    fun () o ->
        let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (Scheduler io) -> Abo.run (now, offSet) o' (Abo.pmap ring io)
            | Delay (delay, io)  -> o <| (delay + (now - offSet), io)
        Abo.run (now, offSet) o' (Abo.pmap ring io)
    |> Abo.return'

let private runTimeLineIO io =
    let o =
        fun map (time, r) ->
                map |>
                match Map.tryFind time map with
                    | Some l -> Map.add time (mappend l r)
                    | None -> Map.add time r
        |> O.return' <| Map.empty
    Abo.run () o io
    TimeLine.return' o.Value

let private runTo now offSet l =
    let (s, l) = TimeLine.takeUntil (now - offSet) l
    let io =
        s
        |> Seq.map (fun (originNow, io) -> Some <| toTimeLineIO (originNow + offSet) offSet io)
        |> Seq.fold (Option.mappend (Abo.mappend Unit.mappend)) None

    match io, l with
    | None, None -> None
    | Some io, None -> runTimeLineIO io
    | None, Some _ -> l
    | Some io, Some _ ->
        Option.mappend (TimeLine.mappend mappend) l (runTimeLineIO io)

open Fable.Core.JsInterop
let timeStamp (s: string): unit =
    Fable.Import.JS.console?timeStamp(s)
    Fable.Import.JS.console.log s

let run tf timer =
    let mutable timeline = None
    let mutable nextRun: Time.T option = None
    let mutable nextRunDisposable = Disposable.empty

    let settable = new Disposable.SettableDisposable()

    let rec scheduleNextRun () =
        match nextRun, timeline with
        | None, None -> ()
        | Some nextRun, None -> ()
        | None, Some timeline ->
            let now = tf()
            let delay = Time.Delay.fromTo now (TimeLine.nextArrival timeline)
            nextRun <- Some (now + delay)
            setTimeout delay timeline
        | Some nr, Some timeline when nr <= TimeLine.nextArrival timeline -> ()
        | Some nr, Some timeline ->
            let now = tf()
            let delay = Time.Delay.fromTo now (TimeLine.nextArrival timeline)
            nextRun <- Some (now + delay)
            setTimeout delay timeline

    and setTimeout delay tl =
        let now = tf ()
        now |> sprintf "setTimeOut %A" |> timeStamp
        nextRun <- Some now
        settable.Set << timer delay <| fun () ->
            (tf (), nextRun) |> sprintf "timeOut %A" |> timeStamp
            nextRun <- None
            let now = tf()
            timeline <- runTo now (Time.Offset.return' 0.0) tl
            scheduleNextRun ()

    fun now io ->
        let offSet = now - tf()
        let mappend = Option.mappend (TimeLine.mappend mappend)

        timeline <- mappend timeline (runTimeLineIO <| toTimeLineIO now offSet io)
        scheduleNextRun ()

        settable :> IDisposable
