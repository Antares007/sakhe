module Sakhe.TimeIO
open System
open Fable.Import
open Fable.Core
open Sakhe.S

type O =
    private
    | Run of T
    | Delay of Time.Delay * T
    | Dispose of IDisposable
    | Periodic of Time.Delay * T

and [<Erase>] T = private TimeIO of IO.T<IO.TaskIO.TryCatch<Time.T>, O, unit> // (IO.TaskIO.TryCatch<Time.T> -> Pith<O, unit>)


let return' f =
    TimeIO <| f

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let rec run now (TimeIO io) =
    snd << IO.TaskIO.run now << IO.TaskIO.return' <| fun i -> Pith <| fun o ->
        let o =
            O.return' (fun l a -> a :: l) []
            |> O.contraMap (function
            | Dispose d -> o d
            | Run io -> o << run now <| io
            | Delay (delay, io) ->
                let d = new Disposable.SettableDisposable()
                o << Disposable.append d << setTask delay <| fun () ->
                    let now = Time.add delay now
                    d.Set <| run now io
            | Periodic (period, io) -> ())
        IO.run i o io
        // let (Pith pith) = io i
        // pith <| function
        //     | Dispose d -> o d
        //     | Run io -> o << run now <| io
        //     | Delay (delay, io) ->
        //         let d = new Disposable.SettableDisposable()
        //         o << Disposable.append d << setTask delay <| fun () ->
        //             let now = Time.add delay now
        //             d.Set <| run now io
        //     | Periodic (period, io) -> ()


module O =
    let delay d io = Delay (Time.Delay.return' d, TimeIO <| io)
    let run io = Run <| io
    let dispose d = Dispose d
