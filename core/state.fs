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
type State<'s, 'a> = M of UpdateMonad<StateState<'s>,StateUpdate<'s>,'a>

let valueOf (M a) = a
let Of a = M a
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
        (i |> S.map valueOf)
        (p |> S.map (Pith.map (fun o -> o |> S.map valueOf)))
    |> S.map Of
type StateBuilder() =
    let ub = UpdateBuilder()
    member inline __.Return(a) = Of (ub.Return a)
    member inline __.Bind(M m, f) = Of (ub.Bind (m, valueOf << f))
    member inline __.Delay(f) = Of (ub.Delay (valueOf << f))
    member inline __.Combine(M c1, M c2) = Of (ub.Combine (c1, c2))
let state =  StateBuilder()
