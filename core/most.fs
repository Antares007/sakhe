namespace Most
open Fable.Core
open Fable.Import.JS

type Time = float
and Delay = float
and Period = float
and Offset = float
and IStream<'a> =
    abstract ``run``: 'a ISink * IScheduler -> IDisposable
and ISink<'a> =
    abstract ``event``: Time * 'a -> unit
    abstract ``error``: Time * Error -> unit
    abstract ``end``: Time -> unit
and IDisposable =
    abstract ``dispose``: unit -> unit
and IScheduler =
    abstract ``currentTime``: unit -> Time
    abstract ``scheduleTask``: Offset * Delay * Period * ITask -> IScheduledTask
    abstract ``relative``: Offset -> IScheduler
    abstract ``cancel``: IScheduledTask -> unit
    abstract ``cancelAll``: (IScheduledTask -> bool) -> unit
and IClock =
    abstract ``now``: unit -> Time
and ITimer =
    abstract ``now``: unit -> Time
    abstract ``setTimer``: (unit -> unit) * Delay -> Handle
    abstract ``clearTimer``: Handle -> unit
and ITimeline =
    abstract ``add``: IScheduledTask -> unit
    abstract ``remove``: IScheduledTask -> bool
    abstract ``removeAll``: (IScheduledTask -> bool) -> unit
    abstract ``isEmpty``: unit -> bool
    abstract ``nextArrival``: unit -> Time
    abstract ``runTasks``: Time * (IScheduledTask -> unit) -> unit
and ITask =
    inherit IDisposable
    abstract ``run``: Time -> unit
    abstract ``error``: Time * Error -> unit
and IScheduledTask =
    inherit IDisposable
    abstract ``task``: ITask with get, set
    abstract ``run``: unit -> unit
    abstract ``error``: Error -> unit
and Handle = obj

