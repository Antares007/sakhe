#load "../scripts/compiler.fsx"
#load "dllrefs.fsx"
#load "parsec.fsx"

// let f = Compiler.init ()


/// Tokenize a single line of F# code
[<AutoOpen>]
module Priv =
    open Fable.Core.JsInterop

    type IBuffer = interface end
    let readFileSync (path: string): IBuffer = Fable.Core.JsInterop.importMember "fs"
    let toString (b:IBuffer) = b?toString()

// let checker = f.CreateChecker (Dllrefs.references, unbox << readFileSync << sprintf "../out/metadata2/%s.txt")
let load path =
    let source = readFileSync path


    1
open Parsec

type Position = char * int

type Expr =
  | Number of int
  | Binary of Expr * char * Expr
  | Reference of Position

type State =
  { Cols : char list
    Rows : int list
    Active : Position option
    Cells : Map<Position, string> }

type Event =
  | StartEdit of Position
  | UpdateValue of Position * string

let integer     = oneOrMore number |> map (fun nums -> nums |> List.fold (fun res n -> res * 10 + (int n - int '0')) 0)
let number      = integer |> map Number
let operator    = char '*' <|> char '+' <|> char '-' <|> char '/'
let letter      = pred (fun t -> ('A' <= t && t <= 'Z' ) || ( 'a' <= t && t <= 'z'))
let reference   = letter <*> integer |> map Reference

let exprSetter, expr = slot ()

let brack       = char '(' <*>> anySpace <*>> expr <<*> anySpace <<*> char ')'
let term        = number <|> brack <|> reference
let binary      = term <<*> anySpace <*> operator <<*> anySpace <*> term |> map (fun ((l,op), r) -> Binary(l, op, r))
let exprAux     = binary <|> term

exprSetter.Set exprAux

let formula     = char '=' <*>> anySpace <*>> expr
let equation    = anySpace <*>> (formula <|> number) <<*> anySpace

let directive   = char '#' <*>> (oneOrMore letter) <<*> anySpace
