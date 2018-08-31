module Sakhe.Show

module Play =
    open Fable.Import.Browser
    console.log "hello"
    console.log ("end!")

    window.addEventListener_popstate (fun e -> ())
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
