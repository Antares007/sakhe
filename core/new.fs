module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A
open Fable.Core

type ILang<'a when 'a :> Element> =
    abstract Node<'b when 'b :> Element> : AbsurdProve<'b> * Stream<ILang<'b> -> unit>  -> unit
    abstract Leaf<'b when 'b :> CharacterData> : AbsurdProve<'b> * Stream<'b -> unit> -> unit
    abstract Patch: Stream<'a -> unit> -> unit

let private disposable = Most.Disposable.require

[<Emit("[...$0]")>]
let private toArray (_: NodeList): Node [] = Exceptions.jsNative

let rec tree<'a when 'a :> Element> (pith: Stream<ILang<'a> -> unit>): Stream<'a -> unit> =
    let ring (pith: ILang<'a> -> unit): Pith<Stream<'a -> unit>> =
        fun o ->
            let mutable c = 0
            pith { new ILang<'a> with
                member __.Node (absurdProve, pith) =
                    let index = c
                    c <- c + 1
                    tree pith |> most.map (mkPatcher index absurdProve)  |> o
                member __.Leaf (absurdProve, s) =
                    let index = c
                    c <- c + 1
                    s |> most.map (mkPatcher index absurdProve) |> o
                member __.Patch (s) =
                    s |> most.map (fun patch n -> patch n) |> o }
            o (most.now (fun element ->
                let childNodes = element.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    element.removeChild childNodes.[i]
                    |> ignore))

    most.newStream (fun sink scheduler ->
        let mutable executed = false
        let restoreOldChilds = ref (disposable.disposeNone ())
        let s =
            M.tree (most.combineArray (fun ps -> fun (e: 'a) -> ps |> Array.iter (fun p -> p e))) (most.map ring pith)
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
        disposable.disposeOnce
            (disposable.disposeAll [|
                (most.run sink scheduler s)
                disposable.create (fun _ ->
                    console.log "dispose"
                    (!restoreOldChilds).dispose()
                )
            |])
    )
