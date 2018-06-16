module Sakhe.Dom
open Fable.Core

type VText = {
    data: string
    node: Fable.Import.Browser.Text
    }
type VElement = {
    tag: string
    data: obj
    children: U2<VElement, VText> []
    node: Fable.Import.Browser.Element
    }

module AElement =
    type S = S of VElement
    type U =
        | Noop
        static member Unit: U = Noop
        static member Combine(a, b) =
            match a, b with
            | Noop, u -> u
        static member Apply(s, p) =
            match p with
            | Noop -> s
    let get = Update.UM (fun (S s) -> (Noop, s))

module AText =
    type S = S of VText
    type U =
        | Set of string
        | Noop
        static member Unit: U = Noop
        static member Combine(a, b) =
            match a, b with
            | Noop, u -> u
            | u, Noop -> u
            | Set _, Set b -> Set b
        static member Apply(s: S, p: U) =
            match p with
            | Noop -> s
            | Set text ->
                let (S vtext) = s
                vtext.node.textContent <- text
                S <| { vtext with data = text}

    let setRun vtext (Update.UM f): U * unit = f (S vtext)



type ATree =
    | Element of tag: string * key: string option * update: S<Update.M<AElement.S, AElement.U, unit>>
    | Text of update: S<Update.M<AText.S, AText.U, unit>>

let private update = Update.update
let private addIndex f =
    let mutable i = 0
    fun a ->
        let index = i
        i <- i + 1
        f index a

let tree f s (p: S<Pith<ATree>>): S<Update.M<AElement.S, AElement.U, unit>> =
    let ring = S.map << Pith.map << addIndex <| fun index -> function
        | Element (tag, key, su) ->
            su |> S.map (fun x -> update {
                let! p = AElement.get
                let z = match p.children.[index] with
                        | U2.Case1 (x) -> 1
                        | U2.Case2 (x) -> 2
                let! y = x
                return "0"
            })
        | Text su ->
            su |> S.map (fun x -> update {
                // let! y = x
                let rez = AText.setRun {data = ""; node = Fable.Import.Browser.document.createTextNode ""}
                return "0"
            })
    S.treeCombine f s (ring p)
