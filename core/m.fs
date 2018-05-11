module Sakhe.M
open A
open Most

let most = Most.Core.require

let tree (deltac: Stream<'a>[] -> Stream<'b>) (mpith: Stream<Pith<Stream<'a>>>): Stream<'b> =
    mpith |> most.map (A.tree deltac) |> most.switchLatest
