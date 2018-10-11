"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlDocCollector$$$$002Ector = XmlDocCollector$$$$002Ector;
exports.XmlDocCollector$$AddGrabPoint$$Z72E1C3A1 = XmlDocCollector$$AddGrabPoint$$Z72E1C3A1;
exports.XmlDocCollector$$AddXmlDocLine$$Z38B2C03C = XmlDocCollector$$AddXmlDocLine$$Z38B2C03C;
exports.XmlDocCollector$$LinesBefore$$Z72E1C3A1 = XmlDocCollector$$LinesBefore$$Z72E1C3A1;
exports.XmlDoc$$$get_Empty = XmlDoc$$$get_Empty;
exports.XmlDoc$$get_NonEmpty = XmlDoc$$get_NonEmpty;
exports.XmlDoc$$$Merge = XmlDoc$$$Merge;
exports.XmlDoc$$$Process$$Z7D9BD965 = XmlDoc$$$Process$$Z7D9BD965;
exports.XmlDocStatics$$$$002Ector = XmlDocStatics$$$$002Ector;
exports.XmlDocStatics$$$get_Empty = XmlDocStatics$$$get_Empty;
exports.PreXmlDoc$$ToXmlDoc = PreXmlDoc$$ToXmlDoc;
exports.PreXmlDoc$$$CreateFromGrabPoint$$Z3ADC1379 = PreXmlDoc$$$CreateFromGrabPoint$$Z3ADC1379;
exports.PreXmlDoc$$$get_Empty = PreXmlDoc$$$get_Empty;
exports.PreXmlDoc$$$Merge = PreXmlDoc$$$Merge;
exports.Ident$$$$002Ector$$7EA1AB7 = Ident$$$$002Ector$$7EA1AB7;
exports.Ident$$get_idText = Ident$$get_idText;
exports.Ident$$get_idRange = Ident$$get_idRange;
exports.LongIdentWithDots$$get_Range = LongIdentWithDots$$get_Range;
exports.LongIdentWithDots$$get_Lid = LongIdentWithDots$$get_Lid;
exports.LongIdentWithDots$$get_ThereIsAnExtraDotAtTheEnd = LongIdentWithDots$$get_ThereIsAnExtraDotAtTheEnd;
exports.LongIdentWithDots$$get_RangeSansAnyExtraDot = LongIdentWithDots$$get_RangeSansAnyExtraDot;
exports.SynTypar$$get_Range = SynTypar$$get_Range;
exports.SynConst$$Range$$4DB9192C = SynConst$$Range$$4DB9192C;
exports.SequencePointInfoForBinding$$Combine$$2F0DA76D = SequencePointInfoForBinding$$Combine$$2F0DA76D;
exports.SynType$$get_Range = SynType$$get_Range;
exports.SynExpr$$get_Range = SynExpr$$get_Range;
exports.SynExpr$$get_RangeSansAnyExtraDot = SynExpr$$get_RangeSansAnyExtraDot;
exports.SynExpr$$get_RangeOfFirstPortion = SynExpr$$get_RangeOfFirstPortion;
exports.SynIndexerArg$$get_Range = SynIndexerArg$$get_Range;
exports.SynIndexerArg$$get_Exprs = SynIndexerArg$$get_Exprs;
exports.SynPat$$get_Range = SynPat$$get_Range;
exports.SynMatchClause$$get_RangeOfGuardAndRhs = SynMatchClause$$get_RangeOfGuardAndRhs;
exports.SynMatchClause$$get_Range = SynMatchClause$$get_Range;
exports.SynBinding$$get_RangeOfBindingSansRhs = SynBinding$$get_RangeOfBindingSansRhs;
exports.SynBinding$$get_RangeOfBindingAndRhs = SynBinding$$get_RangeOfBindingAndRhs;
exports.SynBinding$$get_RangeOfHeadPat = SynBinding$$get_RangeOfHeadPat;
exports.SynTypeDefnSimpleRepr$$get_Range = SynTypeDefnSimpleRepr$$get_Range;
exports.SynEnumCase$$get_Range = SynEnumCase$$get_Range;
exports.SynUnionCase$$get_Range = SynUnionCase$$get_Range;
exports.SynTypeDefnSigRepr$$get_Range = SynTypeDefnSigRepr$$get_Range;
exports.SynComponentInfo$$get_Range = SynComponentInfo$$get_Range;
exports.SynValSig$$get_RangeOfId = SynValSig$$get_RangeOfId;
exports.SynValSig$$get_SynInfo = SynValSig$$get_SynInfo;
exports.SynValSig$$get_SynType = SynValSig$$get_SynType;
exports.SynValInfo$$get_ArgInfos = SynValInfo$$get_ArgInfos;
exports.SynExceptionDefnRepr$$get_Range = SynExceptionDefnRepr$$get_Range;
exports.SynExceptionDefn$$get_Range = SynExceptionDefn$$get_Range;
exports.SynTypeDefnRepr$$get_Range = SynTypeDefnRepr$$get_Range;
exports.SynTypeDefn$$get_Range = SynTypeDefn$$get_Range;
exports.SynMemberDefn$$get_Range = SynMemberDefn$$get_Range;
exports.SynModuleDecl$$get_Range = SynModuleDecl$$get_Range;
exports.SynModuleSigDecl$$get_Range = SynModuleSigDecl$$get_Range;
exports.SynModuleOrNamespace$$get_Range = SynModuleOrNamespace$$get_Range;
exports.ident = ident;
exports.textOfId = textOfId;
exports.pathOfLid = pathOfLid;
exports.arrPathOfLid = arrPathOfLid;
exports.textOfPath = textOfPath;
exports.textOfLid = textOfLid;
exports.rangeOfLid = rangeOfLid;
exports.QualifiedNameOfFile$$get_Text = QualifiedNameOfFile$$get_Text;
exports.QualifiedNameOfFile$$get_Id = QualifiedNameOfFile$$get_Id;
exports.QualifiedNameOfFile$$get_Range = QualifiedNameOfFile$$get_Range;
exports.ParsedInput$$get_Range = ParsedInput$$get_Range;
exports.SynArgNameGenerator$$$$002Ector = SynArgNameGenerator$$$$002Ector;
exports.SynArgNameGenerator$$New = SynArgNameGenerator$$New;
exports.SynArgNameGenerator$$Reset = SynArgNameGenerator$$Reset;
exports.mkSynId = mkSynId;
exports.pathToSynLid = pathToSynLid;
exports.mkSynIdGet = mkSynIdGet;
exports.mkSynLidGet = mkSynLidGet;
exports.mkSynIdGetWithAlt = mkSynIdGetWithAlt;
exports.mkSynSimplePatVar = mkSynSimplePatVar;
exports.mkSynCompGenSimplePatVar = mkSynCompGenSimplePatVar;
exports.$007CLongOrSingleIdent$007C_$007C = $007CLongOrSingleIdent$007C_$007C;
exports.$007CSingleIdent$007C_$007C = $007CSingleIdent$007C_$007C;
exports.IsControlFlowExpression = IsControlFlowExpression;
exports.mkAnonField = mkAnonField;
exports.mkNamedField = mkNamedField;
exports.mkSynPatVar = mkSynPatVar;
exports.mkSynThisPatVar = mkSynThisPatVar;
exports.mkSynPatMaybeVar = mkSynPatMaybeVar;
exports.$007CSynPatForConstructorDecl$007C_$007C = $007CSynPatForConstructorDecl$007C_$007C;
exports.$007CSynPatForNullaryArgs$007C_$007C = $007CSynPatForNullaryArgs$007C_$007C;
exports.$007CSynExprErrorSkip$007C = $007CSynExprErrorSkip$007C;
exports.$007CSynExprParen$007C_$007C = $007CSynExprParen$007C_$007C;
exports.$007CSynPatErrorSkip$007C = $007CSynPatErrorSkip$007C;
exports.SimplePatOfPat = SimplePatOfPat;
exports.appFunOpt = appFunOpt;
exports.composeFunOpt = composeFunOpt;
exports.SimplePatsOfPat = SimplePatsOfPat;
exports.PushPatternToExpr = PushPatternToExpr;
exports.PushCurriedPatternsToExpr = PushCurriedPatternsToExpr;
exports.ParseAssemblyCodeInstructions = ParseAssemblyCodeInstructions;
exports.ParseAssemblyCodeType = ParseAssemblyCodeType;
exports.mkSynOperator = mkSynOperator;
exports.mkSynInfix = mkSynInfix;
exports.mkSynBifix = mkSynBifix;
exports.mkSynTrifix = mkSynTrifix;
exports.mkSynQuadfix = mkSynQuadfix;
exports.mkSynQuinfix = mkSynQuinfix;
exports.mkSynPrefixPrim = mkSynPrefixPrim;
exports.mkSynPrefix = mkSynPrefix;
exports.mkSynCaseName = mkSynCaseName;
exports.mkSynApp1 = mkSynApp1;
exports.mkSynApp2 = mkSynApp2;
exports.mkSynApp3 = mkSynApp3;
exports.mkSynApp4 = mkSynApp4;
exports.mkSynApp5 = mkSynApp5;
exports.mkSynDotParenSet = mkSynDotParenSet;
exports.mkSynDotBrackGet = mkSynDotBrackGet;
exports.mkSynQMarkSet = mkSynQMarkSet;
exports.mkSynDotBrackSliceGet = mkSynDotBrackSliceGet;
exports.mkSynDotBrackSeqSliceGet = mkSynDotBrackSeqSliceGet;
exports.mkSynDotParenGet = mkSynDotParenGet;
exports.mkSynUnit = mkSynUnit;
exports.mkSynUnitPat = mkSynUnitPat;
exports.mkSynDelay = mkSynDelay;
exports.mkSynAssign = mkSynAssign;
exports.mkSynDot = mkSynDot;
exports.mkSynDotMissing = mkSynDotMissing;
exports.mkSynFunMatchLambdas = mkSynFunMatchLambdas;
exports.arbExpr = arbExpr;
exports.SynExpr$$get_IsArbExprAndThusAlreadyReportedError = SynExpr$$get_IsArbExprAndThusAlreadyReportedError;
exports.SynInfo$$$HasNoArgs = SynInfo$$$HasNoArgs;
exports.SynInfo$$$IsOptionalArg = SynInfo$$$IsOptionalArg;
exports.SynInfo$$$HasOptionalArgs = SynInfo$$$HasOptionalArgs;
exports.SynInfo$$$IncorporateEmptyTupledArgForPropertyGetter = SynInfo$$$IncorporateEmptyTupledArgForPropertyGetter;
exports.SynInfo$$$IncorporateSelfArg = SynInfo$$$IncorporateSelfArg;
exports.SynInfo$$$IncorporateSetterArg = SynInfo$$$IncorporateSetterArg;
exports.SynInfo$$$AritiesOfArgs = SynInfo$$$AritiesOfArgs;
exports.SynInfo$$$AttribsOfArgData = SynInfo$$$AttribsOfArgData;
exports.SynInfo$$$InferSynArgInfoFromSimplePat = SynInfo$$$InferSynArgInfoFromSimplePat;
exports.SynInfo$$$InferSynArgInfoFromSimplePats = SynInfo$$$InferSynArgInfoFromSimplePats;
exports.SynInfo$$$InferSynArgInfoFromPat = SynInfo$$$InferSynArgInfoFromPat;
exports.SynInfo$$$AdjustArgsForUnitElimination = SynInfo$$$AdjustArgsForUnitElimination;
exports.SynInfo$$$AdjustMemberArgs = SynInfo$$$AdjustMemberArgs;
exports.SynInfo$$$InferLambdaArgs = SynInfo$$$InferLambdaArgs;
exports.SynInfo$$$InferSynReturnData = SynInfo$$$InferSynReturnData;
exports.SynInfo$$$InferSynValData = SynInfo$$$InferSynValData;
exports.mkSynBindingRhs = mkSynBindingRhs;
exports.mkSynBinding = mkSynBinding;
exports.NonVirtualMemberFlags = NonVirtualMemberFlags;
exports.OverrideMemberFlags = OverrideMemberFlags;
exports.AbstractMemberFlags = AbstractMemberFlags;
exports.StaticMemberFlags = StaticMemberFlags;
exports.LexerEndlineContinuation$$get_LexerIfdefStack = LexerEndlineContinuation$$get_LexerIfdefStack;
exports.LexerIfdefEval = LexerIfdefEval;
exports.LexerWhitespaceContinuation$$get_LexerIfdefStack = LexerWhitespaceContinuation$$get_LexerIfdefStack;
exports.posOfLexPosition = posOfLexPosition;
exports.mkSynRange = mkSynRange;
exports.LexBuffer$00601$002Eget_LexemeRange = LexBuffer$00601$002Eget_LexemeRange;
exports.lhs = lhs;
exports.rhs2 = rhs2;
exports.rhs = rhs;
exports.IParseState$002Eget_SynArgNameGenerator = IParseState$002Eget_SynArgNameGenerator;
exports.IParseState$002EResetSynArgNameGenerator = IParseState$002EResetSynArgNameGenerator;
exports.LexbufLocalXmlDocStore$$$ClearXmlDoc = LexbufLocalXmlDocStore$$$ClearXmlDoc;
exports.LexbufLocalXmlDocStore$$$SaveXmlDocLine = LexbufLocalXmlDocStore$$$SaveXmlDocLine;
exports.LexbufLocalXmlDocStore$$$GrabXmlDocBeforeMarker = LexbufLocalXmlDocStore$$$GrabXmlDocBeforeMarker;
exports.NiceNameGenerator$$$$002Ector = NiceNameGenerator$$$$002Ector;
exports.NiceNameGenerator$$FreshCompilerGeneratedName$$7EA1AB7 = NiceNameGenerator$$FreshCompilerGeneratedName$$7EA1AB7;
exports.NiceNameGenerator$$Reset = NiceNameGenerator$$Reset;
exports.StableNiceNameGenerator$$$$002Ector = StableNiceNameGenerator$$$$002Ector;
exports.StableNiceNameGenerator$$GetUniqueCompilerGeneratedName$$Z576F2858 = StableNiceNameGenerator$$GetUniqueCompilerGeneratedName$$Z576F2858;
exports.StableNiceNameGenerator$$Reset = StableNiceNameGenerator$$Reset;
exports.synExprContainsError = synExprContainsError;
exports.LexerIfdefExpression = exports.LexerEndlineContinuation = exports.LexerIfdefStackEntry = exports.noInferredTypars = exports.inferredTyparDecls = exports.ClassCtorMemberFlags = exports.CtorMemberFlags = exports.SynInfo$$$emptySynValData = exports.SynInfo$$$selfMetadata = exports.SynInfo$$$unnamedRetVal = exports.SynInfo$$$unitArgData = exports.SynInfo$$$unnamedTopArg = exports.SynInfo$$$unnamedTopArg1 = exports.SynReturnInfo = exports.opNameQMark = exports.opNameParenGet = exports.SynArgNameGenerator = exports.ParsedInput = exports.ParsedSigFileInput = exports.ParsedImplFileInput = exports.QualifiedNameOfFile = exports.ScopedPragma = exports.ParsedSigFile = exports.ParsedImplFile = exports.ParsedFsiInteraction = exports.ParsedSigFileFragment = exports.ParsedImplFileFragment = exports.ParsedHashDirective = exports.SynModuleOrNamespaceSig = exports.SynModuleOrNamespace = exports.SynModuleSigDecl = exports.SynExceptionSig = exports.SynModuleDecl = exports.SynMemberDefn = exports.SynTypeDefn = exports.SynTypeDefnRepr = exports.SynExceptionDefn = exports.SynExceptionDefnRepr = exports.SynValTyparDecls = exports.SynArgInfo = exports.SynValInfo = exports.SynValSig = exports.SynComponentInfo = exports.SynField = exports.SynTypeDefnSig = exports.SynTypeDefnSigRepr = exports.SynUnionCaseType = exports.SynUnionCase = exports.SynEnumCase = exports.SynTypeDefnSimpleRepr = exports.SynTypeDefnKind = exports.SynMemberSig = exports.MemberKind = exports.MemberFlags = exports.SynBindingReturnInfo = exports.SynBinding = exports.SynValData = exports.SynAttribute = exports.SynMatchClause = exports.SynInterfaceImpl = exports.SynPat = exports.SynConstructorArgs = exports.SynSimplePats = exports.SynStaticOptimizationConstraint = exports.SynSimplePatAlternativeIdInfo = exports.SynSimplePat = exports.SynIndexerArg = exports.SynExpr = exports.SynType = exports.SynTypeConstraint = exports.SynTyparDecl = exports.SynBindingKind = exports.ExprAtomicFlag = exports.SeqExprOnly = exports.SequencePointInfoForBinding = exports.SequencePointInfoForWhileLoop = exports.SequencePointInfoForForLoop = exports.SequencePointInfoForFinally = exports.SequencePointInfoForWith = exports.SequencePointInfoForTry = exports.SequencePointInfoForSeq = exports.SequencePointInfoForTarget = exports.SynAccess = exports.SynRationalConst = exports.SynMeasure = exports.SynConst = exports.SynTypar = exports.TyparStaticReq = exports.LongIdentWithDots = exports.Ident = exports.ParserDetail = exports.PreXmlDoc = exports.XmlDocStatics = exports.XmlDoc = exports.XmlDocCollector = exports.FSharpLib$$$CorePath = exports.FSharpLib$$$Core = exports.FSharpLib$$$RootPath = exports.FSharpLib$$$Root = exports.FsiDynamicModulePrefix = void 0;
exports.StableNiceNameGenerator = exports.NiceNameGenerator = exports.SyntaxError = exports.LexerWhitespaceContinuation = void 0;

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _Util = require("../fable-core.2.0.3/Util");

