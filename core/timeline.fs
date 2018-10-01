module Sakhe.TimeLine
open System
open Sakhe

type T<'a, 'b, 'c> =
    private
    | TimeLine of ('a * ('b * 'c) list) list
    | Abo of Abo.T<unit, unit, (('a * 'b) * 'c)>

let return' a io =
    let o =
        fun m ((a, b), c) ->
            match Map.tryFind a m with
            | None -> m |> Map.add a [b, c]
            | Some o -> m |> Map.add a ((b, c)::o)
        |> O.return' <| Map.empty
    Abo.run a o io
    if o.Value.Count = 0
    then None
    else Some<<TimeLine<<(Seq.fold (fun l a -> a::l) [])<<Seq.sortBy fst<<Map.toSeq<|o.Value

let private toAbo = function
    | TimeLine l ->
        let see = Abo.return' <| fun () ->
            let rec go f = function [] -> () | h::t -> f (h); go f t
            let mutable g = fun o -> ()
            fun (a, l) ->
                fun (b, c) ->
                    let f = g
                    g <- fun o ->
                        o ((a, b),c)
                        f o
                |> go <| l
            |> go <| l
            fun o -> g o
        see
    | Abo abo -> abo

let takeUntil now = function
    | TimeLine tl ->

let rec mappend l r =
    match l, r with
    | TimeLine _, Abo _ -> mappend (Abo <| toAbo l) r
    | Abo _, TimeLine _ -> mappend l (Abo <| toAbo r)
    | Abo l, Abo r -> Abo <| Abo.mappend Unit.mappend l r
    | TimeLine l, TimeLine r ->
        let rec go o l r =
            match l, r with
            | [], [] -> o
            | l, [] -> o@l
            | [], r -> o@r
            | l::lt, r::rt ->
                if fst l < fst r then go (r::l::o) lt rt else
                if fst l > fst r then go (l::r::o) lt rt else
                                      go ((fst l, snd l @ snd r)::o) lt rt
        TimeLine <| go [] l r




let nextArrival (TimeLine (a, _)) = Array.head a

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

let private findAppendPosition (a: 'a) (sortedArray: 'a[]) =
    let rec go l r =
        if l < r then
            let m = (l + r) / 2
            if sortedArray.[m] > a then go l m
            else go (m + 1) r
        else l - 1
    go 0 (Array.length sortedArray)

let takeUntil now tl =
    let (TimeLine (timeLine, timeMap)) = tl
    match findAppendPosition now timeLine with
    | -1 -> (Seq.empty, Some tl)
    | i ->
        let iPlus1 = i + 1
        let tl =
            if iPlus1 = Array.length timeLine then None
            else Some << TimeLine <| (
                  timeLine |> Array.skip (iPlus1)
                , timeLine |> Seq.skip (iPlus1) |> Seq.map (fun t -> (t, timeMap.[t])) |> Map.ofSeq)

        let see = timeLine |> Seq.take (iPlus1) |> Seq.map (fun t -> (t, timeMap.[t]))
        see, tl
