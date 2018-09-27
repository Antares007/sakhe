module Sakhe.Disposable
open System
open Sakhe

type AnonymousDisposable(f) =
    let mutable disposed = false
    interface IDisposable with
        member __.Dispose () =
            if disposed then ()
            else
            disposed <- true
            f ()
type SettableDisposable() =
    let mutable disposed = false
    let mutable setted: IDisposable option = None
    interface IDisposable with
        member __.Dispose () =
            if disposed then ()
            else
            disposed <- true
            if setted.IsSome then setted.Value.Dispose()
    member __.Set (d: IDisposable) =
        if disposed then d.Dispose()
        else
        if setted.IsSome then setted.Value.Dispose()
        setted <- Some d
    member inline this.Dispose () = (this :> IDisposable).Dispose()


let empty = new AnonymousDisposable(ignore) :> IDisposable
let return' f = new AnonymousDisposable(f) :> IDisposable
let append (l: #IDisposable) (r: #IDisposable) = return' (fun () -> l.Dispose(); r.Dispose())

let inline dispose (d: IDisposable) = d.Dispose()

let appendArray (disposables: IDisposable []) = return' <| fun () ->
    let to' = Array.length disposables - 1
    for i = 0 to to' do disposables.[i].Dispose()
