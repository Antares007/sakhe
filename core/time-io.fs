module Sakhe.TimeIO
open Fable.Core
open Sakhe.S

type O =
    private
    | Run of (IO<Time.T> -> Pith<O, unit>)
    | Dispose of Disposable.T
    | Delay of Time.Delay * (IO<Time.T> -> Pith<O, unit>)

exception CancellationException

open Fable.Import
let private setTask delay task =
    let mutable disposable = Disposable.empty
    let delay = Time.Delay.unbox delay
    let token =
        JS.setTimeout (fun () ->
            let o = O.return' Disposable.append Disposable.empty
            IO.run o () task
            disposable <- o.Value) delay
    Disposable.return' <| fun () ->
        JS.clearTimeout token
        Disposable.dispose disposable

let rec run now delay io =
    let now = Time.add delay now
    let io  = IO.return' <| fun o -> function
        | IO.Catch ((), _)
        | IO.Try () ->
            let mapO = function
                | Run io ->
                    let see = io <| IO.Try now
                    run now Time.Delay.zero io
                | Dispose d -> d
                | Delay (delay, io) -> run now delay io

            let o = (O.return' (fun list a -> a :: list) []) |> O.contraMap mapO
            Pith.run o << io <| IO.Try now


    setTask delay io



module O =
    let delay d io = Delay (Time.Delay.return' d, IO.return' io)
    let run io = Run << IO.return' <| io
    let dispose d = Dispose d