[<Fable.Core.Import("*", "@most/core")>]
module M =
    ///Activate an event `Stream` and consume all its events.
    let runEffects (_: 'a IStream) (_: IScheduler): Promise<unit> = jsNative

    ///Run a `Stream`, sending all events to the provided `Sink`. The Stream’s `Time` values come from the provided `Scheduler`.
    let run (_: 'a ISink) (_: IScheduler) (_: 'a IStream): IDisposable = jsNative

    ///Create a Stream containing no events and ends immediately.
    /// * `| = empty ()`
    let empty (_: unit): 'a IStream = jsNative

    ///Create a Stream containing no events and never ends.
    /// * `----> = never ()`
    let never (_: unit): 'a IStream = jsNative

    ///Create a Stream containing a single event at time 0.
    /// * `x| = now "x"`
    let now (_:'a): 'a IStream = JsInterop.importMember "@most/core"

    ///Create a Stream containing a single event at a specific time.
    /// * `--x| = at 3. "x"`
    let at (_: Time) (_:'a) : 'a IStream = jsNative

    ///Create an infinite Stream containing events that occur at a specified Period. The first event occurs at time 0, and the event values are undefined.
    /// * `x--x--x--x--> = periodic 3`
    let periodic (_: Period): unit IStream = jsNative

    ///Create a Stream that fails with the provided Error at time 0. This can be useful for functions that need to return a Stream and also need to propagate an error.
    /// * `X = throwError (Error.Create "")`
    let throwError (_: Error): 'a IStream = jsNative

    ///Prepend an event at time 0.
    /// * `--a-b-c-d-> = stream`
    /// * `x-a-b-c-d-> = startWith "x" stream`
    ///Note that startWith does not delay other events. If stream already contains an event at time 0, then startWith simply adds another event at time 0—the two will be simultaneous, but ordered. For example:
    /// * `a-b-c-d--> = stream`
    /// * `xa-b-c-d-> = startWith "x" stream`
    ///Both x and a occur at time 0, but x will be observed before a.
    let startWith (_: 'a) (_: 'a IStream): IStream<'a> = jsNative

    ///Replace the end of a Stream with another Stream.
    /// * `-a-b-c-d| __________ = stream`
    /// * `-1-2-3-4-5-> _______ = f()`
    /// * `-a-b-c-d-1-2-3-4-5-> = continueWith f stream`
    ///When stream ends, `f` will be called and must return a `Stream`.
    let continueWith (_: (unit -> 'a IStream)) (_: 'a IStream): IStream<'a> = jsNative

    ///Apply a function to each event value.
    ///  * `-1-2-3-> = stream`
    ///  * `-2-3-4-> = map ((+) 1) stream`
    let map (_: 'a -> 'b)  (_:'a IStream): 'b IStream = jsNative

    ///Replace each event value with x.
    /// * `-a-b-c-d-> = stream`
    /// * `-x-x-x-x-> = constant "x" stream`
    ///`constant "tick" (periodic 1000)`
    let constant (_: 'b)  (_: 'a IStream): 'b IStream = jsNative

    ///Perform a side effect for each event in a Stream.
    /// * `-a-b-c-d-> = stream`
    /// * `-a-b-c-d-> = tap (fun _ -> ()) stream`
    ///For each event in stream, f is called, but the value of its result is ignored. If f fails (i.e., throws an error), then the returned Stream will also fail. The Stream returned by tap will contain the same events as the original Stream.
    let tap (_: 'a -> unit)  (_: 'a IStream): 'a IStream = jsNative

    ///Apply the latest function in a Stream of functions to the latest value of another Stream.
    /// * `--f-----------g---------h---------> = streamOfFunctions`
    /// * `-a-------b---------c---------d----> = stream`
    /// * `-f(a)---f(b)-g(b)-g(c)-h(c)-h(d)--> = ap streamOfFunctions stream`
    ///In effect, ap applies a time-varying function to a time-varying value.
    let ap (_: ('a -> 'b) IStream) (_: 'a IStream): 'b IStream = jsNative

    ///Incrementally accumulate results, starting with the provided initial value.
    /// * `-1-2-3-> = stream`
    /// * `01-3-6-> = scan (+) 0 stream`
    let scan (_: 'b -> 'a -> 'b)  (_: 'b) (_: 'a IStream): 'b IStream = jsNative

    type [<Pojo>] SeedValue<'b, 'c> = {seed: 'b; value: 'c}

    ///Accumulate results using a feedback loop that emits one value and feeds back another to be used in the next iteration.
    ///It allows you to maintain and update a “state” (a.k.a. feedback, a.k.a. seed for the next iteration) while emitting a different value. In contrast, scan feeds back and produces the same value.
    ///Average an array of values.
    ///`const average = values =>`
    ///`      values.reduce((sum, x) => sum + x, 0) / values.length`
    ///``
    ///`const stream = // ...`
    ///``
    ///`// Emit the simple (i.e., windowed) moving average of the 10 most recent values.`
    ///`loop((values, x) => {`
    ///`      values.push(x)`
    ///`      values = values.slice(-10) // Keep up to 10 most recent`
    ///`      const avg = average(values)`
    ///``
    ///`      // Return { seed, value } pair.`
    ///`      // seed will feed back into next iteration.`
    ///`      // value will be propagated.`
    ///`      return { seed: values, value: avg }`
    ///`}, [], stream)`
    let loop (_: 'b -> 'a -> SeedValue<'b, 'c>) (_: 'b) (_: IStream<'a>): IStream<'c> = jsNative

    ///Apply a function to the latest event and the array value at the respective index.
    /// * `[ 1, 2, 3 ] ________________ = array`
    /// * `--10---10---10---10---10---> = stream`
    /// * `--11---12---13| ____________ = zipItems (+) array stream`
    ///The resulting Stream will contain the same number of events as the input Stream, or array.length events, whichever is less.
    let zipItems (_: 'a -> 'b -> 'c) (_: 'a []) (_: 'b IStream): 'c IStream = jsNative

    ///Replace each event value with the array item at the respective index.
    /// * `[ 1, 2, 3 ] ______ = array`
    /// * `--x--x--x--x--x--> = stream`
    /// * `--1--2--3| _______ = withItems array stream`
    ///The resulting Stream will contain the same number of events as the input Stream, or array.length events, whichever is less.
    let withItems (_: 'a []) (_: 'b IStream): 'a IStream = jsNative

    ///Given a higher-order Stream, return a new Stream that adopts the behavior of (i.e., emits the events of) the most recent inner Stream.
    /// * `-a-b-c-d-e-f-> = s`
    /// * `-1-2-3-4-5-6-> = t`
    /// * `-s-----t-----> = stream`
    /// * `-a-b-c-4-5-6-> = switchLatest stream`
    let switchLatest (_: 'a IStream IStream): 'a IStream = jsNative

    ///Given a higher-order Stream, return a new Stream that merges all the inner Streams as they arrive.
    /// * `---a---b---c---d--> = s`
    /// * `-1--2--3--4--5--6-> = t`
    /// * `-s------t---------> = stream`
    /// * `---a---b--4c-5-d6-> = join stream`
    let join (_: 'a IStream IStream): 'a IStream = jsNative


    ///Transform each event in stream into a new Stream, and then merge each into the resulting Stream. Note that f must return a Stream.
    /// * `-a----b----c| _______ = stream`
    /// * `.1--2--3| ___________ = f(a)`
    /// * `......1----2----3| __ = f(b)`
    /// * `.............1-2-3| _ = f(c)`
    /// * `-1--2-13---2-1-233| _ = chain f stream`
    let chain (_: ('a -> 'b IStream)) (_: 'a IStream): 'b IStream = jsNative

    ///Transform each event in stream into a Stream, and then concatenate each onto the end of the resulting Stream. Note that f must return a Stream.
    ///The mapping function f is applied lazily. That is, f is called only once it is time to concatenate a new stream.
    /// * `-a----b----c| ___________ = stream`
    /// * `.1--2--3| _______________ = f(a)`
    /// * `......1----2----3| ______ = f(b)`
    /// * `.............1-2-3| _____ = f(c)`
    /// * `-1--2--31----2----31-2-3| = concatMap f stream`
    /// * `.^......^..........^ ____ = f called lazily`
    ///Note the difference between concatMap and ref:chain: concatMap concatenates, while ref:chain merges.
    let concatMap  (_: 'a -> 'b IStream) (_: 'a IStream): 'b IStream = jsNative

    ///Given a higher-order Stream, return a new Stream that merges inner Streams as they arrive up to the specified concurrency. Once concurrency number of Streams are being merged, newly arriving Streams will be merged after an existing one ends.
    /// * `--a--b--c--d--e--> = s`
    /// * `--x------y| ______ = t`
    /// * `-1--2--3--4--5--6> = u`
    /// * `-s--t--u---------> = stream`
    /// * `--a--b--cy4d-5e-6> = mergeConcurrently 2 stream`
    ///Note that u is only merged after t ends because of the concurrency level of 2.
    ///Note also that mergeConcurrently(Infinity, stream) is equivalent to join(stream).
    ///To control concurrency, mergeConcurrently must maintain an internal queue of newly arrived Streams. If new Streams arrive faster than the concurrency level allows them to be merged, the internal queue will grow infinitely.
    let mergeConcurrently (_: int) (_: 'a IStream IStream): 'a IStream = jsNative


    ///Lazily apply a function f to each event in a Stream, merging them into the resulting Stream at the specified concurrency. Once concurrency number of Streams are being merged, newly arriving Streams will be merged after an existing one ends.
    /// * `--ab--c----d-----> = stream`
    /// * `-1-2-3| __________ = f(a)`
    /// * `-4-5-6-----------> = f(b)`
    /// * `-7---------------> = f(c)`
    /// * `-1-2-3-4-5-6-7-8-> = f(d)`
    /// * `---142536-7------> = mergeMapConcurently(f, 2, stream)`
    ///Note that f(c) is only merged after f(a) ends.
    ///Also note that f will not get called with d until either f(b) or f(c) ends.
    ///To control concurrency, mergeMapConcurrently must maintain an internal queue of newly arrived Streams. If new Streams arrive faster than the concurrency level allows them to be merged, the internal queue will grow infinitely.
    let mergeMapConcurently  (_: 'a -> 'b IStream) (_: int) (_: 'a IStream): 'b IStream = jsNative


    ///Create a new Stream containing events from two Streams.
    /// * `-a--b----c---> = s1`
    /// * `--w---x-y--z-> = s2`
    /// * `-aw-b-x-yc-z-> = merge s1 s2`
    ///Merging creates a new Stream containing all events from the two original Streams without affecting the time of the events. You can think of the events from the input Streams simply being interleaved into the new, merged Stream. A merged Stream ends when all of its input Streams have ended.
    let merge (_: 'a IStream) (_: 'a IStream): 'a IStream = jsNative

    ///Array form of merge. Create a new Stream containing all events from all Streams in the array.
    /// * `-a--b----c----> = s1`
    /// * `--w---x-y--z--> = s2`
    /// * `---1---2----3-> = s3`
    /// * `-aw1b-x2yc-z3-> = mergeArray [| s1; s2; s3 |]`
    let mergeArray (_: 'a IStream []): 'a IStream = jsNative

    ///Apply a function to the most recent event from each Stream when a new event arrives on any Stream.
    /// * `-0--1----2---> = s1`
    /// * `--3---4-5--6-> = s2`
    /// * `--3-4-5-67-8-> = combine (+) s1 s2`
    ///Note that combine waits for at least one event to arrive on all input Streams before it produces any events.
    let combine (_: 'a -> 'b -> 'c) (_: 'a IStream) (_:'b IStream): 'c IStream = jsNative


    ///Apply a function to corresponding pairs of events from the inputs Streams.
    /// * `-1--2--3--4-> __ = s1`
    /// * `-1---2---3---4-> = s2`
    /// * `-2---4---6---8-> = zip (+) s1 s2`
    ///Zipping correlates by index-corresponding events from two input streams. Note that zipping a “fast” Stream and a “slow” Stream will cause buffering. Events from the fast Stream must be buffered in memory until an event at the corresponding index arrives on the slow Stream.
    ///A zipped Stream ends when any one of its input Streams ends.
    let zip (_: 'a -> 'b -> 'c) (_: IStream<'a>) (_: IStream<'b>): IStream<'c> = jsNative

    ///For each event in a sampler Stream, replace the event value with the latest value in another Stream. The resulting Stream will contain the same number of events as the sampler Stream.
    /// * `-1--2--3--4--5-> = values`
    /// * `-1-----2-----3-> = sampler`
    /// * `-1-----3-----5-> = sample values sampler`
    /// * `-1-----2-----3-> = values`
    /// * `-1--2--3--4--5-> = sampler`
    /// * `-1--1--2--2--3-> = sample values sampler`
    let sample (_: 'a IStream) (_: 'b IStream): 'a IStream = jsNative

    ///For each event in a sampler Stream, apply a function to combine its value with the most recent event value in another Stream. The resulting Stream will contain the same number of events as the sampler Stream.
    /// * `-1--2--3--4--5-> = values`
    /// * `-1-----2-----3-> = sampler`
    /// * `-2-----5-----8-> = snapshot sum values sampler`
    /// * `-1-----2-----3-> = values`
    /// * `-1--2--3--4--5-> = sampler`
    /// * `-2--3--5--6--8-> = snapshot sum values sampler`
    ///In contrast to combine, snapshot produces a value only when an event arrives on the sampler.
    let snapshot (_: 'a -> 'b -> 'c) (_: 'a IStream) (_: 'b IStream): 'c IStream = jsNative


    ///Retain only events for which a predicate is truthy.
    /// * `-1-2-3-4-> = stream`
    /// * `---2---4-> = filter even stream`
    let filter (_: ('a -> bool)) (_: 'a IStream): 'a IStream = jsNative


    ///Remove adjacent repeated events.
    /// * `-1-2-2-3-4-4-5-> = stream`
    /// * `-1-2---3-4---5-> = skipRepeats stream`
    ///Note that === is used to identify repeated items. To use a different comparison, use skipRepeatsWith.
    let skipRepeats (_: 'a IStream): 'a IStream = jsNative

    /// Remove adjacent repeated events, using the provided equality function to compare adjacent events.
    ///
    /// * `-a-b-B-c-D-d-e-> = stream`
    /// * `-a-b---c-D---e-> = skipRepeatsWith equalsIgnoreCase stream`
    /// The equals function should return true if the two values are equal, or false if they are not equal.
    let skipRepeatsWith (_: ('a -> 'a -> bool)) (_: 'a IStream): 'a IStream = jsNative

    ///Keep only events in a range, where start <= index < end, and index is the ordinal index of an event in stream.
    /// * `-a-b-c-d-e-f-> = stream`
    /// * `---b-c-d| = slice 1 4 stream`
    /// * `-a-b-c| = stream`
    /// * `---b-c| = slice 1 4 stream`
    ///If stream contains fewer than start events, the returned Stream will be empty.
    let slice (_: int) (_: int) (_: 'a IStream): 'a IStream = jsNative

    ///Keep at most the first n events from stream.
    /// * `-a-b-c-d-e-f-> = stream`
    /// * `-a-b-c| ______ = take 3 stream`
    /// * `-a-b| ________ = stream`
    /// * `-a-b| ________ = take 3 stream`
    ///If stream contains fewer than n events, the returned Stream will effectively be equivalent to stream.
    let take (_: int) (_: 'a IStream): 'a IStream = jsNative

    ///Discard the first n events from stream.
    /// * `-a-b-c-d-e-f-> = stream`
    /// * `-------d-e-f-> = skip(3, stream)`
    /// * `-a-b-c-d-e| = stream`
    /// * `-------d-e| = skip(3, stream)`
    /// * `-a-b-c|  = stream`
    /// * `------|  = skip(3, stream)`
    ///If stream contains fewer than n events, the returned Stream will be empty.
    let skip (_: int) (_: 'a IStream): 'a IStream = jsNative

    ///Keep all events until predicate returns false, and discard the rest.
    /// * `-2-4-5-6-8-> = stream`
    /// * `-2-4-| _____ = takeWhile even stream`
    let takeWhile (_: 'a -> bool) (_: 'a IStream): 'a IStream = jsNative

    ///Discard all events until predicate returns false, and keep the rest.
    /// * `-2-4-5-6-8-> = stream`
    /// * `-----5-6-8-> = skipWhile even stream`
    let skipWhile (_: 'a -> bool) (_: 'a IStream): 'a IStream = jsNative

    ///Discard all events after the first event for which predicate returns true.
    /// * `-1-2-3-4-5-6-8-> = stream`
    /// * `-1-2| __________ = skipAfter even stream`
    let skipAfter (_: 'a -> bool) (_: 'a IStream): 'a IStream = jsNative

    ///Keep all events in one Stream until the first event occurs in another.
    /// * `-a-b-c-d-e-f-> = stream`
    /// * `------z-> ____ = endSignal`
    /// * `-a-b-c| ______ = until endSignal stream`
    ///Note that if endSignal has no events, then the returned Stream will effectively be equivalent to the original.
    ///Keep only 3 seconds of events, discard the rest.
    let until (_: 'b IStream) (_: 'a IStream): 'a IStream = jsNative

    ///Discard all events in one Stream until the first event occurs in another.
    /// * `-a-b-c-d-e-f-> = stream`
    /// * `------z-> ____ = startSignal`
    /// * `-------d-e-f-> = since startSignal stream`
    ///Note that if startSignal has no events, then the returned Stream will effectively be equivalent to never.
    ///Discard events for 3 seconds, keep the rest.
    /// * `since (at 3000. ()) stream`
    let since (_: 'b IStream) (_: 'a IStream): 'a IStream = jsNative

    ///Keep events that occur during a time window defined by a higher-order Stream.
    /// * `-a-b-c-d-e-f-g-> = stream`
    /// * `-----s`
    /// * `..... -----X ___ = timeWindow`
    /// * `-----c-d-e-| ___ = during timeWindow stream`
    ///This is similar to Slicing, but uses time rather than indices to “slice” the Stream.
    ///A time window that:
    ///1. starts at time = 1 second
    ///2. ends at time = 6 seconds (1 second + 5 seconds).
    ///`let timeWindow = at 1000. (at 5000. ())`
    ///1. Discard events for 1 second, then
    ///2. keep events for 5 more seconds, then
    ///3. discard all subsequent events.
    ///`during timeWindow stream`
    let during (_: 'b IStream IStream) (_: 'a IStream): 'a IStream = jsNative

    ///Timeshift a Stream by the specified Delay.
    /// * `-a-b-c-d-> ____ = stream`
    /// * `--a-b-c-d-> ___ = delay 1. stream`
    /// * `------a-b-c-d-> = delay 5. stream`
    ///Delaying a Stream timeshifts all the events by the same amount. It doesn’t change the time between events.
    let delay  (_: float) (_: 'a IStream): 'a IStream = jsNative

    ///Create a Stream with localized Time values, whose origin (i.e., time 0) is at the specified Time on the Scheduler provided when the Stream is observed with runEffects or run.
    ///When implementing custom higher-order Stream combinators, such as chain, you should use withLocalTime to localize “inner” Streams before running them.
    let withLocalTime (_: Time) (_: 'A IStream): 'A IStream = jsNative

    ///Limit the rate of events to at most one per n milliseconds.
    ///
    /// * `abcd----abcd----> = stream`
    /// * `a-c-----a-c-----> = throttle 2 stream`
    ///In contrast to debounce, throttle simply drops events that occur “too often”, whereas debounce waits for a “quiet period”.
    let throttle (_: int) (_: 'a IStream): 'a IStream = jsNative

    ///Wait for a burst of events to subside and keep only the last event in the burst.
    /// * `abcd----abcd----> = stream`
    /// * `-----d-------d--> = debounce 2 stream`
    ///If the Stream ends while there is a pending debounced event (e.g., via until), the pending event will occur just before the Stream ends. For example:
    /// * `abcd----abcd----> = s1`
    /// * `------------| ___ = s2`
    /// * `-----d------d| __ = debounce 2 (until s2 s1)`
    ///Debouncing can be extremely useful when dealing with bursts of similar events. For example, debouncing keypress events before initiating a remote search query in a browser application.
    ///`const searchInput = document.querySelector('[name="search-text"]');`
    ///`const searchText = most.fromEvent('input', searchInput);`
    ///The current value of the searchInput, but only
    ///after the user stops typing for 500 milliseconds.
    ///`map(e => e.target.value, debounce(500, searchText))`
    let debounce (_: int) (_: 'a IStream): 'a IStream = jsNative

    ///Create a Stream containing a promise’s value.
    /// * `----a __ = promise`
    /// * `----a| _ = fromPromise promise`
    ///If the promise rejects, the Stream will be in an error state with the promise’s rejection reason as its error. See recoverWith for error recovery.
    let fromPromise  (_: 'a Promise): 'a IStream = jsNative

    ///Turn a Stream of promises into a Stream containing the promises’ values.
    /// * `---1 _______ = promise p`
    /// * `------2 ____ = promise q`
    /// * `-3 _________ = promise r`
    /// * `-p---q---r-> = stream`
    /// * `---1--2--3-> = awaitPromises(stream)`
    ///Note that order is always preserved, regardless of promise fulfillment order.
    ///To create a Stream that merges promises in fulfillment order, use chain(fromPromise, stream). Note the difference:
    /// * `--1 ________ = promise p`
    /// * `--------2 __ = promise q`
    /// * `------3 ____ = promise r`
    /// * `-p-q-r-----> = stream`
    /// * `--1---3-2--> = chain fromPromise stream`
    /// * `--1-----23-> = awaitPromises stream`
    ///If a promise rejects, the Stream will be in an error state with the rejected promise’s reason as its error. See recoverWith for error recovery. For example:
    /// * `---1 _______ = promise p`
    /// * `------X ____ = promise q`
    /// * `-3 _________ = promise r`
    /// * `-p---q---r-> = stream`
    /// * `---1--X ____ = awaitPromises(stream)`
    let awaitPromises  (_: 'a Promise IStream): 'a IStream = jsNative

    ///Recover from a stream failure by calling a function to create a new Stream.
    ///
    /// * `-a-b-c-X _____ = s`
    /// * `.......d-e-f-> = f(X)`
    /// * `-a-b-c-d-e-f-> = recoverWith(f, s)`
    ///When s fails with an error, f will be called with the error. f must return a new Stream to replace the error.
    let recoverWith  (_: Error -> 'a IStream) (_: 'a IStream): 'a IStream = jsNative

    ///Returns a Stream equivalent to the original but which can be shared more efficiently among multiple consumers.
    /// * `-a-b-c-d-> = stream`
    /// * `-a-b-c-d-> = multicast stream`
    ///Multicast allows you to build up a stream of maps, filters, and other transformations, and then share it efficiently with multiple observers.
    let multicast (_: IStream<'A>): IStream<'A> = jsNative

    type IPropagateTask<'A, 'B> =
        inherit ITask
        abstract ``value``: 'A with get, set
        abstract ``sink``: ISink<'B> with get, set
        abstract ``active``: bool with get, set

    ///Create a `Task` to propagate a `value` to a `Sink`. When the `Task` executes, the provided function will receive the current `time` (from the `Scheduler` with which it was scheduled) and the provided `value` and `Sink`. The `Task` can use the `Sink` to propagate the `value` in whatever way it chooses. For example as an `event` or an `error`, or it could choose not to propagate the `event` based on some condition, etc.
    let propagateTask (_: Time -> 'a -> 'b ISink -> unit) (_:'a) (_: 'b ISink): IPropagateTask<'a, 'b>  = jsNative

    ///Create a `Task` that can be scheduled to propagate an event `value` to a `Sink`. When the task executes, it will call the Sink’s event method with the current `time` (from the Scheduler with which it was scheduled) and the `value`.
    let propagateEventTask (_: 'a) (_: 'a ISink): IPropagateTask<'a, 'a> = jsNative

    ///Create a `Task` that can be scheduled to propagate `end` to a `Sink`. When the task executes, it will call the Sink’s end method with the current `time` (from the Scheduler with which it was scheduled).
    let propagateEndTask (_: 'a ISink): IPropagateTask<unit, 'a> = jsNative

    ///Create a `Task` that can be scheduled to propagate an `error` to a `Sink`. When the Task executes, it will call the Sink’s error method with the current time (from the Scheduler with which it was scheduled) and the error.
    let propagateErrorTask (_: Error) (_: 'a ISink): IPropagateTask<unit, 'a> = jsNative

    let newStream (_: 'a ISink -> IScheduler -> IDisposable): 'a IStream = jsNative

[<Import("*", "@most/scheduler")>]
module Scheduler =

    ///Schedule a Task to execute as soon as possible, but still asynchronously.
    let asap (_: ITask) (_: IScheduler): IScheduledTask = jsNative

    ///Schedule a Task to execute after a specified Delay.
    let delay (_: Delay) (_: ITask) (_: IScheduler): IScheduledTask = jsNative

    ///Schedule a Task to execute periodically with the specified Period.
    let periodic (_: Period) (_: ITask) (_: IScheduler): IScheduledTask = jsNative

    ///Cancel all future scheduled executions of a ScheduledTask.
    let cancelTask (_: IScheduledTask): unit = jsNative

    ///Cancel all future scheduled executions of all ScheduledTasks for which the provided predicate is true.
    let cancelAllTasks (_: IScheduledTask -> bool)  (_: IScheduler): unit = jsNative

    ///Create a new Scheduler that uses the provided Timer and Timeline for scheduling Tasks.
    let newScheduler (_: ITimer) (_: ITimeline): IScheduler = jsNative

    ///Create a new Scheduler that uses a default platform-specific Timer and a new, empty Timeline.
    let newDefaultScheduler (_: unit): IScheduler = jsNative

    ///Create a new Scheduler with origin (i.e., zero time) at the specified Offset with the provided Scheduler.
    ///When implementing higher-order Stream combinators, this function can be used to create a Scheduler with local time for each “inner” Stream.
    ///
    ///`currentTime(scheduler) //> 1637`
    ///`const relativeScheduler = schedulerRelativeTo(1234, scheduler)`
    ///`currentTime(relativeScheduler) //> 0`
    ///``
    ///`// ... later ...`
    ///``
    ///`currentTime(scheduler) //> 3929`
    ///`currentTime(relativeScheduler) //> 2292`
    let schedulerRelativeTo (_: Offset) (_: IScheduler): IScheduler = jsNative

    ///Create a new Timer that uses the provided Clock as a source of the current Time.
    let newClockTimer (_: IClock): ITimer = jsNative

    ///Create an empty Timeline.
    let newTimeline: unit -> ITimeline = jsNative

    ///Create a new Clock by auto detecting the best platform-specific source of Time. In modern browsers, it uses performance.now, and on Node, process.hrtime. If neither is available, it falls back to Date.now.
    let newPlatformClock (_: unit): IClock = jsNative

    ///Create a new Clock using performance.now.
    let newPerformanceClock (_: unit): IClock = jsNative

    ///Create a new Clock using process.hrtime.
    let newHRTimeClock (_: unit): IClock = jsNative

    ///Create a new Clock using Date.now. Note that a Clock using Date.now is not guaranteed to be monotonic and is subject to system clock changes, e.g., NTP can change your system clock.
    let newDateClock (_: unit): IClock = jsNative

    ///Create a new Clock whose origin is at the current time (at the instant of calling clockRelativeTime) of the provided Clock.
    let clockRelativeTo (_: IClock): IClock = jsNative

    let currentTime (_: IScheduler): Time = jsNative

[<Import("*", "@most/disposable")>]
module Disposable =

    ///Create a no-op Disposable.
    let disposeNone (_: unit): IDisposable = jsNative

    ///Create a Disposable which, when disposed of, will call the provided function, passing the provided value.
    let disposeWith (_: 'a -> unit)  (_: 'a): IDisposable = jsNative

    ///Wrap a Disposable so the underlying Disposable will only be disposed of once—even if the returned Disposable is disposed of multiple times.
    let disposeOnce (_: IDisposable): IDisposable = jsNative

    ///Combine two Disposables into a single Disposable which will dispose of both.
    let disposeBoth (_: IDisposable) (_: IDisposable): IDisposable = jsNative

    ///Combine an array of Disposables into a single Disposable which will dispose of all the Disposables in the array.
    let disposeAll (_: IDisposable []): IDisposable = jsNative

    ///Dispose of the provided Disposable. Note that dispose does not catch exceptions. If the Disposable throws an exception, the exception will propagate out of dispose.
    let dispose (_: IDisposable): unit = jsNative

    ///Attempt to dispose of the provided Disposable. If the Disposable throws an exception, catch and propagate it to the provided Sink with the provided Time.
    ///Note: Only an exception thrown by the Disposable will be caught. If the act of propagating an error to the Sink throws an exception, that exception will not be caught.
    let tryDispose (_: Time) (_: IDisposable) (_: ISink<'a>): unit = jsNative
