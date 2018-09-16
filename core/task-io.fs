module Sakhe.TaskIO
open Fable.Core
open Sakhe.S
open System

type [<Erase>] T<'a, 'b> =
    private
    | TaskIO of IO<I<'a>, Disposable.T, 'b>
and I<'a> =
    | Run of 'a
    | Exn of 'a * exn

let return' f =
    TaskIO << IO <| f

let map g f (TaskIO io) =
    TaskIO <| IO.map g f io

let inline append (TaskIO l) (TaskIO r) =
    TaskIO <| IO.append l r

let bind f (TaskIO io) =
    TaskIO <| IO.bind (fun a -> let (TaskIO io) = f a in io) io

let run a (TaskIO io) =
    let (rez, list) =
        try         IO.run (fun () -> Run (a ())) io
        with err -> IO.run (fun () -> Exn (a (), err)) io
    (rez, list |> List.fold Disposable.append Disposable.empty)


module Cancellation =
    exception Exception

    let cancelable io =
        let mutable taskDisposable = Disposable.empty
        let canceled = ref false
        let cancel () =
            canceled.Value <- true
            Disposable.dispose taskDisposable
        let task = return' <| fun i o ->
            match i() with
            | I.Run (a) ->
                let i () = if canceled.Value then raise Exception else a
                let mapO d =
                    if canceled.Value then
                        Disposable.dispose d
                        raise Exception
                    d
                let (v, d) = run i (io |> map mapO id)
                taskDisposable <- d
                if canceled.Value then Disposable.dispose d
                o d
                v
            | I.Exn (_, Exception) -> ()
            | I.Exn (_, err) -> raise err
        (task, Disposable.return' cancel)

//     let return' f = cancelable << return' <| f

    // let t = return' <| function
    //     | Run (a, cs) -> fun o ->
    //         let b = a + 1
    //         cs.IfCanceledThenRaiseCancellationException
    //         ()
    //     | Exn (_, Exception) -> ignore
    //     | Exn (_, err) -> raise err
