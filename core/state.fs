module Sakhe.State
open Fable.Core
open Sakhe
open M
open Fable

[<Fable.Core.Erase>]
type R<'a> = private R of ('a option -> 'a)

type RValue<'key> =
    | RString of  'key * Stream<string R>
    | RNumber of  'key * Stream<float R>
    | RBool   of  'key * Stream<bool R>
    | RObject of  'key * Stream<obj R>
    | RArray  of  'key * Stream<obj [] R>

module R =
    let set a = R <| fun _ -> a
    let update f = R f
    let apply s (R r) = Some (r s)

[<AutoOpen>]
module private Impl =
    [<Emit("({})")>]
    let absurdObj (): obj =
        jsNative
    [<Emit("([])")>]
    let absurdArray (): obj [] =
        jsNative

    [<Emit("typeof $0 === 'string' ? $0 : null")>]
    let asString (_: obj): string option =
        jsNative
    [<Emit("typeof $0 === 'number' ? $0 : null")>]
    let asNumber (_: obj): float option =
        jsNative
    [<Emit("typeof $0 === 'boolean' ? $0 : null")>]
    let asBool (_: obj): bool option =
        jsNative
    [<Emit("typeof $0 === 'object' && $0 != null ? $0 : null")>]
    let asObject (_: obj): obj option =
        jsNative
    [<Emit("Array.isArray($0) ? $0 : null")>]
    let asArray (_: obj): obj [] option =
        jsNative

    [<Emit("$2[$0] = $1")>]
    let setKey _ _ _: unit =
        jsNative

    [<Emit("$1[$0]")>]
    let getKey _ _: obj =
        jsNative

    [<Emit("Object.assign($0, $1)")>]
    let assignFrom (_: 'a) (_: 'a): 'a =
        jsNative

    let chain
        (absurd: unit -> 'o) (key:'k) (prove: obj -> 'a option) (R r) =
            R <| function
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

    let makeRing absurdObj pith o: unit =
        pith <| function
        | RString (key, r) -> o (map (chain absurdObj key asString) r)
        | RNumber (key, r) -> o (map (chain absurdObj key asNumber) r)
        | RBool (key, r) -> o (map (chain absurdObj key asBool) r)
        | RObject (key, r) -> o (map (chain absurdObj key asObject)  r)
        | RArray (key, r) -> o (map (chain absurdObj key asArray) r)
        ()

    let merge list =
        List.fold (fun a b -> merge b a) (empty ()) list

let oTree pith =
        (M.tree (A.DeltaC merge) (M.map (A.pmap (makeRing absurdObj)) pith))

let aTree pith =
        (M.tree (A.DeltaC merge) (M.map (A.pmap (makeRing absurdArray)) pith))
