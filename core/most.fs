namespace Fable.Import.Most
open System

module Disposable =
    let empty = { new Disposable with member __.``dispose`` () = () }
    let return' f =
        let mutable disposed = false
        { new Disposable with
            member __.``dispose`` () =
                if not disposed then
                    disposed <- true
                    f () }
    let append (l:Disposable) (r:Disposable) = return' (fun () -> l.dispose(); r.dispose())

[<AutoOpen>]
module Extensions =
    open Fable.Import.Most

    let private scheduler = Fable.Core.JsInterop.importAll<Scheduler.IExports> "@most/scheduler"
    let defaultScheduler = scheduler.newDefaultScheduler ()

    let S = Fable.Core.JsInterop.importAll<Core.IExports> "@most/core"
    type Core.IExports with
        /// Drain source stream
        member S.``drain`` s = S.runEffects s defaultScheduler

    type System.IObservable<'T> with
        member o.``toStream`` =
            S.newStream <| fun sink scheduler ->
                let mutable lastTasks = Disposable.empty
                let asap task = lastTasks <- Disposable.append lastTasks (scheduler.scheduleTask 0. 0. -1. task)

                let subscription = (o.Subscribe { new System.IObserver<'T> with
                    member __.OnNext e =
                        asap (S.propagateEventTask e sink)
                    member __.OnCompleted () =
                        asap (S.propagateEndTask sink)
                    member __.OnError error =
                        let error = Fable.Import.JS.Error.Create error.Message
                        asap (S.propagateErrorTask error sink)
                })
                Disposable.return' <| fun () ->
                    subscription.Dispose()
                    lastTasks.dispose()
