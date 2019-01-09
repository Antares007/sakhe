module Sakhe.TimeLine2

type Tt<'a, 'b when 'a : comparison> =
    private
    | T of ('a * 'b) []
    | LR of Tt<'a, 'b> * Tt<'a, 'b>
let findAppendPosition (a : float) (sortedArray : ResizeArray<float*'b>) =
    let rec go l r =
        if l < r then
            let m = (l + r) / 2
            if fst sortedArray.[m] > a then go l m
            else go (m + 1) r
        else l - 1
    go 0 (Array.length (unbox sortedArray))

let fromIO mappend io =
    let line = ResizeArray()
    IO.run () <| fun (b, a) ->
        match findAppendPosition b line with
        | -1 ->
            line.Add (b, a)
        | n -> 
            if fst line.[n] = b then
                line.[n] <- (b, mappend (snd line.[n]) a)
            else if n = Array.length (unbox line) then
                line.Add (b, a)
            else
                line.Insert(n, (b, a))
    <| io
    if Array.length (unbox line) = 0 then None
    else Some << T << unbox <| line

let rec toIO = function
    | T a -> IO <| fun o () -> Array.iter o a
    | LR(l, r) -> IO.mappend Unit.mappend (toIO l) (toIO r)
let rec getBounds = function
    | T a -> (fst a.[0], fst a.[a.Length - 1])
    | LR(l, r) -> (fst (getBounds l), snd (getBounds r))
let mappend mappend l r =
    let (ls, le) = getBounds l
    let (rs, re) = getBounds r
    if le < rs then LR(l, r)
    else if re < ls then LR(r, l)
    else
        let p = IO.mappend Unit.mappend (toIO l) (toIO r)
        let o = fromIO mappend p
        o.Value
let rec runTo now tl =
    IO <| fun o () ->
        match tl with
        | T a ->
            match findAppendPosition now (unbox a) with
            | -1 -> Some(T a)
            | n ->
                let alen = Array.length a
                let to' = if n < alen && fst a.[n] = now then n else n - 1
                for i = 0 to to' do o a.[i]
                if n = alen then None
                else
                let rez = ResizeArray()
                for i = to' + 1 to alen - 1 do rez.Add a.[i]
                Some << T << unbox <| rez
        | LR(l, r) ->
            match IO.run () o (runTo now l) with
            | None -> IO.run () o (runTo now r)
            | Some tl -> Some(LR(tl, r))
