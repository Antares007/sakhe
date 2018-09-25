module Sakhe.IO
open Fable.Core

type [<Erase>] T<'i, 'o, 'b> =
    | IO of ('i -> Pith.T<'o, 'b>)
    static member inline (+) ((IO l), (IO r)) = IO <| fun i -> l i + r i


let return' f = IO <| (Pith.return' << f)

let empty<'i, 'o> = return' <| fun (_: 'i) (_: 'o -> unit) -> ()

let map f (IO io) = IO <| (f << io)

let pmap f = map << Pith.pmap <| f

let bind g (IO io) = IO <| fun i ->
    let p = io i
    let (IO io) = g p
    io i

let inline append (IO l) (IO r) =
    IO <| fun i -> Pith.append (l i) (r i)

let run i o (IO io) =
    Pith.run o (io i)
