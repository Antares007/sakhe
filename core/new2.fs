module Sakhe.Dom2
open Fable.Import.Browser
open M
open Dom
open Most




let mkTypeChecker (create: unit -> 't) (prove: _ -> bool): (unit -> 't) * (Node -> 't option) =
    (create, fun n -> if prove n then Some (unbox n) else None)
let inline NodeName nodeName (node: #Node) = node.nodeName = nodeName


let a = mkTypeChecker document.createElement_a (NodeName "A")
let h1 = mkTypeChecker document.createElement_h1 (NodeName "H1")
let h2 = mkTypeChecker document.createElement_h1 (NodeName "H2")
let div = mkTypeChecker document.createElement_div (NodeName "DIV")
let button = mkTypeChecker document.createElement_button (NodeName "BUTTON")
let text = mkTypeChecker (fun () -> document.createTextNode ("")) (NodeName "#text")

let (!^) x = most.now x
let (<|>) a b = a (most.now b)

let rez: Stream<HTMLElement -> unit> = tree <|> fun o ->
    o.Node (div, !^ (fun o ->
        o.Leaf (text, !^ (fun o -> o.textContent <- "a"))
        o.Node (div, !^ (fun o ->
            o.Leaf (text, !^ (fun o -> o.textContent <- "b"))
            o.Node (h1, !^ (fun o ->
                o.Leaf (text, !^ (fun o -> o.textContent <- "c"))
            ))
        ))
    ))
    o.Node (button, !^ (fun o ->
        o.Leaf (text, !^ (fun o -> o.textContent <- "click me"))
    ))

let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Most.Scheduler.require.newDefaultScheduler ()) |> ignore
