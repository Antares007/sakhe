"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckerImpl$$$$002Ector$$Z65B7C535 = CheckerImpl$$$$002Ector$$Z65B7C535;
exports.CheckerImpl$$get_Checker = CheckerImpl$$get_Checker;
exports.mapErrors = mapErrors;
exports.ParseResults$$$$002Ector$$70FD38B6 = ParseResults$$$$002Ector$$70FD38B6;
exports.ParseResults$$get_OptimizedProject = ParseResults$$get_OptimizedProject;
exports.ParseResults$$get_UnoptimizedProject = ParseResults$$get_UnoptimizedProject;
exports.ParseResults$$get_ParseFile = ParseResults$$get_ParseFile;
exports.ParseResults$$get_CheckFile = ParseResults$$get_CheckFile;
exports.ParseResults$$get_CheckProject = ParseResults$$get_CheckProject;
exports.ParseFilesResults$$$$002Ector$$Z7FFE33CA = ParseFilesResults$$$$002Ector$$Z7FFE33CA;
exports.ParseFilesResults$$get_OptimizedProject = ParseFilesResults$$get_OptimizedProject;
exports.ParseFilesResults$$get_UnoptimizedProject = ParseFilesResults$$get_UnoptimizedProject;
exports.ParseFilesResults$$get_ParseFiles = ParseFilesResults$$get_ParseFiles;
exports.ParseFilesResults$$get_CheckFiles = ParseFilesResults$$get_CheckFiles;
exports.ParseFilesResults$$get_CheckProject = ParseFilesResults$$get_CheckProject;
exports.findIdents = findIdents;
exports.findLongIdents = findLongIdents;
exports.findLongIdentsAndResidue = findLongIdentsAndResidue;
exports.convertGlyph = convertGlyph;
exports.makeProjOptions = makeProjOptions;
exports.makeProject = makeProject;
exports.parseFSharpProject = parseFSharpProject;
exports.parseFSharpProjectFiles = parseFSharpProjectFiles;
exports.tooltipToString = tooltipToString;
exports.getDeclarationLocation = getDeclarationLocation;
exports.getToolTipAtLocation = getToolTipAtLocation;
exports.getCompletionsAtLocation = getCompletionsAtLocation;
exports.makeCompiler = makeCompiler;
exports.compileAst = compileAst;
exports.init = init;
exports.ParseFilesResults = exports.ParseResults = exports.CheckerImpl = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _Interfaces = require("./Interfaces");

var _SymbolHelpers = require("./symbols/SymbolHelpers");

var _service = require("./service/service");

var _Array = require("./fable-core.2.0.3/Array");

var _ServiceUntypedParse = require("./service/ServiceUntypedParse");

var _Option = require("./fable-core.2.0.3/Option");

var _Lexer = require("./Lexer");

var _List = require("./fable-core.2.0.3/List");

var _Date = require("./fable-core.2.0.3/Date");

var _Exprs = require("./symbols/Exprs");

var _Prelude = require("./Global/Prelude");

var _Seq = require("./fable-core.2.0.3/Seq");

var _Util = require("./fable-core.2.0.3/Util");

var _Map = require("./fable-core.2.0.3/Map");

var _State = require("./Transforms/State");

var _service_shim = require("./fcs-fable/service_shim");

var _AsyncBuilder = require("./fable-core.2.0.3/AsyncBuilder");

var _range = require("./fsharp/range");

var _ServiceLexing = require("./service/ServiceLexing");

var _QuickParse = require("./service/QuickParse");

var _ServiceDeclarationLists = require("./service/ServiceDeclarationLists");

var _Compiler = require("./Global/Compiler");

var _FSharp2Fable = require("./Transforms/FSharp2Fable");

var _FableTransforms = require("./Transforms/FableTransforms");

var _Fable2Babel = require("./Transforms/Fable2Babel");

var _ast_print = require("./fcs-fable/ast_print");

var _String = require("./fable-core.2.0.3/String");

const CheckerImpl = (0, _Types.declare)(function CheckerImpl(checker) {
  const $this$$1 = this;
  $this$$1.checker = checker;
});
exports.CheckerImpl = CheckerImpl;