var _Types = require("../fable-core.2.0.3/Types");

var _range = require("./range");

var _illib = require("../absil/illib");

var _String = require("../fable-core.2.0.3/String");

var _adapters = require("../fcs-fable/adapters");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _ErrorLogger = require("./ErrorLogger");

var _PrettyNaming = require("./PrettyNaming");

var _Seq = require("../fable-core.2.0.3/Seq");

var _FSComp = require("../codegen/FSComp");

var _primLexing = require("../utils/prim-lexing");

var _primParsing = require("../utils/prim-parsing");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Map = require("../fable-core.2.0.3/Map");

const FsiDynamicModulePrefix = "FSI_";
exports.FsiDynamicModulePrefix = FsiDynamicModulePrefix;
const FSharpLib$$$Root = "Microsoft.FSharp";
exports.FSharpLib$$$Root = FSharpLib$$$Root;
const FSharpLib$$$RootPath = (0, _il.splitNamespace)(FSharpLib$$$Root);
exports.FSharpLib$$$RootPath = FSharpLib$$$RootPath;
const FSharpLib$$$Core = FSharpLib$$$Root + ".Core";
exports.FSharpLib$$$Core = FSharpLib$$$Core;
const FSharpLib$$$CorePath = (0, _il.splitNamespace)(FSharpLib$$$Core);
exports.FSharpLib$$$CorePath = FSharpLib$$$CorePath;
const XmlDocCollector = (0, _Types.declare)(function XmlDocCollector() {
  const $this$$1 = this;
  $this$$1.savedLines = [];
  $this$$1.savedGrabPoints = [];
  $this$$1.savedGrabPointsAsArray = new _Util.Lazy(function () {
    return (0, _Array.sortWith)(function comparer(p1, p2) {
      return XmlDocCollector$$posCompare($this$$1, p1, p2);
    }, $this$$1.savedGrabPoints.slice());
  });
  $this$$1.savedLinesAsArray = new _Util.Lazy(function () {
    return (0, _Array.sortWith)(function comparer$$1(tupledArg, tupledArg$$1) {
      return XmlDocCollector$$posCompare($this$$1, tupledArg[1], tupledArg$$1[1]);
    }, $this$$1.savedLines.slice());
  });
});
exports.XmlDocCollector = XmlDocCollector;

function XmlDocCollector$$$$002Ector() {
  return this != null ? XmlDocCollector.call(this) : new XmlDocCollector();
}

function XmlDocCollector$$AddGrabPoint$$Z72E1C3A1(x, pos) {
  XmlDocCollector$$check(x);
  x.savedGrabPoints.push(pos);
}

function XmlDocCollector$$AddXmlDocLine$$Z38B2C03C(x$$1, line, pos$$1) {
  XmlDocCollector$$check(x$$1);
  x$$1.savedLines.push([line, pos$$1]);
}

function XmlDocCollector$$LinesBefore$$Z72E1C3A1(x$$2, grabPointPos) {
  try {
    const lines = x$$2.savedLinesAsArray.Value;
    const grabPoints = x$$2.savedGrabPointsAsArray.Value;
    const firstLineIndexAfterGrabPoint = (0, _illib.Array$$$findFirstIndexWhereTrue)(lines, function (tupledArg$$2) {
      return (0, _range.posGeq)(tupledArg$$2[1], grabPointPos);
    }) | 0;
    const grabPointIndex = (0, _illib.Array$$$findFirstIndexWhereTrue)(grabPoints, function (pos$$3) {
      return (0, _range.posGeq)(pos$$3, grabPointPos);
    }) | 0;
    let firstLineIndexAfterPrevGrabPoint;

    if (grabPointIndex === 0) {
      firstLineIndexAfterPrevGrabPoint = 0;
    } else {
      const prevGrabPointPos = grabPoints[grabPointIndex - 1];
      firstLineIndexAfterPrevGrabPoint = (0, _illib.Array$$$findFirstIndexWhereTrue)(lines, function (tupledArg$$3) {
        return (0, _range.posGeq)(tupledArg$$3[1], prevGrabPointPos);
      });
    }

    const lines$$1 = (0, _Array.reverse)(lines.slice(firstLineIndexAfterPrevGrabPoint, firstLineIndexAfterGrabPoint - 1 + 1), Array);

    if (lines$$1.length === 0) {
      return [];
    } else {
      let firstLineNumber;
      let copyOfStruct = lines$$1[0][1];
      firstLineNumber = (0, _range.pos$$get_Line)(copyOfStruct);
      return (0, _Array.reverse)((0, _Array.map)(function mapping$$1(tupledArg$$5) {
        return tupledArg$$5[1][0];
      }, (0, _Array.takeWhile)(function predicate(tupledArg$$4) {
        return tupledArg$$4[0] === (0, _range.pos$$get_Line)(tupledArg$$4[1][1]);
      }, (0, _Array.mapIndexed)(function mapping(i, x$$3) {
        return [firstLineNumber - i, x$$3];
      }, lines$$1, Array), Array), Array), Array);
    }
  } catch (e) {
    return [];
  }
}

function XmlDocCollector$$posCompare(this$, p1$$2, p2$$2) {
  if ((0, _range.posGeq)(p1$$2, p2$$2)) {
    return 1;
  } else if ((0, _range.posEq)(p1$$2, p2$$2)) {
    return 0;
  } else {
    return -1 | 0;
  }
}

function XmlDocCollector$$check(this$$$1) {}

