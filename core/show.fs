module Sakhe.Show
open Fable.Core
open Sakhe.S

let sch = Scheduler.schedule

let scheduler = Default.scheduler ()

[<Emit("console.timeStamp($0)")>]
let timeStamp (a: string): unit = Exceptions.jsNative

let task i = Task.return' <| function
    | Task.On.Run (t:Time.T, s: Task.Cancelable.Source) ->
        printfn "task %d run at: %A" i t
        Some << Disposable.return' <| fun () ->
            printfn "task %d disposed Run" i
    | Task.On.Exn ((t, _), err) ->
        printfn "task %d exn at: %A with: %A" i t err
        Some << Disposable.return' <| fun () ->
            printfn "task %d disposed Exn" i

let delay x = Time.Delay.return' x

// let d1 = Scheduler.schedule
//             None
//             (Some delay1000)
//             (task 1)
//             scheduler
// let d2 = Scheduler.schedule
//             (Some delay500)
//             (Some delay1000)
//             (task 2)
//             scheduler

let see =
    Stream.combineArray [|
        Stream.periodic (delay 1000) |> Stream.map (fun () -> 1000)
        Stream.periodic (delay 750) |> Stream.map (fun () -> 750)
        Stream.periodic (delay 250) |> Stream.map (fun () -> 250)
        Stream.periodic (delay 500) |> Stream.map (fun () -> 500)
        Stream.now 42
    |]
    |> Stream.run scheduler (Sink.return' <| function
        | Sink.On.Event (t, e) -> printfn "Event %A at %A" e t
        | Sink.On.End (t) -> printfn "End at %A" t
        | Sink.On.Error (t, err) -> printfn "Error %A at %A" err t)


open Fable.Import.Browser
open Fable.Core.JsInterop

window?d <- see

// let makeTask i =
//     Task.return' <| function
//         | Task.On.Run () ->
//             printfn "task %d run" i
//             Some << Disposable.return' <| fun () ->
//                 printfn "task %d disposed Run" i
//         | Task.On.Exn ((), err) ->
//             printfn "task %d exn with: %A" i err
//             Some << Disposable.return' <| fun () ->
//                 printfn "task %d disposed Exn" i

// let timeline = Timeline.empty()
// let taskRun = Task.run
// let t a = Time.return' a

// open Fable.Import.Browser
// open Fable.Core.JsInterop

// window?timeline <- timeline
// window?makeTask <- makeTask
// window?taskRun <- taskRun
// window?t <- t
// window?add <- Timeline.add
// window?removeTasks <- Timeline.removeTasks

// let d =
//     Timer.setTimer
//         (Task.return' (function
//             | Task.On.Run ((), s) ->
//                 printfn "running... at: %A" (Clock.now clock)
//                 None
//             | Task.On.Exn (_) ->
//                 printfn "disposed..."
//                 None))
//         (Time.Delay.return' 0)
//         Default.timer

// let d2 =
//     Timer.setTimer
//         (Task.return' (function
//             | Task.On.Run ((), s) ->
//                 printfn "running... at: %A" (Clock.now clock)
//                 None
//             | Task.On.Exn (_) ->
//                 printfn "disposed..."
//                 None))
//         (Time.Delay.return' 1000)
//         Default.timer

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
