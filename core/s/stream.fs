module Sakhe.S.Stream
open Sakhe.S

type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable.T)

let return' f = Stream <| fun (sink, scheduler) -> f sink scheduler

let run scheduler sink (Stream f) =
    f (sink, scheduler)

let map f source = Stream <| fun (sink, scheduler) ->
    source |> run scheduler (Sink.map f sink)

let now a = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None None (Task.return' <| function
        | Task.On.Run (t, s) ->
            sink |> Sink.event t a
            sink |> Sink.end' t
            None
        | Task.On.Exn ((t, _), err) ->
            sink |> Sink.error t err
            None)

let periodic period = Stream <| fun (sink, scheduler) ->
    scheduler |> Scheduler.schedule None (Some period) (Task.return' <| function
        | Task.On.Run (t, s) ->
            sink |> Sink.event t ()
            None
        | Task.On.Exn ((t, _), err) ->
            sink |> Sink.error t err
            None)
