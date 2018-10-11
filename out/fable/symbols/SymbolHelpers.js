"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSharpErrorInfo$$$$002Ector$$Z240BD360 = FSharpErrorInfo$$$$002Ector$$Z240BD360;
exports.FSharpErrorInfo$$get_StartLine = FSharpErrorInfo$$get_StartLine;
exports.FSharpErrorInfo$$get_StartLineAlternate = FSharpErrorInfo$$get_StartLineAlternate;
exports.FSharpErrorInfo$$get_EndLine = FSharpErrorInfo$$get_EndLine;
exports.FSharpErrorInfo$$get_EndLineAlternate = FSharpErrorInfo$$get_EndLineAlternate;
exports.FSharpErrorInfo$$get_StartColumn = FSharpErrorInfo$$get_StartColumn;
exports.FSharpErrorInfo$$get_EndColumn = FSharpErrorInfo$$get_EndColumn;
exports.FSharpErrorInfo$$get_Severity = FSharpErrorInfo$$get_Severity;
exports.FSharpErrorInfo$$get_Message = FSharpErrorInfo$$get_Message;
exports.FSharpErrorInfo$$get_Subcategory = FSharpErrorInfo$$get_Subcategory;
exports.FSharpErrorInfo$$get_FileName = FSharpErrorInfo$$get_FileName;
exports.FSharpErrorInfo$$get_ErrorNumber = FSharpErrorInfo$$get_ErrorNumber;
exports.FSharpErrorInfo$$WithStart$$Z72E1C3A1 = FSharpErrorInfo$$WithStart$$Z72E1C3A1;
exports.FSharpErrorInfo$$WithEnd$$Z72E1C3A1 = FSharpErrorInfo$$WithEnd$$Z72E1C3A1;
exports.FSharpErrorInfo$$$CreateFromException$$Z55CACC16 = FSharpErrorInfo$$$CreateFromException$$Z55CACC16;
exports.FSharpErrorInfo$$$CreateFromExceptionAndAdjustEof$$3D03E085 = FSharpErrorInfo$$$CreateFromExceptionAndAdjustEof$$3D03E085;
exports.ErrorScope$$$$002Ector = ErrorScope$$$$002Ector;
exports.ErrorScope$$get_Errors = ErrorScope$$get_Errors;
exports.ErrorScope$$get_Warnings = ErrorScope$$get_Warnings;
exports.ErrorScope$$get_Diagnostics = ErrorScope$$get_Diagnostics;
exports.ErrorScope$$TryGetFirstErrorText = ErrorScope$$TryGetFirstErrorText;
exports.ErrorScope$$get_FirstError = ErrorScope$$get_FirstError;
exports.ErrorScope$$set_FirstError$$2297AD2E = ErrorScope$$set_FirstError$$2297AD2E;
exports.ErrorScope$$$Protect = ErrorScope$$$Protect;
exports.CompilationErrorLogger$$$$002Ector$$Z43197EC2 = CompilationErrorLogger$$$$002Ector$$Z43197EC2;
exports.CompilationErrorLogger$$GetErrors = CompilationErrorLogger$$GetErrors;
exports.CompilationGlobalsScope$$$$002Ector$$44CA90D5 = CompilationGlobalsScope$$$$002Ector$$44CA90D5;
exports.ErrorHelpers$$$ReportError = ErrorHelpers$$$ReportError;
exports.ErrorHelpers$$$CreateErrorInfos = ErrorHelpers$$$CreateErrorInfos;
exports.FSharpToolTipElementData$00601$$$Create$$51614AC = FSharpToolTipElementData$00601$$$Create$$51614AC;
exports.FSharpToolTipElement$00601$$$Single$$51614AC = FSharpToolTipElement$00601$$$Single$$51614AC;
exports.Tooltips$$$ToFSharpToolTipElement = Tooltips$$$ToFSharpToolTipElement;
exports.Tooltips$$$ToFSharpToolTipText = Tooltips$$$ToFSharpToolTipText;
exports.Tooltips$$$Map = Tooltips$$$Map;
exports.CompletionItem$$get_Item = CompletionItem$$get_Item;
exports.SymbolHelpers$$$isFunction = SymbolHelpers$$$isFunction;
exports.SymbolHelpers$$$OutputFullName = SymbolHelpers$$$OutputFullName;
exports.SymbolHelpers$$$rangeOfValRef = SymbolHelpers$$$rangeOfValRef;
exports.SymbolHelpers$$$rangeOfEntityRef = SymbolHelpers$$$rangeOfEntityRef;
exports.SymbolHelpers$$$rangeOfPropInfo = SymbolHelpers$$$rangeOfPropInfo;
exports.SymbolHelpers$$$rangeOfMethInfo = SymbolHelpers$$$rangeOfMethInfo;
exports.SymbolHelpers$$$rangeOfEventInfo = SymbolHelpers$$$rangeOfEventInfo;
exports.SymbolHelpers$$$rangeOfUnionCaseInfo = SymbolHelpers$$$rangeOfUnionCaseInfo;
exports.SymbolHelpers$$$rangeOfRecdFieldInfo = SymbolHelpers$$$rangeOfRecdFieldInfo;
exports.SymbolHelpers$$$rangeOfItem = SymbolHelpers$$$rangeOfItem;
exports.SymbolHelpers$$$computeCcuOfTyconRef = SymbolHelpers$$$computeCcuOfTyconRef;
exports.SymbolHelpers$$$ccuOfMethInfo = SymbolHelpers$$$ccuOfMethInfo;
exports.SymbolHelpers$$$ccuOfItem = SymbolHelpers$$$ccuOfItem;
exports.SymbolHelpers$$$fileNameOfItem = SymbolHelpers$$$fileNameOfItem;
exports.SymbolHelpers$$$cutFileName = SymbolHelpers$$$cutFileName;
exports.SymbolHelpers$$$libFileOfEntityRef = SymbolHelpers$$$libFileOfEntityRef;
exports.SymbolHelpers$$$ParamNameAndTypesOfUnaryCustomOperation = SymbolHelpers$$$ParamNameAndTypesOfUnaryCustomOperation;
exports.SymbolHelpers$$$metaInfoOfEntityRef = SymbolHelpers$$$metaInfoOfEntityRef;
exports.SymbolHelpers$$$mkXmlComment = SymbolHelpers$$$mkXmlComment;
exports.SymbolHelpers$$$GetXmlDocSigOfEntityRef = SymbolHelpers$$$GetXmlDocSigOfEntityRef;
exports.SymbolHelpers$$$GetXmlDocSigOfScopedValRef = SymbolHelpers$$$GetXmlDocSigOfScopedValRef;
exports.SymbolHelpers$$$GetXmlDocSigOfRecdFieldInfo = SymbolHelpers$$$GetXmlDocSigOfRecdFieldInfo;
exports.SymbolHelpers$$$GetXmlDocSigOfUnionCaseInfo = SymbolHelpers$$$GetXmlDocSigOfUnionCaseInfo;
exports.SymbolHelpers$$$GetXmlDocSigOfMethInfo = SymbolHelpers$$$GetXmlDocSigOfMethInfo;
exports.SymbolHelpers$$$GetXmlDocSigOfValRef = SymbolHelpers$$$GetXmlDocSigOfValRef;
exports.SymbolHelpers$$$GetXmlDocSigOfProp = SymbolHelpers$$$GetXmlDocSigOfProp;
exports.SymbolHelpers$$$GetXmlDocSigOfEvent = SymbolHelpers$$$GetXmlDocSigOfEvent;
exports.SymbolHelpers$$$GetXmlDocSigOfILFieldInfo = SymbolHelpers$$$GetXmlDocSigOfILFieldInfo;
exports.SymbolHelpers$$$GetXmlDocHelpSigOfItemForLookup = SymbolHelpers$$$GetXmlDocHelpSigOfItemForLookup;
exports.SymbolHelpers$$$GetXmlCommentForItemAux = SymbolHelpers$$$GetXmlCommentForItemAux;
exports.SymbolHelpers$$$GetXmlCommentForMethInfoItem = SymbolHelpers$$$GetXmlCommentForMethInfoItem;
exports.SymbolHelpers$$$FormatTyparMapping = SymbolHelpers$$$FormatTyparMapping;
exports.SymbolHelpers$$$FormatOverloadsToList = SymbolHelpers$$$FormatOverloadsToList;
exports.SymbolHelpers$$$pubpathOfValRef = SymbolHelpers$$$pubpathOfValRef;
exports.SymbolHelpers$$$pubpathOfTyconRef = SymbolHelpers$$$pubpathOfTyconRef;
exports.SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C;
exports.SymbolHelpers$$$ItemDisplayPartialEquality = SymbolHelpers$$$ItemDisplayPartialEquality;
exports.SymbolHelpers$$$CompletionItemDisplayPartialEquality = SymbolHelpers$$$CompletionItemDisplayPartialEquality;
exports.SymbolHelpers$$$ItemWithTypeDisplayPartialEquality = SymbolHelpers$$$ItemWithTypeDisplayPartialEquality;
exports.SymbolHelpers$$$RemoveDuplicateModuleRefs = SymbolHelpers$$$RemoveDuplicateModuleRefs;
exports.SymbolHelpers$$$RemoveDuplicateItems = SymbolHelpers$$$RemoveDuplicateItems;
exports.SymbolHelpers$$$RemoveDuplicateCompletionItems = SymbolHelpers$$$RemoveDuplicateCompletionItems;
exports.SymbolHelpers$$$IsExplicitlySuppressed = SymbolHelpers$$$IsExplicitlySuppressed;
exports.SymbolHelpers$$$RemoveExplicitlySuppressed = SymbolHelpers$$$RemoveExplicitlySuppressed;
exports.SymbolHelpers$$$RemoveExplicitlySuppressedCompletionItems = SymbolHelpers$$$RemoveExplicitlySuppressedCompletionItems;
exports.SymbolHelpers$$$SimplerDisplayEnv = SymbolHelpers$$$SimplerDisplayEnv;
exports.SymbolHelpers$$$FullNameOfItem = SymbolHelpers$$$FullNameOfItem;
exports.SymbolHelpers$$$GetXmlCommentForItem = SymbolHelpers$$$GetXmlCommentForItem;
exports.SymbolHelpers$$$IsAttribute = SymbolHelpers$$$IsAttribute;
exports.SymbolHelpers$$$FormatItemDescriptionToToolTipElement = SymbolHelpers$$$FormatItemDescriptionToToolTipElement;
exports.SymbolHelpers$$$GetF1Keyword = SymbolHelpers$$$GetF1Keyword;
exports.SymbolHelpers$$$FormatStructuredDescriptionOfItem = SymbolHelpers$$$FormatStructuredDescriptionOfItem;
exports.SymbolHelpers$$$FlattenItems = SymbolHelpers$$$FlattenItems;
exports.SymbolHelpers$$$ToolTipFault = exports.CompletionItem = exports.UnresolvedSymbol = exports.CompletionItemKind = exports.FSharpToolTipText$00601 = exports.FSharpToolTipElement$00601 = exports.FSharpToolTipElementData$00601 = exports.FSharpXmlDoc = exports.CompilationGlobalsScope = exports.CompilationErrorLogger = exports.ErrorScope = exports.FSharpErrorInfo = exports.FSharpErrorSeverity = exports.EnvMisc2$$$maxMembers = void 0;

var _lib = require("../fsharp/lib");

var _Types = require("../fable-core.2.0.3/Types");

var _range = require("../fsharp/range");

var _String = require("../fable-core.2.0.3/String");

var _Util = require("../fable-core.2.0.3/Util");

var _CompileOps = require("../fsharp/CompileOps");

var _ErrorLogger = require("../fsharp/ErrorLogger");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _TcGlobals = require("../fsharp/TcGlobals");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Array = require("../fable-core.2.0.3/Array");

var _layout = require("../fsharp/layout");

var _AsyncBuilder = require("../fable-core.2.0.3/AsyncBuilder");

var _TastOps = require("../fsharp/TastOps");

var _FSComp = require("../codegen/FSComp");

var _tast = require("../fsharp/tast");

var _infos = require("../fsharp/infos");

var _ast = require("../fsharp/ast");

var _ildiag = require("../absil/ildiag");

var _illib = require("../absil/illib");

var _InfoReader = require("../fsharp/InfoReader");

var _il = require("../absil/il");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _NicePrint = require("../fsharp/NicePrint");

var _NameResolution = require("../fsharp/NameResolution");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _TypeChecker = require("../fsharp/TypeChecker");

var _AccessibilityLogic = require("../fsharp/AccessibilityLogic");

const EnvMisc2$$$maxMembers = (0, _lib.GetEnvInteger)("FCS_MaxMembersInQuickInfo", 10);
exports.EnvMisc2$$$maxMembers = EnvMisc2$$$maxMembers;
const FSharpErrorSeverity = (0, _Types.declare)(function FSharpErrorSeverity(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpErrorSeverity = FSharpErrorSeverity;
const FSharpErrorInfo = (0, _Types.declare)(function FSharpErrorInfo(fileName, s, e, severity, message, subcategory, errorNum) {
  const $this$$1 = this;
  $this$$1.fileName = fileName;
  $this$$1.s = s;
  $this$$1.e = e;
  $this$$1.severity = severity;
  $this$$1.message = message;
  $this$$1.subcategory = subcategory;
  $this$$1.errorNum = errorNum;
});
exports.FSharpErrorInfo = FSharpErrorInfo;

function FSharpErrorInfo$$$$002Ector$$Z240BD360(fileName, s, e, severity, message, subcategory, errorNum) {
  return this != null ? FSharpErrorInfo.call(this, fileName, s, e, severity, message, subcategory, errorNum) : new FSharpErrorInfo(fileName, s, e, severity, message, subcategory, errorNum);
}

function FSharpErrorInfo$$get_StartLine(__) {
  return (0, _range.Line$$$toZ)((0, _range.pos$$get_Line)(__.s));
}

function FSharpErrorInfo$$get_StartLineAlternate(__$$1) {
  return (0, _range.pos$$get_Line)(__$$1.s);
}

function FSharpErrorInfo$$get_EndLine(__$$2) {
  return (0, _range.Line$$$toZ)((0, _range.pos$$get_Line)(__$$2.e));
}

function FSharpErrorInfo$$get_EndLineAlternate(__$$3) {
  return (0, _range.pos$$get_Line)(__$$3.e);
}

function FSharpErrorInfo$$get_StartColumn(__$$4) {
  return (0, _range.pos$$get_Column)(__$$4.s);
}

function FSharpErrorInfo$$get_EndColumn(__$$5) {
  return (0, _range.pos$$get_Column)(__$$5.e);
}

function FSharpErrorInfo$$get_Severity(__$$6) {
  return __$$6.severity;
}

function FSharpErrorInfo$$get_Message(__$$7) {
  return __$$7.message;
}

function FSharpErrorInfo$$get_Subcategory(__$$8) {
  return __$$8.subcategory;
}

function FSharpErrorInfo$$get_FileName(__$$9) {
  return __$$9.fileName;
}

function FSharpErrorInfo$$get_ErrorNumber(__$$10) {
  return __$$10.errorNum;
}

function FSharpErrorInfo$$WithStart$$Z72E1C3A1(__$$11, newStart) {
  return FSharpErrorInfo$$$$002Ector$$Z240BD360(__$$11.fileName, newStart, __$$11.e, __$$11.severity, __$$11.message, __$$11.subcategory, __$$11.errorNum);
}

function FSharpErrorInfo$$WithEnd$$Z72E1C3A1(__$$12, newEnd) {
  return FSharpErrorInfo$$$$002Ector$$Z240BD360(__$$12.fileName, __$$12.s, newEnd, __$$12.severity, __$$12.message, __$$12.subcategory, __$$12.errorNum);
}

FSharpErrorInfo.prototype.toString = function () {
  const __$$13 = this;
  return (0, _String.toText)((0, _String.printf)("%s (%d,%d)-(%d,%d) %s %s %s"))(__$$13.fileName)((0, _range.pos$$get_Line)(__$$13.s))((0, _range.pos$$get_Column)(__$$13.s) + 1)((0, _range.pos$$get_Line)(__$$13.e))((0, _range.pos$$get_Column)(__$$13.e) + 1)(__$$13.subcategory)((0, _Util.equals)(__$$13.severity, new FSharpErrorSeverity(0, "Warning")) ? "warning" : "error")(__$$13.message);
};

function FSharpErrorInfo$$$CreateFromException$$Z55CACC16(exn, isError, fallbackRange) {
  let m$$1;
  const matchValue = (0, _CompileOps.GetRangeOfDiagnostic)(exn);

  if (matchValue == null) {
    m$$1 = fallbackRange;
  } else {
    const m = matchValue;
    m$$1 = m;
  }

  const msg = (0, _lib.bufs)(function (buf) {
    (0, _CompileOps.OutputPhasedDiagnostic)(buf, exn, false);
  });
  const errorNum$$1 = (0, _CompileOps.GetDiagnosticNumber)(exn) | 0;
  return FSharpErrorInfo$$$$002Ector$$Z240BD360((0, _range.range$$get_FileName)(m$$1), (0, _range.range$$get_Start)(m$$1), (0, _range.range$$get_End)(m$$1), isError ? new FSharpErrorSeverity(1, "Error") : new FSharpErrorSeverity(0, "Warning"), msg, (0, _ErrorLogger.PhasedDiagnostic$$Subcategory)(exn), errorNum$$1);
}

function FSharpErrorInfo$$$CreateFromExceptionAndAdjustEof$$3D03E085(exn$$1, isError$$1, fallbackRange$$1, _arg1) {
  const r = FSharpErrorInfo$$$CreateFromException$$Z55CACC16(exn$$1, isError$$1, fallbackRange$$1);
  const patternInput = (0, _Util.min)(_Util.compareArrays, [FSharpErrorInfo$$get_StartLineAlternate(r), false], [_arg1[0], true]);
  const patternInput$$1 = (0, _Util.min)(_Util.compareArrays, [FSharpErrorInfo$$get_EndLineAlternate(r), false], [_arg1[0], true]);

  if (!(patternInput[1] ? true : patternInput$$1[1])) {
    return r;
  } else {
    const r$$1 = patternInput[1] ? FSharpErrorInfo$$WithStart$$Z72E1C3A1(r, (0, _range.mkPos)(patternInput[0], _arg1[1])) : r;

    if (patternInput$$1[1]) {
      return FSharpErrorInfo$$WithEnd$$Z72E1C3A1(r$$1, (0, _range.mkPos)(patternInput$$1[0], 1 + _arg1[1]));
    } else {
      return r$$1;
    }
  }
}

const ErrorScope = (0, _Types.declare)(function ErrorScope() {
  const $this$$6 = this;
  $this$$6.errors = (0, _Types.L)();
  $this$$6.firstError = null;
  $this$$6.unwindBP = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(4, "TypeCheck"));
  $this$$6.unwindEL = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_oldLogger) {
    return (0, _Util.extend)((0, _ErrorLogger.ErrorLogger$$$$002Ector$$Z721C83C5)("ErrorScope"), {
      DiagnosticSink(exn$$2, isError$$2) {
        const err = FSharpErrorInfo$$$CreateFromException$$Z55CACC16(exn$$2, isError$$2, (0, _range.range$$$get_Zero)());
        $this$$6.errors = (0, _Types.L)(err, $this$$6.errors);

        if (isError$$2 ? $this$$6.firstError == null : false) {
          $this$$6.firstError = FSharpErrorInfo$$get_Message(err);
        }
      },

      get ErrorCount() {
        return (0, _List.length)($this$$6.errors);
      }

    });
  });
});
exports.ErrorScope = ErrorScope;

function ErrorScope$$$$002Ector() {
  return this != null ? ErrorScope.call(this) : new ErrorScope();
}

