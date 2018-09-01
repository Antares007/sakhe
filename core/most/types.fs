namespace Fable.Import.Most
open Fable.Core
open Fable.Import.JS

type Time = float

type Delay = float

type Period = float

type Offset = float

type [<AllowNullLiteral>] ``Sink``<'A> =
    abstract ``event``: Time * 'A -> unit
    abstract ``end``: Time -> unit
    abstract ``error``: Time * Error -> unit

type [<AllowNullLiteral>] ``Disposable`` =
    abstract ``dispose``: unit -> unit

type [<AllowNullLiteral>] ``Task`` =
    inherit Disposable
    abstract ``run``: Time -> unit
    abstract ``error``: Time * Error -> unit

type [<AllowNullLiteral>] ``ScheduledTask`` =
    inherit Disposable
    abstract ``task``: Task with get, set
    abstract ``run``: unit -> unit
    abstract ``error``: Error -> unit

type [<AllowNullLiteral>] ``Scheduler`` =
    abstract ``currentTime``: unit -> Time
    abstract ``scheduleTask``: Offset * Delay * Period * Task -> ScheduledTask
    abstract ``relative``: Offset -> Scheduler
    abstract ``cancel``: ScheduledTask -> unit
    [<System.Obsolete>]
    abstract ``cancelAll``: (ScheduledTask -> bool) -> unit

type [<AllowNullLiteral>] ``Stream``<'A> =
    abstract ``run``: Sink<'A> * Scheduler -> Disposable
