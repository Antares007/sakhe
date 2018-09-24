module Sakhe.Scheduler
open System
open Fable.Core

// type On<'a> =
//     | Event of Time.T * 'a
//     | End   of Time.T
//     | Error of Time.T * exn
// type TryCatch =
//     | Try
//     | Catch of exn

type [<Erase>] T<'a> = private Stream of IO.T<Sink.T<'a>, O<'a>, TaskIO.T<Time.T>>
and O<'a> =
    private
    | Now of T<'a>
    | Delay of Time.Delay * T<'a>
    | Periodic of Time.Delay * T<'a>

let return' f = Stream << IO.return' <| f

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


let see = return' <| fun sink o ->
    TaskIO.return' <| fun i o ->
        match i with
        | TaskIO.Try now ->
            o <| Disposable.empty
            Sink.Send.event now 1 sink

        | TaskIO.Catch (now, err) ->
            Sink.Send.error now err sink
