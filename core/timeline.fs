module Sakhe.TimeLine
open Sakhe
open System

type T<'a, 'b when 'a: comparison> =
    private
    | TimeLine of ('a [] * Map<'a, 'b>)

let fromPith mappend
    f =
    let o =
        fun m (a, b) ->
            match Map.tryFind a m with
            | None -> m |> Map.add a b
            | Some o -> m |> Map.add a (mappend o b)
        |> O.return' <| Map.empty
    Pith.run o f
    let line = o.Value |> Map.toSeq |> Seq.map fst |> Seq.sort |> Seq.toArray
    if Array.isEmpty line then None else Some<<TimeLine<| (line, o.Value)

let toPith
    (TimeLine (line, map))
    =
    Pith.return' <| fun o -> Array.iter (fun a -> o (a, map.[a])) line

let nextArrival
    (TimeLine (line, _))
    = line.[0]

let private findAppendPosition (a: 'a) (sortedArray: 'a[]) =
    let rec go l r =
        if l < r then
            let m = (l + r) / 2
            if sortedArray.[m] > a then go l m
            else go (m + 1) r
        else l - 1
    go 0 (Array.length sortedArray)

let takeUntil
    now tl =
    let (TimeLine (line, map)) = tl
    match findAppendPosition now line with
    | -1 -> (None, Some tl)
    | i when i = Array.length line - 1 -> (Some tl, None)
    | i ->
        let iplus1 = i + 1
        (
            Some << TimeLine <| (
                line |> Array.take iplus1,
                line |> Seq.take iplus1 |> Seq.map (fun a -> (a, map.[a])) |> Map.ofSeq
            ),
            Some << TimeLine <| (
                line |> Array.skip iplus1,
                line |> Seq.skip iplus1 |> Seq.map (fun a -> (a, map.[a])) |> Map.ofSeq
            )
        )

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

let private mergem mappend l r =
    seq {
        yield! l |> Map.toSeq
            |> Seq.map (fun (lk, lv) ->
                        match Map.tryFind lk r with
                        | None -> (lk, lv)
                        | Some rv -> (lk, mappend lv rv))
        yield! r |> Map.toSeq
            |> Seq.filter (fun (k, _) -> not (l |> Map.containsKey k))
    } |> Map.ofSeq

let mappend mappend (TimeLine (la, lm)) (TimeLine (ra, rm)) =
    TimeLine (mergea la ra, mergem mappend lm rm)
