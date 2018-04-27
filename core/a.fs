module Sakhe.A

type Ray<'a> = 'a -> unit
type Pith<'a> = Ray<'a> -> unit

let tree (deltac: 'a[] -> 'b) (pith: Pith<'a>) =
    let mutable lst = new ResizeArray<'a> ()
    let put a = lst.Add a
    pith put
    deltac (Array.ofSeq lst)
