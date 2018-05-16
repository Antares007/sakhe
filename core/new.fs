module Sakhe.Dom
open Fable.Import.Browser
open Most
open A
open Fable.Core
open Fable.Import.Node.Stream

type T<'a, 'b> =
    | Absurd of (unit -> 'a)
    | Prove of ('a -> 'b option)

type ILang<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : ((unit -> 'b) * (Node -> 'b option)) * Stream<ILang<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : ((unit -> 'b) * (Node -> 'b option)) * Stream<'b -> unit> -> unit
    abstract Patch: Stream<'a -> unit> -> unit

let inline private matchChildren
    (fIndexOutOfBounds, fProvedNode, fFoundNode, fOtherNode)
    (index: int, at: int -> 'b option, prove: 'b -> 'a option): unit =
    match at index with
    | None -> fIndexOutOfBounds ()
    | Some childAtIndex ->
        match prove childAtIndex with
        | Some a -> fProvedNode a
        | None ->
            let rec findNode index =
                match at index with
                | None -> None
                | Some b ->
                    match prove b with
                    | Some a -> Some a
                    | None -> findNode (index + 1)
            match findNode (index + 1) with
            | Some a -> fFoundNode (a, childAtIndex)
            | None -> fOtherNode childAtIndex

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

let inline private combineArray (f: 'a [] -> 'b) (s: 'a Stream []): 'b Stream =
    s
    |> Seq.fold
        (fun alS aS -> (M.combine (fun aList a -> Array.append aList [|a|]) alS aS))
        (M.now [||])
    |> M.map f
let rec tree<'a when 'a :> Element> (pith: Stream<ILang<'a> -> unit>): Stream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit): Pith<Stream<'a -> unit>> =
        fun o ->
            let mutable c = 0
            pith { new ILang<'a> with
                member __.Node ((absurd, prove): (unit -> 'b) * (Node -> 'b option) when 'b :> Node, pith) =
                    let index = c
                    c <- c + 1
                    tree pith |> M.map (fun childNodePatch  -> once (fun (parentElement: 'a) ->
                            matchChildren
                                (
                                    (fun () ->
                                        let child = absurd ()
                                        childNodePatch child
                                        parentElement.insertBefore (child, unbox None) |> ignore),
                                    (childNodePatch),
                                    (fun (foundNode, childAtIndex) ->
                                        childNodePatch foundNode
                                        parentElement.insertBefore (foundNode, childAtIndex) |> ignore),
                                    (fun childAtIndex ->
                                        let child = absurd ()
                                        childNodePatch child
                                        parentElement.insertBefore (child, childAtIndex) |> ignore)
                                )
                                (index, (fun i -> unbox parentElement.childNodes.[i]), prove)
                    )) |> o
                member __.Leaf ((absurd, prove), s) =
                    let index = c
                    c <- c + 1
                    s |> M.map (fun childNodePatch -> once (fun (parentElement: 'a) ->
                            matchChildren
                                (
                                    (fun () ->
                                        let child = absurd ()
                                        childNodePatch child
                                        parentElement.insertBefore (child, unbox None) |> ignore),
                                    (childNodePatch),
                                    (fun (foundNode, childAtIndex) ->
                                        childNodePatch foundNode
                                        parentElement.insertBefore (foundNode, childAtIndex) |> ignore),
                                    (fun childAtIndex ->
                                        let child = absurd ()
                                        childNodePatch child
                                        parentElement.insertBefore (child, childAtIndex) |> ignore)
                                )
                                (index, (fun i -> unbox parentElement.childNodes.[i]), prove)
                    )) |> o

                member __.Patch (s) =
                    s |> M.map (once (fun patch n -> patch n)) |> o }
            o (M.now (once (fun element ->
                let childNodes = element.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    element.removeChild childNodes.[i]
                    |> ignore)))
    let s =
        M.tree
            (fun xs -> xs |> Array.ofList |> Array.rev |> combineArray (fun ps (e: 'a) -> ps |> Array.iter (fun p -> p e)))
            (M.map ring pith)
    M.newStream (fun sink scheduler ->
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
            s
            |> M.map (fun patch (element: 'a) ->
                f element
                patch element
            )
        let dispble = M.run sink scheduler s
        Disposable.disposeWith
            (once (fun () ->
                let d1 () = dispble.dispose ()
                d1 ()
                let dispose = !restore
                dispose ()
            ))
            ()
    )
