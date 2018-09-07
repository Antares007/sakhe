module Sakhe.S.Task
open Fable.Import.JS

type On<'a> = Run of 'a | Exn of 'a * exn

type T<'a> = private Task of (On<'a> -> Disposable.T option)

let return' f = Task f

let empty<'a> = Task <| fun (_: On<'a>) -> None

let map f (Task g) = Task <| function
    | Run (a)      -> g (Run (f a))
    | Exn (a, err) -> g (Exn (f a, err))

let inline private r g = try g (Run ()) with err -> g (Exn ((), err))

let run (Task g) = r g

let append l r = Task <| function
    | Run a ->
        let a () = a
        match (run (map a l), run (map a r)) with
        | (None,     None) -> None
        | (Some d,   None) -> Some d
        | (None,   Some d) -> Some d
        | (Some l, Some r) -> Some (Disposable.append l r)
    | Exn _ -> None

let deferRun t =
    Promise.resolve(t).``then``(run)

module Cancelable =
    exception Exception
    type Source = private Source of (unit -> unit)

    let ifCanceledThenRaiseCancellationException (Source f) = f ()

    let extend task =
        let mutable canceled = false
        let mutable taskDisposable = None
        let cancellationSource = Source (fun () -> if canceled then raise Exception)
        let cancelDisposable = Disposable.return' <| fun () ->
            canceled <- true
            if taskDisposable.IsSome then Disposable.dispose taskDisposable.Value
        let task = return' <| function
            | On.Run a ->
                if canceled then None
                else
                taskDisposable <- task |> map (fun () -> a, cancellationSource) |> run
                taskDisposable
            | On.Exn _ -> None
        task, cancelDisposable
