module Sakhe.Stream
open System

type T<'a> = Stream of Abo.T<Sink.T<'a>, unit, O>
and O =
    | Now of Abo.T<Time.T, unit, O>
    | Delay of Time.Delay * Abo.T<Time.T, unit, O>
    | Dispose of ((unit -> Time.T) -> IDisposable)



let run tf timer sink (Stream abo) =
    fun now o ->
        let o' = O.makeListO ()
        abo |> Abo.run sink o'
        ()
    |> Scheduler.return'
    |> (Scheduler.run tf timer) Time.zero
    // let ring p o =
    //     o << Scheduler.O.delay 10 <| fun a o -> ()

    //     p <| function
    //         | Now abo -> ()
    //         | Delay (delay, abo) -> ()
    //         | Dispose df -> ()



    // abo |> Abo.pmap ring


let now a = (Stream << Abo.return') <| fun sink o ->
    o <| Delay (Time.Delay.zero, Abo.return' <| fun now o ->
        try
            Sink.Send.event now a sink
            Sink.Send.end' now sink
        with err ->
            Sink.Send.error now err sink)

let toSchedulerIO sink (Stream (io: Abo.T<Sink.T<'a>, unit, O>)) =
    let ring io = Scheduler.return' <| fun now o ->

        failwith ""
    failwith ""
