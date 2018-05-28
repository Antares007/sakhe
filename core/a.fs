namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)

module A =

    let tree f s (Pith pith) =
        let mutable list = []
        pith (fun a -> list <- a :: list)
        List.fold f s list
