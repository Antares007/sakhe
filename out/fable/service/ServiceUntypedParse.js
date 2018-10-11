"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceFile$$$IsCompilable = SourceFile$$$IsCompilable;
exports.SourceFile$$$MustBeSingleFileProject = SourceFile$$$MustBeSingleFileProject;
exports.SourceFileImpl$$$IsInterfaceFile = SourceFileImpl$$$IsInterfaceFile;
exports.SourceFileImpl$$$AdditionalDefinesForUseInEditor = SourceFileImpl$$$AdditionalDefinesForUseInEditor;
exports.FSharpParseFileResults$$$$002Ector$$693AD653 = FSharpParseFileResults$$$$002Ector$$693AD653;
exports.FSharpParseFileResults$$get_Errors = FSharpParseFileResults$$get_Errors;
exports.FSharpParseFileResults$$get_ParseHadErrors = FSharpParseFileResults$$get_ParseHadErrors;
exports.FSharpParseFileResults$$get_ParseTree = FSharpParseFileResults$$get_ParseTree;
exports.FSharpParseFileResults$$FindNoteworthyParamInfoLocations$$Z72E1C3A1 = FSharpParseFileResults$$FindNoteworthyParamInfoLocations$$Z72E1C3A1;
exports.FSharpParseFileResults$$get_DependencyFiles = FSharpParseFileResults$$get_DependencyFiles;
exports.FSharpParseFileResults$$get_FileName = FSharpParseFileResults$$get_FileName;
exports.FSharpParseFileResults$$GetNavigationItems = FSharpParseFileResults$$GetNavigationItems;
exports.FSharpParseFileResults$$ValidateBreakpointLocation$$Z72E1C3A1 = FSharpParseFileResults$$ValidateBreakpointLocation$$Z72E1C3A1;
exports.UntypedParseImpl$$$GetRangeOfExprLeftOfDot = UntypedParseImpl$$$GetRangeOfExprLeftOfDot;
exports.UntypedParseImpl$$$TryFindExpressionIslandInPosition = UntypedParseImpl$$$TryFindExpressionIslandInPosition;
exports.UntypedParseImpl$$$TryFindExpressionASTLeftOfDotLeftOfCursor = UntypedParseImpl$$$TryFindExpressionASTLeftOfDotLeftOfCursor;
exports.UntypedParseImpl$$$GetEntityKind = UntypedParseImpl$$$GetEntityKind;
exports.UntypedParseImpl$$$findMatches = UntypedParseImpl$$$findMatches;
exports.UntypedParseImpl$$$TryGetCompletionContext = UntypedParseImpl$$$TryGetCompletionContext;
exports.UntypedParseImpl$$$GetFullNameOfSmallestModuleOrNamespaceAtPoint = UntypedParseImpl$$$GetFullNameOfSmallestModuleOrNamespaceAtPoint;
exports.UntypedParseImpl$$$emptyStringSet = exports.EntityKind = exports.ModuleKind = exports.FSharpParseFileResults = exports.CompletionContext = exports.RecordContext = exports.InheritanceContext = exports.InheritanceOrigin = void 0;

var _CompileOps = require("../fsharp/CompileOps");

var _List = require("../fable-core.2.0.3/List");

var _adapters = require("../fcs-fable/adapters");

var _String = require("../fable-core.2.0.3/String");

var _Types = require("../fable-core.2.0.3/Types");

var _ServiceParamInfoLocations = require("./ServiceParamInfoLocations");

var _range3 = require("../fsharp/range");

var _ServiceNavigation = require("./ServiceNavigation");

var _SymbolHelpers = require("../symbols/SymbolHelpers");

var _Seq = require("../fable-core.2.0.3/Seq");

var _ast = require("../fsharp/ast");

var _ServiceParseTreeWalk = require("./ServiceParseTreeWalk");

var _Util = require("../fable-core.2.0.3/Util");

var _Option = require("../fable-core.2.0.3/Option");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _Array = require("../fable-core.2.0.3/Array");

const SourceFile$$$compilableExtensions = (0, _List.append)(_CompileOps.FSharpSigFileSuffixes, (0, _List.append)(_CompileOps.FSharpImplFileSuffixes, _CompileOps.FSharpScriptFileSuffixes));
const SourceFile$$$singleFileProjectExtensions = _CompileOps.FSharpScriptFileSuffixes;

function SourceFile$$$IsCompilable(file) {
  const ext = (0, _adapters.System$002EIO$002EPath$$$GetExtension)(file);
  return (0, _List.exists)(function predicate(e) {
    return 0 === (0, _String.compare)(e, ext, 5);
  }, SourceFile$$$compilableExtensions);
}

function SourceFile$$$MustBeSingleFileProject(file$$1) {
  const ext$$1 = (0, _adapters.System$002EIO$002EPath$$$GetExtension)(file$$1);
  return (0, _List.exists)(function predicate$$1(e$$1) {
    return 0 === (0, _String.compare)(e$$1, ext$$1, 5);
  }, SourceFile$$$singleFileProjectExtensions);
}

function SourceFileImpl$$$IsInterfaceFile(file$$2) {
  const ext$$2 = (0, _adapters.System$002EIO$002EPath$$$GetExtension)(file$$2);
  return 0 === (0, _String.compare)(".fsi", ext$$2, 5);
}

function SourceFileImpl$$$AdditionalDefinesForUseInEditor(isInteractive) {
  if (isInteractive) {
    return (0, _Types.L)("INTERACTIVE", (0, _Types.L)("EDITING", (0, _Types.L)()));
  } else {
    return (0, _Types.L)("COMPILED", (0, _Types.L)("EDITING", (0, _Types.L)()));
  }
}

