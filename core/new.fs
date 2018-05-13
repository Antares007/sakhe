module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A

type ILang<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : AbsurdProve<'b> * Stream<ILang<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : AbsurdProve<'b> * Stream<'b -> unit> -> unit
    abstract Patch: Stream<'a -> unit> -> unit

let rec tree<'a when 'a :> Element> (pith: Stream<ILang<'a> -> unit>): Stream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit): Pith<Stream<'a -> unit>> =
        fun o ->
            let mutable c = 0
            let cpp a = c <- c + 1; a
            pith { new ILang<'a> with
                member __.Node (absurdProve, pith) =
                    tree pith |> most.map (mkPatcher c absurdProve) |> cpp |> o
                member __.Leaf (absurdProve, s) =
                    s |> most.map (mkPatcher c absurdProve) |> cpp |> o
                member __.Patch (s) =
                    s |> most.map (fun patch n -> patch n) |> o }
            o (most.now (fun element ->
                let childNodes = element.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    element.removeChild childNodes.[i]
                    |> ignore))
    M.tree
        (most.combineArray (
            fun patches ->
                fun (element: 'a) ->
                    patches |> Array.iter (fun patch -> patch element)
        ))
        (most.map ring pith)
