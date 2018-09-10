module Sakhe.S.Scheduler
open Fable.Core

type [<Erase>] NextRunRef = private Ref of (Time.T * Disposable.T) option ref

type [<Erase>] Timeline = private Timeline of ResizeArray< (Time.T * Task.T<unit>) >

type [<Erase>] T =
    private
    | Scheduler of (NextRunRef * Timer.T * Clock.T * Timeline)

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

let return' timer clock=
    Scheduler (Ref (ref None), timer, clock, Timeline.empty())

let rec private scheduleNextRun scheduler =
    let (Scheduler (Ref ref, _, _, timeline)) = scheduler
    match (Timeline.nextArrival timeline, ref.Value) with
    | Some nextArrival, None ->
        ref.Value <- Some (nextArrival, setNextRun nextArrival scheduler)
    | Some nextArrival, Some (scheduledNextArrival, nextRun) ->
        if nextArrival >= scheduledNextArrival then ()
        else
        Disposable.dispose nextRun
        ref.Value <- Some (nextArrival, setNextRun nextArrival scheduler)
    | None, None -> ()
    | None, Some _ -> assert false; ()
and private setNextRun nextArrival scheduler =
    let (Scheduler (Ref ref, timer, clock, timeline)) = scheduler
    let task = Task.return' <| function
        | Task.On.Run ((), s) ->
            ref.Value <- None
            Task.run (Timeline.removeTasks (Clock.now clock) timeline) |> ignore
            scheduleNextRun scheduler
            None
        | Task.On.Exn (_, err) ->
            assert false
            raise err
    let delay = Time.Delay.fromTo (Clock.now clock) nextArrival
    Timer.setTimer task delay timer

let rec private add time period task (cancelRef: Disposable.T ref) scheduler =
    let (Scheduler (_, _, _, timeline)) = scheduler
    let task =
        match period with
        | Some period ->
            Task.append
                task
                (Task.return' <| function
                | Task.On.Run (time: Time.T, _) ->
                    let time = Time.add time period
                    add time (Some period) task cancelRef scheduler
                    None
                | Task.On.Exn _ ->
                    assert false
                    None)
        | None -> task
    let (task, cancelD) = Task.Cancelable.extend task
    let task = task |> Task.map (fun () -> time)
    Disposable.dispose cancelRef.Value
    cancelRef.Value <- cancelD
    Timeline.add time task timeline

let schedule delay period task scheduler =
        let (Scheduler (_, _, clock, _)) = scheduler
        let now = Clock.now clock
        let time =
            match delay with
            | None -> now
            | Some delay -> Time.add now delay
        let cancelRef = ref Disposable.empty
        add time period task cancelRef scheduler
        scheduleNextRun scheduler
        Disposable.return' <| fun () -> Disposable.dispose cancelRef.Value
