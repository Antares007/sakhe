module Sakhe.M
open Sakhe

let tree (deltac) mpith =
    mpith |> Stream.map (A.tree deltac) |> Stream.switchLatest
