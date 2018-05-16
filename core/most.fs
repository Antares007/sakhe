[<Fable.Core.Import("*", "@most/core")>]
module Most
open Fable.Core
open Fable.Import.JS
open MostTypes

let archilBolkvadze = ("არჩილ ბოლქვაძე", 42)

///**Description**
///Create a Stream containing a single event at time 0.
/// * `x| = now "x"`
let now (_:'a): 'a Stream = JsInterop.importMember "@most/core"
///**Description**
///Create a Stream containing no events and never ends.
/// * `----> = never ()`
let never (_: unit): 'a Stream = jsNative
///**Description**
///Create a Stream containing no events and ends immediately.
/// * `| = empty ()`
let empty (_: unit): 'a Stream = jsNative
///**Description**
///Create a Stream containing a single event at a specific time.
/// * `--x| = at 3. "x"`
let at (_: Time) (_:'a) : 'a Stream = jsNative
let newStream (_: 'a Sink -> Scheduler -> Disposable): 'a Stream = jsNative
///**Description**
///Create an infinite Stream containing events that occur at a specified Period. The first event occurs at time 0, and the event values are undefined.
/// * `x--x--x--x--> = periodic 3`
let periodic (_: int): unit Stream = jsNative
///**Description**
///Prepend an event at time 0.
/// * `--a-b-c-d-> = stream`
/// * `x-a-b-c-d-> = startWith "x" stream`
///Note that startWith does not delay other events. If stream already contains an event at time 0, then startWith simply adds another event at time 0—the two will be simultaneous, but ordered. For example:
/// * `a-b-c-d--> = stream`
/// * `xa-b-c-d-> = startWith "x" stream`
///Both x and a occur at time 0, but x will be observed before a.
let startWith (_: 'a) (_: 'a Stream): Stream<'a> = jsNative
///**Description**
///Given a higher-order Stream, return a new Stream that adopts the behavior of (i.e., emits the events of) the most recent inner Stream.
/// * `-a-b-c-d-e-f-> = s`
/// * `-1-2-3-4-5-6-> = t`
/// * `-s-----t-----> = stream`
/// * `-a-b-c-4-5-6-> = switchLatest stream`
let switchLatest (_: 'a Stream Stream): 'a Stream = jsNative
///**Description**
///Discard all events in one Stream until the first event occurs in another.
/// * `-a-b-c-d-e-f-> = stream`
/// * `------z-> ____ = startSignal`
/// * `-------d-e-f-> = since startSignal stream`
///Note that if startSignal has no events, then the returned Stream will effectively be equivalent to never.
///Discard events for 3 seconds, keep the rest.
/// * `since (at 3000. ()) stream`
let since (_: 'b Stream) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Apply a function to each event value.
///-1-2-3-> = stream
///-2-3-4-> = map ((+) 1) stream
let map (_: 'a -> 'b)  (_:'a Stream): 'b Stream = jsNative
///**Description**
///Perform a side effect for each event in a Stream.
/// * `-a-b-c-d-> = stream`
/// * `-a-b-c-d-> = tap (fun _ -> ()) stream`
///For each event in stream, f is called, but the value of its result is ignored. If f fails (i.e., throws an error), then the returned Stream will also fail. The Stream returned by tap will contain the same events as the original Stream.
let tap (_: 'a -> unit)  (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Replace each event value with x.
/// * `-a-b-c-d-> = stream`
/// * `-x-x-x-x-> = constant "x" stream`
///`constant "tick" (periodic 1000)`
let constant (_: 'b)  (_: 'a Stream): 'b Stream = jsNative
///**Description**
///Incrementally accumulate results, starting with the provided initial value.
/// * `-1-2-3-> = stream`
/// * `01-3-6-> = scan (+) 0 stream`
let scan (_: 'b -> 'a -> 'b)  (_: 'b) (_: 'a Stream): 'b Stream = jsNative
///**Description**
///Keep at most the first n events from stream.
/// * `-a-b-c-d-e-f-> = stream`
/// * `-a-b-c| ______ = take 3 stream`
/// * `-a-b| ________ = stream`
/// * `-a-b| ________ = take 3 stream`
///If stream contains fewer than n events, the returned Stream will effectively be equivalent to stream.
let take (_: int) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Discard the first n events from stream.
/// * `-a-b-c-d-e-f-> = stream`
/// * `-------d-e-f-> = skip(3, stream)`
/// * `-a-b-c-d-e| = stream`
/// * `-------d-e| = skip(3, stream)`
/// * `-a-b-c|  = stream`
/// * `------|  = skip(3, stream)`
///If stream contains fewer than n events, the returned Stream will be empty.
let skip (_: int) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Keep all events until predicate returns false, and discard the rest.
/// * `-2-4-5-6-8-> = stream`
/// * `-2-4-| _____ = takeWhile even stream`
let takeWhile (_: 'a -> bool) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Discard all events until predicate returns false, and keep the rest.
/// * `-2-4-5-6-8-> = stream`
/// * `-----5-6-8-> = skipWhile even stream`
let skipWhile (_: 'a -> bool) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Discard all events after the first event for which predicate returns true.
/// * `-1-2-3-4-5-6-8-> = stream`
/// * `-1-2| __________ = skipAfter even stream`
let skipAfter (_: 'a -> bool) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Keep all events in one Stream until the first event occurs in another.
/// * `-a-b-c-d-e-f-> = stream`
/// * `------z-> ____ = endSignal`
/// * `-a-b-c| ______ = until endSignal stream`
///Note that if endSignal has no events, then the returned Stream will effectively be equivalent to the original.
///Keep only 3 seconds of events, discard the rest.
let until (_: 'b Stream) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Discard all events in one Stream until the first event occurs in another.
/// * `-a-b-c-d-e-f-> = stream`
/// * `------z-> ____ = startSignal`
/// * `-------d-e-f-> = since startSignal stream`
///Note that if startSignal has no events, then the returned Stream will effectively be equivalent to never.
///Discard events for 3 seconds, keep the rest.
///`since (at 3000. ()), stream`
let slice (_: int) (_: int) (_: 'a Stream): 'a Stream = jsNative
///**Description**
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
let during (_: 'b Stream Stream) (_: 'a Stream): 'a Stream = jsNative
let delay  (_: float) (_: 'a Stream): 'a Stream = jsNative
let merge (_: 'A Stream) (_: 'A Stream): 'A Stream = jsNative
let mergeConcurrently (_: int) (_: 'a Stream Stream): 'a Stream = jsNative
let multicast (_: Stream<'A>): Stream<'A> = jsNative
let combine  (_: 'a -> 'b -> 'ab) (_: 'a Stream) (_:'b Stream): 'ab Stream = jsNative
let ap (_: ('a -> 'b) Stream) (_: 'a Stream): 'b Stream = jsNative
let chain (_: ('a -> 'b Stream)) (_: 'a Stream): 'b Stream = jsNative
let join (_: 'a Stream Stream): 'a Stream = jsNative
let runEffects (_: 'a Stream) (_: Scheduler): Promise<unit> = jsNative
let run (_: 'a Sink) (_: Scheduler) (_: 'a Stream): Disposable = jsNative
let concatMap  (_: 'a -> 'b Stream) (_: 'a Stream): 'b Stream = jsNative
let continueWith (_: (unit -> 'a Stream)) (_: 'a Stream): Stream<'a> = jsNative
let recoverWith  (_: Error -> 'a Stream) (_: 'a Stream): 'a Stream = jsNative
///**Description**
///Create a Stream that fails with the provided Error at time 0. This can be useful for functions that need to return a Stream and also need to propagate an error.
/// * `X = throwError (Error.Create "")`
let throwError (_: Error): 'a Stream = jsNative
let filter (_: ('a -> bool)) (_: 'a Stream): 'a Stream = jsNative
let skipRepeats (_: 'a Stream): 'a Stream = jsNative
let skipRepeatsWith (_: ('a -> 'a -> bool)) (_: 'a Stream): 'a Stream = jsNative
let throttle (_: int) (_: 'a Stream): 'a Stream = jsNative
let debounce (_: int) (_: 'a Stream): 'a Stream = jsNative