const InheritanceOrigin = (0, _Types.declare)(function InheritanceOrigin(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.InheritanceOrigin = InheritanceOrigin;
const InheritanceContext = (0, _Types.declare)(function InheritanceContext(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.InheritanceContext = InheritanceContext;
const RecordContext = (0, _Types.declare)(function RecordContext(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RecordContext = RecordContext;
const CompletionContext = (0, _Types.declare)(function CompletionContext(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CompletionContext = CompletionContext;
const FSharpParseFileResults = (0, _Types.declare)(function FSharpParseFileResults(errors, input, parseHadErrors, dependencyFiles) {
  const $this$$1 = this;
  $this$$1.errors = errors;
  $this$$1.input = input;
  $this$$1.parseHadErrors = parseHadErrors;
  $this$$1.dependencyFiles = dependencyFiles;
});
exports.FSharpParseFileResults = FSharpParseFileResults;

function FSharpParseFileResults$$$$002Ector$$693AD653(errors, input, parseHadErrors, dependencyFiles) {
  return this != null ? FSharpParseFileResults.call(this, errors, input, parseHadErrors, dependencyFiles) : new FSharpParseFileResults(errors, input, parseHadErrors, dependencyFiles);
}

function FSharpParseFileResults$$get_Errors(scope) {
  return scope.errors;
}

function FSharpParseFileResults$$get_ParseHadErrors(scope$$1) {
  return scope$$1.parseHadErrors;
}

function FSharpParseFileResults$$get_ParseTree(scope$$2) {
  return scope$$2.input;
}

function FSharpParseFileResults$$FindNoteworthyParamInfoLocations$$Z72E1C3A1(scope$$3, pos) {
  if (scope$$3.input != null) {
    const input$$1 = scope$$3.input;
    return (0, _ServiceParamInfoLocations.FSharpNoteworthyParamInfoLocations$$$Find$$721C2652)(pos, input$$1);
  } else {
    return null;
  }
}

function FSharpParseFileResults$$GetNavigationItemsImpl(scope$$4) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range3.range0, function () {
    return scope$$4.input != null ? scope$$4.input.tag === 1 ? _ServiceNavigation.NavigationImpl$$$empty : (0, _ServiceNavigation.NavigationImpl$$$getNavigationFromImplFile)(scope$$4.input.fields[0].fields[5]) : _ServiceNavigation.NavigationImpl$$$empty;
  }, function (err) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetNavigationItemsImpl: '%s'"))(err));
    return _ServiceNavigation.NavigationImpl$$$empty;
  });
}

function FSharpParseFileResults$$ValidateBreakpointLocationImpl$$Z72E1C3A1(scope$$5, pos$$1) {
  const isMatchRange = function isMatchRange(m) {
    if ((0, _range3.rangeContainsPos)(m, pos$$1)) {
      return true;
    } else {
      return (0, _range3.range$$get_StartLine)(m) === (0, _range3.pos$$get_Line)(pos$$1);
    }
  };

  const findBreakPoints = function findBreakPoints() {
    const checkRange = function checkRange(m$$1) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return isMatchRange(m$$1) ? (0, _Seq.singleton)(m$$1) : (0, _Seq.empty)();
      }));
    };

    const walkBindSeqPt = function walkBindSeqPt(sp) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        if (sp.tag === 0) {
          const m$$2 = sp.fields[0];
          return checkRange(m$$2);
        } else {
          return (0, _Seq.empty)();
        }
      }));
    };

    const walkForSeqPt = function walkForSeqPt(sp$$1) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        if (sp$$1.tag === 0) {
          const m$$3 = sp$$1.fields[0];
          return checkRange(m$$3);
        } else {
          return (0, _Seq.empty)();
        }
      }));
    };

    const walkWhileSeqPt = function walkWhileSeqPt(sp$$2) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        if (sp$$2.tag === 0) {
          const m$$4 = sp$$2.fields[0];
          return checkRange(m$$4);
        } else {
          return (0, _Seq.empty)();
        }
      }));
    };

    const walkTrySeqPt = function walkTrySeqPt(sp$$3) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        if (sp$$3.tag === 0) {
          const m$$5 = sp$$3.fields[0];
          return checkRange(m$$5);
        } else {
          return (0, _Seq.empty)();
        }
      }));
    };

    const walkWithSeqPt = function walkWithSeqPt(sp$$4) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        if (sp$$4.tag === 0) {
          const m$$6 = sp$$4.fields[0];
          return checkRange(m$$6);
        } else {
          return (0, _Seq.empty)();
        }
      }));
    };

    const walkFinallySeqPt = function walkFinallySeqPt(sp$$5) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        if (sp$$5.tag === 0) {
          const m$$7 = sp$$5.fields[0];
          return checkRange(m$$7);
        } else {
          return (0, _Seq.empty)();
        }
      }));
    };

    const walkBind = function walkBind(_arg1) {
      const synPat = _arg1.fields[7];
      const synExpr = _arg1.fields[9];
      const spInfo = _arg1.fields[11];
      const memFlagsOpt = _arg1.fields[6].fields[0];
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        var args;
        const isFunction = memFlagsOpt != null ? true : synPat.tag === 7 ? synPat.fields[3].tag === 0 ? (args = synPat.fields[3].fields[0], !(args.tail == null)) ? true : false : false : false;
        return (0, _Seq.append)(!isFunction ? walkBindSeqPt(spInfo) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
          return walkExpr(isFunction ? true : spInfo.tag === 0 ? false : true)(synExpr);
        }));
      }));
    };

    const walkExprs = function walkExprs(es) {
      return (0, _List.collect)(walkExpr(false), es);
    };

    const walkBinds = function walkBinds(es$$1) {
      return (0, _List.collect)(walkBind, es$$1);
    };

    const walkMatchClauses = function walkMatchClauses(cl) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (matchValue$$2) {
          var e$$3;
          const whenExpr = matchValue$$2.fields[1];
          const e$$2 = matchValue$$2.fields[2];
          return (0, _Seq.append)(whenExpr != null ? (e$$3 = whenExpr, walkExpr(false)(e$$3)) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
            return walkExpr(true)(e$$2);
          }));
        }, cl);
      }));
    };

    const walkExprOpt = function walkExprOpt(spAlways) {
      return function (eOpt) {
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          if (eOpt != null) {
            const e$$4 = eOpt;
            return walkExpr(spAlways)(e$$4);
          } else {
            return (0, _Seq.empty)();
          }
        }));
      };
    };

    const IsBreakableExpression = function IsBreakableExpression(e$$5) {
      var $target$$2;

      switch (e$$5.tag) {
        case 17:
        case 27:
        case 11:
        case 12:
        case 10:
          $target$$2 = 0;
          break;

        default:
          $target$$2 = 1;
      }

      switch ($target$$2) {
        case 0:
          {
            return true;
          }

        case 1:
          {
            return !(0, _ast.IsControlFlowExpression)(e$$5);
          }
      }
    };

    const walkExpr = function walkExpr(spAlways$$1) {
      return function (e$$6) {
        const m$$8 = (0, _ast.SynExpr$$get_Range)(e$$6);
        return !isMatchRange(m$$8) ? (0, _Types.L)() : (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((spAlways$$1 ? IsBreakableExpression(e$$6) : false) ? checkRange(m$$8) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
            var e$$9, arg;
            var $target$$3, e$$7, e$$8, e1, e2, es$$2;

            switch (e$$6.tag) {
              case 29:
              case 53:
              case 54:
              case 43:
              case 28:
              case 47:
              case 2:
                $target$$3 = 0;
                break;

              case 1:
                $target$$3 = 1;
                e$$7 = e$$6.fields[2];
                break;

              case 38:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 39:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 44:
                $target$$3 = 1;
                e$$7 = e$$6.fields[1];
                break;

              case 14:
                $target$$3 = 1;
                e$$7 = e$$6.fields[2];
                break;

              case 13:
                $target$$3 = 1;
                e$$7 = e$$6.fields[1];
                break;

              case 3:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 58:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 59:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 18:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 19:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 60:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 31:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 30:
                $target$$3 = 1;
                e$$7 = e$$6.fields[1];
                break;

              case 8:
                $target$$3 = 1;
                e$$7 = e$$6.fields[2];
                break;

              case 21:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 55:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 40:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 41:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 42:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 25:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 45:
                $target$$3 = 1;
                e$$7 = e$$6.fields[2];
                break;

              case 0:
                $target$$3 = 1;
                e$$7 = e$$6.fields[0];
                break;

              case 48:
                $target$$3 = 2;
                e$$8 = e$$6.fields[1];
                break;

              case 49:
                $target$$3 = 2;
                e$$8 = e$$6.fields[1];
                break;

              case 52:
                $target$$3 = 2;
                e$$8 = e$$6.fields[0];
                break;

              case 36:
                $target$$3 = 3;
                e1 = e$$6.fields[1];
                e2 = e$$6.fields[2];
                break;

              case 32:
                $target$$3 = 3;
                e1 = e$$6.fields[0];
                e2 = e$$6.fields[2];
                break;

              case 33:
                $target$$3 = 3;
                e1 = e$$6.fields[0];
                e2 = e$$6.fields[1];
                break;

              case 56:
                $target$$3 = 3;
                e1 = e$$6.fields[0];
                e2 = e$$6.fields[3];
                break;

              case 20:
                $target$$3 = 3;
                e1 = e$$6.fields[2];
                e2 = e$$6.fields[3];
                break;

              case 6:
                $target$$3 = 4;
                es$$2 = e$$6.fields[1];
                break;

              case 4:
                $target$$3 = 4;
                es$$2 = e$$6.fields[0];
                break;

              case 5:
                $target$$3 = 4;
                es$$2 = e$$6.fields[0];
                break;

              case 7:
                $target$$3 = 5;
                break;

              case 9:
                $target$$3 = 6;
                break;

              case 10:
                $target$$3 = 7;
                break;

              case 46:
                $target$$3 = 8;
                break;

              case 11:
                $target$$3 = 9;
                break;

              case 12:
                $target$$3 = 10;
                break;

              case 16:
                $target$$3 = 11;
                break;

              case 15:
                $target$$3 = 12;
                break;

              case 17:
                $target$$3 = 13;
                break;

              case 22:
                $target$$3 = 14;
                break;

              case 23:
                $target$$3 = 15;
                break;

              case 24:
                $target$$3 = 16;
                break;

              case 26:
                $target$$3 = 17;
                break;

              case 27:
                $target$$3 = 18;
                break;

              case 34:
                $target$$3 = 19;
                break;

              case 35:
                $target$$3 = 20;
                break;

              case 37:
                $target$$3 = 21;
                break;

              case 50:
                $target$$3 = 22;
                break;

              case 51:
                $target$$3 = 23;
                break;

              default:
                $target$$3 = 0;
            }

            switch ($target$$3) {
              case 0:
                {
                  return (0, _Seq.empty)();
                }

              case 1:
                {
                  return walkExpr(false)(e$$7);
                }

              case 2:
                {
                  return (0, _Seq.append)(checkRange((0, _ast.SynExpr$$get_Range)(e$$8)), (0, _Seq.delay)(function () {
                    return walkExpr(false)(e$$8);
                  }));
                }

              case 3:
                {
                  return (0, _Seq.append)(walkExpr(false)(e1), (0, _Seq.delay)(function () {
                    return walkExpr(false)(e2);
                  }));
                }

              case 4:
                {
                  return walkExprs(es$$2);
                }

              case 5:
                {
                  const fs = e$$6.fields[2];
                  const copyExprOpt = e$$6.fields[1];
                  return (0, _Seq.append)(copyExprOpt == null ? (null, (0, _Seq.empty)()) : (e$$9 = copyExprOpt[0], walkExpr(true)(e$$9)), (0, _Seq.delay)(function () {
                    return walkExprs((0, _List.choose)(function chooser(x) {
                      return x;
                    }, (0, _List.map)(function (tupledArg) {
                      return tupledArg[1];
                    }, fs)));
                  }));
                }

              case 6:
                {
                  const is = e$$6.fields[3];
                  const bs = e$$6.fields[2];
                  const args$$2 = e$$6.fields[1];
                  return (0, _Seq.append)(args$$2 != null ? (arg = args$$2[0], walkExpr(false)(arg)) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkBinds(bs), (0, _Seq.delay)(function () {
                      return (0, _Seq.collect)(function (matchValue$$3) {
                        const bs$$1 = matchValue$$3.fields[1];
                        return walkBinds(bs$$1);
                      }, is);
                    }));
                  }));
                }

              case 7:
                {
                  const spWhile = e$$6.fields[0];
                  const e2$$1 = e$$6.fields[2];
                  const e1$$1 = e$$6.fields[1];
                  return (0, _Seq.append)(walkWhileSeqPt(spWhile), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e1$$1), (0, _Seq.delay)(function () {
                      return walkExpr(true)(e2$$1);
                    }));
                  }));
                }

              case 8:
                {
                  const e2$$2 = e$$6.fields[2];
                  const e1$$2 = e$$6.fields[0];
                  const _range2 = e$$6.fields[3];
                  const _range = e$$6.fields[1];
                  return (0, _Seq.append)(walkExpr(false)(e1$$2), (0, _Seq.delay)(function () {
                    return walkExpr(false)(e2$$2);
                  }));
                }

              case 9:
                {
                  const spFor = e$$6.fields[0];
                  const e3 = e$$6.fields[5];
                  const e2$$3 = e$$6.fields[4];
                  const e1$$3 = e$$6.fields[2];
                  return (0, _Seq.append)(walkForSeqPt(spFor), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e1$$3), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)(walkExpr(true)(e2$$3), (0, _Seq.delay)(function () {
                        return walkExpr(true)(e3);
                      }));
                    }));
                  }));
                }

              case 10:
                {
                  const spFor$$1 = e$$6.fields[0];
                  const e2$$4 = e$$6.fields[5];
                  const e1$$4 = e$$6.fields[4];
                  return (0, _Seq.append)(walkForSeqPt(spFor$$1), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e1$$4), (0, _Seq.delay)(function () {
                      return walkExpr(true)(e2$$4);
                    }));
                  }));
                }

              case 11:
                {
                  const spBind = e$$6.fields[3];
                  const cl$$1 = e$$6.fields[2];
                  const _wholem = e$$6.fields[4];
                  const _isExnMatch = e$$6.fields[0];
                  const _argm = e$$6.fields[1];
                  return (0, _Seq.append)(walkBindSeqPt(spBind), (0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$4) {
                      const whenExpr$$1 = matchValue$$4.fields[1];
                      const e$$10 = matchValue$$4.fields[2];
                      return (0, _Seq.append)(walkExprOpt(false)(whenExpr$$1), (0, _Seq.delay)(function () {
                        return walkExpr(true)(e$$10);
                      }));
                    }, cl$$1);
                  }));
                }

              case 12:
                {
                  const e$$11 = e$$6.fields[3];
                  return walkExpr(true)(e$$11);
                }

              case 13:
                {
                  const spBind$$1 = e$$6.fields[0];
                  const e$$12 = e$$6.fields[1];
                  const cl$$2 = e$$6.fields[2];
                  return (0, _Seq.append)(walkBindSeqPt(spBind$$1), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e$$12), (0, _Seq.delay)(function () {
                      return (0, _Seq.collect)(function (matchValue$$5) {
                        const whenExpr$$2 = matchValue$$5.fields[1];
                        const e$$13 = matchValue$$5.fields[2];
                        return (0, _Seq.append)(walkExprOpt(false)(whenExpr$$2), (0, _Seq.delay)(function () {
                          return walkExpr(true)(e$$13);
                        }));
                      }, cl$$2);
                    }));
                  }));
                }

              case 14:
                {
                  const e$$14 = e$$6.fields[3];
                  const bs$$2 = e$$6.fields[2];
                  return (0, _Seq.append)(walkBinds(bs$$2), (0, _Seq.delay)(function () {
                    return walkExpr(true)(e$$14);
                  }));
                }

              case 15:
                {
                  const spWith = e$$6.fields[6];
                  const spTry = e$$6.fields[5];
                  const e$$15 = e$$6.fields[0];
                  const cl$$3 = e$$6.fields[2];
                  return (0, _Seq.append)(walkTrySeqPt(spTry), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkWithSeqPt(spWith), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)(walkExpr(true)(e$$15), (0, _Seq.delay)(function () {
                        return walkMatchClauses(cl$$3);
                      }));
                    }));
                  }));
                }

              case 16:
                {
                  const spTry$$1 = e$$6.fields[3];
                  const spFinally = e$$6.fields[4];
                  const e2$$5 = e$$6.fields[1];
                  const e1$$5 = e$$6.fields[0];
                  return (0, _Seq.append)(walkExpr(true)(e1$$5), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(true)(e2$$5), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)(walkTrySeqPt(spTry$$1), (0, _Seq.delay)(function () {
                        return walkFinallySeqPt(spFinally);
                      }));
                    }));
                  }));
                }

              case 17:
                {
                  const spSeq = e$$6.fields[0];
                  const e2$$6 = e$$6.fields[3];
                  const e1$$6 = e$$6.fields[2];
                  return (0, _Seq.append)(walkExpr(spSeq.tag === 2 ? false : true)(e1$$6), (0, _Seq.delay)(function () {
                    return walkExpr(spSeq.tag === 1 ? false : true)(e2$$6);
                  }));
                }

              case 18:
                {
                  const spBind$$2 = e$$6.fields[3];
                  const e3opt = e$$6.fields[2];
                  const e2$$7 = e$$6.fields[1];
                  const e1$$7 = e$$6.fields[0];
                  return (0, _Seq.append)(walkBindSeqPt(spBind$$2), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e1$$7), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)(walkExpr(true)(e2$$7), (0, _Seq.delay)(function () {
                        return walkExprOpt(true)(e3opt);
                      }));
                    }));
                  }));
                }

              case 19:
                {
                  const es$$3 = e$$6.fields[1];
                  const e1$$8 = e$$6.fields[0];
                  return (0, _Seq.append)(walkExpr(false)(e1$$8), (0, _Seq.delay)(function () {
                    return walkExprs((0, _List.ofSeq)((0, _Seq.delay)(function () {
                      return (0, _Seq.collect)(function (e$$16) {
                        return (0, _ast.SynIndexerArg$$get_Exprs)(e$$16);
                      }, es$$3);
                    })));
                  }));
                }

              case 20:
                {
                  const es$$4 = e$$6.fields[1];
                  const e2$$8 = e$$6.fields[2];
                  const e1$$9 = e$$6.fields[0];
                  return (0, _Seq.append)(walkExpr(false)(e1$$9), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExprs((0, _List.ofSeq)((0, _Seq.delay)(function () {
                      return (0, _Seq.collect)(function (e$$17) {
                        return (0, _ast.SynIndexerArg$$get_Exprs)(e$$17);
                      }, es$$4);
                    }))), (0, _Seq.delay)(function () {
                      return walkExpr(false)(e2$$8);
                    }));
                  }));
                }

              case 21:
                {
                  const e3$$1 = e$$6.fields[3];
                  const e2$$9 = e$$6.fields[2];
                  const e1$$10 = e$$6.fields[0];
                  return (0, _Seq.append)(walkExpr(false)(e1$$10), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e2$$9), (0, _Seq.delay)(function () {
                      return walkExpr(false)(e3$$1);
                    }));
                  }));
                }

              case 22:
                {
                  const spBind$$3 = e$$6.fields[0];
                  const e2$$10 = e$$6.fields[5];
                  const e1$$11 = e$$6.fields[4];
                  return (0, _Seq.append)(walkBindSeqPt(spBind$$3), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(true)(e1$$11), (0, _Seq.delay)(function () {
                      return walkExpr(true)(e2$$10);
                    }));
                  }));
                }

              case 23:
                {
                  const spBind$$4 = e$$6.fields[0];
                  const e$$18 = e$$6.fields[1];
                  const cl$$4 = e$$6.fields[2];
                  return (0, _Seq.append)(walkBindSeqPt(spBind$$4), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(walkExpr(false)(e$$18), (0, _Seq.delay)(function () {
                      return (0, _Seq.collect)(function (matchValue$$6) {
                        const whenExpr$$3 = matchValue$$6.fields[1];
                        const e$$19 = matchValue$$6.fields[2];
                        return (0, _Seq.append)(walkExprOpt(false)(whenExpr$$3), (0, _Seq.delay)(function () {
                          return walkExpr(true)(e$$19);
                        }));
                      }, cl$$4);
                    }));
                  }));
                }
            }
          }));
        }));
      };
    };

    const walkTycon = function walkTycon(_arg2$$1) {
      const repr = _arg2$$1.fields[1];
      const membDefns = _arg2$$1.fields[2];
      const m$$9 = _arg2$$1.fields[3];

      if (!isMatchRange(m$$9)) {
        return (0, _Types.L)();
      } else {
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.collect)(function (memb) {
            return walkMember(memb);
          }, membDefns), (0, _Seq.delay)(function () {
            if (repr.tag === 0) {
              const membDefns$$1 = repr.fields[1];
              return (0, _Seq.collect)(function (memb$$1) {
                return walkMember(memb$$1);
              }, membDefns$$1);
            } else {
              return (0, _Seq.empty)();
            }
          }));
        }));
      }
    };

    const walkMember = function walkMember(memb$$2) {
      if (!(0, _range3.rangeContainsPos)((0, _ast.SynMemberDefn$$get_Range)(memb$$2), pos$$1)) {
        return (0, _Types.L)();
      } else {
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          var $target$$4, binds, _access, _attribs, _id, _isStatic, _propKind, _tyOpt, _xmlDoc, synExpr$$1, m$$10, bind, _synty, membs, m$$12, arg$$1, m$$13;

          if (memb$$2.tag === 4) {
            $target$$4 = 0;
            binds = memb$$2.fields[0];
          } else if (memb$$2.tag === 10) {
            $target$$4 = 1;
            _access = memb$$2.fields[7];
            _attribs = memb$$2.fields[0];
            _id = memb$$2.fields[2];
            _isStatic = memb$$2.fields[1];
            _propKind = memb$$2.fields[4];
            _tyOpt = memb$$2.fields[3];
            _xmlDoc = memb$$2.fields[6];
            synExpr$$1 = memb$$2.fields[8];
          } else if (memb$$2.tag === 2) {
            $target$$4 = 2;
            m$$10 = memb$$2.fields[4];
          } else if (memb$$2.tag === 1) {
            $target$$4 = 3;
            bind = memb$$2.fields[0];
          } else if (memb$$2.tag === 6) {
            if (memb$$2.fields[1] != null) {
              $target$$4 = 4;
              _synty = memb$$2.fields[0];
              membs = memb$$2.fields[1];
            } else {
              $target$$4 = 7;
            }
          } else if (memb$$2.tag === 7) {
            $target$$4 = 5;
            m$$12 = memb$$2.fields[2];
          } else if (memb$$2.tag === 3) {
            $target$$4 = 6;
            arg$$1 = memb$$2.fields[1];
            m$$13 = memb$$2.fields[3];
          } else {
            $target$$4 = 7;
          }

          switch ($target$$4) {
            case 0:
              {
                return walkBinds(binds);
              }

            case 1:
              {
                return walkExpr(true)(synExpr$$1);
              }

            case 2:
              {
                return checkRange(m$$10);
              }

            case 3:
              {
                return walkBind(bind);
              }

            case 4:
              {
                return (0, _Seq.collect)(function (m$$11) {
                  return walkMember(m$$11);
                }, membs);
              }

            case 5:
              {
                return checkRange(m$$12);
              }

            case 6:
              {
                return (0, _Seq.append)(checkRange(m$$13), (0, _Seq.delay)(function () {
                  return walkExpr(true)(arg$$1);
                }));
              }

            case 7:
              {
                return (0, _Seq.empty)();
              }
          }
        }));
      }
    };

    const walkDecl = function walkDecl(decl) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        var membDefns$$2, m$$22, tydefs, m$$20, m$$18, decls, _isRec, spExpr, m$$16, expr, m$$14, binds$$1;

        var $target$$5, binds$$2, m$$15;

        if (decl.tag === 2) {
          if (m$$14 = decl.fields[2], (binds$$1 = decl.fields[1], isMatchRange(m$$14))) {
            $target$$5 = 0;
            binds$$2 = decl.fields[1];
            m$$15 = decl.fields[2];
          } else {
            $target$$5 = 1;
          }
        } else {
          $target$$5 = 1;
        }

        switch ($target$$5) {
          case 0:
            {
              return walkBinds(binds$$2);
            }

          case 1:
            {
              var $target$$6, expr$$1, m$$17, spExpr$$1;

              if (decl.tag === 3) {
                if (spExpr = decl.fields[0], (m$$16 = decl.fields[2], (expr = decl.fields[1], isMatchRange(m$$16)))) {
                  $target$$6 = 0;
                  expr$$1 = decl.fields[1];
                  m$$17 = decl.fields[2];
                  spExpr$$1 = decl.fields[0];
                } else {
                  $target$$6 = 1;
                }
              } else {
                $target$$6 = 1;
              }

              switch ($target$$6) {
                case 0:
                  {
                    return (0, _Seq.append)(walkBindSeqPt(spExpr$$1), (0, _Seq.delay)(function () {
                      return walkExpr(false)(expr$$1);
                    }));
                  }

                case 1:
                  {
                    var $target$$7, _isRec$$1, decls$$1, m$$19;

                    if (decl.tag === 0) {
                      $target$$7 = 0;
                    } else if (decl.tag === 1) {
                      if (m$$18 = decl.fields[4], (decls = decl.fields[2], (_isRec = decl.fields[1], isMatchRange(m$$18)))) {
                        $target$$7 = 1;
                        _isRec$$1 = decl.fields[1];
                        decls$$1 = decl.fields[2];
                        m$$19 = decl.fields[4];
                      } else {
                        $target$$7 = 2;
                      }
                    } else {
                      $target$$7 = 2;
                    }

                    switch ($target$$7) {
                      case 0:
                        {
                          return (0, _Seq.empty)();
                        }

                      case 1:
                        {
                          return (0, _Seq.collect)(function (d) {
                            return walkDecl(d);
                          }, decls$$1);
                        }

                      case 2:
                        {
                          var $target$$8, m$$21, tydefs$$1;

                          if (decl.tag === 4) {
                            if (tydefs = decl.fields[0], (m$$20 = decl.fields[1], isMatchRange(m$$20))) {
                              $target$$8 = 0;
                              m$$21 = decl.fields[1];
                              tydefs$$1 = decl.fields[0];
                            } else {
                              $target$$8 = 1;
                            }
                          } else {
                            $target$$8 = 1;
                          }

                          switch ($target$$8) {
                            case 0:
                              {
                                return (0, _Seq.collect)(function (d$$1) {
                                  return walkTycon(d$$1);
                                }, tydefs$$1);
                              }

                            case 1:
                              {
                                var $target$$9, m$$23, membDefns$$3;

                                if (decl.tag === 5) {
                                  if (membDefns$$2 = decl.fields[0].fields[1], (m$$22 = decl.fields[1], isMatchRange(m$$22))) {
                                    $target$$9 = 0;
                                    m$$23 = decl.fields[1];
                                    membDefns$$3 = decl.fields[0].fields[1];
                                  } else {
                                    $target$$9 = 1;
                                  }
                                } else {
                                  $target$$9 = 1;
                                }

                                switch ($target$$9) {
                                  case 0:
                                    {
                                      return (0, _Seq.collect)(function (m$$24) {
                                        return walkMember(m$$24);
                                      }, membDefns$$3);
                                    }

                                  case 1:
                                    {
                                      return (0, _Seq.empty)();
                                    }
                                }
                              }
                          }
                        }
                    }
                  }
              }
            }
        }
      }));
    };

    const walkModule = function walkModule(_arg3) {
      const m$$25 = _arg3.fields[7];
      const decls$$2 = _arg3.fields[3];

      if (isMatchRange(m$$25)) {
        return (0, _List.collect)(walkDecl, decls$$2);
      } else {
        return (0, _Types.L)();
      }
    };

    const walkImplFile = function walkImplFile(modules$$1) {
      return (0, _List.collect)(walkModule, modules$$1);
    };

    var $target$$10, modules$$2;

    if (scope$$5.input != null) {
      if (scope$$5.input.tag === 0) {
        $target$$10 = 0;
        modules$$2 = scope$$5.input.fields[0].fields[5];
      } else {
        $target$$10 = 1;
      }
    } else {
      $target$$10 = 1;
    }

    switch ($target$$10) {
      case 0:
        {
          return walkImplFile(modules$$2);
        }

      case 1:
        {
          return (0, _Types.L)();
        }
    }
  };

  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range3.range0, function () {
    const locations = findBreakPoints();

    if ((0, _range3.pos$$get_Column)(pos$$1) === 0) {
      const matchValue$$8 = (0, _List.filter)(function predicate$$2(m$$26) {
        if ((0, _range3.range$$get_StartLine)(m$$26) === (0, _range3.range$$get_EndLine)(m$$26)) {
          return (0, _range3.pos$$get_Line)(pos$$1) === (0, _range3.range$$get_StartLine)(m$$26);
        } else {
          return false;
        }
      }, locations);

      if (matchValue$$8.tail == null) {
        const matchValue$$9 = (0, _List.filter)(function predicate$$3(m$$27) {
          return (0, _range3.rangeContainsPos)(m$$27, pos$$1);
        }, locations);

        if (matchValue$$9.tail == null) {
          const matchValue$$10 = (0, _List.filter)(function predicate$$4(m$$28) {
            return !(0, _range3.rangeBeforePos)(m$$28, pos$$1);
          }, locations);

          if (matchValue$$10.tail == null) {
            return (0, _Seq.tryHead)(locations);
          } else {
            const locationsAfterPos = matchValue$$10;
            return (0, _Seq.tryHead)(locationsAfterPos);
          }
        } else {
          const coveringLocations = matchValue$$9;
          return (0, _Seq.tryLast)(coveringLocations);
        }
      } else {
        const locationsOnSameLine = matchValue$$8;
        return (0, _Seq.tryHead)(locationsOnSameLine);
      }
    } else {
      const matchValue$$11 = (0, _List.filter)(function predicate$$5(m$$29) {
        return (0, _range3.rangeContainsPos)(m$$29, pos$$1);
      }, locations);

      if (matchValue$$11.tail == null) {
        const matchValue$$12 = (0, _List.filter)(function predicate$$6(m$$30) {
          return !(0, _range3.rangeBeforePos)(m$$30, pos$$1);
        }, locations);

        if (matchValue$$12.tail == null) {
          return (0, _Seq.tryHead)(locations);
        } else {
          const locationsAfterPos$$1 = matchValue$$12;
          return (0, _Seq.tryHead)(locationsAfterPos$$1);
        }
      } else {
        const coveringLocations$$1 = matchValue$$11;
        return (0, _Seq.tryLast)(coveringLocations$$1);
      }
    }
  }, function (msg) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in ValidateBreakpointLocationImpl: '%s'"))(msg));
    return null;
  });
}

