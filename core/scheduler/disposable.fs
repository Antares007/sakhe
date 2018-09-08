module Most.Scheduler.Disposable

let empty = { new Disposable with member __.``dispose`` () = () }
let return' f =
    let mutable disposed = false
    { new Disposable with
        member __.``dispose`` () =
            if not disposed then
                disposed <- true
                f () }
let append (l: Disposable) (r: Disposable) = return' <| fun () ->
    l.dispose()
    r.dispose()
