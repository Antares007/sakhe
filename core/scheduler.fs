module Sakhe.Scheduler
open System
open Sakhe
open Sakhe.Sink

type T =
    private
    | Local of Abo.T<Time.T * Time.Offset, unit, O<T>>
    | Origin of Abo.T<Time.T, unit, O<T>>
and O<'a> =
    | Now of 'a
    | Delay of Time.Delay * 'a

let return'
    f = Local << Abo.return' <| f

module O =
    let now
        f = Now << return' <| f
    let nowOrigin
        f = Now << Origin << Abo.return' <| f

    let delay
        delay f = Delay (Time.Delay.return' delay, return' f)
    let delayOrigin
        delay f = Delay (Time.Delay.return' delay, Origin << Abo.return' <| f)

[<AutoOpen>]
module private Private =
    type OriginT = OriginT of Abo.T<Time.T, unit, O<OriginT>>

    let pair a b = a, b

    let rec ring offset (canceled: bool ref) p o = p <| function
        | Now io            -> o << O.Now << map offset canceled <| io
        | Delay (delay, io) -> o << O.Delay << pair delay << map offset canceled <| io

    and map offset (canceled: bool ref) io =
        OriginT << Abo.return' <| fun now ->
            if canceled.Value then Pith.empty
            else
            match io with
            | Local io  -> Pith.pmap (ring offset canceled) << Abo.run (now + offset, offset) <| io
            | Origin io -> Pith.pmap (ring (Time.zero - now) canceled) << Abo.run now <| io

    let mappend (OriginT l) (OriginT r) = OriginT <| Abo.mappend Unit.mappend l r

    let rec runAllNows
        (now, (OriginT io)) = Pith.return' <| fun o ->
        let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (OriginT io)  -> Pith.run o' << Abo.run now << Abo.pmap ring <| io
            | Delay (delay, io) -> o <| (delay + now, io)
        Pith.run o' << Abo.run now << Abo.pmap ring <| io

let run
    tf timer =
    let mutable nextRun = None
    let mutable timerd = Disposable.empty

    let rec delay timeline =
        printfn "<-"
        let nextArrival = TimeLine.nextArrival timeline
        match nextRun with
        | None                                  ->
            nextRun <- Some (nextArrival, timeline)
            setTimer nextArrival
        | Some (nr, tl) when nr > nextArrival  ->
            nextRun <- Some (nextArrival, TimeLine.mappend mappend tl timeline)
            setTimer nextArrival
        | Some (nr, tl)                         ->
            nextRun <- Some (nr, TimeLine.mappend mappend tl timeline)
    and setTimer nextArrival =
        timerd.Dispose()
        timerd <- timer (Time.Delay.fromTo (tf()) nextArrival) <| fun () ->
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let (l, r) = TimeLine.takeUntil (tf()) tl
            let l = l |> Option.bind (fun l ->
                let o = O.return' (Pith.mappend Unit.mappend) Pith.empty
                Pith.run o << Pith.omap runAllNows <| TimeLine.toPith l
                TimeLine.fromPith mappend o.Value)
            match (Option.mappend (TimeLine.mappend mappend) l r) with
            | None -> ()
            | Some timeline -> delay timeline
    fun io ->
        let canceled = ref false
        let now = tf()
        let io = map (Time.zero - now) canceled io
        let timeline = TimeLine.fromPith mappend <| runAllNows (now, io)
        match timeline with
        | None -> ()
        | Some timeline -> delay timeline
        Disposable.return' <| fun () -> canceled.Value <- true
