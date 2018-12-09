namespace Sakhe

module S =
    type T =
        | Schedule of (float -> Pith<O, unit>)
    and O =
        | Local of T
        | Origin of T
        | Delay  of float * T
    let mappend (Schedule l) (Schedule r) = Schedule <| fun t -> P.mappend Unit.mappend (l t) (r t)
    let rec ring (canceled: bool ref) (offset: float) (Schedule io) =
            Schedule <| fun now ->
                if canceled.Value then P.empty
                else
                P.pmap <| fun p o ->
                    p <| function
                        | Local io          -> o <| Local  (ring canceled (0. - now) io)
                        | Origin io         -> o <| Origin (ring canceled 0. io)
                        | Delay (delay, io) -> o <| Delay  (delay, ring canceled offset io)
                <| io (now + offset)
    let rec runAllNows (now, (Schedule io)) = P <| fun o' ->
        let rec ring p o = p <| function
            | Local (Schedule io)  -> P.run o' (P.pmap ring << io <| now)
            | Origin (Schedule io)  -> P.run o' (P.pmap ring << io <| now)
            | Delay (delay, io) -> o <| (delay + now, io)
        P.run o' (P.pmap ring << io <| now)
    let run (tf: unit -> float) timer =
        let mutable nextRun = None
        let mutable timerd = Disposable.empty
        let rec schedule = function
            | None -> ()
            | Some timeline ->
                printfn "<-"
                let (nextArrival, _) = TimeLine.getBounds timeline
                let now = tf ()
                match nextRun with
                | None                                  ->
                    nextRun <- Some (nextArrival, timeline)
                    timerd <- timer (System.Math.Max (nextArrival - now, 0.)) onTimer
                | Some (nr, tl) when nr > nextArrival  ->
                    nextRun <- Some (nextArrival, TimeLine.mappend mappend tl timeline)
                    timerd.Dispose()
                    timerd <- timer (System.Math.Max (nextArrival - now, 0.)) onTimer
                | Some (nr, tl)                         ->
                    nextRun <- Some (nr, TimeLine.mappend mappend tl timeline)
        and onTimer () =
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let mutable p = P.empty
            let now = tf()
            let l =
                P.run
                <| fun tio -> p <- (P.mappend Unit.mappend) p (runAllNows tio)
                <| TimeLine.runTo now tl
            schedule <| Option.mappend (TimeLine.mappend mappend) l (TimeLine.fromPith mappend p)
        fun m ->
            let canceled = ref false
            let now = tf()
            let offset = 0. - now
            let io =
                match m with
                | Local io ->
                    ring canceled offset io
                | Origin io ->
                    ring canceled 0. io
                | Delay (delay, io) ->
                    ring canceled offset << Schedule <| fun t -> P <| fun o ->
                        o << Delay <| (delay, io)
            let p = runAllNows (now, io)
            let timeline = TimeLine.fromPith mappend p
            schedule timeline
            Disposable.return' <| fun () -> canceled.Value <- true

module Scheduler =

    type T =
        private
        | Local of (Time.T -> Pith<O, unit>)
    and O =
        | Now of T
        | Delay of Time.Delay * T
    let return' f = Local <| f

    module O =
        let now f = Now << return' <| f
        let delay delay f = Delay (Time.Delay.return' delay, return' f)

    [<AutoOpen>]
    module private Private =
        let rec map (canceled: bool ref) (offset: Time.Offset) (Local io) =
            Local <| fun now ->
                if canceled.Value then P.empty
                else
                P.pmap <| fun p o ->
                    p <| function
                        | Now io            -> o <| O.Now (map canceled offset io)
                        | Delay (delay, io) -> o <| O.Delay (delay, map canceled offset <| io)
                <| io (now + offset)
        let mappend (Local l) (Local r) = Local <| fun t -> P.mappend Unit.mappend (l t) (r t)
        let rec runAllNows (now, (Local io)) = P.return' <| fun o' ->
            let rec ring p o = p <| function
                | Now (Local io)  -> P.run o' (P.pmap ring << io <| now)
                | Delay (delay, io) -> o <| (delay + now, io)
            P.run o' (P.pmap ring << io <| now)
    let run tf timer =
        let mutable nextRun = None
        let mutable timerd = Disposable.empty
        let rec schedule = function
            | None -> ()
            | Some timeline ->
                printfn "<-"
                let (nextArrival, _) = TimeLine.getBounds timeline
                match nextRun with
                | None                                  ->
                    nextRun <- Some (nextArrival, timeline)
                    timerd <- timer (Time.Delay.fromTo (tf()) nextArrival) onTimer
                | Some (nr, tl) when nr > nextArrival  ->
                    nextRun <- Some (nextArrival, TimeLine.mappend mappend tl timeline)
                    timerd.Dispose()
                    timerd <- timer (Time.Delay.fromTo (tf()) nextArrival) onTimer
                | Some (nr, tl)                         ->
                    nextRun <- Some (nr, TimeLine.mappend mappend tl timeline)
        and onTimer () =
            printfn "->"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let mutable p = P.empty
            let l =
                P.run
                <| fun tio -> p <- (P.mappend Unit.mappend) p (runAllNows tio)
                <| TimeLine.runTo (tf()) tl
            schedule <| Option.mappend (TimeLine.mappend mappend) l (TimeLine.fromPith mappend p)
        fun io ->
            let canceled = ref false
            let now = tf()
            let io = map canceled (Time.zero - now) io
            let p = runAllNows (now, io)
            schedule <| TimeLine.fromPith mappend p
            Disposable.return' <| fun () -> canceled.Value <- true
