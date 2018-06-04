module Sakhe.Update.State
/// Wraps a state of type 'T
type StateState<'T> = State of 'T

/// Represents updates on state of type 'T
type StateUpdate<'T> =
    | Set of 'T
    | SetNop

    /// Empty update - do not change the state
    static member Unit:StateUpdate<'T> = SetNop
    /// Combine updates - return the latest (rightmost) 'Set' update
    static member Combine(a, b) =
        match a, b with
        | SetNop, v -> v
        | v, SetNop -> v
        | Set _, Set b -> Set b
    /// Apply update to a state - the 'Set' update changes the state
    static member Apply(s, p) =
        match p with
        | SetNop -> s
        | Set s -> State s

/// Set the state to the specified value
let set s = UM (fun _ -> (Set s,()))
/// Get the current state
let get = UM (fun (State s) -> (SetNop, s))
/// Run a computation using a specified initial state
let setRun s (UM f) = f (State s)
