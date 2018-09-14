namespace Sakhe
open Fable.Core
open Sakhe.S

[<Erase>] type IO<'i, 'o> = IO of ('i -> Pith<'o>)

[<RequireQualifiedAccess>]
module IO =
    let empty<'Ob> =
        IO <| fun () -> Pith <| fun (o: 'Ob -> unit) -> ()

    let append (IO o) (IO a) =
        IO <| fun i -> Pith.append (o i) (a i)

    let map g f (IO io) =
        IO <| fun i -> io <| (g i) |> Pith.map(f)

    let fold f s (IO io) =
        IO <| fun (i) -> (io i) |> Pith.fold (f) s

    let run a (IO io) = io a
