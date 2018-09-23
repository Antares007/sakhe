namespace Sakhe

open System
open Fable.Import.Node.Base.NodeJS
module S =
    open Sakhe.S

    type I<'a> =
        | Event of Time.T * 'a
        | End   of Time.T
        | Error of Time.T * exn
    and O<'a> =
        private
        | Run of T<'a>
        | Delay of Time.Delay * T<'a>
        | Dispose of IDisposable
        | Periodic of Time.Delay * T<'a>
    and T<'a> = Stream of (Pith<I<'a>, IO.T<Time.T, O<'a>, unit>>)

    let return' f = Stream << Pith <| fun s ->
        IO.return' <| fun i o -> f s i o

    let run now sink (Stream s) =
        let o = O.return' (fun () a -> sink a) ()
        let io = Pith.run o s
        let o2 = O.return' Disposable.append Disposable.empty |> O.contraMap (fun _ -> Disposable.empty)
        IO.run now o2 io
        o2.Value

    let see1 a = return' <| fun sink time o ->
        try
            sink <| Event (time, a)
            sink <| End (time)
        with err ->
            sink <| Error (time, err)

module Stream =
    type T<'a> = Stream of (Sink.T<'a> -> TimeIO.T)

    let return' f = Stream <| f

    let run (Stream s) sink =
        s sink

    let now a = Stream <| fun sink -> TimeIO.return' <| fun i o ->
        match i with
        | IO.TaskIO.Catch _ -> failwith "never"
        | IO.TaskIO.Try now ->
            Sink.Send.event now a sink
            Sink.Send.end' now sink

    let periodic period =
        let rec io sink = TimeIO.return' <| fun i o ->
            match i with
            | IO.TaskIO.Catch _ -> failwith "never"
            | IO.TaskIO.Try now ->
                Sink.Send.event now () sink
                o << TimeIO.O.delay period <| io sink
        Stream <| io
