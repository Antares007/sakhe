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
        node.appendChild child |> ignore
    | SameNodeAtPosition childAtIndex ->
        patch childAtIndex |> ignore
    | SameNodeAtDifferentPosition (foundNode, childAtIndex) ->
        patch foundNode
        node.insertBefore (foundNode, childAtIndex) |> ignore
    | OtherNodeAtPosition childAtIndex ->
        let child = create ()
        patch child
        node.insertBefore (child, childAtIndex) |> ignore


[<Emit "$1 instanceof $0 ? $1 : null">] 
let inline private instanceOf (_: 'a when 'a : (member prototype: 't)) _: 't option = jsNative

type HTMLElement with
    [<Emit "if ($1) {$0.dataset['key'] = $1}">]
    member __.setKey(_: string option): unit = jsNative
    [<Emit "$0.dataset['key']">]
    member __.getKey(): string option = jsNative

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (o: M.Ray<'a * int -> unit>): unit =
        let ray (lang, key) =
            let inline setKey (n: #HTMLElement) =
                n.setKey key
                n
            let inline checkKey (no: _ option) =
                let check (n:#HTMLElement) = if n.getKey() = key then Some n else None
                no |> Core.Option.bind check
            let inline mape (f: unit -> #HTMLElement) t =
                (f >> setKey, instanceOf t >> checkKey)
                |> mkPatcher
                |> most.map
            let inline mapc f t =
                (f, instanceOf t)
                |> mkPatcher
                |> most.map
            match lang with
            | A r       -> r |> mape document.createElement_a   HTMLAnchorElement  |> o
            | H1 r      -> r |> mape document.createElement_h1  HTMLHeadingElement |> o
            | Div r     -> r |> mape document.createElement_div HTMLDivElement     |> o
            | Text r    -> r |> mapc (fun () -> document.createTextNode "") Fable.Import.Browser.Text   |> o
            | Comment r -> r |> mapc (fun () -> document.createComment "") Fable.Import.Browser.Comment |> o
            | Patch r   -> r |> most.map (fun patch (n, _) -> patch n)          |> o 
            | _ -> ()
        pith ray
    M.tree (most.combineArray (fun xs n -> xs |> Array.iteri (fun i p -> p(n, i)))) (most.map ring pith)
    
let t f = tree (most.now f)

let rez: R<HTMLElement> = (fun o ->
    (H1 (most.now (fun x -> x.innerText <- "Hello World!1";())), Some "as") |> o
    (Div ((fun o ->
        (H1 (most.now (fun x -> x.innerText <- "Hello World!2";())), Some "as") |> o
        (Div (most.now (fun x -> x.innerText <- "Hello World!3";())), Some "as") |> o) |> t), Some "as") |> o) |> t 

let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode

most.runEffects patches (Scheduler.require.newDefaultScheduler ()) |> ignore