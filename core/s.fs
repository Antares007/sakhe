module Sakhe.A
open Sakhe.S

module TaskIO =
    type T<'a> = TaskIO of IO<I<'a>, O<'a>>
    and I<'a> = Run of 'a | Exn of 'a * exn
    and O<'a> =
        | Run of T<'a>
        | Dispose of Disposable.T

    let return' f = TaskIO << IO <| f

    let rec run a (TaskIO (IO io)) =
        Task.run << Task.return' <| fun i ->
            match i with
            | Task.On.Run ()       -> io << I.Run <| a
            | Task.On.Exn ((), err) -> io << I.Exn <| (a, err)
            |> Pith.toList
            |> List.fold (fun o -> function
                | O.Run (io) -> run a io
                | O.Dispose a ->
                    match o with
                    | None -> Some a
                    | Some o -> Some <| Disposable.append a o
            ) None

let testTaskIO = TaskIO.run 42 << TaskIO.return' <| function
    | TaskIO.I.Run  (a)       -> Pith <| fun o ->
        printfn "hello"
        printfn "world"
    | TaskIO.I.Exn (a, err) -> Pith <| fun o ->
        printfn "%A" err.Message

// let see = schedule zero << TimeIO << IO <| function
//     | IO.On.Run t -> Pith <| fun o ->
//         o << now <| function
//         | IO.On.Run t -> Pith <| fun o ->
//             o << now <| function
//             | IO.On.Run t -> Pith <| fun o -> ()
//             | IO.On.Exn (t, err) -> Pith <| fun o -> ()
//         | IO.On.Exn (t, err) -> Pith <| fun o -> ()

//         o << (delay 100) <| function
//         | IO.On.Run t -> Pith <| fun o ->
//             o << now <| function
//             | IO.On.Run t -> Pith <| fun o -> ()
//             | IO.On.Exn (t, err) -> Pith <| fun o -> ()
//         | IO.On.Exn (t, err) -> Pith <| fun o -> ()
//     | IO.On.Exn (t, err) -> Pith <| fun o -> ()
