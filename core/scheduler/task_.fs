namespace Sakhe.Scheduler
module Task =
    open Fable.Import.JS

    let runTask (task: IScheduledTask) =
        try
            task.run ()
        with
        | err -> task.error err

    let defer (task: IScheduledTask) =
        Promise.resolve(task).``then``(runTask)
