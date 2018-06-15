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

module AText =
    type S = S of string
    type U =
        | Set of string
        | Noop
        static member Unit: U = Noop
        static member Combine(a, b) =
            match a, b with
            | Noop, u -> u
            | u, Noop -> u
            | Set _, Set b -> Set b
        static member Apply(s, p) =
            match p with
            | Noop -> s
            | Set s -> S s

type ATree =
    | Element of tag: string * key: string option * update: S<Update.M<AElement.S, AElement.U, unit>>
    | Text of update: S<Update.M<AText.S, AText.U, unit>>

let private update = Update.update

let tree f s (p: S<Pith<ATree>>): S<Update.M<AElement.S, AElement.U, unit>> =
    let ring (Pith pith) =
        Pith <| fun o ->
            pith <| function
                | Element (tag, key, su) ->
                    su |> S.map (fun x -> update {
                        let! y = x
                        return 0
                    }) |> o

                | Text _ -> ()


    S.treeCombine f s (S.map ring p)
