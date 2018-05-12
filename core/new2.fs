module Sakhe.Dom2
open Fable.Import.Browser
open M
open Dom
open Most
open Patch

let mkAbsurdProve (create: unit -> 't) (prove: _ -> bool): (unit -> 't) * (Node -> 't option) =
    (create, fun n -> if prove n then Some (unbox n) else None)
let inline NodeName nodeName (node: #Node) = node.nodeName = nodeName

let elm (ap: AbsurdProve<'a>) (pith: Stream<ILang<'a> -> unit>) = (ap, pith)
let chr (ap: AbsurdProve<'a>) (pith: Stream<'a -> unit>) = (ap, pith)

let a = mkAbsurdProve document.createElement_a (NodeName "A")
let h1 = mkAbsurdProve document.createElement_h1 (NodeName "H1")
let h2 = mkAbsurdProve document.createElement_h1 (NodeName "H2")
let div = mkAbsurdProve document.createElement_div (NodeName "DIV")
let button = mkAbsurdProve document.createElement_button (NodeName "BUTTON")
let text = mkAbsurdProve (fun () -> document.createTextNode ("")) (NodeName "#text")

let Div f = elm div f
let Button f = elm button f
let Text f = chr text f

let (!^) x = most.now x
let (<|>) a b = a (most.now b)
let (:=) a b = a (most.now b)

let rez: Stream<HTMLElement -> unit> = tree := fun o ->
    o.Node << Div := fun o ->
        o.Node << Div := fun o ->
            o.Node << Div := fun o ->
                o.Node << Div := fun o ->
                    o.Leaf << Text := fun text -> text.textContent <- "deeep text"

    o.Node << Button := fun o ->
        o.Leaf (text, !^ (fun o -> o.textContent <- "click me"))


let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Most.Scheduler.require.newDefaultScheduler ()) |> ignore
