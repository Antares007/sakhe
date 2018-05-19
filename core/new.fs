module Sakhe.Dom
open Fable.Import.Browser
open Most
open Fable.Core

type IElm<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : ((unit -> 'b) * (Node -> bool)) * IStream<IElm<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : ((unit -> 'b) * (Node -> bool)) * IStream<'b -> unit> -> unit
    abstract Patch: IStream<'a -> unit> -> unit

let rec private tryFind f (i: int) (nlist: NodeList) =
    if i >= unbox nlist.length then
        None
    else
        let n = nlist.[i]
        if f n then
            Some n
        else
            tryFind f (i + 1) nlist

let inline private matchChildren
    (
        notFound: unit -> unit,
        atIndex: Node -> unit,
        movedFrom: Node * Node -> unit
    )
    (prove: Node -> bool, index: int, elm: #Element) =
    let childNodes = elm.childNodes
    if index >= unbox childNodes.length then
        notFound ()
    else
        let childAtIndex = childNodes.[index]
        if prove childAtIndex then
            atIndex childAtIndex
        else
            match tryFind prove index childNodes with
            | Some moved -> movedFrom (moved, childAtIndex)
            | None -> notFound ()

let private chain (absurd, prove, index) patch (elm: #Element) =
    matchChildren
        (
            (fun () ->
                let b = absurd()
                patch b
                elm.insertBefore (b, unbox elm.childNodes.[index]) |> ignore
            ),
            unbox >> patch,
            (fun (moved, from) ->
                let b = unbox moved
                patch b
                elm.insertBefore (b, from) |> ignore
            )
        )
        (prove, index, elm)

let disposeWith (f: unit -> unit) (s: 'a IStream): 'a IStream =
    M.newStream <| fun sink scheduler ->
        let d = M.run sink scheduler s
        Disposable.disposeWith
            (fun _ ->
                d.dispose()
                f ())
            ()

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
let inline private spreadToArray (_: NodeList): Node [] = Exceptions.jsNative

let inline private makeRestore (elm: Element) =
    let childNodes = elm.childNodes
    let oldNodes = spreadToArray(childNodes)
    (fun () ->
        let ref = childNodes.[0]
        for i = 0 to oldNodes.Length - 1 do
            elm.insertBefore (oldNodes.[i], ref) |> ignore
        for i = oldNodes.Length to unbox childNodes.length - 1 do
            elm.removeChild childNodes.[i] |> ignore)

let rec tree<'a when 'a :> Element> (pith: IStream<IElm<'a> -> unit>): IStream<'a -> unit> =
    let ring (pith: IElm<'a> -> unit) (o: IStream<'a -> unit > -> unit): unit =
        let mutable counter = 0
        pith { new IElm<'a>
            with
            member __.Node ((absurd, prove), pith) =
                let index = counter;
                counter <- counter + 1
                o << M.map (chain (absurd, prove, index)) <| tree pith
            member __.Leaf ((absurd, prove), s) =
                let index = counter
                counter <- counter + 1
                o << M.map (chain (absurd, prove, index)) <| s
            member __.Patch (s) =
                o << M.map (fun patch elm -> patch elm) <| s }

    let deltaC (rays: IStream<'a -> unit> list): IStream<'a -> unit> =
        let restore = ref (fun () -> ())
        let makeRestore = once(makeRestore)
        List.fold (fun ls rs -> M.combine (fun l r -> r :: l) ls (M.map once rs)) (M.now []) rays
        |> M.map (fun patches elm ->
            restore := makeRestore elm
            List.iter (fun patch -> patch elm) patches
            for i = patches.Length to unbox elm.childNodes.length - 1 do
                elm.removeChild elm.childNodes.[i] |> ignore
        )
        |> disposeWith (fun () ->
            let d = !restore
            d())

    M.tree deltaC (M.map ring pith)
