module Sakhe.TimeIO
open Fable.Core
open Sakhe.S

type [<Erase>] T = private TimeIO of IO<I, O>
and I = TaskIO.I<Time.T>
and O =
    private
    | Run of T
    | Dispose of Disposable.T
    | Delay of Time.Delay * T

let return' f = TimeIO << IO <| f

module O =
    let Delay a f = Delay <| (Time.Delay.return' a, return' f)
    let Run f = Run << return' <| f
    let Dispose d = Dispose d

let private setTask = 1

let rec run (delay: Time.Delay) (TimeIO io) =
    ()

function
| I.Run a -> Pith <| fun o ->
    o << O.Delay 100 <| function
        | I.Run a -> Pith ignore
        | I.Exn (a, err) -> Pith ignore

    o << O.Run <| function
        | I.Run a -> Pith <| fun o ->
            o << O.Delay 100 <| function
                | I.Run a -> Pith ignore
                | I.Exn (a, err) -> Pith ignore
        | I.Exn (a, err) -> Pith ignore

    o << O.Dispose <| Disposable.empty
| I.Exn (a, err) -> Pith <| fun o ->
    failwith "never"
|> (run (Time.Delay.return' 0) << return')
