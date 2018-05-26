module Fable.Import.Most.Scheduler
open Fable.Import.Most

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
