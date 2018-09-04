module Sakhe.Scheduler.ClockTimer
type private Asap(f) =
    let mutable active = true

    member __.``cancel`` () =
        active <- false

    interface IScheduledTask with
        member __.``active`` with get () = active and set v = active <- v
        member __.``time`` = 0.
        member __.``run`` () =
            if (active) then
                f ()
        member __.``error`` e =
            raise e

let private runAsap f =
    let task = Asap f
    Task.defer task |> ignore
    task


type ClockTimer(clock: IClock) =
    interface ITimer with
        member __.``now`` () = clock.now ()

        member __.``setTimer`` (f, dt) =
            if dt <= 0. then
                TimerToken.Asap (runAsap f)
            else
                Timer (Fable.Import.JS.setTimeout f (unbox dt))

        member __.``clearTimer`` token =
            match token with
            | Asap asap -> (unbox asap: Asap).cancel ()
            | Timer token -> Fable.Import.JS.clearTimeout token
