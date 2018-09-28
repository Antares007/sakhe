[<RequireQualifiedAccess>]
module Sakhe.Pith
open Fable.Core

type T<'a, 'b> =
    private
    | Pith of (('a -> unit) -> 'b)

let return' f =
    Pith f
let unbox (Pith p) = p

let empty<'a> =
    Pith <| fun (o: 'a -> unit) -> ()

let mappend mappend (Pith l) (Pith r) =
    Pith <| fun o -> mappend (l o) (r o)

let run o (Pith p) =
    p (fun a -> O.put a o)

let filter f (Pith p) =
    Pith <| fun o -> p (fun a -> if f a then o a)

let filterMap f (Pith p) =
    Pith <| fun o ->
        p (fun a ->
            match f a with
            | None -> ()
            | Some a -> o a)

let map f (Pith p) =
    Pith (f << p)

let pmap f (Pith p) =
    Pith (f p)

let inline append (Pith l) (Pith r) =
    Pith <| fun o -> (l o) + (r o)

let bind f (Pith p) =
    Pith <| fun o ->
        let a = p o
        let (Pith p) = f a
        p o
