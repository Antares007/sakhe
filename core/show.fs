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
        oTree << at (ms 0.) << Pith <| fun o ->

            o << Object "achiko" << oTree << at (ms 3000.) << Pith <| fun o ->
                o << Number "age" <<  at (ms 3000.) << R.update <| function
                    | Some v -> v + 1.
                    | None -> 0.
                ()
            ()


        |> scan
            (R.apply)
            (Some Fable.Core.JsInterop.createEmpty<obj>)
        |> tap console.log

    drain rez |> ignore

module Dom =
    open PNode

    let createElm tag =
        PValue.Of
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
        PValue.Of
            <| fun () -> document.createTextNode ""
            <| fun (n: Node) -> n.nodeName = "#text"

    let intS = S.periodic (ms 10.) |> S.scan (fun c _ -> c + 1) 0 |> S.skip 1 |> S.multicast

    let statTree t p = t << tree << S.now << Pith <| p
    let div p = statTree Div p
    let btn p = statTree Button p
    let span p = statTree Span p
    let h3 p = statTree H3 p

    let text s = Text << S.at (ms 0.) << Patch.once <| fun text -> text.textContent <- s

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
                o << Text << S.map (fun i -> Patch.once (fun text -> text.textContent <- string i)) <| intS

    let rez =
        tree << S.now << Pith <| fun o ->
            o (counter 3)
        |> S.sample S.animationFrame
        |> S.scan Patch.apply (document.getElementById "root-node")

    S.drain rez |> ignore

module Test =
    open Patch
    let a = S.now 1

    tree << S.now << Pith <| fun o ->
        o << S.now << each <| fun (_: unit) ->
            console.log "start patching..."

        o << tree << S.now << Pith <| fun o ->
            S.periodic (ms 1000.)
            |> S.konst 1
            |> S.scan (+) 0
            |> S.map (fun i -> once <| fun (_: unit) ->
                console.log ("p", i))
            |> o

            o << S.now << once <| fun (_) ->
                console.log "___"

        o << S.now << each <| fun (_) ->
            console.log "...end patching"

    |> S.scan apply ()
    |> S.drain
    |> ignore
