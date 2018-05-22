module Sakhe.P
open Fable.Core
open Fable.Import.Browser
open Sakhe
open Most

type P<'a> = 'a -> unit

type Pith<'a> = ('a -> unit) -> unit

type Dom =
    | Node of ((unit -> Element) * (Node -> bool)) * IStream<Element -> unit>
    | Leaf of ((unit -> CharacterData) * (Node -> bool)) * IStream<CharacterData -> unit>

[<AutoOpen>]
module private Impl =
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
        (prove: Node -> bool, index: int, elm: Element) =
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
    [<Emit("(function makeOnce (f) {
        var b
        return function once (a) {
            if (f) {
                b = f.call(this, a)
                f = null
            }
            return b
        }
    })($0)")>]
    let inline once (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative
    let chain (absurd, prove) index patch (elm: Element) =
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

let tree pith =
    let ring (pith: Pith<Dom>) (o: IStream<P<Element>> -> unit): unit =
        let mutable c = 0
        pith <| function
        | Node (ap, ps) ->
            let index = c
            c <- c + 1
            o (M.map (chain ap index) ps)
        | Leaf (ap, ps) ->
            let index = c
            c <- c + 1
            o (M.map (chain ap index) ps)

    let deltac (rs: IStream<P<Element>> list): IStream<P<Element>> =
        rs
            |> Seq.map (M.map once)
            |> Seq.fold (M.combine (fun p0 p e -> p e;  p0 e)) (M.now (ignore))

    M.tree deltac (M.map ring pith)

