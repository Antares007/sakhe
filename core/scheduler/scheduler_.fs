module Most.Scheduler.Scheduler
open System
open Task
open ScheduledTask

type Scheduler(timer: ITimer, timeline: ITimeline) =
    let mutable _timer = None
    let mutable _nextArrival = infinity

    member __.``currentTime`` () = timer.now ()

    member this.``scheduleTask`` (localOffset, delay: Time, period, task) =
        let time = this.currentTime() + Math.Max(0., delay)
        let st = ScheduledTask(time, localOffset, period, task, this)
        timeline.add st
        this._scheduleNextRun()
        st

    interface IScheduler with
        member this.``cancel`` task =
            task.active <- false
            if timeline.remove task then
                this._reschedule ()

    member this.``_reschedule`` () =
        if timeline.isEmpty() then
            this._unschedule()
        else
            this._scheduleNextRun()

    member this.``_unschedule`` () =
        match _timer with
        | None -> ()
        | Some token ->
            timer.clearTimer token
            _timer <- None

    member this.``_scheduleNextRun`` () =
        if timeline.isEmpty() then ()
        else
        let nextArrival = timeline.nextArrival ()
        if _timer.IsNone then
            this._scheduleNextArrival nextArrival
        else
        if nextArrival < _nextArrival then
            this._unschedule ()
            this._scheduleNextArrival nextArrival

    member this.``_scheduleNextArrival`` nextArrival =
        _nextArrival <- nextArrival
        let delay = System.Math.Max(0., _nextArrival - (this.currentTime()))
        _timer <- Some (timer.setTimer (this._runReadyTasks, delay))

    member this.``_runReadyTasks`` () =
        _timer <- None
        timeline.runTasks(this.currentTime(), runTask)
        this._scheduleNextRun ()
