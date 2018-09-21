module Sakhe.Stream

type T<'a> = Stream of (Sink.T<'a> -> TimeIO.T)

let return' f = Stream <| f

let run (Stream s) sink =
    s sink

let now a = Stream <| fun sink -> TimeIO.return' <| fun i -> Pith <| fun o ->
    match i with
    | IO.Catch _ -> failwith "never"
    | IO.Try now ->
        Sink.Send.event now a sink
        Sink.Send.end' now sink

let periodic period =
    let rec io sink i = Pith <| fun o ->
        match i with
        | IO.Catch _ -> failwith "never"
        | IO.Try now ->
            Sink.Send.event now () sink
            o << TimeIO.O.delay period <| io sink
    Stream <| fun sink -> TimeIO.return' <| fun i -> io sink i
