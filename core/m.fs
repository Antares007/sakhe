module Sakhe.M
open Sakhe

let tree (deltac) mpith =
    mpith |> S.map (A.tree deltac) |> S.switchLatest
