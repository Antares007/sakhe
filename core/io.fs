namespace Sakhe
open Fable.Core
open Sakhe.S

type [<Erase>] IO<'i, 'o> = IO of ('i -> Pith<'o>)

[<RequireQualifiedAccess>]
module IO =
    let return' f = IO <| f

    let empty<'Ob> =
        IO <| fun () -> Pith <| fun (o: 'Ob -> unit) -> ()

    let append (IO l) (IO r) =
        IO <| fun i -> Pith.append (l i) (r i)

    let map f (IO io) =
        IO <| (f << io)

    let contraMap f (IO io) =
        IO <| (io << f)

    let bind f (IO io) =
        IO <| fun i ->
            let v = io i
            let (IO io) = f v
            io i

    let fold f s (IO io) =
        IO <| fun (i) -> (io i) |> Pith.fold (f) s

    let run a (IO io) = io a
