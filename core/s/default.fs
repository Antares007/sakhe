module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS

let clock = Clock.return' <| fun () ->
    FlooredFloat.return' (Fable.Import.Browser.performance.now())

let timer = Timer.return' setTimeout clearTimeout
