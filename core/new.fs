module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Fable.Core

type Lang<'A when 'A :> Element> =
    | A of string option * Stream<HTMLAnchorElement -> unit>
    | Div of string option * Stream<HTMLDivElement -> unit>
    | H1 of string option * Stream<HTMLHeadingElement -> unit>
    | H2 of string option * Stream<HTMLHeadingElement -> unit>
    | H3 of string option * Stream<HTMLHeadingElement -> unit>
    | Custom of string * string option * Stream<HTMLElement -> unit>
    | Text of Stream<Text -> unit>
    | Comment of Stream<Comment -> unit>
    | Patch of Stream<'A -> unit>

module private Impl =
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

    let mkPatcher (create, eq) patch (node: #Node, index: int) =
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
    let inline trySetKey (_: #Element) (_: string option): unit = jsNative

    [<Emit "$0.dataset ? $0.dataset['key'] : null">]
    let inline tryGetKey (_: #Element): string option = jsNative

    let inline mkTypeChecker (create: unit -> 't) (nodeName: string) : (unit -> 't) * (Node -> 't option) =
        (create, (fun n -> if n.nodeName = nodeName then Some (n :?> 't) else None))

    let inline setKey key (n: #HTMLElement) =
        trySetKey n key
        n

    let inline checkKey key (no: #HTMLElement option) =
        no |> Core.Option.bind (fun n -> if (tryGetKey n) = key then Some n else None)

    let mape (f: unit -> #HTMLElement) nodeName key =
        mkTypeChecker f nodeName
        |> fun (create, eq) -> (create >> (setKey key), eq >> (checkKey key))
        |> mkPatcher
        |> most.map

    let mapc f nodeName =
        mkTypeChecker f nodeName
        |> mkPatcher
        |> most.map
open Impl

open A

let tree (pith: Stream<Pith<Lang<'A>>> when 'A :> Element): Stream<'A -> unit> =
    let ring (pith: Pith<Lang<'A>>): Pith<Stream<'A * int -> unit>> =
        fun o ->
            let ray (lang) =
                match lang with
                | A (key, r)            -> r |> mape document.createElement_a               "A"           key |> o
                | H1 (key, r)           -> r |> mape document.createElement_h1              "H1"          key |> o
                | Div (key, r)          -> r |> mape document.createElement_div             "DIV"         key |> o
                | Custom (t, key, r)    -> r |> mape (fun () -> document.createElement t)   (t.ToUpper()) key |> o
                | Text r                -> r |> mapc (fun () -> document.createTextNode "") "#text"           |> o
                | Comment r             -> r |> mapc (fun () -> document.createComment "")  "#comment"        |> o
                | Patch r               -> r |> most.map (fun patch (n, _) -> patch n)                        |> o
                | _                     -> ()
            pith ray
            o (most.now (fun (n, index) ->
                let childNodes = n.childNodes
                let length = int childNodes.length
                for i = index to length - 1 do
                    n.removeChild childNodes.[i]
                    |> ignore))
    M.tree (most.combineArray (fun xs -> fun (n: 'A) -> xs |> Array.iteri (fun i p -> p(n, i)))) (most.map ring pith)
