module Sakhe.S.Task
open Fable.Core


type [<Erase>] T<'a> =
    private Task of (I<'a> -> Disposable.T option)
and I<'a> = Run of 'a | Exn of 'a * exn

let return' f = Task f

let empty<'a> = Task <| fun (_: I<'a>) -> None

let map f (Task g) = Task <| function
    | Run (a)      -> g (Run (f a))
    | Exn (a, err) -> g (Exn (f a, err))

let run a (Task g) = try g (Run a) with err -> g (Exn (a, err))

let append l r = Task <| function
    | Run a ->
        match run a l, run a r with
        | (None,     None) -> None
        | (Some d,   None) -> Some d
        | (None,   Some d) -> Some d
        | (Some l, Some r) -> Some (Disposable.append l r)
    | Exn _ -> None

let appendArray tasks =
    let length = Array.length tasks
    if length = 0 then empty
    else
    if length = 1 then tasks.[0]
    else
    Task <| function
        | Run a ->
            let disposables =
                tasks
                |> Seq.map (run a)
                |> Seq.filter (fun o -> o.IsSome)
                |> Seq.map (fun o -> o.Value)
                |> Seq.toArray
            Some <| Disposable.appendArray disposables
        | Exn _ -> None

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
            | I.Run a ->
                if canceled then None
                else
                taskDisposable <- task |> run (a, cancellationSource)
                if canceled && taskDisposable.IsSome then
                    Disposable.dispose taskDisposable.Value
                taskDisposable
            | I.Exn _ -> None
        task, cancelDisposable

    let return' t = extend << return' <| t
