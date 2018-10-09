module Sakhe.Stream
open System

type T<'a> = Stream of Abo.T<(Scheduler.T -> IDisposable), IDisposable, O<'a>>
and O<'a> =
    | Event of (Time.T * Time.Offset) * 'a
    | End   of (Time.T * Time.Offset)
    | Error of (Time.T * Time.Offset) * exn

let inline pair a b = (a, b)

module Scheduler =
    let delay d f =
        Scheduler.Delay << pair (Time.Delay.return' d) << Scheduler.return' <| fun i -> Pith.return' <| fun o -> f i o
    let now f = Scheduler.Now << Scheduler.return'<| fun i -> Pith.return' <| fun o -> f i o
    let Of f = Scheduler.return' <| fun i -> Pith.return' <| fun o -> f i o

let Of f = Stream << Abo.return' <| fun run -> Pith.return' <| fun sinkO -> f run sinkO

let unit =
   Of <| fun run s ->
        run << Scheduler.Of <| fun _ o ->
            o << Scheduler.delay 0 <| fun t _ ->
                try
                    s <| Event (t, ())
                    s <| End (t)
                with err -> s <| Error (t, err)

let merge (Stream a) (Stream b) =
    Of <| fun run s ->
        let mutable disposable = Disposable.empty
        let mutable endCount = 0
        let so = O.proxy <| function
            | O.End t ->
                endCount <- endCount + 1
                if endCount = 2 then s << End <| t
            | O.Error (a, b) ->
                disposable.Dispose()
                s << Error <| (a, b)
            | O.Event (t, a) ->
                s << Event <| (t, a)
        let da = Pith.run so <| Abo.run run a
        let db = Pith.run so <| Abo.run run b
        disposable <- Disposable.append da db
        disposable
