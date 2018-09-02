module Sakhe.Show

open Fable.Import.Most

let e = Event<int>()

e.Publish.toStream
    |> S.tap (printfn "%d")
    |> S.drain
    |> ignore
e.Trigger 42

S.periodic 1000.
    |> S.constant 1
    |> S.scan (+) 0
    |> S.map ((-) 10)
    |> S.tap Fable.Import.Browser.console.log
    |> S.tap (printfn "%d")
    |> S.takeWhile ((<) 0)
    |> S.drain
    |> ignore


    // let rs<'a> eventName (target: EventTarget) useCapture = S.newStream (fun sink scheduler ->
    //     let listner: ('a -> unit) = fun e -> sink.event (scheduler.currentTime(), e)
    //     target.addEventListener (eventName, unbox listner, useCapture)
    //     let dispose () = target.removeEventListener (eventName, unbox listner)
    //     dispose)

    // let z: S<PopStateEvent> = rs "popstate" window false
