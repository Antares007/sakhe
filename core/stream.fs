module Sakhe.Stream

type T<'a> = Stream of (Sink.T<'a> -> TimeIO.T)

let return' f = Stream <| f

let run sink (Stream s) =
    s sink


let now a = return' <| fun sink -> TimeIO.return' <| fun o -> function
    | IO.Catch _ -> failwith "never"
    | IO.Try now ->
        Sink.Send.event now a sink
        Sink.Send.end' now sink
