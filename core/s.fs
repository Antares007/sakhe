namespace Sakhe
open Fable.Core
open Fable.Import.Most

[<Erase>] type S<'a> = private S of Stream<'a>
[<Erase>] type Time = private Time of float

[<AutoOpen>]
module Time =
    let ms ms = Time ms

module S =
    let private core = JsInterop.importAll<Core.IExports> "@most/core"
    let private scheduler = JsInterop.importAll<Scheduler.IExports> "@most/scheduler"
    let private disposable = JsInterop.importAll<Disposable.IExports> "@most/disposable"

    let empty () = S <| core.empty ()
    let now a = S (core.now a)
    let at (Time t) a = S <| core.at (t, a)
    let map f (S s) = S <| core.map (f, s)
    let switchLatest (S hs) = S << core.switchLatest <| core.map ((fun (S a) -> a), hs)
    let combine f (S a) (S b) = S <| core.combine (f, a, b)
    let merge (S a) (S b) = S <| core.merge (a, b)
    let konst a (S s) = S <| core.constant (a, s)
    let constant = konst

    let scan f state (S s) = S <| core.scan (f, state, s)
    let tap f (S s) = S <| core.tap (f, s)
    let periodic (Time t) = S <| core.periodic t
    let skip (n: int) (S s) = S <| core.skip (unbox n, s)
    let multicast (S s) = S <| core.multicast s
    let startWith a (S s) = S <| core.startWith (a, s)
    let sample (S a) (S b) = S <| core.sample (b, a)

    let tree (deltac) mpith =
        mpith |> map (A.tree deltac) |> switchLatest

    let combineTree f s pith =
        tree (A.DeltaC (Seq.fold (combine f) s)) pith


    let private defScheduler = scheduler.newDefaultScheduler ()
    let drain (S s) = core.runEffects (s, defScheduler)

    open Fable.Import.Browser

    [<Emit("console.timeStamp($0)")>]
    let private timeStamp (_:string) = jsNative

    let animationFrame =
        S <| core.newStream (fun sink scheduler ->
        let mutable handle = 0.

        let rec step t =
            timeStamp "step"
            sink.event (scheduler.currentTime (), t)
            handle <- window.requestAnimationFrame step
        handle <- window.requestAnimationFrame step

        let dispose _ =
            window.cancelAnimationFrame handle

        disposable.disposeWith (dispose, ()))
