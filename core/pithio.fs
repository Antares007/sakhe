namespace Sakhe
open Fable.Core

[<Erase>] type PithIO<'i, 'o> = IO of ('i -> Pith<'o>)

[<RequireQualifiedAccess>]
module IO =
    let a = 42

    let empty<'Ob> =
        IO <| fun () -> Pith <| fun (o: 'Ob -> unit) -> ()

    let append
        (IO o) (IO a): PithIO<'Oa, 'Ob> =
        IO <| fun i -> Pith.append (o i) (a i)

    let map
        (f: ('Oa -> 'Ob)) (g: ('Ib -> 'Ib)) (IO pithIO) =
        IO <| fun i -> pithIO <| g i |> Pith.map(f)

    let fold
        (f:(Pith<'Io> -> _ -> _)) (s) (IO (g: 'Ia -> Pith<'Ob>)) =
        IO <| fun (i) -> (g i) |> Pith.fold (f) s
