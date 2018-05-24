module Sakhe.PNode
open Fable.Core
open Fable.Import.Browser
open Sakhe
open M
open A

type Patch<'a> = 'a -> unit
type AP<'a> = (unit -> 'a) * (Node -> bool)
type PNode = private PNode of Node AP * Stream<Node Patch>
let pnode ap s =
    PNode (ap, s)
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
    let chain (absurd, prove) index patch =
        once (fun (elm: Node) ->
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
    let ring (pith: (PNode -> unit) -> unit) (o: Stream<Patch<Node>> -> unit): unit =
        let mutable c = 0

        pith <| function
        | PNode (ap, p) ->
            let index = c
            c <- c + 1
            o (M.map (chain ap index) p)

        o (M.now (once (fun elm ->
            for i = unbox elm.childNodes.length - 1 downto c do
                elm.removeChild elm.childNodes.[i] |> ignore)))

    let deltac =
        Seq.fold (combine (fun p0 p e -> p e;  p0 e)) (now (ignore))

    M.tree (deltaC deltac) (map (pmap ring) pith)

