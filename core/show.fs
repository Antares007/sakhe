module Sakhe.Show
open Sakhe.S
open System


open TaskIO

let rec testTaskIO now d = run now << IO.return' <| fun o -> function
    | Try  (a) ->
        o << Disposable.return' <| fun () -> printfn "dispose(%d) 0" d
        printfn "run(%d): %A" d a
        o << Disposable.return' <| fun () -> printfn "dispose(%d) 1" d
        let rez =
            if d > 0 then
                let (rez, d) = testTaskIO (I.Of DateTime.Now) (d - 1)
                o d
                rez
            else
                0
        failwith (sprintf "hmm(%d)" d)
        1 + rez
    | Catch (a, err) ->
        o << Disposable.return' <| fun () -> printfn "dispose(%d) 3" d
        printfn "Exn(%d): %A %A" d a err
        failwith (sprintf "hmm2(%d)" d)
        2

let (rez, d) = testTaskIO (I.Of DateTime.Now) 3
printfn "rez: %A" rez
Disposable.dispose d

// run: 9/15/2018, 9:31:14 AM
// Exn: 9/15/2018, 9:31:14 AM Error: test error
// rez: 2
// dispose 2
// dispose 1
// dispose 0


// let performanceClock = Default.performanceClock
// let localClock = Clock.localClock performanceClock

// let printClock name clock =
//     let time = Clock.localTime clock
//     let offset = Clock.offset clock
//     printfn "%s: %A %A" name time offset.Value

// printClock "performanceClock" performanceClock
// printClock "localClock" localClock

// let scheduler = Scheduler.return' performanceClock

// let schedule delay period scheduler task =
//     Scheduler.schedule delay period (Task.return' task) scheduler
// open Time


// let see = schedule zero << TimeIO << IO <| function
//     | IO.On.Run t -> Pith <| fun o ->
//         o << now <| function
//         | IO.On.Run t -> Pith <| fun o ->
//             o << now <| function
//             | IO.On.Run t -> Pith <| fun o -> ()
//             | IO.On.Exn (t, err) -> Pith <| fun o -> ()
//         | IO.On.Exn (t, err) -> Pith <| fun o -> ()

//         o << (delay 100) <| function
//         | IO.On.Run t -> Pith <| fun o ->
//             o << now <| function
//             | IO.On.Run t -> Pith <| fun o -> ()
//             | IO.On.Exn (t, err) -> Pith <| fun o -> ()
//         | IO.On.Exn (t, err) -> Pith <| fun o -> ()
//     | IO.On.Exn (t, err) -> Pith <| fun o -> ()


// schedule (Some <| Delay.return' 10) None scheduler <| function
// | Task.I.Run (t, cs) ->
//     printfn "run: %A" t
//     schedule (Some <| Delay.return' 10) None scheduler <| function
//     | Task.I.Run (t, cs) ->
//         printfn "run: %A" t
//         schedule (Some <| Delay.return' 10) None scheduler <| function
//         | Task.I.Run (t, cs) ->
//             printfn "run: %A" t
//             schedule (Some <| Delay.return' 10) None scheduler <| function
//             | Task.I.Run (t, cs) ->
//                 printfn "run: %A" t
//                 None
//             | Task.I.Exn _ -> None
//             |> Some
//         | Task.I.Exn _ -> None
//         |> Some
//     | Task.I.Exn _ -> None
//     |> Some
// | Task.I.Exn _ -> None
// |> ignore

// let my = (Clock.return' (fun () -> Time.return' 0.0) (Time.Offset.return' 0.0))
// let scheduler =
//     Scheduler.return' performanceClock
//     |> Scheduler.map (fun c -> Some my)


// [<Emit("console.timeStamp($0)")>]
// let timeStamp (a: string): unit = Exceptions.jsNative

// let task i = Task.return' <| function
//     | Task.I.Run (t:Time.T, s: Task.Cancelable.Source) ->
//         printfn "task %d run at: %A" i t
//         Some << Disposable.return' <| fun () ->
//             printfn "task %d disposed Run" i
//     | Task.I.Exn ((t, _), err) ->
//         printfn "task %d exn at: %A with: %A" i t err
//         Some << Disposable.return' <| fun () ->
//             printfn "task %d disposed Exn" i

// let delay x = Time.Delay.return' x

// open Fable.Import

// let fs = Fable.Core.JsInterop.importAll<Fable.Import.Node.Fs.IExports> "fs"

// let http = Fable.Core.JsInterop.importAll<Fable.Import.Node.Http.IExports> "http"

// let now2 a =
//     Stream.fromTask2 None None <| fun sink scheduler -> function
//     | Task.I.Run (t, cs) ->
//         sink |> Sink.Send.event t a
//         printfn "yess"
//         Task.Cancelable.ifCanceledThenRaiseCancellationException cs
//         printfn "noooooo"
//         sink |> Sink.Send.end' t
//         None
//     | Task.I.Exn ((t, _), Task.Cancelable.Exception) ->
//         printfn "yay"
//         sink |> Sink.Send.event t 666
//         None
//     | Task.I.Exn ((t, cs), err) ->
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
