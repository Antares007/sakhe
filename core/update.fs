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

type UpdateBuilder() =
    /// Returns the specified value, together
    /// with empty update obtained using 'unit'
    member inline __.Return(v: 'a) : UpdateMonad<'s, 'u, 'a> = ret v

    /// Compose two update monad computations
    member inline __.Bind(m: UpdateMonad<'s, 'u, 'a>, f: 'a -> UpdateMonad<'s, 'u, 'b>): UpdateMonad<'s, 'u, 'b> =
        chain f m

    // /// Represents monadic computation that returns unit
    // /// (e.g. we can now omit 'else' branch in 'if' computation)
    // member inline __.Zero(): UpdateMonad<'s, 'u, 'b> =
    //     ret (unit())

    // /// Delays a computation with (uncontrolled) side effects
    // member inline __.Delay(f: unit -> UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
    //     chain f (ret ())

    // /// Sequential composition of two computations where the
    // /// first one has no result (returns a unit value)
    // member inline __.Combine(c1:UpdateMonad<'s, 'u, unit>, c2:UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
    //     chain (fun () -> c2) c1

    // /// Enable the 'return!' keyword to return another computation
    // member inline __.ReturnFrom(m: UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> = m

    // /// Ensure that resource 'r' is disposed of at the end of the
    // /// computation specified by the function 'f'
    // member inline __.Using (r: 'a, f: 'a -> UpdateMonad<'s, 'u, 'b>): UpdateMonad<'s, 'u, 'b> =
    //     UM <| fun s ->
    //         use rr = r
    //         let (UM g) = f rr
    //         g s

    // /// Support 'for' loop - runs body 'f' for each element in 'sq'
    // member inline x.For(sq:seq<'a>, f:'a -> UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
    //     let rec loop (en: System.Collections.Generic.IEnumerator<'a>) =
    //         if en.MoveNext() then x.Bind(f en.Current, fun _ -> loop en)
    //         else x.Zero()
    //     x.Using(sq.GetEnumerator(), loop)

    // /// Supports 'while' loop - run body 'f' until condition 't' holds
    // member inline x.While(t, f:unit -> UpdateMonad<'s, 'u, unit>) =
    //     let rec loop () =
    //         if t() then x.Bind(f(), loop)
    //         else x.Zero()
    //     loop()
/// Instance of the computation builder
/// that defines the update { .. } block
let update = UpdateBuilder()

open Sakhe

let inline tree<
                ^S, ^U, 'a, 'b when ^U : (static member Unit : ^U) and
                                    ^U : (static member Combine : ^U * ^U -> ^U) and
                                    ^U : (static member Apply : ^S * ^U -> ^S )>
                        (a: 'a)
                        (pith: Pith<UpdateMonad< ^S, ^U, 'b>>) =
    let uUnit = (^U : (static member Unit : ^U) ())
    let zero = UM (fun (s: ^S) -> (uUnit, a))
    let dc (xs: UpdateMonad< ^S, ^U, 'b> list) = UM <| fun (s: ^S) ->

        (uUnit, a)
    A.tree dc pith
