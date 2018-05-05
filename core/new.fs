module Sakhe.Dom
open Fable.Import.Browser
open Most
open M

type R<'a> = Stream<'a -> unit>

type Lang<'a when 'a :> Element> =
    | A of R<HTMLAnchorElement>
    | Div of R<HTMLDivElement>
    | H1 of R<HTMLHeadElement>
    | H2 of R<HTMLHeadElement>
    | Text of R<Text>
    | Comment of R<Comment>
    | Patch of R<'a>

type Key = string

type Ray<'a when 'a :> Element> = Lang<'a> * Key option -> unit

type Pith<'a when 'a :> Element> = Ray<'a> -> unit

let inline private (|   IndexOutOfBounds                |
                        SameNodeAtPosition              |
                        SameNodeAtDifferentPosition     |
                        OtherNodeAtPosition             |) (i, eq, node: Node) =
    let childNodes = node.childNodes
    let length = int childNodes.length

    if i >= length then
        IndexOutOfBounds
    else
        let childAtIndex = childNodes.[i]
        if eq childAtIndex then
            SameNodeAtPosition childAtIndex
        else
            let rec findNode index =
                if index < length then
                    let child = node.childNodes.[index]
                    if eq child then Some child else findNode (index + 1)
                else
                    None
            match findNode i with
            | Some foundNode    -> SameNodeAtDifferentPosition (foundNode, childAtIndex)
            | None              -> OtherNodeAtPosition childAtIndex

let patch create eq patch (node: Node, index: int) =
    match index, eq, node with
    | IndexOutOfBounds ->
        node.insertBefore (patch (create ())) |> ignore
    | SameNodeAtPosition childAtIndex ->
        patch (childAtIndex) |> ignore
    | SameNodeAtDifferentPosition (foundNode, childAtIndex) ->
        node.insertBefore (foundNode, childAtIndex) |> ignore
    | OtherNodeAtPosition childAtIndex ->
        node.insertBefore (patch (create ()), childAtIndex) |> ignore
    
let private cmb xs n = xs |> Array.iteri (fun i p -> p (n, i))

let private create (f: (unit -> #Node), key: string Option) (): #Node =
    let e = f ()
    match key with
    | Some _ -> e
    | None -> e

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (mRay: M.Ray<'a * int -> unit>): unit =
        let patch (cf: unit -> #Node, key: string Option, r: R<#Node>) =
            let z = create (cf, key) ()
            // let b = z ()
            ()

        let ray (lang, key) =
            match lang with
            | A r -> patch (document.createElement_a, key, r)
            | Div r -> mRay (most.map (fun r (n, i) -> ()) r)
            | Text r -> patch ((fun () -> document.createTextNode ""), key, r)
            | Patch r -> mRay (most.map (fun r (n, i) -> ()) r)
            | _ -> ()
        pith ray
    M.tree (most.combineArray cmb) (pith |> most.map ring)

let t f = tree (most.now f)

let rez: R<HTMLElement> = t (fun o -> 
    o (Div (most.now (fun x -> ())), Some "as")
    o (Patch (t (fun o -> 
                    o (Div (most.now (fun x -> ())), Some "as")
                    o (Patch (most.now (fun x -> ())), Some "as"))), Some "as"))