function CheckerImpl$$$$002Ector$$Z65B7C535(checker) {
  return this != null ? CheckerImpl.call(this, checker) : new CheckerImpl(checker);
}

function CheckerImpl$$get_Checker(__) {
  return __.checker;
}

function mapErrors(projectResults) {
  return (0, _Array.map)(function mapping(er) {
    return new _Interfaces.Error$((0, _SymbolHelpers.FSharpErrorInfo$$get_FileName)(er), (0, _SymbolHelpers.FSharpErrorInfo$$get_StartLineAlternate)(er), (0, _SymbolHelpers.FSharpErrorInfo$$get_StartColumn)(er), (0, _SymbolHelpers.FSharpErrorInfo$$get_EndLineAlternate)(er), (0, _SymbolHelpers.FSharpErrorInfo$$get_EndColumn)(er), (0, _SymbolHelpers.FSharpErrorInfo$$get_Message)(er), (0, _SymbolHelpers.FSharpErrorInfo$$get_Severity)(er).tag === 0 ? true : false);
  }, (0, _service.FSharpCheckProjectResults$$get_Errors)(projectResults), Array);
}

const ParseResults = (0, _Types.declare)(function ParseResults(optimizedProject, unoptimizedProject, parseFile, checkFile, checkProject) {
  const $this$$2 = this;
  $this$$2.optimizedProject = optimizedProject;
  $this$$2.unoptimizedProject = unoptimizedProject;
  $this$$2.parseFile = parseFile;
  $this$$2.checkFile = checkFile;
  $this$$2.checkProject = checkProject;
});
exports.ParseResults = ParseResults;

function ParseResults$$$$002Ector$$70FD38B6(optimizedProject, unoptimizedProject, parseFile, checkFile, checkProject) {
  return this != null ? ParseResults.call(this, optimizedProject, unoptimizedProject, parseFile, checkFile, checkProject) : new ParseResults(optimizedProject, unoptimizedProject, parseFile, checkFile, checkProject);
}

function ParseResults$$get_OptimizedProject(__$$1) {
  return __$$1.optimizedProject.Value;
}

function ParseResults$$get_UnoptimizedProject(__$$2) {
  return __$$2.unoptimizedProject.Value;
}

function ParseResults$$get_ParseFile(__$$3) {
  return __$$3.parseFile;
}

function ParseResults$$get_CheckFile(__$$4) {
  return __$$4.checkFile;
}

function ParseResults$$get_CheckProject(__$$5) {
  return __$$5.checkProject;
}

Object.defineProperty(ParseResults.prototype, "Errors", {
  "get": function () {
    const __$$6 = this;
    return mapErrors(__$$6.checkProject);
  }
});
const ParseFilesResults = (0, _Types.declare)(function ParseFilesResults(optimizedProject$$1, unoptimizedProject$$1, parseFiles, checkFiles, checkProject$$1) {
  const $this$$3 = this;
  $this$$3.optimizedProject = optimizedProject$$1;
  $this$$3.unoptimizedProject = unoptimizedProject$$1;
  $this$$3.parseFiles = parseFiles;
  $this$$3.checkFiles = checkFiles;
  $this$$3.checkProject = checkProject$$1;
  $this$$3.results = (0, _Array.zip)($this$$3.parseFiles, $this$$3.checkFiles);
});
exports.ParseFilesResults = ParseFilesResults;

function ParseFilesResults$$$$002Ector$$Z7FFE33CA(optimizedProject$$1, unoptimizedProject$$1, parseFiles, checkFiles, checkProject$$1) {
  return this != null ? ParseFilesResults.call(this, optimizedProject$$1, unoptimizedProject$$1, parseFiles, checkFiles, checkProject$$1) : new ParseFilesResults(optimizedProject$$1, unoptimizedProject$$1, parseFiles, checkFiles, checkProject$$1);
}

function ParseFilesResults$$get_OptimizedProject(__$$7) {
  return __$$7.optimizedProject.Value;
}

function ParseFilesResults$$get_UnoptimizedProject(__$$8) {
  return __$$8.unoptimizedProject.Value;
}

function ParseFilesResults$$get_ParseFiles(__$$9) {
  return __$$9.parseFiles;
}

