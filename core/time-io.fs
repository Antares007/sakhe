module Sakhe.TimeIO
open Fable.Core
open Sakhe.S

type O =
    private
    | Run of (I<IO.TryCatch<Time.T>> -> O<O, unit>)
    | Dispose of Disposable.T
    | Delay of Time.Delay * (I<IO.TryCatch<Time.T>> -> O<O, unit>)

let rec run
    now delay io =
    let t = Time.add delay now
    let io = fun i ->
        io i
        |> O.map (function
            | Run io -> run t (Time.Delay.return' 0) io
            | Dispose d -> d
            | Delay (delay, io) -> run t delay io) id
    let (rez, disposable) = IO.run (I.Of t) io
    disposable

// open Fable.Import

// let private setTask delay task =
//     let mutable disposable = Disposable.empty
//     let delay = Time.Delay.unbox delay
//     let token =
//         JS.setTimeout (fun () ->
//             let ((), d) = TaskIO.run ignore task
//             disposable <- d) delay
//     Disposable.return' <| fun () ->
//         JS.clearTimeout token
//         Disposable.dispose disposable

// let rec run (delay: Time.Delay) (TimeIO io) =
//     ()
module O =
    let delay d io = Delay (Time.Delay.return' d, IO.return' io)
    let run io = Run << IO.return' <| io
    let dispose d = Dispose d

let see =
    fun o -> function
    | IO.Try a ->
        o << O.delay 100 <| fun o -> function
            | IO.Try a -> ()
            | IO.Catch (a, err) -> ()
    | IO.Catch (a, err) -> ()
    |> IO.return'
    |> run (Time.return' 0.) (Time.Delay.return' 0)
