module Sakhe.Show
open Fable.Import.Browser
open UpdateMonad

module Writer =
    /// Writer monad has no readable state
    type WriterState = NoState

    /// Updates of writer monad form a list
    type WriterUpdate<'TLog> =
      | Log of list<'TLog>
      /// Returns the empty log (monoid unit)
      static member Unit = Log []
      /// Combines two logs (operation of the monoid)
      static member Combine(Log a, Log b) = Log(List.append a b)
      /// Applying updates to state does not affect the state
      static member Apply(NoState, _) = NoState

    /// Writes the specified value to the log
    let write v = UM (fun s -> (Log [v], ()))
    /// Runs a "writer monad computation" and returns
    /// the log, together with the final result
    let writeRun (UM f) = let (Log l, v) = f NoState in l, v

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
    /// The state of the reader is 'int'
    type ReaderState = int
    /// Trivial monoid of updates
    type ReaderUpdate =
      | NoUpdate
      static member Unit = NoUpdate
      static member Combine(NoUpdate, NoUpdate) = NoUpdate
      static member Apply(s, NoUpdate) = s

    /// Read the current state (int) and return it as 'int'
    let read = UM (fun (s:ReaderState) ->
      (NoUpdate, s))
    /// Run computation and return the result
    let readRun (s:ReaderState) (UM f) = f s |> snd

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
