module Sakhe.State

// type JValue =
//     | JString of string
//     | JNumber of float
//     | JBool   of bool
//     | JNull
//     | JObject of Map<string, JValue>
//     | JArray  of JValue list

open Fable.Core
open Most
open Sakhe

type T<'a> = (unit -> 'a) * (obj -> bool)

type IObject =
    abstract ONode: key: string -> IStream<IObject -> unit> -> unit
    abstract ANode: key: string -> IStream<IArray -> unit> -> unit
    abstract Value<'a> : key: string -> (unit -> 'a) * (obj -> bool) -> IStream<'a -> 'a> -> unit
and IArray =
    abstract ONode: IStream<IObject -> unit> -> unit
    abstract ANode: IStream<IArray -> unit> -> unit
    abstract Value<'a> : (unit -> 'a) * (obj -> bool) -> IStream<'a -> 'a> -> unit
open Dom2
open Fable.Import.Browser
open Fable.Core.JsInterop
console.log run

let private setKey (_: string) (_: 'a) (_: 'b): 'b = jsNative

let absurdObj () = createEmpty<obj>
let proveObj (_:obj) = true

let absurdArray (): obj[] = [||]
let proveArray (_:obj) = true

let rec otree
    (pith: IStream<IObject -> unit>): IStream<obj -> obj> =
    let ring pith o =
        pith { new IObject with
        member __.ONode key pith =
            o (
                key, absurdObj (), proveObj,
                otree pith |> M.map (fun r o ->
                    let x = o?key
                    let oa = if proveObj x then unbox x else absurdObj ()
                    let na = r oa
                    setKey key na o))
        member __.ANode key pith =
            o (
                key, absurdArray (), proveArray,
                atree pith |> M.map (fun r o ->
                    let x = o?key
                    let oa = if proveObj x then unbox x else absurdArray ()
                    let na = r oa
                    setKey key na o))
        member __.Value key (absurd, prove) r =
            o (
                key, absurd () :> obj, prove,
                r |> M.map (fun r o ->
                    let x = o?key
                    let oa = if prove x then (unbox x) else absurd ()
                    let na = r oa
                    setKey key na o))
        }

    let deltac (xs: (string * obj * (obj -> bool) * IStream<obj -> obj>) list) =
        Seq.groupBy (fun (key, _, _, _) -> key) xs
            |> Seq.fold
                (fun rez grp ->
                    Seq.fold
                        (fun (prevR, prevProve) (_, a, prove, r) ->
                            if prevProve a then
                                (M.merge prevR r, prove)
                            else
                                (prevR, prevProve))
                        (M.empty (), (fun _ -> true))
                        (snd grp)
                    |> fst
                    |> M.merge rez)
                (M.empty ())

    M.tree deltac (M.map ring pith)
and atree (pith: IStream<IArray -> unit>): IStream<obj [] -> obj []> =
    failwith "ni"

let o = [||] :> obj

// type [<Pojo>] Person =
//     {name: string; age: float}
//     static member Absurd () = {name = "a"; age = 42.}

// let person = {name = "Archil"; age = 42.}
// let zero = Person.Absurd ()

// let o: IObject = unbox false

// o.Value
//     "a"
//     (
//         (fun () -> {name="a"; age = 42.}),
//         (fun o -> true),
//         (M.now (fun x -> {x with age = 43.}))
//     )
// let o = JObject (Map.ofList ["a", JNull; "b", JBool true; "c", JObject (Map.ofList ["a", JNull; "b", JBool true])])
