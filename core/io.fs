module Sakhe.IO
open Sakhe.S

type I<'a> =
    | Try of 'a
    | Catch of 'a * exn

module I =
    let map f = function
        | Try  (a) -> Try (f a)
        | Catch (a, exn) -> Catch (f a, exn)

module O =
    let return' () = O.return' Disposable.append Disposable.empty

/// ```fsharp
/// fun o -> function
/// | Try (a) ->
///     o Disposable.empty
///     a + 1
/// | Catch (a, err) -> a + 2
/// |> return'
/// ```
let return' f = fun i -> Pith <| fun o -> f o i

let run o a io =
    try         Pith.run o << io << Try   <| (a)
    with err -> Pith.run o << io << Catch <| (a, err)
