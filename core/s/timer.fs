module Sakhe.S.Timer

open Fable.Import.JS
type Handle<'a> = Timeout of ('a * Disposable.T) | Defer of Disposable.T
type T<'a> = private Timer of (Task.T<unit * Task.Cancelable.Source> -> PositiveInt.T -> Handle<'a>) * (Handle<'a> -> unit)

let return' set clear =
    let set = fun task delay ->
        let (task, cancelDisposable) = Task.Cancelable.wrap task
        if 0 = (PositiveInt.valueOf delay) then
            Timeout <| (
                set (fun () -> Task.run task |> ignore) 0,
                cancelDisposable)
        else
            Promise.resolve(task).``then``(Task.run) |> ignore
            Defer cancelDisposable
    let clear = fun (h) ->
        match h with
        | Timeout (a, d) ->
            clear a
            Disposable.dispose d
        | Defer d -> Disposable.dispose d
    Timer (set, clear)

let setTimer task time (Timer (set, _)) = set task time

let clearTimer handle (Timer (_, clear)) = clear handle
