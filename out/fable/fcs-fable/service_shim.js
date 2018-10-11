"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractiveChecker$$$$002Ector$$2D2A6915 = InteractiveChecker$$$$002Ector$$2D2A6915;
exports.InteractiveChecker$$$Create$$5340C94F = InteractiveChecker$$$Create$$5340C94F;
exports.InteractiveChecker$$ParseAndCheckScript$$30230F9B = InteractiveChecker$$ParseAndCheckScript$$30230F9B;
exports.InteractiveChecker$$ParseAndCheckProject$$2E5C035B = InteractiveChecker$$ParseAndCheckProject$$2E5C035B;
exports.InteractiveChecker$$ParseAndCheckProject_simple$$2E5C035B = InteractiveChecker$$ParseAndCheckProject_simple$$2E5C035B;
exports.InteractiveChecker = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _TastPickle = require("../fsharp/TastPickle");

var _Optimizer = require("../fsharp/Optimizer");

var _Array = require("../fable-core.2.0.3/Array");

var _CompileOps = require("../fsharp/CompileOps");

var _il = require("../absil/il");

var _Seq = require("../fable-core.2.0.3/Seq");

var _List = require("../fable-core.2.0.3/List");

var _ilread = require("../absil/ilread");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _illib = require("../absil/illib");

var _TastOps = require("../fsharp/TastOps");

var _Event = _interopRequireDefault(require("../fable-core.2.0.3/Event"));

var _import = require("../fsharp/import");

var _tast = require("../fsharp/tast");

var _Util = require("../fable-core.2.0.3/Util");

var _Option = require("../fable-core.2.0.3/Option");

var _range = require("../fsharp/range");

var _Map = require("../fable-core.2.0.3/Map");

var _String = require("../fable-core.2.0.3/String");

var _TcGlobals = require("../fsharp/TcGlobals");

var _ast = require("../fsharp/ast");

var _lexhelp = require("../fsharp/lexhelp");

var _TypeChecker = require("../fsharp/TypeChecker");

var _AsyncBuilder = require("../fable-core.2.0.3/AsyncBuilder");

var _adapters = require("./adapters");

var _ServiceUntypedParse = require("../service/ServiceUntypedParse");

var _service = require("../service/service");

var _SymbolHelpers = require("../symbols/SymbolHelpers");

var _NameResolution = require("../fsharp/NameResolution");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InteractiveChecker = (0, _Types.declare)(function InteractiveChecker(tcConfig, tcGlobals, tcImports, tcInitialState, ctok, reactorOps, moduleNamesDict) {
  const $this$$1 = this;
  $this$$1.tcConfig = tcConfig;
  $this$$1.tcGlobals = tcGlobals;
  $this$$1.tcImports = tcImports;
  $this$$1.tcInitialState = tcInitialState;
  $this$$1.ctok = ctok;
  $this$$1.reactorOps = reactorOps;
  $this$$1.moduleNamesDict = moduleNamesDict;
  $this$$1.userOpName = "Unknown";
});
exports.InteractiveChecker = InteractiveChecker;

function InteractiveChecker$$$$002Ector$$2D2A6915(tcConfig, tcGlobals, tcImports, tcInitialState, ctok, reactorOps, moduleNamesDict) {
  return this != null ? InteractiveChecker.call(this, tcConfig, tcGlobals, tcImports, tcInitialState, ctok, reactorOps, moduleNamesDict) : new InteractiveChecker(tcConfig, tcGlobals, tcImports, tcInitialState, ctok, reactorOps, moduleNamesDict);
}

