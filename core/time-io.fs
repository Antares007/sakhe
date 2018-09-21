module Sakhe.TimeIO
open System
open Fable.Import
open Fable.Core
open Sakhe.S

type [<Erase>] T = private TimeIO of (IO.I<Time.T> -> Pith<O, unit>)

and O =
    private
    | Run of T
    | Delay of Time.Delay * T
    | Dispose of IDisposable

let return' f =
    TimeIO <| f

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let rec run now (TimeIO io) =
    snd << IO.run now << IO.return' <| fun i -> Pith <| fun o ->
        let (Pith pith) = io i
        pith <| function
            | Dispose d -> o d
            | Run io -> o << run now <| io
            | Delay (delay, io) ->
                let d = new Disposable.SettableDisposable()
                o << Disposable.append d << setTask delay <| fun () ->
                    let now = Time.add delay now
                    d.Set <| run now io


module O =
    let delay d io = Delay (Time.Delay.return' d, TimeIO <| io)
    let run io = Run <| io
    let dispose d = Dispose d
