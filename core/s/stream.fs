module Sakhe.S.Stream
open Sakhe.S

type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable.T)

let return' f = Stream <| fun (sink, scheduler) ->
    f sink scheduler

let run scheduler sink (Stream f) =
    f (sink, scheduler)

let fromTask
     delay period t = Stream <| fun (sink, scheduler) ->
    let s t = function
        | Sink.Now.Event a -> Sink.unbox sink <| Sink.On.Event (t, a)
        | Sink.Now.End -> Sink.unbox sink <| Sink.On.End t
        | Sink.Now.Error err -> Sink.unbox sink <| Sink.On.Error (t, err)
    scheduler
    |> (Task.return' <| t
        |> Task.map (fun (time, cs) -> s time, cs)
        |> Scheduler.schedule delay period)

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
        | Task.On.Run (t, s) ->
            sink |> Sink.Send.end' t
            None
        | Task.On.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

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
        | Task.On.Run (t, s) ->
            sink |> Sink.Send.event t a
            sink |> Sink.Send.end' t
            None
        | Task.On.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

/// Create a Stream containing a single event at a specific time.
/// ```
/// at(3, x): --x|
/// ```
let at delay a = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule (Some delay) None (Task.return' <| function
        | Task.On.Run (t, s) ->
            sink |> Sink.Send.event t a
            sink |> Sink.Send.end' t
            None
        | Task.On.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

/// Create an infinite Stream containing events that occur at a specified Period. The first event occurs at time 0, and the event values are undefined.
/// ```
/// periodic(3): x--x--x--x-->
/// ```
let periodic period = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None (Some period) (Task.return' <| function
        | Task.On.Run (t, s) ->
            sink |> Sink.Send.event t ()
            None
        | Task.On.Exn ((t, _), err) ->
            sink |> Sink.Send.error t err
            None)

/// Create a Stream that fails with the provided Error at time 0. This can be useful for functions that need to return a Stream and also need to propagate an error.
/// ```
/// throwError(X): X
/// ```
let throwError err = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None None (Task.return' <| function
        | Task.On.Run (t, s) ->
            sink |> Sink.Send.error t err
            None
        | Task.On.Exn ((t, _), err) ->
            raise err
            None)
