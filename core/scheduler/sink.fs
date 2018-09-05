module Sakhe.Stream.Sink
open Sakhe.Scheduler

type Event<'a> =
    | Event of Time * 'a
    | End   of Time
    | Exn   of Time * exn

type T<'a> = Sink of (Event<'a> -> unit)

let return' f = Sink f

let map f (Sink g) = Sink <| function
    | Event (t, a)   -> g (Event (t , f a))
    | End   (t)      -> g (End   (t))
    | Exn   (t, exn) -> g (Exn   (t, exn))

let event' t a (Sink g) = g (Event (t , a))
let end'   t   (Sink g) = g (End   (t))
let exn'   t   (Sink g) = g (Exn   (t))
