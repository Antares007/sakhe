namespace Sakhe
open Fable.Core
type Pith<'a> = Pith of (('a -> unit) -> unit)

type [<Erase>] IO<'i, 'o, 'a> = IO of ((unit -> 'i) -> ('o -> unit) -> 'a)

[<RequireQualifiedAccess>]
module IO =
    let return' f =
        IO f

    let empty<'i, 'o> =
        IO <| fun (i: unit -> 'i) (o: 'o -> unit) -> ()

    let map g f (IO io) =
        IO <| fun i o -> f (io i (o << g))

    let contraMap f (IO io) =
        IO <| fun i o -> io (f << i) o

    let inline append (IO l) (IO r) =
        IO <| fun i o -> (l i o) + (r i o)

    let bind f (IO io) =
        IO <| fun i o ->
            let a = io i o
            let (IO io) = f a
            io i o

    let run i (IO io) =
        let mutable list = []
        (io i (fun a -> list <- a :: list), list)
