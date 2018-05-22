module Sakhe.Show
open Most
open Fable.Import.Browser
open Sakhe.State

Dom2.run () |> ignore

let run1 () =
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

    let scheduler = Most.Scheduler.newDefaultScheduler ()
    M.runEffects
        (
            rez |> M.scan (fun s r -> r (Some s))  (absurdObj ()) |> M.tap console.log
        )
        scheduler |> ignore
// run1 ()

open Sakhe.State2

let run2 () =
    let init iv r = function
        | Some v -> r v
        | None   -> r iv

    let rez = oTree << M.now <| fun o ->
        ("k1", RNumber (M.now << init 1. <| fun s -> s + 1.)) |> o
        ("k2", RObject (M.now <| fun o ->
            ("k2.1", RNumber (M.now << init 2. <| fun s -> s + 1.)) |> o
            ("k2.2", RNumber (M.now << init 3. <| fun s -> s + 1.)) |> o
            ("k2.3", RObject (M.now  <| fun o ->
                ("k2.3.1", RNumber (M.now << init 4. <| fun s -> s + 1.)) |> o
            )) |> o
       )) |> o
        ("k3", RArray (M.now <| fun o ->
            (0, RNumber (M.now << init 2. <| fun s -> s + 1.)) |> o
            (1, RNumber (M.now << init 3. <| fun s -> s + 1.)) |> o
            (2, RObject (M.now <| fun o ->
                ("k2.3.1", RNumber (M.now << init 4. <| fun s -> s + 1.)) |> o
            )) |> o
       )) |> o

    let scheduler = Most.Scheduler.newDefaultScheduler ()
    M.runEffects
        (
            rez |> M.scan (fun s r -> r (Some s))  (absurdObj ()) |> M.tap console.log
        )
        scheduler |> ignore
run2()
