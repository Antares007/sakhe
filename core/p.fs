namespace Sakhe
open Fable.Core

[<Erase>] type P<'a> = private P of ('a -> (unit -> unit))

module P =
    open System.Collections.Generic

    let private memoize f =
        let cache = new Dictionary<_, _>()
        (fun x ->
            let succ, v = cache.TryGetValue(x)
            if succ then v else
            let v = f(x)
            cache.Add(x, v)
            v)

    let once f = P (memoize (fun a -> ignore(); memoize (f a)))
    let empty<'a when 'a :equality> = once (fun (_: 'a) -> (fun () -> ()))

    let combine (P combinedChain) (P patch) =
        once <| fun n ->
            let d1 = patch n
            let d2 = combinedChain n
            (fun () -> d1(); d2())
    let apply n (P p) = p n |> ignore; n

    let tree s pith =
         S.switchLatest (S.map (A.tree (S.combine combine) s) pith)
        // S.tree (S.combine combine) (S.now s) pith
        // S.treeCombine combine s pith
