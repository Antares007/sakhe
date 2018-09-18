module Sakhe.IO
open Sakhe.S

type I<'a> =
    | Try of 'a
    | Catch of 'a * exn

module O =
    let return' () = O.return' Disposable.append Disposable.empty

let return' f = fun i -> Pith <| fun o -> f o i

let run o a io =
    // let o = O.return' Disposable.append Disposable.empty
    // let mutable list = []
    // let o a = list <- a :: list
    try         Pith.run o << io << Try   <| (a)
    with err -> Pith.run o << io << Catch <| (a, err)

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