function ParseFilesResults$$get_CheckFiles(__$$10) {
  return __$$10.checkFiles;
}

function ParseFilesResults$$get_CheckProject(__$$11) {
  return __$$11.checkProject;
}

Object.defineProperty(ParseFilesResults.prototype, "Errors", {
  "get": function () {
    const __$$12 = this;
    return mapErrors(__$$12.checkProject);
  }
});

ParseFilesResults.prototype.GetResults = function (fileName) {
  const __$$13 = this;
  const res = (0, _Array.tryFind)(function predicate(tupledArg) {
    return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_FileName)(tupledArg[0]) === fileName;
  }, __$$13.results);
  return (0, _Option.defaultArg)(res, null, function mapping$$1(tupledArg$$1) {
    return ParseResults$$$$002Ector$$70FD38B6(__$$13.unoptimizedProject, __$$13.optimizedProject, tupledArg$$1[0], tupledArg$$1[1], __$$13.checkProject);
  });
};

function findIdents(col, lineStr, lookupType) {
  if (lineStr === "") {
    return null;
  } else {
    return (0, _Option.defaultArg)((0, _Lexer.getSymbol)(0, col, lineStr, lookupType, []), null, function (sym) {
      return sym.Text === "" ? null : [sym.RightColumn, (0, _Array.toList)(sym.Text.split("."))];
    });
  }
}

function findLongIdents(col$$1, lineStr$$1) {
  return findIdents(col$$1, lineStr$$1, new _Lexer.SymbolLookupKind(0, "Fuzzy"));
}

function findLongIdentsAndResidue(col$$2, lineStr$$2) {
  const lineStr$$3 = lineStr$$2.substr(0, col$$2);
  const matchValue$$2 = (0, _Lexer.getSymbol)(0, col$$2, lineStr$$3, new _Lexer.SymbolLookupKind(2, "ByLongIdent"), []);

  if (matchValue$$2 != null) {
    const sym$$2 = matchValue$$2;

    if (sym$$2.Text === "") {
      return [(0, _Types.L)(), ""];
    } else {
      const text = sym$$2.Text;
      const res$$1 = (0, _List.reverse)((0, _List.ofArray)(text.split(".")));

      if (lineStr$$3[col$$2 - 1] === ".") {
        return [(0, _List.reverse)(res$$1), ""];
      } else {
        if (res$$1.tail == null) {
          return [(0, _Types.L)(), ""];
        } else {
          const tail = res$$1.tail;
          const head = res$$1.head;
          return [(0, _List.reverse)(tail), head];
        }
      }
    }
  } else {
    return [(0, _Types.L)(), ""];
  }
}

function convertGlyph(glyph) {
  var $target$$8;

  switch (glyph.tag) {
    case 14:
    case 17:
    case 16:
    case 15:
      $target$$8 = 0;
      break;

    case 3:
    case 4:
      $target$$8 = 1;
      break;

    case 1:
      $target$$8 = 2;
      break;

    case 18:
      $target$$8 = 3;
      break;

    case 8:
      $target$$8 = 4;
      break;

    case 11:
    case 12:
      $target$$8 = 5;
      break;

    case 9:
    case 10:
    case 19:
      $target$$8 = 6;
      break;

    case 13:
      $target$$8 = 7;
      break;

    case 7:
      $target$$8 = 8;
      break;

    case 2:
      $target$$8 = 9;
      break;

    case 20:
    case 6:
      $target$$8 = 10;
      break;

    case 5:
      $target$$8 = 11;
      break;

    default:
      $target$$8 = 0;
  }

  switch ($target$$8) {
    case 0:
      {
        return "class";
      }

    case 1:
      {
        return "enum";
      }

    case 2:
      {
        return "value";
      }

    case 3:
      {
        return "variable";
      }

    case 4:
      {
        return "interface";
      }

    case 5:
      {
        return "module";
      }

    case 6:
      {
        return "method";
      }

    case 7:
      {
        return "property";
      }

    case 8:
      {
        return "field";
      }

    case 9:
      {
        return "function";
      }

    case 10:
      {
        return "error";
      }

    case 11:
      {
        return "event";
      }
  }
}

