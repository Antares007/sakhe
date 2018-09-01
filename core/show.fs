module Sakhe.Show
open System.Xml.Xsl
open System
open Fable.Core

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


module Play =
    open Fable.Import.Most

    let s2 = S.newStream (fun sink scheduler ->
        sink.event (scheduler.currentTime(), 1)
        JsDisposable.create (fun () -> ()))

    let ``as_`` = S.now "a" |> S.slice 0 1
    let ``as2_`` = S.now "a" |> S.map (fun a -> a + "") |> S.skip 1 |> S.take 1


    // let rs<'a> eventName (target: EventTarget) useCapture = S.newStream (fun sink scheduler ->
    //     let listner: ('a -> unit) = fun e -> sink.event (scheduler.currentTime(), e)
    //     target.addEventListener (eventName, unbox listner, useCapture)
    //     let dispose () = target.removeEventListener (eventName, unbox listner)
    //     dispose)

    // let z: S<PopStateEvent> = rs "popstate" window false
