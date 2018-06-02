namespace Sakhe
open Fable.Core
open Fable.Import.Most
open System

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
    let never () = S <| core.never ()
    let now a = S (core.now a)
    let at (Time t) a = S <| core.at (t, a)
    let map f (S s) = S <| core.map (f, s)
    let switchLatest (S hs) = S << core.switchLatest <| core.map ((fun (S a) -> a), hs)
    let combine f (S a) (S b) = S <| core.combine (f, a, b)
    let merge (S a) (S b) = S <| core.merge (a, b)
    let konst a (S s) = S <| core.constant (a, s)
    let constant = konst
    let continueWith (S comp1) (S comp2) = S <| core.continueWith ((fun () -> comp2), comp1)

    let scan f state (S s) = S <| core.scan (f, state, s)
    let tap f (S s) = S <| core.tap (f, s)
    let periodic (Time t) = S <| core.periodic t
    let skip (n: int) (S s) = S <| core.skip (unbox n, s)
    let multicast (S s) = S <| core.multicast s
    let startWith a (S s) = S <| core.startWith (a, s)
    let sample (S a) (S b) = S <| core.sample (b, a)

    let loop f a (S b) =
        S <| core.loop ((fun a b ->
            let (s, v) = f a b
            {seed = s; value = v}), a, b)

    let pairwise initial s =
        loop (fun prev curr -> (curr, (prev, curr))) initial s

    let disposeWith d (S s) =
        S << core.newStream <| fun sink scheduler ->
            let ds = s.run (sink, scheduler)
            let dispose _ =
                ds.dispose ()
                d ()
            disposable.disposeWith (dispose, ())

    type StreamBuilder() =
        let bind (S a) f =
            let chain a =
                let (S s) = f a
                s
            S <| core.chain (chain, a)
        member __.Bind(s: S<'a>, f: 'a -> S<'b>): S<'b> = bind s f

        member __.Combine(S comp1: S<'a>, S comp2: S<'a>): S<'a> =
            S <| core.continueWith ((fun () -> comp2), comp1)

        member __.Zero(): S<'a> = empty ()

        member x.Delay(f: unit -> S<'a>): S<'a> = x.Bind (x.Zero (), f)

        member __.Using<'a, 'b when 'a :> IDisposable>(res: 'a, f: 'a -> S<'b>): S<'b> =
            f res |> disposeWith (fun () -> res.Dispose())

        member x.For(sq: S<'a> seq, (f: 'a -> S<'b>)): S<'b> =


            let rec loop (en: System.Collections.Generic.IEnumerator<S<'a>>): S<'b> =
                if en.MoveNext() then
                    let sb = bind en.Current f
                    sb |> con
                else
                    empty ()

            x.Using(sq.GetEnumerator(), loop)


    let toStream (e: Event<_>) =
        let ms = core.MulticastSource.Create (core.never ())
        S << core.newStream <| fun sink scheduler ->
            let onNext v = ms.event (scheduler.currentTime (), v)
            let d1 = Observable.subscribe onNext e.Publish
            let d2 = ms.run (sink, scheduler)
            let dispose _ =
                d1.Dispose ()
                d2.dispose ()
            disposable.disposeWith (dispose, ())

    let tree f s mpith =
        mpith |> map (A.tree f s) |> switchLatest

    let treeCombine f s pith =
        tree (combine f) s pith

    let treeMerge s pith =
        tree (fun a b -> merge b a) s pith

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
