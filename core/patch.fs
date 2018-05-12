module Sakhe.Patch
open Fable.Import.Browser

type AbsurdProve<'A when 'A :> Node> = (unit -> 'A) * (Node -> 'A option)

type Patch<'a> =
    | Created of 'a
    | Inserted of 'a
    | Proved of 'a
    | Found of 'a * Node
    | Moved of 'a * Node

let private (|IndexOutOfBounds|ProvedNode|FoundNode|OtherNode|) (index: int, prove: Node -> 'a option, node: Node) =
    let childNodes = node.childNodes
    let length = int childNodes.length
    if index >= length then
        IndexOutOfBounds
    else
        let childAtIndex = childNodes.[index]
        match prove childAtIndex with
        | Some childAtIndex -> ProvedNode childAtIndex
        | None ->
            let rec findNode index =
                if index < length then
                    match prove childNodes.[index] with
                    | Some child -> Some child
                    | None       -> findNode (index + 1)
                else None
            match findNode index with
            | Some foundNode -> FoundNode (foundNode, childAtIndex)
            | None           -> OtherNode childAtIndex

let mkPatcher (index: int) ((absurd, prove): AbsurdProve<_>) patch =
    fun (node: #Node) ->
        match index, prove, node with
        | IndexOutOfBounds ->
            let child = absurd ()
            patch child
            node.insertBefore (child, unbox None) |> ignore
            console.log ("IndexOutOfBounds", child)
        | ProvedNode childAtIndex ->
            patch childAtIndex |> ignore
            console.log ("ProvedNode", childAtIndex)
        | FoundNode (foundNode, childAtIndex) ->
            patch foundNode
            node.insertBefore (foundNode, childAtIndex) |> ignore
            console.log ("FoundNode", foundNode)
        | OtherNode childAtIndex ->
            let child = absurd ()
            patch child
            node.insertBefore (child, childAtIndex) |> ignore
            console.log ("OtherNodeAtPosition", child)