function FSharpParseFileResults$$get_DependencyFiles(scope$$6) {
  return scope$$6.dependencyFiles;
}

function FSharpParseFileResults$$get_FileName(scope$$7) {
  var $target$$11, modname;

  if (scope$$7.input != null) {
    if (scope$$7.input.tag === 1) {
      $target$$11 = 0;
      modname = scope$$7.input.fields[0].fields[0];
    } else {
      $target$$11 = 0;
      modname = scope$$7.input.fields[0].fields[0];
    }
  } else {
    $target$$11 = 1;
  }

  switch ($target$$11) {
    case 0:
      {
        return modname;
      }

    case 1:
      {
        return "";
      }
  }
}

function FSharpParseFileResults$$GetNavigationItems(scope$$8) {
  return FSharpParseFileResults$$GetNavigationItemsImpl(scope$$8);
}

function FSharpParseFileResults$$ValidateBreakpointLocation$$Z72E1C3A1(scope$$9, pos$$2) {
  return FSharpParseFileResults$$ValidateBreakpointLocationImpl$$Z72E1C3A1(scope$$9, pos$$2);
}

const ModuleKind = (0, _Types.declare)(function ModuleKind(arg1, arg2) {
  this.IsAutoOpen = arg1;
  this.HasModuleSuffix = arg2;
}, _Types.Record);
exports.ModuleKind = ModuleKind;
const EntityKind = (0, _Types.declare)(function EntityKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.EntityKind = EntityKind;

EntityKind.prototype.toString = function () {
  const x$$1 = this;
  return (0, _String.toText)((0, _String.printf)("%A"))(x$$1);
};

const UntypedParseImpl$$$emptyStringSet = new Set([]);
exports.UntypedParseImpl$$$emptyStringSet = UntypedParseImpl$$$emptyStringSet;

function UntypedParseImpl$$$GetRangeOfExprLeftOfDot(pos$$3, parseTreeOpt) {
  if (parseTreeOpt != null) {
    const parseTree = parseTreeOpt;

    const CheckLongIdent = function CheckLongIdent(longIdent) {
      let r;
      let copyOfStruct = (0, _List.head)(longIdent);
      r = (0, _ast.Ident$$get_idRange)(copyOfStruct);
      let couldBeBeforeFront = true;
      (0, _Seq.iterate)(function (i) {
        var copyOfStruct$$1;

        if ((0, _range3.posGeq)(pos$$3, (copyOfStruct$$1 = (0, _ast.Ident$$get_idRange)(i), (0, _range3.range$$get_End)(copyOfStruct$$1)))) {
          r = (0, _range3.unionRanges)(r, (0, _ast.Ident$$get_idRange)(i));
          couldBeBeforeFront = false;
        }
      }, longIdent);
      return [couldBeBeforeFront, r];
    };

    return (0, _ServiceParseTreeWalk.Traverse)(pos$$3, parseTree, (0, _Util.extend)((0, _ServiceParseTreeWalk.AstVisitorBase$00601$$$$002Ector)(), {
      VisitExpr(_path, traverseSynExpr, defaultTraverse, expr$$2) {
        var rhs, ident;
        const expr$$3 = expr$$2;

        var $target$$12, _altNameRefCell, _range$$1, longIdent$$1, _range$$2, longIdent$$2, synExpr$$2, _dotm, _range$$3, longIdent$$3, synExpr$$3, range, synExpr$$4, synExpr2, _range$$4, longIdent$$4, synExpr$$5, synExpr2$$1, _range$$5, longIdent$$5, synExpr$$6, synExpr2$$2, synExpr3, _range$$6, synExpr$$7, range$$1, synExpr$$8, ident$$1, rhs$$1;

        if (expr$$3.tag === 29) {
          $target$$12 = 0;
          _altNameRefCell = expr$$3.fields[2];
          _range$$1 = expr$$3.fields[3];
          longIdent$$1 = expr$$3.fields[1].fields[0];
        } else if (expr$$3.tag === 30) {
          $target$$12 = 1;
          _range$$2 = expr$$3.fields[2];
          longIdent$$2 = expr$$3.fields[0].fields[0];
          synExpr$$2 = expr$$3.fields[1];
        } else if (expr$$3.tag === 31) {
          $target$$12 = 2;
          _dotm = expr$$3.fields[1];
          _range$$3 = expr$$3.fields[3];
          longIdent$$3 = expr$$3.fields[2].fields[0];
          synExpr$$3 = expr$$3.fields[0];
        } else if (expr$$3.tag === 33) {
          $target$$12 = 3;
          range = expr$$3.fields[2];
          synExpr$$4 = expr$$3.fields[0];
          synExpr2 = expr$$3.fields[1];
        } else if (expr$$3.tag === 32) {
          $target$$12 = 4;
          _range$$4 = expr$$3.fields[3];
          longIdent$$4 = expr$$3.fields[1].fields[0];
          synExpr$$5 = expr$$3.fields[0];
          synExpr2$$1 = expr$$3.fields[2];
        } else if (expr$$3.tag === 37) {
          $target$$12 = 5;
          _range$$5 = expr$$3.fields[4];
          longIdent$$5 = expr$$3.fields[1].fields[0];
          synExpr$$6 = expr$$3.fields[0];
          synExpr2$$2 = expr$$3.fields[2];
          synExpr3 = expr$$3.fields[3];
        } else if (expr$$3.tag === 59) {
          $target$$12 = 6;
          _range$$6 = expr$$3.fields[1];
          synExpr$$7 = expr$$3.fields[0];
        } else if (expr$$3.tag === 58) {
          $target$$12 = 7;
          range$$1 = expr$$3.fields[1];
          synExpr$$8 = expr$$3.fields[0];
        } else if (expr$$3.tag === 20) {
          if (expr$$3.fields[0] === 1) {
            if (expr$$3.fields[1]) {
              if (expr$$3.fields[2].tag === 28) {
                if (rhs = expr$$3.fields[3], (ident = expr$$3.fields[2].fields[0], (0, _ast.Ident$$get_idText)(ident) === "op_ArrayLookup" ? !(0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(rhs), pos$$3) : false)) {
                  $target$$12 = 8;
                  ident$$1 = expr$$3.fields[2].fields[0];
                  rhs$$1 = expr$$3.fields[3];
                } else {
                  $target$$12 = 9;
                }
              } else {
                $target$$12 = 9;
              }
            } else {
              $target$$12 = 9;
            }
          } else {
            $target$$12 = 9;
          }
        } else {
          $target$$12 = 9;
        }

        switch ($target$$12) {
          case 0:
            {
              const patternInput = CheckLongIdent(longIdent$$1);
              return patternInput[1];
            }

          case 1:
            {
              if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$2), pos$$3)) {
                return traverseSynExpr(synExpr$$2);
              } else {
                const patternInput$$1 = CheckLongIdent(longIdent$$2);
                return patternInput$$1[1];
              }
            }

          case 2:
            {
              if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$3), pos$$3)) {
                return traverseSynExpr(synExpr$$3);
              } else {
                const patternInput$$2 = CheckLongIdent(longIdent$$3);
                return patternInput$$2[0] ? (0, _ast.SynExpr$$get_Range)(synExpr$$3) : (0, _range3.unionRanges)((0, _ast.SynExpr$$get_Range)(synExpr$$3), patternInput$$2[1]);
              }
            }

          case 3:
            {
              return (0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$4), pos$$3) ? traverseSynExpr(synExpr$$4) : (0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr2), pos$$3) ? traverseSynExpr(synExpr2) : range;
            }

          case 4:
            {
              if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$5), pos$$3)) {
                return traverseSynExpr(synExpr$$5);
              } else if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr2$$1), pos$$3)) {
                return traverseSynExpr(synExpr2$$1);
              } else {
                const patternInput$$3 = CheckLongIdent(longIdent$$4);
                return patternInput$$3[0] ? (0, _ast.SynExpr$$get_Range)(synExpr$$5) : (0, _range3.unionRanges)((0, _ast.SynExpr$$get_Range)(synExpr$$5), patternInput$$3[1]);
              }
            }

          case 5:
            {
              if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$6), pos$$3)) {
                return traverseSynExpr(synExpr$$6);
              } else if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr2$$2), pos$$3)) {
                return traverseSynExpr(synExpr2$$2);
              } else if ((0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr3), pos$$3)) {
                return traverseSynExpr(synExpr3);
              } else {
                const patternInput$$4 = CheckLongIdent(longIdent$$5);
                return patternInput$$4[0] ? (0, _ast.SynExpr$$get_Range)(synExpr$$6) : (0, _range3.unionRanges)((0, _ast.SynExpr$$get_Range)(synExpr$$6), patternInput$$4[1]);
              }
            }

          case 6:
            {
              return (0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$7), pos$$3) ? traverseSynExpr(synExpr$$7) : (0, _ast.SynExpr$$get_Range)(synExpr$$7);
            }

          case 7:
            {
              return (0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(synExpr$$8), pos$$3) ? traverseSynExpr(synExpr$$8) : range$$1;
            }

          case 8:
            {
              const matchValue$$14 = defaultTraverse(expr$$3);

              if (matchValue$$14 == null) {
                return (0, _ast.SynExpr$$get_Range)(expr$$3);
              } else {
                const x$$2 = matchValue$$14;
                return x$$2;
              }
            }

          case 9:
            {
              var $target$$13, range$$2;

              if (expr$$3.tag === 2) {
                if (expr$$3.fields[0].tag === 13) {
                  $target$$13 = 0;
                  range$$2 = expr$$3.fields[1];
                } else {
                  $target$$13 = 1;
                }
              } else {
                $target$$13 = 1;
              }

              switch ($target$$13) {
                case 0:
                  {
                    return range$$2;
                  }

                case 1:
                  {
                    return defaultTraverse(expr$$3);
                  }
              }
            }
        }
      }

    }));
  } else {
    return null;
  }
}

function UntypedParseImpl$$$TryFindExpressionIslandInPosition(pos$$4, parseTreeOpt$$1) {
  if (parseTreeOpt$$1 != null) {
    const parseTree$$1 = parseTreeOpt$$1;

    const getLidParts = function getLidParts(lid) {
      return (0, _List.ofSeq)((0, _Seq.map)(function mapping(i$$2) {
        return (0, _ast.Ident$$get_idText)(i$$2);
      }, (0, _Seq.takeWhile)(function predicate$$7(i$$1) {
        var copyOfStruct$$2;
        return (0, _range3.posGeq)(pos$$4, (copyOfStruct$$2 = (0, _ast.Ident$$get_idRange)(i$$1), (0, _range3.range$$get_Start)(copyOfStruct$$2)));
      }, lid)));
    };

    const TryGetExpression = function TryGetExpression(foundCandidate, expr$$4) {
      var lid$$1, leftPart, e$$20;

      TryGetExpression: while (true) {
        var $target$$14, e$$21;

        if (expr$$4.tag === 0) {
          if (e$$20 = expr$$4.fields[0], foundCandidate) {
            $target$$14 = 0;
            e$$21 = expr$$4.fields[0];
          } else {
            $target$$14 = 1;
          }
        } else {
          $target$$14 = 1;
        }

        switch ($target$$14) {
          case 0:
            {
              foundCandidate = foundCandidate;
              expr$$4 = e$$21;
              continue TryGetExpression;
            }

          case 1:
            {
              var $target$$15, _altNameRefCell$$1, _isOptional, _m, lid$$2, leftPart$$1, lid$$3;

              if (expr$$4.tag === 29) {
                $target$$15 = 0;
                _altNameRefCell$$1 = expr$$4.fields[2];
                _isOptional = expr$$4.fields[0];
                _m = expr$$4.fields[3];
                lid$$2 = expr$$4.fields[1].fields[0];
              } else if (expr$$4.tag === 31) {
                if (lid$$1 = expr$$4.fields[2].fields[0], (leftPart = expr$$4.fields[0], (0, _range3.rangeContainsPos)((0, _ast.rangeOfLid)(lid$$1), pos$$4) ? true : foundCandidate)) {
                  $target$$15 = 1;
                  leftPart$$1 = expr$$4.fields[0];
                  lid$$3 = expr$$4.fields[2].fields[0];
                } else {
                  $target$$15 = 2;
                }
              } else {
                $target$$15 = 2;
              }

              switch ($target$$15) {
                case 0:
                  {
                    return getLidParts(lid$$2);
                  }

                case 1:
                  {
                    const leftPartResult = TryGetExpression(true, leftPart$$1);

                    if (leftPartResult == null) {
                      return null;
                    } else {
                      const leftPartResult$$1 = leftPartResult;
                      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
                        return (0, _Seq.append)(leftPartResult$$1, (0, _Seq.delay)(function () {
                          return getLidParts(lid$$3);
                        }));
                      }));
                    }
                  }

                case 2:
                  {
                    if (expr$$4.tag === 58) {
                      const synExpr$$9 = expr$$4.fields[0];
                      const _range$$7 = expr$$4.fields[1];
                      foundCandidate = foundCandidate;
                      expr$$4 = synExpr$$9;
                      continue TryGetExpression;
                    } else {
                      return null;
                    }
                  }
              }
            }
        }
      }
    };

    const walker = (0, _Util.extend)((0, _ServiceParseTreeWalk.AstVisitorBase$00601$$$$002Ector)(), {
      VisitExpr(_path$$1, traverseSynExpr$$1, defaultTraverse$$1, expr$$5) {
        if ((0, _range3.rangeContainsPos)((0, _ast.SynExpr$$get_Range)(expr$$5), pos$$4)) {
          const matchValue$$15 = TryGetExpression(false, expr$$5);

          if (matchValue$$15 != null) {
            const parts = matchValue$$15;
            return (0, _String.join)(".", ...parts);
          } else {
            return defaultTraverse$$1(expr$$5);
          }
        } else {
          return null;
        }
      }

    });
    return (0, _ServiceParseTreeWalk.Traverse)(pos$$4, parseTree$$1, walker);
  } else {
    return null;
  }
}

