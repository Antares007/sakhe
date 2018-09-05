namespace Sakhe.S
module Task =
    open Fable.Import.JS

    type On<'a> = Run of 'a | Exn of 'a * exn

    type T<'a> = private T of (On<'a> -> Disposable.T option)

    let return' f = T f

    let map f (T g) = T <| function
        | Run a -> g (Run (f a))
        | Exn (a, err) -> g (Exn (f a, err))

    let run (T g) =
        try g (Run ())
        with err -> g (Exn ((), err))

    let append l r = T <| function
        | Run () ->
            match (run l, run r) with
            | (None, None) -> None
            | (Some d, None) -> Some d
            | (None, Some d) -> Some d
            | (Some l, Some r) -> Some (Disposable.append l r)
        | Exn _ -> None

    let deferRun t =
        Promise.resolve(t).``then``(run)
