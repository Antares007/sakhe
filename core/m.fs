module Sakhe.M

let most = Most.Core.require

let tree deltac mpith =
    mpith |> most.map (A.tree deltac) |> most.switchLatest