function UntypedParseImpl$$$TryFindExpressionASTLeftOfDotLeftOfCursor(pos$$5, parseTreeOpt$$2) {
  if (parseTreeOpt$$2 != null) {
    const parseTree$$2 = parseTreeOpt$$2;
    const dive = _ServiceParseTreeWalk.dive;

    const pick = function pick(x$$4, _debugObj, diveResults) {
      return (0, _ServiceParseTreeWalk.pick)(pos$$5, x$$4, _debugObj, diveResults);
    };

    const walker$$1 = (0, _Util.extend)((0, _ServiceParseTreeWalk.AstVisitorBase$00601$$$$002Ector)(), {
      VisitExpr(_path$$2, traverseSynExpr$$2, defaultTraverse$$2, expr$$6) {
        var copyOfStruct$$3, copyOfStruct$$10, copyOfStruct$$12, copyOfStruct$$13, lhs, ident$$2, _m$$2;

        const pick$$1 = (0, _Util.partialApply)(2, pick, [(0, _ast.SynExpr$$get_Range)(expr$$6)]);
        const patternInput$$5 = [traverseSynExpr$$2, defaultTraverse$$2, expr$$6];

        if (!(0, _range3.rangeContainsPos)((0, _ast.SynExpr$$get_Range)(patternInput$$5[2]), pos$$5)) {
          if (patternInput$$5[2].tag === 59) {
            const e$$22 = patternInput$$5[2].fields[0];
            const _m$$1 = patternInput$$5[2].fields[1];
            const matchValue$$16 = patternInput$$5[0](e$$22);

            if (matchValue$$16 == null) {
              return [(copyOfStruct$$3 = (0, _ast.SynExpr$$get_Range)(e$$22), (0, _range3.range$$get_End)(copyOfStruct$$3)), false];
            } else {
              const r$$6 = matchValue$$16;
              return r$$6;
            }
          } else {
            return null;
          }
        } else {
          const traverseLidOrElse = function traverseLidOrElse(optExprIfLeftOfLongId, _arg1$$2) {
            var copyOfStruct$$4, copyOfStruct$$5, copyOfStruct$$7, copyOfStruct$$6, copyOfStruct$$9, copyOfStruct$$8;
            const lidwd = _arg1$$2;
            const lid$$4 = lidwd.fields[0];
            const dots = lidwd.fields[1];
            let resultIfLeftOfLongId;

            if (optExprIfLeftOfLongId != null) {
              const e$$23 = optExprIfLeftOfLongId;
              resultIfLeftOfLongId = [(copyOfStruct$$4 = (0, _ast.SynExpr$$get_Range)(e$$23), (0, _range3.range$$get_End)(copyOfStruct$$4)), (0, _range3.posGeq)((copyOfStruct$$5 = (0, _ast.LongIdentWithDots$$get_Range)(lidwd), (0, _range3.range$$get_Start)(copyOfStruct$$5)), pos$$5)];
            } else {
              resultIfLeftOfLongId = null;
            }

            const matchValue$$17 = (0, _List.tryFind)(function predicate$$8(tupledArg$$1) {
              return (0, _range3.posGt)(pos$$5, (0, _range3.range$$get_Start)(tupledArg$$1[1]));
            }, (0, _List.reverse)((0, _List.mapIndexed)(function mapping$$1(i$$3, x$$5) {
              return [i$$3, x$$5];
            }, dots)));

            if (matchValue$$17 != null) {
              const n = matchValue$$17[0] | 0;
              return [(copyOfStruct$$7 = (copyOfStruct$$6 = (0, _List.item)(n, lid$$4), (0, _ast.Ident$$get_idRange)(copyOfStruct$$6)), (0, _range3.range$$get_End)(copyOfStruct$$7)), (0, _List.length)(lid$$4) === n + 1 ? true : (0, _range3.posGeq)((copyOfStruct$$9 = (copyOfStruct$$8 = (0, _List.item)(n + 1, lid$$4), (0, _ast.Ident$$get_idRange)(copyOfStruct$$8)), (0, _range3.range$$get_Start)(copyOfStruct$$9)), pos$$5)];
            } else {
              return resultIfLeftOfLongId;
            }
          };

          var $target$$16, _altNameRefCell$$2, _isOptional$$1, _m$$3, lidwd$$1, _m$$4, exprRhs, lidwd$$2, _m$$5, dotm, exprLeft, lidwd$$3, _m$$6, exprLeft$$1, exprRhs$$1, lidwd$$4, _m$$7, exprLeft$$2, exprRhs$$2, _m$$8, exprIndexer, exprRhs$$3, lidwd$$5, _m$$9, exprIndexer$$1, exprLeft$$3, exprRhs$$4, lidwd$$6, m$$32, e$$25, m$$33, _m$$10, ident$$3, lhs$$1;

          if (patternInput$$5[2].tag === 29) {
            $target$$16 = 0;
            _altNameRefCell$$2 = patternInput$$5[2].fields[2];
            _isOptional$$1 = patternInput$$5[2].fields[0];
            _m$$3 = patternInput$$5[2].fields[3];
            lidwd$$1 = patternInput$$5[2].fields[1];
          } else if (patternInput$$5[2].tag === 30) {
            $target$$16 = 1;
            _m$$4 = patternInput$$5[2].fields[2];
            exprRhs = patternInput$$5[2].fields[1];
            lidwd$$2 = patternInput$$5[2].fields[0];
          } else if (patternInput$$5[2].tag === 31) {
            $target$$16 = 2;
            _m$$5 = patternInput$$5[2].fields[3];
            dotm = patternInput$$5[2].fields[1];
            exprLeft = patternInput$$5[2].fields[0];
            lidwd$$3 = patternInput$$5[2].fields[2];
          } else if (patternInput$$5[2].tag === 32) {
            $target$$16 = 3;
            _m$$6 = patternInput$$5[2].fields[3];
            exprLeft$$1 = patternInput$$5[2].fields[0];
            exprRhs$$1 = patternInput$$5[2].fields[2];
            lidwd$$4 = patternInput$$5[2].fields[1];
          } else if (patternInput$$5[2].tag === 33) {
            $target$$16 = 4;
            _m$$7 = patternInput$$5[2].fields[2];
            exprLeft$$2 = patternInput$$5[2].fields[0];
            exprRhs$$2 = patternInput$$5[2].fields[1];
          } else if (patternInput$$5[2].tag === 36) {
            $target$$16 = 5;
            _m$$8 = patternInput$$5[2].fields[3];
            exprIndexer = patternInput$$5[2].fields[1];
            exprRhs$$3 = patternInput$$5[2].fields[2];
            lidwd$$5 = patternInput$$5[2].fields[0];
          } else if (patternInput$$5[2].tag === 37) {
            $target$$16 = 6;
            _m$$9 = patternInput$$5[2].fields[4];
            exprIndexer$$1 = patternInput$$5[2].fields[2];
            exprLeft$$3 = patternInput$$5[2].fields[0];
            exprRhs$$4 = patternInput$$5[2].fields[3];
            lidwd$$6 = patternInput$$5[2].fields[1];
          } else if (patternInput$$5[2].tag === 2) {
            if (patternInput$$5[2].fields[0].tag === 13) {
              $target$$16 = 7;
              m$$32 = patternInput$$5[2].fields[1];
            } else {
              $target$$16 = 10;
            }
          } else if (patternInput$$5[2].tag === 59) {
            $target$$16 = 8;
            e$$25 = patternInput$$5[2].fields[0];
            m$$33 = patternInput$$5[2].fields[1];
          } else if (patternInput$$5[2].tag === 20) {
            if (patternInput$$5[2].fields[0] === 1) {
              if (patternInput$$5[2].fields[1]) {
                if (patternInput$$5[2].fields[2].tag === 28) {
                  if (lhs = patternInput$$5[2].fields[3], (ident$$2 = patternInput$$5[2].fields[2].fields[0], (_m$$2 = patternInput$$5[2].fields[4], (0, _ast.Ident$$get_idText)(ident$$2) === "op_ArrayLookup" ? !(0, _ServiceParseTreeWalk.rangeContainsPosLeftEdgeInclusive)((0, _ast.SynExpr$$get_Range)(lhs), pos$$5) : false))) {
                    $target$$16 = 9;
                    _m$$10 = patternInput$$5[2].fields[4];
                    ident$$3 = patternInput$$5[2].fields[2].fields[0];
                    lhs$$1 = patternInput$$5[2].fields[3];
                  } else {
                    $target$$16 = 10;
                  }
                } else {
                  $target$$16 = 10;
                }
              } else {
                $target$$16 = 10;
              }
            } else {
              $target$$16 = 10;
            }
          } else {
            $target$$16 = 10;
          }

          switch ($target$$16) {
            case 0:
              {
                return traverseLidOrElse(null, lidwd$$1);
              }

            case 1:
              {
                return pick$$1(patternInput$$5[2])((0, _Types.L)(dive(lidwd$$2, (0, _ast.LongIdentWithDots$$get_Range)(lidwd$$2), (0, _Util.partialApply)(1, traverseLidOrElse, [null])), (0, _Types.L)(dive(exprRhs, (0, _ast.SynExpr$$get_Range)(exprRhs), patternInput$$5[0]), (0, _Types.L)())));
              }

            case 2:
              {
                const afterDotBeforeLid = (0, _range3.mkRange)((0, _range3.range$$get_FileName)(dotm), (0, _range3.range$$get_End)(dotm), (copyOfStruct$$10 = (0, _ast.LongIdentWithDots$$get_Range)(lidwd$$3), (0, _range3.range$$get_Start)(copyOfStruct$$10)));
                return pick$$1(patternInput$$5[2])((0, _Types.L)(dive(exprLeft, (0, _ast.SynExpr$$get_Range)(exprLeft), patternInput$$5[0]), (0, _Types.L)(dive(exprLeft, afterDotBeforeLid, function (e$$24) {
                  var copyOfStruct$$11;
                  return [(copyOfStruct$$11 = (0, _ast.SynExpr$$get_Range)(e$$24), (0, _range3.range$$get_End)(copyOfStruct$$11)), true];
                }), (0, _Types.L)(dive(lidwd$$3, (0, _ast.LongIdentWithDots$$get_Range)(lidwd$$3), (0, _Util.partialApply)(1, traverseLidOrElse, [exprLeft])), (0, _Types.L)()))));
              }

            case 3:
              {
                return pick$$1(patternInput$$5[2])((0, _Types.L)(dive(exprLeft$$1, (0, _ast.SynExpr$$get_Range)(exprLeft$$1), patternInput$$5[0]), (0, _Types.L)(dive(lidwd$$4, (0, _ast.LongIdentWithDots$$get_Range)(lidwd$$4), (0, _Util.partialApply)(1, traverseLidOrElse, [exprLeft$$1])), (0, _Types.L)(dive(exprRhs$$1, (0, _ast.SynExpr$$get_Range)(exprRhs$$1), patternInput$$5[0]), (0, _Types.L)()))));
              }

            case 4:
              {
                return pick$$1(patternInput$$5[2])((0, _Types.L)(dive(exprLeft$$2, (0, _ast.SynExpr$$get_Range)(exprLeft$$2), patternInput$$5[0]), (0, _Types.L)(dive(exprRhs$$2, (0, _ast.SynExpr$$get_Range)(exprRhs$$2), patternInput$$5[0]), (0, _Types.L)())));
              }

            case 5:
              {
                return pick$$1(patternInput$$5[2])((0, _Types.L)(dive(lidwd$$5, (0, _ast.LongIdentWithDots$$get_Range)(lidwd$$5), (0, _Util.partialApply)(1, traverseLidOrElse, [null])), (0, _Types.L)(dive(exprIndexer, (0, _ast.SynExpr$$get_Range)(exprIndexer), patternInput$$5[0]), (0, _Types.L)(dive(exprRhs$$3, (0, _ast.SynExpr$$get_Range)(exprRhs$$3), patternInput$$5[0]), (0, _Types.L)()))));
              }

            case 6:
              {
                return pick$$1(patternInput$$5[2])((0, _Types.L)(dive(exprLeft$$3, (0, _ast.SynExpr$$get_Range)(exprLeft$$3), patternInput$$5[0]), (0, _Types.L)(dive(lidwd$$6, (0, _ast.LongIdentWithDots$$get_Range)(lidwd$$6), (0, _Util.partialApply)(1, traverseLidOrElse, [exprLeft$$3])), (0, _Types.L)(dive(exprIndexer$$1, (0, _ast.SynExpr$$get_Range)(exprIndexer$$1), patternInput$$5[0]), (0, _Types.L)(dive(exprRhs$$4, (0, _ast.SynExpr$$get_Range)(exprRhs$$4), patternInput$$5[0]), (0, _Types.L)())))));
              }

            case 7:
              {
                return (0, _range3.posEq)((0, _range3.range$$get_End)(m$$32), pos$$5) ? [(0, _range3.range$$get_End)(m$$32), false] : null;
              }

            case 8:
              {
                const matchValue$$18 = patternInput$$5[0](e$$25);

                if (matchValue$$18 == null) {
                  return (0, _range3.posEq)((0, _range3.range$$get_End)(m$$33), pos$$5) ? [(copyOfStruct$$12 = (0, _ast.SynExpr$$get_Range)(e$$25), (0, _range3.range$$get_End)(copyOfStruct$$12)), false] : null;
                } else {
                  const r$$7 = matchValue$$18;
                  return r$$7;
                }
              }

            case 9:
              {
                const matchValue$$19 = patternInput$$5[1](patternInput$$5[2]);

                if (matchValue$$19 == null) {
                  return [(copyOfStruct$$13 = (0, _ast.SynExpr$$get_Range)(lhs$$1), (0, _range3.range$$get_End)(copyOfStruct$$13)), false];
                } else {
                  const x$$6 = matchValue$$19;
                  return x$$6;
                }
              }

            case 10:
              {
                return patternInput$$5[1](patternInput$$5[2]);
              }
          }
        }
      }

    });
    return (0, _ServiceParseTreeWalk.Traverse)(pos$$5, parseTree$$2, walker$$1);
  } else {
    return null;
  }
}

