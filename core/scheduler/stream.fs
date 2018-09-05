namespace Sakhe.Stream
open Sakhe.Scheduler

type Offset = Time
type Delay = Time
type Period = Time

module Scheduler =
    type T = Scheduler of (Offset * Delay * Period * Task.T<Time> -> Disposable)

    let schedule (offset: Time) (delay: Time) (period: Time) (task: Task.T<Time>) (scheduler: T): Disposable =
        failwith ""

module Stream =
    open Sakhe.Stream

    type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable)

    let return' f = Stream f

module Test =
    let see = Stream.return' <| fun (sink, scheduler) ->
        Sink.event' 1.0 "a" sink
        Scheduler.schedule 0. 0. -1. (Task.return' (unbox 1)) scheduler
