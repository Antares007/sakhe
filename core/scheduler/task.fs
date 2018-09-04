module Sakhe.Scheduler.Task
let runTask (task: IScheduledTask) =
    try
        task.run ()
    with
    | err -> task.error err

let defer (task: IScheduledTask) =
    Fable.Import.JS.Promise.resolve(task).``then``(runTask)
