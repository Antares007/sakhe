module Sakhe.Scheduler2

type O =
    | Local of IO<float, O, unit>
    | Origin of IO<float, O, unit>
    | Delay  of float * IO<float, O, unit>

let rec private ring (canceled: bool ref) (offset: float) io =
    IO <| fun o now ->
        if canceled.Value then ()
        else
        IO.run (now + offset) <| function
            | Local io          -> o <| Local  (ring canceled (0. - now) io)
            | Origin io         -> o <| Origin (ring canceled 0. io)
            | Delay (delay, io) -> o <| Delay  (delay, ring canceled offset io)
        <| io
let rec private runAllNows (now, io: IO<float, O, unit>) = IO <| fun oo () ->
    let rec ring io  = IO <| fun o i ->
        io <| function
            | Local io -> IO.run now oo (IO.pmap ring io)
            | Origin io -> IO.run now oo (IO.pmap ring io)
            | Delay (delay, io) -> o <| (delay + now, io)
        <| i
    IO.run now oo (IO.pmap ring io)

let private iomappend l r = IO.mappend Unit.mappend l r
let private tlmappend l r = TimeLine2.mappend iomappend l r
let mkScheduler (tf: unit -> float) (requestNextFrame: (unit -> unit) -> 'h) =
    let mutable now = tf()
    let mutable mainTimeline = None
    let rec nextFrame () =
        now <- tf()
        match mainTimeline with 
        | None -> ()
        | Some tl ->
            let (na, _) = TimeLine2.getBounds tl
            if now >= na then
                let mutable newTlIo = IO.empty
                let restTl =
                    IO.run () <| fun tio ->
                        newTlIo <- iomappend newTlIo (runAllNows tio)
                    <| TimeLine2.runTo now tl
                let newTl = TimeLine2.fromIO iomappend newTlIo
                mainTimeline <- Option.mappend tlmappend restTl newTl
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
        let timeline = TimeLine2.fromIO iomappend (runAllNows (now, io))
        mainTimeline <- Option.mappend tlmappend mainTimeline timeline
        Disposable.return' <| fun () -> canceled.Value <- true
