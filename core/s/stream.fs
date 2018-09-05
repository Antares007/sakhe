namespace Sakhe.S.Stream
open Sakhe.S

module Scheduler =
    type Offset = Sink.Time
    type Delay = Sink.Time
    type Period = Sink.Time
    type T = Scheduler of (Offset * Delay * Period * Task.T<Sink.Time> -> Disposable.T)

    let schedule (offset: Offset) (delay: Delay) (period: Period) (task: Task.T<Sink.Time>) (scheduler: T): Disposable.T =
        failwith ""

module Stream =
    type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable.T)

    let return' f = Stream f

module Test =
    let see = Stream.return' <| fun (sink, scheduler) ->
        Sink.event' 1.0 "a" sink
        Scheduler.schedule 0. 0. -1. (Task.return' (unbox 1)) scheduler
