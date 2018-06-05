namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)

module Pith =
    let map f (Pith p) = Pith <| fun o -> p (o << f)

    let tree deltaC (Pith pith) =
        let mutable list = []
        pith (fun a -> list <- a :: list)
        deltaC list
