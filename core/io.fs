namespace Sakhe
open Fable.Core
type [<Erase>] IO<'i, 'o, 'b> = IO of (('o -> unit) -> 'i -> 'b)
module IO =
    [<Emit("(o => i => {})")>]
    let empty<'i,'o> = IO <| fun (o : 'o -> unit) (_:'i) -> ()
    [<Emit("((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))($0, $1, $2)")>]
    let mappend mappend (IO l) (IO r) = IO <| fun o i -> mappend (l o i) (r o i)
    [<Emit("$2($0)($1)")>]
    let run i o (IO io) = io o i
    [<Emit("((map, io) => o => i => map(io(o)(i)))($0,$1)")>]
    let map f (IO io) = IO <| fun o i  -> f (io o i)
    [<Emit("((omap, io) => o => i => io(a => o(omap(a)))(i))($0,$1)")>]
    let omap f (IO io) = IO <| fun o i  -> io (o << f) i
    [<Emit("((pmap, io) => o => i => pmap(io)(o)(i))($0,$1)")>]
    let pmap f (IO p) = IO <| fun o i -> let (IO io2) = (f p) in io2 o i
    [<Emit("((bind, io) => o => i => bind(io(o)(i))(o)(i))($0,$1)")>]
    let bind f (IO io) = IO <| fun o i -> run i o (f (io o i))