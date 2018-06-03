module Sakhe.Show
open UpdateMonad
open System

module Writer =
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
    /// Wraps a state of type 'T
    type StateState<'T> = State of 'T

    /// Represents updates on state of type 'T
    type StateUpdate<'T> =
        | Set of 'T
        | SetNop

        /// Empty update - do not change the state
        static member Unit = SetNop
        /// Combine updates - return the latest (rightmost) 'Set' update
        static member Combine(a, b) =
            match a, b with
            | SetNop, v -> v
            | v, SetNop -> v
            | Set _, Set b -> Set b
        /// Apply update to a state - the 'Set' update changes the state
        static member Apply(s, p) =
            match p with
            | SetNop -> s
            | Set s -> State s

    /// Set the state to the specified value
    let set s = UM (fun _ -> (Set s,()))
    /// Get the current state
    let get = UM (fun (State s) -> (SetNop, s))
    /// Run a computation using a specified initial state
    let setRun s (UM f) = f (State s)

    module Demo =
        let tree<'s, 'r> pith: UpdateMonad<StateState<'s>, StateUpdate<'s>, 'r> S =
            failwith ""

        // Increments the state by one
        let demo5 = update {
            do! set ([20])
        }

        // Call 'demo5' repeatedly in a loop
        // and then return the final state
        let insert = update {
            let! s = get
            do! set (10 :: s)
        }

        let demo6 = update {
            do! demo5
            do! insert
            do! insert
            do! insert
            let! s = get
            return sprintf "%A" s }

        // Run the sample with initial state 0
        printfn "%A" (demo6 |> setRun [])

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
    let create f =
        let mutable disposed = false
        {new IDisposable with
            member __.Dispose () =
                if not disposed then
                    disposed <- true
                    f()}
