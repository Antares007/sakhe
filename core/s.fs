module S
open Sakhe.M
open Fable.Import.Browser

let testPith (o: Ray<int>) = 
    o <| Value 1
    o <| Value 2
    o <| Value 3
    o <| Value 4

let b = tree (most.combineArray id) <| Value testPith

let c = tree most.mergeArray <| Value testPith

let drain b =
    most.runEffects (b |> most.tap console.log) (Most.Scheduler.require.newDefaultScheduler()) |> ignore

drain b
drain c

open Fable.Core
open System
open Fable.Core.JsInterop

type AddTimeProps = 
  abstract current : DateTime with get, set
  [<Emit("$0.specialAmount{{=$1}}")>]
  abstract amount : int with get, set
  abstract unit : string with get, set

let o = Fable.Core.JsInterop.createEmpty<AddTimeProps>
o.amount <- 1

[<Pojo>]
type Person = {
  name : string
  age  : int
}

let p = { name = "archil"; age = 42 }
let me = { p with name = "Zaid" }

type Person2 = 
  | Name of string
  | Age of int

let person2 = [ Name "Mike"; Age 35 ]
let mkPerson (p: Person2 list) = keyValueList CaseRules.LowerFirst p

let p2 = mkPerson person2
console.log p2