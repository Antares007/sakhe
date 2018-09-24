module Sakhe.Sink
open Fable.Core

type On<'a> =
    | Event of Time.T * 'a
    | End   of Time.T
    | Error of Time.T * exn

type [<Erase>] T<'a> = Sink of (On<'a> -> unit)

module O =
    let event  t a   = Event <| (t,  a)
    let end'   t     = End   <| (t)
    let error  t err = Error <| (t, err)

module Send =
    let event  t a   (Sink g) = g << Event <| (t,  a)
    let end'   t     (Sink g) = g << End   <| (t)
    let error  t err (Sink g) = g << Error   <| (t, err)

let return' f = Sink f

let unbox (Sink v) = v

let map f (Sink g) = Sink <| function
    | Event (t, a)   -> g << Event <| (t, f a)
    | End   (t)      -> g << End   <| (t)
    | Error (t, err) -> g << Error   <| (t, err)

let filter p (Sink g) = Sink <| function
    | Event (t, a)   -> if p a then g << Event <| (t, a)
    | End   (t)      -> g << End   <| (t)
    | Error (t, err) -> g << Error   <| (t, err)

let filterMap f p (Sink g) = Sink <| function
    | Event (t, a)   -> let b = f a in if p b then g << Event <| (t, b)
    | End   (t)      -> g << End   <| (t)
    | Error (t, err) -> g << Error   <| (t, err)

let skipRepeats eq (Sink g) =
    let mutable prev = None
    Sink <| function
    | Event (t, a)   ->
        match prev with
        | None -> g << Event <| (t, a)
        | Some prev -> if (eq prev a) then g << Event <| (t, a)
    | End   (t)      -> g << End   <| (t)
    | Error (t, err) -> g << Error   <| (t, err)

let private safeSink o =
    let mutable active = true
    function
    | Event _ as x ->
        if active then o x
    | End _ as x ->
        if active then o x
        active <- false
    | Error _ as x ->
        if active then o x
        active <- false

let combineArray qty (Sink o) =
    let mutable endsLeft = qty
    let values = [| for i in 0 .. qty - 1 -> None |]
    let mutable ready = false
    let o = safeSink o
    let sink i = Sink <| function
        | Error (t, err) -> o << Error <| (t, err)
        | End (t)        ->
            endsLeft <- endsLeft - 1
            if endsLeft = 0 then o << End <| t
        | Event (t, a)   ->
            values.[i] <- Some a
            if ready then o << Event <| (t, values |> Array.map (fun v -> v.Value))
            else
            ready <- true
            let mutable i = 0
            while i < qty && ready do
                if values.[i].IsNone then ready <- false
                i <- i + 1
    [| for i in 0 .. qty - 1 -> sink i |]

let mergeArray qty (Sink o) =
    let mutable endsLeft = qty
    let o = safeSink o
    let sink = Sink <| function
        | Event _ as x -> o x
        | Error _ as x -> o x
        | End   _ as x ->
            endsLeft <- endsLeft - 1
            if endsLeft = 0 then o x
    [| for i in 0 .. qty - 1 -> sink |]
