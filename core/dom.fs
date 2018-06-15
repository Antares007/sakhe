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
    type State = State of VElement
    type Update =
        | Noop
        static member Unit: Update = Noop
        static member Combine(a, b) =
            match a, b with
            | Noop, u -> u
        static member Apply(s, p) =
            match p with
            | Noop -> s

module AText =
    type State = State of string
    type Update =
        | Set of string
        | Noop
        static member Unit: Update = Noop
        static member Combine(a, b) =
            match a, b with
            | Noop, u -> u
            | u, Noop -> u
            | Set _, Set b -> Set b
        static member Apply(s, p) =
            match p with
            | Noop -> s
            | Set s -> State s

type ATree =
    | Element of tag: string * key: string option * update: S<Update.UpdateMonad<AElement.State, AElement.Update, unit>>
    | Text of update: S<Update.UpdateMonad<AText.State, AText.Update, unit>>
