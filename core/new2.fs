module Sakhe.Dom2
open Fable.Import.Browser
open M
open Dom
open Most

let a = (document.createElement_a, fun _ -> None)
let div = (document.createElement_div, fun _ -> None)
let text = ((fun () -> document.createTextNode ("")), fun _ -> None)

let rez: Stream<HTMLElement -> unit> = tree (most.now (fun o ->
    o.Node (div, most.now (fun o ->
        o.Leaf (text, most.now (fun o -> o.textContent <- "hello world!"))
        o.Node (div, most.now (fun o ->
            o.Leaf (text, most.now (fun o -> o.textContent <- "hello world!!"))
            o.Node (div, most.now (fun o ->
                o.Leaf (text, most.now (fun o -> o.textContent <- "hello world!!!"))
            ))
        ))
    ))
))

let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Most.Scheduler.require.newDefaultScheduler ()) |> ignore
