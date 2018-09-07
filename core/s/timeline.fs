namespace Sakhe.S

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
    type Time = Time.T

    type T = private Timeline of ResizeArray<Time * Task.T<unit>>

    let private findAppendPosition (time: Time) (a: ResizeArray<Time * 'a>) =
        let rec go l r =
            if l < r then
                let m = (l + r) / 2
                if fst a.[m] > time then go l       m
                else                     go (m + 1) r
            else l - 1
        go 0 (a.length)

    let empty () = Timeline <| ResizeArray()

    let add time task (Timeline timeline) =
        let i = findAppendPosition time timeline
        if i = -1 then timeline.splice (0, 0, (time, task)) |> ignore
        else
        let (iTime, iTask) = timeline.[i]
        if iTime = time then timeline.[i] <- (time, Task.append iTask task)
        else timeline.splice (i + 1, 0, (time, task)) |> ignore

    let removeTasks time (Timeline timeline) =
        let tasks = timeline.splice (0, findAppendPosition time timeline + 1)
        let length = tasks.length
        if length = 0 then None
        else
            let (_, firstTask) = tasks.[0]
            if length = 1 then Some firstTask
            else
            let rec go i acc =
                if i >= length then acc
                else go (i + 1) (Task.append acc (snd timeline.[i]))
            Some <| go 1 firstTask
