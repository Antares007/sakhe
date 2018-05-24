module Sakhe.PNode
open Fable.Core
open Fable.Import.Browser
open Sakhe
open A

[<Fable.Core.Erase>]
type Patch<'a when 'a :> Node> = private Patch of ('a -> unit)
[<Fable.Core.Erase>]
type Absurd<'a> = Absurd of (unit -> 'a)
[<Fable.Core.Erase>]
type Prove<'a, 'b> = Prove of ('a -> 'b option)

type AP<'a> = AP of (unit -> 'a) * (Node -> bool)
type Ray<'a when 'a :> Node> = RNode of Absurd<'a> * Prove<Node, 'a> * Stream.T<Patch<'a>>

module Patch =
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
    let private onceNative (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative
    let once f = Patch (onceNative f)
    let combine (Patch p0) (Patch p1) =
        Patch <| fun n ->
            p1 n
            p0 n
    let apply n (Patch p) = p n; n

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
        (prove: Node -> bool, index: int, elm: Node) =
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
    let chain (absurd, prove) index (Patch patch) =
        Patch.once (fun (elm: Node) ->
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
                (prove, index, elm))

let tree pith =
    let ring pith o =
        let mutable c = 0

        pith <| function
        | RNode (Absurd a, Prove prove, p) ->
            let prove n =
                match prove n with
                | Some _ -> true
                | None -> false

            let index = c
            c <- c + 1
            o (Stream.map (chain (a, prove) index) p)

        o (Stream.now (Patch.once (fun elm ->
            for i = unbox elm.childNodes.length - 1 downto c do
                elm.removeChild elm.childNodes.[i] |> ignore)))
        ()

    let deltac =
        Seq.fold (Stream.combine (Patch.combine)) (Stream.now (Patch ignore))

    M.tree (DeltaC deltac) (Stream.map (Pith.map ring) pith)
