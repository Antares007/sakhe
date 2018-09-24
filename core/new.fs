module Sakhe.Scheduler
open System
open Fable.Core

type [<Erase>] T<'a> = private Scheduler of IO.T<Time.T, O<'a>, 'a>
and O<'a> =
    private
    | Run of T<'a>
    | Delay of Time.Delay * T<'a>
    | Periodic of Time.Delay * T<'a>

let return' f = Scheduler << IO.return' <| f

module O =
    let run f = Run << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)
    let periodic delay f = Periodic (Time.Delay.return' delay, return' f)

let inline run o now (Scheduler io) =
    let o' =
        O.return'
            (fun acc -> function
                | Run (Scheduler io) -> io :: acc
                | x -> O.put x o; acc)
            []
    Seq.fold (fun acc io -> acc + (IO.run now o' io)) (IO.run now o' io) o'.Value



let see = return' <| fun i o ->
    1
