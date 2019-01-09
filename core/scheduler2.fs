module Sakhe.Scheduler2

type O =
    | Local of IO<float, O, unit>
    | Origin of IO<float, O, unit>
    | Delay  of float * IO<float, O, unit>

let rec ring (canceled: bool ref) (offset: float) io =
    IO <| fun o now ->
        if canceled.Value then ()
        else
        IO.run (now + offset) <| function
            | Local io          -> o <| Local  (ring canceled (0. - now) io)
            | Origin io         -> o <| Origin (ring canceled 0. io)
            | Delay (delay, io) -> o <| Delay  (delay, ring canceled offset io)
        <| io
let rec runAllNows (now, io: IO<float, O, unit>) = IO <| fun o' () ->
    let rec ring io  = IO <| fun o i ->
        io <| function
            | Local io 
            | Origin io  -> IO.run now o' (IO.pmap ring io)
            | Delay (delay, io) -> o <| (delay + now, io)
        <| i
    IO.run now o' (IO.pmap ring io)
let mappend = IO.mappend Unit.mappend

let mkScheduler (tf: unit -> float) (requestNextFrame: (unit -> unit) -> 'h) =
    let mutable now = tf()
    let mutable mainTimeline = None
    let rec nextFrame () =
        now <- tf()
        match mainTimeline with 
        | None -> ()
        | Some tl ->
            let (na, _) = TimeLine2.getBounds tl
            if now < na then ()
            else
            let mutable newTlIo = IO.empty
            let restTl =
                IO.run () <| fun tio ->
                    newTlIo <- (IO.mappend Unit.mappend) newTlIo (runAllNows tio)
                <| TimeLine2.runTo now tl
            mainTimeline <- Option.mappend (TimeLine2.mappend mappend) restTl (TimeLine2.fromIO mappend newTlIo)
        requestNextFrame nextFrame |> ignore
    requestNextFrame nextFrame |> ignore
    fun m ->
        let canceled = ref false
        let offset = 0. - now
        let io =
            match m with
            | Local io ->
                ring canceled offset io
            | Origin io ->
                ring canceled 0. io
            | Delay (delay, io) ->
                ring canceled offset << IO <| fun o t ->
                    o << Delay <| (delay, io)
        let p = runAllNows (now, io)
        let timeline = TimeLine2.fromIO mappend p
        mainTimeline <- Option.mappend (TimeLine2.mappend mappend) mainTimeline timeline
        Disposable.return' <| fun () -> canceled.Value <- true
    
let run (tf: unit -> float) timer =
    let mutable nextRun = None
    let mutable timerd = Disposable.empty
    let mutable now = tf()
    let rec schedule = function
        | None -> ()
        | Some timeline ->
            let (nextArrival, _) = TimeLine2.getBounds timeline
            match nextRun with
            | None                                  ->
                printfn "<- %A None" now
                nextRun <- Some (nextArrival, timeline)
                timerd <- timer (System.Math.Max (nextArrival - now, 0.)) onTimer
            | Some (nr, tl) when nr >= nextArrival  ->
                printfn "<- %A %A >= %A" now nr nextArrival
                nextRun <- Some (nextArrival, TimeLine2.mappend mappend tl timeline)
                timerd.Dispose()
                timerd <- timer (System.Math.Max (nextArrival - now, 0.)) onTimer
            | Some (nr, tl)                         ->
                printfn "<- %A %A < %A" now nr nextArrival
                nextRun <- Some (nr, TimeLine2.mappend mappend tl timeline)
    and onTimer () =
        now <- tf()
        let (nr, tl) = nextRun.Value
        // printfn "-> %A" now
        nextRun <- None
        let mutable p = IO.empty
        let l =
            IO.run ()
            <| fun tio -> p <- (IO.mappend Unit.mappend) p (runAllNows tio)
            <| TimeLine2.runTo now tl
        schedule <| Option.mappend (TimeLine2.mappend mappend) l (TimeLine2.fromIO mappend p)
    fun m ->
        let canceled = ref false
        let offset = 0. - now
        let io =
            match m with
            | Local io ->
                ring canceled offset io
            | Origin io ->
                ring canceled 0. io
            | Delay (delay, io) ->
                ring canceled offset << IO <| fun o t ->
                    o << Delay <| (delay, io)
        let p = runAllNows (now, io)
        let timeline = TimeLine2.fromIO (mappend) p
        schedule timeline
        Disposable.return' <| fun () -> canceled.Value <- true
