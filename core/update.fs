module Sakhe.Update

type UpdateMonad<'s, 'u, 'a> =  UM of ('s -> 'u * 'a)

let inline unit< ^u when ^u : (static member Unit : ^u)> () : ^u =
  (^u : (static member Unit : ^u) ())
let inline combine< ^u when ^u: (static member Combine : ^u * ^u -> ^u )> l r =
  (^u : (static member Combine : ^u * ^u -> ^u) (l, r))
let inline apply< ^s, ^u when ^u : (static member Apply : ^s * ^u -> ^s )> s u =
  (^u : (static member Apply : ^s * ^u -> ^s) (s, u))

let inline return' (a): UpdateMonad<'s,'u,'a> =
    UM (fun (_) -> (unit(), a))

let inline bind f (UM m1): UpdateMonad<'s,'u,'b> =
    UM <| fun s ->
        let (u1, a) = m1 s
        let (UM m2) = f a
        let (u2, b) = m2 (apply s u1)
        (combine u1 u2, b)

let tree<'s, 'u, 'a, 'b> f (i: S<UpdateMonad<'s, 'u, 'a>>) (p: S<Pith<S<UpdateMonad<'s,'u,'b>>>>) =
    S.treeCombine f i p

type UpdateBuilder() =
    member inline __.Return(v: 'a) : UpdateMonad<'s, 'u, 'a> = return' v
    member inline __.Bind(m: UpdateMonad<'s, 'u, 'a>, f: 'a -> UpdateMonad<'s, 'u, 'b>): UpdateMonad<'s, 'u, 'b> =
        bind f m
    member inline __.Delay(f: unit -> UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
        bind f (return' ())
    member inline __.Combine(c1:UpdateMonad<'s, 'u, unit>, c2:UpdateMonad<'s, 'u, 'a>): UpdateMonad<'s, 'u, 'a> =
        bind (fun () -> c2) c1
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
