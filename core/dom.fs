module Sakhe.Dom
open Fable.Import.Browser
open Sakhe
open Sakhe.Patch
let a = Stream.now 1

let elementPatchTree<'a when 'a :> Element> (pith: Stream.T<A.Pith<Stream.T<Patch<'a>>>>) =
    tree pith



elementPatchTree << Stream.now << A.Pith.Of <| fun o ->
    elementPatchTree << Stream.now << A.Pith.Of <| fun o ->

        () |> ignore
    |> fun see -> see |> ignore
|> fun see -> see |> ignore
