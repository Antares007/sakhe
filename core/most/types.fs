namespace Fable.Import.Most
open Fable.Core
open Fable.Import.JS

type Time = float

type Delay = float

type Period = float

type Offset = float

type Handle = obj option

type [<AllowNullLiteral>] ``Clock`` =
    abstract ``now``: unit -> Time

type [<AllowNullLiteral>] ``Sink``<'A> =
    abstract ``event``: time: Time * value: 'A -> unit
    abstract ``end``: time: Time -> unit
    abstract ``error``: time: Time * err: Error -> unit

type [<AllowNullLiteral>] ``Disposable`` =
    abstract ``dispose``: unit -> unit

type [<AllowNullLiteral>] ``Task`` =
    inherit Disposable
    abstract ``run``: time: Time -> unit
    abstract ``error``: time: Time * e: Error -> unit

type [<AllowNullLiteral>] ``ScheduledTask`` =
    inherit Disposable
    abstract ``task``: Task with get, set
    abstract ``run``: unit -> unit
    abstract ``error``: err: Error -> unit

type [<AllowNullLiteral>] ``Scheduler`` =
    abstract ``currentTime``: unit -> Time
    abstract ``scheduleTask``: offset: Offset * delay: Delay * period: Period * task: Task -> ScheduledTask
    abstract ``relative``: offset: Offset -> Scheduler
    abstract ``cancel``: task: ScheduledTask -> unit
    abstract ``cancelAll``: predicate: (ScheduledTask -> bool) -> unit

type [<AllowNullLiteral>] ``Stream``<'A> =
    abstract ``run``: sink: Sink<'A> * scheduler: Scheduler -> Disposable

type [<AllowNullLiteral>] ``Timer`` =
    abstract ``now``: unit -> Time
    abstract ``setTimer``: f: (unit -> obj option) * delayTime: Delay -> Handle
    abstract ``clearTimer``: timerHandle: Handle -> unit

type [<AllowNullLiteral>] ``TaskRunner`` =
    [<Emit "$0($1...)">] abstract Invoke: st: ScheduledTask -> obj option

type [<AllowNullLiteral>] ``Timeline`` =
    abstract ``add``: scheduledTask: ScheduledTask -> unit
    abstract ``remove``: scheduledTask: ScheduledTask -> bool
    abstract ``removeAll``: f: (ScheduledTask -> bool) -> unit
    abstract ``isEmpty``: unit -> bool
    abstract ``nextArrival``: unit -> Time
    abstract ``runTasks``: time: Time * runTask: TaskRunner -> unit

