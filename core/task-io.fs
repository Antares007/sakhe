module Sakhe.TaskIO
open Fable.Core
open Sakhe.S

type [<Erase>] T<'a, 'b> =
    private
    | TaskIO of (I<'a> -> (Disposable.T -> unit) -> 'b)
and I<'a> =
    | Run of 'a
    | Exn of 'a * exn

let return' f = TaskIO <| f

let map f (TaskIO io) =
    TaskIO <| fun i -> f << (io i)

let contraMap f (TaskIO io) = TaskIO <| function
    | I.Run (a) -> io << I.Run <| (f a)
    | I.Exn (a, err) -> io << I.Exn <| (f a, err)

let run a (TaskIO io) =
    let mutable r = Disposable.empty
    let add l = r <- Disposable.append r l
    let rez =
        try         io <| Run (a)      <| add
        with err -> io <| Exn (a, err) <| add
    (rez, r)

let inline append (l: T<'a, ^b>) (r: T<'a, ^b>): T<'a, ^b> = TaskIO <| function
        | I.Run (a) ->
            let (l, dl) = run a l
            let (r, dr) = run a r
            fun o -> o dl; o dr; l + r
        | I.Exn (_, err) -> raise err

let bind f io = TaskIO <| function
        | I.Run (a) ->
            let (rez, d) = run a io
            fun o ->
                o d
                let (TaskIO io2) = f rez
                o |> io2 (I.Run (a))
        | I.Exn (_, err) -> raise err

module Cancellation =
    exception Exception
    type Source =
        | Source of (bool ref)
            member cs.IsCanceled =
                let (Source canceled) = cs
                canceled.Value

            member cs.IfCanceledThenRaiseCancellationException =
                let (Source canceled) = cs
                if canceled.Value then raise Exception

    let cancelable io =
        let mutable taskDisposable = Disposable.empty
        let canceled = ref false
        let cancel () =
            canceled.Value <- true
            Disposable.dispose taskDisposable
        let task = TaskIO <| function
            | I.Run (a) ->
                if canceled.Value then ignore
                else
                fun o ->
                    let ((), d) = run (a, Source canceled) io
                    taskDisposable <- d
                    if canceled.Value then Disposable.dispose d
                    else
                    o d
            | I.Exn (_, Exception) -> ignore
            | I.Exn (_, err) -> raise err
        (task, Disposable.return' cancel)

    let return' f = cancelable << return' <| f

    // let t = return' <| function
    //     | Run (a, cs) -> fun o ->
    //         let b = a + 1
    //         cs.IfCanceledThenRaiseCancellationException
    //         ()
    //     | Exn (_, Exception) -> ignore
    //     | Exn (_, err) -> raise err
