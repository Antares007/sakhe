module Sakhe.Time
open Fable.Core

type [<Erase>] Offset = private Offset of float
type [<Erase>] Delay = private Delay of int
type [<Erase>] T =
    private
    | Time of float
    static member (-) ((Time l), (Time r)) =
        Offset (l - r)
    static member (+) ((Time t), (Offset o)) =
        Time (t + o)
    static member (+) ((Offset o), (Time t)) =
        Time (t + o)
    static member (+) ((Time t), (Delay d)) =
        Time (t + float d)
    static member (+) ((Delay d), (Time t)) =
        Time (t + float d)

let return' (t) =
    assert (t >= 0.0)
    assert (t = System.Math.Floor(t))
    Time <| t
let zero = Time 0.0

let add (Delay delay) (Time t) = return' <| t + float delay

let change (Offset offset) (Time t) = return' <| (t + offset)

module Delay =
    let return' i =
        assert (i >= 0)
        Delay i

    let zero = Delay 0

    let fromTo (Time from) (Time to') =
        Delay << unbox <| System.Math.Max (0., to' - from)

    let unbox (Delay v) = v

module Offset =
    let return' a = Offset a
    let from (Time origin) (Time local) = Offset <| local - origin
