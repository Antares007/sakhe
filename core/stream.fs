namespace Sakhe
open Fable.Core

[<Erase>] type S<'a> = private S of Most.IStream<'a>
[<Erase>] type Time = private Time of float

[<AutoOpen>]
module Time =
    let ms ms = Time ms

module S =
    open Most
    open Most.M

    let empty () = S <| empty ()
    let now a = S (now a)
    let at (Time t) a = S (at t a)
    let map f (S s) = S (map f s)
    let switchLatest (S hs) = S << switchLatest << M.map (fun (S a) -> a) <| hs
    let combine f (S a) (S b) = S <| combine f a b
    let merge (S a) (S b) = S <| merge a b
    let konst a (S s) = S <| constant a s
    let constant = konst

    let scan f state (S s) = S <| scan f state s
    let tap f (S s) = S <| tap f s
    let periodic (Time t) = S <| periodic t
    let skip n (S s) = S <| skip n s
    let multicast (S s) = S <| multicast s
    let startWith a (S s) = S <| startWith a s
    let sample (S a) (S b) = S <| M.sample b a

    let private scheduler = Most.Scheduler.newDefaultScheduler ()
    let drain (S s) = M.runEffects s scheduler

    open Fable.Import.Browser
    [<Emit("console.timeStamp($0)")>]
    let private timeStamp (_:string) = jsNative
    let animationFrame =
        S << M.newStream <| fun sink scheduler ->
        let mutable handle = 0.

        let rec step t =
            timeStamp "step"
            sink.event (scheduler.currentTime (), t)
            handle <- window.requestAnimationFrame step
        handle <- window.requestAnimationFrame step

        let dispose _ =
            window.cancelAnimationFrame handle

        Most.Disposable.disposeWith dispose ()
