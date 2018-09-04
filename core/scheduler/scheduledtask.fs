module Sakhe.Scheduler.ScheduledTask
type ScheduledTask(time, localOffset, period, task: ITask, scheduler: IScheduler) =
    let mutable active = true
    interface IScheduledTask with
        member __.``active`` with get () = active and set v = active <- v
        member __.``time`` = time
        member __.``run`` () = task.run (time - localOffset)
        member __.``error`` e = task.error (time - localOffset, e)
    interface Disposable with
        member o.``dispose`` () =
            scheduler.cancel o
            task.dispose()
