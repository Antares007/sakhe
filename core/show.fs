module Sakhe.Show
open Sakhe.S

let performanceClock = Default.performanceClock
let localClock = Clock.localClock performanceClock

let printClock name clock =
    let time = Clock.localTime clock
    let offset = Clock.offset clock
    printfn "%s: %A %A" name time offset.Value

printClock "performanceClock" performanceClock
printClock "localClock" localClock

let scheduler = Scheduler.return' performanceClock

let schedule delay period scheduler task =
    Scheduler.schedule delay period (Task.return' task) scheduler
open Time

schedule (Some <| Delay.return' 10) None scheduler <| function
| Task.On.Run (t, cs) ->
    printfn "run: %A" t
    schedule (Some <| Delay.return' 10) None scheduler <| function
    | Task.On.Run (t, cs) ->
        printfn "run: %A" t
        schedule (Some <| Delay.return' 10) None scheduler <| function
        | Task.On.Run (t, cs) ->
            printfn "run: %A" t
            schedule (Some <| Delay.return' 10) None scheduler <| function
            | Task.On.Run (t, cs) ->
                printfn "run: %A" t
                None
            | Task.On.Exn _ -> None
            |> Some
        | Task.On.Exn _ -> None
        |> Some
    | Task.On.Exn _ -> None
    |> Some
| Task.On.Exn _ -> None
|> ignore

// let my = (Clock.return' (fun () -> Time.return' 0.0) (Time.Offset.return' 0.0))
// let scheduler =
//     Scheduler.return' performanceClock
//     |> Scheduler.map (fun c -> Some my)


// [<Emit("console.timeStamp($0)")>]
// let timeStamp (a: string): unit = Exceptions.jsNative

// let task i = Task.return' <| function
//     | Task.On.Run (t:Time.T, s: Task.Cancelable.Source) ->
//         printfn "task %d run at: %A" i t
//         Some << Disposable.return' <| fun () ->
//             printfn "task %d disposed Run" i
//     | Task.On.Exn ((t, _), err) ->
//         printfn "task %d exn at: %A with: %A" i t err
//         Some << Disposable.return' <| fun () ->
//             printfn "task %d disposed Exn" i

// let delay x = Time.Delay.return' x

// open Fable.Import

// let fs = Fable.Core.JsInterop.importAll<Fable.Import.Node.Fs.IExports> "fs"

// let http = Fable.Core.JsInterop.importAll<Fable.Import.Node.Http.IExports> "http"

// let now2 a =
//     Stream.fromTask2 None None <| fun sink scheduler -> function
//     | Task.On.Run (t, cs) ->
//         sink |> Sink.Send.event t a
//         printfn "yess"
//         Task.Cancelable.ifCanceledThenRaiseCancellationException cs
//         printfn "noooooo"
//         sink |> Sink.Send.end' t
//         None
//     | Task.On.Exn ((t, _), Task.Cancelable.Exception) ->
//         printfn "yay"
//         sink |> Sink.Send.event t 666
//         None
//     | Task.On.Exn ((t, cs), err) ->
//         sink |> Sink.Send.error t err
//         None

// let d = ref Disposable.empty

// let see =
//     Stream.mergeArray [|
//         Stream.periodic (delay 13000) |> Stream.map (fun () -> 13)
//         now2 42 // |> Stream.map (fun x -> Disposable.dispose d.Value; x)
//         Stream.periodic (delay 2000) |> Stream.map (fun () -> 2)
//         Stream.periodic (delay 3000) |> Stream.map (fun () -> 3)
//         Stream.periodic (delay 5000) |> Stream.map (fun () -> 5)
//         Stream.periodic (delay 8000) |> Stream.map (fun () -> 8)
//     |]
//     |> Stream.run scheduler (Sink.return' <| function
//         | Sink.On.Event (t, e) -> printfn "Event %A at %A" e t
//         | Sink.On.End (t) -> printfn "End at %A" t
//         | Sink.On.Error (t, err) -> printfn "Error %A at %A" err t)

// d.Value <- see

// open Fable.Import.Browser
// open Fable.Core.JsInterop

// window?d <- see

// S.periodic 1000.
//     |> S.constant 1
//     |> S.scan (+) 0
//     |> S.map ((-) 10)
//     |> S.tap Fable.Import.Browser.console.log
//     |> S.tap (printfn "%d")
//     |> S.takeWhile ((<) 0)
//     |> S.drain
//     |> ignore
