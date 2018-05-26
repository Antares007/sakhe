module Sakhe.PNode
open Fable.Import.Browser
open Sakhe

type Ray<'a when 'a :> Node> = RNode of (unit -> 'a) * (Node -> bool) * S<Patch<'a>>

[<AutoOpen>]
module private Impl =
    let rec private tryFind prove (i: int) (nlist: NodeList) =
        if i >= unbox nlist.length then
            None
        else
            let n = nlist.[i]
            if prove n then
                Some n
            else
                tryFind prove (i + 1) nlist

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

    let chain
        absurd prove index (Patch patch) =
        Patch.once (fun (elm: #Node) ->
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

let ring (Pith pith) = Pith <| fun o ->
    let mutable c = 0

    pith <| function
    | RNode (absurd, prove, p) ->
        let index = c
        c <- c + 1
        o << S.map (chain absurd prove index) <| p

    o << S.now << Patch.once <| fun elm ->
        for i = unbox elm.childNodes.length - 1 downto c do
            elm.removeChild elm.childNodes.[i] |> ignore

let tree pith =
    Patch.tree (S.map ring pith)
