module Sakhe.S.Disposable
open Fable.Core

type [<Erase>] T = private Disposable of (unit -> unit)

let empty = Disposable ignore

let return' f =
    let mutable disposed = false
    Disposable <| fun () ->
        if not disposed then
            disposed <- true
            f ()

let append (Disposable l) (Disposable r) = return' (fun () -> l(); r())

let dispose (Disposable f) = f ()
