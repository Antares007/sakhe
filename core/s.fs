module Sakhe.A
open Sakhe.S

let a = 42

let test = IO <| function
    | IO.On.Run () -> Pith <| fun o -> o None
    | IO.On.Exn ((), err) -> Pith <| fun o -> o None

let rez = IO.run test

// tree << Pith <| fun o ->
//     o << Leaf <| function
//         | Task.On.Run  () -> None
//         | Task.On.Exn ((), err) -> None
//     o << Node << Pith <| fun o ->
//         o << Leaf <| function
//             | Task.On.Run  () -> None
//             | Task.On.Exn ((), err) -> None
// |> ignore
