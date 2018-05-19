module Sakhe.State

// type JValue =
//     | JString of string
//     | JNumber of float
//     | JBool   of bool
//     | JNull
//     | JObject of Map<string, JValue>
//     | JArray  of JValue list

open Fable.Core

type IObject =
    abstract ONode: int -> unit
    abstract ANode: int -> unit
    abstract Value: int -> unit

type [<Pojo>] Person =
    {name: string; age: float}

let obj: obj =
    Fable.Core.JsInterop.createEmpty

let p =
    { name = "Archil"; age = 42. }
// let o = JObject (Map.ofList ["a", JNull; "b", JBool true; "c", JObject (Map.ofList ["a", JNull; "b", JBool true])])
