module Sakhe.Patch
open Fable.Import.Browser

type T<'a, 'b> =
    | Absurd of (unit -> 'a)
    | Prove of ('a -> 'b option)

let private (|IndexOutOfBounds|ProvedNode|FoundNode|OtherNode|) (index: int, prove: Node -> 'a option, parentElement: Element) =
    let childNodes = parentElement.childNodes
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

let mkPatcher index (absurd, prove) childNodePatch  parentElement =
    match index, prove, parentElement with
    | IndexOutOfBounds ->
        let child = absurd ()
        childNodePatch child
        parentElement.insertBefore (child, unbox None) |> ignore
    | ProvedNode childAtIndex ->
        childNodePatch childAtIndex |> ignore
    | FoundNode (foundNode, childAtIndex) ->
        childNodePatch foundNode
        parentElement.insertBefore (foundNode, childAtIndex) |> ignore
    | OtherNode childAtIndex ->
        let child = absurd ()
        childNodePatch child
        parentElement.insertBefore (child, childAtIndex) |> ignore