function InteractiveChecker$$$Create$$5340C94F(references, readAllBytes, defines) {
  const GetSignatureData = function GetSignatureData(tupledArg) {
    return (0, _TastPickle.unpickleObjWithDanglingCcus)(tupledArg[0], tupledArg[1], tupledArg[2], _TastPickle.unpickleCcuInfo, tupledArg[3]);
  };

  const GetOptimizationData = function GetOptimizationData(tupledArg$$1) {
    return (0, _TastPickle.unpickleObjWithDanglingCcus)(tupledArg$$1[0], tupledArg$$1[1], tupledArg$$1[2], _Optimizer.u_CcuOptimizationInfo, tupledArg$$1[3]);
  };

  const tcConfig$$1 = (0, _CompileOps.TcConfig$$$$002Ector$$Z462A125)(true, (0, _Array.toList)(defines));
  const tcImports$$1 = (0, _CompileOps.TcImports$$$$002Ector)();
  const ilGlobals = _il.EcmaMscorlibILGlobals;

  const sigDataReaders = function sigDataReaders(ilModule$$2) {
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (resource) {
        if ((0, _CompileOps.IsSignatureDataResource)(resource)) {
          const ccuName = (0, _CompileOps.GetSignatureDataResourceName)(resource);
          return (0, _Seq.singleton)((0, _il.ILResource$$GetBytes)(resource));
        } else {
          return (0, _Seq.empty)();
        }
      }, (0, _il.ILResources$$get_AsList)(ilModule$$2.Resources));
    }));
  };

  const optDataReaders = function optDataReaders(ilModule$$3) {
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (resource$$1) {
        if ((0, _CompileOps.IsOptimizationDataResource)(resource$$1)) {
          const ccuName$$1 = (0, _CompileOps.GetOptimizationDataResourceName)(resource$$1);
          return (0, _Seq.singleton)((0, _il.ILResource$$GetBytes)(resource$$1));
        } else {
          return (0, _Seq.empty)();
        }
      }, (0, _il.ILResources$$get_AsList)(ilModule$$3.Resources));
    }));
  };

  const LoadMod = function LoadMod(ccuName$$2) {
    const fileName = ccuName$$2 + ".dll";
    const bytes$$2 = readAllBytes(fileName);
    const opts = new _ilread.ILReaderOptions(null, ilGlobals, new _ilread.ReduceMemoryFlag(0, "Yes"), new _ilread.MetadataOnlyFlag(0, "Yes"), function (_arg1) {
      return null;
    });
    const reader = (0, _ilread.OpenILModuleReaderFromBytes)(fileName, bytes$$2, opts);
    return reader.ILModuleDef;
  };

  const memoize_mod = (0, _illib.MemoizationTable$00602$$$$002Ector$$Z1CDD427E)(LoadMod, (0, _FSharp.HashIdentity$$$Structural)());

  const LoadSigData = function LoadSigData(ccuName$$3) {
    const fileName$$1 = ccuName$$3 + ".dll";
    const ilScopeRef$$2 = new _il.ILScopeRef(2, "Assembly", (0, _il.mkSimpleAssRef)(ccuName$$3));
    const ilModule$$4 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, ccuName$$3);
    const matchValue = sigDataReaders(ilModule$$4);

    if (matchValue.tail != null) {
      const bytes$$3 = matchValue.head;
      return GetSignatureData([fileName$$1, ilScopeRef$$2, ilModule$$4, bytes$$3]);
    } else {
      return null;
    }
  };

  const LoadOptData = function LoadOptData(ccuName$$4) {
    const fileName$$2 = ccuName$$4 + ".dll";
    const ilScopeRef$$3 = new _il.ILScopeRef(2, "Assembly", (0, _il.mkSimpleAssRef)(ccuName$$4));
    const ilModule$$5 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, ccuName$$4);
    const matchValue$$1 = optDataReaders(ilModule$$5);

    if (matchValue$$1.tail != null) {
      const bytes$$4 = matchValue$$1.head;
      return GetOptimizationData([fileName$$2, ilScopeRef$$3, ilModule$$5, bytes$$4]);
    } else {
      return null;
    }
  };

  const memoize_sig = (0, _illib.MemoizationTable$00602$$$$002Ector$$Z1CDD427E)(LoadSigData, (0, _FSharp.HashIdentity$$$Structural)());
  const memoize_opt = (0, _illib.MemoizationTable$00602$$$$002Ector$$Z1CDD427E)(LoadOptData, (0, _FSharp.HashIdentity$$$Structural)());

  const GetCustomAttributesOfIlModule = function GetCustomAttributesOfIlModule(ilModule$$6) {
    let copyOfStruct;

    if (ilModule$$6.Manifest == null) {
      copyOfStruct = (0, _il.ILModuleDef$$get_CustomAttrs)(ilModule$$6);
    } else {
      const m = ilModule$$6.Manifest;
      copyOfStruct = (0, _il.ILAssemblyManifest$$get_CustomAttrs)(m);
    }

    return (0, _il.ILAttributes$$get_AsList)(copyOfStruct);
  };

  const GetAutoOpenAttributes = function GetAutoOpenAttributes(ilg, ilModule$$7) {
    return (0, _List.choose)(function chooser(arg10$0040) {
      return (0, _TastOps.TryFindAutoOpenAttr)(ilg, arg10$0040);
    }, GetCustomAttributesOfIlModule(ilModule$$7));
  };

  const GetInternalsVisibleToAttributes = function GetInternalsVisibleToAttributes(ilg$$1, ilModule$$8) {
    return (0, _List.choose)(function chooser$$1(arg10$0040$$1) {
      return (0, _TastOps.TryFindInternalsVisibleToAttr)(ilg$$1, arg10$0040$$1);
    }, GetCustomAttributesOfIlModule(ilModule$$8));
  };

  const HasAnyFSharpSignatureDataAttribute = function HasAnyFSharpSignatureDataAttribute(ilModule$$9) {
    const attrs = GetCustomAttributesOfIlModule(ilModule$$9);
    return (0, _List.exists)(_TastOps.IsSignatureDataVersionAttr, attrs);
  };

  const mkCcuInfo = function mkCcuInfo(ilg$$2, ilScopeRef$$4, ilModule$$10, ccu) {
    return new _CompileOps.ImportedAssembly(ilScopeRef$$4, ccu, GetAutoOpenAttributes(ilg$$2, ilModule$$10), GetInternalsVisibleToAttributes(ilg$$2, ilModule$$10), (0, _illib.notlazy)(null));
  };

  const GetCcuIL = function GetCcuIL(m$$1, ccuName$$5) {
    const auxModuleLoader = function auxModuleLoader(_arg1$$1) {
      switch (_arg1$$1.tag) {
        case 1:
          {
            const x = _arg1$$1.fields[0];
            return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, (0, _il.ILModuleRef$$get_Name)(x));
          }

        case 2:
          {
            const x$$1 = _arg1$$1.fields[0];
            return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, (0, _il.ILAssemblyRef$$get_Name)(x$$1));
          }

        default:
          {
            throw new Error("Unsupported reference");
          }
      }
    };

    const ilModule$$11 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, ccuName$$5);
    const fileName$$3 = ilModule$$11.Name;
    const ilScopeRef$$5 = new _il.ILScopeRef(2, "Assembly", (0, _il.mkSimpleAssRef)(ccuName$$5));
    const invalidateCcu = new _Event.default();
    const ccu$$1 = (0, _import.ImportILAssembly)(function () {
      return (0, _CompileOps.TcImports$$GetImportMap)(tcImports$$1);
    }, m$$1, auxModuleLoader, ilScopeRef$$5, (0, _CompileOps.TcConfig$$get_implicitIncludeDir)(tcConfig$$1), fileName$$3, ilModule$$11, invalidateCcu.Publish);
    const ccuInfo = mkCcuInfo(ilGlobals, ilScopeRef$$5, ilModule$$11, ccu$$1);
    return [ccuInfo, null];
  };

  const GetCcuFS = function GetCcuFS(m$$2, ccuName$$6) {
    const sigdata = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_sig, ccuName$$6);
    const ilModule$$12 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, ccuName$$6);
    const fileName$$4 = ilModule$$12.Name;
    const ilScopeRef$$6 = new _il.ILScopeRef(2, "Assembly", (0, _il.mkSimpleAssRef)(ccuName$$6));

    const GetRawTypeForwarders = function GetRawTypeForwarders(ilModule$$13) {
      if (ilModule$$13.Manifest == null) {
        return (0, _il.mkILExportedTypes)((0, _Types.L)());
      } else {
        const manifest = ilModule$$13.Manifest;
        return manifest.ExportedTypes;
      }
    };

    const minfo = sigdata.RawData;
    const codeDir = minfo.compileTimeWorkingDir;
    const ccuData = new _tast.CcuData(fileName$$4, ilScopeRef$$6, (0, _tast.newStamp)(), (0, _il.ILScopeRef$$get_QualifiedName)(ilScopeRef$$6), codeDir, true, minfo.usesQuotations, minfo.mspec, function () {
      return ilModule$$12;
    }, function MemberSignatureEquality(ty1, ty2) {
      return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(0, "EraseAll"), (0, _CompileOps.TcImports$$GetTcGlobals)(tcImports$$1), ty1, ty2);
    }, (0, _import.ImportILAssemblyTypeForwarders)(function () {
      return (0, _CompileOps.TcImports$$GetImportMap)(tcImports$$1);
    }, m$$2, GetRawTypeForwarders(ilModule$$12)));
    const optdata = new _Util.Lazy(function () {
      const matchValue$$4 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_opt, ccuName$$6);

      if (matchValue$$4 != null) {
        const data = matchValue$$4;

        const findCcuInfo = function findCcuInfo(name) {
          return (0, _CompileOps.TcImports$$FindCcu$$Z721E3662)(tcImports$$1, m$$2, name);
        };

        return (0, _TastPickle.PickledDataWithReferences$00601$$OptionalFixup$$74A145F)(data, findCcuInfo);
      } else {
        return null;
      }
    });
    const ccu$$2 = (0, _tast.CcuThunk$$$Create$$Z68F5F4C0)(ccuName$$6, ccuData);
    const ccuInfo$$1 = mkCcuInfo(ilGlobals, ilScopeRef$$6, ilModule$$12, ccu$$2);
    const ccuOptInfo = new _CompileOps.ImportedAssembly(ccuInfo$$1.ILScopeRef, ccuInfo$$1.FSharpViewOfMetadata, ccuInfo$$1.AssemblyAutoOpenAttributes, ccuInfo$$1.AssemblyInternalsVisibleToAttributes, optdata);
    return [ccuOptInfo, sigdata];
  };

  const GetCcu = function GetCcu(m$$3, ccuName$$7) {
    const ilModule$$14 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(memoize_mod, ccuName$$7);

    if (HasAnyFSharpSignatureDataAttribute(ilModule$$14)) {
      return GetCcuFS(m$$3, ccuName$$7);
    } else {
      return GetCcuIL(m$$3, ccuName$$7);
    }
  };

  const fixupCcuInfo = function fixupCcuInfo(refCcusUnfixed) {
    const refCcus = (0, _List.map)(function mapping(tuple) {
      return tuple[0];
    }, refCcusUnfixed);

    const findCcuInfo$$1 = function findCcuInfo$$1(name$$1) {
      return (0, _Option.defaultArg)((0, _List.tryFind)(function predicate(x$$2) {
        return (0, _tast.CcuThunk$$get_AssemblyName)(x$$2.FSharpViewOfMetadata) === name$$1;
      }, refCcus), null, function mapping$$1(x$$3) {
        return x$$3.FSharpViewOfMetadata;
      });
    };

    const fixup = function fixup(data$$1) {
      (0, _TastPickle.PickledDataWithReferences$00601$$OptionalFixup$$74A145F)(data$$1, findCcuInfo$$1);
    };

    (0, _List.iterate)(fixup, (0, _List.choose)(function chooser$$2(tuple$$1) {
      return tuple$$1[1];
    }, refCcusUnfixed));
    return refCcus;
  };

  const m$$4 = (0, _range.range$$$get_Zero)();
  const refCcusUnfixed$$1 = (0, _List.map)((0, _Util.partialApply)(1, GetCcu, [m$$4]), (0, _List.ofArray)(references));
  const refCcus$$1 = fixupCcuInfo(refCcusUnfixed$$1);
  const sysCcus = (0, _List.filter)(function predicate$$1(x$$4) {
    return (0, _tast.CcuThunk$$get_AssemblyName)(x$$4.FSharpViewOfMetadata) !== "FSharp.Core";
  }, refCcus$$1);
  const fslibCcu = (0, _List.find)(function predicate$$2(x$$5) {
    return (0, _tast.CcuThunk$$get_AssemblyName)(x$$5.FSharpViewOfMetadata) === "FSharp.Core";
  }, refCcus$$1);
  const ccuInfos = (0, _List.append)((0, _Types.L)(fslibCcu, (0, _Types.L)()), sysCcus);
  const ccuMap = (0, _Map.ofList)((0, _List.map)(function mapping$$3(ccuInfo$$2) {
    return [(0, _tast.CcuThunk$$get_AssemblyName)(ccuInfo$$2.FSharpViewOfMetadata), ccuInfo$$2];
  }, ccuInfos), {
    Compare: _Util.comparePrimitives
  });

  const ccuHasType = function ccuHasType(ccu$$3, nsname, tname) {
    const matchValue$$5 = (0, _List.fold)(function folder(entityOpt, n) {
      if (entityOpt != null) {
        const entity = entityOpt;
        return (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames)((0, _tast.Entity$$get_ModuleOrNamespaceType)(entity)), n);
      } else {
        return null;
      }
    }, (0, _tast.CcuThunk$$get_Contents)(ccu$$3), nsname);

    if (matchValue$$5 == null) {
      return false;
    } else {
      const ns = matchValue$$5;

      if ((0, _Map.tryFind)(tname, (0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)((0, _tast.Entity$$get_ModuleOrNamespaceType)(ns))) == null) {
        return false;
      } else {
        return true;
      }
    }
  };

  const tryFindSysTypeCcu = function tryFindSysTypeCcu(nsname$$1, typeName) {
    const search = (0, _List.tryFind)(function predicate$$3(ccuInfo$$3) {
      return ccuHasType(ccuInfo$$3.FSharpViewOfMetadata, nsname$$1, typeName);
    }, sysCcus);

    if (search == null) {
      (0, _String.toConsole)((0, _String.printf)("Cannot find type %s.%s"))((0, _String.join)(".", ...nsname$$1))(typeName);
      return null;
    } else {
      const x$$6 = search;
      return x$$6.FSharpViewOfMetadata;
    }
  };

  const tcGlobals$$1 = (0, _TcGlobals.TcGlobals$$$$002Ector$$36FDBAF1)((0, _CompileOps.TcConfig$$get_compilingFslib)(tcConfig$$1), ilGlobals, fslibCcu.FSharpViewOfMetadata, (0, _CompileOps.TcConfig$$get_implicitIncludeDir)(tcConfig$$1), (0, _CompileOps.TcConfig$$get_mlCompatibility)(tcConfig$$1), (0, _CompileOps.TcConfig$$get_isInteractive)(tcConfig$$1), tryFindSysTypeCcu, (0, _CompileOps.TcConfig$$get_emitDebugInfoInQuotations)(tcConfig$$1), (0, _CompileOps.TcConfig$$get_noDebugData)(tcConfig$$1));
  (0, _CompileOps.TcImports$$SetCcuMap$$28CF8636)(tcImports$$1, ccuMap);
  (0, _CompileOps.TcImports$$SetTcGlobals$$2AE8EA0C)(tcImports$$1, tcGlobals$$1);
  const niceNameGen = (0, _ast.NiceNameGenerator$$$$002Ector)();
  const amap = (0, _CompileOps.TcImports$$GetImportMap)(tcImports$$1);
  const rng = (0, _range.rangeN)(_lexhelp.stdinMockFilename, 0);
  const assemblyName = "Project";
  const ccus = (0, _List.map)(function mapping$$4(x$$7) {
    return [x$$7.FSharpViewOfMetadata, x$$7.AssemblyAutoOpenAttributes, x$$7.AssemblyInternalsVisibleToAttributes];
  }, ccuInfos);
  const tcInitialEnv = (0, _TypeChecker.CreateInitialTcEnv)(tcGlobals$$1, amap, rng, assemblyName, ccus);
  const tcInitialState$$1 = (0, _CompileOps.GetInitialTcState)(_range.rangeStartup, assemblyName, tcConfig$$1, tcGlobals$$1, tcImports$$1, niceNameGen, tcInitialEnv);
  const ctok$$1 = (0, _illib.CompilationThreadToken$$$$002Ector)();
  const reactorOps$$1 = {
    EnqueueAndAwaitOpAsync(userOpName, opName, opArg, op) {
      return _AsyncBuilder.singleton.Return((0, _illib.CancellableModule$$$runWithoutCancellation)(op(ctok$$1)));
    },

    EnqueueOp(userOpName$$1, opName$$1, opArg$$1, op$$1) {
      op$$1(ctok$$1);
    }

  };
  const moduleNamesDict$$1 = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector)();
  return InteractiveChecker$$$$002Ector$$2D2A6915(tcConfig$$1, tcGlobals$$1, tcImports$$1, tcInitialState$$1, ctok$$1, reactorOps$$1, moduleNamesDict$$1);
}

