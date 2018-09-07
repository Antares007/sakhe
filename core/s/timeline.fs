namespace Sakhe.S
open Fable.Core
open System.Collections.Generic

[<AutoOpen>]
module GenericListExtensions =
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
    type [<Erase>] IdRef = private Ref of int ref

    type [<Erase>] SortedArray<'a> = private SortedArray of List<'a>

    type Slot<'a, 'b> = private Slot of SortedArray<'a> * Dictionary<'a, 'b>

    type T = private Timeline of Slot<Time.T, Slot<int, Task.T<unit>>> * int ref

    module SortedArray =
        let empty () = SortedArray <| ResizeArray()
        let init a =
            let arr = ResizeArray()
            arr.Add a
            SortedArray arr

        let findAppendPosition a (SortedArray array) =
            let rec go l r =
                if l < r then
                    let m = (l + r) / 2
                    if array.[m] > a then go l m
                    else go (m + 1) r
                else l - 1
            go 0 (array.length)

        let readIndex i (SortedArray arr) =
            assert (0 <= i && i < arr.length)
            arr.[i]

        let splice start ``end`` (SortedArray array) =
            assert (start <= ``end``)
            assert (0 <= start)
            assert (``end`` < array.length)
            array.slice (start, ``end``)

        let append a (SortedArray arr) =
            assert (0 = arr.length || arr.[arr.length - 1] <= a)
            arr.Add(a)

        let insertAfter i a (SortedArray arr) =
            assert (-1 <= i && i < arr.length)
            assert (i = -1 || arr.[i] <= a)
            assert (i = arr.length - 1 || arr.[i + 1] > a)
            arr.splice (i + 1, 0, a) |> ignore

        let length (SortedArray array) = array.length


    module Slot =
        let empty () = Slot <| (SortedArray.empty(), Dictionary())

        let length (Slot (array, _)) = SortedArray.length array

        let findAppendPosition a (Slot (array, _)) = SortedArray.findAppendPosition a array

        let insertAfter i (a, b) (Slot (array, map)) =
            SortedArray.insertAfter i a array
            map.Add(a, b)

        let readIndex i (Slot (arr, map)) =
            let key = SortedArray.readIndex i arr
            (key, map.Item key)

        let append (id, task) (Slot (ids, taskMap)) =
            SortedArray.append id ids
            taskMap.Add(id, task)

        let splice start ``end`` (Slot (array, map)) =
            let keys = SortedArray.splice start ``end`` array
            keys
            |> Seq.map (fun key ->
                let item = map.Item key
                map.Remove key|> ignore
                (key, item))
            |> Seq.toArray


    let empty () = Timeline <| (Slot.empty (), ref 0)

    let isEmpty (Timeline (slot, _)) = Slot.length slot = 0

    let nextArrival (Timeline (slot, _)) =
        if Slot.length slot = 0 then Time.return' infinity else (fst (Slot.readIndex 0 slot))

    let add (time: Time.T) task (Timeline (timeSlot, idref)) =
        let id = idref.Value
        idref.Value <- id + 1

        let insertTask
            taskSlot =
            Slot.append (id, task) taskSlot
            Disposable.return' <| fun () ->
                Slot.splice (Slot.findAppendPosition id taskSlot) 1 taskSlot |> ignore

        let insertTime
            i =
            let taskSlot = Slot.empty()
            Slot.insertAfter i (time, (taskSlot)) timeSlot
            taskSlot

        let i = Slot.findAppendPosition time timeSlot
        if i = -1 then
            insertTask (insertTime i)
        else
            let (key, taskSlot) = Slot.readIndex i timeSlot
            if key = time then
                insertTask taskSlot
            else
                insertTask (insertTime i)

    let removeTasks time (Timeline (slot, _)) =
        Slot.splice 0 (Slot.findAppendPosition time slot + 1) slot
        |> Seq.fold
            (fun task (time, Slot (SortedArray ids, map)) ->
                Task.append
                    task
                    (Seq.fold (fun task id -> Task.append task (map.Item id)) Task.empty ids))
            Task.empty
