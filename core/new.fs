module Sakhe.Scheduler
open System
open Fable.Core
open Fable.Import
open Sakhe

type [<Erase>] T =
    private
    | Scheduler of IO.T<Time.T, O, unit>
    static member inline (+) ((Scheduler l), (Scheduler r)) = Scheduler <| l + r
and O =
    private
    | Now of T
    | Delay of Time.Delay * T
    //| Periodic of Time.Delay * T

let return' f = Scheduler << IO.return' <| f

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)

type TimeLine = private | TimeLine of (Time.T [] * Map<Time.T, T>)

module TimeLine =

    [<AutoOpen>]
    module private Private =
        let return' timeMap =
            let timeLine = timeMap |> Map.toSeq |> Seq.map fst |> Seq.sort |> Seq.toArray
            if Array.length timeLine = 0 then None
            else Some <| TimeLine (timeLine, timeMap)

        let mergea l r =
            let ll = Array.length l
            let rl = Array.length r
            let to' = Math.Max (ll, rl) - 1
            seq {
                for i = 0 to to' do
                    match (if i < ll then Some (l.[i]) else None), if i < rl then Some (r.[i]) else None with
                    | None, None -> ()
                    | Some l, None -> yield l
                    | None, Some r -> yield r
                    | Some l, Some r when l < r -> yield l; yield r
                    | Some l, Some r when l > r -> yield r; yield l
                    | Some l, Some _ -> yield l
            } |> Seq.toArray

        let inline mergem l r =
            seq {
                yield! l |> Map.toSeq
                    |> Seq.map (fun (lk, lv) ->
                                match Map.tryFind lk r with
                                | None -> (lk, lv)
                                | Some rv -> (lk, lv + rv))
                yield! r |> Map.toSeq
                    |> Seq.filter (fun (k, _) -> not (l |> Map.containsKey k))
            } |> Map.ofSeq

        let findAppendPosition (a: 'a) (array: 'a[]) =
            let rec go l r =
                if l < r then
                    let m = (l + r) / 2
                    if array.[m] > a then go l m
                    else go (m + 1) r
                else l - 1
            go 0 (Array.length array)

        let toFlatTimeLineIORing now (Scheduler io) = IO.return' <| fun () o ->
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
                            | Some l -> Map.add time (l + r)
                            | None -> Map.add time r)
            IO.run () o io
            return' o.Value

    let nextArrival (TimeLine (a, _)) = Array.head a

    let foldUntil now f s tl =
        let (TimeLine (timeLine, timeMap)) = tl
        match findAppendPosition now timeLine with
        | -1 -> (s, Some tl)
        | i ->
            let rl = i + 1
            if rl = Array.length timeLine then (timeLine |> Seq.take (i + 1) |> Seq.fold f s, None)
            else
            let tl = TimeLine (timeLine |> Array.skip (rl)
                             , timeLine |> Seq.skip (rl) |> Seq.map (fun now -> (now, timeMap.[now])) |> Map.ofSeq)
            (s, Some tl)


    let merge (TimeLine (la, lm)) (TimeLine (ra, rm)) =
        TimeLine
            ( (mergea la ra)
            , (mergem lm rm) )

    let from now (io) =
        runFlatTimeLineIO <| toFlatTimeLineIORing now io

    let runTo now timeline =
        None


let inline run tf timer io =
    let now = Time.zero
    let offSet = now - tf()
    let settable = new Disposable.SettableDisposable()

    let rec nextRun now = function
        | None -> ()
        | Some timeline ->
            settable.Set << timer (Time.Delay.fromTo now (TimeLine.nextArrival timeline)) <| fun () ->
                let now = offSet + tf()
                nextRun now (TimeLine.runTo now timeline)

    nextRun now <| TimeLine.from now io
    settable :> IDisposable

let see = return' <| fun t o ->
    printfn "1.now: %A" t
    o << O.delay 0 <| fun t o ->
        printfn "2.delay 0: %A" t
        o << O.delay 1000 <| fun t o ->
            printfn "3.delay 1000: %A" t

    o << O.now <| fun t o ->
        printfn "4.now: %A" t
        o << O.now <| fun t o ->
            printfn "5.now: %A" t
        o << O.delay 11 <| fun t o ->
            printfn "6.delay: %A" t


let private timer delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token
let private tf () = Time.return' <| System.Math.Floor (Fable.Import.Browser.performance.now())

let d = run tf timer see
d |> ignore

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
