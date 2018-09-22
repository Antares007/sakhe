module Sakhe.Stream

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
