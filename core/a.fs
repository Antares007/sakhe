module Sakhe.A

[<Fable.Core.Erase>]
type Pith<'a> = Pith of (('a -> unit) -> unit)

[<Fable.Core.Erase>]
type DeltaC<'a, 'b> = DeltaC of ('a list -> 'b)

let pmap f (Pith pith) = Pith (f pith)

let tree (DeltaC deltac) (Pith pith) =
    let mutable list = []
    pith (fun a -> list <- a :: list)
    deltac list
