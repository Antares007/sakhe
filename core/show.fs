module Sakhe.Show
open M
open Fable.Import.Browser
open Fable.Core.JsInterop

module State =
    open Sakhe.State
    open Fable.Core

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
    open A
    let rez =
        objectTree << (at << ms) 0. << Pith <| fun o ->
            o << Number "a" << now <| (fun _ -> 1.)
            o << Object "b" << now <| fun _ -> createObj [ "k" ==> 42]
            o << Object "b" << objectTree << now << Pith <| fun o ->
                o << Number "k" << now <| function
                    | Some k -> k + 1.
                    | None -> 0.
                ()
            ()
            o << Object "array" << now <| fun _ ->
                unbox [|
                    { name ="archil"; age = 42 }
                    { name ="archil"; age = 42 }
                    { name ="archil"; age = 42 }
                    { name ="archil"; age = 42 } |]

            o << Array "array" << arrayTree << at (ms 3000.) << Pith <| fun a ->
                a << Number 0 << now <| function
                    | Some k -> k + 1.
                    | None -> 42.
                ()
            ()
            o << Array "array" << arrayTree << at (ms 3000.) << Pith <| fun a ->
                a << Number 0 << now <| function
                    | Some k -> k + 1.
                    | None -> 0.
                ()
            ()

        |> scan
            (fun s r -> r (Some s))
            (Fable.Core.JsInterop.createEmpty<obj>)
        |> tap console.log
    drain rez |> ignore

module Dom =
    open PNode

    let ap a b = AP (a, b)
    let pnode ap s = PNode (ap, s)
    let elementAP tag = ap (fun () -> (document.createElement tag) :> Node) (fun n -> n.nodeName = tag)

    let createElm = pnode << elementAP
    let Div = createElm "DIV"
    let A =  createElm  "A"
    let Button = createElm "BUTTON"
    let Span = createElm "SPAN"
    let H1 =  createElm  "H1"
    let H2 =  createElm  "H2"
    let H3 =  createElm  "H3"

    let Text =
        pnode <| ap (fun () -> (document.createTextNode "") :> Node) (fun n -> n.nodeName = "#text")
    // let (<<|) a b = a (M.now b)
    open A

    let intS = periodic (ms 10.) |> M.scan (fun c _ -> c + 1) 0 |> skip 1 |> multicast
    let rec counter d =
        Div << PNode.tree << at (ms 0.) << Pith <| fun o ->
            o << Button << PNode.tree << at (ms 0.) << Pith <| fun o ->
                o << Span << PNode.tree << at (ms 0.) << Pith <| fun o ->
                    o << Text << at (ms 0.) <| fun text -> text.textContent <- "+"
                if d > 0 then o <| counter (d - 1)
            o << Button << PNode.tree << at (ms 0.) << Pith <| fun o ->
                o << Span << PNode.tree << at (ms 0.) << Pith <| fun o ->
                    o << Text << at (ms 0.) <| fun text -> text.textContent <- "-"
                if d > 0 then o <| counter (d - 1)
            o << H3 << PNode.tree << at (ms 0.) << Pith <| fun o ->
                o << Text << M.map (fun i -> fun text -> text.textContent <- string i) <| intS

    let rez =
        PNode.tree << now << Pith <| fun o -> o (counter 3)
        |> scan
            (fun n p -> p(n); n)
            (document.getElementById "root-node")
    drain rez |> ignore