function ErrorScope$$get_Errors(x$$2) {
  return (0, _List.filter)(function predicate(error) {
    return (0, _Util.equals)(FSharpErrorInfo$$get_Severity(error), new FSharpErrorSeverity(1, "Error"));
  }, x$$2.errors);
}

function ErrorScope$$get_Warnings(x$$3) {
  return (0, _List.filter)(function predicate$$1(error$$1) {
    return (0, _Util.equals)(FSharpErrorInfo$$get_Severity(error$$1), new FSharpErrorSeverity(0, "Warning"));
  }, x$$3.errors);
}

function ErrorScope$$get_Diagnostics(x$$4) {
  return x$$4.errors;
}

function ErrorScope$$TryGetFirstErrorText(x$$5) {
  const matchValue$$1 = ErrorScope$$get_Errors(x$$5);

  if (matchValue$$1.tail == null) {
    return null;
  } else {
    const error$$2 = matchValue$$1.head;
    return FSharpErrorInfo$$get_Message(error$$2);
  }
}

function ErrorScope$$get_FirstError(x$$6) {
  return x$$6.firstError;
}

function ErrorScope$$set_FirstError$$2297AD2E(x$$7, v) {
  x$$7.firstError = v;
}

function ErrorScope$$$Protect(m$$2, f, err$$1) {
  const errorScope = ErrorScope$$$$002Ector();

  try {
    let res;

    try {
      res = (0, _Option.some)(f());
    } catch (e$$1) {
      try {
        (0, _ErrorLogger.errorRecovery)(e$$1, m$$2);
      } catch (matchValue$$2) {
        ErrorScope$$set_FirstError$$2297AD2E(errorScope, (0, _Util.toString)(e$$1));
      }

      res = null;
    }

    if (res == null) {
      const matchValue$$3 = ErrorScope$$TryGetFirstErrorText(errorScope);

      if (matchValue$$3 == null) {
        return err$$1("");
      } else {
        const text = matchValue$$3;
        return err$$1(text);
      }
    } else {
      const res$$1 = (0, _Option.value)(res);
      return res$$1;
    }
  } finally {
    if ((0, _Util.isDisposable)(errorScope)) {
      errorScope.Dispose();
    }
  }
}

ErrorScope.prototype.Dispose = function () {
  const d = this;
  d.unwindEL.Dispose();
  d.unwindBP.Dispose();
};

const CompilationErrorLogger = (0, _Types.declare)(function CompilationErrorLogger(debugName, options) {
  const $this$$7 = this;

  _ErrorLogger.ErrorLogger$$$$002Ector$$Z721C83C5.call($this$$7, "CompilationErrorLogger(" + debugName + ")");

  $this$$7.options = options;
  $this$$7.errorCount = 0;
  $this$$7.diagnostics = [];
}, _ErrorLogger.ErrorLogger);
exports.CompilationErrorLogger = CompilationErrorLogger;

function CompilationErrorLogger$$$$002Ector$$Z43197EC2(debugName, options) {
  return this != null ? CompilationErrorLogger.call(this, debugName, options) : new CompilationErrorLogger(debugName, options);
}

CompilationErrorLogger.prototype.DiagnosticSink = function (exn$$3, isError$$3) {
  const x$$8 = this;

  if (isError$$3 ? true : (0, _CompileOps.ReportWarningAsError)(x$$8.options, exn$$3)) {
    x$$8.diagnostics.push([exn$$3, new FSharpErrorSeverity(1, "Error")]);
    x$$8.errorCount = x$$8.errorCount + 1;
  } else if ((0, _CompileOps.ReportWarning)(x$$8.options, exn$$3)) {
    x$$8.diagnostics.push([exn$$3, new FSharpErrorSeverity(0, "Warning")]);
  }
};

Object.defineProperty(CompilationErrorLogger.prototype, "ErrorCount", {
  "get": function () {
    const x$$9 = this;
    return x$$9.errorCount | 0;
  }
});

function CompilationErrorLogger$$GetErrors(x$$10) {
  return x$$10.diagnostics.slice();
}

const CompilationGlobalsScope = (0, _Types.declare)(function CompilationGlobalsScope(errorLogger, phase) {
  const $this$$8 = this;
  $this$$8.unwindEL = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_arg1$$1) {
    return errorLogger;
  });
  $this$$8.unwindBP = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(phase);
});
exports.CompilationGlobalsScope = CompilationGlobalsScope;

function CompilationGlobalsScope$$$$002Ector$$44CA90D5(errorLogger, phase) {
  return this != null ? CompilationGlobalsScope.call(this, errorLogger, phase) : new CompilationGlobalsScope(errorLogger, phase);
}

CompilationGlobalsScope.prototype.Dispose = function () {
  const d$$1 = this;
  d$$1.unwindBP.Dispose();
  d$$1.unwindEL.Dispose();
};

function ErrorHelpers$$$ReportError(options$$1, allErrors, mainInputFileName, fileInfo, _arg1$$2) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    const isError$$4 = (0, _Util.equals)(_arg1$$2[1], new FSharpErrorSeverity(1, "Error")) ? true : (0, _CompileOps.ReportWarningAsError)(options$$1, _arg1$$2[0]);

    if (isError$$4 ? true : (0, _CompileOps.ReportWarning)(options$$1, _arg1$$2[0])) {
      const oneError = function oneError(exn$$5) {
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          const fallbackRange$$2 = (0, _range.rangeN)(mainInputFileName, 1);
          const ei = FSharpErrorInfo$$$CreateFromExceptionAndAdjustEof$$3D03E085(exn$$5, isError$$4, fallbackRange$$2, fileInfo);
          return ((allErrors ? true : FSharpErrorInfo$$get_FileName(ei) === mainInputFileName) ? true : FSharpErrorInfo$$get_FileName(ei) === _TcGlobals.DummyFileNameForRangesWithoutASpecificLocation) ? (0, _Seq.singleton)(ei) : (0, _Seq.empty)();
        }));
      };

      const patternInput$$2 = (0, _CompileOps.SplitRelatedDiagnostics)(_arg1$$2[0]);
      return (0, _Seq.append)(oneError(patternInput$$2[0]), (0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (e$$2) {
          return oneError(e$$2);
        }, patternInput$$2[1]);
      }));
    } else {
      return (0, _Seq.empty)();
    }
  }));
}

function ErrorHelpers$$$CreateErrorInfos(options$$2, allErrors$$1, mainInputFileName$$1, errors) {
  const fileInfo$$1 = [2147483647, 2147483647];
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$4) {
      return ErrorHelpers$$$ReportError(options$$2, allErrors$$1, mainInputFileName$$1, fileInfo$$1, [matchValue$$4[0], matchValue$$4[1]]);
    }, errors);
  }), Array);
}

const FSharpXmlDoc = (0, _Types.declare)(function FSharpXmlDoc(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpXmlDoc = FSharpXmlDoc;
const FSharpToolTipElementData$00601 = (0, _Types.declare)(function FSharpToolTipElementData$00601(arg1, arg2, arg3, arg4, arg5) {
  this.MainDescription = arg1;
  this.XmlDoc = arg2;
  this.TypeMapping = arg3;
  this.Remarks = arg4;
  this.ParamName = arg5;
}, _Types.Record);
exports.FSharpToolTipElementData$00601 = FSharpToolTipElementData$00601;

function FSharpToolTipElementData$00601$$$Create$$51614AC(layout, xml, typeMapping, paramName, remarks) {
  return new FSharpToolTipElementData$00601(layout, xml, (0, _Option.defaultArg)(typeMapping, (0, _Types.L)()), remarks, paramName);
}

const FSharpToolTipElement$00601 = (0, _Types.declare)(function FSharpToolTipElement$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpToolTipElement$00601 = FSharpToolTipElement$00601;

function FSharpToolTipElement$00601$$$Single$$51614AC(layout$$1, xml$$1, typeMapping$$1, paramName$$1, remarks$$1) {
  return new FSharpToolTipElement$00601(1, "Group", (0, _Types.L)(FSharpToolTipElementData$00601$$$Create$$51614AC(layout$$1, xml$$1, typeMapping$$1, paramName$$1, remarks$$1), (0, _Types.L)()));
}

const FSharpToolTipText$00601 = (0, _Types.declare)(function FSharpToolTipText$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpToolTipText$00601 = FSharpToolTipText$00601;

function Tooltips$$$ToFSharpToolTipElement(tooltip) {
  switch (tooltip.tag) {
    case 1:
      {
        const l = tooltip.fields[0];
        return new FSharpToolTipElement$00601(1, "Group", (0, _List.map)(function mapping(x$$11) {
          return new FSharpToolTipElementData$00601((0, _layout.showL)(x$$11.MainDescription), x$$11.XmlDoc, (0, _List.map)(_layout.showL, x$$11.TypeMapping), (0, _Option.defaultArg)(x$$11.Remarks, null, _layout.showL), x$$11.ParamName);
        }, l));
      }

    case 2:
      {
        const text$$1 = tooltip.fields[0];
        return new FSharpToolTipElement$00601(2, "CompositionError", text$$1);
      }

    default:
      {
        return new FSharpToolTipElement$00601(0, "None");
      }
  }
}

function Tooltips$$$ToFSharpToolTipText(_arg1$$3) {
  const text$$2 = _arg1$$3.fields[0];
  return new FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _List.map)(Tooltips$$$ToFSharpToolTipElement, text$$2));
}

function Tooltips$$$Map(f$$1, a) {
  return _AsyncBuilder.singleton.Bind(a, function ($arg$$9) {
    return _AsyncBuilder.singleton.Return(f$$1($arg$$9));
  });
}

const CompletionItemKind = (0, _Types.declare)(function CompletionItemKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CompletionItemKind = CompletionItemKind;
const UnresolvedSymbol = (0, _Types.declare)(function UnresolvedSymbol(arg1, arg2, arg3) {
  this.FullName = arg1;
  this.DisplayName = arg2;
  this.Namespace = arg3;
}, _Types.Record);
exports.UnresolvedSymbol = UnresolvedSymbol;
const CompletionItem = (0, _Types.declare)(function CompletionItem(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.ItemWithInst = arg1;
  this.Kind = arg2;
  this.IsOwnMember = arg3;
  this.MinorPriority = arg4 | 0;
  this.Type = arg5;
  this.Unresolved = arg6;
}, _Types.Record);
exports.CompletionItem = CompletionItem;

function CompletionItem$$get_Item(x$$12) {
  return x$$12.ItemWithInst.Item;
}

function SymbolHelpers$$$isFunction(g, ty) {
  const patternInput$$3 = (0, _TastOps.tryDestForallTy)(g, ty);
  return (0, _TastOps.isFunTy)(g, patternInput$$3[1]);
}

function SymbolHelpers$$$OutputFullName(isListItem, ppF, fnF, r$$2) {
  if (!isListItem) {
    if (ppF(r$$2) != null) {
      return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoFullName)())), (0, _layout.op_HatHat)(_layout.RightL$$$colon, fnF(r$$2)));
    } else {
      return _layout.emptyL;
    }
  } else {
    return _layout.emptyL;
  }
}

function SymbolHelpers$$$rangeOfValRef(preferFlag, vref) {
  if (preferFlag != null) {
    if (preferFlag) {
      return (0, _tast.ValRef$$get_SigRange)(vref);
    } else {
      return (0, _tast.ValRef$$get_DefinitionRange)(vref);
    }
  } else {
    return (0, _tast.ValRef$$get_Range)(vref);
  }
}

function SymbolHelpers$$$rangeOfEntityRef(preferFlag$$1, eref) {
  if (preferFlag$$1 != null) {
    if (preferFlag$$1) {
      return (0, _tast.EntityRef$$get_SigRange)(eref);
    } else {
      return (0, _tast.EntityRef$$get_DefinitionRange)(eref);
    }
  } else {
    return (0, _tast.EntityRef$$get_Range)(eref);
  }
}

function SymbolHelpers$$$rangeOfPropInfo(preferFlag$$2, pinfo) {
  return (0, _Option.defaultArg)((0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo), null, function mapping$$1(vref$$1) {
    return SymbolHelpers$$$rangeOfValRef(preferFlag$$2, vref$$1);
  });
}

function SymbolHelpers$$$rangeOfMethInfo(g$$1, preferFlag$$3, minfo) {
  var $target$$26, tcref;

  if (minfo.tag === 2) {
    const activePatternResult55378 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$1, minfo.fields[1]);

    if (activePatternResult55378 != null) {
      $target$$26 = 0;
      tcref = activePatternResult55378[0];
    } else {
      $target$$26 = 1;
    }
  } else {
    $target$$26 = 1;
  }

  switch ($target$$26) {
    case 0:
      {
        return SymbolHelpers$$$rangeOfEntityRef(preferFlag$$3, tcref);
      }

    case 1:
      {
        return (0, _Option.defaultArg)((0, _infos.MethInfo$$get_ArbitraryValRef)(minfo), null, function mapping$$2(vref$$2) {
          return SymbolHelpers$$$rangeOfValRef(preferFlag$$3, vref$$2);
        });
      }
  }
}

function SymbolHelpers$$$rangeOfEventInfo(preferFlag$$4, einfo) {
  return (0, _Option.defaultArg)((0, _infos.EventInfo$$get_ArbitraryValRef)(einfo), null, function mapping$$3(vref$$3) {
    return SymbolHelpers$$$rangeOfValRef(preferFlag$$4, vref$$3);
  });
}

function SymbolHelpers$$$rangeOfUnionCaseInfo(preferFlag$$5, ucinfo) {
  if (preferFlag$$5 != null) {
    if (preferFlag$$5) {
      return (0, _tast.UnionCase$$get_SigRange)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo));
    } else {
      return (0, _tast.UnionCase$$get_DefinitionRange)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo));
    }
  } else {
    return (0, _tast.UnionCase$$get_Range)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo));
  }
}

function SymbolHelpers$$$rangeOfRecdFieldInfo(preferFlag$$6, rfinfo) {
  if (preferFlag$$6 != null) {
    if (preferFlag$$6) {
      return (0, _tast.RecdField$$get_SigRange)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo));
    } else {
      return (0, _tast.RecdField$$get_DefinitionRange)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo));
    }
  } else {
    return (0, _tast.RecdField$$get_Range)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo));
  }
}

function SymbolHelpers$$$rangeOfItem(g$$2, preferFlag$$7, d$$2) {
  SymbolHelpers$$$rangeOfItem: while (true) {
    var $target$$27, vref$$4, ucinfo$$1, apref, tcref$$1, rfinfo$$1, einfo$$1, pinfos, tys, minfo$$1, tp, modrefs, minfos, m$$3, item, id, implOpt, vref$$5, tcrefs, ty$$1;

    if (d$$2.tag === 16) {
      $target$$27 = 0;
      vref$$4 = d$$2.fields[1];
    } else if (d$$2.tag === 1) {
      $target$$27 = 1;
      ucinfo$$1 = d$$2.fields[0];
    } else if (d$$2.tag === 3) {
      $target$$27 = 2;
      apref = d$$2.fields[0];
    } else if (d$$2.tag === 4) {
      $target$$27 = 3;
      tcref$$1 = d$$2.fields[0];
    } else if (d$$2.tag === 5) {
      $target$$27 = 4;
      rfinfo$$1 = d$$2.fields[0];
    } else if (d$$2.tag === 8) {
      $target$$27 = 5;
      einfo$$1 = d$$2.fields[0];
    } else if (d$$2.tag === 7) {
      $target$$27 = 6;
    } else if (d$$2.tag === 9) {
      $target$$27 = 7;
      pinfos = d$$2.fields[1];
    } else if (d$$2.tag === 14) {
      $target$$27 = 8;
      tys = d$$2.fields[1];
    } else if (d$$2.tag === 15) {
      if (d$$2.fields[2] != null) {
        $target$$27 = 9;
        minfo$$1 = d$$2.fields[2];
      } else {
        $target$$27 = 16;
        implOpt = d$$2.fields[2];
      }
    } else if (d$$2.tag === 17) {
      $target$$27 = 10;
      tp = d$$2.fields[1];
    } else if (d$$2.tag === 18) {
      $target$$27 = 11;
      modrefs = d$$2.fields[0];
    } else if (d$$2.tag === 10) {
      $target$$27 = 12;
      minfos = d$$2.fields[1];
    } else if (d$$2.tag === 11) {
      $target$$27 = 12;
      minfos = d$$2.fields[1];
    } else if (d$$2.tag === 2) {
      $target$$27 = 13;
      m$$3 = d$$2.fields[3];
    } else if (d$$2.tag === 21) {
      $target$$27 = 14;
      item = d$$2.fields[1];
    } else if (d$$2.tag === 20) {
      $target$$27 = 15;
      id = d$$2.fields[0];
    } else if (d$$2.tag === 19) {
      if (d$$2.fields[1].contents != null) {
        if (d$$2.fields[1].contents.tag === 0) {
          $target$$27 = 17;
          vref$$5 = d$$2.fields[1].contents.fields[1];
        } else {
          $target$$27 = 18;
        }
      } else {
        $target$$27 = 18;
      }
    } else if (d$$2.tag === 22) {
      $target$$27 = 19;
      tcrefs = d$$2.fields[0];
    } else if (d$$2.tag === 13) {
      $target$$27 = 20;
      ty$$1 = d$$2.fields[0];
    } else if (d$$2.tag === 12) {
      $target$$27 = 20;
      ty$$1 = d$$2.fields[0];
    } else if (d$$2.tag === 6) {
      $target$$27 = 21;
    } else {
      $target$$27 = 0;
      vref$$4 = d$$2.fields[0];
    }

    switch ($target$$27) {
      case 0:
        {
          return SymbolHelpers$$$rangeOfValRef(preferFlag$$7, vref$$4);
        }

      case 1:
        {
          return SymbolHelpers$$$rangeOfUnionCaseInfo(preferFlag$$7, ucinfo$$1);
        }

      case 2:
        {
          return SymbolHelpers$$$rangeOfValRef(preferFlag$$7, (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref));
        }

      case 3:
        {
          return (0, _tast.EntityRef$$get_Range)(tcref$$1);
        }

      case 4:
        {
          return SymbolHelpers$$$rangeOfRecdFieldInfo(preferFlag$$7, rfinfo$$1);
        }

      case 5:
        {
          return SymbolHelpers$$$rangeOfEventInfo(preferFlag$$7, einfo$$1);
        }

      case 6:
        {
          return null;
        }

      case 7:
        {
          return SymbolHelpers$$$rangeOfPropInfo(preferFlag$$7, (0, _List.head)(pinfos));
        }

      case 8:
        {
          return (0, _List.tryPick)(function chooser($arg$$10) {
            return (0, _Option.defaultArg)((0, _TastOps.tryNiceEntityRefOfTy)($arg$$10), null, function mapping$$4(eref$$1) {
              return SymbolHelpers$$$rangeOfEntityRef(preferFlag$$7, eref$$1);
            });
          }, tys);
        }

      case 9:
        {
          return SymbolHelpers$$$rangeOfMethInfo(g$$2, preferFlag$$7, minfo$$1);
        }

      case 10:
        {
          return (0, _tast.Typar$$get_Range)(tp);
        }

      case 11:
        {
          return (0, _List.tryPick)(function chooser$$1($arg$$11) {
            return SymbolHelpers$$$rangeOfEntityRef(preferFlag$$7, $arg$$11);
          }, modrefs);
        }

      case 12:
        {
          return (0, _List.tryPick)(function chooser$$2(minfo$$2) {
            return SymbolHelpers$$$rangeOfMethInfo(g$$2, preferFlag$$7, minfo$$2);
          }, minfos);
        }

      case 13:
        {
          return m$$3;
        }

      case 14:
        {
          g$$2 = g$$2;
          preferFlag$$7 = preferFlag$$7;
          d$$2 = item;
          continue SymbolHelpers$$$rangeOfItem;
        }

      case 15:
        {
          return (0, _ast.Ident$$get_idRange)(id);
        }

      case 16:
        {
          return (0, _Option.defaultArg)(implOpt, null, function binder(minfo$$3) {
            return SymbolHelpers$$$rangeOfMethInfo(g$$2, preferFlag$$7, minfo$$3);
          });
        }

      case 17:
        {
          return (0, _tast.ValRef$$get_Range)(vref$$5);
        }

      case 18:
        {
          return null;
        }

      case 19:
        {
          return (0, _List.tryPick)(function chooser$$3($arg$$12) {
            return SymbolHelpers$$$rangeOfEntityRef(preferFlag$$7, $arg$$12);
          }, tcrefs);
        }

      case 20:
        {
          return (0, _Option.defaultArg)((0, _TastOps.tryNiceEntityRefOfTy)(ty$$1), null, function mapping$$5(eref$$4) {
            return SymbolHelpers$$$rangeOfEntityRef(preferFlag$$7, eref$$4);
          });
        }

      case 21:
        {
          return null;
        }
    }
  }
}

