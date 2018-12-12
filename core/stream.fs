module Sakhe.Stream
open System
open System.Collections.Generic

type T<'a> =
    | Stream of ((Scheduler.O -> IDisposable) -> Pith<O<'a>, IDisposable>)
and O<'a> =
    | Event of float * 'a
    | End of float
    | Error of float * exn
let run run o (Stream io) = P.run o (io run)
let pair a b = (a, b)
let at d a = Stream <| fun run -> P <| fun o ->
    run << Scheduler.Delay << pair d <| fun t -> P <| fun _ ->
        try
            o <| Event(t, a)
            o <| End(t)
        with err ->
            o <| Error(t, err)
let now a = at 0. a
let on (event: string) (et: Fable.Import.Browser.EventTarget) = Stream <| fun schedule -> P <| fun o ->
    let mutable d = Disposable.empty
    let d' = schedule << Scheduler.Origin <| fun t' -> P <| fun o' ->
        let listener (e :Fable.Import.Browser.Event) =
            schedule << Scheduler.Origin <| fun t -> P <| fun _ ->
                o <| Event (t - t', e)
            |> ignore
        et.addEventListener (event, (Fable.Core.U2.Case1 listener))
        d <- Disposable.return' <| fun () ->
            et.removeEventListener (event, (Fable.Core.U2.Case1 listener))
    Disposable.append d' (Disposable.return' <| fun () -> d.Dispose())
let periodic period a = Stream <| fun run -> P <| fun o ->
    let rec schedule = fun t -> P <| fun o' ->
        // o' << Scheduler.Origin <| fun t -> P <| fun _ ->
        try
            o <| Event(t, a)
            o' << Scheduler.Delay <| (period, schedule)
        with err ->
            o <| Error(t, err)
    run << Scheduler.Delay <| (0., schedule)
let empty<'a> = Stream <| fun run -> P <| fun (s : O<'a> -> unit) -> Disposable.empty
let map f (Stream io) = Stream <| fun run -> P <| fun o ->
    P.run <| function
        | O.Event(t, a) -> o << Event <| (t, f a)
        | O.End(t) -> o << End <| (t)
        | O.Error(t, err) -> o << Error <| (t, err)
    <| (io run)
let tap f (Stream io) = Stream <| fun run -> P <| fun o ->
    P.run <| function
        | O.Event(t, a) as e -> f a; o e
        | x -> o x
    <| (io run)
let take n (Stream io) = Stream <| fun run -> P <| fun o ->
    let mutable i = 0
    let mutable d = Disposable.empty
    d <- P.run <| function
        | O.Event(t, a) ->
            if i < n then
                o << Event <| (t, a)
            i <- i + 1
            if i = n then
                d.Dispose()
                o << End <| (t)
        | O.End(t) -> o << End <| (t)
        | O.Error(t, err) -> o << Error <| (t, err)
    <| (io run)
    d
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
