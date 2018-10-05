module Sakhe.TaskIO
open System
open Fable.Core

type [<Erase>] T<'a> =
    private
    | TaskIO of Abo.T<TryCatch<'a>, unit, IDisposable>

and TryCatch<'a> =
    | Try of 'a
    | Catch of 'a * exn

let return' f = TaskIO << Abo.return' <| f

let lift io = TaskIO <| io

let run a (TaskIO io) =
    let o = O.return' Disposable.append Disposable.empty
    try
        Pith.run o << Abo.run (Try (a)) <| io
    with err ->
        try
            Pith.run o << Abo.run (Catch (a, err)) <| io
        with err ->
            try o.Value.Dispose() with err -> ()
            raise err
    o.Value
