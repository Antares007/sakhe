module Sakhe.Dom

type VTree =
    | VElement of VElement
    | VText of VText
and VText = {
    data: string
    node: Fable.Import.Browser.Text
    }
and VElement = {
    tag: string
    data: obj
    children: VTree []
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

type Um<'s,'u,'a> = Update.M<'s,'u,'a>

type ATree =
    | Element of tag: string * key: string option * update: S<Um<AElement.S, AElement.U, unit>>
    | Text of update: S<Um<AText.S, AText.U, unit>>

let tree f s (p: S<Pith<S<ATree>>>) =
    S.treeCombine f s p
