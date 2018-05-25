module Sakhe.Dom
open Fable.Import.Browser
open Sakhe
open Sakhe.Patch
let a = Stream.now 1

let elementPatchTree<'a when 'a :> Element> (elm: 'a) pith =
    tree pith
    |> Stream.scan apply elm
    |> Stream.map ignore
