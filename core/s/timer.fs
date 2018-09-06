module Sakhe.S.Timer
open Fable.Import.JS

type T = private Timer of (Task.T<unit * Task.Cancelable.Source> -> PositiveInt.T -> Disposable.T)

let return' set clear = Timer <| fun task delay ->
    let delay = PositiveInt.valueOf delay
    let (task, cancelDisposable) = Task.Cancelable.wrap task
    if 0 = delay then
        Promise.resolve(task).``then``(Task.run) |> ignore
        cancelDisposable
    else
        let handle = set (fun () -> Task.run task |> ignore) delay
        Disposable.append
            cancelDisposable
            (Disposable.return' (fun () -> clear handle))

let setTimer task time (Timer set) = set task time
