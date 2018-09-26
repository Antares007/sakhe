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

module TimeLine =
    type T<'a, 'b when 'a: comparison> =
        private
        | TimeLine of ('a [] * Map<'a, 'b>)
    let return' map =
        TimeLine
            ( map |> Map.toSeq |> Seq.map fst |> Seq.sort |> Seq.toArray
            , map)

    let private mergea l r =
        let ll = Array.length l
        let rl = Array.length r
        if ll = 0 then r
        else if rl = 0 then l
        else
        let rezl = Math.Max (ll, rl)
        seq {
            for i = 0 to rezl - 1 do
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
            yield!
                Map.toSeq l
                |> Seq.map (fun (lk, lv) ->
                            match Map.tryFind lk r with
                            | None -> (lk, lv)
                            | Some rv -> (lk, lv + rv))
            yield! Map.toSeq r
                |> Seq.filter (fun (k, _) -> not (l |> Map.containsKey k))
        } |> Map.ofSeq
    let merge (TimeLine (la, lm)) (TimeLine (ra, rm)) =
            TimeLine
                ( (mergea la ra)
                , (mergem lm rm) )

let run now (Scheduler io) =
    let o =
        Map.empty |> O.return' (fun (map) (time, r) ->
            map |> match Map.tryFind time map with
                    | Some l -> Map.add time (mappend l r)
                    | None -> Map.add time r)
    let rec go io = IO.run now o (IO.pmap ring io)
    and ring p o = p <| function
        | Now (Scheduler io) -> go io
        | Delay (delay, (Scheduler io)) ->
            let now = Time.add delay now
            o <| (now, io |> IO.contraMap (fun () -> now))
    go io
    TimeLine.return' o.Value

let run2 tf io =
    let now = Time.zero
    let offSet = now - tf()
    let localTime () = tf() + offSet
    let mutable timeline = run now io
    timeline



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
