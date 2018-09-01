module Fable.Import.Most.Scheduler
open Fable.Core
open Fable.Import.Most

type Handle = obj option

type [<AllowNullLiteral>] ``Clock`` =
    abstract ``now``: unit -> Time

type [<AllowNullLiteral>] ``Timer`` =
    abstract ``now``: unit -> Time
    abstract ``setTimer``: (unit -> obj option) * Delay -> Handle
    abstract ``clearTimer``: Handle -> unit

type [<AllowNullLiteral>] ``TaskRunner`` =
    [<Emit "$0($1...)">] abstract Invoke: st: ScheduledTask -> obj option

type [<AllowNullLiteral>] ``Timeline`` =
    abstract ``add``: ScheduledTask -> unit
    abstract ``remove``: ScheduledTask -> bool
    [<System.Obsolete>]
    abstract ``removeAll``: (ScheduledTask -> bool) -> unit
    abstract ``isEmpty``: unit -> bool
    abstract ``nextArrival``: unit -> Time
    abstract ``runTasks``: Time * TaskRunner -> unit

type [<AllowNullLiteral>] IExports =
    abstract ``newScheduler``: timer: Timer * timeline: Timeline -> Scheduler
    abstract ``newDefaultScheduler``: unit -> Scheduler
    abstract ``schedulerRelativeTo``: offset: Offset * scheduler: Scheduler -> Scheduler
    abstract ``newClockTimer``: clock: Clock -> Timer
    abstract ``newTimeline``: unit -> Timeline
    abstract ``newPlatformClock``: unit -> Clock
    abstract ``newPerformanceClock``: unit -> Clock
    abstract ``newDateClock``: unit -> Clock
    abstract ``newHRTimeClock``: unit -> Clock
    abstract ``clockRelativeTo``: clock: Clock -> Clock
    abstract ``currentTime``: scheduler: Scheduler -> Time
    abstract ``asap``: task: Task * scheduler: Scheduler -> ScheduledTask
    abstract ``delay``: delay: Delay * task: Task * scheduler: Scheduler -> ScheduledTask
    abstract ``periodic``: period: Period * task: Task * scheduler: Scheduler -> ScheduledTask
    abstract ``cancelTask``: scheduledTask: ScheduledTask -> unit
    abstract ``cancelAllTasks``: predicate: (ScheduledTask -> bool) * scheduler: Scheduler -> unit
