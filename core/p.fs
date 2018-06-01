namespace Sakhe
open Fable.Core

[<Erase>] type P<'a> = private P of ('a -> unit)

module State =
    open Fable.Import.Browser

    type S<'State,'Value> =
        S of ('State -> 'Value * 'State)

    let runS (S f) state = f state

    let returnS x =
        let run state =
            x, state
        S run

    let bindS f xS =
        let run state =
            let x, newState = runS xS state
            runS (f x) newState
        S run

    let xS = returnS (P <| fun (_:int) -> ())
    let see = runS xS "1"
    // let tree s pith =
    //     S.treeCombine (fun a b -> returnS (a, b)) s pith

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