function SymbolHelpers$$$computeCcuOfTyconRef(tcref$$2) {
  return (0, _tast.ccuOfTyconRef)(tcref$$2);
}

function SymbolHelpers$$$ccuOfMethInfo(g$$3, minfo$$4) {
  var $target$$28, tcref$$3;

  if (minfo$$4.tag === 2) {
    const activePatternResult55396 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$3, minfo$$4.fields[1]);

    if (activePatternResult55396 != null) {
      $target$$28 = 0;
      tcref$$3 = activePatternResult55396[0];
    } else {
      $target$$28 = 1;
    }
  } else {
    $target$$28 = 1;
  }

  switch ($target$$28) {
    case 0:
      {
        return SymbolHelpers$$$computeCcuOfTyconRef(tcref$$3);
      }

    case 1:
      {
        return (0, _Option.defaultArgWith)((0, _Option.defaultArg)((0, _infos.MethInfo$$get_ArbitraryValRef)(minfo$$4), null, _tast.ccuOfValRef), function ifNoneThunk() {
          return SymbolHelpers$$$computeCcuOfTyconRef((0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$4));
        });
      }
  }
}

function SymbolHelpers$$$ccuOfItem(g$$4, d$$3) {
  SymbolHelpers$$$ccuOfItem: while (true) {
    var $target$$29, vref$$7, ucinfo$$2, apref$$1, tcref$$5, rfinfo$$2, einfo$$2, finfo, pinfos$$1, minfo$$5, minfos$$1, minfo$$7, tys$$1, eref$$5, erefs, item$$1;

    if (d$$3.tag === 0) {
      $target$$29 = 0;
      vref$$7 = d$$3.fields[0];
    } else if (d$$3.tag === 16) {
      $target$$29 = 0;
      vref$$7 = d$$3.fields[1];
    } else if (d$$3.tag === 1) {
      $target$$29 = 1;
      ucinfo$$2 = d$$3.fields[0];
    } else if (d$$3.tag === 3) {
      $target$$29 = 2;
      apref$$1 = d$$3.fields[0];
    } else if (d$$3.tag === 4) {
      $target$$29 = 3;
      tcref$$5 = d$$3.fields[0];
    } else if (d$$3.tag === 5) {
      $target$$29 = 4;
      rfinfo$$2 = d$$3.fields[0];
    } else if (d$$3.tag === 8) {
      $target$$29 = 5;
      einfo$$2 = d$$3.fields[0];
    } else if (d$$3.tag === 7) {
      $target$$29 = 6;
      finfo = d$$3.fields[0];
    } else if (d$$3.tag === 9) {
      $target$$29 = 7;
      pinfos$$1 = d$$3.fields[1];
    } else if (d$$3.tag === 20) {
      if (d$$3.fields[2] != null) {
        if (d$$3.fields[2].tag === 0) {
          $target$$29 = 8;
          minfo$$5 = d$$3.fields[2].fields[0];
        } else if (d$$3.fields[2].tag === 1) {
          $target$$29 = 12;
          eref$$5 = d$$3.fields[2].fields[0];
        } else {
          $target$$29 = 16;
        }
      } else {
        $target$$29 = 16;
      }
    } else if (d$$3.tag === 10) {
      $target$$29 = 9;
      minfos$$1 = d$$3.fields[1];
    } else if (d$$3.tag === 11) {
      $target$$29 = 9;
      minfos$$1 = d$$3.fields[1];
    } else if (d$$3.tag === 15) {
      if (d$$3.fields[2] != null) {
        $target$$29 = 10;
        minfo$$7 = d$$3.fields[2];
      } else {
        $target$$29 = 16;
      }
    } else if (d$$3.tag === 14) {
      $target$$29 = 11;
      tys$$1 = d$$3.fields[1];
    } else if (d$$3.tag === 18) {
      $target$$29 = 13;
      erefs = d$$3.fields[0];
    } else if (d$$3.tag === 22) {
      $target$$29 = 13;
      erefs = d$$3.fields[0];
    } else if (d$$3.tag === 21) {
      $target$$29 = 14;
      item$$1 = d$$3.fields[1];
    } else if (d$$3.tag === 17) {
      $target$$29 = 15;
    } else {
      $target$$29 = 16;
    }

    switch ($target$$29) {
      case 0:
        {
          return (0, _tast.ccuOfValRef)(vref$$7);
        }

      case 1:
        {
          return SymbolHelpers$$$computeCcuOfTyconRef((0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo$$2));
        }

      case 2:
        {
          return (0, _tast.ccuOfValRef)((0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$1));
        }

      case 3:
        {
          return SymbolHelpers$$$computeCcuOfTyconRef(tcref$$5);
        }

      case 4:
        {
          return SymbolHelpers$$$computeCcuOfTyconRef((0, _tast.RecdFieldRef$$get_TyconRef)((0, _infos.RecdFieldInfo$$get_RecdFieldRef)(rfinfo$$2)));
        }

      case 5:
        {
          return SymbolHelpers$$$computeCcuOfTyconRef((0, _infos.EventInfo$$get_DeclaringTyconRef)(einfo$$2));
        }

      case 6:
        {
          return SymbolHelpers$$$computeCcuOfTyconRef((0, _infos.ILFieldInfo$$get_DeclaringTyconRef)(finfo));
        }

      case 7:
        {
          return (0, _List.tryPick)(function chooser$$4(pinfo$$1) {
            return (0, _Option.defaultArgWith)((0, _Option.defaultArg)((0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo$$1), null, _tast.ccuOfValRef), function ifNoneThunk$$1() {
              return SymbolHelpers$$$computeCcuOfTyconRef((0, _infos.PropInfo$$get_DeclaringTyconRef)(pinfo$$1));
            });
          }, pinfos$$1);
        }

      case 8:
        {
          return SymbolHelpers$$$ccuOfMethInfo(g$$4, minfo$$5);
        }

      case 9:
        {
          return (0, _List.tryPick)(function chooser$$5(minfo$$6) {
            return SymbolHelpers$$$ccuOfMethInfo(g$$4, minfo$$6);
          }, minfos$$1);
        }

      case 10:
        {
          return SymbolHelpers$$$ccuOfMethInfo(g$$4, minfo$$7);
        }

      case 11:
        {
          return (0, _List.tryPick)(function chooser$$6($arg$$13) {
            return (0, _Option.defaultArg)((0, _TastOps.tryNiceEntityRefOfTy)($arg$$13), null, SymbolHelpers$$$computeCcuOfTyconRef);
          }, tys$$1);
        }

      case 12:
        {
          return SymbolHelpers$$$computeCcuOfTyconRef(eref$$5);
        }

      case 13:
        {
          return (0, _List.tryPick)(SymbolHelpers$$$computeCcuOfTyconRef, erefs);
        }

      case 14:
        {
          g$$4 = g$$4;
          d$$3 = item$$1;
          continue SymbolHelpers$$$ccuOfItem;
        }

      case 15:
        {
          return null;
        }

      case 16:
        {
          return null;
        }
    }
  }
}

function SymbolHelpers$$$fileNameOfItem(g$$5, qualProjectDir, m$$4, h) {
  const file = (0, _range.range$$get_FileName)(m$$4);

  if (_lib.verbose) {
    (0, _ildiag.dprintf)((0, _String.printf)("file stored in metadata is '%s'\n"))(file);
  }

  g$$5;
  qualProjectDir;
  h;
  return file;
}

function SymbolHelpers$$$cutFileName(s$$1) {
  if (s$$1.length > 40) {
    return (0, _illib.String$$$sub)(s$$1, 0, 10) + "..." + (0, _illib.String$$$sub)(s$$1, s$$1.length - 27, 27);
  } else {
    return s$$1;
  }
}

function SymbolHelpers$$$libFileOfEntityRef(x$$13) {
  const activePatternResult55408 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(x$$13);

  if (activePatternResult55408.tag === 1) {
    return (0, _tast.CcuThunk$$get_FileName)((0, _tast.NonLocalEntityRef$$get_Ccu)(activePatternResult55408.fields[0]));
  } else {
    return null;
  }
}

function SymbolHelpers$$$ParamNameAndTypesOfUnaryCustomOperation(g$$6, minfo$$8) {
  if (minfo$$8.tag === 0) {
    const vref$$9 = minfo$$8.fields[2];
    const argInfos = (0, _List.concat)((0, _TastOps.ArgInfosOfMember)(g$$6, vref$$9));
    const argInfos$$1 = argInfos.tail == null ? (0, _Types.L)() : (0, _List.tail)(argInfos);
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (matchValue$$6) {
        const isPP = (0, _TastOps.HasFSharpAttribute)(g$$6, (0, _TcGlobals.TcGlobals$$get_attrib_ProjectionParameterAttribute)(g$$6), matchValue$$6[1].Attribs);
        const ty$$3 = (isPP ? (0, _TastOps.isFunTy)(g$$6, matchValue$$6[0]) : false) ? (0, _TastOps.rangeOfFunTy)(g$$6, matchValue$$6[0]) : matchValue$$6[0];
        return (0, _Seq.singleton)(new _infos.ParamNameAndType(0, "ParamNameAndType", matchValue$$6[1].Name, ty$$3));
      }, argInfos$$1);
    }));
  } else {
    return (0, _Types.L)();
  }
}

function SymbolHelpers$$$metaInfoOfEntityRef(infoReader, m$$5, tcref$$11) {
  const g$$7 = (0, _InfoReader.InfoReader$$get_g)(infoReader);
  const activePatternResult55416 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(tcref$$11);

  if (activePatternResult55416.tag === 1) {
    const formalTypars = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$11, m$$5);
    const formalTypeInst = (0, _TastOps.generalizeTypars)(formalTypars);
    const ty$$4 = new _tast.TType(1, "TType_app", tcref$$11, formalTypeInst);

    if ((0, _TastOps.isILAppTy)(g$$7, ty$$4)) {
      const formalTypeInfo = (0, _infos.ILTypeInfo$$$FromType)(g$$7, ty$$4);
      return [(0, _tast.CcuThunk$$get_FileName)((0, _tast.NonLocalEntityRef$$get_Ccu)(activePatternResult55416.fields[0])), formalTypars, formalTypeInfo];
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function SymbolHelpers$$$mkXmlComment(thing) {
  var $target$$30, fileName$$1, xmlDocSig;

  if (thing != null) {
    if (thing[0] != null) {
      $target$$30 = 0;
      fileName$$1 = thing[0];
      xmlDocSig = thing[1];
    } else {
      $target$$30 = 1;
    }
  } else {
    $target$$30 = 1;
  }

  switch ($target$$30) {
    case 0:
      {
        return new FSharpXmlDoc(2, "XmlDocFileSignature", fileName$$1, xmlDocSig);
      }

    case 1:
      {
        return new FSharpXmlDoc(0, "None");
      }
  }
}

function SymbolHelpers$$$GetXmlDocSigOfEntityRef(infoReader$$1, m$$6, eref$$6) {
  if ((0, _tast.EntityRef$$get_IsILTycon)(eref$$6)) {
    const matchValue$$7 = SymbolHelpers$$$metaInfoOfEntityRef(infoReader$$1, m$$6, eref$$6);

    if (matchValue$$7 != null) {
      const formalTypeInfo$$1 = matchValue$$7[2];
      const ccuFileName = matchValue$$7[0];
      return [ccuFileName, "T:" + (0, _il.ILTypeRef$$get_FullName)((0, _infos.ILTypeInfo$$get_ILTypeRef)(formalTypeInfo$$1))];
    } else {
      return null;
    }
  } else {
    const ccuFileName$$1 = SymbolHelpers$$$libFileOfEntityRef(eref$$6);
    const m$$7 = (0, _tast.EntityRef$$get_Deref)(eref$$6);

    if ((0, _tast.Entity$$get_XmlDocSig)(m$$7) === "") {
      (0, _tast.Entity$$set_XmlDocSig$$Z721C83C5)(m$$7, (0, _TastOps.XmlDocSigOfEntity)(eref$$6));
    }

    return [ccuFileName$$1, (0, _tast.Entity$$get_XmlDocSig)(m$$7)];
  }
}

function SymbolHelpers$$$GetXmlDocSigOfScopedValRef(g$$8, tcref$$12, vref$$10) {
  const ccuFileName$$2 = SymbolHelpers$$$libFileOfEntityRef(tcref$$12);
  const v$$1 = (0, _tast.ValRef$$get_Deref)(vref$$10);

  if ((0, _tast.Val$$get_XmlDocSig)(v$$1) === "" ? (0, _tast.Val$$get_HasDeclaringEntity)(v$$1) : false) {
    const ap = (0, _TastOps.buildAccessPath)((0, _tast.EntityRef$$get_CompilationPathOpt)((0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$10)));
    let path;

    if ((0, _tast.EntityRef$$get_IsModule)((0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$10))) {
      const sep = ap.length > 0 ? "." : "";
      path = ap + sep + (0, _tast.EntityRef$$get_CompiledName)((0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$10));
    } else {
      path = ap;
    }

    (0, _tast.Val$$set_XmlDocSig$$Z721C83C5)(v$$1, (0, _TastOps.XmlDocSigOfVal)(g$$8, path, v$$1));
  }

  return [ccuFileName$$2, (0, _tast.Val$$get_XmlDocSig)(v$$1)];
}

function SymbolHelpers$$$GetXmlDocSigOfRecdFieldInfo(rfinfo$$3) {
  const tcref$$13 = (0, _infos.RecdFieldInfo$$get_TyconRef)(rfinfo$$3);
  const ccuFileName$$3 = SymbolHelpers$$$libFileOfEntityRef(tcref$$13);

  if ((0, _tast.RecdField$$get_XmlDocSig)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$3)) === "") {
    (0, _tast.RecdField$$set_XmlDocSig$$Z721C83C5)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$3), (0, _TastOps.XmlDocSigOfProperty)((0, _Types.L)((0, _il.ILTypeRef$$get_FullName)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)(tcref$$13)), (0, _Types.L)((0, _infos.RecdFieldInfo$$get_Name)(rfinfo$$3), (0, _Types.L)()))));
  }

  return [ccuFileName$$3, (0, _tast.RecdField$$get_XmlDocSig)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$3))];
}

function SymbolHelpers$$$GetXmlDocSigOfUnionCaseInfo(ucinfo$$3) {
  const tcref$$14 = (0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo$$3);
  const ccuFileName$$4 = SymbolHelpers$$$libFileOfEntityRef(tcref$$14);

  if ((0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo$$3).XmlDocSig === "") {
    (0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo$$3).XmlDocSig = (0, _TastOps.XmlDocSigOfUnionCase)((0, _Types.L)((0, _il.ILTypeRef$$get_FullName)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)(tcref$$14)), (0, _Types.L)((0, _infos.UnionCaseInfo$$get_Name)(ucinfo$$3), (0, _Types.L)())));
  }

  return [ccuFileName$$4, (0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo$$3).XmlDocSig];
}

function SymbolHelpers$$$GetXmlDocSigOfMethInfo(infoReader$$2, m$$8, minfo$$9) {
  const amap = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$2);

  switch (minfo$$9.tag) {
    case 1:
      {
        const ilminfo = minfo$$9.fields[1];
        const g$$10 = minfo$$9.fields[0];
        const actualTypeName = (0, _il.ILTypeRef$$get_FullName)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)((0, _infos.ILMethInfo$$get_DeclaringTyconRef)(ilminfo)));
        const fmtps = (0, _infos.ILMethInfo$$get_FormalMethodTypars)(ilminfo);
        const genArity = (0, _List.length)(fmtps) === 0 ? "" : (0, _String.toText)((0, _String.printf)("``%d"))((0, _List.length)(fmtps));
        const matchValue$$8 = SymbolHelpers$$$metaInfoOfEntityRef(infoReader$$2, m$$8, (0, _infos.ILMethInfo$$get_DeclaringTyconRef)(ilminfo));

        if (matchValue$$8 != null) {
          const formalTypeInfo$$2 = matchValue$$8[2];
          const formalTypars$$1 = matchValue$$8[1];
          const ccuFileName$$5 = matchValue$$8[0];
          const filminfo = new _infos.ILMethInfo(0, "ILMethInfo", g$$10, (0, _infos.ILTypeInfo$$get_ToType)(formalTypeInfo$$2), null, (0, _infos.ILMethInfo$$get_RawMetadata)(ilminfo), fmtps);
          const args = (0, _infos.ILMethInfo$$get_IsILExtensionMethod)(ilminfo) ? (0, _infos.ILMethInfo$$GetRawArgTypes$$Z5D984B3C)(filminfo, amap, m$$8, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$9)) : (0, _infos.ILMethInfo$$GetParamTypes$$Z5D984B3C)(filminfo, amap, m$$8, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$9));
          const normalizedName = (0, _String.replace)((0, _infos.ILMethInfo$$get_ILName)(ilminfo), ".", "#");
          return [ccuFileName$$5, "M:" + actualTypeName + "." + normalizedName + genArity + (0, _TastOps.XmlDocArgsEnc)(g$$10, formalTypars$$1, fmtps, args)];
        } else {
          return null;
        }
      }

    case 2:
      {
        return null;
      }

    default:
      {
        const vref$$11 = minfo$$9.fields[2];
        const g$$9 = minfo$$9.fields[0];
        return SymbolHelpers$$$GetXmlDocSigOfScopedValRef(g$$9, (0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$9), vref$$11);
      }
  }
}

function SymbolHelpers$$$GetXmlDocSigOfValRef(g$$11, vref$$12) {
  if (!(0, _tast.ValRef$$get_IsLocalRef)(vref$$12)) {
    const ccuFileName$$6 = (0, _tast.CcuThunk$$get_FileName)((0, _tast.NonLocalValOrMemberRef$$get_Ccu)(vref$$12.nlr));
    const v$$2 = (0, _tast.ValRef$$get_Deref)(vref$$12);

    if ((0, _tast.Val$$get_XmlDocSig)(v$$2) === "" ? (0, _tast.Val$$get_HasDeclaringEntity)(v$$2) : false) {
      (0, _tast.Val$$set_XmlDocSig$$Z721C83C5)(v$$2, (0, _TastOps.XmlDocSigOfVal)(g$$11, (0, _il.ILTypeRef$$get_Name)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)((0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$12))), v$$2));
    }

    return [ccuFileName$$6, (0, _tast.Val$$get_XmlDocSig)(v$$2)];
  } else {
    return null;
  }
}