function InteractiveChecker$$MakeProjectResults$$Z293F0FF8(x$$8, projectFileName, parseResults, tcState, errors, symbolUses, topAttrsOpt, tcImplFilesOpt) {
  const assemblyRef = (0, _il.mkSimpleAssRef)("stdin");
  const assemblyDataOpt = null;
  const access = (0, _TypeChecker.TcEnv$$get_AccessRights)((0, _CompileOps.TcState$$get_TcEnvFromImpls)(tcState));
  const dependencyFiles = (0, _Array.concat)((0, _Seq.map)(function mapping$$5(x$$9) {
    return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_DependencyFiles)(x$$9);
  }, parseResults), Array);
  const details = [x$$8.tcGlobals, x$$8.tcImports, (0, _CompileOps.TcState$$get_Ccu)(tcState), (0, _CompileOps.TcState$$get_CcuSig)(tcState), symbolUses, topAttrsOpt, assemblyDataOpt, assemblyRef, access, tcImplFilesOpt, dependencyFiles];
  return (0, _service.FSharpCheckProjectResults$$$$002Ector$$1F668A04)(projectFileName, x$$8.tcConfig, true, errors, details);
}

function InteractiveChecker$$ParseScript$$Z384F8060(x$$10, filename$$2, source$$1) {
  const parsingOptions = (0, _service.FSharpParsingOptions$$$FromTcConfig$$5BB1913B)(x$$10.tcConfig, [filename$$2], true);
  const patternInput = (0, _service.Parser$$$parseFile)(source$$1, filename$$2, parsingOptions, x$$10.userOpName);
  const parseTreeOpt$$1 = (0, _Option.defaultArg)(patternInput[1], null, function mapping$$6(input) {
    return (0, _CompileOps.DeduplicateParsedInputModuleName)(x$$10.moduleNamesDict, input);
  });
  const dependencyFiles$$1 = [];
  return (0, _ServiceUntypedParse.FSharpParseFileResults$$$$002Ector$$693AD653)(patternInput[0], parseTreeOpt$$1, patternInput[2], dependencyFiles$$1);
}

