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
    abstract Value<'a> : (unit -> 'a) * (obj -> bool) -> r: IStream<'a -> 'a> -> unit
open Dom2
open Fable.Import.Browser
open Fable.Core.JsInterop
console.log run

let private setKey (_: string) (_: 'a) (_: 'b): 'b = jsNative

let otree
    (pith: IStream<IObject -> unit>): IStream<obj -> obj> =
    let ring pith o =
        let mutable rMap = Map.empty<string, IStream<obj -> obj>>
        pith { new IObject with
        member __.ONode key r = failwith "ni"
        member __.ANode key r = failwith "ni"
        member __.Value key (absurd, prove) r =
            let r =
                M.map
                    (fun r o ->
                        let x = o?key
                        let oa = if prove x then (unbox x) else absurd ()
                        let na = r oa
                        setKey key na o
                    )
                    r
            rMap <- Map.add key r rMap
        }
        Map.iter (fun _ r -> o r) rMap

    let deltac xs =
        failwith "ni"

    M.tree deltac (M.map ring pith)

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
