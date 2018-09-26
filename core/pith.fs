[<RequireQualifiedAccess>]
module Sakhe.Pith
open Fable.Core

type [<Erase>] T<'a, 'b> =
    private
    | Pith of (('a -> unit) -> 'b)
    static member inline (+) ((Pith l), (Pith r)) = Pith <| fun o -> l o + r o
    static member inline (+) ((Pith l), (Pith r)) = Pith <| fun o -> l o; r o; ()

let return' f =
    Pith f

let empty<'a> =
    Pith <| fun (o: 'a -> unit) -> ()

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