function InteractiveChecker$$ParseAndCheckScript$$30230F9B(x$$11, projectFileName$$1, filename$$3, source$$2) {
  const parseResults$$1 = InteractiveChecker$$ParseScript$$Z384F8060(x$$11, filename$$3, source$$2);
  const loadClosure = null;
  const backgroundErrors = [];

  const checkAlive = function checkAlive() {
    return true;
  };

  const textSnapshotInfo = null;
  const tcState$$1 = x$$11.tcInitialState;
  const tcResults = (0, _service.Parser$$$CheckOneFile)(parseResults$$1, source$$2, filename$$3, projectFileName$$1, x$$11.tcConfig, x$$11.tcGlobals, x$$11.tcImports, tcState$$1, loadClosure, backgroundErrors, x$$11.reactorOps, checkAlive, textSnapshotInfo, x$$11.userOpName);

  if (tcResults[1].tag === 1) {
    const tcErrors = tcResults[0];
    const scope = tcResults[1].fields[0];
    const errors$$1 = (0, _Array.append)((0, _ServiceUntypedParse.FSharpParseFileResults$$get_Errors)(parseResults$$1), tcErrors, Array);
    let tcImplFilesOpt$$1;
    const matchValue$$7 = (0, _service.TypeCheckInfo$$get_ImplementationFile)(scope);

    if (matchValue$$7 == null) {
      tcImplFilesOpt$$1 = null;
    } else {
      const x$$12 = matchValue$$7;
      tcImplFilesOpt$$1 = (0, _Types.L)(x$$12, (0, _Types.L)());
    }

    const typeCheckResults = (0, _service.FSharpCheckFileResults$$$$002Ector$$Z664E4DC4)(filename$$3, errors$$1, scope, (0, _ServiceUntypedParse.FSharpParseFileResults$$get_DependencyFiles)(parseResults$$1), null, x$$11.reactorOps, true);
    const symbolUses$$1 = (0, _Types.L)((0, _service.TypeCheckInfo$$get_ScopeSymbolUses)(scope), (0, _Types.L)());
    const projectResults = InteractiveChecker$$MakeProjectResults$$Z293F0FF8(x$$11, projectFileName$$1, [parseResults$$1], tcState$$1, errors$$1, symbolUses$$1, null, tcImplFilesOpt$$1);
    return [parseResults$$1, typeCheckResults, projectResults];
  } else {
    throw new Error("unexpected aborted");
  }
}

