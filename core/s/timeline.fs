namespace Sakhe.S

open System.Collections.Generic
[<AutoOpen>]
module GenericListExtensions =
    open Fable.Core

    type System.Collections.Generic.List<'a> with
        [<Emit("$0.length")>]
        member __.``length``: int = jsNative

        [<Emit("$0.slice($1, $2)")>]
        member __.``slice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
        [<Emit("$0.slice($1)")>]
        member __.``slice`` (_: int): ResizeArray<'a> = jsNative

        [<Emit("$0.splice($1, $2)")>]
        member __.``splice`` ((_: int), (_: int)): ResizeArray<'a> = jsNative
        [<Emit("$0.splice($1, $2, $3)")>]
        member __.``splice`` ((_: int), (_: int), (_: 'a)): ResizeArray<'a> = jsNative

module Timeline =

    type IdRef = private Ref of int ref

    type SortedArray<'a> = private SortedArray of List<'a>
    type Slot<'a, 'b> = private Slot of SortedArray<'a> * Dictionary<'a, 'b>

    type T = private Timeline of Slot<Time.T, Slot<int, Task.T<unit>>> * int ref

    module SortedArray =
        let empty () = SortedArray <| ResizeArray()

        let init a =
            let arr = ResizeArray()
            arr.Add a
            SortedArray arr

        let inline findAppendPosition a (SortedArray array) =
            let rec go l r =
                if l < r then
                    let m = (l + r) / 2
                    if array.[m] > a then go l       m
                    else                  go (m + 1) r
                else l - 1
            go 0 (array.length)

        let inline readIndex i (SortedArray arr) =
            assert (0 <= i && i < arr.length)
            arr.[i]

        let inline splice start ``end`` (SortedArray array) =
            array.slice (start, ``end``)

        let inline append a (SortedArray arr) =
            assert (0 = arr.length || arr.[arr.length - 1] <= a)
            arr.Add(a)

        let inline insertAfter i a  (SortedArray arr) =
            assert (-1 <= i            && i < arr.length)
            assert (i = -1             || arr.[i]     <= a)
            assert (i = arr.length - 1 || arr.[i + 1] >  a)
            arr.splice (i + 1, 0, a) |> ignore

    module Slot =
        let inline empty () = Slot <| (SortedArray.empty(), Dictionary())

        let inline length (Slot (SortedArray array, _)) = array.length

        let inline findAppendPosition a (Slot (array, _)) = SortedArray.findAppendPosition a array

        let inline insertAfter i (a, b) (Slot (array, map)) =
            SortedArray.insertAfter i a array
            map.Add(a, b)

        let inline readIndex i (Slot (arr, map)) =
            let b = SortedArray.readIndex i arr
            (b, map.GetValueOrDefault b)

        let inline append (id, task) (Slot (ids, taskMap)) =
            SortedArray.append id ids
            taskMap.Add(id, task)

        let inline remove id (Slot (ids, taskMap)) =
            let index = SortedArray.findAppendPosition id ids
            assert (index <> -1 && id = SortedArray.readIndex index ids)
            taskMap.Remove(id) |> ignore
            SortedArray.splice index 1

    let empty () = Timeline <| (Slot.empty (), ref 0)

    let nextArrival (Timeline (slot, _)) =
        if Slot.length slot = 0 then Time.return' infinity else (fst (Slot.readIndex 0 slot))

    let add (time: Time.T) task (Timeline (tslot, id)) =
        let i = Slot.findAppendPosition time tslot
        let insertAfter i =
            let slot = Slot.empty ()
            Slot.append (id.Value, task) slot
            Slot.insertAfter i (time, (slot)) tslot
        if i = -1 then
            insertAfter i
        else
            let (itime, slot) = Slot.readIndex i tslot
            if itime = time then
                Slot.append (id.Value, task) slot
            else
                insertAfter i
        id.Value <- id.Value + 1

    // let removeTasks time (Timeline timeline) =
    //     let tasks = timeline.splice (0, findAppendPosition time timeline + 1)
    //     let length = tasks.length
    //     if length = 0 then None
    //     else
    //         let (_, firstTask) = tasks.[0]
    //         if length = 1 then Some firstTask
    //         else
    //         let rec go i acc =
    //             if i >= length then acc
    //             else go (i + 1) (Task.append acc (snd timeline.[i]))
    //         Some <| go 1 firstTask
