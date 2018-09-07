namespace Sakhe.S

module Time =
    type [<Fable.Core.Erase>] Delay = private PositiveInt of int
    type [<Fable.Core.Erase>] T = private FlooredFloat of float

    let return' (f: float) =
        assert (f >= 0.0)
        FlooredFloat (System.Math.Floor(f))
    let value (FlooredFloat f) = f

    let add now = function
        | None -> now
        | Some (PositiveInt delay) ->
            let (FlooredFloat now)  = now
            FlooredFloat (now + float delay)

    module Delay =
        let return' i =
            assert (i >= 0)
            PositiveInt i
        let value (PositiveInt i) = i
        let fromTo
            (FlooredFloat from) (FlooredFloat to') =
            PositiveInt << unbox <| System.Math.Max (0., to' - from)

module Clock =
    type T = private Clock of (unit -> Time.T)

    let return' f = Clock f
    let now (Clock f) = f()
