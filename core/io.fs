module Sakhe.IO
open System
open Fable.Core

type [<Erase>] T<'i, 'o, 'b> = IO of ('i -> Pith<'o, 'b>)

let return' f = IO <| f

let map f (IO io) = IO <| (f << io)

let run (i: 'i) (o: O<'o, 'a>) (IO (io: 'i -> Pith<'o, 'b>)) =
    Pith.run o (io i)




module TaskIO =
    type [<Erase>] T<'a, 'b> = TaskIO of T<TryCatch<'a>, IDisposable, unit> //(I<'a> -> Pith<IDisposable, 'b>)
    and TryCatch<'a> =
        | Try of 'a
        | Catch of 'a * exn


    let run2 i io =
        return' <| fun () -> Pith <| fun o ->
            let o = O.return' (fun () a -> o a) ()
            try Pith.run o (io (Try i))
            with err -> Pith.run o (io (Catch (i, err)))

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
