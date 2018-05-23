module Sakhe.State
open Fable.Core
open Most
open Sakhe

type Pith<'a> = ('a -> unit) -> unit

type R<'a> = 'a option -> 'a

type RValue =
    | RString of  IStream<string R>
    | RNumber of  IStream<float R>
    | RBool   of  IStream<bool R>
    | RObject of  IStream<obj R>
    | RArray  of  IStream<obj [] R>

[<AutoOpen>]
module private Impl =
    [<Emit("typeof $0 === 'string' ? $0 : null")>]
    let asString (_: obj): string option = jsNative
    [<Emit("typeof $0 === 'number' ? $0 : null")>]
    let asNumber (_: obj): float option = jsNative
    [<Emit("typeof $0 === 'boolean' ? $0 : null")>]
    let asBool (_: obj): bool option = jsNative
    [<Emit("typeof $0 === 'object' && $0 != null ? $0 : null")>]
    let asObject (_: obj): obj option = jsNative
    [<Emit("Array.isArray($0) ? $0 : null")>]
    let asArray (_: obj): obj [] option = jsNative

    [<Emit("$2[$0] = $1")>]
    let setKey _ _ _: unit = jsNative

    [<Emit("$1[$0]")>]
    let getKey _ _: obj = jsNative

    [<Emit("Object.assign($0, $1)")>]
    let assignFrom (_: 'a) (_: 'a): 'a = jsNative

    let chain
        (absurd: unit -> 'o) (key:'k) (prove: obj -> 'a option) (r:'a option -> 'a) (o: 'o option): 'o =
        match o with
        | Some o ->
            let o = unbox o // emmits better js
            let x = getKey key o
            let a = r (prove x)
            if LanguagePrimitives.PhysicalEquality x (upcast a) then
                o
            else
                let oClone = assignFrom (absurd ()) o
                setKey key a oClone
                oClone
        | None ->
            let o = absurd ()
            let a = r None
            setKey key a o
            o
[<Emit("({})")>]
let absurdObj (): obj = jsNative
[<Emit("([])")>]
let absurdArray (): obj [] = jsNative

let rec objectTree (pith: IStream<Pith<string * RValue>>): IStream<R<obj>> =
    let ring (pith: Pith<string * RValue>) (o: IStream<R<obj>> -> unit): unit =
        pith <| function
        | key, RString r -> o (M.map (chain absurdObj key asString) r)
        | key, RNumber r -> o (M.map (chain absurdObj key asNumber) r)
        | key, RBool r -> o (M.map (chain absurdObj key asBool) r)
        | key, RObject r -> o (M.map (chain absurdObj key asObject)  r)
        | key, RArray r -> o (M.map (chain absurdObj key asArray) r)
    let deltac list = List.fold M.merge (M.empty ()) list
    M.tree deltac (M.map ring pith)

let aTree (pith: IStream<Pith<int * RValue>>): IStream<R<obj []>> =
    let ring (pith: Pith<int * RValue>) (o: IStream<R<obj []>> -> unit): unit =
        pith <| function
        | key, RString r -> o (M.map (chain absurdArray key asString) r)
        | key, RNumber r -> o (M.map (chain absurdArray key asNumber) r)
        | key, RBool r -> o (M.map (chain absurdArray key asBool) r)
        | key, RObject r -> o (M.map (chain absurdArray key asObject) r)
        | key, RArray r -> o (M.map (chain absurdArray key asArray) r)
    let deltac list = List.fold M.merge (M.empty ()) list
    M.tree deltac (M.map ring pith)

