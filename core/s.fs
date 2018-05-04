namespace Sakhe

open Fable.Core
open System
open Fable.Core
open Fable.Core
open System.Reflection
open Fable
open System.Collections.Generic
open System.Collections.Generic
open System.Runtime.InteropServices
open Fable.Core

module S =
    open M
    open Fable.Import.Browser
    open Most

    type Tag = string
    type Key = string
    type R<'a> = 'a -> unit

    type DomLang =
        Div of (HTMLDivElement -> unit)
        
    type IRay<'a when 'a :> Element> =
        abstract Element: tagName: Tag * r: Stream<R<HTMLElement>> * ?key: Key -> unit
        abstract Text: r: Stream<R<Text>> -> unit
        abstract Comment: r: Stream<R<Comment>> -> unit
        abstract Put: r: Stream<R<'a>> -> unit

    type Pith<'a when 'a :> Element> = IRay<'a> -> unit

    type NodeList with
        [<Emit "$0.item($1)">]
        member __.GetItem(_: int): Node option = jsNative

    [<Emit "$0 instanceof $1 ? $0 : null">]
    let inline instanceOf(_, _: 'a when 'a : (abstract prototype: 't)) : 't option = jsNative
    let inline (|IsHTMLElement|_|) (str: obj) = instanceOf(str, HTMLElement) 
    let inline (|IsSVGElement|_|) (str: obj) = instanceOf(str, HTMLElement) 
    
    [<Emit "((ds) => ds ? ds['key'] : null)($0.dataset)">]
    let getKey(_: Node) : string option = jsNative
    let inline createElement (tag: Tag, key: Key option): HTMLElement =
        let n = document.createElement tag
        match key with
        | Some key ->
            n.dataset.["key"] <- key
            n
        | _ -> n
    
    let tree (mpith: Stream<Pith<'a>>): Stream<'a -> unit> =
        let ring (pith: Pith<'a>) (mray: Sakhe.M.Ray<R<'a>>) =
            let mutable currentIndex = 0
            pith { new IRay<'a> with
                member __.Element (tag, r, ?key) = 
                    let index = currentIndex
                    currentIndex <- currentIndex + 1

                    let chain (patchVNode) (node: Node) =
                        match node.childNodes.GetItem index with
                        | None ->
                            let n = createElement (tag, key)
                            patchVNode n
                            node.insertBefore n |> ignore
                        | Some node ->
                            let key = getKey node
                            console.log 1
                            ()
                            // if node.nodeName.ToLower() = tag &&  then

                    mray (most.map chain r)
                member __.Text r = ()
                member __.Comment r = ()
                member __.Put r = ()
                }
            ()
        let combine patches node = for p in patches do p node
        Sakhe.M.tree (most.combineArray combine) (mpith |> most.map ring)

    let rez = tree (most.now (fun o ->
        o.Element ("div", most.now (fun x -> console.log x; ()))
        o.Text (most.now (fun x -> console.log x; ())) 
        o.Comment (most.now (fun x -> console.log x; ()))
        o.Put (most.now (fun x -> console.log x; ()))
    )) 

    let patch n p = p(n); n
    let rootDiv = document.createElement_div()
    let rez2 = rez |> most.scan patch rootDiv
    let scheduler = Most.Scheduler.require.newDefaultScheduler ()
    let b = most.runEffects rez2 scheduler