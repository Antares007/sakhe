module Sakhe.TaskIO
open System
open Fable.Core

type [<Erase>] T<'a> = TaskIO of IO.T<TryCatch<'a>, IDisposable, unit>

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
