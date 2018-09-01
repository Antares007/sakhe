module Sakhe.G
open Sakhe

type G<'a, 'b> =
    | A of 'a
    | B of 'b
    | AB of 'a * 'b

let ring (Pith pith) =
    let mutable abList = []
    pith <| fun prv -> abList <- prv :: abList
    let (aPith, bPith) =
        List.fold
            (fun (aP, bP) -> function
                | A a -> ((fun o -> o a; aP o), bP)
                | B b -> (aP, (fun o -> o b; bP o))
                | AB (a, b) -> ((fun o -> o a; aP o), (fun o -> o b; bP o))
            )
            (ignore, ignore)
            abList
    (Pith aPith, Pith bPith)

let tree aTree bTree pith =
    let abPS = So.map ring pith |> So.multicast
    let aPS = So.map fst abPS
    let bPS = So.map snd abPS
    (aTree aPS, bTree bPS)
