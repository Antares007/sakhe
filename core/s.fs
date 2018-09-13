module Sakhe.A
open Sakhe.S

let a = 42


// tree << Pith <| fun o ->
//     o << Leaf <| function
//         | Task.On.Run  () -> None
//         | Task.On.Exn ((), err) -> None
//     o << Node << Pith <| fun o ->
//         o << Leaf <| function
//             | Task.On.Run  () -> None
//             | Task.On.Exn ((), err) -> None
// |> ignore
