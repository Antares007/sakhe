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

let rez: R<HTMLElement> = t (fun o ->
    let once f = most.now (once f)
    (H1 (once (fun x -> x.innerText <- "Hello World!1";())), Some "as1") |> o
    (Custom ("h2", once (fun x -> x.innerText <- "Hello World!1";())), Some "as1") |> o
    (Div (t (fun o ->
        (H1 (once (fun x -> x.innerText <- "Hello World!2";())), Some "as2") |> o
        (Div (once (fun x -> x.innerText <- "Hello World!3";())), Some "as3") |> o
        (Text (once (fun x -> x.textContent <- "Hello World!4";())), Some "as4") |> o
        (Comment (once (fun x -> x.textContent <- "Hello World!5";())), Some "as5") |> o)), Some "as6") |> o) 

let rootNode = document.getElementById "root-node"
let patches = rez |> most.scan (fun n p -> p(n); n) rootNode |> most.skip 1 |> most.take 3

most.runEffects patches (Most.Scheduler.require.newDefaultScheduler ()) |> ignore

type P = 
    | Width of int
    | Height of int
type A = 
    | Width of int
    | Height of int
type Data =
    | Props of P list
    | SProps of Stream<P list>
    | Attrs of A list
    | Style of int
    | Class of int

type Lang =
    | Div of (Data list)

let z = Div [   Props [ P.Width 1
                        P.Height 2]
                SProps  (most.now [P.Width 1; P.Height 2])
                Attrs [ A.Width 1
                        A.Height 2]]