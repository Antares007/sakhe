module Sakhe.Scheduler
open System
open Fable.Core

type On<'a> =
    | Event of Time.T * 'a
    | End   of Time.T
    | Error of Time.T * exn
type TryCatch =
    | Try
    | Catch of exn

type [<Erase>] T<'a> = private Stream of Pith.T<On<'a>, IO.T<Time.T, O<'a>, IO.T<TryCatch, IDisposable, unit>>>
and O<'a> =
    private
    | Now of T<'a>
    | Delay of Time.Delay * T<'a>
    | Periodic of Time.Delay * T<'a>

let return' f = Stream << Pith.return' <| (IO.return' << f)

module O =
    let Now f = Now << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)
    let periodic delay f = Periodic (Time.Delay.return' delay, return' f)

// let run2 o now (Stream io) =
//     let io = IO.return' <| fun () o ->
//         o ""
//         1
//     ()

// let inline run o now (Stream io) =
//     let o' =
//         O.return'
//             (fun acc -> function
//                 | Now (Stream io) -> io :: acc
//                 | x -> O.put x o; acc)
//             []
//     Seq.fold
//         (fun acc io -> acc + (IO.run now o' io))
//         (IO.run now o' io)
//         o'.Value


let see = return' <| fun sink now o ->
    IO.return' <| fun i o ->
        match i with
        | Try ->
            o <| Disposable.empty
            sink <| Event (now, 1)
        | Catch err ->
            sink <| Error (now, err)
