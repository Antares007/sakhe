module Sakhe.Stream
open System

type T<'a> = Stream of IO.T<Sink.T<'a>, O, unit>
and O =
    | Now of IO.T<Time.T, O, unit>
    | Delay of Time.Delay * IO.T<Time.T, O, unit>
    | Dispose of (unit -> Time.T) * IDisposable


let now a = (Stream << IO.return') <| fun sink o ->
    o <| Delay (Time.Delay.zero, IO.return' <| fun now o ->
        try
            Sink.Send.event now a sink
            Sink.Send.end' now sink
        with err ->
            Sink.Send.error now err sink)


let rec run tf timer io =

    let disposable = Scheduler.run tf timer << Scheduler.return' <| fun i o ->
        IO.run i (O.proxy o) io

    disposable
