module Sakhe.Scheduler
open System
open Fable.Core
open Fable.Import
open Sakhe
open System.Collections.Generic
open System.Collections.Generic

type [<Erase>] T = private Scheduler of IO.T<Time.T, O, unit>
and O =
    private
    | Now of T
    | Delay of Time.Delay * T
    //| Periodic of Time.Delay * T

let return' f = Scheduler << IO.return' <| f

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)
    //let periodic delay f = Periodic (Time.Delay.return' delay, return' f)

let private mappend l r = IO.return' <| fun i o ->
    let o = O.proxy o
    IO.run i o l
    IO.run i o r

let run now (Scheduler io) =
    let o =
        Map.empty |> O.return' (fun (map) (delay, io) ->
            map |> match Map.tryFind delay map with
                    | Some io2 -> Map.add delay (mappend io io2)
                    | None -> Map.add delay io)
    let rec go io = IO.run now o (IO.pmap ring io)
    and ring p o = p <| function
        | Now (Scheduler io) -> go io
        | Delay (delay, (Scheduler io)) ->
            if delay = Time.Delay.zero then go io
            else o <| (Time.add delay now, io)
    go io
    o.Value |> Map.toSeq |> Seq.sortBy fst |> ResizeArray

open Fable.Core.JsInterop
type private List<'a> with
    member inline a.``length``: int = !!a?length
    member inline a.``splice`` (s: int, e: int): ResizeArray<'a> = !!a?splice(s, e)
    member inline a.``splice`` (s: int, e: int, v: 'a): ResizeArray<'a> = !!a?splice(s, e, v)

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let run2 now io =
    let timeline = run now io
    if timeline.length = 0 then Disposable.empty
    else
    let (time, io) = timeline.splice(0, 1).[0]
    let delay = Time.Delay.fromTo now time
    setTask delay <| fun () ->
        ()



let see = return' <| fun t o ->

    o << O.delay 0 <| fun t o ->

        o << O.delay 10 <| fun t o ->
            ()


    o << O.now <| fun t o ->

        o << O.delay 11 <| fun t o ->
            ()
    ()

let rez = run Time.zero see
printfn "%A" rez



// open Fable.Core.JsInterop
// type private List<'a> with
//     member inline a.``length``: int = !!a?length
//     member inline a.``splice`` (s: int, e: int): ResizeArray<'a> = !!a?splice(s, e)
//     member inline a.``splice`` (s: int, e: int, v: 'a): ResizeArray<'a> = !!a?splice(s, e, v)


// type InputLine<'i, 'o when 'i : comparison>() =
//     let array: List<'i * IO.T<'i, 'o, unit>> = ResizeArray()
//     let findAppendPosition a =
//         let rec go l r =
//             if l < r then
//                 let m = (l + r) / 2
//                 if fst array.[m] > a then go l m
//                 else go (m + 1) r
//             else l - 1
//         go 0 (array.length)
//     let mappend l r = IO.return' <| fun i o ->
//         let o = O.proxy o
//         IO.run i o l
//         IO.run i o r
//     member __.NextArrival =
//         if array.length = 0 then None else Some (fst array.[0])

//     member __.Add time task =
//         let i = findAppendPosition time
//         if i = -1 then array.splice(0, 0, (time, task)) |> ignore
//         else
//         let (iTime, iTask) = array.[i]
//         if iTime = time then array.[i] <- (iTime, mappend iTask task)
//         else
//         array.splice(i + 1, 0, (time, task)) |> ignore

//     member __.RemoveTasks time =
//         array.splice(0, findAppendPosition time + 1)
//         |> Seq.map snd
//         |> Seq.fold mappend IO.empty
