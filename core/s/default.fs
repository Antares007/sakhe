module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS
open Fable.Import.Browser
open Sakhe.S.Stream

let private clock () =
    let runAt = lazy ( System.Math.Floor (performance.now()) )
    Clock.return' <| fun () ->
        let prev = runAt.Value
        Time.return' (System.Math.Floor (performance.now()) - prev)

let timer = Timer.return' setTimeout clearTimeout

let scheduler () = Scheduler.return' timer (clock ())
