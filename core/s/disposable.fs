module Sakhe.S.Disposable
open System

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
    let mutable disposable = None
    interface IDisposable with
        member __.Dispose () =
            if disposed then ()
            else
            disposed <- true
            if disposable.IsSome then disposable.Value.Dispose()
    member inline this.Dispose () = (this :> IDisposable).Dispose()

    member __.Set (d: IDisposable) =
        if disposable.IsSome then failwith "Settable already set"
        else
        disposable <- Some d
        if disposed then d.Dispose()



let empty = new AnonymousDisposable(ignore) :> IDisposable
let return' f = new AnonymousDisposable(f) :> IDisposable
let append (l: #IDisposable) (r: #IDisposable) = return' (fun () -> l.Dispose(); r.Dispose())

let inline dispose (d: IDisposable) = d.Dispose()

let appendArray (disposables: IDisposable []) = return' <| fun () ->
    let to' = Array.length disposables - 1
    for i = 0 to to' do disposables.[i].Dispose()
