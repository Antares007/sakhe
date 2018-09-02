module Sakhe.Show

open Fable.Import.Most

let e = Event<int>()


let drain sink s = S.run sink defaultScheduler s

Fable.Import.Browser.console.log "trigger"
let disposable =
    e.Publish.toStream
    |> S.tap (printfn "tap: %d")
    |> drain { new Sink<_> with
        member __.``event`` t e = printfn "event: %f %d" t e
        member __.``end`` t = printfn "end: %f" t
        member __.``error`` t error = printfn "end: %f %A" t error
    }
e.Trigger 42

Fable.Import.Browser.console.log "triggered"

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