function SymbolHelpers$$$GetXmlDocSigOfProp(infoReader$$3, m$$9, pinfo$$2) {
  const g$$12 = (0, _infos.PropInfo$$get_TcGlobals)(pinfo$$2);

  if (pinfo$$2.tag === 1) {
    const pdef = pinfo$$2.fields[0].fields[1];
    const matchValue$$11 = SymbolHelpers$$$metaInfoOfEntityRef(infoReader$$3, m$$9, (0, _infos.PropInfo$$get_DeclaringTyconRef)(pinfo$$2));

    if (matchValue$$11 != null) {
      const formalTypeInfo$$3 = matchValue$$11[2];
      const formalTypars$$2 = matchValue$$11[1];
      const ccuFileName$$7 = matchValue$$11[0];
      const filpinfo = new _infos.ILPropInfo(0, "ILPropInfo", formalTypeInfo$$3, pdef);
      return [ccuFileName$$7, "P:" + (0, _il.ILTypeRef$$get_FullName)((0, _infos.ILTypeInfo$$get_ILTypeRef)(formalTypeInfo$$3)) + "." + (0, _il.ILPropertyDef$$get_Name)(pdef) + (0, _TastOps.XmlDocArgsEnc)(g$$12, formalTypars$$2, (0, _Types.L)(), (0, _infos.ILPropInfo$$GetParamTypes$$73F6E43C)(filpinfo, (0, _InfoReader.InfoReader$$get_amap)(infoReader$$3), m$$9))];
    } else {
      return null;
    }
  } else {
    const fspinfo = pinfo$$2;
    const matchValue$$10 = (0, _infos.PropInfo$$get_ArbitraryValRef)(fspinfo);

    if (matchValue$$10 != null) {
      const vref$$13 = matchValue$$10;
      return SymbolHelpers$$$GetXmlDocSigOfScopedValRef(g$$12, (0, _infos.PropInfo$$get_DeclaringTyconRef)(pinfo$$2), vref$$13);
    } else {
      return null;
    }
  }
}

function SymbolHelpers$$$GetXmlDocSigOfEvent(infoReader$$4, m$$10, einfo$$3) {
  if (einfo$$3.tag === 1) {
    const matchValue$$12 = SymbolHelpers$$$metaInfoOfEntityRef(infoReader$$4, m$$10, (0, _infos.EventInfo$$get_DeclaringTyconRef)(einfo$$3));

    if (matchValue$$12 != null) {
      const formalTypeInfo$$4 = matchValue$$12[2];
      const ccuFileName$$8 = matchValue$$12[0];
      return [ccuFileName$$8, "E:" + (0, _il.ILTypeRef$$get_FullName)((0, _infos.ILTypeInfo$$get_ILTypeRef)(formalTypeInfo$$4)) + "." + (0, _infos.EventInfo$$get_EventName)(einfo$$3)];
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function SymbolHelpers$$$GetXmlDocSigOfILFieldInfo(infoReader$$5, m$$11, finfo$$1) {
  const matchValue$$13 = SymbolHelpers$$$metaInfoOfEntityRef(infoReader$$5, m$$11, (0, _infos.ILFieldInfo$$get_DeclaringTyconRef)(finfo$$1));

  if (matchValue$$13 != null) {
    const formalTypeInfo$$5 = matchValue$$13[2];
    const ccuFileName$$9 = matchValue$$13[0];
    return [ccuFileName$$9, "F:" + (0, _il.ILTypeRef$$get_FullName)((0, _infos.ILTypeInfo$$get_ILTypeRef)(formalTypeInfo$$5)) + "." + (0, _infos.ILFieldInfo$$get_FieldName)(finfo$$1)];
  } else {
    return null;
  }
}

function SymbolHelpers$$$GetXmlDocHelpSigOfItemForLookup(infoReader$$6, m$$12, d$$4) {
  const g$$13 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$6);
  var $target$$31, vref$$14, ucinfo$$4, tcref$$15, rfinfo$$4, finfo$$2, tcref$$16, minfo$$10, modref, pinfo$$3, einfo$$4, minfo$$11, minfo$$12, argContainer;

  if (d$$4.tag === 3) {
    $target$$31 = 0;
    vref$$14 = d$$4.fields[0].fields[1];
  } else if (d$$4.tag === 0) {
    $target$$31 = 0;
    vref$$14 = d$$4.fields[0];
  } else if (d$$4.tag === 16) {
    $target$$31 = 0;
    vref$$14 = d$$4.fields[1];
  } else if (d$$4.tag === 1) {
    $target$$31 = 1;
    ucinfo$$4 = d$$4.fields[0];
  } else if (d$$4.tag === 4) {
    $target$$31 = 2;
    tcref$$15 = d$$4.fields[0];
  } else if (d$$4.tag === 5) {
    $target$$31 = 3;
    rfinfo$$4 = d$$4.fields[0];
  } else if (d$$4.tag === 6) {
    $target$$31 = 4;
  } else if (d$$4.tag === 7) {
    $target$$31 = 5;
    finfo$$2 = d$$4.fields[0];
  } else if (d$$4.tag === 14) {
    if (d$$4.fields[1].tail != null) {
      if (d$$4.fields[1].head.tag === 1) {
        $target$$31 = 6;
        tcref$$16 = d$$4.fields[1].head.fields[0];
      } else {
        $target$$31 = 15;
      }
    } else {
      $target$$31 = 15;
    }
  } else if (d$$4.tag === 15) {
    if (d$$4.fields[2] != null) {
      $target$$31 = 7;
      minfo$$10 = d$$4.fields[2];
    } else {
      $target$$31 = 15;
    }
  } else if (d$$4.tag === 17) {
    $target$$31 = 8;
  } else if (d$$4.tag === 18) {
    if (d$$4.fields[0].tail != null) {
      $target$$31 = 9;
      modref = d$$4.fields[0].head;
    } else {
      $target$$31 = 15;
    }
  } else if (d$$4.tag === 9) {
    if (d$$4.fields[1].tail != null) {
      $target$$31 = 10;
      pinfo$$3 = d$$4.fields[1].head;
    } else {
      $target$$31 = 15;
    }
  } else if (d$$4.tag === 8) {
    $target$$31 = 11;
    einfo$$4 = d$$4.fields[0];
  } else if (d$$4.tag === 10) {
    if (d$$4.fields[1].tail != null) {
      $target$$31 = 12;
      minfo$$11 = d$$4.fields[1].head;
    } else {
      $target$$31 = 15;
    }
  } else if (d$$4.tag === 11) {
    if (d$$4.fields[1].tail != null) {
      $target$$31 = 13;
      minfo$$12 = d$$4.fields[1].head;
    } else {
      $target$$31 = 15;
    }
  } else if (d$$4.tag === 20) {
    if (d$$4.fields[2] != null) {
      $target$$31 = 14;
      argContainer = d$$4.fields[2];
    } else {
      $target$$31 = 15;
    }
  } else {
    $target$$31 = 15;
  }

  switch ($target$$31) {
    case 0:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfValRef(g$$13, vref$$14));
      }

    case 1:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfUnionCaseInfo(ucinfo$$4));
      }

    case 2:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfEntityRef(infoReader$$6, m$$12, tcref$$15));
      }

    case 3:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfRecdFieldInfo(rfinfo$$4));
      }

    case 4:
      {
        return new FSharpXmlDoc(0, "None");
      }

    case 5:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfILFieldInfo(infoReader$$6, m$$12, finfo$$2));
      }

    case 6:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfEntityRef(infoReader$$6, m$$12, tcref$$16));
      }

    case 7:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfMethInfo(infoReader$$6, m$$12, minfo$$10));
      }

    case 8:
      {
        return new FSharpXmlDoc(0, "None");
      }

    case 9:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfEntityRef(infoReader$$6, m$$12, modref));
      }

    case 10:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfProp(infoReader$$6, m$$12, pinfo$$3));
      }

    case 11:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfEvent(infoReader$$6, m$$12, einfo$$4));
      }

    case 12:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfMethInfo(infoReader$$6, m$$12, minfo$$11));
      }

    case 13:
      {
        return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfMethInfo(infoReader$$6, m$$12, minfo$$12));
      }

    case 14:
      {
        switch (argContainer.tag) {
          case 1:
            {
              const tcref$$17 = argContainer.fields[0];
              return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfEntityRef(infoReader$$6, m$$12, tcref$$17));
            }

          case 2:
            {
              const ucinfo$$5 = argContainer.fields[0];
              return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfUnionCaseInfo(ucinfo$$5));
            }

          default:
            {
              const minfo$$13 = argContainer.fields[0];
              return SymbolHelpers$$$mkXmlComment(SymbolHelpers$$$GetXmlDocSigOfMethInfo(infoReader$$6, m$$12, minfo$$13));
            }
        }
      }

    case 15:
      {
        return new FSharpXmlDoc(0, "None");
      }
  }
}

function SymbolHelpers$$$GetXmlCommentForItemAux(xmlDoc, infoReader$$7, m$$13, d$$5) {
  const result = xmlDoc != null ? (!(0, _Array.equalsWith)(_Util.comparePrimitives, xmlDoc.fields[0], null) ? xmlDoc.fields[0].length === 0 : false) ? "" : (0, _lib.bufs)(function (os) {
    (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os, (0, _String.printf)("\n"));
    xmlDoc.fields[0].forEach(function action(s$$2) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os, (0, _String.printf)("\n%s"))(s$$2);
    });
  }) : "";

  if ((0, _String.isNullOrEmpty)(result)) {
    return SymbolHelpers$$$GetXmlDocHelpSigOfItemForLookup(infoReader$$7, m$$13, d$$5);
  } else {
    return new FSharpXmlDoc(1, "Text", result);
  }
}

const SymbolHelpers$$$ToolTipFault = (0, _Util.createAtom)(null);
exports.SymbolHelpers$$$ToolTipFault = SymbolHelpers$$$ToolTipFault;

function SymbolHelpers$$$GetXmlCommentForMethInfoItem(infoReader$$8, m$$14, d$$6, minfo$$14) {
  return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _infos.MethInfo$$get_HasDirectXmlComment)(minfo$$14) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _infos.MethInfo$$get_XmlDoc)(minfo$$14))) ? (0, _infos.MethInfo$$get_XmlDoc)(minfo$$14) : null, infoReader$$8, m$$14, d$$6);
}

function SymbolHelpers$$$FormatTyparMapping(denv, prettyTyparInst) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$14) {
      return (0, _Seq.singleton)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagTypeParameter)("'" + (0, _tast.Typar$$get_DisplayName)(matchValue$$14[0]))), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$descriptionWordIs)())), (0, _NicePrint.layoutType)(denv, matchValue$$14[1]))));
    }, prettyTyparInst);
  }));
}

function SymbolHelpers$$$FormatOverloadsToList(infoReader$$9, m$$15, denv$$1, item$$2, minfos$$2) {
  (0, _Seq.iterate)(function action$$1(msg$$1) {
    const exn$$7 = new _ErrorLogger.Error$([0, msg$$1], (0, _range.range$$$get_Zero)());
    const ph = (0, _ErrorLogger.PhasedDiagnostic$$$Create$$A7B7EC0)(exn$$7, new _ErrorLogger.BuildPhase(4, "TypeCheck"));
    (0, _ErrorLogger.simulateError)(ph);
  }, (0, _Option.defaultArg)(SymbolHelpers$$$ToolTipFault(), [], function ($x$$16) {
    return [$x$$16];
  }));
  const layouts = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (minfo$$15) {
      const patternInput$$4 = (0, _NicePrint.prettyLayoutOfMethInfoFreeStyle)((0, _InfoReader.InfoReader$$get_amap)(infoReader$$9), m$$15, denv$$1, item$$2.TyparInst, minfo$$15);
      const xml$$2 = SymbolHelpers$$$GetXmlCommentForMethInfoItem(infoReader$$9, m$$15, item$$2.Item, minfo$$15);
      const tpsL = SymbolHelpers$$$FormatTyparMapping(denv$$1, patternInput$$4[0]);
      return FSharpToolTipElementData$00601$$$Create$$51614AC(patternInput$$4[1], xml$$2, tpsL);
    }, minfos$$2);
  }));
  return new FSharpToolTipElement$00601(1, "Group", layouts);
}

function SymbolHelpers$$$pubpathOfValRef(v$$3) {
  return (0, _tast.ValRef$$get_PublicPath)(v$$3);
}

function SymbolHelpers$$$pubpathOfTyconRef(x$$14) {
  return (0, _tast.EntityRef$$get_PublicPath)(x$$14);
}

function SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(item$$3) {
  var $target$$32, ty$$6;

  if (item$$3.tag === 13) {
    $target$$32 = 0;
    ty$$6 = item$$3.fields[0];
  } else if (item$$3.tag === 11) {
    if (item$$3.fields[1].tail != null) {
      if (item$$3.fields[1].head.tag === 2) {
        if (item$$3.fields[1].tail.tail == null) {
          $target$$32 = 0;
          ty$$6 = item$$3.fields[1].head.fields[1];
        } else {
          $target$$32 = 1;
        }
      } else {
        $target$$32 = 1;
      }
    } else {
      $target$$32 = 1;
    }
  } else if (item$$3.tag === 12) {
    $target$$32 = 0;
    ty$$6 = item$$3.fields[0];
  } else if (item$$3.tag === 14) {
    if (item$$3.fields[1].tail != null) {
      if (item$$3.fields[1].tail.tail == null) {
        $target$$32 = 0;
        ty$$6 = item$$3.fields[1].head;
      } else {
        $target$$32 = 1;
      }
    } else {
      $target$$32 = 1;
    }
  } else {
    $target$$32 = 1;
  }

  switch ($target$$32) {
    case 0:
      {
        return ty$$6;
      }

    case 1:
      {
        return null;
      }
  }
}

