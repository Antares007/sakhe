namespace Sakhe
open Fable.Core

[<Erase>] type P<'a> = private P of ('a -> unit)

module P =
    open System.Collections.Generic

    let once patch =
        let cache = new Dictionary<_, _>()
        P <| fun a ->
            let succ, _ = cache.TryGetValue(a)
            if succ then
                ()
            else
                cache.Add(a, ())
                patch a

    let empty<'a when 'a :equality> = once ignore<'a>

    let combine (P combinedChain) (P patch) =
        once <| fun n ->
            patch n
            combinedChain n

    let apply n (P p) = p n |> ignore; n

    let tree s pith =
        // let cmb = S.combine combine
        // let ring pith = A.tree cmb s pith
        // S.switchLatest (S.map ring pith)
        // S.tree (S.combine combine) (S.now s) pith
        S.treeCombine combine s pith
