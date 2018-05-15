module Sakhe.M

let tree deltac mpith = mpith |> Most.map (A.tree deltac) |> Most.switchLatest
