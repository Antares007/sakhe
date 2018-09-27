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

module TimeLine =
    type T = private | TimeLine of (Time.T [] * Map<Time.T, IO.T<Time.T,O,unit>>)

    let private return' map =
        TimeLine
            ( map |> Map.toSeq |> Seq.map fst |> Seq.sort |> Seq.toArray
            , map)

    let private mergea l r =
        let ll = Array.length l
        let rl = Array.length r
        if ll = 0 then r
        else if rl = 0 then l
        else
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

    let inline private mergem l r =
        seq {
            yield! l |> Map.toSeq
                |> Seq.map (fun (lk, lv) ->
                            match Map.tryFind lk r with
                            | None -> (lk, lv)
                            | Some rv -> (lk, lv + rv))
            yield! r |> Map.toSeq
                |> Seq.filter (fun (k, _) -> not (l |> Map.containsKey k))
        } |> Map.ofSeq

    let inline merge (TimeLine (la, lm)) (TimeLine (ra, rm)) =
            TimeLine
                ( (mergea la ra)
                , (mergem lm rm) )

    let inline length (TimeLine (a, _)) = Array.length a

    let inline nextArrival (TimeLine (a, _)) = Array.head a

    let private findAppendPosition (a: 'a) (array: 'a[]) =
        let rec go l r =
            if l < r then
                let m = (l + r) / 2
                if array.[m] > a then go l m
                else go (m + 1) r
            else l - 1
        go 0 (Array.length array)

    let private add time io = io |> IO.contraMap (fun () -> time)

    let private toFlatTimeLineIORing io = IO.return' <| fun now o ->
        let o = O.proxy o
        let rec go io = IO.run now o (IO.pmap ring io)
        and ring p o = p <| function
            | Now (Scheduler io) -> go io
            | Delay (delay, (Scheduler io)) -> o <| (delay + now, io)
        go io

    let private runFlatTimeLineIO now io =
        let o =
            Map.empty |> O.return' (fun map (time, r) ->
                map |> match Map.tryFind time map with
                        | Some l -> Map.add time (l + r)
                        | None -> Map.add time r)
        IO.run now o io
        return' o.Value

    let inline runTo a tl =
        let (TimeLine (time, m)) = tl
        match findAppendPosition a time with
        | -1 -> Some tl
        | i ->
            let now = time.[0]
            let (b, m) =
                time
                |> Seq.skip 1
                |> Seq.take i
                |> Seq.fold
                    (fun (l, m: Map<_, _>) now ->
                        (l + (add now << toFlatTimeLineIORing <| m.[now])
                        , Map.remove now m))
                    (add now << toFlatTimeLineIORing <| m.[now], Map.remove now m)
            let l = TimeLine (time |> Seq.skip 1 |> Seq.toArray, m)
            let r = runFlatTimeLineIO () b
            let tl = merge l r
            if length tl = 0 then None else Some tl


    let inline from now (Scheduler io) =
        let o =
            Map.empty |> O.return' (fun map (time, r) ->
                map |> match Map.tryFind time map with
                        | Some l -> Map.add time (l + r)
                        | None -> Map.add time r)
        IO.run now o (toFlatTimeLineIORing io)
        let tl = return' o.Value
        if length tl = 0 then None else Some tl

let inline run tf timer io =
    let now = Time.zero
    let offSet = now - tf()
    let localTime () = tf() + offSet
    let settable = new Disposable.SettableDisposable()

    let rec nextRun now = function
        | None -> ()
        | Some timeline ->
            let nextArrival = TimeLine.nextArrival timeline
            let delay = Time.Delay.fromTo now nextArrival
            settable.Set << timer delay <| fun () ->
                let now = localTime ()
                let timeline = TimeLine.runTo now timeline
                nextRun now timeline

    nextRun now <| TimeLine.from now io
    settable

let see = return' <| fun t o ->

    o << O.delay 0 <| fun t o ->

        o << O.delay 10 <| fun t o ->
            ()


    o << O.now <| fun t o ->

        o << O.delay 11 <| fun t o ->
            ()
    ()

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token
let private tf () = Time.return' <| Fable.Import.Browser.performance.now ()





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
