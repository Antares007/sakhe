module Sakhe.Dom
open Fable.Import.Browser
open Sakhe
open Sakhe.Patch
let a = S.now 1

let elementPatchTree<'a when 'a :> Element> (pith: S<A.Pith<S<Patch<'a>>>>) =
    tree pith



elementPatchTree << S.now << A.Pith.Of <| fun o ->
    elementPatchTree << S.now << A.Pith.Of <| fun o ->

        () |> ignore
    |> fun see -> see |> ignore
|> fun see -> see |> ignore
