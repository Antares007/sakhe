namespace Sakhe
open Sakhe.S

[<RequireQualifiedAccess>]
module IO =
    let a = 42

    type On<'a> =
        | Run of 'a
        | Exn of 'a * exn

    let empty<'Ob> =
        IO <| fun () -> Pith <| fun (o: 'Ob -> unit) -> ()

    let append
        (IO o) (IO a): IO<'Oa, 'Ob> =
        IO <| fun i -> Pith.append (o i) (a i)

    let map
        (f: ('Oa -> 'Ob)) (g: ('Ib -> 'Ib)) (IO pithIO) =
        IO <| fun i -> pithIO <| g i |> Pith.map(f)

    let fold
        (f:(Pith<'Io> -> _ -> _)) (s) (IO (g: 'Ia -> Pith<'Ob>)) =
        IO <| fun (i) -> (g i) |> Pith.fold (f) s

    let run (IO io) =
        Task.run << Task.return' <| fun i ->
            match i with
            | Task.On.Run  () ->
                io <| Run ()
            | Task.On.Exn (a, err) ->
                io <| Exn (a, err)
            |> Pith.toList
            |> List.fold (fun o a ->
                match (o, a) with
                | None ,    None    -> None
                | None,     Some d  -> Some d
                | Some o, None    -> Some o
                | Some o, Some a  -> Some <| Disposable.append a o
            ) None
