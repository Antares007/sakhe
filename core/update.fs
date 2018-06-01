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

/// Instance of the computation builder
/// that defines the update { .. } block
let update = UpdateBuilder()
