module Sakhe.TimeLine
open System

type T<'a, 'b when 'a: comparison> = private | TimeLine of ('a [] * Map<'a, 'b>)
let return' map =
    let line = map |> Map.toSeq |> Seq.map fst |> Seq.sort |> Seq.toArray
    if Array.isEmpty line then None
    else Some <| TimeLine (line, map)

let nextArrival (TimeLine (a, _)) = Array.head a

let private findAppendPosition (a: 'a) (sortedArray: 'a[]) =
    let rec go l r =
        if l < r then
            let m = (l + r) / 2
            if sortedArray.[m] > a then go l m
            else go (m + 1) r
        else l - 1
    go 0 (Array.length sortedArray)

let foldUntil now f s tl =
    let (TimeLine (timeLine, timeMap)) = tl
    match findAppendPosition now timeLine with
    | -1 -> (s, Some tl)
    | i ->
        let iPlus1 = i + 1
        let tl =
            if iPlus1 = Array.length timeLine then None
            else Some << TimeLine <| (
                  timeLine |> Array.skip (iPlus1)
                , timeLine |> Seq.skip (iPlus1) |> Seq.map (fun now -> (now, timeMap.[now])) |> Map.ofSeq)
        let s = timeLine |> Seq.take (iPlus1) |> Seq.map (fun now -> (now, timeMap.[now])) |> Seq.fold f s
        s, tl

let private mergea l r =
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

let inline private mergem mappend l r =
    seq {
        yield! l |> Map.toSeq
            |> Seq.map (fun (lk, lv) ->
                        match Map.tryFind lk r with
                        | None -> (lk, lv)
                        | Some rv -> (lk, mappend lv rv))
        yield! r |> Map.toSeq
            |> Seq.filter (fun (k, _) -> not (l |> Map.containsKey k))
    } |> Map.ofSeq

let inline merge mappend (TimeLine (la, lm)) (TimeLine (ra, rm)) =
    TimeLine (mergea la ra, mergem mappend lm rm)
