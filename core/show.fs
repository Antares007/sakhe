module Sakhe.Show

// [<System.Runtime.CompilerServices.Extension>]
// type IEnumerableExtensions() =
//     [<System.Runtime.CompilerServices.Extension>]
//     static member inline ToStream(xs: IObservable<'T>) =
//         S.newStream (fun sink scheduler ->
//         let d = xs.Subscribe {new IObserver<'T> with
//             member __.OnCompleted () = sink.``end`` (scheduler.currentTime())
//             member __.OnError error = sink.``error`` (scheduler.currentTime(), Fable.Import.JS.Error.Create (error.ToString()))
//             member __.OnNext e = sink.``event`` (scheduler.currentTime(), e)
//         }
//         fun () -> d.Dispose())
// let e = Event<int>()
// let pe = e.Publish.ToStream()

[<AutoOpen>]
module Exts =
    open Fable.Import.Most
    let private scheduler = Fable.Core.JsInterop.importAll<Scheduler.IExports> "@most/scheduler"
    let private defaultScheduler = scheduler.newDefaultScheduler ()

    type Core.IExports with
        /// Drain source stream
        member xs.``drain`` s = xs.runEffects s defaultScheduler

module Play =
    open Fable.Import.Most
    open Fable.Import.Browser
    let S = Fable.Core.JsInterop.importAll<Core.IExports> "@most/core"
    // let s2 = S.newStream (fun sink scheduler ->
    //     scheduler.scheduleTask (0., 0., 0., (S.propagateEventTask 1 sink)) :> Disposable)

    S.periodic 1000.
        |> S.constant 1
        |> S.scan (+) 0
        |> S.map ((-) 10)
        |> S.tap console.log
        |> S.takeWhile ((<) 0)
        |> S.drain
        |> ignore


    // let rs<'a> eventName (target: EventTarget) useCapture = S.newStream (fun sink scheduler ->
    //     let listner: ('a -> unit) = fun e -> sink.event (scheduler.currentTime(), e)
    //     target.addEventListener (eventName, unbox listner, useCapture)
    //     let dispose () = target.removeEventListener (eventName, unbox listner)
    //     dispose)

    // let z: S<PopStateEvent> = rs "popstate" window false
