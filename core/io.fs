namespace Sakhe

[<RequireQualifiedAccess>]
module IO =
    let return' f = fun i -> O <| fun o -> f o (I.run i)
