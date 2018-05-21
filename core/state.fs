module Sakhe.State
open Most
open Sakhe
open Fable.Core
open Fable.Core.JsInterop

type R<'a> = 'a option -> 'a

type IJValueRay =
    abstract JString:   IStream<string R> -> unit
    abstract JNumber:   IStream<float R> -> unit
    abstract JBool:     IStream<bool R> -> unit
    abstract JObject:   IStream<(string -> IJValueRay) -> unit> -> unit
    abstract JArray:    IStream<IJValueRay -> unit> -> unit

[<Emit("Object.assign($2(), $3, {[$0]: $1})")>]
let assignKey (_: 'k) (_: 'v) (_: unit -> 'o) (_: 'o): 'o = jsNative

let chain (key: 'k) (absurd: unit -> 'o) (prove: obj -> bool) (r: R<'a>) (o: 'o option): 'o =
    match o with
    | Some o ->
        let x: obj = !!o?(key)
        assignKey key (r (if prove x then Some (x :?> 'a) else None)) absurd o
    | None ->
        assignKey key (r None) absurd (absurd ())

[<Emit("({})")>]
let absurdObj (): obj = jsNative

[<Emit("([])")>]
let absurdArray (): obj [] = jsNative

[<Emit("typeof $0 === 'string'")>]
let private isString (_: 'o) = jsNative

[<Emit("typeof $0 === 'number'")>]
let private isNumber (_: 'o) = jsNative

[<Emit("typeof $0 === 'boolean'")>]
let private isBool   (_: 'o) = jsNative

[<Emit("typeof $0 === 'object' && $0 != null")>]
let private isObject (_: 'o) = jsNative

[<Emit("Array.isArray($0)")>]
let private isArray (_: 'o) = jsNative

let rec oTree (pith: IStream<(string -> IJValueRay) -> unit>): IStream<obj R> =
    let ring (pith: (string -> IJValueRay) -> unit) (o: IStream<obj R> -> unit): unit =
        pith <| fun key -> { new IJValueRay with
            member __.JString r = o (M.map (chain key absurdObj isString) r)
            member __.JNumber r = o (M.map (chain key absurdObj isNumber) r)
            member __.JBool   r = o (M.map (chain key absurdObj isBool) r)
            member __.JObject r = o (M.map (chain key absurdObj isObject) (oTree r))
            member __.JArray  r = o (M.map (chain key absurdObj isArray) (aTree r)) }
    let deltac list = List.fold M.merge (M.empty ()) list
    M.tree deltac (M.map ring pith)

and aTree (pith: IStream<IJValueRay -> unit>): IStream<(obj []) R> =
    let ring (pith: IJValueRay -> unit) (o: IStream<(obj []) R> -> unit): unit =
        let mutable c = 0
        let cpp () =
                let index = c
                c <- c + 1
                index
        pith { new IJValueRay with
            member __.JString r = cpp() |> (fun key -> o (M.map (chain key absurdArray isString) r))
            member __.JNumber r = cpp() |> (fun key -> o (M.map (chain key absurdArray isNumber) r))
            member __.JBool   r = cpp() |> (fun key -> o (M.map (chain key absurdArray isBool) r))
            member __.JObject r = cpp() |> (fun key -> o (M.map (chain key absurdArray isObject) (oTree r)))
            member __.JArray  r = cpp() |> (fun key -> o (M.map (chain key absurdArray isArray) (aTree r))) }
    let deltac list = List.fold M.merge (M.empty ()) list
    M.tree deltac (M.map ring pith)
