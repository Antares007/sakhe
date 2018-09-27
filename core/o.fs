[<RequireQualifiedAccess>]
module Sakhe.O

type T<'b, 'a> =
    private
    | O of (('b -> unit) * (unit -> 'a))
    member o.Value = let (O (_, get)) = o in get ()

let inline get (O (_, get)) = get ()

let inline put a (O (put, _)) = put a

let return' f ua =
    let mutable a = ua
    O ((fun b -> a <- f a b), (fun () -> a))

let proxy p = O <| (p, ignore)

let map f (O (put, get)) =
    O (put, get >> f)

let filter f (O (put, get)) =
    O ((fun a -> if f a then put a else ()), get)

let contraMap g (O (put, get)) =
    O (g >> put, get)
