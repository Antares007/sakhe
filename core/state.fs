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


[<Emit("(function makeOnce (f) {
    var b
    return function onceAtoBtoAtoB (a) {
        if (f) {
            b = f.call(this, a)
            f = null
        }
        return b
    }
})($0)")>]
let inline private once (_: 'a -> 'b): 'a -> 'b = Exceptions.jsNative

let private setKey (_: string) (_: 'a) (_: 'b): 'b = jsNative

let otree
    (pith: IStream<IObject -> unit>): IStream<obj -> obj> =
    let ring pith o =
        pith { new IObject with
        member __.ONode key r = failwith "ni"
        member __.ANode key r = failwith "ni"
        member __.Value key (absurd, prove) r =
            o (
                key, absurd () :> obj, prove,
                M.map
                    (fun r o ->
                        let x = o?key
                        let oa = if prove x then (unbox x) else absurd ()
                        let na = r oa
                        setKey key na o
                    )
                    r
            )
        }

    let deltac (xs: (string * obj * (obj -> bool) * IStream<obj -> obj>) list) =
        List.groupBy (fun (key, _, _, _) -> key) xs
            |> Seq.map (fun grp ->
                Seq.fold
                    (fun (prevR, prevProve) (_, a, prove, r) ->
                        if prevProve a then
                            (M.merge prevR r, prove)
                        else
                            (prevR, prevProve)
                    )
                    (M.empty (), (fun _ -> true))
                    (snd grp)
                |> fst)
            |> Seq.fold (fun ls rs -> M.combine (fun l r -> r :: l) ls (M.map once rs)) (M.now [])
            |> M.map (fun reducers o -> o)

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
