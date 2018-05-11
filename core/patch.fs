module Sakhe.Patch
open Fable.Import.Browser

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

let mkPatcher (index: int) (create, eq) patch (node: #Node) =
    match index, eq, node with
    | IndexOutOfBounds ->
        let child = create ()
        patch child
        node.appendChild child |> ignore
        console.log ("IndexOutOfBounds", child)
    | SameNodeAtPosition childAtIndex ->
        patch childAtIndex |> ignore
        console.log ("SameNodeAtPosition", childAtIndex)
    | SameNodeAtDifferentPosition (foundNode, childAtIndex) ->
        patch foundNode
        node.insertBefore (foundNode, childAtIndex) |> ignore
        console.log ("SameNodeAtDifferentPosition", foundNode)
    | OtherNodeAtPosition childAtIndex ->
        let child = create ()
        patch child
        node.insertBefore (child, childAtIndex) |> ignore
        console.log ("OtherNodeAtPosition", child)
