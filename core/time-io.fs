module Sakhe.TimeIO
open System
open Fable.Import
open Sakhe.S

type TimeIO = TimeIO of (IO<Time.T> -> Pith<O, unit>)
and O =
    private
    | Run of TimeIO
    | Delay of Time.Delay * TimeIO
    | Dispose of IDisposable

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let rec run now (TimeIO io) =
    snd << IO.run now <| fun i -> Pith <| fun o ->
        let (Pith pith) = io i
        pith <| function
        | Dispose d -> o d
        | Run io -> o << run now <| io
        | Delay (delay, io) ->
            let d = new Disposable.SettableDisposable()
            o << Disposable.append d << setTask delay <| fun () ->
                d.Set <| run (Time.add delay now) io


module O =
    let delay d io = Delay (Time.Delay.return' d, TimeIO << IO.return' <| io)
    let run io = Run << TimeIO << IO.return' <| io
    let dispose d = Dispose d
