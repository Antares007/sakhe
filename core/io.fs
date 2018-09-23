module Sakhe.IO
open System
open Fable.Core

type [<Erase>] T<'i, 'o, 'b> = IO of ('i -> Pith<'o, 'b>)

let return' f = IO <| (Pith << f)

let map f (IO io) = IO <| fun i ->
    let (Pith p) = io i
    Pith <| f p

let bind g (IO io) = IO <| fun i ->
    let (Pith p) = io i
    let (IO io) = g p
    io i

let inline append l r =
    l |> bind (fun lpith -> r |> bind (fun rpith -> return' <| fun () o -> lpith o + rpith o))

let run (i: 'i) (o: O<'o, 'a>) (IO (io: 'i -> Pith<'o, 'b>)) =
    Pith.run o (io i)
