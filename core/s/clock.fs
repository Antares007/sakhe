module Sakhe.S.Clock
open Fable.Core
open Sakhe.S

type [<Erase>] T = private Clock of ((unit -> Time.T) * (Lazy<Time.Offset>))

let return' now offset = Clock (now, lazy offset)

let localClock (Clock (baseTf, baseOf)) =
    let mutable offsetFromBase = None
    let zero = Time.return' 0.0
    let localNow () =
        let baseTime = baseTf()
        match offsetFromBase with
        | None ->
            offsetFromBase <- Some <| Time.Offset.from baseTime zero
            zero
        | Some offsetFromBase ->
            Time.change offsetFromBase baseTime
    let localOffset = lazy (
        let baseTime = baseTf()
        let baseOffset = baseOf.Value
        if offsetFromBase.IsNone then
            offsetFromBase <- Some <| Time.Offset.from baseTime zero
        Time.Offset.from (Time.change baseOffset baseTime) zero)
    Clock (localNow, localOffset)

let localTime (Clock (f, _)) = f()
