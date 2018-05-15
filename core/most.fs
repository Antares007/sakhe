[<Fable.Core.Import("*", "@most/core")>]
module Most
open Fable.Core
open Fable.Import.JS
open MostTypes

let archilBolkvadze = ("არჩილ ბოლქვაძე", 42)

let now (_:'a): 'a Stream = JsInterop.importMember "@most/core"

let never (_: unit): 'a Stream = jsNative
let empty (_: unit): 'a Stream = jsNative
let at (_: Time) (_:'a) : 'a Stream = jsNative
let newStream (_: 'a Sink -> Scheduler -> Disposable): 'a Stream = jsNative
let periodic (_: int): unit Stream = jsNative

let startWith (_: 'a) (_: 'a Stream): Stream<'a> = jsNative

let switchLatest (_: 'a Stream Stream): 'a Stream = jsNative

let until (_: 'b Stream) (_: 'a Stream): 'a Stream = jsNative
let since (_: 'b Stream) (_: 'a Stream): 'a Stream = jsNative
let during (_: 'b Stream Stream) (_: 'a Stream): 'a Stream = jsNative
let map (_: 'a -> 'b)  (_:'a Stream): 'b Stream = jsNative
let tap (_: 'a -> unit)  (_: 'a Stream): 'a Stream = jsNative
let constant (_: 'b)  (_: 'a Stream): 'b Stream = jsNative


let scan (_: 'b -> 'a -> 'b)  (_: 'b) (_: 'a Stream): 'b Stream = jsNative


let take (_: int) (_: 'a Stream): 'a Stream = jsNative
let skip (_: int) (_: 'a Stream): 'a Stream = jsNative
let takeWhile (_: 'a -> bool) (_: 'a Stream): 'a Stream = jsNative
let skipWhile (_: 'a -> bool) (_: 'a Stream): 'a Stream = jsNative
let skipAfter (_: 'a -> bool) (_: 'a Stream): 'a Stream = jsNative
let slice (_: int) (_: int) (_: 'a Stream): 'a Stream = jsNative


let merge (_: 'A Stream) (_: 'A Stream): 'A Stream = jsNative
let mergeConcurrently (_: int) (_: 'a Stream Stream): 'a Stream = jsNative
let multicast (_: Stream<'A>): Stream<'A> = jsNative


let combine  (_: 'a -> 'b -> 'ab) (_: 'a Stream) (_:'b Stream): 'ab Stream = jsNative


let runEffects (_: 'a Stream) (_: Scheduler): Promise<unit> = jsNative
let run (_: 'a Sink) (_: Scheduler) (_: 'a Stream): Disposable = jsNative
