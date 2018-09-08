module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS
open Fable.Import.Browser
open Sakhe.S.Stream

let clock () =
    let runAt = performance.now()
    Clock.return' <| fun () ->
        Time.return' (performance.now() - runAt)

let timer = Timer.return' setTimeout clearTimeout

let scheduler () = Scheduler.return' timer (clock ())
