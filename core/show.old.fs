module Sakhe.Show.Old
open Sakhe
open Fable.Import.Browser

module AnimationFrame =
    let a = So.now 1

module State =
    open Sakhe.R

    let init (a: 'a) (a2b: 'a -> 'b) (maybe_a:'a option): 'b =
        match maybe_a with
        | Some a -> a2b a
        | None   -> a2b a

    let Number k s = RNumber (k, s)
    let Object k s = RObject (k, s)
    let Array k s = RArray (k, s)
    open So
    let see = treeObj <| stream { yield Pith <| fun o ->
            o << Object "achiko" << treeObj <| stream { yield Pith <| fun o ->
                    o << Number "age" <<  So.at (ms 3000.) << R.update <| function
                        | Some v -> v + 1.
                        | None -> 0.
                    ()
            }
    }

    let rez =
        treeObj << So.at (ms 0.) << Pith <| fun o ->
            o << Object "achiko" << treeObj << So.at (ms 3000.) << Pith <| fun o ->
                o << Number "age" <<  So.at (ms 3000.) << R.update <| function
                    | Some v -> v + 1.
                    | None -> 0.
                ()
            ()

    let update s =
        s
        |> So.scan
            (R.apply)
            (Some Fable.Core.JsInterop.createEmpty<obj>)
        |> So.tap console.log

    let run _ =
        So.drain (update rez)
        |> ignore

module Dom =
    module H =
        open PNode
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

        let intS = So.periodic (ms 10.) |> So.scan (fun c _ -> c + 1) 0 |> So.skip 1 |> So.multicast

        let statTree t p = t << tree (So.now P.empty) << So.now << Pith <| p
        let div p = statTree Div p
        let btn p = statTree Button p
        let span p = statTree Span p
        let h3 p = statTree H3 p

        let text s = Text << So.at (ms 0.) << P.once <| fun text -> text.textContent <- s

    type DomEvents<'a> =
        | Click of (MouseEvent -> 'a)

    type Actions =
        | Plus
        | Minus

    let konst a _ = a


    let rec counter d =
        H.div <| fun o ->
            let acts = new Event<_>()
            let sum =
                So.toStream acts
                |> So.scan
                    (fun m -> function
                        |Plus  -> m + 1
                        |Minus -> m - 1)
                    0

            o << H.Button << PNode.tree (So.now (P.once (fun _ ->
                            console.log "patch"
                            ))) << So.now << Pith <| fun o ->
                o << H.span <| fun o ->
                    o << H.text <| "+"
                if d > 0 then o <| counter (d - 1)

            o << H.Button << PNode.tree (So.now P.empty) << So.now << Pith <| fun o ->
                o << H.span <| fun o ->
                    o << H.text <| "-"
                if d > 0 then o <| counter (d - 1)

            o << H.h3 <| fun o ->
                o << H.Text << So.map (fun i -> P.once (fun text -> text.textContent <- string i)) <| sum

    let render elm s =
        s
        |> So.sample So.animationFrame
        |> So.scan P.apply elm

    let piths = So.periodic (ms 1000.) |> So.konst (Pith (fun o ->
            o << counter <| 0))
    let rez =
        PNode.tree (So.now P.empty) <| piths

    let run _ =
        (render (document.getElementById "root-node") rez)
        |> So.drain
        |> ignore

module Test2 =
    open State
    open Dom
    let tree pith =
        G.tree R.treeObj (PNode.tree (So.now P.empty)) pith

    let g key p =
        G.AB (
            (Object key << fst <| p),
            (H.Div << snd <| p)
        )

    let rez = tree << So.now << Pith <| fun o ->
        o << G.A << Number "a" << So.now << R.set <| 1.
        o << G.B << H.Div << So.now << P <| fun elm -> elm.innerHTML <- "<h1>hello world!</h1>"
        o << g "hmmm" << tree << So.now << Pith <| fun o ->
            o << G.A << Number "aa" << So.now << R.set <| 2.
            o << G.B << H.Div << So.now << P <| fun elm -> elm.innerHTML <- "<h2>hello world!</h2>"
    let run _ =
        So.merge
            (render (document.getElementById "root-node") (snd rez) |> So.map ignore)
            (State.update (fst rez) |> So.map ignore)
        |> So.drain
        |> ignore
