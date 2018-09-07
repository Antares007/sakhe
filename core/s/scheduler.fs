namespace Sakhe.S.Stream
open Sakhe.S

module Scheduler =
    type SchedulerState = {
        mutable scheduledRun: Disposable.T option
        timer: Timer.T
        clock: Clock.T
        timeline: Timeline.T }

    type [<Fable.Core.Erase>] T = private Scheduler of SchedulerState

    let schedule
        (delay: Delay.T option)
        (period: Delay.T option)
        (task: Task.T<Time.T * Task.Cancelable.Source>)
        (Scheduler scheduler): Disposable.T =
            let now = Clock.now scheduler.clock
            let time =
                if delay.IsNone
                then now
                else Time.return' (Time.value now + float (Delay.value delay.Value))

            let (task, cancel) = Task.Cancelable.wrap task
            let task = Task.map (fun () -> time) task
            Timeline.add time task scheduler.timeline
            cancel
