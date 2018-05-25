namespace Sakhe

[<Fable.Core.Erase>]
type Patch<'a> = private Patch of ('a -> unit)

module Patch =
    open Fable.Core
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
    let once f = Patch (onceNative f)
    let each f = Patch f
    let combine (Patch combinedChain) (Patch patch) =
        Patch <| fun n ->
            patch n
            combinedChain n
    let apply n (Patch p) = p n; n

    let tree pith =
        let deltac =
            Seq.fold (S.combine (combine)) (S.now (Patch ignore))
        M.tree (DeltaC deltac) pith
