module Fable.Import.Most.Core
open Fable.Import.Most
open Fable.Core
open Fable.Import.JS

type [<AllowNullLiteral>] ``PropagateTask``<'A> =
    inherit Task
    abstract ``value``: 'A with get, set
    abstract ``sink``: Sink<'A> with get, set
    abstract ``active``: bool with get, set

type [<AllowNullLiteral>] ``MulticastSource``<'A> =
    inherit Stream<'A>
    inherit Sink<'A>
    inherit Disposable
    abstract ``source``: Stream<'A> with get, set
    abstract ``sinks``: Array<Sink<'A>> with get, set
    abstract ``disposable``: Disposable with get, set
    abstract ``add``: Sink<'A> -> float
    abstract ``remove``: Sink<'A> -> float

type [<AllowNullLiteral>] ``MulticastSourceStatic`` =
    [<Emit "new $0($1...)">] abstract Create: source: Stream<'A> -> MulticastSource<'A>

type SeedValue<'S, 'V> = { seed: 'S; value: 'V }

type [<AllowNullLiteral>] IExports =
    abstract ``runEffects``: Stream<'T> * Scheduler -> Promise<unit>
    abstract ``run``: Sink<'A> * Scheduler * Stream<'A> -> Disposable

    abstract ``propagateTask``: run: (Time -> 'A -> Sink<'A> -> unit) * 'A * Sink<'A> -> PropagateTask<'A>
    abstract ``propagateEventTask``: value: 'T * Sink<'T> -> PropagateTask<'T>
    abstract ``propagateEndTask``: sink: Sink<'T> -> PropagateTask<unit>
    abstract ``propagateErrorTask``: error: Error * Sink<'T> -> PropagateTask<unit>

    abstract ``ap``: streamofFunctions: Stream<('A -> 'B)> * Stream<'A> -> Stream<'B>

    abstract ``chain``: f: ('A -> Stream<'B>) * Stream<'A> -> Stream<'B>
    abstract ``join``: higherOrderStream: Stream<Stream<'A>> -> Stream<'A>

    abstract ``combine``: fn: ('A -> 'B -> 'R) * Stream<'A> * Stream<'B> -> Stream<'R>

    [<Emit("$0.combineArray((...array) => $1(array), $2)")>]
    abstract ``combineArray``: fn: ('A [] -> 'B) * Stream<'A> [] -> Stream<'B>

    abstract ``concatMap``: f: ('A -> Stream<'B>) * Stream<'A> -> Stream<'B>

    abstract ``continueWith``: f: (unit -> Stream<'A>) * Stream<'A> -> Stream<'A>

    abstract ``delay``: dt: float * Stream<'A> -> Stream<'A>

    abstract ``recoverWith``: p: (Error -> Stream<'A>) * Stream<'A> -> Stream<'A>
    abstract ``throwError``: e: Error -> Stream<'A>

    abstract ``filter``: p: ('A -> bool) * Stream<'A> -> Stream<'A>
    abstract ``skipRepeats``: s: Stream<'A> -> Stream<'A>
    abstract ``skipRepeatsWith``: eq: ('A -> 'A -> bool) * Stream<'A> -> Stream<'A>

    abstract ``throttle``: period: float * Stream<'A> -> Stream<'A>
    abstract ``debounce``: period: float * Stream<'A> -> Stream<'A>

    abstract ``loop``: f: ('S -> 'A -> SeedValue<'S, 'B>) * 'S * Stream<'A> -> Stream<'B>

    abstract ``merge``: s1: Stream<'A> * Stream<'A> -> Stream<'A>

    abstract ``mergeArray``: streams: Stream<'A> [] -> Stream<'A>

    abstract ``mergeConcurrently``: float * Stream<Stream<'A>> -> Stream<'A>
    abstract ``mergeMapConcurrently``: float * ('A -> Stream<'B>) * Stream<'A> -> Stream<'B>

    abstract ``multicast``: s: Stream<'A> -> Stream<'A>

    abstract MulticastSource: MulticastSourceStatic

    abstract ``awaitPromises``: stream: Stream<Promise<'A>> -> Stream<'A>
    abstract ``fromPromise``: promise: Promise<'A> -> Stream<'A>

    abstract ``scan``: f: ('B -> 'A -> 'B) * 'B * Stream<'A> -> Stream<'B>


    abstract ``take``: n: float * s: Stream<'A> -> Stream<'A>
    abstract ``skip``: n: float * s: Stream<'A> -> Stream<'A>
    abstract ``takeWhile``: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
    abstract ``skipWhile``: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
    abstract ``skipAfter``: p: ('A -> bool) * s: Stream<'A> -> Stream<'A>
    abstract ``slice``: start: float * ``end``: float * s: Stream<'A> -> Stream<'A>


    abstract ``sample``: values: Stream<'A> * sampler: Stream<'B> -> Stream<'A>
    abstract ``snapshot``: f: ('A -> 'B -> 'C) * values: Stream<'A> * sampler: Stream<'B> -> Stream<'C>

    abstract ``startWith``: value: 'A * stream: Stream<'A> -> Stream<'A>

    abstract ``switchLatest``: s: Stream<Stream<'A>> -> Stream<'A>

    abstract ``until``: signal: Stream<obj option> * s: Stream<'A> -> Stream<'A>
    abstract ``since``: signal: Stream<obj option> * s: Stream<'A> -> Stream<'A>
    abstract ``during``: timeWindow: Stream<Stream<obj option>> * s: Stream<'A> -> Stream<'A>

    abstract ``map``: f: ('A -> 'B) * s: Stream<'A> -> Stream<'B>
    abstract ``tap``: f: ('A -> unit) * s: Stream<'A> -> Stream<'A>
    abstract ``constant``: b: 'B * s: Stream<'A> -> Stream<'B>

    abstract ``withLocalTime``: origin: Time * s: Stream<'A> -> Stream<'A>

    abstract ``zip``: fn: ('A -> 'B -> 'R) * a: Stream<'A> * b: Stream<'B> -> Stream<'R>

    [<Emit("$0.combineArray((...array) => $1(array), $2)")>]
    abstract ``zipArray``: fn: ('A [] -> 'B) * streams: Stream<'A> [] -> Stream<'B>

    abstract ``zipItems``: f: ('A -> 'B -> 'C) * a: 'A [] * s: Stream<'B> -> Stream<'C>
    abstract ``withItems``: a: 'A [] * s: Stream<'B> -> Stream<'A>

    abstract ``never``: unit -> Stream<'A>

    abstract ``empty``: unit -> Stream<'A>

    abstract ``now``: a: 'A -> Stream<'A>

    abstract ``at``: t: Time * a: 'A -> Stream<'A>

    abstract ``newStream``: run: (Sink<'A> -> Scheduler -> Disposable) -> Stream<'A>

    abstract ``periodic``: period: float -> Stream<unit>

type [<AllowNullLiteral>] IExportsCurried =
    (*
        Running
    *)
    /// Activate an event Stream and consume all its events.
    abstract ``runEffects``: Stream<'a> -> Scheduler -> Promise<unit>
    /// Run a Stream, sending all events to the provided Sink. The Stream’s Time values come from the provided Scheduler.
    abstract ``run``: Sink<'a> -> Scheduler -> Stream<'a> -> Disposable
    (*
        Construction
    *)
    /// Create a Stream containing no events and ends immediately.
    /// ```
    /// empty(): |
    /// ```
    abstract ``empty``: unit -> Stream<'a>
    /// Create a Stream containing no events and never ends.
    /// ```
    /// never(): ---->
    /// ```
    abstract ``never``: unit -> Stream<'a>
    /// Create a Stream containing a single event at time 0.
    /// ```
    /// now(x): x|
    /// ```
    abstract ``now``: a: 'a -> Stream<'a>
    /// Create a Stream containing a single event at a specific time.
    /// ```
    /// at(3, x): --x|
    /// ```
    abstract ``at``: Time -> 'a -> Stream<'a>
    /// Create an infinite Stream containing events that occur at a specified Period. The first event occurs at time 0, and the event values are undefined.
    /// ```
    /// periodic(3): x--x--x--x-->
    /// ```
    abstract ``periodic``: Time -> Stream<unit>
    /// Create a Stream that fails with the provided Error at time 0. This can be useful for functions that need to return a Stream and also need to propagate an error.
    /// ```
    /// throwError(X): X
    /// ```
    abstract ``throwError``: Error -> Stream<'a>
    (*
        Extending
    *)
    /// Prepend an event at time 0.
    ///```
    /// stream:               --a-b-c-d->
    /// startWith(x, stream): x-a-b-c-d->
    ///```
    /// Note that startWith does not delay other events. If stream already contains an event at time 0, then startWith simply adds another event at time 0—the two will be simultaneous, but ordered. For example:
    ///```
    /// stream:                a-b-c-d->
    /// startWith(x, stream): xa-b-c-d->
    ///```
    /// Both x and a occur at time 0, but x will be observed before a.
    abstract ``startWith``: 'a -> Stream<'a> -> Stream<'a>
    /// Replace the end of a Stream with another Stream.
    /// ```
    /// stream:                  -a-b-c-d|
    /// f():                                   -1-2-3-4-5->
    /// continueWith(f, stream): -a-b-c-d-1-2-3-4-5->
    /// ```
    /// When stream ends, f will be called and must return a Stream.
    abstract ``continueWith``: (unit -> Stream<'a>) -> Stream<'a> -> Stream<'a>
    (*
        Transformation
    *)
    /// Apply a function to each event value.
    /// ```
    /// stream:         -a-b-c-d->
    /// map(f, stream): -f(a)-f(b)-f(c)-f(d)->
    /// ```
    abstract ``map``: ('a -> 'b) -> Stream<'a> -> Stream<'b>
    /// Replace each event value with x.
    /// ```
    /// stream:              -a-b-c-d->
    /// constant(x, stream): -x-x-x-x->
    ///
    /// constant('tick', periodic(1000))
    /// ```
    abstract ``constant``: 'a -> Stream<'b> -> Stream<'a>
    /// Perform a side effect for each event in a Stream.
    /// ```
    /// stream:         -a-b-c-d->
    /// tap(f, stream): -a-b-c-d->
    /// ```
    /// For each event in stream, f is called, but the value of its result is ignored. If f fails (i.e., throws an error), then the returned Stream will also fail. The Stream returned by tap will contain the same events as the original Stream.
    abstract ``tap``: ('a -> unit) -> Stream<'a> -> Stream<'a>
    /// Apply the latest function in a Stream of functions to the latest value of another Stream.
    /// ```
    /// sF:         --f-----------g---------h--------->
    /// sV:         -a-------b---------c---------d---->
    /// ap(sF, sV): --f(a)---f(b)-g(b)-g(c)-h(c)-h(d)->
    /// ```
    /// In effect, ap applies a time-varying function to a time-varying value.
    abstract ``ap``: Stream<('a -> 'b)> -> Stream<'a> -> Stream<'b>
    /// Incrementally accumulate results, starting with the provided initial value.
    /// ```
    /// stream:                           -1-2-3->
    /// scan((x, y) => x + y, 0, stream): 01-3-6->
    /// ```
    abstract ``scan``: ('a -> 'b -> 'a) -> 'a -> Stream<'b> -> Stream<'a>
    /// Accumulate results using a feedback loop that emits one value and feeds back another to be used in the next iteration.
    ///
    /// It allows you to maintain and update a “state” (a.k.a. feedback, a.k.a. seed for the next iteration) while emitting a different value. In contrast, scan feeds back and produces the same value.
    /// ```
    /// // Average an array of values.
    /// const average = values =>
    ///       values.reduce((sum, x) => sum + x, 0) / values.length
    ///
    /// const stream = // ...
    ///
    /// // Emit the simple (i.e., windowed) moving average of the 10 most recent values.
    /// loop((values, x) => {
    ///       values.push(x)
    ///       values = values.slice(-10) // Keep up to 10 most recent
    ///       const avg = average(values)
    ///
    ///       // Return { seed, value } pair.
    ///       // seed will feed back into next iteration.
    ///       // value will be propagated.
    ///       return { seed: values, value: avg }
    /// }, [], stream)
    /// ```
    abstract ``loop``: ('s -> 'a -> SeedValue<'s, 'b>) -> 's -> Stream<'a> -> Stream<'b>
    /// Apply a function to the latest event and the array value at the respective index.
    /// ```
    /// a:                   [ 1, 2, 3 ]
    /// s:                   --10---10---10---10---10--->
    /// zipItems(add, a, s): --11---12---13|
    /// ```
    /// The resulting Stream will contain the same number of events as the input Stream, or array.length events, whichever is less.
    abstract ``zipItems``: ('a -> 'b -> 'c) -> 'a [] -> Stream<'b> -> Stream<'c>
    /// Replace each event value with the array item at the respective index.
    /// ```
    /// a:               [ 1, 2, 3 ]
    /// s:               --x--x--x--x--x-->
    /// withItems(a, s): --1--2--3|
    /// ```
    /// The resulting Stream will contain the same number of events as the input Stream, or array.length events, whichever is less.
    abstract ``withItems``: 'a [] -> Stream<'b> -> Stream<'a>
    (*
        Flattening
    *)
    /// Given a higher-order Stream, return a new Stream that adopts the behavior of (i.e., emits the events of) the most recent inner Stream.
    /// ```
    /// s:                    -a-b-c-d-e-f->
    /// t:                    -1-2-3-4-5-6->
    /// stream:               -s-----t----->
    /// switchLatest(stream): -a-b-c-4-5-6->
    /// ```
    abstract ``switchLatest``: Stream<Stream<'a>> -> Stream<'a>
    /// Given a higher-order Stream, return a new Stream that merges all the inner Streams as they arrive.
    /// ```
    /// s:             ---a---b---c---d-->
    /// t:             -1--2--3--4--5--6->
    /// stream:        -s------t--------->
    /// join(stream):  ---a---b--4c-5-d6->
    /// ```
    abstract ``join``: Stream<Stream<'a>> -> Stream<'a>
    /// Transform each event in stream into a new Stream, and then merge each into the resulting Stream. Note that f must return a Stream.
    /// ```
    /// stream:            -a----b----c|
    /// f(a):               1--2--3|
    /// f(b):                    1----2----3|
    /// f(c):                           1-2-3|
    /// chain(f, stream):  -1--2-13---2-1-233|
    /// ```
    abstract ``chain``: ('a -> Stream<'b>) -> Stream<'a> -> Stream<'b>
    /// Transform each event in stream into a Stream, and then concatenate each onto the end of the resulting Stream. Note that f must return a Stream.
    ///
    /// The mapping function f is applied lazily. That is, f is called only once it is time to concatenate a new stream.
    /// ```
    /// stream:                -a----b----c|
    /// f(a):                   1--2--3|
    /// f(b):                        1----2----3|
    /// f(c):                               1-2-3|
    /// concatMap(f, stream):  -1--2--31----2----31-2-3|
    /// f called lazily:        ^      ^          ^
    /// ```
    /// Note the difference between concatMap and ref:chain: concatMap concatenates, while ref:chain merges.
    abstract ``concatMap``: ('a -> Stream<'b>) -> Stream<'a> -> Stream<'b>
    /// Given a higher-order Stream, return a new Stream that merges inner Streams as they arrive up to the specified concurrency. Once concurrency number of Streams are being merged, newly arriving Streams will be merged after an existing one ends.
    /// ```
    /// s:                            --a--b--c--d--e-->
    /// t:                            --x------y|
    /// u:                            -1--2--3--4--5--6>
    /// stream:                       -s--t--u--------->
    /// mergeConcurrently(2, stream): --a--b--cy4d-5e-6>
    /// ```
    /// Note that u is only merged after t ends because of the concurrency level of 2.
    ///
    /// Note also that mergeConcurrently(Infinity, stream) is equivalent to join(stream).
    ///
    /// To control concurrency, mergeConcurrently must maintain an internal queue of newly arrived Streams. If new Streams arrive faster than the concurrency level allows them to be merged, the internal queue will grow infinitely.
    abstract ``mergeConcurrently``: int -> Stream<Stream<'a>> -> Stream<'a>
    /// Lazily apply a function f to each event in a Stream, merging them into the resulting Stream at the specified concurrency. Once concurrency number of Streams are being merged, newly arriving Streams will be merged after an existing one ends.
    /// ```
    /// stream:                             --ab--c----d----->
    /// f(a):                               -1-2-3|
    /// f(b):                               -4-5-6----------->
    /// f(c):                               -7--------------->
    /// f(d):                               -1-2-3-4-5-6-7-8->
    /// mergeMapConcurently(f, 2, stream) : ---142536-7------>
    /// ```
    /// Note that f(c) is only merged after f(a) ends.
    ///
    /// Also note that f will not get called with d until either f(b) or f(c) ends.
    ///
    /// To control concurrency, mergeMapConcurrently must maintain an internal queue of newly arrived Streams. If new Streams arrive faster than the concurrency level allows them to be merged, the internal queue will grow infinitely.
    abstract ``mergeMapConcurrently``: int -> ('a -> Stream<'b>) -> Stream<'a> -> Stream<'b>
    (*
        Merging
    *)
    /// Create a new Stream containing events from two Streams.
    /// ```
    /// s1:            -a--b----c--->
    /// s2:            --w---x-y--z->
    /// merge(s1, s2): -aw-b-x-yc-z->
    /// ```
    /// Merging creates a new Stream containing all events from the two original Streams without affecting the time of the events. You can think of the events from the input Streams simply being interleaved into the new, merged Stream. A merged Stream ends when all of its input Streams have ended.
    abstract ``merge``: Stream<'a> -> Stream<'a> -> Stream<'a>
    /// Array form of merge. Create a new Stream containing all events from all Streams in the array.
    /// ```
    /// s1:                       -a--b----c---->
    /// s2:                       --w---x-y--z-->
    /// s3:                       ---1---2----3->
    /// mergeArray([s1, s2, s3]): -aw1b-x2yc-z3->
    /// ```
    abstract ``mergeArray``: Stream<'a> [] -> Stream<'a>
    /// Apply a function to the most recent event from each Stream when a new event arrives on any Stream.
    /// ```
    /// s1:                   -0--1----2--->
    /// s2:                   --3---4-5--6->
    /// combine(add, s1, s2): --3-4-5-67-8->
    /// ```
    /// Note that combine waits for at least one event to arrive on all input Streams before it produces any events.
    abstract ``combine``: ('a -> 'b -> 'c) -> Stream<'a> -> Stream<'b> -> Stream<'c>
    /// Array form of combine. Apply a function to the most recent event from all Streams when a new event arrives on any Stream.
    /// ```
    /// s1:                               -0--1----2->
    /// s2:                               --3---4-5-->
    /// s3:                               ---2---1--->
    /// combineArray(add3, [s1, s2, s3]): ---56-7678->
    /// ```
    [<Emit("$0.combineArray((...array) => $1(array), $2)")>]
    abstract ``combineArray``: ('a [] -> 'b) -> Stream<'a> [] -> Stream<'b>
    /// Apply a function to corresponding pairs of events from the inputs Streams.
    /// ```
    /// s1:               -1--2--3--4->
    /// s2:               -1---2---3---4->
    /// zip(add, s1, s2): -2---4---6---8->
    /// ```
    /// Zipping correlates by index-corresponding events from two input streams. Note that zipping a “fast” Stream and a “slow” Stream will cause buffering. Events from the fast Stream must be buffered in memory until an event at the corresponding index arrives on the slow Stream.
    ///
    /// A zipped Stream ends when any one of its input Streams ends.
    abstract ``zip``: ('a -> 'b -> 'c) -> Stream<'a> -> Stream<'b> -> Stream<'c>
    /// Array form of zip. Apply a function to corresponding events from all the inputs Streams.
    /// ```
    /// s1:                           -1-2-3---->
    /// s2:                           -1--2--3-->
    /// s3:                           --1--2--3->
    /// zipArray(add3, [s1, s2, s3]): --3--6--9->
    /// ```
    [<Emit("$0.zipArray((...array) => $1(array), $2)")>]
    abstract ``zipArray``: ('a [] -> 'b) -> Stream<'a> [] -> Stream<'b>
    /// For each event in a sampler Stream, replace the event value with the latest value in another Stream. The resulting Stream will contain the same number of events as the sampler Stream.
    /// ```
    /// values:                  -1--2--3--4--5->
    /// sampler:                 -1-----2-----3->
    /// sample(values, sampler): -1-----3-----5->
    ///
    /// values:                  -1-----2-----3->
    /// sampler:                 -1--2--3--4--5->
    /// sample(values, sampler): -1--1--2--2--3->
    /// ```
    abstract ``sample``: Stream<'a> -> Stream<'b> -> Stream<'a>
    /// For each event in a sampler Stream, apply a function to combine its value with the most recent event value in another Stream. The resulting Stream will contain the same number of events as the sampler Stream.
    /// ```
    /// values:                         -1--2--3--4--5->
    /// sampler:                        -1-----2-----3->
    /// snapshot(sum, values, sampler): -2-----5-----8->
    ///
    /// values:                         -1-----2-----3->
    /// sampler:                        -1--2--3--4--5->
    /// snapshot(sum, values, sampler): -2--3--5--6--8->
    /// ```
    /// In contrast to combine, snapshot produces a value only when an event arrives on the sampler.
    abstract ``snapshot``: ('a -> 'b -> 'c) -> Stream<'a> -> Stream<'b> -> Stream<'c>
    (*
        Filtering
    *)
    /// Retain only events for which a predicate is truthy.
    /// ```
    /// stream:               -1-2-3-4->
    /// filter(even, stream): ---2---4->
    /// ```
    abstract ``filter``: p: ('A -> bool) * Stream<'A> -> Stream<'A>
    /// Remove adjacent repeated events.
    /// ```
    /// stream:              -1-2-2-3-4-4-5->
    /// skipRepeats(stream): -1-2---3-4---5->
    /// ```
    /// Note that === is used to identify repeated items. To use a different comparison, use skipRepeatsWith.
    abstract ``skipRepeats``: s: Stream<'A> -> Stream<'A>
    /// Remove adjacent repeated events, using the provided equality function to compare adjacent events.
    /// ```
    /// stream:                              -a-b-B-c-D-d-e->
    /// skipRepeatsWith(ignoreCase, stream): -a-b---c-D---e->
    /// ```
    /// The equals function should return true if the two values are equal, or false if they are not equal.
    abstract ``skipRepeatsWith``: eq: ('A -> 'A -> bool) * Stream<'A> -> Stream<'A>
    (*
        Slicing
    *)
    /// Keep only events in a range, where start <= index < end, and index is the ordinal index of an event in stream.
    /// ```
    /// stream:              -a-b-c-d-e-f->
    /// slice(1, 4, stream): ---b-c-d|
    ///
    /// stream:              -a-b-c|
    /// slice(1, 4, stream): ---b-c|
    /// ```
    /// If stream contains fewer than start events, the returned Stream will be empty.
    abstract ``slice``: int -> int -> Stream<'a> -> Stream<'a>
    /// Keep at most the first n events from stream.
    /// ```
    /// stream:          -a-b-c-d-e-f->
    /// take(3, stream): -a-b-c|
    ///
    /// stream:          -a-b|
    /// take(3, stream): -a-b|
    /// ```
    /// If stream contains fewer than n events, the returned Stream will effectively be equivalent to stream.
    abstract ``take``: int -> Stream<'a> -> Stream<'a>
    /// Discard the first n events from stream.
    /// ```
    /// stream:          -a-b-c-d-e-f->
    /// skip(3, stream): -------d-e-f->
    ///
    /// stream:          -a-b-c-d-e|
    /// skip(3, stream): -------d-e|
    ///
    /// stream:          -a-b-c|
    /// skip(3, stream): ------|
    /// ```
    /// If stream contains fewer than n events, the returned Stream will be empty.
    abstract ``skip``: int -> Stream<'a> -> Stream<'a>
    /// Keep all events until predicate returns false, and discard the rest.
    /// ```
    /// stream:                  -2-4-5-6-8->
    /// takeWhile(even, stream): -2-4-|
    /// ```
    abstract ``takeWhile``: ('a -> bool) -> Stream<'a> -> Stream<'a>
    /// Discard all events until predicate returns false, and keep the rest.
    /// ```
    /// stream:                  -2-4-5-6-8->
    /// skipWhile(even, stream): -----5-6-8->
    /// ```
    abstract ``skipWhile``: ('a -> bool) -> Stream<'a> -> Stream<'a>
    /// Discard all events after the first event for which predicate returns true.
    /// ```
    /// stream:                  -1-2-3-4-5-6-8->
    /// skipAfter(even, stream): -1-2|
    /// ```
    abstract ``skipAfter``: ('a -> bool) -> Stream<'a> -> Stream<'a>
    /// Keep all events in one Stream until the first event occurs in another.
    /// ```
    /// stream:                   -a-b-c-d-e-f->
    /// endSignal:                ------z->
    /// until(endSignal, stream): -a-b-c|
    /// ```
    /// Note that if endSignal has no events, then the returned Stream will effectively be equivalent to the original.
    /// ```
    /// // Keep only 3 seconds of events, discard the rest.
    /// until(at(3000, null), stream)
    /// ```
    abstract ``until``: Stream<'b> -> Stream<'a> -> Stream<'a>
    /// Discard all events in one Stream until the first event occurs in another.
    /// ```
    /// stream:                     -a-b-c-d-e-f->
    /// startSignal:                ------z->
    /// since(startSignal, stream): -------d-e-f->
    /// ```
    /// Note that if startSignal has no events, then the returned Stream will effectively be equivalent to never.
    /// ```
    /// // Discard events for 3 seconds, keep the rest.
    /// since(at(3000, null), stream)
    /// ```
    abstract ``since``: Stream<'b> -> Stream<'a> -> Stream<'a>
    /// Keep events that occur during a time window defined by a higher-order Stream.
    /// ```
    /// stream:                     -a-b-c-d-e-f-g->
    /// timeWindow:                 -----s
    /// s:                                -----x
    /// during(timeWindow, stream): -----c-d-e-|
    /// ```
    /// This is similar to Slicing, but uses time rather than indices to “slice” the Stream.
    /// ```
    /// // A time window that:
    /// // 1. starts at time = 1 second
    /// // 2. ends at time = 6 seconds (1 second + 5 seconds).
    /// const timeWindow = at(1000, at(5000, null))
    ///
    /// // 1. Discard events for 1 second, then
    /// // 2. keep events for 5 more seconds, then
    /// // 3. discard all subsequent events.
    /// during(timeWindow, stream)
    /// ```
    abstract ``during``: Stream<Stream<'b>> -> Stream<'a> -> Stream<'a>
    (*
        Dealing with time
    *)
    /// Timeshift a Stream by the specified Delay.
    /// ```
    /// stream:           -a-b-c-d->
    /// delay(1, stream): --a-b-c-d->
    /// delay(5, stream): ------a-b-c-d->
    /// ```
    /// Delaying a Stream timeshifts all the events by the same amount.
    /// It doesn’t change the time between events.
    abstract ``delay``: Time -> Stream<'a> -> Stream<'a>
    /// Create a Stream with localized Time values, whose origin (i.e., time 0)
    /// is at the specified Time on the Scheduler provided when the Stream is
    /// observed with runEffects or run.
    ///
    /// When implementing custom higher-order Stream combinators, such as chain,
    /// you should use withLocalTime to localize “inner” Streams before running them.
    abstract ``withLocalTime``: Time -> Stream<'a> -> Stream<'a>
    (*
        Rate limiting
    *)
    /// Limit the rate of events to at most one per n milliseconds.
    /// ```
    /// stream:               abcd----abcd---->
    /// throttle(2, stream):  a-c-----a-c----->
    /// ```
    /// In contrast to debounce, throttle simply drops events that occur “too often”, whereas debounce waits for a “quiet period”.
    abstract ``throttle``: Time -> Stream<'a> -> Stream<'a>
    /// Wait for a burst of events to subside and keep only the last event in the burst.
    /// ```
    /// stream:              abcd----abcd---->
    /// debounce(2, stream): -----d-------d-->
    /// ```
    /// If the Stream ends while there is a pending debounced event (e.g., via until), the pending event will occur just before the Stream ends. For example:
    /// ```
    /// s1:                         abcd----abcd---->
    /// s2:                         ------------|
    /// debounce(2, until(s2, s1)): -----d------d|
    /// ```
    /// Debouncing can be extremely useful when dealing with bursts of similar events. For example, debouncing keypress events before initiating a remote search query in a browser application.
    /// ```
    /// const searchInput = document.querySelector('[name="search-text"]');
    /// const searchText = most.fromEvent('input', searchInput);
    ///
    /// // The current value of the searchInput, but only
    /// // after the user stops typing for 500 milliseconds.
    /// map(e => e.target.value, debounce(500, searchText))
    /// ```
    abstract ``debounce``: Time -> Stream<'a> -> Stream<'a>

    (*
        Dealing with Promises
    *)
    /// Create a Stream containing a promise’s value.
    /// ```
    /// promise:              ----a
    /// fromPromise(promise): ----a|
    /// ```
    /// If the promise rejects, the Stream will be in an error state with the promise’s rejection reason as its error. See recoverWith for error recovery.
    abstract ``fromPromise``: Promise<'a> -> Stream<'a>
    /// Turn a Stream of promises into a Stream containing the promises’ values.
    /// ```
    /// promise p:             ---1
    /// promise q:             ------2
    /// promise r:             -3
    /// stream:                -p---q---r->
    /// awaitPromises(stream): ---1--2--3->
    /// ```
    /// Note that event order is always preserved, regardless of promise fulfillment order.
    ///
    /// **Using fulfillment order**
    ///
    /// To create a Stream that merges promises in fulfillment order, use chain(fromPromise, stream). Note the difference:
    /// ```
    /// promise p:                    --1
    /// promise q:                    --------2
    /// promise r:                    ------3
    /// stream:                       -p-q-r----->
    /// chain(fromPromise, stream):   --1---3-2-->
    /// awaitPromises(stream):        --1-----23->
    /// ```
    ///
    /// **Rejected promises**
    ///
    /// If a promise rejects, the Stream will be in an error state with the rejected promise’s reason as its error. See recoverWith for error recovery. For example:
    /// ```
    /// promise p:             ---1
    /// promise q:             ------X
    /// promise r:             -3
    /// stream:                -p---q---r->
    /// awaitPromises(stream): ---1--X
    /// ```
    /// **Forever pending promises**
    ///
    /// If a promise remains pending forever, the Stream will never produce any events beyond that promise. Use a promise timeout or race in such cases to ensure that all promises either fulfill or reject. For example:
    /// ```
    /// promise p:             ---1
    /// promise q:             ----------->
    /// promise r:             -3
    /// stream:                -p---q---r->
    /// awaitPromises(stream): ---1------->
    /// ```
    abstract ``awaitPromises``: Stream<Promise<'A>> -> Stream<'A>
    (*
        Handling Errors
    *)
    /// Recover from a stream failure by calling a function to create a new Stream.
    /// ```
    /// s:                 -a-b-c-X
    /// f(X):                     d-e-f->
    /// recoverWith(f, s): -a-b-c-d-e-f->
    /// ```
    /// When s fails with an error, f will be called with the error. f must return a new Stream to replace the error.
    abstract ``recoverWith``: (Error -> Stream<'a>) -> Stream<'a> -> Stream<'a>
    (*
        Tasks
        Helper functions for creating Tasks to propagate events.
    *)
    /// Create a **Task** to propagate a **value** to a **Sink**. When the **Task** executes, the provided **function** will receive the current **time**
    /// (from the Scheduler with which it was scheduled) and the provided **value** and **Sink**. The **Task** can use the **Sink** to propagate the **value** in whatever way it chooses.
    /// For example as an event or an error, or it could choose not to propagate the event based on some condition, etc.
    abstract ``propagateTask``: (Time -> 'a -> Sink<'a> -> unit) -> 'a -> Sink<'a> -> PropagateTask<'a>
    /// Create a **Task** that can be scheduled to propagate an event **value** to a **Sink**.
    /// When the task executes, it will call the Sink’s **event** method with the current time (from the Scheduler with which it was scheduled) and the value.
    abstract ``propagateEventTask``: 'a -> Sink<'a> -> PropagateTask<'a>
    /// Create a **Task** that can be scheduled to propagate **end** to a **Sink**.
    /// When the task executes, it will call the Sink’s **end** method with the current time (from the Scheduler with which it was scheduled).
    abstract ``propagateEndTask``: Sink<'a> -> PropagateTask<unit>
    /// Create a **Task** that can be scheduled to propagate an **error** to a **Sink**.
    /// When the Task executes, it will call the Sink’s **error** method with the current time (from the Scheduler with which it was scheduled) and the error.
    abstract ``propagateErrorTask``: Error -> Sink<'a> -> PropagateTask<unit>
    (*
        Etc
    *)
    abstract ``multicast``: Stream<'a> -> Stream<'a>
    abstract ``MulticastSource``: MulticastSourceStatic
    abstract ``newStream``: (Sink<'a> -> Scheduler -> Disposable) -> Stream<'a>
