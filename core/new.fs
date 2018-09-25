module Sakhe.Scheduler
open System
open Fable.Core

// type On<'a> =
//     | Event of Time.T * 'a
//     | End   of Time.T
//     | Error of Time.T * exn
type TryCatch<'a> =
    | Try of 'a
    | Catch of 'a * exn

type [<Erase>] T = private Stream of IO.T<TryCatch<unit -> Time.T>, O, unit>
and O =
    private
    | Dispose of IDisposable
    | Now of T
    | Delay of Time.Delay * T
    | Periodic of Time.Delay * T

let return' f = Stream << IO.return' <| f

module O =
    let dispose d = Dispose <| d
    let now f = Now << return' <| f
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


let see = return' <| fun i o ->
    o << O.dispose <| Disposable.empty
    o << O.now <| fun i o ->
    o << O.delay 10 <| fun i o ->
        match i with
        | Try tf -> ()
        | Catch (tf, err) -> ()
