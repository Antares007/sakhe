module Sakhe.Update

/// Represents an update monad - given a `'state`, produce
/// `'value` and an `'update` that can be applied to the `'state`
type UpdateMonad<'state, 'update, 'value> =  UM of ('state -> 'update * 'value)

let inline unit< ^update when ^update : (static member Unit : ^update)> () : ^update =
  (^update : (static member Unit : ^update) ())

let inline combine< ^update when ^update: (static member Combine : ^update * ^update -> ^update )> l r : ^update =
  (^update : (static member Combine : ^update * ^update -> ^update) (l, r))

let inline apply< ^state, ^update when ^update : (static member Apply : ^state * ^update -> ^state )> s u : ^state =
  (^update : (static member Apply : ^state * ^update -> ^state) (s, u))

let inline ret (a:'a): UpdateMonad<'s, 'u, 'a> =
    UM (fun (_:'s) -> (unit(), a))

let inline chain f (UM m1): UpdateMonad<'s,'u,'b> =
    UM <| fun s ->
        let (u1, a) = m1 s
        let (UM m2) = f a
        let (u2, b) = m2 (apply s u1)
        (combine u1 u2, b)

let tree<'s, 'u, 'a, 'b> f (i: S<UpdateMonad<'s, 'u, 'a>>) (p: S<Pith<S<UpdateMonad<'s,'u,'b>>>>) =
    S.treeCombine f i p

type UpdateBuilder() =
    member inline __.Return(v: 'a) : UpdateMonad<'s, 'u, 'a> = ret v
    member inline __.Bind(m: UpdateMonad<'s, 'u, 'a>, f: 'a -> UpdateMonad<'s, 'u, 'b>): UpdateMonad<'s, 'u, 'b> =
        chain f m
    member inline __.Delay(f: unit -> UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
        chain f (ret ())
    member inline __.Combine(c1:UpdateMonad<'s, 'u, unit>, c2:UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
        chain (fun () -> c2) c1
    // member inline __.Zero(): UpdateMonad<'s, 'u, 'b> =
    //     ret (unit())
    // member inline __.ReturnFrom(m: UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> = m
    // member inline __.Using (r: 'a, f: 'a -> UpdateMonad<'s, 'u, 'b>): UpdateMonad<'s, 'u, 'b> =
    //     UM <| fun s ->
    //         use rr = r
    //         let (UM g) = f rr
    //         g s
    // member inline x.For(sq:seq<'a>, f:'a -> UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
    //     let rec loop (en: System.Collections.Generic.IEnumerator<'a>) =
    //         if en.MoveNext() then x.Bind(f en.Current, fun _ -> loop en)
    //         else x.Zero()
    //     x.Using(sq.GetEnumerator(), loop)
    // member inline x.While(t, f:unit -> UpdateMonad<'s, 'u, unit>) =
    //     let rec loop () =
    //         if t() then x.Bind(f(), loop)
    //         else x.Zero()
    //     loop()
let update = UpdateBuilder()
