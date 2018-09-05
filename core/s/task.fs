module Sakhe.S.Task
open Fable.Import.JS

type On<'a> = Run of 'a | Exn of 'a * exn

type T<'a> = private Task of (On<'a> -> Disposable.T option)

let return' f = Task f

let map f (Task g) = Task <| function
    | Run a -> g (Run (f a))
    | Exn (a, err) -> g (Exn (f a, err))

let inline private r g = try g (Run ()) with err -> g (Exn ((), err))

let run (Task g) = r g

let append l r = Task <| function
    | Run a ->
        match (run <| map (fun () -> a) l, run <| map (fun () -> a) r) with
        | (None,     None) -> None
        | (Some d,   None) -> Some d
        | (None,   Some d) -> Some d
        | (Some l, Some r) -> Some (Disposable.append l r)
    | Exn _ -> None

let deferRun t =
    Promise.resolve(t).``then``(run)
