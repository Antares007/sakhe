module Sakhe.Dom
open A
open Fable.Import.Browser
open Stream
open Sakhe.PNode
open Sakhe.PNode.Patch
let a = Stream.now 1

let elementPatchTree<'a when 'a :> Element> (elm: 'a) pith =
    tree pith
    |> Stream.scan apply elm
    |> Stream.map ignore
