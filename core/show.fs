module Sakhe.Show
open Sakhe.Scheduler

let cancelable task =
    let mutable active = true
    let mutable onCancel = fun () -> active <- false
    let onAttach cb = if not active then cb() else onCancel <- cb
    (
        Disposable.return' (fun () -> onCancel()),
        task |> Task.map (fun a -> (onAttach, a))
    )
let z = Task.return' <| function
    | Run (onCancel, b: float) ->
        let mutable active = true
        onCancel (fun () -> printfn "canceled"; active <- false)
        printfn "running... %f %b" b active
        Some <| Disposable.return' (fun () -> printfn "disposed")
    | Exn _ -> None

let hmm1 = cancelable z
let hmm2 = cancelable z

let rez1 = snd hmm1 |> Task.map (fun () -> 1.)
let rez2 = snd hmm2 |> Task.map (fun () -> 2.)

printfn "run"

Task.run rez1 |> ignore
(fst hmm1).dispose()

(fst hmm2).dispose()
Task.run rez2 |> ignore

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
