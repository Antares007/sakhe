module Sakhe.S.Timer
open Fable.Core
open Fable.Import.JS

type [<Erase>] T =
    private
    | Timer of (Task.T<unit * Task.Cancelable.Source> -> Time.Delay -> Disposable.T)

let private return' set clear = Timer <| fun task delay ->
    let delay = Time.Delay.value delay
    let (task, cancelDisposable) = Task.Cancelable.extend task
    if 0 = delay then
        Promise.resolve(task).``then``(Task.run) |> ignore
        cancelDisposable
    else
        let handle = set (fun () -> Task.run task |> ignore) delay
        Disposable.append
            (Disposable.return' (fun () -> clear handle))
            cancelDisposable
let defaultTimer = return' setTimeout clearTimeout

let setTimer task time (Timer set) = set task time
