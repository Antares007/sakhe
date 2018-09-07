namespace Sakhe.S.Stream
open Sakhe.S

module Stream =
    type T<'a> = Stream of (Sink.T<'a> * Scheduler.T -> Disposable.T)

    let return' f = Stream f
