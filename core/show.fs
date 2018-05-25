module Sakhe.Show
open Fable.Import.Browser
open Fable.Core.JsInterop
open Fable.Core

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
        oTree << at (ms 0.) << Pith.Of <| fun o ->

            o << Object "achiko" << oTree << at (ms 3000.) << Pith.Of <| fun o ->
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

    let pnode a p s = RNode (a, p, s)
    let createElm tag =
        pnode
        << Absurd <| fun () ->
            let elm = document.createElement tag
            elm :> Node
        << Prove <| fun (n: Node) ->
            if n.nodeName = tag then
                Some (unbox n)
            else
                None

    let Div = createElm "DIV"
    let A =  createElm  "A"
    let Button = createElm "BUTTON"
    let Span = createElm "SPAN"
    let H1 =  createElm  "H1"
    let H2 =  createElm  "H2"
    let H3 =  createElm  "H3"

    let Text =
        pnode
        <| Absurd (fun () -> (document.createTextNode "") :> Node)
        <| Prove (fun (n: Node) -> if n.nodeName = "#text" then Some (unbox n) else None)
    // let (<<|) a b = a (M.now b)
    open S
    let intS = periodic (ms 10.) |> S.scan (fun c _ -> c + 1) 0 |> skip 1 |> multicast

    let rec counter d =
        Div << tree << at (ms 0.) << Pith.Of <| fun o ->
            o << Button << tree << at (ms 0.) << Pith.Of <| fun o ->
                o << Span << tree << at (ms 0.) << Pith.Of <| fun o ->
                    o << Text << at (ms 0.) << Patch.once <| fun text -> text.textContent <- "+"
                if d > 0 then o <| counter (d - 1)
            o << Button << tree << at (ms 0.) << Pith.Of <| fun o ->
                o << Span << tree << at (ms 0.) << Pith.Of <| fun o ->
                    o << Text << at (ms 0.) << Patch.once <| fun text -> text.textContent <- "-"
                if d > 0 then o <| counter (d - 1)
            o << H3 << tree << at (ms 0.) << Pith.Of <| fun o ->
                o << Text << S.map (fun i -> Patch.once (fun text -> text.textContent <- string i)) <| intS

    let rez =
        tree << now << Pith.Of <| fun o ->
            o (counter 3)
        |> scan
            Patch.apply
            (document.getElementById "root-node"  :> Node)

    drain rez |> ignore

open Sakhe
module Test =
    open S
    open Sakhe.Patch
    let a = S.now 1

    tree << now << Pith.Of <| fun o ->
        o << now << each <| fun (_: unit) ->
            console.log "start patching..."

        o << tree << now << Pith.Of <| fun o ->
            periodic (ms 1000.)
            |> konst 1
            |> scan (+) 0
            |> S.map (fun i -> once <| fun (_: unit) ->
                console.log ("p", i))
            |> o

            o << now << once <| fun (_) ->
                console.log "___"

        o << now << each <| fun (_) ->
            console.log "...end patching"

    |> S.scan apply ()
    |> S.drain
    |> ignore
