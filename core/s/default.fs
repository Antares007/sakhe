module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS
open Fable.Import.Browser

let private clock () =
    let runAt = lazy ( System.Math.Floor (performance.now()) )
    Time.Clock.return' <| fun () ->
        let prev = runAt.Value
        Time.return' (System.Math.Floor (performance.now()) - prev)

let timer = Timer.return' setTimeout clearTimeout

let scheduler () = Scheduler.return' timer (clock ())
