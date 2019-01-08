namespace Sakhe
type [<Fable.Core.Erase>] IO<'i, 'o, 'b> = IO of (('o -> unit) -> 'i -> 'b)

module IO =
    let empty<'i,'o> = IO <| fun (o : 'o -> unit) (_:'i) -> ()
    let mappend mappend (IO l) (IO r) = IO <| fun o i -> mappend (l o i) (r o i)
    let run i o (IO io) = io o i
    let map f (IO io) = IO <| fun o i  -> f (io o i)
    let omap f (IO io) = IO <| fun o i  -> io (o << f) i
    let pmap f (IO p) = IO <| fun o i -> (f p) o i
    let bind f (IO p) = IO <| fun o i -> let a = p o i in let (IO p) = f a in p o i