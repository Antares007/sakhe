module Fable.Import.Most.Disposable
open Fable.Import.Most

type [<AllowNullLiteral>] IExports =
    abstract ``disposeNone``: unit -> Disposable
    // abstract ``disposeWith``: dispose: ('R -> unit) * resource: 'R -> Disposable
    abstract ``disposeWith``: dispose: ('R -> unit) * 'R -> Disposable
    abstract ``disposeOnce``: d: Disposable -> Disposable
    abstract ``disposeBoth``: d1: Disposable * d2: Disposable -> Disposable
    abstract ``disposeBoth``: d1: Disposable -> (Disposable -> Disposable)
    abstract ``disposeAll``: ds: Disposable [] -> Disposable
    abstract ``dispose``: d: Disposable -> unit
    abstract ``tryDispose``: t: Time * disposable: Disposable * sink: Sink<obj option> -> unit
    abstract ``tryDispose``: t: Time -> (Disposable -> Sink<obj option> -> unit)
    abstract ``tryDispose``: t: Time * disposable: Disposable -> (Sink<obj option> -> unit)
