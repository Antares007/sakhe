module Sakhe.S.Clock
open Fable.Core

type [<Erase>] T = private Clock of (unit -> Time.T)

let return' f = Clock f

let now (Clock f) = f()
