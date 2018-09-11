module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS
open Fable.Import.Browser

let timer = Timer.return' setTimeout clearTimeout

let scheduler () = Scheduler.return' timer (Time.Clock.performanceClock)
