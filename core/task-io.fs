module Sakhe.TaskIO
open Fable.Core
open Sakhe.S

type [<Erase>] T<'a> =
    private
    | TaskIO of (I<'a> -> Pith<O<'a>>)
and I<'a> =
    | Run of 'a
    | Exn of 'a * exn
and O<'a> =
    private
    | Run of T<'a>
    | Dispose of Disposable.T

module O =
    let run f = Run << TaskIO <| f
    let dispose d = Dispose d

let return' f = TaskIO <| f

let rec run a (TaskIO io) =
    (
        try
            (io << I.Run <| (a))
            |> Pith.filterMap (function
            | O.Run (io)    -> run a io
            | O.Dispose (d) -> Some d)
            |> Pith.toList
        with err ->
            io << I.Exn <| (a, err)
            |> Pith.filterMap (function
            | O.Run (io)    -> run a io
            | O.Dispose (d) -> Some d)
            |> Pith.toList
    )
    |> List.fold (fun r l ->
        match r with
        | None   -> Some l
        | Some r -> Some <| Disposable.append l r
    ) None

// let rec run2 a (TaskIO io) =
//     let see f = Task.run a << Task.return' <| f
//     Task.run a << Task.return' <| fun i ->
//         match i with
//         | Task.I.Run a       -> io << I.Run <| a
//         | Task.I.Exn (a, err) -> io << I.Exn <| (a, err)
//         |> Pith.toList
//         |> List.fold (fun o -> function
//             | O.Run (io) -> run a io
//             | O.Dispose a ->
//                 match o with
//                 | None -> Some a
//                 | Some o -> Some <| Disposable.append a o
//         ) None
