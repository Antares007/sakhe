module Sakhe.TIO
open System
open Fable.Core

type O =
    private
    | Run of T
    | Delay of Time.Delay * T
    | Dispose of IDisposable
    | Periodic of Time.Delay * T

and [<Erase>] T = private TimeIO of IO.T<Time.T, O, unit>

let return' f = TimeIO << IO.return' <| f

module O =
    let run f = Run << return' <| f
    let delay delay f = Delay (Time.Delay.return' delay, return' f)
    let periodic delay f = Periodic (Time.Delay.return' delay, return' f)
    let dispose d = Dispose d

let run now (TimeIO io) =
    let o = O.return' (fun l a -> a :: l) []
    let rec go now o io =
        let io = io |> IO.pmap (fun p o ->
            p <| function
            | Run io -> o <| Disposable.empty
            | _ -> o Disposable.empty
            ()
        )
        IO.run now o io
    go now o io


type ORay(o: O -> unit) =
    static member Api f = return' <| fun now o -> f now (ORay(o))
    member __.Run f =
        o << Run << ORay.Api <| f
    member __.Delay delay f =
        o <| Delay (Time.Delay.return' delay, ORay.Api f)
    member __.Periodic delay f =
        o <| Periodic (Time.Delay.return' delay, ORay.Api f)
    member __.Dispose d =
        o <| Dispose d


let see = ORay.Api <| fun now o ->
    o.Run (fun now o ->
        o.Delay 10 (fun now o ->
            o.Dispose Disposable.empty
        )
    )
    o.Delay 10 (fun now o ->
        o.Periodic 10 (fun now o ->
            o.Dispose Disposable.empty
        )
    )
