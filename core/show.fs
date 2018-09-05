module Sakhe.Show
open Sakhe.S

exception CancelationException

let cancelable task =
    let mutable canceled = false
    let cancel () = canceled <- true
    let ifCanceledThenRaiseCancelationException () = if canceled then raise CancelationException
    (
        Disposable.return' cancel,
        Task.map (fun a -> (ifCanceledThenRaiseCancelationException, a)) task
    )

let z = Task.return' <| function
    | Task.On.Run (ifCanceledRaiseCancelationExn, b: float) ->
        ifCanceledRaiseCancelationExn ()
        failwith "omg"
        printfn "running... %f" b
        Some << Disposable.return' <| fun () ->
            printfn "disposed"
    | Task.On.Exn (t, CancelationException) ->
        printfn "cancel"
        None
    | Task.On.Exn (t, exn) ->
        printfn "error"
        None

let hmm1 = cancelable z
// let hmm2 = cancelable z

let rez1 = snd hmm1 |> Task.map (fun () -> 1.)
// let rez2 = snd hmm2 |> Task.map (fun () -> 2.)

printfn "run"

Disposable.dispose (fst hmm1)
Task.run rez1 |> ignore

// Disposable.dispose  (fst hmm2)
// Task.run rez2 |> ignore

// (Task.run (Task.append rez1 rez2)).Value.dispose()





// S.periodic 1000.
//     |> S.constant 1
//     |> S.scan (+) 0
//     |> S.map ((-) 10)
//     |> S.tap Fable.Import.Browser.console.log
//     |> S.tap (printfn "%d")
//     |> S.takeWhile ((<) 0)
//     |> S.drain
//     |> ignore


    // let rs<'a> eventName (target: EventTarget) useCapture = S.newStream (fun sink scheduler ->
    //     let listner: ('a -> unit) = fun e -> sink.event (scheduler.currentTime(), e)
    //     target.addEventListener (eventName, unbox listner, useCapture)
    //     let dispose () = target.removeEventListener (eventName, unbox listner)
    //     dispose)

    // let z: S<PopStateEvent> = rs "popstate" window false
