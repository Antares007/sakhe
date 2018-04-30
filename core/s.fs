namespace Sakhe

open Fable.Core

module S =
    open M
    open Fable.Import.Browser
    open Most

    type Tag = string
    type Key = string
    type R<'a> = 'a -> unit

    type IRay<'a when 'a :> Element> =
        abstract Element: tag: Tag * r: Stream<R<Element>> * ?key: Key -> unit
        abstract Text: r: Stream<R<Text>> -> unit
        abstract Comment: r: Stream<R<Comment>> -> unit
        abstract Put: r: Stream<R<'a>> -> unit

    type Pith<'a when 'a :> Element> = IRay<'a> -> unit

    let o = JsInterop.createEmpty<IRay<HTMLDivElement>>


    let tree (mpith: Stream<Pith<'a>>): Stream<'a -> unit> =
        failwith "not implemented"


    let rez: Stream<HTMLAnchorElement -> unit> = tree (most.now (fun o ->
        o.Element ("div", most.now (fun x -> console.log x; ()))
        o.Text (most.now (fun x -> console.log x; ())) 
        o.Comment (most.now (fun x -> console.log x; ()))
        o.Put (most.now (fun x -> console.log x; ()))
    ))
