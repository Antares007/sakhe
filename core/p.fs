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
    let each f = P f
    let combine (P combinedChain) (P patch) =
        P <| fun n ->
            patch n
            combinedChain n
    let apply n (P p) = p n; n

    let tree pith =
        S.combineTree combine (S.now (P ignore)) pith
