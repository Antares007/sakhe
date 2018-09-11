module Sakhe.S.Time
open Fable.Core

type [<Erase>] Offset = private Offset of float
type [<Erase>] Delay = private PositiveInt of int
type [<Erase>] T = private Time of float
type [<Erase>] Clock = private Clock of ((unit -> T) * Offset)

let return' f =
    assert (f >= 0.0)
    Time (System.Math.Floor(f))

let add (Time now) (PositiveInt delay) = Time (now + float delay)

module Delay =

    let return' i =
        assert (i >= 0)
        PositiveInt i

    let value (PositiveInt i) = i

    let fromTo (Time from) (Time to') =
        PositiveInt << unbox <| System.Math.Max (0., to' - from)

module Clock =
    open Fable.Import.Browser

    let performanceClock =
        Clock (
                fun () -> Time <| System.Math.Floor(window.performance.now ())
              , Offset 0.0)

    let localTime (Clock (f, Offset offset)) = let (Time t) = f() in Time <| t + offset
