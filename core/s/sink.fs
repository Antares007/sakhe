module Sakhe.S.Sink

type On<'a> =
    | Event of Time.T * 'a
    | End   of Time.T
    | Error of Time.T * exn

type T<'a> = Sink of (On<'a> -> unit)

let return' f = Sink f

let map f (Sink g) = Sink <| function
    | Event (t, a)   -> g << Event <| (t, f a)
    | End   (t)      -> g << End   <| (t)
    | Error (t, err) -> g << Error   <| (t, err)

let event  t a   (Sink g) = g << Event <| (t,  a)
let end'   t     (Sink g) = g << End   <| (t)
let error  t err (Sink g) = g << Error   <| (t, err)
