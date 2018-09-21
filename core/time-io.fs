module Sakhe.TimeIO
open System
open Fable.Import
open Fable.Core
open Sakhe.S

type [<Erase>] T = TimeIO of (IO.I<Time.T> -> Pith<O, unit>)

and O =
    private
    | Run of T
    | Delay of Time.Delay * T
    | Dispose of IDisposable

let return' f = TimeIO <| f

let private setTask delay task =
    let token = JS.setTimeout task (Time.Delay.unbox delay)
    Disposable.return' <| fun () -> JS.clearTimeout token

let rec run now (TimeIO io) =
    snd << IO.run now << IO.return' <| fun i -> Pith <| fun o ->
        let (Pith pith) = io i
        let array = ResizeArray()
        pith <| function
        | Dispose d -> o d
        | Run io -> o << run now <| io // TODO: descripe deeper layer
        | Delay (delay, io) ->
            array.Add ((delay, io))
            // let d = new Disposable.SettableDisposable()
            // o << Disposable.append d << setTask delay <| fun () ->
            //     d.Set <| run (Time.add delay now) io
        array
        |> Seq.groupBy fst
        |> Seq.fold (fun d (delay, ios) ->
            let prods =
                ios
                |> Seq.map(fun (_, io) ->
                    let d = new Disposable.SettableDisposable()
                    d, io)
                |> Seq.toArray

            let d = prods |> Seq.map fst |> Seq.fold Disposable.append d


            printfn "aaa set Delay: %A" delay
            Disposable.append d << setTask delay <| fun () ->
                let now = Time.add delay now
                for i = 0 to prods.Length - 1 do
                    let (d, io) = prods.[i]
                    d.Set <| run now io
                ()
        ) Disposable.empty
        |> o

module O =
    let delay d io = Delay (Time.Delay.return' d, TimeIO <| io)
    let run io = Run <| io
    let dispose d = Dispose d
