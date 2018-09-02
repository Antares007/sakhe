namespace Fable.Import.Most
open System

module JsDisposable =
    let create f =
        let mutable disposed = false
        { new Disposable with
            member __.``dispose`` () =
                if not disposed then
                    disposed <- true
                    f () }
module SystemDisposable =
    let create f =
        let mutable disposed = false
        { new IDisposable with
            member __.Dispose () =
                if not disposed then
                    disposed <- true
                    f () }
[<AutoOpen>]
module DisposableExtensions =
    type Disposable with
        member jsDisposable.SystemDisposable =
            SystemDisposable.create (fun () -> jsDisposable.dispose())

    type IDisposable with
        member systemDisposable.JsDisposable =
            JsDisposable.create (fun () -> systemDisposable.Dispose())

[<AutoOpen>]
module Extensions =
    open Fable.Import.Most

    let private scheduler = Fable.Core.JsInterop.importAll<Scheduler.IExports> "@most/scheduler"
    let private defaultScheduler = scheduler.newDefaultScheduler ()

    let S = Fable.Core.JsInterop.importAll<Core.IExports> "@most/core"
    type Core.IExports with
        /// Drain source stream
        member __.``drain`` s = S.runEffects s defaultScheduler

    type System.IObservable<'T> with
        member o.``toStream`` =
            S.newStream <| fun sink scheduler ->
                (o.Subscribe { new System.IObserver<'T> with
                    member __.OnNext e =
                        sink.``event`` (scheduler.currentTime(), e)
                    member __.OnCompleted () =
                        sink.``end`` (scheduler.currentTime())
                    member __.OnError error =
                        let error = Fable.Import.JS.Error.Create error.Message
                        sink.``error`` (scheduler.currentTime(), error)
                }).JsDisposable
