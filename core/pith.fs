namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)
[<Erase>] type DeltaC<'a, 'b> = DeltaC of ('a list -> 'b)

module Pith =

    let tree (DeltaC deltac) (Pith pith) =
        let mutable list = []
        pith (fun a -> list <- a :: list)
        deltac list
