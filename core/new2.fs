module Sakhe.Dom2
open Fable.Import.Browser
open Fable.Core
open M
open Dom
open Most

type IDom<'a when 'a :> Element> =
    inherit ILang<'a>
    abstract Div<'b when 'b :> Element> : Stream<IDom<'b> -> unit> -> unit

let mkAbsurdProve (create: unit -> 't) (prove: _ -> bool): (unit -> 't) * (Node -> 't option) =
    (create, fun n -> if prove n then Some (unbox n) else None)
let inline NodeName nodeName (node: #Node) = node.nodeName = nodeName

let elm (ap: ((unit -> 'a) * (Node -> 'a option))) (pith: Stream<ILang<'a> -> unit>) = (ap, pith)
let chr (ap: ((unit -> 'a) * (Node -> 'a option))) (pith: Stream<'a -> unit>) = (ap, pith)

[<Emit("((tag) => [() => document.createElement(tag), (n) => n && n.nodeName === tag ? n : null])($0.toUpperCase())")>]
let createAP<'a when 'a :> Node> (_: string) : (unit -> 'a) * (Node -> 'a option) = jsNative

let a = createAP<HTMLAnchorElement> "a"
let h1 = createAP<HTMLHeadingElement> "h1"
let h2 = createAP<HTMLHeadingElement> "h2"
let h3 = createAP<HTMLHeadingElement> "h3"
let h4 = createAP<HTMLHeadingElement> "h4"
let span = createAP<HTMLSpanElement> "span"
let div = createAP<HTMLDivElement> "div"
let button = createAP<HTMLButtonElement> "button"
let text = mkAbsurdProve (fun () -> document.createTextNode ("")) (NodeName "#text")

let H1 f = elm h1 f
let H2 f = elm h2 f
let H3 f = elm h3 f
let Span f = elm span f
let Div f = elm div f
let Button f = elm button f
let Text f = chr text f

let (:=) a b = a (most.merge (most.now b) (most.never ()))

let intS = most.periodic 10 |> most.scan (fun c _ -> c + 1) 0

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
            (o.Leaf << Text) (intS |> most.map (fun i -> fun text -> text.textContent <- string i))

let rez = tree := (counter 4)

let rootNode = unbox document.getElementById "root-node"
let patches =
    rez
    |> most.scan (fun n p -> p(n); n) rootNode
    |> most.until (most.periodic 10000 |> most.skip 1)


let sink = { new Sink<_> with
    member __.``event`` (time, value) = ()
    member __.``end`` (time) = console.info (time, "|")
    member __.error (time, err) = console.error (time, err)
}
// most.run (sink, Most.Scheduler.require.newDefaultScheduler (), patches) |> ignore
most.runEffects (patches, Most.Scheduler.require.newDefaultScheduler ()) |> ignore
