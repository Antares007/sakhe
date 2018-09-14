module Sakhe.TaskIO
open Sakhe.S

type T<'a> = TaskIO of IO<I<'a>, O<'a>>
and I<'a> = Run of 'a | Exn of 'a * exn
and O<'a> =
    | Run of T<'a>
    | Dispose of Disposable.T

let return' f = TaskIO << IO <| f

let rec run a (TaskIO (IO io)) =
    Task.run a << Task.return' <| fun i ->
        match i with
        | Task.I.Run a       -> io << I.Run <| a
        | Task.I.Exn (a, err) -> io << I.Exn <| (a, err)
        |> Pith.toList
        |> List.fold (fun o -> function
            | O.Run (io) -> run a io
            | O.Dispose a ->
                match o with
                | None -> Some a
                | Some o -> Some <| Disposable.append a o
        ) None
