module Sakhe.New

type Patch = int

type Attributes =
    | Width of string
    | Height of string

type T =
    | Node  of kind: string * key: string option * ray: So<Patch>
    | Leaf  of kind: string * ray: So<string>
    | Attrs of attrs: So<Attributes list>
    | Ons   of string

// Free monad-interpreter in F# (based on: http://programmers.stackexchange.com/a/242803/145941)

type DSL<'next> =
    | Get of key: string *       (string -> 'next)
    | Set of key: string * value: string *  'next

let mapDSL f = function
    | Get (k, c)    -> Get (k,      c >> f)
    | Set (k, v, c) -> Set (k, v, f c     )

type FreeDSL<'a> =
    | Free   of DSL<FreeDSL<'a>>
    | Return of 'a

let rec bindFree f = function
    | Return a   -> f a
    | Free   dsl -> Free (mapDSL (bindFree f) dsl)

type FreeDSLBuilder () =
    member __.Return     x = Return x
    member __.ReturnFrom x = x
    member __.Zero      () = Return ()
    member __.Bind (ma, f) = bindFree f ma
let domain = FreeDSLBuilder ()

let liftFree action = Free (mapDSL Return action)

let get key       = liftFree (Get (key, id))
let set key value = liftFree (Set (key, value, ()))
//let end'<'a>      = liftFree End

let ex1  = Set ("alma", "bela", (Get ("alma", id)))
let exF1 = Free (Set ("alma", "bela", (Free (Get ("alma", Return)))))
let see = set "foo" "bar"
let exF2 = domain.Bind(see, (fun _ -> get "foo"))

let exF3 = domain {
    let! value  = get "foo"
    do! set "bar" value
    get "bar" |> ignore
}

let rec interpreter receiver = function
    | Free(Get(key, nextF))         ->  printfn "Free(Get(%s))" key
                                        nextF (sprintf "'get.%s'" key) |> interpreter receiver
    | Free(Set(key, value, next))   ->  printfn "Free(Set(%s, %s))" key value
                                        next                           |> interpreter receiver
    | Return v                      ->  printfn "Return %A" v
                                        receiver v

interpreter (printfn "Received: %A") exF1
interpreter (printfn "Received: %A") exF2
interpreter (printfn "Received: %A") exF3
