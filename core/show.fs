module Sakhe.Show
open Fable.Import
let d = new Disposable.SettableDisposable()

let rec see n = Scheduler.return' <| fun t -> Pith.return' <| fun o ->
    let delay label delay f = Scheduler.O.delay delay <| fun (now) -> Pith.return' <| fun o ->
        printfn "now(%A) %s" (now) label
        f now o

    // if n < 3
    // then o <| Scheduler.O.Delay (Time.Delay.return' 100, see (n + 1))

    let tree l = Scheduler.O.now <| fun now -> Pith.return' <| fun o ->
        for i = 1 to 1 do
            o << delay (sprintf "%s %d" l i) 100 <| fun now o ->
                for j = 1 to 2 do
                    o << delay (sprintf "%s %d.%d" l i j) 200 <| fun now o ->
                    for k = 1 to 3 do
                        o << delay (sprintf "%s %d.%d.%d" l i j k) 300 <| fun now o ->
                        ()

    o << delay "A" 10 <| fun now o ->
        o << delay "B" 10 <| fun now o ->
            o << delay "C" 10 <| fun now o ->
                ()

                // o <| tree "Ta"
    // o <| tree "Ta"

let timer delay task =
    if delay = Time.Delay.zero then
        let mutable canceled = false
        JS.Promise.resolve(task).``then``(fun t -> if not canceled then t()) |> ignore
        Disposable.return' (fun () -> canceled <- true)
    else
        let token = Fable.Import.JS.setTimeout task (Time.Delay.unbox delay)
        Disposable.return' <| fun () -> Fable.Import.JS.clearTimeout token
let tf () = Time.return' <| System.Math.Floor (Fable.Import.Browser.performance.now())
let run = Scheduler.run tf timer
d.Set << run <| see 0
