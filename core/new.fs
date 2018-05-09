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
    | Custom of (string * R<HTMLElement>)
    | Text of R<Text>
    | Comment of R<Comment>
    | Patch of R<'a>

type Key = string

type Ray<'a when 'a :> Element> = Lang<'a> * Key option -> unit

type Pith<'a when 'a :> Element> = Ray<'a> -> unit

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
    let trySetKey (_: #Element) (_: string option): unit = jsNative

    [<Emit "$0.dataset ? $0.dataset['key'] : null">]
    let  tryGetKey (_: #Element): string option = jsNative

    let inline mkTypeChecker (create: unit -> 't) (nodeName: string) : (unit -> 't) * (Node -> 't option) =
        (create, (fun n -> if n.nodeName = nodeName then Some (n :?> 't) else None))

open Impl

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (o: M.Ray<'a * int -> unit>): unit =
        let ray (lang, key) =
            let setKey (n: #HTMLElement) =
                trySetKey n key
                n
            let checkKey (no: #HTMLElement option) =
                no |> Core.Option.bind (fun n -> if (tryGetKey n) = key then Some n else None)
            let mape (f: unit -> #HTMLElement) nodeName =
                mkTypeChecker f nodeName
                |> fun (create, eq) -> (create >> setKey, eq >> checkKey)
                |> mkPatcher
                |> most.map
            let mapc f nodeName =
                mkTypeChecker f nodeName
                |> mkPatcher
                |> most.map
            match lang with
            | A r           -> r |> mape document.createElement_a               "A"           |> o
            | H1 r          -> r |> mape document.createElement_h1              "H1"          |> o
            | Div r         -> r |> mape document.createElement_div             "DIV"         |> o
            | Custom (t, r) -> r |> mape (fun () -> document.createElement t)   (t.ToUpper()) |> o
            | Text r        -> r |> mapc (fun () -> document.createTextNode "") "#text"       |> o
            | Comment r     -> r |> mapc (fun () -> document.createComment "")  "#comment"    |> o
            | Patch r       -> r |> most.map (fun patch (n, _) -> patch n)                    |> o
            | _             -> ()
        pith ray
        o (most.now (fun (n, index) ->
            let childNodes = n.childNodes
            let length = int childNodes.length
            for i = index to length - 1 do
                n.removeChild childNodes.[i]
                |> ignore))
    M.tree (most.combineArray (fun xs n -> xs |> Array.iteri (fun i p -> p(n, i)))) (most.map ring pith)
