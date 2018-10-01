module Sakhe.TimeLine
open System
open Sakhe

type T<'a, 'b, 'c> =
    private
    | TimeLine of ('a * ('b * 'c) list) list
    | Abo of Abo.T<unit, unit, (('a * 'b) * 'c)>

let return'
    f =
    let o =
        fun m ((a, b), c) ->
            match Map.tryFind a m with
            | None -> m |> Map.add a [b, c]
            | Some o -> m |> Map.add a ((b, c)::o)
        |> O.return' <| Map.empty
    Abo.run () o (Abo.return' f)
    if o.Value.Count = 0 then None
    else Some<<TimeLine<<(Seq.fold (fun l a -> a::l) [])<<Seq.sortBy fst<<Map.toSeq<|o.Value

let private
    toAbo
    = function
    | TimeLine l ->
        Abo << Abo.return' <| fun () ->
            let mutable pith = ignore

            fun (a, l) ->
                fun (b, c) ->
                    let oldPith = pith
                    pith <- fun o ->
                        o ((a, b),c)
                        oldPith o
                |> List.iter <| l
            |> List.iter <| l

            pith
    | Abo _ as io -> io

let rec
    nextArrival
    now = function
    | TimeLine tl -> takeUntil now (toAbo tl)
    | Abo abo ->
        return' abo


let rec
    takeUntil
    now = function
    | TimeLine _ as tl -> takeUntil now (toAbo tl)
    | Abo abo ->
        let o =
            fun (ph, pt) abc ->
                if fst (fst abc) < now
                then (fun o -> ph o; o abc), pt
                else ph, (fun o -> pt o; o abc)
            |> O.return' <| (ignore, ignore)
        Abo.run () o abo
        let (hPith, tPith) = o.Value
        let head = return' <| fun () -> hPith
        let tail = return' <| fun () -> tPith
        head, tail

let rec
    mappend
    l r =
    match l, r with
    | TimeLine _, Abo _ -> mappend (toAbo l) r
    | Abo _, TimeLine _ -> mappend l (toAbo r)
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
