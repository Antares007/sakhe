module Sakhe.S.Time

type [<Fable.Core.Erase>] Delay = private PositiveInt of int
type [<Fable.Core.Erase>] T = private FlooredFloat of float

let return' f =
    assert (f >= 0.0)
    FlooredFloat (System.Math.Floor(f))

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

    let fromTo (FlooredFloat from) (FlooredFloat to') =
        PositiveInt << unbox <| System.Math.Max (0., to' - from)