function InteractiveChecker$$ParseAndCheckProject$$2E5C035B(x$$13, projectFileName$$2, fileNames, sources) {
  const errorScope = (0, _SymbolHelpers.ErrorScope$$$$002Ector)();

  try {
    const sink = (0, _NameResolution.TcResultsSinkImpl$$$$002Ector$$Z556E795E)(x$$13.tcGlobals);

    const typeCheckOneInput = function typeCheckOneInput(tupledArg$$2, tcSink, tcState$$2, input$$1) {
      return (0, _illib.EventuallyModule$$$force)(tupledArg$$2[0], (0, _CompileOps.TypeCheckOneInputEventually)(tupledArg$$2[1], tupledArg$$2[2], tupledArg$$2[3], tupledArg$$2[4], tupledArg$$2[5], tcSink, tcState$$2, input$$1));
    };

    const makeTcResult = function makeTcResult(tcState$$3, tupledArg$$3) {
      const filename$$4 = (0, _ServiceUntypedParse.FSharpParseFileResults$$get_FileName)(tupledArg$$3[0]);
      const loadClosure$$1 = null;

      const checkAlive$$1 = function checkAlive$$1() {
        return true;
      };

      const textSnapshotInfo$$1 = null;
      const tcErrors$$1 = (0, _Array.ofList)((0, _List.filter)(function predicate$$4(e$$1) {
        return (0, _SymbolHelpers.FSharpErrorInfo$$get_FileName)(e$$1) === filename$$4;
      }, (0, _SymbolHelpers.ErrorScope$$get_Diagnostics)(errorScope)), Array);
      const errors$$2 = (0, _Array.append)((0, _ServiceUntypedParse.FSharpParseFileResults$$get_Errors)(tupledArg$$3[0]), tcErrors$$1, Array);
      const scope$$1 = (0, _service.TypeCheckInfo$$$$002Ector$$4E917080)(x$$13.tcConfig, x$$13.tcGlobals, tupledArg$$3[1][3], (0, _CompileOps.TcState$$get_Ccu)(tcState$$3), x$$13.tcImports, (0, _TypeChecker.TcEnv$$get_AccessRights)(tupledArg$$3[1][0]), projectFileName$$2, filename$$4, (0, _NameResolution.TcResultsSinkImpl$$GetResolutions)(sink), (0, _NameResolution.TcResultsSinkImpl$$GetSymbolUses)(sink), (0, _TypeChecker.TcEnv$$get_NameEnv)(tupledArg$$3[1][0]), loadClosure$$1, x$$13.reactorOps, checkAlive$$1, textSnapshotInfo$$1, tupledArg$$3[1][2], (0, _NameResolution.TcResultsSinkImpl$$GetOpenDeclarations)(sink));
      return (0, _service.FSharpCheckFileResults$$$$002Ector$$Z664E4DC4)(filename$$4, errors$$2, scope$$1, (0, _ServiceUntypedParse.FSharpParseFileResults$$get_DependencyFiles)(tupledArg$$3[0]), null, x$$13.reactorOps, true);
    };

    const parseScript = function parseScript(tupledArg$$4) {
      return InteractiveChecker$$ParseScript$$Z384F8060(x$$13, tupledArg$$4[0], tupledArg$$4[1]);
    };

    const parseResults$$2 = (0, _Array.map)(parseScript, (0, _Array.zip)(fileNames, sources), Array);
    const parseHadErrors = parseResults$$2.some(function predicate$$5(p) {
      return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseHadErrors)(p);
    });
    const inputs = (0, _Array.toList)((0, _Array.choose)(function chooser$$3(p$$1) {
      return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(p$$1);
    }, parseResults$$2, Array));

    const checkForErrors$$1 = function checkForErrors$$1() {
      return parseHadErrors;
    };

    const prefixPathOpt$$1 = null;
    const tcSink$$1 = (0, _NameResolution.TcResultsSink$$$WithSink$$7FE138D7)(sink);
    const tcOneInput = (0, _Util.partialApply)(2, typeCheckOneInput, [[x$$13.ctok, checkForErrors$$1, x$$13.tcConfig, x$$13.tcImports, x$$13.tcGlobals, prefixPathOpt$$1], tcSink$$1]);
    const patternInput$$1 = (0, _List.mapFold)((0, _Util.uncurry)(2, tcOneInput), x$$13.tcInitialState, inputs);
    const patternInput$$2 = (0, _CompileOps.TypeCheckMultipleInputsFinish)(patternInput$$1[0], patternInput$$1[1]);
    const topAttrs = patternInput$$2[0][1];
    const implFiles = patternInput$$2[0][2];
    const _tcEnvAtEnd = patternInput$$2[0][0];
    const _ccuSigsForFiles = patternInput$$2[0][3];
    const patternInput$$3 = (0, _CompileOps.TypeCheckClosedInputSetFinish)(implFiles, patternInput$$2[1]);
    const typeCheckResults$$1 = (0, _Array.map)((0, _Util.partialApply)(1, makeTcResult, [patternInput$$3[0]]), (0, _Array.zip)(parseResults$$2, (0, _Array.ofList)(patternInput$$1[0], Array)), Array);
    const parseErrors$$1 = (0, _Array.collect)(function mapping$$8(p$$2) {
      return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_Errors)(p$$2);
    }, parseResults$$2, Array);
    const tcErrors$$2 = (0, _Array.ofList)((0, _SymbolHelpers.ErrorScope$$get_Diagnostics)(errorScope), Array);
    const errors$$3 = (0, _Array.append)(parseErrors$$1, tcErrors$$2, Array);
    const symbolUses$$2 = (0, _Types.L)((0, _NameResolution.TcResultsSinkImpl$$GetSymbolUses)(sink), (0, _Types.L)());
    const projectResults$$1 = InteractiveChecker$$MakeProjectResults$$Z293F0FF8(x$$13, projectFileName$$2, parseResults$$2, patternInput$$3[0], errors$$3, symbolUses$$2, topAttrs, patternInput$$3[1]);
    return [parseResults$$2, typeCheckResults$$1, projectResults$$1];
  } finally {
    if ((0, _Util.isDisposable)(errorScope)) {
      errorScope.Dispose();
    }
  }
}

