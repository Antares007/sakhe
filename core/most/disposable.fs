module Fable.Import.Most.Disposable
open Fable.Import.Most

type [<AllowNullLiteral>] IExports =
    abstract ``disposeNone``: unit -> Disposable
    abstract ``disposeWith``: ('a -> unit) -> 'a -> Disposable
    abstract ``disposeOnce``: Disposable -> Disposable
    abstract ``disposeBoth``: Disposable -> Disposable -> Disposable
    abstract ``disposeAll``: Disposable [] -> Disposable
    abstract ``dispose``: Disposable -> unit
    abstract ``tryDispose``: Time -> Disposable -> Sink<'a> -> unit
