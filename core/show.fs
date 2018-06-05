module Sakhe.Show

module Writer =
    open Update
    type WriterState = NoState

    type WriterUpdate<'TLog> =
        | Log of list<'TLog>

            /// Returns the empty log (monoid unit)
            static member Unit = Log []
            /// Combines two logs (operation of the monoid)
            static member Combine(Log a, Log b) = Log(List.append a b)
            /// Applying updates to state does not affect the state
            static member Apply(NoState, _) = NoState

    /// Writes the specified value to the log
    let write v = UM (fun _ -> (Log [v], ()))

    /// Runs a "writer monad computation" and returns
    /// the log, together with the final result
    let writeRun (UM f) =
        let (Log l, v) = f NoState
        l, v

    module Demo =
        /// Writes '20' to the log and returns "world"
        let demo3 = update {
          do! write 20
          return "world" }

        /// Calls 'demo3' and then writes 10 to the log
        let demo4 = update {
          let! w = demo3
          do! write 10
          return "Hello " + w }

        /// Returns: [[20,10],"Hello world"]
        // printfn "%A" (demo4 |> writeRun)

module Reader =
    open Update
    type ReaderState = int

    type ReaderUpdate =
        | NoUpdate

            static member Unit = NoUpdate
            static member Combine(NoUpdate, NoUpdate) = NoUpdate
            static member Apply(s, NoUpdate) = s

    /// Read the current state (int) and return it as 'int'
    let read = UM (fun (s:ReaderState) -> (NoUpdate, s))

    /// Run computation and return the result
    let readRun (s:ReaderState) (UM f) = f s |> snd

    module Demo =
        /// Returns state + 1
        let demo1 = update {
          let! v = read
          return v + 1 }

        /// Returns the result of demo1 + 1
        let demo2 = update {
          let! v = demo1
          return v + 1 }

        /// Returns: 42
        // printfn "%A" (readRun 40 demo2)

module State =
    open S
    open Update
    open State

    let u l = update {
        let! state = get
        match state with
        | [] -> do! set ([1])
        | h::_ -> do! set ((h + 1) :: state)
        return l + sprintf "%A" state
    }

    ///[{"tag":0,"data":[4,3,2,1]},"I[3; 2; 1]/O[2; 1]/B[1]/A[]"]
    tree (fun a b -> a + "/" + b) (stream {yield u "I"}) <| S.stream {
        yield Pith <| fun o ->

            o (stream {
                yield u "A"
                yield! stream {
                    yield u "A_"
                }
                yield u "A2"
            })

            o <| stream {
                yield u "B"
            }

            stream {
                yield u "O"
            } |> o
    }
    |> S.scan (fun s m ->
        let (u, a) = setRun s m
        printfn "a: %A" a
        let (State s) = apply (State s) u
        s) []
    |> S.tap (printfn "s: %A")
    |> S.drain
    |> ignore

module Stream =
    open Fable.Import.Browser
    open Sakhe.S

    let s = stream {
        while true do
            yield ""
            yield "<"
            for i = 1 to 3 do
                do! at (ms 100.) ()
                yield string i
            yield ">"
            do! at (ms 2000.) ()
    }
    s |> take 22 |> tap console.log |> drain |> ignore

module Disposable =
    open System
    let create f =
        let mutable disposed = false
        {new IDisposable with
            member __.Dispose () =
                if not disposed then
                    disposed <- true
                    f()}
