module Sakhe.IO
open Fable.Core

type T<'i, 'o, 'b> =
    private
    | IO of ('i -> Pith.T<'o, 'b>)

let mappend mappend (IO l) (IO r) =
    IO <| fun i -> Pith.mappend mappend (l i) (r i)

let return' f =
    IO <| (Pith.return' << f)

let empty<'i, 'o> =
    IO <| fun (_: 'i) -> (Pith.empty: Pith.T<'o, unit>)

let map f (IO io) =
    IO <| (f << io)

let run i o (IO io) =
    Pith.run o (io i)

let contraMap g (io) = return' <| fun i o -> run (g i) (O.proxy o) io

let pmap f = map << Pith.pmap <| f

let bind g (IO io) =
    IO <| fun i ->
        let p = io i
        let (IO io) = g p
        io i
