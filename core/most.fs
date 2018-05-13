namespace Most

open Fable.Core
open Fable.Import.JS
open System

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

type [<AllowNullLiteral>] Task =
    inherit IDisposable
    abstract run: time: Time -> unit
    abstract error: time: Time * e: Error -> unit

type [<AllowNullLiteral>] ScheduledTask =
    inherit IDisposable
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
    abstract run: sink: Sink<'A> * scheduler: Scheduler -> IDisposable

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

module rec Core =
    type PropagateTaskRun<'A, 'B> = Time * 'A * Sink<'B> -> unit

    type PropagateTask<'B> =
        PropagateTask<obj, 'B>

    type [<AllowNullLiteral>] PropagateTask<'A, 'B> =
        inherit Task
        abstract value: 'A with get, set
        abstract sink: Sink<'B> with get, set
        abstract active: bool with get, set


    type [<AllowNullLiteral>] SeedValue<'S, 'V> =
        abstract seed: 'S with get, set
        abstract value: 'V with get, set

    type [<AllowNullLiteral>] MulticastSource<'A> =
        inherit Stream<'A>
        inherit Sink<'A>
        inherit IDisposable
        abstract source: Stream<'A> with get, set
        abstract sinks: Array<Sink<'A>> with get, set
        abstract disposable: IDisposable with get, set
        abstract run: sink: Sink<'A> * scheduler: Scheduler -> IDisposable
        abstract ``event``: time: Time * value: 'A -> unit
        abstract error: time: Time * error: Error -> unit
        abstract ``end``: time: Time -> unit
        abstract add: sink: Sink<'A> -> int
        abstract remove: sink: Sink<'A> -> int
        abstract dispose: unit -> unit

    type [<AllowNullLiteral>] MulticastSourceStatic =
        [<Emit "new $0($1...)">] abstract Create: source: Stream<'A> -> MulticastSource<'A>

    type RunStream<'A> = Sink<'A> -> Scheduler -> IDisposable

    type [<AllowNullLiteral>] IExports =
        abstract runEffects: stream: Stream<'T> * scheduler: Scheduler -> Promise<unit>
        abstract runEffects: stream: Stream<'T> -> (Scheduler -> Promise<unit>)

        abstract run: sink: Sink<'A> * scheduler: Scheduler * s: Stream<'A> -> IDisposable
        abstract run: sink: Sink<'A> -> (Scheduler -> Stream<'A> -> IDisposable)
        abstract run: sink: Sink<'A> * scheduler: Scheduler -> (Stream<'A> -> IDisposable)

        abstract propagateTask: run: PropagateTaskRun<'A, 'B> * value: 'A * sink: Sink<'B> -> PropagateTask<'A, 'B>
        abstract propagateTask: run: PropagateTaskRun<'A, 'B> * value: 'A -> (Sink<'B> -> PropagateTask<'A, 'B>)
        abstract propagateTask: run: PropagateTaskRun<'A, 'B> -> ('A -> Sink<'B> -> PropagateTask<'A, 'B>)
        abstract propagateEventTask: value: 'T * sink: Sink<'T> -> PropagateTask<'T>
        abstract propagateEventTask: value: 'T -> (Sink<'T> -> PropagateTask<'T>)
        abstract propagateEndTask: sink: Sink<'T> -> PropagateTask<unit>
        abstract propagateErrorTask: error: Error * sink: Sink<obj option> -> PropagateTask<obj option>
        abstract propagateErrorTask: error: Error -> (Sink<obj option> -> PropagateTask<obj option>)

        abstract ap: streamofFunctions: Stream<('A -> 'B)> * streamOfValues: Stream<'A> -> Stream<'B>
        abstract ap: streamofFunctions: Stream<('A -> 'B)> -> (Stream<'A> -> Stream<'B>)

        abstract chain: f: ('A -> Stream<'B>) * stream: Stream<'A> -> Stream<'B>
        abstract chain: f: ('A -> Stream<'B>) -> (Stream<'A> -> Stream<'B>)
        abstract join: higherOrderStream: Stream<Stream<'A>> -> Stream<'A>

        abstract combine: fn: ('A -> 'B -> 'R) * a: Stream<'A> * b: Stream<'B> -> Stream<'R>
        abstract combine: fn: ('A -> 'B -> 'R) -> (Stream<'A> -> Stream<'B> -> Stream<'R>)
        abstract combine: fn: ('A -> 'B -> 'R) * a: Stream<'A> -> (Stream<'B> -> Stream<'R>)

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
        abstract combineArray: fn: ('V[] -> 'R) -> Stream<'V>[] -> Stream<'R>

        abstract concatMap: f: ('A -> Stream<'B>) * stream: Stream<'A> -> Stream<'B>
        abstract concatMap: f: ('A -> Stream<'B>) -> (Stream<'A> -> Stream<'B>)

        abstract continueWith: f: (obj option -> Stream<'A>) * s: Stream<'A> -> Stream<'A>
        abstract continueWith: f: (obj option -> Stream<'A>) -> (Stream<'A> -> Stream<'A>)

        abstract delay: dt: int * s: Stream<'A> -> Stream<'A>
        abstract delay: dt: int -> (Stream<'A> -> Stream<'A>)

        abstract recoverWith: p: ('E -> Stream<'A>) * s: Stream<'A> -> Stream<'A>
        abstract recoverWith: p: ('E -> Stream<'A>) -> (Stream<'A> -> Stream<'A>)
        abstract throwError: e: Error -> Stream<obj option>

        abstract filter: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
        abstract filter: p: ('A -> bool) -> (Stream<'A> -> Stream<'A>)
        abstract skipRepeats: s: Stream<'A> -> Stream<'A>
        abstract skipRepeatsWith: eq: ('A -> 'A -> bool) * s: Stream<'A> -> Stream<'A>
        abstract skipRepeatsWith: eq: ('A -> 'A -> bool) -> (Stream<'A> -> Stream<'A>)

        abstract throttle: period: int * s: Stream<'A> -> Stream<'A>
        abstract throttle: period: int -> (Stream<'A> -> Stream<'A>)
        abstract debounce: period: int * s: Stream<'A> -> Stream<'A>
        abstract debounce: period: int -> (Stream<'A> -> Stream<'A>)

        abstract loop: f: ('S -> 'A -> SeedValue<'S, 'B>) * seed: 'S * s: Stream<'A> -> Stream<'B>
        abstract loop: f: ('S -> 'A -> SeedValue<'S, 'B>) -> ('S -> Stream<'A> -> Stream<'B>)
        abstract loop: f: ('S -> 'A -> SeedValue<'S, 'B>) * seed: 'S -> (Stream<'A> -> Stream<'B>)

        abstract merge: s1: Stream<'A> * s2: Stream<'A> -> Stream<'A>
        abstract merge: s1: Stream<'A> -> (Stream<'A> -> Stream<'A>)
        abstract mergeArray: streams: Stream<'A>[] -> Stream<'A>

        abstract mergeConcurrently: concurrency: int * s: Stream<Stream<'A>> -> Stream<'A>
        abstract mergeConcurrently: concurrency: int -> (Stream<Stream<'A>> -> Stream<'A>)

        abstract multicast: s: Stream<'A> -> Stream<'A>
        abstract MulticastSource: MulticastSourceStatic

        abstract awaitPromises: stream: Stream<Promise<'A>> -> Stream<'A>
        abstract fromPromise: promise: Promise<'A> -> Stream<'A>

        abstract scan: f: ('B -> 'A -> 'B) * b: 'B * s: Stream<'A> -> Stream<'B>
        abstract scan: f: ('B -> 'A -> 'B) -> ('B -> Stream<'A> -> Stream<'B>)
        abstract scan: f: ('B -> 'A -> 'B) * b: 'B -> (Stream<'A> -> Stream<'B>)

        abstract take: n: int * s: Stream<'A> -> Stream<'A>
        abstract take: n: int -> (Stream<'A> -> Stream<'A>)
        abstract skip: n: int * s: Stream<'A> -> Stream<'A>
        abstract skip: n: int -> (Stream<'A> -> Stream<'A>)
        abstract takeWhile: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
        abstract takeWhile: p: ('A -> bool) -> (Stream<'A> -> Stream<'A>)
        abstract skipWhile: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
        abstract skipWhile: p: ('A -> bool) -> (Stream<'A> -> Stream<'A>)
        abstract skipAfter: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
        abstract skipAfter: p: ('A -> bool) -> (Stream<'A> -> Stream<'A>)
        abstract slice: start: int * ``end``: int * s: Stream<'A> -> Stream<'A>
        abstract slice: start: int -> (int -> Stream<'A> -> Stream<'A>)
        abstract slice: start: int * ``end``: int -> (Stream<'A> -> Stream<'A>)

        abstract sample: values: Stream<'A> * sampler: Stream<'B> -> Stream<'A>
        abstract sample: values: Stream<'A> -> (Stream<'B> -> Stream<'A>)
        abstract snapshot: f: ('A -> 'B -> 'C) * values: Stream<'A> * sampler: Stream<'B> -> Stream<'C>
        abstract snapshot: f: ('A -> 'B -> 'C) -> (Stream<'A> -> Stream<'B> -> Stream<'C>)
        abstract snapshot: f: ('A -> 'B -> 'C) * values: Stream<'A> -> (Stream<'B> -> Stream<'C>)

        abstract startWith: value: 'A * stream: Stream<'A> -> Stream<'A>
        abstract startWith: value: 'A -> (Stream<'A> -> Stream<'A>)

        abstract switchLatest: s: Stream<Stream<'A>> -> Stream<'A>

        abstract until: signal: Stream<obj option> * s: Stream<'A> -> Stream<'A>
        abstract until: signal: Stream<obj option> -> (Stream<'A> -> Stream<'A>)
        abstract since: signal: Stream<obj option> * s: Stream<'A> -> Stream<'A>
        abstract since: signal: Stream<obj option> -> (Stream<'A> -> Stream<'A>)
        abstract during: timeWindow: Stream<Stream<obj option>> * s: Stream<'A> -> Stream<'A>
        abstract during: timeWindow: Stream<Stream<obj option>> -> (Stream<'A> -> Stream<'A>)

        abstract map: f: ('A -> 'B) * s: Stream<'A> -> Stream<'B>
        abstract map: f: ('A -> 'B) -> (Stream<'A> -> Stream<'B>)
        abstract tap: f: ('A -> unit) * s: Stream<'A> -> Stream<'A>
        abstract tap: f: ('A -> unit) -> (Stream<'A> -> Stream<'A>)
        abstract constant: b: 'B * s: Stream<'A> -> Stream<'B>
        abstract constant: b: 'B -> (Stream<'A> -> Stream<'B>)

        abstract withLocalTime: origin: Time * s: Stream<'A> -> Stream<'A>
        abstract withLocalTime: origin: Time -> (Stream<'A> -> Stream<'A>)

        abstract zip: fn: ('A -> 'B -> 'R) * a: Stream<'A> * b: Stream<'B> -> Stream<'R>
        abstract zip: fn: ('A -> 'B -> 'R) -> (Stream<'A> -> Stream<'B> -> Stream<'R>)
        abstract zip: fn: ('A -> 'B -> 'R) * a: Stream<'A> -> (Stream<'B> -> Stream<'R>)
        abstract zipArray: fn: ('A -> 'B -> 'R) * streams: Stream<'A> * Stream<'B> -> Stream<'R>
        abstract zipArray: fn: ('A -> 'B -> 'C -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> -> Stream<'R>
        abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> -> Stream<'R>
        abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'E -> 'R) * streams: Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> * Stream<'E> -> Stream<'R>
        abstract zipArray: fn: (ResizeArray<'V> -> 'R) * items: ResizeArray<Stream<'V>> -> Stream<'R>
        abstract zipArray: fn: ('A -> 'B -> 'R) -> (Stream<'A> * Stream<'B> -> Stream<'R>)
        abstract zipArray: fn: ('A -> 'B -> 'C -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> -> Stream<'R>)
        abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> -> Stream<'R>)
        abstract zipArray: fn: ('A -> 'B -> 'C -> 'D -> 'E -> 'R) -> (Stream<'A> * Stream<'B> * Stream<'C> * Stream<'D> * Stream<'E> -> Stream<'R>)
        abstract zipArray: fn: (ResizeArray<'V> -> 'R) -> (ResizeArray<Stream<'V>> -> Stream<'R>)

        abstract zipItems: f: ('A -> 'B -> 'C) * a: Array<'A> * s: Stream<'B> -> Stream<'C>
        abstract zipItems: f: ('A -> 'B -> 'C) -> (Array<'A> -> Stream<'B> -> Stream<'C>)
        abstract zipItems: f: ('A -> 'B -> 'C) * a: Array<'A> -> (Stream<'B> -> Stream<'C>)
        abstract withItems: a: Array<'A> * s: Stream<obj option> -> Stream<'A>
        abstract withItems: a: Array<'A> -> (Stream<obj option> -> Stream<'A>)

        abstract never: unit -> Stream<obj option>

        abstract empty: unit -> Stream<obj option>

        abstract now: a: 'A -> Stream<'A>

        abstract at: t: Time * a: 'A -> Stream<'A>
        abstract at: t: Time -> ('A -> Stream<'A>)

        abstract newStream: run: RunStream<'A> -> Stream<'A>

        abstract periodic: period: int -> Stream<unit>

    let require: IExports = Fable.Core.JsInterop.importAll "@most/core"

module Scheduler =
    type [<AllowNullLiteral>] IExports =
        abstract newScheduler: timer: Timer * timeline: Timeline -> Scheduler
        abstract newScheduler: timer: Timer -> (Timeline -> Scheduler)
        abstract newDefaultScheduler: unit -> Scheduler
        abstract schedulerRelativeTo: offset: Offset * scheduler: Scheduler -> Scheduler
        abstract schedulerRelativeTo: offset: Offset -> (Scheduler -> Scheduler)
        abstract newClockTimer: clock: Clock -> Timer
        abstract newTimeline: unit -> Timeline
        abstract newPlatformClock: unit -> Clock
        abstract newPerformanceClock: unit -> Clock
        abstract newDateClock: unit -> Clock
        abstract newHRTimeClock: unit -> Clock
        abstract clockRelativeTo: clock: Clock -> Clock
        abstract currentTime: scheduler: Scheduler -> Time
        abstract asap: task: Task * scheduler: Scheduler -> ScheduledTask
        abstract asap: task: Task -> (Scheduler -> ScheduledTask)
        abstract delay: delay: Delay * task: Task * scheduler: Scheduler -> ScheduledTask
        abstract delay: delay: Delay -> (Task -> Scheduler -> ScheduledTask)
        abstract delay: delay: Delay * task: Task -> (Scheduler -> ScheduledTask)
        abstract periodic: period: Period * task: Task * scheduler: Scheduler -> ScheduledTask
        abstract periodic: period: Period -> (Task -> Scheduler -> ScheduledTask)
        abstract periodic: period: Period * task: Task -> (Scheduler -> ScheduledTask)
        abstract cancelTask: scheduledTask: ScheduledTask -> unit
        abstract cancelAllTasks: predicate: (ScheduledTask -> bool) * scheduler: Scheduler -> unit
        abstract cancelAllTasks: predicate: (ScheduledTask -> bool) -> (Scheduler -> unit)

    let require: IExports = Fable.Core.JsInterop.importAll "@most/scheduler"

module Disposable =
    type [<AllowNullLiteral>] IExports =
        abstract disposeNone: unit -> IDisposable
        abstract disposeWith: dispose: ('R -> unit) * resource: 'R -> IDisposable
        abstract disposeWith: dispose: ('R -> unit) -> ('R -> IDisposable)
        abstract disposeOnce: d: IDisposable -> IDisposable
        abstract disposeBoth: d1: IDisposable * d2: IDisposable -> IDisposable
        abstract disposeBoth: d1: IDisposable -> (IDisposable -> IDisposable)
        abstract disposeAll: ds: IDisposable [] -> IDisposable
        abstract dispose: d: IDisposable -> unit
        abstract tryDispose: t: Time * disposable: IDisposable * sink: Sink<obj option> -> unit
        abstract tryDispose: t: Time -> (IDisposable -> Sink<obj option> -> unit)
        abstract tryDispose: t: Time * disposable: IDisposable -> (Sink<obj option> -> unit)

    let require: IExports = Fable.Core.JsInterop.importAll "@most/disposable"
