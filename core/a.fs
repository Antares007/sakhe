﻿module Sakhe.A

type Pith<'a> = private Pith of (('a -> unit) -> unit)
type DeltaC<'a, 'b> = private DeltaC of ('a list -> 'b)

let pith f = Pith f
let pmap f (Pith pith) = Pith (f pith)

let deltaC f = DeltaC f

let tree (DeltaC deltac) (Pith pith) =
    let mutable list = []
    pith (fun a -> list <- a :: list)
    deltac list
