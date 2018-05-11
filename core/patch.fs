module Sakhe.Patch
open Fable.Import.Browser
open Fable.Core

let private most = Most.Core.require
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

[<Emit "if ($1 && $0.dataset) {$0.dataset['key'] = $1}">]
let inline private trySetKey (_: #Element) (_: string option): unit = jsNative

[<Emit "$0.dataset ? $0.dataset['key'] : null">]
let inline private tryGetKey (_: #Element): string option = jsNative

let inline private mkTypeChecker (create: unit -> 't) (nodeName: string): (unit -> 't) * (Node -> 't option) =
    (create, (fun n -> if n.nodeName = nodeName then Some (n :?> 't) else None))

let inline private setKey key (n: #HTMLElement) =
    trySetKey n key
    n

let inline private checkKey key (no: #HTMLElement option) =
    no |> Core.Option.bind (fun n -> if (tryGetKey n) = key then Some n else None)

let mape (f: unit -> #HTMLElement, nodeName, key, index) =
    mkTypeChecker f nodeName
    |> fun (create, eq) -> (create >> (setKey key), eq >> (checkKey key))
    |> mkPatcher index
    |> most.map

let mapc (f, nodeName, index) =
    mkTypeChecker f nodeName
    |> mkPatcher index
    |> most.map
