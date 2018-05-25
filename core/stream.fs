
module Sakhe.Stream
open Most
open Most.M

[<Fable.Core.Erase>]
type T<'a> = private T of IStream<'a>

[<Fable.Core.Erase>]
type Time = private Time of float

[<AutoOpen>]
module Time =
    let ms ms = Time ms

let empty () = T <| empty ()
let now a = T (now a)
let at (Time t) a = T (at t a)
let see = at (Time 1.) (at (Time 1.) ())
let map f (T s) = T (map f s)
let switchLatest (T hs) = T << switchLatest << M.map (fun (T a) -> a) <| hs
let combine f (T a) (T b) = T <| combine f a b
let merge (T a) (T b) = T <| merge a b
let konst a (T s) = T <| constant a s
let constant = konst

let scan f state (T s) = T <| scan f state s
let tap f (T s) = T <| tap f s
let periodic (Time t) = T <| periodic t
let skip n (T s) = T <| skip n s
let multicast (T s) = T <| multicast s
let startWith a (T s) = T <| startWith a s
let private scheduler = Most.Scheduler.newDefaultScheduler ()
let drain (T s) = M.runEffects s scheduler
