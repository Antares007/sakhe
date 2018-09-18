module Sakhe.TimeIO
open Fable.Core
open Sakhe.S

type O =
    private
    | Run of (IO.I<Time.T> -> Pith<O, unit>)
    | Dispose of Disposable.T
    | Delay of Time.Delay * (IO.I<Time.T> -> Pith<O, unit>)

exception CancellationException

let private cancelable io =
    let mutable disposable = Disposable.empty
    let mutable canceled = false
    let cancel () = canceled <- true; disposable.Dispose()

    let io = IO.return' <| fun o -> function
        | IO.Try () ->
            if canceled then ()
            else
            let ohole =
                IO.O.return' ()
                |> O.map (fun d ->
                            if not canceled then d
                            else
                            Disposable.dispose d
                            raise CancellationException)
            IO.run ohole () (function
                    | IO.Try _ as i -> io i
                    | IO.Catch (_, CancellationException) -> Pith.empty
                    | IO.Catch _ as i -> io i)
            disposable <- ohole.Value
            if canceled then cancel ()
            else
            o disposable
        | IO.Catch ((), err) -> raise err
    io, (Disposable.return' cancel)

open Fable.Import
let private setTask delay task =
    let mutable disposable = Disposable.empty
    let delay = Time.Delay.unbox delay
    let token =
        JS.setTimeout (fun () ->
            let o = IO.O.return' ()
            let (task, cancel) = cancelable task
            IO.run o () task
            disposable <- cancel) delay
    Disposable.return' <| fun () ->
        JS.clearTimeout token
        Disposable.dispose disposable

let rec run now delay (io) =
    let t = Time.add delay now
    let io = fun i ->
        io (match i with
            |IO.Try () -> IO.Try t
            |IO.Catch ((), err) -> IO.Catch (t, err))
        |> Pith.map (function
            | Run io -> run t (Time.Delay.return' 0) io
            | Dispose d -> d
            | Delay (delay, io) -> run t delay io) id
    setTask delay io



module O =
    let delay d io = Delay (Time.Delay.return' d, IO.return' io)
    let run io = Run << IO.return' <| io
    let dispose d = Dispose d
