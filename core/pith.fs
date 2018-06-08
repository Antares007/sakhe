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
            pa <| fun a ->
                let (Pith pb) = f a
                pb ob

    let fish f g a =
        Pith <| fun oc ->
            let (Pith bp) = f a
            bp <| fun b ->
                let (Pith pc) = g b
                pc oc

    let tree deltaC (Pith pith) =
        let mutable list = []
        pith (fun a -> list <- a :: list)
        deltaC list

    type PithBuilder() =
        member inline __.Return(a) = return' a
        member inline __.Bind(m, f) = bind f m
    let p =  PithBuilder()

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

    let p0 = p { return fun o ->
        o 0
        o 1
        o 2
    }

    let p1 = p {
        let! a = p0
        let str = string (a + 1)
        return fun o ->
            o <| "A" + str
            o <| "B" + str
            o <| "O" + str
    }

    printfn "rez: %A" see
    p1 |> tree (List.fold (+) "") |> printfn "rez: %A"