function SymbolHelpers$$$ItemDisplayPartialEquality(g$$14) {
  return {
    InEqualityRelation(item$$4) {
      return item$$4.tag === 14 ? item$$4.fields[1].tail != null ? item$$4.fields[1].tail.tail == null ? true : false : false : item$$4.tag === 7 ? true : item$$4.tag === 5 ? true : item$$4.tag === 21 ? true : item$$4.tag === 17 ? true : item$$4.tag === 15 ? true : item$$4.tag === 18 ? item$$4.fields[0].tail != null ? true : false : item$$4.tag === 10 ? true : item$$4.tag === 0 ? true : item$$4.tag === 16 ? true : item$$4.tag === 3 ? true : item$$4.tag === 13 ? true : item$$4.tag === 1 ? true : item$$4.tag === 4 ? true : item$$4.tag === 8 ? true : item$$4.tag === 9 ? true : item$$4.tag === 11 ? true : item$$4.tag === 22 ? true : false;
    },

    Equals(item1, item2) {
      try {
        return function f$$2() {
          const equalHeadTypes = function equalHeadTypes(tupledArg) {
            if ((0, _TastOps.isAppTy)(g$$14, tupledArg[0]) ? (0, _TastOps.isAppTy)(g$$14, tupledArg[1]) : false) {
              return (0, _TastOps.tyconRefEq)(g$$14, (0, _TastOps.tcrefOfAppTy)(g$$14, tupledArg[0]), (0, _TastOps.tcrefOfAppTy)(g$$14, tupledArg[1]));
            } else {
              return (0, _TastOps.typeEquiv)(g$$14, tupledArg[0], tupledArg[1]);
            }
          };

          if ((0, _NameResolution.ItemsAreEffectivelyEqual)(g$$14, item1, item2)) {
            return true;
          } else {
            const matchValue$$15 = [item1, item2];
            var $target$$33, ty1$$1, ty2$$1, dn1, dn2, ty1$$2, ty2$$2, ty1$$3, ty2$$3;

            if (matchValue$$15[0].tag === 13) {
              if (matchValue$$15[1].tag === 13) {
                $target$$33 = 0;
                ty1$$1 = matchValue$$15[0].fields[0];
                ty2$$1 = matchValue$$15[1].fields[0];
              } else {
                const activePatternResult55490 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

                if (activePatternResult55490 != null) {
                  const activePatternResult55491 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                  if (activePatternResult55491 != null) {
                    $target$$33 = 2;
                    ty1$$3 = activePatternResult55490;
                    ty2$$3 = activePatternResult55491;
                  } else {
                    $target$$33 = 3;
                  }
                } else {
                  $target$$33 = 3;
                }
              }
            } else if (matchValue$$15[0].tag === 14) {
              if (matchValue$$15[0].fields[1].tail != null) {
                if (matchValue$$15[0].fields[1].tail.tail == null) {
                  if (matchValue$$15[1].tag === 14) {
                    if (matchValue$$15[1].fields[1].tail != null) {
                      if (matchValue$$15[1].fields[1].tail.tail == null) {
                        $target$$33 = 1;
                        dn1 = matchValue$$15[0].fields[0];
                        dn2 = matchValue$$15[1].fields[0];
                        ty1$$2 = matchValue$$15[0].fields[1].head;
                        ty2$$2 = matchValue$$15[1].fields[1].head;
                      } else {
                        const activePatternResult55492 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

                        if (activePatternResult55492 != null) {
                          const activePatternResult55493 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                          if (activePatternResult55493 != null) {
                            $target$$33 = 2;
                            ty1$$3 = activePatternResult55492;
                            ty2$$3 = activePatternResult55493;
                          } else {
                            $target$$33 = 3;
                          }
                        } else {
                          $target$$33 = 3;
                        }
                      }
                    } else {
                      const activePatternResult55494 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

                      if (activePatternResult55494 != null) {
                        const activePatternResult55495 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                        if (activePatternResult55495 != null) {
                          $target$$33 = 2;
                          ty1$$3 = activePatternResult55494;
                          ty2$$3 = activePatternResult55495;
                        } else {
                          $target$$33 = 3;
                        }
                      } else {
                        $target$$33 = 3;
                      }
                    }
                  } else {
                    const activePatternResult55496 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

                    if (activePatternResult55496 != null) {
                      const activePatternResult55497 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                      if (activePatternResult55497 != null) {
                        $target$$33 = 2;
                        ty1$$3 = activePatternResult55496;
                        ty2$$3 = activePatternResult55497;
                      } else {
                        $target$$33 = 3;
                      }
                    } else {
                      $target$$33 = 3;
                    }
                  }
                } else {
                  const activePatternResult55498 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

                  if (activePatternResult55498 != null) {
                    const activePatternResult55499 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                    if (activePatternResult55499 != null) {
                      $target$$33 = 2;
                      ty1$$3 = activePatternResult55498;
                      ty2$$3 = activePatternResult55499;
                    } else {
                      $target$$33 = 3;
                    }
                  } else {
                    $target$$33 = 3;
                  }
                }
              } else {
                const activePatternResult55500 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

                if (activePatternResult55500 != null) {
                  const activePatternResult55501 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                  if (activePatternResult55501 != null) {
                    $target$$33 = 2;
                    ty1$$3 = activePatternResult55500;
                    ty2$$3 = activePatternResult55501;
                  } else {
                    $target$$33 = 3;
                  }
                } else {
                  $target$$33 = 3;
                }
              }
            } else {
              const activePatternResult55502 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[0]);

              if (activePatternResult55502 != null) {
                const activePatternResult55503 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(matchValue$$15[1]);

                if (activePatternResult55503 != null) {
                  $target$$33 = 2;
                  ty1$$3 = activePatternResult55502;
                  ty2$$3 = activePatternResult55503;
                } else {
                  $target$$33 = 3;
                }
              } else {
                $target$$33 = 3;
              }
            }

            switch ($target$$33) {
              case 0:
                {
                  return equalHeadTypes([ty1$$1, ty2$$1]);
                }

              case 1:
                {
                  if (dn1 === dn2) {
                    return equalHeadTypes([ty1$$2, ty2$$2]);
                  } else {
                    return false;
                  }
                }

              case 2:
                {
                  return equalHeadTypes([ty1$$3, ty2$$3]);
                }

              case 3:
                {
                  var $target$$34, tcref1, tcref2, fld1, fld2, minfo1, minfo2, nm1, nm2, tp1, tp2, modref1, modref2, id1, id2, meths1, meths2, vref1, vref2, _apinfo1, _apinfo2, idx1, idx2, vref1$$1, vref2$$1, ur1, ur2, n1, n2, tcref1$$1, tcref2$$1, pi1s, pi2s, evt1, evt2, meths1$$1, meths2$$1, tcRefs1, tcRefs2, tcRef1$$1, tcRef2$$1, tcRef1$$2, tcRef2$$2;

                  if (matchValue$$15[0].tag === 4) {
                    if (matchValue$$15[1].tag === 4) {
                      $target$$34 = 0;
                      tcref1 = matchValue$$15[0].fields[0];
                      tcref2 = matchValue$$15[1].fields[0];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 7) {
                    if (matchValue$$15[1].tag === 7) {
                      $target$$34 = 1;
                      fld1 = matchValue$$15[0].fields[0].fields[1];
                      fld2 = matchValue$$15[1].fields[0].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 15) {
                    if (matchValue$$15[0].fields[2] != null) {
                      if (matchValue$$15[1].tag === 15) {
                        if (matchValue$$15[1].fields[2] != null) {
                          $target$$34 = 2;
                          minfo1 = matchValue$$15[0].fields[2];
                          minfo2 = matchValue$$15[1].fields[2];
                        } else {
                          $target$$34 = 17;
                        }
                      } else {
                        $target$$34 = 17;
                      }
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 17) {
                    if (matchValue$$15[1].tag === 17) {
                      $target$$34 = 3;
                      nm1 = matchValue$$15[0].fields[0];
                      nm2 = matchValue$$15[1].fields[0];
                      tp1 = matchValue$$15[0].fields[1];
                      tp2 = matchValue$$15[1].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 18) {
                    if (matchValue$$15[0].fields[0].tail != null) {
                      if (matchValue$$15[1].tag === 18) {
                        if (matchValue$$15[1].fields[0].tail != null) {
                          $target$$34 = 4;
                          modref1 = matchValue$$15[0].fields[0].head;
                          modref2 = matchValue$$15[1].fields[0].head;
                        } else {
                          $target$$34 = 17;
                        }
                      } else {
                        $target$$34 = 17;
                      }
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 21) {
                    if (matchValue$$15[1].tag === 21) {
                      $target$$34 = 5;
                      id1 = matchValue$$15[0].fields[0];
                      id2 = matchValue$$15[1].fields[0];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 10) {
                    if (matchValue$$15[1].tag === 10) {
                      $target$$34 = 6;
                      meths1 = matchValue$$15[0].fields[1];
                      meths2 = matchValue$$15[1].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 0) {
                    if (matchValue$$15[1].tag === 0) {
                      $target$$34 = 7;
                      vref1 = matchValue$$15[0].fields[0];
                      vref2 = matchValue$$15[1].fields[0];
                    } else if (matchValue$$15[1].tag === 16) {
                      $target$$34 = 7;
                      vref1 = matchValue$$15[0].fields[0];
                      vref2 = matchValue$$15[1].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 16) {
                    if (matchValue$$15[1].tag === 0) {
                      $target$$34 = 7;
                      vref1 = matchValue$$15[0].fields[1];
                      vref2 = matchValue$$15[1].fields[0];
                    } else if (matchValue$$15[1].tag === 16) {
                      $target$$34 = 7;
                      vref1 = matchValue$$15[0].fields[1];
                      vref2 = matchValue$$15[1].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 3) {
                    if (matchValue$$15[1].tag === 3) {
                      $target$$34 = 8;
                      _apinfo1 = matchValue$$15[0].fields[0].fields[0];
                      _apinfo2 = matchValue$$15[1].fields[0].fields[0];
                      idx1 = matchValue$$15[0].fields[0].fields[2];
                      idx2 = matchValue$$15[1].fields[0].fields[2];
                      vref1$$1 = matchValue$$15[0].fields[0].fields[1];
                      vref2$$1 = matchValue$$15[1].fields[0].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 1) {
                    if (matchValue$$15[1].tag === 1) {
                      $target$$34 = 9;
                      ur1 = matchValue$$15[0].fields[0].fields[1];
                      ur2 = matchValue$$15[1].fields[0].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 5) {
                    if (matchValue$$15[1].tag === 5) {
                      $target$$34 = 10;
                      n1 = matchValue$$15[0].fields[0].fields[1].fields[1];
                      n2 = matchValue$$15[1].fields[0].fields[1].fields[1];
                      tcref1$$1 = matchValue$$15[0].fields[0].fields[1].fields[0];
                      tcref2$$1 = matchValue$$15[1].fields[0].fields[1].fields[0];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 9) {
                    if (matchValue$$15[1].tag === 9) {
                      $target$$34 = 11;
                      pi1s = matchValue$$15[0].fields[1];
                      pi2s = matchValue$$15[1].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 8) {
                    if (matchValue$$15[1].tag === 8) {
                      $target$$34 = 12;
                      evt1 = matchValue$$15[0].fields[0];
                      evt2 = matchValue$$15[1].fields[0];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 11) {
                    if (matchValue$$15[1].tag === 11) {
                      $target$$34 = 13;
                      meths1$$1 = matchValue$$15[0].fields[1];
                      meths2$$1 = matchValue$$15[1].fields[1];
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 22) {
                    if (matchValue$$15[1].tag === 22) {
                      $target$$34 = 14;
                      tcRefs1 = matchValue$$15[0].fields[0];
                      tcRefs2 = matchValue$$15[1].fields[0];
                    } else if (matchValue$$15[1].tag === 14) {
                      if (matchValue$$15[1].fields[1].tail != null) {
                        if (matchValue$$15[1].fields[1].head.tag === 1) {
                          if (matchValue$$15[1].fields[1].tail.tail == null) {
                            if (matchValue$$15[0].fields[0].tail != null) {
                              if (matchValue$$15[0].fields[0].tail.tail == null) {
                                $target$$34 = 16;
                                tcRef1$$2 = matchValue$$15[0].fields[0].head;
                                tcRef2$$2 = matchValue$$15[1].fields[1].head.fields[0];
                              } else {
                                $target$$34 = 17;
                              }
                            } else {
                              $target$$34 = 17;
                            }
                          } else {
                            $target$$34 = 17;
                          }
                        } else {
                          $target$$34 = 17;
                        }
                      } else {
                        $target$$34 = 17;
                      }
                    } else {
                      $target$$34 = 17;
                    }
                  } else if (matchValue$$15[0].tag === 14) {
                    if (matchValue$$15[0].fields[1].tail != null) {
                      if (matchValue$$15[0].fields[1].head.tag === 1) {
                        if (matchValue$$15[0].fields[1].tail.tail == null) {
                          if (matchValue$$15[1].tag === 22) {
                            if (matchValue$$15[1].fields[0].tail != null) {
                              if (matchValue$$15[1].fields[0].tail.tail == null) {
                                $target$$34 = 15;
                                tcRef1$$1 = matchValue$$15[0].fields[1].head.fields[0];
                                tcRef2$$1 = matchValue$$15[1].fields[0].head;
                              } else {
                                $target$$34 = 17;
                              }
                            } else {
                              $target$$34 = 17;
                            }
                          } else {
                            $target$$34 = 17;
                          }
                        } else {
                          $target$$34 = 17;
                        }
                      } else {
                        $target$$34 = 17;
                      }
                    } else {
                      $target$$34 = 17;
                    }
                  } else {
                    $target$$34 = 17;
                  }

                  switch ($target$$34) {
                    case 0:
                      {
                        return (0, _TastOps.tyconRefEq)(g$$14, tcref1, tcref2);
                      }

                    case 1:
                      {
                        return fld1 === fld2;
                      }

                    case 2:
                      {
                        return (0, _infos.MethInfo$$$MethInfosUseIdenticalDefinitions)(minfo1, minfo2);
                      }

                    case 3:
                      {
                        if (nm1 === nm2) {
                          return (0, _tast.typarRefEq)(tp1, tp2);
                        } else {
                          return false;
                        }
                      }

                    case 4:
                      {
                        return (0, _TastOps.fullDisplayTextOfModRef)(modref1) === (0, _TastOps.fullDisplayTextOfModRef)(modref2);
                      }

                    case 5:
                      {
                        return (0, _Util.equalArrays)([(0, _ast.Ident$$get_idRange)(id1), (0, _ast.Ident$$get_idText)(id1)], [(0, _ast.Ident$$get_idRange)(id2), (0, _ast.Ident$$get_idText)(id2)]);
                      }

                    case 6:
                      {
                        return (0, _Seq.forAll)(function predicate$$2(tupledArg$$1) {
                          return (0, _infos.MethInfo$$$MethInfosUseIdenticalDefinitions)(tupledArg$$1[0], tupledArg$$1[1]);
                        }, (0, _Seq.zip)(meths1, meths2));
                      }

                    case 7:
                      {
                        return (0, _TastOps.valRefEq)(g$$14, vref1, vref2);
                      }

                    case 8:
                      {
                        if (idx1 === idx2) {
                          return (0, _TastOps.valRefEq)(g$$14, vref1$$1, vref2$$1);
                        } else {
                          return false;
                        }
                      }

                    case 9:
                      {
                        return (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$14, ur1, ur2);
                      }

                    case 10:
                      {
                        if ((0, _TastOps.tyconRefEq)(g$$14, tcref1$$1, tcref2$$1)) {
                          return n1 === n2;
                        } else {
                          return false;
                        }
                      }

                    case 11:
                      {
                        return (0, _List.forAll)(function predicate$$3(tupledArg$$2) {
                          return (0, _infos.PropInfo$$$PropInfosUseIdenticalDefinitions)(tupledArg$$2[0], tupledArg$$2[1]);
                        }, (0, _List.zip)(pi1s, pi2s));
                      }

                    case 12:
                      {
                        return (0, _infos.EventInfo$$$EventInfosUseIdenticalDefintions)(evt1, evt2);
                      }

                    case 13:
                      {
                        return (0, _List.forAll)(function predicate$$4(tupledArg$$3) {
                          return (0, _infos.MethInfo$$$MethInfosUseIdenticalDefinitions)(tupledArg$$3[0], tupledArg$$3[1]);
                        }, (0, _List.zip)(meths1$$1, meths2$$1));
                      }

                    case 14:
                      {
                        return (0, _List.forAll)(function predicate$$5(tupledArg$$4) {
                          return (0, _TastOps.tyconRefEq)(g$$14, tupledArg$$4[0], tupledArg$$4[1]);
                        }, (0, _List.zip)(tcRefs1, tcRefs2));
                      }

                    case 15:
                      {
                        return (0, _TastOps.tyconRefEq)(g$$14, tcRef1$$1, tcRef2$$1);
                      }

                    case 16:
                      {
                        return (0, _TastOps.tyconRefEq)(g$$14, tcRef1$$2, tcRef2$$2);
                      }

                    case 17:
                      {
                        return false;
                      }
                  }
                }
            }
          }
        }();
      } catch (matchValue$$16) {
        if (matchValue$$16 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
          return false;
        } else {
          throw matchValue$$16;
        }
      }
    },

    GetHashCode(item$$5) {
      try {
        return function f$$3() {
          const activePatternResult55512 = SymbolHelpers$$$$007CItemWhereTypIsPreferred$007C_$007C(item$$5);

          if (activePatternResult55512 != null) {
            const ty$$7 = activePatternResult55512;

            if ((0, _TastOps.isAppTy)(g$$14, ty$$7)) {
              return (0, _Util.structuralHash)((0, _tast.EntityRef$$get_LogicalName)((0, _TastOps.tcrefOfAppTy)(g$$14, ty$$7))) | 0;
            } else {
              return 1010;
            }
          } else {
            var $target$$35, fld, _tp, nm, minfo$$16, modref$$1, id$$1, meths, meths$$1, name, vref$$15, _apinfo, idx, vref$$16, tcref$$18, n, tcref$$19, n$$1, tcref$$20, evt, _name, pis, tcref$$21;

            if (item$$5.tag === 7) {
              $target$$35 = 0;
              fld = item$$5.fields[0].fields[1];
            } else if (item$$5.tag === 17) {
              $target$$35 = 1;
              _tp = item$$5.fields[1];
              nm = item$$5.fields[0];
            } else if (item$$5.tag === 15) {
              if (item$$5.fields[2] == null) {
                $target$$35 = 3;
              } else {
                $target$$35 = 2;
                minfo$$16 = item$$5.fields[2];
              }
            } else if (item$$5.tag === 18) {
              if (item$$5.fields[0].tail != null) {
                $target$$35 = 4;
                modref$$1 = item$$5.fields[0].head;
              } else {
                $target$$35 = 16;
              }
            } else if (item$$5.tag === 21) {
              $target$$35 = 5;
              id$$1 = item$$5.fields[0];
            } else if (item$$5.tag === 10) {
              $target$$35 = 6;
              meths = item$$5.fields[1];
            } else if (item$$5.tag === 11) {
              $target$$35 = 7;
              meths$$1 = item$$5.fields[1];
              name = item$$5.fields[0];
            } else if (item$$5.tag === 0) {
              $target$$35 = 8;
              vref$$15 = item$$5.fields[0];
            } else if (item$$5.tag === 16) {
              $target$$35 = 8;
              vref$$15 = item$$5.fields[1];
            } else if (item$$5.tag === 3) {
              $target$$35 = 9;
              _apinfo = item$$5.fields[0].fields[0];
              idx = item$$5.fields[0].fields[2];
              vref$$16 = item$$5.fields[0].fields[1];
            } else if (item$$5.tag === 4) {
              $target$$35 = 10;
              tcref$$18 = item$$5.fields[0];
            } else if (item$$5.tag === 1) {
              $target$$35 = 11;
              n = item$$5.fields[0].fields[1].fields[1];
              tcref$$19 = item$$5.fields[0].fields[1].fields[0];
            } else if (item$$5.tag === 5) {
              $target$$35 = 12;
              n$$1 = item$$5.fields[0].fields[1].fields[1];
              tcref$$20 = item$$5.fields[0].fields[1].fields[0];
            } else if (item$$5.tag === 8) {
              $target$$35 = 13;
              evt = item$$5.fields[0];
            } else if (item$$5.tag === 9) {
              $target$$35 = 14;
              _name = item$$5.fields[0];
              pis = item$$5.fields[1];
            } else if (item$$5.tag === 22) {
              if (item$$5.fields[0].tail != null) {
                $target$$35 = 15;
                tcref$$21 = item$$5.fields[0].head;
              } else {
                $target$$35 = 16;
              }
            } else {
              $target$$35 = 16;
            }

            switch ($target$$35) {
              case 0:
                {
                  return (0, _Util.identityHash)(fld) | 0;
                }

              case 1:
                {
                  return (0, _Util.structuralHash)(nm) | 0;
                }

              case 2:
                {
                  return (0, _infos.MethInfo$$ComputeHashCode)(minfo$$16) | 0;
                }

              case 3:
                {
                  return 1;
                }

              case 4:
                {
                  return (0, _Util.structuralHash)((0, _TastOps.fullDisplayTextOfModRef)(modref$$1)) | 0;
                }

              case 5:
                {
                  return (0, _Util.structuralHash)([(0, _ast.Ident$$get_idRange)(id$$1), (0, _ast.Ident$$get_idText)(id$$1)]) | 0;
                }

              case 6:
                {
                  return (0, _List.fold)(function folder(st, a$$1) {
                    return st + (0, _infos.MethInfo$$ComputeHashCode)(a$$1);
                  }, 0, meths) | 0;
                }

              case 7:
                {
                  return (0, _Util.structuralHash)(name) + (0, _List.fold)(function folder$$1(st$$1, a$$2) {
                    return st$$1 + (0, _infos.MethInfo$$ComputeHashCode)(a$$2);
                  }, 0, meths$$1) | 0;
                }

              case 8:
                {
                  return (0, _Util.structuralHash)((0, _tast.ValRef$$get_LogicalName)(vref$$15)) | 0;
                }

              case 9:
                {
                  return (0, _Util.structuralHash)([(0, _tast.ValRef$$get_LogicalName)(vref$$16), idx]) | 0;
                }

              case 10:
                {
                  return (0, _Util.structuralHash)((0, _tast.EntityRef$$get_LogicalName)(tcref$$18)) | 0;
                }

              case 11:
                {
                  return (0, _Util.structuralHash)([(0, _tast.EntityRef$$get_Stamp)(tcref$$19), n]) | 0;
                }

              case 12:
                {
                  return (0, _Util.structuralHash)([(0, _tast.EntityRef$$get_Stamp)(tcref$$20), n$$1]) | 0;
                }

              case 13:
                {
                  return (0, _infos.EventInfo$$ComputeHashCode)(evt) | 0;
                }

              case 14:
                {
                  return (0, _Util.structuralHash)((0, _List.map)(function mapping$$6(pi) {
                    return (0, _infos.PropInfo$$ComputeHashCode)(pi);
                  }, pis)) | 0;
                }

              case 15:
                {
                  return (0, _Util.structuralHash)((0, _tast.EntityRef$$get_LogicalName)(tcref$$21)) | 0;
                }

              case 16:
                {
                  throw new Error("unreachable");
                }
            }
          }
        }() | 0;
      } catch (matchValue$$17) {
        if (matchValue$$17 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
          return 1027;
        } else {
          throw matchValue$$17;
        }
      }
    }

  };
}

function SymbolHelpers$$$CompletionItemDisplayPartialEquality(g$$15) {
  const itemComparer = SymbolHelpers$$$ItemDisplayPartialEquality(g$$15);
  return {
    InEqualityRelation(item$$6) {
      return itemComparer.InEqualityRelation(CompletionItem$$get_Item(item$$6));
    },

    Equals(item1$$1, item2$$1) {
      return itemComparer.Equals(CompletionItem$$get_Item(item1$$1), CompletionItem$$get_Item(item2$$1));
    },

    GetHashCode(item$$7) {
      return itemComparer.GetHashCode(CompletionItem$$get_Item(item$$7));
    }

  };
}

function SymbolHelpers$$$ItemWithTypeDisplayPartialEquality(g$$16) {
  const itemComparer$$1 = SymbolHelpers$$$ItemDisplayPartialEquality(g$$16);
  return {
    InEqualityRelation(_arg1$$4) {
      return itemComparer$$1.InEqualityRelation(_arg1$$4[0]);
    },

    Equals(_arg2, _arg3) {
      return itemComparer$$1.Equals(_arg2[0], _arg3[0]);
    },

    GetHashCode(_arg4) {
      return itemComparer$$1.GetHashCode(_arg4[0]);
    }

  };
}

function SymbolHelpers$$$RemoveDuplicateModuleRefs(modrefs$$1) {
  return (0, _illib.IPartialEqualityComparer$$$partialDistinctBy)({
    InEqualityRelation(_arg1$$5) {
      return true;
    },

    Equals(item1$$3, item2$$3) {
      return (0, _TastOps.fullDisplayTextOfModRef)(item1$$3) === (0, _TastOps.fullDisplayTextOfModRef)(item2$$3);
    },

    GetHashCode(item$$10) {
      return (0, _Util.structuralHash)((0, _tast.EntityRef$$get_Stamp)(item$$10));
    }

  }, modrefs$$1);
}

function SymbolHelpers$$$RemoveDuplicateItems(g$$17, items) {
  return (0, _illib.IPartialEqualityComparer$$$partialDistinctBy)((0, _illib.IPartialEqualityComparer$$$On)(function (item$$11) {
    return item$$11.Item;
  }, SymbolHelpers$$$ItemDisplayPartialEquality(g$$17)), items);
}

function SymbolHelpers$$$RemoveDuplicateCompletionItems(g$$18, items$$1) {
  return (0, _illib.IPartialEqualityComparer$$$partialDistinctBy)(SymbolHelpers$$$CompletionItemDisplayPartialEquality(g$$18), items$$1);
}

function SymbolHelpers$$$IsExplicitlySuppressed(g$$19, item$$12) {
  try {
    return function f$$4() {
      var $target$$36, it, ty$$8;

      if (item$$12.tag === 14) {
        if (item$$12.fields[1].tail != null) {
          if (item$$12.fields[1].tail.tail == null) {
            $target$$36 = 0;
            it = item$$12.fields[0];
            ty$$8 = item$$12.fields[1].head;
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
            if ((0, _TastOps.isAppTy)(g$$19, ty$$8)) {
              return (0, _List.exists)(function predicate$$6(supp) {
                const generalizedSupp = (0, _TastOps.generalizedTyconRef)(supp);

                if ((0, _TastOps.isAppTy)(g$$19, generalizedSupp) ? it === (0, _tast.EntityRef$$get_DisplayName)(supp) : false) {
                  const tcr1 = (0, _TastOps.tcrefOfAppTy)(g$$19, ty$$8);
                  const tcr2 = (0, _TastOps.tcrefOfAppTy)(g$$19, generalizedSupp);
                  return (0, _TastOps.tyconRefEq)(g$$19, tcr1, tcr2);
                } else {
                  return false;
                }
              }, (0, _TcGlobals.TcGlobals$$get_suppressed_types)(g$$19));
            } else {
              return false;
            }
          }

        case 1:
          {
            return false;
          }
      }
    }();
  } catch (matchValue$$18) {
    if (matchValue$$18 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return true;
    } else {
      throw matchValue$$18;
    }
  }
}

function SymbolHelpers$$$RemoveExplicitlySuppressed(g$$20, items$$2) {
  return (0, _List.filter)(function predicate$$7(item$$13) {
    return !SymbolHelpers$$$IsExplicitlySuppressed(g$$20, item$$13.Item);
  }, items$$2);
}

function SymbolHelpers$$$RemoveExplicitlySuppressedCompletionItems(g$$21, items$$3) {
  return (0, _List.filter)(function predicate$$8(item$$14) {
    return !SymbolHelpers$$$IsExplicitlySuppressed(g$$21, CompletionItem$$get_Item(item$$14));
  }, items$$3);
}

function SymbolHelpers$$$SimplerDisplayEnv(denv$$2) {
  return new _TastOps.DisplayEnv(denv$$2.includeStaticParametersInTypeNames, denv$$2.openTopPathsSorted, denv$$2.openTopPathsRaw, denv$$2.shortTypeNames, true, EnvMisc2$$$maxMembers, denv$$2.showObsoleteMembers, denv$$2.showHiddenMembers, denv$$2.showTyparBinding, denv$$2.showImperativeTyparAnnotations, true, denv$$2.suppressMutableKeyword, denv$$2.showMemberContainers, true, denv$$2.useColonForReturnType, denv$$2.showAttributes, denv$$2.showOverrides, false, false, denv$$2.showTyparDefaultConstraints, denv$$2.g, denv$$2.contextAccessibility, denv$$2.generatedValueLayout);
}

function SymbolHelpers$$$FullNameOfItem(g$$22, item$$15) {
  SymbolHelpers$$$FullNameOfItem: while (true) {
    const denv$$3 = (0, _TastOps.DisplayEnv$$$Empty$$2AE8EA0C)(g$$22);

    var $target$$37, vref$$17, ucinfo$$6, _ty, apinfo, idx$$1, apref$$2, ecref, rfinfo$$5, id$$2, finfo$$3, einfo$$5, pinfo$$4, customOpName, minfo$$17, minfo$$18, minfo$$19, tcref$$22, ty$$9, modref$$2, modrefs$$2, id$$3, id$$4, item$$16, id$$5;

    if (item$$15.tag === 0) {
      $target$$37 = 0;
      vref$$17 = item$$15.fields[0];
    } else if (item$$15.tag === 16) {
      $target$$37 = 0;
      vref$$17 = item$$15.fields[1];
    } else if (item$$15.tag === 1) {
      $target$$37 = 1;
      ucinfo$$6 = item$$15.fields[0];
    } else if (item$$15.tag === 2) {
      $target$$37 = 2;
      _ty = item$$15.fields[1];
      apinfo = item$$15.fields[0];
      idx$$1 = item$$15.fields[2];
    } else if (item$$15.tag === 3) {
      $target$$37 = 3;
      apref$$2 = item$$15.fields[0];
    } else if (item$$15.tag === 4) {
      $target$$37 = 4;
      ecref = item$$15.fields[0];
    } else if (item$$15.tag === 5) {
      $target$$37 = 5;
      rfinfo$$5 = item$$15.fields[0];
    } else if (item$$15.tag === 6) {
      $target$$37 = 6;
      id$$2 = item$$15.fields[0];
    } else if (item$$15.tag === 7) {
      $target$$37 = 7;
      finfo$$3 = item$$15.fields[0];
    } else if (item$$15.tag === 8) {
      $target$$37 = 8;
      einfo$$5 = item$$15.fields[0];
    } else if (item$$15.tag === 9) {
      if (item$$15.fields[1].tail == null) {
        $target$$37 = 21;
      } else {
        $target$$37 = 9;
        pinfo$$4 = item$$15.fields[1].head;
      }
    } else if (item$$15.tag === 15) {
      $target$$37 = 10;
      customOpName = item$$15.fields[0];
    } else if (item$$15.tag === 11) {
      if (item$$15.fields[1].tail == null) {
        $target$$37 = 21;
      } else {
        $target$$37 = 11;
        minfo$$17 = item$$15.fields[1].head;
      }
    } else if (item$$15.tag === 10) {
      if (item$$15.fields[2] != null) {
        $target$$37 = 12;
        minfo$$18 = item$$15.fields[2];
      } else if (item$$15.fields[1].tail == null) {
        $target$$37 = 21;
      } else {
        $target$$37 = 13;
        minfo$$19 = item$$15.fields[1].head;
      }
    } else if (item$$15.tag === 22) {
      if (item$$15.fields[0].tail == null) {
        $target$$37 = 21;
      } else {
        $target$$37 = 14;
        tcref$$22 = item$$15.fields[0].head;
      }
    } else if (item$$15.tag === 12) {
      $target$$37 = 15;
      ty$$9 = item$$15.fields[0];
    } else if (item$$15.tag === 13) {
      $target$$37 = 15;
      ty$$9 = item$$15.fields[0];
    } else if (item$$15.tag === 14) {
      if (item$$15.fields[1].tail == null) {
        $target$$37 = 21;
      } else {
        $target$$37 = 15;
        ty$$9 = item$$15.fields[1].head;
      }
    } else if (item$$15.tag === 18) {
      if (item$$15.fields[0].tail == null) {
        $target$$37 = 21;
      } else {
        $target$$37 = 16;
        modref$$2 = item$$15.fields[0].head;
        modrefs$$2 = item$$15.fields[0];
      }
    } else if (item$$15.tag === 17) {
      $target$$37 = 17;
      id$$3 = item$$15.fields[0];
    } else if (item$$15.tag === 20) {
      $target$$37 = 18;
      id$$4 = item$$15.fields[0];
    } else if (item$$15.tag === 21) {
      $target$$37 = 19;
      item$$16 = item$$15.fields[1];
    } else if (item$$15.fields[1].contents != null) {
      if (item$$15.fields[1].contents.tag === 0) {
        $target$$37 = 0;
        vref$$17 = item$$15.fields[1].contents.fields[1];
      } else {
        $target$$37 = 20;
        id$$5 = item$$15.fields[0];
      }
    } else {
      $target$$37 = 20;
      id$$5 = item$$15.fields[0];
    }

    switch ($target$$37) {
      case 0:
        {
          return (0, _TastOps.fullDisplayTextOfValRef)(vref$$17);
        }

      case 1:
        {
          return (0, _TastOps.fullDisplayTextOfUnionCaseRef)((0, _infos.UnionCaseInfo$$get_UnionCaseRef)(ucinfo$$6));
        }

      case 2:
        {
          return (0, _List.item)(idx$$1, (0, _TastOps.ActivePatternInfo$002Eget_Names)(apinfo));
        }

      case 3:
        {
          return SymbolHelpers$$$FullNameOfItem(g$$22, new _NameResolution.Item(0, "Value", (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$2))) + "." + (0, _TastOps.ActivePatternElemRef$002Eget_Name)(apref$$2);
        }

      case 4:
        {
          return (0, _TastOps.fullDisplayTextOfExnRef)(ecref);
        }

      case 5:
        {
          return (0, _TastOps.fullDisplayTextOfRecdFieldRef)((0, _infos.RecdFieldInfo$$get_RecdFieldRef)(rfinfo$$5));
        }

      case 6:
        {
          return (0, _ast.Ident$$get_idText)(id$$2);
        }

      case 7:
        {
          return (0, _lib.bufs)(function (os$$1) {
            (0, _NicePrint.outputILTypeRef)(denv$$3, os$$1, (0, _infos.ILFieldInfo$$get_ILTypeRef)(finfo$$3));
            (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$1, (0, _String.printf)(".%s"))((0, _infos.ILFieldInfo$$get_FieldName)(finfo$$3));
          });
        }

      case 8:
        {
          return (0, _lib.bufs)(function (os$$2) {
            (0, _NicePrint.outputTyconRef)(denv$$3, os$$2, (0, _infos.EventInfo$$get_DeclaringTyconRef)(einfo$$5));
            (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$2, (0, _String.printf)(".%s"))((0, _infos.EventInfo$$get_EventName)(einfo$$5));
          });
        }

      case 9:
        {
          return (0, _lib.bufs)(function (os$$3) {
            (0, _NicePrint.outputTyconRef)(denv$$3, os$$3, (0, _infos.PropInfo$$get_DeclaringTyconRef)(pinfo$$4));
            (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$3, (0, _String.printf)(".%s"))((0, _infos.PropInfo$$get_PropertyName)(pinfo$$4));
          });
        }

      case 10:
        {
          return customOpName;
        }

      case 11:
        {
          return (0, _lib.bufs)(function (os$$4) {
            (0, _NicePrint.outputTyconRef)(denv$$3, os$$4, (0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$17));
          });
        }

      case 12:
        {
          return (0, _lib.bufs)(function (os$$5) {
            (0, _NicePrint.outputTyconRef)(denv$$3, os$$5, (0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$18));
            (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$5, (0, _String.printf)(".%s"))((0, _infos.MethInfo$$get_DisplayName)(minfo$$18));
          });
        }

      case 13:
        {
          return (0, _lib.bufs)(function (os$$6) {
            (0, _NicePrint.outputTyconRef)(denv$$3, os$$6, (0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$19));
            (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$6, (0, _String.printf)(".%s"))((0, _infos.MethInfo$$get_DisplayName)(minfo$$19));
          });
        }

      case 14:
        {
          return (0, _lib.bufs)(function (os$$7) {
            (0, _NicePrint.outputTyconRef)(denv$$3, os$$7, tcref$$22);
          });
        }

      case 15:
        {
          const matchValue$$19 = (0, _TastOps.tryDestAppTy)(g$$22, ty$$9);

          if (matchValue$$19 != null) {
            const tcref$$23 = matchValue$$19;
            return (0, _lib.bufs)(function (os$$8) {
              (0, _NicePrint.outputTyconRef)(denv$$3, os$$8, tcref$$23);
            });
          } else {
            return "";
          }
        }

      case 16:
        {
          const definiteNamespace = (0, _List.forAll)(function predicate$$9(modref$$3) {
            return (0, _tast.EntityRef$$get_IsNamespace)(modref$$3);
          }, modrefs$$2);

          if (definiteNamespace) {
            return (0, _TastOps.fullDisplayTextOfModRef)(modref$$2);
          } else {
            return (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(modref$$2);
          }
        }

      case 17:
        {
          return id$$3;
        }

      case 18:
        {
          return (0, _ast.Ident$$get_idText)(id$$4);
        }

      case 19:
        {
          g$$22 = g$$22;
          item$$15 = item$$16;
          continue SymbolHelpers$$$FullNameOfItem;
        }

      case 20:
        {
          return (0, _ast.Ident$$get_idText)(id$$5);
        }

      case 21:
        {
          return "";
        }
    }
  }
}

function SymbolHelpers$$$GetXmlCommentForItem(infoReader$$10, m$$16, item$$17) {
  SymbolHelpers$$$GetXmlCommentForItem: while (true) {
    const g$$23 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$10);
    var $target$$38, vref$$18, vref$$19, ucinfo$$7, apref$$3, ecref$$1, rfinfo$$6, einfo$$6, pinfos$$2, minfo$$20, tcref$$24, modref$$4, modrefs$$3, argContainer$$1, item$$18;

    if (item$$17.tag === 19) {
      if (item$$17.fields[1].contents != null) {
        if (item$$17.fields[1].contents.tag === 0) {
          $target$$38 = 0;
          vref$$18 = item$$17.fields[1].contents.fields[1];
        } else {
          $target$$38 = 13;
        }
      } else {
        $target$$38 = 13;
      }
    } else if (item$$17.tag === 0) {
      $target$$38 = 1;
      vref$$19 = item$$17.fields[0];
    } else if (item$$17.tag === 16) {
      $target$$38 = 1;
      vref$$19 = item$$17.fields[1];
    } else if (item$$17.tag === 1) {
      $target$$38 = 2;
      ucinfo$$7 = item$$17.fields[0];
    } else if (item$$17.tag === 3) {
      $target$$38 = 3;
      apref$$3 = item$$17.fields[0];
    } else if (item$$17.tag === 4) {
      $target$$38 = 4;
      ecref$$1 = item$$17.fields[0];
    } else if (item$$17.tag === 5) {
      $target$$38 = 5;
      rfinfo$$6 = item$$17.fields[0];
    } else if (item$$17.tag === 8) {
      $target$$38 = 6;
      einfo$$6 = item$$17.fields[0];
    } else if (item$$17.tag === 9) {
      $target$$38 = 7;
      pinfos$$2 = item$$17.fields[1];
    } else if (item$$17.tag === 15) {
      if (item$$17.fields[2] != null) {
        $target$$38 = 8;
        minfo$$20 = item$$17.fields[2];
      } else {
        $target$$38 = 13;
      }
    } else if (item$$17.tag === 11) {
      if (item$$17.fields[1].tail != null) {
        $target$$38 = 8;
        minfo$$20 = item$$17.fields[1].head;
      } else {
        $target$$38 = 13;
      }
    } else if (item$$17.tag === 10) {
      if (item$$17.fields[1].tail != null) {
        $target$$38 = 8;
        minfo$$20 = item$$17.fields[1].head;
      } else {
        $target$$38 = 13;
      }
    } else if (item$$17.tag === 14) {
      if (item$$17.fields[1].tail != null) {
        if (item$$17.fields[1].head.tag === 1) {
          $target$$38 = 9;
          tcref$$24 = item$$17.fields[1].head.fields[0];
        } else {
          $target$$38 = 13;
        }
      } else {
        $target$$38 = 13;
      }
    } else if (item$$17.tag === 18) {
      if (item$$17.fields[0].tail != null) {
        $target$$38 = 10;
        modref$$4 = item$$17.fields[0].head;
        modrefs$$3 = item$$17.fields[0];
      } else {
        $target$$38 = 13;
      }
    } else if (item$$17.tag === 20) {
      $target$$38 = 11;
      argContainer$$1 = item$$17.fields[2];
    } else if (item$$17.tag === 21) {
      $target$$38 = 12;
      item$$18 = item$$17.fields[1];
    } else if (item$$17.tag === 2) {
      $target$$38 = 13;
    } else if (item$$17.tag === 6) {
      $target$$38 = 13;
    } else if (item$$17.tag === 7) {
      $target$$38 = 13;
    } else if (item$$17.tag === 12) {
      $target$$38 = 13;
    } else if (item$$17.tag === 13) {
      $target$$38 = 13;
    } else {
      $target$$38 = 13;
    }

    switch ($target$$38) {
      case 0:
        {
          infoReader$$10 = infoReader$$10;
          m$$16 = m$$16;
          item$$17 = new _NameResolution.Item(0, "Value", vref$$18);
          continue SymbolHelpers$$$GetXmlCommentForItem;
        }

      case 1:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _tast.valRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), vref$$19) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _tast.ValRef$$get_XmlDoc)(vref$$19))) ? (0, _tast.ValRef$$get_XmlDoc)(vref$$19) : null, infoReader$$10, m$$16, item$$17);
        }

      case 2:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _tast.tyconRefUsesLocalXmlDoc)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), (0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo$$7)) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo$$7).XmlDoc)) ? (0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo$$7).XmlDoc : null, infoReader$$10, m$$16, item$$17);
        }

      case 3:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux((0, _tast.ValRef$$get_XmlDoc)((0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$3)), infoReader$$10, m$$16, item$$17);
        }

      case 4:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _tast.tyconRefUsesLocalXmlDoc)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), ecref$$1) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _tast.EntityRef$$get_XmlDoc)(ecref$$1))) ? (0, _tast.EntityRef$$get_XmlDoc)(ecref$$1) : null, infoReader$$10, m$$16, item$$17);
        }

      case 5:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _tast.tyconRefUsesLocalXmlDoc)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), (0, _infos.RecdFieldInfo$$get_TyconRef)(rfinfo$$6)) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _tast.EntityRef$$get_XmlDoc)((0, _infos.RecdFieldInfo$$get_TyconRef)(rfinfo$$6)))) ? (0, _tast.RecdField$$get_XmlDoc)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$6)) : null, infoReader$$10, m$$16, item$$17);
        }

      case 6:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _infos.EventInfo$$get_HasDirectXmlComment)(einfo$$6) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _infos.EventInfo$$get_XmlDoc)(einfo$$6))) ? (0, _infos.EventInfo$$get_XmlDoc)(einfo$$6) : null, infoReader$$10, m$$16, item$$17);
        }

      case 7:
        {
          const pinfo$$5 = (0, _List.head)(pinfos$$2);
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _infos.PropInfo$$get_HasDirectXmlComment)(pinfo$$5) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _infos.PropInfo$$get_XmlDoc)(pinfo$$5))) ? (0, _infos.PropInfo$$get_XmlDoc)(pinfo$$5) : null, infoReader$$10, m$$16, item$$17);
        }

      case 8:
        {
          return SymbolHelpers$$$GetXmlCommentForMethInfoItem(infoReader$$10, m$$16, item$$17, minfo$$20);
        }

      case 9:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _tast.tyconRefUsesLocalXmlDoc)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), tcref$$24) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _tast.EntityRef$$get_XmlDoc)(tcref$$24))) ? (0, _tast.EntityRef$$get_XmlDoc)(tcref$$24) : null, infoReader$$10, m$$16, item$$17);
        }

      case 10:
        {
          const definiteNamespace$$1 = (0, _List.forAll)(function predicate$$10(modref$$5) {
            return (0, _tast.EntityRef$$get_IsNamespace)(modref$$5);
          }, modrefs$$3);

          if (!definiteNamespace$$1) {
            return SymbolHelpers$$$GetXmlCommentForItemAux(((0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), modref$$4) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _tast.EntityRef$$get_XmlDoc)(modref$$4))) ? (0, _tast.EntityRef$$get_XmlDoc)(modref$$4) : null, infoReader$$10, m$$16, item$$17);
          } else {
            return SymbolHelpers$$$GetXmlCommentForItemAux(null, infoReader$$10, m$$16, item$$17);
          }
        }

      case 11:
        {
          const xmldoc = argContainer$$1 != null ? argContainer$$1.tag === 1 ? ((0, _tast.tyconRefUsesLocalXmlDoc)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), argContainer$$1.fields[0]) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _tast.EntityRef$$get_XmlDoc)(argContainer$$1.fields[0]))) ? (0, _tast.EntityRef$$get_XmlDoc)(argContainer$$1.fields[0]) : null : argContainer$$1.tag === 2 ? ((0, _tast.tyconRefUsesLocalXmlDoc)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$23), (0, _infos.UnionCaseInfo$$get_TyconRef)(argContainer$$1.fields[0])) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _infos.UnionCaseInfo$$get_UnionCase)(argContainer$$1.fields[0]).XmlDoc)) ? (0, _infos.UnionCaseInfo$$get_UnionCase)(argContainer$$1.fields[0]).XmlDoc : null : ((0, _infos.MethInfo$$get_HasDirectXmlComment)(argContainer$$1.fields[0]) ? true : (0, _ast.XmlDoc$$get_NonEmpty)((0, _infos.MethInfo$$get_XmlDoc)(argContainer$$1.fields[0]))) ? (0, _infos.MethInfo$$get_XmlDoc)(argContainer$$1.fields[0]) : null : null;
          return SymbolHelpers$$$GetXmlCommentForItemAux(xmldoc, infoReader$$10, m$$16, item$$17);
        }

      case 12:
        {
          infoReader$$10 = infoReader$$10;
          m$$16 = m$$16;
          item$$17 = item$$18;
          continue SymbolHelpers$$$GetXmlCommentForItem;
        }

      case 13:
        {
          return SymbolHelpers$$$GetXmlCommentForItemAux(null, infoReader$$10, m$$16, item$$17);
        }
    }
  }
}

