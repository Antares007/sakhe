module Sakhe.Stream
open System

type T<'a> = Stream of Abo.T<Sink.T<'a>, unit, O>
and O =
    | Now of Abo.T<Time.T, unit, O>
    | Delay of Time.Delay * Abo.T<Time.T, unit, O>
    | Dispose of ((unit -> Time.T) -> IDisposable)
