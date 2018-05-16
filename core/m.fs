module Sakhe.M
open Most

let tree deltac mpith = mpith |> M.map (A.tree deltac) |> M.switchLatest
