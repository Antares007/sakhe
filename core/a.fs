module Sakhe.A

type Ray<'a> = 'a -> unit
type Pith<'a> = Ray<'a> -> unit

let tree deltac pith =
    let mutable list = []
    pith (fun a -> list <- a :: list)
    deltac list
