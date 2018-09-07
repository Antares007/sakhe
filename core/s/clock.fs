namespace Sakhe.S

module Delay =
    type [<Fable.Core.Erase>] T = private PositiveInt of int
    let inline return' i =
        assert (i >= 0)
        PositiveInt i
    let inline value (PositiveInt i) = i

module Time =
    type [<Fable.Core.Erase>] T = private FlooredFloat of float

    let inline return' (f: float) =
        assert (f >= 0.0)
        FlooredFloat (System.Math.Floor(f))
    let inline value (FlooredFloat f) = f

//     type T = private Time of float

//     let inline return' (t: float) = Time (System.Math.Round t)

// module TimeSpan =
//     type T = private Span of int
//     let empty = Span 0
//     let inline return' duration =
//         assert (duration >= 0)
//         Span duration

module Clock =
    type T = private Clock of (unit -> Time.T)

    let return' f = Clock f
    let now (Clock f) = f()
