module Sakhe.Show
open Fable.Import

let pair a b = (a, b)
open Scheduler
open System.IO
let local = Local <| fun t -> P <| fun o ->
    printfn "Local: %A" t
    o << Origin <| fun t -> P <| fun o ->
        printfn "Origin: %A" t
        o << Delay << pair 100. <| fun t -> P <| fun o ->
            printfn "Delay 100.: %A" t
        o << Local <| fun t -> P <| fun o ->
            printfn "Local2: %A" t

    o << Delay << pair 200. <| fun t -> P <| fun o ->
        printfn "Delay 200.: %A" t

let run = run Default.tf Default.timer
// let d = run local
// let a a = Stream.at a 1111.
let s =
    Stream.merge
        (Stream.periodic 100. "a")
        (Stream.periodic 200. "b")
    |> Stream.take 30

let see = Stream.run run (printfn "%A") s
