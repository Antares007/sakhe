module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Fable.Core

type R<'a> = Stream<'a -> unit>

type Lang<'a when 'a :> Element> =
    | A of R<HTMLAnchorElement>
    | Div of R<HTMLDivElement>
    | H1 of R<HTMLHeadingElement>
    | H2 of R<HTMLHeadingElement>
    | H3 of R<HTMLHeadingElement>
    | Text of R<Text>
    | Comment of R<Comment>
    | Patch of R<'a>

type Key = string

type Ray<'a when 'a :> Element> = Lang<'a> * Key option -> unit

type Pith<'a when 'a :> Element> = Ray<'a> -> unit
let private (|IndexOutOfBounds           |
              SameNodeAtPosition         |
              SameNodeAtDifferentPosition|
              OtherNodeAtPosition        |) (index: int, eq: Node -> 'a option, node: Node) =
    let childNodes = node.childNodes
    let length = int childNodes.length
    if index >= length then
        IndexOutOfBounds
    else
        let childAtIndex = childNodes.[index]
        match eq childAtIndex with
        | Some childAtIndex -> SameNodeAtPosition childAtIndex
        | None ->
        
            let rec findNode index =
                if index < length then
                    match eq childNodes.[index] with
                    | Some child -> Some child
                    | None       -> findNode (index + 1)
                else None
            match findNode index with
            | Some foundNode -> SameNodeAtDifferentPosition (foundNode, childAtIndex)
            | None           -> OtherNodeAtPosition childAtIndex

let private mkPatcher (create, eq) patch (node: #Node, index: int) =
    match index, eq, node with
    | IndexOutOfBounds ->
        let child = create ()
        patch child
        node.insertBefore child |> ignore
    | SameNodeAtPosition childAtIndex ->
        patch (childAtIndex) |> ignore
    | SameNodeAtDifferentPosition (foundNode, childAtIndex) ->
        patch foundNode
        node.insertBefore (foundNode, childAtIndex) |> ignore
    | OtherNodeAtPosition childAtIndex ->
        let child = create ()
        patch child
        node.insertBefore (child, childAtIndex) |> ignore

let private cmb xs n = xs |> Array.iteri (fun i p -> p (n, i))

[<Emit "$0 instanceof $1 ? $0 : null">] 
let inline instanceOf(_, _: 'a when 'a : (abstract prototype: 't)) : 't option = jsNative

let private mkCheker (create: (unit -> 'a), key: string option): ((unit -> 'a) * (Node -> 'a option)) =
    let cr () = 
        let e = create ()
        e
    let eq (node: Node) =
        None
    (cr, eq)

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (o: M.Ray<'a * int -> unit>): unit =
        let ray (lang, key) =
            let map f = mkCheker (f, key) |> mkPatcher |> most.map
            let inline map2 f t = (f, (fun n -> instanceOf (n, t))) |> mkPatcher |> most.map
            match lang with
            | A r       -> r |> map2 document.createElement_a   HTMLAnchorElement   |> o
            | H1 r      -> r |> map2 document.createElement_h1  HTMLHeadingElement  |> o
            | Div r     -> r |> map2 document.createElement_div HTMLDivElement      |> o
            | Text r    -> r |> map (fun () -> document.createTextNode "")      |> o
            | Comment r -> r |> map (fun () -> document.createComment "")       |> o
            | Patch r   -> r |> most.map (fun patch (n, _) -> patch n)          |> o 
            | _ -> ()
        pith ray
    M.tree (most.combineArray cmb) (pith |> most.map ring)

let t f = tree (most.now f)

let rez: R<HTMLElement> = t (fun o ->
    o (Div (most.now (fun x -> ())), Some "as")
    o (Patch (t (fun o ->
                    o (Div (most.now (fun x -> ())), Some "as")
                    o (Patch (most.now (fun x -> ())), Some "as"))), Some "as"))