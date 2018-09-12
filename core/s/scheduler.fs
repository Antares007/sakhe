module Sakhe.S.Scheduler
open Fable.Core
open Sakhe.S
open System.Timers

type [<Erase>] NextRunRef =
    private
    | Ref of (Time.T * Disposable.T) option ref

type [<Erase>] Timeline =
    private
    | Timeline of ResizeArray< (Time.T * Task.T<unit>) >

type [<Erase>] T =
    private
    | Scheduler of (NextRunRef * Timer.T * Clock.T * Timeline * Clock.T option)

module private Timeline =
    open System.Collections.Generic
    open Fable.Core.JsInterop

    type List<'a> with
        member inline a.``length``: int = !!a?length
        member inline a.``splice`` (s: int, e: int): ResizeArray<'a> = !!a?splice(s, e)
        member inline a.``splice`` (s: int, e: int, v: 'a): ResizeArray<'a> = !!a?splice(s, e, v)

    let private findAppendPosition (a: 'a) (array: List<'a * 'b>) =
        let rec go l r =
            if l < r then
                let m = (l + r) / 2
                if fst array.[m] > a then go l m
                else go (m + 1) r
            else l - 1
        go 0 (array.length)

    let empty () = Timeline <| ResizeArray()

    let nextArrival (Timeline array) =
        if array.length = 0 then None else Some (fst array.[0])

    let add time (task: unit Task.T) (Timeline array) =
        let i = findAppendPosition time array
        if i = -1 then array.splice(0, 0, (time, task)) |> ignore
        else
        let (iTime, iTask) = array.[i]
        if iTime = time then array.[i] <- (iTime, Task.append iTask task)
        else
        array.splice(i + 1, 0, (time, task)) |> ignore

    let removeTasks time (Timeline array) =
        array.splice(0, findAppendPosition time array + 1)
        |> Seq.map snd
        |> Seq.toArray
        |> Task.appendArray

let return' originClock =
    let localClock = Clock.localClock originClock
    Scheduler ( Ref (ref None)
              , Timer.defaultTimer
              , localClock
              , Timeline.empty()
              , None)
let map f (Scheduler (ref, timer, localClock, timeline, relativeClock)) =
    Scheduler (ref, timer, localClock, timeline, f relativeClock)

let rec private scheduleNextRun scheduler nextRun =
    let (Scheduler (Ref netRunRef, _, _, _, _)) = scheduler
    match nextRun with
    | None -> ()
    | Some nextRun ->
        match netRunRef.Value with
        | None -> setTimer scheduler nextRun
        | Some (nextRun, cancel) ->
            if nextRun <= nextRun then ()
            else
            Disposable.dispose cancel
            setTimer scheduler nextRun
and private setTimer scheduler point =
    let (Scheduler (Ref netRunRef, timer, clock, timeline, _)) = scheduler
    let now = Clock.localTime clock
    let delay = Time.Delay.fromTo now point

    let task = Task.return' <| function
        | Task.On.Run ((), s) ->
            netRunRef.Value <- None
            let now = Clock.localTime clock
            Task.run (Timeline.removeTasks now timeline) |> ignore
            let point = Timeline.nextArrival timeline
            scheduleNextRun scheduler point
            None
        | Task.On.Exn (_, err) ->
            assert false
            raise err
    netRunRef.Value <- Some (point, Timer.setTimer task delay timer)

let rec private add localNow relNow period task (cancelRef: Disposable.T ref) scheduler =
    let (Scheduler (_, _, _, timeline, _)) = scheduler
    let task =
        match period with
        | Some period ->
            Task.append
                task
                (Task.return' <| function
                | Task.On.Run (_: Time.T, _) ->
                    let localNow = Time.add period localNow
                    let relNow = Time.add period relNow
                    add localNow relNow (Some period) task cancelRef scheduler
                    None
                | Task.On.Exn _ ->
                    assert false
                    None)
        | None -> task
    let (task, cancelD) = Task.Cancelable.extend task
    let task = task |> Task.map (fun () -> relNow)
    Disposable.dispose cancelRef.Value
    cancelRef.Value <- cancelD
    Timeline.add localNow task timeline

let private localTimes (Scheduler (_, _, localClock, _, relClock)) =
    match relClock with
    | None ->
        let t = Clock.localTime localClock
        t, t
    | Some relClock ->
        let localNow = Clock.localTime localClock
        let relNow = Clock.localTime relClock
        localNow, relNow

let schedule delay period task scheduler =
        let (Scheduler (Ref netRunRef, _, localClock, _, _)) = scheduler
        let (localNow, relNow) = localTimes scheduler
        let (localNow, relNow) =
            match delay with
            | None -> (localNow, localNow)
            | Some delay -> (Time.add delay localNow, Time.add delay relNow)
        let cancelRef = ref Disposable.empty

        add localNow relNow period task cancelRef scheduler
        scheduleNextRun scheduler (Some localNow)

        Disposable.return' <| fun () -> Disposable.dispose cancelRef.Value
