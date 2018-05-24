module Sakhe.M
open Most

[<Fable.Core.Erase>]
type Stream<'a> = private Stream of IStream<'a>

[<Fable.Core.Erase>]
type Time = private Time of float

[<AutoOpen>]
module Time =
    let ms ms = Time ms

let empty () = Stream <| M.empty ()
let now a = Stream (M.now a)
let at (Time t) a = Stream (M.at t a)
let see = at (Time 1.) (at (Time 1.) ())
let map f (Stream s) = Stream (M.map f s)
let switchLatest (Stream hs) = Stream << M.switchLatest << M.map (fun (Stream a) -> a) <| hs
let combine f (Stream a) (Stream b) = Stream <| M.combine f a b
let merge (Stream a) (Stream b) = Stream <| M.merge a b
let constant a (Stream s) = Stream <| M.constant a s
let scan f state (Stream s) = Stream <| M.scan f state s
let tap f (Stream s) = Stream <| M.tap f s
let periodic (Time t) = Stream <| M.periodic t
let skip n (Stream s) = Stream <| M.skip n s
let multicast (Stream s) = Stream <| M.multicast s

let tree (deltac) mpith =
    mpith |> map (A.tree deltac) |> switchLatest

let private scheduler = Most.Scheduler.newDefaultScheduler ()
let drain (Stream s) = M.runEffects s scheduler
