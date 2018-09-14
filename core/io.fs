namespace Sakhe
open Fable.Core
open Sakhe.S

[<Erase>] type IO<'i, 'o> = IO of ('i -> Pith<'o>)

[<RequireQualifiedAccess>]
module IO =
    let a = 42

    type On<'a> =
        | Run of 'a
        | Exn of 'a * exn

    let empty<'Ob> =
        IO <| fun () -> Pith <| fun (o: 'Ob -> unit) -> ()

    let append (IO o) (IO a) =
        IO <| fun i -> Pith.append (o i) (a i)

    let map g f (IO io) =
        IO <| fun i -> io <| (g i) |> Pith.map(f)

    let fold f s (IO io) =
        IO <| fun (i) -> (io i) |> Pith.fold (f) s

    let run (IO io) =
        Task.run << Task.return' <| fun i ->
            match i with
            | Task.On.Run ()       -> io << Run <| ()
            | Task.On.Exn ((), err) -> io << Exn <| ((), err)
            |> Pith.toList
            |> List.fold (fun o a ->
                match (o, a) with
                | None ,  None   -> None
                | None,   Some d -> Some d
                | Some o, None   -> Some o
                | Some o, Some a -> Some <| Disposable.append a o
            ) None
