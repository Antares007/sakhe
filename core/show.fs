module Sakhe.Show
open System.Xml.Xsl
open System

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
    open Fable.Import.Browser
    console.log "hello"
    console.log ("end!")

    console.log ("aaaaaaa")
    open Fable.Core

    open Fable.Import.Most
    let private core = JsInterop.importAll<Core.IExports> "@most/core"
    let private dispose = JsInterop.importAll<Disposable.IExports> "@most/disposable"
    let as_ = core.now "a"
    let is_ = core.now 3

    core.zip (fun a b -> (a, b)) as_ is_ |> ignore
    // core.newStream (fun sink scheduler ->

    //     dispose.disposeWith (fun a -> ()) 1)

    // let rs<'a> eventName (target: EventTarget) useCapture = S.newStream (fun sink scheduler ->
    //     let listner: ('a -> unit) = fun e -> sink.event (scheduler.currentTime(), e)
    //     target.addEventListener (eventName, unbox listner, useCapture)
    //     let dispose () = target.removeEventListener (eventName, unbox listner)
    //     dispose)

    // let z: S<PopStateEvent> = rs "popstate" window false

    // let z2 a b c = a + b + c
    // console.log (z2 1 2 3)
(*
module Disposable =
    open System
    let create f =
        let mutable disposed = false
        {new IDisposable with
            member __.Dispose () =
                if not disposed then
                    disposed <- true
                    f()}
*)
