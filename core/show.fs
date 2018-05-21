module Sakhe.Show
open Sakhe.State
open Most

Dom2.run () |> ignore

let init iv r = function
    | Some v -> r v
    | None   -> r iv

let rez = oTree << M.now <| fun o ->
    (o "key1").JNumber << M.now << init 1. <| fun s -> s + 1.
    (o "key2").JObject << M.now <| fun o ->
        (o "key1").JNumber << M.now << init 0. <| fun f -> f + 1.
        (o "key1").JNumber << M.now << init 0. <| fun f -> f + 1.
    (o "key3").JArray << M.now <| fun o ->
        o.JString << M.now << init "a" <| fun s -> s + s
        o.JString << M.now << init "b" <| fun s -> s + s
        o.JString << M.now << init "o" <| fun s -> s + s
        ()

open Fable.Import.Browser

let scheduler = Most.Scheduler.newDefaultScheduler ()
M.runEffects
    (
        rez |> M.scan (fun s r -> r (Some s))  (absurdObj ()) |> M.tap console.log
    )
    scheduler |> ignore
