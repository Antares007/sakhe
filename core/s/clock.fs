namespace Sakhe.S

module PositiveInt =
    type T = private PositiveInt of int
    let inline return' i =
        assert (i >= 0)
        PositiveInt i
    let inline valueOf (PositiveInt i) = i

module FlooredFloat =
    type T = private FlooredFloat of float

    let inline return' (f: float) = FlooredFloat (System.Math.Floor(f))
    let inline fromInt (i: int) = return' (unbox i)
    let inline valueOf (FlooredFloat f) = f

//     type T = private Time of float

//     let inline return' (t: float) = Time (System.Math.Round t)

// module TimeSpan =
//     type T = private Span of int
//     let empty = Span 0
//     let inline return' duration =
//         assert (duration >= 0)
//         Span duration

module Clock =
    type T = private Clock of (unit -> FlooredFloat.T)

    let return' f = Clock f
    let now (Clock f) = f()
