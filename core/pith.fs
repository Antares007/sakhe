namespace Sakhe
type Pith<'a, 'b> = private P of (('a -> unit) -> 'b)

[<RequireQualifiedAccess>]
module P =

    let return' f = P f
    let empty<'a> = P <| fun (o : 'a -> unit) -> ()
    let mappend mappend (P l) (P r) = P <| fun o -> mappend (l o) (r o)
    let run o (P p) = p o

    let filter f (P p) =
        P <| fun o ->
            p (fun a ->
                if f a then o a)

    let map g f (P p) = P(f << (fun o -> p (g >> o)))
    let fmap f (P p) = P(f << p)
    let omap f (P p) = P(fun o -> p (f >> o))
    let pmap f (P p) = P(f p)

    let bind f (P p) =
        P <| fun o ->
            let a = p o
            let (P p) = f a
            p o
