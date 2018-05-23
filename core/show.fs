module Sakhe.Show
open Most
open Fable.Import.Browser

let scheduler = Most.Scheduler.newDefaultScheduler ()
let drain s = M.runEffects s scheduler |> ignore

module State =
    open Sakhe.State
    let init iv r = function
        | Some v -> r v
        | None   -> r iv

    let rez =
        oTree << M.now <| fun o ->
            (o "key1").JNumber << M.now << init 1. <| fun s -> s + 1.
            (o "key2").JObject << M.now <| fun o ->
                (o "key1").JNumber << M.now << init 0. <| fun f -> f + 1.
                (o "key1").JNumber << M.now << init 0. <| fun f -> f + 1.
            (o "key3").JArray << M.now <| fun o ->
                o.JString << M.now << init "a" <| fun s -> s + s
                o.JString << M.now << init "b" <| fun s -> s + s
                o.JString << M.now << init "o" <| fun s -> s + s
                ()
        |> M.scan (fun s r -> r (Some s))  (absurdObj ())
        |> M.tap console.log
    //drain rez

module State2 =
    open Sakhe.State2
    let init iv r = function
        | Some v -> r v
        | None   -> r iv
    let rez =
        oTree << M.now <| fun o ->
            ("k1", RNumber (M.now << init 1. <| fun s -> s + 1.)) |> o
            ("k2", RObject (M.now <| fun o ->
                ("k2.1", RNumber (M.now << init 2. <| fun s -> s + 1.)) |> o
                ("k2.2", RNumber (M.now << init 3. <| fun s -> s + 1.)) |> o
                ("k2.3", RObject (M.now  <| fun o ->
                    ("k2.3.1", RNumber (M.now << init 4. <| fun s -> s + 1.)) |> o
                )) |> o
           )) |> o
            ("k3", RArray (M.now <| fun o ->
                (0, RNumber (M.now << init 2. <| fun s -> s + 1.)) |> o
                (1, RNumber (M.now << init 3. <| fun s -> s + 1.)) |> o
                (2, RObject (M.now <| fun o ->
                    ("k2.3.1", RNumber (M.now << init 4. <| fun s -> s + 1.)) |> o
                )) |> o
           )) |> o
        |> M.scan
            (fun s r -> r (Some s))
            (Fable.Core.JsInterop.createEmpty<obj>)
        |> M.tap console.log
    //drain rez

module Dom =
    open P

    let elementAP (tag: string): AP<Node> =
        ((fun () -> upcast (document.createElement tag)), (fun n -> n.nodeName = tag))

    let Div (pith: IStream<Pith<Dom>>) = Dom (elementAP "DIV", P.tree pith)
    let A (pith: IStream<Pith<Dom>>) =  Dom (elementAP "A", P.tree pith)
    let Button (pith: IStream<Pith<Dom>>) =  Dom (elementAP "BUTTON", P.tree pith)
    let Span (pith: IStream<Pith<Dom>>) =  Dom (elementAP "SPAN", P.tree pith)
    let H1 (pith: IStream<Pith<Dom>>) =  Dom (elementAP "H1", P.tree pith)
    let H2 (pith: IStream<Pith<Dom>>) =  Dom (elementAP "H2", P.tree pith)
    let H3 (pith: IStream<Pith<Dom>>) =  Dom (elementAP "H3", P.tree pith)

    let Text p =
        Dom (((fun () -> upcast (document.createTextNode "")), (fun n -> n.nodeName = "#text")), p)
    let (<<|) a b = a (M.now b)

    let intS = M.periodic 10. |> M.scan (fun c _ -> c + 1) 0 |> M.skip 1 |> M.multicast

    let rec counter d =
        Div <<| fun o ->
            o << Button <<| fun o ->
                o << Span <<| fun o ->
                    o << Text <<| fun text -> text.textContent <- "+"
                if d > 0 then o (counter (d - 1))
            o << Button <<| fun o ->
                o << Span <<| fun o ->
                    o << Text <<| fun text -> text.textContent <- "-"
                if d > 0 then o (counter (d - 1))
            o << H3 <<| fun o ->
                o << Text << M.map (fun i -> fun text -> text.textContent <- string i) <| intS

    let rez =
        P.tree << M.now <| fun o -> o (counter 3)
        |> M.scan
            (fun n p -> p(n); n)
            (document.getElementById "root-node")
    drain rez
