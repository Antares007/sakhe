namespace Sakhe
open Fable.Core

[<Erase>] type P<'a> = private P of ('a -> unit)

module P =
    [<Emit("(function makeOnce (f) {
        var b
        return function once (a) {
            if (f) {
                b = f.call(this, a)
                f = null
            }
            return b
        }
    })($0)")>]
    let private onceNative (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative
    let once f = P (onceNative f)

    let chain f (P p): P<_> = f p
    let add f (P p) = once <| fun a ->
        p a
        f a
    let combine (P combinedChain) (P patch) =
        P <| fun n ->
            patch n
            combinedChain n
    let apply n (P p) = p n; n

    let tree s pith =
         S.switchLatest (S.map (A.tree (S.combine combine) s) pith)
        // S.tree (S.combine combine) (S.now s) pith
        // S.treeCombine combine s pith
