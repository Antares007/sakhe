module UpdateMonad

/// Represents an update monad - given a state, produce
/// value and an update that can be applied to the state
type UpdateMonad<'TState, 'TUpdate, 'T> =  UM of ('TState -> 'TUpdate * 'T)

/// Returns the value of 'Unit' property on the ^S type
let inline unit< ^S when ^S : (static member Unit : ^S)> () : ^S =
  (^S : (static member Unit : ^S) ())

/// Invokes Combine operation on a pair of ^S values
let inline (++) < ^S when ^S: (static member Combine : ^S * ^S -> ^S )> a b : ^S =
  (^S : (static member Combine : ^S * ^S -> ^S) (a, b))

/// Invokes Apply operation on state and update ^S * ^U
let inline apply< ^S, ^U when ^U : (static member Apply : ^S * ^U -> ^S )> s a : ^S =
  (^U : (static member Apply : ^S * ^U -> ^S) (s, a))

type UpdateBuilder() =
    /// Returns the specified value, together
    /// with empty update obtained using 'unit'
    member inline __.Return(v) : UpdateMonad<'S, 'U, 'T> =
        UM (fun s -> (unit(),v))

    /// Compose two update monad computations
    member inline __.Bind(UM u1, f:'T -> UpdateMonad<'S, 'U, 'R>) =
        UM (fun s ->
        // Run the first computation to get first update
        // 'u1', then run 'f' to get second computation
        let (u1, x) = u1 s
        let (UM u2) = f x
        // Apply 'u1' to original state & run second computation
        // then return result with combined state updates
        let (u2, y) = u2 (apply s u1)
        (u1 ++ u2, y))
    /// Represents monadic computation that returns unit
    /// (e.g. we can now omit 'else' branch in 'if' computation)
    member inline x.Zero() = x.Return(())

    /// Delays a computation with (uncontrolled) side effects
    member inline x.Delay(f) = x.Bind(x.Zero(), f)

    /// Sequential composition of two computations where the
    /// first one has no result (returns a unit value)
    member inline x.Combine(c1, c2) = x.Bind(c1, fun () -> c2)

    /// Enable the 'return!' keyword to return another computation
    member inline __.ReturnFrom(m : UpdateMonad<'S, 'P, 'T>) = m

    /// Ensure that resource 'r' is disposed of at the end of the
    /// computation specified by the function 'f'
    member inline __.Using(r,f) = UM(fun s ->
        use rr = r in let (UM g) = f rr in g s)

  /// Support 'for' loop - runs body 'f' for each element in 'sq'
    member inline x.For(sq:seq<'V>, f:'V -> UpdateMonad<'S, 'P, unit>) =
        let rec loop (en:System.Collections.Generic.IEnumerator<_>) =
            if en.MoveNext() then x.Bind(f en.Current, fun _ -> loop en)
            else x.Zero()
        x.Using(sq.GetEnumerator(), loop)

  /// Supports 'while' loop - run body 'f' until condition 't' holds
    member inline x.While(t, f:unit -> UpdateMonad<'S, 'P, unit>) =
        let rec loop () =
            if t() then x.Bind(f(), loop)
            else x.Zero()
        loop()
/// Instance of the computation builder
/// that defines the update { .. } block
let update = UpdateBuilder()
