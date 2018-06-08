namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)

module Pith =

    let return' p =
        Pith p

    let map f (Pith p) =
        Pith <| fun o -> p (o << f)

    let bind f (Pith pa) =
        Pith <| fun ob ->
            pa <| fun oa ->
                let (Pith pb) = f oa
                pb ob

    let fish f g a =
        Pith <| fun oc ->
            let (Pith pithB) = f a
            pithB <| fun b ->
                let (Pith pithC) = g b
                pithC oc

    let tree deltaC (Pith pith) =
        let mutable list = []
        pith (fun a -> list <- a :: list)
        deltaC list

    let see =
        return' <| fun o ->
            o 0
            o 1
            o 2
        |> map ((+) 1)
        |> (
            bind <| fun a ->
                return' <| fun o ->
                    o <| "A" + string a
                    o <| "B" + string a
                    o <| "O" + string a
        )
        |> tree (List.fold (+) "")

    printfn "rez: %A" see
