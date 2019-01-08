module Sakhe.Scheduler2aa

type O =
    | Local of IO<float, O, unit>
    | Origin of IO<float, O, unit>
    | Delay  of float * IO<float, O, unit>

let pair a b = (a, b)
let see = Local << IO <| fun o t ->
    o << Delay << pair 10. << IO <| fun o t ->
        ()