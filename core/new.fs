module Sakhe.Scheduler
open System
open Fable.Core
open Sakhe

type [<Erase>] T = private Scheduler of IO.T<Time.T, O, unit>
and O =
    private
    | Now of T
    | Delay of Time.Delay * T
    //| Periodic of Time.Delay * T

let return' f = Scheduler << IO.return' <| f

module O =
    let now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)
    //let periodic delay f = Periodic (Time.Delay.return' delay, return' f)

let inline run now (Scheduler io) =
    let o = O.return' (fun l a -> a::l) []
    IO.run now o io

let see = return' <| fun t o ->
    ()
