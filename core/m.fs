module Sakhe.M
open Sakhe

let tree (deltac) mpith =
    mpith |> S.map (Pith.tree deltac) |> S.switchLatest
