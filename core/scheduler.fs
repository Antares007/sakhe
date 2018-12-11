module Sakhe.Scheduler

type T = (float -> Pith<O, unit>)
and O =
    | Local of T
    | Origin of T
    | Delay  of float * T
let mappend (l: T) (r: T): T = fun t -> P.mappend Unit.mappend (l t) (r t)
let rec ring (canceled: bool ref) (offset: float) (io: T) =
        fun now ->
            if canceled.Value then P.empty
            else
            P.pmap <| fun p o ->
                p <| function
                    | Local io          -> o <| Local  (ring canceled (0. - now) io)
                    | Origin io         -> o <| Origin (ring canceled 0. io)
                    | Delay (delay, io) -> o <| Delay  (delay, ring canceled offset io)
            <| io (now + offset)
let rec runAllNows (now, io: T) = P <| fun o' ->
    let rec ring p o = p <| function
        | Local io  -> P.run o' (P.pmap ring << io <| now)
        | Origin io  -> P.run o' (P.pmap ring << io <| now)
        | Delay (delay, io) -> o <| (delay + now, io)
    P.run o' (P.pmap ring << io <| now)
let run (tf: unit -> float) timer =
    let mutable nextRun = None
    let mutable timerd = Disposable.empty
    let rec schedule = function
        | None -> ()
        | Some timeline ->
            let now = tf ()
            printfn "<- %A" now
            let (nextArrival, _) = TimeLine.getBounds timeline
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
        let now = tf()
        printfn "-> %A" now
        let (nr, tl) = nextRun.Value
        nextRun <- None
        let mutable p = P.empty
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
                ring canceled offset <| fun t -> P <| fun o ->
                    o << Delay <| (delay, io)
        let p = runAllNows (now, io)
        let timeline = TimeLine.fromPith mappend p
        schedule timeline
        Disposable.return' <| fun () -> canceled.Value <- true
