module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS
open Fable.Import.Browser

let clock () =
    let runAt = performance.now()
    Clock.return' <| fun () ->
        PositiveFlooredFloat.return' (performance.now() - runAt)

let timer = Timer.return' setTimeout clearTimeout