function UntypedParseImpl$$$GetEntityKind(pos$$6, input$$2) {
  const $007CConstructorPats$007C = function $007CConstructorPats$007C(_arg1$$4) {
    if (_arg1$$4.tag === 1) {
      const xs = _arg1$$4.fields[0];
      return (0, _List.map)(function (tuple) {
        return tuple[1];
      }, xs);
    } else {
      const ps = _arg1$$4.fields[0];
      return ps;
    }
  };

  const $007CSequentials$007C_$007C = function $007CSequentials$007C_$007C(_arg2$$2) {
    var $target$$17, e$$26, es$$5;

    if (_arg2$$2.tag === 26) {
      const activePatternResult60619 = $007CSequentials$007C_$007C(_arg2$$2.fields[3]);

      if (activePatternResult60619 != null) {
        $target$$17 = 0;
        e$$26 = _arg2$$2.fields[2];
        es$$5 = activePatternResult60619;
      } else {
        $target$$17 = 1;
      }
    } else {
      $target$$17 = 1;
    }

    switch ($target$$17) {
      case 0:
        {
          return (0, _Types.L)(e$$26, es$$5);
        }

      case 1:
        {
          if (_arg2$$2.tag === 26) {
            const e2$$11 = _arg2$$2.fields[3];
            const e1$$12 = _arg2$$2.fields[2];
            return (0, _Types.L)(e1$$12, (0, _Types.L)(e2$$11, (0, _Types.L)()));
          } else {
            return null;
          }
        }
    }
  };

  const walkImplFileInput = function walkImplFileInput(_arg3$$1) {
    const moduleOrNamespaceList = _arg3$$1.fields[5];
    return (0, _List.tryPick)(walkSynModuleOrNamespace(true), moduleOrNamespaceList);
  };

  const walkSynModuleOrNamespace = function walkSynModuleOrNamespace(isTopLevel) {
    return function (_arg4) {
      const r$$8 = _arg4.fields[7];
      const decls$$3 = _arg4.fields[3];
      const attrs = _arg4.fields[5];
      return (0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs), (0, _range3.rangeContainsPos)(r$$8, pos$$6) ? function () {
        return (0, _List.tryPick)(walkSynModuleDecl(isTopLevel), decls$$3);
      }() : null);
    };
  };

  const walkAttribute = function walkAttribute(attr) {
    return (0, _Option.defaultArg)((0, _range3.rangeContainsPos)(attr.Range, pos$$6) ? new EntityKind(0, "Attribute") : null, walkExprWithKind(new EntityKind(1, "Type"))(attr.ArgExpr));
  };

  const walkTypar = function walkTypar(_arg5) {
    const ident$$4 = _arg5.fields[0];

    if ((0, _range3.rangeContainsPos)((0, _ast.Ident$$get_idRange)(ident$$4), pos$$6)) {
      return function () {
        return new EntityKind(1, "Type");
      }();
    } else {
      return null;
    }
  };

  const walkTyparDecl = function walkTyparDecl(_arg6) {
    const typar = _arg6.fields[1];
    const attrs$$1 = _arg6.fields[0];
    return (0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$1), walkTypar(typar));
  };

  const walkTypeConstraint = function walkTypeConstraint(_arg16) {
    switch (_arg16.tag) {
      case 0:
        {
          const t = _arg16.fields[0];
          return walkTypar(t);
        }

      case 1:
        {
          const t$$1 = _arg16.fields[0];
          return walkTypar(t$$1);
        }

      case 2:
        {
          const t$$2 = _arg16.fields[0];
          return walkTypar(t$$2);
        }

      case 3:
        {
          const t$$3 = _arg16.fields[0];
          return walkTypar(t$$3);
        }

      case 4:
        {
          const t$$4 = _arg16.fields[0];
          return walkTypar(t$$4);
        }

      case 5:
        {
          const t$$5 = _arg16.fields[0];
          return walkTypar(t$$5);
        }

      case 7:
        {
          const ty = _arg16.fields[1];
          const t$$6 = _arg16.fields[0];
          return (0, _Option.defaultArg)(walkTypar(t$$6), walkType(ty));
        }

      case 8:
        {
          const ts = _arg16.fields[0];
          const sign = _arg16.fields[1];
          return (0, _Option.defaultArg)((0, _List.tryPick)(walkType, ts), walkMemberSig(sign));
        }

      case 9:
        {
          const ts$$1 = _arg16.fields[1];
          const t$$7 = _arg16.fields[0];
          return (0, _Option.defaultArg)(walkTypar(t$$7), (0, _List.tryPick)(walkType, ts$$1));
        }

      case 10:
        {
          const ts$$2 = _arg16.fields[1];
          const t$$8 = _arg16.fields[0];
          return (0, _Option.defaultArg)(walkTypar(t$$8), (0, _List.tryPick)(walkType, ts$$2));
        }

      default:
        {
          const t2 = _arg16.fields[1];
          const t1 = _arg16.fields[0];
          return (0, _Option.defaultArg)(walkTypar(t1), walkType(t2));
        }
    }
  };

  const walkPatWithKind = function walkPatWithKind(kind) {
    return function (_arg17) {
      var pats$$1;
      return _arg17.tag === 6 ? (0, _List.tryPick)(walkPat, _arg17.fields[0]) : _arg17.tag === 2 ? _arg17.fields[0].tag === 1 ? (0, _range3.rangeContainsPos)(_arg17.fields[0].fields[0], pos$$6) ? null : walkPat(_arg17.fields[0]) : null : _arg17.tag === 3 ? (0, _Option.defaultArg)(walkPat(_arg17.fields[0]), walkType(_arg17.fields[1])) : _arg17.tag === 4 ? (0, _Option.defaultArg)(walkPat(_arg17.fields[0]), (0, _List.tryPick)(walkAttribute, _arg17.fields[1])) : _arg17.tag === 5 ? (0, _List.tryPick)(walkPat, (0, _Types.L)(_arg17.fields[0], (0, _Types.L)(_arg17.fields[1], (0, _Types.L)()))) : _arg17.tag === 7 ? (pats$$1 = $007CConstructorPats$007C(_arg17.fields[3]), (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _range3.rangeContainsPos)(_arg17.fields[5], pos$$6) ? function () {
        return kind;
      }() : null, (0, _Option.defaultArg)(_arg17.fields[2], null, function binder(_arg4$$1) {
        const typars$$1 = _arg4$$1.fields[0];
        const constraints = _arg4$$1.fields[2];
        return (0, _Option.defaultArg)((0, _List.tryPick)(walkTyparDecl, typars$$1), (0, _List.tryPick)(walkTypeConstraint, constraints));
      })), (0, _List.tryPick)(walkPat, pats$$1))) : _arg17.tag === 8 ? (0, _List.tryPick)(walkPat, _arg17.fields[0]) : _arg17.tag === 10 ? walkPat(_arg17.fields[0]) : _arg17.tag === 11 ? (0, _List.tryPick)(walkPat, _arg17.fields[1]) : _arg17.tag === 15 ? walkType(_arg17.fields[0]) : _arg17.tag === 16 ? walkExpr$$1(_arg17.fields[0]) : null;
    };
  };

  const walkPat = walkPatWithKind(null);

  const walkBinding = function walkBinding(_arg7) {
    var t$$11;
    const returnInfo = _arg7.fields[8];
    const pat$$4 = _arg7.fields[7];
    const e$$28 = _arg7.fields[9];
    const attrs$$3 = _arg7.fields[4];
    return (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$3), walkPat(pat$$4)), walkExpr$$1(e$$28)), returnInfo == null ? null : (t$$11 = returnInfo.fields[0], walkType(t$$11)));
  };

  const walkInterfaceImpl = function walkInterfaceImpl(_arg8) {
    const bindings = _arg8.fields[1];
    return (0, _List.tryPick)(walkBinding, bindings);
  };

  const walkIndexerArg = function walkIndexerArg(_arg18) {
    if (_arg18.tag === 0) {
      const e2$$12 = _arg18.fields[1];
      const e1$$13 = _arg18.fields[0];
      return (0, _List.tryPick)(walkExpr$$1, (0, _Types.L)(e1$$13, (0, _Types.L)(e2$$12, (0, _Types.L)())));
    } else {
      const e$$29 = _arg18.fields[0];
      return walkExpr$$1(e$$29);
    }
  };

  const walkType = function walkType(_arg19) {
    walkType: while (true) {
      switch (_arg19.tag) {
        case 0:
          {
            const ident$$5 = _arg19.fields[0];

            try {
              return (0, _range3.rangeContainsPos)((0, _ast.LongIdentWithDots$$get_Range)(ident$$5), pos$$6) ? function () {
                return new EntityKind(1, "Type");
              }() : null;
            } catch (matchValue$$20) {
              return null;
            }
          }

        case 1:
          {
            const types = _arg19.fields[2];
            const ty$$1 = _arg19.fields[0];
            return (0, _Option.defaultArg)(walkType(ty$$1), (0, _List.tryPick)(walkType, types));
          }

        case 2:
          {
            const types$$1 = _arg19.fields[3];
            return (0, _List.tryPick)(walkType, types$$1);
          }

        case 3:
          {
            const ts$$3 = _arg19.fields[0];
            return (0, _List.tryPick)(function chooser$$1(tupledArg$$2) {
              return walkType(tupledArg$$2[1]);
            }, ts$$3);
          }

        case 5:
          {
            const t$$13 = _arg19.fields[1];
            _arg19 = t$$13;
            continue walkType;
          }

        case 6:
          {
            const t2$$1 = _arg19.fields[1];
            const t1$$1 = _arg19.fields[0];
            return (0, _Option.defaultArg)(walkType(t1$$1), walkType(t2$$1));
          }

        case 9:
          {
            const t$$14 = _arg19.fields[0];
            _arg19 = t$$14;
            continue walkType;
          }

        case 10:
          {
            const t$$15 = _arg19.fields[0];
            _arg19 = t$$15;
            continue walkType;
          }

        case 11:
          {
            const t2$$2 = _arg19.fields[1];
            const t1$$2 = _arg19.fields[0];
            return (0, _Option.defaultArg)(walkType(t1$$2), walkType(t2$$2));
          }

        case 12:
          {
            const t$$16 = _arg19.fields[0];
            _arg19 = t$$16;
            continue walkType;
          }

        default:
          {
            return null;
          }
      }
    }
  };

  const walkClause = function walkClause(_arg9) {
    const pat$$5 = _arg9.fields[0];
    const e2$$13 = _arg9.fields[2];
    const e1$$14 = _arg9.fields[1];
    return (0, _Option.defaultArg)((0, _Option.defaultArg)(walkPatWithKind(new EntityKind(1, "Type"))(pat$$5), walkExpr$$1(e2$$13)), (0, _Option.defaultArg)(e1$$14, null, walkExpr$$1));
  };

  const walkExprWithKind = function walkExprWithKind(parentKind) {
    return function (_arg20) {
      var e$$45;

      if (_arg20.tag === 29) {
        var $target$$18;

        if (_arg20.fields[1].fields[1].tail == null) {
          if ((0, _range3.rangeContainsPos)(_arg20.fields[3], pos$$6)) {
            $target$$18 = 0;
          } else {
            $target$$18 = 1;
          }
        } else {
          $target$$18 = 1;
        }

        switch ($target$$18) {
          case 0:
            {
              return (0, _Option.defaultArg)(parentKind, new EntityKind(2, "FunctionOrValue", false));
            }

          case 1:
            {
              if (_arg20.fields[1].fields[1].tail != null) {
                const firstDotRange = _arg20.fields[1].fields[1].head;
                const firstPartRange = (0, _range3.mkRange)("", (0, _range3.range$$get_Start)(_arg20.fields[3]), (0, _range3.mkPos)((0, _range3.range$$get_StartLine)(firstDotRange), (0, _range3.range$$get_StartColumn)(firstDotRange) - 1));
                return (0, _range3.rangeContainsPos)(firstPartRange, pos$$6) ? (0, _Option.defaultArg)(parentKind, new EntityKind(2, "FunctionOrValue", false)) : null;
              } else {
                return null;
              }
            }
        }
      } else if (_arg20.tag === 0) {
        return walkExprWithKind(parentKind)(_arg20.fields[0]);
      } else if (_arg20.tag === 1) {
        return walkExprWithKind(parentKind)(_arg20.fields[2]);
      } else if (_arg20.tag === 3) {
        return walkExprWithKind(parentKind)(_arg20.fields[0]);
      } else if (_arg20.tag === 4) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), _arg20.fields[0]);
      } else if (_arg20.tag === 6) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), _arg20.fields[1]);
      } else if (_arg20.tag === 7) {
        return (0, _range3.rangeContainsPos)(_arg20.fields[3], pos$$6) ? function () {
          return (0, _List.tryPick)(function chooser$$2(tupledArg$$3) {
            return (0, _Option.defaultArg)(tupledArg$$3[1], null, walkExprWithKind(parentKind));
          }, _arg20.fields[2]);
        }() : null;
      } else if (_arg20.tag === 8) {
        return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(_arg20.fields[2]), walkType(_arg20.fields[1]));
      } else if (_arg20.tag === 9) {
        return (0, _Option.defaultArg)((0, _Option.defaultArg)(walkType(_arg20.fields[0]), (0, _List.tryPick)(walkBinding, _arg20.fields[2])), (0, _List.tryPick)(walkInterfaceImpl, _arg20.fields[3]));
      } else if (_arg20.tag === 10) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(_arg20.fields[1], (0, _Types.L)(_arg20.fields[2], (0, _Types.L)())));
      } else if (_arg20.tag === 11) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(_arg20.fields[2], (0, _Types.L)(_arg20.fields[4], (0, _Types.L)(_arg20.fields[5], (0, _Types.L)()))));
      } else if (_arg20.tag === 12) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(_arg20.fields[4], (0, _Types.L)(_arg20.fields[5], (0, _Types.L)())));
      } else if (_arg20.tag === 13) {
        return walkExprWithKind(parentKind)(_arg20.fields[1]);
      } else if (_arg20.tag === 14) {
        return walkExprWithKind(parentKind)(_arg20.fields[2]);
      } else if (_arg20.tag === 15) {
        return walkExprWithKind(parentKind)(_arg20.fields[3]);
      } else if (_arg20.tag === 16) {
        return (0, _List.tryPick)(walkClause, _arg20.fields[2]);
      } else if (_arg20.tag === 17) {
        return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(_arg20.fields[1]), (0, _List.tryPick)(walkClause, _arg20.fields[2]));
      } else if (_arg20.tag === 18) {
        return walkExprWithKind(parentKind)(_arg20.fields[0]);
      } else if (_arg20.tag === 19) {
        return walkExprWithKind(parentKind)(_arg20.fields[0]);
      } else if (_arg20.tag === 20) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(_arg20.fields[2], (0, _Types.L)(_arg20.fields[3], (0, _Types.L)())));
      } else if (_arg20.tag === 21) {
        return (0, _Option.defaultArg)(walkExprWithKind(new EntityKind(1, "Type"))(_arg20.fields[0]), (0, _List.tryPick)(walkType, _arg20.fields[2]));
      } else if (_arg20.tag === 22) {
        return (0, _Option.defaultArg)((0, _List.tryPick)(walkBinding, _arg20.fields[2]), walkExprWithKind(parentKind)(_arg20.fields[3]));
      } else if (_arg20.tag === 23) {
        return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(_arg20.fields[0]), (0, _List.tryPick)(walkClause, _arg20.fields[2]));
      } else if (_arg20.tag === 24) {
        return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(_arg20.fields[0], (0, _Types.L)(_arg20.fields[1], (0, _Types.L)())));
      } else if (_arg20.tag === 25) {
        return walkExprWithKind(parentKind)(_arg20.fields[0]);
      } else {
        const activePatternResult60652 = $007CSequentials$007C_$007C(_arg20);

        if (activePatternResult60652 != null) {
          const es$$8 = activePatternResult60652;
          return (0, _List.tryPick)(walkExprWithKind(parentKind), es$$8);
        } else {
          var $target$$19, e$$60, synMatchClauseList$$2;

          switch (_arg20.tag) {
            case 27:
              $target$$19 = 0;
              break;

            case 28:
              $target$$19 = 1;
              break;

            case 30:
              $target$$19 = 2;
              break;

            case 31:
              $target$$19 = 3;
              break;

            case 32:
              $target$$19 = 4;
              break;

            case 33:
              $target$$19 = 5;
              break;

            case 34:
              $target$$19 = 6;
              break;

            case 35:
              $target$$19 = 7;
              break;

            case 36:
              $target$$19 = 8;
              break;

            case 37:
              $target$$19 = 9;
              break;

            case 38:
              $target$$19 = 10;
              break;

            case 39:
              $target$$19 = 11;
              break;

            case 40:
              $target$$19 = 12;
              break;

            case 41:
              $target$$19 = 13;
              break;

            case 42:
              $target$$19 = 14;
              break;

            case 44:
              $target$$19 = 15;
              break;

            case 46:
              $target$$19 = 16;
              break;

            case 48:
              $target$$19 = 17;
              break;

            case 49:
              $target$$19 = 18;
              break;

            case 17:
              $target$$19 = 19;
              e$$60 = _arg20.fields[1];
              synMatchClauseList$$2 = _arg20.fields[2];
              break;

            case 51:
              $target$$19 = 19;
              e$$60 = _arg20.fields[1];
              synMatchClauseList$$2 = _arg20.fields[2];
              break;

            case 50:
              $target$$19 = 20;
              break;

            case 52:
              $target$$19 = 21;
              break;

            case 45:
              $target$$19 = 22;
              break;

            default:
              $target$$19 = 23;
          }

          switch ($target$$19) {
            case 0:
              {
                const e3$$3 = _arg20.fields[2];
                const e2$$19 = _arg20.fields[1];
                const e1$$20 = _arg20.fields[0];
                return (0, _Option.defaultArg)((0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(e1$$20, (0, _Types.L)(e2$$19, (0, _Types.L)()))), e3$$3 != null ? (e$$45 = e3$$3, walkExprWithKind(parentKind)(e$$45)) : null);
              }

            case 1:
              {
                const ident$$6 = _arg20.fields[0];
                return (0, _range3.rangeContainsPos)((0, _ast.Ident$$get_idRange)(ident$$6), pos$$6) ? function () {
                  return new EntityKind(2, "FunctionOrValue", false);
                }() : null;
              }

            case 2:
              {
                const e$$46 = _arg20.fields[1];
                return walkExprWithKind(parentKind)(e$$46);
              }

            case 3:
              {
                const e$$47 = _arg20.fields[0];
                return walkExprWithKind(parentKind)(e$$47);
              }

            case 4:
              {
                const e$$48 = _arg20.fields[0];
                return walkExprWithKind(parentKind)(e$$48);
              }

            case 5:
              {
                const e$$49 = _arg20.fields[0];
                return walkExprWithKind(parentKind)(e$$49);
              }

            case 6:
              {
                const e$$50 = _arg20.fields[0];
                const args$$3 = _arg20.fields[1];
                return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(e$$50), (0, _List.tryPick)(walkIndexerArg, args$$3));
              }

            case 7:
              {
                const e$$51 = _arg20.fields[0];
                const args$$4 = _arg20.fields[1];
                return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(e$$51), (0, _List.tryPick)(walkIndexerArg, args$$4));
              }

            case 8:
              {
                const e2$$20 = _arg20.fields[2];
                const e1$$21 = _arg20.fields[1];
                return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(e1$$21, (0, _Types.L)(e2$$20, (0, _Types.L)())));
              }

            case 9:
              {
                const e3$$4 = _arg20.fields[3];
                const e2$$21 = _arg20.fields[2];
                const e1$$22 = _arg20.fields[0];
                return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(e1$$22, (0, _Types.L)(e2$$21, (0, _Types.L)(e3$$4, (0, _Types.L)()))));
              }

            case 10:
              {
                const t$$18 = _arg20.fields[1];
                const e$$52 = _arg20.fields[0];
                return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(e$$52), walkType(t$$18));
              }

            case 11:
              {
                const t$$19 = _arg20.fields[1];
                const e$$53 = _arg20.fields[0];
                return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(e$$53), walkType(t$$19));
              }

            case 12:
              {
                const t$$20 = _arg20.fields[1];
                const e$$54 = _arg20.fields[0];
                return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(e$$54), walkType(t$$20));
              }

            case 13:
              {
                const e$$55 = _arg20.fields[0];
                return walkExprWithKind(parentKind)(e$$55);
              }

            case 14:
              {
                const e$$56 = _arg20.fields[0];
                return walkExprWithKind(parentKind)(e$$56);
              }

            case 15:
              {
                const e$$57 = _arg20.fields[1];
                return walkExprWithKind(parentKind)(e$$57);
              }

            case 16:
              {
                const e2$$22 = _arg20.fields[2];
                const e1$$23 = _arg20.fields[0];
                return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(e1$$23, (0, _Types.L)(e2$$22, (0, _Types.L)())));
              }

            case 17:
              {
                const e$$58 = _arg20.fields[1];
                return walkExprWithKind(parentKind)(e$$58);
              }

            case 18:
              {
                const e$$59 = _arg20.fields[1];
                return walkExprWithKind(parentKind)(e$$59);
              }

            case 19:
              {
                return (0, _Option.defaultArg)(walkExprWithKind(parentKind)(e$$60), (0, _List.tryPick)(walkClause, synMatchClauseList$$2));
              }

            case 20:
              {
                const e2$$23 = _arg20.fields[5];
                const e1$$24 = _arg20.fields[4];
                return (0, _List.tryPick)(walkExprWithKind(parentKind), (0, _Types.L)(e1$$24, (0, _Types.L)(e2$$23, (0, _Types.L)())));
              }

            case 21:
              {
                const e$$61 = _arg20.fields[0];
                return walkExprWithKind(parentKind)(e$$61);
              }

            case 22:
              {
                const ts$$4 = _arg20.fields[0];
                const sign$$1 = _arg20.fields[1];
                const e$$62 = _arg20.fields[2];
                return (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _List.tryPick)(walkTypar, ts$$4), walkMemberSig(sign$$1)), walkExprWithKind(parentKind)(e$$62));
              }

            case 23:
              {
                return null;
              }
          }
        }
      }
    };
  };

  const walkExpr$$1 = walkExprWithKind(null);

  const walkSimplePat = function walkSimplePat(_arg21) {
    switch (_arg21.tag) {
      case 2:
        {
          const pat$$6 = _arg21.fields[0];
          const attrs$$4 = _arg21.fields[1];
          return (0, _Option.defaultArg)(walkSimplePat(pat$$6), (0, _List.tryPick)(walkAttribute, attrs$$4));
        }

      case 1:
        {
          const t$$21 = _arg21.fields[1];
          const pat$$7 = _arg21.fields[0];
          return (0, _Option.defaultArg)(walkSimplePat(pat$$7), walkType(t$$21));
        }

      default:
        {
          return null;
        }
    }
  };

  const walkField = function walkField(_arg10$$1) {
    const t$$22 = _arg10$$1.fields[3];
    const attrs$$5 = _arg10$$1.fields[0];
    return (0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$5), walkType(t$$22));
  };

  const walkValSig = function walkValSig(_arg11) {
    const t$$23 = _arg11.fields[3];
    const attrs$$6 = _arg11.fields[0];
    return (0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$6), walkType(t$$23));
  };

  const walkMemberSig = function walkMemberSig(_arg22) {
    switch (_arg22.tag) {
      case 0:
        {
          const vs = _arg22.fields[0];
          return walkValSig(vs);
        }

      case 1:
        {
          const t$$25 = _arg22.fields[0];
          return walkType(t$$25);
        }

      case 3:
        {
          const f$$6 = _arg22.fields[0];
          return walkField(f$$6);
        }

      case 4:
        {
          const repr$$1 = _arg22.fields[0].fields[1];
          const memberSigs = _arg22.fields[0].fields[2];
          const info = _arg22.fields[0].fields[0];
          return (0, _Option.defaultArg)((0, _Option.defaultArg)(walkComponentInfo(false)(info), walkTypeDefnSigRepr(repr$$1)), (0, _List.tryPick)(walkMemberSig, memberSigs));
        }

      default:
        {
          const t$$24 = _arg22.fields[0];
          return walkType(t$$24);
        }
    }
  };

  const walkMember$$1 = function walkMember$$1(_arg23) {
    switch (_arg23.tag) {
      case 5:
        {
          const valSig = _arg23.fields[0];
          return walkValSig(valSig);
        }

      case 1:
        {
          const binding = _arg23.fields[0];
          return walkBinding(binding);
        }

      case 2:
        {
          const pats$$4 = _arg23.fields[2];
          const attrs$$7 = _arg23.fields[1];
          return (0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$7), (0, _List.tryPick)(walkSimplePat, pats$$4));
        }

      case 3:
        {
          const t$$26 = _arg23.fields[0];
          const e$$63 = _arg23.fields[1];
          return (0, _Option.defaultArg)(walkType(t$$26), walkExpr$$1(e$$63));
        }

      case 4:
        {
          const bindings$$3 = _arg23.fields[0];
          return (0, _List.tryPick)(walkBinding, bindings$$3);
        }

      case 6:
        {
          const t$$27 = _arg23.fields[0];
          const members = _arg23.fields[1];
          return (0, _Option.defaultArg)(walkType(t$$27), (0, _Option.defaultArg)(members, null, function binder$$2(list$$13) {
            return (0, _List.tryPick)(walkMember$$1, list$$13);
          }));
        }

      case 7:
        {
          const t$$28 = _arg23.fields[0];
          return walkType(t$$28);
        }

      case 8:
        {
          const field = _arg23.fields[0];
          return walkField(field);
        }

      case 9:
        {
          const tdef = _arg23.fields[0];
          return walkTypeDefn(tdef);
        }

      case 10:
        {
          const t$$29 = _arg23.fields[3];
          const e$$64 = _arg23.fields[8];
          const attrs$$8 = _arg23.fields[0];
          return (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$8), (0, _Option.defaultArg)(t$$29, null, walkType)), walkExpr$$1(e$$64));
        }

      default:
        {
          return null;
        }
    }
  };

  const walkEnumCase = function walkEnumCase(_arg12) {
    const attrs$$9 = _arg12.fields[0];
    return (0, _List.tryPick)(walkAttribute, attrs$$9);
  };

  const walkUnionCaseType = function walkUnionCaseType(_arg24) {
    if (_arg24.tag === 1) {
      const t$$30 = _arg24.fields[0][0];
      return walkType(t$$30);
    } else {
      const fields$$1 = _arg24.fields[0];
      return (0, _List.tryPick)(walkField, fields$$1);
    }
  };

  const walkUnionCase = function walkUnionCase(_arg13) {
    const t$$31 = _arg13.fields[2];
    const attrs$$10 = _arg13.fields[0];
    return (0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$10), walkUnionCaseType(t$$31));
  };

  const walkTypeDefnSimple = function walkTypeDefnSimple(_arg25) {
    switch (_arg25.tag) {
      case 1:
        {
          const cases = _arg25.fields[0];
          return (0, _List.tryPick)(walkEnumCase, cases);
        }

      case 0:
        {
          const cases$$1 = _arg25.fields[1];
          return (0, _List.tryPick)(walkUnionCase, cases$$1);
        }

      case 2:
        {
          const fields$$2 = _arg25.fields[1];
          return (0, _List.tryPick)(walkField, fields$$2);
        }

      case 5:
        {
          const t$$32 = _arg25.fields[1];
          return walkType(t$$32);
        }

      default:
        {
          return null;
        }
    }
  };

  const walkComponentInfo = function walkComponentInfo(isModule) {
    return function (_arg14) {
      const typars$$2 = _arg14.fields[1];
      const r$$12 = _arg14.fields[7];
      const constraints$$1 = _arg14.fields[2];
      const attrs$$11 = _arg14.fields[0];
      return (0, _Option.defaultArg)(isModule ? null : (0, _range3.rangeContainsPos)(r$$12, pos$$6) ? function () {
        return new EntityKind(1, "Type");
      }() : null, (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _List.tryPick)(walkAttribute, attrs$$11), (0, _List.tryPick)(walkTyparDecl, typars$$2)), (0, _List.tryPick)(walkTypeConstraint, constraints$$1)));
    };
  };

  const walkTypeDefnRepr = function walkTypeDefnRepr(_arg26) {
    switch (_arg26.tag) {
      case 1:
        {
          const defn = _arg26.fields[0];
          return walkTypeDefnSimple(defn);
        }

      case 2:
        {
          return null;
        }

      default:
        {
          const defns = _arg26.fields[1];
          return (0, _List.tryPick)(walkMember$$1, defns);
        }
    }
  };

  const walkTypeDefnSigRepr = function walkTypeDefnSigRepr(_arg27) {
    switch (_arg27.tag) {
      case 1:
        {
          const defn$$1 = _arg27.fields[0];
          return walkTypeDefnSimple(defn$$1);
        }

      case 2:
        {
          return null;
        }

      default:
        {
          const defns$$1 = _arg27.fields[1];
          return (0, _List.tryPick)(walkMemberSig, defns$$1);
        }
    }
  };

  const walkTypeDefn = function walkTypeDefn(_arg15) {
    const repr$$2 = _arg15.fields[1];
    const members$$1 = _arg15.fields[2];
    const info$$1 = _arg15.fields[0];
    return (0, _Option.defaultArg)((0, _Option.defaultArg)(walkComponentInfo(false)(info$$1), walkTypeDefnRepr(repr$$2)), (0, _List.tryPick)(walkMember$$1, members$$1));
  };

  const walkSynModuleDecl = function walkSynModuleDecl(isTopLevel$$1) {
    return function (decl$$1) {
      switch (decl$$1.tag) {
        case 9:
          {
            const fragment = decl$$1.fields[0];
            return walkSynModuleOrNamespace(isTopLevel$$1)(fragment);
          }

        case 1:
          {
            const range$$22 = decl$$1.fields[4];
            const modules$$3 = decl$$1.fields[2];
            const info$$2 = decl$$1.fields[0];
            return (0, _Option.defaultArg)(walkComponentInfo(true)(info$$2), (0, _range3.rangeContainsPos)(range$$22, pos$$6) ? function () {
              return (0, _List.tryPick)(walkSynModuleDecl(false), modules$$3);
            }() : null);
          }

        case 6:
          {
            return null;
          }

        case 2:
          {
            const bindings$$4 = decl$$1.fields[1];
            return (0, _List.tryPick)(walkBinding, bindings$$4);
          }

        case 3:
          {
            const expr$$8 = decl$$1.fields[1];
            return walkExpr$$1(expr$$8);
          }

        case 4:
          {
            const types$$2 = decl$$1.fields[0];
            return (0, _List.tryPick)(walkTypeDefn, types$$2);
          }

        default:
          {
            return null;
          }
      }
    };
  };

  if (input$$2.tag === 0) {
    const input$$3 = input$$2.fields[0];
    return walkImplFileInput(input$$3);
  } else {
    return null;
  }
}

