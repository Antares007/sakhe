module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open A
open Fable.Core

type T<'a, 'b> =
    | Absurd of (unit -> 'a)
    | Prove of ('a -> 'b option)

type ILang<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : ((unit -> 'b) * (Node -> 'b option)) * Stream<ILang<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : ((unit -> 'b) * (Node -> 'b option)) * Stream<'b -> unit> -> unit
    abstract Patch: Stream<'a -> unit> -> unit

let (|IndexOutOfBounds|ProvedNode|FoundNode|OtherNode|) (index: int, prove: Node -> 'a option, parentElement: Element) =
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

let private disposable = Most.Disposable.require

[<Emit("(function makeOnce (f) {
    var b
    return function onceAtoBtoAtoB (a) {
        if (f) {
            b = f.call(this, a)
            f = null
        }
        return b
    }
})($0)")>]
let private once (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative

[<Emit("[...$0]")>]
let private spreadToArray (_: NodeList): Node [] = Exceptions.jsNative

let rec tree<'a when 'a :> Element> (pith: Stream<ILang<'a> -> unit>): Stream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit): Pith<Stream<'a -> unit>> =
        fun o ->
            let mutable c = 0
            pith { new ILang<'a> with
                member __.Node ((absurd, prove): (unit -> 'b) * (Node -> 'b option) when 'b :> Node, pith) =
                    let index = c
                    c <- c + 1
                    tree pith |> most.map (fun childNodePatch  -> once (fun parentElement ->
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
                                parentElement.insertBefore (child, childAtIndex) |> ignore)) |> o
                member __.Leaf ((absurd, prove), s) =
                    let index = c
                    c <- c + 1
                    s |> most.map (fun childNodePatch  -> once (fun parentElement ->
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
                                parentElement.insertBefore (child, childAtIndex) |> ignore)) |> o
                member __.Patch (s) =
                    s |> most.map (once (fun patch n -> patch n)) |> o }
            o (most.now (once (fun element ->
                let childNodes = element.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    element.removeChild childNodes.[i]
                    |> ignore)))

    most.newStream (fun sink scheduler ->
        let restore = ref (fun () -> ())
        let f = once(fun (element: 'a) ->
            let oldNodes = spreadToArray(element.childNodes)
            restore := (fun () ->
                let ref = element.childNodes.[0]
                for i = 0 to oldNodes.Length - 1 do
                    element.insertBefore (oldNodes.[i], ref) |> ignore
                for i = oldNodes.Length to int element.childNodes.length - 1 do
                    element.removeChild element.childNodes.[i] |> ignore)
            )
        let s =
            M.tree
                (most.combineArray (fun ps (e: 'a) -> ps |> Array.iter (fun p -> p e)))
                (most.map ring pith)
            |> most.map (fun patch (element: 'a) ->
                f element
                patch element
            )
        let dispble = most.run sink scheduler s
        disposable.create (once (fun () ->
            let d1 () = dispble.dispose ()
            d1 ()
            let dispose = !restore
            dispose ()
        ))
    )
