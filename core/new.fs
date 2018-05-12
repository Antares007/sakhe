module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A

type Patch<'a> =
    | Created of 'a
    | Inserted of 'a
    | Proved of 'a
    | Found of 'a * Node
    | Moved of 'a * Node


type ILang<'A when 'A :> Element> =
    abstract Node<'B when 'B :> Element> : AbsurdProve<'B> * Stream<ILang<'B> -> unit>  -> unit
    abstract Leaf<'C when 'C :> CharacterData> : AbsurdProve<'C> * Stream<'C -> unit> -> unit
    abstract Patch: Stream<'A -> unit> -> unit

let rec tree<'A when 'A :> Element> (pith: Stream<ILang<'A> -> unit>): Stream<'A -> unit> =
    let ring (pith: ILang<'A> -> unit): Pith<Stream<'A -> unit>> =
        fun o ->
            let mutable c = 0
            let cpp a = c <- c + 1; a
            pith { new ILang<'A> with
                member __.Node (absurdProve, pith) =
                    tree pith |> most.map (mkPatcher c absurdProve) |> cpp |> o
                member __.Leaf (absurdProve, s) =
                    s |> most.map (mkPatcher c absurdProve) |> cpp |> o
                member __.Patch (s) =
                    s |> most.map (fun patch n -> patch n) |> o }
            o (most.now (fun n ->
                let childNodes = n.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    n.removeChild childNodes.[i]
                    |> ignore))
    M.tree (most.combineArray (fun xs -> fun (n: 'A) -> xs |> Array.iter (fun p -> p n))) (most.map ring pith)
