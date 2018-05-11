module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A

type Patch<'a> =
    private
    | New of 'a
    | Old of 'a


type ILang<'A when 'A :> Element> =
    abstract Node<'B when 'B :> Element> : absurdEq: ((unit -> 'B) * (Node -> 'B option)) * pith: Stream<ILang<'B> -> unit>  -> unit
    abstract Leaf<'C when 'C :> CharacterData> : absurdEq: ((unit -> 'C) * (Node -> 'C option)) * patch: Stream<'C -> unit> -> unit
    abstract Patch: Stream<'A -> unit> -> unit

let rec tree<'A when 'A :> Element> (pith: Stream<ILang<'A> -> unit>): Stream<'A -> unit> =
    let ring (pith: ILang<'A> -> unit): Pith<Stream<'A -> unit>> =
        fun o ->
            let mutable c = 0
            let cpp a = c <- c + 1; a
            pith { new ILang<'A> with
                member __.Node (absurdEq, pith) = tree pith |> most.map (mkPatcher c absurdEq) |> cpp |> o
                member __.Leaf (absurdEq, s) = s |> most.map (Patch.mkPatcher c absurdEq) |> cpp |> o
                member __.Patch (s) = s |> most.map (fun patch n -> patch n) |> o }
            o (most.now (fun n ->
                let childNodes = n.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    n.removeChild childNodes.[i]
                    |> ignore))
    M.tree (most.combineArray (fun xs -> fun (n: 'A) -> xs |> Array.iter (fun p -> p n))) (most.map ring pith)

let a = (document.createElement_a, fun _ -> None)

let rez: Stream<HTMLDivElement -> unit> = tree (most.now (fun o ->
    o.Node (a, most.now (fun a -> console.log a; ()))
    failwith ""))
