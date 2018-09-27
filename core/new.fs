module Sakhe.Scheduler
open System
open Fable.Import
open Sakhe

type T =
    private
    | Scheduler of IO.T<Time.T, O, unit>
and O =
    private
    | Now of T
    | Delay of Time.Delay * T

let return' f = Scheduler << IO.return' <| f

let mappend (Scheduler l) (Scheduler r) =
    Scheduler <| IO.mappend (fun () () -> ()) l r

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)

let toFlatTimeLineIO now (Scheduler io) = IO.return' <| fun () o ->
    let o = O.proxy o
    let rec go io = IO.run now o (IO.pmap ring io)
    and ring p o = p <| function
        | Now (Scheduler io) -> go io
        | Delay (delay, io) -> o <| (delay + now, io)
    go io

let runFlatTimeLineIO io =
    let o =
        Map.empty |> O.return' (fun map (time, r) ->
            map |> match Map.tryFind time map with
                    | Some l -> Map.add time (mappend l r)
                    | None -> Map.add time r)
    IO.run () o io
    TimeLine.return' o.Value

let from now (io) =
    runFlatTimeLineIO <| toFlatTimeLineIO now io

let runTo now l =
    let (io, l) = l |> TimeLine.foldUntil now (fun l (now, r) ->
        IO.mappend (fun () () -> ()) l (toFlatTimeLineIO now r)) (IO.empty)
    let r = runFlatTimeLineIO io
    match l, r with
    | None, None -> None
    | Some l, None -> Some l
    | None, Some r -> Some r
    | Some l, Some r -> Some <| TimeLine.merge mappend l r

let inline run tf timer io =
    let now = Time.zero
    let offSet = now - tf()
    let settable = new Disposable.SettableDisposable()

    let rec nextRun now = function
        | None -> ()
        | Some timeline ->
            printfn "setTimeOut %A" now
            settable.Set << timer (Time.Delay.fromTo now (TimeLine.nextArrival timeline)) <| fun () ->
                let now = offSet + tf()
                printfn "timeOut %A" now
                nextRun now (runTo now timeline)

    nextRun now <| from now io
    settable :> IDisposable

let d = new Disposable.SettableDisposable()
let rec see () = return' <| fun t o ->
    printfn "1.now: %A" t

    o << O.now <| fun t o ->
        printfn "2.now %A" t

        o << O.delay 1000 <| fun t o ->
            printfn "3.delay 1000: %A" t
            d.Dispose()
            o << O.delay 1000 <| fun t o ->
                printfn "3.1.delay 1000: %A" t

    o << O.now <| fun t o ->
        printfn "4.now: %A" t

        o << O.delay 1000 <| fun t o ->
            printfn "5.delay 1000: %A" t
            o << O.delay 1000 <| fun t o ->
                printfn "5.1.delay 1000: %A" t


let private timer delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token
let private tf () = Time.return' <| System.Math.Floor (Fable.Import.Browser.performance.now())

d.Set <| run tf timer (see ())

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
