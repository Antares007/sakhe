module Sakhe.Dom2
open Fable.Import.Browser
open Fable.Core
open Dom
open Most

type IDom<'a when 'a :> Element> =
    inherit IElm<'a>
    abstract Div<'b when 'b :> Element> : IStream<IDom<'b> -> unit> -> unit

let inline NodeName nodeName (node: #Node) = node.nodeName = nodeName

let elm (ap: ((unit -> 'a) * (Node -> bool))) (pith: IStream<IElm<'a> -> unit>) = (ap, pith)
let chr (ap: ((unit -> 'a) * (Node -> bool))) (pith: IStream<'a -> unit>) = (ap, pith)

[<Emit("((tag) => [() => document.createElement(tag), (n) => n && n.nodeName === tag])($0.toUpperCase())")>]
let createAP<'a when 'a :> Node> (_: string) : (unit -> 'a) * (Node -> bool) = jsNative

let a = createAP<HTMLAnchorElement> "a"
let h1 = createAP<HTMLHeadingElement> "h1"
let h2 = createAP<HTMLHeadingElement> "h2"
let h3 = createAP<HTMLHeadingElement> "h3"
let h4 = createAP<HTMLHeadingElement> "h4"
let span = createAP<HTMLSpanElement> "span"
let div = createAP<HTMLDivElement> "div"
let button = createAP<HTMLButtonElement> "button"
let text = ((fun () -> document.createTextNode ("")), NodeName "#text")

let H1 f = elm h1 f
let H2 f = elm h2 f
let H3 f = elm h3 f
let Span f = elm span f
let Div f = elm div f
let Button f = elm button f
let Text f = chr text f

[<Emit("console.timeStamp($0)")>]
let timeStamp (_: string) = jsNative

let run () =
    let intS = M.periodic 10. |> M.scan (fun c _ -> c + 1) 0 |> M.skip 1 |> M.multicast

    let rec counter (d: int) (o:IElm<_>) =
        o.Node << Div << M.now <| fun o ->

            o.Patch << M.now <| fun d ->
                d.style.padding <- "5px 10px"
                d.style.textAlign <- "center"

            o.Node << Button << M.now <| fun o ->
                (o.Node << Span) << M.now <| fun o ->
                    o.Leaf << Text << M.now <| fun text -> text.textContent <- "+"
                if d > 0 then
                    o.Node << Div << M.now <| counter (d - 1)

            o.Node << Button << M.now <| fun o ->
                (o.Node << Span) << M.now <| fun o ->
                    o.Leaf << Text << M.now <| fun text -> text.textContent <- "-"
                if d > 0 then
                    o.Node << Div << M.now <| counter (d - 1)

            o.Node << H3 << M.now <| fun o ->
                o.Leaf << Text << M.map (fun i -> fun text -> text.textContent <- string i) <| intS

    let patches =
        counter 3
        |> M.now
        |> tree
        |> M.during (M.at 1000. (M.at 3000. ()))
        |> M.scan
            (fun n p ->
                timeStamp ("patching")
                p(n)
                n)
            (unbox document.getElementById "root-node": HTMLDivElement)

    let scheduler = Most.Scheduler.newDefaultScheduler ()
    M.runEffects patches scheduler
