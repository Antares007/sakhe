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
    abstract ``run``: sink: Sink<'A> * scheduler: Scheduler -> Disposable
    abstract ``event``: time: Time * value: 'A -> unit
    abstract ``error``: time: Time * error: Error -> unit
    abstract ``end``: time: Time -> unit
    abstract ``add``: sink: Sink<'A> -> float
    abstract ``remove``: sink: Sink<'A> -> float
    abstract ``dispose``: unit -> unit

type [<AllowNullLiteral>] ``MulticastSourceStatic`` =
    [<Emit "new $0($1...)">] abstract Create: source: Stream<'A> -> MulticastSource<'A>

type [<Pojo>] SeedValue<'S, 'V> = { seed: 'S; value: 'V }

type [<AllowNullLiteral>] IExports =
    abstract ``runEffects``: stream: Stream<'T> * Scheduler -> Promise<unit>
    abstract ``run``: sink: Sink<'A> * Scheduler * Stream<'A> -> Disposable

    abstract ``propagateTask``: run: (float -> 'A -> Sink<'A> -> unit) * 'A * Sink<'A> -> PropagateTask<'A>
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

    abstract ``mergeConcurrently``: concurrency: float * Stream<Stream<'A>> -> Stream<'A>

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
