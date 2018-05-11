module Sakhe.Dom
open Fable.Import.Browser
open Most
open M
open Patch
open A

type Lang<'A when 'A :> Element> =
    | A of string option * Stream<HTMLAnchorElement -> unit>
    | Div of string option * Stream<HTMLDivElement -> unit>
    | H1 of string option * Stream<HTMLHeadingElement -> unit>
    | H2 of string option * Stream<HTMLHeadingElement -> unit>
    | H3 of string option * Stream<HTMLHeadingElement -> unit>
    | Custom of string * string option * Stream<HTMLElement -> unit>
    | Text of Stream<Text -> unit>
    | Comment of Stream<Comment -> unit>
    | Patch of Stream<'A -> unit>

let tree (pith: Stream<Pith<Lang<'A>>> when 'A :> Element): Stream<'A -> unit> =
    let ring (pith: Pith<Lang<'A>>): Pith<Stream<'A -> unit>> =
        fun o ->
            let mutable c = 0
            let cpp a = c <- c + 1; a
            let ray (lang) =
                match lang with
                | A (key, r)            -> r |> mape (document.createElement_a,               "A",           key, c) |> cpp |> o
                | H1 (key, r)           -> r |> mape (document.createElement_h1,              "H1",          key, c) |> cpp |> o
                | Div (key, r)          -> r |> mape (document.createElement_div,             "DIV",         key, c) |> cpp |> o
                | Custom (t, key, r)    -> r |> mape ((fun () -> document.createElement t),   t.ToUpper(),   key, c) |> cpp |> o
                | Text r                -> r |> mapc ((fun () -> document.createTextNode ""), "#text",            c) |> cpp |> o
                | Comment r             -> r |> mapc ((fun () -> document.createComment ""),  "#comment",         c) |> cpp |> o
                | Patch r               -> r |> most.map (fun patch n -> patch n)                                           |> o
                | _                     -> ()
            pith ray
            o (most.now (fun n ->
                let childNodes = n.childNodes
                let length = int childNodes.length
                for i = c to length - 1 do
                    n.removeChild childNodes.[i]
                    |> ignore))
    M.tree (most.combineArray (fun xs -> fun (n: 'A) -> xs |> Array.iter (fun p -> p n))) (most.map ring pith)
