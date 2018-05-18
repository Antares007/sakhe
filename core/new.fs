module Sakhe.Dom
open Fable.Import.Browser
open Most
open Fable.Core

type T<'a, 'b> =
    | Absurd of (unit -> 'a)
    | Prove of ('a -> 'b option)

type ILang<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : ((unit -> 'b) * (Node -> 'b option)) * IStream<ILang<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : ((unit -> 'b) * (Node -> 'b option)) * IStream<'b -> unit> -> unit
    abstract Patch: IStream<'a -> unit> -> unit

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
let inline private once (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative

[<Emit("[...$0]")>]
let private spreadToArray (_: NodeList): Node [] = Exceptions.jsNative

let inline private combineArray (f: 'a [] -> 'b) (s: 'a IStream []): 'b IStream =
    s
    |> Seq.fold
        (fun alS aS -> (M.combine (fun aList a -> Array.append aList [|a|]) alS aS))
        (M.now [||])
    |> M.map f
let rec tree<'a when 'a :> Element> (pith: IStream<ILang<'a> -> unit>): IStream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit): (IStream<'a -> unit> -> unit) -> unit =
        fun o ->
            let mutable c = 0
            pith { new ILang<'a> with
                member __.Node ((absurd, prove): (unit -> 'b) * (Node -> 'b option) when 'b :> Node, pith) =
                    let index = c
                    c <- c + 1
                    o << M.map (fun childNodePatch -> (fun (parentElement: 'a) ->
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
                    )) <| tree pith
                member __.Leaf ((absurd, prove), s) =
                    let index = c
                    c <- c + 1
                    o << M.map (fun childNodePatch -> (fun (parentElement: 'a) ->
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
                    )) <| s

                member __.Patch (s) =
                    s |> M.map id |>  o }

            o << M.now <| fun element ->
                let childNodes = element.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    element.removeChild childNodes.[i] |> ignore
    let s =
        M.tree
            (fun rays ->
                rays
                |> List.map (fun s -> M.map once s)
                |> Array.ofList
                |> Array.rev
                |> combineArray (fun ps (e: 'a) ->
                    ps |> Array.iter (fun p -> p e)
                )
            )
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

let rec tree2<'a when 'a :> Element> (pith: IStream<ILang<'a> -> unit>): IStream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit) (o:IStream<'a -> unit> -> unit): unit =
        pith { new ILang<'a>
            with
            member __.Node ((absurd, prove): (unit -> 'b) * (Node -> 'b option) when 'b :> Node, pith) =
                o << M.map (fun childNodePatch -> (fun (parentElement: 'a) ->
                    failwith "ni"
                )) <| tree pith

            member __.Leaf ((absurd, prove), s) =
                o << M.map (fun childNodePatch -> (fun (parentElement: 'a) ->
                    failwith "ni"
                )) <| s

            member __.Patch (s) =
                o << M.map (fun childNodePatch -> (fun (parentElement: 'a) ->
                    failwith "ni"
                )) <| s }

        o << M.now <| fun element ->
            failwith "ni"

    let bark = M.tree <| fun rays ->
        failwith "ni"

    bark (M.map ring pith)
