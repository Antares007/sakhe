module Fable.Import.Most.Scheduler
open Fable.Core
open Fable.Import.Most

type Handle = obj option

type [<AllowNullLiteral>] ``Clock`` =
    abstract ``now``: unit -> Time

type [<AllowNullLiteral>] ``Timer`` =
    abstract ``now``: unit -> Time
    abstract ``setTimer``: (unit -> obj option) -> Delay -> Handle
    abstract ``clearTimer``: Handle -> unit

type [<AllowNullLiteral>] ``Timeline`` =
    abstract ``add``: ScheduledTask -> unit
    abstract ``remove``: ScheduledTask -> bool
    [<System.Obsolete>]
    abstract ``removeAll``: (ScheduledTask -> bool) -> unit
    abstract ``isEmpty``: unit -> bool
    abstract ``nextArrival``: unit -> Time
    abstract ``runTasks``: Time -> (ScheduledTask -> unit) -> unit

type [<AllowNullLiteral>] IExports =
    abstract ``newScheduler``: Timer -> Timeline -> Scheduler
    abstract ``newDefaultScheduler``: unit -> Scheduler
    abstract ``schedulerRelativeTo``: Offset -> Scheduler -> Scheduler
    abstract ``newClockTimer``: Clock -> Timer
    abstract ``newTimeline``: unit -> Timeline
    abstract ``newPlatformClock``: unit -> Clock
    abstract ``newPerformanceClock``: unit -> Clock
    abstract ``newDateClock``: unit -> Clock
    abstract ``newHRTimeClock``: unit -> Clock
    abstract ``clockRelativeTo``: Clock -> Clock
    abstract ``currentTime``: Scheduler -> Time
    abstract ``asap``: Task -> Scheduler -> ScheduledTask
    abstract ``delay``: Delay -> Task -> Scheduler -> ScheduledTask
    abstract ``periodic``: Period -> Task -> Scheduler -> ScheduledTask
    abstract ``cancelTask``: ScheduledTask -> unit
    abstract ``cancelAllTasks``: (ScheduledTask -> bool) -> Scheduler -> unit
