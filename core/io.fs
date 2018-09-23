module Sakhe.IO
open Fable.Core

type [<Erase>] T<'i, 'o, 'b> = IO of ('i -> Pith.T<'o, 'b>)

let return' f = IO <| (Pith.return' << f)

let map f (IO io) = IO <| (f << io)
    // Pith <| f p

let bind g (IO io) = IO <| fun i ->
    let p = io i
    let (IO io) = g p
    io i

let inline append l r =
    l |> bind (fun lpith ->
    r |> bind (fun rpith ->
        IO <| fun () -> Pith.append lpith rpith))

let run i o (IO io) =
    Pith.run o (io i)
