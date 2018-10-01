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
            let mutable g = ignore
            fun (a, l) ->
                fun (b, c) ->
                    let f = g
                    g <- fun o ->
                        o ((a, b),c)
                        f o
                |> List.iter <| l
            |> List.iter <| l
            g
        see
    | Abo abo -> abo


let takeUntil now = function
    | TimeLine tl ->
        let mutable g = ignore
        let mutable tail = None
        let rec go = function
            | [] -> ()
            | (a, l)::t ->
                if a < now then
                    fun (b, c) ->
                        let f = g
                        g <- fun o ->
                            o ((a,b),c)
                            f o
                    |> List.iter <| l
                    go t
                else
                    tail <- Some << TimeLine <| (a, l)::t
        go tl
        (Abo.return' <| fun () o -> g o), tail
    | Abo abo ->
        let o =
            fun (l, r) b ->
                if fst (fst b) < now
                then
                    (fun o -> l o; o b), r
                else
                    l, (fun o -> r o; o b)
            |> O.return' <| (ignore, ignore)
        Abo.run () o abo
        let (f, g) = o.Value
        let tail = (return' () << Abo.return'<| fun () o -> g o)
        (Abo.return' <| fun () o -> f o;()), tail

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
