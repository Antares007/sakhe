module Sakhe.M

open Most

type M<'a> =
    | Value of 'a
    | OValue of Stream<'a>

type Ray<'a> = M<'a> -> unit
type Pith<'a> = Ray<'a> -> unit

    
let most = Most.Core.require

let tree (deltac: Stream<'a>[] -> Stream<'b>) (mpith: M<Pith<'a>>): Stream<'b> =
    let ring (pith: Pith<'a>) (ray: A.Ray<Stream<'a>>) = 
        pith (function Value v -> ray (most.now v) | OValue ov -> ray ov)
    let atree = A.tree deltac 
    match mpith with
    | Value pith -> atree (ring pith)
    | OValue opith -> opith |> most.map (ring >> atree) |> most.switchLatest
