module Sakhe.Scheduler
open System
open Sakhe
open Sakhe.Sink

type T =
    private
    | Scheduler of Abo.T<Time.T * Time.Offset, unit, O>
and O =
    | Now of T
    | Delay of Time.Delay * T

let return'
    f = Scheduler << Abo.return' <| f

let contraMap
    g (Scheduler abo) = Scheduler <| Abo.contraMap g abo

// let mappend
//     (Scheduler l) (Scheduler r) =
//     Scheduler <| Abo.mappend Unit.mappend l r

module O =
    let now
        f = Now << return' <| f
    let delay
        delay f = Delay (Time.Delay.return' delay, return' f)

let rec private
    runAllNows
    ((now, offset), Scheduler io) =
    fun () o ->
        let o' = O.proxy o
        let rec ring p o = p <| function
            | Now (Scheduler io) -> Abo.run (now, offset) o' (Abo.pmap ring io)
            | Delay (delay, io)  ->
                o <|( (delay + now - offset, offset)
                    , (fun (now, offset) -> now + offset, offset) |> contraMap <| io)
        Abo.run (now, offset) o' (Abo.pmap ring io)
    |> Abo.return'
    |> TimeLine.return'

let run
    tf timer =
    let mutable nextRun = None
    let settable = new Disposable.SettableDisposable()
    let rec delay nextArrival timeline =
        nextRun <-
            match nextRun with
            | None -> (nextArrival, timeline)
            | Some (nr, tl) when nr <= nextArrival -> (nr, TimeLine.mappend tl timeline)
            | Some (nr, tl) -> (nextArrival, TimeLine.mappend tl timeline)
            |> Some
        tf () |> printfn "set <- %A"
        settable.Set << timer (Time.Delay.fromTo (tf()) nextArrival) <| fun () ->
            tf () |> printfn "run <- %A"
            let (nr, tl) = nextRun.Value
            nextRun <- None
            let (l, r) = TimeLine.takeUntil (tf()) tl
            let l =
                fun l ->
                    let o = O.contraMap runAllNows <| O.return' (Option.mappend TimeLine.mappend) None
                    Abo.run () o (TimeLine.value l)
                    o.Value
                |> Option.bind <| l
            add (Option.mappend TimeLine.mappend l r)

    and add = function
        | None -> ()
        | Some timeline ->
            let nextArrival = TimeLine.nextArrival timeline
            delay nextArrival timeline
    fun now io ->
        let offSet = now - tf()
        let timeline = runAllNows ((now, offSet), io)
        add timeline
        settable :> IDisposable

// let private
//     runTimeLineIO
//     io =
//     let o =
//         fun map (time, r) ->
//                 map |>
//                 match Map.tryFind time map with
//                     | Some l -> Map.add time (mappend l r)
//                     | None -> Map.add time r
//         |> O.return' <| Map.empty
//     Abo.run () o io
//     TimeLine.return' o.Value

// let mappendTimeLine
//     (l:TimeLine.T<Time.T, Abo.T<unit,unit, (Time.T * Abo.T<unit,unit,O>)>>) (r:TimeLine.T<Time.T, Abo.T<unit,unit, (Time.T * Abo.T<unit,unit,O>)>>) =
//     TimeLine.mappend (Abo.mappend Unit.mappend)

// let private runTo now (l) =
//     let (s, l) = TimeLine.takeUntil now l
//     let r =
//         s
//         |> Seq.map (fun (originNow, io) -> runTimeLineIO <| toTimeLineIO (originNow, Time.Offset.return' 0.0) io)
//         |> Seq.fold (Option.mappend (TimeLine.mappend mappend)) None

//     Option.mappend (TimeLine.mappend mappend) l r

// open Fable.Core.JsInterop
// let timeStamp (s: string): unit =
//     Fable.Import.JS.console?timeStamp(s)
//     Fable.Import.JS.console.log s

// let run tf timer =
//     let mutable timeline = None
//     let mutable nextRun: Time.T option = None
//     let mutable nextRunDisposable = Disposable.empty

//     let settable = new Disposable.SettableDisposable()

//     let rec scheduleNextRun () =
//         match nextRun, timeline with
//         | None, None -> ()
//         | Some nextRun, None -> ()
//         | None, Some timeline ->
//             let now = tf()
//             let delay = Time.Delay.fromTo now (TimeLine.nextArrival timeline)
//             setTimeout delay timeline
//         | Some nr, Some timeline when nr <= TimeLine.nextArrival timeline -> ()
//         | Some nr, Some timeline ->
//             let now = tf()
//             let delay = Time.Delay.fromTo now (TimeLine.nextArrival timeline)
//             setTimeout delay timeline

//     and setTimeout delay tl =
//         let now = tf ()
//         now |> sprintf "setTimeOut %A" |> timeStamp
//         nextRun <- Some now
//         settable.Set << timer delay <| fun () ->
//             (tf (), nextRun) |> sprintf "timeOut %A" |> timeStamp
//             nextRun <- None
//             let now = tf()
//             timeline <- runTo now tl
//             scheduleNextRun ()

//     fun now io ->
//         let offSet = now - tf()
//         let mappend = Option.mappend (TimeLine.mappend mappend)
//         timeline <- mappend timeline (runTimeLineIO <| toTimeLineIO (now, offSet) io)
//         scheduleNextRun ()

//         settable :> IDisposable
