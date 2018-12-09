module Sakhe.Default
open Fable.Import

let timer delay task =
    if delay <= 0. then
        let mutable canceled = false
        JS.Promise.resolve(task).``then``(fun t -> if not canceled then t()) |> ignore
        Disposable.return' (fun () -> canceled <- true)
    else
        let token = Fable.Import.JS.setTimeout task (int delay)
        Disposable.return' <| fun () -> Fable.Import.JS.clearTimeout token
let tf () = System.Math.Floor (Fable.Import.Browser.performance.now())