function SymbolHelpers$$$IsAttribute(infoReader$$11, item$$19) {
  try {
    const g$$24 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$11);
    const amap$$1 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$11);
    var $target$$39, tcref$$26;

    if (item$$19.tag === 14) {
      if (item$$19.fields[1].tail != null) {
        if (item$$19.fields[1].head.tag === 1) {
          $target$$39 = 0;
          tcref$$26 = item$$19.fields[1].head.fields[0];
        } else {
          $target$$39 = 1;
        }
      } else {
        $target$$39 = 1;
      }
    } else if (item$$19.tag === 22) {
      if (item$$19.fields[0].tail != null) {
        $target$$39 = 0;
        tcref$$26 = item$$19.fields[0].head;
      } else {
        $target$$39 = 1;
      }
    } else {
      $target$$39 = 1;
    }

    switch ($target$$39) {
      case 0:
        {
          const ty$$10 = (0, _TastOps.generalizedTyconRef)(tcref$$26);
          return (0, _infos.ExistsHeadTypeInEntireHierarchy)(g$$24, amap$$1, _range.range0, ty$$10, (0, _TcGlobals.TcGlobals$$get_tcref_System_Attribute)(g$$24));
        }

      case 1:
        {
          return false;
        }
    }
  } catch (matchValue$$20) {
    return false;
  }
}

