module Sakhe.Stream
open System
open System.Diagnostics.Tracing

type T<'a> = Stream of IO.T<Sink.T<'a>, O<'a>, unit>
and O<'a> =
    | Now of 'a
    | Delay of Time.Delay * 'a
    | Never
    | Empty
    | ThrowError of exn

let now a sink = Scheduler.return' <| fun now o ->
    o << Scheduler.O.delay 0 <| fun now o ->
        try
            Sink.Send.event now a sink
            Sink.Send.end' now sink
        with err ->
            Sink.Send.error now err sink

let rec run tf timer io =
    let disposable = Scheduler.run tf timer << Scheduler.return' <| fun i o ->
        IO.run i (O.proxy o) io
    disposable
