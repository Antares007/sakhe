namespace Sakhe.S.Stream
open Sakhe.S
open System.Threading.Tasks

[<AutoOpen>]
module GenericListExtensions =
    open Fable.Core

    type System.Collections.Generic.List<'a> with
        [<Emit("$0.length")>]
        member __.``length``: int = jsNative

        [<Emit("$0.slice($1, $2)")>]
        member __.``slice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
        [<Emit("$0.slice($1)")>]
        member __.``slice`` (_: int): ResizeArray<'a> = jsNative

        [<Emit("$0.splice($1, $2)")>]
        member __.``splice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
        [<Emit("$0.splice($1, $2, $3)")>]
        member __.``splice`` ((_: int), (_: int), (_: 'a)): ResizeArray<'a> = jsNative

module Timeline =

    type Time = Sink.Time
    type T = private Timeline of ResizeArray<Time * Task.T<unit>>

    let private findAppendPosition (time: Time) (a: ResizeArray<Time * 'a>) =
        let rec go l r =
            if l < r then
                let m = (l + r) / 2
                if fst a.[m] > time then go l       m
                else                     go (m + 1) r
            else l - 1
        go 0 (a.length)

    let empty () = Timeline <| ResizeArray()

    let add time task (Timeline timeline) =
        let i = findAppendPosition time timeline
        if i = -1 then timeline.splice (0, 0, (time, task)) |> ignore
        else
        let (iTime, iTask) = timeline.[i]
        if iTime = time then timeline.[i] <- (time, Task.append iTask task)
        else timeline.splice (i + 1, 0, (time, task)) |> ignore

    let removeTasks time (Timeline timeline) =
        let i = findAppendPosition time timeline
        if i = -1 then None
        else
        // TODO: ?????
        if i = 0 then Some <| snd timeline.[i]
        else
        let rec go i acc =
            if i < 0 then acc
            else Task.append (snd timeline.[i]) acc
        Some <| go (i - 1) (snd timeline.[i])

module Clock =
    type Time = private Time of float
    type T = Clock of (unit -> Time)

    let return' f = Clock <| fun () ->
        let time: float = f ()
        Time <| System.Math.Floor time

    let now (Clock f) = f()

module Timer =
    open Fable.Import.JS
    type Handle = private Timeout of SetTimeoutToken | Defer of Disposable.T
    type Delay = float

    type SetTimerF = (unit -> unit) -> Delay -> Handle
    type ClearTimerF = Handle -> unit
    type NowF = unit -> Sink.Time

    type T = private Timer of NowF * SetTimerF * ClearTimerF

    let setTimer f time =
        if time > 0 then
            Timeout <| setTimeout f time
        else
            let (task, cancelDisposable) = Task.Cancelable.wrap << Task.return' <| function
                | Task.On.Run ((), source) ->
                    f()
                    Option.None
                | Task.On.Exn (a, exn) -> Option.None
            Task.deferRun task |> ignore
            Defer cancelDisposable

    let clearTimer = function
        | Timeout token -> clearTimeout token
        | Defer disposable -> Disposable.dispose disposable

module Scheduler =
    type Offset = Sink.Time
    type Delay = Sink.Time
    type Period = Sink.Time
    type SchedulerState = {

        timeline: Timeline.T }
    type T = private Scheduler of SchedulerState

    let schedule (offset: Offset) (delay: Delay) (period: Period) (task: Task.T<Sink.Time>) (scheduler: T): Disposable.T =
        failwith ""

module Stream =
    type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable.T)

    let return' f = Stream f

module Test =
    let see = Stream.return' <| fun (sink, scheduler) ->
        Sink.event' 1.0 "a" sink
        Scheduler.schedule 0. 0. -1. (Task.return' (unbox 1)) scheduler
