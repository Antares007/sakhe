module Sakhe.S.Clock

type T = private Clock of (unit -> Time.T)

let return' f = Clock f

let now (Clock f) = f()
