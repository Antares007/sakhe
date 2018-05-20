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
type T<'a> = (unit -> 'a) * (obj -> bool)

type IObject =
    abstract ONode: key: string -> (IObject -> unit) -> unit
    abstract ANode: key: string -> (IArray -> unit) -> unit
    abstract Value<'a> : key: string -> (unit -> 'a) * (obj -> bool) * IStream<'a -> 'a> -> unit
and IArray =
    abstract ONode: (IObject -> unit) -> unit
    abstract ANode: (IArray -> unit) -> unit
    abstract Value<'a> : t: T<'a> * r: IStream<'a -> 'a> -> unit


type [<Pojo>] Person =
    {name: string; age: float}
    static member Absurd () = {name = "a"; age = 42.}

let person = {name = "Archil"; age = 42.}
let zero = Person.Absurd ()

let o: IObject = unbox false

o.Value
    "a"
    (
        (fun () -> {name="a"; age = 42.}),
        (fun o -> true),
        (M.now (fun x -> x))
    )


let obj: obj =
    Fable.Core.JsInterop.createEmpty

let p =
    { name = "Archil"; age = 42. }
// let o = JObject (Map.ofList ["a", JNull; "b", JBool true; "c", JObject (Map.ofList ["a", JNull; "b", JBool true])])
