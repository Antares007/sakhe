module Sakhe.Scheduler.Timeline
let findAppendPosition (time: Time) (a: ResizeArray<'a * Time>) =
    let rec go (l:int) (r:int) =
        if l < r then
            let m = (l + r) / 2
            if snd a.[m] > time then
                go l m
            else
                go (m + 1) r
        else
            l - 1
    go 0 (a.length)

let inline private newSlot (t: 'a) stime ttime: (ResizeArray<'a * Time> * Time) =
    let ts = ResizeArray()
    ts.Add ((t, ttime))
    (ts, stime)

let insertByTime (ttime: Time) t (timeslots: ResizeArray<ResizeArray<'a * Time> * Time>) =
    let stime = System.Math.Floor ttime
    match findAppendPosition stime timeslots with
    | -1 -> timeslots.splice (0, 0, (newSlot t stime ttime)) |> ignore
    | i when snd timeslots.[i] <> stime -> timeslots.splice (i + 1, 0, newSlot t stime ttime) |> ignore
    | i -> let ts = fst timeslots.[i] in ts.splice (findAppendPosition ttime ts + 1, 0, (t, ttime)) |> ignore

let removeByTime (ttime: Time) t (timeslots: ResizeArray<ResizeArray<'a * Time> * Time>) =
    let stime = System.Math.Floor ttime
    let i = findAppendPosition stime timeslots
    if i < 0 then false
    else
    let (ts, itime) = timeslots.[i]
    if (itime <> stime) then false
    else
    let rec go i =
        if i < 0 then None
        else
        let (it, itime) = ts.[i]
        if itime <> ttime  then None
        else if it = t     then Some i
        else                    go (i - 1)
    match go (findAppendPosition ttime ts) with
    | Some i -> ts.splice (i, 1) |> ignore; true
    | None -> false

let runReadyTasks (runTask: ('a -> unit)) (tasks: ResizeArray<'a * Time>) (timeslots: ResizeArray<ResizeArray<'a * Time> * Time>) =
    failwith "na"

type Timeline() =
    let mutable timeSlots = ResizeArray<ResizeArray<IScheduledTask * Time> * Time>()

    member this.``nextArrival`` () =
        if timeSlots.length = 0 then infinity else snd timeSlots.[0]

    member __.``isEmpty`` () = timeSlots.length = 0

    member __.``add`` (st: IScheduledTask) =
        insertByTime st.time st timeSlots

    member __.``remove`` (st: IScheduledTask) =
        removeByTime st.time st timeSlots

    member __.``runTasks`` (time: Time) runTask =
        match findAppendPosition (System.Math.Floor time) timeSlots with
        | -1 -> ()
        | i ->
            let slots = timeSlots
            timeSlots <- slots.slice(i + 1)
            for j = 0 to i do
                runReadyTasks runTask (fst slots.[j]) timeSlots
