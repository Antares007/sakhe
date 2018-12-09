module Sakhe.Show
open Fable.Import

let pair a b = (a, b)
let local = S.Local << S.Schedule <| fun t -> P <| fun o ->
    printfn "Local: %A" t
    o << S.Origin << S.Schedule <| fun t -> P <| fun o ->
        printfn "Origin: %A" t
        o << S.Delay << pair 100. << S.Schedule <| fun t -> P <| fun o ->
            printfn "Delay 100.: %A" t
    o << S.Delay << pair 200. << S.Schedule <| fun t -> P <| fun o ->
        printfn "Delay 200.: %A" t

let run = S.run Default.tf Default.timer
let d = run local