const XmlDoc = (0, _Types.declare)(function XmlDoc(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.XmlDoc = XmlDoc;

function XmlDoc$$$get_Empty() {
  return XmlDocStatics$$$get_Empty();
}

function XmlDoc$$get_NonEmpty(x$$4) {
  const lines$$2 = x$$4.fields[0];
  return lines$$2.length !== 0;
}

function XmlDoc$$$Merge(_arg2$$1, _arg1$$1) {
  const lines$$3 = _arg2$$1.fields[0];
  const lines$0027 = _arg1$$1.fields[0];
  return new XmlDoc(0, "XmlDoc", (0, _Array.append)(lines$$3, lines$0027, Array));
}

function XmlDoc$$$Process$$Z7D9BD965(_arg3$$1) {
  const lines$$4 = _arg3$$1.fields[0];

  const processLines = function processLines(lines$$5) {
    processLines: while (true) {
      if (lines$$5.tail != null) {
        const rest = lines$$5.tail;
        const lines$$6 = lines$$5;
        const lineA = lines$$5.head;
        const lineAT = (0, _String.trimStart)(lineA, " ");

        if (lineAT === "") {
          lines$$5 = rest;
          continue processLines;
        } else if ((0, _String.startsWith)(lineAT, "<", 4)) {
          return lines$$6;
        } else {
          return (0, _List.append)((0, _Types.L)("<summary>", (0, _Types.L)()), (0, _List.append)((0, _List.map)(_adapters.Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$escape, lines$$6), (0, _Types.L)("</summary>", (0, _Types.L)())));
        }
      } else {
        return (0, _Types.L)();
      }
    }
  };

  const lines$$7 = processLines((0, _Array.toList)(lines$$4));

  if (lines$$7.tail == null) {
    return XmlDoc$$$get_Empty();
  } else {
    return new XmlDoc(0, "XmlDoc", (0, _Array.ofList)(lines$$7, Array));
  }
}

const XmlDocStatics = (0, _Types.declare)(function XmlDocStatics() {});
exports.XmlDocStatics = XmlDocStatics;

function XmlDocStatics$$$$002Ector() {
  return this != null ? XmlDocStatics.call(this) : new XmlDocStatics();
}

(function XmlDocStatics$$$$002Ecctor() {
  XmlDocStatics.empty = new XmlDoc(0, "XmlDoc", []);
})();

function XmlDocStatics$$$get_Empty() {
  return XmlDocStatics.empty;
}

const PreXmlDoc = (0, _Types.declare)(function PreXmlDoc(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PreXmlDoc = PreXmlDoc;

function PreXmlDoc$$ToXmlDoc(x$$6) {
  switch (x$$6.tag) {
    case 2:
      {
        return XmlDoc$$$get_Empty();
      }

    case 1:
      {
        const pos$$6 = x$$6.fields[0];
        const collector = x$$6.fields[1];
        const lines$$8 = XmlDocCollector$$LinesBefore$$Z72E1C3A1(collector, pos$$6);

        if (lines$$8.length === 0) {
          return XmlDoc$$$get_Empty();
        } else {
          return new XmlDoc(0, "XmlDoc", lines$$8);
        }
      }

    default:
      {
        const b = x$$6.fields[1];
        const a = x$$6.fields[0];
        return XmlDoc$$$Merge(PreXmlDoc$$ToXmlDoc(a), PreXmlDoc$$ToXmlDoc(b));
      }
  }
}

function PreXmlDoc$$$CreateFromGrabPoint$$Z3ADC1379(collector$$1, grabPointPos$$1) {
  XmlDocCollector$$AddGrabPoint$$Z72E1C3A1(collector$$1, grabPointPos$$1);
  return new PreXmlDoc(1, "PreXmlDoc", grabPointPos$$1, collector$$1);
}

function PreXmlDoc$$$get_Empty() {
  return new PreXmlDoc(2, "PreXmlDocEmpty");
}

function PreXmlDoc$$$Merge(a$$1, b$$1) {
  return new PreXmlDoc(0, "PreXmlMerge", a$$1, b$$1);
}

const ParserDetail = (0, _Types.declare)(function ParserDetail(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParserDetail = ParserDetail;
const Ident = (0, _Types.declare)(function Ident(text, range) {
  const $this$$3 = this;
  $this$$3.text = text;
  $this$$3.range = range;
}, _Types.Record);
exports.Ident = Ident;

function Ident$$$$002Ector$$7EA1AB7(text, range) {
  return this != null ? Ident.call(this, text, range) : new Ident(text, range);
}

function Ident$$get_idText(x$$7) {
  return x$$7.text;
}

function Ident$$get_idRange(x$$8) {
  return x$$8.range;
}

Ident.prototype.toString = function () {
  const x$$9 = this;
  return x$$9.text;
};

const LongIdentWithDots = (0, _Types.declare)(function LongIdentWithDots(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LongIdentWithDots = LongIdentWithDots;

function LongIdentWithDots$$get_Range(this$$$2) {
  var copyOfStruct$$1, copyOfStruct$$2;
  var $target$$10, id, id$$1, m, h, t, dotms, h$$1, t$$1;

  if (this$$$2.fields[0].tail != null) {
    if (this$$$2.fields[0].tail.tail == null) {
      if (this$$$2.fields[1].tail != null) {
        if (this$$$2.fields[1].tail.tail == null) {
          $target$$10 = 2;
          id$$1 = this$$$2.fields[0].head;
          m = this$$$2.fields[1].head;
        } else {
          $target$$10 = 4;
          dotms = this$$$2.fields[1];
          h$$1 = this$$$2.fields[0].head;
          t$$1 = this$$$2.fields[0].tail;
        }
      } else {
        $target$$10 = 1;
        id = this$$$2.fields[0].head;
      }
    } else if (this$$$2.fields[1].tail == null) {
      $target$$10 = 3;
      h = this$$$2.fields[0].head;
      t = this$$$2.fields[0].tail;
    } else {
      $target$$10 = 4;
      dotms = this$$$2.fields[1];
      h$$1 = this$$$2.fields[0].head;
      t$$1 = this$$$2.fields[0].tail;
    }
  } else {
    $target$$10 = 0;
  }

  switch ($target$$10) {
    case 0:
      {
        throw new Error("rangeOfLidwd");
      }

    case 1:
      {
        return Ident$$get_idRange(id);
      }

    case 2:
      {
        return (0, _range.unionRanges)(Ident$$get_idRange(id$$1), m);
      }

    case 3:
      {
        return (0, _range.unionRanges)(Ident$$get_idRange(h), (copyOfStruct$$1 = (0, _List.last)(t), Ident$$get_idRange(copyOfStruct$$1)));
      }

    case 4:
      {
        return (0, _range.unionRanges)((0, _List.last)(dotms), (0, _range.unionRanges)(Ident$$get_idRange(h$$1), (copyOfStruct$$2 = (0, _List.last)(t$$1), Ident$$get_idRange(copyOfStruct$$2))));
      }
  }
}

function LongIdentWithDots$$get_Lid(this$$$3) {
  const lid = this$$$3.fields[0];
  return lid;
}

function LongIdentWithDots$$get_ThereIsAnExtraDotAtTheEnd(this$$$4) {
  const lid$$1 = this$$$4.fields[0];
  const dots = this$$$4.fields[1];
  return (0, _List.length)(lid$$1) === (0, _List.length)(dots);
}

function LongIdentWithDots$$get_RangeSansAnyExtraDot(this$$$5) {
  var copyOfStruct$$3;

  if (this$$$5.fields[0].tail != null) {
    if (this$$$5.fields[0].tail.tail == null) {
      return Ident$$get_idRange(this$$$5.fields[0].head);
    } else {
      const nonExtraDots = (0, _List.length)(this$$$5.fields[1]) === (0, _List.length)(this$$$5.fields[0].tail) ? this$$$5.fields[1] : (0, _List.truncate)((0, _List.length)(this$$$5.fields[0].tail), this$$$5.fields[1]);
      return (0, _range.unionRanges)((0, _List.last)(nonExtraDots), (0, _range.unionRanges)(Ident$$get_idRange(this$$$5.fields[0].head), (copyOfStruct$$3 = (0, _List.last)(this$$$5.fields[0].tail), Ident$$get_idRange(copyOfStruct$$3))));
    }
  } else {
    throw new Error("rangeOfLidwd");
  }
}

const TyparStaticReq = (0, _Types.declare)(function TyparStaticReq(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparStaticReq = TyparStaticReq;
const SynTypar = (0, _Types.declare)(function SynTypar(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypar = SynTypar;

function SynTypar$$get_Range(this$$$6) {
  const id$$3 = this$$$6.fields[0];
  return Ident$$get_idRange(id$$3);
}

const SynConst = (0, _Types.declare)(function SynConst(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynConst = SynConst;
const SynMeasure = (0, _Types.declare)(function SynMeasure(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynMeasure = SynMeasure;
const SynRationalConst = (0, _Types.declare)(function SynRationalConst(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynRationalConst = SynRationalConst;

function SynConst$$Range$$4DB9192C(c, dflt) {
  var $target$$11, m0;

  switch (c.tag) {
    case 17:
      $target$$11 = 0;
      m0 = c.fields[1];
      break;

    case 18:
      $target$$11 = 0;
      m0 = c.fields[1];
      break;

    default:
      $target$$11 = 1;
  }

  switch ($target$$11) {
    case 0:
      {
        return m0;
      }

    case 1:
      {
        return dflt;
      }
  }
}

const SynAccess = (0, _Types.declare)(function SynAccess(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynAccess = SynAccess;
const SequencePointInfoForTarget = (0, _Types.declare)(function SequencePointInfoForTarget(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForTarget = SequencePointInfoForTarget;
const SequencePointInfoForSeq = (0, _Types.declare)(function SequencePointInfoForSeq(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForSeq = SequencePointInfoForSeq;
const SequencePointInfoForTry = (0, _Types.declare)(function SequencePointInfoForTry(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForTry = SequencePointInfoForTry;
const SequencePointInfoForWith = (0, _Types.declare)(function SequencePointInfoForWith(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForWith = SequencePointInfoForWith;
const SequencePointInfoForFinally = (0, _Types.declare)(function SequencePointInfoForFinally(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForFinally = SequencePointInfoForFinally;
const SequencePointInfoForForLoop = (0, _Types.declare)(function SequencePointInfoForForLoop(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForForLoop = SequencePointInfoForForLoop;
const SequencePointInfoForWhileLoop = (0, _Types.declare)(function SequencePointInfoForWhileLoop(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForWhileLoop = SequencePointInfoForWhileLoop;
const SequencePointInfoForBinding = (0, _Types.declare)(function SequencePointInfoForBinding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequencePointInfoForBinding = SequencePointInfoForBinding;

function SequencePointInfoForBinding$$Combine$$2F0DA76D(x$$10, y) {
  const matchValue = [x$$10, y];

  if (matchValue[0].tag === 0) {
    return matchValue[0];
  } else if (matchValue[1].tag === 0) {
    return matchValue[1];
  } else {
    return x$$10;
  }
}

const SeqExprOnly = (0, _Types.declare)(function SeqExprOnly(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SeqExprOnly = SeqExprOnly;
const ExprAtomicFlag = (0, _Types.declare)(function ExprAtomicFlag(arg1, arg2, arg3) {
  this.value__ = arg1 | 0;
  this.Atomic = arg2;
  this.NonAtomic = arg3;
}, _Types.Record);
exports.ExprAtomicFlag = ExprAtomicFlag;
const SynBindingKind = (0, _Types.declare)(function SynBindingKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynBindingKind = SynBindingKind;
const SynTyparDecl = (0, _Types.declare)(function SynTyparDecl(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTyparDecl = SynTyparDecl;
const SynTypeConstraint = (0, _Types.declare)(function SynTypeConstraint(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeConstraint = SynTypeConstraint;
const SynType = (0, _Types.declare)(function SynType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynType = SynType;
const SynExpr = (0, _Types.declare)(function SynExpr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynExpr = SynExpr;
const SynIndexerArg = (0, _Types.declare)(function SynIndexerArg(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynIndexerArg = SynIndexerArg;
const SynSimplePat = (0, _Types.declare)(function SynSimplePat(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynSimplePat = SynSimplePat;
const SynSimplePatAlternativeIdInfo = (0, _Types.declare)(function SynSimplePatAlternativeIdInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynSimplePatAlternativeIdInfo = SynSimplePatAlternativeIdInfo;
const SynStaticOptimizationConstraint = (0, _Types.declare)(function SynStaticOptimizationConstraint(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynStaticOptimizationConstraint = SynStaticOptimizationConstraint;
const SynSimplePats = (0, _Types.declare)(function SynSimplePats(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynSimplePats = SynSimplePats;
const SynConstructorArgs = (0, _Types.declare)(function SynConstructorArgs(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynConstructorArgs = SynConstructorArgs;
const SynPat = (0, _Types.declare)(function SynPat(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynPat = SynPat;
const SynInterfaceImpl = (0, _Types.declare)(function SynInterfaceImpl(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynInterfaceImpl = SynInterfaceImpl;
const SynMatchClause = (0, _Types.declare)(function SynMatchClause(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynMatchClause = SynMatchClause;
const SynAttribute = (0, _Types.declare)(function SynAttribute(arg1, arg2, arg3, arg4, arg5) {
  this.TypeName = arg1;
  this.ArgExpr = arg2;
  this.Target = arg3;
  this.AppliesToGetterAndSetter = arg4;
  this.Range = arg5;
}, _Types.Record);
exports.SynAttribute = SynAttribute;
const SynValData = (0, _Types.declare)(function SynValData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynValData = SynValData;
const SynBinding = (0, _Types.declare)(function SynBinding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynBinding = SynBinding;
const SynBindingReturnInfo = (0, _Types.declare)(function SynBindingReturnInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynBindingReturnInfo = SynBindingReturnInfo;
const MemberFlags = (0, _Types.declare)(function MemberFlags(arg1, arg2, arg3, arg4, arg5) {
  this.IsInstance = arg1;
  this.IsDispatchSlot = arg2;
  this.IsOverrideOrExplicitImpl = arg3;
  this.IsFinal = arg4;
  this.MemberKind = arg5;
}, _Types.Record);
exports.MemberFlags = MemberFlags;
const MemberKind = (0, _Types.declare)(function MemberKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MemberKind = MemberKind;
const SynMemberSig = (0, _Types.declare)(function SynMemberSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynMemberSig = SynMemberSig;
const SynTypeDefnKind = (0, _Types.declare)(function SynTypeDefnKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeDefnKind = SynTypeDefnKind;
const SynTypeDefnSimpleRepr = (0, _Types.declare)(function SynTypeDefnSimpleRepr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeDefnSimpleRepr = SynTypeDefnSimpleRepr;
const SynEnumCase = (0, _Types.declare)(function SynEnumCase(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynEnumCase = SynEnumCase;
const SynUnionCase = (0, _Types.declare)(function SynUnionCase(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynUnionCase = SynUnionCase;
const SynUnionCaseType = (0, _Types.declare)(function SynUnionCaseType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynUnionCaseType = SynUnionCaseType;
const SynTypeDefnSigRepr = (0, _Types.declare)(function SynTypeDefnSigRepr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeDefnSigRepr = SynTypeDefnSigRepr;
const SynTypeDefnSig = (0, _Types.declare)(function SynTypeDefnSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeDefnSig = SynTypeDefnSig;
const SynField = (0, _Types.declare)(function SynField(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynField = SynField;
const SynComponentInfo = (0, _Types.declare)(function SynComponentInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynComponentInfo = SynComponentInfo;
const SynValSig = (0, _Types.declare)(function SynValSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynValSig = SynValSig;
const SynValInfo = (0, _Types.declare)(function SynValInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynValInfo = SynValInfo;
const SynArgInfo = (0, _Types.declare)(function SynArgInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynArgInfo = SynArgInfo;
const SynValTyparDecls = (0, _Types.declare)(function SynValTyparDecls(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynValTyparDecls = SynValTyparDecls;
const SynExceptionDefnRepr = (0, _Types.declare)(function SynExceptionDefnRepr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynExceptionDefnRepr = SynExceptionDefnRepr;
const SynExceptionDefn = (0, _Types.declare)(function SynExceptionDefn(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynExceptionDefn = SynExceptionDefn;
const SynTypeDefnRepr = (0, _Types.declare)(function SynTypeDefnRepr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeDefnRepr = SynTypeDefnRepr;
const SynTypeDefn = (0, _Types.declare)(function SynTypeDefn(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynTypeDefn = SynTypeDefn;
const SynMemberDefn = (0, _Types.declare)(function SynMemberDefn(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynMemberDefn = SynMemberDefn;
const SynModuleDecl = (0, _Types.declare)(function SynModuleDecl(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynModuleDecl = SynModuleDecl;
const SynExceptionSig = (0, _Types.declare)(function SynExceptionSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynExceptionSig = SynExceptionSig;
const SynModuleSigDecl = (0, _Types.declare)(function SynModuleSigDecl(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynModuleSigDecl = SynModuleSigDecl;
const SynModuleOrNamespace = (0, _Types.declare)(function SynModuleOrNamespace(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynModuleOrNamespace = SynModuleOrNamespace;
const SynModuleOrNamespaceSig = (0, _Types.declare)(function SynModuleOrNamespaceSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynModuleOrNamespaceSig = SynModuleOrNamespaceSig;
const ParsedHashDirective = (0, _Types.declare)(function ParsedHashDirective(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedHashDirective = ParsedHashDirective;

function SynType$$get_Range(x$$11) {
  var $target$$12, m$$1;

  switch (x$$11.tag) {
    case 2:
      $target$$12 = 0;
      m$$1 = x$$11.fields[6];
      break;

    case 3:
      $target$$12 = 0;
      m$$1 = x$$11.fields[1];
      break;

    case 4:
      $target$$12 = 0;
      m$$1 = x$$11.fields[1];
      break;

    case 5:
      $target$$12 = 0;
      m$$1 = x$$11.fields[2];
      break;

    case 6:
      $target$$12 = 0;
      m$$1 = x$$11.fields[2];
      break;

    case 7:
      $target$$12 = 0;
      m$$1 = x$$11.fields[1];
      break;

    case 8:
      $target$$12 = 0;
      m$$1 = x$$11.fields[0];
      break;

    case 9:
      $target$$12 = 0;
      m$$1 = x$$11.fields[2];
      break;

    case 13:
      $target$$12 = 0;
      m$$1 = x$$11.fields[1];
      break;

    case 14:
      $target$$12 = 0;
      m$$1 = x$$11.fields[1];
      break;

    case 15:
      $target$$12 = 0;
      m$$1 = x$$11.fields[2];
      break;

    case 10:
      $target$$12 = 0;
      m$$1 = x$$11.fields[1];
      break;

    case 11:
      $target$$12 = 0;
      m$$1 = x$$11.fields[2];
      break;

    case 12:
      $target$$12 = 0;
      m$$1 = x$$11.fields[2];
      break;

    case 0:
      $target$$12 = 1;
      break;

    default:
      $target$$12 = 0;
      m$$1 = x$$11.fields[6];
  }

  switch ($target$$12) {
    case 0:
      {
        return m$$1;
      }

    case 1:
      {
        const lidwd = x$$11.fields[0];
        return LongIdentWithDots$$get_Range(lidwd);
      }
  }
}

function SynExpr$$get_Range(e$$1) {
  var $target$$13, m$$2;

  switch (e$$1.tag) {
    case 1:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 2:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 3:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 4:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 5:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 6:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 7:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 8:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 9:
      $target$$13 = 0;
      m$$2 = e$$1.fields[5];
      break;

    case 10:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 11:
      $target$$13 = 0;
      m$$2 = e$$1.fields[6];
      break;

    case 12:
      $target$$13 = 0;
      m$$2 = e$$1.fields[6];
      break;

    case 14:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 13:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 15:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 17:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 16:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 18:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 19:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 20:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 21:
      $target$$13 = 0;
      m$$2 = e$$1.fields[6];
      break;

    case 22:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 23:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 24:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 26:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 57:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 58:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 59:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 27:
      $target$$13 = 0;
      m$$2 = e$$1.fields[6];
      break;

    case 29:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 30:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 36:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 34:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 35:
      $target$$13 = 0;
      m$$2 = e$$1.fields[5];
      break;

    case 31:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 32:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 33:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 37:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 55:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 56:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 53:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 54:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 38:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 39:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 44:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 40:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 46:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 41:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 42:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 43:
      $target$$13 = 0;
      m$$2 = e$$1.fields[0];
      break;

    case 25:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 45:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
      break;

    case 47:
      $target$$13 = 0;
      m$$2 = e$$1.fields[0];
      break;

    case 48:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 49:
      $target$$13 = 0;
      m$$2 = e$$1.fields[2];
      break;

    case 50:
      $target$$13 = 0;
      m$$2 = e$$1.fields[6];
      break;

    case 51:
      $target$$13 = 0;
      m$$2 = e$$1.fields[4];
      break;

    case 52:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 60:
      $target$$13 = 0;
      m$$2 = e$$1.fields[1];
      break;

    case 28:
      $target$$13 = 1;
      break;

    default:
      $target$$13 = 0;
      m$$2 = e$$1.fields[3];
  }

  switch ($target$$13) {
    case 0:
      {
        return m$$2;
      }

    case 1:
      {
        const id$$4 = e$$1.fields[0];
        return Ident$$get_idRange(id$$4);
      }
  }
}

function SynExpr$$get_RangeSansAnyExtraDot(e$$2) {
  var $target$$14, m$$3;

  switch (e$$2.tag) {
    case 1:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 2:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 3:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 4:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 5:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 6:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 7:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 8:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 9:
      $target$$14 = 0;
      m$$3 = e$$2.fields[5];
      break;

    case 10:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 11:
      $target$$14 = 0;
      m$$3 = e$$2.fields[6];
      break;

    case 12:
      $target$$14 = 0;
      m$$3 = e$$2.fields[6];
      break;

    case 14:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 13:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 15:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 17:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 16:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 18:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 19:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 20:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 21:
      $target$$14 = 0;
      m$$3 = e$$2.fields[6];
      break;

    case 22:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 23:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 24:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 26:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 57:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 58:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 27:
      $target$$14 = 0;
      m$$3 = e$$2.fields[6];
      break;

    case 30:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 36:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 34:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 35:
      $target$$14 = 0;
      m$$3 = e$$2.fields[5];
      break;

    case 32:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 33:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 37:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 55:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 56:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 53:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 54:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 38:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 39:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 44:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 40:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 46:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 41:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 42:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 43:
      $target$$14 = 0;
      m$$3 = e$$2.fields[0];
      break;

    case 25:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 45:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
      break;

    case 47:
      $target$$14 = 0;
      m$$3 = e$$2.fields[0];
      break;

    case 48:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 49:
      $target$$14 = 0;
      m$$3 = e$$2.fields[2];
      break;

    case 50:
      $target$$14 = 0;
      m$$3 = e$$2.fields[6];
      break;

    case 51:
      $target$$14 = 0;
      m$$3 = e$$2.fields[4];
      break;

    case 52:
      $target$$14 = 0;
      m$$3 = e$$2.fields[1];
      break;

    case 31:
      $target$$14 = 1;
      break;

    case 29:
      $target$$14 = 2;
      break;

    case 59:
      $target$$14 = 3;
      break;

    case 60:
      $target$$14 = 4;
      break;

    case 28:
      $target$$14 = 5;
      break;

    default:
      $target$$14 = 0;
      m$$3 = e$$2.fields[3];
  }

  switch ($target$$14) {
    case 0:
      {
        return m$$3;
      }

    case 1:
      {
        const m$$4 = e$$2.fields[3];
        const lidwd$$1 = e$$2.fields[2];
        const expr = e$$2.fields[0];

        if (LongIdentWithDots$$get_ThereIsAnExtraDotAtTheEnd(lidwd$$1)) {
          return (0, _range.unionRanges)(SynExpr$$get_Range(expr), LongIdentWithDots$$get_RangeSansAnyExtraDot(lidwd$$1));
        } else {
          return m$$4;
        }
      }

    case 2:
      {
        const lidwd$$2 = e$$2.fields[1];
        return LongIdentWithDots$$get_RangeSansAnyExtraDot(lidwd$$2);
      }

    case 3:
      {
        const expr$$1 = e$$2.fields[0];
        return SynExpr$$get_Range(expr$$1);
      }

    case 4:
      {
        const m$$5 = e$$2.fields[1];
        return m$$5;
      }

    case 5:
      {
        const id$$5 = e$$2.fields[0];
        return Ident$$get_idRange(id$$5);
      }
  }
}

function SynExpr$$get_RangeOfFirstPortion(e$$3) {
  var $target$$15, m$$6, e1;

  switch (e$$3.tag) {
    case 2:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 3:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 4:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 5:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 6:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 7:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 8:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 9:
      $target$$15 = 0;
      m$$6 = e$$3.fields[5];
      break;

    case 10:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 11:
      $target$$15 = 0;
      m$$6 = e$$3.fields[6];
      break;

    case 14:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 13:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 15:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 17:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 16:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 18:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 19:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 21:
      $target$$15 = 0;
      m$$6 = e$$3.fields[6];
      break;

    case 22:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 23:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 24:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 57:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 58:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 59:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 27:
      $target$$15 = 0;
      m$$6 = e$$3.fields[6];
      break;

    case 29:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 30:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 36:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 34:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 35:
      $target$$15 = 0;
      m$$6 = e$$3.fields[5];
      break;

    case 31:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 32:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 33:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 37:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 55:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 56:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 53:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 54:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 38:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 39:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 44:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 40:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 46:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 41:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 42:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 43:
      $target$$15 = 0;
      m$$6 = e$$3.fields[0];
      break;

    case 25:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 45:
      $target$$15 = 0;
      m$$6 = e$$3.fields[3];
      break;

    case 47:
      $target$$15 = 0;
      m$$6 = e$$3.fields[0];
      break;

    case 48:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 49:
      $target$$15 = 0;
      m$$6 = e$$3.fields[2];
      break;

    case 50:
      $target$$15 = 0;
      m$$6 = e$$3.fields[6];
      break;

    case 51:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
      break;

    case 52:
      $target$$15 = 0;
      m$$6 = e$$3.fields[1];
      break;

    case 0:
      $target$$15 = 1;
      break;

    case 26:
      $target$$15 = 2;
      e1 = e$$3.fields[2];
      break;

    case 20:
      $target$$15 = 2;
      e1 = e$$3.fields[2];
      break;

    case 12:
      $target$$15 = 3;
      break;

    case 28:
      $target$$15 = 4;
      break;

    case 60:
      $target$$15 = 5;
      break;

    default:
      $target$$15 = 0;
      m$$6 = e$$3.fields[4];
  }

  switch ($target$$15) {
    case 0:
      {
        return m$$6;
      }

    case 1:
      {
        const m$$7 = e$$3.fields[1];
        return m$$7;
      }

    case 2:
      {
        return SynExpr$$get_RangeOfFirstPortion(e1);
      }

    case 3:
      {
        const r = e$$3.fields[6];
        const pat = e$$3.fields[3];
        const start = (0, _range.range$$get_Start)(r);
        let e$$4;
        let copyOfStruct$$4 = SynPat$$get_Range(pat);
        e$$4 = (0, _range.range$$get_Start)(copyOfStruct$$4);
        return (0, _range.mkRange)((0, _range.range$$get_FileName)(r), start, e$$4);
      }

    case 4:
      {
        const id$$6 = e$$3.fields[0];
        return Ident$$get_idRange(id$$6);
      }

    case 5:
      {
        const m$$8 = e$$3.fields[1];
        return m$$8;
      }
  }
}

function SynIndexerArg$$get_Range(x$$12) {
  if (x$$12.tag === 1) {
    const e$$5 = x$$12.fields[0];
    return SynExpr$$get_Range(e$$5);
  } else {
    const e2 = x$$12.fields[1];
    const e1$$1 = x$$12.fields[0];
    return (0, _range.unionRanges)(SynExpr$$get_Range(e1$$1), SynExpr$$get_Range(e2));
  }
}

function SynIndexerArg$$get_Exprs(x$$13) {
  if (x$$13.tag === 1) {
    const e$$6 = x$$13.fields[0];
    return (0, _Types.L)(e$$6, (0, _Types.L)());
  } else {
    const e2$$1 = x$$13.fields[1];
    const e1$$2 = x$$13.fields[0];
    return (0, _Types.L)(e1$$2, (0, _Types.L)(e2$$1, (0, _Types.L)()));
  }
}

function SynPat$$get_Range(p) {
  var $target$$16, m$$9;

  switch (p.tag) {
    case 1:
      $target$$16 = 0;
      m$$9 = p.fields[0];
      break;

    case 2:
      $target$$16 = 0;
      m$$9 = p.fields[4];
      break;

    case 5:
      $target$$16 = 0;
      m$$9 = p.fields[2];
      break;

    case 6:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 7:
      $target$$16 = 0;
      m$$9 = p.fields[5];
      break;

    case 11:
      $target$$16 = 0;
      m$$9 = p.fields[2];
      break;

    case 8:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 9:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 3:
      $target$$16 = 0;
      m$$9 = p.fields[2];
      break;

    case 4:
      $target$$16 = 0;
      m$$9 = p.fields[2];
      break;

    case 12:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 17:
      $target$$16 = 0;
      m$$9 = p.fields[2];
      break;

    case 13:
      $target$$16 = 0;
      m$$9 = p.fields[0];
      break;

    case 15:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 16:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 18:
      $target$$16 = 0;
      m$$9 = p.fields[4];
      break;

    case 14:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 10:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    case 19:
      $target$$16 = 0;
      m$$9 = p.fields[1];
      break;

    default:
      $target$$16 = 0;
      m$$9 = p.fields[1];
  }

  switch ($target$$16) {
    case 0:
      {
        return m$$9;
      }
  }
}

function SynMatchClause$$get_RangeOfGuardAndRhs(this$$$7) {
  const eo = this$$$7.fields[1];
  const e$$7 = this$$$7.fields[2];

  if (eo != null) {
    const x$$14 = eo;
    return (0, _range.unionRanges)(SynExpr$$get_Range(e$$7), SynExpr$$get_Range(x$$14));
  } else {
    return SynExpr$$get_Range(e$$7);
  }
}

function SynMatchClause$$get_Range(this$$$8) {
  const m$$10 = this$$$8.fields[3];
  const eo$$1 = this$$$8.fields[1];
  const e$$8 = this$$$8.fields[2];

  if (eo$$1 != null) {
    const x$$15 = eo$$1;
    return (0, _range.unionRanges)((0, _range.unionRanges)(SynExpr$$get_Range(e$$8), m$$10), SynExpr$$get_Range(x$$15));
  } else {
    return (0, _range.unionRanges)(SynExpr$$get_Range(e$$8), m$$10);
  }
}

function SynBinding$$get_RangeOfBindingSansRhs(x$$16) {
  const m$$11 = x$$16.fields[10];
  return m$$11;
}

function SynBinding$$get_RangeOfBindingAndRhs(x$$17) {
  const m$$12 = x$$17.fields[10];
  const e$$9 = x$$17.fields[9];
  return (0, _range.unionRanges)(SynExpr$$get_Range(e$$9), m$$12);
}

function SynBinding$$get_RangeOfHeadPat(x$$18) {
  const headPat = x$$18.fields[7];
  return SynPat$$get_Range(headPat);
}

function SynTypeDefnSimpleRepr$$get_Range(this$$$9) {
  var $target$$17, m$$13;

  switch (this$$$9.tag) {
    case 1:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[1];
      break;

    case 2:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[2];
      break;

    case 3:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[7];
      break;

    case 4:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[1];
      break;

    case 5:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[2];
      break;

    case 6:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[0];
      break;

    case 7:
      $target$$17 = 1;
      break;

    default:
      $target$$17 = 0;
      m$$13 = this$$$9.fields[2];
  }

  switch ($target$$17) {
    case 0:
      {
        return m$$13;
      }

    case 1:
      {
        const t$$3 = this$$$9.fields[0];
        return SynExceptionDefnRepr$$get_Range(t$$3);
      }
  }
}

function SynEnumCase$$get_Range(this$$$10) {
  const m$$14 = this$$$10.fields[4];
  return m$$14;
}

function SynUnionCase$$get_Range(this$$$11) {
  const m$$15 = this$$$11.fields[5];
  return m$$15;
}

function SynTypeDefnSigRepr$$get_Range(this$$$12) {
  var $target$$18, m$$16;

  switch (this$$$12.tag) {
    case 1:
      $target$$18 = 0;
      m$$16 = this$$$12.fields[1];
      break;

    case 2:
      $target$$18 = 1;
      break;

    default:
      $target$$18 = 0;
      m$$16 = this$$$12.fields[2];
  }

  switch ($target$$18) {
    case 0:
      {
        return m$$16;
      }

    case 1:
      {
        const e$$10 = this$$$12.fields[0];
        return SynExceptionDefnRepr$$get_Range(e$$10);
      }
  }
}

function SynComponentInfo$$get_Range(this$$$13) {
  const m$$17 = this$$$13.fields[7];
  return m$$17;
}

function SynValSig$$get_RangeOfId(x$$19) {
  const id$$7 = x$$19.fields[1];
  return Ident$$get_idRange(id$$7);
}

function SynValSig$$get_SynInfo(x$$20) {
  const v = x$$20.fields[4];
  return v;
}

function SynValSig$$get_SynType(x$$21) {
  const ty = x$$21.fields[3];
  return ty;
}

function SynValInfo$$get_ArgInfos(x$$22) {
  const args = x$$22.fields[0];
  return args;
}

function SynExceptionDefnRepr$$get_Range(this$$$14) {
  const m$$18 = this$$$14.fields[5];
  return m$$18;
}

function SynExceptionDefn$$get_Range(this$$$15) {
  const m$$19 = this$$$15.fields[2];
  return m$$19;
}

function SynTypeDefnRepr$$get_Range(this$$$16) {
  var $target$$19, m$$20;

  switch (this$$$16.tag) {
    case 1:
      $target$$19 = 0;
      m$$20 = this$$$16.fields[1];
      break;

    case 2:
      $target$$19 = 1;
      break;

    default:
      $target$$19 = 0;
      m$$20 = this$$$16.fields[2];
  }

  switch ($target$$19) {
    case 0:
      {
        return m$$20;
      }

    case 1:
      {
        const t$$4 = this$$$16.fields[0];
        return SynExceptionDefnRepr$$get_Range(t$$4);
      }
  }
}

function SynTypeDefn$$get_Range(this$$$17) {
  const m$$21 = this$$$17.fields[3];
  return m$$21;
}

function SynMemberDefn$$get_Range(d) {
  var $target$$20, m$$22;

  switch (d.tag) {
    case 6:
      $target$$20 = 0;
      m$$22 = d.fields[2];
      break;

    case 0:
      $target$$20 = 0;
      m$$22 = d.fields[1];
      break;

    case 4:
      $target$$20 = 0;
      m$$22 = d.fields[3];
      break;

    case 2:
      $target$$20 = 0;
      m$$22 = d.fields[4];
      break;

    case 3:
      $target$$20 = 0;
      m$$22 = d.fields[3];
      break;

    case 5:
      $target$$20 = 0;
      m$$22 = d.fields[2];
      break;

    case 7:
      $target$$20 = 0;
      m$$22 = d.fields[2];
      break;

    case 8:
      $target$$20 = 0;
      m$$22 = d.fields[1];
      break;

    case 10:
      $target$$20 = 0;
      m$$22 = d.fields[10];
      break;

    case 9:
      $target$$20 = 0;
      m$$22 = d.fields[2];
      break;

    default:
      $target$$20 = 0;
      m$$22 = d.fields[1];
  }

  switch ($target$$20) {
    case 0:
      {
        return m$$22;
      }
  }
}

function SynModuleDecl$$get_Range(d$$1) {
  var $target$$21, m$$23;

  switch (d$$1.tag) {
    case 1:
      $target$$21 = 0;
      m$$23 = d$$1.fields[4];
      break;

    case 2:
      $target$$21 = 0;
      m$$23 = d$$1.fields[2];
      break;

    case 3:
      $target$$21 = 0;
      m$$23 = d$$1.fields[2];
      break;

    case 4:
      $target$$21 = 0;
      m$$23 = d$$1.fields[1];
      break;

    case 5:
      $target$$21 = 0;
      m$$23 = d$$1.fields[1];
      break;

    case 6:
      $target$$21 = 0;
      m$$23 = d$$1.fields[1];
      break;

    case 8:
      $target$$21 = 0;
      m$$23 = d$$1.fields[1];
      break;

    case 9:
      $target$$21 = 0;
      m$$23 = d$$1.fields[0].fields[7];
      break;

    case 7:
      $target$$21 = 0;
      m$$23 = d$$1.fields[1];
      break;

    default:
      $target$$21 = 0;
      m$$23 = d$$1.fields[2];
  }

  switch ($target$$21) {
    case 0:
      {
        return m$$23;
      }
  }
}

function SynModuleSigDecl$$get_Range(d$$2) {
  var $target$$22, m$$24;

  switch (d$$2.tag) {
    case 1:
      $target$$22 = 0;
      m$$24 = d$$2.fields[3];
      break;

    case 2:
      $target$$22 = 0;
      m$$24 = d$$2.fields[1];
      break;

    case 3:
      $target$$22 = 0;
      m$$24 = d$$2.fields[1];
      break;

    case 4:
      $target$$22 = 0;
      m$$24 = d$$2.fields[1];
      break;

    case 5:
      $target$$22 = 0;
      m$$24 = d$$2.fields[1];
      break;

    case 7:
      $target$$22 = 0;
      m$$24 = d$$2.fields[0].fields[7];
      break;

    case 6:
      $target$$22 = 0;
      m$$24 = d$$2.fields[1];
      break;

    default:
      $target$$22 = 0;
      m$$24 = d$$2.fields[2];
  }

  switch ($target$$22) {
    case 0:
      {
        return m$$24;
      }
  }
}

function SynModuleOrNamespace$$get_Range(this$$$18) {
  const m$$25 = this$$$18.fields[7];
  return m$$25;
}

const ParsedImplFileFragment = (0, _Types.declare)(function ParsedImplFileFragment(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedImplFileFragment = ParsedImplFileFragment;
const ParsedSigFileFragment = (0, _Types.declare)(function ParsedSigFileFragment(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedSigFileFragment = ParsedSigFileFragment;
const ParsedFsiInteraction = (0, _Types.declare)(function ParsedFsiInteraction(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedFsiInteraction = ParsedFsiInteraction;
const ParsedImplFile = (0, _Types.declare)(function ParsedImplFile(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedImplFile = ParsedImplFile;
const ParsedSigFile = (0, _Types.declare)(function ParsedSigFile(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedSigFile = ParsedSigFile;

function ident(s, r$$1) {
  return Ident$$$$002Ector$$7EA1AB7(s, r$$1);
}

function textOfId(id$$8) {
  return Ident$$get_idText(id$$8);
}

function pathOfLid(lid$$2) {
  return (0, _List.map)(textOfId, lid$$2);
}

function arrPathOfLid(lid$$3) {
  return (0, _Array.ofList)(pathOfLid(lid$$3), Array);
}

function textOfPath(path) {
  return (0, _String.join)(".", ...path);
}

function textOfLid(lid$$4) {
  return textOfPath(pathOfLid(lid$$4));
}

function rangeOfLid(lid$$5) {
  var copyOfStruct$$5;

  if (lid$$5.tail != null) {
    if (lid$$5.tail.tail == null) {
      return Ident$$get_idRange(lid$$5.head);
    } else {
      return (0, _range.unionRanges)(Ident$$get_idRange(lid$$5.head), (copyOfStruct$$5 = (0, _List.last)(lid$$5.tail), Ident$$get_idRange(copyOfStruct$$5)));
    }
  } else {
    throw new Error("rangeOfLid");
  }
}

const ScopedPragma = (0, _Types.declare)(function ScopedPragma(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ScopedPragma = ScopedPragma;
const QualifiedNameOfFile = (0, _Types.declare)(function QualifiedNameOfFile(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.QualifiedNameOfFile = QualifiedNameOfFile;

function QualifiedNameOfFile$$get_Text(x$$23) {
  const t$$6 = x$$23.fields[0];
  return Ident$$get_idText(t$$6);
}

function QualifiedNameOfFile$$get_Id(x$$24) {
  const t$$7 = x$$24.fields[0];
  return t$$7;
}

function QualifiedNameOfFile$$get_Range(x$$25) {
  const t$$8 = x$$25.fields[0];
  return Ident$$get_idRange(t$$8);
}

const ParsedImplFileInput = (0, _Types.declare)(function ParsedImplFileInput(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedImplFileInput = ParsedImplFileInput;
const ParsedSigFileInput = (0, _Types.declare)(function ParsedSigFileInput(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedSigFileInput = ParsedSigFileInput;
const ParsedInput = (0, _Types.declare)(function ParsedInput(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParsedInput = ParsedInput;

function ParsedInput$$get_Range(inp) {
  var $target$$23, m$$26, filename;

  if (inp.tag === 1) {
    if (inp.fields[0].fields[4].tail != null) {
      $target$$23 = 0;
      m$$26 = inp.fields[0].fields[4].head.fields[7];
    } else {
      $target$$23 = 1;
      filename = inp.fields[0].fields[0];
    }
  } else if (inp.fields[0].fields[5].tail != null) {
    $target$$23 = 0;
    m$$26 = inp.fields[0].fields[5].head.fields[7];
  } else {
    $target$$23 = 1;
    filename = inp.fields[0].fields[0];
  }

  switch ($target$$23) {
    case 0:
      {
        return m$$26;
      }

    case 1:
      {
        return (0, _range.rangeN)(filename, 0);
      }
  }
}

const SynArgNameGenerator = (0, _Types.declare)(function SynArgNameGenerator() {
  const $this$$4 = this;
  $this$$4.count = 0;
  $this$$4.generatedArgNamePrefix = "_arg";
});
exports.SynArgNameGenerator = SynArgNameGenerator;

function SynArgNameGenerator$$$$002Ector() {
  return this != null ? SynArgNameGenerator.call(this) : new SynArgNameGenerator();
}

function SynArgNameGenerator$$New(__) {
  __.count = __.count + 1;
  return __.generatedArgNamePrefix + (0, _Util.int32ToString)(__.count);
}

function SynArgNameGenerator$$Reset(__$$1) {
  __$$1.count = 0;
}

function mkSynId(m$$27, s$$1) {
  return Ident$$$$002Ector$$7EA1AB7(s$$1, m$$27);
}

function pathToSynLid(m$$28, p$$1) {
  return (0, _List.map)(function (s$$2) {
    return mkSynId(m$$28, s$$2);
  }, p$$1);
}

function mkSynIdGet(m$$29, n) {
  return new SynExpr(28, "Ident", mkSynId(m$$29, n));
}

function mkSynLidGet(m$$30, path$$1, n$$1) {
  const lid$$6 = (0, _List.append)(pathToSynLid(m$$30, path$$1), (0, _Types.L)(mkSynId(m$$30, n$$1), (0, _Types.L)()));
  const dots$$1 = (0, _List.replicate)((0, _List.length)(lid$$6) - 1, m$$30);
  return new SynExpr(29, "LongIdent", false, new LongIdentWithDots(0, "LongIdentWithDots", lid$$6, dots$$1), null, m$$30);
}

function mkSynIdGetWithAlt(m$$31, id$$11, altInfo) {
  if (altInfo == null) {
    return new SynExpr(28, "Ident", id$$11);
  } else {
    return new SynExpr(29, "LongIdent", false, new LongIdentWithDots(0, "LongIdentWithDots", (0, _Types.L)(id$$11, (0, _Types.L)()), (0, _Types.L)()), altInfo, m$$31);
  }
}

function mkSynSimplePatVar(isOpt, id$$12) {
  return new SynSimplePat(0, "Id", id$$12, null, false, false, isOpt, Ident$$get_idRange(id$$12));
}

function mkSynCompGenSimplePatVar(id$$13) {
  return new SynSimplePat(0, "Id", id$$13, null, true, false, false, Ident$$get_idRange(id$$13));
}

function $007CLongOrSingleIdent$007C_$007C(inp$$1) {
  switch (inp$$1.tag) {
    case 29:
      {
        const lidwd$$3 = inp$$1.fields[1];
        const isOpt$$1 = inp$$1.fields[0];
        const altId = inp$$1.fields[2];
        const _m = inp$$1.fields[3];
        return [isOpt$$1, lidwd$$3, altId, LongIdentWithDots$$get_RangeSansAnyExtraDot(lidwd$$3)];
      }

    case 28:
      {
        const id$$14 = inp$$1.fields[0];
        return [false, new LongIdentWithDots(0, "LongIdentWithDots", (0, _Types.L)(id$$14, (0, _Types.L)()), (0, _Types.L)()), null, Ident$$get_idRange(id$$14)];
      }

    default:
      {
        return null;
      }
  }
}

function $007CSingleIdent$007C_$007C(inp$$2) {
  var $target$$24, id$$15, id$$16;

  if (inp$$2.tag === 29) {
    if (inp$$2.fields[0]) {
      $target$$24 = 2;
    } else if (inp$$2.fields[1].fields[0].tail != null) {
      if (inp$$2.fields[1].fields[0].tail.tail == null) {
        if (inp$$2.fields[2] == null) {
          $target$$24 = 0;
          id$$15 = inp$$2.fields[1].fields[0].head;
        } else {
          $target$$24 = 2;
        }
      } else {
        $target$$24 = 2;
      }
    } else {
      $target$$24 = 2;
    }
  } else if (inp$$2.tag === 28) {
    $target$$24 = 1;
    id$$16 = inp$$2.fields[0];
  } else {
    $target$$24 = 2;
  }

  switch ($target$$24) {
    case 0:
      {
        return id$$15;
      }

    case 1:
      {
        return id$$16;
      }

    case 2:
      {
        return null;
      }
  }
}

function IsControlFlowExpression(e$$11) {
  IsControlFlowExpression: while (true) {
    var $target$$25, e$$12;

    if (e$$11.tag === 9) {
      $target$$25 = 0;
    } else if (e$$11.tag === 15) {
      $target$$25 = 0;
    } else if (e$$11.tag === 22) {
      $target$$25 = 0;
    } else if (e$$11.tag === 26) {
      $target$$25 = 0;
    } else if (e$$11.tag === 20) {
      if (e$$11.fields[2].tag === 28) {
        if (e$$11.fields[3].tag === 14) {
          $target$$25 = 0;
        } else {
          $target$$25 = 2;
        }
      } else {
        $target$$25 = 2;
      }
    } else if (e$$11.tag === 27) {
      $target$$25 = 0;
    } else if (e$$11.tag === 50) {
      $target$$25 = 0;
    } else if (e$$11.tag === 17) {
      $target$$25 = 0;
    } else if (e$$11.tag === 23) {
      $target$$25 = 0;
    } else if (e$$11.tag === 24) {
      $target$$25 = 0;
    } else if (e$$11.tag === 11) {
      $target$$25 = 0;
    } else if (e$$11.tag === 12) {
      $target$$25 = 0;
    } else if (e$$11.tag === 10) {
      $target$$25 = 0;
    } else if (e$$11.tag === 3) {
      $target$$25 = 1;
      e$$12 = e$$11.fields[0];
    } else {
      $target$$25 = 2;
    }

    switch ($target$$25) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          e$$11 = e$$12;
          continue IsControlFlowExpression;
        }

      case 2:
        {
          return false;
        }
    }
  }
}

function mkAnonField(ty$$1) {
  return new SynField(0, "Field", (0, _Types.L)(), false, null, ty$$1, false, PreXmlDoc$$$get_Empty(), null, SynType$$get_Range(ty$$1));
}

function mkNamedField(ident$$1, ty$$2) {
  return new SynField(0, "Field", (0, _Types.L)(), false, ident$$1, ty$$2, false, PreXmlDoc$$$get_Empty(), null, SynType$$get_Range(ty$$2));
}

function mkSynPatVar(vis, id$$17) {
  return new SynPat(2, "Named", new SynPat(1, "Wild", Ident$$get_idRange(id$$17)), id$$17, false, vis, Ident$$get_idRange(id$$17));
}

function mkSynThisPatVar(id$$18) {
  return new SynPat(2, "Named", new SynPat(1, "Wild", Ident$$get_idRange(id$$18)), id$$18, true, null, Ident$$get_idRange(id$$18));
}

function mkSynPatMaybeVar(lidwd$$4, vis$$1, m$$32) {
  return new SynPat(7, "LongIdent", lidwd$$4, null, null, new SynConstructorArgs(0, "Pats", (0, _Types.L)()), vis$$1, m$$32);
}

function $007CSynPatForConstructorDecl$007C_$007C(x$$26) {
  var $target$$26, arg;

  if (x$$26.tag === 7) {
    if (x$$26.fields[0].fields[0].tail != null) {
      if (x$$26.fields[0].fields[0].tail.tail == null) {
        if (x$$26.fields[3].tag === 0) {
          if (x$$26.fields[3].fields[0].tail != null) {
            if (x$$26.fields[3].fields[0].tail.tail == null) {
              $target$$26 = 0;
              arg = x$$26.fields[3].fields[0].head;
            } else {
              $target$$26 = 1;
            }
          } else {
            $target$$26 = 1;
          }
        } else {
          $target$$26 = 1;
        }
      } else {
        $target$$26 = 1;
      }
    } else {
      $target$$26 = 1;
    }
  } else {
    $target$$26 = 1;
  }

  switch ($target$$26) {
    case 0:
      {
        return arg;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CSynPatForNullaryArgs$007C_$007C(x$$27) {
  var $target$$27;

  if (x$$27.tag === 10) {
    if (x$$27.fields[0].tag === 0) {
      if (x$$27.fields[0].fields[0].tag === 0) {
        $target$$27 = 0;
      } else {
        $target$$27 = 1;
      }
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
    case 0:
      {
        return (0, _Option.some)(null);
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CSynExprErrorSkip$007C(p$$2) {
  if (p$$2.tag === 58) {
    const p$$3 = p$$2.fields[0];
    return p$$3;
  } else {
    return p$$2;
  }
}

function $007CSynExprParen$007C_$007C(e$$13) {
  if (e$$13.tag === 0) {
    const e$$14 = $007CSynExprErrorSkip$007C(e$$13.fields[0]);
    const c$$1 = e$$13.fields[3];
    const b$$2 = e$$13.fields[2];
    const a$$2 = e$$13.fields[1];
    return [e$$14, a$$2, b$$2, c$$1];
  } else {
    return null;
  }
}

function $007CSynPatErrorSkip$007C(p$$4) {
  if (p$$4.tag === 19) {
    const p$$5 = p$$4.fields[0];
    return p$$5;
  } else {
    return p$$4;
  }
}

function SimplePatOfPat(synArgNameGenerator, p$$6) {
  SimplePatOfPat: while (true) {
    var $target$$28, m$$33, p$0027, ty$$3, attribs, m$$34, p$0027$$1, m$$35, thisv, v$$1, m$$36, v$$2, p$$7, p$$8;

    if (p$$6.tag === 3) {
      $target$$28 = 0;
      m$$33 = p$$6.fields[2];
      p$0027 = p$$6.fields[0];
      ty$$3 = p$$6.fields[1];
    } else if (p$$6.tag === 4) {
      $target$$28 = 1;
      attribs = p$$6.fields[1];
      m$$34 = p$$6.fields[2];
      p$0027$$1 = p$$6.fields[0];
    } else if (p$$6.tag === 2) {
      if (p$$6.fields[0].tag === 1) {
        $target$$28 = 2;
        m$$35 = p$$6.fields[4];
        thisv = p$$6.fields[2];
        v$$1 = p$$6.fields[1];
      } else {
        $target$$28 = 6;
      }
    } else if (p$$6.tag === 14) {
      $target$$28 = 3;
      m$$36 = p$$6.fields[1];
      v$$2 = p$$6.fields[0];
    } else if (p$$6.tag === 10) {
      $target$$28 = 4;
      p$$7 = p$$6.fields[0];
    } else if (p$$6.tag === 19) {
      $target$$28 = 5;
      p$$8 = p$$6.fields[0];
    } else {
      $target$$28 = 6;
    }

    switch ($target$$28) {
      case 0:
        {
          const patternInput = SimplePatOfPat(synArgNameGenerator, p$0027);
          return [new SynSimplePat(1, "Typed", patternInput[0], ty$$3, m$$33), patternInput[1]];
        }

      case 1:
        {
          const patternInput$$1 = SimplePatOfPat(synArgNameGenerator, p$0027$$1);
          return [new SynSimplePat(2, "Attrib", patternInput$$1[0], attribs, m$$34), patternInput$$1[1]];
        }

      case 2:
        {
          return [new SynSimplePat(0, "Id", v$$1, null, false, thisv, false, m$$35), null];
        }

      case 3:
        {
          return [new SynSimplePat(0, "Id", v$$2, null, false, false, true, m$$36), null];
        }

      case 4:
        {
          synArgNameGenerator = synArgNameGenerator;
          p$$6 = p$$7;
          continue SimplePatOfPat;
        }

      case 5:
        {
          synArgNameGenerator = synArgNameGenerator;
          p$$6 = p$$8;
          continue SimplePatOfPat;
        }

      case 6:
        {
          const m$$37 = SynPat$$get_Range(p$$6);
          let patternInput$$2;
          var $target$$29, id$$19;

          if (p$$6.tag === 7) {
            if (p$$6.fields[0].fields[0].tail != null) {
              if (p$$6.fields[0].fields[0].tail.tail == null) {
                if (p$$6.fields[2] == null) {
                  if (p$$6.fields[3].tag === 0) {
                    if (p$$6.fields[3].fields[0].tail == null) {
                      if (p$$6.fields[4] == null) {
                        $target$$29 = 0;
                        id$$19 = p$$6.fields[0].fields[0].head;
                      } else {
                        $target$$29 = 1;
                      }
                    } else {
                      $target$$29 = 1;
                    }
                  } else {
                    $target$$29 = 1;
                  }
                } else {
                  $target$$29 = 1;
                }
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
                const altNameRefCell = new _Types.FSharpRef(new SynSimplePatAlternativeIdInfo(0, "Undecided", mkSynId(m$$37, SynArgNameGenerator$$New(synArgNameGenerator))));
                const item = mkSynIdGetWithAlt(m$$37, id$$19, altNameRefCell);
                patternInput$$2 = [false, altNameRefCell, id$$19, item];
                break;
              }

            case 1:
              {
                const nm = SynArgNameGenerator$$New(synArgNameGenerator);
                const id$$20 = mkSynId(m$$37, nm);
                const item$$1 = mkSynIdGet(m$$37, nm);
                patternInput$$2 = [true, null, id$$20, item$$1];
                break;
              }
          }

          return [new SynSimplePat(0, "Id", patternInput$$2[2], patternInput$$2[1], patternInput$$2[0], false, false, Ident$$get_idRange(patternInput$$2[2])), function (e$$15) {
            const clause = new SynMatchClause(0, "Clause", p$$6, null, e$$15, m$$37, new SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
            return new SynExpr(17, "Match", new SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), patternInput$$2[3], (0, _Types.L)(clause, (0, _Types.L)()), false, SynMatchClause$$get_Range(clause));
          }];
        }
    }
  }
}

function appFunOpt(funOpt, x$$28) {
  if (funOpt != null) {
    const f = funOpt;
    return f(x$$28);
  } else {
    return x$$28;
  }
}

function composeFunOpt(funOpt1, funOpt2) {
  if (funOpt2 != null) {
    const f$$1 = funOpt2;
    return function (x$$29) {
      return appFunOpt(funOpt1, f$$1(x$$29));
    };
  } else {
    return funOpt1;
  }
}

function SimplePatsOfPat(synArgNameGenerator$$1, p$$9) {
  SimplePatsOfPat: while (true) {
    var $target$$30, p$$10, m$$38, p$0027$$2, ty$$4, m$$39, ps, m$$40;

    if (p$$9.tag === 19) {
      $target$$30 = 0;
      p$$10 = p$$9.fields[0];
    } else if (p$$9.tag === 3) {
      $target$$30 = 1;
      m$$38 = p$$9.fields[2];
      p$0027$$2 = p$$9.fields[0];
      ty$$4 = p$$9.fields[1];
    } else if (p$$9.tag === 8) {
      $target$$30 = 2;
      m$$39 = p$$9.fields[1];
      ps = p$$9.fields[0];
    } else if (p$$9.tag === 10) {
      if (p$$9.fields[0].tag === 8) {
        $target$$30 = 2;
        m$$39 = p$$9.fields[0].fields[1];
        ps = p$$9.fields[0].fields[0];
      } else if (p$$9.fields[0].tag === 0) {
        if (p$$9.fields[0].fields[0].tag === 0) {
          $target$$30 = 3;
          m$$40 = p$$9.fields[0].fields[1];
        } else {
          $target$$30 = 4;
        }
      } else {
        $target$$30 = 4;
      }
    } else if (p$$9.tag === 0) {
      if (p$$9.fields[0].tag === 0) {
        $target$$30 = 3;
        m$$40 = p$$9.fields[1];
      } else {
        $target$$30 = 4;
      }
    } else {
      $target$$30 = 4;
    }

    switch ($target$$30) {
      case 0:
        {
          synArgNameGenerator$$1 = synArgNameGenerator$$1;
          p$$9 = p$$10;
          continue SimplePatsOfPat;
        }

      case 1:
        {
          const patternInput$$3 = SimplePatsOfPat(synArgNameGenerator$$1, p$0027$$2);
          return [new SynSimplePats(1, "Typed", patternInput$$3[0], ty$$4, m$$38), patternInput$$3[1]];
        }

      case 2:
        {
          const patternInput$$4 = (0, _List.foldBack)(function (tupledArg$$6, tupledArg$$7) {
            return [(0, _Types.L)(tupledArg$$6[0], tupledArg$$7[0]), composeFunOpt(tupledArg$$6[1], tupledArg$$7[1])];
          }, (0, _List.map)(function (p$$11) {
            return SimplePatOfPat(synArgNameGenerator$$1, p$$11);
          }, ps), [(0, _Types.L)(), null]);
          return [new SynSimplePats(0, "SimplePats", patternInput$$4[0], m$$39), patternInput$$4[1]];
        }

      case 3:
        {
          return [new SynSimplePats(0, "SimplePats", (0, _Types.L)(), m$$40), null];
        }

      case 4:
        {
          const m$$41 = SynPat$$get_Range(p$$9);
          const patternInput$$5 = SimplePatOfPat(synArgNameGenerator$$1, p$$9);
          return [new SynSimplePats(0, "SimplePats", (0, _Types.L)(patternInput$$5[0], (0, _Types.L)()), m$$41), patternInput$$5[1]];
        }
    }
  }
}

function PushPatternToExpr(synArgNameGenerator$$2, isMember, pat$$1, rhs$$1) {
  const patternInput$$6 = SimplePatsOfPat(synArgNameGenerator$$2, pat$$1);
  return [patternInput$$6[0], new SynExpr(15, "Lambda", isMember, false, patternInput$$6[0], appFunOpt(patternInput$$6[1], rhs$$1), SynExpr$$get_Range(rhs$$1))];
}

function isSimplePattern(pat$$2) {
  const patternInput$$7 = SimplePatsOfPat(SynArgNameGenerator$$$$002Ector(), pat$$2);
  return patternInput$$7[1] == null;
}

function PushCurriedPatternsToExpr(synArgNameGenerator$$3, wholem, isMember$$1, pats, rhs$$2) {
  const patternInput$$9 = (0, _List.foldBack)(function folder(arg$$1, tupledArg$$8) {
    const patternInput$$8 = SimplePatsOfPat(synArgNameGenerator$$3, arg$$1);
    const body$$1 = appFunOpt(patternInput$$8[1], tupledArg$$8[1]);
    const spatsl$$1 = (0, _Types.L)(patternInput$$8[0], tupledArg$$8[0]);
    return [spatsl$$1, body$$1];
  }, pats, [(0, _Types.L)(), rhs$$2]);
  let expr$$4;

  if (patternInput$$9[0].tail != null) {
    const t$$9 = patternInput$$9[0].tail;
    const h$$4 = patternInput$$9[0].head;
    const expr$$2 = (0, _List.foldBack)(function (spats$$1, e$$16) {
      return new SynExpr(15, "Lambda", isMember$$1, true, spats$$1, e$$16, wholem);
    }, t$$9, patternInput$$9[1]);
    const expr$$3 = new SynExpr(15, "Lambda", isMember$$1, false, h$$4, expr$$2, wholem);
    expr$$4 = expr$$3;
  } else {
    expr$$4 = patternInput$$9[1];
  }

  return [patternInput$$9[0], expr$$4];
}

function ParseAssemblyCodeInstructions(_s, m$$42) {
  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$([193, "Inline IL not valid in a hosted environment"], m$$42));
  return [];
}

function ParseAssemblyCodeType(_s$$1, m$$43) {
  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$([193, "Inline IL not valid in a hosted environment"], m$$43));
  return (0, _il.ILGlobals$$get_typ_Object)(_il.EcmaMscorlibILGlobals);
}

const opNameParenGet = (0, _PrettyNaming.CompileOpName)(".()");
exports.opNameParenGet = opNameParenGet;
const opNameQMark = (0, _PrettyNaming.CompileOpName)("?");
exports.opNameQMark = opNameQMark;

function mkSynOperator(opm, oper) {
  return mkSynIdGet(opm, (0, _PrettyNaming.CompileOpName)(oper));
}

function mkSynInfix(opm$$1, l$$1, oper$$1, r$$2) {
  const firstTwoRange = (0, _range.unionRanges)(SynExpr$$get_Range(l$$1), opm$$1);
  const wholeRange = (0, _range.unionRanges)(SynExpr$$get_Range(l$$1), SynExpr$$get_Range(r$$2));
  return new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, true, mkSynOperator(opm$$1, oper$$1), l$$1, firstTwoRange), r$$2, wholeRange);
}

function mkSynBifix(m$$44, oper$$2, x1, x2) {
  return new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, true, mkSynOperator(m$$44, oper$$2), x1, m$$44), x2, m$$44);
}

function mkSynTrifix(m$$45, oper$$3, x1$$1, x2$$1, x3) {
  return new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, true, mkSynOperator(m$$45, oper$$3), x1$$1, m$$45), x2$$1, m$$45), x3, m$$45);
}

function mkSynQuadfix(m$$46, oper$$4, x1$$2, x2$$2, x3$$1, x4) {
  return new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, true, mkSynOperator(m$$46, oper$$4), x1$$2, m$$46), x2$$2, m$$46), x3$$1, m$$46), x4, m$$46);
}

function mkSynQuinfix(m$$47, oper$$5, x1$$3, x2$$3, x3$$2, x4$$1, x5) {
  return new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, false, new SynExpr(20, "App", 1, true, mkSynOperator(m$$47, oper$$5), x1$$3, m$$47), x2$$3, m$$47), x3$$2, m$$47), x4$$1, m$$47), x5, m$$47);
}

function mkSynPrefixPrim(opm$$2, m$$48, oper$$6, x$$30) {
  return new SynExpr(20, "App", 1, false, mkSynOperator(opm$$2, oper$$6), x$$30, m$$48);
}

function mkSynPrefix(opm$$3, m$$49, oper$$7, x$$31) {
  if (oper$$7 === "~&") {
    return new SynExpr(44, "AddressOf", true, x$$31, opm$$3, m$$49);
  } else if (oper$$7 === "~&&") {
    return new SynExpr(44, "AddressOf", false, x$$31, opm$$3, m$$49);
  } else {
    return mkSynPrefixPrim(opm$$3, m$$49, oper$$7, x$$31);
  }
}

function mkSynCaseName(m$$50, n$$2) {
  return (0, _Types.L)(mkSynId(m$$50, (0, _PrettyNaming.CompileOpName)(n$$2)), (0, _Types.L)());
}

function mkSynApp1(f$$2, x1$$4, m$$51) {
  return new SynExpr(20, "App", 1, false, f$$2, x1$$4, m$$51);
}

function mkSynApp2(f$$3, x1$$5, x2$$4, m$$52) {
  return mkSynApp1(mkSynApp1(f$$3, x1$$5, m$$52), x2$$4, m$$52);
}

function mkSynApp3(f$$4, x1$$6, x2$$5, x3$$3, m$$53) {
  return mkSynApp1(mkSynApp2(f$$4, x1$$6, x2$$5, m$$53), x3$$3, m$$53);
}

function mkSynApp4(f$$5, x1$$7, x2$$6, x3$$4, x4$$2, m$$54) {
  return mkSynApp1(mkSynApp3(f$$5, x1$$7, x2$$6, x3$$4, m$$54), x4$$2, m$$54);
}

function mkSynApp5(f$$6, x1$$8, x2$$7, x3$$5, x4$$3, x5$$1, m$$55) {
  return mkSynApp1(mkSynApp4(f$$6, x1$$8, x2$$7, x3$$5, x4$$3, m$$55), x5$$1, m$$55);
}

function mkSynDotParenSet(m$$56, a$$3, b$$3, c$$2) {
  return mkSynTrifix(m$$56, ".()<-", a$$3, b$$3, c$$2);
}

function mkSynDotBrackGet(m$$57, mDot, a$$4, b$$4) {
  return new SynExpr(34, "DotIndexedGet", a$$4, (0, _Types.L)(new SynIndexerArg(1, "One", b$$4), (0, _Types.L)()), mDot, m$$57);
}

function mkSynQMarkSet(m$$58, a$$5, b$$5, c$$3) {
  return mkSynTrifix(m$$58, "?<-", a$$5, b$$5, c$$3);
}

function mkSynDotBrackSliceGet(m$$59, mDot$$1, arr, sliceArg) {
  return new SynExpr(34, "DotIndexedGet", arr, (0, _Types.L)(sliceArg, (0, _Types.L)()), mDot$$1, m$$59);
}

function mkSynDotBrackSeqSliceGet(m$$60, mDot$$2, arr$$1, argslist) {
  const notsliced = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (arg$$2) {
      if (arg$$2.tag === 1) {
        const x$$32 = arg$$2.fields[0];
        return (0, _Seq.singleton)(x$$32);
      } else {
        return (0, _Seq.empty)();
      }
    }, argslist);
  }));

  if ((0, _List.length)(notsliced) === (0, _List.length)(argslist)) {
    return new SynExpr(34, "DotIndexedGet", arr$$1, (0, _Types.L)(new SynIndexerArg(1, "One", new SynExpr(4, "Tuple", notsliced, (0, _Types.L)(), (0, _range.unionRanges)(SynExpr$$get_Range((0, _List.head)(notsliced)), SynExpr$$get_Range((0, _List.last)(notsliced))))), (0, _Types.L)()), mDot$$2, m$$60);
  } else {
    return new SynExpr(34, "DotIndexedGet", arr$$1, argslist, mDot$$2, m$$60);
  }
}

function mkSynDotParenGet(lhsm, dotm, a$$6, b$$6) {
  var $target$$31;

  if (b$$6.tag === 4) {
    if (b$$6.fields[0].tail != null) {
      if (b$$6.fields[0].tail.tail != null) {
        if (b$$6.fields[0].tail.tail.tail != null) {
          if (b$$6.fields[0].tail.tail.tail.tail == null) {
            $target$$31 = 1;
          } else {
            $target$$31 = 2;
          }
        } else {
          $target$$31 = 0;
        }
      } else {
        $target$$31 = 2;
      }
    } else {
      $target$$31 = 2;
    }
  } else {
    $target$$31 = 2;
  }

  switch ($target$$31) {
    case 0:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Deprecated((0, _FSComp.SR$$$astDeprecatedIndexerNotation)(), lhsm));
        return new SynExpr(2, "Const", new SynConst(0, "Unit"), lhsm);
      }

    case 1:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Deprecated((0, _FSComp.SR$$$astDeprecatedIndexerNotation)(), lhsm));
        return new SynExpr(2, "Const", new SynConst(0, "Unit"), lhsm);
      }

    case 2:
      {
        return mkSynInfix(dotm, a$$6, ".()", b$$6);
      }
  }
}

function mkSynUnit(m$$61) {
  return new SynExpr(2, "Const", new SynConst(0, "Unit"), m$$61);
}

function mkSynUnitPat(m$$62) {
  return new SynPat(0, "Const", new SynConst(0, "Unit"), m$$62);
}

function mkSynDelay(m$$63, e$$17) {
  return new SynExpr(15, "Lambda", false, false, new SynSimplePats(0, "SimplePats", (0, _Types.L)(mkSynCompGenSimplePatVar(mkSynId(m$$63, "unitVar")), (0, _Types.L)()), m$$63), e$$17, m$$63);
}

function mkSynAssign(l$$2, r$$3) {
  var nm$$3, b$$9, a$$9, nm$$1, b$$7, a$$7;
  const m$$64 = (0, _range.unionRanges)(SynExpr$$get_Range(l$$2), SynExpr$$get_Range(r$$3));
  var $target$$32, v$$3;
  const activePatternResult20116 = $007CLongOrSingleIdent$007C_$007C(l$$2);

  if (activePatternResult20116 != null) {
    if (activePatternResult20116[0]) {
      $target$$32 = 1;
    } else if (activePatternResult20116[2] == null) {
      $target$$32 = 0;
      v$$3 = activePatternResult20116[1];
    } else {
      $target$$32 = 1;
    }
  } else {
    $target$$32 = 1;
  }

  switch ($target$$32) {
    case 0:
      {
        return new SynExpr(30, "LongIdentSet", v$$3, r$$3, m$$64);
      }

    case 1:
      {
        var $target$$33, e$$18, v$$4, e1$$3, e2$$2, mDot$$3, mLeft, x$$33, y$$1, z, a$$8, b$$8, nm$$2;

        if (l$$2.tag === 31) {
          $target$$33 = 0;
          e$$18 = l$$2.fields[0];
          v$$4 = l$$2.fields[2];
        } else if (l$$2.tag === 34) {
          $target$$33 = 1;
          e1$$3 = l$$2.fields[0];
          e2$$2 = l$$2.fields[1];
          mDot$$3 = l$$2.fields[2];
          mLeft = l$$2.fields[3];
        } else if (l$$2.tag === 55) {
          $target$$33 = 2;
          x$$33 = l$$2.fields[0];
          y$$1 = l$$2.fields[1];
          z = l$$2.fields[2];
        } else if (l$$2.tag === 20) {
          if (l$$2.fields[2].tag === 20) {
            const activePatternResult20115 = $007CSingleIdent$007C_$007C(l$$2.fields[2].fields[2]);

            if (activePatternResult20115 != null) {
              if (nm$$1 = activePatternResult20115, (b$$7 = l$$2.fields[3], (a$$7 = l$$2.fields[2].fields[3], Ident$$get_idText(nm$$1) === opNameQMark))) {
                $target$$33 = 3;
                a$$8 = l$$2.fields[2].fields[3];
                b$$8 = l$$2.fields[3];
                nm$$2 = activePatternResult20115;
              } else {
                $target$$33 = 4;
              }
            } else {
              $target$$33 = 4;
            }
          } else {
            $target$$33 = 4;
          }
        } else {
          $target$$33 = 4;
        }

        switch ($target$$33) {
          case 0:
            {
              return new SynExpr(32, "DotSet", e$$18, v$$4, r$$3, m$$64);
            }

          case 1:
            {
              return new SynExpr(35, "DotIndexedSet", e1$$3, e2$$2, r$$3, mLeft, mDot$$3, m$$64);
            }

          case 2:
            {
              return new SynExpr(56, "LibraryOnlyUnionCaseFieldSet", x$$33, y$$1, z, r$$3, m$$64);
            }

          case 3:
            {
              return mkSynQMarkSet(m$$64, a$$8, b$$8, r$$3);
            }

          case 4:
            {
              var $target$$34, a$$10, b$$10, nm$$4;

              if (l$$2.tag === 20) {
                if (l$$2.fields[2].tag === 20) {
                  const activePatternResult20114 = $007CSingleIdent$007C_$007C(l$$2.fields[2].fields[2]);

                  if (activePatternResult20114 != null) {
                    if (nm$$3 = activePatternResult20114, (b$$9 = l$$2.fields[3], (a$$9 = l$$2.fields[2].fields[3], Ident$$get_idText(nm$$3) === opNameParenGet))) {
                      $target$$34 = 0;
                      a$$10 = l$$2.fields[2].fields[3];
                      b$$10 = l$$2.fields[3];
                      nm$$4 = activePatternResult20114;
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
                    return mkSynDotParenSet(m$$64, a$$10, b$$10, r$$3);
                  }

                case 1:
                  {
                    var $target$$35, v$$5, x$$34, e$$19, v$$6, x$$35, l$$3;

                    if (l$$2.tag === 20) {
                      if (l$$2.fields[2].tag === 29) {
                        if (l$$2.fields[2].fields[0]) {
                          $target$$35 = 2;
                          l$$3 = l$$2;
                        } else if (l$$2.fields[2].fields[2] == null) {
                          $target$$35 = 0;
                          v$$5 = l$$2.fields[2].fields[1];
                          x$$34 = l$$2.fields[3];
                        } else {
                          $target$$35 = 2;
                          l$$3 = l$$2;
                        }
                      } else if (l$$2.fields[2].tag === 31) {
                        $target$$35 = 1;
                        e$$19 = l$$2.fields[2].fields[0];
                        v$$6 = l$$2.fields[2].fields[2];
                        x$$35 = l$$2.fields[3];
                      } else {
                        $target$$35 = 2;
                        l$$3 = l$$2;
                      }
                    } else {
                      $target$$35 = 2;
                      l$$3 = l$$2;
                    }

                    switch ($target$$35) {
                      case 0:
                        {
                          return new SynExpr(36, "NamedIndexedPropertySet", v$$5, x$$34, r$$3, m$$64);
                        }

                      case 1:
                        {
                          return new SynExpr(37, "DotNamedIndexedPropertySet", e$$19, v$$6, x$$35, r$$3, m$$64);
                        }

                      case 2:
                        {
                          return new SynExpr(33, "Set", l$$3, r$$3, m$$64);
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function mkSynDot(dotm$$1, m$$65, l$$4, r$$4) {
  var $target$$36, dots$$2, isOpt$$2, lid$$7, id$$22, dm, dots$$3, e$$20, lid$$8, expr$$5;

  if (l$$4.tag === 29) {
    if (l$$4.fields[2] == null) {
      $target$$36 = 0;
      dots$$2 = l$$4.fields[1].fields[1];
      isOpt$$2 = l$$4.fields[0];
      lid$$7 = l$$4.fields[1].fields[0];
    } else {
      $target$$36 = 3;
      expr$$5 = l$$4;
    }
  } else if (l$$4.tag === 28) {
    $target$$36 = 1;
    id$$22 = l$$4.fields[0];
  } else if (l$$4.tag === 31) {
    $target$$36 = 2;
    dm = l$$4.fields[1];
    dots$$3 = l$$4.fields[2].fields[1];
    e$$20 = l$$4.fields[0];
    lid$$8 = l$$4.fields[2].fields[0];
  } else {
    $target$$36 = 3;
    expr$$5 = l$$4;
  }

  switch ($target$$36) {
    case 0:
      {
        return new SynExpr(29, "LongIdent", isOpt$$2, new LongIdentWithDots(0, "LongIdentWithDots", (0, _List.append)(lid$$7, (0, _Types.L)(r$$4, (0, _Types.L)())), (0, _List.append)(dots$$2, (0, _Types.L)(dotm$$1, (0, _Types.L)()))), null, m$$65);
      }

    case 1:
      {
        return new SynExpr(29, "LongIdent", false, new LongIdentWithDots(0, "LongIdentWithDots", (0, _Types.L)(id$$22, (0, _Types.L)(r$$4, (0, _Types.L)())), (0, _Types.L)(dotm$$1, (0, _Types.L)())), null, m$$65);
      }

    case 2:
      {
        return new SynExpr(31, "DotGet", e$$20, dm, new LongIdentWithDots(0, "LongIdentWithDots", (0, _List.append)(lid$$8, (0, _Types.L)(r$$4, (0, _Types.L)())), (0, _List.append)(dots$$3, (0, _Types.L)(dotm$$1, (0, _Types.L)()))), m$$65);
      }

    case 3:
      {
        return new SynExpr(31, "DotGet", expr$$5, dotm$$1, new LongIdentWithDots(0, "LongIdentWithDots", (0, _Types.L)(r$$4, (0, _Types.L)()), (0, _Types.L)()), m$$65);
      }
  }
}

function mkSynDotMissing(dotm$$2, m$$66, l$$5) {
  var $target$$37, dots$$4, isOpt$$3, lid$$9, id$$23, dm$$1, dots$$5, e$$21, lid$$10, expr$$6;

  if (l$$5.tag === 29) {
    if (l$$5.fields[2] == null) {
      $target$$37 = 0;
      dots$$4 = l$$5.fields[1].fields[1];
      isOpt$$3 = l$$5.fields[0];
      lid$$9 = l$$5.fields[1].fields[0];
    } else {
      $target$$37 = 3;
      expr$$6 = l$$5;
    }
  } else if (l$$5.tag === 28) {
    $target$$37 = 1;
    id$$23 = l$$5.fields[0];
  } else if (l$$5.tag === 31) {
    $target$$37 = 2;
    dm$$1 = l$$5.fields[1];
    dots$$5 = l$$5.fields[2].fields[1];
    e$$21 = l$$5.fields[0];
    lid$$10 = l$$5.fields[2].fields[0];
  } else {
    $target$$37 = 3;
    expr$$6 = l$$5;
  }

  switch ($target$$37) {
    case 0:
      {
        return new SynExpr(29, "LongIdent", isOpt$$3, new LongIdentWithDots(0, "LongIdentWithDots", lid$$9, (0, _List.append)(dots$$4, (0, _Types.L)(dotm$$2, (0, _Types.L)()))), null, m$$66);
      }

    case 1:
      {
        return new SynExpr(29, "LongIdent", false, new LongIdentWithDots(0, "LongIdentWithDots", (0, _Types.L)(id$$23, (0, _Types.L)()), (0, _Types.L)(dotm$$2, (0, _Types.L)())), null, m$$66);
      }

    case 2:
      {
        return new SynExpr(31, "DotGet", e$$21, dm$$1, new LongIdentWithDots(0, "LongIdentWithDots", lid$$10, (0, _List.append)(dots$$5, (0, _Types.L)(dotm$$2, (0, _Types.L)()))), m$$66);
      }

    case 3:
      {
        return new SynExpr(59, "DiscardAfterMissingQualificationAfterDot", expr$$6, m$$66);
      }
  }
}

function mkSynFunMatchLambdas(synArgNameGenerator$$4, isMember$$2, wholem$$1, ps$$1, e$$22) {
  const patternInput$$10 = PushCurriedPatternsToExpr(synArgNameGenerator$$4, wholem$$1, isMember$$2, ps$$1, e$$22);
  return patternInput$$10[1];
}

function arbExpr(debugStr, range$$1) {
  return new SynExpr(57, "ArbitraryAfterError", debugStr, (0, _range.range$$MakeSynthetic)(range$$1));
}

function SynExpr$$get_IsArbExprAndThusAlreadyReportedError(this$$$19) {
  if (this$$$19.tag === 57) {
    return true;
  } else {
    return false;
  }
}

const SynReturnInfo = (0, _Types.declare)(function SynReturnInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SynReturnInfo = SynReturnInfo;
const SynInfo$$$unnamedTopArg1 = new SynArgInfo(0, "SynArgInfo", (0, _Types.L)(), false, null);
exports.SynInfo$$$unnamedTopArg1 = SynInfo$$$unnamedTopArg1;
const SynInfo$$$unnamedTopArg = (0, _Types.L)(SynInfo$$$unnamedTopArg1, (0, _Types.L)());
exports.SynInfo$$$unnamedTopArg = SynInfo$$$unnamedTopArg;
const SynInfo$$$unitArgData = SynInfo$$$unnamedTopArg;
exports.SynInfo$$$unitArgData = SynInfo$$$unitArgData;
const SynInfo$$$unnamedRetVal = new SynArgInfo(0, "SynArgInfo", (0, _Types.L)(), false, null);
exports.SynInfo$$$unnamedRetVal = SynInfo$$$unnamedRetVal;
const SynInfo$$$selfMetadata = SynInfo$$$unnamedTopArg;
exports.SynInfo$$$selfMetadata = SynInfo$$$selfMetadata;

function SynInfo$$$HasNoArgs(_arg1$$2) {
  const args$$1 = _arg1$$2.fields[0];
  return args$$1.tail == null;
}

function SynInfo$$$IsOptionalArg(_arg1$$3) {
  const isOpt$$4 = _arg1$$3.fields[1];
  return isOpt$$4;
}

function SynInfo$$$HasOptionalArgs(_arg1$$4) {
  const args$$2 = _arg1$$4.fields[0];
  return (0, _List.exists)(function (list$$2) {
    return (0, _List.exists)(SynInfo$$$IsOptionalArg, list$$2);
  }, args$$2);
}

function SynInfo$$$IncorporateEmptyTupledArgForPropertyGetter(_arg1$$5) {
  const retInfo = _arg1$$5.fields[1];
  const args$$3 = _arg1$$5.fields[0];
  return new SynValInfo(0, "SynValInfo", (0, _Types.L)((0, _Types.L)(), args$$3), retInfo);
}

function SynInfo$$$IncorporateSelfArg(_arg1$$6) {
  const retInfo$$1 = _arg1$$6.fields[1];
  const args$$4 = _arg1$$6.fields[0];
  return new SynValInfo(0, "SynValInfo", (0, _Types.L)(SynInfo$$$selfMetadata, args$$4), retInfo$$1);
}

function SynInfo$$$IncorporateSetterArg(_arg1$$7) {
  const retInfo$$2 = _arg1$$7.fields[1];
  const args$$5 = _arg1$$7.fields[0];
  let args$$6;

  if (args$$5.tail != null) {
    if (args$$5.tail.tail == null) {
      args$$6 = (0, _Types.L)((0, _List.append)(args$$5.head, (0, _Types.L)(SynInfo$$$unnamedTopArg1, (0, _Types.L)())), (0, _Types.L)());
    } else {
      throw new Error("invalid setter type");
    }
  } else {
    args$$6 = (0, _Types.L)(SynInfo$$$unnamedTopArg, (0, _Types.L)());
  }

  return new SynValInfo(0, "SynValInfo", args$$6, retInfo$$2);
}

function SynInfo$$$AritiesOfArgs(_arg1$$8) {
  const args$$7 = _arg1$$8.fields[0];
  return (0, _List.map)(_List.length, args$$7);
}

function SynInfo$$$AttribsOfArgData(_arg1$$9) {
  const attribs$$1 = _arg1$$9.fields[0];
  return attribs$$1;
}

function SynInfo$$$InferSynArgInfoFromSimplePat(attribs$$2, p$$12) {
  SynInfo$$$InferSynArgInfoFromSimplePat: while (true) {
    switch (p$$12.tag) {
      case 1:
        {
          const a$$11 = p$$12.fields[0];
          attribs$$2 = attribs$$2;
          p$$12 = a$$11;
          continue SynInfo$$$InferSynArgInfoFromSimplePat;
        }

      case 2:
        {
          const attribs2 = p$$12.fields[1];
          const a$$12 = p$$12.fields[0];
          attribs$$2 = (0, _List.append)(attribs$$2, attribs2);
          p$$12 = a$$12;
          continue SynInfo$$$InferSynArgInfoFromSimplePat;
        }

      default:
        {
          const nm$$5 = p$$12.fields[0];
          const isOpt$$5 = p$$12.fields[4];
          const isCompGen$$1 = p$$12.fields[2];
          return new SynArgInfo(0, "SynArgInfo", attribs$$2, isOpt$$5, isCompGen$$1 ? null : nm$$5);
        }
    }
  }
}

function SynInfo$$$InferSynArgInfoFromSimplePats(x$$36) {
  SynInfo$$$InferSynArgInfoFromSimplePats: while (true) {
    if (x$$36.tag === 1) {
      const ps$$3 = x$$36.fields[0];
      x$$36 = ps$$3;
      continue SynInfo$$$InferSynArgInfoFromSimplePats;
    } else {
      const ps$$2 = x$$36.fields[0];
      return (0, _List.map)(function (p$$13) {
        return SynInfo$$$InferSynArgInfoFromSimplePat((0, _Types.L)(), p$$13);
      }, ps$$2);
    }
  }
}

function SynInfo$$$InferSynArgInfoFromPat(p$$14) {
  const patternInput$$11 = SimplePatsOfPat(SynArgNameGenerator$$$$002Ector(), p$$14);
  return SynInfo$$$InferSynArgInfoFromSimplePats(patternInput$$11[0]);
}

function SynInfo$$$AdjustArgsForUnitElimination(infosForArgs) {
  var $target$$38;

  if (infosForArgs.tail != null) {
    if (infosForArgs.head.tail == null) {
      if (infosForArgs.tail.tail == null) {
        $target$$38 = 0;
      } else {
        $target$$38 = 1;
      }
    } else {
      $target$$38 = 1;
    }
  } else {
    $target$$38 = 1;
  }

  switch ($target$$38) {
    case 0:
      {
        return infosForArgs;
      }

    case 1:
      {
        return (0, _List.map)(function mapping$$3(_arg1$$10) {
          if (_arg1$$10.tail == null) {
            return SynInfo$$$unitArgData;
          } else {
            const x$$37 = _arg1$$10;
            return x$$37;
          }
        }, infosForArgs);
      }
  }
}

function SynInfo$$$AdjustMemberArgs(memFlags, infosForArgs$$1) {
  var $target$$39;

  if (infosForArgs$$1.tail == null) {
    if ((0, _Util.equals)(memFlags, new MemberKind(2, "Member"))) {
      $target$$39 = 0;
    } else {
      $target$$39 = 1;
    }
  } else {
    $target$$39 = 1;
  }

  switch ($target$$39) {
    case 0:
      {
        return (0, _Types.L)((0, _Types.L)(), infosForArgs$$1);
      }

    case 1:
      {
        return infosForArgs$$1;
      }
  }
}

function SynInfo$$$InferLambdaArgs(origRhsExpr) {
  const loop = function loop(e$$24) {
    var $target$$40, rest$$1, spats$$2;

    if (e$$24.tag === 15) {
      if (e$$24.fields[0]) {
        $target$$40 = 1;
      } else {
        $target$$40 = 0;
        rest$$1 = e$$24.fields[3];
        spats$$2 = e$$24.fields[2];
      }
    } else {
      $target$$40 = 1;
    }

    switch ($target$$40) {
      case 0:
        {
          return (0, _Types.L)(SynInfo$$$InferSynArgInfoFromSimplePats(spats$$2), loop(rest$$1));
        }

      case 1:
        {
          return (0, _Types.L)();
        }
    }
  };

  return loop(origRhsExpr);
}

function SynInfo$$$InferSynReturnData(retInfo$$3) {
  if (retInfo$$3 != null) {
    const retInfo$$4 = retInfo$$3.fields[0][1];
    return retInfo$$4;
  } else {
    return SynInfo$$$unnamedRetVal;
  }
}

const SynInfo$$$emptySynValInfo = new SynValInfo(0, "SynValInfo", (0, _Types.L)(), SynInfo$$$unnamedRetVal);
const SynInfo$$$emptySynValData = new SynValData(0, "SynValData", null, SynInfo$$$emptySynValInfo, null);
exports.SynInfo$$$emptySynValData = SynInfo$$$emptySynValData;

function SynInfo$$$InferSynValData(memberFlagsOpt, pat$$3, retInfo$$5, origRhsExpr$$1) {
  const infosForExplicitArgs = pat$$3 != null ? pat$$3.tag === 7 ? pat$$3.fields[3].tag === 0 ? (0, _List.map)(SynInfo$$$InferSynArgInfoFromPat, pat$$3.fields[3].fields[0]) : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)();
  const explicitArgsAreSimple = pat$$3 != null ? pat$$3.tag === 7 ? pat$$3.fields[3].tag === 0 ? (0, _List.forAll)(isSimplePattern, pat$$3.fields[3].fields[0]) : true : true : true;
  const retInfo$$6 = SynInfo$$$InferSynReturnData(retInfo$$5);

  if (memberFlagsOpt != null) {
    const memFlags$$1 = memberFlagsOpt;
    const infosForObjArgs = memFlags$$1.IsInstance ? (0, _Types.L)(SynInfo$$$selfMetadata, (0, _Types.L)()) : (0, _Types.L)();
    const infosForArgs$$4 = SynInfo$$$AdjustMemberArgs(memFlags$$1.MemberKind, infosForExplicitArgs);
    const infosForArgs$$5 = SynInfo$$$AdjustArgsForUnitElimination(infosForArgs$$4);
    const argInfos = (0, _List.append)(infosForObjArgs, infosForArgs$$5);
    return new SynValData(0, "SynValData", memFlags$$1, new SynValInfo(0, "SynValInfo", argInfos, retInfo$$6), null);
  } else {
    const infosForLambdaArgs = SynInfo$$$InferLambdaArgs(origRhsExpr$$1);
    const infosForArgs$$2 = (0, _List.append)(infosForExplicitArgs, explicitArgsAreSimple ? infosForLambdaArgs : (0, _Types.L)());
    const infosForArgs$$3 = SynInfo$$$AdjustArgsForUnitElimination(infosForArgs$$2);
    return new SynValData(0, "SynValData", null, new SynValInfo(0, "SynValInfo", infosForArgs$$3, retInfo$$6), null);
  }
}

function mkSynBindingRhs(staticOptimizations, rhsExpr, mRhs, retInfo$$7) {
  const rhsExpr$$1 = (0, _List.foldBack)(function (tupledArg$$9, e2$$3) {
    return new SynExpr(54, "LibraryOnlyStaticOptimization", tupledArg$$9[0], tupledArg$$9[1], e2$$3, mRhs);
  }, staticOptimizations, rhsExpr);
  let patternInput$$12;

  if (retInfo$$7 == null) {
    patternInput$$12 = [rhsExpr$$1, null];
  } else {
    const tym = retInfo$$7.fields[1];
    const ty$$5 = retInfo$$7.fields[0][0];
    const rattribs = retInfo$$7.fields[0][1].fields[0];
    patternInput$$12 = [new SynExpr(3, "Typed", rhsExpr$$1, ty$$5, SynExpr$$get_Range(rhsExpr$$1)), new SynBindingReturnInfo(0, "SynBindingReturnInfo", ty$$5, tym, rattribs)];
  }

  return [patternInput$$12[0], patternInput$$12[1]];
}

function mkSynBinding(xmlDoc, headPat$$1, vis$$2, isInline, isMutable, mBind, spBind, retInfo$$8, origRhsExpr$$2, mRhs$$1, staticOptimizations$$1, attrs, memberFlagsOpt$$1) {
  const info = SynInfo$$$InferSynValData(memberFlagsOpt$$1, headPat$$1, retInfo$$8, origRhsExpr$$2);
  const patternInput$$13 = mkSynBindingRhs(staticOptimizations$$1, origRhsExpr$$2, mRhs$$1, retInfo$$8);
  return new SynBinding(0, "Binding", vis$$2, new SynBindingKind(1, "NormalBinding"), isInline, isMutable, attrs, xmlDoc, info, headPat$$1, patternInput$$13[1], patternInput$$13[0], mBind, spBind);
}

function NonVirtualMemberFlags(k) {
  return new MemberFlags(true, false, false, false, k);
}

const CtorMemberFlags = new MemberFlags(false, false, false, false, new MemberKind(1, "Constructor"));
exports.CtorMemberFlags = CtorMemberFlags;
const ClassCtorMemberFlags = new MemberFlags(false, false, false, false, new MemberKind(0, "ClassConstructor"));
exports.ClassCtorMemberFlags = ClassCtorMemberFlags;

function OverrideMemberFlags(k$$1) {
  return new MemberFlags(true, false, true, false, k$$1);
}

function AbstractMemberFlags(k$$2) {
  return new MemberFlags(true, true, false, false, k$$2);
}

function StaticMemberFlags(k$$3) {
  return new MemberFlags(false, false, false, false, k$$3);
}

const inferredTyparDecls = new SynValTyparDecls(0, "SynValTyparDecls", (0, _Types.L)(), true, (0, _Types.L)());
exports.inferredTyparDecls = inferredTyparDecls;
const noInferredTypars = new SynValTyparDecls(0, "SynValTyparDecls", (0, _Types.L)(), false, (0, _Types.L)());
exports.noInferredTypars = noInferredTypars;
const LexerIfdefStackEntry = (0, _Types.declare)(function LexerIfdefStackEntry(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LexerIfdefStackEntry = LexerIfdefStackEntry;
const LexerEndlineContinuation = (0, _Types.declare)(function LexerEndlineContinuation(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LexerEndlineContinuation = LexerEndlineContinuation;

function LexerEndlineContinuation$$get_LexerIfdefStack(x$$38) {
  var $target$$41, ifd;

  if (x$$38.tag === 1) {
    $target$$41 = 0;
    ifd = x$$38.fields[0];
  } else {
    $target$$41 = 0;
    ifd = x$$38.fields[0];
  }

  switch ($target$$41) {
    case 0:
      {
        return ifd;
      }
  }
}

const LexerIfdefExpression = (0, _Types.declare)(function LexerIfdefExpression(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LexerIfdefExpression = LexerIfdefExpression;

function LexerIfdefEval($arg$$42, $arg$$43) {
  LexerIfdefEval: while (true) {
    const lookup = $arg$$42,
          _arg1$$11 = $arg$$43;

    switch (_arg1$$11.tag) {
      case 1:
        {
          const r$$6 = _arg1$$11.fields[1];
          const l$$8 = _arg1$$11.fields[0];

          if (LexerIfdefEval(lookup, l$$8)) {
            return true;
          } else {
            $arg$$42 = lookup;
            $arg$$43 = r$$6;
            continue LexerIfdefEval;
          }
        }

      case 2:
        {
          const e$$25 = _arg1$$11.fields[0];
          return !LexerIfdefEval(lookup, e$$25);
        }

      case 3:
        {
          const id$$24 = _arg1$$11.fields[0];
          return lookup(id$$24);
        }

      default:
        {
          const r$$5 = _arg1$$11.fields[1];
          const l$$7 = _arg1$$11.fields[0];

          if (LexerIfdefEval(lookup, l$$7)) {
            $arg$$42 = lookup;
            $arg$$43 = r$$5;
            continue LexerIfdefEval;
          } else {
            return false;
          }
        }
    }
  }
}

const LexerWhitespaceContinuation = (0, _Types.declare)(function LexerWhitespaceContinuation(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LexerWhitespaceContinuation = LexerWhitespaceContinuation;

function LexerWhitespaceContinuation$$get_LexerIfdefStack(x$$39) {
  var $target$$44, ifd$$1;

  switch (x$$39.tag) {
    case 1:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 2:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 3:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 5:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 6:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 4:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 7:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 8:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 9:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 10:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
      break;

    case 11:
      $target$$44 = 1;
      break;

    default:
      $target$$44 = 0;
      ifd$$1 = x$$39.fields[0];
  }

  switch ($target$$44) {
    case 0:
      {
        return ifd$$1;
      }

    case 1:
      {
        const endl = x$$39.fields[0];
        return LexerEndlineContinuation$$get_LexerIfdefStack(endl);
      }
  }
}

const SyntaxError = (0, _Types.declare)(function SyntaxError(arg1, arg2) {
  this.Data0 = arg1;
  this.range = arg2;
}, _Types.FSharpException);
exports.SyntaxError = SyntaxError;

function posOfLexPosition(p$$16) {
  return (0, _range.mkPos)(p$$16.Line, (0, _primLexing.Position$$get_Column)(p$$16));
}

function mkSynRange(p1$$3, p2$$6) {
  return (0, _range.mkFileIndexRange)(p1$$3.FileIndex, posOfLexPosition(p1$$3), posOfLexPosition(p2$$6));
}

function LexBuffer$00601$002Eget_LexemeRange(lexbuf) {
  return mkSynRange((0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf), (0, _primLexing.LexBuffer$00601$$get_EndPos)(lexbuf));
}

function lhs(parseState) {
  const p1$$4 = (0, _primParsing.IParseState$$get_ResultStartPosition)(parseState);
  const p2$$7 = (0, _primParsing.IParseState$$get_ResultEndPosition)(parseState);
  return mkSynRange(p1$$4, p2$$7);
}

function rhs2(parseState$$1, i$$1, j) {
  const p1$$5 = (0, _primParsing.IParseState$$InputStartPosition$$Z524259A4)(parseState$$1, i$$1);
  const p2$$8 = (0, _primParsing.IParseState$$InputEndPosition$$Z524259A4)(parseState$$1, j);
  return mkSynRange(p1$$5, p2$$8);
}

function rhs(parseState$$2, i$$2) {
  return rhs2(parseState$$2, i$$2, i$$2);
}

function IParseState$002Eget_SynArgNameGenerator(x$$40) {
  const key = "SynArgNameGenerator";
  const bls = (0, _primLexing.LexBuffer$00601$$get_BufferLocalStore)((0, _primParsing.IParseState$$get_LexBuffer)(x$$40));
  let gen$$2;
  const matchValue$$1 = (0, _Util.tryGetValue)(bls, key, null);

  if (matchValue$$1[0]) {
    gen$$2 = matchValue$$1[1];
  } else {
    const gen$$1 = SynArgNameGenerator$$$$002Ector();
    bls.set(key, gen$$1);
    gen$$2 = gen$$1;
  }

  return gen$$2;
}

function IParseState$002EResetSynArgNameGenerator(x$$41) {
  SynArgNameGenerator$$Reset(IParseState$002Eget_SynArgNameGenerator(x$$41));
}

const LexbufLocalXmlDocStore$$$xmlDocKey = "XmlDoc";

function LexbufLocalXmlDocStore$$$ClearXmlDoc(lexbuf$$1) {
  (0, _primLexing.LexBuffer$00601$$get_BufferLocalStore)(lexbuf$$1).set(LexbufLocalXmlDocStore$$$xmlDocKey, XmlDocCollector$$$$002Ector());
}

function LexbufLocalXmlDocStore$$$SaveXmlDocLine(lexbuf$$2, lineText, pos$$7) {
  let collector$$4;
  const matchValue$$2 = (0, _Util.tryGetValue)((0, _primLexing.LexBuffer$00601$$get_BufferLocalStore)(lexbuf$$2), LexbufLocalXmlDocStore$$$xmlDocKey, null);

  if (matchValue$$2[0]) {
    collector$$4 = matchValue$$2[1];
  } else {
    const collector$$3 = XmlDocCollector$$$$002Ector();
    (0, _primLexing.LexBuffer$00601$$get_BufferLocalStore)(lexbuf$$2).set(LexbufLocalXmlDocStore$$$xmlDocKey, collector$$3);
    collector$$4 = collector$$3;
  }

  const collector$$5 = collector$$4;
  XmlDocCollector$$AddXmlDocLine$$Z38B2C03C(collector$$5, lineText, pos$$7);
}

function LexbufLocalXmlDocStore$$$GrabXmlDocBeforeMarker(lexbuf$$3, markerRange) {
  const matchValue$$3 = (0, _Util.tryGetValue)((0, _primLexing.LexBuffer$00601$$get_BufferLocalStore)(lexbuf$$3), LexbufLocalXmlDocStore$$$xmlDocKey, null);

  if (matchValue$$3[0]) {
    const collector$$7 = matchValue$$3[1];
    return PreXmlDoc$$$CreateFromGrabPoint$$Z3ADC1379(collector$$7, (0, _range.range$$get_End)(markerRange));
  } else {
    return PreXmlDoc$$$get_Empty();
  }
}

const NiceNameGenerator = (0, _Types.declare)(function NiceNameGenerator() {
  const $this$$5 = this;
  $this$$5.lockObj = {};
  $this$$5.basicNameCounts = new Map([]);
});
exports.NiceNameGenerator = NiceNameGenerator;

function NiceNameGenerator$$$$002Ector() {
  return this != null ? NiceNameGenerator.call(this) : new NiceNameGenerator();
}

function NiceNameGenerator$$FreshCompilerGeneratedName$$7EA1AB7(x$$42, name, m$$67) {
  return (0, _FSharp.Operators$$$Lock)(x$$42.lockObj, function () {
    var n$$4;
    const basicName = (0, _PrettyNaming.GetBasicNameOfPossibleCompilerGeneratedName)(name);
    let n$$3;
    const matchValue$$4 = (0, _Util.tryGetValue)(x$$42.basicNameCounts, basicName, 0);
    n$$3 = matchValue$$4[0] ? matchValue$$4[1] : 0;
    const nm$$6 = (0, _PrettyNaming.CompilerGeneratedNameSuffix)(basicName, (0, _Util.int32ToString)((0, _range.range$$get_StartLine)(m$$67)) + (n$$3 === 0 ? "" : (n$$4 = n$$3 | 0, "-" + (0, _Util.int32ToString)(n$$4))));
    x$$42.basicNameCounts.set(basicName, n$$3 + 1);
    return nm$$6;
  });
}

function NiceNameGenerator$$Reset(x$$43) {
  (0, _FSharp.Operators$$$Lock)(x$$43.lockObj, function () {
    x$$43.basicNameCounts.clear();
  });
}

const StableNiceNameGenerator = (0, _Types.declare)(function StableNiceNameGenerator() {
  const $this$$6 = this;
  $this$$6.lockObj = {};
  $this$$6.names = (0, _Map.createMutable)([], {
    Compare: _Util.compareArrays
  });
  $this$$6.basicNameCounts = new Map([]);
});
exports.StableNiceNameGenerator = StableNiceNameGenerator;

function StableNiceNameGenerator$$$$002Ector() {
  return this != null ? StableNiceNameGenerator.call(this) : new StableNiceNameGenerator();
}

function StableNiceNameGenerator$$GetUniqueCompilerGeneratedName$$Z576F2858(x$$44, name$$1, m$$68, uniq) {
  return (0, _FSharp.Operators$$$Lock)(x$$44.lockObj, function () {
    var n$$6;
    const basicName$$1 = (0, _PrettyNaming.GetBasicNameOfPossibleCompilerGeneratedName)(name$$1);
    const key$$1 = [basicName$$1, uniq];
    const matchValue$$5 = (0, _Util.tryGetValue)(x$$44.names, key$$1, null);

    if (matchValue$$5[0]) {
      return matchValue$$5[1];
    } else {
      let n$$5;
      const matchValue$$6 = (0, _Util.tryGetValue)(x$$44.basicNameCounts, basicName$$1, 0);
      n$$5 = matchValue$$6[0] ? matchValue$$6[1] : 0;
      const nm$$8 = (0, _PrettyNaming.CompilerGeneratedNameSuffix)(basicName$$1, (0, _Util.int32ToString)((0, _range.range$$get_StartLine)(m$$68)) + (n$$5 === 0 ? "" : (n$$6 = n$$5 | 0, "-" + (0, _Util.int32ToString)(n$$6))));
      x$$44.names.set(key$$1, nm$$8);
      x$$44.basicNameCounts.set(basicName$$1, n$$5 + 1);
      return nm$$8;
    }
  });
}

function StableNiceNameGenerator$$Reset(x$$45) {
  (0, _FSharp.Operators$$$Lock)(x$$45.lockObj, function () {
    x$$45.basicNameCounts.clear();
    x$$45.names.clear();
  });
}

function synExprContainsError(inpExpr) {
  const walkBind = function walkBind(_arg1$$12) {
    const synExpr = _arg1$$12.fields[9];
    return walkExpr(synExpr);
  };

  const walkExprs = function walkExprs(es) {
    return (0, _List.exists)(walkExpr, es);
  };

  const walkBinds = function walkBinds(es$$1) {
    return (0, _List.exists)(walkBind, es$$1);
  };

  const walkMatchClauses = function walkMatchClauses(cl) {
    return (0, _List.exists)(function predicate$$3(_arg1$$13) {
      const whenExpr = _arg1$$13.fields[1];
      const e$$26 = _arg1$$13.fields[2];

      if (walkExprOpt(whenExpr)) {
        return true;
      } else {
        return walkExpr(e$$26);
      }
    }, cl);
  };

  const walkExprOpt = function walkExprOpt(eOpt) {
    return (0, _Seq.exists)(walkExpr, (0, _Option.defaultArg)(eOpt, [], function ($x$$9) {
      return [$x$$9];
    }));
  };

  const walkExpr = function walkExpr(e$$27) {
    walkExpr: while (true) {
      var $target$$45, e$$28, e1$$5, e2$$4, es$$2, e1$$6, e2$$5;

      switch (e$$27.tag) {
        case 59:
        case 57:
          $target$$45 = 0;
          break;

        case 29:
        case 1:
        case 53:
        case 54:
        case 43:
        case 28:
        case 47:
        case 2:
          $target$$45 = 1;
          break;

        case 38:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 39:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 44:
          $target$$45 = 2;
          e$$28 = e$$27.fields[1];
          break;

        case 14:
          $target$$45 = 2;
          e$$28 = e$$27.fields[2];
          break;

        case 13:
          $target$$45 = 2;
          e$$28 = e$$27.fields[1];
          break;

        case 3:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 18:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 19:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 31:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 30:
          $target$$45 = 2;
          e$$28 = e$$27.fields[1];
          break;

        case 8:
          $target$$45 = 2;
          e$$28 = e$$27.fields[2];
          break;

        case 21:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 55:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 40:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 41:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 42:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 25:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 45:
          $target$$45 = 2;
          e$$28 = e$$27.fields[2];
          break;

        case 48:
          $target$$45 = 2;
          e$$28 = e$$27.fields[1];
          break;

        case 49:
          $target$$45 = 2;
          e$$28 = e$$27.fields[1];
          break;

        case 52:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 60:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 0:
          $target$$45 = 2;
          e$$28 = e$$27.fields[0];
          break;

        case 36:
          $target$$45 = 3;
          e1$$5 = e$$27.fields[1];
          e2$$4 = e$$27.fields[2];
          break;

        case 32:
          $target$$45 = 3;
          e1$$5 = e$$27.fields[0];
          e2$$4 = e$$27.fields[2];
          break;

        case 33:
          $target$$45 = 3;
          e1$$5 = e$$27.fields[0];
          e2$$4 = e$$27.fields[1];
          break;

        case 56:
          $target$$45 = 3;
          e1$$5 = e$$27.fields[0];
          e2$$4 = e$$27.fields[3];
          break;

        case 46:
          $target$$45 = 3;
          e1$$5 = e$$27.fields[0];
          e2$$4 = e$$27.fields[2];
          break;

        case 20:
          $target$$45 = 3;
          e1$$5 = e$$27.fields[2];
          e2$$4 = e$$27.fields[3];
          break;

        case 6:
          $target$$45 = 4;
          es$$2 = e$$27.fields[1];
          break;

        case 4:
          $target$$45 = 4;
          es$$2 = e$$27.fields[0];
          break;

        case 5:
          $target$$45 = 4;
          es$$2 = e$$27.fields[0];
          break;

        case 7:
          $target$$45 = 5;
          break;

        case 9:
          $target$$45 = 6;
          break;

        case 12:
          $target$$45 = 7;
          e1$$6 = e$$27.fields[4];
          e2$$5 = e$$27.fields[5];
          break;

        case 10:
          $target$$45 = 7;
          e1$$6 = e$$27.fields[1];
          e2$$5 = e$$27.fields[2];
          break;

        case 11:
          $target$$45 = 8;
          break;

        case 16:
          $target$$45 = 9;
          break;

        case 15:
          $target$$45 = 10;
          break;

        case 17:
          $target$$45 = 11;
          break;

        case 22:
          $target$$45 = 12;
          break;

        case 23:
          $target$$45 = 13;
          break;

        case 24:
          $target$$45 = 14;
          break;

        case 26:
          $target$$45 = 15;
          break;

        case 27:
          $target$$45 = 16;
          break;

        case 34:
          $target$$45 = 17;
          break;

        case 35:
          $target$$45 = 18;
          break;

        case 37:
          $target$$45 = 19;
          break;

        case 51:
          $target$$45 = 20;
          break;

        case 50:
          $target$$45 = 21;
          break;

        default:
          $target$$45 = 0;
      }

      switch ($target$$45) {
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
            e$$27 = e$$28;
            continue walkExpr;
          }

        case 3:
          {
            if (walkExpr(e1$$5)) {
              return true;
            } else {
              e$$27 = e2$$4;
              continue walkExpr;
            }
          }

        case 4:
          {
            return walkExprs(es$$2);
          }

        case 5:
          {
            const fs = e$$27.fields[2];
            const flds = (0, _List.choose)(function chooser(tupledArg$$10) {
              return tupledArg$$10[1];
            }, fs);
            return walkExprs(flds);
          }

        case 6:
          {
            const is = e$$27.fields[3];
            const bs = e$$27.fields[2];

            if (walkBinds(bs)) {
              return true;
            } else {
              return walkBinds((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.collect)(function (matchValue$$7) {
                  const bs$$1 = matchValue$$7.fields[1];
                  return bs$$1;
                }, is);
              })));
            }
          }

        case 7:
          {
            if (walkExpr(e1$$6)) {
              return true;
            } else {
              e$$27 = e2$$5;
              continue walkExpr;
            }
          }

        case 8:
          {
            const e3 = e$$27.fields[5];
            const e2$$6 = e$$27.fields[4];
            const e1$$7 = e$$27.fields[2];

            if (walkExpr(e1$$7) ? true : walkExpr(e2$$6)) {
              return true;
            } else {
              e$$27 = e3;
              continue walkExpr;
            }
          }

        case 9:
          {
            const cl$$1 = e$$27.fields[2];
            return walkMatchClauses(cl$$1);
          }

        case 10:
          {
            const e$$29 = e$$27.fields[3];
            e$$27 = e$$29;
            continue walkExpr;
          }

        case 11:
          {
            const e$$30 = e$$27.fields[1];
            const cl$$2 = e$$27.fields[2];

            if (walkExpr(e$$30)) {
              return true;
            } else {
              return walkMatchClauses(cl$$2);
            }
          }

        case 12:
          {
            const e$$31 = e$$27.fields[3];
            const bs$$2 = e$$27.fields[2];

            if (walkBinds(bs$$2)) {
              return true;
            } else {
              e$$27 = e$$31;
              continue walkExpr;
            }
          }

        case 13:
          {
            const e$$32 = e$$27.fields[0];
            const cl$$3 = e$$27.fields[2];

            if (walkExpr(e$$32)) {
              return true;
            } else {
              return walkMatchClauses(cl$$3);
            }
          }

        case 14:
          {
            const e2$$7 = e$$27.fields[1];
            const e1$$8 = e$$27.fields[0];

            if (walkExpr(e1$$8)) {
              return true;
            } else {
              e$$27 = e2$$7;
              continue walkExpr;
            }
          }

        case 15:
          {
            const e2$$8 = e$$27.fields[3];
            const e1$$9 = e$$27.fields[2];

            if (walkExpr(e1$$9)) {
              return true;
            } else {
              e$$27 = e2$$8;
              continue walkExpr;
            }
          }

        case 16:
          {
            const e3opt = e$$27.fields[2];
            const e2$$9 = e$$27.fields[1];
            const e1$$10 = e$$27.fields[0];

            if (walkExpr(e1$$10) ? true : walkExpr(e2$$9)) {
              return true;
            } else {
              return walkExprOpt(e3opt);
            }
          }

        case 17:
          {
            const es$$3 = e$$27.fields[1];
            const e1$$11 = e$$27.fields[0];

            if (walkExpr(e1$$11)) {
              return true;
            } else {
              return walkExprs((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.collect)(function (e$$33) {
                  return SynIndexerArg$$get_Exprs(e$$33);
                }, es$$3);
              })));
            }
          }

        case 18:
          {
            const es$$4 = e$$27.fields[1];
            const e2$$10 = e$$27.fields[2];
            const e1$$12 = e$$27.fields[0];

            if (walkExpr(e1$$12) ? true : walkExprs((0, _List.ofSeq)((0, _Seq.delay)(function () {
              return (0, _Seq.collect)(function (e$$34) {
                return SynIndexerArg$$get_Exprs(e$$34);
              }, es$$4);
            })))) {
              return true;
            } else {
              e$$27 = e2$$10;
              continue walkExpr;
            }
          }

        case 19:
          {
            const e3$$1 = e$$27.fields[3];
            const e2$$11 = e$$27.fields[2];
            const e1$$13 = e$$27.fields[0];

            if (walkExpr(e1$$13) ? true : walkExpr(e2$$11)) {
              return true;
            } else {
              e$$27 = e3$$1;
              continue walkExpr;
            }
          }

        case 20:
          {
            const e$$35 = e$$27.fields[1];
            const cl$$4 = e$$27.fields[2];

            if (walkExpr(e$$35)) {
              return true;
            } else {
              return walkMatchClauses(cl$$4);
            }
          }

        case 21:
          {
            const e2$$12 = e$$27.fields[5];
            const e1$$14 = e$$27.fields[4];

            if (walkExpr(e1$$14)) {
              return true;
            } else {
              e$$27 = e2$$12;
              continue walkExpr;
            }
          }
      }
    }
  };

  return walkExpr(inpExpr);
}