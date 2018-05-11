module Sakhe.Dom2

open Fable.Import.Browser
open M
open Dom
open Fable.Core
open Fable.Core.JsInterop
open Most
let t f = tree (most.periodic 1000 |> most.constant f)

[<Emit("((f)=>{var b;return(a)=>{if(f){b=f(a);f=null;}return b;};})($0)")>]
let once (_: 'a -> 'b): 'a -> 'b = jsNative

let rez: Stream<HTMLElement -> unit> = t (fun o ->
    let once f = most.now (once f)
    (Patch (once (fun x -> console.log x;()))) |> o
    (H1 (Some "k1", once (fun x -> x.innerText <- "Hello World!1";()))) |> o
    (Custom ("h2", Some "k2", once (fun x -> x.innerText <- "Hello World!2";()))) |> o
    (Div (None, t (fun o ->
        (H1 (Some "k3", once (fun x -> x.innerText <- "Hello World!3";()))) |> o
        (Div (Some "k4", once (fun x -> x.innerText <- "Hello World!4";()))) |> o
        (Text (once (fun x -> x.textContent <- "Hello World!5";()))) |> o
        (Comment (once (fun x -> x.textContent <- "Hello World!6";()))) |> o))) |> o)

let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Most.Scheduler.require.newDefaultScheduler ()) |> ignore

// type P =
//     | Width of int
//     | Height of int
// type A =
//     | Width of int
//     | Height of int
// type Data =
//     | Props of P list
//     | SProps of Stream<P list>
//     | Attrs of A list
//     | Style of int
//     | Class of int

// type Lang =
//     | Div of (Data list)

// type [<AllowNullLiteral>] ILang =
//     abstract member Div: A list -> (ILang -> unit) -> unit
//     abstract member DivS: Stream<A list> -> Stream<ILang -> unit> -> unit

// let o = createEmpty<ILang>

// let (!^) x = most.now x

// let cs (x: Stream<'a>) = ()
// let zzz = cs !^ 2
// o.DivS !^ [Width 1; Height 2] !^ (fun o ->
//     o.Div [] (fun o ->
//         o.Div [] ignore))


// let z = Div [   Props [ P.Width 1
//                         P.Height 2]
//                 SProps  (most.now [P.Width 1; P.Height 2])
//                 Attrs [ A.Width 1
//                         A.Height 2]]
