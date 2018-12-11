module Sakhe.Show
open Fable.Import
let pair a b = (a, b)
let local = Scheduler.Local <| fun t -> P <| fun o ->
    printfn "Local: %A" t
    o << Scheduler.Origin <| fun t -> P <| fun o ->
        printfn "Origin: %A" t
        o << Scheduler.Delay << pair 100. <| fun t -> P <| fun o ->
            printfn "Delay 100.: %A" t
        o << Scheduler.Local <| fun t -> P <| fun o ->
            printfn "Local2: %A" t
    o << Scheduler.Delay << pair 200. <| fun t -> P <| fun o ->
        printfn "Delay 200.: %A" t

let run = Scheduler.run Default.tf Default.timer
// let d = run local
// let a a = Stream.at a 1111.

let s =
    Stream.merge
        (Stream.periodic 1000. "a")
        (Stream.periodic 2000. "b")

let onClick =
    Stream.merge
        (Stream.on "click" Browser.window)
        (Stream.on "mousemove" Browser.window)
    |> Stream.map (fun e -> (unbox e: Browser.MouseEvent))
    |> Stream.map (fun e -> "clientX:" + string e.clientX + " clientY:" + string e.clientY)
let see = Stream.run run (printfn "%A") (Stream.merge onClick s)
