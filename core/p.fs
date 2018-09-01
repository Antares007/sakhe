namespace Sakhe
open Fable.Core

[<Erase>] type P<'a> = private P of ('a -> unit)

module P =
    let memoize fn =
        let cache = System.Collections.Generic.Dictionary<_,_>()
        fun a ->
            match cache.TryGetValue a with
            | true, b -> b
            | false, _ ->
                let b = fn (a)
                cache.Add(a, b)
                b

    let once patch = P <| memoize patch

    let empty<'a when 'a :equality> = once ignore<'a>

    let combine (P combinedChain) (P patch) =
        once <| fun n ->
            patch n
            combinedChain n

    let apply n (P p) = p n |> ignore; n

    let tree s pith =
        So.treeCombine combine s pith
