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

type ATree =
    | Element of tag: string * key: string option * update: S<State.M<VElement, unit>>
    | Text of update: S<State.M<VText, unit>>

let private state = State.state
let private addIndex f =
    let mutable i = 0
    fun a ->
        let index = i
        i <- i + 1
        f index a

let tree s (p: S<Pith<ATree>>): S<State.M<VElement, unit>> =
    let ring = S.map << Pith.map << addIndex <| fun index -> function
        | Element (tag, key, su) ->
            su |> S.map (fun x -> state {
                let! p = State.get
                do! (State.set p)
                // let z = match p.children.[index] with
                //     | U2.Case1 (x) -> 1
                //     | U2.Case2 (x) -> 2
                // let! y = x
                return ()
            })
        | Text su ->
            su |> S.map (fun x -> state {
                let! p = State.get
                // let! y = x
                // let rez = AText.setRun {data = ""; node = Fable.Import.Browser.document.createTextNode ""}
                return ()
            })
    S.treeCombine (fun s1 s2 -> state {
        let! a = s1
        let! b = s2
        return ()
    }) s (ring p)
