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
        console.log "IndexOutOfBounds"
        let child = create ()
        patch child
        node.appendChild child |> ignore
    | SameNodeAtPosition childAtIndex ->
        console.log "SameNodeAtPosition"
        patch childAtIndex |> ignore
    | SameNodeAtDifferentPosition (foundNode, childAtIndex) ->
        console.log "SameNodeAtDifferentPosition"
        patch foundNode
        node.insertBefore (foundNode, childAtIndex) |> ignore
    | OtherNodeAtPosition childAtIndex ->
        console.log "OtherNodeAtPosition"
        let child = create ()
        patch child
        node.insertBefore (child, childAtIndex) |> ignore


[<Emit "((n, t) => n instanceof t ? n : null)($1, $0)">] 
let inline private instanceOf (_: 'a when 'a : (member prototype: 't)) _: 't option = jsNative

type HTMLElement with
    [<Emit "if ($1) {$0.dataset['key'] = $1}">]
    member __.setKey(_: string option): unit = jsNative
    [<Emit "$0.dataset['key']">]
    member __.getKey(): string option = jsNative

let inline mkChecker (create: unit -> 't) (nodeName: string) : (unit -> 't) * (Node -> 't option) =
    (create, (fun n -> if n.nodeName = nodeName then Some (n :?> 't) else None))

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (o: M.Ray<'a * int -> unit>): unit =
        let ray (lang, key) =
            let inline setKey (n: #HTMLElement) =
                n.setKey key
                n
            let inline checkKey (no: _ option) =
                let check (n: #HTMLElement) = if n.getKey() = key then Some n else None
                no |> Core.Option.bind check
            let inline mape (f: unit -> #HTMLElement) nodeName =
                mkChecker f nodeName
                |> fun (create, eq) -> (create >> setKey, eq >> checkKey)
                |> mkPatcher
                |> most.map
            let inline mapc f nodeName =
                mkChecker f nodeName
                |> mkPatcher
                |> most.map
            match lang with
            | A r       -> r |> mape document.createElement_a               "A"        |> o
            | H1 r      -> r |> mape document.createElement_h1              "H1"       |> o
            | Div r     -> r |> mape document.createElement_div             "DIV"      |> o
            | Text r    -> r |> mapc (fun () -> document.createTextNode "") "#text"    |> o
            | Comment r -> r |> mapc (fun () -> document.createComment "")  "#comment" |> o
            | Patch r   -> r |> most.map (fun patch (n, _) -> patch n)                 |> o
            | _         -> ()
        pith ray
        o (most.now (fun (n, index) -> 
            let childNodes = n.childNodes
            let length = int childNodes.length
            for i = index to length - 1 do
                n.removeChild childNodes.[i]
                |> ignore))
    M.tree (most.combineArray (fun xs n -> xs |> Array.iteri (fun i p -> p(n, i)))) (most.map ring pith)
    
let t f = tree (most.periodic 1000 |> most.constant f)

[<Emit("((f)=>{var b;return(a)=>{if(f){b=f(a);f=null;}return b;};})($0)")>]
let once (_: 'a -> 'b): 'a -> 'b = jsNative

let rez: R<HTMLElement> = t (fun o ->
    let once f = most.now (once f)
    (H1 (once (fun x -> x.innerText <- "Hello World!1";())), Some "as1") |> o
    (Div (t (fun o ->
        (H1 (once (fun x -> x.innerText <- "Hello World!2";())), Some "as2") |> o
        (Div (once (fun x -> x.innerText <- "Hello World!3";())), Some "as3") |> o
        (Text (once (fun x -> x.textContent <- "Hello World!4";())), Some "as4") |> o
        (Comment (once (fun x -> x.textContent <- "Hello World!5";())), Some "as5") |> o)), Some "as6") |> o) 

let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Scheduler.require.newDefaultScheduler ()) |> ignore
open Fable.Core.JsInterop

type Props =
| A of int
| B of string
| C
let m:int = !! most

let mk = keyValueList CaseRules.None
let lst = [
    A 1
    B "2"
    C
]
let obj = mk lst
obj |> console.log