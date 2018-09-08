namespace Sakhe.S.Stream
open Sakhe.S
open Sakhe.S

module Scheduler =
    type [<Fable.Core.Erase>] NextRunRef = private Ref of (Time.T * Disposable.T) option ref

    type [<Fable.Core.Erase>] T =
        private
        | Scheduler of (NextRunRef * Timer.T * Clock.T * Timeline.T)

    let return' timer clock=
        Scheduler (Ref (ref None), timer, clock, Timeline.empty())

    let rec private scheduleNextRun (scheduler: T) =
        let (Scheduler (ref, _, _, timeline)) = scheduler
        if Timeline.isEmpty timeline then ()
        else
        let nextArrival = Timeline.nextArrival timeline
        let (Ref nextRunRef) = ref
        match nextRunRef.Value with
        | None -> nextRunRef.Value <- Some (nextArrival, setNextRun nextArrival scheduler)
        | Some (scheduledNextArrival, nextRunD) ->
            if (nextArrival >= scheduledNextArrival) then
                Disposable.dispose nextRunD
                nextRunRef.Value <- Some (nextArrival, setNextRun nextArrival scheduler)

    and private setNextRun nextArrival (scheduler: T) =
        let (Scheduler (_, timer, clock, timeline)) = scheduler
        Timer.setTimer
            (Task.return' <| function
                | Task.On.Run ((), s) ->
                    let d = Task.run (Timeline.removeTasks (Clock.now clock) timeline)
                    d |> ignore
                    scheduleNextRun scheduler
                    None
                | Task.On.Exn (_, err) ->
                    raise err)
            (Time.Delay.fromTo (Clock.now clock) nextArrival)
            timer

    let private reschedule (scheduler: T) =
        let (Scheduler (nextRunRef, _, _, timeline)) = scheduler
        if Timeline.isEmpty timeline then
            let (Ref nextRunRef) = nextRunRef
            match nextRunRef.Value with
            | None -> ()
            | Some (_, d) ->
                Disposable.dispose d
                nextRunRef.Value <- None
        else
            scheduleNextRun scheduler

    let rec private add time period task (taskD: Disposable.T ref) (removeD: Disposable.T ref) (scheduler: T) =
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
            (Disposable.return' (fun () -> reschedule scheduler))

    let schedule
        (delay: Time.Delay option)
        (period: Time.Delay option)
        (task: Task.T<Time.T * Task.Cancelable.Source>)
        (scheduler: T): Disposable.T =
            let (Scheduler (_, _, clock, _)) = scheduler
            let now = Clock.now clock
            let time = if delay.IsNone then now else Time.add now delay.Value

            let removeD = ref Disposable.empty
            let taskD = ref Disposable.empty

            add time period task taskD removeD scheduler

            scheduleNextRun scheduler

            Disposable.return' <| fun () ->
                Disposable.dispose taskD.Value
                Disposable.dispose removeD.Value
