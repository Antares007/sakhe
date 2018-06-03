module Update

/// Represents an update monad - given a state, produce
/// value and an update that can be applied to the state
type UpdateMonad<'s, 'u, 'a> =  UM of ('s -> 'u * 'a)

/// Returns the value of 'Unit' property on the ^S type
let inline unit< ^S when ^S : (static member Unit : ^S)> () : ^S =
  (^S : (static member Unit : ^S) ())

/// Invokes Combine operation on a pair of ^S values
let inline combine< ^S when ^S: (static member Combine : ^S * ^S -> ^S )> l r : ^S =
  (^S : (static member Combine : ^S * ^S -> ^S) (l, r))

/// Invokes Apply operation on state and update ^S * ^U
let inline apply< ^S, ^U when ^U : (static member Apply : ^S * ^U -> ^S )> s u : ^S =
  (^U : (static member Apply : ^S * ^U -> ^S) (s, u))

let inline ret (a:'a): UpdateMonad<'s, 'u, 'a> =
    UM (fun (_:'s) -> (unit(), a))

let inline chain f (UM m1): UpdateMonad<'s,'u,'b> =
    UM <| fun s ->
        let (u1, a) = m1 s
        let (UM m2) = f a
        let (u2, b) = m2 (apply s u1)
        (combine u1 u2, b)

open Sakhe

let sTree<'a,'b> : ('a -> 'b -> 'a) S -> ('a -> 'b Pith -> 'a) S =
    S.map A.tree
let see2<'a, 'b> = sTree (S.now (fun (a: 'a) (_: 'b) -> a))
see2 |> ignore

type UpdateBuilder() =
    /// Returns the specified value, together
    /// with empty update obtained using 'unit'
    member inline __.Return(v) : UpdateMonad<'S, 'U, 'T> =
        UM (fun _ -> (unit(), v))

    /// Compose two update monad computations
    member inline __.Bind(m, f) =
        chain f m

//     /// Represents monadic computation that returns unit
//     /// (e.g. we can now omit 'else' branch in 'if' computation)
//     member inline x.Zero() = x.Return(())

//     /// Delays a computation with (uncontrolled) side effects
//     member inline x.Delay(f) = x.Bind(x.Zero(), f)

//     /// Sequential composition of two computations where the
//     /// first one has no result (returns a unit value)
//     member inline x.Combine(c1, c2) = x.Bind(c1, fun () -> c2)

//     /// Enable the 'return!' keyword to return another computation
//     member inline __.ReturnFrom(m : UpdateMonad<'S, 'P, 'T>) = m

//     /// Ensure that resource 'r' is disposed of at the end of the
//     /// computation specified by the function 'f'
//     member inline __.Using(r,f) = UM(fun s ->
//         use rr = r in let (UM g) = f rr in g s)

//   /// Support 'for' loop - runs body 'f' for each element in 'sq'
//     member inline x.For(sq:seq<'V>, f:'V -> UpdateMonad<'S, 'P, unit>) =
//         let rec loop (en:System.Collections.Generic.IEnumerator<_>) =
//             if en.MoveNext() then x.Bind(f en.Current, fun _ -> loop en)
//             else x.Zero()
//         x.Using(sq.GetEnumerator(), loop)

//   /// Supports 'while' loop - run body 'f' until condition 't' holds
//     member inline x.While(t, f:unit -> UpdateMonad<'S, 'P, unit>) =
//         let rec loop () =
//             if t() then x.Bind(f(), loop)
//             else x.Zero()
//         loop()
/// Instance of the computation builder
/// that defines the update { .. } block
let update = UpdateBuilder()
