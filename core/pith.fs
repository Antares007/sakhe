namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)

module Pith =
    let inline unit< ^a when ^a : (static member Unit : ^a)> () : ^a =
      (^a : (static member Unit : ^a) ())
    let inline combine< ^a when ^a: (static member Combine : ^a * ^a -> ^a )> l r =
      (^a : (static member Combine : ^a * ^a -> ^a) (r, l))

    let return' p =
        Pith p

    let map f (Pith p) =
        Pith <| fun o -> p (o << f)

    let toList (Pith pith) =
        let mutable list = []
        pith <| fun a -> list <- a :: list
        list

    let inline run p = toList p |> List.fold combine (unit ())

    let inline bind f pa =
        Pith <| fun ob ->
            let a = run pa
            let (Pith pb) = f a
            pb ob

    let inline fish f g a = bind g (f a)

    let tree deltaC pith =
        pith |> toList |> deltaC

    type PithBuilder() =
        member __.Return(a) = return' a
        member __.ReturnFrom(a): Pith<'a> = a
        member inline __.Bind(m, f) = bind f m
    let p =  PithBuilder()

(*     type T =
        | T of int
        static member Unit: T = T 0
        static member Combine(T a, T b) = T (a + b)

    type S =
        | S of string
        static member Unit: S = S ""
        static member Combine(S a, S b) = S (a + b)

    let p0 = p { return fun o ->
        o <| T 1
        o <| T 2
        o <| T 3
    }

    let p1 = p {
        let! (T a) = p0
        let str = string (a + 1)
        return fun o ->
            o << S  <| "A" + str
            o << S  <| "B" + str
            o << S  <| "O" + str
            let (T v) = run p0
            o << S  <| "S" + (string v)
    }

    printfn "%A" <| run p1
 *)
