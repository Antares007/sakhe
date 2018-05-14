module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A
open Fable.Core

type ILang<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : ((unit -> 'b) * (Node -> 'b option)) * Stream<ILang<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : ((unit -> 'b) * (Node -> 'b option)) * Stream<'b -> unit> -> unit
    abstract Patch: Stream<'a -> unit> -> unit

let private disposable = Most.Disposable.require

[<Emit("(function makeOnce (f) {
    var b
    return function once (a) {
        if (f) {
            b = f.call(this, a)
            f = null
        }
        return b
    }
})($0)")>]
let private once (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative

let rec tree<'a when 'a :> Element> (pith: Stream<ILang<'a> -> unit>): Stream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit): Pith<Stream<'a -> unit>> =
        fun o ->
            let mutable c = 0
            pith { new ILang<'a> with
                member __.Node ((absurdNode, prove): (unit -> 'b) * (Node -> 'b option) when 'b :> Node, pith) =
                    let index = c
                    c <- c + 1
                    tree pith |> most.map ((mkPatcher index (absurdNode, prove)) >> once)  |> o
                member __.Leaf (absurdProve, s) =
                    let index = c
                    c <- c + 1
                    s |> most.map ((mkPatcher index absurdProve) >> once) |> o
                member __.Patch (s) =
                    s |> most.map ((fun patch n -> patch n) >> once) |> o }
            o (most.now (once (fun element ->
                let childNodes = element.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    element.removeChild childNodes.[i]
                    |> ignore)))

    most.newStream (fun sink scheduler ->
        let mutable executed = false
        let restoreOldChilds = ref (disposable.disposeNone ())
        let s =
            M.tree (most.combineArray (fun ps (e: 'a) -> ps |> Array.iter (fun p -> p e))) (most.map ring pith)
            |> most.map (fun patch (element: 'a) ->
                if not executed then
                    executed <- true
                    let oldNodes = [| for i in [0 .. int element.childNodes.length - 1] -> element.childNodes.[i] |]
                    let restore () =
                        oldNodes
                            |> Array.fold (fun ref child -> element.insertBefore (child, ref) |> ignore; ref) element.childNodes.[0]
                            |> ignore
                        for i = oldNodes.Length to int element.childNodes.length - 1 do
                            element.removeChild element.childNodes.[i] |> ignore
                    restoreOldChilds := disposable.create restore
                patch element
            )
        let d1 = (most.run sink scheduler s).dispose
        let d2 = (!restoreOldChilds).dispose
        (d1 >> d2) |> once |> disposable.create
    )
