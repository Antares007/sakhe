module Sakhe.S.Scheduler
open Fable.Core

type [<Erase>] NextRunRef = private Ref of (Time.T * Disposable.T) option ref

type [<Erase>] T =
    private
    | Scheduler of (NextRunRef * Timer.T * Clock.T * Timeline.T)

let return' timer clock=
    Scheduler (Ref (ref None), timer, clock, Timeline.empty())

let rec private scheduleNextRun scheduler =
    let (Scheduler (Ref ref, _, _, timeline)) = scheduler
    if Timeline.isEmpty timeline then ()
    else
    let nextArrival = Timeline.nextArrival timeline
    match ref.Value with
    | Some (scheduledNextArrival, nextRun) when scheduledNextArrival < nextArrival ->
        Disposable.dispose nextRun
        ref.Value <- Some (nextArrival, setNextRun nextArrival scheduler)
    | None ->
        ref.Value <- Some (nextArrival, setNextRun nextArrival scheduler)
    | Some _ ->
        ()
and private setNextRun nextArrival scheduler =
    let (Scheduler (_, timer, clock, timeline)) = scheduler
    let task = Task.return' <| function
        | Task.On.Run ((), s) ->
            Task.run (Timeline.removeTasks (Clock.now clock) timeline) |> ignore
            scheduleNextRun scheduler
            None
        | Task.On.Exn (_, err) ->
            raise err
    let delay = Time.Delay.fromTo (Clock.now clock) nextArrival
    Timer.setTimer task delay timer

let private reschedule scheduler =
    let (Scheduler (Ref ref, _, _, timeline)) = scheduler
    if Timeline.isEmpty timeline then
        match ref.Value with
        | None -> ()
        | Some (_, d) ->
            Disposable.dispose d
            ref.Value <- None
    else
        scheduleNextRun scheduler

let rec private add time period task (taskD: Disposable.T ref) (removeD: Disposable.T ref) scheduler =
    let (Scheduler (_, _, _, timeline)) = scheduler
    let task =
        match period with
        | None -> task
        | Some period ->
            let readd = Task.return' <| function
                | Task.On.Run (time: Time.T, _) ->
                    let time = Time.add time period
                    add time (Some period) task taskD removeD scheduler
                    None
                | Task.On.Exn _ -> None
            Task.append task readd
    let (task, d) = Task.Cancelable.extend task
    let task = task |> Task.map (fun () -> time)
    Disposable.dispose taskD.Value
    taskD.Value <- d
    removeD.Value <- Disposable.append
        (Timeline.add time task timeline)
        (Disposable.return' <| fun () -> reschedule scheduler)

let schedule delay period task scheduler =
        let (Scheduler (_, _, clock, _)) = scheduler
        let now = Clock.now clock
        let time =
            match delay with
            | None -> now
            | Some delay -> Time.add now delay
        let removeD = ref Disposable.empty
        let taskD = ref Disposable.empty
        add time period task taskD removeD scheduler
        scheduleNextRun scheduler
        Disposable.return' <| fun () ->
            Disposable.dispose taskD.Value
            Disposable.dispose removeD.Value
