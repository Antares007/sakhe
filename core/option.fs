[<RequireQualifiedAccess>]
module Sakhe.Option

let mappend mappend l r =
    match l, r with
    | None, None -> None
    | Some l, None -> Some l
    | None, Some r -> Some r
    | Some l, Some r -> Some <| mappend l r
