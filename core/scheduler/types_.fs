namespace Sakhe.Scheduler
type ``Disposable`` =
    abstract ``dispose``: unit -> unit

type Time = float

type ITask =
    inherit Disposable
    abstract ``run``: Time -> unit
    abstract ``error``: Time * exn -> unit

type IScheduledTask =
    abstract ``active``: bool with get, set
    abstract ``time``: float
    abstract ``run``: unit -> unit
    abstract ``error``: exn -> unit

type IScheduler =
    abstract ``cancel``: IScheduledTask -> unit

type IClock =
    abstract ``now``: unit -> float

type TimerToken =
    private
    | Asap of IScheduledTask
    | Timer of Fable.Import.JS.SetTimeoutToken

type ITimer =
    abstract ``now``: unit -> Time
    abstract ``setTimer``: (unit -> unit) * Time -> TimerToken
    abstract ``clearTimer``: TimerToken -> unit

type ITimeline =
    abstract ``add``: IScheduledTask -> unit
    abstract ``remove``: IScheduledTask -> bool
    abstract ``isEmpty``: unit -> bool
    abstract ``nextArrival``: unit -> Time
    abstract ``runTasks``: Time * (IScheduledTask -> unit) -> unit
