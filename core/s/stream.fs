module Sakhe.S.Stream
open Sakhe.S

type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable.T)

let return' f = Stream <| fun (sink, scheduler) ->
    f sink scheduler

let run scheduler sink (Stream f) =
    f (sink, scheduler)

/// Create a stream with its own local clock
/// This transforms time from the provided scheduler's clock to a stream-local
/// clock (which starts at 0), and then *back* to the scheduler's clock before
/// propagating events to sink.  In other words, upstream sources will see local times,
/// and downstream sinks will see non-local (original) times.let withLocalTime t upStream =
let withLocalTime t upStream = Stream <| fun (downStreamSink, downScheduler) ->
    // let downClock = Scheduler.getClock downScheduler
    // let upprClock = Time.Clock.localClock downClock
    Disposable.empty

let fromTask2 delay period f = Stream <| fun (sink, scheduler) ->
    Scheduler.schedule delay period (Task.return' <| f sink scheduler) scheduler

let map f source = Stream <| fun (sink, scheduler) ->
    source |> run scheduler (Sink.map f sink)

let filter p source = Stream <| fun (sink, scheduler) ->
    source |> run scheduler (Sink.filter p sink)

let filterMap f p source = Stream <| fun (sink, scheduler) ->
    source |> run scheduler (Sink.filterMap f p sink)

let skipRepeats eq source = Stream <| fun (sink, scheduler) ->
    source |> run scheduler (Sink.skipRepeats eq sink)

let inline mappendArray f sources = Stream <| fun (sink, scheduler) ->
    Disposable.appendArray (
        f (Array.length sources) sink
        |> Array.mapi (fun i sink -> run scheduler sink sources.[i]))

let combineArray sources =
    mappendArray Sink.combineArray sources

let mergeArray sources =
    mappendArray Sink.mergeArray sources


(*
    Construction
*)

/// Create a Stream containing no events and ends immediately.
/// ```
/// empty(): |
/// ```
let empty<'a> = Stream <| fun (sink: Sink.T<'a>, scheduler) ->
    scheduler |> Scheduler.schedule None None (Task.return' <| function
        | Task.I.Run (t, s) ->
            sink |> Sink.Send.end' t
            None
        | Task.I.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)
let empty2<'a> =
    (fun (s: Sink.T<'a>) _ -> function
    | Task.I.Run (t, cs) ->
        s |> Sink.Send.end' t
        None
    | Task.I.Exn ((t, _), err) ->
        s |> Sink.Send.error t err
        None)
    |> fromTask2 None None

let startWith a source =
    (fun (s: Sink.T<'a>) scheduler -> function
    | Task.I.Run (t, cs) ->
        s |> Sink.Send.event t a
        Some <| run scheduler s source
    | Task.I.Exn ((t, _), err) ->
        s |> Sink.Send.error t err
        None)
    |> fromTask2 None None


/// Create a Stream containing no events and never ends.
/// ```
/// never(): ---->
/// ```
let never<'a> = Stream <| fun (_: Sink.T<'a>, _) -> Disposable.empty

/// Create a Stream containing a single event at time 0.
/// ```
/// now(x): x|
/// ```
let now a = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None None (Task.return' <| function
        | Task.I.Run (t, s) ->
            sink |> Sink.Send.event t a
            sink |> Sink.Send.end' t
            None
        | Task.I.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

/// Create a Stream containing a single event at a specific time.
/// ```
/// at(3, x): --x|
/// ```
let at delay a = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule (Some delay) None (Task.return' <| function
        | Task.I.Run (t, s) ->
            sink |> Sink.Send.event t a
            sink |> Sink.Send.end' t
            None
        | Task.I.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

/// Create an infinite Stream containing events that occur at a specified Period. The first event occurs at time 0, and the event values are undefined.
/// ```
/// periodic(3): x--x--x--x-->
/// ```
let periodic period = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None (Some period) (Task.return' <| function
        | Task.I.Run (t, s) ->
            sink |> Sink.Send.event t ()
            None
        | Task.I.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

/// Create a Stream that fails with the provided Error at time 0. This can be useful for functions that need to return a Stream and also need to propagate an error.
/// ```
/// throwError(X): X
/// ```
let throwError err = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None None (Task.return' <| function
        | Task.I.Run (t, s) ->
            sink |> Sink.Send.error t err
            None
        | Task.I.Exn ((t, _), err) ->
            raise err
            None)
