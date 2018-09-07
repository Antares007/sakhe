namespace Sakhe.S.Stream
open Sakhe.S

module Scheduler =
    type [<Fable.Core.Erase>] ScheduledRunRef = private Ref of (Time.T * Disposable.T) option ref
    type [<Fable.Core.Erase>] T =
        private
        | Scheduler of (ScheduledRunRef * Timer.T * Clock.T * Timeline.T)

    let schedule
        (delay: Time.Delay option)
        (period: Time.Delay option)
        (task: Task.T<Time.T * Task.Cancelable.Source>)
        (Scheduler (Ref ref, timer, clock, timeline)): Disposable.T =
            let now = Clock.now clock
            let taskTime = Time.delay now delay
            let (task, cancel) = Task.Cancelable.extend task
            let task = Task.map (fun () -> taskTime) task

            let cancel = Timeline.add taskTime task timeline

            let nextTaskTime = Timeline.nextArrival timeline
            let delay = Time.Delay.fromTo (Clock.now clock) nextTaskTime
            match ref.Value with
            | None ->
                let task = Task.return' <| function
                    | Task.On.Run ((), s) -> None
                    | Task.On.Exn _ -> None
                ref.Value <- Some (nextTaskTime, Timer.setTimer task delay timer)
            | Some (scheduledNextTaskTime, d) ->
                if (nextTaskTime >= scheduledNextTaskTime) then
                    Disposable.dispose d
                    let task = Task.return' <| function
                        | Task.On.Run ((), s) -> None
                        | Task.On.Exn _ -> None
                    ref.Value <- Some (nextTaskTime, Timer.setTimer task delay timer)
            cancel
