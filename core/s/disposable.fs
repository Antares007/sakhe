module Sakhe.S.Disposable
open Fable.Core
open Sakhe.S

type [<Erase>] T = private Disposable of (unit -> unit)

let empty = Disposable ignore

let return' f =
    let mutable disposed = false
    Disposable <| fun () ->
        if not disposed then
            disposed <- true
            f ()

let append (Disposable l) (Disposable r) = return' (fun () -> l(); r())

let inline dispose (Disposable f) = f ()

let appendArray disposables = return' <| fun () ->
    let to' = Array.length disposables - 1
    for i = 0 to to' do dispose disposables.[i]
