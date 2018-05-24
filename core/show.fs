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
        objectTree << (at << ms) 0. << pith <| fun o ->
            o << Number "a" << now <| (fun _ -> 1.)
            o << Object "b" << now <| fun _ -> createObj [ "k" ==> 42]
            o << Object "b" << objectTree << now << pith <| fun o ->
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

            o << Array "array" << arrayTree << at (ms 3000.) << pith <| fun a ->
                a << Number 0 << now <| function
                    | Some k -> k + 1.
                    | None -> 42.
                ()
            ()
            o << Array "array" << arrayTree << at (ms 3000.) << pith <| fun a ->
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

    let elementAP (tag: string): AP<Node> =
        ((fun () -> upcast (document.createElement tag)), (fun n -> n.nodeName = tag))

    let Div r = PNode (elementAP "DIV",  r)
    let A r =  PNode (elementAP "A", r)
    let Button r =  PNode (elementAP "BUTTON", r)
    let Span r =  PNode (elementAP "SPAN", r)
    let H1 r =  PNode (elementAP "H1", r)
    let H2 r =  PNode (elementAP "H2", r)
    let H3 r =  PNode (elementAP "H3", r)

    let Text p =
        PNode (((fun () -> upcast (document.createTextNode "")), (fun n -> n.nodeName = "#text")), p)
    // let (<<|) a b = a (M.now b)
    open A

    let intS = periodic (ms 10.) |> M.scan (fun c _ -> c + 1) 0 |> skip 1 |> multicast
    let rec counter d =
        Div << PNode.tree << at (ms 0.) << pith <| fun o ->
            o << Button << PNode.tree << at (ms 0.) << pith <| fun o ->
                o << Span << PNode.tree << at (ms 0.) << pith <| fun o ->
                    o << Text << at (ms 0.) <| fun text -> text.textContent <- "+"
                if d > 0 then o <| counter (d - 1)
            o << Button << PNode.tree << at (ms 0.) << pith <| fun o ->
                o << Span << PNode.tree << at (ms 0.) << pith <| fun o ->
                    o << Text << at (ms 0.) <| fun text -> text.textContent <- "-"
                if d > 0 then o <| counter (d - 1)
            o << H3 << PNode.tree << at (ms 0.) << pith <| fun o ->
                o << Text << M.map (fun i -> fun text -> text.textContent <- string i) <| intS

    let rez =
        PNode.tree << now << pith <| fun o -> o (counter 3)
        |> scan
            (fun n p -> p(n); n)
            (document.getElementById "root-node")
    drain rez |> ignore
