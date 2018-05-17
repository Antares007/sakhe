module Sakhe.A

let tree deltac pith =
    let mutable list = []
    pith (fun a -> list <- a :: list)
    deltac list
