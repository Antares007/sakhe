module Sakhe.Show
open Sakhe.S

let z = Task.return' <| function
    | Task.On.Run (b: float, source) ->
        Task.ifCanceledThenRaiseCancellationException source
        printfn "running... %f" b
        Some << Disposable.return' <| fun () ->
            printfn "disposed"
    | Task.On.Exn (t, Task.CancellationException) ->
        printfn "cancel"
        None
    | Task.On.Exn (t, exn) ->
        printfn "error"
        None

let (ctask1, cancel1) = Task.cancelable z

let rez1 = ctask1 |> Task.map (fun () -> 1.)

printfn "run"

Task.run rez1 |> ignore
Disposable.dispose cancel1
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
