module Sakhe.TimeIO
open System
open Fable.Import
open Fable.Core

type O =
    private
    | Run of T
    | Delay of Time.Delay * T
    | Dispose of IDisposable
    | Periodic of Time.Delay * T

and [<Erase>] T =
    private
    | TimeIO of IO.T<TaskIO.TryCatch<Time.T>, O, unit> // (IO.TaskIO.TryCatch<Time.T> -> Pith<O, unit>)
    static member inline (+) ((TimeIO a), (TimeIO b)) = TimeIO << IO.return' <| fun i o ->
        let o = O.return' (fun () a -> o a) ()
        IO.run i o a
        IO.run i o b



let return' f =
    TimeIO << IO.return' <| f

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let rec run now (TimeIO io) =
    let ring = IO.pmap <| fun p o ->
        p <| function
        | Dispose d -> o d
        | Run io -> o << run now <| io
        | Delay (delay, io) ->
            let d = new Disposable.SettableDisposable()
            o << Disposable.append d << setTask delay <| fun () ->
                let now = Time.add delay now
                d.Set <| run now io
        | Periodic (period, io) -> ()
    let y = TaskIO.lift (ring io)
    TaskIO.run now y

module O =
    let delay d io = Delay (Time.Delay.return' d, io)
    let run io = Run <| io
    let dispose d = Dispose d
