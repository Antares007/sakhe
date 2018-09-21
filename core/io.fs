namespace Sakhe
type IO<'a> =
    | Try of 'a
    | Catch of 'a * exn

module IO =
    open Sakhe.S


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
    let return' f = fun i -> Pith <| fun o -> f o i

    let run a io =
        let o = O.return' Disposable.append Disposable.empty
        let b =
            try
                try         Pith.run o << io << Try   <| (a)
                with err -> Pith.run o << io << Catch <| (a, err)
            with err ->
                o.Value.Dispose()
                raise err
        (b, o.Value)
