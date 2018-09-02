[<AutoOpen>]
module Fable.Import.Most.Extensions
open Fable.Import.Most

let private scheduler = Fable.Core.JsInterop.importAll<Scheduler.IExports> "@most/scheduler"
let private defaultScheduler = scheduler.newDefaultScheduler ()

let S = Fable.Core.JsInterop.importAll<Core.IExports> "@most/core"
type Core.IExports with
    /// Drain source stream
    member __.``drain`` s = S.runEffects s defaultScheduler
