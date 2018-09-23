namespace Sakhe
open System

module S2 =
    open Sakhe.S

    type I<'a> =
        | Event of Time.T * 'a
        | End   of Time.T
        | Error of Time.T * exn
    and T<'a> = Stream of (Pith<I<'a>, IO.T<Time.T, IDisposable, unit>>)

    let return' f = Stream << Pith <| fun s ->
        IO.return' <| fun i o -> f s i o

    let rec run now sink (Stream pith) =
        let o = O.return' (fun () a -> sink a) ()
        let io = Pith.run o pith
        let o2 = O.return' Disposable.append Disposable.empty
        try
            IO.run now o2 io
        with err ->
            try o2.Value.Dispose() with _ -> ()
            sink <| Error (now, err)
        o2.Value



    let now a = return' <| fun sink time o ->
        sink <| Event (time, a)
        sink <| End (time)

    let periodic period = return' <| fun sink now o ->
        let d1 = new Disposable.SettableDisposable()
        let d2 = new Disposable.SettableDisposable()
        o d1
        o d2
        let send now =
            sink <| Event (now, ())
            let token = Fable.Import.JS.setTimeout (fun () ->

                                                        ()) (Time.Delay.unbox period)
            d1.Set << Disposable.return' <| fun () -> Fable.Import.JS.clearTimeout token

        send now


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
