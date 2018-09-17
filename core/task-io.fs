module Sakhe.TaskIO
open Fable.Core
open Sakhe.S
open System

type TryCatch<'a> =
    | Try of 'a
    | Catch of 'a * exn

let run a io =
    let mutable list = []
    let o a = list <- a :: list
    let rez =
        try         O.run o (io (a |> I.contraMap Try))
        with err -> O.run o (io (a |> I.contraMap (fun a -> Catch (a, err))))
    rez, (list |> List.fold Disposable.append Disposable.empty)

let see = run (I.Of 1) <| fun i -> O <| fun o -> 1

// module Cancellation =
//     exception Exception

//     let cancelable io =
//         let mutable taskDisposable = Disposable.empty
//         let canceled = ref false
//         let cancel () =
//             canceled.Value <- true
//             Disposable.dispose taskDisposable
//         let task = return' <| fun i o ->
//             match i() with
//             | I.Run (a) ->
//                 let i () = if canceled.Value then raise Exception else a
//                 let mapO d =
//                     if canceled.Value then
//                         Disposable.dispose d
//                         raise Exception
//                     d
//                 let (v, d) = run i (io |> map mapO id)
//                 taskDisposable <- d
//                 if canceled.Value then Disposable.dispose d
//                 o d
//                 v
//             | I.Exn (_, Exception) -> ()
//             | I.Exn (_, err) -> raise err
//         (task, Disposable.return' cancel)

//     let return' f = cancelable << return' <| f

    // let t = return' <| function
    //     | Run (a, cs) -> fun o ->
    //         let b = a + 1
    //         cs.IfCanceledThenRaiseCancellationException
    //         ()
    //     | Exn (_, Exception) -> ignore
    //     | Exn (_, err) -> raise err
