module Sakhe.Stream1

open System
open Sakhe

type T<'a> = private Stream of ((Scheduler1.T -> IDisposable) -> Pith.T<O<'a>, IDisposable>)

and O<'a> =
    | Event of Time.T * 'a
    | End of Time.T
    | Error of Time.T * exn

let inline pair a b = (a, b)

module Scheduler1 =
    let delay d f =
        Scheduler1.Delay << pair (Time.Delay.return' d) << Scheduler1.return'
        <| fun i -> Pith.return' <| fun o -> f i o
    let now f =
        Scheduler1.Now << Scheduler1.return'
        <| fun i -> Pith.return' <| fun o -> f i o
    let Of f = Scheduler1.return' <| fun i -> Pith.return' <| fun o -> f i o

let timer delay task =
    if delay = Time.Delay.zero then
        let mutable canceled = false
        Fable.Import.JS.Promise.resolve(task).``then``(fun t ->
             if not canceled then t())
        |> ignore
        Disposable.return' (fun () -> canceled <- true)
    else
        let token = Fable.Import.JS.setTimeout task (Time.Delay.unbox delay)
        Disposable.return' <| fun () -> Fable.Import.JS.clearTimeout token

let tf() =
    Time.return' <| System.Math.Floor(Fable.Import.Browser.performance.now())
let run o (Stream io) = Pith.run2 (io <| (Scheduler1.run tf timer)) o

let Of f = Stream <| fun run -> Pith.return' <| fun sinkO -> f run sinkO

let now a =
    Stream <| fun run -> Pith.return' <| fun oS ->
        run << Scheduler1.return' <| fun t -> Pith.return' <| fun o' ->
            o' << Scheduler1.O.delay 0 <| fun t -> Pith.return' <| fun _ ->
                try
                    oS <| Event(t, ())
                    oS <| End(t)
                with err -> oS <| Error(t, err)

let unit =
    Stream <| fun run ->
        Pith.return' <| fun s ->
            run << Scheduler1.Of <| fun _ o ->
                o << Scheduler1.delay 0 <| fun t _ ->
                    try
                        s <| Event(t, ())
                        s <| End(t)
                    with err -> s <| Error(t, err)
let empty<'a> =
    Stream
    <| fun run -> Pith.return' <| fun (s : O<'a> -> unit) -> Disposable.empty

let map f (Stream io) =
    Stream <| fun run ->
        Pith.return' <| fun o ->
            Pith.run2 (io run) <| function
            | O.Event(t, a) -> o << Event <| (t, f a)
            | O.End(t) -> o << End <| (t)
            | O.Error(t, err) -> o << Error <| (t, err)

let merge (Stream a) (Stream b) =
    Stream <| fun run ->
        Pith.return' <| fun o ->
            let mutable disposable = Disposable.empty
            let mutable endCount = 0

            let o' =
                function
                | O.End t ->
                    endCount <- endCount + 1
                    if endCount = 2 then o << End <| t
                | O.Error(a, b) ->
                    disposable.Dispose()
                    o << Error <| (a, b)
                | O.Event(t, a) -> o << Event <| (t, a)

            let da = Pith.run2 (a run) o'
            let db = Pith.run2 (b run) o'
            disposable <- Disposable.append da db
            disposable

let join (Stream ioOfStreams) =
    Stream <| fun run ->
        Pith.return' <| fun s ->
            let mutable i = 1
            let index = 0
            let mutable map = Map.empty
            let disposable =
                Disposable.return'
                <| fun () -> Map.iter (fun _ d -> Disposable.dispose d) map

            let end' t index =
                map <- Map.remove index map
                if map = Map.empty then s << End <| t

            let error' t err =
                disposable.Dispose()
                s << Error <| (t, err)

            let d = Pith.run2 (ioOfStreams run) <| function
                | O.Event(ot, (Stream io)) ->
                    let index = i
                    i <- i + 1
                    let d = Pith.run2 (io <| run) <| function
                        | O.Event(it, a)   -> s << Event <| (ot + it, a)
                        | O.End  (it)      -> end' (ot + it) index
                        | O.Error(it, err) -> error' (ot + it) err
                    map <- Map.add index d map
                | O.End t -> end' t index
                | O.Error(t, err) -> error' t err
            map <- Map.add index d map
            disposable

let bind f io = join << map f <| io
