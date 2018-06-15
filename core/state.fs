module Sakhe.State
open Update

type StateState<'T> = State of 'T
type StateUpdate<'T> =
    | Set of 'T
    | SetNop
    static member Unit: StateUpdate<'T> = SetNop
    static member Combine(a, b) =
        match a, b with
        | SetNop, v -> v
        | v, SetNop -> v
        | Set _, Set b -> Set b
    static member Apply(s, p) =
        match p with
        | SetNop -> s
        | Set s -> State s
type State<'s, 'a> = M of M<StateState<'s>,StateUpdate<'s>,'a>

let unlift (M a) = a
let lift a = M a
let set (s:'s) = M (UM (fun _ -> (Set s,())))
let get = M (UM (fun (State s) -> (SetNop, s)))
let setRun (s:'s) (M (UM f)): StateUpdate<'s> * 'a = f (State s)
let inline tree f i p =
    let combine a b = update {
        let! b = b
        let! a = a
        return f a b
    }
    tree
        combine
        (i |> S.map unlift)
        (p |> S.map (Pith.map (fun o -> o |> S.map unlift)))
    |> S.map lift
type StateBuilder() =
    let ub = UpdateBuilder()
    member inline __.Return(a) = lift (ub.Return a)
    member inline __.Bind(M m, f) = lift (ub.Bind (m, unlift << f))
    member inline __.Delay(f) = lift (ub.Delay (unlift << f))
    member inline __.Combine(M c1, M c2) = lift (ub.Combine (c1, c2))
let state =  StateBuilder()
