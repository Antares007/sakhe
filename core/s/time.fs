module Sakhe.S.Time
open Fable.Core

type [<Erase>] Offset = private Offset of (unit -> float)
type [<Erase>] Delay = private PositiveInt of int
type [<Erase>] Point = private Point of float
type [<Erase>] T = private Time of (unit -> float)
type [<Erase>] Clock = private Clock of (T * Offset)

let add (Time t) (PositiveInt delay) = Time <| fun () -> (t() + float delay)

module Point =
    let return' (Time t) = Point <| t()

    let add (Point t) (PositiveInt delay) = Point <| t + float delay

module Delay =
    let return' i =
        assert (i >= 0)
        PositiveInt i

    let value (PositiveInt i) = i

    let fromTo (Point from) (Point to') =
        PositiveInt << unbox <| System.Math.Max (0., to' - from)

module Clock =
    open Fable.Import.Browser

    let performanceClock =
        Clock ( Time <| fun () -> System.Math.Floor(window.performance.now ())
              , Offset <| fun () -> 0.0)
    let localClock (Clock (Time t, Offset o)) =
        let fZero = lazy ( t() )
        Clock ( Time <| fun () ->
                            let t = 0.0 - fZero.Value + t()
                            assert (t >= 0.0)
                            t  // t = 0.0 at first run
              , Offset <| fun () -> 0.0 - fZero.Value + o())

    let localTime (Clock (Time t, Offset offset)) =
        Time <| fun () -> t()

    let originTime (Clock (Time t, Offset offset)) =
        Time <| fun () -> t() + offset()
