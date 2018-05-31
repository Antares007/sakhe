module Sakhe.Show
open Fable.Import.Browser

module AnimationFrame =
    let a = S.now 1

module State =
    open Sakhe.R

    let init (a: 'a) (a2b: 'a -> 'b) (maybe_a:'a option): 'b =
        match maybe_a with
        | Some a -> a2b a
        | None   -> a2b a

    let Number k s = RNumber (k, s)
    let Object k s = RObject (k, s)
    let Array k s = RArray (k, s)

    let rez =
        treeObj << S.at (ms 0.) << Pith <| fun o ->
            o << Object "achiko" << treeObj << S.at (ms 3000.) << Pith <| fun o ->
                o << Number "age" <<  S.at (ms 3000.) << R.update <| function
                    | Some v -> v + 1.
                    | None -> 0.
                ()
            ()

    let update s =
        s
        |> S.scan
            (R.apply)
            (Some Fable.Core.JsInterop.createEmpty<obj>)
        |> S.tap console.log
    S.drain (update rez)
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

        let intS = S.periodic (ms 10.) |> S.scan (fun c _ -> c + 1) 0 |> S.skip 1 |> S.multicast

        let statTree t p = t << tree (S.now << P.once <| ignore) << S.now << Pith <| p
        let div p = statTree Div p
        let btn p = statTree Button p
        let span p = statTree Span p
        let h3 p = statTree H3 p

        let text s = Text << S.at (ms 0.) << P.once <| fun text -> text.textContent <- s

    type DomEvents<'a> =
        | Click of (MouseEvent -> 'a)

    type Actions =
        | Plus
        | Minus

    let konst a _ = a

    let OnP (e: Event<'a>) (l: 'a DomEvents list) =
        let d = ref ignore
        let p = P.once <| fun (elm: HTMLElement) ->
            d := List.fold
                    (fun d -> function
                    | Click f ->
                        let h arg =
                            e.Trigger (f arg)
                        elm.addEventListener_click h
                        console.log "add"
                        fun () ->
                            elm.removeEventListener ("click", unbox h)
                            console.log "remove"
                            d ()
                    )
                    ignore
                    l
        (p, d)

    let On e s =
        S.map (OnP e) s
        |> S.pairwise (P.once ignore, (ref ignore))
        |> S.map (fun ((_, refd), c) ->
            let d = !refd
            d ()
            fst c)


    let rec counter d =
        H.div <| fun o ->
            let acts = new Event<_>()
            let sum =
                S.toStream acts
                |> S.scan
                    (fun m -> function
                        |Plus  -> m + 1
                        |Minus -> m - 1)
                    0

            o << H.Button << PNode.tree (On acts <| S.now [Click (fun _ -> Plus)]) << S.now << Pith <| fun o ->
                o << H.span <| fun o ->
                    o << H.text <| "+"
                if d > 0 then o <| counter (d - 1)

            o << H.Button << PNode.tree (On acts <| S.now [Click (fun _ -> Minus)]) << S.now << Pith <| fun o ->
                o << H.span <| fun o ->
                    o << H.text <| "-"
                if d > 0 then o <| counter (d - 1)

            o << H.h3 <| fun o ->
                o << H.Text << S.map (fun i -> P.once (fun text -> text.textContent <- string i)) <| sum

    let render elm s =
        s
        |> S.sample S.animationFrame
        |> S.scan P.apply elm

    let rez =
        PNode.tree (S.now << P.once <| ignore) << S.now << Pith <| fun o ->
            o << counter <| 3

    (render (document.getElementById "root-node") rez)
    |> S.drain
    |> ignore

module Test2 =
    open State
    open Dom
    let tree pith =
        G.tree R.treeObj (PNode.tree (S.now << P.once <| ignore)) pith

    let g key p =
        G.AB (
            (Object key << fst <| p),
            (H.Div << snd <| p)
        )

    let rez = tree << S.now << Pith <| fun o ->
        o << G.A << Number "a" << S.now << R.set <| 1.
        o << G.B << H.Div << S.now << P <| fun elm -> elm.innerHTML <- "<h1>hello world!</h1>"
        o << g "hmmm" << tree << S.now << Pith <| fun o ->
            o << G.A << Number "aa" << S.now << R.set <| 2.
            o << G.B << H.Div << S.now << P <| fun elm -> elm.innerHTML <- "<h2>hello world!</h2>"

    S.merge
        (render (document.getElementById "root-node") (snd rez) |> S.map ignore)
        (State.update (fst rez) |> S.map ignore)
    // |> S.drain
    |> ignore
