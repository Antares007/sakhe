module Sakhe.Show
open UpdateMonad

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
    let writeRun (UM f) = let (Log l, v) = f NoState in l, v

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
        printfn "%A" (demo4 |> writeRun)

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
        printfn "%A" (readRun 40 demo2)

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
    let setRun s (UM f) = f (State s) |> snd

    module Demo =
        // Increments the state by one
        let demo5 = update {
            let! v = get
            do! set (v + 42)
            return "hello"}
        // Call 'demo5' repeatedly in a loop
        // and then return the final state
        let demo6 = update {
            // for _ in 1 .. 10 do
            let! v = get
            do! set (-42)
            let! m = demo5
            let! s = get
            return (m + (string s)) }
        // Run the sample with initial state 0
        printfn "%A" (demo6 |> setRun 0)

module Stream =
    open Fable.Import.Browser
    open Sakhe.S

    let s = stream {
        while true do
            yield ""
            yield "<"
            for i = 0 to 10 do
                do! delay (ms 100.) (now ())
                yield string i
            do! delay (ms 2000.) (now ())
            yield ">"
    }
    s |> tap console.log |> drain |> ignore
