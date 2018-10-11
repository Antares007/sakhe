"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddExternalCcuToOpimizationEnv = AddExternalCcuToOpimizationEnv;
exports.GetInitialOptimizationEnv = GetInitialOptimizationEnv;
exports.ApplyAllOptimizations = ApplyAllOptimizations;

var _Optimizer = require("./Optimizer");

var _CompileOps = require("./CompileOps");

var _List = require("../fable-core.2.0.3/List");

var _autobox = require("./autobox");

var _DetupleArgs = require("./DetupleArgs");

var _InnerLambdasToTopLevelFuncs = require("./InnerLambdasToTopLevelFuncs");

var _LowerCallsAndSeqs = require("./LowerCallsAndSeqs");

var _TastOps = require("./TastOps");

var _tast = require("./tast");

function AddExternalCcuToOpimizationEnv(tcGlobals, optEnv, ccuinfo) {
  const matchValue = ccuinfo.FSharpOptimizationData.Value;

  if (matchValue != null) {
    const data = matchValue;
    return (0, _Optimizer.BindCcu)(ccuinfo.FSharpViewOfMetadata, data, optEnv, tcGlobals);
  } else {
    return optEnv;
  }
}

function GetInitialOptimizationEnv(tcImports, tcGlobals$$1) {
  const ccuinfos = (0, _CompileOps.TcImports$$GetImportedAssemblies)(tcImports);
  const optEnv$$1 = (0, _Optimizer.IncrementalOptimizationEnv$$$get_Empty)();
  const optEnv$$3 = (0, _List.fold)(function (optEnv$$2, ccuinfo$$1) {
    return AddExternalCcuToOpimizationEnv(tcGlobals$$1, optEnv$$2, ccuinfo$$1);
  }, optEnv$$1, ccuinfos);
  return optEnv$$3;
}

function ApplyAllOptimizations(tcConfig, tcGlobals$$2, tcVal, outfile, importMap, isIncrementalFragment, optEnv$$4, ccu, implFiles) {
  outfile;
  const optEnv0 = optEnv$$4;
  const optSettings = (0, _CompileOps.TcConfig$$get_optSettings)(tcConfig);
  const optSettings$$1 = new _Optimizer.OptimizationSettings((0, _CompileOps.TcConfig$$get_doTLR)(tcConfig), optSettings.jitOptUser, optSettings.localOptUser, optSettings.crossModuleOptUser, optSettings.bigTargetSize, optSettings.veryBigExprSize, optSettings.lambdaInlineThreshold, optSettings.reportingPhase, optSettings.reportNoNeedToTailcall, optSettings.reportFunctionSizes, optSettings.reportHasEffect, optSettings.reportTotalSizes);
  const optSettings$$2 = new _Optimizer.OptimizationSettings(optSettings$$1.abstractBigTargets, optSettings$$1.jitOptUser, optSettings$$1.localOptUser, optSettings$$1.crossModuleOptUser, optSettings$$1.bigTargetSize, optSettings$$1.veryBigExprSize, optSettings$$1.lambdaInlineThreshold, true, optSettings$$1.reportNoNeedToTailcall, optSettings$$1.reportFunctionSizes, optSettings$$1.reportHasEffect, optSettings$$1.reportTotalSizes);
  const patternInput$$5 = (0, _List.mapFold)(function mapping(tupledArg, implFile) {
    const patternInput = (0, _Optimizer.OptimizeImplFile)(optSettings$$2, ccu, tcGlobals$$2, tcVal, importMap, tupledArg[0], isIncrementalFragment, (0, _CompileOps.TcConfig$$get_emitTailcalls)(tcConfig), tupledArg[3], implFile);
    const optEnvFirstLoop$$1 = patternInput[0][0];
    const implFileOptData = patternInput[0][2];
    const implFile$$1 = patternInput[0][1];
    const hidden$$1 = patternInput[0][3];
    const implFile$$2 = (0, _autobox.TransformImplFile)(tcGlobals$$2, importMap, implFile$$1);
    const optSettings$$3 = new _Optimizer.OptimizationSettings(false, optSettings$$2.jitOptUser, optSettings$$2.localOptUser, optSettings$$2.crossModuleOptUser, optSettings$$2.bigTargetSize, optSettings$$2.veryBigExprSize, optSettings$$2.lambdaInlineThreshold, false, optSettings$$2.reportNoNeedToTailcall, optSettings$$2.reportFunctionSizes, optSettings$$2.reportHasEffect, optSettings$$2.reportTotalSizes);
    let patternInput$$2;

    if ((0, _CompileOps.TcConfig$$get_extraOptimizationIterations)(tcConfig) > 0) {
      const patternInput$$1 = (0, _Optimizer.OptimizeImplFile)(optSettings$$3, ccu, tcGlobals$$2, tcVal, importMap, tupledArg[1], isIncrementalFragment, (0, _CompileOps.TcConfig$$get_emitTailcalls)(tcConfig), hidden$$1, implFile$$2);
      const optEnvExtraLoop$$1 = patternInput$$1[0][0];
      const implFile$$3 = patternInput$$1[0][1];
      patternInput$$2 = [implFile$$3, optEnvExtraLoop$$1];
    } else {
      patternInput$$2 = [implFile$$2, tupledArg[1]];
    }

    let implFile$$6;

    if ((0, _CompileOps.TcConfig$$get_doDetuple)(tcConfig)) {
      const implFile$$5 = (0, _DetupleArgs.DetupleImplFile)(ccu, tcGlobals$$2, patternInput$$2[0]);
      implFile$$6 = implFile$$5;
    } else {
      implFile$$6 = patternInput$$2[0];
    }

    const implFile$$7 = (0, _CompileOps.TcConfig$$get_doTLR)(tcConfig) ? (0, _InnerLambdasToTopLevelFuncs.MakeTLRDecisions)(ccu, tcGlobals$$2, implFile$$6) : implFile$$6;
    const implFile$$8 = (0, _LowerCallsAndSeqs.LowerImplFile)(tcGlobals$$2, implFile$$7);
    let patternInput$$4;

    if ((0, _CompileOps.TcConfig$$get_doFinalSimplify)(tcConfig)) {
      const patternInput$$3 = (0, _Optimizer.OptimizeImplFile)(optSettings$$3, ccu, tcGlobals$$2, tcVal, importMap, tupledArg[2], isIncrementalFragment, (0, _CompileOps.TcConfig$$get_emitTailcalls)(tcConfig), hidden$$1, implFile$$8);
      const optEnvFinalSimplify$$1 = patternInput$$3[0][0];
      const implFile$$9 = patternInput$$3[0][1];
      patternInput$$4 = [implFile$$9, optEnvFinalSimplify$$1];
    } else {
      patternInput$$4 = [implFile$$8, tupledArg[2]];
    }

    return [[[patternInput$$4[0], patternInput[1]], implFileOptData], [optEnvFirstLoop$$1, patternInput$$2[1], patternInput$$4[1], hidden$$1]];
  }, [optEnv0, optEnv0, optEnv0, (0, _TastOps.SignatureHidingInfo$$$get_Empty)()], implFiles);
  const optEnvFirstLoop$$2 = patternInput$$5[1][0];
  const patternInput$$6 = (0, _List.unzip)(patternInput$$5[0]);
  const assemblyOptData = (0, _Optimizer.UnionOptimizationInfos)(patternInput$$6[1]);
  const tassembly = new _tast.TypedAssemblyAfterOptimization(0, "TypedAssemblyAfterOptimization", patternInput$$6[0]);
  return [tassembly, assemblyOptData, optEnvFirstLoop$$2];
}