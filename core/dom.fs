module Sakhe.Dom
open Fable.Import.Browser
open Sakhe
open Sakhe.Patch
let a = S.now 1

let see f a = Pith.map f a

let elementPatchTree<'a when 'a :> Element> (pith: S<Pith<S<Patch<'a>>>>) =
    tree pith



elementPatchTree << S.now << Pith.Of <| fun o ->
    o << S.now << Patch.once <| fun (n: Element) -> n |> ignore

    o << unbox << elementPatchTree << S.now << Pith.Of <| fun o ->
        o << S.now << Patch.once <| fun (n: HTMLDivElement) -> n |> ignore

|> fun see -> see |> ignore
