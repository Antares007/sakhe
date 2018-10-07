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
    Array.ofSeq <| seq {
        let ll = Array.length l
        let rl = Array.length r
        let mutable li = 0;
        let mutable ri = 0;
        while (li < ll && ri < rl) do
            let le = l.[li]
            let re = r.[ri]
            if (le < re) then yield le; li <- li + 1
            else if (le > re) then yield re; ri <- ri + 1
            else yield le; li <- li + 1; ri <- ri + 1
        while (li < ll) do yield l.[li]; li <- li + 1
        while (ri < rl) do yield r.[ri]; ri <- ri + 1
    }

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
