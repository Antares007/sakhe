namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)

module A =
    [<Erase>] type DeltaC<'a, 'b> = DeltaC of ('a list -> 'b)

    let tree (DeltaC deltac) (Pith pith) =
        let mutable list = []
        pith (fun a -> list <- a :: list)
        deltac list
