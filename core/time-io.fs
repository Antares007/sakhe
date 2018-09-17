module Sakhe.TimeIO
open Fable.Core
open Sakhe.S

type O =
    private
    | Run of (IO.I<Time.T> -> O<O, unit>)
    | Dispose of Disposable.T
    | Delay of Time.Delay * (IO.I<Time.T> -> O<O, unit>)


open Fable.Import
let private setTask delay task =
    let mutable disposable = Disposable.empty
    let delay = Time.Delay.unbox delay
    let token =
        JS.setTimeout (fun () ->
            let ((), d) = IO.run () task
            disposable <- d) delay
    Disposable.return' <| fun () ->
        JS.clearTimeout token
        Disposable.dispose disposable

let rec run now delay (io) =
    let t = Time.add delay now
    let io = fun i ->
        io (match i with
            |IO.Try () -> IO.Try t
            |IO.Catch ((), err) -> IO.Catch (t, err))
        |> O.map (function
            | Run io -> run t (Time.Delay.return' 0) io
            | Dispose d -> d
            | Delay (delay, io) -> run t delay io) id
    setTask delay io



module O =
    let delay d io = Delay (Time.Delay.return' d, IO.return' io)
    let run io = Run << IO.return' <| io
    let dispose d = Dispose d