function makeProjOptions(projectFileName, fileNames) {
  const projOptions = new _service.FSharpProjectOptions(projectFileName, null, fileNames, [], [], false, false, (0, _Date.now)(), null, (0, _Types.L)(), null, null);
  return projOptions;
}

function makeProject(projectOptions, projectResults$$1, optimized) {
  const implFiles = (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$2(file) {
    return [(0, _Prelude.Path$$$normalizePath)((0, _Exprs.FSharpImplementationFileContents$$get_FileName)(file)), file];
  }, (0, _Exprs.FSharpAssemblyContents$$get_ImplementationFiles)(optimized ? (0, _service.FSharpCheckProjectResults$$GetOptimizedAssemblyContents)(projectResults$$1) : (0, _service.FSharpCheckProjectResults$$get_AssemblyContents)(projectResults$$1))), {
    Compare: _Util.comparePrimitives
  });
  const project = (0, _State.Project$$$$002Ector$$6CF661BB)(projectOptions, implFiles, (0, _service.FSharpCheckProjectResults$$get_Errors)(projectResults$$1), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), "", false);
  return project;
}

function parseFSharpProject(checker$$1, projectFileName$$1, fileName$$1, source$$1) {
  const patternInput = (0, _service_shim.InteractiveChecker$$ParseAndCheckScript$$30230F9B)(checker$$1, projectFileName$$1, fileName$$1, source$$1);
  const projectOptions$$1 = makeProjOptions(projectFileName$$1, [fileName$$1]);
  const optimizedProject$$2 = new _Util.Lazy(function () {
    return makeProject(projectOptions$$1, patternInput[2], true);
  });
  const unoptimizedProject$$2 = new _Util.Lazy(function () {
    return makeProject(projectOptions$$1, patternInput[2], false);
  });
  return ParseResults$$$$002Ector$$70FD38B6(optimizedProject$$2, unoptimizedProject$$2, patternInput[0], patternInput[1], patternInput[2]);
}

function parseFSharpProjectFiles(checker$$2, projectFileName$$2, fileNames$$1, sources) {
  const patternInput$$1 = (0, _service_shim.InteractiveChecker$$ParseAndCheckProject$$2E5C035B)(checker$$2, projectFileName$$2, fileNames$$1, sources);
  const projectOptions$$2 = makeProjOptions(projectFileName$$2, fileNames$$1);
  const optimizedProject$$3 = new _Util.Lazy(function () {
    return makeProject(projectOptions$$2, patternInput$$1[2], true);
  });
  const unoptimizedProject$$3 = new _Util.Lazy(function () {
    return makeProject(projectOptions$$2, patternInput$$1[2], false);
  });
  return ParseFilesResults$$$$002Ector$$Z7FFE33CA(optimizedProject$$3, unoptimizedProject$$3, patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]);
}

function tooltipToString(el) {
  const dataToString = function dataToString(data) {
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      var x$$1;
      return (0, _Seq.append)(data.ParamName == null ? (0, _Seq.singleton)(data.MainDescription) : (x$$1 = data.ParamName, (0, _Seq.singleton)(x$$1 + ": " + data.MainDescription)), (0, _Seq.delay)(function () {
        var doc;
        return (0, _Seq.append)(data.XmlDoc.tag === 1 ? (doc = data.XmlDoc.fields[0], (0, _Seq.singleton)(doc)) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
          return (0, _Seq.append)(data.TypeMapping, (0, _Seq.delay)(function () {
            if (data.Remarks == null) {
              return (0, _Seq.empty)();
            } else {
              const x$$2 = data.Remarks;
              return (0, _Seq.singleton)(x$$2);
            }
          }));
        }));
      }));
    }), Array);
  };

  switch (el.tag) {
    case 1:
      {
        const els = el.fields[0];
        return (0, _Array.concat)((0, _Seq.map)(dataToString, els), Array);
      }

    case 2:
      {
        const err = el.fields[0];
        return [err];
      }

    default:
      {
        return [];
      }
  }
}

