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

let rec ring ioB =
    let ioA = fun iA -> Pith <| fun oA ->
        match iA with
        | IO.Catch (now, _)
        | IO.Try now ->
            let fold d = function
                | Run io -> Disposable.append d (run now io)
                | Dispose d2 -> Disposable.append d d2
                | Delay (delay, io) -> Disposable.append d (dalay now delay io)

            let pithB = ioB <| IO.Try now
            let oB = O.return' fold Disposable.empty
            let rez = Pith.run oB pithB
            oA oB.Value
            rez
    ioA

and run now io =
    let o = O.return' Disposable.append Disposable.empty
    IO.run o now (ring io)
    o.Value

and dalay now delay io =
    let now = Time.add delay now
    let mutable d = Disposable.empty
    let mutable canceled = false
    let cancel () = canceled <- true; d.Dispose()

    let task () =
        if canceled then ()
        else
        d <- run now io
        if canceled then d.Dispose()

    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () ->
        JS.clearTimeout token
        cancel()



module O =
    let delay d io = Delay (Time.Delay.return' d, IO.return' io)
    let run io = Run << IO.return' <| io
    let dispose d = Dispose d
