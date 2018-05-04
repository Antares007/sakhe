module Sakhe.Dom
open Fable.Import.Browser
open Most
open M

type R<'a> = Stream<'a -> unit>

type Lang<'a when 'a :> Element> =
    | A of R<HTMLAnchorElement>
    | Div of R<HTMLDivElement>
    | H1 of R<HTMLHeadElement>
    | H2 of R<HTMLHeadElement>
    | Text of R<Text>
    | Comment of R<Comment>
    | Patch of R<'a>

type Key = string

type Ray<'a when 'a :> Element> = Lang<'a> * Key option -> unit

type Pith<'a when 'a :> Element> = Ray<'a> -> unit

let private cmb xs n = xs |> Array.iteri (fun i p -> p (n, i))

let tree (pith: R<Ray<'a>>): R<'a> =
    let ring (pith: Ray<'a> -> unit) (mRay: M.Ray<'a * int -> unit>): unit =
        let ray (lang, key) =
            match lang with
            | A r -> mRay (most.map (fun r (n, i) -> ()) r)
            | Div r -> mRay (most.map (fun r (n, i) -> ()) r)
            | Text r -> mRay (most.map (fun r (n, i) -> ()) r)
            | Patch r -> mRay (most.map (fun r (n, i) -> ()) r)
            | _ -> ()
        pith ray
    M.tree (most.combineArray cmb) (pith |> most.map ring)

let t f = tree (most.now f)

let rez: R<HTMLElement> = t (fun o -> 
    o (Div (most.now (fun x -> ())), Some "as")
    o (Patch (t (fun o -> 
                    o (Div (most.now (fun x -> ())), Some "as")
                    o (Patch (most.now (fun x -> ())), Some "as"))), Some "as"))