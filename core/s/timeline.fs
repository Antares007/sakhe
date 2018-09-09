module Sakhe.S.Timeline
open Fable.Core
open System.Collections.Generic

type [<Erase>] T = private Timeline of List< (Time.T * Task.T<unit>) >

type private List<'a> with
    [<Emit("$0.length")>]
    member __.``length``: int = jsNative
    [<Emit("$0.splice($1, $2)")>]
    member __.``splice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
    [<Emit("$0.splice($1, $2, $3)")>]
    member __.``splice`` ((_: int), (_: int), (_: 'a)): ResizeArray<'a> = jsNative

let private findAppendPosition (a: 'a) (array: List<'a * 'b>) =
    let rec go l r =
        if l < r then
            let m = (l + r) / 2
            if fst array.[m] > a then go l m
            else go (m + 1) r
        else l - 1
    go 0 (array.length)

let empty () = Timeline <| ResizeArray()

let nextArrival (Timeline array) =
    if array.length = 0 then None else Some (fst array.[0])

let add time (task: unit Task.T) (Timeline array) =
    let i = findAppendPosition time array
    if i = -1 then array.splice(0, 0, (time, task)) |> ignore
    else
    let (iTime, iTask) = array.[i]
    if iTime = time then array.[i] <- (iTime, Task.append iTask task)
    else
    array.splice(i + 1, 0, (time, task)) |> ignore


let removeTasks time (Timeline array) =
    array.splice(0, findAppendPosition time array + 1)
    |> Seq.fold (fun acc (time, task) -> Task.append acc task) Task.empty
