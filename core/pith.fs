namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)

[<RequireQualifiedAccess>]
module Pith =
    let empty =
        Pith ignore

    let filter f (Pith p) =
        Pith <| fun o -> p (fun a -> if f a then o a)

    let map f (Pith p) =
        Pith <| fun o -> p (o << f)

    let append (Pith f) (Pith s) =
        Pith <| fun o -> f o; s o

    let fold f s (Pith pith) =
        let mutable state = s
        pith <| fun a -> state <- f state a
        state

    let toList (Pith pith) =
        let mutable list = []
        pith <| fun a -> list <- a :: list
        list

    let tree deltaC pith =
        pith |> toList |> deltaC
