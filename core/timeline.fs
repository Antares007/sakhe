module Sakhe.TimeLine
open Sakhe

type T<'a, 'b, 'c> =
    private
    | TimeLine of ('a * ('b * 'c) list) list

let return'
    f =
    let o =
        fun m ((a, b), c) ->
            match Map.tryFind a m with
            | None -> m |> Map.add a [b, c]
            | Some o -> m |> Map.add a ((b, c)::o)
        |> O.return' <| Map.empty
    Abo.run () o f
    if o.Value.Count = 0 then None
    else Some<<TimeLine<<(Seq.fold (fun l a -> a::l) [])<<Seq.sortBy fst<<Map.toSeq<|o.Value

let value
    (TimeLine l)
    =
    fun () ->
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
    |> Abo.return'

let nextArrival
    (TimeLine tl)
    = fst <| List.last tl


let takeUntil
    now (tl) =
    let abo = value tl
    let o =
        fun (lp, rp) abc ->
            if fst (fst abc) < now
            then (fun o -> lp o; o abc), rp
            else lp, (fun o -> rp o; o abc)
        |> O.return' <| (ignore, ignore)
    Abo.run () o abo
    let (lp, rp) = o.Value
    let l = return' << Abo.return' <| fun () -> lp
    let r = return' << Abo.return' <| fun () -> rp
    l, r

let mappend
    (TimeLine l) (TimeLine r) =
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
