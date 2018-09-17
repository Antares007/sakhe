namespace Sakhe
open Fable.Core

type [<Erase>] I<'a> = I of (unit -> 'a)
type [<Erase>] O<'a, 'b> = O of (('a -> unit) -> 'b)

[<RequireQualifiedAccess>]
module I =
    let empty =
        I ignore

    let Of a =
        I <| fun () -> a

    let map f (I i) =
        I <| fun () -> i () |> f

    let inline append (I l) (I r) =
        I <| fun () -> l () + r ()

    let bind f (I i) =
        I <| fun () -> let (I i) = f (i ()) in i ()

    let run (I i) = i ()

[<RequireQualifiedAccess>]
module O =
    let empty =
        O ignore

    let filter f (O p) =
        O <| fun o -> p (fun a -> if f a then o a)

    let filterMap f (O p) =
        O <| fun o ->
            p (fun a ->
                match f a with
                | None -> ()
                | Some a -> o a)

    let map f g (O p) =
        O <| fun o -> (g << p) (o << f)

    let inline append (O l) (O r) =
        O <| fun o -> (l o) + (r o)

    let bind f (O p) =
        O <| fun o ->
            let a = p o
            let (O p) = f a
            p o

    let fold f s (O o) =
        let mutable state = s
        (state, (o <| fun a -> state <- f state a))

    let run o (O p) =
        p o
