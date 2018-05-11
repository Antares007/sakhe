module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A
open System.IO

type Patch<'a> =
    private
    | New of 'a
    | Old of 'a


type ILang<'A when 'A :> Element> =
    abstract A: pith: Stream<ILang<HTMLAnchorElement> -> unit> * ?key: string -> unit
    abstract Div: pith: Stream<ILang<HTMLDivElement> -> unit> * ?key: string -> unit
    abstract CharData<'C when 'C :> CharacterData> : (unit -> 'C) * (Node -> 'C option) * Stream<'C -> unit> -> unit
    abstract Patch: Stream<'A -> unit> -> unit

// #nowarn "64"

let rec tree<'A when 'A :> Element> (pith: Stream<ILang<'A> -> unit>): Stream<'A -> unit> =
    let ring (pith: ILang<'A> -> unit): Pith<Stream<'A -> unit>> =
        fun o ->
            let mutable c = 0
            let cpp a = c <- c + 1; a
            pith { new ILang<'A> with

                member __.A (pith, key) = tree pith |> mape (document.createElement_a,             "A",         key, c) |> cpp |> o
                member __.Div (pith, key) = tree pith |> mape (document.createElement_div,             "DIV",         key, c) |> cpp |> o
                member __.CharData (absurd, eq, s) = s |> most.map (Patch.mkPatcher c (absurd, eq)) |> o
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
    ()))
