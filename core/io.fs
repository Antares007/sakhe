module Sakhe.IO
open System
open Fable.Core

type [<Erase>] T<'a, 'b> = IO of (I<'a> -> Pith<IDisposable, 'b>)
and I<'a> =
    | Try of 'a
    | Catch of 'a * exn
open Sakhe.S

let pmap f (IO io) = IO <| fun i ->
    let (Pith p) = io i
    Pith <| f p

module I =
    let map f = function
        | Try  (a) -> Try (f a)
        | Catch (a, exn) -> Catch (f a, exn)

/// ```fsharp
/// fun o -> function
/// | Try (a) ->
///     o Disposable.empty
///     a + 1
/// | Catch (a, err) -> a + 2
/// |> return'
/// ```
let return' f = IO <| f

let run a (IO io) =
    let o = O.return' Disposable.append Disposable.empty
    let b =
        try
            try         Pith.run o << io << Try   <| (a)
            with err -> Pith.run o << io << Catch <| (a, err)
        with err ->
            o.Value.Dispose()
            raise err
    (b, o.Value)
