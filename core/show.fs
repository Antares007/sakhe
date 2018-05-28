module Sakhe.Show
open Fable.Core
open Fable.Core.JsInterop
open Fable.Import.Browser

module AnimationFrame =
    let a = S.now 1

module State =
    open Sakhe.State

    let init (a: 'a) (a2b: 'a -> 'b) (maybe_a:'a option): 'b =
        match maybe_a with
        | Some a -> a2b a
        | None   -> a2b a


    // let define key d = RValue (x, d)
    let Number k s = RNumber (k, s)
    let Object k s = RObject (k, s)
    let Array k s = RArray (k, s)

    let emptystring = createEmpty<obj []>
    type [<Pojo>] Person = {
        name: string
        age: int
    }
    open S
    (*

        var achiko = {
            age: 42
        }

    *)
    let rez =
        treeObj << at (ms 0.) << Pith <| fun o ->

            o << Object "achiko" << treeObj << at (ms 3000.) << Pith <| fun o ->
                o << Number "age" <<  at (ms 3000.) << R.update <| function
                    | Some v -> v + 1.
                    | None -> 0.
                ()
            ()


    let update s =
        s
        |> scan
            (R.apply)
            (Some Fable.Core.JsInterop.createEmpty<obj>)
        |> tap console.log

    // drain (update rez)
    // |> ignore

module Dom =
    open PNode
    let pnode a p s = PNode (a, p, s)

    let createElm tag =
        pnode
            <| fun () -> document.createElement tag
            <| fun n -> n.nodeName = tag

    let Div = createElm    "DIV"
    let A =  createElm     "A"
    let Button = createElm "BUTTON"
    let Span = createElm   "SPAN"
    let H1 =  createElm    "H1"
    let H2 =  createElm    "H2"
    let H3 =  createElm    "H3"

    let Text =
        pnode
            <| fun () -> document.createTextNode ""
            <| fun (n: Node) -> n.nodeName = "#text"

    let intS = S.periodic (ms 10.) |> S.scan (fun c _ -> c + 1) 0 |> S.skip 1 |> S.multicast

    let statTree t p = t << tree (P.once ignore) << S.now << Pith <| p
    let div p = statTree Div p
    let btn p = statTree Button p
    let span p = statTree Span p
    let h3 p = statTree H3 p

    let text s = Text << S.at (ms 0.) << P.once <| fun text -> text.textContent <- s

    let rec counter d =
        div <| fun o ->
            o << btn <| fun o ->
                o << span <| fun o ->
                    o << text <| "+"
                if d > 0 then o <| counter (d - 1)
            o << btn <| fun o ->
                o << span <| fun o ->
                    o << text <| "-"
                if d > 0 then o <| counter (d - 1)
            o << h3 <| fun o ->
                o << Text << S.map (fun i -> P.once (fun text -> text.textContent <- string i)) <| intS
    let render elm s =
        s
        |> S.sample S.animationFrame
        |> S.scan P.apply elm

    let rez =
        tree (P.once ignore) << S.now << Pith <| fun o ->
            o (counter 3)

    (render (document.getElementById "root-node") rez) |> ignore

module Test2 =

    let tree pith =
        G.tree State.treeObj (PNode.tree (P.once ignore)) pith

    let g key p =
        G.AB (
            (State.Object key << fst <| p),
            (Dom.Div << snd <| p)
        )
    let (rs, ps) = tree << S.now << Pith <| fun o ->
        o << G.A << State.Number "a" << S.now << State.R.set <| 1.
        o << G.B << Dom.Div << S.now << P <| fun elm -> elm.innerHTML <- "<h1>hello world!</h1>"
        o << g "hmmm" << tree << S.now << Pith <| fun o ->
            o << G.A << State.Number "aa" << S.now << State.R.set <| 2.
            o << G.B << Dom.Div << S.now << P <| fun elm -> elm.innerHTML <- "<h2>hello world!</h2>"

    S.merge
        (Dom.render (document.getElementById "root-node") ps |> S.map ignore)
        (State.update rs |> S.map ignore)
    |> S.drain
    |> ignore
