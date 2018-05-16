namespace MostTypes

open Fable.Core
open Fable.Import.JS


type Time = float

type [<AllowNullLiteral>] Clock =
    abstract now: unit -> Time

type [<AllowNullLiteral>] Sink<'A> =
    abstract ``event``: time: Time * value: 'A -> unit
    abstract ``end``: time: Time -> unit
    abstract error: time: Time * err: Error -> unit


type Delay = float
type Period = float
type Offset = float
type Handle = obj option

type [<AllowNullLiteral>] Disposable =
    abstract dispose: unit -> unit

type [<AllowNullLiteral>] Task =
    inherit Disposable
    abstract run: time: Time -> unit
    abstract error: time: Time * e: Error -> unit

type [<AllowNullLiteral>] ScheduledTask =
    inherit Disposable
    abstract task: Task with get, set
    abstract run: unit -> unit
    abstract error: err: Error -> unit

type [<AllowNullLiteral>] Scheduler =
    abstract currentTime: unit -> Time
    abstract scheduleTask: offset: Offset * delay: Delay * period: Period * task: Task -> ScheduledTask
    abstract relative: offset: Offset -> Scheduler
    abstract cancel: task: ScheduledTask -> unit
    abstract cancelAll: predicate: (ScheduledTask -> bool) -> unit

type [<AllowNullLiteral>] Stream<'A> =
    abstract run: sink: Sink<'A> * scheduler: Scheduler -> Disposable

type [<AllowNullLiteral>] Timer =
    abstract now: unit -> Time
    abstract setTimer: f: (unit -> obj option) * delayTime: Delay -> Handle
    abstract clearTimer: timerHandle: Handle -> unit

type [<AllowNullLiteral>] TaskRunner =
    [<Emit "$0($1...)">] abstract Invoke: st: ScheduledTask -> obj option

type [<AllowNullLiteral>] Timeline =
    abstract add: scheduledTask: ScheduledTask -> unit
    abstract remove: scheduledTask: ScheduledTask -> bool
    abstract removeAll: f: (ScheduledTask -> bool) -> unit
    abstract isEmpty: unit -> bool
    abstract nextArrival: unit -> Time
    abstract runTasks: time: Time * runTask: TaskRunner -> unit

module Core =
    type [<AllowNullLiteral>] MulticastSource<'A> =
        inherit Stream<'A>
        inherit Sink<'A>
        inherit Disposable
        abstract source: Stream<'A> with get, set
        abstract sinks: Array<Sink<'A>> with get, set
        abstract disposable: Disposable with get, set
        abstract run: sink: Sink<'A> * scheduler: Scheduler -> Disposable
        abstract ``event``: time: Time * value: 'A -> unit
        abstract error: time: Time * error: Error -> unit
        abstract ``end``: time: Time -> unit
        abstract add: sink: Sink<'A> -> int
        abstract remove: sink: Sink<'A> -> int
        abstract dispose: unit -> unit

    type [<AllowNullLiteral>] MulticastSourceStatic =
        [<Emit "new $0($1...)">] abstract Create: source: Stream<'A> -> MulticastSource<'A>

    type RunStream<'A> = Sink<'A> -> Scheduler -> Disposable

    type [<AllowNullLiteral>] IExports =

        //abstract combineArray: fn: ('A -> 'B -> 'R) * streams: Stream<'A> * Stream<'B> -> Stream<'R>
        //abstract combineArray: fn: ('A -> 'B -> 'C -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> -> Stream<'R>
        //abstract combineArray: fn: ('A -> 'B -> 'C -> 'D -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> -> Stream<'R>
        //abstract combineArray: fn: ('A -> 'B -> 'C -> 'D -> 'E -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> * Stream<'E> -> Stream<'R>
        //abstract combineArray: fn: (ResizeArray<'V> -> 'R) * items: ResizeArray<Stream<'V>> -> Stream<'R>
        //abstract combineArray: fn: ('A -> 'B -> 'R) -> (Stream<'A> * Stream<'B> -> Stream<'R>)
        //abstract combineArray: fn: ('A -> 'B -> 'C -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> -> Stream<'R>)
        //abstract combineArray: fn: ('A -> 'B -> 'C -> 'D -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> -> Stream<'R>)
        //abstract combineArray: fn: ('A -> 'B -> 'C -> 'D -> 'E -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> * Stream<'E> -> Stream<'R>)
        //abstract combineArray: fn: (ResizeArray<'V> -> 'R) -> (ResizeArray<Stream<'V>> -> Stream<'R>)

        [<Emit("$0.combineArray((...list) => $1(list), $2)")>]
        abstract combineArray: f: ('a[] -> 'b) -> Stream<'a>[] -> Stream<'b>

        abstract MulticastSource: MulticastSourceStatic

        // abstract zipArray: fn: ('A -> 'B -> 'R) * streams: Stream<'A> * Stream<'B> -> Stream<'R>
        // abstract zipArray: fn: ('A -> 'B -> 'C -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> -> Stream<'R>
        // abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> -> Stream<'R>
        // abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'E -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> * Stream<'E> -> Stream<'R>
        // abstract zipArray: fn: (ResizeArray<'V> -> 'R) * items: ResizeArray<Stream<'V>> -> Stream<'R>
        // abstract zipArray: fn: ('A -> 'B -> 'R) -> (Stream<'A> * Stream<'B> -> Stream<'R>)
        // abstract zipArray: fn: ('A -> 'B -> 'C -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> -> Stream<'R>)
        // abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> -> Stream<'R>)
        // abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'E -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> * Stream<'E> -> Stream<'R>)
        // abstract zipArray: fn: (ResizeArray<'V> -> 'R) -> (ResizeArray<Stream<'V>> -> Stream<'R>)

    let require: IExports = Fable.Core.JsInterop.importAll "@most/core"

module Disposable =
    type [<AllowNullLiteral>] IExports =
        abstract disposeNone: unit -> Disposable
        abstract disposeWith: dispose: ('R -> unit) * resource: 'R -> Disposable
        abstract disposeWith: dispose: ('R -> unit) -> ('R -> Disposable)
        abstract disposeOnce: d: Disposable -> Disposable
        abstract disposeBoth: d1: Disposable * d2: Disposable -> Disposable
        abstract disposeBoth: d1: Disposable -> (Disposable -> Disposable)
        abstract disposeAll: ds: Disposable [] -> Disposable
        [<Emit("$0.disposeWith($1, void 0)")>]
        abstract create: dispose: (unit -> unit) -> Disposable
        abstract dispose: d: Disposable -> unit
        abstract tryDispose: t: Time * disposable: Disposable * sink: Sink<obj option> -> unit
        abstract tryDispose: t: Time -> (Disposable -> Sink<obj option> -> unit)
        abstract tryDispose: t: Time * disposable: Disposable -> (Sink<obj option> -> unit)

    let require: IExports = Fable.Core.JsInterop.importAll "@most/disposable"
