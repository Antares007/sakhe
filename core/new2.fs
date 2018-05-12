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
let h2 = mkAbsurdProve document.createElement_h2 (NodeName "H2")
let h3 = mkAbsurdProve document.createElement_h3 (NodeName "H3")
let span = mkAbsurdProve document.createElement_span (NodeName "SPAN")
let div = mkAbsurdProve document.createElement_div (NodeName "DIV")
let button = mkAbsurdProve document.createElement_button (NodeName "BUTTON")
let text = mkAbsurdProve (fun () -> document.createTextNode ("")) (NodeName "#text")

let H1 f = elm h1 f
let H2 f = elm h2 f
let H3 f = elm h3 f
let Span f = elm span f
let Div f = elm div f
let Button f = elm button f
let Text f = chr text f

let (:=) a b = a (most.now b)

let rec counter (d: int) (o:ILang<_>) =
    o.Node << Div := fun o ->
        o.Patch := fun d ->
            d.style.padding <- "5px 10px"
            d.style.textAlign <- "center"
        o.Node << Button := fun o ->
            (o.Node << Span) := fun o ->
                o.Leaf << Text := fun text -> text.textContent <- "+"
            if d > 0 then o.Node << Div := (counter (d - 1))
        o.Node << Button := fun o ->
            (o.Node << Span) := fun o ->
                o.Leaf << Text := fun text -> text.textContent <- "-"
            if d > 0 then o.Node << Div := (counter (d - 1))
        o.Node << H3 := fun o ->
            o.Leaf << Text := fun text -> text.textContent <- "0"

let rez = tree := (counter 2)


let rootNode = unbox document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Most.Scheduler.require.newDefaultScheduler ()) |> ignore
