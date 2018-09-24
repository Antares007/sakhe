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
        IO.run
            now
            (o |> O.filter (function
                | Run (TimeIO io) -> go now o io; false
                | _ -> true))
            io
    go now o io
    o.Value


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
    o.Run <| fun now o ->
        o.Delay 1 <| fun now o ->
            o.Dispose Disposable.empty
        o.Run <| fun now o ->
            o.Delay 2 <| fun now o ->
                o.Dispose Disposable.empty
            o.Run <| fun now o ->
                o.Delay 3 <| fun now o ->
                    o.Dispose Disposable.empty
                o.Run <| fun now o ->
                    o.Delay 4 <| fun now o ->
                        o.Dispose Disposable.empty
    o.Delay 5 <| fun now o ->
        o.Periodic 6 <| fun now o ->
            o.Dispose Disposable.empty

let rez = run Time.zero see
printfn "%A" rez
