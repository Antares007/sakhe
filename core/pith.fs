namespace Sakhe
open Fable.Core

type [<Erase>] O<'b, 'a> =
    private
    | O of (('b -> unit) * (unit -> 'a))
    member p.Value = let (O (_, a)) = p in a ()

[<RequireQualifiedAccess>]
module O =
    let return' f ua =
        let mutable a = ua
        O ((fun b -> a <- f a b), (fun () -> a))

    let map f (O (put, get)) =
        O (put << f, f << get)

type [<Erase>] Pith<'a, 'b> = Pith of (('a -> unit) -> 'b)

[<RequireQualifiedAccess>]
module Pith =
    let empty =
        Pith ignore

    let filter f (Pith p) =
        Pith <| fun o -> p (fun a -> if f a then o a)

    let filterMap f (Pith p) =
        Pith <| fun o ->
            p (fun a ->
                match f a with
                | None -> ()
                | Some a -> o a)

    let map f g (Pith p) =
        Pith <| fun o -> (g << p) (o << f)

    let inline append (Pith l) (Pith r) =
        Pith <| fun o -> (l o) + (r o)

    let bind f (Pith p) =
        Pith <| fun o ->
            let a = p o
            let (Pith p) = f a
            p o

    let run (O (b, _)) (Pith p) =
        p b
