module Sakhe.S.Clock
open Fable.Core
type [<Erase>] Offset = private Offset of float
type [<Erase>] T = private Clock of ((unit -> Time.T))

let return' f  = Clock (f)

let now (Clock f) = f()
