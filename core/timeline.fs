module Sakhe.TimeLine

open Sakhe
open System

type T<'a, 'b when 'a : comparison> =
    private
    | T of ('a * 'b) []
    | LR of T<'a, 'b> * T<'a, 'b>

let fromPith mappend f =
    let mutable s = Map.empty
    P.run <| fun (a, b) ->
        match Map.tryFind a s with
        | None -> s <- Map.add a b s
        | Some o -> s <- Map.add a (mappend o b) s
    <| f
    let line =
        s
        |> Map.toSeq
        |> Seq.sortBy fst
        |> Seq.toArray
    if Array.isEmpty line then None
    else Some << T <| line

let rec toPith =
    function
    | T a -> P.return' <| fun o -> Array.iter o a
    | LR(l, r) -> P.mappend Unit.mappend (toPith l) (toPith r)

let rec getBounds =
    function
    | T a -> (fst a.[0], fst a.[a.Length - 1])
    | LR(l, r) -> (fst (getBounds l), snd (getBounds r))

let mappend mappend l r =
    let (ls, le) = getBounds l
    let (rs, re) = getBounds r
    if le < rs then LR(l, r)
    else if re < ls then LR(r, l)
    else
        let p = P.mappend Unit.mappend (toPith l) (toPith r)
        let o = fromPith mappend p
        o.Value

let rec runTo now tl =
    P.return' <| fun o ->
        match tl with
        | T a ->
            if now < (fst a.[0]) then Some(T a)
            else
                a
                |> Seq.takeWhile (fun (a, _) -> a <= now)
                |> Seq.iter o
                if fst a.[a.Length - 1] <= now then None
                else
                    Some(T(a
                           |> Seq.skipWhile (fun (a, _) -> a <= now)
                           |> Seq.toArray))
        | LR(l, r) ->
            match P.run o (runTo now l) with
            | None -> P.run o (runTo now r)
            | Some tl -> Some(LR(tl, r))

let private findAppendPosition (a : 'a) (sortedArray : 'a []) =
    let rec go l r =
        if l < r then
            let m = (l + r) / 2
            if sortedArray.[m] > a then go l m
            else go (m + 1) r
        else l - 1
    go 0 (Array.length sortedArray)
