#r @"C:\Users\abolk\.nuget\packages\dotnet.projinfo\0.9.0\lib\netstandard2.0\Dotnet.ProjInfo.Helpers.dll"
#r @"C:\Users\abolk\.nuget\packages\dotnet.projinfo\0.9.0\lib\netstandard2.0\Dotnet.ProjInfo.dll"
#r @"C:\Users\abolk\.nuget\packages\fsharp.compiler.service\25.0.1\lib\netstandard2.0\FSharp.Compiler.Service.dll"
#r @"C:\Users\abolk\.nuget\packages\netstandard.library\2.0.3\build\netstandard2.0\ref\netstandard.dll"

open System
open Microsoft.FSharp.Compiler.SourceCodeServices
let file = @"C:\code\sakhe\scripts\a.fsx"
let input = System.IO.File.ReadAllText file

// Create an interactive checker instance
let checker = FSharpChecker.Create()

/// Get untyped tree for a specified input
let getUntypedTree (file, input) =
  // Get compiler options for the 'project' implied by a single script file
  let projectOptions, _errors =
      checker.GetProjectOptionsFromScript(file, input)
      |> Async.RunSynchronously

  let parsingOptions, _errors = checker.GetParsingOptionsFromProjectOptions(projectOptions)

  // Run the first phase (untyped parsing) of the compiler
  let parseFileResults =
      checker.ParseFile(file, input, parsingOptions)
      |> Async.RunSynchronously

  match parseFileResults.ParseTree with
  | Some tree -> tree
  | None -> failwith "Something went wrong during parsing!"

getUntypedTree (file, input)
