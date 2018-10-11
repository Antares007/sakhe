"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOriginalException = findOriginalException;
exports.NoSuggestions = NoSuggestions;
exports.$007CStopProcessing$007C_$007C = $007CStopProcessing$007C_$007C;
exports.StopProcessing = StopProcessing;
exports.AttachRange = AttachRange;
exports.PhasedDiagnostic$$$Create$$A7B7EC0 = PhasedDiagnostic$$$Create$$A7B7EC0;
exports.PhasedDiagnostic$$DebugDisplay = PhasedDiagnostic$$DebugDisplay;
exports.PhasedDiagnostic$$Subcategory = PhasedDiagnostic$$Subcategory;
exports.PhasedDiagnostic$$$IsSubcategoryOfCompile$$Z721C83C5 = PhasedDiagnostic$$$IsSubcategoryOfCompile$$Z721C83C5;
exports.PhasedDiagnostic$$IsPhaseInCompile = PhasedDiagnostic$$IsPhaseInCompile;
exports.ErrorLogger$$$$002Ector$$Z721C83C5 = ErrorLogger$$$$002Ector$$Z721C83C5;
exports.ErrorLogger$$DebugDisplay = ErrorLogger$$DebugDisplay;
exports.CapturingErrorLogger$$$$002Ector$$Z721C83C5 = CapturingErrorLogger$$$$002Ector$$Z721C83C5;
exports.CapturingErrorLogger$$get_Diagnostics = CapturingErrorLogger$$get_Diagnostics;
exports.CapturingErrorLogger$$CommitDelayedDiagnostics$$7616EECC = CapturingErrorLogger$$CommitDelayedDiagnostics$$7616EECC;
exports.CompileThreadStatic$$$get_BuildPhaseUnchecked = CompileThreadStatic$$$get_BuildPhaseUnchecked;
exports.CompileThreadStatic$$$get_BuildPhase = CompileThreadStatic$$$get_BuildPhase;
exports.CompileThreadStatic$$$set_BuildPhase$$7C3E5899 = CompileThreadStatic$$$set_BuildPhase$$7C3E5899;
exports.CompileThreadStatic$$$get_ErrorLogger = CompileThreadStatic$$$get_ErrorLogger;
exports.CompileThreadStatic$$$set_ErrorLogger$$7616EECC = CompileThreadStatic$$$set_ErrorLogger$$7616EECC;
exports.ErrorLoggerExtensions$$$PreserveStackTrace = ErrorLoggerExtensions$$$PreserveStackTrace;
exports.ErrorLoggerExtensions$$$ReraiseIfWatsonable = ErrorLoggerExtensions$$$ReraiseIfWatsonable;
exports.ErrorLogger$002EErrorR$$229D3F39 = ErrorLogger$002EErrorR$$229D3F39;
exports.ErrorLogger$002EWarning$$229D3F39 = ErrorLogger$002EWarning$$229D3F39;
exports.ErrorLogger$002EError$$229D3F39 = ErrorLogger$002EError$$229D3F39;
exports.ErrorLogger$002ESimulateError$$Z6A1F9494 = ErrorLogger$002ESimulateError$$Z6A1F9494;
exports.ErrorLogger$002EErrorRecovery = ErrorLogger$002EErrorRecovery;
exports.ErrorLogger$002EStopProcessingRecovery = ErrorLogger$002EStopProcessingRecovery;
exports.ErrorLogger$002EErrorRecoveryNoRange$$229D3F39 = ErrorLogger$002EErrorRecoveryNoRange$$229D3F39;
exports.PushThreadBuildPhaseUntilUnwind = PushThreadBuildPhaseUntilUnwind;
exports.PushErrorLoggerPhaseUntilUnwind = PushErrorLoggerPhaseUntilUnwind;
exports.SetThreadBuildPhaseNoUnwind = SetThreadBuildPhaseNoUnwind;
exports.SetThreadErrorLoggerNoUnwind = SetThreadErrorLoggerNoUnwind;
exports.errorR = errorR;
exports.warning = warning;
exports.error = error;
exports.simulateError = simulateError;
exports.diagnosticSink = diagnosticSink;
exports.errorSink = errorSink;
exports.warnSink = warnSink;
exports.errorRecovery = errorRecovery;
exports.stopProcessingRecovery = stopProcessingRecovery;
exports.errorRecoveryNoRange = errorRecoveryNoRange;
exports.report = report;
exports.deprecatedWithError = deprecatedWithError;
exports.libraryOnlyError = libraryOnlyError;
exports.libraryOnlyWarning = libraryOnlyWarning;
exports.deprecatedOperator = deprecatedOperator;
exports.mlCompatWarning = mlCompatWarning;
exports.suppressErrorReporting = suppressErrorReporting;
exports.conditionallySuppressErrorReporting = conditionallySuppressErrorReporting;
exports.ReportWarnings = ReportWarnings;
exports.CommitOperationResult = CommitOperationResult;
exports.RaiseOperationResult = RaiseOperationResult;
exports.ErrorD = ErrorD;
exports.WarnD = WarnD;
exports.ResultD = ResultD;
exports.CheckNoErrorsAndGetWarnings = CheckNoErrorsAndGetWarnings;
exports.op_PlusPlus = op_PlusPlus;
exports.IterateD = IterateD;
exports.WhileD = WhileD;
exports.MapD = MapD;
exports.TrackErrorsBuilder$$$$002Ector = TrackErrorsBuilder$$$$002Ector;
exports.TrackErrorsBuilder$$Bind$$1B0356D3 = TrackErrorsBuilder$$Bind$$1B0356D3;
exports.TrackErrorsBuilder$$Return$$1505 = TrackErrorsBuilder$$Return$$1505;
exports.TrackErrorsBuilder$$ReturnFrom$$1505 = TrackErrorsBuilder$$ReturnFrom$$1505;
exports.TrackErrorsBuilder$$For$$Z3A8746F8 = TrackErrorsBuilder$$For$$Z3A8746F8;
exports.TrackErrorsBuilder$$Combine$$1B0356D3 = TrackErrorsBuilder$$Combine$$1B0356D3;
exports.TrackErrorsBuilder$$While$$Z5A4CE48 = TrackErrorsBuilder$$While$$Z5A4CE48;
exports.TrackErrorsBuilder$$Zero = TrackErrorsBuilder$$Zero;
exports.TrackErrorsBuilder$$Delay$$FCFD9EF = TrackErrorsBuilder$$Delay$$FCFD9EF;
exports.TrackErrorsBuilder$$Run$$FCFD9EF = TrackErrorsBuilder$$Run$$FCFD9EF;
exports.OptionD = OptionD;
exports.IterateIdxD = IterateIdxD;
exports.Iterate2D = Iterate2D;
exports.TryD = TryD;
exports.RepeatWhileD = RepeatWhileD;
exports.AtLeastOneD = AtLeastOneD;
exports.NewlineifyErrorString = NewlineifyErrorString;
exports.NormalizeErrorString = NormalizeErrorString;
exports.FSharpErrorSeverityOptions$$$get_Default = FSharpErrorSeverityOptions$$$get_Default;
exports.FSharpErrorSeverityOptions = exports.stringThatIsAProxyForANewlineInFlatErrors = exports.trackErrors = exports.TrackErrorsBuilder = exports.CompleteD = exports.OperationResult$00601 = exports.reportLibraryOnlyFeatures = exports.CompileThreadStatic = exports.CapturingErrorLogger = exports.AssertFalseErrorLogger = exports.DiscardErrorsLogger = exports.ErrorLogger = exports.PhasedDiagnostic = exports.BuildPhase = exports.ErrorWithSuggestions = exports.UnresolvedPathReference = exports.UnresolvedPathReferenceNoRange = exports.UnresolvedReferenceError = exports.UnresolvedReferenceNoRange = exports.PossibleUnverifiableCode = exports.Experimental = exports.Deprecated = exports.LibraryUseOnly = exports.UserCompilerMessage = exports.InternalError = exports.Error$ = exports.NumberedError = exports.StopProcessingExn = exports.ReportedError = exports.WrappedError = exports.ErrorStyle = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _Option = require("../fable-core.2.0.3/Option");

