module Sakhe.TaskIO
open Fable.Core
open Sakhe.S

type [<Erase>] T<'a, 'b> =
    private
    | TaskIO of (I<'a> -> (Disposable.T -> unit) -> 'b)
and I<'a> =
    | Run of 'a
    | Exn of 'a * exn

let return' f = TaskIO <| f

let map f (TaskIO io) =
    TaskIO <| fun i -> f << (io i)

let contraMap f (TaskIO io) = TaskIO <| function
    | I.Run (a) -> io << I.Run <| (f a)
    | I.Exn (a, err) -> io << I.Exn <| (f a, err)

let run a (TaskIO io) =
    let mutable r = Disposable.empty
    let add l = r <- Disposable.append r l
    let rez =
        try         io <| Run (a)      <| add
        with err -> io <| Exn (a, err) <| add
    (rez, r)

let inline append (l: T<'a, ^b>) (r: T<'a, ^b>): T<'a, ^b> = TaskIO <| function
        | I.Run (a) ->
            let (l, dl) = run a l
            let (r, dr) = run a r
            fun o -> o dl; o dr; l + r
        | I.Exn (_, err) -> raise err

let bind f io = TaskIO <| function
        | I.Run (a) ->
            let (rez, d) = run a io
            fun o ->
                o d
                let (TaskIO io2) = f rez
                o |> io2 (I.Run (a))
        | I.Exn (_, err) -> raise err


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
