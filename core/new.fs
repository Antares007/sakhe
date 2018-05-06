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

// let inline private (|   IndexOutOfBounds                |
//                         SameNodeAtPosition              |
//                         SameNodeAtDifferentPosition     |
//                         OtherNodeAtPosition             |) (i: int, eq: 'a -> bool, node: 'b when 'a :> Node and 'b :> Node) =
//     let childNodes = node.childNodes
//     let length = int childNodes.length
//     if i >= length then
//         IndexOutOfBounds
//     else
//         let childAtIndex = childNodes.[i]
//         if eq childAtIndex then
//             SameNodeAtPosition childAtIndex
//         else
//             let rec findNode index =
//                 if index < length then
//                     let child = node.childNodes.[index]
//                     if eq child then Some child else findNode (index + 1)
//                 else
//                     None
//             match findNode i with
//             | Some foundNode    -> SameNodeAtDifferentPosition (foundNode, childAtIndex)
//             | None              -> OtherNodeAtPosition childAtIndex

// let inline patch (create) eq (patch: #Node -> unit) (node: Node, index: int) =
//     match index, eq, node with
//     | IndexOutOfBounds ->
//         let child = create ()
//         patch child
//         node.insertBefore child |> ignore
//     | SameNodeAtPosition childAtIndex ->
//         patch (childAtIndex) |> ignore
//     | SameNodeAtDifferentPosition (foundNode, childAtIndex) ->
//         patch foundNode
//         node.insertBefore (foundNode, childAtIndex) |> ignore
//     | OtherNodeAtPosition childAtIndex ->
//         let child = create ()
//         patch child
//         node.insertBefore (child, childAtIndex) |> ignore

let private cmb xs n = xs |> Array.iteri (fun i p -> p (n, i))

let private create (f: (unit -> 'a), key: string Option when 'a :> Node) () =
    let e = f ()
    match key with
    | Some _ -> e
    | None -> e

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (mRay: M.Ray<'a * int -> unit>): unit =
        let ray (lang, key) =
            match lang with
            | A r -> mRay (r |> most.map (fun patch (node, i) -> 
                let create = document.createElement_a
                let eq (n: HTMLAnchorElement) = true
                let childNodes = node.childNodes
                let length = int childNodes.length

                if i >= length then
                    () // IndexOutOfBounds
                else
                    let childAtIndex = childNodes.[i] :?> HTMLAnchorElement
                    if eq childAtIndex then
                        () // SameNodeAtPosition childAtIndex
                    else
                        let rec findNode index =
                            if index < length then
                                let child = node.childNodes.[index] :?> HTMLAnchorElement
                                if eq child then Some child else findNode (index + 1)
                            else
                                None
                        match findNode i with
                        | Some foundNode    -> () // SameNodeAtDifferentPosition (foundNode, childAtIndex)
                        | None              -> () // OtherNodeAtPosition childAtIndex
                ()))
            // | Text r -> patch ((fun () -> document.createTextNode ""), key, r)
            // | Patch r -> mRay (most.map (fun r (n, i) -> ()) r)
            | _ -> ()
        pith ray
    M.tree (most.combineArray cmb) (pith |> most.map ring)

let t f = tree (most.now f)

let rez: R<HTMLElement> = t (fun o ->
    o (Div (most.now (fun x -> ())), Some "as")
    o (Patch (t (fun o ->
                    o (Div (most.now (fun x -> ())), Some "as")
                    o (Patch (most.now (fun x -> ())), Some "as"))), Some "as"))