function UntypedParseImpl$$$findMatches(prefix, suffix, str, startIndex) {
  return (0, _Seq.delay)(function () {
    const i1 = str.indexOf(prefix, startIndex) | 0;

    if (i1 >= 0) {
      const i2 = str.indexOf(suffix, i1 + prefix.length) | 0;

      if (i2 >= 0) {
        const index = i1 + prefix.length | 0;
        const count = i2 - index | 0;
        const start = i2 + suffix.length | 0;
        return (0, _Seq.append)((0, _Seq.singleton)([index, count]), (0, _Seq.delay)(function () {
          return UntypedParseImpl$$$findMatches(prefix, suffix, str, start);
        }));
      } else {
        return (0, _Seq.empty)();
      }
    } else {
      return (0, _Seq.empty)();
    }
  });
}

function UntypedParseImpl$$$TryGetCompletionContext(pos$$7, parsedInput, lineStr) {
  const matchValue$$21 = UntypedParseImpl$$$GetEntityKind(pos$$7, parsedInput);
  var $target$$20;

  if (matchValue$$21 != null) {
    if (matchValue$$21.tag === 0) {
      $target$$20 = 0;
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        return new CompletionContext(5, "AttributeApplication");
      }

    case 1:
      {
        const parseLid = function parseLid(_arg1$$6) {
          const lid$$5 = _arg1$$6.fields[0];
          const dots$$1 = _arg1$$6.fields[1];

          const collect = function collect(plid, parts$$1, dots$$2) {
            var copyOfStruct$$15, copyOfStruct$$14, copyOfStruct$$16;

            collect: while (true) {
              const matchValue$$22 = [parts$$1, dots$$2];

              if (matchValue$$22[0].tail != null) {
                const xs$$1 = matchValue$$22[0].tail;
                const x$$7 = matchValue$$22[0].head;

                if ((0, _range3.rangeContainsPos)((0, _ast.Ident$$get_idRange)(x$$7), pos$$7)) {
                  const s = (0, _ast.Ident$$get_idText)(x$$7).substr(0, (0, _range3.pos$$get_Column)(pos$$7) - (copyOfStruct$$15 = (copyOfStruct$$14 = (0, _ast.Ident$$get_idRange)(x$$7), (0, _range3.range$$get_Start)(copyOfStruct$$14)), (0, _range3.pos$$get_Column)(copyOfStruct$$15)));
                  const residue = s.length !== 0 ? s : null;
                  return [plid, residue];
                } else if ((0, _range3.posGt)((copyOfStruct$$16 = (0, _ast.Ident$$get_idRange)(x$$7), (0, _range3.range$$get_Start)(copyOfStruct$$16)), pos$$7)) {
                  return [plid, null];
                } else {
                  if (matchValue$$22[1].tail != null) {
                    const ds$$1 = matchValue$$22[1].tail;
                    const d$$2 = matchValue$$22[1].head;

                    if ((0, _range3.posGeq)(pos$$7, (0, _range3.range$$get_End)(d$$2))) {
                      plid = (0, _Types.L)((0, _ast.Ident$$get_idText)(x$$7), plid);
                      parts$$1 = xs$$1;
                      dots$$2 = ds$$1;
                      continue collect;
                    } else {
                      return null;
                    }
                  } else {
                    return [plid, (0, _ast.Ident$$get_idText)(x$$7)];
                  }
                }
              } else {
                return [plid, null];
              }
            }
          };

          const matchValue$$23 = collect((0, _Types.L)(), lid$$5, dots$$1);

          if (matchValue$$23 == null) {
            return null;
          } else {
            const residue$$1 = matchValue$$23[1];
            const parts$$2 = matchValue$$23[0];
            return [(0, _List.reverse)(parts$$2), residue$$1];
          }
        };

        const $007CClass$007CInterface$007CStruct$007CUnknown$007CInvalid$007C = function $007CClass$007CInterface$007CStruct$007CUnknown$007CInvalid$007C(synAttributes) {
          const $007CSynAttr$007C_$007C = function $007CSynAttr$007C_$007C(name, attr$$1) {
            var x$$8;
            var $target$$21, x$$9;

            if (attr$$1.TypeName.fields[0].tail != null) {
              if (attr$$1.TypeName.fields[0].tail.tail == null) {
                if (x$$8 = attr$$1.TypeName.fields[0].head, (0, _ast.Ident$$get_idText)(x$$8) === name) {
                  $target$$21 = 0;
                  x$$9 = attr$$1.TypeName.fields[0].head;
                } else {
                  $target$$21 = 1;
                }
              } else {
                $target$$21 = 1;
              }
            } else {
              $target$$21 = 1;
            }

            switch ($target$$21) {
              case 0:
                {
                  return (0, _Option.some)(null);
                }

              case 1:
                {
                  return null;
                }
            }
          };

          const getKind = function getKind(isClass, isInterface, isStruct, _arg2$$4) {
            getKind: while (true) {
              if (_arg2$$4.tail != null) {
                if ($007CSynAttr$007C_$007C("Class", _arg2$$4.head) != null) {
                  isClass = true;
                  isInterface = isInterface;
                  isStruct = isStruct;
                  _arg2$$4 = _arg2$$4.tail;
                  continue getKind;
                } else {
                  var $target$$22, xs$$3;

                  if (_arg2$$4.tail != null) {
                    if ($007CSynAttr$007C_$007C("AbstractClass", _arg2$$4.head) != null) {
                      $target$$22 = 0;
                      xs$$3 = _arg2$$4.tail;
                    } else {
                      $target$$22 = 1;
                    }
                  } else {
                    $target$$22 = 1;
                  }

                  switch ($target$$22) {
                    case 0:
                      {
                        isClass = true;
                        isInterface = isInterface;
                        isStruct = isStruct;
                        _arg2$$4 = xs$$3;
                        continue getKind;
                      }

                    case 1:
                      {
                        var $target$$23, xs$$4;

                        if (_arg2$$4.tail != null) {
                          if ($007CSynAttr$007C_$007C("Interface", _arg2$$4.head) != null) {
                            $target$$23 = 0;
                            xs$$4 = _arg2$$4.tail;
                          } else {
                            $target$$23 = 1;
                          }
                        } else {
                          $target$$23 = 1;
                        }

                        switch ($target$$23) {
                          case 0:
                            {
                              isClass = isClass;
                              isInterface = true;
                              isStruct = isStruct;
                              _arg2$$4 = xs$$4;
                              continue getKind;
                            }

                          case 1:
                            {
                              var $target$$24, xs$$5;

                              if (_arg2$$4.tail != null) {
                                if ($007CSynAttr$007C_$007C("Struct", _arg2$$4.head) != null) {
                                  $target$$24 = 0;
                                  xs$$5 = _arg2$$4.tail;
                                } else {
                                  $target$$24 = 1;
                                }
                              } else {
                                $target$$24 = 1;
                              }

                              switch ($target$$24) {
                                case 0:
                                  {
                                    isClass = isClass;
                                    isInterface = isInterface;
                                    isStruct = true;
                                    _arg2$$4 = xs$$5;
                                    continue getKind;
                                  }

                                case 1:
                                  {
                                    if (_arg2$$4.tail != null) {
                                      const xs$$6 = _arg2$$4.tail;
                                      isClass = isClass;
                                      isInterface = isInterface;
                                      isStruct = isStruct;
                                      _arg2$$4 = xs$$6;
                                      continue getKind;
                                    } else {
                                      throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/service/ServiceUntypedParse.fs", 1047, 16);
                                    }
                                  }
                              }
                            }
                        }
                      }
                  }
                }
              } else {
                return [isClass, isInterface, isStruct];
              }
            }
          };

          const matchValue$$24 = getKind(false, false, false, synAttributes);
          var $target$$25;

          if (matchValue$$24[0]) {
            if (matchValue$$24[1]) {
              $target$$25 = 4;
            } else if (matchValue$$24[2]) {
              $target$$25 = 4;
            } else {
              $target$$25 = 1;
            }
          } else if (matchValue$$24[1]) {
            if (matchValue$$24[2]) {
              $target$$25 = 4;
            } else {
              $target$$25 = 2;
            }
          } else if (matchValue$$24[2]) {
            $target$$25 = 3;
          } else {
            $target$$25 = 0;
          }

          switch ($target$$25) {
            case 0:
              {
                return new _Option.Choice(3, "Choice4Of5", null);
              }

            case 1:
              {
                return new _Option.Choice(0, "Choice1Of5", null);
              }

            case 2:
              {
                return new _Option.Choice(1, "Choice2Of5", null);
              }

            case 3:
              {
                return new _Option.Choice(2, "Choice3Of5", null);
              }

            case 4:
              {
                return new _Option.Choice(4, "Choice5Of5", null);
              }
          }
        };

        const GetCompletionContextForInheritSynMember = function GetCompletionContextForInheritSynMember(tupledArg$$4) {
          const synAttributes$$1 = tupledArg$$4[0].fields[0];

          const success = function success(k) {
            return new CompletionContext(1, "Inherit", k, tupledArg$$4[2]);
          };

          if (tupledArg$$4[1].tag === 1) {
            var $target$$26;
            const activePatternResult60700 = $007CClass$007CInterface$007CStruct$007CUnknown$007CInvalid$007C(synAttributes$$1);

            if (activePatternResult60700.tag === 0) {
              $target$$26 = 0;
            } else if (activePatternResult60700.tag === 3) {
              $target$$26 = 0;
            } else {
              $target$$26 = 1;
            }

            switch ($target$$26) {
              case 0:
                {
                  return success(new InheritanceContext(0, "Class"));
                }

              case 1:
                {
                  return new CompletionContext(0, "Invalid");
                }
            }
          } else if (tupledArg$$4[1].tag === 2) {
            var $target$$27;
            const activePatternResult60701 = $007CClass$007CInterface$007CStruct$007CUnknown$007CInvalid$007C(synAttributes$$1);

            if (activePatternResult60701.tag === 1) {
              $target$$27 = 0;
            } else if (activePatternResult60701.tag === 3) {
              $target$$27 = 0;
            } else {
              $target$$27 = 1;
            }

            switch ($target$$27) {
              case 0:
                {
                  return success(new InheritanceContext(1, "Interface"));
                }

              case 1:
                {
                  return new CompletionContext(0, "Invalid");
                }
            }
          } else if (tupledArg$$4[1].tag === 3) {
            return new CompletionContext(0, "Invalid");
          } else if (tupledArg$$4[1].tag === 0) {
            const activePatternResult60702 = $007CClass$007CInterface$007CStruct$007CUnknown$007CInvalid$007C(synAttributes$$1);

            if (activePatternResult60702.tag === 0) {
              return success(new InheritanceContext(0, "Class"));
            } else if (activePatternResult60702.tag === 1) {
              return success(new InheritanceContext(1, "Interface"));
            } else if (activePatternResult60702.tag === 3) {
              return success(new InheritanceContext(2, "Unknown"));
            } else {
              return new CompletionContext(0, "Invalid");
            }
          } else {
            return null;
          }
        };

        const $007COperator$007C_$007C = function $007COperator$007C_$007C(name$$1, e$$65) {
          var rhs$$2, lhs$$2, ident$$7;
          var $target$$28, ident$$8, lhs$$3, rhs$$3;

          if (e$$65.tag === 20) {
            if (e$$65.fields[0] === 1) {
              if (e$$65.fields[1]) {
                $target$$28 = 1;
              } else if (e$$65.fields[2].tag === 20) {
                if (e$$65.fields[2].fields[0] === 1) {
                  if (e$$65.fields[2].fields[1]) {
                    if (e$$65.fields[2].fields[2].tag === 28) {
                      if (rhs$$2 = e$$65.fields[3], (lhs$$2 = e$$65.fields[2].fields[3], (ident$$7 = e$$65.fields[2].fields[2].fields[0], (0, _ast.Ident$$get_idText)(ident$$7) === name$$1))) {
                        $target$$28 = 0;
                        ident$$8 = e$$65.fields[2].fields[2].fields[0];
                        lhs$$3 = e$$65.fields[2].fields[3];
                        rhs$$3 = e$$65.fields[3];
                      } else {
                        $target$$28 = 1;
                      }
                    } else {
                      $target$$28 = 1;
                    }
                  } else {
                    $target$$28 = 1;
                  }
                } else {
                  $target$$28 = 1;
                }
              } else {
                $target$$28 = 1;
              }
            } else {
              $target$$28 = 1;
            }
          } else {
            $target$$28 = 1;
          }

          switch ($target$$28) {
            case 0:
              {
                return [lhs$$3, rhs$$3];
              }

            case 1:
              {
                return null;
              }
          }
        };

        const isInRhsOfRangeOp = function isInRhsOfRangeOp(p) {
          var $target$$29;

          if (p.tail != null) {
            if (p.head.tag === 0) {
              if ($007COperator$007C_$007C("op_Range", p.head.fields[0]) != null) {
                $target$$29 = 0;
              } else {
                $target$$29 = 1;
              }
            } else {
              $target$$29 = 1;
            }
          } else {
            $target$$29 = 1;
          }

          switch ($target$$29) {
            case 0:
              {
                return true;
              }

            case 1:
              {
                return false;
              }
          }
        };

        const $007CSetter$007C_$007C = function $007CSetter$007C_$007C(e$$66) {
          var $target$$30, id;
          const activePatternResult60710 = $007COperator$007C_$007C("op_Equality", e$$66);

          if (activePatternResult60710 != null) {
            if (activePatternResult60710[0].tag === 28) {
              $target$$30 = 0;
              id = activePatternResult60710[0].fields[0];
            } else {
              $target$$30 = 1;
            }
          } else {
            $target$$30 = 1;
          }

          switch ($target$$30) {
            case 0:
              {
                return id;
              }

            case 1:
              {
                return null;
              }
          }
        };

        const findSetters = function findSetters(argList) {
          var $target$$31, parameters;

          if (argList.tag === 0) {
            if (argList.fields[0].tag === 4) {
              $target$$31 = 0;
              parameters = argList.fields[0].fields[0];
            } else {
              $target$$31 = 1;
            }
          } else {
            $target$$31 = 1;
          }

          switch ($target$$31) {
            case 0:
              {
                const setters = new Set([]);
                (0, _Seq.iterate)(function (p$$1) {
                  const activePatternResult60712 = $007CSetter$007C_$007C(p$$1);

                  if (activePatternResult60712 != null) {
                    const id$$1 = activePatternResult60712;
                    (0, _Util.addToSet)((0, _ast.Ident$$get_idText)(id$$1), setters);
                  }
                }, parameters);
                return setters;
              }

            case 1:
              {
                return UntypedParseImpl$$$emptyStringSet;
              }
          }
        };

        const endOfLastIdent = function endOfLastIdent(lid$$6) {
          const last = (0, _List.last)((0, _ast.LongIdentWithDots$$get_Lid)(lid$$6));
          let copyOfStruct$$17 = (0, _ast.Ident$$get_idRange)(last);
          return (0, _range3.range$$get_End)(copyOfStruct$$17);
        };

        const endOfClosingTokenOrLastIdent = function endOfClosingTokenOrLastIdent(mClosing, lid$$7) {
          if (mClosing == null) {
            return endOfLastIdent(lid$$7);
          } else {
            const m$$34 = mClosing;
            return (0, _range3.range$$get_End)(m$$34);
          }
        };

        const endOfClosingTokenOrIdent = function endOfClosingTokenOrIdent(mClosing$$1, id$$2) {
          if (mClosing$$1 == null) {
            let copyOfStruct$$18 = (0, _ast.Ident$$get_idRange)(id$$2);
            return (0, _range3.range$$get_End)(copyOfStruct$$18);
          } else {
            const m$$35 = mClosing$$1;
            return (0, _range3.range$$get_End)(m$$35);
          }
        };

        const $007CNewObjectOrMethodCall$007C_$007C = function $007CNewObjectOrMethodCall$007C_$007C(e$$67) {
          var copyOfStruct$$19;
          var $target$$32, arg$$2, typeName, arg$$3, mGreaterThan, typeName$$1, arg$$4, id$$3, arg$$5, id$$4, mGreaterThan$$1, arg$$6, lid$$8, arg$$7, lid$$9, mGreaterThan$$2;

          if (e$$67.tag === 8) {
            if (e$$67.fields[1].tag === 0) {
              $target$$32 = 0;
              arg$$2 = e$$67.fields[2];
              typeName = e$$67.fields[1].fields[0];
            } else if (e$$67.fields[1].tag === 1) {
              if (e$$67.fields[1].fields[0].tag === 0) {
                $target$$32 = 1;
                arg$$3 = e$$67.fields[2];
                mGreaterThan = e$$67.fields[1].fields[4];
                typeName$$1 = e$$67.fields[1].fields[0].fields[0];
              } else {
                $target$$32 = 6;
              }
            } else {
              $target$$32 = 6;
            }
          } else if (e$$67.tag === 20) {
            if (e$$67.fields[1]) {
              $target$$32 = 6;
            } else if (e$$67.fields[2].tag === 28) {
              $target$$32 = 2;
              arg$$4 = e$$67.fields[3];
              id$$3 = e$$67.fields[2].fields[0];
            } else if (e$$67.fields[2].tag === 21) {
              if (e$$67.fields[2].fields[0].tag === 28) {
                $target$$32 = 3;
                arg$$5 = e$$67.fields[3];
                id$$4 = e$$67.fields[2].fields[0].fields[0];
                mGreaterThan$$1 = e$$67.fields[2].fields[4];
              } else if (e$$67.fields[2].fields[0].tag === 29) {
                $target$$32 = 5;
                arg$$7 = e$$67.fields[3];
                lid$$9 = e$$67.fields[2].fields[0].fields[1];
                mGreaterThan$$2 = e$$67.fields[2].fields[4];
              } else {
                $target$$32 = 6;
              }
            } else if (e$$67.fields[2].tag === 29) {
              $target$$32 = 4;
              arg$$6 = e$$67.fields[3];
              lid$$8 = e$$67.fields[2].fields[1];
            } else {
              $target$$32 = 6;
            }
          } else {
            $target$$32 = 6;
          }

          switch ($target$$32) {
            case 0:
              {
                return [endOfLastIdent(typeName), findSetters(arg$$2)];
              }

            case 1:
              {
                return [endOfClosingTokenOrLastIdent(mGreaterThan, typeName$$1), findSetters(arg$$3)];
              }

            case 2:
              {
                return [(copyOfStruct$$19 = (0, _ast.Ident$$get_idRange)(id$$3), (0, _range3.range$$get_End)(copyOfStruct$$19)), findSetters(arg$$4)];
              }

            case 3:
              {
                return [endOfClosingTokenOrIdent(mGreaterThan$$1, id$$4), findSetters(arg$$5)];
              }

            case 4:
              {
                return [endOfLastIdent(lid$$8), findSetters(arg$$6)];
              }

            case 5:
              {
                return [endOfClosingTokenOrLastIdent(mGreaterThan$$2, lid$$9), findSetters(arg$$7)];
              }

            case 6:
              {
                return null;
              }
          }
        };

        const isOnTheRightOfComma = function isOnTheRightOfComma(elements, commas, current) {
          const loop = function loop(elements$$1, commas$$1) {
            loop: while (true) {
              if (elements$$1.tail != null) {
                const xs$$7 = elements$$1.tail;
                const x$$10 = elements$$1.head;

                if (commas$$1.tail != null) {
                  const cs = commas$$1.tail;
                  const c = commas$$1.head;

                  if (x$$10 === current) {
                    if ((0, _range3.posLt)((0, _range3.range$$get_End)(c), pos$$7)) {
                      return true;
                    } else {
                      return (0, _range3.posEq)((0, _range3.range$$get_End)(c), pos$$7);
                    }
                  } else {
                    elements$$1 = xs$$7;
                    commas$$1 = cs;
                    continue loop;
                  }
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }
          };

          return loop(elements, commas);
        };

        const $007CPartOfParameterList$007C_$007C = function $007CPartOfParameterList$007C_$007C(precedingArgument, path) {
          var $target$$33, args$$5;

          if (path.tail != null) {
            if (path.head.tag === 0) {
              if (path.head.fields[0].tag === 0) {
                if (path.tail.tail != null) {
                  if (path.tail.head.tag === 0) {
                    const activePatternResult60730 = $007CNewObjectOrMethodCall$007C_$007C(path.tail.head.fields[0]);

                    if (activePatternResult60730 != null) {
                      $target$$33 = 0;
                      args$$5 = activePatternResult60730;
                    } else {
                      $target$$33 = 1;
                    }
                  } else {
                    $target$$33 = 1;
                  }
                } else {
                  $target$$33 = 1;
                }
              } else {
                $target$$33 = 1;
              }
            } else {
              $target$$33 = 1;
            }
          } else {
            $target$$33 = 1;
          }

          switch ($target$$33) {
            case 0:
              {
                if (precedingArgument != null) {
                  return null;
                } else {
                  return args$$5;
                }
              }

            case 1:
              {
                var $target$$34, args$$6, commas$$2, elements$$2;

                if (path.tail != null) {
                  if (path.head.tag === 0) {
                    if (path.head.fields[0].tag === 4) {
                      if (path.tail.tail != null) {
                        if (path.tail.head.tag === 0) {
                          if (path.tail.head.fields[0].tag === 0) {
                            if (path.tail.tail.tail != null) {
                              if (path.tail.tail.head.tag === 0) {
                                const activePatternResult60729 = $007CNewObjectOrMethodCall$007C_$007C(path.tail.tail.head.fields[0]);

                                if (activePatternResult60729 != null) {
                                  $target$$34 = 0;
                                  args$$6 = activePatternResult60729;
                                  commas$$2 = path.head.fields[0].fields[1];
                                  elements$$2 = path.head.fields[0].fields[0];
                                } else {
                                  $target$$34 = 1;
                                }
                              } else {
                                $target$$34 = 1;
                              }
                            } else {
                              $target$$34 = 1;
                            }
                          } else {
                            $target$$34 = 1;
                          }
                        } else {
                          $target$$34 = 1;
                        }
                      } else {
                        $target$$34 = 1;
                      }
                    } else {
                      $target$$34 = 1;
                    }
                  } else {
                    $target$$34 = 1;
                  }
                } else {
                  $target$$34 = 1;
                }

                switch ($target$$34) {
                  case 0:
                    {
                      if (precedingArgument != null) {
                        const e$$68 = precedingArgument;

                        if (isOnTheRightOfComma(elements$$2, commas$$2, e$$68)) {
                          return args$$6;
                        } else {
                          return null;
                        }
                      } else {
                        return args$$6;
                      }
                    }

                  case 1:
                    {
                      return null;
                    }
                }
              }
          }
        };

        const walker$$2 = (0, _Util.extend)((0, _ServiceParseTreeWalk.AstVisitorBase$00601$$$$002Ector)(), {
          VisitExpr(path$$1, _arg4$$2, defaultTraverse$$4, expr$$9) {
            var args$$8, copyOfStruct$$22, args$$9, id$$7, copyOfStruct$$21, id$$5, copyOfStruct$$20, m$$36;

            if (isInRhsOfRangeOp(path$$1)) {
              const matchValue$$25 = defaultTraverse$$4(expr$$9);

              if (matchValue$$25 == null) {
                return new CompletionContext(3, "RangeOperator");
              } else {
                const x$$12 = matchValue$$25;
                return x$$12;
              }
            } else {
              var $target$$35, m$$37;

              if (expr$$9.tag === 2) {
                if (expr$$9.fields[0].tag === 0) {
                  if (m$$36 = expr$$9.fields[1], (0, _range3.rangeContainsPos)(m$$36, pos$$7)) {
                    $target$$35 = 0;
                    m$$37 = expr$$9.fields[1];
                  } else {
                    $target$$35 = 1;
                  }
                } else {
                  $target$$35 = 1;
                }
              } else {
                $target$$35 = 1;
              }

              switch ($target$$35) {
                case 0:
                  {
                    var $target$$36, args$$7;

                    if (path$$1.tail != null) {
                      if (path$$1.head.tag === 0) {
                        const activePatternResult60734 = $007CNewObjectOrMethodCall$007C_$007C(path$$1.head.fields[0]);

                        if (activePatternResult60734 != null) {
                          $target$$36 = 0;
                          args$$7 = activePatternResult60734;
                        } else {
                          $target$$36 = 1;
                        }
                      } else {
                        $target$$36 = 1;
                      }
                    } else {
                      $target$$36 = 1;
                    }

                    switch ($target$$36) {
                      case 0:
                        {
                          return new CompletionContext(4, "ParameterList", args$$7[0], args$$7[1]);
                        }

                      case 1:
                        {
                          return defaultTraverse$$4(expr$$9);
                        }
                    }
                  }

                case 1:
                  {
                    var $target$$37, id$$6;

                    if (expr$$9.tag === 28) {
                      if (id$$5 = expr$$9.fields[0], (0, _Util.equals)((copyOfStruct$$20 = (0, _ast.Ident$$get_idRange)(id$$5), (0, _range3.range$$get_End)(copyOfStruct$$20)), pos$$7)) {
                        $target$$37 = 0;
                        id$$6 = expr$$9.fields[0];
                      } else {
                        $target$$37 = 1;
                      }
                    } else {
                      $target$$37 = 1;
                    }

                    switch ($target$$37) {
                      case 0:
                        {
                          const activePatternResult60737 = $007CPartOfParameterList$007C_$007C(null, path$$1);
                          return activePatternResult60737 != null ? (args$$8 = activePatternResult60737, new CompletionContext(4, "ParameterList", args$$8[0], args$$8[1])) : defaultTraverse$$4(expr$$9);
                        }

                      case 1:
                        {
                          var $target$$38, id$$8;
                          const activePatternResult60741 = $007CSetter$007C_$007C(expr$$9);

                          if (activePatternResult60741 != null) {
                            if (id$$7 = activePatternResult60741, (0, _Util.equals)((copyOfStruct$$21 = (0, _ast.Ident$$get_idRange)(id$$7), (0, _range3.range$$get_End)(copyOfStruct$$21)), pos$$7) ? true : (0, _range3.rangeBeforePos)((0, _ast.SynExpr$$get_Range)(expr$$9), pos$$7)) {
                              $target$$38 = 0;
                              id$$8 = activePatternResult60741;
                            } else {
                              $target$$38 = 1;
                            }
                          } else {
                            $target$$38 = 1;
                          }

                          switch ($target$$38) {
                            case 0:
                              {
                                const precedingArgument$$1 = (0, _Util.equals)((copyOfStruct$$22 = (0, _ast.Ident$$get_idRange)(id$$8), (0, _range3.range$$get_End)(copyOfStruct$$22)), pos$$7) ? null : expr$$9;
                                const activePatternResult60740 = $007CPartOfParameterList$007C_$007C(precedingArgument$$1, path$$1);
                                return activePatternResult60740 != null ? (args$$9 = activePatternResult60740, new CompletionContext(4, "ParameterList", args$$9[0], args$$9[1])) : defaultTraverse$$4(expr$$9);
                              }

                            case 1:
                              {
                                return defaultTraverse$$4(expr$$9);
                              }
                          }
                        }
                    }
                  }
              }
            }
          },

          VisitRecordField(path$$2, copyOpt, field$$1) {
            const contextFromTreePath = function contextFromTreePath(completionPath$$1) {
              var $target$$39, id$$9;

              if (path$$2.tail != null) {
                if (path$$2.head.tag === 0) {
                  if (path$$2.tail.tail != null) {
                    if (path$$2.tail.head.tag === 6) {
                      if (path$$2.tail.tail.tail != null) {
                        if (path$$2.tail.tail.head.tag === 4) {
                          if (path$$2.tail.tail.tail.tail != null) {
                            if (path$$2.tail.tail.tail.head.tag === 3) {
                              if (path$$2.tail.tail.tail.head.fields[0].fields[0].fields[3].tail != null) {
                                if (path$$2.tail.tail.tail.head.fields[0].fields[0].fields[3].tail.tail == null) {
                                  $target$$39 = 0;
                                  id$$9 = path$$2.tail.tail.tail.head.fields[0].fields[0].fields[3].head;
                                } else {
                                  $target$$39 = 1;
                                }
                              } else {
                                $target$$39 = 1;
                              }
                            } else {
                              $target$$39 = 1;
                            }
                          } else {
                            $target$$39 = 1;
                          }
                        } else {
                          $target$$39 = 1;
                        }
                      } else {
                        $target$$39 = 1;
                      }
                    } else {
                      $target$$39 = 1;
                    }
                  } else {
                    $target$$39 = 1;
                  }
                } else {
                  $target$$39 = 1;
                }
              } else {
                $target$$39 = 1;
              }

              switch ($target$$39) {
                case 0:
                  {
                    return new RecordContext(1, "Constructor", (0, _ast.Ident$$get_idText)(id$$9));
                  }

                case 1:
                  {
                    return new RecordContext(2, "New", completionPath$$1);
                  }
              }
            };

            if (field$$1 == null) {
              let recordContext$$1;

              if (copyOpt == null) {
                recordContext$$1 = contextFromTreePath([(0, _Types.L)(), null]);
              } else {
                const s$$2 = copyOpt;
                recordContext$$1 = new RecordContext(0, "CopyOnUpdate", (0, _ast.SynExpr$$get_Range)(s$$2), [(0, _Types.L)(), null]);
              }

              return new CompletionContext(2, "RecordField", recordContext$$1);
            } else {
              const field$$2 = field$$1;
              const matchValue$$26 = parseLid(field$$2);

              if (matchValue$$26 == null) {
                return null;
              } else {
                const completionPath$$2 = matchValue$$26;
                let recordContext;

                if (copyOpt == null) {
                  recordContext = contextFromTreePath(completionPath$$2);
                } else {
                  const s$$1 = copyOpt;
                  recordContext = new RecordContext(0, "CopyOnUpdate", (0, _ast.SynExpr$$get_Range)(s$$1), completionPath$$2);
                }

                return new CompletionContext(2, "RecordField", recordContext);
              }
            }
          },

          VisitInheritSynMemberDefn(componentInfo, typeDefnKind$$1, synType, _members, _range$$8) {
            if (synType.tag === 0) {
              const lidwd$$7 = synType.fields[0];
              const matchValue$$27 = parseLid(lidwd$$7);

              if (matchValue$$27 == null) {
                return new CompletionContext(0, "Invalid");
              } else {
                const completionPath$$3 = matchValue$$27;
                return GetCompletionContextForInheritSynMember([componentInfo, typeDefnKind$$1, completionPath$$3]);
              }
            } else {
              return null;
            }
          },

          VisitBinding(defaultTraverse$$5, _arg5$$2) {
            var range$$29, lidwd$$8;
            const synBinding = _arg5$$2;
            const headPat = synBinding.fields[7];

            const visitParam = function visitParam(_arg10$$2) {
              var range$$27, range$$25;
              var $target$$40, range$$26;

              if (_arg10$$2.tag === 2) {
                if (range$$25 = _arg10$$2.fields[4], (0, _range3.rangeContainsPos)(range$$25, pos$$7)) {
                  $target$$40 = 0;
                  range$$26 = _arg10$$2.fields[4];
                } else {
                  $target$$40 = 1;
                }
              } else {
                $target$$40 = 1;
              }

              switch ($target$$40) {
                case 0:
                  {
                    return new CompletionContext(0, "Invalid");
                  }

                case 1:
                  {
                    var $target$$41, range$$28;

                    if (_arg10$$2.tag === 3) {
                      if (_arg10$$2.fields[0].tag === 2) {
                        if (_arg10$$2.fields[0].fields[0].tag === 1) {
                          if (range$$27 = _arg10$$2.fields[0].fields[0].fields[0], (0, _range3.rangeContainsPos)(range$$27, pos$$7)) {
                            $target$$41 = 0;
                            range$$28 = _arg10$$2.fields[0].fields[0].fields[0];
                          } else {
                            $target$$41 = 1;
                          }
                        } else {
                          $target$$41 = 1;
                        }
                      } else {
                        $target$$41 = 1;
                      }
                    } else {
                      $target$$41 = 1;
                    }

                    switch ($target$$41) {
                      case 0:
                        {
                          return new CompletionContext(0, "Invalid");
                        }

                      case 1:
                        {
                          return defaultTraverse$$5(synBinding);
                        }
                    }
                  }
              }
            };

            var $target$$42, lidwd$$9;

            if (headPat.tag === 7) {
              if (lidwd$$8 = headPat.fields[0], (0, _range3.rangeContainsPos)((0, _ast.LongIdentWithDots$$get_Range)(lidwd$$8), pos$$7)) {
                $target$$42 = 0;
                lidwd$$9 = headPat.fields[0];
              } else {
                $target$$42 = 1;
              }
            } else {
              $target$$42 = 1;
            }

            switch ($target$$42) {
              case 0:
                {
                  return new CompletionContext(0, "Invalid");
                }

              case 1:
                {
                  var $target$$43, ctorArgs, range$$32;

                  if (headPat.tag === 7) {
                    $target$$43 = 0;
                    ctorArgs = headPat.fields[3];
                  } else if (headPat.tag === 2) {
                    if (range$$29 = headPat.fields[4], (0, _range3.rangeContainsPos)(range$$29, pos$$7)) {
                      $target$$43 = 1;
                      range$$32 = headPat.fields[4];
                    } else {
                      $target$$43 = 2;
                    }
                  } else {
                    $target$$43 = 2;
                  }

                  switch ($target$$43) {
                    case 0:
                      {
                        if (ctorArgs.tag === 0) {
                          const pats$$5 = ctorArgs.fields[0];
                          return (0, _List.tryPick)(function chooser$$4(pat$$8) {
                            var range$$30;
                            var $target$$44, pat$$9, range$$31;

                            if (pat$$8.tag === 10) {
                              $target$$44 = 0;
                              pat$$9 = pat$$8.fields[0];
                            } else if (pat$$8.tag === 1) {
                              if (range$$30 = pat$$8.fields[0], (0, _range3.rangeContainsPos)(range$$30, pos$$7)) {
                                $target$$44 = 1;
                                range$$31 = pat$$8.fields[0];
                              } else {
                                $target$$44 = 2;
                              }
                            } else {
                              $target$$44 = 2;
                            }

                            switch ($target$$44) {
                              case 0:
                                {
                                  if (pat$$9.tag === 8) {
                                    const pats$$6 = pat$$9.fields[0];
                                    return (0, _List.tryPick)(visitParam, pats$$6);
                                  } else {
                                    return visitParam(pat$$9);
                                  }
                                }

                              case 1:
                                {
                                  return new CompletionContext(0, "Invalid");
                                }

                              case 2:
                                {
                                  return visitParam(pat$$8);
                                }
                            }
                          }, pats$$5);
                        } else {
                          return defaultTraverse$$5(synBinding);
                        }
                      }

                    case 1:
                      {
                        return new CompletionContext(0, "Invalid");
                      }

                    case 2:
                      {
                        return defaultTraverse$$5(synBinding);
                      }
                  }
                }
            }
          },

          VisitHashDirective(range$$33) {
            return (0, _range3.rangeContainsPos)(range$$33, pos$$7) ? new CompletionContext(0, "Invalid") : null;
          },

          VisitModuleOrNamespace(_arg6$$2) {
            var copyOfStruct$$25, lastIdent, copyOfStruct$$23, copyOfStruct$$24;
            const idents = _arg6$$2.fields[0];
            const matchValue$$28 = (0, _List.tryLast)(idents);
            var $target$$45, lastIdent$$1;

            if (matchValue$$28 != null) {
              if (lastIdent = matchValue$$28, ((0, _range3.pos$$get_Line)(pos$$7) === (copyOfStruct$$23 = (0, _ast.Ident$$get_idRange)(lastIdent), (0, _range3.range$$get_EndLine)(copyOfStruct$$23)) ? (copyOfStruct$$24 = (0, _ast.Ident$$get_idRange)(lastIdent), (0, _range3.range$$get_EndColumn)(copyOfStruct$$24)) >= 0 : false) ? (0, _range3.pos$$get_Column)(pos$$7) <= lineStr.length : false) {
                $target$$45 = 0;
                lastIdent$$1 = matchValue$$28;
              } else {
                $target$$45 = 1;
              }
            } else {
              $target$$45 = 1;
            }

            switch ($target$$45) {
              case 0:
                {
                  const stringBetweenModuleNameAndPos = lineStr.slice((copyOfStruct$$25 = (0, _ast.Ident$$get_idRange)(lastIdent$$1), (0, _range3.range$$get_EndColumn)(copyOfStruct$$25)), (0, _range3.pos$$get_Column)(pos$$7) - 1 + 1);
                  return (0, _Seq.forAll)(function predicate$$9(x$$13) {
                    if (x$$13 === " ") {
                      return true;
                    } else {
                      return x$$13 === ".";
                    }
                  }, stringBetweenModuleNameAndPos.split("")) ? new CompletionContext(0, "Invalid") : null;
                }

              case 1:
                {
                  return null;
                }
            }
          },

          VisitComponentInfo(_arg7$$2) {
            const range$$34 = _arg7$$2.fields[7];
            return (0, _range3.rangeContainsPos)(range$$34, pos$$7) ? new CompletionContext(0, "Invalid") : null;
          },

          VisitLetOrUse(_arg8$$2, _arg9$$2, bindings$$5, range$$35) {
            return bindings$$5.tail == null ? (0, _range3.range$$get_StartLine)(range$$35) === (0, _range3.pos$$get_Line)(pos$$7) ? new CompletionContext(0, "Invalid") : null : null;
          },

          VisitSimplePats(pats$$7) {
            return (0, _List.tryPick)(function chooser$$5(pat$$10) {
              var range$$36, range$$37;
              var $target$$46, range$$38;

              if (pat$$10.tag === 0) {
                if (range$$36 = pat$$10.fields[5], (0, _range3.rangeContainsPos)(range$$36, pos$$7)) {
                  $target$$46 = 0;
                  range$$38 = pat$$10.fields[5];
                } else {
                  $target$$46 = 1;
                }
              } else if (pat$$10.tag === 1) {
                if (pat$$10.fields[0].tag === 0) {
                  if (range$$37 = pat$$10.fields[0].fields[5], (0, _range3.rangeContainsPos)(range$$37, pos$$7)) {
                    $target$$46 = 0;
                    range$$38 = pat$$10.fields[0].fields[5];
                  } else {
                    $target$$46 = 1;
                  }
                } else {
                  $target$$46 = 1;
                }
              } else {
                $target$$46 = 1;
              }

              switch ($target$$46) {
                case 0:
                  {
                    return new CompletionContext(0, "Invalid");
                  }

                case 1:
                  {
                    return null;
                  }
              }
            }, pats$$7);
          },

          VisitModuleDecl(defaultTraverse$$6, decl$$2) {
            if (decl$$2.tag === 6) {
              const m$$38 = decl$$2.fields[1];
              const pos$$8 = (0, _range3.mkPos)((0, _range3.pos$$get_Line)(pos$$7), (0, _range3.pos$$get_Column)(pos$$7) - 1);
              return (0, _range3.rangeContainsPos)(m$$38, pos$$8) ? new CompletionContext(6, "OpenDeclaration") : null;
            } else {
              return defaultTraverse$$6(decl$$2);
            }
          },

          VisitType(defaultTraverse$$7, ty$$3) {
            return ty$$3.tag === 0 ? (0, _range3.rangeContainsPos)((0, _ast.SynType$$get_Range)(ty$$3), pos$$7) ? new CompletionContext(7, "PatternType") : defaultTraverse$$7(ty$$3) : defaultTraverse$$7(ty$$3);
          }

        });
        return (0, _Option.defaultArgWith)((0, _ServiceParseTreeWalk.Traverse)(pos$$7, parsedInput, walker$$2), function ifNoneThunk() {
          var openParenIndex;

          const cutLeadingAttributes = function cutLeadingAttributes(str$$1) {
            var idx;
            const matchValue$$29 = str$$1.lastIndexOf(";") | 0;

            if (matchValue$$29 === -1) {
              return str$$1;
            } else if (idx = matchValue$$29 | 0, idx < str$$1.length) {
              const idx$$1 = matchValue$$29 | 0;
              return (0, _String.trimStart)(str$$1.slice(idx$$1 + 1, str$$1.length));
            } else {
              return "";
            }
          };

          const isLongIdent = function isLongIdent(source$$4) {
            return (0, _Seq.forAll)(function predicate$$10(c$$1) {
              if ((0, _PrettyNaming.IsIdentifierPartCharacter)(c$$1) ? true : c$$1 === ".") {
                return true;
              } else {
                return c$$1 === ":";
              }
            }, source$$4.split(""));
          };

          const matches = (0, _Array.ofSeq)((0, _Seq.filter)(function predicate$$11(tupledArg$$8) {
            if (tupledArg$$8[0] <= (0, _range3.pos$$get_Column)(pos$$7)) {
              return tupledArg$$8[0] + tupledArg$$8[1] >= (0, _range3.pos$$get_Column)(pos$$7);
            } else {
              return false;
            }
          }, UntypedParseImpl$$$findMatches("[<", ">]", lineStr, 0)), Array);

          if (!(matches.length === 0)) {
            return (0, _Seq.tryPick)(function chooser$$6(tupledArg$$9) {
              const col = (0, _range3.pos$$get_Column)(pos$$7) - tupledArg$$9[0] | 0;

              if (col >= 0 ? col < tupledArg$$9[1] : false) {
                const str$$2 = lineStr.substr(tupledArg$$9[0], tupledArg$$9[1]);
                const str$$3 = (0, _String.trimStart)(str$$2.substr(0, col));
                const str$$4 = cutLeadingAttributes(str$$3);

                if (isLongIdent(str$$4)) {
                  return new CompletionContext(5, "AttributeApplication");
                } else {
                  return null;
                }
              } else {
                return null;
              }
            }, matches);
          } else {
            const matchValue$$30 = lineStr.lastIndexOf("[<") | 0;

            if (matchValue$$30 === -1) {
              return null;
            } else if (openParenIndex = matchValue$$30 | 0, (0, _range3.pos$$get_Column)(pos$$7) >= openParenIndex + 2) {
              const openParenIndex$$1 = matchValue$$30 | 0;
              const str$$5 = (0, _String.trimStart)(lineStr.slice(openParenIndex$$1 + 2, (0, _range3.pos$$get_Column)(pos$$7) - 1 + 1));
              const str$$6 = cutLeadingAttributes(str$$5);

              if (isLongIdent(str$$6)) {
                return new CompletionContext(5, "AttributeApplication");
              } else {
                return null;
              }
            } else {
              return null;
            }
          }
        });
      }
  }
}

function UntypedParseImpl$$$GetFullNameOfSmallestModuleOrNamespaceAtPoint(parsedInput$$1, pos$$9) {
  let path$$3 = (0, _Types.L)();
  const visitor = (0, _Util.extend)((0, _ServiceParseTreeWalk.AstVisitorBase$00601$$$$002Ector)(), {
    VisitExpr(_path$$3, _traverseSynExpr, defaultTraverse$$8, expr$$10) {
      return null;
    },

    VisitModuleOrNamespace(_arg1$$8) {
      const range$$39 = _arg1$$8.fields[7];
      const longId = _arg1$$8.fields[0];

      if ((0, _range3.rangeContainsPos)(range$$39, pos$$9)) {
        path$$3 = (0, _List.append)(path$$3, longId);
      }

      return null;
    }

  });
  (0, _ServiceParseTreeWalk.Traverse)(pos$$9, parsedInput$$1, visitor);
  return (0, _Array.ofList)((0, _List.map)(function mapping$$2(x$$14) {
    return (0, _ast.Ident$$get_idText)(x$$14);
  }, path$$3), Array);
}