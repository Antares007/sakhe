module Sakhe.Show
open Fable.Import
let pair a b = (a, b)
let s =
    Stream.merge
        (Stream.periodic 1000. "a")
        (Stream.periodic 2000. "b")
let mutable d = Disposable.empty
let onClick =
    Stream.merge
        ((Stream.on "click" Browser.window) |> Stream.tap (fun _ -> d.Dispose()))
        (Stream.on "mousemove" Browser.window)
    |> Stream.map (fun e -> (unbox e: Browser.MouseEvent))
    |> Stream.map (fun e -> "clientX:" + string e.clientX + " clientY:" + string e.clientY)

let sc = Stream.combineArray [|
    Stream.at 3. "a"
    Stream.at 2. "b"
    Stream.at 1. "c"
|]

d <- Stream.run Default.scheduler (printfn "%A") (Stream.merge onClick s)

let see2 = IO <| fun o () -> o 43
IO.run () (fun o -> ()) see2
let see = Scheduler2.mappend
