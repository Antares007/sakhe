module Sakhe.Show
open Most
open Fable.Import.Browser
open Fable.Core.JsInterop

let scheduler = Most.Scheduler.newDefaultScheduler ()
let drain s = M.runEffects s scheduler |> ignore

let now = M.now
let constant = M.constant
let at = M.at

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
    let rez =
        objectTree << at 0. <| fun o ->
            o << Number "a" << now <| (fun _ -> 1.)
            o << Object "b" << now <| fun _ -> createObj [ "k" ==> 42]
            o << Object "b" << objectTree << now <| fun o ->
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

            o << Array "array" << arrayTree << at 3000. <| fun a ->
                a << Number 0 << now <| function
                    | Some k -> k + 1.
                    | None -> 42.
                ()
            ()
            o << Array "array" << arrayTree << at 3000. <| fun a ->
                a << Number 0 << now <| function
                    | Some k -> k + 1.
                    | None -> 0.
                ()
            ()

        |> M.scan
            (fun s r -> r (Some s))
            (Fable.Core.JsInterop.createEmpty<obj>)
        |> M.tap console.log
    drain rez

module Dom =
    open PNode

    let elementAP (tag: string): AP<Node> =
        ((fun () -> upcast (document.createElement tag)), (fun n -> n.nodeName = tag))

    let Div pith = PNode (elementAP "DIV",  pith)
    let A pith =  PNode (elementAP "A", pith)
    let Button pith =  PNode (elementAP "BUTTON", pith)
    let Span pith =  PNode (elementAP "SPAN", pith)
    let H1 pith =  PNode (elementAP "H1", pith)
    let H2 pith =  PNode (elementAP "H2", pith)
    let H3 pith =  PNode (elementAP "H3", pith)

    let Text p =
        PNode (((fun () -> upcast (document.createTextNode "")), (fun n -> n.nodeName = "#text")), p)
    // let (<<|) a b = a (M.now b)

    let intS = M.periodic 10. |> M.scan (fun c _ -> c + 1) 0 |> M.skip 1 |> M.multicast

    let rec counter d =
        Div << PNode.tree << at 0. <| fun o ->
            o << Button << PNode.tree << at 0. <| fun o ->
                o << Span << PNode.tree << at 0. <| fun o ->
                    o << Text << at 0. <| fun text -> text.textContent <- "+"
                if d > 0 then o <| counter (d - 1)
            o << Button << PNode.tree << at 0. <| fun o ->
                o << Span << PNode.tree << at 0. <| fun o ->
                    o << Text << at 0. <| fun text -> text.textContent <- "-"
                if d > 0 then o <| counter (d - 1)
            o << H3 << PNode.tree << at 0. <| fun o ->
                o << Text << M.map (fun i -> fun text -> text.textContent <- string i) <| intS

    let rez =
        PNode.tree << M.now <| fun o -> o (counter 3)
        |> M.scan
            (fun n p -> p(n); n)
            (document.getElementById "root-node")
    drain rez
