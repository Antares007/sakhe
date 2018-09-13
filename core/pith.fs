namespace Sakhe
open Fable.Core

[<Erase>] type Pith<'a> = Pith of (('a -> unit) -> unit)
[<Erase>] type IO<'i, 'o> = IO of ('i -> Pith<'o>)

[<RequireQualifiedAccess>]
module Pith =
    let return' p =
        Pith p

    let empty =
        Pith ignore

    let filter f (Pith p) =
        Pith <| fun o -> p (fun a -> if f a then o a)

    let map f (Pith p) =
        Pith <| fun o -> p (o << f)

    let mapi f p =
        let mutable c = 0
        map (fun a ->
            let index = c
            c <- c + 1
            f index a) p

    let append (Pith f) (Pith s) =
        Pith <| fun o -> f o; s o

    let concat (Pith p) =
        let mutable pith = empty
        p (fun p -> pith <- append pith p)
        pith

    let fold f s (Pith pith) =
        let mutable state = s
        pith <| fun a -> state <- f state a
        state

    let toList (Pith pith) =
        let mutable list = []
        pith <| fun a -> list <- a :: list
        list

    let inline run< ^a when ^a: (static member Tree : Pith< ^a> -> ^a )> p =
      (^a : (static member Tree : Pith< ^a> -> ^a ) p)

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
(*
    type T =
        | T of int
        static member Tree(Pith p) =
            let mutable a = 0
            p <| fun (T b) -> a <- a + b
            T a
    type S =
        | S of string
        static member Tree(Pith p) =
            let mutable a = ""
            p <| fun (S b) -> a <- a + b
            S a
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

    printfn "AI: %A" <| run p1
 *)
