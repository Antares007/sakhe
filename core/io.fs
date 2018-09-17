module Sakhe.IO
open Sakhe.S

type TryCatch<'a> =
    | Try of 'a
    | Catch of 'a * exn

let return' f = fun i -> O <| fun o -> f o (I.run i)

let inline private tryRun o i io =
    try         O.run o (io (i |> I.map Try))
    with err -> O.run o (io (i |> I.map (fun a -> Catch (a, err))))

let run i io =
    let mutable list = []
    let o a = list <- a :: list
    let rez =
        try
            tryRun o i io
        with err ->
            List.iter Disposable.dispose list
            raise err
    let disposable = list |> List.fold Disposable.append Disposable.empty
    rez, disposable



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
