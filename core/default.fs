module Sakhe.Default
open Fable.Import

type Sink<'a> = {
    next: ('a -> unit)
    complete: (unit -> unit)
    error: (exn -> unit)
}
let timer delay task =
    if delay <= 0. then
        let mutable canceled = false
        JS.Promise.resolve(task).``then``(fun t -> if not canceled then t()) |> ignore
        Disposable.return' (fun () -> canceled <- true)
    else
        let token = Fable.Import.JS.setTimeout task (int delay)
        Disposable.return' <| fun () -> Fable.Import.JS.clearTimeout token
let tf () = System.Math.Floor (Fable.Import.Browser.performance.now())
let scheduler = Scheduler.run tf timer

let subscribe (sink: Sink<'a>) s =
    Stream.run scheduler <| function
        | Stream.Event (t, a)   -> sink.next a
        | Stream.End (t)        -> sink.complete ()
        | Stream.Error (t, err) -> sink.error err
    <| s
