module Sakhe.Stream
open System
open System.Collections.Generic

type T<'a> =
    private
    | Stream of ((Scheduler.O -> IDisposable) -> Pith<O<'a>, IDisposable>)
and O<'a> =
    | Event of float * 'a
    | End of float
    | Error of float * exn
let run run o (Stream io) = P.run o (io run)
let pair a b = (a, b)
let at a b = Stream <| fun run -> P <| fun o ->
    run << Scheduler.Delay << pair b <| fun t -> P <| fun _ ->
        try
            o <| Event(t, a)
            o <| End(t)
        with err ->
            o <| Error(t, err)
let now a = at a 0.
let empty<'a> = Stream <| fun run -> P <| fun (s : O<'a> -> unit) -> Disposable.empty
let map f (Stream io) = Stream <| fun run -> P <| fun o ->
    P.run <| function
        | O.Event(t, a) -> o << Event <| (t, f a)
        | O.End(t) -> o << End <| (t)
        | O.Error(t, err) -> o << Error <| (t, err)
    <| (io run)
let merge (Stream a) (Stream b) = Stream <| fun run -> P <| fun o ->
    let map = new Dictionary<int, IDisposable>()
    let disposable = Disposable.return' <| fun () -> for key in map.Keys do map.[key].Dispose()
    let o' k = function
        | O.Event(t, a) ->
            o << Event <| (t, a)
        | O.End t       ->
            map.Remove k |> ignore
            if map.Count = 0 then o << End <| t
        | O.Error(a, b) ->
            disposable.Dispose()
            o << Error <| (a, b)
    map.Add(0, P.run (o' 0) (a run))
    map.Add(1, P.run (o' 1) (b run))
    disposable
let join (Stream io) = Stream <| fun run -> P <| fun o ->
    let mutable i = 0
    let map = new Dictionary<int, IDisposable>()
    let disposable = Disposable.return' <| fun () -> for key in map.Keys do map.[key].Dispose()
    let end' t index =
        map.Remove index |> ignore
        if map.Count = 0 then o << End <| t
    let error' t err =
        disposable.Dispose()
        o << Error <| (t, err)
    let index = i
    i <- i + 1
    let d =
        P.run <| function
            | O.Event(t, (Stream io)) ->
                let index = i
                i <- i + 1
                let d =
                    P.run <| function
                        | O.Event(t', a)   -> o << Event <| (t + t', a)
                        | O.End(t')        -> end' (t + t') index
                        | O.Error(t', err) -> error' (t + t') err
                    <| (io <| run)
                map.Add (index, d)
            | O.End t -> end' t index
            | O.Error(t, err) -> error' t err
        <| io run
    map.Add (index, d)
    disposable
let bind f io = join << map f <| io
