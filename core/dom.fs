module Sakhe.Dom


type IO<'T> = private | Action of (unit -> 'T)

[<AutoOpen>]
module MonadIO =
    let private raw  (Action f) = f
    let private run  io         = raw io ()
    let private eff  g   io     = raw io () |> g
    let private bind io  rest   = Action (fun () -> io |> eff rest |> run)
    let private comb io1 io2    = Action (fun () -> run io1; run io2)

    type IOBuilder() =
        member __.Return(x)              = Action (fun () -> x)
        member __.ReturnFrom(io) : IO<_> = io
        member __.Delay(g) : IO<_>       = g ()
        member __.Bind(io, rest)         = bind io rest
        member __.Combine(io1, io2)      = comb io1 io2

    let io = new IOBuilder()
    // let (|Action|) io = run io

[<AutoOpen>]
module PreludeIO =
    let putChar  (c:char)   = Action (fun () -> stdout.Write(c))
    let putStr   (s:string) = Action (fun () -> stdout.Write(s))
    let putStrLn (s:string) = Action (fun () -> stdout.WriteLine(s))
    let print x             = Action (fun () -> printfn "%A" x)
    let getChar     = Action (fun () -> stdin.Read() |> char |> string)
    let getLine     = Action (fun () -> stdin.ReadLine())
    let getContents = Action (fun () -> stdin.ReadToEnd())

type VTree =
    | VElement of VElement
    | VText of VText
and VText = {
    data: string
    node: Fable.Import.Browser.Text
    }
and VElement = {
    tag: string
    data: obj
    // indexElementMap: Map<int, VElement>
    // indexTextMap: Map<int, VText>
    // keyElementMap: Map<string, int>
    // lenght: int
    children: VTree []
    node: Fable.Import.Browser.Element
    }

type ATree =
    | Element of tag: string * key: string option * update: So<State.M<VElement, unit>>
    | Text of update: So<State.M<VText, unit>>

let private state = State.state
let rec private tryFind prove (i: int) (children: VTree []) =
    if i >= children.Length then
        None
    else
        let n = children.[i]
        if prove n then
            Some n
        else
            tryFind prove (i + 1) children
let inline private matchChildren
    (
        notFound: unit -> unit,
        atIndex: VTree -> unit,
        movedFrom: VTree * VTree -> unit
    )
    (prove: VTree -> bool, index: int, children: VTree []) =
    if index >= children.Length then
        notFound ()
    else
        let childAtIndex = children.[index]
        if prove childAtIndex then
            atIndex childAtIndex
        else
            match tryFind prove (index + 1) children with
            | Some moved -> movedFrom (moved, childAtIndex)
            | None -> notFound ()


let tree f s (p: So<Pith<ATree>>) =
    let ring (Pith pith): Pith<So<State.M<VElement, unit>>> =
        Pith <| fun o ->
            let mutable i = 0
            pith <| function
                | Element (tag, key, su) ->
                    let index = i
                    i <- i + 1
                    o << So.map (fun x -> state {
                        let! p = State.get
                        matchChildren
                            (
                                (fun () -> ()),
                                (function
                                    | VText _ -> ()
                                    | VElement e -> ()
                                ),
                                (fun (vtree, vtreeRef) -> ())
                            )
                            (
                                (fun vtree -> false),
                                index,
                                p.children
                            )
                        return ()
                    }) <| su
                | Text su ->
                    let index = i
                    i <- i + 1
                    o << So.map (fun x -> state {
                        let! p = State.get
                        // let! y = x
                        // let rez = AText.setRun {data = ""; node = Fable.Import.Browser.document.createTextNode ""}
                        return ()
                    }) <| su

    So.treeCombine (fun s1 s2 -> state {
        let! a = s1
        let! b = s2
        return f a b
    }) s (So.map ring p)
