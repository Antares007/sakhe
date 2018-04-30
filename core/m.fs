﻿module Sakhe.M

open Most

type Ray<'a> =  Stream<'a> -> unit
type Pith<'a> = Ray<'a> -> unit
    
let most = Most.Core.require

let tree (deltac: Stream<'a>[] -> Stream<'b>) (mpith: Stream<Pith<'a>>): Stream<'b> =
    mpith |> most.map (A.tree deltac) |> most.switchLatest