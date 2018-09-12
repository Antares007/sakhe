module Sakhe.S.Default
open Sakhe.S
open Fable.Import.JS
open Fable.Import
open Sakhe.S.Time

let performanceClock =
    let tf = fun () -> Time.return' <| System.Math.Floor(Browser.performance.now())
    let offset = Time.Offset.return' 0.0
    Clock.return' tf offset