function SymbolHelpers$$$FormatItemDescriptionToToolTipElement(isListItem$$1, infoReader$$12, m$$17, denv$$4, item$$20) {
  var matchValue$$22, lit, matchValue$$24, v$$7, matchValue$$26, argTys, patternInput$$9, t;

  SymbolHelpers$$$FormatItemDescriptionToToolTipElement: while (true) {
    const g$$25 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$12);
    const amap$$2 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$12);
    const denv$$5 = SymbolHelpers$$$SimplerDisplayEnv(denv$$4);
    const xml$$3 = SymbolHelpers$$$GetXmlCommentForItem(infoReader$$12, m$$17, item$$20.Item);
    var $target$$40, vref$$20, vref$$21, ucinfo$$9, apinfo$$1, idx$$2, ty$$11, apref$$4, ecref$$2, rfinfo$$7, id$$6, finfo$$4, einfo$$7, pinfo$$6, customOpName$$1, minfo$$22, usageText, minfos$$3, ty$$15, delty, tcref$$27, modref$$6, modrefs$$4, argTy, id$$7, item$$21;

    if (item$$20.Item.tag === 19) {
      if (item$$20.Item.fields[1].contents != null) {
        if (item$$20.Item.fields[1].contents.tag === 0) {
          $target$$40 = 0;
          vref$$20 = item$$20.Item.fields[1].contents.fields[1];
        } else {
          $target$$40 = 19;
        }
      } else {
        $target$$40 = 19;
      }
    } else if (item$$20.Item.tag === 0) {
      $target$$40 = 1;
      vref$$21 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 16) {
      $target$$40 = 1;
      vref$$21 = item$$20.Item.fields[1];
    } else if (item$$20.Item.tag === 1) {
      $target$$40 = 2;
      ucinfo$$9 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 2) {
      $target$$40 = 3;
      apinfo$$1 = item$$20.Item.fields[0];
      idx$$2 = item$$20.Item.fields[2];
      ty$$11 = item$$20.Item.fields[1];
    } else if (item$$20.Item.tag === 3) {
      $target$$40 = 4;
      apref$$4 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 4) {
      $target$$40 = 5;
      ecref$$2 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 5) {
      $target$$40 = 6;
      rfinfo$$7 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 6) {
      $target$$40 = 7;
      id$$6 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 7) {
      $target$$40 = 8;
      finfo$$4 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 8) {
      $target$$40 = 9;
      einfo$$7 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 9) {
      if (item$$20.Item.fields[1].tail != null) {
        $target$$40 = 10;
        pinfo$$6 = item$$20.Item.fields[1].head;
      } else {
        $target$$40 = 19;
      }
    } else if (item$$20.Item.tag === 15) {
      if (item$$20.Item.fields[2] != null) {
        $target$$40 = 11;
        customOpName$$1 = item$$20.Item.fields[0];
        minfo$$22 = item$$20.Item.fields[2];
        usageText = item$$20.Item.fields[1];
      } else {
        $target$$40 = 19;
      }
    } else if (item$$20.Item.tag === 11) {
      $target$$40 = 12;
      minfos$$3 = item$$20.Item.fields[1];
    } else if (item$$20.Item.tag === 10) {
      $target$$40 = 12;
      minfos$$3 = item$$20.Item.fields[1];
    } else if (item$$20.Item.tag === 12) {
      $target$$40 = 13;
      ty$$15 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 13) {
      $target$$40 = 14;
      delty = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 14) {
      if (item$$20.Item.fields[1].tail != null) {
        if (item$$20.Item.fields[1].head.tag === 1) {
          $target$$40 = 15;
          tcref$$27 = item$$20.Item.fields[1].head.fields[0];
        } else {
          $target$$40 = 19;
        }
      } else {
        $target$$40 = 19;
      }
    } else if (item$$20.Item.tag === 22) {
      if (item$$20.Item.fields[0].tail != null) {
        $target$$40 = 15;
        tcref$$27 = item$$20.Item.fields[0].head;
      } else {
        $target$$40 = 19;
      }
    } else if (item$$20.Item.tag === 18) {
      if (item$$20.Item.fields[0].tail != null) {
        $target$$40 = 16;
        modref$$6 = item$$20.Item.fields[0].head;
        modrefs$$4 = item$$20.Item.fields[0];
      } else {
        $target$$40 = 19;
      }
    } else if (item$$20.Item.tag === 20) {
      $target$$40 = 17;
      argTy = item$$20.Item.fields[1];
      id$$7 = item$$20.Item.fields[0];
    } else if (item$$20.Item.tag === 21) {
      $target$$40 = 18;
      item$$21 = item$$20.Item.fields[1];
    } else {
      $target$$40 = 19;
    }

    switch ($target$$40) {
      case 0:
        {
          isListItem$$1 = isListItem$$1;
          infoReader$$12 = infoReader$$12;
          m$$17 = m$$17;
          denv$$4 = denv$$5;
          item$$20 = new _NameResolution.ItemWithInst(new _NameResolution.Item(0, "Value", vref$$20), item$$20.TyparInst);
          continue SymbolHelpers$$$FormatItemDescriptionToToolTipElement;
        }

      case 1:
        {
          const patternInput$$5 = (0, _NicePrint.layoutQualifiedValOrMember)(denv$$5, item$$20.TyparInst, (0, _tast.ValRef$$get_Deref)(vref$$21));
          const remarks$$2 = SymbolHelpers$$$OutputFullName(isListItem$$1, SymbolHelpers$$$pubpathOfValRef, _TastOps.fullDisplayTextOfValRefAsLayout, vref$$21);
          const tpsL$$1 = SymbolHelpers$$$FormatTyparMapping(denv$$5, patternInput$$5[0]);
          return FSharpToolTipElement$00601$$$Single$$51614AC(patternInput$$5[1], xml$$3, tpsL$$1, null, remarks$$2);
        }

      case 2:
        {
          const uc = (0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo$$9);
          const rty = (0, _TastOps.generalizedTyconRef)((0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo$$9));
          const recd = (0, _tast.UnionCase$$get_RecdFields)(uc);
          const layout$$3 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoUnionCase)())), (0, _layout.op_HatHat)((0, _NicePrint.layoutTyconRef)(denv$$5, (0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo$$9)), (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(".")), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.mkNav)((0, _tast.UnionCase$$get_DefinitionRange)(uc), (0, _layout.TaggedTextOps$$$tagUnionCase)((0, _PrettyNaming.DecompileOpName)((0, _ast.Ident$$get_idText)(uc.Id))))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _layout.op_HatHat)(recd.tail == null ? _layout.emptyL : (0, _layout.op_HatHat)((0, _NicePrint.layoutUnionCases)(denv$$5, recd), _layout.WordL$$$arrow), (0, _NicePrint.layoutType)(denv$$5, rty)))))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$3, xml$$3);
        }

      case 3:
        {
          const items$$4 = (0, _PrettyNaming.ActivePatternInfo$$get_ActiveTags)(apinfo$$1);
          const layout$$4 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoActivePatternResult)())), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.mkNav)((0, _PrettyNaming.ActivePatternInfo$$get_Range)(apinfo$$1), (0, _layout.TaggedTextOps$$$tagActivePatternResult)((0, _List.item)(idx$$2, items$$4)))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _NicePrint.layoutType)(denv$$5, ty$$11))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$4, xml$$3);
        }

      case 4:
        {
          const v$$5 = (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$4);
          const tau$$1 = (0, _tast.ValRef$$get_TauType)(v$$5);
          const patternInput$$6 = (0, _TastOps.PrettyTypes$$$PrettifyInstAndType)(denv$$5.g, item$$20.TyparInst, tau$$1);
          const ptau = patternInput$$6[0][1];
          const prettyTyparInst$$3 = patternInput$$6[0][0];
          const remarks$$3 = SymbolHelpers$$$OutputFullName(isListItem$$1, SymbolHelpers$$$pubpathOfValRef, _TastOps.fullDisplayTextOfValRefAsLayout, v$$5);
          const layout$$5 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoActiveRecognizer)())), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.mkNav)((0, _tast.ValRef$$get_DefinitionRange)(v$$5), (0, _layout.TaggedTextOps$$$tagActivePatternCase)((0, _TastOps.ActivePatternElemRef$002Eget_Name)(apref$$4)))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _NicePrint.layoutType)(denv$$5, ptau))));
          const tpsL$$2 = SymbolHelpers$$$FormatTyparMapping(denv$$5, prettyTyparInst$$3);
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$5, xml$$3, tpsL$$2, null, remarks$$3);
        }

      case 5:
        {
          const layout$$6 = (0, _NicePrint.layoutExnDef)(denv$$5, (0, _tast.EntityRef$$get_Deref)(ecref$$2));
          const remarks$$4 = SymbolHelpers$$$OutputFullName(isListItem$$1, SymbolHelpers$$$pubpathOfTyconRef, _TastOps.fullDisplayTextOfExnRefAsLayout, ecref$$2);
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$6, xml$$3, null, null, remarks$$4);
        }

      case 6:
        {
          const rfield = (0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$7);
          const patternInput$$7 = (0, _TastOps.PrettyTypes$$$PrettifyType)(g$$25, (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$7));
          const layout$$7 = (0, _layout.op_HatHat)((0, _NicePrint.layoutTyconRef)(denv$$5, (0, _infos.RecdFieldInfo$$get_TyconRef)(rfinfo$$7)), (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.mkNav)((0, _tast.RecdField$$get_DefinitionRange)(rfield), (0, _layout.TaggedTextOps$$$tagRecordField)((0, _PrettyNaming.DecompileOpName)((0, _tast.RecdField$$get_Name)(rfield))))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _layout.op_HatHat)((0, _NicePrint.layoutType)(denv$$5, patternInput$$7[0]), (matchValue$$22 = (0, _infos.RecdFieldInfo$$get_LiteralValue)(rfinfo$$7), matchValue$$22 != null ? (lit = matchValue$$22, (() => {
            try {
              return (0, _layout.op_HatHat)(_layout.WordL$$$equals, (0, _NicePrint.layoutConst)(denv$$5.g, patternInput$$7[0], lit));
            } catch (matchValue$$23) {
              return _layout.emptyL;
            }
          })()) : _layout.emptyL))))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$7, xml$$3);
        }

      case 7:
        {
          const layout$$8 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoPatternVariable)())), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagUnknownEntity)((0, _ast.Ident$$get_idText)(id$$6))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$8, xml$$3);
        }

      case 8:
        {
          const layout$$9 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoField)())), (0, _layout.op_HatHat)((0, _NicePrint.layoutILTypeRef)(denv$$5, (0, _infos.ILFieldInfo$$get_ILTypeRef)(finfo$$4)), (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagField)((0, _infos.ILFieldInfo$$get_FieldName)(finfo$$4))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _layout.op_HatHat)((0, _NicePrint.layoutType)(denv$$5, (0, _infos.ILFieldInfo$$FieldType$$73F6E43C)(finfo$$4, amap$$2, m$$17)), (matchValue$$24 = (0, _infos.ILFieldInfo$$get_LiteralValue)(finfo$$4), matchValue$$24 != null ? (v$$7 = matchValue$$24, (0, _layout.op_HatHat)(_layout.WordL$$$equals, (() => {
            try {
              return (0, _NicePrint.layoutConst)(denv$$5.g, (0, _infos.ILFieldInfo$$FieldType$$73F6E43C)(finfo$$4, (0, _InfoReader.InfoReader$$get_amap)(infoReader$$12), m$$17), (0, _TypeChecker.TcFieldInit)(m$$17, v$$7));
            } catch (matchValue$$25) {
              return _layout.emptyL;
            }
          })())) : _layout.emptyL)))))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$9, xml$$3);
        }

      case 9:
        {
          const rty$$1 = (0, _InfoReader.PropTypOfEventInfo)(infoReader$$12, m$$17, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), einfo$$7);
          const patternInput$$8 = (0, _TastOps.PrettyTypes$$$PrettifyType)(g$$25, rty$$1);
          const layout$$10 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoEvent)())), (0, _layout.op_HatHat)((0, _NicePrint.layoutTyconRef)(denv$$5, (0, _infos.EventInfo$$get_ApparentEnclosingTyconRef)(einfo$$7)), (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagEvent)((0, _infos.EventInfo$$get_EventName)(einfo$$7))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _NicePrint.layoutType)(denv$$5, patternInput$$8[0]))))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$10, xml$$3);
        }

      case 10:
        {
          const layout$$11 = (0, _NicePrint.prettyLayoutOfPropInfoFreeStyle)(g$$25, amap$$2, m$$17, denv$$5, pinfo$$6);
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$11, xml$$3);
        }

      case 11:
        {
          const layout$$12 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoCustomOperation)())), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _layout.op_HatHat)((matchValue$$26 = usageText(), matchValue$$26 == null ? (argTys = (0, _List.map)(function mapping$$7(_arg1$$6) {
            const ty$$13 = _arg1$$6.fields[1];
            return ty$$13;
          }, SymbolHelpers$$$ParamNameAndTypesOfUnaryCustomOperation(g$$25, minfo$$22)), (patternInput$$9 = (0, _TastOps.PrettyTypes$$$PrettifyTypes)(g$$25, argTys), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)(customOpName$$1)), (0, _layout.sepListL)(_layout.SepL$$$space, (0, _List.map)(function (ty$$14) {
            return (0, _layout.op_HatHat)(_layout.LeftL$$$leftParen, (0, _layout.op_HatHat)((0, _NicePrint.layoutType)(denv$$5, ty$$14), _layout.SepL$$$rightParen));
          }, patternInput$$9[0]))))) : (t = matchValue$$26, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(t)))), (0, _layout.op_HatHat)(_layout.SepL$$$lineBreak, (0, _layout.op_HatHat)(_layout.SepL$$$lineBreak, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoCallsWord)())), (0, _layout.op_HatHat)((0, _NicePrint.layoutTyconRef)(denv$$5, (0, _infos.MethInfo$$get_ApparentEnclosingTyconRef)(minfo$$22)), (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)((0, _infos.MethInfo$$get_DisplayName)(minfo$$22)))))))))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$12, xml$$3);
        }

      case 12:
        {
          return SymbolHelpers$$$FormatOverloadsToList(infoReader$$12, m$$17, denv$$5, item$$20, minfos$$3);
        }

      case 13:
        {
          const patternInput$$10 = (0, _TastOps.PrettyTypes$$$PrettifyType)(g$$25, ty$$15);
          const layout$$13 = (0, _NicePrint.layoutTyconRef)(denv$$5, (0, _TastOps.tcrefOfAppTy)(g$$25, patternInput$$10[0]));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$13, xml$$3);
        }

      case 14:
        {
          const patternInput$$11 = (0, _TastOps.PrettyTypes$$$PrettifyType)(g$$25, delty);
          const fty = (0, _InfoReader.GetSigOfFunctionForDelegate)(infoReader$$12, patternInput$$11[0], m$$17, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere")).fields[3];
          const layout$$14 = (0, _layout.op_HatHat)((0, _NicePrint.layoutTyconRef)(denv$$5, (0, _TastOps.tcrefOfAppTy)(g$$25, patternInput$$11[0])), (0, _layout.op_HatHat)(_layout.LeftL$$$leftParen, (0, _layout.op_HatHat)((0, _NicePrint.layoutType)(denv$$5, fty), _layout.RightL$$$rightParen)));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$14, xml$$3);
        }

      case 15:
        {
          const denv$$6 = new _TastOps.DisplayEnv(denv$$5.includeStaticParametersInTypeNames, denv$$5.openTopPathsSorted, denv$$5.openTopPathsRaw, true, denv$$5.suppressNestedTypes, denv$$5.maxMembers, denv$$5.showObsoleteMembers, denv$$5.showHiddenMembers, denv$$5.showTyparBinding, denv$$5.showImperativeTyparAnnotations, denv$$5.suppressInlineKeyword, denv$$5.suppressMutableKeyword, denv$$5.showMemberContainers, denv$$5.shortConstraints, denv$$5.useColonForReturnType, denv$$5.showAttributes, denv$$5.showOverrides, denv$$5.showConstraintTyparAnnotations, denv$$5.abbreviateAdditionalConstraints, denv$$5.showTyparDefaultConstraints, denv$$5.g, denv$$5.contextAccessibility, denv$$5.generatedValueLayout);
          const layout$$15 = (0, _NicePrint.layoutTycon)(denv$$6, infoReader$$12, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), m$$17, (0, _tast.EntityRef$$get_Deref)(tcref$$27));
          const remarks$$5 = SymbolHelpers$$$OutputFullName(isListItem$$1, SymbolHelpers$$$pubpathOfTyconRef, _TastOps.fullDisplayTextOfTyconRefAsLayout, tcref$$27);
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$15, xml$$3, null, null, remarks$$5);
        }

      case 16:
        {
          const modrefs$$6 = SymbolHelpers$$$RemoveDuplicateModuleRefs(modrefs$$4);
          const definiteNamespace$$2 = (0, _List.forAll)(function predicate$$11(modref$$7) {
            return (0, _tast.EntityRef$$get_IsNamespace)(modref$$7);
          }, modrefs$$6);
          const kind = definiteNamespace$$2 ? (0, _FSComp.SR$$$typeInfoNamespace)() : (0, _List.forAll)(function predicate$$12(modref$$8) {
            return (0, _tast.EntityRef$$get_IsModule)(modref$$8);
          }, modrefs$$6) ? (0, _FSComp.SR$$$typeInfoModule)() : (0, _FSComp.SR$$$typeInfoNamespaceOrModule)();
          const layout$$16 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)(kind)), (0, _layout.wordL)((0, _layout.mkNav)((0, _tast.EntityRef$$get_DefinitionRange)(modref$$6), definiteNamespace$$2 ? (0, _layout.TaggedTextOps$$$tagNamespace)((0, _TastOps.fullDisplayTextOfModRef)(modref$$6)) : (0, _layout.TaggedTextOps$$$tagModule)((0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(modref$$6)))));

          if (!definiteNamespace$$2) {
            const namesToAdd = (0, _List.ofSeq)((0, _Seq.mapIndexed)(function mapping$$8(i, x$$30) {
              return [i, x$$30];
            }, (0, _Seq.fold)(function folder$$2(st$$2, modref$$9) {
              const matchValue$$27 = (0, _TastOps.fullDisplayTextOfParentOfModRef)(modref$$9);

              if (matchValue$$27 != null) {
                const txt = matchValue$$27;
                return (0, _Types.L)(txt, st$$2);
              } else {
                return st$$2;
              }
            }, (0, _Types.L)(), modrefs$$6)));
            const layout$$17 = (0, _layout.op_HatHat)(layout$$16, !(namesToAdd.tail == null) ? (0, _layout.op_HatHat)(_layout.SepL$$$lineBreak, (0, _List.fold)(function (s$$3, tupledArg$$5) {
              return (0, _layout.op_HatHat)(s$$3, (0, _layout.op_HatHat)(_layout.SepL$$$lineBreak, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((tupledArg$$5[0] === 0 ? _FSComp.SR$$$typeInfoFromFirst$$Z721C83C5 : _FSComp.SR$$$typeInfoFromNext$$Z721C83C5)(tupledArg$$5[1])))));
            }, _layout.emptyL, namesToAdd)) : _layout.emptyL);
            return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$17, xml$$3);
          } else {
            return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$16, xml$$3);
          }
        }

      case 17:
        {
          const patternInput$$13 = (0, _TastOps.PrettyTypes$$$PrettifyType)(g$$25, argTy);
          const layout$$18 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoArgument)())), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(id$$7))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, (0, _NicePrint.layoutType)(denv$$5, patternInput$$13[0]))));
          return FSharpToolTipElement$00601$$$Single$$51614AC(layout$$18, xml$$3, null, (0, _ast.Ident$$get_idText)(id$$7));
        }

      case 18:
        {
          isListItem$$1 = isListItem$$1;
          infoReader$$12 = infoReader$$12;
          m$$17 = m$$17;
          denv$$4 = denv$$5;
          item$$20 = (0, _NameResolution.ItemWithNoInst)(item$$21);
          continue SymbolHelpers$$$FormatItemDescriptionToToolTipElement;
        }

      case 19:
        {
          return new FSharpToolTipElement$00601(0, "None");
        }
    }
  }
}

