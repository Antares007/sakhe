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
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let rec run now delay io =
    let now = Time.add delay now
    let clearTimeOut = setTask delay <| fun () ->
        let o = O.return' Disposable.append Disposable.empty

        IO.run o now <| fun i -> Pith <| fun o ->
            let foldO = fun d -> function
                | Run io ->
                    run now Time.Delay.zero io
                | Dispose d -> d
                | Delay (delay, io) -> run now delay io

            let o2 =
                (O.return' (fun list a -> a :: list) [])


            Pith.run o2 (io i)

            o <| List.fold foldO Disposable.empty o2.Value
    clearTimeOut




module O =
    let delay d io = Delay (Time.Delay.return' d, IO.return' io)
    let run io = Run << IO.return' <| io
    let dispose d = Dispose d
