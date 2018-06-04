namespace Sakhe
open Fable.Core
open Fable.Import.Most
open System

[<Erase>] type S<'a> =
            private S of Stream<'a>

[<Erase>] type Time = private Time of float

[<AutoOpen>]
module Time =
    let ms ms = Time ms

module S =
    let private core = JsInterop.importAll<Core.IExports> "@most/core"
    let private scheduler = JsInterop.importAll<Scheduler.IExports> "@most/scheduler"
    let private disposable = JsInterop.importAll<Disposable.IExports> "@most/disposable"

    let throwError err = S <| core.throwError err
    let defer (f: unit -> S<'a>): S<'a> =
        S << core.newStream <| fun sink scheduler ->
            let (S s) = f()
            core.run (sink, scheduler, s)
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
    let take (n: int) (S s) = S <| core.take (unbox n, s)
    let takeWhile p (S s) = S <| core.takeWhile (p, s)
    let continueWith (f) (S s) = S <| core.continueWith ((fun a ->
        let (S bs) = f a
        bs), s)
    let recoverWith f (S s) = S <| core.recoverWith ((fun err ->
        let (S s) = f err
        s), s)

    let scan f state (S s) = S <| core.scan (f, state, s)
    let tap f (S s) = S <| core.tap (f, s)
    let periodic (Time t) = S <| core.periodic t
    let skip (n: int) (S s) = S <| core.skip (unbox n, s)
    let multicast (S s) = S <| core.multicast s
    let startWith a (S s) = S <| core.startWith (a, s)
    let sample (S a) (S b) = S <| core.sample (b, a)
    let delay (Time t) (S s) = S <| core.delay (t, s)
    let ap (S fs) (S s) = S <| core.ap (fs, s)
    let chain f (S a)  =
        let chain a =
            let (S s) = f a
            s
        S <| core.chain (chain, a)

    let loop f a (S b) =
        S <| core.loop ((fun a b ->
            let (s, v) = f a b
            {seed = s; value = v}), a, b)

    let pairwise initial s =
        loop (fun prev curr -> (curr, (prev, curr))) initial s

    let using<'a, 'b when 'a :> IDisposable> (res: 'a) (f: 'a -> S<'b>): S<'b> =
        (f res)
        |> continueWith (fun () -> res.Dispose(); empty())
        |> recoverWith  (fun err -> res.Dispose(); throwError err)

    let disposeWith d (S s) =
        S << core.newStream <| fun sink scheduler ->
            let ds = s.run (sink, scheduler)
            let dispose _ =
                ds.dispose ()
                d ()
            disposable.disposeWith (dispose, ())

    type StreamBuilder() =
        member __.Bind(s: S<'a>, f: 'a -> S<'b>): S<'b> = chain f s
        member __.Delay(f: unit -> S<'a>): S<'a> = defer f

        member __.Combine(sa: S<'a>, sb: S<'a>): S<'a> = continueWith (fun () -> sb) sa

        member __.Zero(): S<'a> = empty ()

        member __.Using<'a, 'b when 'a :> IDisposable>(res: 'a, f: 'a -> S<'b>): S<'b> =
            using res f

        member __.For(sq: seq<'T>, (f: 'T -> S<'U>)): S<'U> =
            let rec loop (en: System.Collections.Generic.IEnumerator<'T>): S<'U> =
                if en.MoveNext() then
                    f en.Current |> continueWith (fun () -> loop en)
                else
                    empty ()
            using (sq.GetEnumerator ()) loop

        member __.TryWith(s: S<_>, h: Exception -> S<_>) =
            recoverWith (fun err -> h (new Exception(err.message))) s

        member __.TryFinally(s: S<_>, compensation) =
            s
            |> continueWith (fun () -> compensation (); empty ())
            |> recoverWith  (fun err -> compensation(); throwError err)

        member  __.While(guard: unit -> bool, s: S<'a>): S<'a> =
            let rec loop () = continueWith (fun () -> if guard () then loop () else empty ()) s
            loop ()

        member  __.Yield(a) = now a

        member  __.YieldFrom s : S<_> = s

    let stream = StreamBuilder()


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
        mpith |> map (A.tree (List.fold f s)) |> switchLatest

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