function SymbolHelpers$$$GetF1Keyword(g$$26, item$$22) {
  var copyOfStruct;

  SymbolHelpers$$$GetF1Keyword: while (true) {
    const getKeywordForMethInfo = function getKeywordForMethInfo(minfo$$23) {
      switch (minfo$$23.tag) {
        case 1:
          {
            const minfo$$24 = minfo$$23.fields[1];
            const typeString = (0, _TastOps.ticksAndArgCountTextOfTyconRef)((0, _infos.ILMethInfo$$get_DeclaringTyconRef)(minfo$$24));
            let paramString;
            const nGenericParams = (0, _List.length)((0, _il.ILMethodDef$$get_GenericParams)((0, _infos.ILMethInfo$$get_RawMetadata)(minfo$$24))) | 0;
            paramString = nGenericParams > 0 ? "``" + (0, _Util.int32ToString)(nGenericParams) : "";
            return (0, _String.toText)((0, _String.printf)("%s.%s%s"))(typeString)((0, _il.ILMethodDef$$get_Name)((0, _infos.ILMethInfo$$get_RawMetadata)(minfo$$24)))(paramString);
          }

        case 2:
          {
            return null;
          }

        default:
          {
            const vref$$22 = minfo$$23.fields[2];
            const matchValue$$28 = (0, _tast.ValRef$$get_DeclaringEntity)(vref$$22);

            if (matchValue$$28.tag === 1) {
              return null;
            } else {
              const tcref$$28 = matchValue$$28.fields[0];
              return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$28) + "." + (0, _tast.ValRef$$get_CompiledName)(vref$$22);
            }
          }
      }
    };

    var $target$$41, vref$$23, apref$$5, ucinfo$$10, rfi, finfo$$5, tcref$$29;

    if (item$$22.tag === 0) {
      $target$$41 = 0;
      vref$$23 = item$$22.fields[0];
    } else if (item$$22.tag === 16) {
      $target$$41 = 0;
      vref$$23 = item$$22.fields[1];
    } else if (item$$22.tag === 3) {
      $target$$41 = 1;
      apref$$5 = item$$22.fields[0];
    } else if (item$$22.tag === 1) {
      $target$$41 = 2;
      ucinfo$$10 = item$$22.fields[0];
    } else if (item$$22.tag === 5) {
      $target$$41 = 3;
      rfi = item$$22.fields[0];
    } else if (item$$22.tag === 7) {
      $target$$41 = 4;
      finfo$$5 = item$$22.fields[0];
    } else if (item$$22.tag === 14) {
      if (item$$22.fields[1].tail != null) {
        const activePatternResult55619 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$26, item$$22.fields[1].head);

        if (activePatternResult55619 != null) {
          $target$$41 = 5;
          tcref$$29 = activePatternResult55619[0];
        } else {
          $target$$41 = 6;
        }
      } else {
        $target$$41 = 6;
      }
    } else if (item$$22.tag === 13) {
      const activePatternResult55621 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$26, item$$22.fields[0]);

      if (activePatternResult55621 != null) {
        $target$$41 = 5;
        tcref$$29 = activePatternResult55621[0];
      } else {
        $target$$41 = 6;
      }
    } else if (item$$22.tag === 12) {
      const activePatternResult55623 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$26, item$$22.fields[0]);

      if (activePatternResult55623 != null) {
        $target$$41 = 5;
        tcref$$29 = activePatternResult55623[0];
      } else {
        $target$$41 = 6;
      }
    } else if (item$$22.tag === 22) {
      if (item$$22.fields[0].tail != null) {
        $target$$41 = 5;
        tcref$$29 = item$$22.fields[0].head;
      } else {
        $target$$41 = 6;
      }
    } else if (item$$22.tag === 4) {
      $target$$41 = 5;
      tcref$$29 = item$$22.fields[0];
    } else {
      $target$$41 = 6;
    }

    switch ($target$$41) {
      case 0:
        {
          const v$$8 = (0, _tast.ValRef$$get_Deref)(vref$$23);

          if ((0, _tast.Val$$get_IsModuleBinding)(v$$8) ? (0, _tast.Val$$get_HasDeclaringEntity)(v$$8) : false) {
            const tyconRef = (0, _tast.Val$$get_TopValDeclaringEntity)(v$$8);
            let paramsString;
            const matchValue$$29 = (0, _tast.Val$$get_Typars)(v$$8);

            if (matchValue$$29.tail == null) {
              paramsString = "";
            } else {
              const l$$2 = matchValue$$29;
              paramsString = "``" + (copyOfStruct = (0, _List.length)(l$$2) | 0, (0, _Util.int32ToString)(copyOfStruct));
            }

            return (0, _String.toText)((0, _String.printf)("%s.%s%s"))((0, _TastOps.ticksAndArgCountTextOfTyconRef)(tyconRef))((0, _tast.Val$$get_CompiledName)(v$$8))(paramsString);
          } else {
            return null;
          }
        }

      case 1:
        {
          g$$26 = g$$26;
          item$$22 = new _NameResolution.Item(0, "Value", (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$5));
          continue SymbolHelpers$$$GetF1Keyword;
        }

      case 2:
        {
          return (0, _TastOps.ticksAndArgCountTextOfTyconRef)((0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo$$10)) + "." + (0, _infos.UnionCaseInfo$$get_Name)(ucinfo$$10);
        }

      case 3:
        {
          return (0, _TastOps.ticksAndArgCountTextOfTyconRef)((0, _infos.RecdFieldInfo$$get_TyconRef)(rfi)) + "." + (0, _infos.RecdFieldInfo$$get_Name)(rfi);
        }

      case 4:
        {
          const tinfo = finfo$$5.fields[0];
          const fdef = finfo$$5.fields[1];
          return (0, _TastOps.ticksAndArgCountTextOfTyconRef)((0, _infos.ILTypeInfo$$get_TyconRefOfRawMetadata)(tinfo)) + "." + (0, _il.ILFieldDef$$get_Name)(fdef);
        }

      case 5:
        {
          const activePatternResult55610 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$26, (0, _TastOps.generalizedTyconRef)(tcref$$29));

          if (activePatternResult55610 != null) {
            return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(activePatternResult55610[0]);
          } else {
            return null;
          }
        }

      case 6:
        {
          var $target$$42, modrefs$$7, pinfo$$7, einfo$$8, minfos$$4, minfo$$26, minfo$$27, minfo$$28, propOrField;

          if (item$$22.tag === 14) {
            $target$$42 = 0;
          } else if (item$$22.tag === 13) {
            $target$$42 = 0;
          } else if (item$$22.tag === 12) {
            $target$$42 = 0;
          } else if (item$$22.tag === 22) {
            if (item$$22.fields[0].tail == null) {
              $target$$42 = 0;
            } else {
              $target$$42 = 11;
            }
          } else if (item$$22.tag === 18) {
            $target$$42 = 1;
            modrefs$$7 = item$$22.fields[0];
          } else if (item$$22.tag === 9) {
            if (item$$22.fields[1].tail == null) {
              $target$$42 = 3;
            } else {
              $target$$42 = 2;
              pinfo$$7 = item$$22.fields[1].head;
            }
          } else if (item$$22.tag === 8) {
            $target$$42 = 4;
            einfo$$8 = item$$22.fields[0];
          } else if (item$$22.tag === 11) {
            $target$$42 = 5;
            minfos$$4 = item$$22.fields[1];
          } else if (item$$22.tag === 15) {
            if (item$$22.fields[2] == null) {
              $target$$42 = 10;
            } else {
              $target$$42 = 6;
              minfo$$26 = item$$22.fields[2];
            }
          } else if (item$$22.tag === 10) {
            if (item$$22.fields[2] != null) {
              $target$$42 = 7;
              minfo$$27 = item$$22.fields[2];
            } else if (item$$22.fields[1].tail == null) {
              $target$$42 = 10;
            } else {
              $target$$42 = 8;
              minfo$$28 = item$$22.fields[1].head;
            }
          } else if (item$$22.tag === 21) {
            $target$$42 = 9;
            propOrField = item$$22.fields[1];
          } else if (item$$22.tag === 6) {
            $target$$42 = 10;
          } else if (item$$22.tag === 20) {
            $target$$42 = 10;
          } else if (item$$22.tag === 17) {
            $target$$42 = 10;
          } else if (item$$22.tag === 19) {
            $target$$42 = 10;
          } else if (item$$22.tag === 2) {
            $target$$42 = 10;
          } else {
            $target$$42 = 11;
          }

          switch ($target$$42) {
            case 0:
              {
                return null;
              }

            case 1:
              {
                if (modrefs$$7.tail == null) {
                  return null;
                } else {
                  const modref$$10 = modrefs$$7.head;
                  const matchValue$$31 = (0, _tast.Entity$$get_TypeReprInfo)((0, _tast.EntityRef$$get_Deref)(modref$$10));
                  return (0, _il.ILTypeRef$$get_FullName)((0, _tast.Entity$$get_CompiledRepresentationForNamedType)((0, _tast.EntityRef$$get_Deref)(modref$$10)));
                }
              }

            case 2:
              {
                var $target$$43, vref$$24, pdef$$1, tinfo$$1;

                if (pinfo$$7.tag === 1) {
                  $target$$43 = 1;
                  pdef$$1 = pinfo$$7.fields[0].fields[1];
                  tinfo$$1 = pinfo$$7.fields[0].fields[0];
                } else if (pinfo$$7.fields[2] != null) {
                  $target$$43 = 0;
                  vref$$24 = pinfo$$7.fields[2];
                } else if (pinfo$$7.fields[3] != null) {
                  $target$$43 = 0;
                  vref$$24 = pinfo$$7.fields[3];
                } else {
                  $target$$43 = 2;
                }

                switch ($target$$43) {
                  case 0:
                    {
                      const matchValue$$32 = (0, _tast.ValRef$$get_DeclaringEntity)(vref$$24);

                      if (matchValue$$32.tag === 1) {
                        return null;
                      } else {
                        const tcref$$31 = matchValue$$32.fields[0];
                        return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$31) + "." + (0, _tast.ValRef$$get_PropertyName)(vref$$24);
                      }
                    }

                  case 1:
                    {
                      const tcref$$32 = (0, _infos.ILTypeInfo$$get_TyconRefOfRawMetadata)(tinfo$$1);
                      return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$32) + "." + (0, _il.ILPropertyDef$$get_Name)(pdef$$1);
                    }

                  case 2:
                    {
                      return null;
                    }
                }
              }

            case 3:
              {
                return null;
              }

            case 4:
              {
                if (einfo$$8.tag === 0) {
                  const pinfo$$8 = einfo$$8.fields[1];
                  const matchValue$$33 = (0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo$$8);

                  if (matchValue$$33 == null) {
                    return null;
                  } else {
                    const vref$$25 = matchValue$$33;
                    const matchValue$$34 = (0, _tast.ValRef$$get_DeclaringEntity)(vref$$25);

                    if (matchValue$$34.tag === 1) {
                      return null;
                    } else {
                      const tcref$$34 = matchValue$$34.fields[0];
                      return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$34) + "." + (0, _tast.ValRef$$get_PropertyName)(vref$$25);
                    }
                  }
                } else {
                  const tcref$$33 = (0, _infos.EventInfo$$get_DeclaringTyconRef)(einfo$$8);
                  return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$33) + "." + (0, _infos.EventInfo$$get_EventName)(einfo$$8);
                }
              }

            case 5:
              {
                if (minfos$$4.tail != null) {
                  if (minfos$$4.head.tag === 0) {
                    const matchValue$$35 = (0, _tast.ValRef$$get_DeclaringEntity)(minfos$$4.head.fields[2]);

                    if (matchValue$$35.tag === 1) {
                      return null;
                    } else {
                      const tcref$$35 = matchValue$$35.fields[0];
                      return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$35) + ".#ctor";
                    }
                  } else {
                    const tcref$$36 = (0, _infos.MethInfo$$get_DeclaringTyconRef)(minfos$$4.head);
                    return (0, _TastOps.ticksAndArgCountTextOfTyconRef)(tcref$$36) + ".#ctor";
                  }
                } else {
                  return null;
                }
              }

            case 6:
              {
                return getKeywordForMethInfo(minfo$$26);
              }

            case 7:
              {
                return getKeywordForMethInfo(minfo$$27);
              }

            case 8:
              {
                return getKeywordForMethInfo(minfo$$28);
              }

            case 9:
              {
                g$$26 = g$$26;
                item$$22 = propOrField;
                continue SymbolHelpers$$$GetF1Keyword;
              }

            case 10:
              {
                return null;
              }

            case 11:
              {
                throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/symbols/SymbolHelpers.fs", 1312, 14);
              }
          }
        }
    }
  }
}

function SymbolHelpers$$$FormatStructuredDescriptionOfItem(isListItem$$2, infoReader$$13, m$$18, denv$$7, item$$23) {
  return ErrorScope$$$Protect(m$$18, function () {
    return SymbolHelpers$$$FormatItemDescriptionToToolTipElement(isListItem$$2, infoReader$$13, m$$18, denv$$7, item$$23);
  }, function (err$$2) {
    return new FSharpToolTipElement$00601(2, "CompositionError", err$$2);
  });
}

function SymbolHelpers$$$FlattenItems(g$$27, _m, item$$24) {
  var $target$$44;

  switch (item$$24.tag) {
    case 10:
      $target$$44 = 0;
      break;

    case 11:
      $target$$44 = 1;
      break;

    case 12:
    case 13:
      $target$$44 = 2;
      break;

    case 6:
    case 7:
      $target$$44 = 3;
      break;

    case 8:
      $target$$44 = 4;
      break;

    case 5:
      $target$$44 = 5;
      break;

    case 0:
      $target$$44 = 6;
      break;

    case 1:
      $target$$44 = 7;
      break;

    case 4:
      $target$$44 = 8;
      break;

    case 9:
      $target$$44 = 9;
      break;

    case 15:
      $target$$44 = 10;
      break;

    case 17:
      $target$$44 = 11;
      break;

    case 16:
      $target$$44 = 12;
      break;

    default:
      $target$$44 = 13;
  }

  switch ($target$$44) {
    case 0:
      {
        const orig = item$$24.fields[2];
        const nm$$1 = item$$24.fields[0];
        const minfos$$5 = item$$24.fields[1];
        return (0, _List.map)(function mapping$$9(minfo$$29) {
          return new _NameResolution.Item(10, "MethodGroup", nm$$1, (0, _Types.L)(minfo$$29, (0, _Types.L)()), orig);
        }, minfos$$5);
      }

    case 1:
      {
        const nm$$2 = item$$24.fields[0];
        const cinfos = item$$24.fields[1];
        return (0, _List.map)(function mapping$$10(minfo$$30) {
          return new _NameResolution.Item(11, "CtorGroup", nm$$2, (0, _Types.L)(minfo$$30, (0, _Types.L)()));
        }, cinfos);
      }

    case 2:
      {
        return (0, _Types.L)(item$$24, (0, _Types.L)());
      }

    case 3:
      {
        return (0, _Types.L)();
      }

    case 4:
      {
        return (0, _Types.L)();
      }

    case 5:
      {
        const rfinfo$$8 = item$$24.fields[0];

        if (SymbolHelpers$$$isFunction(g$$27, (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$8))) {
          return (0, _Types.L)(item$$24, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 6:
      {
        const v$$9 = item$$24.fields[0];

        if (SymbolHelpers$$$isFunction(g$$27, (0, _tast.ValRef$$get_Type)(v$$9))) {
          return (0, _Types.L)(item$$24, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 7:
      {
        const ucr = item$$24.fields[0];

        if (!(0, _tast.UnionCase$$get_IsNullary)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucr))) {
          return (0, _Types.L)(item$$24, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 8:
      {
        const ecr = item$$24.fields[0];

        if ((0, _TastOps.recdFieldsOfExnDefRef)(ecr).tail == null) {
          return (0, _Types.L)();
        } else {
          return (0, _Types.L)(item$$24, (0, _Types.L)());
        }
      }

    case 9:
      {
        const pinfos$$3 = item$$24.fields[1];
        const pinfo$$9 = (0, _List.head)(pinfos$$3);

        if ((0, _infos.PropInfo$$get_IsIndexer)(pinfo$$9)) {
          return (0, _Types.L)(item$$24, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 10:
      {
        const _name$$1 = item$$24.fields[0];
        const _minfo = item$$24.fields[2];
        const _helpText = item$$24.fields[1];
        return (0, _Types.L)(item$$24, (0, _Types.L)());
      }

    case 11:
      {
        return (0, _Types.L)();
      }

    case 12:
      {
        return (0, _Types.L)();
      }

    case 13:
      {
        return (0, _Types.L)();
      }
  }
}