var _range = require("./range");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _String = require("../fable-core.2.0.3/String");

var _List = require("../fable-core.2.0.3/List");

var _FSComp = require("../codegen/FSComp");

var _System = require("../fable-core.2.0.3/System.Text");

var _Char = require("../fable-core.2.0.3/Char");

const ErrorStyle = (0, _Types.declare)(function ErrorStyle(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ErrorStyle = ErrorStyle;
const WrappedError = (0, _Types.declare)(function WrappedError(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.WrappedError = WrappedError;
Object.defineProperty(WrappedError.prototype, "Message", {
  "get": function () {
    const this$ = this;
    const matchValue = this$;
    return matchValue instanceof WrappedError ? "WrappedError(" + matchValue.Data0.message + ")" : "WrappedError";
  }
});
const ReportedError = (0, _Types.declare)(function ReportedError(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.ReportedError = ReportedError;
Object.defineProperty(ReportedError.prototype, "Message", {
  "get": function () {
    const this$$$1 = this;
    const msg = "The exception has been reported. This internal exception should now be caught at an error recovery point on the stack.";
    const matchValue$$1 = this$$$1;
    var $target$$4, exn$$1;

    if (matchValue$$1 instanceof ReportedError) {
      if (matchValue$$1.Data0 != null) {
        $target$$4 = 0;
        exn$$1 = matchValue$$1.Data0;
      } else {
        $target$$4 = 1;
      }
    } else {
      $target$$4 = 1;
    }

    switch ($target$$4) {
      case 0:
        {
          return msg + " Original message: " + exn$$1.message + ")";
        }

      case 1:
        {
          return msg;
        }
    }
  }
});

function findOriginalException(err) {
  findOriginalException: while (true) {
    var $target$$5, err$$1, err$$2;

    if (err instanceof ReportedError) {
      if (err.Data0 != null) {
        $target$$5 = 0;
        err$$1 = err.Data0;
      } else if (err instanceof WrappedError) {
        $target$$5 = 1;
        err$$2 = err.Data0;
      } else {
        $target$$5 = 2;
      }
    } else if (err instanceof WrappedError) {
      $target$$5 = 1;
      err$$2 = err.Data0;
    } else {
      $target$$5 = 2;
    }

    switch ($target$$5) {
      case 0:
        {
          return err$$1;
        }

      case 1:
        {
          err = err$$2;
          continue findOriginalException;
        }

      case 2:
        {
          return err;
        }
    }
  }
}

function NoSuggestions() {
  return new Set([]);
}

const StopProcessingExn = (0, _Types.declare)(function StopProcessingExn(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.StopProcessingExn = StopProcessingExn;
Object.defineProperty(StopProcessingExn.prototype, "Message", {
  "get": function () {
    return "Processing of a script fragment has stopped because an exception has been raised";
  }
});

StopProcessingExn.prototype.toString = function () {
  const this$$$3 = this;
  const matchValue$$2 = this$$$3;
  var $target$$6, exn$$2;

  if (matchValue$$2 instanceof StopProcessingExn) {
    if (matchValue$$2.Data0 != null) {
      $target$$6 = 0;
      exn$$2 = matchValue$$2.Data0;
    } else {
      $target$$6 = 1;
    }
  } else {
    $target$$6 = 1;
  }

  switch ($target$$6) {
    case 0:
      {
        return "StopProcessingExn, originally (" + (0, _Util.toString)(exn$$2) + ")";
      }

    case 1:
      {
        return "StopProcessingExn";
      }
  }
};

function $007CStopProcessing$007C_$007C(exn$$3) {
  if (exn$$3 instanceof StopProcessingExn) {
    return (0, _Option.some)(null);
  } else {
    return null;
  }
}

function StopProcessing() {
  return new StopProcessingExn(null);
}

const NumberedError = (0, _Types.declare)(function NumberedError(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.NumberedError = NumberedError;
Object.defineProperty(NumberedError.prototype, "Message", {
  "get": function () {
    const this$$$4 = this;
    const matchValue$$3 = this$$$4;
    return matchValue$$3 instanceof NumberedError ? matchValue$$3.Data0[1] : "impossible";
  }
});
const Error$ = (0, _Types.declare)(function Error$(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.Error$ = Error$;
Object.defineProperty(Error$.prototype, "Message", {
  "get": function () {
    const this$$$5 = this;
    const matchValue$$4 = this$$$5;
    return matchValue$$4 instanceof Error$ ? matchValue$$4.Data0[1] : "impossible";
  }
});
const InternalError = (0, _Types.declare)(function InternalError(arg1, arg2) {
  this.msg = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.InternalError = InternalError;
Object.defineProperty(InternalError.prototype, "Message", {
  "get": function () {
    const this$$$6 = this;
    const matchValue$$5 = this$$$6;
    return matchValue$$5 instanceof InternalError ? matchValue$$5.msg + matchValue$$5.Data1.toString() : "impossible";
  }
});
const UserCompilerMessage = (0, _Types.declare)(function UserCompilerMessage(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2 | 0;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.UserCompilerMessage = UserCompilerMessage;
const LibraryUseOnly = (0, _Types.declare)(function LibraryUseOnly(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.LibraryUseOnly = LibraryUseOnly;
const Deprecated = (0, _Types.declare)(function Deprecated(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.Deprecated = Deprecated;
const Experimental = (0, _Types.declare)(function Experimental(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.Experimental = Experimental;
const PossibleUnverifiableCode = (0, _Types.declare)(function PossibleUnverifiableCode(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.PossibleUnverifiableCode = PossibleUnverifiableCode;
const UnresolvedReferenceNoRange = (0, _Types.declare)(function UnresolvedReferenceNoRange(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.UnresolvedReferenceNoRange = UnresolvedReferenceNoRange;
const UnresolvedReferenceError = (0, _Types.declare)(function UnresolvedReferenceError(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.UnresolvedReferenceError = UnresolvedReferenceError;
const UnresolvedPathReferenceNoRange = (0, _Types.declare)(function UnresolvedPathReferenceNoRange(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.UnresolvedPathReferenceNoRange = UnresolvedPathReferenceNoRange;
const UnresolvedPathReference = (0, _Types.declare)(function UnresolvedPathReference(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.UnresolvedPathReference = UnresolvedPathReference;
const ErrorWithSuggestions = (0, _Types.declare)(function ErrorWithSuggestions(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.ErrorWithSuggestions = ErrorWithSuggestions;
Object.defineProperty(ErrorWithSuggestions.prototype, "Message", {
  "get": function () {
    const this$$$7 = this;
    const matchValue$$6 = this$$$7;
    return matchValue$$6 instanceof ErrorWithSuggestions ? matchValue$$6.Data0[1] : "impossible";
  }
});

function AttachRange(m$$1, exn$$4) {
  if ((0, _Util.equals)(m$$1, _range.range0)) {
    return exn$$4;
  } else {
    if (exn$$4 instanceof UnresolvedReferenceNoRange) {
      return new UnresolvedReferenceError(exn$$4.Data0, m$$1);
    } else if (exn$$4 instanceof UnresolvedPathReferenceNoRange) {
      return new UnresolvedPathReference(exn$$4.Data0, exn$$4.Data1, m$$1);
    } else {
      const activePatternResult13050 = (0, _FSharp.Operators$$$FailurePattern)(exn$$4);

      if (activePatternResult13050 != null) {
        const msg$$5 = activePatternResult13050;
        return new InternalError(msg$$5 + " (Failure)", m$$1);
      } else {
        const notARangeDual = exn$$4;
        return notARangeDual;
      }
    }
  }
}

const BuildPhase = (0, _Types.declare)(function BuildPhase(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BuildPhase = BuildPhase;
const PhasedDiagnostic = (0, _Types.declare)(function PhasedDiagnostic(arg1, arg2) {
  this.Exception = arg1;
  this.Phase = arg2;
}, _Types.Record);
exports.PhasedDiagnostic = PhasedDiagnostic;

function PhasedDiagnostic$$$Create$$A7B7EC0(exn$$5, phase) {
  return new PhasedDiagnostic(exn$$5, phase);
}

function PhasedDiagnostic$$DebugDisplay(this$$$8) {
  return (0, _String.toText)((0, _String.printf)("%s: %s"))(PhasedDiagnostic$$Subcategory(this$$$8))(this$$$8.Exception.message);
}

function PhasedDiagnostic$$Subcategory(pe) {
  if (pe.Phase.tag === 1) {
    return "compile";
  } else if (pe.Phase.tag === 2) {
    return "parameter";
  } else if (pe.Phase.tag === 3) {
    return "parse";
  } else if (pe.Phase.tag === 4) {
    return "typecheck";
  } else if (pe.Phase.tag === 5) {
    return "codegen";
  } else if (pe.Phase.tag === 6) {
    return "optimize";
  } else if (pe.Phase.tag === 7) {
    return "ilxgen";
  } else if (pe.Phase.tag === 8) {
    return "ilgen";
  } else if (pe.Phase.tag === 9) {
    return "output";
  } else if (pe.Phase.tag === 10) {
    return "interactive";
  } else {
    return "";
  }
}

function PhasedDiagnostic$$$IsSubcategoryOfCompile$$Z721C83C5(subcategory) {
  var $target$$7;

  if (subcategory === "compile") {
    $target$$7 = 0;
  } else if (subcategory === "parameter") {
    $target$$7 = 0;
  } else if (subcategory === "parse") {
    $target$$7 = 0;
  } else if (subcategory === "typecheck") {
    $target$$7 = 0;
  } else if (subcategory === "") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "codegen") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "optimize") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "ilxgen") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "ilgen") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "output") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "interactive") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 1;
    }
  } else if (subcategory === "internal") {
    if (subcategory === null) {
      $target$$7 = 1;
    } else {
      $target$$7 = 2;
    }
  } else if (subcategory === null) {
    $target$$7 = 1;
  } else {
    $target$$7 = 3;
  }

  switch ($target$$7) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }

    case 2:
      {
        return false;
      }

    case 3:
      {
        const unknownSubcategory = subcategory;
        return false;
      }
  }
}

function PhasedDiagnostic$$IsPhaseInCompile(pe$$1) {
  const isPhaseInCompile = pe$$1.Phase.tag === 1 ? true : pe$$1.Phase.tag === 2 ? true : pe$$1.Phase.tag === 3 ? true : pe$$1.Phase.tag === 4 ? true : false;
  return isPhaseInCompile;
}

const ErrorLogger = (0, _Types.declare)(function ErrorLogger(nameForDebugging) {
  const $this$$1 = this;
  $this$$1.nameForDebugging = nameForDebugging;
});
exports.ErrorLogger = ErrorLogger;

function ErrorLogger$$$$002Ector$$Z721C83C5(nameForDebugging) {
  return this != null ? ErrorLogger.call(this, nameForDebugging) : new ErrorLogger(nameForDebugging);
}

function ErrorLogger$$DebugDisplay(__) {
  return (0, _String.toText)((0, _String.printf)("ErrorLogger(%s)"))(__.nameForDebugging);
}

const DiscardErrorsLogger = (0, _Util.extend)(ErrorLogger$$$$002Ector$$Z721C83C5("DiscardErrorsLogger"), {
  DiagnosticSink(phasedError, isError) {},

  get ErrorCount() {
    return 0;
  }

});
exports.DiscardErrorsLogger = DiscardErrorsLogger;
const AssertFalseErrorLogger = (0, _Util.extend)(ErrorLogger$$$$002Ector$$Z721C83C5("AssertFalseErrorLogger"), {
  DiagnosticSink(phasedError$$1, isError$$1) {},

  get ErrorCount() {
    return 0;
  }

});
exports.AssertFalseErrorLogger = AssertFalseErrorLogger;
const CapturingErrorLogger = (0, _Types.declare)(function CapturingErrorLogger(nm) {
  const $this$$2 = this;
  ErrorLogger$$$$002Ector$$Z721C83C5.call($this$$2, nm);
  $this$$2.errorCount = 0;
  $this$$2.diagnostics = [];
}, ErrorLogger);
exports.CapturingErrorLogger = CapturingErrorLogger;

function CapturingErrorLogger$$$$002Ector$$Z721C83C5(nm) {
  return this != null ? CapturingErrorLogger.call(this, nm) : new CapturingErrorLogger(nm);
}

CapturingErrorLogger.prototype.DiagnosticSink = function (phasedError$$2, isError$$2) {
  const x$$4 = this;

  if (isError$$2) {
    x$$4.errorCount = x$$4.errorCount + 1;
  }

  x$$4.diagnostics.push([phasedError$$2, isError$$2]);
};

Object.defineProperty(CapturingErrorLogger.prototype, "ErrorCount", {
  "get": function () {
    const x$$5 = this;
    return x$$5.errorCount | 0;
  }
});

function CapturingErrorLogger$$get_Diagnostics(x$$6) {
  return (0, _List.ofSeq)(x$$6.diagnostics);
}

function CapturingErrorLogger$$CommitDelayedDiagnostics$$7616EECC(x$$7, errorLogger) {
  const errors = x$$7.diagnostics.slice();
  errors.forEach(function action(tupledArg) {
    errorLogger.DiagnosticSink(tupledArg[0], tupledArg[1]);
  });
}

const CompileThreadStatic = (0, _Types.declare)(function CompileThreadStatic(arg1, arg2) {
  this.buildPhase = arg1;
  this.errorLogger = arg2;
});
exports.CompileThreadStatic = CompileThreadStatic;

function CompileThreadStatic$$$get_BuildPhaseUnchecked() {
  return CompileThreadStatic.buildPhase;
}

function CompileThreadStatic$$$get_BuildPhase() {
  if ((0, _Util.equals)(CompileThreadStatic.buildPhase, null)) {
    return new BuildPhase(0, "DefaultPhase");
  } else {
    return CompileThreadStatic.buildPhase;
  }
}

function CompileThreadStatic$$$set_BuildPhase$$7C3E5899(v) {
  CompileThreadStatic.buildPhase = v;
}

function CompileThreadStatic$$$get_ErrorLogger() {
  if ((0, _Util.equals)(CompileThreadStatic.errorLogger, null)) {
    return AssertFalseErrorLogger;
  } else {
    return CompileThreadStatic.errorLogger;
  }
}

function CompileThreadStatic$$$set_ErrorLogger$$7616EECC(v$$1) {
  CompileThreadStatic.errorLogger = v$$1;
}

function ErrorLoggerExtensions$$$PreserveStackTrace(exn$$6) {
  exn$$6;
}

function ErrorLoggerExtensions$$$ReraiseIfWatsonable(exn$$7) {
  exn$$7;
}

function ErrorLogger$002EErrorR$$229D3F39(x$$8, exn$$8) {
  var $target$$8;

  if ($007CStopProcessing$007C_$007C(exn$$8) != null) {
    $target$$8 = 0;
  } else if (exn$$8 instanceof ReportedError) {
    $target$$8 = 0;
  } else {
    $target$$8 = 1;
  }

  switch ($target$$8) {
    case 0:
      {
        ErrorLoggerExtensions$$$PreserveStackTrace(exn$$8);
        throw exn$$8;
        break;
      }

    case 1:
      {
        x$$8.DiagnosticSink(PhasedDiagnostic$$$Create$$A7B7EC0(exn$$8, CompileThreadStatic$$$get_BuildPhase()), true);
        break;
      }
  }
}

function ErrorLogger$002EWarning$$229D3F39(x$$9, exn$$9) {
  var $target$$9;

  if ($007CStopProcessing$007C_$007C(exn$$9) != null) {
    $target$$9 = 0;
  } else if (exn$$9 instanceof ReportedError) {
    $target$$9 = 0;
  } else {
    $target$$9 = 1;
  }

  switch ($target$$9) {
    case 0:
      {
        ErrorLoggerExtensions$$$PreserveStackTrace(exn$$9);
        throw exn$$9;
        break;
      }

    case 1:
      {
        x$$9.DiagnosticSink(PhasedDiagnostic$$$Create$$A7B7EC0(exn$$9, CompileThreadStatic$$$get_BuildPhase()), false);
        break;
      }
  }
}

function ErrorLogger$002EError$$229D3F39(x$$10, exn$$10) {
  ErrorLogger$002EErrorR$$229D3F39(x$$10, exn$$10);
  throw new ReportedError(exn$$10);
}

function ErrorLogger$002ESimulateError$$Z6A1F9494(x$$11, ph) {
  x$$11.DiagnosticSink(ph, true);
  throw new ReportedError(ph.Exception);
}

function ErrorLogger$002EErrorRecovery(x$$12, exn$$11, m$$2) {
  var $target$$10;

  if (exn$$11 instanceof ReportedError) {
    $target$$10 = 0;
  } else if (exn$$11 instanceof WrappedError) {
    if (exn$$11.Data0 instanceof ReportedError) {
      $target$$10 = 0;
    } else if ($007CStopProcessing$007C_$007C(exn$$11) != null) {
      $target$$10 = 1;
    } else if ($007CStopProcessing$007C_$007C(exn$$11.Data0) != null) {
      $target$$10 = 1;
    } else {
      $target$$10 = 2;
    }
  } else if ($007CStopProcessing$007C_$007C(exn$$11) != null) {
    $target$$10 = 1;
  } else {
    $target$$10 = 2;
  }

  switch ($target$$10) {
    case 1:
      {
        ErrorLoggerExtensions$$$PreserveStackTrace(exn$$11);
        throw exn$$11;
        break;
      }

    case 2:
      {
        try {
          ErrorLogger$002EErrorR$$229D3F39(x$$12, AttachRange(m$$2, exn$$11));
          ErrorLoggerExtensions$$$ReraiseIfWatsonable(exn$$11);
        } catch (matchValue$$11) {
          var $target$$11;

          if (matchValue$$11 instanceof ReportedError) {
            $target$$11 = 0;
          } else if (matchValue$$11 instanceof WrappedError) {
            if (matchValue$$11.Data0 instanceof ReportedError) {
              $target$$11 = 0;
            } else {
              $target$$11 = 1;
            }
          } else {
            $target$$11 = 1;
          }

          switch ($target$$11) {
            case 1:
              {
                throw matchValue$$11;
                break;
              }
          }
        }

        break;
      }
  }
}

function ErrorLogger$002EStopProcessingRecovery(x$$13, exn$$12, m$$3) {
  var $target$$12;

  if ($007CStopProcessing$007C_$007C(exn$$12) != null) {
    $target$$12 = 0;
  } else if (exn$$12 instanceof WrappedError) {
    if ($007CStopProcessing$007C_$007C(exn$$12.Data0) != null) {
      $target$$12 = 0;
    } else {
      $target$$12 = 1;
    }
  } else {
    $target$$12 = 1;
  }

  switch ($target$$12) {
    case 1:
      {
        try {
          ErrorLogger$002EErrorRecovery(x$$13, exn$$12, m$$3);
        } catch (matchValue$$12) {
          var $target$$13;

          if ($007CStopProcessing$007C_$007C(matchValue$$12) != null) {
            $target$$13 = 0;
          } else if (matchValue$$12 instanceof WrappedError) {
            if ($007CStopProcessing$007C_$007C(matchValue$$12.Data0) != null) {
              $target$$13 = 0;
            } else {
              $target$$13 = 1;
            }
          } else {
            $target$$13 = 1;
          }

          switch ($target$$13) {
            case 1:
              {
                var $target$$14;

                if (matchValue$$12 instanceof ReportedError) {
                  $target$$14 = 0;
                } else if (matchValue$$12 instanceof WrappedError) {
                  if (matchValue$$12.Data0 instanceof ReportedError) {
                    $target$$14 = 0;
                  } else {
                    $target$$14 = 1;
                  }
                } else {
                  $target$$14 = 1;
                }

                switch ($target$$14) {
                  case 1:
                    {
                      throw matchValue$$12;
                      break;
                    }
                }

                break;
              }
          }
        }

        break;
      }
  }
}

function ErrorLogger$002EErrorRecoveryNoRange$$229D3F39(x$$14, exn$$13) {
  ErrorLogger$002EErrorRecovery(x$$14, exn$$13, _range.range0);
}

function PushThreadBuildPhaseUntilUnwind(phase$$1) {
  const oldBuildPhase = CompileThreadStatic$$$get_BuildPhaseUnchecked();
  CompileThreadStatic$$$set_BuildPhase$$7C3E5899(phase$$1);
  return {
    Dispose() {
      CompileThreadStatic$$$set_BuildPhase$$7C3E5899(oldBuildPhase);
    }

  };
}

function PushErrorLoggerPhaseUntilUnwind(errorLoggerTransformer) {
  const oldErrorLogger = CompileThreadStatic$$$get_ErrorLogger();
  const newErrorLogger = errorLoggerTransformer(oldErrorLogger);
  const newInstalled = new _Types.FSharpRef(true);

  const newIsInstalled = function newIsInstalled() {
    if (newInstalled.contents) {} else {}
  };

  const chkErrorLogger = (0, _Util.extend)(ErrorLogger$$$$002Ector$$Z721C83C5("PushErrorLoggerPhaseUntilUnwind"), {
    DiagnosticSink(phasedError$$3, isError$$3) {
      newIsInstalled();
      newErrorLogger.DiagnosticSink(phasedError$$3, isError$$3);
    },

    get ErrorCount() {
      newIsInstalled();
      return newErrorLogger.ErrorCount | 0;
    }

  });
  CompileThreadStatic$$$set_ErrorLogger$$7616EECC(chkErrorLogger);
  return {
    Dispose() {
      CompileThreadStatic$$$set_ErrorLogger$$7616EECC(oldErrorLogger);
      newInstalled.contents = false;
    }

  };
}

function SetThreadBuildPhaseNoUnwind(phase$$2) {
  CompileThreadStatic$$$set_BuildPhase$$7C3E5899(phase$$2);
}

function SetThreadErrorLoggerNoUnwind(errorLogger$$1) {
  CompileThreadStatic$$$set_ErrorLogger$$7616EECC(errorLogger$$1);
}

function errorR(exn$$14) {
  ErrorLogger$002EErrorR$$229D3F39(CompileThreadStatic$$$get_ErrorLogger(), exn$$14);
}

function warning(exn$$15) {
  ErrorLogger$002EWarning$$229D3F39(CompileThreadStatic$$$get_ErrorLogger(), exn$$15);
}

function error(exn$$16) {
  return ErrorLogger$002EError$$229D3F39(CompileThreadStatic$$$get_ErrorLogger(), exn$$16);
}

function simulateError(p$$1) {
  return ErrorLogger$002ESimulateError$$Z6A1F9494(CompileThreadStatic$$$get_ErrorLogger(), p$$1);
}

function diagnosticSink(phasedError$$4, isError$$4) {
  CompileThreadStatic$$$get_ErrorLogger().DiagnosticSink(phasedError$$4, isError$$4);
}

function errorSink(pe$$2) {
  diagnosticSink(pe$$2, true);
}

function warnSink(pe$$3) {
  diagnosticSink(pe$$3, false);
}

function errorRecovery(exn$$17, m$$4) {
  ErrorLogger$002EErrorRecovery(CompileThreadStatic$$$get_ErrorLogger(), exn$$17, m$$4);
}

function stopProcessingRecovery(exn$$18, m$$5) {
  ErrorLogger$002EStopProcessingRecovery(CompileThreadStatic$$$get_ErrorLogger(), exn$$18, m$$5);
}

function errorRecoveryNoRange(exn$$19) {
  ErrorLogger$002EErrorRecoveryNoRange$$229D3F39(CompileThreadStatic$$$get_ErrorLogger(), exn$$19);
}

function report(f) {
  return f();
}

function deprecatedWithError(s, m$$6) {
  errorR(new Deprecated(s, m$$6));
}

const reportLibraryOnlyFeatures = (0, _Util.createAtom)(true);
exports.reportLibraryOnlyFeatures = reportLibraryOnlyFeatures;

function libraryOnlyError(m$$7) {
  if (reportLibraryOnlyFeatures()) {
    errorR(new LibraryUseOnly(m$$7));
  }
}

function libraryOnlyWarning(m$$8) {
  if (reportLibraryOnlyFeatures()) {
    warning(new LibraryUseOnly(m$$8));
  }
}

function deprecatedOperator(m$$9) {
  deprecatedWithError((0, _FSComp.SR$$$elDeprecatedOperator)(), m$$9);
}

function mlCompatWarning(s$$1, m$$10) {
  warning(new UserCompilerMessage((0, _FSComp.SR$$$mlCompatMessage$$Z721C83C5)(s$$1), 62, m$$10));
}

function suppressErrorReporting(f$$1) {
  const errorLogger$$2 = CompileThreadStatic$$$get_ErrorLogger();

  try {
    const errorLogger$$3 = (0, _Util.extend)(ErrorLogger$$$$002Ector$$Z721C83C5("suppressErrorReporting"), {
      DiagnosticSink(_phasedError, _isError) {},

      get ErrorCount() {
        return 0;
      }

    });
    SetThreadErrorLoggerNoUnwind(errorLogger$$3);
    return f$$1();
  } finally {
    SetThreadErrorLoggerNoUnwind(errorLogger$$2);
  }
}

function conditionallySuppressErrorReporting(cond, f$$2) {
  if (cond) {
    return suppressErrorReporting(f$$2);
  } else {
    return f$$2();
  }
}

const OperationResult$00601 = (0, _Types.declare)(function OperationResult$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OperationResult$00601 = OperationResult$00601;

function ReportWarnings(warns) {
  if (warns.tail == null) {} else {
    (0, _List.iterate)(function (exn$$20) {
      warning(exn$$20);
    }, warns);
  }
}

function CommitOperationResult(res) {
  if (res.tag === 1) {
    const warns$$2 = res.fields[0];
    const err$$3 = res.fields[1];
    ReportWarnings(warns$$2);
    return error(err$$3);
  } else {
    const warns$$1 = res.fields[0];
    const res$$1 = res.fields[1];
    ReportWarnings(warns$$1);
    return res$$1;
  }
}

function RaiseOperationResult(res$$2) {
  CommitOperationResult(res$$2);
}

function ErrorD(err$$4) {
  return new OperationResult$00601(1, "ErrorResult", (0, _Types.L)(), err$$4);
}

function WarnD(err$$5) {
  return new OperationResult$00601(0, "OkResult", (0, _Types.L)(err$$5, (0, _Types.L)()), null);
}

const CompleteD = new OperationResult$00601(0, "OkResult", (0, _Types.L)(), null);
exports.CompleteD = CompleteD;

function ResultD(x$$16) {
  return new OperationResult$00601(0, "OkResult", (0, _Types.L)(), x$$16);
}

function CheckNoErrorsAndGetWarnings(res$$3) {
  if (res$$3.tag === 1) {
    return null;
  } else {
    const warns$$3 = res$$3.fields[0];
    return warns$$3;
  }
}

function op_PlusPlus(res$$4, f$$3) {
  if (res$$4.tag === 1) {
    return new OperationResult$00601(1, "ErrorResult", res$$4.fields[0], res$$4.fields[1]);
  } else if (res$$4.fields[0].tail == null) {
    return f$$3(res$$4.fields[1]);
  } else {
    const matchValue$$13 = f$$3(res$$4.fields[1]);

    if (matchValue$$13.tag === 1) {
      const warns2$$1 = matchValue$$13.fields[0];
      const err$$6 = matchValue$$13.fields[1];
      return new OperationResult$00601(1, "ErrorResult", (0, _List.append)(res$$4.fields[0], warns2$$1), err$$6);
    } else {
      const warns2 = matchValue$$13.fields[0];
      const res2 = matchValue$$13.fields[1];
      return new OperationResult$00601(0, "OkResult", (0, _List.append)(res$$4.fields[0], warns2), res2);
    }
  }
}

function IterateD(f$$4, xs) {
  if (xs.tail != null) {
    const t = xs.tail;
    const h = xs.head;
    return op_PlusPlus(f$$4(h), function () {
      return IterateD(f$$4, t);
    });
  } else {
    return CompleteD;
  }
}

function WhileD(gd, body) {
  if (gd()) {
    return op_PlusPlus(body(), function () {
      return WhileD(gd, body);
    });
  } else {
    return CompleteD;
  }
}

function MapD(f$$5, xs$$1) {
  const loop = function loop(acc, xs$$2) {
    if (xs$$2.tail != null) {
      const t$$1 = xs$$2.tail;
      const h$$1 = xs$$2.head;
      return op_PlusPlus(f$$5(h$$1), function (x$$17) {
        return loop((0, _Types.L)(x$$17, acc), t$$1);
      });
    } else {
      return ResultD((0, _List.reverse)(acc));
    }
  };

  return loop((0, _Types.L)(), xs$$1);
}

const TrackErrorsBuilder = (0, _Types.declare)(function TrackErrorsBuilder() {});
exports.TrackErrorsBuilder = TrackErrorsBuilder;

function TrackErrorsBuilder$$$$002Ector() {
  return this != null ? TrackErrorsBuilder.call(this) : new TrackErrorsBuilder();
}

function TrackErrorsBuilder$$Bind$$1B0356D3(x$$18, res$$7, k) {
  return op_PlusPlus(res$$7, k);
}

function TrackErrorsBuilder$$Return$$1505(x$$19, res$$8) {
  return ResultD(res$$8);
}

function TrackErrorsBuilder$$ReturnFrom$$1505(x$$20, res$$9) {
  return res$$9;
}

function TrackErrorsBuilder$$For$$Z3A8746F8(x$$21, seq, k$$1) {
  return IterateD(k$$1, seq);
}

function TrackErrorsBuilder$$Combine$$1B0356D3(x$$22, expr1, expr2) {
  return op_PlusPlus(expr1, expr2);
}

function TrackErrorsBuilder$$While$$Z5A4CE48(x$$23, gd$$1, k$$2) {
  return WhileD(gd$$1, k$$2);
}

function TrackErrorsBuilder$$Zero(x$$24) {
  return CompleteD;
}

function TrackErrorsBuilder$$Delay$$FCFD9EF(x$$25, fn) {
  return function () {
    return fn();
  };
}

function TrackErrorsBuilder$$Run$$FCFD9EF(x$$26, fn$$1) {
  return fn$$1();
}

const trackErrors = TrackErrorsBuilder$$$$002Ector();
exports.trackErrors = trackErrors;

function OptionD(f$$6, xs$$3) {
  if (xs$$3 != null) {
    const h$$2 = (0, _Option.value)(xs$$3);
    return f$$6(h$$2);
  } else {
    return CompleteD;
  }
}

function IterateIdxD(f$$7, xs$$4) {
  const loop$$1 = function loop$$1(xs$$5, i) {
    if (xs$$5.tail != null) {
      const t$$2 = xs$$5.tail;
      const h$$3 = xs$$5.head;
      return op_PlusPlus(f$$7(i, h$$3), function () {
        return loop$$1(t$$2, i + 1);
      });
    } else {
      return CompleteD;
    }
  };

  return loop$$1(xs$$4, 0);
}

function Iterate2D(f$$8, xs$$6, ys) {
  const matchValue$$14 = [xs$$6, ys];
  var $target$$51, h1, h2, t1, t2;

  if (matchValue$$14[0].tail != null) {
    if (matchValue$$14[1].tail != null) {
      $target$$51 = 1;
      h1 = matchValue$$14[0].head;
      h2 = matchValue$$14[1].head;
      t1 = matchValue$$14[0].tail;
      t2 = matchValue$$14[1].tail;
    } else {
      $target$$51 = 2;
    }
  } else if (matchValue$$14[1].tail == null) {
    $target$$51 = 0;
  } else {
    $target$$51 = 2;
  }

  switch ($target$$51) {
    case 0:
      {
        return CompleteD;
      }

    case 1:
      {
        return op_PlusPlus(f$$8(h1, h2), function () {
          return Iterate2D(f$$8, t1, t2);
        });
      }

    case 2:
      {
        throw new Error("Iterate2D");
      }
  }
}

function TryD(f$$9, g) {
  const matchValue$$15 = f$$9();

  if (matchValue$$15.tag === 1) {
    const warns$$6 = matchValue$$15.fields[0];
    const err$$8 = matchValue$$15.fields[1];
    return op_PlusPlus(new OperationResult$00601(0, "OkResult", warns$$6, null), function () {
      return g(err$$8);
    });
  } else {
    const res$$10 = matchValue$$15;
    return res$$10;
  }
}

function RepeatWhileD(ndeep, body$$1) {
  return op_PlusPlus(body$$1(ndeep), function (x$$27) {
    return x$$27 ? RepeatWhileD(ndeep + 1, body$$1) : CompleteD;
  });
}

function AtLeastOneD(f$$10, l) {
  return op_PlusPlus(MapD(f$$10, l), function (res$$11) {
    return ResultD((0, _List.exists)(function (x$$28) {
      return x$$28;
    }, res$$11));
  });
}

const stringThatIsAProxyForANewlineInFlatErrors = [String.fromCharCode(29)].join("");
exports.stringThatIsAProxyForANewlineInFlatErrors = stringThatIsAProxyForANewlineInFlatErrors;

function NewlineifyErrorString(message) {
  return (0, _String.replace)(message, stringThatIsAProxyForANewlineInFlatErrors, "\n");
}

function NormalizeErrorString(text) {
  if (text == null) {
    (0, _FSharp.Operators$$$NullArg)("text");
  }

  const text$$1 = text.trim();
  const buf = (0, _System.StringBuilder$$$$002Ector)();
  let i$$1 = 0;

  while (i$$1 < text$$1.length) {
    let delta;
    const matchValue$$16 = text$$1[i$$1];
    var $target$$58;

    if (matchValue$$16 === "\r") {
      if (i$$1 + 1 < text$$1.length ? text$$1[i$$1 + 1] === "\n" : false) {
        $target$$58 = 0;
      } else {
        $target$$58 = 1;
      }
    } else {
      $target$$58 = 1;
    }

    switch ($target$$58) {
      case 0:
        {
          (0, _System.StringBuilder$$Append$$Z721C83C5)(buf, stringThatIsAProxyForANewlineInFlatErrors);
          delta = 2;
          break;
        }

      case 1:
        {
          var $target$$59;

          switch (matchValue$$16) {
            case "\n":
            case "\r":
              $target$$59 = 0;
              break;

            default:
              $target$$59 = 1;
          }

          switch ($target$$59) {
            case 0:
              {
                (0, _System.StringBuilder$$Append$$Z721C83C5)(buf, stringThatIsAProxyForANewlineInFlatErrors);
                delta = 1;
                break;
              }

            case 1:
              {
                const c = matchValue$$16;
                const c$$1 = (0, _Char.isControl)(c) ? " " : c;
                (0, _System.StringBuilder$$Append$$Z721C83C5)(buf, c$$1);
                delta = 1;
                break;
              }
          }

          break;
        }
    }

    i$$1 = i$$1 + delta;
  }

  return (0, _Util.toString)(buf);
}

const FSharpErrorSeverityOptions = (0, _Types.declare)(function FSharpErrorSeverityOptions(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.WarnLevel = arg1 | 0;
  this.GlobalWarnAsError = arg2;
  this.WarnOff = arg3;
  this.WarnOn = arg4;
  this.WarnAsError = arg5;
  this.WarnAsWarn = arg6;
}, _Types.Record);
exports.FSharpErrorSeverityOptions = FSharpErrorSeverityOptions;

function FSharpErrorSeverityOptions$$$get_Default() {
  return new FSharpErrorSeverityOptions(3, false, (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)());
}