module Sakhe.TaskIO
open System
open Fable.Core

type [<Erase>] T<'a> =
    private
    | TaskIO of IO.T<TryCatch<'a>, IDisposable, unit>
    static member inline (+) ((TaskIO l), (TaskIO r)) = TaskIO << IO.return' <| fun i o ->
        let o = O.return' (fun () a -> o a) ()
        IO.run i o l
        IO.run i o r

and TryCatch<'a> =
    | Try of 'a
    | Catch of 'a * exn

let return' f = TaskIO << IO.return' <| f

let lift io = TaskIO <| io

let run a (TaskIO io) =
    let o = O.return' Disposable.append Disposable.empty
    try
        IO.run (Try (a)) o io
    with err ->
        try
            IO.run (Catch (a, err)) o io
        with err ->
            try o.Value.Dispose() with err -> ()
            raise err
    o.Value
