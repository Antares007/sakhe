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

    let fish f g a = bind g (f a)

    let toList (Pith pith) =
        let mutable list = []
        pith <| fun a -> list <- a :: list
        list

    let tree deltaC pith =
        pith |> toList |> deltaC

    type PithBuilder() =
        member __.Return(a) = return' a
        member __.ReturnFrom(a): Pith<'a> = a
        member __.Bind(m, f) = bind f m
    let p =  PithBuilder()

(*
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
    |> printfn "rez: %A"

    let p0 = p { return fun o ->
        o 0
        o 1
        o 2
    }

    let (Pith p1) = p {
        let! a = p0
        let str = string (a + 1)
        return fun o ->
            o <| "A" + str
            o <| "B" + str
            o <| "O" + str
    }

    p1 <| printfn "%A"
*)