function getDeclarationLocation(parseResults$$2, line, col$$3, lineText) {
  const builder$0040 = _AsyncBuilder.singleton;
  return builder$0040.Delay(function () {
    const matchValue$$7 = findLongIdents(col$$3 - 1, lineText);

    if (matchValue$$7 != null) {
      const identIsland = matchValue$$7[1];
      const col$$4 = matchValue$$7[0] | 0;
      return builder$0040.Bind((0, _service.FSharpCheckFileResults$$GetDeclarationLocation$$Z5D1F4C05)(ParseResults$$get_CheckFile(parseResults$$2), line, col$$4, lineText, identIsland), function (_arg1$$1) {
        const declarations = _arg1$$1;
        var $target$$9;

        switch (declarations.tag) {
          case 2:
            $target$$9 = 0;
            break;

          case 1:
            $target$$9 = 1;
            break;

          default:
            $target$$9 = 0;
        }

        switch ($target$$9) {
          case 0:
            {
              return builder$0040.Return(null);
            }

          case 1:
            {
              const range = declarations.fields[0];
              return builder$0040.Return(new _Interfaces.Range$((0, _range.range$$get_StartLine)(range), (0, _range.range$$get_StartColumn)(range), (0, _range.range$$get_EndLine)(range), (0, _range.range$$get_EndColumn)(range)));
            }
        }
      });
    } else {
      return builder$0040.Return(null);
    }
  });
}

function getToolTipAtLocation(parseResults$$3, line$$1, col$$5, lineText$$1) {
  const builder$0040$$1 = _AsyncBuilder.singleton;
  return builder$0040$$1.Delay(function () {
    const matchValue$$8 = findLongIdents(col$$5 - 1, lineText$$1);

    if (matchValue$$8 != null) {
      const identIsland$$1 = matchValue$$8[1];
      const col$$6 = matchValue$$8[0] | 0;
      return builder$0040$$1.Bind((0, _service.FSharpCheckFileResults$$GetToolTipText$$Z49C39EE8)(ParseResults$$get_CheckFile(parseResults$$3), line$$1, col$$6, lineText$$1, identIsland$$1, _ServiceLexing.FSharpTokenTag$$$Identifier), function (_arg1$$2) {
        const els$$1 = _arg1$$2.fields[0];
        return builder$0040$$1.Return((0, _Array.concat)((0, _Seq.map)(tooltipToString, els$$1), Array));
      });
    } else {
      return builder$0040$$1.Return(["Cannot find ident for tooltip"]);
    }
  });
}

function getCompletionsAtLocation(parseResults$$4, line$$2, col$$7, lineText$$2) {
  const builder$0040$$2 = _AsyncBuilder.singleton;
  return builder$0040$$2.Delay(function () {
    const patternInput$$2 = findLongIdentsAndResidue(col$$7 - 1, lineText$$2);
    const longName = (0, _QuickParse.QuickParse$$$GetPartialLongNameEx)(lineText$$2, col$$7 - 1);
    const longName$$1 = new _QuickParse.PartialLongName(patternInput$$2[0], patternInput$$2[1], longName.EndColumn, longName.LastDotPos);
    return builder$0040$$2.Bind((0, _service.FSharpCheckFileResults$$GetDeclarationListInfo$$52CF53AB)(ParseResults$$get_CheckFile(parseResults$$4), ParseResults$$get_ParseFile(parseResults$$4), line$$2, lineText$$2, longName$$1, function () {
      return (0, _Types.L)();
    }), function (_arg1$$3) {
      const decls = _arg1$$3;
      return builder$0040$$2.Return((0, _Array.map)(function mapping$$3(decl) {
        return new _Interfaces.Completion((0, _ServiceDeclarationLists.FSharpDeclarationListItem$$get_Name)(decl), convertGlyph((0, _ServiceDeclarationLists.FSharpDeclarationListItem$$get_Glyph)(decl)));
      }, (0, _ServiceDeclarationLists.FSharpDeclarationListInfo$$get_Items)(decls), Array));
    });
  });
}

function makeCompiler(fableCore, fileName$$2, project$$1) {
  const options = new _Compiler.CompilerOptions(true, false, false);
  const com = (0, _State.Compiler$$$$002Ector$$Z736F6645)(fileName$$2, project$$1, options, fableCore);
  return com;
}

