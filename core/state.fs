module Sakhe.State

type M<'s, 'a> = private M of ('s -> ('s * 'a))

let return' a = M (fun s -> (s, a))
let bind f (M m) =
    M <| fun s ->
        let (s', a) = m s
        let (M m') = f a
        m' s'
let get = M (fun s -> (s, s))
let set s = M (fun _ -> (s, ()))
let setRun s (M m) = m s

type StateBuilder() =
    member inline __.Return(a) = return' a
    member inline __.Bind(m, f) = bind f m

let state = StateBuilder()
