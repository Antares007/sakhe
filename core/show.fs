module Sakhe.Show

module Play =
    open Fable.Import.Browser
    console.log "hello"
    Show.Old.Dom.run ()
    console.log (Some "1" = Some "1")
    console.log (Some "1" = Some "2")
    console.log (Some "1" = None)
    console.log ((None = None))

(*
module Disposable =
    open System
    let create f =
        let mutable disposed = false
        {new IDisposable with
            member __.Dispose () =
                if not disposed then
                    disposed <- true
                    f()}
*)
