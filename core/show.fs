module Sakhe.Show
open Sakhe.S

let clock = Default.clock ()
let sch = Stream.Scheduler.schedule

printfn "run at: %A" (Clock.now clock)

let d =
    Timer.setTimer
        (Task.return' (function
            | Task.On.Run ((), s) ->
                printfn "running... at: %A" (Clock.now clock)
                None
            | Task.On.Exn (_) ->
                printfn "disposed..."
                None))
        (Time.Delay.return' 0)
        Default.timer

let d2 =
    Timer.setTimer
        (Task.return' (function
            | Task.On.Run ((), s) ->
                printfn "running... at: %A" (Clock.now clock)
                None
            | Task.On.Exn (_) ->
                printfn "disposed..."
                None))
        (Time.Delay.return' 1000)
        Default.timer

//Disposable.dispose d

// let z = Task.return' <| function
//     | Task.On.Run (b: float, source) ->
//         Task.Cancelable.ifCanceledThenRaiseCancellationException source
//         printfn "running... %f" b
//         Some << Disposable.return' <| fun () ->
//             printfn "disposed"
//     | Task.On.Exn (t, Task.Cancelable.Exception) ->
//         printfn "cancel"
//         None
//     | Task.On.Exn (t, exn) ->
//         printfn "error"
//         None

// let (ctask1, cancel1) = Task.Cancelable.wrap z

// let rez1 = ctask1 |> Task.map (fun () -> 1.)


// printfn "run at: %A" (Clock.now Default.clock)

// Task.run rez1 |> ignore
// Disposable.dispose cancel1
// Task.run rez1 |> ignore

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