function InteractiveChecker$$ParseAndCheckProject_simple$$2E5C035B(x$$14, projectFileName$$3, fileNames$$1, sources$$1) {
  const errorScope$$1 = (0, _SymbolHelpers.ErrorScope$$$$002Ector)();

  try {
    const parseScript$$1 = function parseScript$$1(tupledArg$$5) {
      return InteractiveChecker$$ParseScript$$Z384F8060(x$$14, tupledArg$$5[0], tupledArg$$5[1]);
    };

    const parseResults$$3 = (0, _Array.map)(parseScript$$1, (0, _Array.zip)(fileNames$$1, sources$$1), Array);
    const parseHadErrors$$1 = parseResults$$3.some(function predicate$$6(p$$3) {
      return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseHadErrors)(p$$3);
    });
    const inputs$$1 = (0, _Array.toList)((0, _Array.choose)(function chooser$$4(p$$4) {
      return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(p$$4);
    }, parseResults$$3, Array));

    const checkForErrors$$2 = function checkForErrors$$2() {
      return parseHadErrors$$1;
    };

    const prefixPathOpt$$2 = null;
    const patternInput$$4 = (0, _CompileOps.TypeCheckClosedInputSet)(x$$14.ctok, checkForErrors$$2, x$$14.tcConfig, x$$14.tcImports, x$$14.tcGlobals, prefixPathOpt$$2, x$$14.tcInitialState, inputs$$1);
    const parseErrors$$2 = (0, _Array.collect)(function mapping$$9(p$$5) {
      return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_Errors)(p$$5);
    }, parseResults$$3, Array);
    const tcErrors$$3 = (0, _Array.ofList)((0, _SymbolHelpers.ErrorScope$$get_Diagnostics)(errorScope$$1), Array);
    const errors$$4 = (0, _Array.append)(parseErrors$$2, tcErrors$$3, Array);
    const symbolUses$$3 = (0, _Types.L)();
    const projectResults$$2 = InteractiveChecker$$MakeProjectResults$$Z293F0FF8(x$$14, projectFileName$$3, parseResults$$3, patternInput$$4[0], errors$$4, symbolUses$$3, patternInput$$4[1], patternInput$$4[2]);
    return projectResults$$2;
  } finally {
    if ((0, _Util.isDisposable)(errorScope$$1)) {
      errorScope$$1.Dispose();
    }
  }
}