function compileAst(com$$1, project$$2) {
  return (0, _Fable2Babel.Compiler$$$transformFile)(com$$1, (0, _FableTransforms.optimizeFile)(com$$1, (0, _FSharp2Fable.transformFile)(com$$1, (0, _State.Project$$get_ImplementationFiles)(project$$2))));
}

function init() {
  return {
    CreateChecker(references, readAllBytes) {
      const defines = ["DEBUG"];
      return CheckerImpl$$$$002Ector$$Z65B7C535((0, _service_shim.InteractiveChecker$$$Create$$5340C94F)(references, readAllBytes, defines));
    },

    ParseFSharpProject(checker$$3, fileName$$3, source$$2) {
      const c = checker$$3;
      const projectFileName$$3 = "project";
      return parseFSharpProject(CheckerImpl$$get_Checker(c), projectFileName$$3, fileName$$3, source$$2);
    },

    ParseFSharpProjectFiles(checker$$4, projectFileName$$4, fileNames$$2, sources$$1) {
      const c$$1 = checker$$4;
      return parseFSharpProjectFiles(CheckerImpl$$get_Checker(c$$1), projectFileName$$4, fileNames$$2, sources$$1);
    },

    GetParseErrors(parseResults$$5) {
      return parseResults$$5.Errors;
    },

    GetDeclarationLocation(parseResults$$6, line$$3, col$$8, lineText$$3) {
      const res$$2 = parseResults$$6;
      return getDeclarationLocation(res$$2, line$$3, col$$8, lineText$$3);
    },

    GetToolTipText(parseResults$$7, line$$4, col$$9, lineText$$4) {
      const res$$3 = parseResults$$7;
      return getToolTipAtLocation(res$$3, line$$4, col$$9, lineText$$4);
    },

    GetCompletionsAtLocation(parseResults$$8, line$$5, col$$10, lineText$$5) {
      const res$$4 = parseResults$$8;
      return getCompletionsAtLocation(res$$4, line$$5, col$$10, lineText$$5);
    },

    CompileToBabelAst(fableCore$$1, parseResults$$9, fileName$$4, optimized$$1) {
      const res$$5 = parseResults$$9;
      const project$$3 = optimized$$1 ? ParseResults$$get_OptimizedProject(res$$5) : ParseResults$$get_UnoptimizedProject(res$$5);
      const com$$2 = makeCompiler(fableCore$$1, fileName$$4, project$$3);
      const ast = compileAst(com$$2, project$$3);
      const errors = (0, _Array.ofList)((0, _List.map)(function mapping$$4(log) {
        const r = (0, _Option.defaultArg)(log.Range, (0, _Prelude.SourceLocation$$$get_Empty)());
        return new _Interfaces.Error$(fileName$$4, r.start.line, r.start.column, r.end.line, r.end.column, log.Tag === "FABLE" ? "FABLE: " + log.Message : log.Message, log.Severity.tag === 0 ? true : log.Severity.tag === 2 ? true : false);
      }, (0, _State.Compiler$$GetLogs)(com$$2)), Array);
      return [ast, (0, _Array.append)(parseResults$$9.Errors, errors, Array)];
    },

    FSharpAstToString(parseResults$$10, optimized$$2) {
      const res$$6 = parseResults$$10;
      const fileName$$5 = (0, _ServiceUntypedParse.FSharpParseFileResults$$get_FileName)(ParseResults$$get_ParseFile(res$$6));
      return (0, _String.join)("\n", ...(0, _Seq.collect)(function mapping$$5(file$$4) {
        return (0, _ast_print.printFSharpDecls)("", (0, _Exprs.FSharpImplementationFileContents$$get_Declarations)(file$$4));
      }, (0, _Seq.filter)(function predicate$$1(file$$3) {
        return (0, _Exprs.FSharpImplementationFileContents$$get_FileName)(file$$3) === fileName$$5;
      }, (0, _Exprs.FSharpAssemblyContents$$get_ImplementationFiles)(optimized$$2 ? (0, _service.FSharpCheckProjectResults$$GetOptimizedAssemblyContents)(ParseResults$$get_CheckProject(res$$6)) : (0, _service.FSharpCheckProjectResults$$get_AssemblyContents)(ParseResults$$get_CheckProject(res$$6))))));
    }

  };
}