[<AutoOpen>]
module Sakhe.Scheduler.GenericListExtensions
open Fable.Core
type System.Collections.Generic.List<'a> with
    [<Emit("$0.length")>]
    member __.``length``: int = jsNative

    [<Emit("$0.slice($1, $2)")>]
    member __.``slice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
    [<Emit("$0.slice($1)")>]
    member __.``slice`` (_: int): ResizeArray<'a> = jsNative

    [<Emit("$0.splice($1, $2)")>]
    member __.``splice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
    [<Emit("$0.splice($1, $2, $3)")>]
    member __.``splice`` ((_: int), (_: int), (_: 'a)): ResizeArray<'a> = jsNative
