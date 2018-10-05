module Sakhe.Abo

type T<'a, 'b, 'o> =
    private
    | Abo of ('a -> Pith.T<'o, 'b>)

let mappend mappend (Abo l) (Abo r) = Abo <| fun i -> Pith.mappend mappend (l i) (r i)

let return' f = Abo <| f

let empty<'i, 'o> = Abo <| fun (_: 'i) -> (Pith.empty: Pith.T<'o, unit>)

let map f (Abo io) = Abo <| (f << io)

let run i (Abo io) = io i

let contraMap g io = Abo <| fun i -> run (g i) io

let pmap f (Abo io) = Abo <| fun i -> Pith.pmap f (io i)

let bind g (Abo io) = Abo <| fun i ->
    let p = io i
    let (Abo io) = g p
    io i
