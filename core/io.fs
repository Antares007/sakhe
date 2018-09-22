module Sakhe.IO
open System
open Fable.Core

type [<Erase>] T<'i, 'o, 'b> = IO of ('i -> Pith<'o, 'b>)

let return' f = IO <| (Pith << f)

let map f (IO io) = IO <| fun i ->
    let (Pith p) = io i
    Pith <| f p

let bind g (IO io) = IO <| fun i ->
    let (Pith p) = io i
    let (IO io) = g p
    io i

let inline append l r =
    l |> bind (fun lpith -> r |> bind (fun rpith -> return' <| fun () o -> lpith o + rpith o))

let run (i: 'i) (o: O<'o, 'a>) (IO (io: 'i -> Pith<'o, 'b>)) =
    Pith.run o (io i)

module TaskIO =
    type [<Erase>] T<'a, 'b> = TaskIO of T<TryCatch<'a>, IDisposable, unit> //(I<'a> -> Pith<IDisposable, 'b>)
    and TryCatch<'a> =
        | Try of 'a
        | Catch of 'a * exn

    open Sakhe.S

    let return' f = return' <| f

    let run a (IO io) =
        let o = O.return' Disposable.append Disposable.empty
        let b =
            try
                try         Pith.run o << io << Try   <| (a)
                with err -> Pith.run o << io << Catch <| (a, err)
            with err ->
                o.Value.Dispose()
                raise err
        (b, o.Value)
