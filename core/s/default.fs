module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS


let scheduler () = Scheduler.return' (Time.Clock.localClock Time.Clock.performanceClock)
