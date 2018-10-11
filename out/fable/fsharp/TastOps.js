"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TyparMap$00601$$get_Item$$ZB4A2630 = TyparMap$00601$$get_Item$$ZB4A2630;
exports.TyparMap$00601$$ContainsKey$$ZB4A2630 = TyparMap$00601$$ContainsKey$$ZB4A2630;
exports.TyparMap$00601$$TryFind$$ZB4A2630 = TyparMap$00601$$TryFind$$ZB4A2630;
exports.TyparMap$00601$$Add$$Z748C59BB = TyparMap$00601$$Add$$Z748C59BB;
exports.TyparMap$00601$$$get_Empty = TyparMap$00601$$$get_Empty;
exports.TyconRefMap$00601$$$$002Ector$$Z77789F8C = TyconRefMap$00601$$$$002Ector$$Z77789F8C;
exports.TyconRefMap$00601$$get_Item$$Z788D4AAC = TyconRefMap$00601$$get_Item$$Z788D4AAC;
exports.TyconRefMap$00601$$TryFind$$Z788D4AAC = TyconRefMap$00601$$TryFind$$Z788D4AAC;
exports.TyconRefMap$00601$$ContainsKey$$Z788D4AAC = TyconRefMap$00601$$ContainsKey$$Z788D4AAC;
exports.TyconRefMap$00601$$Add = TyconRefMap$00601$$Add;
exports.TyconRefMap$00601$$Remove$$Z788D4AAC = TyconRefMap$00601$$Remove$$Z788D4AAC;
exports.TyconRefMap$00601$$get_IsEmpty = TyconRefMap$00601$$get_IsEmpty;
exports.TyconRefMap$00601$$$get_Empty = TyconRefMap$00601$$$get_Empty;
exports.TyconRefMap$00601$$$OfList$$ZB24A5BC = TyconRefMap$00601$$$OfList$$ZB24A5BC;
exports.ValMap$00601$$$$002Ector$$Z77789F8C = ValMap$00601$$$$002Ector$$Z77789F8C;
exports.ValMap$00601$$get_Contents = ValMap$00601$$get_Contents;
exports.ValMap$00601$$get_Item$$7D0CFEA5 = ValMap$00601$$get_Item$$7D0CFEA5;
exports.ValMap$00601$$TryFind$$7D0CFEA5 = ValMap$00601$$TryFind$$7D0CFEA5;
exports.ValMap$00601$$ContainsVal$$7D0CFEA5 = ValMap$00601$$ContainsVal$$7D0CFEA5;
exports.ValMap$00601$$Add = ValMap$00601$$Add;
exports.ValMap$00601$$Remove$$7D0CFEA5 = ValMap$00601$$Remove$$7D0CFEA5;
exports.ValMap$00601$$$get_Empty = ValMap$00601$$$get_Empty;
exports.ValMap$00601$$get_IsEmpty = ValMap$00601$$get_IsEmpty;
exports.ValMap$00601$$$OfList$$Z2CE9D52B = ValMap$00601$$$OfList$$Z2CE9D52B;
exports.Remap$$$get_Empty = Remap$$$get_Empty;
exports.addTyconRefRemap = addTyconRefRemap;
exports.isRemapEmpty = isRemapEmpty;
exports.instTyparRef = instTyparRef;
exports.instMeasureTyparRef = instMeasureTyparRef;
exports.remapTyconRef = remapTyconRef;
exports.remapUnionCaseRef = remapUnionCaseRef;
exports.remapRecdFieldRef = remapRecdFieldRef;
exports.mkTyparInst = mkTyparInst;
exports.generalizeTypar = generalizeTypar;
exports.generalizeTypars = generalizeTypars;
exports.remapTypeAux = remapTypeAux;
exports.remapMeasureAux = remapMeasureAux;
exports.remapTupInfoAux = remapTupInfoAux;
exports.remapTypesAux = remapTypesAux;
exports.remapTyparConstraintsAux = remapTyparConstraintsAux;
exports.remapTraitAux = remapTraitAux;
exports.bindTypars = bindTypars;
exports.copyAndRemapAndBindTyparsFull = copyAndRemapAndBindTyparsFull;
exports.copyAndRemapAndBindTypars = copyAndRemapAndBindTypars;
exports.remapValLinkage = remapValLinkage;
exports.remapNonLocalValRef = remapNonLocalValRef;
exports.remapValRef = remapValRef;
exports.remapType = remapType;
exports.remapTypes = remapTypes;
exports.remapTypeFull = remapTypeFull;
exports.remapParam = remapParam;
exports.remapSlotSig = remapSlotSig;
exports.mkInstRemap = mkInstRemap;
exports.instType = instType;
exports.instTypes = instTypes;
exports.instTrait = instTrait;
exports.instTyparConstraints = instTyparConstraints;
exports.instSlotSig = instSlotSig;
exports.copySlotSig = copySlotSig;
exports.mkTyparToTyparRenaming = mkTyparToTyparRenaming;
exports.mkTyconInst = mkTyconInst;
exports.mkTyconRefInst = mkTyconRefInst;
exports.tyconRefEq = tyconRefEq;
exports.valRefEq = valRefEq;
exports.reduceTyconRefAbbrevMeasureable = reduceTyconRefAbbrevMeasureable;
exports.stripUnitEqnsFromMeasureAux = stripUnitEqnsFromMeasureAux;
exports.stripUnitEqnsFromMeasure = stripUnitEqnsFromMeasure;
exports.MeasureExprConExponent = MeasureExprConExponent;
exports.MeasureConExponentAfterRemapping = MeasureConExponentAfterRemapping;
exports.MeasureVarExponent = MeasureVarExponent;
exports.ListMeasureVarOccs = ListMeasureVarOccs;
exports.ListMeasureVarOccsWithNonZeroExponents = ListMeasureVarOccsWithNonZeroExponents;
exports.ListMeasureConOccsWithNonZeroExponents = ListMeasureConOccsWithNonZeroExponents;
exports.ListMeasureConOccsAfterRemapping = ListMeasureConOccsAfterRemapping;
exports.MeasurePower = MeasurePower;
exports.MeasureProdOpt = MeasureProdOpt;
exports.ProdMeasures = ProdMeasures;
exports.isDimensionless = isDimensionless;
exports.destUnitParMeasure = destUnitParMeasure;
exports.isUnitParMeasure = isUnitParMeasure;
exports.normalizeMeasure = normalizeMeasure;
exports.tryNormalizeMeasureInType = tryNormalizeMeasureInType;
exports.mkNativePtrTy = mkNativePtrTy;
exports.mkByrefTy = mkByrefTy;
exports.mkInByrefTy = mkInByrefTy;
exports.mkOutByrefTy = mkOutByrefTy;
exports.mkByrefTyWithFlag = mkByrefTyWithFlag;
exports.mkByref2Ty = mkByref2Ty;
exports.mkVoidPtrTy = mkVoidPtrTy;
exports.mkByrefTyWithInference = mkByrefTyWithInference;
exports.mkArrayTy = mkArrayTy;
exports.isCompiledTupleTyconRef = isCompiledTupleTyconRef;
exports.mkCompiledTupleTyconRef = mkCompiledTupleTyconRef;
exports.mkCompiledTupleTy = mkCompiledTupleTy;
exports.mkOuterCompiledTupleTy = mkOuterCompiledTupleTy;
exports.applyTyconAbbrev = applyTyconAbbrev;
exports.reduceTyconAbbrev = reduceTyconAbbrev;
exports.reduceTyconRefAbbrev = reduceTyconRefAbbrev;
exports.reduceTyconMeasureableOrProvided = reduceTyconMeasureableOrProvided;
exports.reduceTyconRefMeasureableOrProvided = reduceTyconRefMeasureableOrProvided;
exports.stripTyEqnsA = stripTyEqnsA;
exports.stripTyEqns = stripTyEqns;
exports.evalTupInfoIsStruct = evalTupInfoIsStruct;
exports.stripTyEqnsAndErase = stripTyEqnsAndErase;
exports.stripTyEqnsAndMeasureEqns = stripTyEqnsAndMeasureEqns;
exports.stripTyEqnsWrtErasure = stripTyEqnsWrtErasure;
exports.stripExnEqns = stripExnEqns;
exports.primDestForallTy = primDestForallTy;
exports.destFunTy = destFunTy;
exports.destAnyTupleTy = destAnyTupleTy;
exports.destRefTupleTy = destRefTupleTy;
exports.destStructTupleTy = destStructTupleTy;
exports.destTyparTy = destTyparTy;
exports.destAnyParTy = destAnyParTy;
exports.destMeasureTy = destMeasureTy;
exports.isFunTy = isFunTy;
exports.isForallTy = isForallTy;
exports.isAnyTupleTy = isAnyTupleTy;
exports.isRefTupleTy = isRefTupleTy;
exports.isStructTupleTy = isStructTupleTy;
exports.isUnionTy = isUnionTy;
exports.isReprHiddenTy = isReprHiddenTy;
exports.isFSharpObjModelTy = isFSharpObjModelTy;
exports.isRecdTy = isRecdTy;
exports.isFSharpStructOrEnumTy = isFSharpStructOrEnumTy;
exports.isFSharpEnumTy = isFSharpEnumTy;
exports.isTyparTy = isTyparTy;
exports.isAnyParTy = isAnyParTy;
exports.isMeasureTy = isMeasureTy;
exports.isProvenUnionCaseTy = isProvenUnionCaseTy;
exports.mkAppTy = mkAppTy;
exports.mkProvenUnionCaseTy = mkProvenUnionCaseTy;
exports.isAppTy = isAppTy;
exports.destAppTy = destAppTy;
exports.tcrefOfAppTy = tcrefOfAppTy;
exports.argsOfAppTy = argsOfAppTy;
exports.tryDestTyparTy = tryDestTyparTy;
exports.tryDestFunTy = tryDestFunTy;
exports.tryDestAppTy = tryDestAppTy;
exports.tryAnyParTy = tryAnyParTy;
exports.$007CAppTy$007C_$007C = $007CAppTy$007C_$007C;
exports.$007CRefTupleTy$007C_$007C = $007CRefTupleTy$007C_$007C;
exports.$007CFunTy$007C_$007C = $007CFunTy$007C_$007C;
exports.tryNiceEntityRefOfTy = tryNiceEntityRefOfTy;
exports.$007CNullableTy$007C_$007C = $007CNullableTy$007C_$007C;
exports.$007CStripNullableTy$007C = $007CStripNullableTy$007C;
exports.mkInstForAppTy = mkInstForAppTy;
exports.domainOfFunTy = domainOfFunTy;
exports.rangeOfFunTy = rangeOfFunTy;
exports.convertToTypeWithMetadataIfPossible = convertToTypeWithMetadataIfPossible;
exports.TypeEquivEnv$$$get_Empty = TypeEquivEnv$$$get_Empty;
exports.TypeEquivEnv$$BindTyparsToTypes = TypeEquivEnv$$BindTyparsToTypes;
exports.TypeEquivEnv$$BindEquivTypars = TypeEquivEnv$$BindEquivTypars;
exports.TypeEquivEnv$$$FromTyparInst$$Z794F4A39 = TypeEquivEnv$$$FromTyparInst$$Z794F4A39;
exports.TypeEquivEnv$$$FromEquivTypars = TypeEquivEnv$$$FromEquivTypars;
exports.traitsAEquivAux = traitsAEquivAux;
exports.returnTypesAEquivAux = returnTypesAEquivAux;
exports.typarConstraintsAEquivAux = typarConstraintsAEquivAux;
exports.typarConstraintSetsAEquivAux = typarConstraintSetsAEquivAux;
exports.typarsAEquivAux = typarsAEquivAux;
exports.tcrefAEquiv = tcrefAEquiv;
exports.typeAEquivAux = typeAEquivAux;
exports.structnessAEquiv = structnessAEquiv;
exports.measureAEquiv = measureAEquiv;
exports.typesAEquivAux = typesAEquivAux;
exports.typeEquivAux = typeEquivAux;
exports.typeAEquiv = typeAEquiv;
exports.typeEquiv = typeEquiv;
exports.traitsAEquiv = traitsAEquiv;
exports.typarConstraintsAEquiv = typarConstraintsAEquiv;
exports.typarsAEquiv = typarsAEquiv;
exports.returnTypesAEquiv = returnTypesAEquiv;
exports.measureEquiv = measureEquiv;
exports.isErasedType = isErasedType;
exports.getErasedTypes = getErasedTypes;
exports.mkFunTy = mkFunTy;
exports.op_MinusMinusGreater = op_MinusMinusGreater;
exports.mkForallTy = mkForallTy;
exports.mkForallTyIfNeeded = mkForallTyIfNeeded;
exports.op_PlusMinusGreater = op_PlusMinusGreater;
exports.mkIteratedFunTy = mkIteratedFunTy;
exports.mkLambdaArgTy = mkLambdaArgTy;
exports.typeOfLambdaArg = typeOfLambdaArg;
exports.mkMultiLambdaTy = mkMultiLambdaTy;
exports.mkLambdaTy = mkLambdaTy;
exports.ensureCcuHasModuleOrNamespaceAtPath = ensureCcuHasModuleOrNamespaceAtPath;
exports.stripExpr = stripExpr;
exports.mkCase = mkCase;
exports.isRefTupleExpr = isRefTupleExpr;
exports.tryDestRefTupleExpr = tryDestRefTupleExpr;
exports.rangeOfExpr = rangeOfExpr;
exports.Expr$002Eget_Range = Expr$002Eget_Range;
exports.primMkMatch = primMkMatch;
exports.MatchBuilder$$$$002Ector$$5D7B8C21 = MatchBuilder$$$$002Ector$$5D7B8C21;
exports.MatchBuilder$$AddTarget$$Z659D13A7 = MatchBuilder$$AddTarget$$Z659D13A7;
exports.MatchBuilder$$AddResultTarget$$6E549ABC = MatchBuilder$$AddResultTarget$$6E549ABC;
exports.MatchBuilder$$CloseTargets = MatchBuilder$$CloseTargets;
exports.MatchBuilder$$Close$$569B5856 = MatchBuilder$$Close$$569B5856;
exports.mkBoolSwitch = mkBoolSwitch;
exports.primMkCond = primMkCond;
exports.mkCond = mkCond;
exports.exprForValRef = exprForValRef;
exports.exprForVal = exprForVal;
exports.mkLocalAux = mkLocalAux;
exports.mkLocal = mkLocal;
exports.mkCompGenLocal = mkCompGenLocal;
exports.mkMutableCompGenLocal = mkMutableCompGenLocal;
exports.mkMultiLambda = mkMultiLambda;
exports.rebuildLambda = rebuildLambda;
exports.mkLambda = mkLambda;
exports.mkTypeLambda = mkTypeLambda;
exports.mkTypeChoose = mkTypeChoose;
exports.mkObjExpr = mkObjExpr;
exports.mkLambdas = mkLambdas;
exports.mkMultiLambdasCore = mkMultiLambdasCore;
exports.mkMultiLambdas = mkMultiLambdas;
exports.mkMemberLambdas = mkMemberLambdas;
exports.mkMultiLambdaBind = mkMultiLambdaBind;
exports.mkBind = mkBind;
exports.mkLetBind = mkLetBind;
exports.mkLetsBind = mkLetsBind;
exports.mkLetsFromBindings = mkLetsFromBindings;
exports.mkLet = mkLet;
exports.mkCompGenBind = mkCompGenBind;
exports.mkCompGenBinds = mkCompGenBinds;
exports.mkCompGenLet = mkCompGenLet;
exports.mkCompGenLets = mkCompGenLets;
exports.mkCompGenLetsFromBindings = mkCompGenLetsFromBindings;
exports.mkInvisibleBind = mkInvisibleBind;
exports.mkInvisibleBinds = mkInvisibleBinds;
exports.mkInvisibleLet = mkInvisibleLet;
exports.mkInvisibleLets = mkInvisibleLets;
exports.mkInvisibleLetsFromBindings = mkInvisibleLetsFromBindings;
exports.mkLetRecBinds = mkLetRecBinds;
exports.NormalizeDeclaredTyparsForEquiRecursiveInference = NormalizeDeclaredTyparsForEquiRecursiveInference;
exports.mkGenericBindRhs = mkGenericBindRhs;
exports.isBeingGeneralized = isBeingGeneralized;
exports.mkLazyAnd = mkLazyAnd;
exports.mkLazyOr = mkLazyOr;
exports.mkCoerceExpr = mkCoerceExpr;
exports.mkAsmExpr = mkAsmExpr;
exports.mkUnionCaseExpr = mkUnionCaseExpr;
exports.mkExnExpr = mkExnExpr;
exports.mkTupleFieldGetViaExprAddr = mkTupleFieldGetViaExprAddr;
exports.mkRecdFieldGetViaExprAddr = mkRecdFieldGetViaExprAddr;
exports.mkRecdFieldGetAddrViaExprAddr = mkRecdFieldGetAddrViaExprAddr;
exports.mkStaticRecdFieldGetAddr = mkStaticRecdFieldGetAddr;
exports.mkStaticRecdFieldGet = mkStaticRecdFieldGet;
exports.mkStaticRecdFieldSet = mkStaticRecdFieldSet;
exports.mkArrayElemAddress = mkArrayElemAddress;
exports.mkRecdFieldSetViaExprAddr = mkRecdFieldSetViaExprAddr;
exports.mkUnionCaseTagGetViaExprAddr = mkUnionCaseTagGetViaExprAddr;
exports.mkUnionCaseProof = mkUnionCaseProof;
exports.mkUnionCaseFieldGetProvenViaExprAddr = mkUnionCaseFieldGetProvenViaExprAddr;
exports.mkUnionCaseFieldGetAddrProvenViaExprAddr = mkUnionCaseFieldGetAddrProvenViaExprAddr;
exports.mkUnionCaseFieldGetUnprovenViaExprAddr = mkUnionCaseFieldGetUnprovenViaExprAddr;
exports.mkUnionCaseFieldSet = mkUnionCaseFieldSet;
exports.mkExnCaseFieldGet = mkExnCaseFieldGet;
exports.mkExnCaseFieldSet = mkExnCaseFieldSet;
exports.mkDummyLambda = mkDummyLambda;
exports.mkWhile = mkWhile;
exports.mkFor = mkFor;
exports.mkTryWith = mkTryWith;
exports.mkTryFinally = mkTryFinally;
exports.mkDefault = mkDefault;
exports.mkValSet = mkValSet;
exports.mkAddrSet = mkAddrSet;
exports.mkAddrGet = mkAddrGet;
exports.mkValAddr = mkValAddr;
exports.ValHash$00601$$get_Values = ValHash$00601$$get_Values;
exports.ValHash$00601$$TryFind$$7D0CFEA5 = ValHash$00601$$TryFind$$7D0CFEA5;
exports.ValHash$00601$$Add$$1EAE66D0 = ValHash$00601$$Add$$1EAE66D0;
exports.ValHash$00601$$$Create = ValHash$00601$$$Create;
exports.ValMultiMap$00601$$$$002Ector$$78566FBE = ValMultiMap$00601$$$$002Ector$$78566FBE;
exports.ValMultiMap$00601$$ContainsKey$$7D0CFEA5 = ValMultiMap$00601$$ContainsKey$$7D0CFEA5;
exports.ValMultiMap$00601$$Find$$7D0CFEA5 = ValMultiMap$00601$$Find$$7D0CFEA5;
exports.ValMultiMap$00601$$Add$$1EAE66D0 = ValMultiMap$00601$$Add$$1EAE66D0;
exports.ValMultiMap$00601$$Remove$$7D0CFEA5 = ValMultiMap$00601$$Remove$$7D0CFEA5;
exports.ValMultiMap$00601$$get_Contents = ValMultiMap$00601$$get_Contents;
exports.ValMultiMap$00601$$$get_Empty = ValMultiMap$00601$$$get_Empty;
exports.TyconRefMultiMap$00601$$$$002Ector$$4695133D = TyconRefMultiMap$00601$$$$002Ector$$4695133D;
exports.TyconRefMultiMap$00601$$Find$$Z788D4AAC = TyconRefMultiMap$00601$$Find$$Z788D4AAC;
exports.TyconRefMultiMap$00601$$Add$$75CBEA41 = TyconRefMultiMap$00601$$Add$$75CBEA41;
exports.TyconRefMultiMap$00601$$$get_Empty = TyconRefMultiMap$00601$$$get_Empty;
exports.TyconRefMultiMap$00601$$$OfList$$ZB24A5BC = TyconRefMultiMap$00601$$$OfList$$ZB24A5BC;
exports.tryRescopeEntity = tryRescopeEntity;
exports.tryRescopeVal = tryRescopeVal;
exports.actualTyOfRecdField = actualTyOfRecdField;
exports.actualTysOfRecdFields = actualTysOfRecdFields;
exports.actualTysOfInstanceRecdFields = actualTysOfInstanceRecdFields;
exports.actualTysOfUnionCaseFields = actualTysOfUnionCaseFields;
exports.actualResultTyOfUnionCase = actualResultTyOfUnionCase;
exports.recdFieldsOfExnDefRef = recdFieldsOfExnDefRef;
exports.recdFieldOfExnDefRefByIdx = recdFieldOfExnDefRefByIdx;
exports.recdFieldTysOfExnDefRef = recdFieldTysOfExnDefRef;
exports.recdFieldTyOfExnDefRefByIdx = recdFieldTyOfExnDefRefByIdx;
exports.actualTyOfRecdFieldForTycon = actualTyOfRecdFieldForTycon;
exports.actualTyOfRecdFieldRef = actualTyOfRecdFieldRef;
exports.actualTyOfUnionFieldRef = actualTyOfUnionFieldRef;
exports.destForallTy = destForallTy;
exports.tryDestForallTy = tryDestForallTy;
exports.stripFunTy = stripFunTy;
exports.applyForallTy = applyForallTy;
exports.reduceIteratedFunTy = reduceIteratedFunTy;
exports.applyTyArgs = applyTyArgs;
exports.applyTys = applyTys;
exports.formalApplyTys = formalApplyTys;
exports.stripFunTyN = stripFunTyN;
exports.tryDestAnyTupleTy = tryDestAnyTupleTy;
exports.tryDestRefTupleTy = tryDestRefTupleTy;
exports.GetTopTauTypeInFSharpForm = GetTopTauTypeInFSharpForm;
exports.destTopForallTy = destTopForallTy;
exports.GetTopValTypeInFSharpForm = GetTopValTypeInFSharpForm;
exports.IsCompiledAsStaticProperty = IsCompiledAsStaticProperty;
exports.IsCompiledAsStaticPropertyWithField = IsCompiledAsStaticPropertyWithField;
exports.isArrayTyconRef = isArrayTyconRef;
exports.rankOfArrayTyconRef = rankOfArrayTyconRef;
exports.destArrayTy = destArrayTy;
exports.destListTy = destListTy;
exports.tyconRefEqOpt = tyconRefEqOpt;
exports.isStringTy = isStringTy;
exports.isListTy = isListTy;
exports.isArrayTy = isArrayTy;
exports.isArray1DTy = isArray1DTy;
exports.isUnitTy = isUnitTy;
exports.isObjTy = isObjTy;
exports.isVoidTy = isVoidTy;
exports.isILAppTy = isILAppTy;
exports.isNativePtrTy = isNativePtrTy;
exports.isByrefTy = isByrefTy;
exports.isInByrefTag = isInByrefTag;
exports.isInByrefTy = isInByrefTy;
exports.isOutByrefTag = isOutByrefTag;
exports.isOutByrefTy = isOutByrefTy;
exports.metadataOfTycon = metadataOfTycon;
exports.metadataOfTy = metadataOfTy;
exports.isILReferenceTy = isILReferenceTy;
exports.isILInterfaceTycon = isILInterfaceTycon;
exports.rankOfArrayTy = rankOfArrayTy;
exports.isFSharpObjModelRefTy = isFSharpObjModelRefTy;
exports.isFSharpClassTy = isFSharpClassTy;
exports.isFSharpStructTy = isFSharpStructTy;
exports.isFSharpInterfaceTy = isFSharpInterfaceTy;
exports.isDelegateTy = isDelegateTy;
exports.isInterfaceTy = isInterfaceTy;
exports.isClassTy = isClassTy;
exports.isStructOrEnumTyconTy = isStructOrEnumTyconTy;
exports.isStructRecordOrUnionTyconTy = isStructRecordOrUnionTyconTy;
exports.isStructTy = isStructTy;
exports.isRefTy = isRefTy;
exports.isUnmanagedTy = isUnmanagedTy;
exports.isInterfaceTycon = isInterfaceTycon;
exports.isInterfaceTyconRef = isInterfaceTyconRef;
exports.isEnumTy = isEnumTy;
exports.actualReturnTyOfSlotSig = actualReturnTyOfSlotSig;
exports.slotSigHasVoidReturnTy = slotSigHasVoidReturnTy;
exports.returnTyOfMethod = returnTyOfMethod;
exports.isAbstractTycon = isAbstractTycon;
exports.MemberIsExplicitImpl = MemberIsExplicitImpl;
exports.ValIsExplicitImpl = ValIsExplicitImpl;
exports.ValRefIsExplicitImpl = ValRefIsExplicitImpl;
exports.unionFreeLocals = unionFreeLocals;
exports.unionFreeRecdFields = unionFreeRecdFields;
exports.unionFreeUnionCases = unionFreeUnionCases;
exports.unionFreeTycons = unionFreeTycons;
exports.unionFreeTypars = unionFreeTypars;
exports.isEmptyFreeTyvars = isEmptyFreeTyvars;
exports.unionFreeTyvars = unionFreeTyvars;
exports.accFreeLocalTycon = accFreeLocalTycon;
exports.accFreeTycon = accFreeTycon;
exports.boundTypars = boundTypars;
exports.accFreeInTyparConstraints = accFreeInTyparConstraints;
exports.accFreeInTyparConstraint = accFreeInTyparConstraint;
exports.accFreeInTrait = accFreeInTrait;
exports.accFreeInTraitSln = accFreeInTraitSln;
exports.accFreeLocalValInTraitSln = accFreeLocalValInTraitSln;
exports.accFreeValRefInTraitSln = accFreeValRefInTraitSln;
exports.accFreeTyparRef = accFreeTyparRef;
exports.accFreeInType = accFreeInType;
exports.accFreeInTupInfo = accFreeInTupInfo;
exports.accFreeInMeasure = accFreeInMeasure;
exports.accFreeInTypes = accFreeInTypes;
exports.freeInType = freeInType;
exports.accFreeInVal = accFreeInVal;
exports.freeInTypes = freeInTypes;
exports.freeInVal = freeInVal;
exports.freeInTyparConstraints = freeInTyparConstraints;
exports.accFreeInTypars = accFreeInTypars;
exports.addFreeInModuleTy = addFreeInModuleTy;
exports.freeInModuleTy = freeInModuleTy;
exports.emptyFreeTyparsLeftToRight = emptyFreeTyparsLeftToRight;
exports.unionFreeTyparsLeftToRight = unionFreeTyparsLeftToRight;
exports.boundTyparsLeftToRight = boundTyparsLeftToRight;
exports.accFreeInTyparConstraintsLeftToRight = accFreeInTyparConstraintsLeftToRight;
exports.accFreeInTyparConstraintLeftToRight = accFreeInTyparConstraintLeftToRight;
exports.accFreeInTraitLeftToRight = accFreeInTraitLeftToRight;
exports.accFreeTyparRefLeftToRight = accFreeTyparRefLeftToRight;
exports.accFreeInTypeLeftToRight = accFreeInTypeLeftToRight;
exports.accFreeInTupInfoLeftToRight = accFreeInTupInfoLeftToRight;
exports.accFreeInTypesLeftToRight = accFreeInTypesLeftToRight;
exports.freeInTypeLeftToRight = freeInTypeLeftToRight;
exports.freeInTypesLeftToRight = freeInTypesLeftToRight;
exports.freeInTypesLeftToRightSkippingConstraints = freeInTypesLeftToRightSkippingConstraints;
exports.valOfBind = valOfBind;
exports.valsOfBinds = valsOfBinds;
exports.GetMemberTypeInFSharpForm = GetMemberTypeInFSharpForm;
exports.checkMemberVal = checkMemberVal;
exports.checkMemberValRef = checkMemberValRef;
exports.GetTopValTypeInCompiledForm = GetTopValTypeInCompiledForm;
exports.GetMemberTypeInMemberForm = GetMemberTypeInMemberForm;
exports.GetTypeOfMemberInMemberForm = GetTypeOfMemberInMemberForm;
exports.GetTypeOfMemberInFSharpForm = GetTypeOfMemberInFSharpForm;
exports.PartitionValTyparsForApparentEnclosingType = PartitionValTyparsForApparentEnclosingType;
exports.PartitionValTypars = PartitionValTypars;
exports.PartitionValRefTypars = PartitionValRefTypars;
exports.ArgInfosOfMemberVal = ArgInfosOfMemberVal;
exports.ArgInfosOfMember = ArgInfosOfMember;
exports.GetFSharpViewOfReturnType = GetFSharpViewOfReturnType;
exports.ReturnTypeOfPropertyVal = ReturnTypeOfPropertyVal;
exports.ArgInfosOfPropertyVal = ArgInfosOfPropertyVal;
exports.generalTyconRefInst = generalTyconRefInst;
exports.generalizeTyconRef = generalizeTyconRef;
exports.generalizedTyconRef = generalizedTyconRef;
exports.isTTyparSupportsStaticMethod = isTTyparSupportsStaticMethod;
exports.isTTyparCoercesToType = isTTyparCoercesToType;
exports.prefixOfStaticReq = prefixOfStaticReq;
exports.prefixOfRigidTypar = prefixOfRigidTypar;
exports.PrettyTypes$$$newPrettyTypar = PrettyTypes$$$newPrettyTypar;
exports.PrettyTypes$$$NewPrettyTypars = PrettyTypes$$$NewPrettyTypars;
exports.PrettyTypes$$$NeedsPrettyTyparName = PrettyTypes$$$NeedsPrettyTyparName;
exports.PrettyTypes$$$PrettyTyparNames = PrettyTypes$$$PrettyTyparNames;
exports.PrettyTypes$$$PrettifyThings = PrettyTypes$$$PrettifyThings;
exports.PrettyTypes$$$PrettifyType = PrettyTypes$$$PrettifyType;
exports.PrettyTypes$$$PrettifyTypePair = PrettyTypes$$$PrettifyTypePair;
exports.PrettyTypes$$$PrettifyTypes = PrettyTypes$$$PrettifyTypes;
exports.PrettyTypes$$$PrettifyCurriedTypes = PrettyTypes$$$PrettifyCurriedTypes;
exports.PrettyTypes$$$PrettifyCurriedSigTypes = PrettyTypes$$$PrettifyCurriedSigTypes;
exports.PrettyTypes$$$safeDestAnyParTy = PrettyTypes$$$safeDestAnyParTy;
exports.PrettyTypes$$$tee = PrettyTypes$$$tee;
exports.PrettyTypes$$$foldUnurriedArgInfos = PrettyTypes$$$foldUnurriedArgInfos;
exports.PrettyTypes$$$mapUnurriedArgInfos = PrettyTypes$$$mapUnurriedArgInfos;
exports.PrettyTypes$$$foldTypar = PrettyTypes$$$foldTypar;
exports.PrettyTypes$$$mapTypar = PrettyTypes$$$mapTypar;
exports.PrettyTypes$$$foldTypars = PrettyTypes$$$foldTypars;
exports.PrettyTypes$$$mapTypars = PrettyTypes$$$mapTypars;
exports.PrettyTypes$$$foldTyparInst = PrettyTypes$$$foldTyparInst;
exports.PrettyTypes$$$mapTyparInst = PrettyTypes$$$mapTyparInst;
exports.PrettyTypes$$$PrettifyInstAndTyparsAndType = PrettyTypes$$$PrettifyInstAndTyparsAndType;
exports.PrettyTypes$$$PrettifyInstAndUncurriedSig = PrettyTypes$$$PrettifyInstAndUncurriedSig;
exports.PrettyTypes$$$PrettifyInstAndCurriedSig = PrettyTypes$$$PrettifyInstAndCurriedSig;
exports.PrettyTypes$$$PrettifyInstAndSig = PrettyTypes$$$PrettifyInstAndSig;
exports.PrettyTypes$$$PrettifyInstAndTypes = PrettyTypes$$$PrettifyInstAndTypes;
exports.PrettyTypes$$$PrettifyInstAndType = PrettyTypes$$$PrettifyInstAndType;
exports.PrettyTypes$$$PrettifyInst = PrettyTypes$$$PrettifyInst;
exports.SimplifyTypes$$$foldTypeButNotConstraints = SimplifyTypes$$$foldTypeButNotConstraints;
exports.SimplifyTypes$$$incM = SimplifyTypes$$$incM;
exports.SimplifyTypes$$$accTyparCounts = SimplifyTypes$$$accTyparCounts;
exports.SimplifyTypes$$$accTyparCountsMulti = SimplifyTypes$$$accTyparCountsMulti;
exports.SimplifyTypes$$$categorizeConstraints = SimplifyTypes$$$categorizeConstraints;
exports.SimplifyTypes$$$CollectInfo = SimplifyTypes$$$CollectInfo;
exports.DisplayEnv$$SetOpenPaths$$Z7F4D45E5 = DisplayEnv$$SetOpenPaths$$Z7F4D45E5;
exports.DisplayEnv$$$Empty$$2AE8EA0C = DisplayEnv$$$Empty$$2AE8EA0C;
exports.DisplayEnv$$AddOpenPath$$1334CEF1 = DisplayEnv$$AddOpenPath$$1334CEF1;
exports.DisplayEnv$$AddOpenModuleOrNamespace$$Z788D4AAC = DisplayEnv$$AddOpenModuleOrNamespace$$Z788D4AAC;
exports.DisplayEnv$$AddAccessibility$$Z104C0010 = DisplayEnv$$AddAccessibility$$Z104C0010;
exports.op_PlusDotPlus = op_PlusDotPlus;
exports.layoutOfPath = layoutOfPath;
exports.fullNameOfParentOfPubPath = fullNameOfParentOfPubPath;
exports.fullNameOfParentOfPubPathAsLayout = fullNameOfParentOfPubPathAsLayout;
exports.fullNameOfPubPath = fullNameOfPubPath;
exports.fullNameOfPubPathAsLayout = fullNameOfPubPathAsLayout;
exports.fullNameOfParentOfNonLocalEntityRef = fullNameOfParentOfNonLocalEntityRef;
exports.fullNameOfParentOfNonLocalEntityRefAsLayout = fullNameOfParentOfNonLocalEntityRefAsLayout;
exports.fullNameOfParentOfEntityRef = fullNameOfParentOfEntityRef;
exports.fullNameOfParentOfEntityRefAsLayout = fullNameOfParentOfEntityRefAsLayout;
exports.fullNameOfEntityRef = fullNameOfEntityRef;
exports.tagEntityRefName = tagEntityRefName;
exports.fullDisplayTextOfTyconRef = fullDisplayTextOfTyconRef;
exports.fullNameOfEntityRefAsLayout = fullNameOfEntityRefAsLayout;
exports.fullNameOfParentOfValRef = fullNameOfParentOfValRef;
exports.fullNameOfParentOfValRefAsLayout = fullNameOfParentOfValRefAsLayout;
exports.fullDisplayTextOfParentOfModRef = fullDisplayTextOfParentOfModRef;
exports.fullDisplayTextOfModRef = fullDisplayTextOfModRef;
exports.fullDisplayTextOfTyconRefAsLayout = fullDisplayTextOfTyconRefAsLayout;
exports.fullDisplayTextOfExnRef = fullDisplayTextOfExnRef;
exports.fullDisplayTextOfExnRefAsLayout = fullDisplayTextOfExnRefAsLayout;
exports.fullDisplayTextOfUnionCaseRef = fullDisplayTextOfUnionCaseRef;
exports.fullDisplayTextOfRecdFieldRef = fullDisplayTextOfRecdFieldRef;
exports.fullDisplayTextOfValRef = fullDisplayTextOfValRef;
exports.fullDisplayTextOfValRefAsLayout = fullDisplayTextOfValRefAsLayout;
exports.fullMangledPathToTyconRef = fullMangledPathToTyconRef;
exports.qualifiedMangledNameOfTyconRef = qualifiedMangledNameOfTyconRef;
exports.firstEq = firstEq;
exports.firstRem = firstRem;
exports.trimPathByDisplayEnv = trimPathByDisplayEnv;
exports.superOfTycon = superOfTycon;
exports.isILAttribByName = isILAttribByName;
exports.isILAttrib = isILAttrib;
exports.HasILAttribute = HasILAttribute;
exports.TryDecodeILAttribute = TryDecodeILAttribute;
exports.IsMatchingFSharpAttribute = IsMatchingFSharpAttribute;
exports.HasFSharpAttribute = HasFSharpAttribute;
exports.findAttrib = findAttrib;
exports.TryFindFSharpAttribute = TryFindFSharpAttribute;
exports.TryFindFSharpAttributeOpt = TryFindFSharpAttributeOpt;
exports.HasFSharpAttributeOpt = HasFSharpAttributeOpt;
exports.IsMatchingFSharpAttributeOpt = IsMatchingFSharpAttributeOpt;
exports.$007CExtractAttribNamedArg$007C_$007C = $007CExtractAttribNamedArg$007C_$007C;
exports.$007CAttribInt32Arg$007C_$007C = $007CAttribInt32Arg$007C_$007C;
exports.$007CAttribInt16Arg$007C_$007C = $007CAttribInt16Arg$007C_$007C;
exports.$007CAttribBoolArg$007C_$007C = $007CAttribBoolArg$007C_$007C;
exports.$007CAttribStringArg$007C_$007C = $007CAttribStringArg$007C_$007C;
exports.TryFindFSharpBoolAttributeWithDefault = TryFindFSharpBoolAttributeWithDefault;
exports.TryFindFSharpBoolAttribute = TryFindFSharpBoolAttribute;
exports.TryFindFSharpBoolAttributeAssumeFalse = TryFindFSharpBoolAttributeAssumeFalse;
exports.TryFindFSharpInt32Attribute = TryFindFSharpInt32Attribute;
exports.TryFindFSharpStringAttribute = TryFindFSharpStringAttribute;
exports.TryFindILAttribute = TryFindILAttribute;
exports.TryFindILAttributeOpt = TryFindILAttributeOpt;
exports.TryBindTyconRefAttribute = TryBindTyconRefAttribute;
exports.TryFindTyconRefBoolAttribute = TryFindTyconRefBoolAttribute;
exports.TryFindAttributeUsageAttribute = TryFindAttributeUsageAttribute;
exports.TryFindTyconRefStringAttribute = TryFindTyconRefStringAttribute;
exports.TyconRefHasAttribute = TyconRefHasAttribute;
exports.isByrefTyconRef = isByrefTyconRef;
exports.isByrefLikeTyconRef = isByrefLikeTyconRef;
exports.isSpanLikeTyconRef = isSpanLikeTyconRef;
exports.isByrefLikeTy = isByrefLikeTy;
exports.isSpanLikeTy = isSpanLikeTy;
exports.destByrefTy = destByrefTy;
exports.$007CByrefTy$007C_$007C = $007CByrefTy$007C_$007C;
exports.destNativePtrTy = destNativePtrTy;
exports.isRefCellTy = isRefCellTy;
exports.destRefCellTy = destRefCellTy;
exports.StripSelfRefCell = StripSelfRefCell;
exports.mkRefCellTy = mkRefCellTy;
exports.mkLazyTy = mkLazyTy;
exports.mkPrintfFormatTy = mkPrintfFormatTy;
exports.mkOptionTy = mkOptionTy;
exports.mkListTy = mkListTy;
exports.isOptionTy = isOptionTy;
exports.tryDestOptionTy = tryDestOptionTy;
exports.destOptionTy = destOptionTy;
exports.isLinqExpressionTy = isLinqExpressionTy;
exports.tryDestLinqExpressionTy = tryDestLinqExpressionTy;
exports.destLinqExpressionTy = destLinqExpressionTy;
exports.mkNoneCase = mkNoneCase;
exports.mkSomeCase = mkSomeCase;
exports.ValRef$002Eget_IsDispatchSlot = ValRef$002Eget_IsDispatchSlot;
exports.$007CUnopExpr$007C_$007C = $007CUnopExpr$007C_$007C;
exports.$007CBinopExpr$007C_$007C = $007CBinopExpr$007C_$007C;
exports.$007CSpecificUnopExpr$007C_$007C = $007CSpecificUnopExpr$007C_$007C;
exports.$007CSpecificBinopExpr$007C_$007C = $007CSpecificBinopExpr$007C_$007C;
exports.$007CEnumExpr$007C_$007C = $007CEnumExpr$007C_$007C;
exports.$007CBitwiseOrExpr$007C_$007C = $007CBitwiseOrExpr$007C_$007C;
exports.$007CAttribBitwiseOrExpr$007C_$007C = $007CAttribBitwiseOrExpr$007C_$007C;
exports.isUncheckedDefaultOfValRef = isUncheckedDefaultOfValRef;
exports.isTypeOfValRef = isTypeOfValRef;
exports.isSizeOfValRef = isSizeOfValRef;
exports.isTypeDefOfValRef = isTypeDefOfValRef;
exports.$007CUncheckedDefaultOfExpr$007C_$007C = $007CUncheckedDefaultOfExpr$007C_$007C;
exports.$007CTypeOfExpr$007C_$007C = $007CTypeOfExpr$007C_$007C;
exports.$007CSizeOfExpr$007C_$007C = $007CSizeOfExpr$007C_$007C;
exports.$007CTypeDefOfExpr$007C_$007C = $007CTypeDefOfExpr$007C_$007C;
exports.DebugPrint$$$squareAngleL = DebugPrint$$$squareAngleL;
exports.DebugPrint$$$angleL = DebugPrint$$$angleL;
exports.DebugPrint$$$braceL = DebugPrint$$$braceL;
exports.DebugPrint$$$boolL = DebugPrint$$$boolL;
exports.DebugPrint$$$intL = DebugPrint$$$intL;
exports.DebugPrint$$$int64L = DebugPrint$$$int64L;
exports.DebugPrint$$$jlistL = DebugPrint$$$jlistL;
exports.DebugPrint$$$bracketIfL = DebugPrint$$$bracketIfL;
exports.DebugPrint$$$lvalopL = DebugPrint$$$lvalopL;
exports.DebugPrint$$$angleBracketL = DebugPrint$$$angleBracketL;
exports.DebugPrint$$$angleBracketListL = DebugPrint$$$angleBracketListL;
exports.DebugPrint$$$layoutMemberFlags = DebugPrint$$$layoutMemberFlags;
exports.DebugPrint$$$stampL = DebugPrint$$$stampL;
exports.DebugPrint$$$layoutTyconRef = DebugPrint$$$layoutTyconRef;
exports.DebugPrint$$$auxTypeL = DebugPrint$$$auxTypeL;
exports.DebugPrint$$$auxTypeAtomL = DebugPrint$$$auxTypeAtomL;
exports.DebugPrint$$$auxTyparsL = DebugPrint$$$auxTyparsL;
exports.DebugPrint$$$auxTypeWrapL = DebugPrint$$$auxTypeWrapL;
exports.DebugPrint$$$auxTyparWrapL = DebugPrint$$$auxTyparWrapL;
exports.DebugPrint$$$auxTypar2L = DebugPrint$$$auxTypar2L;
exports.DebugPrint$$$auxTyparAtomL = DebugPrint$$$auxTyparAtomL;
exports.DebugPrint$$$auxTyparConstraintTypL = DebugPrint$$$auxTyparConstraintTypL;
exports.DebugPrint$$$auxTraitL = DebugPrint$$$auxTraitL;
exports.DebugPrint$$$auxTyparConstraintL = DebugPrint$$$auxTyparConstraintL;
exports.DebugPrint$$$auxTyparConstraintsL = DebugPrint$$$auxTyparConstraintsL;
exports.DebugPrint$$$typarL = DebugPrint$$$typarL;
exports.DebugPrint$$$typarAtomL = DebugPrint$$$typarAtomL;
exports.DebugPrint$$$typeAtomL = DebugPrint$$$typeAtomL;
exports.DebugPrint$$$typeL = DebugPrint$$$typeL;
exports.DebugPrint$$$typarDeclL = DebugPrint$$$typarDeclL;
exports.DebugPrint$$$layoutTyparDecls = DebugPrint$$$layoutTyparDecls;
exports.DebugPrint$$$rangeL = DebugPrint$$$rangeL;
exports.DebugPrint$$$instL = DebugPrint$$$instL;
exports.DebugPrint$$$valRefL = DebugPrint$$$valRefL;
exports.DebugPrint$$$layoutAttrib = DebugPrint$$$layoutAttrib;
exports.DebugPrint$$$layoutAttribs = DebugPrint$$$layoutAttribs;
exports.DebugPrint$$$arityInfoL = DebugPrint$$$arityInfoL;
exports.DebugPrint$$$valL = DebugPrint$$$valL;
exports.DebugPrint$$$typeOfValL = DebugPrint$$$typeOfValL;
exports.DebugPrint$$$tslotparamL = DebugPrint$$$tslotparamL;
exports.DebugPrint$$$slotSigL = DebugPrint$$$slotSigL;
exports.DebugPrint$$$MemberL = DebugPrint$$$MemberL;
exports.DebugPrint$$$vspecAtBindL = DebugPrint$$$vspecAtBindL;
exports.DebugPrint$$$unionCaseRefL = DebugPrint$$$unionCaseRefL;
exports.DebugPrint$$$recdFieldRefL = DebugPrint$$$recdFieldRefL;
exports.DebugPrint$$$identL = DebugPrint$$$identL;
exports.DebugPrint$$$constL = DebugPrint$$$constL;
exports.DebugPrint$$$tyconL = DebugPrint$$$tyconL;
exports.DebugPrint$$$bindingL = DebugPrint$$$bindingL;
exports.DebugPrint$$$exprL = DebugPrint$$$exprL;
exports.DebugPrint$$$atomL = DebugPrint$$$atomL;
exports.DebugPrint$$$letRecL = DebugPrint$$$letRecL;
exports.DebugPrint$$$letL = DebugPrint$$$letL;
exports.DebugPrint$$$exprWrapL = DebugPrint$$$exprWrapL;
exports.DebugPrint$$$implFilesL = DebugPrint$$$implFilesL;
exports.DebugPrint$$$appL = DebugPrint$$$appL;
exports.DebugPrint$$$implFileL = DebugPrint$$$implFileL;
exports.DebugPrint$$$mexprL = DebugPrint$$$mexprL;
exports.DebugPrint$$$mdefsL = DebugPrint$$$mdefsL;
exports.DebugPrint$$$mdefL = DebugPrint$$$mdefL;
exports.DebugPrint$$$mbindL = DebugPrint$$$mbindL;
exports.DebugPrint$$$entityTypeL = DebugPrint$$$entityTypeL;
exports.DebugPrint$$$entityL = DebugPrint$$$entityL;
exports.DebugPrint$$$ccuL = DebugPrint$$$ccuL;
exports.DebugPrint$$$decisionTreeL = DebugPrint$$$decisionTreeL;
exports.DebugPrint$$$dcaseL = DebugPrint$$$dcaseL;
exports.DebugPrint$$$dtestL = DebugPrint$$$dtestL;
exports.DebugPrint$$$targetL = DebugPrint$$$targetL;
exports.DebugPrint$$$flatValsL = DebugPrint$$$flatValsL;
exports.DebugPrint$$$tmethodL = DebugPrint$$$tmethodL;
exports.DebugPrint$$$overrideL = DebugPrint$$$overrideL;
exports.DebugPrint$$$iimplL = DebugPrint$$$iimplL;
exports.DebugPrint$$$showType = DebugPrint$$$showType;
exports.DebugPrint$$$showExpr = DebugPrint$$$showExpr;
exports.DebugPrint$$$traitL = DebugPrint$$$traitL;
exports.DebugPrint$$$typarsL = DebugPrint$$$typarsL;
exports.wrapModuleOrNamespaceType = wrapModuleOrNamespaceType;
exports.wrapModuleOrNamespaceTypeInNamespace = wrapModuleOrNamespaceTypeInNamespace;
exports.wrapModuleOrNamespaceExprInNamespace = wrapModuleOrNamespaceExprInNamespace;
exports.SigTypeOfImplFile = SigTypeOfImplFile;
exports.SignatureRepackageInfo$$get_ImplToSigMapping = SignatureRepackageInfo$$get_ImplToSigMapping;
exports.SignatureRepackageInfo$$$get_Empty = SignatureRepackageInfo$$$get_Empty;
exports.SignatureHidingInfo$$$get_Empty = SignatureHidingInfo$$$get_Empty;
exports.addValRemap = addValRemap;
exports.mkRepackageRemapping = mkRepackageRemapping;
exports.accEntityRemap = accEntityRemap;
exports.accSubEntityRemap = accSubEntityRemap;
exports.valLinkageAEquiv = valLinkageAEquiv;
exports.accValRemap = accValRemap;
exports.getCorrespondingSigTy = getCorrespondingSigTy;
exports.accEntityRemapFromModuleOrNamespaceType = accEntityRemapFromModuleOrNamespaceType;
exports.accValRemapFromModuleOrNamespaceType = accValRemapFromModuleOrNamespaceType;
exports.ComputeRemappingFromInferredSignatureToExplicitSignature = ComputeRemappingFromInferredSignatureToExplicitSignature;
exports.abstractSlotValsOfTycons = abstractSlotValsOfTycons;
exports.accEntityRemapFromModuleOrNamespace = accEntityRemapFromModuleOrNamespace;
exports.accEntityRemapFromModuleOrNamespaceDefs = accEntityRemapFromModuleOrNamespaceDefs;
exports.accEntityRemapFromModuleOrNamespaceBind = accEntityRemapFromModuleOrNamespaceBind;
exports.accValRemapFromModuleOrNamespace = accValRemapFromModuleOrNamespace;
exports.accValRemapFromModuleOrNamespaceBind = accValRemapFromModuleOrNamespaceBind;
exports.accValRemapFromModuleOrNamespaceDefs = accValRemapFromModuleOrNamespaceDefs;
exports.ComputeRemappingFromImplementationToSignature = ComputeRemappingFromImplementationToSignature;
exports.accTyconHidingInfoAtAssemblyBoundary = accTyconHidingInfoAtAssemblyBoundary;
exports.accValHidingInfoAtAssemblyBoundary = accValHidingInfoAtAssemblyBoundary;
exports.accModuleOrNamespaceHidingInfoAtAssemblyBoundary = accModuleOrNamespaceHidingInfoAtAssemblyBoundary;
exports.ComputeHidingInfoAtAssemblyBoundary = ComputeHidingInfoAtAssemblyBoundary;
exports.IsHidden = IsHidden;
exports.IsHiddenTycon = IsHiddenTycon;
exports.IsHiddenTyconRepr = IsHiddenTyconRepr;
exports.IsHiddenVal = IsHiddenVal;
exports.IsHiddenRecdField = IsHiddenRecdField;
exports.foldModuleOrNamespaceTy = foldModuleOrNamespaceTy;
exports.allValsOfModuleOrNamespaceTy = allValsOfModuleOrNamespaceTy;
exports.allEntitiesOfModuleOrNamespaceTy = allEntitiesOfModuleOrNamespaceTy;
exports.isPublicVal = isPublicVal;
exports.isPublicUnionCase = isPublicUnionCase;
exports.isPublicRecdField = isPublicRecdField;
exports.isPublicTycon = isPublicTycon;
exports.freeVarsAllPublic = freeVarsAllPublic;
exports.freeTyvarsAllPublic = freeTyvarsAllPublic;
exports.$007CLinearMatchExpr$007C_$007C = $007CLinearMatchExpr$007C_$007C;
exports.rebuildLinearMatchExpr = rebuildLinearMatchExpr;
exports.unionFreeVars = unionFreeVars;
exports.accFreeVarsInTy = accFreeVarsInTy;
exports.accFreeVarsInTys = accFreeVarsInTys;
exports.accFreevarsInTycon = accFreevarsInTycon;
exports.accFreevarsInVal = accFreevarsInVal;
exports.accFreeVarsInTraitSln = accFreeVarsInTraitSln;
exports.boundLocalVal = boundLocalVal;
exports.boundProtect = boundProtect;
exports.accUsesFunctionLocalConstructs = accUsesFunctionLocalConstructs;
exports.bound_rethrow = bound_rethrow;
exports.accUsesRethrow = accUsesRethrow;
exports.boundLocalVals = boundLocalVals;
exports.bindLhs = bindLhs;
exports.freeVarsCacheCompute = freeVarsCacheCompute;
exports.accBindRhs = accBindRhs;
exports.accFreeInSwitchCases = accFreeInSwitchCases;
exports.accFreeInSwitchCase = accFreeInSwitchCase;
exports.accFreeInTest = accFreeInTest;
exports.accFreeInDecisionTree = accFreeInDecisionTree;
exports.accFreeInValFlags = accFreeInValFlags;
exports.accFreeLocalVal = accFreeLocalVal;
exports.accLocalTyconRepr = accLocalTyconRepr;
exports.accUsedRecdOrUnionTyconRepr = accUsedRecdOrUnionTyconRepr;
exports.accFreeUnionCaseRef = accFreeUnionCaseRef;
exports.accFreeRecdFieldRef = accFreeRecdFieldRef;
exports.accFreeExnRef = accFreeExnRef;
exports.accFreeValRef = accFreeValRef;
exports.accFreeInMethod = accFreeInMethod;
exports.accFreeInMethods = accFreeInMethods;
exports.accFreeInInterfaceImpl = accFreeInInterfaceImpl;
exports.accFreeInExpr = accFreeInExpr;
exports.accFreeInExprLinear = accFreeInExprLinear;
exports.accFreeInExprNonLinear = accFreeInExprNonLinear;
exports.accFreeInOp = accFreeInOp;
exports.accFreeInTargets = accFreeInTargets;
exports.accFreeInTarget = accFreeInTarget;
exports.accFreeInFlatExprs = accFreeInFlatExprs;
exports.accFreeInExprs = accFreeInExprs;
exports.accFreeInSlotSig = accFreeInSlotSig;
exports.freeInDecisionTree = freeInDecisionTree;
exports.freeInExpr = freeInExpr;
exports.accFreeInModuleOrNamespace = accFreeInModuleOrNamespace;
exports.accFreeInModuleOrNamespaceBind = accFreeInModuleOrNamespaceBind;
exports.accFreeInModuleOrNamespaces = accFreeInModuleOrNamespaces;
exports.freeInBindingRhs = freeInBindingRhs;
exports.freeInModuleOrNamespace = freeInModuleOrNamespace;
exports.stripLambda = stripLambda;
exports.stripLambdaN = stripLambdaN;
exports.tryStripLambdaN = tryStripLambdaN;
exports.stripTopLambda = stripTopLambda;
exports.InferArityOfExpr = InferArityOfExpr;
exports.InferArityOfExprBinding = InferArityOfExprBinding;
exports.underlyingTypeOfEnumTy = underlyingTypeOfEnumTy;
exports.setValHasNoArity = setValHasNoArity;
exports.normalizeEnumTy = normalizeEnumTy;
exports.decideStaticOptimizationConstraint = decideStaticOptimizationConstraint;
exports.DecideStaticOptimizations = DecideStaticOptimizations;
exports.mkStaticOptimizationExpr = mkStaticOptimizationExpr;
exports.fixValCopyFlagForQuotations = fixValCopyFlagForQuotations;
exports.markAsCompGen = markAsCompGen;
exports.bindLocalVal = bindLocalVal;
exports.bindLocalVals = bindLocalVals;
exports.bindTycon = bindTycon;
exports.bindTycons = bindTycons;
exports.remapAttribKind = remapAttribKind;
exports.tmenvCopyRemapAndBindTypars = tmenvCopyRemapAndBindTypars;
exports.remapAttrib = remapAttrib;
exports.remapAttribExpr = remapAttribExpr;
exports.remapAttribs = remapAttribs;
exports.remapPossibleForallTy = remapPossibleForallTy;
exports.remapArgData = remapArgData;
exports.remapValReprInfo = remapValReprInfo;
exports.remapValData = remapValData;
exports.remapParentRef = remapParentRef;
exports.mapImmediateValsAndTycons = mapImmediateValsAndTycons;
exports.copyVal = copyVal;
exports.fixupValData = fixupValData;
exports.copyAndRemapAndBindVals = copyAndRemapAndBindVals;
exports.copyAndRemapAndBindVal = copyAndRemapAndBindVal;
exports.remapExpr = remapExpr;
exports.remapTarget = remapTarget;
exports.remapLinearExpr = remapLinearExpr;
exports.remapConstraint = remapConstraint;
exports.remapOp = remapOp;
exports.remapValFlags = remapValFlags;
exports.remapExprs = remapExprs;
exports.remapFlatExprs = remapFlatExprs;
exports.remapDecisionTree = remapDecisionTree;
exports.copyAndRemapAndBindBinding = copyAndRemapAndBindBinding;
exports.copyAndRemapAndBindBindings = copyAndRemapAndBindBindings;
exports.remapAndRenameBinds = remapAndRenameBinds;
exports.remapAndRenameBind = remapAndRenameBind;
exports.remapMethod = remapMethod;
exports.remapInterfaceImpl = remapInterfaceImpl;
exports.remapRecdField = remapRecdField;
exports.remapRecdFields = remapRecdFields;
exports.remapUnionCase = remapUnionCase;
exports.remapUnionCases = remapUnionCases;
exports.remapFsObjData = remapFsObjData;
exports.remapTyconRepr = remapTyconRepr;
exports.remapTyconAug = remapTyconAug;
exports.remapTyconExnInfo = remapTyconExnInfo;
exports.remapMemberInfo = remapMemberInfo;
exports.copyAndRemapAndBindModTy = copyAndRemapAndBindModTy;
exports.remapModTy = remapModTy;
exports.renameTycon = renameTycon;
exports.renameVal = renameVal;
exports.copyTycon = copyTycon;
exports.copyAndRemapAndBindTyconsAndVals = copyAndRemapAndBindTyconsAndVals;
exports.allTyconsOfTycon = allTyconsOfTycon;
exports.allEntitiesOfModDef = allEntitiesOfModDef;
exports.allValsOfModDef = allValsOfModDef;
exports.remapAndBindModuleOrNamespaceExprWithSig = remapAndBindModuleOrNamespaceExprWithSig;
exports.remapModuleOrNamespaceExprWithSig = remapModuleOrNamespaceExprWithSig;
exports.copyAndRemapModDef = copyAndRemapModDef;
exports.remapAndRenameModDefs = remapAndRenameModDefs;
exports.remapAndRenameModDef = remapAndRenameModDef;
exports.remapAndRenameModBind = remapAndRenameModBind;
exports.remapImplFile = remapImplFile;
exports.copyModuleOrNamespaceType = copyModuleOrNamespaceType;
exports.copyExpr = copyExpr;
exports.copyImplFile = copyImplFile;
exports.instExpr = instExpr;
exports.remarkExpr = remarkExpr;
exports.remarkObjExprMethod = remarkObjExprMethod;
exports.remarkInterfaceImpl = remarkInterfaceImpl;
exports.remarkExprs = remarkExprs;
exports.remarkFlatExprs = remarkFlatExprs;
exports.remarkDecisionTree = remarkDecisionTree;
exports.remarkBinds = remarkBinds;
exports.remarkBind = remarkBind;
exports.isRecdOrStructFieldDefinitelyMutable = isRecdOrStructFieldDefinitelyMutable;
exports.isUnionCaseDefinitelyMutable = isUnionCaseDefinitelyMutable;
exports.isUnionCaseRefDefinitelyMutable = isUnionCaseRefDefinitelyMutable;
exports.isRecdOrUnionOrStructTyconRefDefinitelyMutable = isRecdOrUnionOrStructTyconRefDefinitelyMutable;
exports.isExnDefinitelyMutable = isExnDefinitelyMutable;
exports.isUnionCaseFieldMutable = isUnionCaseFieldMutable;
exports.isExnFieldMutable = isExnFieldMutable;
exports.useGenuineField = useGenuineField;
exports.ComputeFieldName = ComputeFieldName;
exports.isQuotedExprTy = isQuotedExprTy;
exports.destQuotedExprTy = destQuotedExprTy;
exports.mkQuotedExprTy = mkQuotedExprTy;
exports.mkRawQuotedExprTy = mkRawQuotedExprTy;
exports.mkAnyTupledTy = mkAnyTupledTy;
exports.mkRefTupledTy = mkRefTupledTy;
exports.mkRefTupledVarsTy = mkRefTupledVarsTy;
exports.mkMethodTy = mkMethodTy;
exports.mkArrayType = mkArrayType;
exports.mkByteArrayTy = mkByteArrayTy;
exports.tyOfExpr = tyOfExpr;
exports.primMkApp = primMkApp;
exports.isExpansiveUnderInstantiation = isExpansiveUnderInstantiation;
exports.mkExprApplAux = mkExprApplAux;
exports.mkAppsAux = mkAppsAux;
exports.mkApps = mkApps;
exports.mkTyAppExpr = mkTyAppExpr;
exports.accTargetsOfDecisionTree = accTargetsOfDecisionTree;
exports.mapAccTipsOfDecisionTree = mapAccTipsOfDecisionTree;
exports.mapAccTipsOfEdge = mapAccTipsOfEdge;
exports.mapTargetsOfDecisionTree = mapTargetsOfDecisionTree;
exports.eliminateDeadTargetsFromMatch = eliminateDeadTargetsFromMatch;
exports.targetOfSuccessDecisionTree = targetOfSuccessDecisionTree;
exports.decisionTreeHasNonTrivialBindings = decisionTreeHasNonTrivialBindings;
exports.foldLinearBindingTargetsOfMatch = foldLinearBindingTargetsOfMatch;
exports.simplifyTrivialMatch = simplifyTrivialMatch;
exports.mkAndSimplifyMatch = mkAndSimplifyMatch;
exports.isRecdOrStructTyconRefAssumedImmutable = isRecdOrStructTyconRefAssumedImmutable;
exports.isRecdOrStructTyconRefReadOnly = isRecdOrStructTyconRefReadOnly;
exports.isRecdOrStructTyReadOnly = isRecdOrStructTyReadOnly;
exports.CanTakeAddressOf = CanTakeAddressOf;
exports.CanTakeAddressOfImmutableVal = CanTakeAddressOfImmutableVal;
exports.MustTakeAddressOfVal = MustTakeAddressOfVal;
exports.MustTakeAddressOfByrefGet = MustTakeAddressOfByrefGet;
exports.CanTakeAddressOfByrefGet = CanTakeAddressOfByrefGet;
exports.MustTakeAddressOfRecdField = MustTakeAddressOfRecdField;
exports.MustTakeAddressOfRecdFieldRef = MustTakeAddressOfRecdFieldRef;
exports.CanTakeAddressOfRecdFieldRef = CanTakeAddressOfRecdFieldRef;
exports.CanTakeAddressOfUnionFieldRef = CanTakeAddressOfUnionFieldRef;
exports.mkExprAddrOfExprAux = mkExprAddrOfExprAux;
exports.mkExprAddrOfExpr = mkExprAddrOfExpr;
exports.mkTupleFieldGet = mkTupleFieldGet;
exports.mkRecdFieldGet = mkRecdFieldGet;
exports.mkUnionCaseFieldGetUnproven = mkUnionCaseFieldGetUnproven;
exports.mkArray = mkArray;
exports.IterateRecursiveFixups = IterateRecursiveFixups;
exports.JoinTyparStaticReq = JoinTyparStaticReq;
exports.ExprFolder0 = ExprFolder0;
exports.ExprFolders$00601$$$$002Ector$$Z53FB4564 = ExprFolders$00601$$$$002Ector$$Z53FB4564;
exports.ExprFolders$00601$$get_FoldExpr = ExprFolders$00601$$get_FoldExpr;
exports.ExprFolders$00601$$get_FoldImplFile = ExprFolders$00601$$get_FoldImplFile;
exports.FoldExpr = FoldExpr;
exports.FoldImplFile = FoldImplFile;
exports.mkString = mkString;
exports.mkBool = mkBool;
exports.mkByte = mkByte;
exports.mkUInt16 = mkUInt16;
exports.mkTrue = mkTrue;
exports.mkFalse = mkFalse;
exports.mkUnit = mkUnit;
exports.mkInt32 = mkInt32;
exports.mkInt = mkInt;
exports.mkZero = mkZero;
exports.mkOne = mkOne;
exports.mkTwo = mkTwo;
exports.mkMinusOne = mkMinusOne;
exports.destInt32 = destInt32;
exports.isIDelegateEventType = isIDelegateEventType;
exports.destIDelegateEventType = destIDelegateEventType;
exports.mkIEventType = mkIEventType;
exports.mkIObservableType = mkIObservableType;
exports.mkIObserverType = mkIObserverType;
exports.mkRefCellContentsRef = mkRefCellContentsRef;
exports.mkSequential = mkSequential;
exports.mkCompGenSequential = mkCompGenSequential;
exports.mkSequentials = mkSequentials;
exports.mkGetArg0 = mkGetArg0;
exports.mkAnyTupled = mkAnyTupled;
exports.mkRefTupled = mkRefTupled;
exports.mkRefTupledNoTypes = mkRefTupledNoTypes;
exports.mkRefTupledVars = mkRefTupledVars;
exports.inversePerm = inversePerm;
exports.permute = permute;
exports.existsR = existsR;
exports.liftAllBefore = liftAllBefore;
exports.permuteExprList = permuteExprList;
exports.mkRecordExpr = mkRecordExpr;
exports.mkRefCell = mkRefCell;
exports.mkRefCellGet = mkRefCellGet;
exports.mkRefCellSet = mkRefCellSet;
exports.mkNil = mkNil;
exports.mkCons = mkCons;
exports.mkCompGenLocalAndInvisbleBind = mkCompGenLocalAndInvisbleBind;
exports.mkUnbox = mkUnbox;
exports.mkBox = mkBox;
exports.mkIsInst = mkIsInst;
exports.mspec_Type_GetTypeFromHandle = mspec_Type_GetTypeFromHandle;
exports.mspec_String_Length = mspec_String_Length;
exports.fspec_Missing_Value = fspec_Missing_Value;
exports.mkInitializeArrayMethSpec = mkInitializeArrayMethSpec;
exports.mkInvalidCastExnNewobj = mkInvalidCastExnNewobj;
exports.typedExprForIntrinsic = typedExprForIntrinsic;
exports.mkCallGetGenericComparer = mkCallGetGenericComparer;
exports.mkCallGetGenericEREqualityComparer = mkCallGetGenericEREqualityComparer;
exports.mkCallGetGenericPEREqualityComparer = mkCallGetGenericPEREqualityComparer;
exports.mkCallUnbox = mkCallUnbox;
exports.mkCallUnboxFast = mkCallUnboxFast;
exports.mkCallTypeTest = mkCallTypeTest;
exports.mkCallTypeOf = mkCallTypeOf;
exports.mkCallTypeDefOf = mkCallTypeDefOf;
exports.mkCallDispose = mkCallDispose;
exports.mkCallSeq = mkCallSeq;
exports.mkCallCreateInstance = mkCallCreateInstance;
exports.mkCallGetQuerySourceAsEnumerable = mkCallGetQuerySourceAsEnumerable;
exports.mkCallNewQuerySource = mkCallNewQuerySource;
exports.mkCallCreateEvent = mkCallCreateEvent;
exports.mkCallGenericComparisonWithComparerOuter = mkCallGenericComparisonWithComparerOuter;
exports.mkCallGenericEqualityEROuter = mkCallGenericEqualityEROuter;
exports.mkCallGenericEqualityWithComparerOuter = mkCallGenericEqualityWithComparerOuter;
exports.mkCallGenericHashWithComparerOuter = mkCallGenericHashWithComparerOuter;
exports.mkCallEqualsOperator = mkCallEqualsOperator;
exports.mkCallNotEqualsOperator = mkCallNotEqualsOperator;
exports.mkCallLessThanOperator = mkCallLessThanOperator;
exports.mkCallLessThanOrEqualsOperator = mkCallLessThanOrEqualsOperator;
exports.mkCallGreaterThanOperator = mkCallGreaterThanOperator;
exports.mkCallGreaterThanOrEqualsOperator = mkCallGreaterThanOrEqualsOperator;
exports.mkCallAdditionOperator = mkCallAdditionOperator;
exports.mkCallSubtractionOperator = mkCallSubtractionOperator;
exports.mkCallMultiplyOperator = mkCallMultiplyOperator;
exports.mkCallDivisionOperator = mkCallDivisionOperator;
exports.mkCallModulusOperator = mkCallModulusOperator;
exports.mkCallBitwiseAndOperator = mkCallBitwiseAndOperator;
exports.mkCallBitwiseOrOperator = mkCallBitwiseOrOperator;
exports.mkCallBitwiseXorOperator = mkCallBitwiseXorOperator;
exports.mkCallShiftLeftOperator = mkCallShiftLeftOperator;
exports.mkCallShiftRightOperator = mkCallShiftRightOperator;
exports.mkCallUnaryNegOperator = mkCallUnaryNegOperator;
exports.mkCallUnaryNotOperator = mkCallUnaryNotOperator;
exports.mkCallAdditionChecked = mkCallAdditionChecked;
exports.mkCallSubtractionChecked = mkCallSubtractionChecked;
exports.mkCallMultiplyChecked = mkCallMultiplyChecked;
exports.mkCallUnaryNegChecked = mkCallUnaryNegChecked;
exports.mkCallToByteChecked = mkCallToByteChecked;
exports.mkCallToSByteChecked = mkCallToSByteChecked;
exports.mkCallToInt16Checked = mkCallToInt16Checked;
exports.mkCallToUInt16Checked = mkCallToUInt16Checked;
exports.mkCallToIntChecked = mkCallToIntChecked;
exports.mkCallToInt32Checked = mkCallToInt32Checked;
exports.mkCallToUInt32Checked = mkCallToUInt32Checked;
exports.mkCallToInt64Checked = mkCallToInt64Checked;
exports.mkCallToUInt64Checked = mkCallToUInt64Checked;
exports.mkCallToIntPtrChecked = mkCallToIntPtrChecked;
exports.mkCallToUIntPtrChecked = mkCallToUIntPtrChecked;
exports.mkCallToByteOperator = mkCallToByteOperator;
exports.mkCallToSByteOperator = mkCallToSByteOperator;
exports.mkCallToInt16Operator = mkCallToInt16Operator;
exports.mkCallToUInt16Operator = mkCallToUInt16Operator;
exports.mkCallToIntOperator = mkCallToIntOperator;
exports.mkCallToInt32Operator = mkCallToInt32Operator;
exports.mkCallToUInt32Operator = mkCallToUInt32Operator;
exports.mkCallToInt64Operator = mkCallToInt64Operator;
exports.mkCallToUInt64Operator = mkCallToUInt64Operator;
exports.mkCallToSingleOperator = mkCallToSingleOperator;
exports.mkCallToDoubleOperator = mkCallToDoubleOperator;
exports.mkCallToIntPtrOperator = mkCallToIntPtrOperator;
exports.mkCallToUIntPtrOperator = mkCallToUIntPtrOperator;
exports.mkCallToCharOperator = mkCallToCharOperator;
exports.mkCallToEnumOperator = mkCallToEnumOperator;
exports.mkCallArrayLength = mkCallArrayLength;
exports.mkCallArrayGet = mkCallArrayGet;
exports.mkCallArray2DGet = mkCallArray2DGet;
exports.mkCallArray3DGet = mkCallArray3DGet;
exports.mkCallArray4DGet = mkCallArray4DGet;
exports.mkCallArraySet = mkCallArraySet;
exports.mkCallArray2DSet = mkCallArray2DSet;
exports.mkCallArray3DSet = mkCallArray3DSet;
exports.mkCallArray4DSet = mkCallArray4DSet;
exports.mkCallHash = mkCallHash;
exports.mkCallBox = mkCallBox;
exports.mkCallIsNull = mkCallIsNull;
exports.mkCallIsNotNull = mkCallIsNotNull;
exports.mkCallRaise = mkCallRaise;
exports.mkCallNewDecimal = mkCallNewDecimal;
exports.mkCallNewFormat = mkCallNewFormat;
exports.TryEliminateDesugaredConstants = TryEliminateDesugaredConstants;
exports.mkSeqTy = mkSeqTy;
exports.mkIEnumeratorTy = mkIEnumeratorTy;
exports.mkCallSeqCollect = mkCallSeqCollect;
exports.mkCallSeqUsing = mkCallSeqUsing;
exports.mkCallSeqDelay = mkCallSeqDelay;
exports.mkCallSeqAppend = mkCallSeqAppend;
exports.mkCallSeqGenerated = mkCallSeqGenerated;
exports.mkCallSeqFinally = mkCallSeqFinally;
exports.mkCallSeqOfFunctions = mkCallSeqOfFunctions;
exports.mkCallSeqToArray = mkCallSeqToArray;
exports.mkCallSeqToList = mkCallSeqToList;
exports.mkCallSeqMap = mkCallSeqMap;
exports.mkCallSeqSingleton = mkCallSeqSingleton;
exports.mkCallSeqEmpty = mkCallSeqEmpty;
exports.mkCallDeserializeQuotationFSharp20Plus = mkCallDeserializeQuotationFSharp20Plus;
exports.mkCallDeserializeQuotationFSharp40Plus = mkCallDeserializeQuotationFSharp40Plus;
exports.mkCallCastQuotation = mkCallCastQuotation;
exports.mkCallLiftValueWithName = mkCallLiftValueWithName;
exports.mkCallLiftValueWithDefn = mkCallLiftValueWithDefn;
exports.mkCallCheckThis = mkCallCheckThis;
exports.mkCallFailInit = mkCallFailInit;
exports.mkCallFailStaticInit = mkCallFailStaticInit;
exports.mkCallQuoteToLinqLambdaExpression = mkCallQuoteToLinqLambdaExpression;
exports.mkLazyDelayed = mkLazyDelayed;
exports.mkLazyForce = mkLazyForce;
exports.mkGetString = mkGetString;
exports.mkGetStringChar = mkGetStringChar;
exports.mkGetStringLength = mkGetStringLength;
exports.mkDecr = mkDecr;
exports.mkIncr = mkIncr;
exports.mkLdlen = mkLdlen;
exports.mkLdelem = mkLdelem;
exports.mkILAsmCeq = mkILAsmCeq;
exports.mkILAsmClt = mkILAsmClt;
exports.mkNull = mkNull;
exports.mkThrow = mkThrow;
exports.destThrow = destThrow;
exports.isThrow = isThrow;
exports.mkReraiseLibCall = mkReraiseLibCall;
exports.mkReraise = mkReraise;
exports.tref_CompilationArgumentCountsAttr = tref_CompilationArgumentCountsAttr;
exports.tref_CompilationMappingAttr = tref_CompilationMappingAttr;
exports.tref_CompilationSourceNameAttr = tref_CompilationSourceNameAttr;
exports.tref_SourceConstructFlags = tref_SourceConstructFlags;
exports.mkCompilationMappingAttrPrim = mkCompilationMappingAttrPrim;
exports.mkCompilationMappingAttr = mkCompilationMappingAttr;
exports.mkCompilationMappingAttrWithSeqNum = mkCompilationMappingAttrWithSeqNum;
exports.mkCompilationMappingAttrWithVariantNumAndSeqNum = mkCompilationMappingAttrWithVariantNumAndSeqNum;
exports.mkCompilationArgumentCountsAttr = mkCompilationArgumentCountsAttr;
exports.mkCompilationSourceNameAttr = mkCompilationSourceNameAttr;
exports.mkCompilationMappingAttrForQuotationResource = mkCompilationMappingAttrForQuotationResource;
exports.tref_SignatureDataVersionAttr = tref_SignatureDataVersionAttr;
exports.mkSignatureDataVersionAttr = mkSignatureDataVersionAttr;
exports.IsSignatureDataVersionAttr = IsSignatureDataVersionAttr;
exports.TryFindAutoOpenAttr = TryFindAutoOpenAttr;
exports.TryFindInternalsVisibleToAttr = TryFindInternalsVisibleToAttr;
exports.IsMatchingSignatureDataVersionAttr = IsMatchingSignatureDataVersionAttr;
exports.mkCompilerGeneratedAttr = mkCompilerGeneratedAttr;
exports.untupledToRefTupled = untupledToRefTupled;
exports.AdjustArityOfLambdaBody = AdjustArityOfLambdaBody;
exports.MultiLambdaToTupledLambda = MultiLambdaToTupledLambda;
exports.$007CRefTuple$007C_$007C = $007CRefTuple$007C_$007C;
exports.MultiLambdaToTupledLambdaIfNeeded = MultiLambdaToTupledLambdaIfNeeded;
exports.MakeApplicationAndBetaReduceAux = MakeApplicationAndBetaReduceAux;
exports.MakeApplicationAndBetaReduce = MakeApplicationAndBetaReduce;
exports.MakeArgsForTopArgs = MakeArgsForTopArgs;
exports.AdjustValForExpectedArity = AdjustValForExpectedArity;
exports.IsSubsumptionExpr = IsSubsumptionExpr;
exports.stripTupledFunTy = stripTupledFunTy;
exports.$007CExprValWithPossibleTypeInst$007C_$007C = $007CExprValWithPossibleTypeInst$007C_$007C;
exports.mkCoerceIfNeeded = mkCoerceIfNeeded;
exports.mkCompGenLetIn = mkCompGenLetIn;
exports.AdjustPossibleSubsumptionExpr = AdjustPossibleSubsumptionExpr;
exports.NormalizeAndAdjustPossibleSubsumptionExprs = NormalizeAndAdjustPossibleSubsumptionExprs;
exports.etaExpandTypeLambda = etaExpandTypeLambda;
exports.AdjustValToTopVal = AdjustValToTopVal;
exports.LinearizeTopMatchAux = LinearizeTopMatchAux;
exports.LinearizeTopMatch = LinearizeTopMatch;
exports.commaEncs = commaEncs;
exports.angleEnc = angleEnc;
exports.ticksAndArgCountTextOfTyconRef = ticksAndArgCountTextOfTyconRef;
exports.typarEnc = typarEnc;
exports.typeEnc = typeEnc;
exports.tyargsEnc = tyargsEnc;
exports.XmlDocArgsEnc = XmlDocArgsEnc;
exports.buildAccessPath = buildAccessPath;
exports.prependPath = prependPath;
exports.XmlDocSigOfVal = XmlDocSigOfVal;
exports.BuildXmlDocSig = BuildXmlDocSig;
exports.XmlDocSigOfUnionCase = XmlDocSigOfUnionCase;
exports.XmlDocSigOfField = XmlDocSigOfField;
exports.XmlDocSigOfProperty = XmlDocSigOfProperty;
exports.XmlDocSigOfTycon = XmlDocSigOfTycon;
exports.XmlDocSigOfSubModul = XmlDocSigOfSubModul;
exports.XmlDocSigOfEntity = XmlDocSigOfEntity;
exports.HasUseNullAsTrueValueAttribute = HasUseNullAsTrueValueAttribute;
exports.TyconHasUseNullAsTrueValueAttribute = TyconHasUseNullAsTrueValueAttribute;
exports.CanHaveUseNullAsTrueValueAttribute = CanHaveUseNullAsTrueValueAttribute;
exports.IsUnionTypeWithNullAsTrueValue = IsUnionTypeWithNullAsTrueValue;
exports.TyconCompilesInstanceMembersAsStatic = TyconCompilesInstanceMembersAsStatic;
exports.TcrefCompilesInstanceMembersAsStatic = TcrefCompilesInstanceMembersAsStatic;
exports.TypeNullNever = TypeNullNever;
exports.TypeNullIsExtraValue = TypeNullIsExtraValue;
exports.TypeNullIsTrueValue = TypeNullIsTrueValue;
exports.TypeNullNotLiked = TypeNullNotLiked;
exports.TypeSatisfiesNullConstraint = TypeSatisfiesNullConstraint;
exports.TypeHasDefaultValue = TypeHasDefaultValue;
exports.$007CSpecialComparableHeadType$007C_$007C = $007CSpecialComparableHeadType$007C_$007C;
exports.$007CSpecialEquatableHeadType$007C_$007C = $007CSpecialEquatableHeadType$007C_$007C;
exports.$007CSpecialNotEquatableHeadType$007C_$007C = $007CSpecialNotEquatableHeadType$007C_$007C;
exports.canUseTypeTestFast = canUseTypeTestFast;
exports.canUseUnboxFast = canUseUnboxFast;
exports.mkIsInstConditional = mkIsInstConditional;
exports.mkNullTest = mkNullTest;
exports.mkNonNullTest = mkNonNullTest;
exports.mkNonNullCond = mkNonNullCond;
exports.mkIfThen = mkIfThen;
exports.ModuleNameIsMangled = ModuleNameIsMangled;
exports.CompileAsEvent = CompileAsEvent;
exports.MemberIsCompiledAsInstance = MemberIsCompiledAsInstance;
exports.isSealedTy = isSealedTy;
exports.isComInteropTy = isComInteropTy;
exports.ValSpecIsCompiledAsInstance = ValSpecIsCompiledAsInstance;
exports.ValRefIsCompiledAsInstanceMember = ValRefIsCompiledAsInstanceMember;
exports.GetMemberCallInfo = GetMemberCallInfo;
exports.TryGetActivePatternInfo = TryGetActivePatternInfo;
exports.ActivePatternElemRef$002Eget_Name = ActivePatternElemRef$002Eget_Name;
exports.mkChoiceTyconRef = mkChoiceTyconRef;
exports.mkChoiceTy = mkChoiceTy;
exports.mkChoiceCaseRef = mkChoiceCaseRef;
exports.ActivePatternInfo$002Eget_Names = ActivePatternInfo$002Eget_Names;
exports.ActivePatternInfo$002EResultType = ActivePatternInfo$002EResultType;
exports.ActivePatternInfo$002EOverallType = ActivePatternInfo$002EOverallType;
exports.doesActivePatternHaveFreeTypars = doesActivePatternHaveFreeTypars;
exports.rewriteBind = rewriteBind;
exports.rewriteBindStructure = rewriteBindStructure;
exports.rewriteBinds = rewriteBinds;
exports.RewriteExpr = RewriteExpr;
exports.preRewriteExpr = preRewriteExpr;
exports.postRewriteExpr = postRewriteExpr;
exports.rewriteExprStructure = rewriteExprStructure;
exports.rewriteLinearExpr = rewriteLinearExpr;
exports.rewriteExprs = rewriteExprs;
exports.rewriteFlatExprs = rewriteFlatExprs;
exports.rewriteDecisionTree = rewriteDecisionTree;
exports.rewriteTarget = rewriteTarget;
exports.rewriteTargets = rewriteTargets;
exports.rewriteObjExprOverride = rewriteObjExprOverride;
exports.rewriteObjExprInterfaceImpl = rewriteObjExprInterfaceImpl;
exports.rewriteModuleOrNamespaceExpr = rewriteModuleOrNamespaceExpr;
exports.rewriteModuleOrNamespaceDefs = rewriteModuleOrNamespaceDefs;
exports.rewriteModuleOrNamespaceDef = rewriteModuleOrNamespaceDef;
exports.rewriteModuleOrNamespaceBinding = rewriteModuleOrNamespaceBinding;
exports.rewriteModuleOrNamespaceBindings = rewriteModuleOrNamespaceBindings;
exports.RewriteImplFile = RewriteImplFile;
exports.MakeExportRemapping = MakeExportRemapping;
exports.remapEntityDataToNonLocal = remapEntityDataToNonLocal;
exports.remapTyconToNonLocal = remapTyconToNonLocal;
exports.remapValToNonLocal = remapValToNonLocal;
exports.ApplyExportRemappingToEntity = ApplyExportRemappingToEntity;
exports.isCompiledConstraint = isCompiledConstraint;
exports.IsGenericValWithGenericContraints = IsGenericValWithGenericContraints;
exports.Entity$002EHasInterface = Entity$002EHasInterface;
exports.Entity$002EHasOverride = Entity$002EHasOverride;
exports.Entity$002EHasMember = Entity$002EHasMember;
exports.EntityRef$002EHasInterface = EntityRef$002EHasInterface;
exports.EntityRef$002EHasOverride = EntityRef$002EHasOverride;
exports.EntityRef$002EHasMember = EntityRef$002EHasMember;
exports.mkFastForLoop = mkFastForLoop;
exports.IsSimpleSyntacticConstantExpr = IsSimpleSyntacticConstantExpr;
exports.EvalArithBinOp = EvalArithBinOp;
exports.EvalAttribArgExpr = EvalAttribArgExpr;
exports.EvaledAttribExprEquality = EvaledAttribExprEquality;
exports.$007CConstToILFieldInit$007C_$007C = $007CConstToILFieldInit$007C_$007C;
exports.EvalLiteralExprOrAttribArg = EvalLiteralExprOrAttribArg;
exports.GetTypeOfIntrinsicMemberInCompiledForm = GetTypeOfIntrinsicMemberInCompiledForm;
exports.mkCompiledTuple = mkCompiledTuple;
exports.mkILMethodSpecForTupleItem = mkILMethodSpecForTupleItem;
exports.mkILFieldSpecForTupleItem = mkILFieldSpecForTupleItem;
exports.mkGetTupleItemN = mkGetTupleItemN;
exports.$007CInt32Expr$007C_$007C = $007CInt32Expr$007C_$007C;
exports.$007CTryFinally$007C_$007C = $007CTryFinally$007C_$007C;
exports.$007CWhileLoopForCompiledForEachExpr$007C_$007C = $007CWhileLoopForCompiledForEachExpr$007C_$007C;
exports.$007CLet$007C_$007C = $007CLet$007C_$007C;
exports.$007CRangeInt32Step$007C_$007C = $007CRangeInt32Step$007C_$007C;
exports.$007CGetEnumeratorCall$007C_$007C = $007CGetEnumeratorCall$007C_$007C;
exports.$007CCompiledForEachExpr$007C_$007C = $007CCompiledForEachExpr$007C_$007C;
exports.$007CCompiledInt32RangeForEachExpr$007C_$007C = $007CCompiledInt32RangeForEachExpr$007C_$007C;
exports.DetectAndOptimizeForExpression = DetectAndOptimizeForExpression;
exports.$007CInnerExprPat$007C = $007CInnerExprPat$007C;
exports.BindUnitVars = BindUnitVars;
exports.isThreadOrContextStatic = isThreadOrContextStatic;
exports.mkUnitDelayLambda = mkUnitDelayLambda;
exports.OptimizeForExpressionOptions = exports.ExprRewritingEnv = exports.enum_CompilationRepresentationAttribute_PermitNull = exports.enum_CompilationRepresentationAttribute_ModuleSuffix = exports.enum_CompilationRepresentationAttribute_StaticInstanceMask = exports.enum_CompilationRepresentationAttribute_Instance = exports.enum_CompilationRepresentationAttribute_Static = exports.tname_InternalsVisibleToAttr = exports.tname_AutoOpenAttr = exports.tnames_SignatureDataVersionAttr = exports.tname_SignatureDataVersionAttr = exports.tnameSourceConstructFlags = exports.tnameCompilationMappingAttr = exports.tnameCompilationArgumentCountsAttr = exports.tnameCompilationSourceNameAttr = exports.unbox = exports.isinst = exports.box = exports.ExprFolders$00601 = exports.ExprFolder$00601 = exports.DefensiveCopyWarning = exports.Mutates = exports.ValCopyFlag = exports.StaticOptimizationAnswer = exports.AllowTypeDirectedDetupling = exports.emptyFreeVars = exports.SignatureHidingInfo = exports.SignatureRepackageInfo = exports.DebugPrint$$$layoutRanges = exports.DisplayEnv = exports.SimplifyTypes$$$typeSimplificationInfo0 = exports.SimplifyTypes$002ETypeSimplificationInfo = exports.SimplifyTypes$$$emptyTyparCounts = exports.CollectLocals = exports.CollectTypars = exports.CollectTyparsAndLocals = exports.CollectAll = exports.CollectTyparsAndLocalsNoCaching = exports.CollectLocalsNoCaching = exports.CollectTyparsNoCaching = exports.CollectAllNoCaching = exports.FreeVarOptions = exports.emptyFreeTyvars = exports.emptyFreeTypars = exports.typarOrder = exports.emptyFreeTycons = exports.emptyFreeUnionCases = exports.emptyFreeRecdFields = exports.emptyFreeLocals = exports.TypeDefMetadata = exports.TyconRefMultiMap$00601 = exports.ValMultiMap$00601 = exports.ValHash$00601 = exports.TypeScheme = exports.MatchBuilder = exports.unionCaseRefOrder = exports.recdFieldRefOrder = exports.tyconOrder = exports.valOrder = exports.typeEquivEnvEmpty = exports.TypeEquivEnv = exports.Erasure = exports.goodTupleFields = exports.maxTuple = exports.emptyRemap = exports.Remap = exports.emptyTyparInst = exports.emptyTyconRefRemap = exports.ValMap$00601 = exports.TyconRefMap$00601 = exports.TyparMap$00601 = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _tast = require("./tast");

var _Map = require("../fable-core.2.0.3/Map");

var _Long = require("../fable-core.2.0.3/Long");

var _List = require("../fable-core.2.0.3/List");

var _String = require("../fable-core.2.0.3/String");

var _lib = require("./lib");

var _illib = require("../absil/illib");

var _Option = require("../fable-core.2.0.3/Option");

var _TcGlobals = require("./TcGlobals");

var _rational = require("./rational");

var _Util = require("../fable-core.2.0.3/Util");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _ast = require("./ast");

var _ResizeArray = require("../utils/ResizeArray");

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _zset = require("../absil/zset");

var _Seq = require("../fable-core.2.0.3/Seq");

var _QueueList = require("./QueueList");

var _ildiag = require("../absil/ildiag");

var _zmap = require("../absil/zmap");

var _layout = require("./layout");

var _range = require("./range");

var _PrettyNaming = require("./PrettyNaming");

var _Char = require("../fable-core.2.0.3/Char");

var _ilxsettings = require("../ilx/ilxsettings");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Set = require("../fable-core.2.0.3/Set");

const TyparMap$00601 = (0, _Types.declare)(function TyparMap$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparMap$00601 = TyparMap$00601;

function TyparMap$00601$$get_Item$$ZB4A2630(tm, v) {
  const m = tm.fields[0];
  return (0, _Map.FSharpMap$$get_Item$$2B595)(m, (0, _tast.Typar$$get_Stamp)(v));
}

function TyparMap$00601$$ContainsKey$$ZB4A2630(tm$$1, v$$1) {
  const m$$1 = tm$$1.fields[0];
  return (0, _Map.FSharpMap$$ContainsKey$$2B595)(m$$1, (0, _tast.Typar$$get_Stamp)(v$$1));
}

function TyparMap$00601$$TryFind$$ZB4A2630(tm$$2, v$$2) {
  const m$$2 = tm$$2.fields[0];
  return (0, _Map.FSharpMap$$TryFind$$2B595)(m$$2, (0, _tast.Typar$$get_Stamp)(v$$2));
}

function TyparMap$00601$$Add$$Z748C59BB(tm$$3, v$$3, x) {
  const m$$3 = tm$$3.fields[0];
  return new TyparMap$00601(0, "TPMap", (0, _Map.FSharpMap$$Add$$5BDDA1)(m$$3, (0, _tast.Typar$$get_Stamp)(v$$3), x));
}

function TyparMap$00601$$$get_Empty() {
  return new TyparMap$00601(0, "TPMap", (0, _Map.empty)({
    Compare: _Long.compare
  }));
}

const TyconRefMap$00601 = (0, _Types.declare)(function TyconRefMap$00601(imap) {
  const $this$$3 = this;
  $this$$3.imap = imap;
});
exports.TyconRefMap$00601 = TyconRefMap$00601;

function TyconRefMap$00601$$$$002Ector$$Z77789F8C(imap) {
  return this != null ? TyconRefMap$00601.call(this, imap) : new TyconRefMap$00601(imap);
}

function TyconRefMap$00601$$get_Item$$Z788D4AAC(m$$4, v$$4) {
  return (0, _Map.FSharpMap$$get_Item$$2B595)(m$$4.imap, (0, _tast.EntityRef$$get_Stamp)(v$$4));
}

function TyconRefMap$00601$$TryFind$$Z788D4AAC(m$$5, v$$5) {
  return (0, _Map.FSharpMap$$TryFind$$2B595)(m$$5.imap, (0, _tast.EntityRef$$get_Stamp)(v$$5));
}

function TyconRefMap$00601$$ContainsKey$$Z788D4AAC(m$$6, v$$6) {
  return (0, _Map.FSharpMap$$ContainsKey$$2B595)(m$$6.imap, (0, _tast.EntityRef$$get_Stamp)(v$$6));
}

function TyconRefMap$00601$$Add(m$$7, v$$7, x$$1) {
  return TyconRefMap$00601$$$$002Ector$$Z77789F8C((0, _Map.FSharpMap$$Add$$5BDDA1)(m$$7.imap, (0, _tast.EntityRef$$get_Stamp)(v$$7), x$$1));
}

function TyconRefMap$00601$$Remove$$Z788D4AAC(m$$8, v$$8) {
  return TyconRefMap$00601$$$$002Ector$$Z77789F8C((0, _Map.FSharpMap$$Remove$$2B595)(m$$8.imap, (0, _tast.EntityRef$$get_Stamp)(v$$8)));
}

function TyconRefMap$00601$$get_IsEmpty(m$$9) {
  return (0, _Map.FSharpMap$$get_IsEmpty)(m$$9.imap);
}

function TyconRefMap$00601$$$get_Empty() {
  return TyconRefMap$00601$$$$002Ector$$Z77789F8C((0, _Map.empty)({
    Compare: _Long.compare
  }));
}

function TyconRefMap$00601$$$OfList$$ZB24A5BC(vs) {
  return (0, _List.foldBack)(function folder(tupledArg, acc) {
    return TyconRefMap$00601$$Add(acc, tupledArg[0], tupledArg[1]);
  }, vs, TyconRefMap$00601$$$get_Empty());
}

const ValMap$00601 = (0, _Types.declare)(function ValMap$00601(imap$$1) {
  const $this$$6 = this;
  $this$$6.imap = imap$$1;
}, _Types.Record);
exports.ValMap$00601 = ValMap$00601;

function ValMap$00601$$$$002Ector$$Z77789F8C(imap$$1) {
  return this != null ? ValMap$00601.call(this, imap$$1) : new ValMap$00601(imap$$1);
}

function ValMap$00601$$get_Contents(m$$10) {
  return m$$10.imap;
}

function ValMap$00601$$get_Item$$7D0CFEA5(m$$11, v$$9) {
  return (0, _Map.FSharpMap$$get_Item$$2B595)(m$$11.imap, (0, _tast.Val$$get_Stamp)(v$$9));
}

function ValMap$00601$$TryFind$$7D0CFEA5(m$$12, v$$10) {
  return (0, _Map.FSharpMap$$TryFind$$2B595)(m$$12.imap, (0, _tast.Val$$get_Stamp)(v$$10));
}

function ValMap$00601$$ContainsVal$$7D0CFEA5(m$$13, v$$11) {
  return (0, _Map.FSharpMap$$ContainsKey$$2B595)(m$$13.imap, (0, _tast.Val$$get_Stamp)(v$$11));
}

function ValMap$00601$$Add(m$$14, v$$12, x$$3) {
  return ValMap$00601$$$$002Ector$$Z77789F8C((0, _Map.FSharpMap$$Add$$5BDDA1)(m$$14.imap, (0, _tast.Val$$get_Stamp)(v$$12), x$$3));
}

function ValMap$00601$$Remove$$7D0CFEA5(m$$15, v$$13) {
  return ValMap$00601$$$$002Ector$$Z77789F8C((0, _Map.FSharpMap$$Remove$$2B595)(m$$15.imap, (0, _tast.Val$$get_Stamp)(v$$13)));
}

function ValMap$00601$$$get_Empty() {
  return ValMap$00601$$$$002Ector$$Z77789F8C((0, _Map.empty)({
    Compare: _Long.compare
  }));
}

function ValMap$00601$$get_IsEmpty(m$$16) {
  return (0, _Map.FSharpMap$$get_IsEmpty)(m$$16.imap);
}

function ValMap$00601$$$OfList$$Z2CE9D52B(vs$$1) {
  return (0, _List.foldBack)(function folder$$1(tupledArg$$1, acc$$1) {
    return ValMap$00601$$Add(acc$$1, tupledArg$$1[0], tupledArg$$1[1]);
  }, vs$$1, ValMap$00601$$$get_Empty());
}

const emptyTyconRefRemap = TyconRefMap$00601$$$get_Empty();
exports.emptyTyconRefRemap = emptyTyconRefRemap;
const emptyTyparInst = (0, _Types.L)();
exports.emptyTyparInst = emptyTyparInst;
const Remap = (0, _Types.declare)(function Remap(arg1, arg2, arg3, arg4) {
  this.tpinst = arg1;
  this.valRemap = arg2;
  this.tyconRefRemap = arg3;
  this.removeTraitSolutions = arg4;
}, _Types.Record);
exports.Remap = Remap;
const emptyRemap = new Remap(emptyTyparInst, ValMap$00601$$$get_Empty(), emptyTyconRefRemap, false);
exports.emptyRemap = emptyRemap;

function Remap$$$get_Empty() {
  return emptyRemap;
}

function addTyconRefRemap(tcref1, tcref2, tmenv) {
  return new Remap(tmenv.tpinst, tmenv.valRemap, TyconRefMap$00601$$Add(tmenv.tyconRefRemap, tcref1, tcref2), tmenv.removeTraitSolutions);
}

function isRemapEmpty(remap) {
  if (remap.tpinst.tail == null ? TyconRefMap$00601$$get_IsEmpty(remap.tyconRefRemap) : false) {
    return ValMap$00601$$get_IsEmpty(remap.valRemap);
  } else {
    return false;
  }
}

function instTyparRef(tpinst, ty, tp) {
  instTyparRef: while (true) {
    if (tpinst.tail != null) {
      const ty$0027 = tpinst.head[1];
      const tp$0027 = tpinst.head[0];
      const t = tpinst.tail;

      if ((0, _tast.typarEq)(tp, tp$0027)) {
        return ty$0027;
      } else {
        tpinst = t;
        ty = ty;
        tp = tp;
        continue instTyparRef;
      }
    } else {
      return ty;
    }
  }
}

function instMeasureTyparRef(tpinst$$1, unt, tp$$1) {
  if ((0, _tast.Typar$$get_Kind)(tp$$1).tag === 1) {
    const loop = function loop(tpinst$$2) {
      loop: while (true) {
        if (tpinst$$2.tail != null) {
          const ty$0027$$1 = tpinst$$2.head[1];
          const tp$0027$$1 = tpinst$$2.head[0];
          const t$$1 = tpinst$$2.tail;

          if ((0, _tast.typarEq)(tp$$1, tp$0027$$1)) {
            if (ty$0027$$1.tag === 6) {
              const unt$$1 = ty$0027$$1.fields[0];
              return unt$$1;
            } else {
              throw new Error("instMeasureTyparRef incorrect kind");
            }
          } else {
            tpinst$$2 = t$$1;
            continue loop;
          }
        } else {
          return unt;
        }
      }
    };

    return loop(tpinst$$1);
  } else {
    throw new Error("instMeasureTyparRef: kind=Type");
  }
}

function remapTyconRef(tcmap, tcr) {
  const matchValue$$1 = TyconRefMap$00601$$TryFind$$Z788D4AAC(tcmap, tcr);

  if (matchValue$$1 == null) {
    return tcr;
  } else {
    const tcr$$1 = matchValue$$1;
    return tcr$$1;
  }
}

function remapUnionCaseRef(tcmap$$1, _arg1) {
  const tcref = _arg1.fields[0];
  const nm = _arg1.fields[1];
  return new _tast.UnionCaseRef(0, "UCRef", remapTyconRef(tcmap$$1, tcref), nm);
}

function remapRecdFieldRef(tcmap$$2, _arg1$$1) {
  const tcref$$1 = _arg1$$1.fields[0];
  const nm$$1 = _arg1$$1.fields[1];
  return new _tast.RecdFieldRef(0, "RFRef", remapTyconRef(tcmap$$2, tcref$$1), nm$$1);
}

function mkTyparInst(typars, tyargs) {
  return (0, _List.zip)(typars, tyargs);
}

function generalizeTypar(tp$$2) {
  return (0, _tast.mkTyparTy)(tp$$2);
}

function generalizeTypars(tps) {
  return (0, _List.map)(generalizeTypar, tps);
}

function remapTypeAux(tyenv, ty$$1) {
  const ty$$2 = (0, _tast.stripTyparEqns)(ty$$1);

  switch (ty$$2.tag) {
    case 1:
      {
        const ty$$4 = ty$$2;
        const tinst = ty$$2.fields[1];
        const tcr$$2 = ty$$2.fields[0];
        const matchValue$$2 = TyconRefMap$00601$$TryFind$$Z788D4AAC(tyenv.tyconRefRemap, tcr$$2);

        if (matchValue$$2 == null) {
          if (tinst.tail == null) {
            return ty$$4;
          } else {
            const tinst$0027 = remapTypesAux(tyenv, tinst);

            if (tinst === tinst$0027) {
              return ty$$4;
            } else {
              return new _tast.TType(1, "TType_app", tcr$$2, tinst$0027);
            }
          }
        } else {
          const tcr$0027 = matchValue$$2;
          return new _tast.TType(1, "TType_app", tcr$0027, remapTypesAux(tyenv, tinst));
        }
      }

    case 4:
      {
        const tinst$$1 = ty$$2.fields[1];
        const tcr$$3 = ty$$2.fields[0].fields[0];
        const n = ty$$2.fields[0].fields[1];
        const matchValue$$3 = TyconRefMap$00601$$TryFind$$Z788D4AAC(tyenv.tyconRefRemap, tcr$$3);

        if (matchValue$$3 == null) {
          return new _tast.TType(4, "TType_ucase", new _tast.UnionCaseRef(0, "UCRef", tcr$$3, n), remapTypesAux(tyenv, tinst$$1));
        } else {
          const tcr$0027$$1 = matchValue$$3;
          return new _tast.TType(4, "TType_ucase", new _tast.UnionCaseRef(0, "UCRef", tcr$0027$$1, n), remapTypesAux(tyenv, tinst$$1));
        }
      }

    case 2:
      {
        const ty$$5 = ty$$2;
        const tupInfo = ty$$2.fields[0];
        const l$$1 = ty$$2.fields[1];
        const tupInfo$0027 = remapTupInfoAux(tyenv, tupInfo);
        const l$0027 = remapTypesAux(tyenv, l$$1);

        if (tupInfo === tupInfo$0027 ? l$$1 === l$0027 : false) {
          return ty$$5;
        } else {
          return new _tast.TType(2, "TType_tuple", tupInfo$0027, l$0027);
        }
      }

    case 3:
      {
        const ty$$6 = ty$$2;
        const r = ty$$2.fields[1];
        const d = ty$$2.fields[0];
        const d$0027 = remapTypeAux(tyenv, d);
        const r$0027 = remapTypeAux(tyenv, r);

        if (d === d$0027 ? r === r$0027 : false) {
          return ty$$6;
        } else {
          return new _tast.TType(3, "TType_fun", d$0027, r$0027);
        }
      }

    case 0:
      {
        const ty$$7 = ty$$2.fields[1];
        const tps$$1 = ty$$2.fields[0];
        const patternInput = copyAndRemapAndBindTypars(tyenv, tps$$1);
        return new _tast.TType(0, "TType_forall", patternInput[0], remapTypeAux(patternInput[1], ty$$7));
      }

    case 6:
      {
        const unt$$2 = ty$$2.fields[0];
        return new _tast.TType(6, "TType_measure", remapMeasureAux(tyenv, unt$$2));
      }

    default:
      {
        const ty$$3 = ty$$2;
        const tp$$4 = ty$$2.fields[0];
        return instTyparRef(tyenv.tpinst, ty$$3, tp$$4);
      }
  }
}

function remapMeasureAux(tyenv$$2, unt$$3) {
  remapMeasureAux: while (true) {
    switch (unt$$3.tag) {
      case 1:
        {
          const tcr$$4 = unt$$3.fields[0];
          const matchValue$$4 = TyconRefMap$00601$$TryFind$$Z788D4AAC(tyenv$$2.tyconRefRemap, tcr$$4);

          if (matchValue$$4 == null) {
            return unt$$3;
          } else {
            const tcr$$5 = matchValue$$4;
            return new _tast.Measure(1, "Con", tcr$$5);
          }
        }

      case 2:
        {
          const u2 = unt$$3.fields[1];
          const u1 = unt$$3.fields[0];
          return new _tast.Measure(2, "Prod", remapMeasureAux(tyenv$$2, u1), remapMeasureAux(tyenv$$2, u2));
        }

      case 5:
        {
          const u = unt$$3.fields[0];
          const q = unt$$3.fields[1];
          return new _tast.Measure(5, "RationalPower", remapMeasureAux(tyenv$$2, u), q);
        }

      case 3:
        {
          const u$$1 = unt$$3.fields[0];
          return new _tast.Measure(3, "Inv", remapMeasureAux(tyenv$$2, u$$1));
        }

      case 0:
        {
          const unt$$4 = unt$$3;
          const tp$$5 = unt$$3.fields[0];
          const matchValue$$5 = (0, _tast.Typar$$get_Solution)(tp$$5);

          if (matchValue$$5 != null) {
            if (matchValue$$5.tag === 6) {
              tyenv$$2 = tyenv$$2;
              unt$$3 = matchValue$$5.fields[0];
              continue remapMeasureAux;
            } else {
              const ty$$8 = matchValue$$5;
              return (0, _String.toFail)((0, _String.printf)("incorrect kinds: %A"))(ty$$8);
            }
          } else {
            const matchValue$$6 = (0, _lib.ListAssoc$$$tryFind)(_tast.typarEq, tp$$5, tyenv$$2.tpinst);

            if (matchValue$$6 == null) {
              return unt$$4;
            } else {
              const v$$14 = matchValue$$6;

              if (v$$14.tag === 6) {
                const unt$$5 = v$$14.fields[0];
                return unt$$5;
              } else {
                throw new Error("remapMeasureAux: incorrect kinds");
              }
            }
          }
        }

      default:
        {
          return unt$$3;
        }
    }
  }
}

function remapTupInfoAux(_tyenv, unt$$7) {
  return unt$$7;
}

function remapTypesAux(tyenv$$3, types) {
  return (0, _illib.List$$$mapq)(function (ty$$9) {
    return remapTypeAux(tyenv$$3, ty$$9);
  }, types);
}

function remapTyparConstraintsAux(tyenv$$4, cs) {
  return (0, _List.choose)(function chooser(x$$10) {
    var $target$$66;

    switch (x$$10.tag) {
      case 3:
        $target$$66 = 1;
        break;

      case 1:
        $target$$66 = 2;
        break;

      case 8:
        $target$$66 = 3;
        break;

      case 11:
        $target$$66 = 4;
        break;

      case 6:
        $target$$66 = 5;
        break;

      case 9:
      case 10:
      case 2:
      case 12:
      case 4:
      case 5:
      case 7:
        $target$$66 = 6;
        break;

      default:
        $target$$66 = 0;
    }

    switch ($target$$66) {
      case 0:
        {
          const ty$$10 = x$$10.fields[0];
          const m$$17 = x$$10.fields[1];
          return new _tast.TyparConstraint(0, "CoercesTo", remapTypeAux(tyenv$$4, ty$$10), m$$17);
        }

      case 1:
        {
          const traitInfo = x$$10.fields[0];
          const m$$18 = x$$10.fields[1];
          return new _tast.TyparConstraint(3, "MayResolveMember", remapTraitAux(tyenv$$4, traitInfo), m$$18);
        }

      case 2:
        {
          const ty$$11 = x$$10.fields[1];
          const priority = x$$10.fields[0] | 0;
          const m$$19 = x$$10.fields[2];
          return new _tast.TyparConstraint(1, "DefaultsTo", priority, remapTypeAux(tyenv$$4, ty$$11), m$$19);
        }

      case 3:
        {
          const uty = x$$10.fields[0];
          const m$$20 = x$$10.fields[1];
          return new _tast.TyparConstraint(8, "IsEnum", remapTypeAux(tyenv$$4, uty), m$$20);
        }

      case 4:
        {
          const uty2 = x$$10.fields[1];
          const uty1 = x$$10.fields[0];
          const m$$21 = x$$10.fields[2];
          return new _tast.TyparConstraint(11, "IsDelegate", remapTypeAux(tyenv$$4, uty1), remapTypeAux(tyenv$$4, uty2), m$$21);
        }

      case 5:
        {
          const tys = x$$10.fields[0];
          const m$$22 = x$$10.fields[1];
          return new _tast.TyparConstraint(6, "SimpleChoice", remapTypesAux(tyenv$$4, tys), m$$22);
        }

      case 6:
        {
          return x$$10;
        }
    }
  }, cs);
}

function remapTraitAux(tyenv$$5, _arg1$$2) {
  const tys$$1 = _arg1$$2.fields[0];
  const slnCell = _arg1$$2.fields[5];
  const rty = _arg1$$2.fields[4];
  const nm$$2 = _arg1$$2.fields[1];
  const mf = _arg1$$2.fields[2];
  const argtys = _arg1$$2.fields[3];
  let slnCell$$1;
  const matchValue$$7 = slnCell.contents;

  if (matchValue$$7 == null) {
    slnCell$$1 = null;
  } else if (tyenv$$5.removeTraitSolutions) {
    slnCell$$1 = null;
  } else {
    if (matchValue$$7 != null) {
      const sln = matchValue$$7;
      let sln$$1;

      switch (sln.tag) {
        case 0:
          {
            const vref = sln.fields[1];
            const ty$$13 = sln.fields[0];
            const minst$$1 = sln.fields[2];
            sln$$1 = new _tast.TraitConstraintSln(0, "FSMethSln", remapTypeAux(tyenv$$5, ty$$13), remapValRef(tyenv$$5, vref), remapTypesAux(tyenv$$5, minst$$1));
            break;
          }

        case 1:
          {
            const tinst$$2 = sln.fields[0];
            const rfref = sln.fields[1];
            const isSet = sln.fields[2];
            sln$$1 = new _tast.TraitConstraintSln(1, "FSRecdFieldSln", remapTypesAux(tyenv$$5, tinst$$2), remapRecdFieldRef(tyenv$$5.tyconRefRemap, rfref), isSet);
            break;
          }

        case 4:
          {
            sln$$1 = new _tast.TraitConstraintSln(4, "BuiltInSln");
            break;
          }

        case 3:
          {
            const e = sln.fields[0];
            sln$$1 = new _tast.TraitConstraintSln(3, "ClosedExprSln", e);
            break;
          }

        default:
          {
            const ty$$12 = sln.fields[0];
            const minst = sln.fields[3];
            const ilMethRef = sln.fields[2];
            const extOpt = sln.fields[1];
            sln$$1 = new _tast.TraitConstraintSln(2, "ILMethSln", remapTypeAux(tyenv$$5, ty$$12), extOpt, ilMethRef, remapTypesAux(tyenv$$5, minst));
          }
      }

      slnCell$$1 = sln$$1;
    } else {
      throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/TastOps.fs", 258, 14);
    }
  }

  return new _tast.TraitConstraintInfo(0, "TTrait", remapTypesAux(tyenv$$5, tys$$1), nm$$2, mf, remapTypesAux(tyenv$$5, argtys), (0, _Option.defaultArg)(rty, null, function (ty$$14) {
    return remapTypeAux(tyenv$$5, ty$$14);
  }), new _Types.FSharpRef(slnCell$$1));
}

function bindTypars(tps$$2, tyargs$$1, tpinst$$3) {
  if (tps$$2.tail == null) {
    return tpinst$$3;
  } else {
    return (0, _List.append)((0, _List.map2)(function (tp$$6, tyarg) {
      return [tp$$6, tyarg];
    }, tps$$2, tyargs$$1), tpinst$$3);
  }
}

function copyAndRemapAndBindTyparsFull(remapAttrib$$1, tyenv$$6, tps$$3) {
  if (tps$$3.tail == null) {
    return [tps$$3, tyenv$$6];
  } else {
    const tps$0027$$1 = (0, _tast.copyTypars)(tps$$3);
    const tyenv$$7 = new Remap(bindTypars(tps$$3, generalizeTypars(tps$0027$$1), tyenv$$6.tpinst), tyenv$$6.valRemap, tyenv$$6.tyconRefRemap, tyenv$$6.removeTraitSolutions);
    (0, _List.iterate2)(function action(tporig, tp$$7) {
      (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp$$7, remapTyparConstraintsAux(tyenv$$7, (0, _tast.Typar$$get_Constraints)(tporig)));
      (0, _tast.Typar$$SetAttribs$$A32CD4C)(tp$$7, remapAttrib$$1((0, _tast.Typar$$get_Attribs)(tporig)));
    }, tps$$3, tps$0027$$1);
    return [tps$0027$$1, tyenv$$7];
  }
}

function copyAndRemapAndBindTypars(tyenv$$8, tps$$4) {
  return copyAndRemapAndBindTyparsFull(function (_arg1$$3) {
    return (0, _Types.L)();
  }, tyenv$$8, tps$$4);
}

function remapValLinkage(tyenv$$9, vlink) {
  const tyOpt = (0, _tast.ValLinkageFullKey$$get_TypeForLinkage)(vlink);
  let tyOpt$0027;

  if (tyOpt != null) {
    const ty$$15 = tyOpt;
    const ty$0027$$2 = remapTypeAux(tyenv$$9, ty$$15);
    tyOpt$0027 = ty$$15 === ty$0027$$2 ? tyOpt : ty$0027$$2;
  } else {
    tyOpt$0027 = tyOpt;
  }

  if (tyOpt === tyOpt$0027) {
    return vlink;
  } else {
    return (0, _tast.ValLinkageFullKey$$$$002Ector$$72991465)((0, _tast.ValLinkageFullKey$$get_PartialKey)(vlink), tyOpt$0027);
  }
}

function remapNonLocalValRef(tyenv$$10, nlvref) {
  const eref = nlvref.EnclosingEntity;
  const eref$0027 = remapTyconRef(tyenv$$10.tyconRefRemap, eref);
  const vlink$$1 = nlvref.ItemKey;
  const vlink$0027 = remapValLinkage(tyenv$$10, vlink$$1);

  if (eref === eref$0027 ? vlink$$1 === vlink$0027 : false) {
    return nlvref;
  } else {
    return new _tast.NonLocalValOrMemberRef(eref$0027, vlink$0027);
  }
}

function remapValRef(tmenv$$1, vref$$1) {
  const matchValue$$8 = ValMap$00601$$TryFind$$7D0CFEA5(tmenv$$1.valRemap, (0, _tast.ValRef$$get_Deref)(vref$$1));

  if (matchValue$$8 != null) {
    const res = matchValue$$8;
    return res;
  } else {
    if ((0, _tast.ValRef$$get_IsLocalRef)(vref$$1)) {
      return vref$$1;
    } else {
      const nlvref$$1 = vref$$1.nlr;
      const nlvref$0027 = remapNonLocalValRef(tmenv$$1, nlvref$$1);

      if (nlvref$$1 === nlvref$0027) {
        return vref$$1;
      } else {
        return (0, _tast.VRefNonLocal)(nlvref$0027);
      }
    }
  }
}

function remapType(tyenv$$11, x$$16) {
  if (isRemapEmpty(tyenv$$11)) {
    return x$$16;
  } else {
    return remapTypeAux(tyenv$$11, x$$16);
  }
}

function remapTypes(tyenv$$12, x$$17) {
  if (isRemapEmpty(tyenv$$12)) {
    return x$$17;
  } else {
    return remapTypesAux(tyenv$$12, x$$17);
  }
}

function remapTypeFull(remapAttrib$$2, tyenv$$13, ty$$16) {
  if (isRemapEmpty(tyenv$$13)) {
    return ty$$16;
  } else {
    const matchValue$$9 = (0, _tast.stripTyparEqns)(ty$$16);

    if (matchValue$$9.tag === 0) {
      const tps$$5 = matchValue$$9.fields[0];
      const tau = matchValue$$9.fields[1];
      const patternInput$$1 = copyAndRemapAndBindTyparsFull(remapAttrib$$2, tyenv$$13, tps$$5);
      return new _tast.TType(0, "TType_forall", patternInput$$1[0], remapType(patternInput$$1[1], tau));
    } else {
      return remapType(tyenv$$13, ty$$16);
    }
  }
}

function remapParam(tyenv$$14, _arg1$$4) {
  const x$$18 = _arg1$$4;
  const ty$$17 = x$$18.fields[1];
  const nm$$3 = x$$18.fields[0];
  const fl3 = x$$18.fields[4];
  const fl2 = x$$18.fields[3];
  const fl1 = x$$18.fields[2];
  const attribs = x$$18.fields[5];

  if (isRemapEmpty(tyenv$$14)) {
    return x$$18;
  } else {
    return new _tast.SlotParam(0, "TSlotParam", nm$$3, remapTypeAux(tyenv$$14, ty$$17), fl1, fl2, fl3, attribs);
  }
}

function remapSlotSig(remapAttrib$$3, tyenv$$15, _arg1$$5) {
  const x$$19 = _arg1$$5;
  const ty$$18 = x$$19.fields[1];
  const rty$$1 = x$$19.fields[5];
  const paraml = x$$19.fields[4];
  const nm$$4 = x$$19.fields[0];
  const methTypars = x$$19.fields[3];
  const ctps = x$$19.fields[2];

  if (isRemapEmpty(tyenv$$15)) {
    return x$$19;
  } else {
    const ty$0027$$3 = remapTypeAux(tyenv$$15, ty$$18);
    const patternInput$$2 = copyAndRemapAndBindTyparsFull(remapAttrib$$3, tyenv$$15, ctps);
    const patternInput$$3 = copyAndRemapAndBindTyparsFull(remapAttrib$$3, patternInput$$2[1], methTypars);
    return new _tast.SlotSig(0, "TSlotSig", nm$$4, ty$0027$$3, patternInput$$2[0], patternInput$$3[0], (0, _illib.List$$$mapSquared)(function (arg10$0040) {
      return remapParam(patternInput$$3[1], arg10$0040);
    }, paraml), (0, _Option.defaultArg)(rty$$1, null, function (ty$$19) {
      return remapTypeAux(patternInput$$3[1], ty$$19);
    }));
  }
}

function mkInstRemap(tpinst$$4) {
  return new Remap(tpinst$$4, ValMap$00601$$$get_Empty(), emptyTyconRefRemap, false);
}

function instType(tpinst$$5, x$$20) {
  if (tpinst$$5.tail == null) {
    return x$$20;
  } else {
    return remapTypeAux(mkInstRemap(tpinst$$5), x$$20);
  }
}

function instTypes(tpinst$$6, x$$21) {
  if (tpinst$$6.tail == null) {
    return x$$21;
  } else {
    return remapTypesAux(mkInstRemap(tpinst$$6), x$$21);
  }
}

function instTrait(tpinst$$7, x$$22) {
  if (tpinst$$7.tail == null) {
    return x$$22;
  } else {
    return remapTraitAux(mkInstRemap(tpinst$$7), x$$22);
  }
}

function instTyparConstraints(tpinst$$8, x$$23) {
  if (tpinst$$8.tail == null) {
    return x$$23;
  } else {
    return remapTyparConstraintsAux(mkInstRemap(tpinst$$8), x$$23);
  }
}

function instSlotSig(tpinst$$9, ss) {
  return remapSlotSig(function (_arg1$$6) {
    return (0, _Types.L)();
  }, mkInstRemap(tpinst$$9), ss);
}

function copySlotSig(ss$$1) {
  return remapSlotSig(function (_arg1$$7) {
    return (0, _Types.L)();
  }, Remap$$$get_Empty(), ss$$1);
}

function mkTyparToTyparRenaming(tpsOrig, tps$$6) {
  const tinst$$3 = generalizeTypars(tps$$6);
  return [mkTyparInst(tpsOrig, tinst$$3), tinst$$3];
}

function mkTyconInst(tycon, tinst$$4) {
  return mkTyparInst((0, _tast.Entity$$get_TyparsNoRange)(tycon), tinst$$4);
}

function mkTyconRefInst(tcref$$2, tinst$$5) {
  return mkTyconInst((0, _tast.EntityRef$$get_Deref)(tcref$$2), tinst$$5);
}

function tyconRefEq(g, tcref1$$1, tcref2$$1) {
  return (0, _tast.primEntityRefEq)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g), (0, _TcGlobals.TcGlobals$$get_fslibCcu)(g), tcref1$$1, tcref2$$1);
}

function valRefEq(g$$1, vref1, vref2) {
  return (0, _tast.primValRefEq)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$1), (0, _TcGlobals.TcGlobals$$get_fslibCcu)(g$$1), vref1, vref2);
}

function reduceTyconRefAbbrevMeasureable(tcref$$3) {
  const abbrev = (0, _tast.EntityRef$$get_TypeAbbrev)(tcref$$3);
  var $target$$76, ms;

  if (abbrev != null) {
    if (abbrev.tag === 6) {
      $target$$76 = 0;
      ms = abbrev.fields[0];
    } else {
      $target$$76 = 1;
    }
  } else {
    $target$$76 = 1;
  }

  switch ($target$$76) {
    case 0:
      {
        return ms;
      }

    case 1:
      {
        throw new Error("not a measure abbreviation, or incorrect kind" + "\\nParameter name: " + "tcref");
      }
  }
}

function stripUnitEqnsFromMeasureAux(canShortcut, unt$$8) {
  var tcref$$4;

  stripUnitEqnsFromMeasureAux: while (true) {
    const matchValue$$10 = (0, _tast.stripUnitEqnsAux)(canShortcut, unt$$8);
    var $target$$77, tcref$$5;

    if (matchValue$$10.tag === 1) {
      if (tcref$$4 = matchValue$$10.fields[0], (0, _tast.EntityRef$$get_IsTypeAbbrev)(tcref$$4)) {
        $target$$77 = 0;
        tcref$$5 = matchValue$$10.fields[0];
      } else {
        $target$$77 = 1;
      }
    } else {
      $target$$77 = 1;
    }

    switch ($target$$77) {
      case 0:
        {
          canShortcut = canShortcut;
          unt$$8 = reduceTyconRefAbbrevMeasureable(tcref$$5);
          continue stripUnitEqnsFromMeasureAux;
        }

      case 1:
        {
          const m$$23 = matchValue$$10;
          return m$$23;
        }
    }
  }
}

function stripUnitEqnsFromMeasure(m$$24) {
  return stripUnitEqnsFromMeasureAux(false, m$$24);
}

function MeasureExprConExponent(g$$2, abbrev$$1, ucref, unt$$9) {
  const matchValue$$11 = abbrev$$1 ? stripUnitEqnsFromMeasure(unt$$9) : (0, _tast.stripUnitEqns)(unt$$9);

  switch (matchValue$$11.tag) {
    case 1:
      {
        const ucref$0027 = matchValue$$11.fields[0];

        if (tyconRefEq(g$$2, ucref$0027, ucref)) {
          return _rational.OneRational;
        } else {
          return _rational.ZeroRational;
        }
      }

    case 3:
      {
        const unt$0027 = matchValue$$11.fields[0];
        return (0, _rational.NegRational)(MeasureExprConExponent(g$$2, abbrev$$1, ucref, unt$0027));
      }

    case 2:
      {
        const unt2 = matchValue$$11.fields[1];
        const unt1 = matchValue$$11.fields[0];
        return (0, _rational.AddRational)(MeasureExprConExponent(g$$2, abbrev$$1, ucref, unt1), MeasureExprConExponent(g$$2, abbrev$$1, ucref, unt2));
      }

    case 5:
      {
        const unt$0027$$1 = matchValue$$11.fields[0];
        const q$$1 = matchValue$$11.fields[1];
        return (0, _rational.MulRational)(MeasureExprConExponent(g$$2, abbrev$$1, ucref, unt$0027$$1), q$$1);
      }

    default:
      {
        return _rational.ZeroRational;
      }
  }
}

function MeasureConExponentAfterRemapping(g$$3, r$$1, ucref$$1, unt$$10) {
  const matchValue$$12 = stripUnitEqnsFromMeasure(unt$$10);

  switch (matchValue$$12.tag) {
    case 1:
      {
        const ucref$0027$$1 = matchValue$$12.fields[0];

        if (tyconRefEq(g$$3, r$$1(ucref$0027$$1), ucref$$1)) {
          return _rational.OneRational;
        } else {
          return _rational.ZeroRational;
        }
      }

    case 3:
      {
        const unt$0027$$2 = matchValue$$12.fields[0];
        return (0, _rational.NegRational)(MeasureConExponentAfterRemapping(g$$3, r$$1, ucref$$1, unt$0027$$2));
      }

    case 2:
      {
        const unt2$$1 = matchValue$$12.fields[1];
        const unt1$$1 = matchValue$$12.fields[0];
        return (0, _rational.AddRational)(MeasureConExponentAfterRemapping(g$$3, r$$1, ucref$$1, unt1$$1), MeasureConExponentAfterRemapping(g$$3, r$$1, ucref$$1, unt2$$1));
      }

    case 5:
      {
        const unt$0027$$3 = matchValue$$12.fields[0];
        const q$$2 = matchValue$$12.fields[1];
        return (0, _rational.MulRational)(MeasureConExponentAfterRemapping(g$$3, r$$1, ucref$$1, unt$0027$$3), q$$2);
      }

    default:
      {
        return _rational.ZeroRational;
      }
  }
}

function MeasureVarExponent(tp$$8, unt$$11) {
  const matchValue$$13 = stripUnitEqnsFromMeasure(unt$$11);

  switch (matchValue$$13.tag) {
    case 0:
      {
        const tp$0027$$2 = matchValue$$13.fields[0];

        if ((0, _tast.typarEq)(tp$$8, tp$0027$$2)) {
          return _rational.OneRational;
        } else {
          return _rational.ZeroRational;
        }
      }

    case 3:
      {
        const unt$0027$$4 = matchValue$$13.fields[0];
        return (0, _rational.NegRational)(MeasureVarExponent(tp$$8, unt$0027$$4));
      }

    case 2:
      {
        const unt2$$2 = matchValue$$13.fields[1];
        const unt1$$2 = matchValue$$13.fields[0];
        return (0, _rational.AddRational)(MeasureVarExponent(tp$$8, unt1$$2), MeasureVarExponent(tp$$8, unt2$$2));
      }

    case 5:
      {
        const unt$0027$$5 = matchValue$$13.fields[0];
        const q$$3 = matchValue$$13.fields[1];
        return (0, _rational.MulRational)(MeasureVarExponent(tp$$8, unt$0027$$5), q$$3);
      }

    default:
      {
        return _rational.ZeroRational;
      }
  }
}

function ListMeasureVarOccs(unt$$12) {
  const gather = function gather(acc$$2, unt$$13) {
    gather: while (true) {
      const matchValue$$14 = stripUnitEqnsFromMeasure(unt$$13);

      switch (matchValue$$14.tag) {
        case 0:
          {
            const tp$$9 = matchValue$$14.fields[0];

            if ((0, _List.exists)(function (lv2$$1) {
              return (0, _tast.typarEq)(tp$$9, lv2$$1);
            }, acc$$2)) {
              return acc$$2;
            } else {
              return (0, _Types.L)(tp$$9, acc$$2);
            }
          }

        case 2:
          {
            const unt2$$3 = matchValue$$14.fields[1];
            const unt1$$3 = matchValue$$14.fields[0];
            acc$$2 = gather(acc$$2, unt1$$3);
            unt$$13 = unt2$$3;
            continue gather;
          }

        case 5:
          {
            const unt$0027$$6 = matchValue$$14.fields[0];
            acc$$2 = acc$$2;
            unt$$13 = unt$0027$$6;
            continue gather;
          }

        case 3:
          {
            const unt$0027$$7 = matchValue$$14.fields[0];
            acc$$2 = acc$$2;
            unt$$13 = unt$0027$$7;
            continue gather;
          }

        default:
          {
            return acc$$2;
          }
      }
    }
  };

  return gather((0, _Types.L)(), unt$$12);
}

function ListMeasureVarOccsWithNonZeroExponents(untexpr) {
  const gather$$1 = function gather$$1(acc$$3, unt$$14) {
    gather$$1: while (true) {
      const matchValue$$15 = stripUnitEqnsFromMeasure(unt$$14);

      switch (matchValue$$15.tag) {
        case 0:
          {
            const tp$$10 = matchValue$$15.fields[0];

            if ((0, _List.exists)(function (tupledArg$$2) {
              return (0, _tast.typarEq)(tp$$10, tupledArg$$2[0]);
            }, acc$$3)) {
              return acc$$3;
            } else {
              const e$$1 = MeasureVarExponent(tp$$10, untexpr);

              if ((0, _Util.equals)(e$$1, _rational.ZeroRational)) {
                return acc$$3;
              } else {
                return (0, _Types.L)([tp$$10, e$$1], acc$$3);
              }
            }
          }

        case 2:
          {
            const unt2$$4 = matchValue$$15.fields[1];
            const unt1$$4 = matchValue$$15.fields[0];
            acc$$3 = gather$$1(acc$$3, unt1$$4);
            unt$$14 = unt2$$4;
            continue gather$$1;
          }

        case 3:
          {
            const unt$0027$$8 = matchValue$$15.fields[0];
            acc$$3 = acc$$3;
            unt$$14 = unt$0027$$8;
            continue gather$$1;
          }

        case 5:
          {
            const unt$0027$$9 = matchValue$$15.fields[0];
            acc$$3 = acc$$3;
            unt$$14 = unt$0027$$9;
            continue gather$$1;
          }

        default:
          {
            return acc$$3;
          }
      }
    }
  };

  return gather$$1((0, _Types.L)(), untexpr);
}

function ListMeasureConOccsWithNonZeroExponents(g$$4, eraseAbbrevs, untexpr$$1) {
  const gather$$2 = function gather$$2(acc$$4, unt$$15) {
    gather$$2: while (true) {
      const matchValue$$16 = eraseAbbrevs ? stripUnitEqnsFromMeasure(unt$$15) : (0, _tast.stripUnitEqns)(unt$$15);

      switch (matchValue$$16.tag) {
        case 1:
          {
            const c = matchValue$$16.fields[0];

            if ((0, _List.exists)(function (tupledArg$$3) {
              return tyconRefEq(g$$4, c, tupledArg$$3[0]);
            }, acc$$4)) {
              return acc$$4;
            } else {
              const e$$2 = MeasureExprConExponent(g$$4, eraseAbbrevs, c, untexpr$$1);

              if ((0, _Util.equals)(e$$2, _rational.ZeroRational)) {
                return acc$$4;
              } else {
                return (0, _Types.L)([c, e$$2], acc$$4);
              }
            }
          }

        case 2:
          {
            const unt2$$5 = matchValue$$16.fields[1];
            const unt1$$5 = matchValue$$16.fields[0];
            acc$$4 = gather$$2(acc$$4, unt1$$5);
            unt$$15 = unt2$$5;
            continue gather$$2;
          }

        case 3:
          {
            const unt$0027$$10 = matchValue$$16.fields[0];
            acc$$4 = acc$$4;
            unt$$15 = unt$0027$$10;
            continue gather$$2;
          }

        case 5:
          {
            const unt$0027$$11 = matchValue$$16.fields[0];
            acc$$4 = acc$$4;
            unt$$15 = unt$0027$$11;
            continue gather$$2;
          }

        default:
          {
            return acc$$4;
          }
      }
    }
  };

  return gather$$2((0, _Types.L)(), untexpr$$1);
}

function ListMeasureConOccsAfterRemapping(g$$5, r$$2, unt$$16) {
  const gather$$3 = function gather$$3(acc$$5, unt$$17) {
    gather$$3: while (true) {
      const matchValue$$17 = stripUnitEqnsFromMeasure(unt$$17);

      switch (matchValue$$17.tag) {
        case 1:
          {
            const c$$1 = matchValue$$17.fields[0];

            if ((0, _List.exists)(function (arg20$0040) {
              return tyconRefEq(g$$5, r$$2(c$$1), arg20$0040);
            }, acc$$5)) {
              return acc$$5;
            } else {
              return (0, _Types.L)(r$$2(c$$1), acc$$5);
            }
          }

        case 2:
          {
            const unt2$$6 = matchValue$$17.fields[1];
            const unt1$$6 = matchValue$$17.fields[0];
            acc$$5 = gather$$3(acc$$5, unt1$$6);
            unt$$17 = unt2$$6;
            continue gather$$3;
          }

        case 5:
          {
            const unt$0027$$12 = matchValue$$17.fields[0];
            acc$$5 = acc$$5;
            unt$$17 = unt$0027$$12;
            continue gather$$3;
          }

        case 3:
          {
            const unt$0027$$13 = matchValue$$17.fields[0];
            acc$$5 = acc$$5;
            unt$$17 = unt$0027$$13;
            continue gather$$3;
          }

        default:
          {
            return acc$$5;
          }
      }
    }
  };

  return gather$$3((0, _Types.L)(), unt$$16);
}

function MeasurePower(u$$2, n$$1) {
  if (n$$1 === 1) {
    return u$$2;
  } else if (n$$1 === 0) {
    return new _tast.Measure(4, "One");
  } else {
    return new _tast.Measure(5, "RationalPower", u$$2, (0, _rational.intToRational)(n$$1));
  }
}

function MeasureProdOpt(m1, m2) {
  const matchValue$$18 = [m1, m2];

  if (matchValue$$18[0].tag === 4) {
    return m2;
  } else if (matchValue$$18[1].tag === 4) {
    return m1;
  } else {
    return new _tast.Measure(2, "Prod", m1, m2);
  }
}

function ProdMeasures(ms$$1) {
  if (ms$$1.tail != null) {
    const ms$$2 = ms$$1.tail;
    const m$$25 = ms$$1.head;
    return (0, _List.foldBack)(MeasureProdOpt, ms$$2, m$$25);
  } else {
    return new _tast.Measure(4, "One");
  }
}

function isDimensionless(g$$6, tyarg$$1) {
  const matchValue$$19 = (0, _tast.stripTyparEqns)(tyarg$$1);

  if (matchValue$$19.tag === 6) {
    const unt$$18 = matchValue$$19.fields[0];

    if (ListMeasureVarOccsWithNonZeroExponents(unt$$18).tail == null) {
      return ListMeasureConOccsWithNonZeroExponents(g$$6, true, unt$$18).tail == null;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function destUnitParMeasure(g$$7, unt$$19) {
  var v$$15, e$$3;
  const vs$$2 = ListMeasureVarOccsWithNonZeroExponents(unt$$19);
  const cs$$1 = ListMeasureConOccsWithNonZeroExponents(g$$7, true, unt$$19);
  const matchValue$$20 = [vs$$2, cs$$1];
  var $target$$85, e$$4, v$$16;

  if (matchValue$$20[0].tail != null) {
    if (matchValue$$20[0].tail.tail == null) {
      if (matchValue$$20[1].tail == null) {
        if (v$$15 = matchValue$$20[0].head[0], (e$$3 = matchValue$$20[0].head[1], (0, _Util.equals)(e$$3, _rational.OneRational))) {
          $target$$85 = 0;
          e$$4 = matchValue$$20[0].head[1];
          v$$16 = matchValue$$20[0].head[0];
        } else {
          $target$$85 = 1;
        }
      } else {
        $target$$85 = 1;
      }
    } else {
      $target$$85 = 1;
    }
  } else {
    $target$$85 = 1;
  }

  switch ($target$$85) {
    case 0:
      {
        return v$$16;
      }

    case 1:
      {
        throw new Error("destUnitParMeasure: not a unit-of-measure parameter");
      }
  }
}

function isUnitParMeasure(g$$8, unt$$20) {
  var e$$5;
  const vs$$3 = ListMeasureVarOccsWithNonZeroExponents(unt$$20);
  const cs$$2 = ListMeasureConOccsWithNonZeroExponents(g$$8, true, unt$$20);
  const matchValue$$21 = [vs$$3, cs$$2];
  var $target$$86, e$$6;

  if (matchValue$$21[0].tail != null) {
    if (matchValue$$21[0].tail.tail == null) {
      if (matchValue$$21[1].tail == null) {
        if (e$$5 = matchValue$$21[0].head[1], (0, _Util.equals)(e$$5, _rational.OneRational)) {
          $target$$86 = 0;
          e$$6 = matchValue$$21[0].head[1];
        } else {
          $target$$86 = 1;
        }
      } else {
        $target$$86 = 1;
      }
    } else {
      $target$$86 = 1;
    }
  } else {
    $target$$86 = 1;
  }

  switch ($target$$86) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function normalizeMeasure(g$$9, ms$$3) {
  var v$$17, e$$7;
  const vs$$4 = ListMeasureVarOccsWithNonZeroExponents(ms$$3);
  const cs$$3 = ListMeasureConOccsWithNonZeroExponents(g$$9, false, ms$$3);
  const matchValue$$22 = [vs$$4, cs$$3];
  var $target$$87, e$$8, v$$18;

  if (matchValue$$22[0].tail != null) {
    if (matchValue$$22[0].tail.tail == null) {
      if (matchValue$$22[1].tail == null) {
        if (v$$17 = matchValue$$22[0].head[0], (e$$7 = matchValue$$22[0].head[1], (0, _Util.equals)(e$$7, _rational.OneRational))) {
          $target$$87 = 1;
          e$$8 = matchValue$$22[0].head[1];
          v$$18 = matchValue$$22[0].head[0];
        } else {
          $target$$87 = 2;
        }
      } else {
        $target$$87 = 2;
      }
    } else {
      $target$$87 = 2;
    }
  } else if (matchValue$$22[1].tail == null) {
    $target$$87 = 0;
  } else {
    $target$$87 = 2;
  }

  switch ($target$$87) {
    case 0:
      {
        return new _tast.Measure(4, "One");
      }

    case 1:
      {
        return new _tast.Measure(0, "Var", v$$18);
      }

    case 2:
      {
        return (0, _List.foldBack)(function (tupledArg$$4, m$$26) {
          return new _tast.Measure(2, "Prod", new _tast.Measure(5, "RationalPower", new _tast.Measure(0, "Var", tupledArg$$4[0]), tupledArg$$4[1]), m$$26);
        }, matchValue$$22[0], (0, _List.foldBack)(function (tupledArg$$5, m$$27) {
          return new _tast.Measure(2, "Prod", new _tast.Measure(5, "RationalPower", new _tast.Measure(1, "Con", tupledArg$$5[0]), tupledArg$$5[1]), m$$27);
        }, matchValue$$22[1], new _tast.Measure(4, "One")));
      }
  }
}

function tryNormalizeMeasureInType(g$$10, ty$$20) {
  var $target$$88, v$$20;

  if (ty$$20.tag === 6) {
    if (ty$$20.fields[0].tag === 0) {
      $target$$88 = 0;
      v$$20 = ty$$20.fields[0].fields[0];
    } else {
      $target$$88 = 1;
    }
  } else {
    $target$$88 = 1;
  }

  switch ($target$$88) {
    case 0:
      {
        const matchValue$$23 = (0, _tast.Typar$$get_Solution)(v$$20);
        var $target$$89, ms$$4;

        if (matchValue$$23 != null) {
          if (matchValue$$23.tag === 6) {
            $target$$89 = 0;
            ms$$4 = matchValue$$23.fields[0];
          } else {
            $target$$89 = 1;
          }
        } else {
          $target$$89 = 1;
        }

        switch ($target$$89) {
          case 0:
            {
              v$$20.typar_solution = new _tast.TType(6, "TType_measure", normalizeMeasure(g$$10, ms$$4));
              return ty$$20;
            }

          case 1:
            {
              return ty$$20;
            }
        }
      }

    case 1:
      {
        return ty$$20;
      }
  }
}

function mkNativePtrTy(g$$11, ty$$21) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_nativeptr_tcr)(g$$11), (0, _Types.L)(ty$$21, (0, _Types.L)()));
}

function mkByrefTy(g$$12, ty$$22) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$12), (0, _Types.L)(ty$$22, (0, _Types.L)()));
}

function mkInByrefTy(g$$13, ty$$23) {
  if ((0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_inref_tcr)(g$$13))) {
    return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_inref_tcr)(g$$13), (0, _Types.L)(ty$$23, (0, _Types.L)()));
  } else {
    return mkByrefTy(g$$13, ty$$23);
  }
}

function mkOutByrefTy(g$$14, ty$$24) {
  if ((0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_outref_tcr)(g$$14))) {
    return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_outref_tcr)(g$$14), (0, _Types.L)(ty$$24, (0, _Types.L)()));
  } else {
    return mkByrefTy(g$$14, ty$$24);
  }
}

function mkByrefTyWithFlag(g$$15, readonly, ty$$25) {
  if (readonly) {
    return mkInByrefTy(g$$15, ty$$25);
  } else {
    return mkByrefTy(g$$15, ty$$25);
  }
}

function mkByref2Ty(g$$16, ty1, ty2) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$16), (0, _Types.L)(ty1, (0, _Types.L)(ty2, (0, _Types.L)())));
}

function mkVoidPtrTy(g$$17) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_voidptr_tcr)(g$$17), (0, _Types.L)());
}

function mkByrefTyWithInference(g$$18, ty1$$1, ty2$$1) {
  if ((0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$18))) {
    return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$18), (0, _Types.L)(ty1$$1, (0, _Types.L)(ty2$$1, (0, _Types.L)())));
  } else {
    return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$18), (0, _Types.L)(ty1$$1, (0, _Types.L)()));
  }
}

function mkArrayTy(g$$19, rank, ty$$26, m$$28) {
  if (rank < 1 ? true : rank > 32) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastopsMaxArrayThirtyTwo$$Z524259A4)(rank), m$$28));
    return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_il_arr_tcr_map)(g$$19)[3], (0, _Types.L)(ty$$26, (0, _Types.L)()));
  } else {
    return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_il_arr_tcr_map)(g$$19)[rank - 1], (0, _Types.L)(ty$$26, (0, _Types.L)()));
  }
}

const maxTuple = 8;
exports.maxTuple = maxTuple;
const goodTupleFields = maxTuple - 1;
exports.goodTupleFields = goodTupleFields;

function isCompiledTupleTyconRef(g$$20, tcref$$6) {
  if ((((((((((((((tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple1_tcr)(g$$20), tcref$$6) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple2_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple3_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple4_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple5_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple6_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple7_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_ref_tuple8_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple1_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple2_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple3_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple4_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple5_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple6_tcr)(g$$20), tcref$$6)) ? true : tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple7_tcr)(g$$20), tcref$$6)) {
    return true;
  } else {
    return tyconRefEq(g$$20, (0, _TcGlobals.TcGlobals$$get_struct_tuple8_tcr)(g$$20), tcref$$6);
  }
}

function mkCompiledTupleTyconRef(g$$21, isStruct, n$$2) {
  if (n$$2 === 1) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple1_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple1_tcr)(g$$21);
    }
  } else if (n$$2 === 2) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple2_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple2_tcr)(g$$21);
    }
  } else if (n$$2 === 3) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple3_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple3_tcr)(g$$21);
    }
  } else if (n$$2 === 4) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple4_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple4_tcr)(g$$21);
    }
  } else if (n$$2 === 5) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple5_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple5_tcr)(g$$21);
    }
  } else if (n$$2 === 6) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple6_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple6_tcr)(g$$21);
    }
  } else if (n$$2 === 7) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple7_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple7_tcr)(g$$21);
    }
  } else if (n$$2 === 8) {
    if (isStruct) {
      return (0, _TcGlobals.TcGlobals$$get_struct_tuple8_tcr)(g$$21);
    } else {
      return (0, _TcGlobals.TcGlobals$$get_ref_tuple8_tcr)(g$$21);
    }
  } else {
    return (0, _String.toFail)((0, _String.printf)("mkCompiledTupleTyconRef, n = %d"))(n$$2);
  }
}

function mkCompiledTupleTy(g$$22, isStruct$$1, tupElemTys) {
  const n$$3 = (0, _List.length)(tupElemTys) | 0;

  if (n$$3 < maxTuple) {
    return new _tast.TType(1, "TType_app", mkCompiledTupleTyconRef(g$$22, isStruct$$1, n$$3), tupElemTys);
  } else {
    const patternInput$$4 = (0, _illib.List$$$splitAfter)(goodTupleFields, tupElemTys);
    return new _tast.TType(1, "TType_app", isStruct$$1 ? (0, _TcGlobals.TcGlobals$$get_struct_tuple8_tcr)(g$$22) : (0, _TcGlobals.TcGlobals$$get_ref_tuple8_tcr)(g$$22), (0, _List.append)(patternInput$$4[0], (0, _Types.L)(mkCompiledTupleTy(g$$22, isStruct$$1, patternInput$$4[1]), (0, _Types.L)())));
  }
}

function mkOuterCompiledTupleTy(g$$23, isStruct$$2, tupElemTys$$1) {
  const n$$4 = (0, _List.length)(tupElemTys$$1) | 0;

  if (n$$4 < maxTuple) {
    return new _tast.TType(1, "TType_app", mkCompiledTupleTyconRef(g$$23, isStruct$$2, n$$4), tupElemTys$$1);
  } else {
    const patternInput$$5 = (0, _illib.List$$$splitAfter)(goodTupleFields, tupElemTys$$1);
    const tcref$$7 = isStruct$$2 ? (0, _TcGlobals.TcGlobals$$get_struct_tuple8_tcr)(g$$23) : (0, _TcGlobals.TcGlobals$$get_ref_tuple8_tcr)(g$$23);
    var $target$$90, tyB;

    if (patternInput$$5[1].tail != null) {
      if (patternInput$$5[1].tail.tail == null) {
        $target$$90 = 0;
        tyB = patternInput$$5[1].head;
      } else {
        $target$$90 = 1;
      }
    } else {
      $target$$90 = 1;
    }

    switch ($target$$90) {
      case 0:
        {
          const marker = new _tast.TType(1, "TType_app", mkCompiledTupleTyconRef(g$$23, isStruct$$2, 1), (0, _Types.L)(tyB, (0, _Types.L)()));
          return new _tast.TType(1, "TType_app", tcref$$7, (0, _List.append)(patternInput$$5[0], (0, _Types.L)(marker, (0, _Types.L)())));
        }

      case 1:
        {
          return new _tast.TType(1, "TType_app", tcref$$7, (0, _List.append)(patternInput$$5[0], (0, _Types.L)(new _tast.TType(2, "TType_tuple", new _tast.TupInfo(0, "Const", isStruct$$2), patternInput$$5[1]), (0, _Types.L)())));
        }
    }
  }
}

function applyTyconAbbrev(abbrevTy, tycon$$1, tyargs$$2) {
  if (tyargs$$2.tail == null) {
    return abbrevTy;
  } else {
    return instType(mkTyconInst(tycon$$1, tyargs$$2), abbrevTy);
  }
}

function reduceTyconAbbrev(tycon$$2, tyargs$$3) {
  const abbrev$$2 = (0, _tast.Entity$$get_TypeAbbrev)(tycon$$2);

  if (abbrev$$2 != null) {
    const abbrevTy$$1 = abbrev$$2;
    return applyTyconAbbrev(abbrevTy$$1, tycon$$2, tyargs$$3);
  } else {
    throw new Error("this type definition is not an abbreviation" + "\\nParameter name: " + "tycon");
  }
}

function reduceTyconRefAbbrev(tcref$$8, tyargs$$4) {
  return reduceTyconAbbrev((0, _tast.EntityRef$$get_Deref)(tcref$$8), tyargs$$4);
}

function reduceTyconMeasureableOrProvided(g$$24, tycon$$3, tyargs$$5) {
  g$$24;
  const repr = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$3);

  if (repr.tag === 5) {
    const ty$$27 = repr.fields[0];

    if (tyargs$$5.tail == null) {
      return ty$$27;
    } else {
      return instType(mkTyconInst(tycon$$3, tyargs$$5), ty$$27);
    }
  } else {
    throw new Error("this type definition is not a refinement" + "\\nParameter name: " + "tc");
  }
}

function reduceTyconRefMeasureableOrProvided(g$$25, tcref$$9, tyargs$$6) {
  return reduceTyconMeasureableOrProvided(g$$25, (0, _tast.EntityRef$$get_Deref)(tcref$$9), tyargs$$6);
}

function stripTyEqnsA(g$$26, canShortcut$$1, ty$$28) {
  stripTyEqnsA: while (true) {
    const ty$$29 = (0, _tast.stripTyparEqnsAux)(canShortcut$$1, ty$$28);

    if (ty$$29.tag === 1) {
      const tinst$$6 = ty$$29.fields[1];
      const tcref$$10 = ty$$29.fields[0];
      const tycon$$4 = (0, _tast.EntityRef$$get_Deref)(tcref$$10);
      const matchValue$$24 = (0, _tast.Entity$$get_TypeAbbrev)(tycon$$4);

      if (matchValue$$24 == null) {
        if ((tyconRefEq(g$$26, tcref$$10, (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$26)) ? (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$26)) : false) ? (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byrefkind_InOut_tcr)(g$$26)) : false) {
          return mkByref2Ty(g$$26, (0, _List.item)(0, tinst$$6), new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_byrefkind_InOut_tcr)(g$$26), (0, _Types.L)()));
        } else if ((0, _tast.Entity$$get_IsMeasureableReprTycon)(tycon$$4) ? (0, _List.forAll)(function (arg10$0040$$2) {
          return isDimensionless(g$$26, arg10$0040$$2);
        }, tinst$$6) : false) {
          const $var$$91 = g$$26;
          canShortcut$$1 = canShortcut$$1;
          ty$$28 = reduceTyconMeasureableOrProvided(g$$26, tycon$$4, tinst$$6);
          g$$26 = $var$$91;
          continue stripTyEqnsA;
        } else {
          return ty$$29;
        }
      } else {
        const abbrevTy$$2 = matchValue$$24;
        g$$26 = g$$26;
        canShortcut$$1 = canShortcut$$1;
        ty$$28 = applyTyconAbbrev(abbrevTy$$2, tycon$$4, tinst$$6);
        continue stripTyEqnsA;
      }
    } else {
      const ty$$30 = ty$$29;
      return ty$$30;
    }
  }
}

function stripTyEqns(g$$27, ty$$31) {
  return stripTyEqnsA(g$$27, false, ty$$31);
}

function evalTupInfoIsStruct(aexpr) {
  const b = aexpr.fields[0];
  return b;
}

function stripTyEqnsAndErase(eraseFuncAndTuple, g$$28, ty$$32) {
  var tupInfo$$1, l$$10, b$$1, a;

  stripTyEqnsAndErase: while (true) {
    const ty$$33 = stripTyEqns(g$$28, ty$$32);
    var $target$$92, args, tcref$$11, a$$1, b$$2;

    if (ty$$33.tag === 1) {
      $target$$92 = 0;
      args = ty$$33.fields[1];
      tcref$$11 = ty$$33.fields[0];
    } else if (ty$$33.tag === 3) {
      if (b$$1 = ty$$33.fields[1], (a = ty$$33.fields[0], eraseFuncAndTuple)) {
        $target$$92 = 1;
        a$$1 = ty$$33.fields[0];
        b$$2 = ty$$33.fields[1];
      } else {
        $target$$92 = 2;
      }
    } else {
      $target$$92 = 2;
    }

    switch ($target$$92) {
      case 0:
        {
          const tycon$$5 = (0, _tast.EntityRef$$get_Deref)(tcref$$11);

          if ((0, _tast.Entity$$get_IsErased)(tycon$$5)) {
            eraseFuncAndTuple = eraseFuncAndTuple;
            const $var$$93 = g$$28;
            ty$$32 = reduceTyconMeasureableOrProvided(g$$28, tycon$$5, args);
            g$$28 = $var$$93;
            continue stripTyEqnsAndErase;
          } else if (tyconRefEq(g$$28, tcref$$11, (0, _TcGlobals.TcGlobals$$get_nativeptr_tcr)(g$$28)) ? eraseFuncAndTuple : false) {
            eraseFuncAndTuple = eraseFuncAndTuple;
            const $var$$94 = g$$28;
            ty$$32 = (0, _TcGlobals.TcGlobals$$get_nativeint_ty)(g$$28);
            g$$28 = $var$$94;
            continue stripTyEqnsAndErase;
          } else {
            return ty$$33;
          }
        }

      case 1:
        {
          return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_fastFunc_tcr)(g$$28), (0, _Types.L)(a$$1, (0, _Types.L)(b$$2, (0, _Types.L)())));
        }

      case 2:
        {
          var $target$$95, l$$11, tupInfo$$2;

          if (ty$$33.tag === 2) {
            if (tupInfo$$1 = ty$$33.fields[0], (l$$10 = ty$$33.fields[1], eraseFuncAndTuple)) {
              $target$$95 = 0;
              l$$11 = ty$$33.fields[1];
              tupInfo$$2 = ty$$33.fields[0];
            } else {
              $target$$95 = 1;
            }
          } else {
            $target$$95 = 1;
          }

          switch ($target$$95) {
            case 0:
              {
                return mkCompiledTupleTy(g$$28, evalTupInfoIsStruct(tupInfo$$2), l$$11);
              }

            case 1:
              {
                const ty$$34 = ty$$33;
                return ty$$34;
              }
          }
        }
    }
  }
}

function stripTyEqnsAndMeasureEqns(g$$29, ty$$35) {
  return stripTyEqnsAndErase(false, g$$29, ty$$35);
}

const Erasure = (0, _Types.declare)(function Erasure(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Erasure = Erasure;

function stripTyEqnsWrtErasure(erasureFlag, g$$30, ty$$36) {
  switch (erasureFlag.tag) {
    case 0:
      {
        return stripTyEqnsAndErase(true, g$$30, ty$$36);
      }

    case 1:
      {
        return stripTyEqnsAndErase(false, g$$30, ty$$36);
      }

    default:
      {
        return stripTyEqns(g$$30, ty$$36);
      }
  }
}

function stripExnEqns(eref$$1) {
  stripExnEqns: while (true) {
    const exnc = (0, _tast.EntityRef$$get_Deref)(eref$$1);
    const matchValue$$25 = (0, _tast.Entity$$get_ExceptionInfo)(exnc);

    if (matchValue$$25.tag === 0) {
      const eref$$2 = matchValue$$25.fields[0];
      eref$$1 = eref$$2;
      continue stripExnEqns;
    } else {
      return exnc;
    }
  }
}

function primDestForallTy(g$$31, ty$$37) {
  const _arg1$$10 = stripTyEqns(g$$31, ty$$37);

  if (_arg1$$10.tag === 0) {
    const tyvs = _arg1$$10.fields[0];
    const tau$$1 = _arg1$$10.fields[1];
    return [tyvs, tau$$1];
  } else {
    throw new Error("primDestForallTy: not a forall type");
  }
}

function destFunTy(g$$32, ty$$38) {
  const _arg1$$11 = stripTyEqns(g$$32, ty$$38);

  if (_arg1$$11.tag === 3) {
    const tyv = _arg1$$11.fields[0];
    const tau$$2 = _arg1$$11.fields[1];
    return [tyv, tau$$2];
  } else {
    throw new Error("destFunTy: not a function type");
  }
}

function destAnyTupleTy(g$$33, ty$$39) {
  const _arg1$$12 = stripTyEqns(g$$33, ty$$39);

  if (_arg1$$12.tag === 2) {
    const tupInfo$$3 = _arg1$$12.fields[0];
    const l$$12 = _arg1$$12.fields[1];
    return [tupInfo$$3, l$$12];
  } else {
    throw new Error("destAnyTupleTy: not a tuple type");
  }
}

function destRefTupleTy(g$$34, ty$$40) {
  var tupInfo$$4, l$$13;

  const _arg1$$13 = stripTyEqns(g$$34, ty$$40);

  var $target$$96, l$$14, tupInfo$$5;

  if (_arg1$$13.tag === 2) {
    if (tupInfo$$4 = _arg1$$13.fields[0], (l$$13 = _arg1$$13.fields[1], !evalTupInfoIsStruct(tupInfo$$4))) {
      $target$$96 = 0;
      l$$14 = _arg1$$13.fields[1];
      tupInfo$$5 = _arg1$$13.fields[0];
    } else {
      $target$$96 = 1;
    }
  } else {
    $target$$96 = 1;
  }

  switch ($target$$96) {
    case 0:
      {
        return l$$14;
      }

    case 1:
      {
        throw new Error("destRefTupleTy: not a reference tuple type");
      }
  }
}

function destStructTupleTy(g$$35, ty$$41) {
  var tupInfo$$6, l$$15;

  const _arg1$$14 = stripTyEqns(g$$35, ty$$41);

  var $target$$97, l$$16, tupInfo$$7;

  if (_arg1$$14.tag === 2) {
    if (tupInfo$$6 = _arg1$$14.fields[0], (l$$15 = _arg1$$14.fields[1], evalTupInfoIsStruct(tupInfo$$6))) {
      $target$$97 = 0;
      l$$16 = _arg1$$14.fields[1];
      tupInfo$$7 = _arg1$$14.fields[0];
    } else {
      $target$$97 = 1;
    }
  } else {
    $target$$97 = 1;
  }

  switch ($target$$97) {
    case 0:
      {
        return l$$16;
      }

    case 1:
      {
        throw new Error("destStructTupleTy: not a struct tuple type");
      }
  }
}

function destTyparTy(g$$36, ty$$42) {
  const _arg1$$15 = stripTyEqns(g$$36, ty$$42);

  if (_arg1$$15.tag === 5) {
    const v$$21 = _arg1$$15.fields[0];
    return v$$21;
  } else {
    throw new Error("destTyparTy: not a typar type");
  }
}

function destAnyParTy(g$$37, ty$$43) {
  const _arg1$$16 = stripTyEqns(g$$37, ty$$43);

  switch (_arg1$$16.tag) {
    case 5:
      {
        const v$$22 = _arg1$$16.fields[0];
        return v$$22;
      }

    case 6:
      {
        const unt$$21 = _arg1$$16.fields[0];
        return destUnitParMeasure(g$$37, unt$$21);
      }

    default:
      {
        throw new Error("destAnyParTy: not a typar or unpar type");
      }
  }
}

function destMeasureTy(g$$38, ty$$44) {
  const _arg1$$17 = stripTyEqns(g$$38, ty$$44);

  if (_arg1$$17.tag === 6) {
    const m$$29 = _arg1$$17.fields[0];
    return m$$29;
  } else {
    throw new Error("destMeasureTy: not a unit-of-measure type");
  }
}

function isFunTy(g$$39, ty$$45) {
  if (stripTyEqns(g$$39, ty$$45).tag === 3) {
    return true;
  } else {
    return false;
  }
}

function isForallTy(g$$40, ty$$46) {
  if (stripTyEqns(g$$40, ty$$46).tag === 0) {
    return true;
  } else {
    return false;
  }
}

function isAnyTupleTy(g$$41, ty$$47) {
  if (stripTyEqns(g$$41, ty$$47).tag === 2) {
    return true;
  } else {
    return false;
  }
}

function isRefTupleTy(g$$42, ty$$48) {
  const _arg1$$21 = stripTyEqns(g$$42, ty$$48);

  if (_arg1$$21.tag === 2) {
    const tupInfo$$8 = _arg1$$21.fields[0];
    return !evalTupInfoIsStruct(tupInfo$$8);
  } else {
    return false;
  }
}

function isStructTupleTy(g$$43, ty$$49) {
  const _arg1$$22 = stripTyEqns(g$$43, ty$$49);

  if (_arg1$$22.tag === 2) {
    const tupInfo$$9 = _arg1$$22.fields[0];
    return evalTupInfoIsStruct(tupInfo$$9);
  } else {
    return false;
  }
}

function isUnionTy(g$$44, ty$$50) {
  const _arg1$$23 = stripTyEqns(g$$44, ty$$50);

  if (_arg1$$23.tag === 1) {
    const tcr$$6 = _arg1$$23.fields[0];
    return (0, _tast.EntityRef$$get_IsUnionTycon)(tcr$$6);
  } else {
    return false;
  }
}

function isReprHiddenTy(g$$45, ty$$51) {
  const _arg1$$24 = stripTyEqns(g$$45, ty$$51);

  if (_arg1$$24.tag === 1) {
    const tcr$$7 = _arg1$$24.fields[0];
    return (0, _tast.EntityRef$$get_IsHiddenReprTycon)(tcr$$7);
  } else {
    return false;
  }
}

function isFSharpObjModelTy(g$$46, ty$$52) {
  const _arg1$$25 = stripTyEqns(g$$46, ty$$52);

  if (_arg1$$25.tag === 1) {
    const tcr$$8 = _arg1$$25.fields[0];
    return (0, _tast.EntityRef$$get_IsFSharpObjectModelTycon)(tcr$$8);
  } else {
    return false;
  }
}

function isRecdTy(g$$47, ty$$53) {
  const _arg1$$26 = stripTyEqns(g$$47, ty$$53);

  if (_arg1$$26.tag === 1) {
    const tcr$$9 = _arg1$$26.fields[0];
    return (0, _tast.EntityRef$$get_IsRecordTycon)(tcr$$9);
  } else {
    return false;
  }
}

function isFSharpStructOrEnumTy(g$$48, ty$$54) {
  const _arg1$$27 = stripTyEqns(g$$48, ty$$54);

  if (_arg1$$27.tag === 1) {
    const tcr$$10 = _arg1$$27.fields[0];
    return (0, _tast.EntityRef$$get_IsFSharpStructOrEnumTycon)(tcr$$10);
  } else {
    return false;
  }
}

function isFSharpEnumTy(g$$49, ty$$55) {
  const _arg1$$28 = stripTyEqns(g$$49, ty$$55);

  if (_arg1$$28.tag === 1) {
    const tcr$$11 = _arg1$$28.fields[0];
    return (0, _tast.EntityRef$$get_IsFSharpEnumTycon)(tcr$$11);
  } else {
    return false;
  }
}

function isTyparTy(g$$50, ty$$56) {
  if (stripTyEqns(g$$50, ty$$56).tag === 5) {
    return true;
  } else {
    return false;
  }
}

function isAnyParTy(g$$51, ty$$57) {
  const _arg1$$30 = stripTyEqns(g$$51, ty$$57);

  switch (_arg1$$30.tag) {
    case 5:
      {
        return true;
      }

    case 6:
      {
        const unt$$22 = _arg1$$30.fields[0];
        return isUnitParMeasure(g$$51, unt$$22);
      }

    default:
      {
        return false;
      }
  }
}

function isMeasureTy(g$$52, ty$$58) {
  if (stripTyEqns(g$$52, ty$$58).tag === 6) {
    return true;
  } else {
    return false;
  }
}

function isProvenUnionCaseTy(ty$$59) {
  if (ty$$59.tag === 4) {
    return true;
  } else {
    return false;
  }
}

function mkAppTy(tcref$$12, tyargs$$7) {
  return new _tast.TType(1, "TType_app", tcref$$12, tyargs$$7);
}

function mkProvenUnionCaseTy(ucref$$2, tyargs$$8) {
  return new _tast.TType(4, "TType_ucase", ucref$$2, tyargs$$8);
}

function isAppTy(g$$53, ty$$60) {
  if (stripTyEqns(g$$53, ty$$60).tag === 1) {
    return true;
  } else {
    return false;
  }
}

function destAppTy(g$$54, ty$$61) {
  const _arg1$$33 = stripTyEqns(g$$54, ty$$61);

  if (_arg1$$33.tag === 1) {
    const tinst$$7 = _arg1$$33.fields[1];
    const tcref$$13 = _arg1$$33.fields[0];
    return [tcref$$13, tinst$$7];
  } else {
    throw new Error("destAppTy");
  }
}

function tcrefOfAppTy(g$$55, ty$$62) {
  const _arg1$$34 = stripTyEqns(g$$55, ty$$62);

  if (_arg1$$34.tag === 1) {
    const tcref$$14 = _arg1$$34.fields[0];
    return tcref$$14;
  } else {
    throw new Error("tcrefOfAppTy");
  }
}

function argsOfAppTy(g$$56, ty$$63) {
  const _arg1$$35 = stripTyEqns(g$$56, ty$$63);

  if (_arg1$$35.tag === 1) {
    const tinst$$8 = _arg1$$35.fields[1];
    return tinst$$8;
  } else {
    return (0, _Types.L)();
  }
}

function tryDestTyparTy(g$$57, ty$$64) {
  const _arg1$$36 = stripTyEqns(g$$57, ty$$64);

  if (_arg1$$36.tag === 5) {
    const v$$23 = _arg1$$36.fields[0];
    return v$$23;
  } else {
    return null;
  }
}

function tryDestFunTy(g$$58, ty$$65) {
  const _arg1$$37 = stripTyEqns(g$$58, ty$$65);

  if (_arg1$$37.tag === 3) {
    const tyv$$1 = _arg1$$37.fields[0];
    const tau$$3 = _arg1$$37.fields[1];
    return [tyv$$1, tau$$3];
  } else {
    return null;
  }
}

function tryDestAppTy(g$$59, ty$$66) {
  const _arg1$$38 = stripTyEqns(g$$59, ty$$66);

  if (_arg1$$38.tag === 1) {
    const tcref$$15 = _arg1$$38.fields[0];
    return tcref$$15;
  } else {
    return null;
  }
}

function tryAnyParTy(g$$60, ty$$67) {
  var unt$$23;

  const _arg1$$39 = stripTyEqns(g$$60, ty$$67);

  var $target$$98, v$$24, unt$$24;

  if (_arg1$$39.tag === 5) {
    $target$$98 = 0;
    v$$24 = _arg1$$39.fields[0];
  } else if (_arg1$$39.tag === 6) {
    if (unt$$23 = _arg1$$39.fields[0], isUnitParMeasure(g$$60, unt$$23)) {
      $target$$98 = 1;
      unt$$24 = _arg1$$39.fields[0];
    } else {
      $target$$98 = 2;
    }
  } else {
    $target$$98 = 2;
  }

  switch ($target$$98) {
    case 0:
      {
        return v$$24;
      }

    case 1:
      {
        return destUnitParMeasure(g$$60, unt$$24);
      }

    case 2:
      {
        return null;
      }
  }
}

function $007CAppTy$007C_$007C(g$$61, ty$$68) {
  const _arg1$$40 = stripTyEqns(g$$61, ty$$68);

  if (_arg1$$40.tag === 1) {
    const tinst$$9 = _arg1$$40.fields[1];
    const tcref$$16 = _arg1$$40.fields[0];
    return [tcref$$16, tinst$$9];
  } else {
    return null;
  }
}

function $007CRefTupleTy$007C_$007C(g$$62, ty$$69) {
  var tys$$2, tupInfo$$10;

  const _arg1$$41 = stripTyEqns(g$$62, ty$$69);

  var $target$$99, tupInfo$$11, tys$$3;

  if (_arg1$$41.tag === 2) {
    if (tys$$2 = _arg1$$41.fields[1], (tupInfo$$10 = _arg1$$41.fields[0], !evalTupInfoIsStruct(tupInfo$$10))) {
      $target$$99 = 0;
      tupInfo$$11 = _arg1$$41.fields[0];
      tys$$3 = _arg1$$41.fields[1];
    } else {
      $target$$99 = 1;
    }
  } else {
    $target$$99 = 1;
  }

  switch ($target$$99) {
    case 0:
      {
        return tys$$3;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CFunTy$007C_$007C(g$$63, ty$$70) {
  const _arg1$$42 = stripTyEqns(g$$63, ty$$70);

  if (_arg1$$42.tag === 3) {
    const rty$$2 = _arg1$$42.fields[1];
    const dty = _arg1$$42.fields[0];
    return [dty, rty$$2];
  } else {
    return null;
  }
}

function tryNiceEntityRefOfTy(ty$$71) {
  const ty$$72 = (0, _tast.stripTyparEqnsAux)(false, ty$$71);
  var $target$$100, tcref$$17, tcref$$18;

  if (ty$$72.tag === 1) {
    $target$$100 = 0;
    tcref$$17 = ty$$72.fields[0];
  } else if (ty$$72.tag === 6) {
    if (ty$$72.fields[0].tag === 1) {
      $target$$100 = 1;
      tcref$$18 = ty$$72.fields[0].fields[0];
    } else {
      $target$$100 = 2;
    }
  } else {
    $target$$100 = 2;
  }

  switch ($target$$100) {
    case 0:
      {
        return tcref$$17;
      }

    case 1:
      {
        return tcref$$18;
      }

    case 2:
      {
        return null;
      }
  }
}

function $007CNullableTy$007C_$007C(g$$64, ty$$73) {
  var tyarg$$2, tcr$$12;
  var $target$$101, tcr$$13, tyarg$$3;
  const activePatternResult31221 = $007CAppTy$007C_$007C(g$$64, ty$$73);

  if (activePatternResult31221 != null) {
    if (activePatternResult31221[1].tail != null) {
      if (activePatternResult31221[1].tail.tail == null) {
        if (tyarg$$2 = activePatternResult31221[1].head, (tcr$$12 = activePatternResult31221[0], tyconRefEq(g$$64, tcr$$12, (0, _TcGlobals.TcGlobals$$get_system_Nullable_tcref)(g$$64)))) {
          $target$$101 = 0;
          tcr$$13 = activePatternResult31221[0];
          tyarg$$3 = activePatternResult31221[1].head;
        } else {
          $target$$101 = 1;
        }
      } else {
        $target$$101 = 1;
      }
    } else {
      $target$$101 = 1;
    }
  } else {
    $target$$101 = 1;
  }

  switch ($target$$101) {
    case 0:
      {
        return tyarg$$3;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CStripNullableTy$007C(g$$65, ty$$74) {
  var tyarg$$4, tcr$$14;
  var $target$$102, tcr$$15, tyarg$$5;
  const activePatternResult31225 = $007CAppTy$007C_$007C(g$$65, ty$$74);

  if (activePatternResult31225 != null) {
    if (activePatternResult31225[1].tail != null) {
      if (activePatternResult31225[1].tail.tail == null) {
        if (tyarg$$4 = activePatternResult31225[1].head, (tcr$$14 = activePatternResult31225[0], tyconRefEq(g$$65, tcr$$14, (0, _TcGlobals.TcGlobals$$get_system_Nullable_tcref)(g$$65)))) {
          $target$$102 = 0;
          tcr$$15 = activePatternResult31225[0];
          tyarg$$5 = activePatternResult31225[1].head;
        } else {
          $target$$102 = 1;
        }
      } else {
        $target$$102 = 1;
      }
    } else {
      $target$$102 = 1;
    }
  } else {
    $target$$102 = 1;
  }

  switch ($target$$102) {
    case 0:
      {
        return tyarg$$5;
      }

    case 1:
      {
        return ty$$74;
      }
  }
}

function mkInstForAppTy(g$$66, ty$$75) {
  const activePatternResult31229 = $007CAppTy$007C_$007C(g$$66, ty$$75);

  if (activePatternResult31229 != null) {
    return mkTyconRefInst(activePatternResult31229[0], activePatternResult31229[1]);
  } else {
    return (0, _Types.L)();
  }
}

function domainOfFunTy(g$$67, ty$$76) {
  return destFunTy(g$$67, ty$$76)[0];
}

function rangeOfFunTy(g$$68, ty$$77) {
  return destFunTy(g$$68, ty$$77)[1];
}

function convertToTypeWithMetadataIfPossible(g$$69, ty$$78) {
  if (isAnyTupleTy(g$$69, ty$$78)) {
    const patternInput$$6 = destAnyTupleTy(g$$69, ty$$78);
    return mkOuterCompiledTupleTy(g$$69, evalTupInfoIsStruct(patternInput$$6[0]), patternInput$$6[1]);
  } else if (isFunTy(g$$69, ty$$78)) {
    const patternInput$$7 = destFunTy(g$$69, ty$$78);
    return mkAppTy((0, _TcGlobals.TcGlobals$$get_fastFunc_tcr)(g$$69), (0, _Types.L)(patternInput$$7[0], (0, _Types.L)(patternInput$$7[1], (0, _Types.L)())));
  } else {
    return ty$$78;
  }
}

const TypeEquivEnv = (0, _Types.declare)(function TypeEquivEnv(arg1, arg2) {
  this.EquivTypars = arg1;
  this.EquivTycons = arg2;
}, _Types.Record);
exports.TypeEquivEnv = TypeEquivEnv;
const typeEquivEnvEmpty = new TypeEquivEnv(TyparMap$00601$$$get_Empty(), emptyTyconRefRemap);
exports.typeEquivEnvEmpty = typeEquivEnvEmpty;

function TypeEquivEnv$$$get_Empty() {
  return typeEquivEnvEmpty;
}

function TypeEquivEnv$$BindTyparsToTypes(aenv, tps1, tys2) {
  return new TypeEquivEnv((0, _List.foldBack2)(function folder$$2(tp$$11, ty$$79, tpmap) {
    return TyparMap$00601$$Add$$Z748C59BB(tpmap, tp$$11, ty$$79);
  }, tps1, tys2, aenv.EquivTypars), aenv.EquivTycons);
}

function TypeEquivEnv$$BindEquivTypars(aenv$$1, tps1$$1, tps2) {
  return TypeEquivEnv$$BindTyparsToTypes(aenv$$1, tps1$$1, (0, _List.map)(_tast.mkTyparTy, tps2));
}

function TypeEquivEnv$$$FromTyparInst$$Z794F4A39(tpinst$$10) {
  const patternInput$$8 = (0, _List.unzip)(tpinst$$10);
  return TypeEquivEnv$$BindTyparsToTypes(TypeEquivEnv$$$get_Empty(), patternInput$$8[0], patternInput$$8[1]);
}

function TypeEquivEnv$$$FromEquivTypars(tps1$$2, tps2$$1) {
  return TypeEquivEnv$$BindEquivTypars(TypeEquivEnv$$$get_Empty(), tps1$$2, tps2$$1);
}

function traitsAEquivAux(erasureFlag$$1, g$$70, aenv$$2, _arg2, _arg1$$43) {
  const tys1 = _arg2.fields[0];
  const rty$$3 = _arg2.fields[4];
  const nm$$5 = _arg2.fields[1];
  const mf1 = _arg2.fields[2];
  const argtys$$1 = _arg2.fields[3];
  const tys2$$1 = _arg1$$43.fields[0];
  const rty2 = _arg1$$43.fields[4];
  const nm2 = _arg1$$43.fields[1];
  const mf2 = _arg1$$43.fields[2];
  const argtys2 = _arg1$$43.fields[3];

  if ((((0, _Util.equals)(mf1, mf2) ? nm$$5 === nm2 : false) ? (0, _lib.ListSet$$$equals)(function (arg30$0040, arg40$0040) {
    return typeAEquivAux(erasureFlag$$1, g$$70, aenv$$2, arg30$0040, arg40$0040);
  }, tys1, tys2$$1) : false) ? returnTypesAEquivAux(erasureFlag$$1, g$$70, aenv$$2, rty$$3, rty2) : false) {
    return (0, _illib.List$$$lengthsEqAndForall2)(function (arg30$0040$$1, arg40$0040$$1) {
      return typeAEquivAux(erasureFlag$$1, g$$70, aenv$$2, arg30$0040$$1, arg40$0040$$1);
    }, argtys$$1, argtys2);
  } else {
    return false;
  }
}

function returnTypesAEquivAux(erasureFlag$$2, g$$71, aenv$$3, rty$$4, rty2$$1) {
  const matchValue$$26 = [rty$$4, rty2$$1];
  var $target$$103, t1, t2;

  if (matchValue$$26[0] != null) {
    if (matchValue$$26[1] != null) {
      $target$$103 = 1;
      t1 = matchValue$$26[0];
      t2 = matchValue$$26[1];
    } else {
      $target$$103 = 2;
    }
  } else if (matchValue$$26[1] == null) {
    $target$$103 = 0;
  } else {
    $target$$103 = 2;
  }

  switch ($target$$103) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return typeAEquivAux(erasureFlag$$2, g$$71, aenv$$3, t1, t2);
      }

    case 2:
      {
        return false;
      }
  }
}

function typarConstraintsAEquivAux(erasureFlag$$3, g$$72, aenv$$4, tpc1, tpc2) {
  const matchValue$$27 = [tpc1, tpc2];
  var $target$$104, acty, fcty, trait1, trait2, acty$$1, fcty$$1, uty1$$1, uty2$$1, aty1, aty2, bty1, bty2, tys1$$1, tys2$$2;

  if (matchValue$$27[0].tag === 3) {
    if (matchValue$$27[1].tag === 3) {
      $target$$104 = 1;
      trait1 = matchValue$$27[0].fields[0];
      trait2 = matchValue$$27[1].fields[0];
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 1) {
    if (matchValue$$27[1].tag === 1) {
      $target$$104 = 2;
      acty$$1 = matchValue$$27[0].fields[1];
      fcty$$1 = matchValue$$27[1].fields[1];
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 8) {
    if (matchValue$$27[1].tag === 8) {
      $target$$104 = 3;
      uty1$$1 = matchValue$$27[0].fields[0];
      uty2$$1 = matchValue$$27[1].fields[0];
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 11) {
    if (matchValue$$27[1].tag === 11) {
      $target$$104 = 4;
      aty1 = matchValue$$27[0].fields[0];
      aty2 = matchValue$$27[1].fields[0];
      bty1 = matchValue$$27[0].fields[1];
      bty2 = matchValue$$27[1].fields[1];
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 6) {
    if (matchValue$$27[1].tag === 6) {
      $target$$104 = 5;
      tys1$$1 = matchValue$$27[0].fields[0];
      tys2$$2 = matchValue$$27[1].fields[0];
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 9) {
    if (matchValue$$27[1].tag === 9) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 10) {
    if (matchValue$$27[1].tag === 10) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 2) {
    if (matchValue$$27[1].tag === 2) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 4) {
    if (matchValue$$27[1].tag === 4) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 5) {
    if (matchValue$$27[1].tag === 5) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 12) {
    if (matchValue$$27[1].tag === 12) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[0].tag === 7) {
    if (matchValue$$27[1].tag === 7) {
      $target$$104 = 6;
    } else {
      $target$$104 = 7;
    }
  } else if (matchValue$$27[1].tag === 0) {
    $target$$104 = 0;
    acty = matchValue$$27[0].fields[0];
    fcty = matchValue$$27[1].fields[0];
  } else {
    $target$$104 = 7;
  }

  switch ($target$$104) {
    case 0:
      {
        return typeAEquivAux(erasureFlag$$3, g$$72, aenv$$4, acty, fcty);
      }

    case 1:
      {
        return traitsAEquivAux(erasureFlag$$3, g$$72, aenv$$4, trait1, trait2);
      }

    case 2:
      {
        return typeAEquivAux(erasureFlag$$3, g$$72, aenv$$4, acty$$1, fcty$$1);
      }

    case 3:
      {
        return typeAEquivAux(erasureFlag$$3, g$$72, aenv$$4, uty1$$1, uty2$$1);
      }

    case 4:
      {
        if (typeAEquivAux(erasureFlag$$3, g$$72, aenv$$4, aty1, aty2)) {
          return typeAEquivAux(erasureFlag$$3, g$$72, aenv$$4, bty1, bty2);
        } else {
          return false;
        }
      }

    case 5:
      {
        return (0, _lib.ListSet$$$equals)(function (arg30$0040$$2, arg40$0040$$2) {
          return typeAEquivAux(erasureFlag$$3, g$$72, aenv$$4, arg30$0040$$2, arg40$0040$$2);
        }, tys1$$1, tys2$$2);
      }

    case 6:
      {
        return true;
      }

    case 7:
      {
        return false;
      }
  }
}

function typarConstraintSetsAEquivAux(erasureFlag$$4, g$$73, aenv$$5, tp1, tp2) {
  if ((0, _Util.equals)((0, _tast.Typar$$get_StaticReq)(tp1), (0, _tast.Typar$$get_StaticReq)(tp2))) {
    return (0, _lib.ListSet$$$equals)(function (arg30$0040$$3, arg40$0040$$3) {
      return typarConstraintsAEquivAux(erasureFlag$$4, g$$73, aenv$$5, arg30$0040$$3, arg40$0040$$3);
    }, (0, _tast.Typar$$get_Constraints)(tp1), (0, _tast.Typar$$get_Constraints)(tp2));
  } else {
    return false;
  }
}

function typarsAEquivAux(erasureFlag$$5, g$$74, aenv$$6, tps1$$3, tps2$$2) {
  if ((0, _List.length)(tps1$$3) === (0, _List.length)(tps2$$2)) {
    const aenv$$7 = TypeEquivEnv$$BindEquivTypars(aenv$$6, tps1$$3, tps2$$2);
    return (0, _List.forAll2)(function (tp1$$1, tp2$$1) {
      return typarConstraintSetsAEquivAux(erasureFlag$$5, g$$74, aenv$$7, tp1$$1, tp2$$1);
    }, tps1$$3, tps2$$2);
  } else {
    return false;
  }
}

function tcrefAEquiv(g$$75, aenv$$8, tc1, tc2) {
  if (tyconRefEq(g$$75, tc1, tc2)) {
    return true;
  } else {
    const matchValue$$28 = TyconRefMap$00601$$TryFind$$Z788D4AAC(aenv$$8.EquivTycons, tc1);

    if (matchValue$$28 == null) {
      return false;
    } else {
      const v$$25 = matchValue$$28;
      return tyconRefEq(g$$75, v$$25, tc2);
    }
  }
}

function typeAEquivAux(erasureFlag$$6, g$$76, aenv$$9, ty1$$2, ty2$$2) {
  var tp2$$2, tp1$$2;

  typeAEquivAux: while (true) {
    const ty1$$3 = stripTyEqnsWrtErasure(erasureFlag$$6, g$$76, ty1$$2);
    const ty2$$3 = stripTyEqnsWrtErasure(erasureFlag$$6, g$$76, ty2$$2);
    const matchValue$$29 = [ty1$$3, ty2$$3];
    var $target$$105, rty1, rty2$$2, tps1$$4, tps2$$3, tp1$$3, tp2$$3;

    if (matchValue$$29[0].tag === 0) {
      if (matchValue$$29[1].tag === 0) {
        $target$$105 = 0;
        rty1 = matchValue$$29[0].fields[1];
        rty2$$2 = matchValue$$29[1].fields[1];
        tps1$$4 = matchValue$$29[0].fields[0];
        tps2$$3 = matchValue$$29[1].fields[0];
      } else {
        $target$$105 = 2;
      }
    } else if (matchValue$$29[0].tag === 5) {
      if (matchValue$$29[1].tag === 5) {
        if (tp2$$2 = matchValue$$29[1].fields[0], (tp1$$2 = matchValue$$29[0].fields[0], (0, _tast.typarEq)(tp1$$2, tp2$$2))) {
          $target$$105 = 1;
          tp1$$3 = matchValue$$29[0].fields[0];
          tp2$$3 = matchValue$$29[1].fields[0];
        } else {
          $target$$105 = 2;
        }
      } else {
        $target$$105 = 2;
      }
    } else {
      $target$$105 = 2;
    }

    switch ($target$$105) {
      case 0:
        {
          if (typarsAEquivAux(erasureFlag$$6, g$$76, aenv$$9, tps1$$4, tps2$$3)) {
            erasureFlag$$6 = erasureFlag$$6;
            g$$76 = g$$76;
            aenv$$9 = TypeEquivEnv$$BindEquivTypars(aenv$$9, tps1$$4, tps2$$3);
            ty1$$2 = rty1;
            ty2$$2 = rty2$$2;
            continue typeAEquivAux;
          } else {
            return false;
          }
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          var $target$$106, tp1$$4, b1, b2, tc1$$1, tc2$$1, b1$$1, b2$$1, n1, n2, tc1$$2, tc2$$2, l1, l2, s1, s2, dtys1, dtys2, rty1$$1, rty2$$3, m1$$2, m2$$2;

          if (matchValue$$29[0].tag === 5) {
            $target$$106 = 0;
            tp1$$4 = matchValue$$29[0].fields[0];
          } else if (matchValue$$29[0].tag === 1) {
            if (matchValue$$29[1].tag === 1) {
              $target$$106 = 1;
              b1 = matchValue$$29[0].fields[1];
              b2 = matchValue$$29[1].fields[1];
              tc1$$1 = matchValue$$29[0].fields[0];
              tc2$$1 = matchValue$$29[1].fields[0];
            } else {
              $target$$106 = 6;
            }
          } else if (matchValue$$29[0].tag === 4) {
            if (matchValue$$29[1].tag === 4) {
              $target$$106 = 2;
              b1$$1 = matchValue$$29[0].fields[1];
              b2$$1 = matchValue$$29[1].fields[1];
              n1 = matchValue$$29[0].fields[0].fields[1];
              n2 = matchValue$$29[1].fields[0].fields[1];
              tc1$$2 = matchValue$$29[0].fields[0].fields[0];
              tc2$$2 = matchValue$$29[1].fields[0].fields[0];
            } else {
              $target$$106 = 6;
            }
          } else if (matchValue$$29[0].tag === 2) {
            if (matchValue$$29[1].tag === 2) {
              $target$$106 = 3;
              l1 = matchValue$$29[0].fields[1];
              l2 = matchValue$$29[1].fields[1];
              s1 = matchValue$$29[0].fields[0];
              s2 = matchValue$$29[1].fields[0];
            } else {
              $target$$106 = 6;
            }
          } else if (matchValue$$29[0].tag === 3) {
            if (matchValue$$29[1].tag === 3) {
              $target$$106 = 4;
              dtys1 = matchValue$$29[0].fields[0];
              dtys2 = matchValue$$29[1].fields[0];
              rty1$$1 = matchValue$$29[0].fields[1];
              rty2$$3 = matchValue$$29[1].fields[1];
            } else {
              $target$$106 = 6;
            }
          } else if (matchValue$$29[0].tag === 6) {
            if (matchValue$$29[1].tag === 6) {
              $target$$106 = 5;
              m1$$2 = matchValue$$29[0].fields[0];
              m2$$2 = matchValue$$29[1].fields[0];
            } else {
              $target$$106 = 6;
            }
          } else {
            $target$$106 = 6;
          }

          switch ($target$$106) {
            case 0:
              {
                const matchValue$$30 = TyparMap$00601$$TryFind$$ZB4A2630(aenv$$9.EquivTypars, tp1$$4);

                if (matchValue$$30 == null) {
                  return false;
                } else {
                  const v$$26 = matchValue$$30;
                  return typeEquivAux(erasureFlag$$6, g$$76, v$$26, ty2$$3);
                }
              }

            case 1:
              {
                if (tcrefAEquiv(g$$76, aenv$$9, tc1$$1, tc2$$1)) {
                  return typesAEquivAux(erasureFlag$$6, g$$76, aenv$$9, b1, b2);
                } else {
                  return false;
                }
              }

            case 2:
              {
                if (n1 === n2 ? tcrefAEquiv(g$$76, aenv$$9, tc1$$2, tc2$$2) : false) {
                  return typesAEquivAux(erasureFlag$$6, g$$76, aenv$$9, b1$$1, b2$$1);
                } else {
                  return false;
                }
              }

            case 3:
              {
                if (structnessAEquiv(s1, s2)) {
                  return typesAEquivAux(erasureFlag$$6, g$$76, aenv$$9, l1, l2);
                } else {
                  return false;
                }
              }

            case 4:
              {
                if (typeAEquivAux(erasureFlag$$6, g$$76, aenv$$9, dtys1, dtys2)) {
                  erasureFlag$$6 = erasureFlag$$6;
                  g$$76 = g$$76;
                  aenv$$9 = aenv$$9;
                  ty1$$2 = rty1$$1;
                  ty2$$2 = rty2$$3;
                  continue typeAEquivAux;
                } else {
                  return false;
                }
              }

            case 5:
              {
                if (erasureFlag$$6.tag === 2) {
                  return measureAEquiv(g$$76, aenv$$9, m1$$2, m2$$2);
                } else {
                  return true;
                }
              }

            case 6:
              {
                return false;
              }
          }
        }
    }
  }
}

function structnessAEquiv(un1, un2) {
  const matchValue$$31 = [un1, un2];
  const b2$$2 = matchValue$$31[1].fields[0];
  const b1$$2 = matchValue$$31[0].fields[0];
  return b1$$2 === b2$$2;
}

function measureAEquiv(g$$77, aenv$$10, un1$$1, un2$$1) {
  const vars1 = ListMeasureVarOccs(un1$$1);

  const trans = function trans(tp1$$5) {
    if (TyparMap$00601$$ContainsKey$$ZB4A2630(aenv$$10.EquivTypars, tp1$$5)) {
      return destAnyParTy(g$$77, TyparMap$00601$$get_Item$$ZB4A2630(aenv$$10.EquivTypars, tp1$$5));
    } else {
      return tp1$$5;
    }
  };

  const remapTyconRef$$1 = function remapTyconRef$$1(tc) {
    if (TyconRefMap$00601$$ContainsKey$$Z788D4AAC(aenv$$10.EquivTycons, tc)) {
      return TyconRefMap$00601$$get_Item$$Z788D4AAC(aenv$$10.EquivTycons, tc);
    } else {
      return tc;
    }
  };

  const vars1$0027 = (0, _List.map)(trans, vars1);
  const vars2 = (0, _lib.ListSet$$$subtract)(_tast.typarEq, ListMeasureVarOccs(un2$$1), vars1$0027);
  const cons1 = ListMeasureConOccsAfterRemapping(g$$77, remapTyconRef$$1, un1$$1);
  const cons2 = ListMeasureConOccsAfterRemapping(g$$77, remapTyconRef$$1, un2$$1);

  if ((0, _List.forAll)(function (v$$27) {
    return (0, _Util.equals)(MeasureVarExponent(v$$27, un1$$1), MeasureVarExponent(trans(v$$27), un2$$1));
  }, vars1) ? (0, _List.forAll)(function (v$$28) {
    return (0, _Util.equals)(MeasureVarExponent(v$$28, un1$$1), MeasureVarExponent(v$$28, un2$$1));
  }, vars2) : false) {
    return (0, _List.forAll)(function (c$$3) {
      return (0, _Util.equals)(MeasureConExponentAfterRemapping(g$$77, remapTyconRef$$1, c$$3, un1$$1), MeasureConExponentAfterRemapping(g$$77, remapTyconRef$$1, c$$3, un2$$1));
    }, (0, _List.append)(cons1, cons2));
  } else {
    return false;
  }
}

function typesAEquivAux(erasureFlag$$7, g$$78, aenv$$11, l1$$1, l2$$1) {
  return (0, _illib.List$$$lengthsEqAndForall2)(function (arg30$0040$$4, arg40$0040$$4) {
    return typeAEquivAux(erasureFlag$$7, g$$78, aenv$$11, arg30$0040$$4, arg40$0040$$4);
  }, l1$$1, l2$$1);
}

function typeEquivAux(erasureFlag$$8, g$$79, ty1$$4, ty2$$4) {
  return typeAEquivAux(erasureFlag$$8, g$$79, TypeEquivEnv$$$get_Empty(), ty1$$4, ty2$$4);
}

function typeAEquiv(g$$80, aenv$$12, ty1$$5, ty2$$5) {
  return typeAEquivAux(new Erasure(2, "EraseNone"), g$$80, aenv$$12, ty1$$5, ty2$$5);
}

function typeEquiv(g$$81, ty1$$6, ty2$$6) {
  return typeEquivAux(new Erasure(2, "EraseNone"), g$$81, ty1$$6, ty2$$6);
}

function traitsAEquiv(g$$82, aenv$$13, t1$$1, t2$$1) {
  return traitsAEquivAux(new Erasure(2, "EraseNone"), g$$82, aenv$$13, t1$$1, t2$$1);
}

function typarConstraintsAEquiv(g$$83, aenv$$14, c1, c2) {
  return typarConstraintsAEquivAux(new Erasure(2, "EraseNone"), g$$83, aenv$$14, c1, c2);
}

function typarsAEquiv(g$$84, aenv$$15, d1, d2) {
  return typarsAEquivAux(new Erasure(2, "EraseNone"), g$$84, aenv$$15, d1, d2);
}

function returnTypesAEquiv(g$$85, aenv$$16, t1$$2, t2$$2) {
  return returnTypesAEquivAux(new Erasure(2, "EraseNone"), g$$85, aenv$$16, t1$$2, t2$$2);
}

function measureEquiv(g$$86, m1$$3, m2$$3) {
  return measureAEquiv(g$$86, TypeEquivEnv$$$get_Empty(), m1$$3, m2$$3);
}

function isErasedType(g$$87, ty$$80) {
  const matchValue$$32 = stripTyEqns(g$$87, ty$$80);
  return false;
}

function getErasedTypes(g$$88, ty$$81) {
  getErasedTypes: while (true) {
    const ty$$82 = stripTyEqns(g$$88, ty$$81);

    if (isErasedType(g$$88, ty$$82)) {
      return (0, _Types.L)(ty$$82, (0, _Types.L)());
    } else {
      var $target$$107, b$$4;

      switch (ty$$82.tag) {
        case 5:
          $target$$107 = 1;
          break;

        case 1:
          $target$$107 = 2;
          b$$4 = ty$$82.fields[1];
          break;

        case 4:
          $target$$107 = 2;
          b$$4 = ty$$82.fields[1];
          break;

        case 2:
          $target$$107 = 2;
          b$$4 = ty$$82.fields[1];
          break;

        case 3:
          $target$$107 = 3;
          break;

        case 6:
          $target$$107 = 4;
          break;

        default:
          $target$$107 = 0;
      }

      switch ($target$$107) {
        case 0:
          {
            const rty$$5 = ty$$82.fields[1];
            g$$88 = g$$88;
            ty$$81 = rty$$5;
            continue getErasedTypes;
          }

        case 1:
          {
            const tp$$13 = ty$$82.fields[0];

            if ((0, _tast.Typar$$get_IsErased)(tp$$13)) {
              return (0, _Types.L)(ty$$82, (0, _Types.L)());
            } else {
              return (0, _Types.L)();
            }
          }

        case 2:
          {
            return (0, _List.foldBack)(function (ty$$83, tys$$5) {
              return (0, _List.append)(getErasedTypes(g$$88, ty$$83), tys$$5);
            }, b$$4, (0, _Types.L)());
          }

        case 3:
          {
            const rty$$6 = ty$$82.fields[1];
            const dty$$1 = ty$$82.fields[0];
            return (0, _List.append)(getErasedTypes(g$$88, dty$$1), getErasedTypes(g$$88, rty$$6));
          }

        case 4:
          {
            return (0, _Types.L)(ty$$82, (0, _Types.L)());
          }
      }
    }
  }
}

const valOrder = {
  Compare(v1, v2) {
    return (0, _Long.compare)((0, _tast.Val$$get_Stamp)(v1), (0, _tast.Val$$get_Stamp)(v2));
  }

};
exports.valOrder = valOrder;
const tyconOrder = {
  Compare(tc1$$3, tc2$$3) {
    return (0, _Long.compare)((0, _tast.Entity$$get_Stamp)(tc1$$3), (0, _tast.Entity$$get_Stamp)(tc2$$3));
  }

};
exports.tyconOrder = tyconOrder;
const recdFieldRefOrder = {
  Compare(_arg1$$44, _arg2$$1) {
    const tcref1$$2 = _arg1$$44.fields[0];
    const nm1 = _arg1$$44.fields[1];
    const tcref2$$2 = _arg2$$1.fields[0];
    const nm2$$1 = _arg2$$1.fields[1];
    const c$$4 = tyconOrder.Compare((0, _tast.EntityRef$$get_Deref)(tcref1$$2), (0, _tast.EntityRef$$get_Deref)(tcref2$$2)) | 0;
    return (c$$4 !== 0 ? c$$4 : (0, _Util.comparePrimitives)(nm1, nm2$$1)) | 0;
  }

};
exports.recdFieldRefOrder = recdFieldRefOrder;
const unionCaseRefOrder = {
  Compare(_arg1$$45, _arg2$$2) {
    const tcref1$$3 = _arg1$$45.fields[0];
    const nm1$$1 = _arg1$$45.fields[1];
    const tcref2$$3 = _arg2$$2.fields[0];
    const nm2$$2 = _arg2$$2.fields[1];
    const c$$5 = tyconOrder.Compare((0, _tast.EntityRef$$get_Deref)(tcref1$$3), (0, _tast.EntityRef$$get_Deref)(tcref2$$3)) | 0;
    return (c$$5 !== 0 ? c$$5 : (0, _Util.comparePrimitives)(nm1$$1, nm2$$2)) | 0;
  }

};
exports.unionCaseRefOrder = unionCaseRefOrder;

function mkFunTy(d$$1, r$$3) {
  return new _tast.TType(3, "TType_fun", d$$1, r$$3);
}

function op_MinusMinusGreater(d$$2, r$$4) {
  return mkFunTy(d$$2, r$$4);
}

function mkForallTy(d$$3, r$$5) {
  return new _tast.TType(0, "TType_forall", d$$3, r$$5);
}

function mkForallTyIfNeeded(d$$4, r$$6) {
  if (d$$4.tail == null) {
    return r$$6;
  } else {
    return mkForallTy(d$$4, r$$6);
  }
}

function op_PlusMinusGreater(d$$5, r$$7) {
  return mkForallTyIfNeeded(d$$5, r$$7);
}

function mkIteratedFunTy(dl, r$$8) {
  return (0, _List.foldBack)(op_MinusMinusGreater, dl, r$$8);
}

function mkLambdaArgTy(m$$30, tys$$6) {
  if (tys$$6.tail != null) {
    if (tys$$6.tail.tail == null) {
      return tys$$6.head;
    } else {
      return (0, _tast.mkRawRefTupleTy)(tys$$6);
    }
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("mkLambdaArgTy", m$$30));
  }
}

function typeOfLambdaArg(m$$31, vs$$6) {
  return mkLambdaArgTy(m$$31, (0, _tast.typesOfVals)(vs$$6));
}

function mkMultiLambdaTy(m$$32, vs$$7, rty$$7) {
  return mkFunTy(typeOfLambdaArg(m$$32, vs$$7), rty$$7);
}

function mkLambdaTy(tps$$8, tys$$7, rty$$8) {
  return mkForallTyIfNeeded(tps$$8, mkIteratedFunTy(tys$$7, rty$$8));
}

function ensureCcuHasModuleOrNamespaceAtPath(ccu, path, _arg1$$46, xml) {
  const cpath = _arg1$$46.fields[1];
  const scoref = (0, _tast.CcuThunk$$get_ILScopeRef)(ccu);

  const loop$$1 = function loop$$1(prior_cpath, path$$1, cpath$$1, modul) {
    const mtype = (0, _tast.Entity$$get_ModuleOrNamespaceType)(modul);
    const matchValue$$33 = [path$$1, cpath$$1];
    var $target$$108, hpath, mkind, tcpath, tpath;

    if (matchValue$$33[0].tail != null) {
      if (matchValue$$33[1].tail != null) {
        $target$$108 = 0;
        hpath = matchValue$$33[0].head;
        mkind = matchValue$$33[1].head[1];
        tcpath = matchValue$$33[1].tail;
        tpath = matchValue$$33[0].tail;
      } else {
        $target$$108 = 1;
      }
    } else {
      $target$$108 = 1;
    }

    switch ($target$$108) {
      case 0:
        {
          const modName = (0, _ast.Ident$$get_idText)(hpath);

          if (!(0, _Map.containsKey)(modName, (0, _tast.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames)(mtype))) {
            const smodul = (0, _tast.NewModuleOrNamespace)(new _tast.CompilationPath(0, "CompPath", scoref, prior_cpath), _tast.taccessPublic, hpath, xml, (0, _Types.L)(), new _tast.MaybeLazy$00601(0, "Strict", (0, _tast.NewEmptyModuleOrNamespaceType)(mkind)));
            (0, _tast.ModuleOrNamespaceType$$AddModuleOrNamespaceByMutation$$Z52A308BB)(mtype, smodul);
          }

          const modul$$1 = (0, _Map.find)(modName, (0, _tast.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames)(mtype));
          loop$$1((0, _List.append)(prior_cpath, (0, _Types.L)([modName, new _tast.ModuleOrNamespaceKind(2, "Namespace")], (0, _Types.L)())), tpath, tcpath, modul$$1);
          break;
        }
    }
  };

  loop$$1((0, _Types.L)(), path, cpath, (0, _tast.CcuThunk$$get_Contents)(ccu));
}

function stripExpr(e$$11) {
  stripExpr: while (true) {
    if (e$$11.tag === 14) {
      const eref$$3 = e$$11.fields[0];
      e$$11 = eref$$3.contents;
      continue stripExpr;
    } else {
      return e$$11;
    }
  }
}

function mkCase(a$$3, b$$5) {
  return new _tast.DecisionTreeCase(0, "TCase", a$$3, b$$5);
}

function isRefTupleExpr(e$$12) {
  var $target$$109, tupInfo$$13;

  if (e$$12.tag === 11) {
    if (e$$12.fields[0].tag === 2) {
      $target$$109 = 0;
      tupInfo$$13 = e$$12.fields[0].fields[0];
    } else {
      $target$$109 = 1;
    }
  } else {
    $target$$109 = 1;
  }

  switch ($target$$109) {
    case 0:
      {
        return !evalTupInfoIsStruct(tupInfo$$13);
      }

    case 1:
      {
        return false;
      }
  }
}

function tryDestRefTupleExpr(e$$13) {
  var tupInfo$$14, es;
  var $target$$110, es$$1, tupInfo$$15;

  if (e$$13.tag === 11) {
    if (e$$13.fields[0].tag === 2) {
      if (tupInfo$$14 = e$$13.fields[0].fields[0], (es = e$$13.fields[2], !evalTupInfoIsStruct(tupInfo$$14))) {
        $target$$110 = 0;
        es$$1 = e$$13.fields[2];
        tupInfo$$15 = e$$13.fields[0].fields[0];
      } else {
        $target$$110 = 1;
      }
    } else {
      $target$$110 = 1;
    }
  } else {
    $target$$110 = 1;
  }

  switch ($target$$110) {
    case 0:
      {
        return es$$1;
      }

    case 1:
      {
        return (0, _Types.L)(e$$13, (0, _Types.L)());
      }
  }
}

function rangeOfExpr(x$$24) {
  rangeOfExpr: while (true) {
    var $target$$111, m$$33;

    switch (x$$24.tag) {
      case 11:
        $target$$111 = 0;
        m$$33 = x$$24.fields[3];
        break;

      case 0:
        $target$$111 = 0;
        m$$33 = x$$24.fields[1];
        break;

      case 12:
        $target$$111 = 0;
        m$$33 = x$$24.fields[3];
        break;

      case 8:
        $target$$111 = 0;
        m$$33 = x$$24.fields[6];
        break;

      case 5:
        $target$$111 = 0;
        m$$33 = x$$24.fields[4];
        break;

      case 2:
        $target$$111 = 0;
        m$$33 = x$$24.fields[4];
        break;

      case 10:
        $target$$111 = 0;
        m$$33 = x$$24.fields[3];
        break;

      case 3:
        $target$$111 = 0;
        m$$33 = x$$24.fields[5];
        break;

      case 4:
        $target$$111 = 0;
        m$$33 = x$$24.fields[3];
        break;

      case 13:
        $target$$111 = 0;
        m$$33 = x$$24.fields[2];
        break;

      case 6:
        $target$$111 = 0;
        m$$33 = x$$24.fields[2];
        break;

      case 7:
        $target$$111 = 0;
        m$$33 = x$$24.fields[2];
        break;

      case 9:
        $target$$111 = 0;
        m$$33 = x$$24.fields[4];
        break;

      case 14:
        $target$$111 = 1;
        break;

      default:
        $target$$111 = 0;
        m$$33 = x$$24.fields[2];
    }

    switch ($target$$111) {
      case 0:
        {
          return m$$33;
        }

      case 1:
        {
          const eref$$4 = x$$24.fields[0];
          x$$24 = eref$$4.contents;
          continue rangeOfExpr;
        }
    }
  }
}

function Expr$002Eget_Range(x$$25) {
  return rangeOfExpr(x$$25);
}

function primMkMatch(spBind, exprm, tree, targets, matchm, ty$$84) {
  return new _tast.Expr(9, "Match", spBind, exprm, tree, targets, matchm, ty$$84);
}

const MatchBuilder = (0, _Types.declare)(function MatchBuilder(spBind$$1, inpRange) {
  const $this$$9 = this;
  $this$$9.spBind = spBind$$1;
  $this$$9.inpRange = inpRange;
  $this$$9.targets = [];
});
exports.MatchBuilder = MatchBuilder;

function MatchBuilder$$$$002Ector$$5D7B8C21(spBind$$1, inpRange) {
  return this != null ? MatchBuilder.call(this, spBind$$1, inpRange) : new MatchBuilder(spBind$$1, inpRange);
}

function MatchBuilder$$AddTarget$$Z659D13A7(x$$26, tg) {
  const n$$5 = (0, _Util.count)(x$$26.targets) | 0;
  x$$26.targets.push(tg);
  return n$$5 | 0;
}

function MatchBuilder$$AddResultTarget$$6E549ABC(x$$27, e$$14, spTarget) {
  return new _tast.DecisionTree(1, "TDSuccess", (0, _Types.L)(), MatchBuilder$$AddTarget$$Z659D13A7(x$$27, new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(), e$$14, spTarget)));
}

function MatchBuilder$$CloseTargets(x$$28) {
  return (0, _ResizeArray.toList)(x$$28.targets);
}

function MatchBuilder$$Close$$569B5856(x$$29, dtree, m$$34, ty$$85) {
  return primMkMatch(x$$29.spBind, x$$29.inpRange, dtree, x$$29.targets.slice(), m$$34, ty$$85);
}

function mkBoolSwitch(m$$35, g$$89, t$$2, e$$15) {
  return new _tast.DecisionTree(0, "TDSwitch", g$$89, (0, _Types.L)(new _tast.DecisionTreeCase(0, "TCase", new _tast.DecisionTreeTest(2, "Const", new _tast.Const(0, "Bool", true)), t$$2), (0, _Types.L)()), e$$15, m$$35);
}

function primMkCond(spBind$$2, spTarget1, spTarget2, m$$36, ty$$86, e1, e2, e3) {
  const mbuilder = MatchBuilder$$$$002Ector$$5D7B8C21(spBind$$2, m$$36);
  const dtree$$1 = mkBoolSwitch(m$$36, e1, MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder, e2, spTarget1), MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder, e3, spTarget2));
  return MatchBuilder$$Close$$569B5856(mbuilder, dtree$$1, m$$36, ty$$86);
}

function mkCond(spBind$$3, spTarget$$1, m$$37, ty$$87, e1$$1, e2$$1, e3$$1) {
  return primMkCond(spBind$$3, spTarget$$1, spTarget$$1, m$$37, ty$$87, e1$$1, e2$$1, e3$$1);
}

function exprForValRef(m$$38, vref$$2) {
  return new _tast.Expr(1, "Val", vref$$2, new _tast.ValUseFlag(1, "NormalValUse"), m$$38);
}

function exprForVal(m$$39, v$$29) {
  return exprForValRef(m$$39, (0, _tast.mkLocalValRef)(v$$29));
}

function mkLocalAux(m$$40, s, ty$$88, mut, compgen) {
  const thisv = (0, _tast.NewVal)(s, m$$40, null, ty$$88, mut, compgen, null, _tast.taccessPublic, new _tast.ValRecursiveScopeInfo(1, "ValNotInRecScope"), null, new _tast.ValBaseOrThisInfo(2, "NormalVal"), (0, _Types.L)(), new _tast.ValInline(2, "Optional"), (0, _ast.XmlDoc$$$get_Empty)(), false, false, false, false, false, false, null, new _tast.ParentRef(1, "ParentNone"));
  return [thisv, exprForVal(m$$40, thisv)];
}

function mkLocal(m$$41, s$$1, ty$$89) {
  return mkLocalAux(m$$41, s$$1, ty$$89, new _tast.ValMutability(0, "Immutable"), false);
}

function mkCompGenLocal(m$$42, s$$2, ty$$90) {
  return mkLocalAux(m$$42, s$$2, ty$$90, new _tast.ValMutability(0, "Immutable"), true);
}

function mkMutableCompGenLocal(m$$43, s$$3, ty$$91) {
  return mkLocalAux(m$$43, s$$3, ty$$91, new _tast.ValMutability(1, "Mutable"), true);
}

function mkMultiLambda(m$$44, vs$$8, b$$6, rty$$9) {
  return new _tast.Expr(3, "Lambda", (0, _tast.newUnique)(), null, null, vs$$8, b$$6, m$$44, rty$$9);
}

function rebuildLambda(m$$45, ctorThisValOpt, baseValOpt, vs$$9, b$$7, rty$$10) {
  return new _tast.Expr(3, "Lambda", (0, _tast.newUnique)(), ctorThisValOpt, baseValOpt, vs$$9, b$$7, m$$45, rty$$10);
}

function mkLambda(m$$46, v$$30, b$$8, rty$$11) {
  return mkMultiLambda(m$$46, (0, _Types.L)(v$$30, (0, _Types.L)()), b$$8, rty$$11);
}

function mkTypeLambda(m$$47, vs$$10, b$$9, tau_ty) {
  if (vs$$10.tail == null) {
    return b$$9;
  } else {
    return new _tast.Expr(4, "TyLambda", (0, _tast.newUnique)(), vs$$10, b$$9, m$$47, tau_ty);
  }
}

function mkTypeChoose(m$$48, vs$$11, b$$10) {
  if (vs$$11.tail == null) {
    return b$$10;
  } else {
    return new _tast.Expr(13, "TyChoose", vs$$11, b$$10, m$$48);
  }
}

function mkObjExpr(ty$$92, basev, basecall, overrides, iimpls, m$$49) {
  return new _tast.Expr(8, "Obj", (0, _tast.newUnique)(), ty$$92, basev, basecall, overrides, iimpls, m$$49);
}

function mkLambdas(m$$50, tps$$9, vs$$12, b$$11, rty$$12) {
  const tupledArg$$7 = (0, _List.foldBack)(function (v$$31, tupledArg$$6) {
    return [mkLambda(m$$50, v$$31, tupledArg$$6[0], tupledArg$$6[1]), op_MinusMinusGreater((0, _tast.Val$$get_Type)(v$$31), tupledArg$$6[1])];
  }, vs$$12, [b$$11, rty$$12]);
  return mkTypeLambda(m$$50, tps$$9, tupledArg$$7[0], tupledArg$$7[1]);
}

function mkMultiLambdasCore(m$$51, vsl, b$$12, rty$$13) {
  return (0, _List.foldBack)(function (v$$32, tupledArg$$8) {
    return [mkMultiLambda(m$$51, v$$32, tupledArg$$8[0], tupledArg$$8[1]), op_MinusMinusGreater(typeOfLambdaArg(m$$51, v$$32), tupledArg$$8[1])];
  }, vsl, [b$$12, rty$$13]);
}

function mkMultiLambdas(m$$52, tps$$10, vsl$$1, b$$13, rty$$14) {
  const tupledArg$$9 = mkMultiLambdasCore(m$$52, vsl$$1, b$$13, rty$$14);
  return mkTypeLambda(m$$52, tps$$10, tupledArg$$9[0], tupledArg$$9[1]);
}

function mkMemberLambdas(m$$53, tps$$11, ctorThisValOpt$$1, baseValOpt$$1, vsl$$2, b$$14, rty$$15) {
  let expr;
  const matchValue$$34 = [ctorThisValOpt$$1, baseValOpt$$1];
  var $target$$112;

  if (matchValue$$34[0] == null) {
    if (matchValue$$34[1] == null) {
      $target$$112 = 0;
    } else {
      $target$$112 = 1;
    }
  } else {
    $target$$112 = 1;
  }

  switch ($target$$112) {
    case 0:
      {
        expr = mkMultiLambdasCore(m$$53, vsl$$2, b$$14, rty$$15);
        break;
      }

    case 1:
      {
        if (vsl$$2.tail != null) {
          const t$$3 = vsl$$2.tail;
          const h$$1 = vsl$$2.head;
          const patternInput$$9 = mkMultiLambdasCore(m$$53, t$$3, b$$14, rty$$15);
          expr = [rebuildLambda(m$$53, ctorThisValOpt$$1, baseValOpt$$1, h$$1, patternInput$$9[0], patternInput$$9[1]), op_MinusMinusGreater(typeOfLambdaArg(m$$53, h$$1), patternInput$$9[1])];
        } else {
          expr = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("mk_basev_multi_lambdas_core: can't attach a basev to a non-lambda expression", m$$53));
        }

        break;
      }
  }

  return mkTypeLambda(m$$53, tps$$11, expr[0], expr[1]);
}

function mkMultiLambdaBind(v$$33, letSeqPtOpt, m$$54, tps$$12, vsl$$3, b$$16, rty$$17) {
  return new _tast.Binding(0, "TBind", v$$33, mkMultiLambdas(m$$54, tps$$12, vsl$$3, b$$16, rty$$17), letSeqPtOpt);
}

function mkBind(seqPtOpt, v$$34, e$$18) {
  return new _tast.Binding(0, "TBind", v$$34, e$$18, seqPtOpt);
}

function mkLetBind(m$$55, bind, body) {
  return new _tast.Expr(7, "Let", bind, body, m$$55, (0, _tast.NewFreeVarsCache)());
}

function mkLetsBind(m$$56, binds, body$$1) {
  return (0, _List.foldBack)(function (arg10$0040$$40, arg20$0040$$4) {
    return mkLetBind(m$$56, arg10$0040$$40, arg20$0040$$4);
  }, binds, body$$1);
}

function mkLetsFromBindings(m$$57, binds$$1, body$$2) {
  return (0, _List.foldBack)(function (arg10$0040$$41, arg20$0040$$5) {
    return mkLetBind(m$$57, arg10$0040$$41, arg20$0040$$5);
  }, binds$$1, body$$2);
}

function mkLet(seqPtOpt$$1, m$$58, v$$35, x$$30, body$$3) {
  return mkLetBind(m$$58, mkBind(seqPtOpt$$1, v$$35, x$$30), body$$3);
}

function mkCompGenBind(v$$36, e$$19) {
  return new _tast.Binding(0, "TBind", v$$36, e$$19, new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"));
}

function mkCompGenBinds(vs$$13, es$$2) {
  return (0, _List.map2)(mkCompGenBind, vs$$13, es$$2);
}

function mkCompGenLet(m$$59, v$$37, x$$31, body$$4) {
  return mkLetBind(m$$59, mkCompGenBind(v$$37, x$$31), body$$4);
}

function mkCompGenLets(m$$60, vs$$14, xs, body$$5) {
  return mkLetsBind(m$$60, mkCompGenBinds(vs$$14, xs), body$$5);
}

function mkCompGenLetsFromBindings(m$$61, vs$$15, xs$$1, body$$6) {
  return mkLetsFromBindings(m$$61, mkCompGenBinds(vs$$15, xs$$1), body$$6);
}

function mkInvisibleBind(v$$38, e$$20) {
  return new _tast.Binding(0, "TBind", v$$38, e$$20, new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"));
}

function mkInvisibleBinds(vs$$16, es$$3) {
  return (0, _List.map2)(mkInvisibleBind, vs$$16, es$$3);
}

function mkInvisibleLet(m$$62, v$$39, x$$32, body$$7) {
  return mkLetBind(m$$62, mkInvisibleBind(v$$39, x$$32), body$$7);
}

function mkInvisibleLets(m$$63, vs$$17, xs$$2, body$$8) {
  return mkLetsBind(m$$63, mkInvisibleBinds(vs$$17, xs$$2), body$$8);
}

function mkInvisibleLetsFromBindings(m$$64, vs$$18, xs$$3, body$$9) {
  return mkLetsFromBindings(m$$64, mkInvisibleBinds(vs$$18, xs$$3), body$$9);
}

function mkLetRecBinds(m$$65, binds$$2, body$$10) {
  if (binds$$2.tail == null) {
    return body$$10;
  } else {
    return new _tast.Expr(6, "LetRec", binds$$2, body$$10, m$$65, (0, _tast.NewFreeVarsCache)());
  }
}

function NormalizeDeclaredTyparsForEquiRecursiveInference(g$$90, tps$$13) {
  if (tps$$13.tail == null) {
    return (0, _Types.L)();
  } else {
    const tps$$14 = tps$$13;
    return (0, _List.map)(function mapping(tp$$14) {
      const ty$$95 = (0, _tast.mkTyparTy)(tp$$14);
      const matchValue$$35 = tryAnyParTy(g$$90, ty$$95);

      if (matchValue$$35 == null) {
        return tp$$14;
      } else {
        const anyParTy = matchValue$$35;
        return anyParTy;
      }
    }, tps$$14);
  }
}

const TypeScheme = (0, _Types.declare)(function TypeScheme(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeScheme = TypeScheme;

function mkGenericBindRhs(g$$91, m$$66, generalizedTyparsForRecursiveBlock, typeScheme, bodyExpr) {
  const tauType = typeScheme.fields[1];
  const generalizedTypars = typeScheme.fields[0];
  const generalizedTypars$$1 = NormalizeDeclaredTyparsForEquiRecursiveInference(g$$91, generalizedTypars);
  const freeChoiceTypars = (0, _lib.ListSet$$$subtract)(_tast.typarEq, generalizedTyparsForRecursiveBlock, generalizedTypars$$1);
  return mkTypeLambda(m$$66, generalizedTypars$$1, mkTypeChoose(m$$66, freeChoiceTypars, bodyExpr), tauType);
}

function isBeingGeneralized(tp$$15, typeScheme$$1) {
  const generalizedTypars$$2 = typeScheme$$1.fields[0];
  return (0, _List.exists)(function f(tp1$$6) {
    return function (tp2$$4) {
      return (0, _tast.typarRefEq)(tp1$$6, tp2$$4);
    };
  }(tp$$15), generalizedTypars$$2);
}

function mkLazyAnd(g$$92, m$$67, e1$$2, e2$$2) {
  return mkCond(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$67, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$92), e1$$2, e2$$2, new _tast.Expr(0, "Const", new _tast.Const(0, "Bool", false), m$$67, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$92)));
}

function mkLazyOr(g$$93, m$$68, e1$$3, e2$$3) {
  return mkCond(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$68, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$93), e1$$3, new _tast.Expr(0, "Const", new _tast.Const(0, "Bool", true), m$$68, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$93)), e2$$3);
}

function mkCoerceExpr(e$$21, to_ty, m$$69, from_ty) {
  return new _tast.Expr(11, "Op", new _tast.TOp(24, "Coerce"), (0, _Types.L)(to_ty, (0, _Types.L)(from_ty, (0, _Types.L)())), (0, _Types.L)(e$$21, (0, _Types.L)()), m$$69);
}

function mkAsmExpr(code, tinst$$11, args$$1, rettys, m$$70) {
  return new _tast.Expr(11, "Op", new _tast.TOp(22, "ILAsm", code, rettys), tinst$$11, args$$1, m$$70);
}

function mkUnionCaseExpr(uc, tinst$$12, args$$2, m$$71) {
  return new _tast.Expr(11, "Op", new _tast.TOp(0, "UnionCase", uc), tinst$$12, args$$2, m$$71);
}

function mkExnExpr(uc$$1, args$$3, m$$72) {
  return new _tast.Expr(11, "Op", new _tast.TOp(1, "ExnConstr", uc$$1), (0, _Types.L)(), args$$3, m$$72);
}

function mkTupleFieldGetViaExprAddr(tupInfo$$16, e$$22, tinst$$13, i, m$$73) {
  return new _tast.Expr(11, "Op", new _tast.TOp(21, "TupleFieldGet", tupInfo$$16, i), tinst$$13, (0, _Types.L)(e$$22, (0, _Types.L)()), m$$73);
}

function mkRecdFieldGetViaExprAddr(e$$23, fref, tinst$$14, m$$74) {
  return new _tast.Expr(11, "Op", new _tast.TOp(12, "ValFieldGet", fref), tinst$$14, (0, _Types.L)(e$$23, (0, _Types.L)()), m$$74);
}

function mkRecdFieldGetAddrViaExprAddr(readonly$$1, e$$24, fref$$1, tinst$$15, m$$75) {
  return new _tast.Expr(11, "Op", new _tast.TOp(13, "ValFieldGetAddr", fref$$1, readonly$$1), tinst$$15, (0, _Types.L)(e$$24, (0, _Types.L)()), m$$75);
}

function mkStaticRecdFieldGetAddr(readonly$$2, fref$$2, tinst$$16, m$$76) {
  return new _tast.Expr(11, "Op", new _tast.TOp(13, "ValFieldGetAddr", fref$$2, readonly$$2), tinst$$16, (0, _Types.L)(), m$$76);
}

function mkStaticRecdFieldGet(fref$$3, tinst$$17, m$$77) {
  return new _tast.Expr(11, "Op", new _tast.TOp(12, "ValFieldGet", fref$$3), tinst$$17, (0, _Types.L)(), m$$77);
}

function mkStaticRecdFieldSet(fref$$4, tinst$$18, e$$25, m$$78) {
  return new _tast.Expr(11, "Op", new _tast.TOp(11, "ValFieldSet", fref$$4), tinst$$18, (0, _Types.L)(e$$25, (0, _Types.L)()), m$$78);
}

function mkArrayElemAddress(g$$94, readonly$$3, ilInstrReadOnlyAnnotation, isNativePtr, shape, elemTy, exprs, m$$79) {
  return new _tast.Expr(11, "Op", new _tast.TOp(22, "ILAsm", (0, _Types.L)(new _il.ILInstr(80, "I_ldelema", ilInstrReadOnlyAnnotation, isNativePtr, shape, (0, _il.mkILTyvarTy)(0)), (0, _Types.L)()), (0, _Types.L)(mkByrefTyWithFlag(g$$94, readonly$$3, elemTy), (0, _Types.L)())), (0, _Types.L)(elemTy, (0, _Types.L)()), exprs, m$$79);
}

function mkRecdFieldSetViaExprAddr(e1$$4, fref$$5, tinst$$19, e2$$4, m$$80) {
  return new _tast.Expr(11, "Op", new _tast.TOp(11, "ValFieldSet", fref$$5), tinst$$19, (0, _Types.L)(e1$$4, (0, _Types.L)(e2$$4, (0, _Types.L)())), m$$80);
}

function mkUnionCaseTagGetViaExprAddr(e1$$5, cref, tinst$$20, m$$81) {
  return new _tast.Expr(11, "Op", new _tast.TOp(14, "UnionCaseTagGet", cref), tinst$$20, (0, _Types.L)(e1$$5, (0, _Types.L)()), m$$81);
}

function mkUnionCaseProof(e1$$6, cref$$1, tinst$$21, m$$82) {
  if ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.UnionCaseRef$$get_Tycon)(cref$$1))) {
    return e1$$6;
  } else {
    return new _tast.Expr(11, "Op", new _tast.TOp(15, "UnionCaseProof", cref$$1), tinst$$21, (0, _Types.L)(e1$$6, (0, _Types.L)()), m$$82);
  }
}

function mkUnionCaseFieldGetProvenViaExprAddr(e1$$7, cref$$2, tinst$$22, j, m$$83) {
  return new _tast.Expr(11, "Op", new _tast.TOp(16, "UnionCaseFieldGet", cref$$2, j), tinst$$22, (0, _Types.L)(e1$$7, (0, _Types.L)()), m$$83);
}

function mkUnionCaseFieldGetAddrProvenViaExprAddr(readonly$$4, e1$$8, cref$$3, tinst$$23, j$$1, m$$84) {
  return new _tast.Expr(11, "Op", new _tast.TOp(17, "UnionCaseFieldGetAddr", cref$$3, j$$1, readonly$$4), tinst$$23, (0, _Types.L)(e1$$8, (0, _Types.L)()), m$$84);
}

function mkUnionCaseFieldGetUnprovenViaExprAddr(e1$$9, cref$$4, tinst$$24, j$$2, m$$85) {
  return mkUnionCaseFieldGetProvenViaExprAddr(mkUnionCaseProof(e1$$9, cref$$4, tinst$$24, m$$85), cref$$4, tinst$$24, j$$2, m$$85);
}

function mkUnionCaseFieldSet(e1$$10, cref$$5, tinst$$25, j$$3, e2$$5, m$$86) {
  return new _tast.Expr(11, "Op", new _tast.TOp(18, "UnionCaseFieldSet", cref$$5, j$$3), tinst$$25, (0, _Types.L)(e1$$10, (0, _Types.L)(e2$$5, (0, _Types.L)())), m$$86);
}

function mkExnCaseFieldGet(e1$$11, ecref, j$$4, m$$87) {
  return new _tast.Expr(11, "Op", new _tast.TOp(19, "ExnFieldGet", ecref, j$$4), (0, _Types.L)(), (0, _Types.L)(e1$$11, (0, _Types.L)()), m$$87);
}

function mkExnCaseFieldSet(e1$$12, ecref$$1, j$$5, e2$$6, m$$88) {
  return new _tast.Expr(11, "Op", new _tast.TOp(20, "ExnFieldSet", ecref$$1, j$$5), (0, _Types.L)(), (0, _Types.L)(e1$$12, (0, _Types.L)(e2$$6, (0, _Types.L)())), m$$88);
}

function mkDummyLambda(g$$95, e$$26, ety) {
  const m$$89 = Expr$002Eget_Range(e$$26);
  return mkLambda(m$$89, mkCompGenLocal(m$$89, "unitVar", (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$95))[0], e$$26, ety);
}

function mkWhile(g$$96, spWhile, marker$$1, e1$$13, e2$$7, m$$90) {
  return new _tast.Expr(11, "Op", new _tast.TOp(6, "While", spWhile, marker$$1), (0, _Types.L)(), (0, _Types.L)(mkDummyLambda(g$$96, e1$$13, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$96)), (0, _Types.L)(mkDummyLambda(g$$96, e2$$7, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$96)), (0, _Types.L)())), m$$90);
}

function mkFor(g$$97, spFor, v$$40, e1$$14, dir, e2$$8, e3$$2, m$$91) {
  return new _tast.Expr(11, "Op", new _tast.TOp(7, "For", spFor, dir), (0, _Types.L)(), (0, _Types.L)(mkDummyLambda(g$$97, e1$$14, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$97)), (0, _Types.L)(mkDummyLambda(g$$97, e2$$8, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$97)), (0, _Types.L)(mkLambda(Expr$002Eget_Range(e3$$2), v$$40, e3$$2, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$97)), (0, _Types.L)()))), m$$91);
}

function mkTryWith(g$$98, e1$$15, vf, ef, vh, eh, m$$92, ty$$96, spTry, spWith) {
  return new _tast.Expr(11, "Op", new _tast.TOp(8, "TryCatch", spTry, spWith), (0, _Types.L)(ty$$96, (0, _Types.L)()), (0, _Types.L)(mkDummyLambda(g$$98, e1$$15, ty$$96), (0, _Types.L)(mkLambda(Expr$002Eget_Range(ef), vf, ef, ty$$96), (0, _Types.L)(mkLambda(Expr$002Eget_Range(eh), vh, eh, ty$$96), (0, _Types.L)()))), m$$92);
}

function mkTryFinally(g$$99, e1$$16, e2$$9, m$$93, ty$$97, spTry$$1, spFinally) {
  return new _tast.Expr(11, "Op", new _tast.TOp(9, "TryFinally", spTry$$1, spFinally), (0, _Types.L)(ty$$97, (0, _Types.L)()), (0, _Types.L)(mkDummyLambda(g$$99, e1$$16, ty$$97), (0, _Types.L)(mkDummyLambda(g$$99, e2$$9, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$99)), (0, _Types.L)())), m$$93);
}

function mkDefault(m$$94, ty$$98) {
  return new _tast.Expr(0, "Const", new _tast.Const(17, "Zero"), m$$94, ty$$98);
}

function mkValSet(m$$95, v$$41, e$$27) {
  return new _tast.Expr(11, "Op", new _tast.TOp(30, "LValueOp", new _tast.LValueOperation(2, "LSet"), v$$41), (0, _Types.L)(), (0, _Types.L)(e$$27, (0, _Types.L)()), m$$95);
}

function mkAddrSet(m$$96, v$$42, e$$28) {
  return new _tast.Expr(11, "Op", new _tast.TOp(30, "LValueOp", new _tast.LValueOperation(3, "LByrefSet"), v$$42), (0, _Types.L)(), (0, _Types.L)(e$$28, (0, _Types.L)()), m$$96);
}

function mkAddrGet(m$$97, v$$43) {
  return new _tast.Expr(11, "Op", new _tast.TOp(30, "LValueOp", new _tast.LValueOperation(1, "LByrefGet"), v$$43), (0, _Types.L)(), (0, _Types.L)(), m$$97);
}

function mkValAddr(m$$98, readonly$$5, v$$44) {
  return new _tast.Expr(11, "Op", new _tast.TOp(30, "LValueOp", new _tast.LValueOperation(0, "LAddrOf", readonly$$5), v$$44), (0, _Types.L)(), (0, _Types.L)(), m$$98);
}

const ValHash$00601 = (0, _Types.declare)(function ValHash$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValHash$00601 = ValHash$00601;

function ValHash$00601$$get_Values(ht) {
  const t$$4 = ht.fields[0];
  return t$$4.values();
}

function ValHash$00601$$TryFind$$7D0CFEA5(ht$$1, v$$45) {
  const t$$5 = ht$$1.fields[0];
  const matchValue$$36 = (0, _Util.tryGetValue)(t$$5, (0, _tast.Val$$get_Stamp)(v$$45), null);

  if (matchValue$$36[0]) {
    return (0, _Option.some)(matchValue$$36[1]);
  } else {
    return null;
  }
}

function ValHash$00601$$Add$$1EAE66D0(ht$$2, v$$47, x$$34) {
  const t$$6 = ht$$2.fields[0];
  t$$6.set((0, _tast.Val$$get_Stamp)(v$$47), x$$34);
}

function ValHash$00601$$$Create() {
  return new ValHash$00601(0, "ValHash", (0, _Map.createMutable)([], {
    Compare: _Long.compare
  }));
}

const ValMultiMap$00601 = (0, _Types.declare)(function ValMultiMap$00601(contents) {
  const $this$$12 = this;
  $this$$12.contents = contents;
}, _Types.Record);
exports.ValMultiMap$00601 = ValMultiMap$00601;

function ValMultiMap$00601$$$$002Ector$$78566FBE(contents) {
  return this != null ? ValMultiMap$00601.call(this, contents) : new ValMultiMap$00601(contents);
}

function ValMultiMap$00601$$ContainsKey$$7D0CFEA5(m$$99, v$$48) {
  return (0, _Map.FSharpMap$$ContainsKey$$2B595)(m$$99.contents, (0, _tast.Val$$get_Stamp)(v$$48));
}

function ValMultiMap$00601$$Find$$7D0CFEA5(m$$100, v$$49) {
  const matchValue$$37 = (0, _Map.tryFind)((0, _tast.Val$$get_Stamp)(v$$49), m$$100.contents);

  if (matchValue$$37 != null) {
    const vals = matchValue$$37;
    return vals;
  } else {
    return (0, _Types.L)();
  }
}

function ValMultiMap$00601$$Add$$1EAE66D0(m$$101, v$$50, x$$35) {
  return ValMultiMap$00601$$$$002Ector$$78566FBE((0, _Map.FSharpMap$$Add$$5BDDA1)(m$$101.contents, (0, _tast.Val$$get_Stamp)(v$$50), (0, _Types.L)(x$$35, ValMultiMap$00601$$Find$$7D0CFEA5(m$$101, v$$50))));
}

function ValMultiMap$00601$$Remove$$7D0CFEA5(m$$102, v$$51) {
  return ValMultiMap$00601$$$$002Ector$$78566FBE((0, _Map.FSharpMap$$Remove$$2B595)(m$$102.contents, (0, _tast.Val$$get_Stamp)(v$$51)));
}

function ValMultiMap$00601$$get_Contents(m$$103) {
  return m$$103.contents;
}

function ValMultiMap$00601$$$get_Empty() {
  return ValMultiMap$00601$$$$002Ector$$78566FBE((0, _Map.empty)({
    Compare: _Long.compare
  }));
}

const TyconRefMultiMap$00601 = (0, _Types.declare)(function TyconRefMultiMap$00601(contents$$1) {
  const $this$$15 = this;
  $this$$15.contents = contents$$1;
}, _Types.Record);
exports.TyconRefMultiMap$00601 = TyconRefMultiMap$00601;

function TyconRefMultiMap$00601$$$$002Ector$$4695133D(contents$$1) {
  return this != null ? TyconRefMultiMap$00601.call(this, contents$$1) : new TyconRefMultiMap$00601(contents$$1);
}

function TyconRefMultiMap$00601$$Find$$Z788D4AAC(m$$104, v$$52) {
  const matchValue$$38 = TyconRefMap$00601$$TryFind$$Z788D4AAC(m$$104.contents, v$$52);

  if (matchValue$$38 != null) {
    const vals$$1 = matchValue$$38;
    return vals$$1;
  } else {
    return (0, _Types.L)();
  }
}

function TyconRefMultiMap$00601$$Add$$75CBEA41(m$$105, v$$53, x$$36) {
  return TyconRefMultiMap$00601$$$$002Ector$$4695133D(TyconRefMap$00601$$Add(m$$105.contents, v$$53, (0, _Types.L)(x$$36, TyconRefMultiMap$00601$$Find$$Z788D4AAC(m$$105, v$$53))));
}

function TyconRefMultiMap$00601$$$get_Empty() {
  return TyconRefMultiMap$00601$$$$002Ector$$4695133D(TyconRefMap$00601$$$get_Empty());
}

function TyconRefMultiMap$00601$$$OfList$$ZB24A5BC(vs$$19) {
  return (0, _List.foldBack)(function folder$$3(tupledArg$$10, acc$$6) {
    return TyconRefMultiMap$00601$$Add$$75CBEA41(acc$$6, tupledArg$$10[0], tupledArg$$10[1]);
  }, vs$$19, TyconRefMultiMap$00601$$$get_Empty());
}

function tryRescopeEntity(viewedCcu, entity) {
  const matchValue$$39 = (0, _tast.Entity$$get_PublicPath)(entity);

  if (matchValue$$39 == null) {
    return null;
  } else {
    const pubpath = matchValue$$39;
    return (0, _tast.ERefNonLocal)((0, _tast.rescopePubPath)(viewedCcu, pubpath));
  }
}

function tryRescopeVal(viewedCcu$$1, entityRemap, vspec) {
  const matchValue$$40 = (0, _tast.Val$$get_PublicPath)(vspec);

  if (matchValue$$40 == null) {
    return null;
  } else {
    const p = matchValue$$40.fields[0];
    const fullLinkageKey = matchValue$$40.fields[1];
    const entityRemap$$1 = new Remap(entityRemap.tpinst, entityRemap.valRemap, entityRemap.tyconRefRemap, true);
    const fullLinkageKey$$1 = remapValLinkage(entityRemap$$1, fullLinkageKey);
    const vref$$3 = (0, _tast.Val$$get_IsIntrinsicMember)(vspec) ? (0, _tast.mkNonLocalValRef)((0, _tast.rescopePubPathToParent)(viewedCcu$$1, p), fullLinkageKey$$1) : (0, _tast.mkNonLocalValRef)((0, _tast.rescopePubPath)(viewedCcu$$1, p), fullLinkageKey$$1);
    return vref$$3;
  }
}

function actualTyOfRecdField(inst, fspec) {
  return instType(inst, (0, _tast.RecdField$$get_FormalType)(fspec));
}

function actualTysOfRecdFields(inst$$1, rfields) {
  return (0, _List.map)(function (arg10$0040$$44) {
    return actualTyOfRecdField(inst$$1, arg10$0040$$44);
  }, rfields);
}

function actualTysOfInstanceRecdFields(inst$$2, tcref$$20) {
  return actualTysOfRecdFields(inst$$2, (0, _tast.EntityRef$$get_AllInstanceFieldsAsList)(tcref$$20));
}

function actualTysOfUnionCaseFields(inst$$3, x$$38) {
  return actualTysOfRecdFields(inst$$3, (0, _tast.UnionCaseRef$$get_AllFieldsAsList)(x$$38));
}

function actualResultTyOfUnionCase(tinst$$26, x$$39) {
  return instType(mkTyconRefInst((0, _tast.UnionCaseRef$$get_TyconRef)(x$$39), tinst$$26), (0, _tast.UnionCaseRef$$get_ReturnType)(x$$39));
}

function recdFieldsOfExnDefRef(x$$40) {
  return (0, _tast.Entity$$get_TrueInstanceFieldsAsList)(stripExnEqns(x$$40));
}

function recdFieldOfExnDefRefByIdx(x$$41, n$$6) {
  return (0, _tast.Entity$$GetFieldByIndex$$Z524259A4)(stripExnEqns(x$$41), n$$6);
}

function recdFieldTysOfExnDefRef(x$$42) {
  return actualTysOfRecdFields((0, _Types.L)(), recdFieldsOfExnDefRef(x$$42));
}

function recdFieldTyOfExnDefRefByIdx(x$$43, j$$6) {
  return actualTyOfRecdField((0, _Types.L)(), recdFieldOfExnDefRefByIdx(x$$43, j$$6));
}

function actualTyOfRecdFieldForTycon(tycon$$6, tinst$$27, fspec$$1) {
  return instType(mkTyconInst(tycon$$6, tinst$$27), (0, _tast.RecdField$$get_FormalType)(fspec$$1));
}

function actualTyOfRecdFieldRef(fref$$6, tinst$$28) {
  return actualTyOfRecdFieldForTycon((0, _tast.RecdFieldRef$$get_Tycon)(fref$$6), tinst$$28, (0, _tast.RecdFieldRef$$get_RecdField)(fref$$6));
}

function actualTyOfUnionFieldRef(fref$$7, n$$7, tinst$$29) {
  return actualTyOfRecdFieldForTycon((0, _tast.UnionCaseRef$$get_Tycon)(fref$$7), tinst$$29, (0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(fref$$7, n$$7));
}

function destForallTy(g$$100, ty$$99) {
  const patternInput$$10 = primDestForallTy(g$$100, ty$$99);
  const tps$$16 = NormalizeDeclaredTyparsForEquiRecursiveInference(g$$100, patternInput$$10[0]);
  return [tps$$16, patternInput$$10[1]];
}

function tryDestForallTy(g$$101, ty$$100) {
  if (isForallTy(g$$101, ty$$100)) {
    return destForallTy(g$$101, ty$$100);
  } else {
    return [(0, _Types.L)(), ty$$100];
  }
}

function stripFunTy(g$$102, ty$$101) {
  if (isFunTy(g$$102, ty$$101)) {
    const patternInput$$11 = destFunTy(g$$102, ty$$101);
    const patternInput$$12 = stripFunTy(g$$102, patternInput$$11[1]);
    return [(0, _Types.L)(patternInput$$11[0], patternInput$$12[0]), patternInput$$12[1]];
  } else {
    return [(0, _Types.L)(), ty$$101];
  }
}

function applyForallTy(g$$103, ty$$102, tyargs$$9) {
  const patternInput$$13 = destForallTy(g$$103, ty$$102);
  return instType(mkTyparInst(patternInput$$13[0], tyargs$$9), patternInput$$13[1]);
}

function reduceIteratedFunTy(g$$104, ty$$103, args$$4) {
  return (0, _List.fold)(function (ty$$104, _arg1$$47) {
    if (!isFunTy(g$$104, ty$$104)) {
      throw new Error("reduceIteratedFunTy");
    }

    return destFunTy(g$$104, ty$$104)[1];
  }, ty$$103, args$$4);
}

function applyTyArgs(g$$105, functy, tyargs$$10) {
  if (isForallTy(g$$105, functy)) {
    return applyForallTy(g$$105, functy, tyargs$$10);
  } else {
    return functy;
  }
}

function applyTys(g$$106, functy$$1, tyargs$$11, argtys$$2) {
  const afterTyappTy = applyTyArgs(g$$106, functy$$1, tyargs$$11);
  return reduceIteratedFunTy(g$$106, afterTyappTy, argtys$$2);
}

function formalApplyTys(g$$107, functy$$2, tyargs$$12, args$$5) {
  return reduceIteratedFunTy(g$$107, tyargs$$12.tail == null ? functy$$2 : destForallTy(g$$107, functy$$2)[1], args$$5);
}

function stripFunTyN(g$$108, n$$8, ty$$105) {
  if (n$$8 > 0 ? isFunTy(g$$108, ty$$105) : false) {
    const patternInput$$14 = destFunTy(g$$108, ty$$105);
    const patternInput$$15 = stripFunTyN(g$$108, n$$8 - 1, patternInput$$14[1]);
    return [(0, _Types.L)(patternInput$$14[0], patternInput$$15[0]), patternInput$$15[1]];
  } else {
    return [(0, _Types.L)(), ty$$105];
  }
}

function tryDestAnyTupleTy(g$$109, ty$$106) {
  if (isAnyTupleTy(g$$109, ty$$106)) {
    return destAnyTupleTy(g$$109, ty$$106);
  } else {
    return [_tast.tupInfoRef, (0, _Types.L)(ty$$106, (0, _Types.L)())];
  }
}

function tryDestRefTupleTy(g$$110, ty$$107) {
  if (isRefTupleTy(g$$110, ty$$107)) {
    return destRefTupleTy(g$$110, ty$$107);
  } else {
    return (0, _Types.L)(ty$$107, (0, _Types.L)());
  }
}

function GetTopTauTypeInFSharpForm(g$$111, curriedArgInfos, tau$$6, m$$106) {
  const nArgInfos = (0, _List.length)(curriedArgInfos) | 0;
  const patternInput$$16 = stripFunTyN(g$$111, nArgInfos, tau$$6);

  if (nArgInfos !== (0, _List.length)(patternInput$$16[0])) {
    (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastInvalidMemberSignature)(), m$$106));
  }

  const argtysl = (0, _List.map2)(function mapping$$1(argInfos, argty) {
    if (argInfos.tail != null) {
      if (argInfos.tail.tail == null) {
        return (0, _Types.L)([argty, argInfos.head], (0, _Types.L)());
      } else {
        return (0, _List.zip)(destRefTupleTy(g$$111, argty), argInfos);
      }
    } else {
      return (0, _Types.L)([(0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$111), _tast.ValReprInfoModule$$$unnamedTopArg1], (0, _Types.L)());
    }
  }, curriedArgInfos, patternInput$$16[0]);
  return [argtysl, patternInput$$16[1]];
}

function destTopForallTy(g$$112, _arg1$$48, ty$$108) {
  const ntps = _arg1$$48.fields[0];
  const patternInput$$17 = ntps.tail == null ? [(0, _Types.L)(), ty$$108] : tryDestForallTy(g$$112, ty$$108);
  const tps$$19 = NormalizeDeclaredTyparsForEquiRecursiveInference(g$$112, patternInput$$17[0]);
  return [tps$$19, patternInput$$17[1]];
}

function GetTopValTypeInFSharpForm(g$$113, _arg1$$49, ty$$109, m$$107) {
  const topValInfo = _arg1$$49;
  const retInfo = topValInfo.fields[2];
  const argInfos$$1 = topValInfo.fields[1];
  const patternInput$$18 = destTopForallTy(g$$113, topValInfo, ty$$109);
  const patternInput$$19 = GetTopTauTypeInFSharpForm(g$$113, argInfos$$1, patternInput$$18[1], m$$107);
  return [patternInput$$18[0], patternInput$$19[0], patternInput$$19[1], retInfo];
}

function IsCompiledAsStaticProperty(g$$114, v$$54) {
  const matchValue$$41 = (0, _tast.Val$$get_ValReprInfo)(v$$54);

  if (matchValue$$41 != null) {
    const valReprInfoValue = matchValue$$41;
    const matchValue$$42 = GetTopValTypeInFSharpForm(g$$114, valReprInfoValue, (0, _tast.Val$$get_Type)(v$$54), (0, _tast.Val$$get_Range)(v$$54));
    var $target$$113;

    if (matchValue$$42[0].tail == null) {
      if (matchValue$$42[1].tail == null) {
        if (!(0, _tast.Val$$get_IsMember)(v$$54)) {
          $target$$113 = 0;
        } else {
          $target$$113 = 1;
        }
      } else {
        $target$$113 = 1;
      }
    } else {
      $target$$113 = 1;
    }

    switch ($target$$113) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  } else {
    return false;
  }
}

function IsCompiledAsStaticPropertyWithField(g$$115, v$$55) {
  if (!(0, _tast.Val$$get_IsCompiledAsStaticPropertyWithoutField)(v$$55)) {
    return IsCompiledAsStaticProperty(g$$115, v$$55);
  } else {
    return false;
  }
}

function isArrayTyconRef(g$$116, tcr$$16) {
  return (0, _TcGlobals.TcGlobals$$get_il_arr_tcr_map)(g$$116).some(function predicate(arg20$0040$$6) {
    return tyconRefEq(g$$116, tcr$$16, arg20$0040$$6);
  });
}

function rankOfArrayTyconRef(g$$117, tcr$$17) {
  const matchValue$$43 = (0, _Array.tryFindIndex)(function predicate$$1(arg20$0040$$7) {
    return tyconRefEq(g$$117, tcr$$17, arg20$0040$$7);
  }, (0, _TcGlobals.TcGlobals$$get_il_arr_tcr_map)(g$$117));

  if (matchValue$$43 == null) {
    throw new Error("rankOfArrayTyconRef: unsupported array rank");
  } else {
    const idx = matchValue$$43 | 0;
    return idx + 1 | 0;
  }
}

function destArrayTy(g$$118, ty$$110) {
  var ty$$111, tcref$$21;
  var $target$$114, tcref$$22, ty$$112;
  const activePatternResult31771 = $007CAppTy$007C_$007C(g$$118, ty$$110);

  if (activePatternResult31771 != null) {
    if (activePatternResult31771[1].tail != null) {
      if (activePatternResult31771[1].tail.tail == null) {
        if (ty$$111 = activePatternResult31771[1].head, (tcref$$21 = activePatternResult31771[0], isArrayTyconRef(g$$118, tcref$$21))) {
          $target$$114 = 0;
          tcref$$22 = activePatternResult31771[0];
          ty$$112 = activePatternResult31771[1].head;
        } else {
          $target$$114 = 1;
        }
      } else {
        $target$$114 = 1;
      }
    } else {
      $target$$114 = 1;
    }
  } else {
    $target$$114 = 1;
  }

  switch ($target$$114) {
    case 0:
      {
        return ty$$112;
      }

    case 1:
      {
        throw new Error("destArrayTy");
      }
  }
}

function destListTy(g$$119, ty$$113) {
  var ty$$114, tcref$$23;
  var $target$$115, tcref$$24, ty$$115;
  const activePatternResult31775 = $007CAppTy$007C_$007C(g$$119, ty$$113);

  if (activePatternResult31775 != null) {
    if (activePatternResult31775[1].tail != null) {
      if (activePatternResult31775[1].tail.tail == null) {
        if (ty$$114 = activePatternResult31775[1].head, (tcref$$23 = activePatternResult31775[0], tyconRefEq(g$$119, tcref$$23, (0, _TcGlobals.TcGlobals$$get_list_tcr_canon)(g$$119)))) {
          $target$$115 = 0;
          tcref$$24 = activePatternResult31775[0];
          ty$$115 = activePatternResult31775[1].head;
        } else {
          $target$$115 = 1;
        }
      } else {
        $target$$115 = 1;
      }
    } else {
      $target$$115 = 1;
    }
  } else {
    $target$$115 = 1;
  }

  switch ($target$$115) {
    case 0:
      {
        return ty$$115;
      }

    case 1:
      {
        throw new Error("destListTy");
      }
  }
}

function tyconRefEqOpt(g$$120, tcOpt, tc$$1) {
  if (tcOpt != null) {
    const tc2$$4 = tcOpt;
    return tyconRefEq(g$$120, tc2$$4, tc$$1);
  } else {
    return false;
  }
}

function isStringTy(g$$121, ty$$116) {
  const _arg1$$50 = stripTyEqns(g$$121, ty$$116);

  if (_arg1$$50.tag === 1) {
    const tcref$$25 = _arg1$$50.fields[0];
    return tyconRefEq(g$$121, tcref$$25, (0, _TcGlobals.TcGlobals$$get_system_String_tcref)(g$$121));
  } else {
    return false;
  }
}

function isListTy(g$$122, ty$$117) {
  const _arg1$$51 = stripTyEqns(g$$122, ty$$117);

  if (_arg1$$51.tag === 1) {
    const tcref$$26 = _arg1$$51.fields[0];
    return tyconRefEq(g$$122, tcref$$26, (0, _TcGlobals.TcGlobals$$get_list_tcr_canon)(g$$122));
  } else {
    return false;
  }
}

function isArrayTy(g$$123, ty$$118) {
  const _arg1$$52 = stripTyEqns(g$$123, ty$$118);

  if (_arg1$$52.tag === 1) {
    const tcref$$27 = _arg1$$52.fields[0];
    return isArrayTyconRef(g$$123, tcref$$27);
  } else {
    return false;
  }
}

function isArray1DTy(g$$124, ty$$119) {
  const _arg1$$53 = stripTyEqns(g$$124, ty$$119);

  if (_arg1$$53.tag === 1) {
    const tcref$$28 = _arg1$$53.fields[0];
    return tyconRefEq(g$$124, tcref$$28, (0, _TcGlobals.TcGlobals$$get_il_arr_tcr_map)(g$$124)[0]);
  } else {
    return false;
  }
}

function isUnitTy(g$$125, ty$$120) {
  const _arg1$$54 = stripTyEqns(g$$125, ty$$120);

  if (_arg1$$54.tag === 1) {
    const tcref$$29 = _arg1$$54.fields[0];
    return tyconRefEq(g$$125, (0, _TcGlobals.TcGlobals$$get_unit_tcr_canon)(g$$125), tcref$$29);
  } else {
    return false;
  }
}

function isObjTy(g$$126, ty$$121) {
  const _arg1$$55 = stripTyEqns(g$$126, ty$$121);

  if (_arg1$$55.tag === 1) {
    const tcref$$30 = _arg1$$55.fields[0];
    return tyconRefEq(g$$126, (0, _TcGlobals.TcGlobals$$get_system_Object_tcref)(g$$126), tcref$$30);
  } else {
    return false;
  }
}

function isVoidTy(g$$127, ty$$122) {
  const _arg1$$56 = stripTyEqns(g$$127, ty$$122);

  if (_arg1$$56.tag === 1) {
    const tcref$$31 = _arg1$$56.fields[0];
    return tyconRefEq(g$$127, (0, _TcGlobals.TcGlobals$$get_system_Void_tcref)(g$$127), tcref$$31);
  } else {
    return false;
  }
}

function isILAppTy(g$$128, ty$$123) {
  const _arg1$$57 = stripTyEqns(g$$128, ty$$123);

  if (_arg1$$57.tag === 1) {
    const tcref$$32 = _arg1$$57.fields[0];
    return (0, _tast.EntityRef$$get_IsILTycon)(tcref$$32);
  } else {
    return false;
  }
}

function isNativePtrTy(g$$129, ty$$124) {
  const _arg1$$58 = stripTyEqns(g$$129, ty$$124);

  if (_arg1$$58.tag === 1) {
    const tcref$$33 = _arg1$$58.fields[0];
    return tyconRefEq(g$$129, (0, _TcGlobals.TcGlobals$$get_nativeptr_tcr)(g$$129), tcref$$33);
  } else {
    return false;
  }
}

function isByrefTy(g$$130, ty$$125) {
  var tcref$$34;

  const _arg1$$59 = stripTyEqns(g$$130, ty$$125);

  var $target$$116, tcref$$35;

  if (_arg1$$59.tag === 1) {
    if (tcref$$34 = _arg1$$59.fields[0], (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$130))) {
      $target$$116 = 0;
      tcref$$35 = _arg1$$59.fields[0];
    } else {
      $target$$116 = 1;
    }
  } else {
    $target$$116 = 1;
  }

  switch ($target$$116) {
    case 0:
      {
        return tyconRefEq(g$$130, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$130), tcref$$35);
      }

    case 1:
      {
        if (_arg1$$59.tag === 1) {
          const tcref$$36 = _arg1$$59.fields[0];
          return tyconRefEq(g$$130, (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$130), tcref$$36);
        } else {
          return false;
        }
      }
  }
}

function isInByrefTag(g$$131, ty$$126) {
  const _arg1$$60 = stripTyEqns(g$$131, ty$$126);

  var $target$$117, tcref$$37;

  if (_arg1$$60.tag === 1) {
    if (_arg1$$60.fields[1].tail == null) {
      $target$$117 = 0;
      tcref$$37 = _arg1$$60.fields[0];
    } else {
      $target$$117 = 1;
    }
  } else {
    $target$$117 = 1;
  }

  switch ($target$$117) {
    case 0:
      {
        return tyconRefEq(g$$131, (0, _TcGlobals.TcGlobals$$get_byrefkind_In_tcr)(g$$131), tcref$$37);
      }

    case 1:
      {
        return false;
      }
  }
}

function isInByrefTy(g$$132, ty$$127) {
  var tcref$$38, tag;

  const _arg1$$61 = stripTyEqns(g$$132, ty$$127);

  var $target$$118, tag$$1, tcref$$39;

  if (_arg1$$61.tag === 1) {
    if (_arg1$$61.fields[1].tail != null) {
      if (_arg1$$61.fields[1].tail.tail != null) {
        if (_arg1$$61.fields[1].tail.tail.tail == null) {
          if (tcref$$38 = _arg1$$61.fields[0], (tag = _arg1$$61.fields[1].tail.head, (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$132)))) {
            $target$$118 = 0;
            tag$$1 = _arg1$$61.fields[1].tail.head;
            tcref$$39 = _arg1$$61.fields[0];
          } else {
            $target$$118 = 1;
          }
        } else {
          $target$$118 = 1;
        }
      } else {
        $target$$118 = 1;
      }
    } else {
      $target$$118 = 1;
    }
  } else {
    $target$$118 = 1;
  }

  switch ($target$$118) {
    case 0:
      {
        if (tyconRefEq(g$$132, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$132), tcref$$39)) {
          return isInByrefTag(g$$132, tag$$1);
        } else {
          return false;
        }
      }

    case 1:
      {
        return false;
      }
  }
}

function isOutByrefTag(g$$133, ty$$128) {
  const _arg1$$62 = stripTyEqns(g$$133, ty$$128);

  var $target$$119, tcref$$40;

  if (_arg1$$62.tag === 1) {
    if (_arg1$$62.fields[1].tail == null) {
      $target$$119 = 0;
      tcref$$40 = _arg1$$62.fields[0];
    } else {
      $target$$119 = 1;
    }
  } else {
    $target$$119 = 1;
  }

  switch ($target$$119) {
    case 0:
      {
        return tyconRefEq(g$$133, (0, _TcGlobals.TcGlobals$$get_byrefkind_Out_tcr)(g$$133), tcref$$40);
      }

    case 1:
      {
        return false;
      }
  }
}

function isOutByrefTy(g$$134, ty$$129) {
  var tcref$$41, tag$$2;

  const _arg1$$63 = stripTyEqns(g$$134, ty$$129);

  var $target$$120, tag$$3, tcref$$42;

  if (_arg1$$63.tag === 1) {
    if (_arg1$$63.fields[1].tail != null) {
      if (_arg1$$63.fields[1].tail.tail != null) {
        if (_arg1$$63.fields[1].tail.tail.tail == null) {
          if (tcref$$41 = _arg1$$63.fields[0], (tag$$2 = _arg1$$63.fields[1].tail.head, (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$134)))) {
            $target$$120 = 0;
            tag$$3 = _arg1$$63.fields[1].tail.head;
            tcref$$42 = _arg1$$63.fields[0];
          } else {
            $target$$120 = 1;
          }
        } else {
          $target$$120 = 1;
        }
      } else {
        $target$$120 = 1;
      }
    } else {
      $target$$120 = 1;
    }
  } else {
    $target$$120 = 1;
  }

  switch ($target$$120) {
    case 0:
      {
        if (tyconRefEq(g$$134, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$134), tcref$$42)) {
          return isOutByrefTag(g$$134, tag$$3);
        } else {
          return false;
        }
      }

    case 1:
      {
        return false;
      }
  }
}

const TypeDefMetadata = (0, _Types.declare)(function TypeDefMetadata(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeDefMetadata = TypeDefMetadata;

function metadataOfTycon(tycon$$7) {
  if ((0, _tast.Entity$$get_IsILTycon)(tycon$$7)) {
    return new TypeDefMetadata(0, "ILTypeMetadata", (0, _tast.Entity$$get_ILTyconInfo)(tycon$$7));
  } else {
    return new TypeDefMetadata(1, "FSharpOrArrayOrByrefOrTupleOrExnTypeMetadata");
  }
}

function metadataOfTy(g$$135, ty$$130) {
  if (isILAppTy(g$$135, ty$$130)) {
    const tcref$$43 = tcrefOfAppTy(g$$135, ty$$130);
    return new TypeDefMetadata(0, "ILTypeMetadata", (0, _tast.EntityRef$$get_ILTyconInfo)(tcref$$43));
  } else {
    return new TypeDefMetadata(1, "FSharpOrArrayOrByrefOrTupleOrExnTypeMetadata");
  }
}

function isILReferenceTy(g$$136, ty$$131) {
  const matchValue$$44 = metadataOfTy(g$$136, ty$$131);

  if (matchValue$$44.tag === 1) {
    return isArrayTy(g$$136, ty$$131);
  } else {
    const td = matchValue$$44.fields[0].fields[2];
    return !(0, _il.ILTypeDef$$get_IsStructOrEnum)(td);
  }
}

function isILInterfaceTycon(tycon$$8) {
  const matchValue$$45 = metadataOfTycon(tycon$$8);

  if (matchValue$$45.tag === 1) {
    return false;
  } else {
    const td$$1 = matchValue$$45.fields[0].fields[2];
    return (0, _il.ILTypeDef$$get_IsInterface)(td$$1);
  }
}

function rankOfArrayTy(g$$137, ty$$132) {
  return rankOfArrayTyconRef(g$$137, tcrefOfAppTy(g$$137, ty$$132));
}

function isFSharpObjModelRefTy(g$$138, ty$$133) {
  if (isFSharpObjModelTy(g$$138, ty$$133)) {
    const patternInput$$20 = destAppTy(g$$138, ty$$133);
    var $target$$121;

    if ((0, _tast.EntityRef$$get_FSharpObjectModelTypeInfo)(patternInput$$20[0]).fsobjmodel_kind.tag === 1) {
      $target$$121 = 0;
    } else if ((0, _tast.EntityRef$$get_FSharpObjectModelTypeInfo)(patternInput$$20[0]).fsobjmodel_kind.tag === 3) {
      $target$$121 = 0;
    } else if ((0, _tast.EntityRef$$get_FSharpObjectModelTypeInfo)(patternInput$$20[0]).fsobjmodel_kind.tag === 2) {
      $target$$121 = 1;
    } else if ((0, _tast.EntityRef$$get_FSharpObjectModelTypeInfo)(patternInput$$20[0]).fsobjmodel_kind.tag === 4) {
      $target$$121 = 1;
    } else {
      $target$$121 = 0;
    }

    switch ($target$$121) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  } else {
    return false;
  }
}

function isFSharpClassTy(g$$139, ty$$134) {
  const matchValue$$47 = tryDestAppTy(g$$139, ty$$134);

  if (matchValue$$47 != null) {
    const tcref$$44 = matchValue$$47;
    return (0, _tast.Entity$$get_IsFSharpClassTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$44));
  } else {
    return false;
  }
}

function isFSharpStructTy(g$$140, ty$$135) {
  const matchValue$$48 = tryDestAppTy(g$$140, ty$$135);

  if (matchValue$$48 != null) {
    const tcref$$45 = matchValue$$48;
    return (0, _tast.Entity$$get_IsFSharpStructOrEnumTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$45));
  } else {
    return false;
  }
}

function isFSharpInterfaceTy(g$$141, ty$$136) {
  const matchValue$$49 = tryDestAppTy(g$$141, ty$$136);

  if (matchValue$$49 != null) {
    const tcref$$46 = matchValue$$49;
    return (0, _tast.Entity$$get_IsFSharpInterfaceTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$46));
  } else {
    return false;
  }
}

function isDelegateTy(g$$142, ty$$137) {
  const matchValue$$50 = metadataOfTy(g$$142, ty$$137);

  if (matchValue$$50.tag === 1) {
    const matchValue$$51 = tryDestAppTy(g$$142, ty$$137);

    if (matchValue$$51 != null) {
      const tcref$$47 = matchValue$$51;
      return (0, _tast.Entity$$get_IsFSharpDelegateTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$47));
    } else {
      return false;
    }
  } else {
    const td$$2 = matchValue$$50.fields[0].fields[2];
    return (0, _il.ILTypeDef$$get_IsDelegate)(td$$2);
  }
}

function isInterfaceTy(g$$143, ty$$138) {
  const matchValue$$52 = metadataOfTy(g$$143, ty$$138);

  if (matchValue$$52.tag === 1) {
    return isFSharpInterfaceTy(g$$143, ty$$138);
  } else {
    const td$$3 = matchValue$$52.fields[0].fields[2];
    return (0, _il.ILTypeDef$$get_IsInterface)(td$$3);
  }
}

function isClassTy(g$$144, ty$$139) {
  const matchValue$$53 = metadataOfTy(g$$144, ty$$139);

  if (matchValue$$53.tag === 1) {
    return isFSharpClassTy(g$$144, ty$$139);
  } else {
    const td$$4 = matchValue$$53.fields[0].fields[2];
    return (0, _il.ILTypeDef$$get_IsClass)(td$$4);
  }
}

function isStructOrEnumTyconTy(g$$145, ty$$140) {
  const matchValue$$54 = tryDestAppTy(g$$145, ty$$140);

  if (matchValue$$54 != null) {
    const tcref$$48 = matchValue$$54;
    return (0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$48));
  } else {
    return false;
  }
}

function isStructRecordOrUnionTyconTy(g$$146, ty$$141) {
  const matchValue$$55 = tryDestAppTy(g$$146, ty$$141);

  if (matchValue$$55 != null) {
    const tcref$$49 = matchValue$$55;
    return (0, _tast.Entity$$get_IsStructRecordOrUnionTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$49));
  } else {
    return false;
  }
}

function isStructTy(g$$147, ty$$142) {
  const matchValue$$56 = tryDestAppTy(g$$147, ty$$142);

  if (matchValue$$56 != null) {
    const tcref$$50 = matchValue$$56;
    const tycon$$9 = (0, _tast.EntityRef$$get_Deref)(tcref$$50);

    if ((0, _tast.Entity$$get_IsStructRecordOrUnionTycon)(tycon$$9)) {
      return true;
    } else {
      return (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$9);
    }
  } else {
    return false;
  }
}

function isRefTy(g$$148, ty$$143) {
  if (!isStructOrEnumTyconTy(g$$148, ty$$143)) {
    if ((((((isUnionTy(g$$148, ty$$143) ? true : isRefTupleTy(g$$148, ty$$143)) ? true : isRecdTy(g$$148, ty$$143)) ? true : isILReferenceTy(g$$148, ty$$143)) ? true : isFunTy(g$$148, ty$$143)) ? true : isReprHiddenTy(g$$148, ty$$143)) ? true : isFSharpObjModelRefTy(g$$148, ty$$143)) {
      return true;
    } else {
      return isUnitTy(g$$148, ty$$143);
    }
  } else {
    return false;
  }
}

function isUnmanagedTy(g$$149, ty$$144) {
  const ty$$145 = stripTyEqnsAndMeasureEqns(g$$149, ty$$144);
  const matchValue$$57 = tryDestAppTy(g$$149, ty$$145);

  if (matchValue$$57 == null) {
    return false;
  } else {
    const tcref$$51 = matchValue$$57;

    const isEq = function isEq(tcref2$$4) {
      return tyconRefEq(g$$149, tcref$$51, tcref2$$4);
    };

    if ((((((((((((((isEq((0, _TcGlobals.TcGlobals$$get_nativeptr_tcr)(g$$149)) ? true : isEq((0, _TcGlobals.TcGlobals$$get_nativeint_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_sbyte_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_byte_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_int16_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_uint16_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_int32_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_uint32_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_int64_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_uint64_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_char_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_float32_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_float_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_decimal_tcr)(g$$149))) ? true : isEq((0, _TcGlobals.TcGlobals$$get_bool_tcr)(g$$149))) {
      return true;
    } else {
      const tycon$$10 = (0, _tast.EntityRef$$get_Deref)(tcref$$51);

      if ((0, _tast.Entity$$get_IsEnumTycon)(tycon$$10)) {
        return true;
      } else if ((0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$10)) {
        if ((0, _tast.Entity$$get_TyparsNoRange)(tycon$$10).tail == null) {
          return (0, _List.forAll)(function predicate$$2(r$$11) {
            return isUnmanagedTy(g$$149, r$$11.rfield_type);
          }, (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon$$10));
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
}

function isInterfaceTycon(x$$44) {
  if (isILInterfaceTycon(x$$44)) {
    return true;
  } else {
    return (0, _tast.Entity$$get_IsFSharpInterfaceTycon)(x$$44);
  }
}

function isInterfaceTyconRef(tcref$$52) {
  return isInterfaceTycon((0, _tast.EntityRef$$get_Deref)(tcref$$52));
}

function isEnumTy(g$$150, ty$$146) {
  const matchValue$$59 = tryDestAppTy(g$$150, ty$$146);

  if (matchValue$$59 != null) {
    const tcref$$53 = matchValue$$59;
    return (0, _tast.EntityRef$$get_IsEnumTycon)(tcref$$53);
  } else {
    return false;
  }
}

function actualReturnTyOfSlotSig(parentTyInst, methTyInst, _arg1$$64) {
  const parentFormalTypars = _arg1$$64.fields[2];
  const methFormalTypars = _arg1$$64.fields[3];
  const formalRetTy = _arg1$$64.fields[5];
  const methTyInst$$1 = mkTyparInst(methFormalTypars, methTyInst);
  const parentTyInst$$1 = mkTyparInst(parentFormalTypars, parentTyInst);
  return (0, _Option.defaultArg)(formalRetTy, null, function (arg10$0040$$61) {
    return instType((0, _List.append)(parentTyInst$$1, methTyInst$$1), arg10$0040$$61);
  });
}

function slotSigHasVoidReturnTy(_arg1$$65) {
  const formalRetTy$$1 = _arg1$$65.fields[5];
  return formalRetTy$$1 == null;
}

function returnTyOfMethod(g$$151, _arg1$$66) {
  const ss$$2 = _arg1$$66.fields[0];
  const parentTy = _arg1$$66.fields[0].fields[1];
  const methFormalTypars$$1 = _arg1$$66.fields[2];
  const tinst$$30 = argsOfAppTy(g$$151, parentTy);
  const methTyInst$$2 = generalizeTypars(methFormalTypars$$1);
  return actualReturnTyOfSlotSig(tinst$$30, methTyInst$$2, ss$$2);
}

function isAbstractTycon(tycon$$11) {
  if ((0, _tast.Entity$$get_IsFSharpObjectModelTycon)(tycon$$11)) {
    if (!(0, _tast.Entity$$get_IsFSharpDelegateTycon)(tycon$$11)) {
      return (0, _tast.Entity$$get_TypeContents)(tycon$$11).tcaug_abstract;
    } else {
      return false;
    }
  } else if ((0, _tast.Entity$$get_IsILTycon)(tycon$$11)) {
    return (0, _il.ILTypeDef$$get_IsAbstract)((0, _tast.Entity$$get_ILTyconRawMetadata)(tycon$$11));
  } else {
    return false;
  }
}

function MemberIsExplicitImpl(g$$152, membInfo) {
  if (membInfo.MemberFlags.IsOverrideOrExplicitImpl) {
    const matchValue$$60 = membInfo.ImplementedSlotSigs;

    if (matchValue$$60.tail == null) {
      return false;
    } else {
      const slotsigs = matchValue$$60;
      return (0, _List.forAll)(function predicate$$3(slotsig) {
        return isInterfaceTy(g$$152, (0, _tast.SlotSig$$get_ImplementedType)(slotsig));
      }, slotsigs);
    }
  } else {
    return false;
  }
}

function ValIsExplicitImpl(g$$153, v$$56) {
  const matchValue$$61 = (0, _tast.Val$$get_MemberInfo)(v$$56);

  if (matchValue$$61 != null) {
    const membInfo$$1 = matchValue$$61;
    return MemberIsExplicitImpl(g$$153, membInfo$$1);
  } else {
    return false;
  }
}

function ValRefIsExplicitImpl(g$$154, vref$$4) {
  return ValIsExplicitImpl(g$$154, (0, _tast.ValRef$$get_Deref)(vref$$4));
}

const emptyFreeLocals = (0, _zset.ZsetModule$$$empty)(valOrder);
exports.emptyFreeLocals = emptyFreeLocals;

function unionFreeLocals(s1$$1, s2$$1) {
  if (s1$$1 === emptyFreeLocals) {
    return s2$$1;
  } else if (s2$$1 === emptyFreeLocals) {
    return s1$$1;
  } else {
    return (0, _zset.ZsetModule$$$union)(s1$$1, s2$$1);
  }
}

const emptyFreeRecdFields = (0, _zset.ZsetModule$$$empty)(recdFieldRefOrder);
exports.emptyFreeRecdFields = emptyFreeRecdFields;

function unionFreeRecdFields(s1$$2, s2$$2) {
  if (s1$$2 === emptyFreeRecdFields) {
    return s2$$2;
  } else if (s2$$2 === emptyFreeRecdFields) {
    return s1$$2;
  } else {
    return (0, _zset.ZsetModule$$$union)(s1$$2, s2$$2);
  }
}

const emptyFreeUnionCases = (0, _zset.ZsetModule$$$empty)(unionCaseRefOrder);
exports.emptyFreeUnionCases = emptyFreeUnionCases;

function unionFreeUnionCases(s1$$3, s2$$3) {
  if (s1$$3 === emptyFreeUnionCases) {
    return s2$$3;
  } else if (s2$$3 === emptyFreeUnionCases) {
    return s1$$3;
  } else {
    return (0, _zset.ZsetModule$$$union)(s1$$3, s2$$3);
  }
}

const emptyFreeTycons = (0, _zset.ZsetModule$$$empty)(tyconOrder);
exports.emptyFreeTycons = emptyFreeTycons;

function unionFreeTycons(s1$$4, s2$$4) {
  if (s1$$4 === emptyFreeTycons) {
    return s2$$4;
  } else if (s2$$4 === emptyFreeTycons) {
    return s1$$4;
  } else {
    return (0, _zset.ZsetModule$$$union)(s1$$4, s2$$4);
  }
}

const typarOrder = {
  Compare(v1$$1, v2$$1) {
    return (0, _Long.compare)((0, _tast.Typar$$get_Stamp)(v1$$1), (0, _tast.Typar$$get_Stamp)(v2$$1));
  }

};
exports.typarOrder = typarOrder;
const emptyFreeTypars = (0, _zset.ZsetModule$$$empty)(typarOrder);
exports.emptyFreeTypars = emptyFreeTypars;

function unionFreeTypars(s1$$5, s2$$5) {
  if (s1$$5 === emptyFreeTypars) {
    return s2$$5;
  } else if (s2$$5 === emptyFreeTypars) {
    return s1$$5;
  } else {
    return (0, _zset.ZsetModule$$$union)(s1$$5, s2$$5);
  }
}

const emptyFreeTyvars = new _tast.FreeTyvars(emptyFreeTycons, emptyFreeLocals, emptyFreeTypars);
exports.emptyFreeTyvars = emptyFreeTyvars;

function isEmptyFreeTyvars(ftyvs) {
  if ((0, _zset.ZsetModule$$$isEmpty)(ftyvs.FreeTypars)) {
    return (0, _zset.ZsetModule$$$isEmpty)(ftyvs.FreeTycons);
  } else {
    return false;
  }
}

function unionFreeTyvars(fvs1, fvs2) {
  if (fvs1 === emptyFreeTyvars) {
    return fvs2;
  } else if (fvs2 === emptyFreeTyvars) {
    return fvs1;
  } else {
    return new _tast.FreeTyvars(unionFreeTycons(fvs1.FreeTycons, fvs2.FreeTycons), unionFreeLocals(fvs1.FreeTraitSolutions, fvs2.FreeTraitSolutions), unionFreeTypars(fvs1.FreeTypars, fvs2.FreeTypars));
  }
}

const FreeVarOptions = (0, _Types.declare)(function FreeVarOptions(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.canCache = arg1;
  this.collectInTypes = arg2;
  this.includeLocalTycons = arg3;
  this.includeTypars = arg4;
  this.includeLocalTyconReprs = arg5;
  this.includeRecdFields = arg6;
  this.includeUnionCases = arg7;
  this.includeLocals = arg8;
}, _Types.Record);
exports.FreeVarOptions = FreeVarOptions;
const CollectAllNoCaching = new FreeVarOptions(false, true, true, true, true, true, true, true);
exports.CollectAllNoCaching = CollectAllNoCaching;
const CollectTyparsNoCaching = new FreeVarOptions(false, true, false, true, false, false, false, false);
exports.CollectTyparsNoCaching = CollectTyparsNoCaching;
const CollectLocalsNoCaching = new FreeVarOptions(false, false, false, false, false, false, false, true);
exports.CollectLocalsNoCaching = CollectLocalsNoCaching;
const CollectTyparsAndLocalsNoCaching = new FreeVarOptions(false, true, false, true, false, false, false, true);
exports.CollectTyparsAndLocalsNoCaching = CollectTyparsAndLocalsNoCaching;
const CollectAll = new FreeVarOptions(false, true, true, true, true, true, true, true);
exports.CollectAll = CollectAll;
const CollectTyparsAndLocals = new FreeVarOptions(true, true, false, true, false, false, false, true);
exports.CollectTyparsAndLocals = CollectTyparsAndLocals;
const CollectTypars = CollectTyparsAndLocals;
exports.CollectTypars = CollectTypars;
const CollectLocals = CollectTyparsAndLocals;
exports.CollectLocals = CollectLocals;

function accFreeLocalTycon(opts, x$$58, acc$$7) {
  if (!opts.includeLocalTycons) {
    return acc$$7;
  } else if ((0, _zset.ZsetModule$$$contains)(x$$58, acc$$7.FreeTycons)) {
    return acc$$7;
  } else {
    return new _tast.FreeTyvars((0, _zset.ZsetModule$$$add)(x$$58, acc$$7.FreeTycons), acc$$7.FreeTraitSolutions, acc$$7.FreeTypars);
  }
}

function accFreeTycon(opts$$1, tcr$$19, acc$$8) {
  if (!opts$$1.includeLocalTycons) {
    return acc$$8;
  } else if ((0, _tast.EntityRef$$get_IsLocalRef)(tcr$$19)) {
    return accFreeLocalTycon(opts$$1, (0, _tast.EntityRef$$get_PrivateTarget)(tcr$$19), acc$$8);
  } else {
    return acc$$8;
  }
}

function boundTypars(opts$$2, tps$$21, acc$$9) {
  const acc$$11 = (0, _List.foldBack)(function (tp$$16, acc$$10) {
    return accFreeInTyparConstraints(opts$$2, (0, _tast.Typar$$get_Constraints)(tp$$16), acc$$10);
  }, tps$$21, acc$$9);
  return (0, _List.foldBack)(function (tp$$17, acc$$12) {
    return new _tast.FreeTyvars(acc$$12.FreeTycons, acc$$12.FreeTraitSolutions, (0, _zset.ZsetModule$$$remove)(tp$$17, acc$$12.FreeTypars));
  }, tps$$21, acc$$11);
}

function accFreeInTyparConstraints(opts$$3, cxs, acc$$13) {
  return (0, _List.foldBack)(function (tpc, acc$$14) {
    return accFreeInTyparConstraint(opts$$3, tpc, acc$$14);
  }, cxs, acc$$13);
}

function accFreeInTyparConstraint(opts$$4, tpc$$1, acc$$15) {
  var $target$$122;

  switch (tpc$$1.tag) {
    case 3:
      $target$$122 = 1;
      break;

    case 1:
      $target$$122 = 2;
      break;

    case 6:
      $target$$122 = 3;
      break;

    case 8:
      $target$$122 = 4;
      break;

    case 11:
      $target$$122 = 5;
      break;

    case 9:
    case 10:
    case 2:
    case 4:
    case 5:
    case 12:
    case 7:
      $target$$122 = 6;
      break;

    default:
      $target$$122 = 0;
  }

  switch ($target$$122) {
    case 0:
      {
        const ty$$147 = tpc$$1.fields[0];
        return accFreeInType(opts$$4, ty$$147, acc$$15);
      }

    case 1:
      {
        const traitInfo$$1 = tpc$$1.fields[0];
        return accFreeInTrait(opts$$4, traitInfo$$1, acc$$15);
      }

    case 2:
      {
        const rty$$22 = tpc$$1.fields[1];
        return accFreeInType(opts$$4, rty$$22, acc$$15);
      }

    case 3:
      {
        const tys$$8 = tpc$$1.fields[0];
        return accFreeInTypes(opts$$4, tys$$8, acc$$15);
      }

    case 4:
      {
        const uty$$1 = tpc$$1.fields[0];
        return accFreeInType(opts$$4, uty$$1, acc$$15);
      }

    case 5:
      {
        const bty = tpc$$1.fields[1];
        const aty = tpc$$1.fields[0];
        return accFreeInType(opts$$4, aty, accFreeInType(opts$$4, bty, acc$$15));
      }

    case 6:
      {
        return acc$$15;
      }
  }
}

function accFreeInTrait(opts$$5, _arg1$$67, acc$$16) {
  const tys$$9 = _arg1$$67.fields[0];
  const sln$$2 = _arg1$$67.fields[5];
  const rty$$23 = _arg1$$67.fields[4];
  const argtys$$4 = _arg1$$67.fields[3];
  return (0, _Seq.foldBack)(function (sln$$3, acc$$17) {
    return accFreeInTraitSln(opts$$5, sln$$3, acc$$17);
  }, (0, _Option.defaultArg)(sln$$2.contents, [], function ($x$$17) {
    return [$x$$17];
  }), accFreeInTypes(opts$$5, tys$$9, accFreeInTypes(opts$$5, argtys$$4, (0, _Seq.foldBack)(function (arg10$0040$$62, arg20$0040$$8) {
    return accFreeInType(opts$$5, arg10$0040$$62, arg20$0040$$8);
  }, (0, _Option.defaultArg)(rty$$23, [], function ($x$$16) {
    return [$x$$16];
  }), acc$$16))));
}

function accFreeInTraitSln(opts$$6, sln$$4, acc$$18) {
  switch (sln$$4.tag) {
    case 0:
      {
        const vref$$5 = sln$$4.fields[1];
        const ty$$149 = sln$$4.fields[0];
        const minst$$3 = sln$$4.fields[2];
        return accFreeInType(opts$$6, ty$$149, accFreeValRefInTraitSln(opts$$6, vref$$5, accFreeInTypes(opts$$6, minst$$3, acc$$18)));
      }

    case 1:
      {
        const tinst$$31 = sln$$4.fields[0];
        const _rfref = sln$$4.fields[1];
        const _isSet = sln$$4.fields[2];
        return accFreeInTypes(opts$$6, tinst$$31, acc$$18);
      }

    case 4:
      {
        return acc$$18;
      }

    case 3:
      {
        return acc$$18;
      }

    default:
      {
        const ty$$148 = sln$$4.fields[0];
        const minst$$2 = sln$$4.fields[3];
        return accFreeInType(opts$$6, ty$$148, accFreeInTypes(opts$$6, minst$$2, acc$$18));
      }
  }
}

function accFreeLocalValInTraitSln(_opts, v$$57, fvs) {
  if ((0, _zset.ZsetModule$$$contains)(v$$57, fvs.FreeTraitSolutions)) {
    return fvs;
  } else {
    return new _tast.FreeTyvars(fvs.FreeTycons, (0, _zset.ZsetModule$$$add)(v$$57, fvs.FreeTraitSolutions), fvs.FreeTypars);
  }
}

function accFreeValRefInTraitSln(opts$$7, vref$$6, fvs$$1) {
  if ((0, _tast.ValRef$$get_IsLocalRef)(vref$$6)) {
    return accFreeLocalValInTraitSln(opts$$7, (0, _tast.ValRef$$get_PrivateTarget)(vref$$6), fvs$$1);
  } else {
    return fvs$$1;
  }
}

function accFreeTyparRef(opts$$8, tp$$18, acc$$19) {
  if (!opts$$8.includeTypars) {
    return acc$$19;
  } else if ((0, _zset.ZsetModule$$$contains)(tp$$18, acc$$19.FreeTypars)) {
    return acc$$19;
  } else {
    return accFreeInTyparConstraints(opts$$8, (0, _tast.Typar$$get_Constraints)(tp$$18), new _tast.FreeTyvars(acc$$19.FreeTycons, acc$$19.FreeTraitSolutions, (0, _zset.ZsetModule$$$add)(tp$$18, acc$$19.FreeTypars)));
  }
}

function accFreeInType(opts$$9, ty$$150, acc$$20) {
  accFreeInType: while (true) {
    const matchValue$$62 = (0, _tast.stripTyparEqns)(ty$$150);

    switch (matchValue$$62.tag) {
      case 1:
        {
          const tinst$$32 = matchValue$$62.fields[1];
          const tc$$2 = matchValue$$62.fields[0];
          const acc$$21 = accFreeTycon(opts$$9, tc$$2, acc$$20);

          if (tinst$$32.tail != null) {
            if (tinst$$32.tail.tail == null) {
              opts$$9 = opts$$9;
              ty$$150 = tinst$$32.head;
              acc$$20 = acc$$21;
              continue accFreeInType;
            } else {
              return accFreeInTypes(opts$$9, tinst$$32, acc$$21);
            }
          } else {
            return acc$$21;
          }
        }

      case 4:
        {
          const tinst$$33 = matchValue$$62.fields[1];
          const tc$$3 = matchValue$$62.fields[0].fields[0];
          return accFreeInTypes(opts$$9, tinst$$33, accFreeTycon(opts$$9, tc$$3, acc$$20));
        }

      case 3:
        {
          const r$$12 = matchValue$$62.fields[1];
          const d$$8 = matchValue$$62.fields[0];
          const $var$$123 = opts$$9;
          ty$$150 = d$$8;
          acc$$20 = accFreeInType(opts$$9, r$$12, acc$$20);
          opts$$9 = $var$$123;
          continue accFreeInType;
        }

      case 5:
        {
          const r$$13 = matchValue$$62.fields[0];
          return accFreeTyparRef(opts$$9, r$$13, acc$$20);
        }

      case 0:
        {
          const tps$$22 = matchValue$$62.fields[0];
          const r$$14 = matchValue$$62.fields[1];
          return unionFreeTyvars(boundTypars(opts$$9, tps$$22, freeInType(opts$$9, r$$14)), acc$$20);
        }

      case 6:
        {
          const unt$$25 = matchValue$$62.fields[0];
          return accFreeInMeasure(opts$$9, unt$$25, acc$$20);
        }

      default:
        {
          const tupInfo$$17 = matchValue$$62.fields[0];
          const l$$22 = matchValue$$62.fields[1];
          return accFreeInTypes(opts$$9, l$$22, accFreeInTupInfo(opts$$9, tupInfo$$17, acc$$20));
        }
    }
  }
}

function accFreeInTupInfo(_opts$$1, unt$$26, acc$$22) {
  return acc$$22;
}

function accFreeInMeasure(opts$$10, unt$$27, acc$$23) {
  return (0, _List.foldBack)(function (tupledArg$$11, acc$$24) {
    return accFreeTyparRef(opts$$10, tupledArg$$11[0], acc$$24);
  }, ListMeasureVarOccsWithNonZeroExponents(unt$$27), acc$$23);
}

function accFreeInTypes(opts$$11, tys$$10, acc$$25) {
  accFreeInTypes: while (true) {
    if (tys$$10.tail != null) {
      const t$$7 = tys$$10.tail;
      const h$$3 = tys$$10.head;
      const $var$$124 = opts$$11;
      tys$$10 = t$$7;
      acc$$25 = accFreeInType(opts$$11, h$$3, acc$$25);
      opts$$11 = $var$$124;
      continue accFreeInTypes;
    } else {
      return acc$$25;
    }
  }
}

function freeInType(opts$$12, ty$$151) {
  return accFreeInType(opts$$12, ty$$151, emptyFreeTyvars);
}

function accFreeInVal(opts$$13, v$$58, acc$$26) {
  return accFreeInType(opts$$13, v$$58.val_type, acc$$26);
}

function freeInTypes(opts$$14, tys$$11) {
  return accFreeInTypes(opts$$14, tys$$11, emptyFreeTyvars);
}

function freeInVal(opts$$15, v$$59) {
  return accFreeInVal(opts$$15, v$$59, emptyFreeTyvars);
}

function freeInTyparConstraints(opts$$16, v$$60) {
  return accFreeInTyparConstraints(opts$$16, v$$60, emptyFreeTyvars);
}

function accFreeInTypars(opts$$17, tps$$23, acc$$27) {
  return (0, _List.foldBack)(function (tp$$20, acc$$28) {
    return accFreeTyparRef(opts$$17, tp$$20, acc$$28);
  }, tps$$23, acc$$27);
}

function addFreeInModuleTy(mtyp, acc$$29) {
  return (0, _QueueList.QueueListModule$$$foldBack)(function ($arg$$18, arg20$0040$$9) {
    return accFreeInType(CollectAllNoCaching, (0, _tast.typeOfVal)($arg$$18), arg20$0040$$9);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mtyp), (0, _QueueList.QueueListModule$$$foldBack)(function (mspec, acc$$30) {
    return addFreeInModuleTy((0, _tast.Entity$$get_ModuleOrNamespaceType)(mspec), acc$$30);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mtyp), acc$$29));
}

function freeInModuleTy(mtyp$$1) {
  return addFreeInModuleTy(mtyp$$1, emptyFreeTyvars);
}

function emptyFreeTyparsLeftToRight() {
  return (0, _Types.L)();
}

function unionFreeTyparsLeftToRight(fvs1$$1, fvs2$$1) {
  return (0, _lib.ListSet$$$unionFavourRight)(_tast.typarEq, fvs1$$1, fvs2$$1);
}

function boundTyparsLeftToRight(g$$155, cxFlag, thruFlag, acc$$31, tps$$24) {
  return (0, _List.fold)(function (acc$$32, tp$$21) {
    return accFreeInTyparConstraintsLeftToRight(g$$155, cxFlag, thruFlag, acc$$32, (0, _tast.Typar$$get_Constraints)(tp$$21));
  }, tps$$24, acc$$31);
}

function accFreeInTyparConstraintsLeftToRight(g$$156, cxFlag$$1, thruFlag$$1, acc$$33, cxs$$1) {
  return (0, _List.fold)(function (acc$$34, tpc$$2) {
    return accFreeInTyparConstraintLeftToRight(g$$156, cxFlag$$1, thruFlag$$1, acc$$34, tpc$$2);
  }, acc$$33, cxs$$1);
}

function accFreeInTyparConstraintLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, tpc$$3) {
  var $target$$125;

  switch (tpc$$3.tag) {
    case 3:
      $target$$125 = 1;
      break;

    case 1:
      $target$$125 = 2;
      break;

    case 6:
      $target$$125 = 3;
      break;

    case 8:
      $target$$125 = 4;
      break;

    case 11:
      $target$$125 = 5;
      break;

    case 9:
    case 10:
    case 2:
    case 4:
    case 12:
    case 5:
    case 7:
      $target$$125 = 6;
      break;

    default:
      $target$$125 = 0;
  }

  switch ($target$$125) {
    case 0:
      {
        const ty$$152 = tpc$$3.fields[0];
        return accFreeInTypeLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, ty$$152);
      }

    case 1:
      {
        const traitInfo$$2 = tpc$$3.fields[0];
        return accFreeInTraitLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, traitInfo$$2);
      }

    case 2:
      {
        const rty$$24 = tpc$$3.fields[1];
        return accFreeInTypeLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, rty$$24);
      }

    case 3:
      {
        const tys$$12 = tpc$$3.fields[0];
        return accFreeInTypesLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, tys$$12);
      }

    case 4:
      {
        const uty$$2 = tpc$$3.fields[0];
        return accFreeInTypeLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, uty$$2);
      }

    case 5:
      {
        const bty$$1 = tpc$$3.fields[1];
        const aty$$1 = tpc$$3.fields[0];
        return accFreeInTypeLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, accFreeInTypeLeftToRight(g$$157, cxFlag$$2, thruFlag$$2, acc$$35, aty$$1), bty$$1);
      }

    case 6:
      {
        return acc$$35;
      }
  }
}

function accFreeInTraitLeftToRight(g$$158, cxFlag$$3, thruFlag$$3, acc$$36, _arg1$$69) {
  const tys$$13 = _arg1$$69.fields[0];
  const rty$$25 = _arg1$$69.fields[4];
  const argtys$$5 = _arg1$$69.fields[3];
  const acc$$37 = accFreeInTypesLeftToRight(g$$158, cxFlag$$3, thruFlag$$3, acc$$36, tys$$13);
  const acc$$38 = accFreeInTypesLeftToRight(g$$158, cxFlag$$3, thruFlag$$3, acc$$37, argtys$$5);
  const acc$$40 = (0, _Seq.fold)(function (acc$$39, ty$$153) {
    return accFreeInTypeLeftToRight(g$$158, cxFlag$$3, thruFlag$$3, acc$$39, ty$$153);
  }, acc$$38, (0, _Option.defaultArg)(rty$$25, [], function ($x$$19) {
    return [$x$$19];
  }));
  return acc$$40;
}

function accFreeTyparRefLeftToRight(g$$159, cxFlag$$4, thruFlag$$4, acc$$41, tp$$22) {
  if ((0, _List.exists)(function f$$1(lv1$$4) {
    return function (lv2$$5) {
      return (0, _tast.typarEq)(lv1$$4, lv2$$5);
    };
  }(tp$$22), acc$$41)) {
    return acc$$41;
  } else {
    const acc$$42 = (0, _lib.ListSet$$$insert)(_tast.typarEq, tp$$22, acc$$41);

    if (cxFlag$$4) {
      return accFreeInTyparConstraintsLeftToRight(g$$159, cxFlag$$4, thruFlag$$4, acc$$42, (0, _tast.Typar$$get_Constraints)(tp$$22));
    } else {
      return acc$$42;
    }
  }
}

function accFreeInTypeLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$43, ty$$154) {
  accFreeInTypeLeftToRight: while (true) {
    if (_lib.verbose) {
      (0, _ildiag.dprintf)((0, _String.printf)("--> accFreeInTypeLeftToRight \n"));
    }

    const matchValue$$63 = thruFlag$$5 ? stripTyEqns(g$$160, ty$$154) : (0, _tast.stripTyparEqns)(ty$$154);

    switch (matchValue$$63.tag) {
      case 1:
        {
          const tinst$$34 = matchValue$$63.fields[1];
          return accFreeInTypesLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$43, tinst$$34);
        }

      case 4:
        {
          const tinst$$35 = matchValue$$63.fields[1];
          return accFreeInTypesLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$43, tinst$$35);
        }

      case 3:
        {
          const r$$15 = matchValue$$63.fields[1];
          const d$$9 = matchValue$$63.fields[0];
          const $var$$126 = g$$160;
          const $var$$127 = cxFlag$$5;
          const $var$$128 = thruFlag$$5;
          acc$$43 = accFreeInTypeLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$43, d$$9);
          ty$$154 = r$$15;
          cxFlag$$5 = $var$$127;
          g$$160 = $var$$126;
          thruFlag$$5 = $var$$128;
          continue accFreeInTypeLeftToRight;
        }

      case 5:
        {
          const r$$16 = matchValue$$63.fields[0];
          return accFreeTyparRefLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$43, r$$16);
        }

      case 0:
        {
          const tps$$25 = matchValue$$63.fields[0];
          const r$$17 = matchValue$$63.fields[1];
          return unionFreeTyparsLeftToRight(boundTyparsLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, tps$$25, accFreeInTypeLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, emptyFreeTyparsLeftToRight(), r$$17)), acc$$43);
        }

      case 6:
        {
          const unt$$28 = matchValue$$63.fields[0];
          return (0, _List.foldBack)(function (tupledArg$$12, acc$$45) {
            return accFreeTyparRefLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$45, tupledArg$$12[0]);
          }, ListMeasureVarOccsWithNonZeroExponents(unt$$28), acc$$43);
        }

      default:
        {
          const tupInfo$$18 = matchValue$$63.fields[0];
          const l$$24 = matchValue$$63.fields[1];
          const acc$$44 = accFreeInTupInfoLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$43, tupInfo$$18);
          return accFreeInTypesLeftToRight(g$$160, cxFlag$$5, thruFlag$$5, acc$$44, l$$24);
        }
    }
  }
}

function accFreeInTupInfoLeftToRight(_g, _cxFlag, _thruFlag, acc$$46, unt$$29) {
  return acc$$46;
}

function accFreeInTypesLeftToRight(g$$161, cxFlag$$6, thruFlag$$6, acc$$47, tys$$14) {
  accFreeInTypesLeftToRight: while (true) {
    if (tys$$14.tail != null) {
      const t$$8 = tys$$14.tail;
      const h$$4 = tys$$14.head;
      const $var$$129 = g$$161;
      const $var$$130 = cxFlag$$6;
      const $var$$131 = thruFlag$$6;
      acc$$47 = accFreeInTypeLeftToRight(g$$161, cxFlag$$6, thruFlag$$6, acc$$47, h$$4);
      tys$$14 = t$$8;
      cxFlag$$6 = $var$$130;
      g$$161 = $var$$129;
      thruFlag$$6 = $var$$131;
      continue accFreeInTypesLeftToRight;
    } else {
      return acc$$47;
    }
  }
}

function freeInTypeLeftToRight(g$$162, thruFlag$$7, ty$$155) {
  return (0, _List.reverse)(accFreeInTypeLeftToRight(g$$162, true, thruFlag$$7, emptyFreeTyparsLeftToRight(), ty$$155));
}

function freeInTypesLeftToRight(g$$163, thruFlag$$8, ty$$156) {
  return (0, _List.reverse)(accFreeInTypesLeftToRight(g$$163, true, thruFlag$$8, emptyFreeTyparsLeftToRight(), ty$$156));
}

function freeInTypesLeftToRightSkippingConstraints(g$$164, ty$$157) {
  return (0, _List.reverse)(accFreeInTypesLeftToRight(g$$164, false, true, emptyFreeTyparsLeftToRight(), ty$$157));
}

function valOfBind(b$$17) {
  return (0, _tast.Binding$$get_Var)(b$$17);
}

function valsOfBinds(binds$$3) {
  return (0, _List.map)(function mapping$$2(b$$18) {
    return (0, _tast.Binding$$get_Var)(b$$18);
  }, binds$$3);
}

function GetMemberTypeInFSharpForm(g$$165, memberFlags, arities, ty$$158, m$$108) {
  const patternInput$$21 = GetTopValTypeInFSharpForm(g$$165, arities, ty$$158, m$$108);
  let argInfos$$3;

  if (memberFlags.IsInstance) {
    if (patternInput$$21[1].tail != null) {
      const t$$9 = patternInput$$21[1].tail;
      argInfos$$3 = t$$9;
    } else {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("value does not have a valid member type", m$$108));
      argInfos$$3 = patternInput$$21[1];
    }
  } else {
    argInfos$$3 = patternInput$$21[1];
  }

  return [patternInput$$21[0], argInfos$$3, patternInput$$21[2], patternInput$$21[3]];
}

function checkMemberVal(membInfo$$2, arity, m$$109) {
  const matchValue$$64 = [membInfo$$2, arity];

  if (matchValue$$64[0] != null) {
    if (matchValue$$64[1] != null) {
      const arity$$1 = (0, _Option.value)(matchValue$$64[1]);
      const membInfo$$3 = (0, _Option.value)(matchValue$$64[0]);
      return [membInfo$$3, arity$$1];
    } else {
      return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("checkMemberVal - no arity", m$$109));
    }
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("checkMemberVal - no membInfo", m$$109));
  }
}

function checkMemberValRef(vref$$7) {
  return checkMemberVal((0, _tast.ValRef$$get_MemberInfo)(vref$$7), (0, _tast.ValRef$$get_ValReprInfo)(vref$$7), (0, _tast.ValRef$$get_Range)(vref$$7));
}

function GetTopValTypeInCompiledForm(g$$166, topValInfo$$1, ty$$159, m$$110) {
  const patternInput$$22 = GetTopValTypeInFSharpForm(g$$166, topValInfo$$1, ty$$159, m$$110);
  let paramArgInfos$$1;
  const matchValue$$65 = [patternInput$$22[1], (0, _tast.ValReprInfo$$get_ArgInfos)(topValInfo$$1)];

  var $target$$132, _argType, _argType$$1, _objArg, objInfo;

  if (matchValue$$65[0].tail != null) {
    if (matchValue$$65[0].head.tail != null) {
      if (matchValue$$65[0].head.tail.tail == null) {
        if (matchValue$$65[0].tail.tail != null) {
          if (matchValue$$65[0].tail.head.tail != null) {
            if (matchValue$$65[0].tail.head.tail.tail == null) {
              if (matchValue$$65[0].tail.tail.tail == null) {
                if (matchValue$$65[1].tail != null) {
                  if (matchValue$$65[1].head.tail != null) {
                    if (matchValue$$65[1].head.tail.tail == null) {
                      if (matchValue$$65[1].tail.tail != null) {
                        if (matchValue$$65[1].tail.head.tail == null) {
                          if (matchValue$$65[1].tail.tail.tail == null) {
                            $target$$132 = 1;
                            _argType$$1 = matchValue$$65[0].tail.head.head[0];
                            _objArg = matchValue$$65[1].head.head;
                            objInfo = matchValue$$65[0].head;
                          } else {
                            $target$$132 = 2;
                          }
                        } else {
                          $target$$132 = 2;
                        }
                      } else {
                        $target$$132 = 2;
                      }
                    } else {
                      $target$$132 = 2;
                    }
                  } else {
                    $target$$132 = 2;
                  }
                } else {
                  $target$$132 = 2;
                }
              } else {
                $target$$132 = 2;
              }
            } else {
              $target$$132 = 2;
            }
          } else {
            $target$$132 = 2;
          }
        } else if (matchValue$$65[1].tail != null) {
          if (matchValue$$65[1].head.tail == null) {
            if (matchValue$$65[1].tail.tail == null) {
              $target$$132 = 0;
              _argType = matchValue$$65[0].head.head[0];
            } else {
              $target$$132 = 2;
            }
          } else {
            $target$$132 = 2;
          }
        } else {
          $target$$132 = 2;
        }
      } else if (matchValue$$65[0].tail.tail != null) {
        if (matchValue$$65[0].tail.head.tail != null) {
          if (matchValue$$65[0].tail.head.tail.tail == null) {
            if (matchValue$$65[0].tail.tail.tail == null) {
              if (matchValue$$65[1].tail != null) {
                if (matchValue$$65[1].head.tail != null) {
                  if (matchValue$$65[1].head.tail.tail == null) {
                    if (matchValue$$65[1].tail.tail != null) {
                      if (matchValue$$65[1].tail.head.tail == null) {
                        if (matchValue$$65[1].tail.tail.tail == null) {
                          $target$$132 = 1;
                          _argType$$1 = matchValue$$65[0].tail.head.head[0];
                          _objArg = matchValue$$65[1].head.head;
                          objInfo = matchValue$$65[0].head;
                        } else {
                          $target$$132 = 2;
                        }
                      } else {
                        $target$$132 = 2;
                      }
                    } else {
                      $target$$132 = 2;
                    }
                  } else {
                    $target$$132 = 2;
                  }
                } else {
                  $target$$132 = 2;
                }
              } else {
                $target$$132 = 2;
              }
            } else {
              $target$$132 = 2;
            }
          } else {
            $target$$132 = 2;
          }
        } else {
          $target$$132 = 2;
        }
      } else {
        $target$$132 = 2;
      }
    } else if (matchValue$$65[0].tail.tail != null) {
      if (matchValue$$65[0].tail.head.tail != null) {
        if (matchValue$$65[0].tail.head.tail.tail == null) {
          if (matchValue$$65[0].tail.tail.tail == null) {
            if (matchValue$$65[1].tail != null) {
              if (matchValue$$65[1].head.tail != null) {
                if (matchValue$$65[1].head.tail.tail == null) {
                  if (matchValue$$65[1].tail.tail != null) {
                    if (matchValue$$65[1].tail.head.tail == null) {
                      if (matchValue$$65[1].tail.tail.tail == null) {
                        $target$$132 = 1;
                        _argType$$1 = matchValue$$65[0].tail.head.head[0];
                        _objArg = matchValue$$65[1].head.head;
                        objInfo = matchValue$$65[0].head;
                      } else {
                        $target$$132 = 2;
                      }
                    } else {
                      $target$$132 = 2;
                    }
                  } else {
                    $target$$132 = 2;
                  }
                } else {
                  $target$$132 = 2;
                }
              } else {
                $target$$132 = 2;
              }
            } else {
              $target$$132 = 2;
            }
          } else {
            $target$$132 = 2;
          }
        } else {
          $target$$132 = 2;
        }
      } else {
        $target$$132 = 2;
      }
    } else {
      $target$$132 = 2;
    }
  } else {
    $target$$132 = 2;
  }

  switch ($target$$132) {
    case 0:
      {
        paramArgInfos$$1 = (0, _Types.L)((0, _Types.L)(), (0, _Types.L)());
        break;
      }

    case 1:
      {
        paramArgInfos$$1 = (0, _Types.L)(objInfo, (0, _Types.L)((0, _Types.L)(), (0, _Types.L)()));
        break;
      }

    case 2:
      {
        paramArgInfos$$1 = patternInput$$22[1];
        break;
      }
  }

  const rty$$28 = isUnitTy(g$$166, patternInput$$22[2]) ? null : patternInput$$22[2];
  return [patternInput$$22[0], paramArgInfos$$1, rty$$28, patternInput$$22[3]];
}

function GetMemberTypeInMemberForm(g$$167, memberFlags$$1, topValInfo$$2, ty$$160, m$$111) {
  const patternInput$$23 = GetMemberTypeInFSharpForm(g$$167, memberFlags$$1, topValInfo$$2, ty$$160, m$$111);
  let paramArgInfos$$3;
  const matchValue$$66 = [patternInput$$23[1], (0, _tast.ValReprInfo$$get_ArgInfos)(topValInfo$$2)];

  var $target$$133, argType, _objArg$$1, argType$$1;

  if (matchValue$$66[0].tail != null) {
    if (matchValue$$66[0].head.tail != null) {
      if (matchValue$$66[0].head.tail.tail == null) {
        if (matchValue$$66[0].tail.tail == null) {
          if (matchValue$$66[1].tail != null) {
            if (matchValue$$66[1].head.tail != null) {
              if (matchValue$$66[1].head.tail.tail == null) {
                if (matchValue$$66[1].tail.tail != null) {
                  if (matchValue$$66[1].tail.head.tail == null) {
                    if (matchValue$$66[1].tail.tail.tail == null) {
                      $target$$133 = 1;
                      _objArg$$1 = matchValue$$66[1].head.head;
                      argType$$1 = matchValue$$66[0].head.head[0];
                    } else {
                      $target$$133 = 2;
                    }
                  } else {
                    $target$$133 = 2;
                  }
                } else {
                  $target$$133 = 2;
                }
              } else {
                $target$$133 = 2;
              }
            } else if (matchValue$$66[1].tail.tail == null) {
              $target$$133 = 0;
              argType = matchValue$$66[0].head.head[0];
            } else {
              $target$$133 = 2;
            }
          } else {
            $target$$133 = 2;
          }
        } else {
          $target$$133 = 2;
        }
      } else {
        $target$$133 = 2;
      }
    } else {
      $target$$133 = 2;
    }
  } else {
    $target$$133 = 2;
  }

  switch ($target$$133) {
    case 0:
      {
        paramArgInfos$$3 = (0, _Types.L)((0, _Types.L)(), (0, _Types.L)());
        break;
      }

    case 1:
      {
        paramArgInfos$$3 = (0, _Types.L)((0, _Types.L)(), (0, _Types.L)());
        break;
      }

    case 2:
      {
        paramArgInfos$$3 = patternInput$$23[1];
        break;
      }
  }

  const rty$$30 = isUnitTy(g$$167, patternInput$$23[2]) ? null : patternInput$$23[2];
  return [patternInput$$23[0], paramArgInfos$$3, rty$$30, patternInput$$23[3]];
}

function GetTypeOfMemberInMemberForm(g$$168, vref$$8) {
  const patternInput$$24 = checkMemberValRef(vref$$8);
  return GetMemberTypeInMemberForm(g$$168, patternInput$$24[0].MemberFlags, patternInput$$24[1], (0, _tast.ValRef$$get_Type)(vref$$8), (0, _tast.ValRef$$get_Range)(vref$$8));
}

function GetTypeOfMemberInFSharpForm(g$$169, vref$$9) {
  const patternInput$$25 = checkMemberValRef(vref$$9);
  return GetMemberTypeInFSharpForm(g$$169, patternInput$$25[0].MemberFlags, patternInput$$25[1], (0, _tast.ValRef$$get_Type)(vref$$9), (0, _tast.ValRef$$get_Range)(vref$$9));
}

function PartitionValTyparsForApparentEnclosingType(g$$170, v$$62) {
  const matchValue$$67 = (0, _tast.Val$$get_ValReprInfo)(v$$62);

  if (matchValue$$67 != null) {
    const arities$$1 = matchValue$$67;
    const patternInput$$26 = destTopForallTy(g$$170, arities$$1, (0, _tast.Val$$get_Type)(v$$62));
    const parent = (0, _tast.Val$$get_MemberApparentEntity)(v$$62);
    const parentTypars = (0, _tast.EntityRef$$get_TyparsNoRange)(parent);
    const nparentTypars = (0, _List.length)(parentTypars) | 0;

    if (nparentTypars <= (0, _List.length)(patternInput$$26[0])) {
      const patternInput$$27 = (0, _List.splitAt)(nparentTypars, patternInput$$26[0]);
      const patternInput$$28 = mkTyparToTyparRenaming(patternInput$$27[0], parentTypars);
      return [parentTypars, patternInput$$27[0], patternInput$$27[1], patternInput$$28[0], patternInput$$28[1]];
    } else {
      return null;
    }
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("PartitionValTypars: not a top value", (0, _tast.Val$$get_Range)(v$$62)));
  }
}

function PartitionValTypars(g$$171, v$$63) {
  const matchValue$$68 = (0, _tast.Val$$get_ValReprInfo)(v$$63);

  if (matchValue$$68 != null) {
    const arities$$2 = matchValue$$68;

    if ((0, _tast.Val$$get_IsExtensionMember)(v$$63)) {
      const patternInput$$29 = destTopForallTy(g$$171, arities$$2, (0, _tast.Val$$get_Type)(v$$63));
      return [(0, _Types.L)(), (0, _Types.L)(), patternInput$$29[0], emptyTyparInst, (0, _Types.L)()];
    } else {
      return PartitionValTyparsForApparentEnclosingType(g$$171, v$$63);
    }
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("PartitionValTypars: not a top value", (0, _tast.Val$$get_Range)(v$$63)));
  }
}

function PartitionValRefTypars(g$$172, vref$$10) {
  return PartitionValTypars(g$$172, (0, _tast.ValRef$$get_Deref)(vref$$10));
}

function ArgInfosOfMemberVal(g$$173, v$$64) {
  const patternInput$$30 = checkMemberVal((0, _tast.Val$$get_MemberInfo)(v$$64), (0, _tast.Val$$get_ValReprInfo)(v$$64), (0, _tast.Val$$get_Range)(v$$64));
  const patternInput$$31 = GetMemberTypeInMemberForm(g$$173, patternInput$$30[0].MemberFlags, patternInput$$30[1], (0, _tast.Val$$get_Type)(v$$64), (0, _tast.Val$$get_Range)(v$$64));
  return patternInput$$31[1];
}

function ArgInfosOfMember(g$$174, vref$$11) {
  return ArgInfosOfMemberVal(g$$174, (0, _tast.ValRef$$get_Deref)(vref$$11));
}

function GetFSharpViewOfReturnType(g$$175, retTy) {
  if (retTy != null) {
    const retTy$$1 = retTy;
    return retTy$$1;
  } else {
    return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$175);
  }
}

function ReturnTypeOfPropertyVal(g$$176, v$$65) {
  const patternInput$$32 = checkMemberVal((0, _tast.Val$$get_MemberInfo)(v$$65), (0, _tast.Val$$get_ValReprInfo)(v$$65), (0, _tast.Val$$get_Range)(v$$65));

  if (patternInput$$32[0].MemberFlags.MemberKind.tag === 4) {
    const patternInput$$33 = GetMemberTypeInMemberForm(g$$176, patternInput$$32[0].MemberFlags, patternInput$$32[1], (0, _tast.Val$$get_Type)(v$$65), (0, _tast.Val$$get_Range)(v$$65));

    if (!(patternInput$$33[1].tail == null) ? !((0, _List.head)(patternInput$$33[1]).tail == null) : false) {
      return (0, _List.last)((0, _List.head)(patternInput$$33[1]))[0];
    } else {
      return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastValueDoesNotHaveSetterType)(), (0, _tast.Val$$get_Range)(v$$65)));
    }
  } else if (patternInput$$32[0].MemberFlags.MemberKind.tag === 3) {
    const patternInput$$34 = GetMemberTypeInMemberForm(g$$176, patternInput$$32[0].MemberFlags, patternInput$$32[1], (0, _tast.Val$$get_Type)(v$$65), (0, _tast.Val$$get_Range)(v$$65));
    return GetFSharpViewOfReturnType(g$$176, patternInput$$34[2]);
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("ReturnTypeOfPropertyVal", (0, _tast.Val$$get_Range)(v$$65)));
  }
}

function ArgInfosOfPropertyVal(g$$177, v$$66) {
  const patternInput$$35 = checkMemberVal((0, _tast.Val$$get_MemberInfo)(v$$66), (0, _tast.Val$$get_ValReprInfo)(v$$66), (0, _tast.Val$$get_Range)(v$$66));

  if (patternInput$$35[0].MemberFlags.MemberKind.tag === 3) {
    return (0, _List.concat)(ArgInfosOfMemberVal(g$$177, v$$66));
  } else if (patternInput$$35[0].MemberFlags.MemberKind.tag === 4) {
    const patternInput$$36 = GetMemberTypeInMemberForm(g$$177, patternInput$$35[0].MemberFlags, patternInput$$35[1], (0, _tast.Val$$get_Type)(v$$66), (0, _tast.Val$$get_Range)(v$$66));

    if (!(patternInput$$36[1].tail == null) ? !((0, _List.head)(patternInput$$36[1]).tail == null) : false) {
      return (0, _illib.List$$$frontAndBack)((0, _List.head)(patternInput$$36[1]))[0];
    } else {
      return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastValueDoesNotHaveSetterType)(), (0, _tast.Val$$get_Range)(v$$66)));
    }
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("ArgInfosOfPropertyVal", (0, _tast.Val$$get_Range)(v$$66)));
  }
}

function generalTyconRefInst(tc$$4) {
  return generalizeTypars((0, _tast.EntityRef$$get_TyparsNoRange)(tc$$4));
}

function generalizeTyconRef(tc$$5) {
  const tinst$$37 = generalTyconRefInst(tc$$5);
  return [tinst$$37, new _tast.TType(1, "TType_app", tc$$5, tinst$$37)];
}

function generalizedTyconRef(tc$$6) {
  return new _tast.TType(1, "TType_app", tc$$6, generalTyconRefInst(tc$$6));
}

function isTTyparSupportsStaticMethod(_arg1$$71) {
  if (_arg1$$71.tag === 3) {
    return true;
  } else {
    return false;
  }
}

function isTTyparCoercesToType(_arg1$$72) {
  if (_arg1$$72.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function prefixOfStaticReq(s$$4) {
  if (s$$4.tag === 1) {
    return " ^";
  } else {
    return "'";
  }
}

function prefixOfRigidTypar(typar) {
  if (!(0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(typar), new _tast.TyparRigidity(0, "Rigid"))) {
    return "_";
  } else {
    return "";
  }
}

function PrettyTypes$$$newPrettyTypar(tp$$24, nm$$6) {
  return (0, _tast.NewTypar)((0, _tast.Typar$$get_Kind)(tp$$24), (0, _tast.Typar$$get_Rigidity)(tp$$24), new _ast.SynTypar(0, "Typar", (0, _ast.ident)(nm$$6, (0, _tast.Typar$$get_Range)(tp$$24)), (0, _tast.Typar$$get_StaticReq)(tp$$24), false), false, new _tast.TyparDynamicReq(1, "Yes"), (0, _Types.L)(), false, false);
}

function PrettyTypes$$$NewPrettyTypars(renaming, tps$$29, names) {
  const niceTypars = (0, _List.map2)(PrettyTypes$$$newPrettyTypar, tps$$29, names);
  const patternInput$$37 = mkTyparToTyparRenaming(tps$$29, niceTypars);
  const renaming$$1 = (0, _List.append)(renaming, patternInput$$37[0]);
  (0, _List.iterate2)(function action$$1(tp$$26, tpnice) {
    (0, _tast.Typar$$SetConstraints$$Z10399A1)(tpnice, instTyparConstraints(renaming$$1, (0, _tast.Typar$$get_Constraints)(tp$$26)));
  }, tps$$29, niceTypars);
  return [niceTypars, renaming$$1];
}

function PrettyTypes$$$NeedsPrettyTyparName(tp$$27) {
  if ((0, _tast.Typar$$get_IsCompilerGenerated)(tp$$27) ? (0, _tast.Typar$$get_ILName)(tp$$27) == null : false) {
    return (0, _ast.Ident$$get_idText)(tp$$27.typar_id) === _tast.unassignedTyparName;
  } else {
    return false;
  }
}

function PrettyTypes$$$PrettyTyparNames(pred, alreadyInUse, tps$$30) {
  const choose = function choose(tps$$31, tupledArg$$13, acc$$48) {
    if (tps$$31.tail != null) {
      const tps$$32 = tps$$31.tail;
      const tp$$28 = tps$$31.head;

      const useThisName = function useThisName(tupledArg$$14) {
        return choose(tps$$32, [tupledArg$$14[1], tupledArg$$14[2]], (0, _Types.L)(tupledArg$$14[0], acc$$48));
      };

      const tryAgain = function tryAgain(tupledArg$$15) {
        return choose((0, _Types.L)(tp$$28, tps$$32), [tupledArg$$15[0], tupledArg$$15[1]], acc$$48);
      };

      const tryName = function tryName(tupledArg$$16, f$$2) {
        if ((0, _List.contains)(tupledArg$$16[0], alreadyInUse, {
          Equals($x$$20, $y$$21) {
            return $x$$20 === $y$$21;
          },

          GetHashCode: _Util.structuralHash
        })) {
          return f$$2();
        } else {
          return useThisName([tupledArg$$16[0], tupledArg$$16[1], tupledArg$$16[2]]);
        }
      };

      if (pred(tp$$28)) {
        if (PrettyTypes$$$NeedsPrettyTyparName(tp$$28)) {
          const patternInput$$38 = (0, _tast.Typar$$get_Kind)(tp$$28).tag === 1 ? [tupledArg$$13[0], tupledArg$$13[1] + 1, "u", 6, tupledArg$$13[1]] : [tupledArg$$13[0] + 1, tupledArg$$13[1], "a", 20, tupledArg$$13[0]];
          const nm$$10 = patternInput$$38[4] < patternInput$$38[3] ? (0, _illib.String$$$make)(1, String.fromCharCode(patternInput$$38[2].charCodeAt(0) + patternInput$$38[4])) : (0, _illib.String$$$make)(1, patternInput$$38[2]) + (0, _Util.int32ToString)(patternInput$$38[4] - patternInput$$38[3] + 1);
          return tryName([nm$$10, patternInput$$38[0], patternInput$$38[1]], function () {
            return tryAgain([patternInput$$38[0], patternInput$$38[1]]);
          });
        } else {
          return tryName([(0, _tast.Typar$$get_Name)(tp$$28), tupledArg$$13[0], tupledArg$$13[1]], function () {
            const patternInput$$39 = (0, _tast.Typar$$get_Kind)(tp$$28).tag === 1 ? [tupledArg$$13[0], tupledArg$$13[1] + 1, (0, _tast.Typar$$get_Name)(tp$$28) + (0, _Util.int32ToString)(tupledArg$$13[1])] : [tupledArg$$13[0] + 1, tupledArg$$13[1], (0, _tast.Typar$$get_Name)(tp$$28) + (0, _Util.int32ToString)(tupledArg$$13[0])];
            return tryName([patternInput$$39[2], patternInput$$39[0], patternInput$$39[1]], function () {
              return tryAgain([patternInput$$39[0], patternInput$$39[1]]);
            });
          });
        }
      } else {
        return useThisName([(0, _tast.Typar$$get_Name)(tp$$28), tupledArg$$13[0], tupledArg$$13[1]]);
      }
    } else {
      return (0, _List.reverse)(acc$$48);
    }
  };

  return choose(tps$$30, [0, 0], (0, _Types.L)());
}

function PrettyTypes$$$PrettifyThings(g$$178, foldTys, mapTys, things) {
  const ftps = foldTys(function (acc$$49, ty$$161) {
    return accFreeInTypeLeftToRight(g$$178, true, false, acc$$49, ty$$161);
  }, emptyFreeTyparsLeftToRight(), things);
  const ftps$$1 = (0, _List.reverse)(ftps);

  const computeKeep = function computeKeep(keep, change, tps$$33) {
    computeKeep: while (true) {
      if (tps$$33.tail != null) {
        const tp$$29 = tps$$33.head;
        const rest = tps$$33.tail;

        if (!PrettyTypes$$$NeedsPrettyTyparName(tp$$29) ? !(0, _List.exists)(function predicate$$4(tp2$$5) {
          return (0, _tast.Typar$$get_Name)(tp$$29) === (0, _tast.Typar$$get_Name)(tp2$$5);
        }, keep) : false) {
          keep = (0, _Types.L)(tp$$29, keep);
          change = change;
          tps$$33 = rest;
          continue computeKeep;
        } else {
          keep = keep;
          change = (0, _Types.L)(tp$$29, change);
          tps$$33 = rest;
          continue computeKeep;
        }
      } else {
        return [(0, _List.reverse)(keep), (0, _List.reverse)(change)];
      }
    }
  };

  const patternInput$$40 = computeKeep((0, _Types.L)(), (0, _Types.L)(), ftps$$1);
  const alreadyInUse$$1 = (0, _List.map)(function mapping$$3(x$$60) {
    return (0, _tast.Typar$$get_Name)(x$$60);
  }, patternInput$$40[0]);
  const names$$1 = PrettyTypes$$$PrettyTyparNames(function (x$$61) {
    return (0, _illib.List$$$memq)(x$$61, patternInput$$40[1]);
  }, alreadyInUse$$1, ftps$$1);
  const patternInput$$41 = PrettyTypes$$$NewPrettyTypars((0, _Types.L)(), ftps$$1, names$$1);

  const getTauStayTau = function getTauStayTau(t$$10) {
    if (t$$10.tag === 0) {
      const tau$$9 = t$$10.fields[1];
      return tau$$9;
    } else {
      return t$$10;
    }
  };

  const tauThings = mapTys(getTauStayTau, things);
  const prettyThings = mapTys(function (arg10$0040$$64) {
    return instType(patternInput$$41[1], arg10$0040$$64);
  }, tauThings);
  const tpconstraints = (0, _List.collect)(function mapping$$4(tpnice$$1) {
    return (0, _List.map)(function (tpc$$4) {
      return [tpnice$$1, tpc$$4];
    }, (0, _tast.Typar$$get_Constraints)(tpnice$$1));
  }, patternInput$$41[0]);
  return [prettyThings, tpconstraints];
}

function PrettyTypes$$$PrettifyType(g$$179, x$$62) {
  return PrettyTypes$$$PrettifyThings(g$$179, (0, _Util.uncurry)(3, function (x$$63) {
    return (0, _Util.curry)(2, x$$63);
  }), (0, _Util.uncurry)(2, function (x$$64) {
    return x$$64;
  }), x$$62);
}

function PrettyTypes$$$PrettifyTypePair(g$$180, x_0, x_1) {
  const x$$65 = [x_0, x_1];
  return PrettyTypes$$$PrettifyThings(g$$180, function (f$$3, acc$$50, tupledArg$$17) {
    return (0, _lib.foldPair)(f$$3, f$$3, acc$$50, tupledArg$$17[0], tupledArg$$17[1]);
  }, function (f$$4, tupledArg$$18) {
    return (0, _lib.mapPair)(f$$4, f$$4, tupledArg$$18[0], tupledArg$$18[1]);
  }, x$$65);
}

function PrettyTypes$$$PrettifyTypes(g$$181, x$$66) {
  return PrettyTypes$$$PrettifyThings(g$$181, _List.fold, _List.map, x$$66);
}

function PrettyTypes$$$PrettifyCurriedTypes(g$$182, x$$67) {
  return PrettyTypes$$$PrettifyThings(g$$182, function (f$$5, state$$6, list$$18) {
    return (0, _List.fold)(function folder$$5(state$$5, list$$17) {
      return (0, _List.fold)(f$$5, state$$5, list$$17);
    }, state$$6, list$$18);
  }, _illib.List$$$mapSquared, x$$67);
}

function PrettyTypes$$$PrettifyCurriedSigTypes(g$$183, x_0$$1, x_1$$1) {
  const x$$68 = [x_0$$1, x_1$$1];
  return PrettyTypes$$$PrettifyThings(g$$183, function (f$$7, acc$$51, tupledArg$$19) {
    return (0, _lib.foldPair)(function f1(state$$8, list$$20) {
      return (0, _List.fold)(function folder$$6(state$$7, list$$19) {
        return (0, _List.fold)(f$$7, state$$7, list$$19);
      }, state$$8, list$$20);
    }, f$$7, acc$$51, tupledArg$$19[0], tupledArg$$19[1]);
  }, function (f$$8, tupledArg$$20) {
    return (0, _lib.mapPair)(function f1$$1(xss$$1) {
      return (0, _illib.List$$$mapSquared)(f$$8, xss$$1);
    }, f$$8, tupledArg$$20[0], tupledArg$$20[1]);
  }, x$$68);
}

function PrettyTypes$$$safeDestAnyParTy(orig, g$$184, ty$$162) {
  const matchValue$$73 = tryAnyParTy(g$$184, ty$$162);

  if (matchValue$$73 != null) {
    const x$$69 = matchValue$$73;
    return x$$69;
  } else {
    return orig;
  }
}

function PrettyTypes$$$tee(f$$9, x$$70) {
  return f$$9(x$$70, x$$70);
}

function PrettyTypes$$$foldUnurriedArgInfos(f$$10, z, x$$71) {
  return (0, _List.fold)(function (acc$$52, tupledArg$$21) {
    return (0, _lib.fold1Of2)(f$$10, acc$$52, tupledArg$$21[0], tupledArg$$21[1]);
  }, z, x$$71);
}

function PrettyTypes$$$mapUnurriedArgInfos(f$$11, x$$72) {
  return (0, _List.map)(function (tupledArg$$22) {
    return (0, _lib.map1Of2)(f$$11, tupledArg$$22[0], tupledArg$$22[1]);
  }, x$$72);
}

function PrettyTypes$$$foldTypar(f$$12, z$$1, x$$73) {
  return (0, _illib.foldOn)(_tast.mkTyparTy, f$$12, z$$1, x$$73);
}

function PrettyTypes$$$mapTypar(g$$185, f$$13, x$$74) {
  return PrettyTypes$$$safeDestAnyParTy(x$$74, g$$185, f$$13((0, _tast.mkTyparTy)(x$$74)));
}

function PrettyTypes$$$foldTypars(f$$14, z$$2, x$$75) {
  return (0, _List.fold)(function (z$$3, x$$76) {
    return PrettyTypes$$$foldTypar(f$$14, z$$3, x$$76);
  }, z$$2, x$$75);
}

function PrettyTypes$$$mapTypars(g$$186, f$$15, x$$77) {
  return (0, _List.map)(function (x$$78) {
    return PrettyTypes$$$mapTypar(g$$186, f$$15, x$$78);
  }, x$$77);
}

function PrettyTypes$$$foldTyparInst(f$$16, z$$4, x$$79) {
  return (0, _List.fold)(function (acc$$53, tupledArg$$23) {
    return (0, _lib.foldPair)(function f1$$2(z$$5, x$$80) {
      return PrettyTypes$$$foldTypar(f$$16, z$$5, x$$80);
    }, f$$16, acc$$53, tupledArg$$23[0], tupledArg$$23[1]);
  }, z$$4, x$$79);
}

function PrettyTypes$$$mapTyparInst(g$$187, f$$17, x$$81) {
  return (0, _List.map)(function (tupledArg$$24) {
    return (0, _lib.mapPair)(function f1$$3(x$$82) {
      return PrettyTypes$$$mapTypar(g$$187, f$$17, x$$82);
    }, f$$17, tupledArg$$24[0], tupledArg$$24[1]);
  }, x$$81);
}

function PrettyTypes$$$PrettifyInstAndTyparsAndType(g$$188, x_0$$2, x_1$$2, x_2) {
  const x$$83 = [x_0$$2, x_1$$2, x_2];
  return PrettyTypes$$$PrettifyThings(g$$188, function (f$$18, acc$$54, tupledArg$$25) {
    return (0, _lib.foldTriple)(function f1$$4(z$$6, x$$84) {
      return PrettyTypes$$$foldTyparInst(f$$18, z$$6, x$$84);
    }, function f2(z$$7, x$$85) {
      return PrettyTypes$$$foldTypars(f$$18, z$$7, x$$85);
    }, f$$18, acc$$54, tupledArg$$25[0], tupledArg$$25[1], tupledArg$$25[2]);
  }, function (f$$19, tupledArg$$26) {
    return (0, _lib.mapTriple)(function f1$$5(x$$86) {
      return PrettyTypes$$$mapTyparInst(g$$188, f$$19, x$$86);
    }, function f2$$1(x$$87) {
      return PrettyTypes$$$mapTypars(g$$188, f$$19, x$$87);
    }, f$$19, tupledArg$$26[0], tupledArg$$26[1], tupledArg$$26[2]);
  }, x$$83);
}

function PrettyTypes$$$PrettifyInstAndUncurriedSig(g$$189, x_0$$3, x_1$$3, x_2$$1) {
  const x$$88 = [x_0$$3, x_1$$3, x_2$$1];
  return PrettyTypes$$$PrettifyThings(g$$189, function (f$$20, acc$$55, tupledArg$$27) {
    return (0, _lib.foldTriple)(function f1$$6(z$$8, x$$89) {
      return PrettyTypes$$$foldTyparInst(f$$20, z$$8, x$$89);
    }, function f2$$2(z$$9, x$$90) {
      return PrettyTypes$$$foldUnurriedArgInfos(f$$20, z$$9, x$$90);
    }, f$$20, acc$$55, tupledArg$$27[0], tupledArg$$27[1], tupledArg$$27[2]);
  }, function (f$$21, tupledArg$$29) {
    return (0, _lib.mapTriple)(function f1$$7(x$$91) {
      return PrettyTypes$$$mapTyparInst(g$$189, f$$21, x$$91);
    }, function f2$$3(list$$21) {
      return (0, _List.map)(function mapping$$6(tupledArg$$28) {
        return (0, _lib.map1Of2)(f$$21, tupledArg$$28[0], tupledArg$$28[1]);
      }, list$$21);
    }, f$$21, tupledArg$$29[0], tupledArg$$29[1], tupledArg$$29[2]);
  }, x$$88);
}

function PrettyTypes$$$PrettifyInstAndCurriedSig(g$$190, x_0$$4, x_1$$4, x_2$$2, x_3) {
  const x$$92 = [x_0$$4, x_1$$4, x_2$$2, x_3];
  return PrettyTypes$$$PrettifyThings(g$$190, function (f$$22, acc$$57, tupledArg$$31) {
    return (0, _lib.foldQuadruple)(function f1$$8(z$$10, x$$93) {
      return PrettyTypes$$$foldTyparInst(f$$22, z$$10, x$$93);
    }, function f2$$4(state$$9, list$$22) {
      return (0, _List.fold)(f$$22, state$$9, list$$22);
    }, function f3(state$$11, list$$24) {
      return (0, _List.fold)(function folder$$8(state$$10, list$$23) {
        return (0, _List.fold)(function folder$$7(acc$$56, tupledArg$$30) {
          return (0, _lib.fold1Of2)(f$$22, acc$$56, tupledArg$$30[0], tupledArg$$30[1]);
        }, state$$10, list$$23);
      }, state$$11, list$$24);
    }, f$$22, acc$$57, tupledArg$$31[0], tupledArg$$31[1], tupledArg$$31[2], tupledArg$$31[3]);
  }, function (f$$23, tupledArg$$33) {
    return (0, _lib.mapQuadruple)(function f1$$9(x$$94) {
      return PrettyTypes$$$mapTyparInst(g$$190, f$$23, x$$94);
    }, function f2$$5(list$$25) {
      return (0, _List.map)(f$$23, list$$25);
    }, function f3$$1(xss$$2) {
      return (0, _illib.List$$$mapSquared)(function f$$24(tupledArg$$32) {
        return (0, _lib.map1Of2)(f$$23, tupledArg$$32[0], tupledArg$$32[1]);
      }, xss$$2);
    }, f$$23, tupledArg$$33[0], tupledArg$$33[1], tupledArg$$33[2], tupledArg$$33[3]);
  }, x$$92);
}

function PrettyTypes$$$PrettifyInstAndSig(g$$191, x_0$$5, x_1$$5, x_2$$3) {
  const x$$95 = [x_0$$5, x_1$$5, x_2$$3];
  return PrettyTypes$$$PrettifyThings(g$$191, function (f$$25, acc$$58, tupledArg$$34) {
    return (0, _lib.foldTriple)(function f1$$10(z$$11, x$$96) {
      return PrettyTypes$$$foldTyparInst(f$$25, z$$11, x$$96);
    }, function f2$$6(state$$12, list$$26) {
      return (0, _List.fold)(f$$25, state$$12, list$$26);
    }, f$$25, acc$$58, tupledArg$$34[0], tupledArg$$34[1], tupledArg$$34[2]);
  }, function (f$$26, tupledArg$$35) {
    return (0, _lib.mapTriple)(function f1$$11(x$$97) {
      return PrettyTypes$$$mapTyparInst(g$$191, f$$26, x$$97);
    }, function f2$$7(list$$27) {
      return (0, _List.map)(f$$26, list$$27);
    }, f$$26, tupledArg$$35[0], tupledArg$$35[1], tupledArg$$35[2]);
  }, x$$95);
}

function PrettyTypes$$$PrettifyInstAndTypes(g$$192, x_0$$6, x_1$$6) {
  const x$$98 = [x_0$$6, x_1$$6];
  return PrettyTypes$$$PrettifyThings(g$$192, function (f$$27, acc$$59, tupledArg$$36) {
    return (0, _lib.foldPair)(function f1$$12(z$$12, x$$99) {
      return PrettyTypes$$$foldTyparInst(f$$27, z$$12, x$$99);
    }, function f2$$8(state$$13, list$$28) {
      return (0, _List.fold)(f$$27, state$$13, list$$28);
    }, acc$$59, tupledArg$$36[0], tupledArg$$36[1]);
  }, function (f$$28, tupledArg$$37) {
    return (0, _lib.mapPair)(function f1$$13(x$$100) {
      return PrettyTypes$$$mapTyparInst(g$$192, f$$28, x$$100);
    }, function f2$$9(list$$29) {
      return (0, _List.map)(f$$28, list$$29);
    }, tupledArg$$37[0], tupledArg$$37[1]);
  }, x$$98);
}

function PrettyTypes$$$PrettifyInstAndType(g$$193, x_0$$7, x_1$$7) {
  const x$$101 = [x_0$$7, x_1$$7];
  return PrettyTypes$$$PrettifyThings(g$$193, function (f$$29, acc$$60, tupledArg$$38) {
    return (0, _lib.foldPair)(function f1$$14(z$$13, x$$102) {
      return PrettyTypes$$$foldTyparInst(f$$29, z$$13, x$$102);
    }, f$$29, acc$$60, tupledArg$$38[0], tupledArg$$38[1]);
  }, function (f$$30, tupledArg$$39) {
    return (0, _lib.mapPair)(function f1$$15(x$$103) {
      return PrettyTypes$$$mapTyparInst(g$$193, f$$30, x$$103);
    }, f$$30, tupledArg$$39[0], tupledArg$$39[1]);
  }, x$$101);
}

function PrettyTypes$$$PrettifyInst(g$$194, x$$104) {
  return PrettyTypes$$$PrettifyThings(g$$194, PrettyTypes$$$foldTyparInst, function (f$$32, x$$106) {
    return PrettyTypes$$$mapTyparInst(g$$194, f$$32, x$$106);
  }, x$$104);
}

function SimplifyTypes$$$foldTypeButNotConstraints($arg$$168, $arg$$169, $arg$$170) {
  SimplifyTypes$$$foldTypeButNotConstraints: while (true) {
    const f$$33 = $arg$$168,
          z$$15 = $arg$$169,
          ty$$164 = $arg$$170;
    const ty$$165 = (0, _tast.stripTyparEqns)(ty$$164);
    const z$$16 = f$$33(z$$15, ty$$165);

    switch (ty$$165.tag) {
      case 1:
        {
          const tinst$$38 = ty$$165.fields[1];
          return (0, _List.fold)(function (z$$17, ty$$166) {
            return SimplifyTypes$$$foldTypeButNotConstraints(f$$33, z$$17, ty$$166);
          }, z$$16, tinst$$38);
        }

      case 4:
        {
          const tinst$$39 = ty$$165.fields[1];
          return (0, _List.fold)(function (z$$18, ty$$167) {
            return SimplifyTypes$$$foldTypeButNotConstraints(f$$33, z$$18, ty$$167);
          }, z$$16, tinst$$39);
        }

      case 2:
        {
          const tys$$15 = ty$$165.fields[1];
          return (0, _List.fold)(function (z$$19, ty$$168) {
            return SimplifyTypes$$$foldTypeButNotConstraints(f$$33, z$$19, ty$$168);
          }, z$$16, tys$$15);
        }

      case 3:
        {
          const t$$11 = ty$$165.fields[1];
          const s$$5 = ty$$165.fields[0];
          $arg$$168 = f$$33;
          $arg$$169 = SimplifyTypes$$$foldTypeButNotConstraints(f$$33, z$$16, s$$5);
          $arg$$170 = t$$11;
          continue SimplifyTypes$$$foldTypeButNotConstraints;
        }

      case 5:
        {
          return z$$16;
        }

      case 6:
        {
          return z$$16;
        }

      default:
        {
          const body$$11 = ty$$165.fields[1];
          $arg$$168 = f$$33;
          $arg$$169 = z$$16;
          $arg$$170 = body$$11;
          continue SimplifyTypes$$$foldTypeButNotConstraints;
        }
    }
  }
}

function SimplifyTypes$$$incM(x$$107, m$$112) {
  if ((0, _zmap.ZmapModule$$$mem)(x$$107, m$$112)) {
    return (0, _zmap.ZmapModule$$$add)(x$$107, 1 + (0, _zmap.ZmapModule$$$find)(x$$107, m$$112), m$$112);
  } else {
    return (0, _zmap.ZmapModule$$$add)(x$$107, 1, m$$112);
  }
}

function SimplifyTypes$$$accTyparCounts(z$$20, ty$$169) {
  return SimplifyTypes$$$foldTypeButNotConstraints(function (z$$21, ty$$170) {
    var tp$$32;
    return ty$$170.tag === 5 ? (tp$$32 = ty$$170.fields[0], (0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(tp$$32), new _tast.TyparRigidity(0, "Rigid"))) ? SimplifyTypes$$$incM(ty$$170.fields[0], z$$21) : z$$21 : z$$21;
  }, z$$20, ty$$169);
}

const SimplifyTypes$$$emptyTyparCounts = (0, _zmap.ZmapModule$$$empty)(typarOrder);
exports.SimplifyTypes$$$emptyTyparCounts = SimplifyTypes$$$emptyTyparCounts;

function SimplifyTypes$$$accTyparCountsMulti(acc$$61, l$$26) {
  return (0, _List.fold)(SimplifyTypes$$$accTyparCounts, acc$$61, l$$26);
}

const SimplifyTypes$002ETypeSimplificationInfo = (0, _Types.declare)(function SimplifyTypes$002ETypeSimplificationInfo(arg1, arg2, arg3) {
  this.singletons = arg1;
  this.inplaceConstraints = arg2;
  this.postfixConstraints = arg3;
}, _Types.Record);
exports.SimplifyTypes$002ETypeSimplificationInfo = SimplifyTypes$002ETypeSimplificationInfo;
const SimplifyTypes$$$typeSimplificationInfo0 = new SimplifyTypes$002ETypeSimplificationInfo((0, _zset.ZsetModule$$$empty)(typarOrder), (0, _zmap.ZmapModule$$$empty)(typarOrder), (0, _Types.L)());
exports.SimplifyTypes$$$typeSimplificationInfo0 = SimplifyTypes$$$typeSimplificationInfo0;

function SimplifyTypes$$$categorizeConstraints(simplify, m$$113, cxs$$2) {
  const singletons = simplify ? (0, _zmap.ZmapModule$$$chooseL)(function (tp$$34, n$$9) {
    return n$$9 === 1 ? tp$$34 : null;
  }, m$$113) : (0, _Types.L)();
  const singletons$$1 = (0, _zset.ZsetModule$$$addList)(singletons, (0, _zset.ZsetModule$$$empty)(typarOrder));
  const constraintTypars = freeInTyparConstraints(CollectTyparsNoCaching, (0, _List.map)(function (tuple$$2) {
    return tuple$$2[1];
  }, cxs$$2)).FreeTypars;

  const usedInTypeConstraint = function usedInTypeConstraint(typar$$1) {
    return (0, _zset.ZsetModule$$$contains)(typar$$1, constraintTypars);
  };

  const singletons$$2 = (0, _zset.ZsetModule$$$filter)(function predicate$$5($arg$$24) {
    return !usedInTypeConstraint($arg$$24);
  }, singletons$$1);
  const patternInput$$42 = (0, _List.partition)(function predicate$$6(tupledArg$$40) {
    if ((simplify ? isTTyparCoercesToType(tupledArg$$40[1]) : false) ? (0, _zset.ZsetModule$$$contains)(tupledArg$$40[0], singletons$$2) : false) {
      return (0, _List.length)((0, _tast.Typar$$get_Constraints)(tupledArg$$40[0])) === 1;
    } else {
      return false;
    }
  }, cxs$$2);
  const inplace$$1 = (0, _List.map)(function mapping$$7(_arg1$$73) {
    if (_arg1$$73[1].tag === 0) {
      const ty$$172 = _arg1$$73[1].fields[0];
      return [_arg1$$73[0], ty$$172];
    } else {
      throw new Error("not isTTyparCoercesToType");
    }
  }, patternInput$$42[0]);
  return new SimplifyTypes$002ETypeSimplificationInfo(singletons$$2, (0, _zmap.ZmapModule$$$ofList)(typarOrder, inplace$$1), patternInput$$42[1]);
}

function SimplifyTypes$$$CollectInfo(simplify$$1, tys$$16, cxs$$3) {
  return SimplifyTypes$$$categorizeConstraints(simplify$$1, SimplifyTypes$$$accTyparCountsMulti(SimplifyTypes$$$emptyTyparCounts, tys$$16), cxs$$3);
}

const DisplayEnv = (0, _Types.declare)(function DisplayEnv(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23) {
  this.includeStaticParametersInTypeNames = arg1;
  this.openTopPathsSorted = arg2;
  this.openTopPathsRaw = arg3;
  this.shortTypeNames = arg4;
  this.suppressNestedTypes = arg5;
  this.maxMembers = arg6;
  this.showObsoleteMembers = arg7;
  this.showHiddenMembers = arg8;
  this.showTyparBinding = arg9;
  this.showImperativeTyparAnnotations = arg10;
  this.suppressInlineKeyword = arg11;
  this.suppressMutableKeyword = arg12;
  this.showMemberContainers = arg13;
  this.shortConstraints = arg14;
  this.useColonForReturnType = arg15;
  this.showAttributes = arg16;
  this.showOverrides = arg17;
  this.showConstraintTyparAnnotations = arg18;
  this.abbreviateAdditionalConstraints = arg19;
  this.showTyparDefaultConstraints = arg20;
  this.g = arg21;
  this.contextAccessibility = arg22;
  this.generatedValueLayout = arg23;
}, _Types.Record);
exports.DisplayEnv = DisplayEnv;

function DisplayEnv$$SetOpenPaths$$Z7F4D45E5(x$$108, paths) {
  return new DisplayEnv(x$$108.includeStaticParametersInTypeNames, new _Util.Lazy(function () {
    return (0, _List.sortWith)(function comparer(p1, p2) {
      return -(0, _Util.compare)(p1, p2);
    }, paths);
  }), paths, x$$108.shortTypeNames, x$$108.suppressNestedTypes, x$$108.maxMembers, x$$108.showObsoleteMembers, x$$108.showHiddenMembers, x$$108.showTyparBinding, x$$108.showImperativeTyparAnnotations, x$$108.suppressInlineKeyword, x$$108.suppressMutableKeyword, x$$108.showMemberContainers, x$$108.shortConstraints, x$$108.useColonForReturnType, x$$108.showAttributes, x$$108.showOverrides, x$$108.showConstraintTyparAnnotations, x$$108.abbreviateAdditionalConstraints, x$$108.showTyparDefaultConstraints, x$$108.g, x$$108.contextAccessibility, x$$108.generatedValueLayout);
}

function DisplayEnv$$$Empty$$2AE8EA0C(tcGlobals) {
  return new DisplayEnv(false, (0, _illib.notlazy)((0, _Types.L)()), (0, _Types.L)(), false, false, null, false, false, false, false, false, false, false, false, false, false, true, true, false, false, tcGlobals, _tast.taccessPublic, function (_arg1$$74) {
    return null;
  });
}

function DisplayEnv$$AddOpenPath$$1334CEF1(denv, path$$2) {
  return DisplayEnv$$SetOpenPaths$$Z7F4D45E5(denv, (0, _Types.L)(path$$2, denv.openTopPathsRaw));
}

function DisplayEnv$$AddOpenModuleOrNamespace$$Z788D4AAC(denv$$1, modref) {
  return DisplayEnv$$AddOpenPath$$1334CEF1(denv$$1, (0, _tast.CompilationPath$$get_DemangledPath)((0, _tast.fullCompPathOfModuleOrNamespace)((0, _tast.EntityRef$$get_Deref)(modref))));
}

function DisplayEnv$$AddAccessibility$$Z104C0010(denv$$2, access) {
  return new DisplayEnv(denv$$2.includeStaticParametersInTypeNames, denv$$2.openTopPathsSorted, denv$$2.openTopPathsRaw, denv$$2.shortTypeNames, denv$$2.suppressNestedTypes, denv$$2.maxMembers, denv$$2.showObsoleteMembers, denv$$2.showHiddenMembers, denv$$2.showTyparBinding, denv$$2.showImperativeTyparAnnotations, denv$$2.suppressInlineKeyword, denv$$2.suppressMutableKeyword, denv$$2.showMemberContainers, denv$$2.shortConstraints, denv$$2.useColonForReturnType, denv$$2.showAttributes, denv$$2.showOverrides, denv$$2.showConstraintTyparAnnotations, denv$$2.abbreviateAdditionalConstraints, denv$$2.showTyparDefaultConstraints, denv$$2.g, (0, _tast.combineAccess)(denv$$2.contextAccessibility, access), denv$$2.generatedValueLayout);
}

function op_PlusDotPlus(s1$$6, s2$$6) {
  if (s1$$6 === "") {
    return s2$$6;
  } else {
    return s1$$6 + "." + s2$$6;
  }
}

function layoutOfPath(p$$1) {
  return (0, _layout.sepListL)(_layout.SepL$$$dot, (0, _List.map)(function ($arg$$25) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNamespace)($arg$$25));
  }, p$$1));
}

function fullNameOfParentOfPubPath(pp) {
  if (!(0, _Array.equalsWith)(_Util.comparePrimitives, pp.fields[0], null) ? pp.fields[0].length === 1 : false) {
    return null;
  } else {
    const pp$$1 = pp;
    return (0, _ast.textOfPath)((0, _tast.PublicPath$$get_EnclosingPath)(pp$$1));
  }
}

function fullNameOfParentOfPubPathAsLayout(pp$$2) {
  if (!(0, _Array.equalsWith)(_Util.comparePrimitives, pp$$2.fields[0], null) ? pp$$2.fields[0].length === 1 : false) {
    return null;
  } else {
    const pp$$3 = pp$$2;
    return layoutOfPath((0, _Array.toList)((0, _tast.PublicPath$$get_EnclosingPath)(pp$$3)));
  }
}

function fullNameOfPubPath(_arg1$$75) {
  const p$$2 = _arg1$$75.fields[0];
  return (0, _ast.textOfPath)(p$$2);
}

function fullNameOfPubPathAsLayout(_arg1$$76) {
  const p$$3 = _arg1$$76.fields[0];
  return layoutOfPath((0, _Array.toList)(p$$3));
}

function fullNameOfParentOfNonLocalEntityRef(nlr) {
  if ((0, _tast.NonLocalEntityRef$$get_Path)(nlr).length < 2) {
    return null;
  } else {
    return (0, _ast.textOfPath)((0, _tast.NonLocalEntityRef$$get_EnclosingMangledPath)(nlr));
  }
}

function fullNameOfParentOfNonLocalEntityRefAsLayout(nlr$$1) {
  if ((0, _tast.NonLocalEntityRef$$get_Path)(nlr$$1).length < 2) {
    return null;
  } else {
    return layoutOfPath((0, _List.ofArray)((0, _tast.NonLocalEntityRef$$get_EnclosingMangledPath)(nlr$$1)));
  }
}

function fullNameOfParentOfEntityRef(eref$$5) {
  const activePatternResult32237 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(eref$$5);

  if (activePatternResult32237.tag === 1) {
    return fullNameOfParentOfNonLocalEntityRef(activePatternResult32237.fields[0]);
  } else {
    const matchValue$$74 = (0, _tast.Entity$$get_PublicPath)(activePatternResult32237.fields[0]);

    if (matchValue$$74 != null) {
      const ppath = matchValue$$74;
      return fullNameOfParentOfPubPath(ppath);
    } else {
      return null;
    }
  }
}

function fullNameOfParentOfEntityRefAsLayout(eref$$6) {
  const activePatternResult32239 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(eref$$6);

  if (activePatternResult32239.tag === 1) {
    return fullNameOfParentOfNonLocalEntityRefAsLayout(activePatternResult32239.fields[0]);
  } else {
    const matchValue$$75 = (0, _tast.Entity$$get_PublicPath)(activePatternResult32239.fields[0]);

    if (matchValue$$75 != null) {
      const ppath$$1 = matchValue$$75;
      return fullNameOfParentOfPubPathAsLayout(ppath$$1);
    } else {
      return null;
    }
  }
}

function fullNameOfEntityRef(nmF, xref) {
  const matchValue$$76 = fullNameOfParentOfEntityRef(xref);

  if (matchValue$$76 != null) {
    const pathText = matchValue$$76;
    return op_PlusDotPlus(pathText, nmF(xref));
  } else {
    return nmF(xref);
  }
}

function tagEntityRefName(xref$$1, name) {
  if ((0, _tast.EntityRef$$get_IsNamespace)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagNamespace)(name);
  } else if ((0, _tast.EntityRef$$get_IsModule)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagModule)(name);
  } else if ((0, _tast.EntityRef$$get_IsTypeAbbrev)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagAlias)(name);
  } else if ((0, _tast.EntityRef$$get_IsFSharpDelegateTycon)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagDelegate)(name);
  } else if ((0, _tast.EntityRef$$get_IsILEnumTycon)(xref$$1) ? true : (0, _tast.EntityRef$$get_IsFSharpEnumTycon)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagEnum)(name);
  } else if ((0, _tast.EntityRef$$get_IsStructOrEnumTycon)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagStruct)(name);
  } else if ((0, _tast.EntityRef$$get_IsFSharpInterfaceTycon)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagInterface)(name);
  } else if ((0, _tast.EntityRef$$get_IsUnionTycon)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagUnion)(name);
  } else if ((0, _tast.EntityRef$$get_IsRecordTycon)(xref$$1)) {
    return (0, _layout.TaggedTextOps$$$tagRecord)(name);
  } else {
    return (0, _layout.TaggedTextOps$$$tagClass)(name);
  }
}

function fullDisplayTextOfTyconRef(r$$18) {
  return fullNameOfEntityRef(function (tc$$7) {
    return (0, _tast.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(tc$$7);
  }, r$$18);
}

function fullNameOfEntityRefAsLayout(nmF$$1, xref$$2) {
  const navigableText = (0, _layout.wordL)((0, _layout.mkNav)((0, _tast.EntityRef$$get_DefinitionRange)(xref$$2), tagEntityRefName(xref$$2, nmF$$1(xref$$2))));
  const matchValue$$77 = fullNameOfParentOfEntityRefAsLayout(xref$$2);

  if (matchValue$$77 != null) {
    const pathText$$1 = matchValue$$77;
    return (0, _layout.op_HatHat)(pathText$$1, (0, _layout.op_HatHat)(_layout.SepL$$$dot, navigableText));
  } else {
    return navigableText;
  }
}

function fullNameOfParentOfValRef(vref$$12) {
  const activePatternResult32250 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(vref$$12);

  if (activePatternResult32250.tag === 1) {
    return fullNameOfEntityRef(function (x$$112) {
      return (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(x$$112);
    }, activePatternResult32250.fields[0].EnclosingEntity);
  } else {
    const matchValue$$78 = (0, _tast.Val$$get_PublicPath)(activePatternResult32250.fields[0]);

    if (matchValue$$78 != null) {
      const pp$$4 = matchValue$$78.fields[0];
      return fullNameOfPubPath(pp$$4);
    } else {
      return null;
    }
  }
}

function fullNameOfParentOfValRefAsLayout(vref$$13) {
  const activePatternResult32253 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(vref$$13);

  if (activePatternResult32253.tag === 1) {
    return fullNameOfEntityRefAsLayout(function (x$$114) {
      return (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(x$$114);
    }, activePatternResult32253.fields[0].EnclosingEntity);
  } else {
    const matchValue$$79 = (0, _tast.Val$$get_PublicPath)(activePatternResult32253.fields[0]);

    if (matchValue$$79 != null) {
      const pp$$5 = matchValue$$79.fields[0];
      return fullNameOfPubPathAsLayout(pp$$5);
    } else {
      return null;
    }
  }
}

function fullDisplayTextOfParentOfModRef(r$$19) {
  return fullNameOfParentOfEntityRef(r$$19);
}

function fullDisplayTextOfModRef(r$$20) {
  return fullNameOfEntityRef(function (x$$115) {
    return (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(x$$115);
  }, r$$20);
}

function fullDisplayTextOfTyconRefAsLayout(r$$21) {
  return fullNameOfEntityRefAsLayout(function (tc$$8) {
    return (0, _tast.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(tc$$8);
  }, r$$21);
}

function fullDisplayTextOfExnRef(r$$22) {
  return fullNameOfEntityRef(function (tc$$9) {
    return (0, _tast.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(tc$$9);
  }, r$$22);
}

function fullDisplayTextOfExnRefAsLayout(r$$23) {
  return fullNameOfEntityRefAsLayout(function (tc$$10) {
    return (0, _tast.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(tc$$10);
  }, r$$23);
}

function fullDisplayTextOfUnionCaseRef(ucref$$3) {
  return op_PlusDotPlus(fullDisplayTextOfTyconRef((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$3)), (0, _tast.UnionCaseRef$$get_CaseName)(ucref$$3));
}

function fullDisplayTextOfRecdFieldRef(rfref$$1) {
  return op_PlusDotPlus(fullDisplayTextOfTyconRef((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$1)), (0, _tast.RecdFieldRef$$get_FieldName)(rfref$$1));
}

function fullDisplayTextOfValRef(vref$$14) {
  const matchValue$$80 = fullNameOfParentOfValRef(vref$$14);

  if (matchValue$$80 != null) {
    const pathText$$2 = matchValue$$80;
    return op_PlusDotPlus(pathText$$2, (0, _tast.ValRef$$get_DisplayName)(vref$$14));
  } else {
    return (0, _tast.ValRef$$get_DisplayName)(vref$$14);
  }
}

function fullDisplayTextOfValRefAsLayout(vref$$15) {
  let n$$10;
  const matchValue$$81 = (0, _tast.ValRef$$get_MemberInfo)(vref$$15);

  if (matchValue$$81 != null) {
    const memberInfo = matchValue$$81;
    var $target$$175;

    if (memberInfo.MemberFlags.MemberKind.tag === 4) {
      $target$$175 = 0;
    } else if (memberInfo.MemberFlags.MemberKind.tag === 5) {
      $target$$175 = 0;
    } else if (memberInfo.MemberFlags.MemberKind.tag === 0) {
      $target$$175 = 1;
    } else if (memberInfo.MemberFlags.MemberKind.tag === 1) {
      $target$$175 = 1;
    } else if (memberInfo.MemberFlags.MemberKind.tag === 2) {
      $target$$175 = 2;
    } else {
      $target$$175 = 0;
    }

    switch ($target$$175) {
      case 0:
        {
          n$$10 = (0, _layout.TaggedTextOps$$$tagProperty)((0, _tast.ValRef$$get_DisplayName)(vref$$15));
          break;
        }

      case 1:
        {
          n$$10 = (0, _layout.TaggedTextOps$$$tagMethod)((0, _tast.ValRef$$get_DisplayName)(vref$$15));
          break;
        }

      case 2:
        {
          n$$10 = (0, _layout.TaggedTextOps$$$tagMember)((0, _tast.ValRef$$get_DisplayName)(vref$$15));
          break;
        }
    }
  } else {
    n$$10 = (0, _tast.ValRef$$get_IsModuleBinding)(vref$$15) ? (0, _layout.TaggedTextOps$$$tagModuleBinding)((0, _tast.ValRef$$get_DisplayName)(vref$$15)) : (0, _layout.TaggedTextOps$$$tagUnknownEntity)((0, _tast.ValRef$$get_DisplayName)(vref$$15));
  }

  const matchValue$$83 = fullNameOfParentOfValRefAsLayout(vref$$15);

  if (matchValue$$83 != null) {
    const pathText$$3 = matchValue$$83;
    return (0, _layout.op_HatHat)(pathText$$3, (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.wordL)(n$$10)));
  } else {
    return (0, _layout.wordL)(n$$10);
  }
}

function fullMangledPathToTyconRef(tcref$$54) {
  const activePatternResult32268 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(tcref$$54);

  if (activePatternResult32268.tag === 1) {
    return (0, _tast.NonLocalEntityRef$$get_EnclosingMangledPath)(activePatternResult32268.fields[0]);
  } else {
    const matchValue$$84 = (0, _tast.EntityRef$$get_PublicPath)(tcref$$54);

    if (matchValue$$84 != null) {
      const pp$$6 = matchValue$$84;
      return (0, _tast.PublicPath$$get_EnclosingPath)(pp$$6);
    } else {
      return [];
    }
  }
}

function qualifiedMangledNameOfTyconRef(tcref$$55, nm$$12) {
  return (0, _String.join)("-", ...(0, _List.append)((0, _Array.toList)(fullMangledPathToTyconRef(tcref$$55)), (0, _Types.L)((0, _tast.EntityRef$$get_LogicalName)(tcref$$55) + "-" + nm$$12, (0, _Types.L)())));
}

function firstEq(p1$$1, p2$$1) {
  firstEq: while (true) {
    if (p1$$1.tail != null) {
      const t1$$3 = p1$$1.tail;
      const h1 = p1$$1.head;

      if (p2$$1.tail != null) {
        const t2$$3 = p2$$1.tail;
        const h2 = p2$$1.head;

        if ((0, _Util.equals)(h1, h2)) {
          p1$$1 = t1$$3;
          p2$$1 = t2$$3;
          continue firstEq;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}

function firstRem(p1$$2, p2$$2) {
  firstRem: while (true) {
    if (p1$$2.tail != null) {
      const t1$$4 = p1$$2.tail;
      p1$$2 = t1$$4;
      p2$$2 = (0, _List.tail)(p2$$2);
      continue firstRem;
    } else {
      return p2$$2;
    }
  }
}

function trimPathByDisplayEnv(denv$$3, path$$3) {
  const findOpenedNamespace = function findOpenedNamespace(openedPath) {
    if (firstEq(openedPath, path$$3)) {
      const t2$$4 = firstRem(openedPath, path$$3);

      if (!(0, _Util.equals)(t2$$4, (0, _Types.L)())) {
        return (0, _ast.textOfPath)(t2$$4) + ".";
      } else {
        return "";
      }
    } else {
      return null;
    }
  };

  const matchValue$$85 = (0, _List.tryPick)(findOpenedNamespace, denv$$3.openTopPathsSorted.Value);

  if (matchValue$$85 == null) {
    if (path$$3.tail == null) {
      return "";
    } else {
      return (0, _ast.textOfPath)(path$$3) + ".";
    }
  } else {
    const s$$6 = matchValue$$85;
    return s$$6;
  }
}

function superOfTycon(g$$195, tycon$$12) {
  const matchValue$$86 = (0, _tast.Entity$$get_TypeContents)(tycon$$12).tcaug_super;

  if (matchValue$$86 != null) {
    const ty$$173 = matchValue$$86;
    return ty$$173;
  } else {
    return (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$195);
  }
}

function isILAttribByName(tencl, tname, attr) {
  if ((0, _il.ILTypeSpec$$get_Name)((0, _il.ILType$$get_TypeSpec)((0, _il.ILMethodSpec$$get_DeclaringType)(attr.Method))) === tname) {
    return (0, _Util.equals)((0, _il.ILTypeSpec$$get_Enclosing)((0, _il.ILType$$get_TypeSpec)((0, _il.ILMethodSpec$$get_DeclaringType)(attr.Method))), tencl);
  } else {
    return false;
  }
}

function isILAttrib(tref, attr$$1) {
  return isILAttribByName((0, _il.ILTypeRef$$get_Enclosing)(tref), (0, _il.ILTypeRef$$get_Name)(tref), attr$$1);
}

function HasILAttribute(tref$$1, attrs) {
  return (0, _il.ILAttributes$$get_AsArray)(attrs).some(function predicate$$7(attr$$2) {
    return isILAttrib(tref$$1, attr$$2);
  });
}

function TryDecodeILAttribute(g$$196, tref$$2, attrs$$1) {
  return (0, _Array.tryPick)(function chooser$$1(x$$116) {
    if (isILAttrib(tref$$2, x$$116)) {
      return (0, _il.decodeILAttribData)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$196), x$$116);
    } else {
      return null;
    }
  }, (0, _il.ILAttributes$$get_AsArray)(attrs$$1));
}

function IsMatchingFSharpAttribute(g$$197, _arg2$$3, _arg1$$77) {
  const tcref$$56 = _arg2$$3.fields[1];
  const tcref2$$5 = _arg1$$77.fields[0];
  return tyconRefEq(g$$197, tcref$$56, tcref2$$5);
}

function HasFSharpAttribute(g$$198, tref$$3, attrs$$2) {
  return (0, _List.exists)(function (arg20$0040$$10) {
    return IsMatchingFSharpAttribute(g$$198, tref$$3, arg20$0040$$10);
  }, attrs$$2);
}

function findAttrib(g$$199, tref$$4, attrs$$3) {
  return (0, _List.find)(function (arg20$0040$$11) {
    return IsMatchingFSharpAttribute(g$$199, tref$$4, arg20$0040$$11);
  }, attrs$$3);
}

function TryFindFSharpAttribute(g$$200, tref$$5, attrs$$4) {
  return (0, _List.tryFind)(function (arg20$0040$$12) {
    return IsMatchingFSharpAttribute(g$$200, tref$$5, arg20$0040$$12);
  }, attrs$$4);
}

function TryFindFSharpAttributeOpt(g$$201, tref$$6, attrs$$5) {
  if (tref$$6 != null) {
    const tref$$7 = tref$$6;
    return (0, _List.tryFind)(function (arg20$0040$$13) {
      return IsMatchingFSharpAttribute(g$$201, tref$$7, arg20$0040$$13);
    }, attrs$$5);
  } else {
    return null;
  }
}

function HasFSharpAttributeOpt(g$$202, trefOpt, attrs$$6) {
  if (trefOpt != null) {
    const tref$$8 = trefOpt;
    return (0, _List.exists)(function (arg20$0040$$14) {
      return IsMatchingFSharpAttribute(g$$202, tref$$8, arg20$0040$$14);
    }, attrs$$6);
  } else {
    return false;
  }
}

function IsMatchingFSharpAttributeOpt(g$$203, attrOpt, _arg1$$78) {
  const tcref2$$6 = _arg1$$78.fields[0];

  if (attrOpt != null) {
    const tcref$$57 = attrOpt.fields[1];
    return tyconRefEq(g$$203, tcref$$57, tcref2$$6);
  } else {
    return false;
  }
}

function $007CExtractAttribNamedArg$007C_$007C(nm$$13, args$$6) {
  return (0, _List.tryPick)(function chooser$$2(_arg1$$79) {
    var v$$67, nm2$$3;

    if (v$$67 = _arg1$$79.fields[0][3], (nm2$$3 = _arg1$$79.fields[0][0], nm$$13 === nm2$$3)) {
      const v$$68 = _arg1$$79.fields[0][3];
      const nm2$$4 = _arg1$$79.fields[0][0];
      return v$$68;
    } else {
      return null;
    }
  }, args$$6);
}

function $007CAttribInt32Arg$007C_$007C(_arg1$$80) {
  var $target$$176, n$$11;

  if (_arg1$$80.fields[1].tag === 0) {
    if (_arg1$$80.fields[1].fields[0].tag === 5) {
      $target$$176 = 0;
      n$$11 = _arg1$$80.fields[1].fields[0].fields[0];
    } else {
      $target$$176 = 1;
    }
  } else {
    $target$$176 = 1;
  }

  switch ($target$$176) {
    case 0:
      {
        return n$$11;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CAttribInt16Arg$007C_$007C(_arg1$$81) {
  var $target$$177, n$$12;

  if (_arg1$$81.fields[1].tag === 0) {
    if (_arg1$$81.fields[1].fields[0].tag === 3) {
      $target$$177 = 0;
      n$$12 = _arg1$$81.fields[1].fields[0].fields[0];
    } else {
      $target$$177 = 1;
    }
  } else {
    $target$$177 = 1;
  }

  switch ($target$$177) {
    case 0:
      {
        return n$$12;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CAttribBoolArg$007C_$007C(_arg1$$82) {
  var $target$$178, n$$13;

  if (_arg1$$82.fields[1].tag === 0) {
    if (_arg1$$82.fields[1].fields[0].tag === 0) {
      $target$$178 = 0;
      n$$13 = _arg1$$82.fields[1].fields[0].fields[0];
    } else {
      $target$$178 = 1;
    }
  } else {
    $target$$178 = 1;
  }

  switch ($target$$178) {
    case 0:
      {
        return n$$13;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CAttribStringArg$007C_$007C(_arg1$$83) {
  var $target$$179, n$$14;

  if (_arg1$$83.fields[1].tag === 0) {
    if (_arg1$$83.fields[1].fields[0].tag === 14) {
      $target$$179 = 0;
      n$$14 = _arg1$$83.fields[1].fields[0].fields[0];
    } else {
      $target$$179 = 1;
    }
  } else {
    $target$$179 = 1;
  }

  switch ($target$$179) {
    case 0:
      {
        return n$$14;
      }

    case 1:
      {
        return null;
      }
  }
}

function TryFindFSharpBoolAttributeWithDefault(dflt, g$$204, nm$$14, attrs$$7) {
  const matchValue$$87 = TryFindFSharpAttribute(g$$204, nm$$14, attrs$$7);
  var $target$$180, b$$19;

  if (matchValue$$87 != null) {
    if (matchValue$$87.fields[2].tail != null) {
      const activePatternResult32321 = $007CAttribBoolArg$007C_$007C(matchValue$$87.fields[2].head);

      if (activePatternResult32321 != null) {
        if (matchValue$$87.fields[2].tail.tail == null) {
          $target$$180 = 1;
          b$$19 = activePatternResult32321;
        } else {
          $target$$180 = 2;
        }
      } else {
        $target$$180 = 2;
      }
    } else {
      $target$$180 = 0;
    }
  } else {
    $target$$180 = 2;
  }

  switch ($target$$180) {
    case 0:
      {
        return dflt;
      }

    case 1:
      {
        return b$$19;
      }

    case 2:
      {
        return null;
      }
  }
}

function TryFindFSharpBoolAttribute(g$$205, nm$$15, attrs$$8) {
  return TryFindFSharpBoolAttributeWithDefault(true, g$$205, nm$$15, attrs$$8);
}

function TryFindFSharpBoolAttributeAssumeFalse(g$$206, nm$$16, attrs$$9) {
  return TryFindFSharpBoolAttributeWithDefault(false, g$$206, nm$$16, attrs$$9);
}

function TryFindFSharpInt32Attribute(g$$207, nm$$17, attrs$$10) {
  const matchValue$$88 = TryFindFSharpAttribute(g$$207, nm$$17, attrs$$10);
  var $target$$181, b$$20;

  if (matchValue$$88 != null) {
    if (matchValue$$88.fields[2].tail != null) {
      const activePatternResult32332 = $007CAttribInt32Arg$007C_$007C(matchValue$$88.fields[2].head);

      if (activePatternResult32332 != null) {
        if (matchValue$$88.fields[2].tail.tail == null) {
          $target$$181 = 0;
          b$$20 = activePatternResult32332;
        } else {
          $target$$181 = 1;
        }
      } else {
        $target$$181 = 1;
      }
    } else {
      $target$$181 = 1;
    }
  } else {
    $target$$181 = 1;
  }

  switch ($target$$181) {
    case 0:
      {
        return b$$20;
      }

    case 1:
      {
        return null;
      }
  }
}

function TryFindFSharpStringAttribute(g$$208, nm$$18, attrs$$11) {
  const matchValue$$89 = TryFindFSharpAttribute(g$$208, nm$$18, attrs$$11);
  var $target$$182, b$$21;

  if (matchValue$$89 != null) {
    if (matchValue$$89.fields[2].tail != null) {
      const activePatternResult32336 = $007CAttribStringArg$007C_$007C(matchValue$$89.fields[2].head);

      if (activePatternResult32336 != null) {
        if (matchValue$$89.fields[2].tail.tail == null) {
          $target$$182 = 0;
          b$$21 = activePatternResult32336;
        } else {
          $target$$182 = 1;
        }
      } else {
        $target$$182 = 1;
      }
    } else {
      $target$$182 = 1;
    }
  } else {
    $target$$182 = 1;
  }

  switch ($target$$182) {
    case 0:
      {
        return b$$21;
      }

    case 1:
      {
        return null;
      }
  }
}

function TryFindILAttribute(_arg1$$84, attrs$$12) {
  const atref = _arg1$$84.fields[0];
  return HasILAttribute(atref, attrs$$12);
}

function TryFindILAttributeOpt(attr$$3, attrs$$13) {
  if (attr$$3 != null) {
    const atref$$1 = attr$$3.fields[0];
    return HasILAttribute(atref$$1, attrs$$13);
  } else {
    return false;
  }
}

function TryBindTyconRefAttribute(g$$209, m$$114, _arg1$$85, tcref$$58, f1$$16, f2$$10, f3$$2) {
  const args$$7 = _arg1$$85;
  const atref$$2 = args$$7.fields[0];
  m$$114;
  f3$$2;
  const matchValue$$90 = metadataOfTycon((0, _tast.EntityRef$$get_Deref)(tcref$$58));

  if (matchValue$$90.tag === 1) {
    const matchValue$$92 = TryFindFSharpAttribute(g$$209, args$$7, (0, _tast.EntityRef$$get_Attribs)(tcref$$58));

    if (matchValue$$92 != null) {
      const attr$$5 = matchValue$$92;
      return f2$$10(attr$$5);
    } else {
      return null;
    }
  } else {
    const tdef = matchValue$$90.fields[0].fields[2];
    const matchValue$$91 = TryDecodeILAttribute(g$$209, atref$$2, (0, _il.ILTypeDef$$get_CustomAttrs)(tdef));

    if (matchValue$$91 != null) {
      const attr$$4 = matchValue$$91;
      return f1$$16(attr$$4);
    } else {
      return null;
    }
  }
}

function TryFindTyconRefBoolAttribute(g$$210, m$$115, attribSpec, tcref$$59) {
  return TryBindTyconRefAttribute(g$$210, m$$115, attribSpec, tcref$$59, function (_arg1$$86) {
    return _arg1$$86[0].tail != null ? _arg1$$86[0].head.tag === 1 ? _arg1$$86[0].tail.tail == null ? _arg1$$86[0].head.fields[0] : null : null : true;
  }, function (_arg2$$4) {
    var activePatternResult32353, v$$70;
    return _arg2$$4.fields[2].tail != null ? (activePatternResult32353 = $007CAttribBoolArg$007C_$007C(_arg2$$4.fields[2].head), activePatternResult32353 != null ? _arg2$$4.fields[2].tail.tail == null ? (v$$70 = activePatternResult32353, v$$70) : null : null) : true;
  }, function (_arg3) {
    var v$$71;
    return _arg3[0].tail != null ? _arg3[0].head != null ? typeof _arg3[0].head === "boolean" ? _arg3[0].tail.tail == null ? (v$$71 = _arg3[0].head, v$$71) : null : null : null : true;
  });
}

function TryFindAttributeUsageAttribute(g$$211, m$$116, tcref$$60) {
  return TryBindTyconRefAttribute(g$$211, m$$116, (0, _TcGlobals.TcGlobals$$get_attrib_AttributeUsageAttribute)(g$$211), tcref$$60, function (tupledArg$$41) {
    return (0, _List.tryPick)(function chooser$$3(_arg1$$88) {
      var $target$$190;

      if (_arg1$$88[0] === "AllowMultiple") {
        if (_arg1$$88[3].tag === 1) {
          $target$$190 = 0;
        } else {
          $target$$190 = 1;
        }
      } else {
        $target$$190 = 1;
      }

      switch ($target$$190) {
        case 0:
          {
            const res$$1 = _arg1$$88[3].fields[0];
            return res$$1;
          }

        case 1:
          {
            return null;
          }
      }
    }, tupledArg$$41[1]);
  }, function (_arg2$$5) {
    const named$$1 = _arg2$$5.fields[3];
    return (0, _List.tryPick)(function chooser$$4(_arg2$$6) {
      var $target$$191, res$$2;

      if (_arg2$$6.fields[0][0] === "AllowMultiple") {
        const activePatternResult32362 = $007CAttribBoolArg$007C_$007C(_arg2$$6.fields[0][3]);

        if (activePatternResult32362 != null) {
          $target$$191 = 0;
          res$$2 = activePatternResult32362;
        } else {
          $target$$191 = 1;
        }
      } else {
        $target$$191 = 1;
      }

      switch ($target$$191) {
        case 0:
          {
            return res$$2;
          }

        case 1:
          {
            return null;
          }
      }
    }, named$$1);
  }, function (tupledArg$$42) {
    return (0, _List.tryPick)(function chooser$$5(_arg3$$2) {
      var $target$$192, res$$3;

      if (_arg3$$2[0] === "AllowMultiple") {
        if (_arg3$$2[1] != null) {
          if (typeof _arg3$$2[1] === "boolean") {
            $target$$192 = 0;
            res$$3 = _arg3$$2[1];
          } else {
            $target$$192 = 1;
          }
        } else {
          $target$$192 = 1;
        }
      } else {
        $target$$192 = 1;
      }

      switch ($target$$192) {
        case 0:
          {
            return res$$3;
          }

        case 1:
          {
            return null;
          }
      }
    }, tupledArg$$42[1]);
  });
}

function TryFindTyconRefStringAttribute(g$$212, m$$117, attribSpec$$1, tcref$$61) {
  return TryBindTyconRefAttribute(g$$212, m$$117, attribSpec$$1, tcref$$61, function (_arg1$$89) {
    var msg;
    return _arg1$$89[0].tail != null ? _arg1$$89[0].head.tag === 0 ? _arg1$$89[0].head.fields[0] != null ? _arg1$$89[0].tail.tail == null ? (msg = _arg1$$89[0].head.fields[0], msg) : null : null : null : null;
  }, function (_arg2$$7) {
    var activePatternResult32371, msg$$1;
    return _arg2$$7.fields[2].tail != null ? (activePatternResult32371 = $007CAttribStringArg$007C_$007C(_arg2$$7.fields[2].head), activePatternResult32371 != null ? _arg2$$7.fields[2].tail.tail == null ? (msg$$1 = activePatternResult32371, msg$$1) : null : null) : null;
  }, function (_arg3$$3) {
    var msg$$2;
    return _arg3$$3[0].tail != null ? _arg3$$3[0].head != null ? typeof _arg3$$3[0].head === "string" ? _arg3$$3[0].tail.tail == null ? (msg$$2 = _arg3$$3[0].head, msg$$2) : null : null : null : null;
  });
}

function TyconRefHasAttribute(g$$213, m$$118, attribSpec$$2, tcref$$62) {
  return TryBindTyconRefAttribute(g$$213, m$$118, attribSpec$$2, tcref$$62, function (_arg1$$90) {
    return (0, _Option.some)(null);
  }, function (_arg2$$8) {
    return (0, _Option.some)(null);
  }, function (_arg3$$4) {
    return (0, _Option.some)(null);
  }) != null;
}

function isByrefTyconRef(g$$214, tcref$$63) {
  if (((((((0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$214)) ? tyconRefEq(g$$214, (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$214), tcref$$63) : false) ? true : (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$214)) ? tyconRefEq(g$$214, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$214), tcref$$63) : false) ? true : (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_inref_tcr)(g$$214)) ? tyconRefEq(g$$214, (0, _TcGlobals.TcGlobals$$get_inref_tcr)(g$$214), tcref$$63) : false) ? true : (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_outref_tcr)(g$$214)) ? tyconRefEq(g$$214, (0, _TcGlobals.TcGlobals$$get_outref_tcr)(g$$214), tcref$$63) : false) ? true : tyconRefEqOpt(g$$214, (0, _TcGlobals.TcGlobals$$get_system_TypedReference_tcref)(g$$214), tcref$$63)) ? true : tyconRefEqOpt(g$$214, (0, _TcGlobals.TcGlobals$$get_system_ArgIterator_tcref)(g$$214), tcref$$63)) {
    return true;
  } else {
    return tyconRefEqOpt(g$$214, (0, _TcGlobals.TcGlobals$$get_system_RuntimeArgumentHandle_tcref)(g$$214), tcref$$63);
  }
}

function isByrefLikeTyconRef(g$$215, m$$119, tcref$$64) {
  if ((0, _tast.EntityRef$$get_CanDeref)(tcref$$64)) {
    const matchValue$$93 = (0, _tast.EntityRef$$get_TryIsByRefLike)(tcref$$64);

    if (matchValue$$93 == null) {
      const res$$5 = isByrefTyconRef(g$$215, tcref$$64) ? true : TyconRefHasAttribute(g$$215, m$$119, (0, _TcGlobals.TcGlobals$$get_attrib_IsByRefLikeAttribute)(g$$215), tcref$$64);
      (0, _tast.EntityRef$$SetIsByRefLike$$Z1FBCCD16)(tcref$$64, res$$5);
      return res$$5;
    } else {
      const res$$4 = matchValue$$93;
      return res$$4;
    }
  } else {
    return false;
  }
}

function isSpanLikeTyconRef(g$$216, m$$120, tcref$$65) {
  if (isByrefLikeTyconRef(g$$216, m$$120, tcref$$65)) {
    return !isByrefTyconRef(g$$216, tcref$$65);
  } else {
    return false;
  }
}

function isByrefLikeTy(g$$217, m$$121, ty$$174) {
  const _arg1$$91 = stripTyEqns(g$$217, ty$$174);

  if (_arg1$$91.tag === 1) {
    const tcref$$66 = _arg1$$91.fields[0];
    return isByrefLikeTyconRef(g$$217, m$$121, tcref$$66);
  } else {
    return false;
  }
}

function isSpanLikeTy(g$$218, m$$122, ty$$175) {
  if (isByrefLikeTy(g$$218, m$$122, ty$$175)) {
    return !isByrefTy(g$$218, ty$$175);
  } else {
    return false;
  }
}

function destByrefTy(g$$219, ty$$176) {
  var x$$119, tcref$$69, x$$117, tcref$$67;
  const matchValue$$94 = stripTyEqns(g$$219, ty$$176);
  var $target$$193, tcref$$68, x$$118;

  if (matchValue$$94.tag === 1) {
    if (matchValue$$94.fields[1].tail != null) {
      if (matchValue$$94.fields[1].tail.tail != null) {
        if (matchValue$$94.fields[1].tail.tail.tail == null) {
          if (x$$117 = matchValue$$94.fields[1].head, (tcref$$67 = matchValue$$94.fields[0], (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$219)) ? tyconRefEq(g$$219, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$219), tcref$$67) : false)) {
            $target$$193 = 0;
            tcref$$68 = matchValue$$94.fields[0];
            x$$118 = matchValue$$94.fields[1].head;
          } else {
            $target$$193 = 1;
          }
        } else {
          $target$$193 = 1;
        }
      } else {
        $target$$193 = 1;
      }
    } else {
      $target$$193 = 1;
    }
  } else {
    $target$$193 = 1;
  }

  switch ($target$$193) {
    case 0:
      {
        return x$$118;
      }

    case 1:
      {
        var $target$$194, tcref$$70, x$$120;

        if (matchValue$$94.tag === 1) {
          if (matchValue$$94.fields[1].tail != null) {
            if (matchValue$$94.fields[1].tail.tail == null) {
              if (x$$119 = matchValue$$94.fields[1].head, (tcref$$69 = matchValue$$94.fields[0], tyconRefEq(g$$219, (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$219), tcref$$69))) {
                $target$$194 = 0;
                tcref$$70 = matchValue$$94.fields[0];
                x$$120 = matchValue$$94.fields[1].head;
              } else {
                $target$$194 = 1;
              }
            } else {
              $target$$194 = 1;
            }
          } else {
            $target$$194 = 1;
          }
        } else {
          $target$$194 = 1;
        }

        switch ($target$$194) {
          case 0:
            {
              return x$$120;
            }

          case 1:
            {
              throw new Error("destByrefTy: not a byref type");
            }
        }
      }
  }
}

function $007CByrefTy$007C_$007C(g$$220, ty$$177) {
  if (isByrefTy(g$$220, ty$$177)) {
    return destByrefTy(g$$220, ty$$177);
  } else {
    return null;
  }
}

function destNativePtrTy(g$$221, ty$$178) {
  var x$$121, tcref$$71;
  const matchValue$$95 = stripTyEqns(g$$221, ty$$178);
  var $target$$195, tcref$$72, x$$122;

  if (matchValue$$95.tag === 1) {
    if (matchValue$$95.fields[1].tail != null) {
      if (matchValue$$95.fields[1].tail.tail == null) {
        if (x$$121 = matchValue$$95.fields[1].head, (tcref$$71 = matchValue$$95.fields[0], tyconRefEq(g$$221, (0, _TcGlobals.TcGlobals$$get_nativeptr_tcr)(g$$221), tcref$$71))) {
          $target$$195 = 0;
          tcref$$72 = matchValue$$95.fields[0];
          x$$122 = matchValue$$95.fields[1].head;
        } else {
          $target$$195 = 1;
        }
      } else {
        $target$$195 = 1;
      }
    } else {
      $target$$195 = 1;
    }
  } else {
    $target$$195 = 1;
  }

  switch ($target$$195) {
    case 0:
      {
        return x$$122;
      }

    case 1:
      {
        throw new Error("destNativePtrTy: not a native ptr type");
      }
  }
}

function isRefCellTy(g$$222, ty$$179) {
  const matchValue$$96 = tryDestAppTy(g$$222, ty$$179);

  if (matchValue$$96 != null) {
    const tcref$$73 = matchValue$$96;
    return tyconRefEq(g$$222, (0, _TcGlobals.TcGlobals$$get_refcell_tcr_canon)(g$$222), tcref$$73);
  } else {
    return false;
  }
}

function destRefCellTy(g$$223, ty$$180) {
  var x$$123, tcref$$74;
  const matchValue$$97 = stripTyEqns(g$$223, ty$$180);
  var $target$$196, tcref$$75, x$$124;

  if (matchValue$$97.tag === 1) {
    if (matchValue$$97.fields[1].tail != null) {
      if (matchValue$$97.fields[1].tail.tail == null) {
        if (x$$123 = matchValue$$97.fields[1].head, (tcref$$74 = matchValue$$97.fields[0], tyconRefEq(g$$223, (0, _TcGlobals.TcGlobals$$get_refcell_tcr_canon)(g$$223), tcref$$74))) {
          $target$$196 = 0;
          tcref$$75 = matchValue$$97.fields[0];
          x$$124 = matchValue$$97.fields[1].head;
        } else {
          $target$$196 = 1;
        }
      } else {
        $target$$196 = 1;
      }
    } else {
      $target$$196 = 1;
    }
  } else {
    $target$$196 = 1;
  }

  switch ($target$$196) {
    case 0:
      {
        return x$$124;
      }

    case 1:
      {
        throw new Error("destRefCellTy: not a ref type");
      }
  }
}

function StripSelfRefCell(g$$224, baseOrThisInfo, tau$$10) {
  if ((0, _Util.equals)(baseOrThisInfo, new _tast.ValBaseOrThisInfo(0, "CtorThisVal")) ? isRefCellTy(g$$224, tau$$10) : false) {
    return destRefCellTy(g$$224, tau$$10);
  } else {
    return tau$$10;
  }
}

function mkRefCellTy(g$$225, ty$$181) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_refcell_tcr_nice)(g$$225), (0, _Types.L)(ty$$181, (0, _Types.L)()));
}

function mkLazyTy(g$$226, ty$$182) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_lazy_tcr_nice)(g$$226), (0, _Types.L)(ty$$182, (0, _Types.L)()));
}

function mkPrintfFormatTy(g$$227, aty$$2, bty$$2, cty, dty$$2, ety$$1) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_format_tcr)(g$$227), (0, _Types.L)(aty$$2, (0, _Types.L)(bty$$2, (0, _Types.L)(cty, (0, _Types.L)(dty$$2, (0, _Types.L)(ety$$1, (0, _Types.L)()))))));
}

function mkOptionTy(g$$228, ty$$183) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_option_tcr_nice)(g$$228), (0, _Types.L)(ty$$183, (0, _Types.L)()));
}

function mkListTy(g$$229, ty$$184) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_list_tcr_nice)(g$$229), (0, _Types.L)(ty$$184, (0, _Types.L)()));
}

function isOptionTy(g$$230, ty$$185) {
  const matchValue$$98 = tryDestAppTy(g$$230, ty$$185);

  if (matchValue$$98 != null) {
    const tcref$$76 = matchValue$$98;
    return tyconRefEq(g$$230, (0, _TcGlobals.TcGlobals$$get_option_tcr_canon)(g$$230), tcref$$76);
  } else {
    return false;
  }
}

function tryDestOptionTy(g$$231, ty$$186) {
  var ty1$$7;
  const matchValue$$99 = argsOfAppTy(g$$231, ty$$186);
  var $target$$197, ty1$$8;

  if (matchValue$$99.tail != null) {
    if (matchValue$$99.tail.tail == null) {
      if (ty1$$7 = matchValue$$99.head, isOptionTy(g$$231, ty$$186)) {
        $target$$197 = 0;
        ty1$$8 = matchValue$$99.head;
      } else {
        $target$$197 = 1;
      }
    } else {
      $target$$197 = 1;
    }
  } else {
    $target$$197 = 1;
  }

  switch ($target$$197) {
    case 0:
      {
        return ty1$$8;
      }

    case 1:
      {
        return null;
      }
  }
}

function destOptionTy(g$$232, ty$$187) {
  const matchValue$$100 = tryDestOptionTy(g$$232, ty$$187);

  if (matchValue$$100 == null) {
    throw new Error("destOptionTy: not an option type");
  } else {
    const ty$$188 = matchValue$$100;
    return ty$$188;
  }
}

function isLinqExpressionTy(g$$233, ty$$189) {
  const matchValue$$101 = tryDestAppTy(g$$233, ty$$189);

  if (matchValue$$101 != null) {
    const tcref$$77 = matchValue$$101;
    return tyconRefEq(g$$233, (0, _TcGlobals.TcGlobals$$get_system_LinqExpression_tcref)(g$$233), tcref$$77);
  } else {
    return false;
  }
}

function tryDestLinqExpressionTy(g$$234, ty$$190) {
  var ty1$$9;
  const matchValue$$102 = argsOfAppTy(g$$234, ty$$190);
  var $target$$198, ty1$$10;

  if (matchValue$$102.tail != null) {
    if (matchValue$$102.tail.tail == null) {
      if (ty1$$9 = matchValue$$102.head, isLinqExpressionTy(g$$234, ty$$190)) {
        $target$$198 = 0;
        ty1$$10 = matchValue$$102.head;
      } else {
        $target$$198 = 1;
      }
    } else {
      $target$$198 = 1;
    }
  } else {
    $target$$198 = 1;
  }

  switch ($target$$198) {
    case 0:
      {
        return ty1$$10;
      }

    case 1:
      {
        return null;
      }
  }
}

function destLinqExpressionTy(g$$235, ty$$191) {
  const matchValue$$103 = tryDestLinqExpressionTy(g$$235, ty$$191);

  if (matchValue$$103 == null) {
    throw new Error("destLinqExpressionTy: not an expression type");
  } else {
    const ty$$192 = matchValue$$103;
    return ty$$192;
  }
}

function mkNoneCase(g$$236) {
  return (0, _tast.mkUnionCaseRef)((0, _TcGlobals.TcGlobals$$get_option_tcr_canon)(g$$236), "None");
}

function mkSomeCase(g$$237) {
  return (0, _tast.mkUnionCaseRef)((0, _TcGlobals.TcGlobals$$get_option_tcr_canon)(g$$237), "Some");
}

function ValRef$002Eget_IsDispatchSlot(vref$$16) {
  const matchValue$$104 = (0, _tast.ValRef$$get_MemberInfo)(vref$$16);

  if (matchValue$$104 == null) {
    return false;
  } else {
    const membInfo$$9 = matchValue$$104;
    return membInfo$$9.MemberFlags.IsDispatchSlot;
  }
}

function $007CUnopExpr$007C_$007C(_g$$1, expr$$1) {
  var $target$$199, arg1, vref$$17;

  if (expr$$1.tag === 5) {
    if (expr$$1.fields[0].tag === 1) {
      if (expr$$1.fields[3].tail != null) {
        if (expr$$1.fields[3].tail.tail == null) {
          $target$$199 = 0;
          arg1 = expr$$1.fields[3].head;
          vref$$17 = expr$$1.fields[0].fields[0];
        } else {
          $target$$199 = 1;
        }
      } else {
        $target$$199 = 1;
      }
    } else {
      $target$$199 = 1;
    }
  } else {
    $target$$199 = 1;
  }

  switch ($target$$199) {
    case 0:
      {
        return [vref$$17, arg1];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CBinopExpr$007C_$007C(_g$$2, expr$$2) {
  var $target$$200, arg1$$1, arg2, vref$$18;

  if (expr$$2.tag === 5) {
    if (expr$$2.fields[0].tag === 1) {
      if (expr$$2.fields[3].tail != null) {
        if (expr$$2.fields[3].tail.tail != null) {
          if (expr$$2.fields[3].tail.tail.tail == null) {
            $target$$200 = 0;
            arg1$$1 = expr$$2.fields[3].head;
            arg2 = expr$$2.fields[3].tail.head;
            vref$$18 = expr$$2.fields[0].fields[0];
          } else {
            $target$$200 = 1;
          }
        } else {
          $target$$200 = 1;
        }
      } else {
        $target$$200 = 1;
      }
    } else {
      $target$$200 = 1;
    }
  } else {
    $target$$200 = 1;
  }

  switch ($target$$200) {
    case 0:
      {
        return [vref$$18, arg1$$1, arg2];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CSpecificUnopExpr$007C_$007C(g$$238, vrefReqd, expr$$3) {
  var vref$$19, arg1$$2;
  var $target$$201, arg1$$3, vref$$20;
  const activePatternResult32448 = $007CUnopExpr$007C_$007C(g$$238, expr$$3);

  if (activePatternResult32448 != null) {
    if (vref$$19 = activePatternResult32448[0], (arg1$$2 = activePatternResult32448[1], valRefEq(g$$238, vref$$19, vrefReqd))) {
      $target$$201 = 0;
      arg1$$3 = activePatternResult32448[1];
      vref$$20 = activePatternResult32448[0];
    } else {
      $target$$201 = 1;
    }
  } else {
    $target$$201 = 1;
  }

  switch ($target$$201) {
    case 0:
      {
        return arg1$$3;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CSpecificBinopExpr$007C_$007C(g$$239, vrefReqd$$1, expr$$4) {
  var vref$$21, arg2$$1, arg1$$4;
  var $target$$202, arg1$$5, arg2$$2, vref$$22;
  const activePatternResult32453 = $007CBinopExpr$007C_$007C(g$$239, expr$$4);

  if (activePatternResult32453 != null) {
    if (vref$$21 = activePatternResult32453[0], (arg2$$1 = activePatternResult32453[2], (arg1$$4 = activePatternResult32453[1], valRefEq(g$$239, vref$$21, vrefReqd$$1)))) {
      $target$$202 = 0;
      arg1$$5 = activePatternResult32453[1];
      arg2$$2 = activePatternResult32453[2];
      vref$$22 = activePatternResult32453[0];
    } else {
      $target$$202 = 1;
    }
  } else {
    $target$$202 = 1;
  }

  switch ($target$$202) {
    case 0:
      {
        return [arg1$$5, arg2$$2];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CEnumExpr$007C_$007C(g$$240, expr$$5) {
  const matchValue$$105 = $007CSpecificUnopExpr$007C_$007C(g$$240, (0, _TcGlobals.TcGlobals$$get_enum_vref)(g$$240), expr$$5);

  if (matchValue$$105 == null) {
    return $007CSpecificUnopExpr$007C_$007C(g$$240, (0, _TcGlobals.TcGlobals$$get_enumOfValue_vref)(g$$240), expr$$5);
  } else {
    const x$$125 = matchValue$$105;
    return x$$125;
  }
}

function $007CBitwiseOrExpr$007C_$007C(g$$241, expr$$6) {
  return $007CSpecificBinopExpr$007C_$007C(g$$241, (0, _TcGlobals.TcGlobals$$get_bitwise_or_vref)(g$$241), expr$$6);
}

function $007CAttribBitwiseOrExpr$007C_$007C(g$$242, expr$$7) {
  var arg2$$4, arg1$$7;
  const activePatternResult32462 = $007CBitwiseOrExpr$007C_$007C(g$$242, expr$$7);

  if (activePatternResult32462 != null) {
    return [activePatternResult32462[0], activePatternResult32462[1]];
  } else {
    var $target$$203, arg1$$8, arg2$$5;

    if (expr$$7.tag === 5) {
      if (expr$$7.fields[0].tag === 3) {
        if (expr$$7.fields[3].tail != null) {
          if (expr$$7.fields[3].tail.tail != null) {
            if (expr$$7.fields[3].tail.tail.tail == null) {
              if (arg2$$4 = expr$$7.fields[3].tail.head, (arg1$$7 = expr$$7.fields[3].head, (0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$242))) {
                $target$$203 = 0;
                arg1$$8 = expr$$7.fields[3].head;
                arg2$$5 = expr$$7.fields[3].tail.head;
              } else {
                $target$$203 = 1;
              }
            } else {
              $target$$203 = 1;
            }
          } else {
            $target$$203 = 1;
          }
        } else {
          $target$$203 = 1;
        }
      } else {
        $target$$203 = 1;
      }
    } else {
      $target$$203 = 1;
    }

    switch ($target$$203) {
      case 0:
        {
          return [arg1$$8, arg2$$5];
        }

      case 1:
        {
          return null;
        }
    }
  }
}

function isUncheckedDefaultOfValRef(g$$243, vref$$23) {
  if (valRefEq(g$$243, vref$$23, (0, _TcGlobals.TcGlobals$$get_unchecked_defaultof_vref)(g$$243))) {
    return true;
  } else if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$243)) {
    return (0, _tast.ValRef$$get_LogicalName)(vref$$23) === "defaultof";
  } else {
    return false;
  }
}

function isTypeOfValRef(g$$244, vref$$24) {
  if (valRefEq(g$$244, vref$$24, (0, _TcGlobals.TcGlobals$$get_typeof_vref)(g$$244))) {
    return true;
  } else if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$244)) {
    return (0, _tast.ValRef$$get_LogicalName)(vref$$24) === "typeof";
  } else {
    return false;
  }
}

function isSizeOfValRef(g$$245, vref$$25) {
  if (valRefEq(g$$245, vref$$25, (0, _TcGlobals.TcGlobals$$get_sizeof_vref)(g$$245))) {
    return true;
  } else if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$245)) {
    return (0, _tast.ValRef$$get_LogicalName)(vref$$25) === "sizeof";
  } else {
    return false;
  }
}

function isTypeDefOfValRef(g$$246, vref$$26) {
  if (valRefEq(g$$246, vref$$26, (0, _TcGlobals.TcGlobals$$get_typedefof_vref)(g$$246))) {
    return true;
  } else if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$246)) {
    return (0, _tast.ValRef$$get_LogicalName)(vref$$26) === "typedefof";
  } else {
    return false;
  }
}

function $007CUncheckedDefaultOfExpr$007C_$007C(g$$247, expr$$9) {
  var vref$$27, ty$$193;
  var $target$$204, ty$$194, vref$$28;

  if (expr$$9.tag === 5) {
    if (expr$$9.fields[0].tag === 1) {
      if (expr$$9.fields[2].tail != null) {
        if (expr$$9.fields[2].tail.tail == null) {
          if (expr$$9.fields[3].tail == null) {
            if (vref$$27 = expr$$9.fields[0].fields[0], (ty$$193 = expr$$9.fields[2].head, isUncheckedDefaultOfValRef(g$$247, vref$$27))) {
              $target$$204 = 0;
              ty$$194 = expr$$9.fields[2].head;
              vref$$28 = expr$$9.fields[0].fields[0];
            } else {
              $target$$204 = 1;
            }
          } else {
            $target$$204 = 1;
          }
        } else {
          $target$$204 = 1;
        }
      } else {
        $target$$204 = 1;
      }
    } else {
      $target$$204 = 1;
    }
  } else {
    $target$$204 = 1;
  }

  switch ($target$$204) {
    case 0:
      {
        return ty$$194;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CTypeOfExpr$007C_$007C(g$$248, expr$$10) {
  var vref$$29, ty$$195;
  var $target$$205, ty$$196, vref$$30;

  if (expr$$10.tag === 5) {
    if (expr$$10.fields[0].tag === 1) {
      if (expr$$10.fields[2].tail != null) {
        if (expr$$10.fields[2].tail.tail == null) {
          if (expr$$10.fields[3].tail == null) {
            if (vref$$29 = expr$$10.fields[0].fields[0], (ty$$195 = expr$$10.fields[2].head, isTypeOfValRef(g$$248, vref$$29))) {
              $target$$205 = 0;
              ty$$196 = expr$$10.fields[2].head;
              vref$$30 = expr$$10.fields[0].fields[0];
            } else {
              $target$$205 = 1;
            }
          } else {
            $target$$205 = 1;
          }
        } else {
          $target$$205 = 1;
        }
      } else {
        $target$$205 = 1;
      }
    } else {
      $target$$205 = 1;
    }
  } else {
    $target$$205 = 1;
  }

  switch ($target$$205) {
    case 0:
      {
        return ty$$196;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CSizeOfExpr$007C_$007C(g$$249, expr$$11) {
  var vref$$31, ty$$197;
  var $target$$206, ty$$198, vref$$32;

  if (expr$$11.tag === 5) {
    if (expr$$11.fields[0].tag === 1) {
      if (expr$$11.fields[2].tail != null) {
        if (expr$$11.fields[2].tail.tail == null) {
          if (expr$$11.fields[3].tail == null) {
            if (vref$$31 = expr$$11.fields[0].fields[0], (ty$$197 = expr$$11.fields[2].head, isSizeOfValRef(g$$249, vref$$31))) {
              $target$$206 = 0;
              ty$$198 = expr$$11.fields[2].head;
              vref$$32 = expr$$11.fields[0].fields[0];
            } else {
              $target$$206 = 1;
            }
          } else {
            $target$$206 = 1;
          }
        } else {
          $target$$206 = 1;
        }
      } else {
        $target$$206 = 1;
      }
    } else {
      $target$$206 = 1;
    }
  } else {
    $target$$206 = 1;
  }

  switch ($target$$206) {
    case 0:
      {
        return ty$$198;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CTypeDefOfExpr$007C_$007C(g$$250, expr$$12) {
  var vref$$33, ty$$199;
  var $target$$207, ty$$200, vref$$34;

  if (expr$$12.tag === 5) {
    if (expr$$12.fields[0].tag === 1) {
      if (expr$$12.fields[2].tail != null) {
        if (expr$$12.fields[2].tail.tail == null) {
          if (expr$$12.fields[3].tail == null) {
            if (vref$$33 = expr$$12.fields[0].fields[0], (ty$$199 = expr$$12.fields[2].head, isTypeDefOfValRef(g$$250, vref$$33))) {
              $target$$207 = 0;
              ty$$200 = expr$$12.fields[2].head;
              vref$$34 = expr$$12.fields[0].fields[0];
            } else {
              $target$$207 = 1;
            }
          } else {
            $target$$207 = 1;
          }
        } else {
          $target$$207 = 1;
        }
      } else {
        $target$$207 = 1;
      }
    } else {
      $target$$207 = 1;
    }
  } else {
    $target$$207 = 1;
  }

  switch ($target$$207) {
    case 0:
      {
        return ty$$200;
      }

    case 1:
      {
        return null;
      }
  }
}

const DebugPrint$$$layoutRanges = new _Types.FSharpRef(false);
exports.DebugPrint$$$layoutRanges = DebugPrint$$$layoutRanges;

function DebugPrint$$$squareAngleL(x$$126) {
  return (0, _layout.op_HatHat)(_layout.LeftL$$$leftBracketAngle, (0, _layout.op_HatHat)(x$$126, _layout.RightL$$$rightBracketAngle));
}

function DebugPrint$$$angleL(x$$127) {
  return (0, _layout.op_HatHat)((0, _layout.sepL)(_layout.TaggedTextOps$002ELiterals$$$leftAngle), (0, _layout.op_HatHat)(x$$127, (0, _layout.rightL)(_layout.TaggedTextOps$002ELiterals$$$rightAngle)));
}

function DebugPrint$$$braceL(x$$128) {
  return (0, _layout.op_HatHat)((0, _layout.leftL)(_layout.TaggedTextOps$002ELiterals$$$leftBrace), (0, _layout.op_HatHat)(x$$128, (0, _layout.rightL)(_layout.TaggedTextOps$002ELiterals$$$rightBrace)));
}

function DebugPrint$$$boolL(_arg1$$92) {
  if (_arg1$$92) {
    return _layout.WordL$$$keywordTrue;
  } else {
    return _layout.WordL$$$keywordFalse;
  }
}

function DebugPrint$$$intL(n$$15) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(n$$15)));
}

function DebugPrint$$$int64L(n$$16) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(n$$16)));
}

function DebugPrint$$$jlistL(xL, xmap) {
  return (0, _QueueList.QueueListModule$$$foldBack)(function (x$$129, z$$23) {
    return (0, _layout.op_AtAt)(z$$23, xL(x$$129));
  }, xmap, _layout.emptyL);
}

function DebugPrint$$$bracketIfL(x$$130, lyt) {
  if (x$$130) {
    return (0, _layout.bracketL)(lyt);
  } else {
    return lyt;
  }
}

function DebugPrint$$$lvalopL(x$$131) {
  switch (x$$131.tag) {
    case 1:
      {
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("LByrefGet"));
      }

    case 2:
      {
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("LSet"));
      }

    case 3:
      {
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("LByrefSet"));
      }

    default:
      {
        const readonly$$6 = x$$131.fields[0];
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _String.toText)((0, _String.printf)("LAddrOf(%b)"))(readonly$$6)));
      }
  }
}

function DebugPrint$$$angleBracketL(l$$28) {
  return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("<")), (0, _layout.op_HatHat)(l$$28, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(">"))));
}

function DebugPrint$$$angleBracketListL(l$$29) {
  return DebugPrint$$$angleBracketL((0, _layout.sepListL)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)(",")), l$$29));
}

function DebugPrint$$$layoutMemberFlags(memFlags) {
  const stat = (memFlags.IsInstance ? true : (0, _Util.equals)(memFlags.MemberKind, new _ast.MemberKind(1, "Constructor"))) ? _layout.emptyL : (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("static"));
  const stat$$1 = memFlags.IsDispatchSlot ? (0, _layout.op_PlusPlus)(stat, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("abstract"))) : memFlags.IsOverrideOrExplicitImpl ? (0, _layout.op_PlusPlus)(stat, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("override"))) : stat;
  return stat$$1;
}

function DebugPrint$$$stampL(_n, w) {
  return w;
}

function DebugPrint$$$layoutTyconRef(tc$$11) {
  return DebugPrint$$$stampL((0, _tast.EntityRef$$get_Stamp)(tc$$11), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.EntityRef$$get_DisplayNameWithStaticParameters)(tc$$11))));
}

function DebugPrint$$$auxTypeL(env, ty$$201) {
  return DebugPrint$$$auxTypeWrapL(env, false, ty$$201);
}

function DebugPrint$$$auxTypeAtomL(env$$1, ty$$202) {
  return DebugPrint$$$auxTypeWrapL(env$$1, true, ty$$202);
}

function DebugPrint$$$auxTyparsL(env$$2, tcL, prefix, tinst$$40) {
  if (tinst$$40.tail != null) {
    if (tinst$$40.tail.tail == null) {
      const tL = DebugPrint$$$auxTypeAtomL(env$$2, tinst$$40.head);

      if (prefix) {
        return (0, _layout.op_HatHat)(tcL, DebugPrint$$$angleBracketL(tL));
      } else {
        return (0, _layout.op_HatHat)(tL, tcL);
      }
    } else {
      const tinstL = (0, _List.map)(function (ty$$203) {
        return DebugPrint$$$auxTypeL(env$$2, ty$$203);
      }, tinst$$40);

      if (prefix) {
        return (0, _layout.op_HatHat)(tcL, DebugPrint$$$angleBracketListL(tinstL));
      } else {
        return (0, _layout.op_HatHat)((0, _layout.tupleL)(tinstL), tcL);
      }
    }
  } else {
    return tcL;
  }
}

function DebugPrint$$$auxTypeWrapL(env$$3, isAtomic, ty$$204) {
  const wrap = function wrap(x$$132) {
    return DebugPrint$$$bracketIfL(isAtomic, x$$132);
  };

  const matchValue$$106 = (0, _tast.stripTyparEqns)(ty$$204);
  var $target$$210, tcref$$78, tinst$$41;

  switch (matchValue$$106.tag) {
    case 4:
      $target$$210 = 1;
      tcref$$78 = matchValue$$106.fields[0].fields[0];
      tinst$$41 = matchValue$$106.fields[1];
      break;

    case 1:
      $target$$210 = 1;
      tcref$$78 = matchValue$$106.fields[0];
      tinst$$41 = matchValue$$106.fields[1];
      break;

    case 2:
      $target$$210 = 2;
      break;

    case 3:
      $target$$210 = 3;
      break;

    case 5:
      $target$$210 = 4;
      break;

    case 6:
      $target$$210 = 5;
      break;

    default:
      $target$$210 = 0;
  }

  switch ($target$$210) {
    case 0:
      {
        const typars$$1 = matchValue$$106.fields[0];
        const rty$$32 = matchValue$$106.fields[1];
        return wrap((0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("!")), (0, _layout.op_MinusMinusMinus)(DebugPrint$$$layoutTyparDecls(typars$$1), DebugPrint$$$auxTypeL(env$$3, rty$$32))));
      }

    case 1:
      {
        const prefix$$1 = (0, _tast.EntityRef$$get_IsPrefixDisplay)(tcref$$78);
        const tcL$$1 = DebugPrint$$$layoutTyconRef(tcref$$78);
        return DebugPrint$$$auxTyparsL(env$$3, tcL$$1, prefix$$1, tinst$$41);
      }

    case 2:
      {
        const tys$$17 = matchValue$$106.fields[1];
        const _tupInfo = matchValue$$106.fields[0];
        return wrap((0, _layout.sepListL)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("*")), (0, _List.map)(function (ty$$205) {
          return DebugPrint$$$auxTypeAtomL(env$$3, ty$$205);
        }, tys$$17)));
      }

    case 3:
      {
        const x$$133 = matchValue$$106.fields[1];
        const f$$34 = matchValue$$106.fields[0];
        return wrap((0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(DebugPrint$$$auxTypeAtomL(env$$3, f$$34), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("->"))), DebugPrint$$$auxTypeL(env$$3, x$$133)));
      }

    case 4:
      {
        const typar$$2 = matchValue$$106.fields[0];
        return DebugPrint$$$auxTyparWrapL(env$$3, isAtomic, typar$$2);
      }

    case 5:
      {
        const unt$$30 = matchValue$$106.fields[0];
        unt$$30;
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("<measure>"));
      }
  }
}

function DebugPrint$$$auxTyparWrapL(env$$4, isAtomic$$1, typar$$3) {
  const wrap$$1 = function wrap$$1(x$$134) {
    return DebugPrint$$$bracketIfL(isAtomic$$1, x$$134);
  };

  const tpL = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(prefixOfStaticReq((0, _tast.Typar$$get_StaticReq)(typar$$3)) + prefixOfRigidTypar(typar$$3) + (0, _tast.Typar$$get_DisplayName)(typar$$3)));
  const varL = DebugPrint$$$stampL((0, _tast.Typar$$get_Stamp)(typar$$3), tpL);
  const matchValue$$107 = (0, _zmap.ZmapModule$$$tryFind)(typar$$3, env$$4.inplaceConstraints);

  if (matchValue$$107 != null) {
    const typarConstraintTy = matchValue$$107;

    if ((0, _zset.ZsetModule$$$contains)(typar$$3, env$$4.singletons)) {
      return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("#")), DebugPrint$$$auxTyparConstraintTypL(env$$4, typarConstraintTy));
    } else {
      return wrap$$1((0, _layout.op_HatHat)(varL, (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)(":>")), DebugPrint$$$auxTyparConstraintTypL(env$$4, typarConstraintTy))));
    }
  } else {
    return varL;
  }
}

function DebugPrint$$$auxTypar2L(env$$5, typar$$4) {
  return DebugPrint$$$auxTyparWrapL(env$$5, false, typar$$4);
}

function DebugPrint$$$auxTyparAtomL(env$$6, typar$$5) {
  return DebugPrint$$$auxTyparWrapL(env$$6, true, typar$$5);
}

function DebugPrint$$$auxTyparConstraintTypL(env$$7, ty$$206) {
  return DebugPrint$$$auxTypeL(env$$7, ty$$206);
}

function DebugPrint$$$auxTraitL(env$$8, ttrait) {
  [env$$8, ttrait];
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("trait"));
}

function DebugPrint$$$auxTyparConstraintL(env$$9, tp$$37, tpc$$6) {
  const constraintPrefix = function constraintPrefix(l$$30) {
    return (0, _layout.op_HatHat)(DebugPrint$$$auxTypar2L(env$$9, tp$$37), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":")), l$$30));
  };

  switch (tpc$$6.tag) {
    case 3:
      {
        const traitInfo$$3 = tpc$$6.fields[0];
        return (0, _layout.op_HatHat)(DebugPrint$$$auxTypar2L(env$$9, tp$$37), (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":")), DebugPrint$$$auxTraitL(env$$9, traitInfo$$3)));
      }

    case 1:
      {
        const ty$$207 = tpc$$6.fields[1];
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("default")), (0, _layout.op_HatHat)(DebugPrint$$$auxTypar2L(env$$9, tp$$37), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":")), DebugPrint$$$auxTypeL(env$$9, ty$$207))));
      }

    case 8:
      {
        const ty$$208 = tpc$$6.fields[0];
        return constraintPrefix(DebugPrint$$$auxTyparsL(env$$9, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("enum")), true, (0, _Types.L)(ty$$208, (0, _Types.L)())));
      }

    case 11:
      {
        const bty$$3 = tpc$$6.fields[1];
        const aty$$3 = tpc$$6.fields[0];
        return constraintPrefix(DebugPrint$$$auxTyparsL(env$$9, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("delegate")), true, (0, _Types.L)(aty$$3, (0, _Types.L)(bty$$3, (0, _Types.L)()))));
      }

    case 2:
      {
        return constraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("null")));
      }

    case 9:
      {
        return constraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("comparison")));
      }

    case 10:
      {
        return constraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("equality")));
      }

    case 4:
      {
        return constraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("struct")));
      }

    case 5:
      {
        return constraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("not struct")));
      }

    case 12:
      {
        return constraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("unmanaged")));
      }

    case 6:
      {
        const tys$$18 = tpc$$6.fields[0];
        return constraintPrefix((0, _layout.bracketL)((0, _layout.sepListL)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)("|")), (0, _List.map)(function (ty$$209) {
          return DebugPrint$$$auxTypeL(env$$9, ty$$209);
        }, tys$$18))));
      }

    case 7:
      {
        return constraintPrefix((0, _layout.bracketL)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("new : unit -> ")), DebugPrint$$$auxTypar2L(env$$9, tp$$37))));
      }

    default:
      {
        const typarConstraintTy$$1 = tpc$$6.fields[0];
        return (0, _layout.op_HatHat)(DebugPrint$$$auxTypar2L(env$$9, tp$$37), (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":>")), DebugPrint$$$auxTyparConstraintTypL(env$$9, typarConstraintTy$$1)));
      }
  }
}

function DebugPrint$$$auxTyparConstraintsL(env$$10, x$$135) {
  if (x$$135.tail == null) {
    return _layout.emptyL;
  } else {
    const cxs$$4 = x$$135;
    return (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("when")), (0, _layout.aboveListL)((0, _List.map)(function (tupledArg$$43) {
      return DebugPrint$$$auxTyparConstraintL(env$$10, tupledArg$$43[0], tupledArg$$43[1]);
    }, cxs$$4)));
  }
}

function DebugPrint$$$typarL(tp$$39) {
  return DebugPrint$$$auxTypar2L(SimplifyTypes$$$typeSimplificationInfo0, tp$$39);
}

function DebugPrint$$$typarAtomL(tp$$40) {
  return DebugPrint$$$auxTyparAtomL(SimplifyTypes$$$typeSimplificationInfo0, tp$$40);
}

function DebugPrint$$$typeAtomL(tau$$11) {
  const patternInput$$43 = [tau$$11, (0, _Types.L)()];
  const env$$11 = SimplifyTypes$$$CollectInfo(false, (0, _Types.L)(patternInput$$43[0], (0, _Types.L)()), patternInput$$43[1]);

  if (env$$11.postfixConstraints.tail == null) {
    return DebugPrint$$$auxTypeAtomL(env$$11, patternInput$$43[0]);
  } else {
    return (0, _layout.bracketL)((0, _layout.op_MinusMinusMinus)(DebugPrint$$$auxTypeL(env$$11, patternInput$$43[0]), DebugPrint$$$auxTyparConstraintsL(env$$11, env$$11.postfixConstraints)));
  }
}

function DebugPrint$$$typeL(tau$$13) {
  const patternInput$$44 = [tau$$13, (0, _Types.L)()];
  const env$$12 = SimplifyTypes$$$CollectInfo(false, (0, _Types.L)(patternInput$$44[0], (0, _Types.L)()), patternInput$$44[1]);

  if (env$$12.postfixConstraints.tail == null) {
    return DebugPrint$$$auxTypeL(env$$12, patternInput$$44[0]);
  } else {
    return (0, _layout.op_MinusMinusMinus)(DebugPrint$$$auxTypeL(env$$12, patternInput$$44[0]), DebugPrint$$$auxTyparConstraintsL(env$$12, env$$12.postfixConstraints));
  }
}

function DebugPrint$$$typarDeclL(tp$$41) {
  const patternInput$$45 = [(0, _tast.mkTyparTy)(tp$$41), (0, _List.map)(function (x$$136) {
    return [tp$$41, x$$136];
  }, (0, _tast.Typar$$get_Constraints)(tp$$41))];
  const env$$13 = SimplifyTypes$$$CollectInfo(false, (0, _Types.L)(patternInput$$45[0], (0, _Types.L)()), patternInput$$45[1]);

  if (env$$13.postfixConstraints.tail == null) {
    return DebugPrint$$$auxTypeL(env$$13, patternInput$$45[0]);
  } else {
    return (0, _layout.op_MinusMinusMinus)(DebugPrint$$$auxTypeL(env$$13, patternInput$$45[0]), DebugPrint$$$auxTyparConstraintsL(env$$13, env$$13.postfixConstraints));
  }
}

function DebugPrint$$$layoutTyparDecls(tps$$34) {
  return DebugPrint$$$angleBracketListL((0, _List.map)(DebugPrint$$$typarDeclL, tps$$34));
}

function DebugPrint$$$rangeL(m$$123) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _range.stringOfRange)(m$$123)));
}

function DebugPrint$$$instL(tyL, tys$$19) {
  if (tys$$19.tail == null) {
    return _layout.emptyL;
  } else {
    const tys$$20 = tys$$19;
    return (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)("@[")), (0, _layout.op_HatHat)((0, _layout.commaListL)((0, _List.map)(tyL, tys$$20)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("]"))));
  }
}

function DebugPrint$$$valRefL(vr) {
  return DebugPrint$$$stampL((0, _tast.ValRef$$get_Stamp)(vr), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.ValRef$$get_LogicalName)(vr))));
}

function DebugPrint$$$layoutAttrib(_arg1$$93) {
  var vref$$35, ilmeth;
  const k = _arg1$$93.fields[1];
  return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("[<")), (0, _layout.op_HatHat)(k.tag === 1 ? (vref$$35 = k.fields[0], DebugPrint$$$valRefL(vref$$35)) : (ilmeth = k.fields[0], (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _il.ILMethodRef$$get_Name)(ilmeth)))), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(">]"))));
}

function DebugPrint$$$layoutAttribs(attribs$$1) {
  return (0, _layout.aboveListL)((0, _List.map)(DebugPrint$$$layoutAttrib, attribs$$1));
}

function DebugPrint$$$arityInfoL(_arg1$$94) {
  const tvd = _arg1$$94;
  const tpNames = tvd.fields[0];
  const ns = (0, _tast.ValReprInfo$$get_AritiesOfArgs)(tvd);
  return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("arity<")), (0, _layout.op_HatHat)(DebugPrint$$$intL((0, _List.length)(tpNames)), (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)(">[")), (0, _layout.op_HatHat)((0, _layout.commaListL)((0, _List.map)(DebugPrint$$$intL, ns)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("]"))))));
}

function DebugPrint$$$valL(vspec$$1) {
  const vsL = DebugPrint$$$stampL((0, _tast.Val$$get_Stamp)(vspec$$1), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _PrettyNaming.DecompileOpName)((0, _tast.Val$$get_LogicalName)(vspec$$1)))));
  const vsL$$1 = (0, _layout.op_MinusMinus)(vsL, DebugPrint$$$layoutAttribs((0, _tast.Val$$get_Attribs)(vspec$$1)));
  return vsL$$1;
}

function DebugPrint$$$typeOfValL(v$$72) {
  return (0, _layout.op_MinusMinus)((0, _layout.op_HatHat)(DebugPrint$$$valL(v$$72), (0, _layout.op_HatHat)((0, _tast.Val$$get_MustInline)(v$$72) ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("inline ")) : _layout.emptyL, (0, _layout.op_HatHat)((0, _tast.Val$$get_IsMutable)(v$$72) ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("mutable ")) : _layout.emptyL, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":"))))), DebugPrint$$$typeL((0, _tast.Val$$get_Type)(v$$72)));
}

function DebugPrint$$$tslotparamL(_arg1$$95) {
  const ty$$210 = _arg1$$95.fields[1];
  const outFlag = _arg1$$95.fields[3];
  const nmOpt = _arg1$$95.fields[0];
  const inFlag = _arg1$$95.fields[2];
  return (0, _layout.op_HatHat)((0, _layout.optionL)(function ($arg$$30) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)($arg$$30));
  }, nmOpt), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":")), (0, _layout.op_HatHat)(DebugPrint$$$typeL(ty$$210), (0, _layout.op_HatHat)(inFlag ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("[in]")) : _layout.emptyL, (0, _layout.op_HatHat)(outFlag ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("[out]")) : _layout.emptyL, inFlag ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("[opt]")) : _layout.emptyL)))));
}

function DebugPrint$$$slotSigL(slotsig$$1) {
  slotsig$$1;
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("slotsig"));
}

function DebugPrint$$$MemberL(v$$73, membInfo$$10) {
  return (0, _layout.aboveListL)((0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("compiled_name! = ")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.Val$$get_CompiledName)(v$$73)))), (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("membInfo-slotsig! = ")), (0, _layout.listL)(DebugPrint$$$slotSigL, membInfo$$10.ImplementedSlotSigs)), (0, _Types.L)())));
}

function DebugPrint$$$vspecAtBindL(v$$74) {
  var matchValue$$111, mem_info, matchValue$$112, arity_info;
  const vL = DebugPrint$$$valL(v$$74);
  const mutL = (0, _tast.Val$$get_IsMutable)(v$$74) ? (0, _layout.op_PlusPlus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("mutable")), vL) : vL;
  return (0, _layout.op_MinusMinusMinus)(mutL, (0, _layout.aboveListL)((0, _List.concat)([(0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":")), DebugPrint$$$typeL((0, _tast.Val$$get_Type)(v$$74))), (0, _Types.L)()), (matchValue$$111 = (0, _tast.Val$$get_MemberInfo)(v$$74), matchValue$$111 != null ? (mem_info = matchValue$$111, (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("!")), DebugPrint$$$MemberL(v$$74, mem_info)), (0, _Types.L)())) : (0, _Types.L)()), (matchValue$$112 = (0, _tast.Val$$get_ValReprInfo)(v$$74), matchValue$$112 != null ? (arity_info = matchValue$$112, (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("#")), DebugPrint$$$arityInfoL(arity_info)), (0, _Types.L)())) : (0, _Types.L)())])));
}

function DebugPrint$$$unionCaseRefL(ucr) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.UnionCaseRef$$get_CaseName)(ucr)));
}

function DebugPrint$$$recdFieldRefL(rfref$$2) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.RecdFieldRef$$get_FieldName)(rfref$$2)));
}

function DebugPrint$$$identL(id) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _ast.Ident$$get_idText)(id)));
}

function DebugPrint$$$constL(c$$6) {
  let str;

  switch (c$$6.tag) {
    case 1:
      {
        const x$$138 = c$$6.fields[0] | 0;
        str = x$$138.toString() + "y";
        break;
      }

    case 2:
      {
        const x$$139 = c$$6.fields[0];
        str = x$$139.toString() + "uy";
        break;
      }

    case 3:
      {
        const x$$140 = c$$6.fields[0] | 0;
        str = (0, _Util.int16ToString)(x$$140) + "s";
        break;
      }

    case 4:
      {
        const x$$141 = c$$6.fields[0];
        str = x$$141.toString() + "us";
        break;
      }

    case 5:
      {
        const x$$142 = c$$6.fields[0] | 0;
        str = (0, _Util.int32ToString)(x$$142);
        break;
      }

    case 6:
      {
        const x$$143 = c$$6.fields[0];
        str = x$$143.toString() + "u";
        break;
      }

    case 7:
      {
        const x$$144 = c$$6.fields[0];
        str = (0, _Long.toString)(x$$144) + "L";
        break;
      }

    case 8:
      {
        const x$$145 = c$$6.fields[0];
        str = (0, _Long.toString)(x$$145) + "UL";
        break;
      }

    case 9:
      {
        const x$$146 = c$$6.fields[0];
        str = (0, _Long.toString)(x$$146) + "n";
        break;
      }

    case 10:
      {
        const x$$147 = c$$6.fields[0];
        str = (0, _Long.toString)(x$$147) + "un";
        break;
      }

    case 11:
      {
        const d$$10 = c$$6.fields[0];
        const s$$7 = d$$10.toString();
        str = ((0, _Seq.forAll)(function (c$$7) {
          return (0, _Char.isDigit)(c$$7) ? true : c$$7 === "-";
        }, s$$7.split("")) ? s$$7 + ".0" : s$$7) + "f";
        break;
      }

    case 12:
      {
        const d$$11 = c$$6.fields[0];
        const s$$8 = d$$11.toString();
        str = (0, _Seq.forAll)(function (c$$8) {
          return (0, _Char.isDigit)(c$$8) ? true : c$$8 === "-";
        }, s$$8.split("")) ? s$$8 + ".0" : s$$8;
        break;
      }

    case 13:
      {
        const c$$9 = c$$6.fields[0];
        str = "'" + c$$9 + "'";
        break;
      }

    case 14:
      {
        const bs = c$$6.fields[0];
        str = "\"" + bs + "\"";
        break;
      }

    case 16:
      {
        str = "()";
        break;
      }

    case 15:
      {
        const bs$$1 = c$$6.fields[0];
        str = bs$$1.toString() + "M";
        break;
      }

    case 17:
      {
        str = "default";
        break;
      }

    default:
      {
        const x$$137 = c$$6.fields[0];
        str = x$$137 ? "true" : "false";
      }
  }

  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(str));
}

function DebugPrint$$$tyconL(tycon$$13) {
  var r$$24;

  if ((0, _tast.Entity$$get_IsModuleOrNamespace)(tycon$$13)) {
    return DebugPrint$$$entityL(tycon$$13);
  } else {
    const lhsL = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.Entity$$get_TypeOrMeasureKind)(tycon$$13).tag === 0 ? "type" : "[<Measure>] type")), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.Entity$$get_DisplayName)(tycon$$13))), DebugPrint$$$layoutTyparDecls((0, _tast.Entity$$get_TyparsNoRange)(tycon$$13))));
    const lhsL$$1 = (0, _layout.op_MinusMinusMinus)(lhsL, DebugPrint$$$layoutAttribs((0, _tast.Entity$$get_Attribs)(tycon$$13)));
    let memberLs;
    const adhoc = (0, _List.filter)(function predicate$$10(v$$77) {
      return (0, _tast.ValRef$$get_MemberInfo)(v$$77).ImplementedSlotSigs.tail == null;
    }, (0, _List.filter)(function predicate$$9(v$$76) {
      return !(0, _tast.Val$$get_IsClassConstructor)((0, _tast.ValRef$$get_Deref)(v$$76));
    }, (0, _List.filter)(function predicate$$8(v$$75) {
      return !(0, _tast.ValRef$$get_IsDispatchSlot)(v$$75);
    }, (0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(tycon$$13))));
    let iimpls$$1;
    const matchValue$$114 = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$13);
    var $target$$213, r$$25;

    if (matchValue$$114.tag === 0) {
      if (r$$24 = matchValue$$114.fields[0], r$$24.fsobjmodel_kind.tag === 1 ? true : false) {
        $target$$213 = 0;
        r$$25 = matchValue$$114.fields[0];
      } else {
        $target$$213 = 1;
      }
    } else {
      $target$$213 = 1;
    }

    switch ($target$$213) {
      case 0:
        {
          iimpls$$1 = (0, _Types.L)();
          break;
        }

      case 1:
        {
          iimpls$$1 = (0, _tast.Entity$$get_ImmediateInterfacesOfFSharpTycon)(tycon$$13);
          break;
        }
    }

    const iimpls$$2 = (0, _List.filter)(function predicate$$11(tupledArg$$44) {
      return !tupledArg$$44[1];
    }, iimpls$$1);

    if (adhoc.tail == null ? iimpls$$2.tail == null : false) {
      memberLs = _layout.emptyL;
    } else {
      const iimplsLs = (0, _List.map)(function mapping$$8(tupledArg$$45) {
        return (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("interface")), DebugPrint$$$typeL(tupledArg$$45[0]));
      }, iimpls$$2);
      const adhocLs = (0, _List.map)(function mapping$$9(vref$$36) {
        return DebugPrint$$$vspecAtBindL((0, _tast.ValRef$$get_Deref)(vref$$36));
      }, adhoc);
      memberLs = (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("with")), (0, _layout.aboveListL)((0, _List.append)(iimplsLs, adhocLs))), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("end")));
    }

    const layoutUnionCaseArgTypes = function layoutUnionCaseArgTypes(argtys$$6) {
      return (0, _layout.sepListL)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("*")), (0, _List.map)(DebugPrint$$$typeL, argtys$$6));
    };

    const ucaseL = function ucaseL(prefixL, ucase) {
      const nmL = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _PrettyNaming.DemangleOperatorName)((0, _ast.Ident$$get_idText)(ucase.Id))));
      const matchValue$$116 = (0, _List.map)(function mapping$$10(rfld) {
        return (0, _tast.RecdField$$get_FormalType)(rfld);
      }, (0, _tast.UnionCase$$get_RecdFields)(ucase));

      if (matchValue$$116.tail == null) {
        return (0, _layout.op_HatHat)(prefixL, nmL);
      } else {
        const argtys$$7 = matchValue$$116;
        return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(prefixL, (0, _layout.op_HatHat)(nmL, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("of")))), layoutUnionCaseArgTypes(argtys$$7));
      }
    };

    const layoutUnionCases = function layoutUnionCases(ucases) {
      const prefixL$$1 = !(ucases.tail != null ? ucases.tail.tail == null ? true : false : true) ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("|")) : _layout.emptyL;
      return (0, _List.map)((0, _Util.partialApply)(1, ucaseL, [prefixL$$1]), ucases);
    };

    const layoutRecdField = function layoutRecdField(fld) {
      const lhs = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.RecdField$$get_Name)(fld)));
      const lhs$$1 = (0, _tast.RecdField$$get_IsMutable)(fld) ? (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("mutable")), lhs) : lhs;
      return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(lhs$$1, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(":"))), DebugPrint$$$typeL((0, _tast.RecdField$$get_FormalType)(fld)));
    };

    const tyconReprL = function tyconReprL(tupledArg$$46) {
      if (tupledArg$$46[0].tag === 1) {
        return (0, _layout.aboveListL)((0, _List.map)(function mapping$$11(fld$$1) {
          return (0, _layout.op_HatHat)(layoutRecdField(fld$$1), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(";")));
        }, (0, _tast.Entity$$get_TrueFieldsAsList)(tupledArg$$46[1])));
      } else if (tupledArg$$46[0].tag === 0) {
        const r$$26 = tupledArg$$46[0].fields[0];

        if (r$$26.fsobjmodel_kind.tag === 3) {
          return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("delegate ..."));
        } else {
          let start;

          if (r$$26.fsobjmodel_kind.tag === 0) {
            start = "class";
          } else if (r$$26.fsobjmodel_kind.tag === 1) {
            start = "interface";
          } else if (r$$26.fsobjmodel_kind.tag === 2) {
            start = "struct";
          } else if (r$$26.fsobjmodel_kind.tag === 4) {
            start = "enum";
          } else {
            throw new Error("???");
          }

          let inherits;
          const matchValue$$119 = [r$$26.fsobjmodel_kind, (0, _tast.Entity$$get_TypeContents)(tupledArg$$46[1]).tcaug_super];
          var $target$$214;

          if (matchValue$$119[0].tag === 0) {
            if (matchValue$$119[1] != null) {
              $target$$214 = 0;
            } else {
              $target$$214 = 2;
            }
          } else if (matchValue$$119[0].tag === 1) {
            $target$$214 = 1;
          } else {
            $target$$214 = 2;
          }

          switch ($target$$214) {
            case 0:
              {
                const super$ = matchValue$$119[1];
                inherits = (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("inherit")), DebugPrint$$$typeL(super$)), (0, _Types.L)());
                break;
              }

            case 1:
              {
                inherits = (0, _List.map)(function mapping$$12(tupledArg$$48) {
                  return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("inherit")), DebugPrint$$$typeL(tupledArg$$48[0]));
                }, (0, _List.filter)(function predicate$$12(tupledArg$$47) {
                  return !tupledArg$$47[1];
                }, (0, _tast.Entity$$get_ImmediateInterfacesOfFSharpTycon)(tupledArg$$46[1])));
                break;
              }

            case 2:
              {
                inherits = (0, _Types.L)();
                break;
              }
          }

          const vsprs = (0, _List.map)(function mapping$$13(vref$$37) {
            return DebugPrint$$$vspecAtBindL((0, _tast.ValRef$$get_Deref)(vref$$37));
          }, (0, _List.filter)(function predicate$$13(v$$78) {
            return (0, _tast.ValRef$$get_IsDispatchSlot)(v$$78);
          }, (0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(tupledArg$$46[1])));
          const vals$$2 = (0, _List.map)(function mapping$$14(f$$35) {
            return (0, _layout.op_HatHat)((0, _tast.RecdField$$get_IsStatic)(f$$35) ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("static")) : _layout.emptyL, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("val")), layoutRecdField(f$$35)));
          }, (0, _tast.Entity$$get_TrueFieldsAsList)(tupledArg$$46[1]));
          const alldecls = (0, _List.append)(inherits, (0, _List.append)(vsprs, vals$$2));
          const emptyMeasure = (0, _tast.Entity$$get_TypeOrMeasureKind)(tupledArg$$46[1]).tag === 1 ? alldecls.tail == null : false;

          if (emptyMeasure) {
            return _layout.emptyL;
          } else {
            return (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(start)), (0, _layout.aboveListL)(alldecls)), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("end")));
          }
        }
      } else if (tupledArg$$46[0].tag === 2) {
        return (0, _layout.aboveListL)(layoutUnionCases((0, _tast.Entity$$get_UnionCasesAsList)(tupledArg$$46[1])));
      } else if (tupledArg$$46[0].tag === 4) {
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("(# ... #)"));
      } else if (tupledArg$$46[0].tag === 5) {
        const ty$$212 = tupledArg$$46[0].fields[0];
        return DebugPrint$$$typeL(ty$$212);
      } else if (tupledArg$$46[0].tag === 3) {
        const td$$5 = tupledArg$$46[0].fields[0].fields[2];
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _il.ILTypeDef$$get_Name)(td$$5)));
      } else {
        throw new Error("unreachable");
      }
    };

    let reprL;
    const matchValue$$121 = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$13);

    if (matchValue$$121.tag === 6) {
      const matchValue$$122 = (0, _tast.Entity$$get_TypeAbbrev)(tycon$$13);

      if (matchValue$$122 != null) {
        const a$$4 = matchValue$$122;
        reprL = (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(lhsL$$1, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("="))), (0, _layout.op_AtAt)(DebugPrint$$$typeL(a$$4), memberLs));
      } else {
        reprL = (0, _layout.op_AtAtMinusMinus)(lhsL$$1, memberLs);
      }
    } else {
      const a$$5 = matchValue$$121;
      const rhsL = (0, _layout.op_AtAt)(tyconReprL([a$$5, tycon$$13]), memberLs);
      reprL = (0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)(lhsL$$1, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("="))), rhsL);
    }

    return reprL;
  }
}

function DebugPrint$$$bindingL(_arg1$$97) {
  const v$$79 = _arg1$$97.fields[0];
  const repr$$2 = _arg1$$97.fields[1];
  return (0, _layout.op_MinusMinusMinus)(DebugPrint$$$vspecAtBindL(v$$79), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("=")), DebugPrint$$$exprL(repr$$2)));
}

function DebugPrint$$$exprL(expr$$13) {
  return DebugPrint$$$exprWrapL(false, expr$$13);
}

function DebugPrint$$$atomL(expr$$14) {
  return DebugPrint$$$exprWrapL(true, expr$$14);
}

function DebugPrint$$$letRecL(binds$$4, bodyL) {
  const eqnsL = (0, _illib.List$$$mapHeadTail)(function fhead(bind$$1) {
    return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("rec")), (0, _layout.op_HatHat)(DebugPrint$$$bindingL(bind$$1), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("in"))));
  }, function ftail(bind$$2) {
    return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("and")), (0, _layout.op_HatHat)(DebugPrint$$$bindingL(bind$$2), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("in"))));
  }, binds$$4);
  return (0, _layout.op_AtAt)((0, _layout.aboveListL)(eqnsL), bodyL);
}

function DebugPrint$$$letL(bind$$3, bodyL$$1) {
  const eqnL = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("let")), (0, _layout.op_HatHat)(DebugPrint$$$bindingL(bind$$3), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("in"))));
  return (0, _layout.op_AtAt)(eqnL, bodyL$$1);
}

function DebugPrint$$$exprWrapL(isAtomic$$2, expr$$15) {
  const wrap$$2 = function wrap$$2(lyt$$1) {
    return DebugPrint$$$bracketIfL(isAtomic$$2, lyt$$1);
  };

  let lay$$1;

  var $target$$215, c$$10, flags, v$$80, flag, x0, x1, argvs, baseValOpt$$2, body$$12, argtyvs, body$$13, argtyvs$$1, body$$14, argtys$$8, f$$36, tys$$21, binds$$5, body$$15, bind$$4, body$$16, rX, dtree$$2, targets$$1, args$$8, c$$11, args$$9, ecref$$2, xs$$4, ctor, tc$$12, xs$$5, rf, rx, x$$149, rf$$1, x$$150, rf$$2, rx$$1, rf$$3, rf$$4, rx$$2, rf$$5, tycr, x$$151, c$$12, x$$152, c$$13, i$$3, x$$153, c$$14, i$$4, x$$154, y$$25, i$$5, x$$155, ty$$213, x$$156, a$$6, args$$10, tyargs$$13, tys$$22, args$$11, lvop, vr$$1, _isNewObjCall, _isProperty, _isProtectedCall, _isVirtCall, _noTailCall, _tys, _valUseFlags, _valu, args$$12, ilMethRef$$1, minst$$4, tinst$$42, tyargs$$14, xs$$6, x1$$1, x2, x1$$2, x2$$1, x3, x1$$3, x2$$2, x1$$4, x2$$3, _args, _tyargs, _args$$1, _tyargs$$1, _args$$2, _tyargs$$2, _args$$3, _tyargs$$3, _args$$4, _tyargs$$4, _args$$5, _tyargs$$5, _tys$$1, args$$13, a$$7, _lambdaId, basev$$2, ccall, iimpls$$3, overrides$$1, ty$$214, _tcs, csx, x$$157;

  if (expr$$15.tag === 1) {
    $target$$215 = 1;
    flags = expr$$15.fields[1];
    v$$80 = expr$$15.fields[0];
  } else if (expr$$15.tag === 2) {
    $target$$215 = 2;
    flag = expr$$15.fields[2];
    x0 = expr$$15.fields[0];
    x1 = expr$$15.fields[1];
  } else if (expr$$15.tag === 3) {
    $target$$215 = 3;
    argvs = expr$$15.fields[3];
    baseValOpt$$2 = expr$$15.fields[2];
    body$$12 = expr$$15.fields[4];
  } else if (expr$$15.tag === 4) {
    $target$$215 = 4;
    argtyvs = expr$$15.fields[1];
    body$$13 = expr$$15.fields[2];
  } else if (expr$$15.tag === 13) {
    $target$$215 = 5;
    argtyvs$$1 = expr$$15.fields[0];
    body$$14 = expr$$15.fields[1];
  } else if (expr$$15.tag === 5) {
    $target$$215 = 6;
    argtys$$8 = expr$$15.fields[3];
    f$$36 = expr$$15.fields[0];
    tys$$21 = expr$$15.fields[2];
  } else if (expr$$15.tag === 6) {
    $target$$215 = 7;
    binds$$5 = expr$$15.fields[0];
    body$$15 = expr$$15.fields[1];
  } else if (expr$$15.tag === 7) {
    $target$$215 = 8;
    bind$$4 = expr$$15.fields[0];
    body$$16 = expr$$15.fields[1];
  } else if (expr$$15.tag === 14) {
    $target$$215 = 9;
    rX = expr$$15.fields[0];
  } else if (expr$$15.tag === 9) {
    $target$$215 = 10;
    dtree$$2 = expr$$15.fields[2];
    targets$$1 = expr$$15.fields[3];
  } else if (expr$$15.tag === 11) {
    if (expr$$15.fields[0].tag === 0) {
      $target$$215 = 11;
      args$$8 = expr$$15.fields[2];
      c$$11 = expr$$15.fields[0].fields[0];
    } else if (expr$$15.fields[0].tag === 1) {
      $target$$215 = 12;
      args$$9 = expr$$15.fields[2];
      ecref$$2 = expr$$15.fields[0].fields[0];
    } else if (expr$$15.fields[0].tag === 2) {
      $target$$215 = 13;
      xs$$4 = expr$$15.fields[2];
    } else if (expr$$15.fields[0].tag === 10) {
      $target$$215 = 14;
      ctor = expr$$15.fields[0].fields[0];
      tc$$12 = expr$$15.fields[0].fields[1];
      xs$$5 = expr$$15.fields[2];
    } else if (expr$$15.fields[0].tag === 11) {
      if (expr$$15.fields[2].tail != null) {
        if (expr$$15.fields[2].tail.tail == null) {
          $target$$215 = 16;
          rf$$1 = expr$$15.fields[0].fields[0];
          x$$150 = expr$$15.fields[2].head;
        } else if (expr$$15.fields[2].tail.tail.tail == null) {
          $target$$215 = 15;
          rf = expr$$15.fields[0].fields[0];
          rx = expr$$15.fields[2].head;
          x$$149 = expr$$15.fields[2].tail.head;
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 12) {
      if (expr$$15.fields[2].tail == null) {
        $target$$215 = 18;
        rf$$3 = expr$$15.fields[0].fields[0];
      } else if (expr$$15.fields[2].tail.tail == null) {
        $target$$215 = 17;
        rf$$2 = expr$$15.fields[0].fields[0];
        rx$$1 = expr$$15.fields[2].head;
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 13) {
      if (expr$$15.fields[2].tail == null) {
        $target$$215 = 20;
        rf$$5 = expr$$15.fields[0].fields[0];
      } else if (expr$$15.fields[2].tail.tail == null) {
        $target$$215 = 19;
        rf$$4 = expr$$15.fields[0].fields[0];
        rx$$2 = expr$$15.fields[2].head;
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 14) {
      if (expr$$15.fields[2].tail != null) {
        if (expr$$15.fields[2].tail.tail == null) {
          $target$$215 = 21;
          tycr = expr$$15.fields[0].fields[0];
          x$$151 = expr$$15.fields[2].head;
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 15) {
      if (expr$$15.fields[2].tail != null) {
        if (expr$$15.fields[2].tail.tail == null) {
          $target$$215 = 22;
          c$$12 = expr$$15.fields[0].fields[0];
          x$$152 = expr$$15.fields[2].head;
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 16) {
      if (expr$$15.fields[2].tail != null) {
        if (expr$$15.fields[2].tail.tail == null) {
          $target$$215 = 23;
          c$$13 = expr$$15.fields[0].fields[0];
          i$$3 = expr$$15.fields[0].fields[1];
          x$$153 = expr$$15.fields[2].head;
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 18) {
      if (expr$$15.fields[2].tail != null) {
        if (expr$$15.fields[2].tail.tail != null) {
          if (expr$$15.fields[2].tail.tail.tail == null) {
            $target$$215 = 24;
            c$$14 = expr$$15.fields[0].fields[0];
            i$$4 = expr$$15.fields[0].fields[1];
            x$$154 = expr$$15.fields[2].head;
            y$$25 = expr$$15.fields[2].tail.head;
          } else {
            $target$$215 = 44;
            _tys$$1 = expr$$15.fields[1];
            args$$13 = expr$$15.fields[2];
          }
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 21) {
      if (expr$$15.fields[2].tail != null) {
        if (expr$$15.fields[2].tail.tail == null) {
          $target$$215 = 25;
          i$$5 = expr$$15.fields[0].fields[1];
          x$$155 = expr$$15.fields[2].head;
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 24) {
      if (expr$$15.fields[1].tail != null) {
        if (expr$$15.fields[1].tail.tail != null) {
          if (expr$$15.fields[1].tail.tail.tail == null) {
            if (expr$$15.fields[2].tail != null) {
              if (expr$$15.fields[2].tail.tail == null) {
                $target$$215 = 26;
                ty$$213 = expr$$15.fields[1].head;
                x$$156 = expr$$15.fields[2].head;
              } else {
                $target$$215 = 44;
                _tys$$1 = expr$$15.fields[1];
                args$$13 = expr$$15.fields[2];
              }
            } else {
              $target$$215 = 44;
              _tys$$1 = expr$$15.fields[1];
              args$$13 = expr$$15.fields[2];
            }
          } else {
            $target$$215 = 44;
            _tys$$1 = expr$$15.fields[1];
            args$$13 = expr$$15.fields[2];
          }
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 25) {
      if (expr$$15.fields[1].tail != null) {
        if (expr$$15.fields[1].tail.tail == null) {
          if (expr$$15.fields[2].tail == null) {
            $target$$215 = 27;
          } else {
            $target$$215 = 44;
            _tys$$1 = expr$$15.fields[1];
            args$$13 = expr$$15.fields[2];
          }
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 22) {
      $target$$215 = 28;
      a$$6 = expr$$15.fields[0].fields[0];
      args$$10 = expr$$15.fields[2];
      tyargs$$13 = expr$$15.fields[1];
      tys$$22 = expr$$15.fields[0].fields[1];
    } else if (expr$$15.fields[0].tag === 30) {
      $target$$215 = 29;
      args$$11 = expr$$15.fields[2];
      lvop = expr$$15.fields[0].fields[0];
      vr$$1 = expr$$15.fields[0].fields[1];
    } else if (expr$$15.fields[0].tag === 31) {
      $target$$215 = 30;
      _isNewObjCall = expr$$15.fields[0].fields[3];
      _isProperty = expr$$15.fields[0].fields[5];
      _isProtectedCall = expr$$15.fields[0].fields[1];
      _isVirtCall = expr$$15.fields[0].fields[0];
      _noTailCall = expr$$15.fields[0].fields[6];
      _tys = expr$$15.fields[0].fields[10];
      _valUseFlags = expr$$15.fields[0].fields[4];
      _valu = expr$$15.fields[0].fields[2];
      args$$12 = expr$$15.fields[2];
      ilMethRef$$1 = expr$$15.fields[0].fields[7];
      minst$$4 = expr$$15.fields[0].fields[9];
      tinst$$42 = expr$$15.fields[0].fields[8];
      tyargs$$14 = expr$$15.fields[1];
    } else if (expr$$15.fields[0].tag === 3) {
      if (expr$$15.fields[1].tail != null) {
        if (expr$$15.fields[1].tail.tail == null) {
          $target$$215 = 31;
          xs$$6 = expr$$15.fields[2];
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 6) {
      if (expr$$15.fields[1].tail == null) {
        if (expr$$15.fields[2].tail != null) {
          if (expr$$15.fields[2].tail.tail != null) {
            if (expr$$15.fields[2].tail.tail.tail == null) {
              $target$$215 = 32;
              x1$$1 = expr$$15.fields[2].head;
              x2 = expr$$15.fields[2].tail.head;
            } else {
              $target$$215 = 44;
              _tys$$1 = expr$$15.fields[1];
              args$$13 = expr$$15.fields[2];
            }
          } else {
            $target$$215 = 44;
            _tys$$1 = expr$$15.fields[1];
            args$$13 = expr$$15.fields[2];
          }
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 7) {
      if (expr$$15.fields[1].tail == null) {
        if (expr$$15.fields[2].tail != null) {
          if (expr$$15.fields[2].tail.tail != null) {
            if (expr$$15.fields[2].tail.tail.tail != null) {
              if (expr$$15.fields[2].tail.tail.tail.tail == null) {
                $target$$215 = 33;
                x1$$2 = expr$$15.fields[2].head;
                x2$$1 = expr$$15.fields[2].tail.head;
                x3 = expr$$15.fields[2].tail.tail.head;
              } else {
                $target$$215 = 44;
                _tys$$1 = expr$$15.fields[1];
                args$$13 = expr$$15.fields[2];
              }
            } else {
              $target$$215 = 44;
              _tys$$1 = expr$$15.fields[1];
              args$$13 = expr$$15.fields[2];
            }
          } else {
            $target$$215 = 44;
            _tys$$1 = expr$$15.fields[1];
            args$$13 = expr$$15.fields[2];
          }
        } else {
          $target$$215 = 44;
          _tys$$1 = expr$$15.fields[1];
          args$$13 = expr$$15.fields[2];
        }
      } else {
        $target$$215 = 44;
        _tys$$1 = expr$$15.fields[1];
        args$$13 = expr$$15.fields[2];
      }
    } else if (expr$$15.fields[0].tag === 8) {
      if (expr$$15.fields[1].tail != null) {
        if (expr$$15.fields[1].tail.tail == null) {
          if (expr$$15.fields[2].tail != null) {
            if (expr$$15.fields[2].tail.tail != null) {
              if (expr$$15.fields[2].tail.tail.tail == null) {
                $target$$215 = 34;
                x1$$3 = expr$$15.fields[2].head;
                x2$$2 = expr$$15.fields[2].tail.head;
              } else {
                $target$$215 = 43;
                _args$$5 = expr$$15.fields[2];
                _tyargs$$5 = expr$$15.fields[1];
              }
            } else {
              $target$$215 = 43;
              _args$$5 = expr$$15.fields[2];
              _tyargs$$5 = expr$$15.fields[1];
            }
          } else {
            $target$$215 = 43;
            _args$$5 = expr$$15.fields[2];
            _tyargs$$5 = expr$$15.fields[1];
          }
        } else {
          $target$$215 = 43;
          _args$$5 = expr$$15.fields[2];
          _tyargs$$5 = expr$$15.fields[1];
        }
      } else {
        $target$$215 = 43;
        _args$$5 = expr$$15.fields[2];
        _tyargs$$5 = expr$$15.fields[1];
      }
    } else if (expr$$15.fields[0].tag === 9) {
      if (expr$$15.fields[1].tail != null) {
        if (expr$$15.fields[1].tail.tail == null) {
          if (expr$$15.fields[2].tail != null) {
            if (expr$$15.fields[2].tail.tail != null) {
              if (expr$$15.fields[2].tail.tail.tail == null) {
                $target$$215 = 35;
                x1$$4 = expr$$15.fields[2].head;
                x2$$3 = expr$$15.fields[2].tail.head;
              } else {
                $target$$215 = 42;
                _args$$4 = expr$$15.fields[2];
                _tyargs$$4 = expr$$15.fields[1];
              }
            } else {
              $target$$215 = 42;
              _args$$4 = expr$$15.fields[2];
              _tyargs$$4 = expr$$15.fields[1];
            }
          } else {
            $target$$215 = 42;
            _args$$4 = expr$$15.fields[2];
            _tyargs$$4 = expr$$15.fields[1];
          }
        } else {
          $target$$215 = 42;
          _args$$4 = expr$$15.fields[2];
          _tyargs$$4 = expr$$15.fields[1];
        }
      } else {
        $target$$215 = 42;
        _args$$4 = expr$$15.fields[2];
        _tyargs$$4 = expr$$15.fields[1];
      }
    } else if (expr$$15.fields[0].tag === 4) {
      $target$$215 = 36;
    } else if (expr$$15.fields[0].tag === 5) {
      $target$$215 = 37;
    } else if (expr$$15.fields[0].tag === 23) {
      $target$$215 = 38;
      _args = expr$$15.fields[2];
      _tyargs = expr$$15.fields[1];
    } else if (expr$$15.fields[0].tag === 29) {
      $target$$215 = 39;
      _args$$1 = expr$$15.fields[2];
      _tyargs$$1 = expr$$15.fields[1];
    } else if (expr$$15.fields[0].tag === 19) {
      $target$$215 = 40;
      _args$$2 = expr$$15.fields[2];
      _tyargs$$2 = expr$$15.fields[1];
    } else if (expr$$15.fields[0].tag === 20) {
      $target$$215 = 41;
      _args$$3 = expr$$15.fields[2];
      _tyargs$$3 = expr$$15.fields[1];
    } else {
      $target$$215 = 44;
      _tys$$1 = expr$$15.fields[1];
      args$$13 = expr$$15.fields[2];
    }
  } else if (expr$$15.tag === 12) {
    $target$$215 = 45;
    a$$7 = expr$$15.fields[0];
  } else if (expr$$15.tag === 8) {
    $target$$215 = 46;
    _lambdaId = expr$$15.fields[0];
    basev$$2 = expr$$15.fields[2];
    ccall = expr$$15.fields[3];
    iimpls$$3 = expr$$15.fields[5];
    overrides$$1 = expr$$15.fields[4];
    ty$$214 = expr$$15.fields[1];
  } else if (expr$$15.tag === 10) {
    $target$$215 = 47;
    _tcs = expr$$15.fields[0];
    csx = expr$$15.fields[1];
    x$$157 = expr$$15.fields[2];
  } else {
    $target$$215 = 0;
    c$$10 = expr$$15.fields[0];
  }

  switch ($target$$215) {
    case 0:
      {
        lay$$1 = DebugPrint$$$constL(c$$10);
        break;
      }

    case 1:
      {
        const xL$$1 = DebugPrint$$$valL((0, _tast.ValRef$$get_Deref)(v$$80));
        const xL$$2 = flags.tag === 3 ? (0, _layout.op_HatHat)(xL$$1, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("<selfinit>"))) : flags.tag === 2 ? (0, _layout.op_HatHat)(xL$$1, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("<superinit>"))) : flags.tag === 4 ? (0, _layout.op_HatHat)(xL$$1, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("<vdirect>"))) : flags.tag === 1 ? xL$$1 : (0, _layout.op_HatHat)(xL$$1, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("<constrained>")));
        lay$$1 = xL$$2;
        break;
      }

    case 2:
      {
        const flag$$1 = flag.tag === 1 ? "; (*ThenDo*)" : "; (*Seq*)";
        lay$$1 = wrap$$2((0, _layout.op_AtAt)((0, _layout.op_HatHat)(DebugPrint$$$exprL(x0), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(flag$$1))), DebugPrint$$$exprL(x1)));
        break;
      }

    case 3:
      {
        const formalsL = (0, _layout.spaceListL)((0, _List.map)(DebugPrint$$$vspecAtBindL, argvs));
        let bindingL;

        if (baseValOpt$$2 != null) {
          const basev$$1 = baseValOpt$$2;
          bindingL = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("lam")), (0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("base=")), DebugPrint$$$vspecAtBindL(basev$$1)), formalsL), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("."))));
        } else {
          bindingL = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("lam")), (0, _layout.op_HatHat)(formalsL, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("."))));
        }

        lay$$1 = wrap$$2((0, _layout.op_PlusPlus)(bindingL, DebugPrint$$$exprL(body$$12)));
        break;
      }

    case 4:
      {
        lay$$1 = wrap$$2((0, _layout.op_PlusPlus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("LAM")), (0, _layout.op_HatHat)((0, _layout.spaceListL)((0, _List.map)(DebugPrint$$$typarL, argtyvs)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(".")))), DebugPrint$$$exprL(body$$13)));
        break;
      }

    case 5:
      {
        lay$$1 = wrap$$2((0, _layout.op_PlusPlus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("CHOOSE")), (0, _layout.op_HatHat)((0, _layout.spaceListL)((0, _List.map)(DebugPrint$$$typarL, argtyvs$$1)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(".")))), DebugPrint$$$exprL(body$$14)));
        break;
      }

    case 6:
      {
        const flayout = DebugPrint$$$atomL(f$$36);
        lay$$1 = wrap$$2(DebugPrint$$$appL(flayout, tys$$21, argtys$$8));
        break;
      }

    case 7:
      {
        lay$$1 = wrap$$2(DebugPrint$$$letRecL(binds$$5, DebugPrint$$$exprL(body$$15)));
        break;
      }

    case 8:
      {
        lay$$1 = wrap$$2(DebugPrint$$$letL(bind$$4, DebugPrint$$$exprL(body$$16)));
        break;
      }

    case 9:
      {
        lay$$1 = wrap$$2((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("RecLink")), DebugPrint$$$atomL(rX.contents)));
        break;
      }

    case 10:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("[")), (0, _layout.op_AtAt)(DebugPrint$$$decisionTreeL(dtree$$2), (0, _layout.op_HatHat)((0, _layout.aboveListL)((0, _List.mapIndexed)(DebugPrint$$$targetL, (0, _Array.toList)(targets$$1))), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("]")))));
        break;
      }

    case 11:
      {
        lay$$1 = wrap$$2((0, _layout.op_PlusPlus)(DebugPrint$$$unionCaseRefL(c$$11), (0, _layout.spaceListL)((0, _List.map)(DebugPrint$$$atomL, args$$8))));
        break;
      }

    case 12:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.EntityRef$$get_LogicalName)(ecref$$2))), (0, _layout.bracketL)((0, _layout.commaListL)((0, _List.map)(DebugPrint$$$atomL, args$$9))));
        break;
      }

    case 13:
      {
        lay$$1 = (0, _layout.tupleL)((0, _List.map)(DebugPrint$$$exprL, xs$$4));
        break;
      }

    case 14:
      {
        const fields = (0, _tast.EntityRef$$get_TrueInstanceFieldsAsList)(tc$$12);

        const lay = function lay(fs, x$$148) {
          return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _ast.Ident$$get_idText)(fs.rfield_id))), (0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)("="))), DebugPrint$$$exprL(x$$148));
        };

        const ctorL = ctor.tag === 0 ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("(new)")) : _layout.emptyL;
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("{")), (0, _layout.op_HatHat)((0, _layout.semiListL)((0, _List.map2)(lay, fields, xs$$5)), (0, _layout.op_HatHat)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("}")), ctorL)));
        break;
      }

    case 15:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)(DebugPrint$$$atomL(rx), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("."))), (0, _layout.op_HatHat)(DebugPrint$$$recdFieldRefL(rf), (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("<-")), DebugPrint$$$exprL(x$$149))));
        break;
      }

    case 16:
      {
        lay$$1 = (0, _layout.op_HatHat)(DebugPrint$$$recdFieldRefL(rf$$1), (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("<-")), DebugPrint$$$exprL(x$$150)));
        break;
      }

    case 17:
      {
        lay$$1 = (0, _layout.op_HatHat)(DebugPrint$$$atomL(rx$$1), (0, _layout.op_HatHat)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(".#")), DebugPrint$$$recdFieldRefL(rf$$2)));
        break;
      }

    case 18:
      {
        lay$$1 = DebugPrint$$$recdFieldRefL(rf$$3);
        break;
      }

    case 19:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("&")), (0, _layout.bracketL)((0, _layout.op_HatHat)(DebugPrint$$$atomL(rx$$2), (0, _layout.op_HatHat)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(".!")), DebugPrint$$$recdFieldRefL(rf$$4)))));
        break;
      }

    case 20:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("&")), DebugPrint$$$recdFieldRefL(rf$$5));
        break;
      }

    case 21:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("#" + (0, _tast.EntityRef$$get_LogicalName)(tycr) + ".tag")), DebugPrint$$$atomL(x$$151));
        break;
      }

    case 22:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("#" + (0, _tast.UnionCaseRef$$get_CaseName)(c$$12) + ".cast")), DebugPrint$$$atomL(x$$152));
        break;
      }

    case 23:
      {
        lay$$1 = (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("#" + (0, _tast.UnionCaseRef$$get_CaseName)(c$$13) + "." + (0, _Util.int32ToString)(i$$3))), DebugPrint$$$atomL(x$$153));
        break;
      }

    case 24:
      {
        lay$$1 = (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)(DebugPrint$$$atomL(x$$154), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("#" + (0, _tast.UnionCaseRef$$get_CaseName)(c$$14) + "." + (0, _Util.int32ToString)(i$$4)))), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":="))), DebugPrint$$$exprL(y$$25));
        break;
      }

    case 25:
      {
        lay$$1 = (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("#" + (0, _Util.int32ToString)(i$$5))), DebugPrint$$$atomL(x$$155));
        break;
      }

    case 26:
      {
        lay$$1 = (0, _layout.op_MinusMinusMinus)(DebugPrint$$$atomL(x$$156), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":>")), DebugPrint$$$typeL(ty$$213)));
        break;
      }

    case 27:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("Rethrow!"));
        break;
      }

    case 28:
      {
        const instrs = (0, _layout.spaceListL)((0, _List.map)(function mapping$$15($arg$$32) {
          return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _String.toText)((0, _String.printf)("%+A"))($arg$$32)));
        }, a$$6));
        const instrs$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("(#")), (0, _layout.op_HatHat)(instrs, (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("#)"))));
        lay$$1 = wrap$$2((0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)(DebugPrint$$$appL(instrs$$1, tyargs$$13, args$$10), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":"))), (0, _layout.spaceListL)((0, _List.map)(DebugPrint$$$typeAtomL, tys$$22))));
        break;
      }

    case 29:
      {
        lay$$1 = wrap$$2((0, _layout.op_HatHat)(DebugPrint$$$lvalopL(lvop), (0, _layout.op_MinusMinusMinus)(DebugPrint$$$valRefL(vr$$1), (0, _layout.bracketL)((0, _layout.commaListL)((0, _List.map)(DebugPrint$$$atomL, args$$11))))));
        break;
      }

    case 30:
      {
        const meth = (0, _il.ILMethodRef$$get_Name)(ilMethRef$$1);
        lay$$1 = wrap$$2((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("ILCall")), (0, _layout.aboveListL)((0, _Types.L)((0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("meth  ")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _il.ILTypeRef$$get_FullName)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$1))))), (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)(".")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(meth)))), (0, _Types.L)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("tinst ")), (0, _layout.listL)(DebugPrint$$$typeL, tinst$$42)), (0, _Types.L)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("minst ")), (0, _layout.listL)(DebugPrint$$$typeL, minst$$4)), (0, _Types.L)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("tyargs")), (0, _layout.listL)(DebugPrint$$$typeL, tyargs$$14)), (0, _Types.L)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("args  ")), (0, _layout.listL)(DebugPrint$$$exprL, args$$12)), (0, _Types.L)()))))))));
        break;
      }

    case 31:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("[|")), (0, _layout.op_HatHat)((0, _layout.commaListL)((0, _List.map)(DebugPrint$$$exprL, xs$$6)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("|]"))));
        break;
      }

    case 32:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("while")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x1$$1), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("do")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x2), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("}"))))));
        break;
      }

    case 33:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("for")), (0, _layout.op_HatHat)((0, _layout.aboveListL)((0, _Types.L)((0, _layout.op_HatHat)(DebugPrint$$$exprL(x1$$2), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("to")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x2$$1), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("do"))))), (0, _Types.L)(DebugPrint$$$exprL(x3), (0, _Types.L)()))), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("done"))));
        break;
      }

    case 34:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("try")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x1$$3), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("with")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x2$$2), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("}"))))));
        break;
      }

    case 35:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("try")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x1$$4), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("finally")), (0, _layout.op_HatHat)(DebugPrint$$$exprL(x2$$3), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("}"))))));
        break;
      }

    case 36:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("bytes++"));
        break;
      }

    case 37:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("uint16++"));
        break;
      }

    case 38:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("GetRefLVal..."));
        break;
      }

    case 39:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("traitcall..."));
        break;
      }

    case 40:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("TOp.ExnFieldGet..."));
        break;
      }

    case 41:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("TOp.ExnFieldSet..."));
        break;
      }

    case 42:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("TOp.TryFinally..."));
        break;
      }

    case 43:
      {
        lay$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("TOp.TryCatch..."));
        break;
      }

    case 44:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("Expr.Op ...")), (0, _layout.bracketL)((0, _layout.commaListL)((0, _List.map)(DebugPrint$$$atomL, args$$13))));
        break;
      }

    case 45:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("<@")), (0, _layout.op_HatHat)(DebugPrint$$$atomL(a$$7), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("@>"))));
        break;
      }

    case 46:
      {
        lay$$1 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("OBJ:")), (0, _layout.aboveListL)((0, _Types.L)(DebugPrint$$$typeL(ty$$214), (0, _Types.L)(DebugPrint$$$exprL(ccall), (0, _Types.L)((0, _layout.optionL)(DebugPrint$$$vspecAtBindL, basev$$2), (0, _Types.L)((0, _layout.aboveListL)((0, _List.map)(DebugPrint$$$overrideL, overrides$$1)), (0, _Types.L)((0, _layout.aboveListL)((0, _List.map)(function (tupledArg$$49) {
          return DebugPrint$$$iimplL(tupledArg$$49[0], tupledArg$$49[1]);
        }, iimpls$$3)), (0, _Types.L)())))))));
        break;
      }

    case 47:
      {
        lay$$1 = (0, _layout.op_AtAtMinusMinus)((0, _layout.op_AtAtMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("opt")), DebugPrint$$$exprL(x$$157)), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("|")), (0, _layout.op_MinusMinusMinus)(DebugPrint$$$exprL(csx), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("when...")))));
        break;
      }
  }

  if (DebugPrint$$$layoutRanges.contents) {
    return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("{")), (0, _layout.op_HatHat)((0, _layout.op_PlusPlus)((0, _layout.op_HatHat)(DebugPrint$$$rangeL(Expr$002Eget_Range(expr$$15)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(":"))), lay$$1), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)("}"))));
  } else {
    return lay$$1;
  }
}

function DebugPrint$$$implFilesL(implFiles) {
  return (0, _layout.aboveListL)((0, _List.map)(DebugPrint$$$implFileL, implFiles));
}

function DebugPrint$$$appL(flayout$$1, tys$$23, args$$14) {
  const z$$24 = flayout$$1;
  const z$$25 = (0, _layout.op_HatHat)(z$$24, DebugPrint$$$instL(DebugPrint$$$typeL, tys$$23));
  const z$$26 = (0, _layout.op_MinusMinusMinus)((0, _layout.op_MinusMinusMinus)(z$$25, (0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagText)("`"))), (0, _layout.spaceListL)((0, _List.map)(DebugPrint$$$atomL, args$$14)));
  return z$$26;
}

function DebugPrint$$$implFileL(_arg2$$10) {
  const e$$29 = _arg2$$10.fields[2];
  return (0, _layout.aboveListL)((0, _Types.L)((0, _layout.op_AtAtMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("top implementation ")), DebugPrint$$$mexprL(e$$29)), (0, _Types.L)()));
}

function DebugPrint$$$mexprL(x$$158) {
  const mtyp$$2 = x$$158.fields[0];
  const defs = x$$158.fields[1];
  return (0, _layout.op_AtAtMinus)(DebugPrint$$$mdefL(defs), (0, _layout.op_AtAtMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":")), DebugPrint$$$entityTypeL(mtyp$$2)));
}

function DebugPrint$$$mdefsL(defs$$1) {
  return (0, _layout.op_AtAtMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("Module Defs")), (0, _layout.aboveListL)((0, _List.map)(DebugPrint$$$mdefL, defs$$1)));
}

function DebugPrint$$$mdefL(x$$160) {
  switch (x$$160.tag) {
    case 2:
      {
        const bind$$5 = x$$160.fields[0];
        return DebugPrint$$$letL(bind$$5, _layout.emptyL);
      }

    case 3:
      {
        const e$$30 = x$$160.fields[0];
        return DebugPrint$$$exprL(e$$30);
      }

    case 1:
      {
        const defs$$2 = x$$160.fields[0];
        return DebugPrint$$$mdefsL(defs$$2);
      }

    case 0:
      {
        const mexpr = x$$160.fields[0];
        return DebugPrint$$$mexprL(mexpr);
      }

    default:
      {
        const tycons = x$$160.fields[1];
        const mbinds = x$$160.fields[2];
        return (0, _layout.aboveListL)((0, _List.append)((0, _List.map)(DebugPrint$$$tyconL, tycons), (0, _List.map)(DebugPrint$$$mbindL, mbinds)));
      }
  }
}

function DebugPrint$$$mbindL(x$$162) {
  if (x$$162.tag === 1) {
    const rhs = x$$162.fields[1];
    const mspec$$1 = x$$162.fields[0];
    return (0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.Entity$$get_IsNamespace)(mspec$$1) ? "namespace" : "module")), DebugPrint$$$stampL((0, _tast.Entity$$get_Stamp)(mspec$$1), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(mspec$$1))))), DebugPrint$$$mdefL(rhs));
  } else {
    const bind$$6 = x$$162.fields[0];
    return DebugPrint$$$letL(bind$$6, _layout.emptyL);
  }
}

function DebugPrint$$$entityTypeL(mtyp$$3) {
  return (0, _layout.aboveListL)((0, _Types.L)(DebugPrint$$$jlistL(DebugPrint$$$typeOfValL, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mtyp$$3)), (0, _Types.L)(DebugPrint$$$jlistL(DebugPrint$$$tyconL, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mtyp$$3)), (0, _Types.L)())));
}

function DebugPrint$$$entityL(ms$$5) {
  const header = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("module")), (0, _layout.op_HatHat)(DebugPrint$$$stampL((0, _tast.Entity$$get_Stamp)(ms$$5), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(ms$$5)))), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(":"))));
  const footer = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("end"));
  const body$$17 = DebugPrint$$$entityTypeL((0, _tast.Entity$$get_ModuleOrNamespaceType)(ms$$5));
  return (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)(header, body$$17), footer);
}

function DebugPrint$$$ccuL(ccu$$1) {
  return DebugPrint$$$entityL((0, _tast.CcuThunk$$get_Contents)(ccu$$1));
}

function DebugPrint$$$decisionTreeL(x$$163) {
  var dtree$$3;

  switch (x$$163.tag) {
    case 1:
      {
        const n$$17 = x$$163.fields[1] | 0;
        const args$$15 = x$$163.fields[0];
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("Success")), (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("T")), (0, _layout.op_HatHat)(DebugPrint$$$intL(n$$17), (0, _layout.tupleL)((0, _List.map)(DebugPrint$$$exprL, args$$15)))));
      }

    case 0:
      {
        const test = x$$163.fields[0];
        const dflt$$1 = x$$163.fields[2];
        const dcases = x$$163.fields[1];
        return (0, _layout.op_AtAtMinusMinus)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("Switch")), DebugPrint$$$exprL(test)), (0, _layout.op_AtAt)((0, _layout.aboveListL)((0, _List.map)(DebugPrint$$$dcaseL, dcases)), dflt$$1 != null ? (dtree$$3 = dflt$$1, (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("dflt:")), DebugPrint$$$decisionTreeL(dtree$$3))) : _layout.emptyL));
      }

    default:
      {
        const body$$18 = x$$163.fields[1];
        const bind$$7 = x$$163.fields[0];
        const bind$$8 = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("let")), (0, _layout.op_HatHat)(DebugPrint$$$bindingL(bind$$7), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("in"))));
        return (0, _layout.op_AtAt)(bind$$8, DebugPrint$$$decisionTreeL(body$$18));
      }
  }
}

function DebugPrint$$$dcaseL(_arg3$$6) {
  const test$$1 = _arg3$$6.fields[0];
  const dtree$$4 = _arg3$$6.fields[1];
  return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(DebugPrint$$$dtestL(test$$1), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("//"))), DebugPrint$$$decisionTreeL(dtree$$4));
}

function DebugPrint$$$dtestL(x$$164) {
  switch (x$$164.tag) {
    case 1:
      {
        const ty$$216 = x$$164.fields[1];
        const n$$18 = x$$164.fields[0] | 0;
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("length")), (0, _layout.op_HatHat)(DebugPrint$$$intL(n$$18), DebugPrint$$$typeL(ty$$216)));
      }

    case 2:
      {
        const c$$16 = x$$164.fields[0];
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("is")), DebugPrint$$$constL(c$$16));
      }

    case 3:
      {
        return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("isnull"));
      }

    case 4:
      {
        const ty$$217 = x$$164.fields[1];
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("isinst")), DebugPrint$$$typeL(ty$$217));
      }

    case 5:
      {
        const exp = x$$164.fields[0];
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("query")), DebugPrint$$$exprL(exp));
      }

    default:
      {
        const tinst$$43 = x$$164.fields[1];
        const c$$15 = x$$164.fields[0];
        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("is")), (0, _layout.op_HatHat)(DebugPrint$$$unionCaseRefL(c$$15), DebugPrint$$$instL(DebugPrint$$$typeL, tinst$$43)));
      }
  }
}

function DebugPrint$$$targetL(i$$6, _arg4$$1) {
  const body$$19 = _arg4$$1.fields[1];
  const argvs$$1 = _arg4$$1.fields[0];
  return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)("T")), (0, _layout.op_HatHat)(DebugPrint$$$intL(i$$6), (0, _layout.op_HatHat)((0, _layout.tupleL)(DebugPrint$$$flatValsL(argvs$$1)), (0, _layout.op_MinusMinusMinus)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(":")), DebugPrint$$$exprL(body$$19)))));
}

function DebugPrint$$$flatValsL(vs$$20) {
  return (0, _List.map)(DebugPrint$$$valL, vs$$20);
}

function DebugPrint$$$tmethodL(_arg5$$1) {
  const vs$$21 = _arg5$$1.fields[3];
  const tps$$35 = _arg5$$1.fields[2];
  const nm$$19 = _arg5$$1.fields[0].fields[0];
  const e$$31 = _arg5$$1.fields[4];
  return (0, _layout.op_MinusMinusMinus)((0, _layout.op_MinusMinusMinus)((0, _layout.op_MinusMinus)((0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("TObjExprMethod")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(nm$$19))), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("="))), (0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("METH-LAM")), DebugPrint$$$angleBracketListL((0, _List.map)(DebugPrint$$$typarL, tps$$35))), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(".")))), (0, _layout.op_HatHat)((0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("meth-lam")), (0, _layout.tupleL)((0, _List.map)(function ($arg$$33) {
    return (0, _layout.tupleL)((0, _List.map)(DebugPrint$$$vspecAtBindL, $arg$$33));
  }, vs$$21))), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(".")))), DebugPrint$$$atomL(e$$31));
}

function DebugPrint$$$overrideL(tmeth$$1) {
  return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("with")), DebugPrint$$$tmethodL(tmeth$$1));
}

function DebugPrint$$$iimplL(ty$$218, tmeths$$1) {
  return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("impl")), (0, _layout.aboveListL)((0, _Types.L)(DebugPrint$$$typeL(ty$$218), (0, _List.map)(DebugPrint$$$tmethodL, tmeths$$1))));
}

function DebugPrint$$$showType(x$$165) {
  return (0, _layout.showL)(DebugPrint$$$typeL(x$$165));
}

function DebugPrint$$$showExpr(x$$166) {
  return (0, _layout.showL)(DebugPrint$$$exprL(x$$166));
}

function DebugPrint$$$traitL(x$$167) {
  return DebugPrint$$$auxTraitL(SimplifyTypes$$$typeSimplificationInfo0, x$$167);
}

function DebugPrint$$$typarsL(x$$168) {
  return DebugPrint$$$layoutTyparDecls(x$$168);
}

function wrapModuleOrNamespaceType(id$$1, cpath$$2, mtyp$$4) {
  return (0, _tast.NewModuleOrNamespace)(cpath$$2, _tast.taccessPublic, id$$1, (0, _ast.XmlDoc$$$get_Empty)(), (0, _Types.L)(), new _tast.MaybeLazy$00601(0, "Strict", mtyp$$4));
}

function wrapModuleOrNamespaceTypeInNamespace(id$$2, cpath$$3, mtyp$$5) {
  const mspec$$2 = wrapModuleOrNamespaceType(id$$2, cpath$$3, mtyp$$5);
  return [(0, _tast.NewModuleOrNamespaceType)(new _tast.ModuleOrNamespaceKind(2, "Namespace"), (0, _Types.L)(mspec$$2, (0, _Types.L)()), (0, _Types.L)()), mspec$$2];
}

function wrapModuleOrNamespaceExprInNamespace(id$$3, cpath$$4, mexpr$$1) {
  const mspec$$3 = wrapModuleOrNamespaceType(id$$3, cpath$$4, (0, _tast.NewEmptyModuleOrNamespaceType)(new _tast.ModuleOrNamespaceKind(2, "Namespace")));
  return new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", false, (0, _Types.L)(), (0, _Types.L)(new _tast.ModuleOrNamespaceBinding(1, "Module", mspec$$3, mexpr$$1), (0, _Types.L)()), (0, _ast.Ident$$get_idRange)(id$$3));
}

function SigTypeOfImplFile(_arg1$$99) {
  const mexpr$$2 = _arg1$$99.fields[2];
  return (0, _tast.ModuleOrNamespaceExprWithSig$$get_Type)(mexpr$$2);
}

const SignatureRepackageInfo = (0, _Types.declare)(function SignatureRepackageInfo(arg1, arg2) {
  this.mrpiVals = arg1;
  this.mrpiEntities = arg2;
}, _Types.Record);
exports.SignatureRepackageInfo = SignatureRepackageInfo;

function SignatureRepackageInfo$$get_ImplToSigMapping(remapInfo) {
  return new TypeEquivEnv(TypeEquivEnv$$$get_Empty().EquivTypars, TyconRefMap$00601$$$OfList$$ZB24A5BC(remapInfo.mrpiEntities));
}

function SignatureRepackageInfo$$$get_Empty() {
  return new SignatureRepackageInfo((0, _Types.L)(), (0, _Types.L)());
}

const SignatureHidingInfo = (0, _Types.declare)(function SignatureHidingInfo(arg1, arg2, arg3, arg4, arg5) {
  this.mhiTycons = arg1;
  this.mhiTyconReprs = arg2;
  this.mhiVals = arg3;
  this.mhiRecdFields = arg4;
  this.mhiUnionCases = arg5;
}, _Types.Record);
exports.SignatureHidingInfo = SignatureHidingInfo;

function SignatureHidingInfo$$$get_Empty() {
  return new SignatureHidingInfo((0, _zset.ZsetModule$$$empty)(tyconOrder), (0, _zset.ZsetModule$$$empty)(tyconOrder), (0, _zset.ZsetModule$$$empty)(valOrder), (0, _zset.ZsetModule$$$empty)(recdFieldRefOrder), (0, _zset.ZsetModule$$$empty)(unionCaseRefOrder));
}

function addValRemap(v$$81, v$0027, tmenv$$2) {
  return new Remap(tmenv$$2.tpinst, ValMap$00601$$Add(tmenv$$2.valRemap, v$$81, (0, _tast.mkLocalValRef)(v$0027)), tmenv$$2.tyconRefRemap, tmenv$$2.removeTraitSolutions);
}

function mkRepackageRemapping(mrpi) {
  return new Remap(emptyTyparInst, ValMap$00601$$$OfList$$Z2CE9D52B((0, _List.map)(function mapping$$18(tupledArg$$50) {
    return [(0, _tast.ValRef$$get_Deref)(tupledArg$$50[0]), tupledArg$$50[1]];
  }, mrpi.mrpiVals)), TyconRefMap$00601$$$OfList$$ZB24A5BC(mrpi.mrpiEntities), false);
}

function accEntityRemap(msigty, entity$$1, mrpi$$1, mhi) {
  const sigtyconOpt = (0, _illib.NameMapModule$$$tryFind)((0, _tast.Entity$$get_LogicalName)(entity$$1), (0, _tast.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames)(msigty));

  if (sigtyconOpt != null) {
    const sigtycon = sigtyconOpt;
    const sigtcref = (0, _tast.mkLocalTyconRef)(sigtycon);
    const tcref$$79 = (0, _tast.mkLocalTyconRef)(entity$$1);
    const mrpi$$2 = new SignatureRepackageInfo(mrpi$$1.mrpiVals, (0, _Types.L)([tcref$$79, sigtcref], mrpi$$1.mrpiEntities));
    const mhi$$4 = (((0, _tast.Entity$$get_TypeReprInfo)(entity$$1).tag === 6 ? false : true) ? (0, _tast.Entity$$get_TypeReprInfo)(sigtycon).tag === 6 ? true : false : false) ? new SignatureHidingInfo(mhi.mhiTycons, (0, _zset.ZsetModule$$$add)(entity$$1, mhi.mhiTyconReprs), mhi.mhiVals, mhi.mhiRecdFields, mhi.mhiUnionCases) : (0, _List.foldBack)(function folder$$10(ucase$$1, mhi$$3) {
      if ((0, _tast.Entity$$GetUnionCaseByName$$Z721C83C5)(sigtycon, (0, _tast.UnionCase$$get_DisplayName)(ucase$$1)) != null) {
        return mhi$$3;
      } else {
        const ucref$$4 = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$79, ucase$$1);
        return new SignatureHidingInfo(mhi$$3.mhiTycons, mhi$$3.mhiTyconReprs, mhi$$3.mhiVals, mhi$$3.mhiRecdFields, (0, _zset.ZsetModule$$$add)(ucref$$4, mhi$$3.mhiUnionCases));
      }
    }, (0, _tast.Entity$$get_UnionCasesAsList)(entity$$1), (0, _Array.foldBack)(function folder$$9(rfield, mhi$$2) {
      if ((0, _tast.Entity$$GetFieldByName$$Z721C83C5)(sigtycon, (0, _tast.RecdField$$get_Name)(rfield)) != null) {
        return mhi$$2;
      } else {
        const rfref$$3 = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$79, rfield);
        return new SignatureHidingInfo(mhi$$2.mhiTycons, mhi$$2.mhiTyconReprs, mhi$$2.mhiVals, (0, _zset.ZsetModule$$$add)(rfref$$3, mhi$$2.mhiRecdFields), mhi$$2.mhiUnionCases);
      }
    }, (0, _tast.Entity$$get_AllFieldsArray)(entity$$1), mhi));
    return [mrpi$$2, mhi$$4];
  } else {
    const mhi$$1 = new SignatureHidingInfo((0, _zset.ZsetModule$$$add)(entity$$1, mhi.mhiTycons), mhi.mhiTyconReprs, mhi.mhiVals, mhi.mhiRecdFields, mhi.mhiUnionCases);
    return [mrpi$$1, mhi$$1];
  }
}

function accSubEntityRemap(msigty$$1, entity$$2, mrpi$$3, mhi$$5) {
  const sigtyconOpt$$1 = (0, _illib.NameMapModule$$$tryFind)((0, _tast.Entity$$get_LogicalName)(entity$$2), (0, _tast.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames)(msigty$$1));

  if (sigtyconOpt$$1 != null) {
    const sigtycon$$1 = sigtyconOpt$$1;
    const sigtcref$$1 = (0, _tast.mkLocalTyconRef)(sigtycon$$1);
    const tcref$$80 = (0, _tast.mkLocalTyconRef)(entity$$2);
    const mrpi$$4 = new SignatureRepackageInfo(mrpi$$3.mrpiVals, (0, _Types.L)([tcref$$80, sigtcref$$1], mrpi$$3.mrpiEntities));
    return [mrpi$$4, mhi$$5];
  } else {
    const mhi$$6 = new SignatureHidingInfo((0, _zset.ZsetModule$$$add)(entity$$2, mhi$$5.mhiTycons), mhi$$5.mhiTyconReprs, mhi$$5.mhiVals, mhi$$5.mhiRecdFields, mhi$$5.mhiUnionCases);
    return [mrpi$$3, mhi$$6];
  }
}

function valLinkageAEquiv(g$$251, aenv$$17, v1$$2, v2$$2) {
  if ((0, _Util.equals)((0, _tast.Val$$GetLinkagePartialKey)(v1$$2), (0, _tast.Val$$GetLinkagePartialKey)(v2$$2))) {
    if ((0, _tast.Val$$get_IsMember)(v1$$2) ? (0, _tast.Val$$get_IsMember)(v2$$2) : false) {
      return typeAEquivAux(new Erasure(0, "EraseAll"), g$$251, aenv$$17, (0, _tast.Val$$get_Type)(v1$$2), (0, _tast.Val$$get_Type)(v2$$2));
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function accValRemap(g$$252, aenv$$18, msigty$$2, implVal, mrpi$$5, mhi$$7) {
  const implValKey = (0, _tast.Val$$GetLinkagePartialKey)(implVal);
  const sigValOpt = (0, _List.tryFind)(function predicate$$14(sigVal) {
    return valLinkageAEquiv(g$$252, aenv$$18, implVal, sigVal);
  }, (0, _illib.MultiMapModule$$$find)(implValKey, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembersByPartialLinkageKey)(msigty$$2)));
  const vref$$39 = (0, _tast.mkLocalValRef)(implVal);

  if (sigValOpt != null) {
    const sigVal$$1 = sigValOpt;
    const mrpi$$6 = new SignatureRepackageInfo((0, _Types.L)([vref$$39, (0, _tast.mkLocalValRef)(sigVal$$1)], mrpi$$5.mrpiVals), mrpi$$5.mrpiEntities);
    return [mrpi$$6, mhi$$7];
  } else {
    if (_lib.verbose) {
      (0, _ildiag.dprintf)((0, _String.printf)("accValRemap, hide = %s#%d\n"))((0, _tast.Val$$get_LogicalName)(implVal))((0, _tast.Val$$get_Stamp)(implVal));
    }

    const mhi$$8 = new SignatureHidingInfo(mhi$$7.mhiTycons, mhi$$7.mhiTyconReprs, (0, _zset.ZsetModule$$$add)(implVal, mhi$$7.mhiVals), mhi$$7.mhiRecdFields, mhi$$7.mhiUnionCases);
    return [mrpi$$5, mhi$$8];
  }
}

function getCorrespondingSigTy(nm$$20, msigty$$3) {
  const matchValue$$127 = (0, _illib.NameMapModule$$$tryFind)(nm$$20, (0, _tast.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames)(msigty$$3));

  if (matchValue$$127 != null) {
    const sigsubmodul = matchValue$$127;
    return (0, _tast.Entity$$get_ModuleOrNamespaceType)(sigsubmodul);
  } else {
    return (0, _tast.NewEmptyModuleOrNamespaceType)(new _tast.ModuleOrNamespaceKind(1, "ModuleOrType"));
  }
}

function accEntityRemapFromModuleOrNamespaceType(mty, msigty$$4, acc_0, acc_1) {
  const acc$$62 = [acc_0, acc_1];
  const acc$$65 = (0, _QueueList.QueueListModule$$$foldBack)(function f$$37(e$$32, acc$$63) {
    return accEntityRemapFromModuleOrNamespaceType((0, _tast.Entity$$get_ModuleOrNamespaceType)(e$$32), getCorrespondingSigTy((0, _tast.Entity$$get_LogicalName)(e$$32), msigty$$4), acc$$63[0], acc$$63[1]);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty), acc$$62);
  const acc$$67 = (0, _QueueList.QueueListModule$$$foldBack)(function f$$38(entity$$3, tupledArg$$51) {
    return accEntityRemap(msigty$$4, entity$$3, tupledArg$$51[0], tupledArg$$51[1]);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty), acc$$65);
  return acc$$67;
}

function accValRemapFromModuleOrNamespaceType(g$$253, aenv$$19, mty$$2, msigty$$6, acc_0$$1, acc_1$$1) {
  const acc$$68 = [acc_0$$1, acc_1$$1];
  const acc$$71 = (0, _QueueList.QueueListModule$$$foldBack)(function f$$39(e$$33, acc$$69) {
    return accValRemapFromModuleOrNamespaceType(g$$253, aenv$$19, (0, _tast.Entity$$get_ModuleOrNamespaceType)(e$$33), getCorrespondingSigTy((0, _tast.Entity$$get_LogicalName)(e$$33), msigty$$6), acc$$69[0], acc$$69[1]);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty$$2), acc$$68);
  const acc$$73 = (0, _QueueList.QueueListModule$$$foldBack)(function f$$40(implVal$$1, tupledArg$$52) {
    return accValRemap(g$$253, aenv$$19, msigty$$6, implVal$$1, tupledArg$$52[0], tupledArg$$52[1]);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty$$2), acc$$71);
  return acc$$73;
}

function ComputeRemappingFromInferredSignatureToExplicitSignature(g$$254, mty$$4, msigty$$8) {
  const entityRemap$$2 = accEntityRemapFromModuleOrNamespaceType(mty$$4, msigty$$8, SignatureRepackageInfo$$$get_Empty(), SignatureHidingInfo$$$get_Empty());
  const mrpi$$9 = entityRemap$$2[0];
  const aenv$$20 = SignatureRepackageInfo$$get_ImplToSigMapping(mrpi$$9);
  const valAndEntityRemap = accValRemapFromModuleOrNamespaceType(g$$254, aenv$$20, mty$$4, msigty$$8, entityRemap$$2[0], entityRemap$$2[1]);
  return valAndEntityRemap;
}

function abstractSlotValsOfTycons(tycons$$1) {
  return (0, _List.map)(function mapping$$20(v$$82) {
    return (0, _tast.ValRef$$get_Deref)(v$$82);
  }, (0, _List.collect)(function mapping$$19(tycon$$15) {
    if ((0, _tast.Entity$$get_IsFSharpObjectModelTycon)(tycon$$15)) {
      return (0, _tast.Entity$$get_FSharpObjectModelTypeInfo)(tycon$$15).fsobjmodel_vslots;
    } else {
      return (0, _Types.L)();
    }
  }, tycons$$1));
}

function accEntityRemapFromModuleOrNamespace(msigty$$9, x$$174, acc_0$$2, acc_1$$2) {
  const acc$$74 = [acc_0$$2, acc_1$$2];

  switch (x$$174.tag) {
    case 2:
      {
        return acc$$74;
      }

    case 3:
      {
        return acc$$74;
      }

    case 1:
      {
        const defs$$3 = x$$174.fields[0];
        return accEntityRemapFromModuleOrNamespaceDefs(msigty$$9, defs$$3, acc$$74[0], acc$$74[1]);
      }

    case 0:
      {
        const mexpr$$3 = x$$174.fields[0];
        return accEntityRemapFromModuleOrNamespaceType((0, _tast.ModuleOrNamespaceExprWithSig$$get_Type)(mexpr$$3), msigty$$9, acc$$74[0], acc$$74[1]);
      }

    default:
      {
        const tycons$$2 = x$$174.fields[1];
        const mbinds$$1 = x$$174.fields[2];
        const acc$$75 = (0, _List.foldBack)(function folder$$11(x$$175, tupledArg$$53) {
          return accEntityRemapFromModuleOrNamespaceBind(msigty$$9, x$$175, tupledArg$$53[0], tupledArg$$53[1]);
        }, mbinds$$1, acc$$74);
        const acc$$76 = (0, _List.foldBack)(function folder$$12(entity$$4, tupledArg$$54) {
          return accEntityRemap(msigty$$9, entity$$4, tupledArg$$54[0], tupledArg$$54[1]);
        }, tycons$$2, acc$$75);
        const acc$$78 = (0, _List.foldBack)(function folder$$13(e$$34, acc$$77) {
          return accEntityRemapFromModuleOrNamespaceType((0, _tast.Entity$$get_ModuleOrNamespaceType)(e$$34), getCorrespondingSigTy((0, _tast.Entity$$get_LogicalName)(e$$34), msigty$$9), acc$$77[0], acc$$77[1]);
        }, tycons$$2, acc$$76);
        return acc$$78;
      }
  }
}

function accEntityRemapFromModuleOrNamespaceDefs(msigty$$11, mdefs, acc_0$$3, acc_1$$3) {
  const acc$$79 = [acc_0$$3, acc_1$$3];
  return (0, _List.foldBack)(function (x$$176, tupledArg$$55) {
    return accEntityRemapFromModuleOrNamespace(msigty$$11, x$$176, tupledArg$$55[0], tupledArg$$55[1]);
  }, mdefs, acc$$79);
}

function accEntityRemapFromModuleOrNamespaceBind(msigty$$12, x$$177, acc_0$$4, acc_1$$4) {
  const acc$$80 = [acc_0$$4, acc_1$$4];

  if (x$$177.tag === 1) {
    const mspec$$4 = x$$177.fields[0];
    const def = x$$177.fields[1];
    const tupledArg$$56 = accEntityRemapFromModuleOrNamespace(getCorrespondingSigTy((0, _tast.Entity$$get_LogicalName)(mspec$$4), msigty$$12), def, acc$$80[0], acc$$80[1]);
    return accSubEntityRemap(msigty$$12, mspec$$4, tupledArg$$56[0], tupledArg$$56[1]);
  } else {
    return acc$$80;
  }
}

function accValRemapFromModuleOrNamespace(g$$255, aenv$$21, msigty$$14, x$$178, acc_0$$5, acc_1$$5) {
  const acc$$81 = [acc_0$$5, acc_1$$5];

  switch (x$$178.tag) {
    case 2:
      {
        const bind$$9 = x$$178.fields[0];
        return accValRemap(g$$255, aenv$$21, msigty$$14, (0, _tast.Binding$$get_Var)(bind$$9), acc$$81[0], acc$$81[1]);
      }

    case 3:
      {
        return acc$$81;
      }

    case 1:
      {
        const defs$$4 = x$$178.fields[0];
        return accValRemapFromModuleOrNamespaceDefs(g$$255, aenv$$21, msigty$$14, defs$$4, acc$$81[0], acc$$81[1]);
      }

    case 0:
      {
        const mexpr$$4 = x$$178.fields[0];
        return accValRemapFromModuleOrNamespaceType(g$$255, aenv$$21, (0, _tast.ModuleOrNamespaceExprWithSig$$get_Type)(mexpr$$4), msigty$$14, acc$$81[0], acc$$81[1]);
      }

    default:
      {
        const tycons$$3 = x$$178.fields[1];
        const mbinds$$2 = x$$178.fields[2];
        const acc$$82 = (0, _List.foldBack)(function folder$$14(x$$179, tupledArg$$57) {
          return accValRemapFromModuleOrNamespaceBind(g$$255, aenv$$21, msigty$$14, x$$179, tupledArg$$57[0], tupledArg$$57[1]);
        }, mbinds$$2, acc$$81);
        const vslotvs = abstractSlotValsOfTycons(tycons$$3);
        const acc$$83 = (0, _List.foldBack)(function folder$$15(implVal$$2, tupledArg$$58) {
          return accValRemap(g$$255, aenv$$21, msigty$$14, implVal$$2, tupledArg$$58[0], tupledArg$$58[1]);
        }, vslotvs, acc$$82);
        return acc$$83;
      }
  }
}

function accValRemapFromModuleOrNamespaceBind(g$$256, aenv$$22, msigty$$15, x$$180, acc_0$$6, acc_1$$6) {
  const acc$$84 = [acc_0$$6, acc_1$$6];

  if (x$$180.tag === 1) {
    const mspec$$5 = x$$180.fields[0];
    const def$$1 = x$$180.fields[1];
    const tupledArg$$59 = accValRemapFromModuleOrNamespace(g$$256, aenv$$22, getCorrespondingSigTy((0, _tast.Entity$$get_LogicalName)(mspec$$5), msigty$$15), def$$1, acc$$84[0], acc$$84[1]);
    return accSubEntityRemap(msigty$$15, mspec$$5, tupledArg$$59[0], tupledArg$$59[1]);
  } else {
    const bind$$10 = x$$180.fields[0];
    return accValRemap(g$$256, aenv$$22, msigty$$15, (0, _tast.Binding$$get_Var)(bind$$10), acc$$84[0], acc$$84[1]);
  }
}

function accValRemapFromModuleOrNamespaceDefs(g$$257, aenv$$23, msigty$$17, mdefs$$1, acc_0$$7, acc_1$$7) {
  const acc$$85 = [acc_0$$7, acc_1$$7];
  return (0, _List.foldBack)(function (x$$181, tupledArg$$60) {
    return accValRemapFromModuleOrNamespace(g$$257, aenv$$23, msigty$$17, x$$181, tupledArg$$60[0], tupledArg$$60[1]);
  }, mdefs$$1, acc$$85);
}

function ComputeRemappingFromImplementationToSignature(g$$258, mdef, msigty$$18) {
  const entityRemap$$3 = accEntityRemapFromModuleOrNamespace(msigty$$18, mdef, SignatureRepackageInfo$$$get_Empty(), SignatureHidingInfo$$$get_Empty());
  const mrpi$$16 = entityRemap$$3[0];
  const aenv$$24 = SignatureRepackageInfo$$get_ImplToSigMapping(mrpi$$16);
  const valAndEntityRemap$$1 = accValRemapFromModuleOrNamespace(g$$258, aenv$$24, msigty$$18, mdef, entityRemap$$3[0], entityRemap$$3[1]);
  return valAndEntityRemap$$1;
}

function accTyconHidingInfoAtAssemblyBoundary(tycon$$16, mhi$$17) {
  if (!(0, _tast.canAccessFromEverywhere)((0, _tast.Entity$$get_Accessibility)(tycon$$16))) {
    return new SignatureHidingInfo((0, _zset.ZsetModule$$$add)(tycon$$16, mhi$$17.mhiTycons), mhi$$17.mhiTyconReprs, mhi$$17.mhiVals, mhi$$17.mhiRecdFields, mhi$$17.mhiUnionCases);
  } else if (!(0, _tast.canAccessFromEverywhere)((0, _tast.Entity$$get_TypeReprAccessibility)(tycon$$16))) {
    return new SignatureHidingInfo(mhi$$17.mhiTycons, (0, _zset.ZsetModule$$$add)(tycon$$16, mhi$$17.mhiTyconReprs), mhi$$17.mhiVals, mhi$$17.mhiRecdFields, mhi$$17.mhiUnionCases);
  } else {
    return (0, _List.foldBack)(function folder$$17(ucase$$2, mhi$$19) {
      if (!(0, _tast.canAccessFromEverywhere)(ucase$$2.Accessibility)) {
        const tcref$$82 = (0, _tast.mkLocalTyconRef)(tycon$$16);
        const ucref$$5 = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$82, ucase$$2);
        return new SignatureHidingInfo(mhi$$19.mhiTycons, mhi$$19.mhiTyconReprs, mhi$$19.mhiVals, mhi$$19.mhiRecdFields, (0, _zset.ZsetModule$$$add)(ucref$$5, mhi$$19.mhiUnionCases));
      } else {
        return mhi$$19;
      }
    }, (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$16), (0, _Array.foldBack)(function folder$$16(rfield$$1, mhi$$18) {
      if (!(0, _tast.canAccessFromEverywhere)((0, _tast.RecdField$$get_Accessibility)(rfield$$1))) {
        const tcref$$81 = (0, _tast.mkLocalTyconRef)(tycon$$16);
        const rfref$$4 = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$81, rfield$$1);
        return new SignatureHidingInfo(mhi$$18.mhiTycons, mhi$$18.mhiTyconReprs, mhi$$18.mhiVals, (0, _zset.ZsetModule$$$add)(rfref$$4, mhi$$18.mhiRecdFields), mhi$$18.mhiUnionCases);
      } else {
        return mhi$$18;
      }
    }, (0, _tast.Entity$$get_AllFieldsArray)(tycon$$16), mhi$$17));
  }
}

function accValHidingInfoAtAssemblyBoundary(vspec$$2, mhi$$20) {
  if ((!(0, _tast.canAccessFromEverywhere)((0, _tast.Val$$get_Accessibility)(vspec$$2)) ? true : (0, _tast.Val$$get_IsIncrClassGeneratedMember)(vspec$$2)) ? true : !(0, _tast.Val$$get_IsMemberOrModuleBinding)(vspec$$2)) {
    return new SignatureHidingInfo(mhi$$20.mhiTycons, mhi$$20.mhiTyconReprs, (0, _zset.ZsetModule$$$add)(vspec$$2, mhi$$20.mhiVals), mhi$$20.mhiRecdFields, mhi$$20.mhiUnionCases);
  } else {
    return mhi$$20;
  }
}

function accModuleOrNamespaceHidingInfoAtAssemblyBoundary(mty$$8, acc$$86) {
  const acc$$88 = (0, _QueueList.QueueListModule$$$foldBack)(function (e$$35, acc$$87) {
    return accModuleOrNamespaceHidingInfoAtAssemblyBoundary((0, _tast.Entity$$get_ModuleOrNamespaceType)(e$$35), acc$$87);
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty$$8), acc$$86);
  const acc$$89 = (0, _QueueList.QueueListModule$$$foldBack)(accTyconHidingInfoAtAssemblyBoundary, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty$$8), acc$$88);
  const acc$$90 = (0, _QueueList.QueueListModule$$$foldBack)(accValHidingInfoAtAssemblyBoundary, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty$$8), acc$$89);
  return acc$$90;
}

function ComputeHidingInfoAtAssemblyBoundary(mty$$9, acc$$91) {
  return accModuleOrNamespaceHidingInfoAtAssemblyBoundary(mty$$9, acc$$91);
}

function IsHidden(setF, accessF, remapF, debugF) {
  const check = function check(mrmi, x$$182) {
    check: while (true) {
      if (_lib.verbose) {
        (0, _ildiag.dprintf)((0, _String.printf)("IsHidden %s ??\n"))((0, _layout.showL)(debugF(x$$182)));
      }

      if (!(0, _tast.canAccessFromEverywhere)(accessF(x$$182))) {
        return true;
      } else {
        if (mrmi.tail != null) {
          const rpi = mrmi.head[0];
          const rest$$1 = mrmi.tail;
          const mhi$$23 = mrmi.head[1];

          if ((0, _zset.ZsetModule$$$contains)(x$$182, setF(mhi$$23))) {
            return true;
          } else {
            mrmi = rest$$1;
            x$$182 = remapF(rpi, x$$182);
            continue check;
          }
        } else {
          return false;
        }
      }
    }
  };

  return function (mrmi$$1) {
    return function (x$$183) {
      const res$$6 = check(mrmi$$1, x$$183);

      if (_lib.verbose) {
        (0, _ildiag.dprintf)((0, _String.printf)("IsHidden, #mrmi = %d, %s = %b\n"))((0, _List.length)(mrmi$$1))((0, _layout.showL)(debugF(x$$183)))(res$$6);
      }

      return res$$6;
    };
  };
}

function IsHiddenTycon(mrmi$$2, x$$184) {
  return IsHidden(function (mhi$$24) {
    return mhi$$24.mhiTycons;
  }, function (tc$$13) {
    return (0, _tast.Entity$$get_Accessibility)(tc$$13);
  }, function (rpi$$1, x$$185) {
    return (0, _tast.EntityRef$$get_Deref)(remapTyconRef(rpi$$1.tyconRefRemap, (0, _tast.mkLocalTyconRef)(x$$185)));
  }, DebugPrint$$$tyconL)(mrmi$$2)(x$$184);
}

function IsHiddenTyconRepr(mrmi$$3, x$$186) {
  return IsHidden(function (mhi$$25) {
    return mhi$$25.mhiTyconReprs;
  }, function (v$$83) {
    return (0, _tast.Entity$$get_TypeReprAccessibility)(v$$83);
  }, function (rpi$$2, x$$187) {
    return (0, _tast.EntityRef$$get_Deref)(remapTyconRef(rpi$$2.tyconRefRemap, (0, _tast.mkLocalTyconRef)(x$$187)));
  }, DebugPrint$$$tyconL)(mrmi$$3)(x$$186);
}

function IsHiddenVal(mrmi$$4, x$$188) {
  return IsHidden(function (mhi$$26) {
    return mhi$$26.mhiVals;
  }, function (v$$84) {
    return (0, _tast.Val$$get_Accessibility)(v$$84);
  }, function (rpi$$3, x$$189) {
    return (0, _tast.ValRef$$get_Deref)(remapValRef(rpi$$3, (0, _tast.mkLocalValRef)(x$$189)));
  }, DebugPrint$$$valL)(mrmi$$4)(x$$188);
}

function IsHiddenRecdField(mrmi$$5, x$$190) {
  return IsHidden(function (mhi$$27) {
    return mhi$$27.mhiRecdFields;
  }, function (rfref$$5) {
    return (0, _tast.RecdField$$get_Accessibility)((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$5));
  }, function (rpi$$4, x$$191) {
    return remapRecdFieldRef(rpi$$4.tyconRefRemap, x$$191);
  }, DebugPrint$$$recdFieldRefL)(mrmi$$5)(x$$190);
}

function foldModuleOrNamespaceTy(ft, fv, mty$$10, acc$$92) {
  const go = function go(mty$$11, acc$$93) {
    const acc$$95 = (0, _QueueList.QueueListModule$$$foldBack)(function (e$$36, acc$$94) {
      return go((0, _tast.Entity$$get_ModuleOrNamespaceType)(e$$36), acc$$94);
    }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty$$11), acc$$93);
    const acc$$96 = (0, _QueueList.QueueListModule$$$foldBack)(ft, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty$$11), acc$$95);
    const acc$$97 = (0, _QueueList.QueueListModule$$$foldBack)(fv, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty$$11), acc$$96);
    return acc$$97;
  };

  return go(mty$$10, acc$$92);
}

function allValsOfModuleOrNamespaceTy(m$$125) {
  return foldModuleOrNamespaceTy(function (_arg1$$100, acc$$98) {
    return acc$$98;
  }, function (v$$85, acc$$99) {
    return (0, _Types.L)(v$$85, acc$$99);
  }, m$$125, (0, _Types.L)());
}

function allEntitiesOfModuleOrNamespaceTy(m$$126) {
  return foldModuleOrNamespaceTy(function (ft$$1, acc$$100) {
    return (0, _Types.L)(ft$$1, acc$$100);
  }, function (_arg1$$101, acc$$101) {
    return acc$$101;
  }, m$$126, (0, _Types.L)());
}

function isPublicVal(lv) {
  return (0, _Util.equals)((0, _tast.Val$$get_Accessibility)(lv), _tast.taccessPublic);
}

function isPublicUnionCase(ucr$$1) {
  return (0, _Util.equals)((0, _tast.UnionCaseRef$$get_UnionCase)(ucr$$1).Accessibility, _tast.taccessPublic);
}

function isPublicRecdField(rfr) {
  return (0, _Util.equals)((0, _tast.RecdField$$get_Accessibility)((0, _tast.RecdFieldRef$$get_RecdField)(rfr)), _tast.taccessPublic);
}

function isPublicTycon(tcr$$20) {
  return (0, _Util.equals)((0, _tast.Entity$$get_Accessibility)(tcr$$20), _tast.taccessPublic);
}

function freeVarsAllPublic(fvs$$2) {
  if (((0, _zset.ZsetModule$$$forall)(isPublicVal, fvs$$2.FreeLocals) ? (0, _zset.ZsetModule$$$forall)(isPublicUnionCase, fvs$$2.FreeUnionCases) : false) ? (0, _zset.ZsetModule$$$forall)(isPublicRecdField, fvs$$2.FreeRecdFields) : false) {
    return (0, _zset.ZsetModule$$$forall)(isPublicTycon, fvs$$2.FreeTyvars.FreeTycons);
  } else {
    return false;
  }
}

function freeTyvarsAllPublic(tyvars) {
  return (0, _zset.ZsetModule$$$forall)(isPublicTycon, tyvars.FreeTycons);
}

function $007CLinearMatchExpr$007C_$007C(expr$$21) {
  var $target$$224, dtree$$5, e2$$10, m$$127, m2$$4, sp, sp2, tg1, ty$$219;

  if (expr$$21.tag === 9) {
    if (!(0, _Array.equalsWith)(function ($x$$34, $y$$35) {
      return $x$$34.CompareTo($y$$35);
    }, expr$$21.fields[3], null) ? expr$$21.fields[3].length === 2 : false) {
      if (expr$$21.fields[3][1].fields[0].tail == null) {
        $target$$224 = 0;
        dtree$$5 = expr$$21.fields[2];
        e2$$10 = expr$$21.fields[3][1].fields[1];
        m$$127 = expr$$21.fields[1];
        m2$$4 = expr$$21.fields[4];
        sp = expr$$21.fields[0];
        sp2 = expr$$21.fields[3][1].fields[2];
        tg1 = expr$$21.fields[3][0];
        ty$$219 = expr$$21.fields[5];
      } else {
        $target$$224 = 1;
      }
    } else {
      $target$$224 = 1;
    }
  } else {
    $target$$224 = 1;
  }

  switch ($target$$224) {
    case 0:
      {
        return [sp, m$$127, dtree$$5, tg1, e2$$10, sp2, m2$$4, ty$$219];
      }

    case 1:
      {
        return null;
      }
  }
}

function rebuildLinearMatchExpr(tupledArg$$61) {
  return primMkMatch(tupledArg$$61[0], tupledArg$$61[1], tupledArg$$61[2], [tupledArg$$61[3], new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(), tupledArg$$61[4], tupledArg$$61[5])], tupledArg$$61[6], tupledArg$$61[7]);
}

const emptyFreeVars = new _tast.FreeVars(emptyFreeLocals, false, false, emptyFreeTycons, emptyFreeRecdFields, emptyFreeUnionCases, emptyFreeTyvars);
exports.emptyFreeVars = emptyFreeVars;

function unionFreeVars(fvs1$$2, fvs2$$2) {
  if (fvs1$$2 === emptyFreeVars) {
    return fvs2$$2;
  } else if (fvs2$$2 === emptyFreeVars) {
    return fvs1$$2;
  } else {
    return new _tast.FreeVars(unionFreeLocals(fvs1$$2.FreeLocals, fvs2$$2.FreeLocals), fvs1$$2.UsesMethodLocalConstructs ? true : fvs2$$2.UsesMethodLocalConstructs, fvs1$$2.UsesUnboundRethrow ? true : fvs2$$2.UsesUnboundRethrow, unionFreeTycons(fvs1$$2.FreeLocalTyconReprs, fvs2$$2.FreeLocalTyconReprs), unionFreeRecdFields(fvs1$$2.FreeRecdFields, fvs2$$2.FreeRecdFields), unionFreeUnionCases(fvs1$$2.FreeUnionCases, fvs2$$2.FreeUnionCases), unionFreeTyvars(fvs1$$2.FreeTyvars, fvs2$$2.FreeTyvars));
  }
}

function accFreeVarsInTy(opts$$18, ty$$221, acc$$102) {
  if (!opts$$18.collectInTypes) {
    return acc$$102;
  } else {
    const ftyvs$$1 = acc$$102.FreeTyvars;
    const ftyvs$0027 = accFreeInType(opts$$18, ty$$221, ftyvs$$1);

    if (ftyvs$$1 === ftyvs$0027) {
      return acc$$102;
    } else {
      return new _tast.FreeVars(acc$$102.FreeLocals, acc$$102.UsesMethodLocalConstructs, acc$$102.UsesUnboundRethrow, acc$$102.FreeLocalTyconReprs, acc$$102.FreeRecdFields, acc$$102.FreeUnionCases, ftyvs$0027);
    }
  }
}

function accFreeVarsInTys(opts$$20, tys$$24, acc$$104) {
  if (tys$$24.tail == null) {
    return acc$$104;
  } else if (!opts$$20.collectInTypes) {
    return acc$$104;
  } else {
    const ftyvs$$2 = acc$$104.FreeTyvars;
    const ftyvs$0027$$1 = accFreeInTypes(opts$$20, tys$$24, ftyvs$$2);

    if (ftyvs$$2 === ftyvs$0027$$1) {
      return acc$$104;
    } else {
      return new _tast.FreeVars(acc$$104.FreeLocals, acc$$104.UsesMethodLocalConstructs, acc$$104.UsesUnboundRethrow, acc$$104.FreeLocalTyconReprs, acc$$104.FreeRecdFields, acc$$104.FreeUnionCases, ftyvs$0027$$1);
    }
  }
}

function accFreevarsInTycon(opts$$22, tcref$$83, acc$$106) {
  if (!opts$$22.collectInTypes) {
    return acc$$106;
  } else {
    const ftyvs$$3 = acc$$106.FreeTyvars;
    const ftyvs$0027$$2 = accFreeTycon(opts$$22, tcref$$83, ftyvs$$3);

    if (ftyvs$$3 === ftyvs$0027$$2) {
      return acc$$106;
    } else {
      return new _tast.FreeVars(acc$$106.FreeLocals, acc$$106.UsesMethodLocalConstructs, acc$$106.UsesUnboundRethrow, acc$$106.FreeLocalTyconReprs, acc$$106.FreeRecdFields, acc$$106.FreeUnionCases, ftyvs$0027$$2);
    }
  }
}

function accFreevarsInVal(opts$$25, v$$89, acc$$109) {
  if (!opts$$25.collectInTypes) {
    return acc$$109;
  } else {
    const ftyvs$$4 = acc$$109.FreeTyvars;
    const ftyvs$0027$$3 = accFreeInVal(opts$$25, v$$89, ftyvs$$4);

    if (ftyvs$$4 === ftyvs$0027$$3) {
      return acc$$109;
    } else {
      return new _tast.FreeVars(acc$$109.FreeLocals, acc$$109.UsesMethodLocalConstructs, acc$$109.UsesUnboundRethrow, acc$$109.FreeLocalTyconReprs, acc$$109.FreeRecdFields, acc$$109.FreeUnionCases, ftyvs$0027$$3);
    }
  }
}

function accFreeVarsInTraitSln(opts$$28, tys$$25, acc$$112) {
  if (!opts$$28.collectInTypes) {
    return acc$$112;
  } else {
    const ftyvs$$5 = acc$$112.FreeTyvars;
    const ftyvs$0027$$4 = accFreeInTraitSln(opts$$28, tys$$25, ftyvs$$5);

    if (ftyvs$$5 === ftyvs$0027$$4) {
      return acc$$112;
    } else {
      return new _tast.FreeVars(acc$$112.FreeLocals, acc$$112.UsesMethodLocalConstructs, acc$$112.UsesUnboundRethrow, acc$$112.FreeLocalTyconReprs, acc$$112.FreeRecdFields, acc$$112.FreeUnionCases, ftyvs$0027$$4);
    }
  }
}

function boundLocalVal(opts$$31, v$$93, fvs$$3) {
  if (!opts$$31.includeLocals) {
    return fvs$$3;
  } else {
    const fvs$$4 = accFreevarsInVal(opts$$31, v$$93, fvs$$3);

    if (!(0, _zset.ZsetModule$$$contains)(v$$93, fvs$$4.FreeLocals)) {
      return fvs$$4;
    } else {
      return new _tast.FreeVars((0, _zset.ZsetModule$$$remove)(v$$93, fvs$$4.FreeLocals), fvs$$4.UsesMethodLocalConstructs, fvs$$4.UsesUnboundRethrow, fvs$$4.FreeLocalTyconReprs, fvs$$4.FreeRecdFields, fvs$$4.FreeUnionCases, fvs$$4.FreeTyvars);
    }
  }
}

function boundProtect(fvs$$5) {
  if (fvs$$5.UsesMethodLocalConstructs) {
    return new _tast.FreeVars(fvs$$5.FreeLocals, false, fvs$$5.UsesUnboundRethrow, fvs$$5.FreeLocalTyconReprs, fvs$$5.FreeRecdFields, fvs$$5.FreeUnionCases, fvs$$5.FreeTyvars);
  } else {
    return fvs$$5;
  }
}

function accUsesFunctionLocalConstructs(flg, fvs$$6) {
  if (flg ? !fvs$$6.UsesMethodLocalConstructs : false) {
    return new _tast.FreeVars(fvs$$6.FreeLocals, true, fvs$$6.UsesUnboundRethrow, fvs$$6.FreeLocalTyconReprs, fvs$$6.FreeRecdFields, fvs$$6.FreeUnionCases, fvs$$6.FreeTyvars);
  } else {
    return fvs$$6;
  }
}

function bound_rethrow(fvs$$7) {
  if (fvs$$7.UsesUnboundRethrow) {
    return new _tast.FreeVars(fvs$$7.FreeLocals, fvs$$7.UsesMethodLocalConstructs, false, fvs$$7.FreeLocalTyconReprs, fvs$$7.FreeRecdFields, fvs$$7.FreeUnionCases, fvs$$7.FreeTyvars);
  } else {
    return fvs$$7;
  }
}

function accUsesRethrow(flg$$1, fvs$$8) {
  if (flg$$1 ? !fvs$$8.UsesUnboundRethrow : false) {
    return new _tast.FreeVars(fvs$$8.FreeLocals, fvs$$8.UsesMethodLocalConstructs, true, fvs$$8.FreeLocalTyconReprs, fvs$$8.FreeRecdFields, fvs$$8.FreeUnionCases, fvs$$8.FreeTyvars);
  } else {
    return fvs$$8;
  }
}

function boundLocalVals(opts$$32, vs$$22, fvs$$9) {
  return (0, _List.foldBack)(function (v$$94, fvs$$10) {
    return boundLocalVal(opts$$32, v$$94, fvs$$10);
  }, vs$$22, fvs$$9);
}

function bindLhs(opts$$33, bind$$11, fvs$$11) {
  return boundLocalVal(opts$$33, (0, _tast.Binding$$get_Var)(bind$$11), fvs$$11);
}

function freeVarsCacheCompute(opts$$34, cache, f$$46) {
  if (opts$$34.canCache) {
    if ((0, _Util.equals)(cache.cacheVal, null)) {
      const res$$7 = f$$46();
      cache.cacheVal = (0, _lib.nullableSlotFull)(res$$7);
      return res$$7;
    } else {
      return cache.cacheVal;
    }
  } else {
    return f$$46();
  }
}

function accBindRhs(opts$$35, _arg1$$102, acc$$115) {
  const repr$$3 = _arg1$$102.fields[1];
  return accFreeInExpr(opts$$35, repr$$3, acc$$115);
}

function accFreeInSwitchCases(opts$$36, csl, dflt$$2, acc$$116) {
  return (0, _Seq.foldBack)(function (arg10$0040$$74, arg20$0040$$24) {
    return accFreeInDecisionTree(opts$$36, arg10$0040$$74, arg20$0040$$24);
  }, (0, _Option.defaultArg)(dflt$$2, [], function ($x$$36) {
    return [$x$$36];
  }), (0, _List.foldBack)(function (arg10$0040$$75, acc$$117) {
    return accFreeInSwitchCase(opts$$36, arg10$0040$$75, acc$$117);
  }, csl, acc$$116));
}

function accFreeInSwitchCase(opts$$37, _arg2$$11, acc$$118) {
  const dtree$$7 = _arg2$$11.fields[1];
  const discrim = _arg2$$11.fields[0];
  return accFreeInDecisionTree(opts$$37, dtree$$7, accFreeInTest(opts$$37, discrim, acc$$118));
}

function accFreeInTest(opts$$38, discrim$$1, acc$$119) {
  var $target$$228;

  switch (discrim$$1.tag) {
    case 1:
      $target$$228 = 1;
      break;

    case 2:
    case 3:
      $target$$228 = 2;
      break;

    case 4:
      $target$$228 = 3;
      break;

    case 5:
      $target$$228 = 4;
      break;

    default:
      $target$$228 = 0;
  }

  switch ($target$$228) {
    case 0:
      {
        const ucref$$6 = discrim$$1.fields[0];
        const tinst$$44 = discrim$$1.fields[1];
        return accFreeUnionCaseRef(opts$$38, ucref$$6, accFreeVarsInTys(opts$$38, tinst$$44, acc$$119));
      }

    case 1:
      {
        const ty$$222 = discrim$$1.fields[1];
        return accFreeVarsInTy(opts$$38, ty$$222, acc$$119);
      }

    case 2:
      {
        return acc$$119;
      }

    case 3:
      {
        const tgty = discrim$$1.fields[1];
        const srcty = discrim$$1.fields[0];
        return accFreeVarsInTy(opts$$38, srcty, accFreeVarsInTy(opts$$38, tgty, acc$$119));
      }

    case 4:
      {
        const tys$$26 = discrim$$1.fields[1];
        const exp$$1 = discrim$$1.fields[0];
        const activePatIdentity = discrim$$1.fields[2];
        return accFreeInExpr(opts$$38, exp$$1, accFreeVarsInTys(opts$$38, tys$$26, (0, _Seq.foldBack)(function (tupledArg$$62, acc$$120) {
          return accFreeValRef(opts$$38, tupledArg$$62[0], accFreeVarsInTys(opts$$38, tupledArg$$62[1], acc$$120));
        }, (0, _Option.defaultArg)(activePatIdentity, [], function ($x$$37) {
          return [$x$$37];
        }), acc$$119)));
      }
  }
}

function accFreeInDecisionTree(opts$$39, x$$199, acc$$121) {
  switch (x$$199.tag) {
    case 1:
      {
        const es$$4 = x$$199.fields[0];
        return accFreeInFlatExprs(opts$$39, es$$4, acc$$121);
      }

    case 2:
      {
        const body$$20 = x$$199.fields[1];
        const bind$$12 = x$$199.fields[0];
        return unionFreeVars(bindLhs(opts$$39, bind$$12, accBindRhs(opts$$39, bind$$12, freeInDecisionTree(opts$$39, body$$20))), acc$$121);
      }

    default:
      {
        const e1$$17 = x$$199.fields[0];
        const dflt$$3 = x$$199.fields[2];
        const csl$$1 = x$$199.fields[1];
        return accFreeInExpr(opts$$39, e1$$17, accFreeInSwitchCases(opts$$39, csl$$1, dflt$$3, acc$$121));
      }
  }
}

function accFreeInValFlags(opts$$40, flag$$2, acc$$122) {
  const isMethLocal = flag$$2.tag === 3 ? true : flag$$2.tag === 2 ? true : flag$$2.tag === 0 ? false : flag$$2.tag === 1 ? false : true;
  const acc$$123 = accUsesFunctionLocalConstructs(isMethLocal, acc$$122);

  if (flag$$2.tag === 0) {
    const ty$$223 = flag$$2.fields[0];

    if (!opts$$40.collectInTypes) {
      return acc$$123;
    } else {
      const ftyvs$$6 = acc$$123.FreeTyvars;
      const ftyvs$0027$$5 = accFreeInType(opts$$40, ty$$223, ftyvs$$6);

      if (ftyvs$$6 === ftyvs$0027$$5) {
        return acc$$123;
      } else {
        return new _tast.FreeVars(acc$$123.FreeLocals, acc$$123.UsesMethodLocalConstructs, acc$$123.UsesUnboundRethrow, acc$$123.FreeLocalTyconReprs, acc$$123.FreeRecdFields, acc$$123.FreeUnionCases, ftyvs$0027$$5);
      }
    }
  } else {
    return acc$$123;
  }
}

function accFreeLocalVal(opts$$42, v$$96, fvs$$12) {
  if (!opts$$42.includeLocals) {
    return fvs$$12;
  } else if ((0, _zset.ZsetModule$$$contains)(v$$96, fvs$$12.FreeLocals)) {
    return fvs$$12;
  } else {
    const fvs$$13 = accFreevarsInVal(opts$$42, v$$96, fvs$$12);
    return new _tast.FreeVars((0, _zset.ZsetModule$$$add)(v$$96, fvs$$13.FreeLocals), fvs$$13.UsesMethodLocalConstructs, fvs$$13.UsesUnboundRethrow, fvs$$13.FreeLocalTyconReprs, fvs$$13.FreeRecdFields, fvs$$13.FreeUnionCases, fvs$$13.FreeTyvars);
  }
}

function accLocalTyconRepr(opts$$43, b$$22, fvs$$14) {
  if (!opts$$43.includeLocalTyconReprs) {
    return fvs$$14;
  } else if ((0, _zset.ZsetModule$$$contains)(b$$22, fvs$$14.FreeLocalTyconReprs)) {
    return fvs$$14;
  } else {
    return new _tast.FreeVars(fvs$$14.FreeLocals, fvs$$14.UsesMethodLocalConstructs, fvs$$14.UsesUnboundRethrow, (0, _zset.ZsetModule$$$add)(b$$22, fvs$$14.FreeLocalTyconReprs), fvs$$14.FreeRecdFields, fvs$$14.FreeUnionCases, fvs$$14.FreeTyvars);
  }
}

function accUsedRecdOrUnionTyconRepr(opts$$44, tc$$14, fvs$$15) {
  var matchValue$$129;

  if (matchValue$$129 = (0, _tast.Entity$$get_TypeReprInfo)(tc$$14), matchValue$$129.tag === 0 ? true : matchValue$$129.tag === 1 ? true : matchValue$$129.tag === 2 ? true : false) {
    return accLocalTyconRepr(opts$$44, tc$$14, fvs$$15);
  } else {
    return fvs$$15;
  }
}

function accFreeUnionCaseRef(opts$$45, cr, fvs$$16) {
  if (!opts$$45.includeUnionCases) {
    return fvs$$16;
  } else if ((0, _zset.ZsetModule$$$contains)(cr, fvs$$16.FreeUnionCases)) {
    return fvs$$16;
  } else {
    const fvs$$18 = accUsedRecdOrUnionTyconRepr(opts$$45, (0, _tast.UnionCaseRef$$get_Tycon)(cr), fvs$$16);
    const fvs$$19 = accFreevarsInTycon(opts$$45, (0, _tast.UnionCaseRef$$get_TyconRef)(cr), fvs$$18);
    return new _tast.FreeVars(fvs$$19.FreeLocals, fvs$$19.UsesMethodLocalConstructs, fvs$$19.UsesUnboundRethrow, fvs$$19.FreeLocalTyconReprs, fvs$$19.FreeRecdFields, (0, _zset.ZsetModule$$$add)(cr, fvs$$19.FreeUnionCases), fvs$$19.FreeTyvars);
  }
}

function accFreeRecdFieldRef(opts$$46, rfref$$6, fvs$$20) {
  if (!opts$$46.includeRecdFields) {
    return fvs$$20;
  } else if ((0, _zset.ZsetModule$$$contains)(rfref$$6, fvs$$20.FreeRecdFields)) {
    return fvs$$20;
  } else {
    const fvs$$22 = accUsedRecdOrUnionTyconRepr(opts$$46, (0, _tast.RecdFieldRef$$get_Tycon)(rfref$$6), fvs$$20);
    const fvs$$23 = accFreevarsInTycon(opts$$46, (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$6), fvs$$22);
    return new _tast.FreeVars(fvs$$23.FreeLocals, fvs$$23.UsesMethodLocalConstructs, fvs$$23.UsesUnboundRethrow, fvs$$23.FreeLocalTyconReprs, (0, _zset.ZsetModule$$$add)(rfref$$6, fvs$$23.FreeRecdFields), fvs$$23.FreeUnionCases, fvs$$23.FreeTyvars);
  }
}

function accFreeExnRef(_exnc, fvs$$24) {
  return fvs$$24;
}

function accFreeValRef(opts$$47, vref$$41, fvs$$25) {
  if ((0, _tast.ValRef$$get_IsLocalRef)(vref$$41)) {
    return accFreeLocalVal(opts$$47, (0, _tast.ValRef$$get_PrivateTarget)(vref$$41), fvs$$25);
  } else {
    return fvs$$25;
  }
}

function accFreeInMethod(opts$$48, _arg3$$7, acc$$127) {
  var acc$$129, ftyvs$$7, ftyvs$0027$$6;
  const tps$$36 = _arg3$$7.fields[2];
  const tmvs = _arg3$$7.fields[3];
  const slotsig$$2 = _arg3$$7.fields[0];
  const e$$37 = _arg3$$7.fields[4];
  const _attribs = _arg3$$7.fields[1];
  return accFreeInSlotSig(opts$$48, slotsig$$2, unionFreeVars((acc$$129 = (0, _List.foldBack)(function (vs$$23, fvs$$26) {
    return boundLocalVals(opts$$48, vs$$23, fvs$$26);
  }, tmvs, freeInExpr(opts$$48, e$$37)), !opts$$48.collectInTypes ? acc$$129 : (ftyvs$$7 = acc$$129.FreeTyvars, (ftyvs$0027$$6 = boundTypars(opts$$48, tps$$36, ftyvs$$7), ftyvs$$7 === ftyvs$0027$$6 ? acc$$129 : new _tast.FreeVars(acc$$129.FreeLocals, acc$$129.UsesMethodLocalConstructs, acc$$129.UsesUnboundRethrow, acc$$129.FreeLocalTyconReprs, acc$$129.FreeRecdFields, acc$$129.FreeUnionCases, ftyvs$0027$$6)))), acc$$127));
}

function accFreeInMethods(opts$$51, methods, acc$$130) {
  return (0, _List.foldBack)(function (arg10$0040$$77, acc$$131) {
    return accFreeInMethod(opts$$51, arg10$0040$$77, acc$$131);
  }, methods, acc$$130);
}

function accFreeInInterfaceImpl(opts$$52, ty$$224, overrides$$2, acc$$132) {
  return accFreeVarsInTy(opts$$52, ty$$224, accFreeInMethods(opts$$52, overrides$$2, acc$$132));
}

function accFreeInExpr(opts$$53, x$$202, acc$$133) {
  if (x$$202.tag === 7) {
    return accFreeInExprLinear(opts$$53, x$$202, acc$$133, function (e$$38) {
      return e$$38;
    });
  } else {
    return accFreeInExprNonLinear(opts$$53, x$$202, acc$$133);
  }
}

function accFreeInExprLinear($arg$$229, $arg$$230, $arg$$231, $arg$$232) {
  accFreeInExprLinear: while (true) {
    const opts$$54 = $arg$$229,
          x$$203 = $arg$$230,
          acc$$134 = $arg$$231,
          contf = $arg$$232;

    if (x$$203.tag === 7) {
      const e$$39 = x$$203.fields[1];
      const cache$$2 = x$$203.fields[3];
      const bind$$13 = x$$203.fields[0];

      const contf$$1 = function contf$$1($arg$$38) {
        return contf(unionFreeVars(freeVarsCacheCompute(opts$$54, cache$$2, function () {
          return bindLhs(opts$$54, bind$$13, accBindRhs(opts$$54, bind$$13, $arg$$38));
        }), acc$$134));
      };

      $arg$$229 = opts$$54;
      $arg$$230 = e$$39;
      $arg$$231 = emptyFreeVars;
      $arg$$232 = contf$$1;
      continue accFreeInExprLinear;
    } else {
      return contf(accFreeInExpr(opts$$54, x$$203, acc$$134));
    }
  }
}

function accFreeInExprNonLinear(opts$$55, x$$204, acc$$135) {
  var acc$$137, ftyvs$$8, ftyvs$0027$$7, acc$$139, ftyvs$$9, ftyvs$0027$$8;

  var $target$$233, b$$23, baseValOpt$$3, ctorThisValOpt$$2, rty$$33, vs$$24, b$$24, rty$$34, vs$$25, b$$25, vs$$26, binds$$6, cache$$3, e$$40, basecall$$1, basev$$3, iimpls$$4, overrides$$3, ty$$225, flags$$1, lvr, _data, argExprs, argTypes, ast, ty$$227, ast$$1, ty$$228, args$$16, f0, f0ty, tyargs$$15, eref$$7, e1$$18, e2$$12, e2$$13, e3$$3, dtree$$8, targets$$2, e1$$19, e2$$15, e3$$4, tinst$$46, args$$17, op, tinst$$47;

  if (x$$204.tag === 4) {
    $target$$233 = 1;
    b$$24 = x$$204.fields[2];
    rty$$34 = x$$204.fields[4];
    vs$$25 = x$$204.fields[1];
  } else if (x$$204.tag === 13) {
    $target$$233 = 2;
    b$$25 = x$$204.fields[1];
    vs$$26 = x$$204.fields[0];
  } else if (x$$204.tag === 6) {
    $target$$233 = 3;
    binds$$6 = x$$204.fields[0];
    cache$$3 = x$$204.fields[3];
    e$$40 = x$$204.fields[1];
  } else if (x$$204.tag === 7) {
    $target$$233 = 4;
  } else if (x$$204.tag === 8) {
    $target$$233 = 5;
    basecall$$1 = x$$204.fields[3];
    basev$$3 = x$$204.fields[2];
    iimpls$$4 = x$$204.fields[5];
    overrides$$3 = x$$204.fields[4];
    ty$$225 = x$$204.fields[1];
  } else if (x$$204.tag === 0) {
    $target$$233 = 6;
  } else if (x$$204.tag === 1) {
    $target$$233 = 7;
    flags$$1 = x$$204.fields[1];
    lvr = x$$204.fields[0];
  } else if (x$$204.tag === 12) {
    if (x$$204.fields[1].contents == null) {
      $target$$233 = 9;
      ast$$1 = x$$204.fields[0];
      ty$$228 = x$$204.fields[4];
    } else {
      $target$$233 = 8;
      _data = x$$204.fields[1].contents[3];
      argExprs = x$$204.fields[1].contents[2];
      argTypes = x$$204.fields[1].contents[1];
      ast = x$$204.fields[0];
      ty$$227 = x$$204.fields[4];
    }
  } else if (x$$204.tag === 5) {
    $target$$233 = 10;
    args$$16 = x$$204.fields[3];
    f0 = x$$204.fields[0];
    f0ty = x$$204.fields[1];
    tyargs$$15 = x$$204.fields[2];
  } else if (x$$204.tag === 14) {
    $target$$233 = 11;
    eref$$7 = x$$204.fields[0];
  } else if (x$$204.tag === 2) {
    $target$$233 = 12;
    e1$$18 = x$$204.fields[0];
    e2$$12 = x$$204.fields[1];
  } else if (x$$204.tag === 10) {
    $target$$233 = 13;
    e2$$13 = x$$204.fields[1];
    e3$$3 = x$$204.fields[2];
  } else if (x$$204.tag === 9) {
    $target$$233 = 14;
    dtree$$8 = x$$204.fields[2];
    targets$$2 = x$$204.fields[3];
  } else if (x$$204.tag === 11) {
    if (x$$204.fields[0].tag === 8) {
      if (x$$204.fields[2].tail != null) {
        if (x$$204.fields[2].tail.tail != null) {
          if (x$$204.fields[2].tail.tail.tail != null) {
            if (x$$204.fields[2].tail.tail.tail.tail == null) {
              $target$$233 = 15;
              e1$$19 = x$$204.fields[2].head;
              e2$$15 = x$$204.fields[2].tail.head;
              e3$$4 = x$$204.fields[2].tail.tail.head;
              tinst$$46 = x$$204.fields[1];
            } else {
              $target$$233 = 16;
              args$$17 = x$$204.fields[2];
              op = x$$204.fields[0];
              tinst$$47 = x$$204.fields[1];
            }
          } else {
            $target$$233 = 16;
            args$$17 = x$$204.fields[2];
            op = x$$204.fields[0];
            tinst$$47 = x$$204.fields[1];
          }
        } else {
          $target$$233 = 16;
          args$$17 = x$$204.fields[2];
          op = x$$204.fields[0];
          tinst$$47 = x$$204.fields[1];
        }
      } else {
        $target$$233 = 16;
        args$$17 = x$$204.fields[2];
        op = x$$204.fields[0];
        tinst$$47 = x$$204.fields[1];
      }
    } else {
      $target$$233 = 16;
      args$$17 = x$$204.fields[2];
      op = x$$204.fields[0];
      tinst$$47 = x$$204.fields[1];
    }
  } else {
    $target$$233 = 0;
    b$$23 = x$$204.fields[4];
    baseValOpt$$3 = x$$204.fields[2];
    ctorThisValOpt$$2 = x$$204.fields[1];
    rty$$33 = x$$204.fields[6];
    vs$$24 = x$$204.fields[3];
  }

  switch ($target$$233) {
    case 0:
      {
        return unionFreeVars((0, _Seq.foldBack)(function (v$$98, fvs$$27) {
          return boundLocalVal(opts$$55, v$$98, fvs$$27);
        }, (0, _Option.defaultArg)(ctorThisValOpt$$2, [], function ($x$$40) {
          return [$x$$40];
        }), (0, _Seq.foldBack)(function (v$$99, fvs$$28) {
          return boundLocalVal(opts$$55, v$$99, fvs$$28);
        }, (0, _Option.defaultArg)(baseValOpt$$3, [], function ($x$$39) {
          return [$x$$39];
        }), boundLocalVals(opts$$55, vs$$24, accFreeVarsInTy(opts$$55, rty$$33, freeInExpr(opts$$55, b$$23))))), acc$$135);
      }

    case 1:
      {
        return unionFreeVars((acc$$137 = accFreeVarsInTy(opts$$55, rty$$34, freeInExpr(opts$$55, b$$24)), !opts$$55.collectInTypes ? acc$$137 : (ftyvs$$8 = acc$$137.FreeTyvars, (ftyvs$0027$$7 = boundTypars(opts$$55, vs$$25, ftyvs$$8), ftyvs$$8 === ftyvs$0027$$7 ? acc$$137 : new _tast.FreeVars(acc$$137.FreeLocals, acc$$137.UsesMethodLocalConstructs, acc$$137.UsesUnboundRethrow, acc$$137.FreeLocalTyconReprs, acc$$137.FreeRecdFields, acc$$137.FreeUnionCases, ftyvs$0027$$7)))), acc$$135);
      }

    case 2:
      {
        return unionFreeVars((acc$$139 = freeInExpr(opts$$55, b$$25), !opts$$55.collectInTypes ? acc$$139 : (ftyvs$$9 = acc$$139.FreeTyvars, (ftyvs$0027$$8 = boundTypars(opts$$55, vs$$26, ftyvs$$9), ftyvs$$9 === ftyvs$0027$$8 ? acc$$139 : new _tast.FreeVars(acc$$139.FreeLocals, acc$$139.UsesMethodLocalConstructs, acc$$139.UsesUnboundRethrow, acc$$139.FreeLocalTyconReprs, acc$$139.FreeRecdFields, acc$$139.FreeUnionCases, ftyvs$0027$$8)))), acc$$135);
      }

    case 3:
      {
        return unionFreeVars(freeVarsCacheCompute(opts$$55, cache$$3, function () {
          return (0, _List.foldBack)(function (bind$$14, fvs$$29) {
            return bindLhs(opts$$55, bind$$14, fvs$$29);
          }, binds$$6, (0, _List.foldBack)(function (arg10$0040$$78, acc$$140) {
            return accBindRhs(opts$$55, arg10$0040$$78, acc$$140);
          }, binds$$6, freeInExpr(opts$$55, e$$40)));
        }), acc$$135);
      }

    case 4:
      {
        throw new Error("unreachable - linear expr");
      }

    case 5:
      {
        return unionFreeVars(boundProtect((0, _Seq.foldBack)(function (v$$102, fvs$$30) {
          return boundLocalVal(opts$$55, v$$102, fvs$$30);
        }, (0, _Option.defaultArg)(basev$$3, [], function ($x$$41) {
          return [$x$$41];
        }), accFreeVarsInTy(opts$$55, ty$$225, accFreeInExpr(opts$$55, basecall$$1, accFreeInMethods(opts$$55, overrides$$3, (0, _List.foldBack)(function (tupledArg$$63, acc$$141) {
          return accFreeInInterfaceImpl(opts$$55, tupledArg$$63[0], tupledArg$$63[1], acc$$141);
        }, iimpls$$4, emptyFreeVars)))))), acc$$135);
      }

    case 6:
      {
        return acc$$135;
      }

    case 7:
      {
        return accFreeInValFlags(opts$$55, flags$$1, accFreeValRef(opts$$55, lvr, acc$$135));
      }

    case 8:
      {
        return accFreeInExpr(opts$$55, ast, accFreeInExprs(opts$$55, argExprs, accFreeVarsInTys(opts$$55, argTypes, accFreeVarsInTy(opts$$55, ty$$227, acc$$135))));
      }

    case 9:
      {
        return accFreeInExpr(opts$$55, ast$$1, accFreeVarsInTy(opts$$55, ty$$228, acc$$135));
      }

    case 10:
      {
        return accFreeVarsInTy(opts$$55, f0ty, accFreeInExpr(opts$$55, f0, accFreeVarsInTys(opts$$55, tyargs$$15, accFreeInExprs(opts$$55, args$$16, acc$$135))));
      }

    case 11:
      {
        return accFreeInExpr(opts$$55, eref$$7.contents, acc$$135);
      }

    case 12:
      {
        const acc$$142 = accFreeInExpr(opts$$55, e1$$18, acc$$135);
        return accFreeInExpr(opts$$55, e2$$12, acc$$142);
      }

    case 13:
      {
        return accFreeInExpr(opts$$55, e2$$13, accFreeInExpr(opts$$55, e3$$3, acc$$135));
      }

    case 14:
      {
        const activePatternResult32904 = $007CLinearMatchExpr$007C_$007C(x$$204);

        if (activePatternResult32904 != null) {
          const acc$$143 = accFreeInDecisionTree(opts$$55, activePatternResult32904[2], acc$$135);
          const acc$$144 = accFreeInTarget(opts$$55, activePatternResult32904[3], acc$$143);
          return accFreeInExpr(opts$$55, activePatternResult32904[4], acc$$144);
        } else {
          const acc$$145 = accFreeInDecisionTree(opts$$55, dtree$$8, acc$$135);
          return accFreeInTargets(opts$$55, targets$$2, acc$$145);
        }
      }

    case 15:
      {
        return unionFreeVars(accFreeVarsInTys(opts$$55, tinst$$46, accFreeInExprs(opts$$55, (0, _Types.L)(e1$$19, (0, _Types.L)(e2$$15, (0, _Types.L)())), acc$$135)), bound_rethrow(accFreeInExpr(opts$$55, e3$$4, emptyFreeVars)));
      }

    case 16:
      {
        const acc$$146 = accFreeInOp(opts$$55, op, acc$$135);
        const acc$$147 = accFreeVarsInTys(opts$$55, tinst$$47, acc$$146);
        return accFreeInExprs(opts$$55, args$$17, acc$$147);
      }
  }
}

function accFreeInOp(opts$$60, op$$1, acc$$148) {
  var ftyvs$$11, ftyvs$0027$$10;
  var $target$$234, cr$$1, ecr, fr;

  switch (op$$1.tag) {
    case 5:
    case 8:
    case 9:
    case 7:
    case 24:
    case 23:
    case 3:
    case 6:
    case 27:
    case 28:
    case 26:
    case 21:
      $target$$234 = 0;
      break;

    case 2:
      $target$$234 = 1;
      break;

    case 14:
      $target$$234 = 2;
      break;

    case 15:
      $target$$234 = 3;
      cr$$1 = op$$1.fields[0];
      break;

    case 0:
      $target$$234 = 3;
      cr$$1 = op$$1.fields[0];
      break;

    case 17:
      $target$$234 = 3;
      cr$$1 = op$$1.fields[0];
      break;

    case 16:
      $target$$234 = 3;
      cr$$1 = op$$1.fields[0];
      break;

    case 18:
      $target$$234 = 3;
      cr$$1 = op$$1.fields[0];
      break;

    case 1:
      $target$$234 = 4;
      ecr = op$$1.fields[0];
      break;

    case 19:
      $target$$234 = 4;
      ecr = op$$1.fields[0];
      break;

    case 20:
      $target$$234 = 4;
      ecr = op$$1.fields[0];
      break;

    case 12:
      $target$$234 = 5;
      fr = op$$1.fields[0];
      break;

    case 13:
      $target$$234 = 5;
      fr = op$$1.fields[0];
      break;

    case 11:
      $target$$234 = 5;
      fr = op$$1.fields[0];
      break;

    case 10:
      $target$$234 = 6;
      break;

    case 22:
      $target$$234 = 7;
      break;

    case 25:
      $target$$234 = 8;
      break;

    case 29:
      $target$$234 = 9;
      break;

    case 30:
      $target$$234 = 10;
      break;

    case 31:
      $target$$234 = 11;
      break;

    default:
      $target$$234 = 0;
  }

  switch ($target$$234) {
    case 0:
      {
        return acc$$148;
      }

    case 1:
      {
        const tupInfo$$19 = op$$1.fields[0];

        if (!opts$$60.collectInTypes) {
          return acc$$148;
        } else {
          const ftyvs$$10 = acc$$148.FreeTyvars;
          const ftyvs$0027$$9 = accFreeInTupInfo(opts$$60, tupInfo$$19, ftyvs$$10);

          if (ftyvs$$10 === ftyvs$0027$$9) {
            return acc$$148;
          } else {
            return new _tast.FreeVars(acc$$148.FreeLocals, acc$$148.UsesMethodLocalConstructs, acc$$148.UsesUnboundRethrow, acc$$148.FreeLocalTyconReprs, acc$$148.FreeRecdFields, acc$$148.FreeUnionCases, ftyvs$0027$$9);
          }
        }
      }

    case 2:
      {
        const tr = op$$1.fields[0];
        return accUsedRecdOrUnionTyconRepr(opts$$60, (0, _tast.EntityRef$$get_Deref)(tr), acc$$148);
      }

    case 3:
      {
        return accFreeUnionCaseRef(opts$$60, cr$$1, acc$$148);
      }

    case 4:
      {
        return accFreeExnRef(ecr, acc$$148);
      }

    case 5:
      {
        return accFreeRecdFieldRef(opts$$60, fr, acc$$148);
      }

    case 6:
      {
        const tcr$$24 = op$$1.fields[1];
        const kind = op$$1.fields[0];
        const acc$$151 = accUsesFunctionLocalConstructs((0, _Util.equals)(kind, new _tast.RecordConstructionInfo(0, "RecdExprIsObjInit")), acc$$148);
        return accUsedRecdOrUnionTyconRepr(opts$$60, (0, _tast.EntityRef$$get_Deref)(tcr$$24), !opts$$60.collectInTypes ? acc$$151 : (ftyvs$$11 = acc$$151.FreeTyvars, (ftyvs$0027$$10 = accFreeTycon(opts$$60, tcr$$24, ftyvs$$11), ftyvs$$11 === ftyvs$0027$$10 ? acc$$151 : new _tast.FreeVars(acc$$151.FreeLocals, acc$$151.UsesMethodLocalConstructs, acc$$151.UsesUnboundRethrow, acc$$151.FreeLocalTyconReprs, acc$$151.FreeRecdFields, acc$$151.FreeUnionCases, ftyvs$0027$$10))));
      }

    case 7:
      {
        const tys$$27 = op$$1.fields[1];
        return accFreeVarsInTys(opts$$60, tys$$27, acc$$148);
      }

    case 8:
      {
        return accUsesRethrow(true, acc$$148);
      }

    case 9:
      {
        const tys$$28 = op$$1.fields[0].fields[0];
        const sln$$6 = op$$1.fields[0].fields[5];
        const rty$$35 = op$$1.fields[0].fields[4];
        const argtys$$9 = op$$1.fields[0].fields[3];
        return (0, _Seq.foldBack)(function (tys$$29, acc$$154) {
          return accFreeVarsInTraitSln(opts$$60, tys$$29, acc$$154);
        }, (0, _Option.defaultArg)(sln$$6.contents, [], function ($x$$43) {
          return [$x$$43];
        }), accFreeVarsInTys(opts$$60, tys$$28, accFreeVarsInTys(opts$$60, argtys$$9, (0, _Seq.foldBack)(function (ty$$229, acc$$155) {
          return accFreeVarsInTy(opts$$60, ty$$229, acc$$155);
        }, (0, _Option.defaultArg)(rty$$35, [], function ($x$$42) {
          return [$x$$42];
        }), acc$$148))));
      }

    case 10:
      {
        const lvr$$1 = op$$1.fields[1];
        return accFreeValRef(opts$$60, lvr$$1, acc$$148);
      }

    case 11:
      {
        const valUseFlags = op$$1.fields[4];
        const tys$$30 = op$$1.fields[10];
        const methTypeArgs = op$$1.fields[9];
        const isProtectedCall = op$$1.fields[1];
        const enclTypeArgs = op$$1.fields[8];
        return accFreeVarsInTys(opts$$60, enclTypeArgs, accFreeVarsInTys(opts$$60, methTypeArgs, accFreeInValFlags(opts$$60, valUseFlags, accFreeVarsInTys(opts$$60, tys$$30, accUsesFunctionLocalConstructs(isProtectedCall, acc$$148)))));
      }
  }
}

function accFreeInTargets(opts$$64, targets$$3, acc$$156) {
  return (0, _Array.foldBack)(function (arg10$0040$$79, acc$$157) {
    return accFreeInTarget(opts$$64, arg10$0040$$79, acc$$157);
  }, targets$$3, acc$$156);
}

function accFreeInTarget(opts$$65, _arg4$$2, acc$$158) {
  const vs$$27 = _arg4$$2.fields[0];
  const e$$41 = _arg4$$2.fields[1];
  return (0, _List.foldBack)(function (v$$105, fvs$$31) {
    return boundLocalVal(opts$$65, v$$105, fvs$$31);
  }, vs$$27, accFreeInExpr(opts$$65, e$$41, acc$$158));
}

function accFreeInFlatExprs(opts$$66, es$$5, acc$$159) {
  return (0, _List.foldBack)(function (x$$209, acc$$160) {
    return accFreeInExpr(opts$$66, x$$209, acc$$160);
  }, es$$5, acc$$159);
}

function accFreeInExprs(opts$$67, es$$6, acc$$161) {
  accFreeInExprs: while (true) {
    if (es$$6.tail != null) {
      const t$$13 = es$$6.tail;
      const h$$5 = es$$6.head;
      const acc$$162 = accFreeInExpr(opts$$67, h$$5, acc$$161);
      opts$$67 = opts$$67;
      es$$6 = t$$13;
      acc$$161 = acc$$162;
      continue accFreeInExprs;
    } else {
      return acc$$161;
    }
  }
}

function accFreeInSlotSig(opts$$68, _arg5$$2, acc$$163) {
  const ty$$230 = _arg5$$2.fields[1];
  return accFreeVarsInTy(opts$$68, ty$$230, acc$$163);
}

function freeInDecisionTree(opts$$69, e$$42) {
  return accFreeInDecisionTree(opts$$69, e$$42, emptyFreeVars);
}

function freeInExpr(opts$$70, e$$43) {
  return accFreeInExpr(opts$$70, e$$43, emptyFreeVars);
}

function accFreeInModuleOrNamespace(opts$$71, x$$210, acc$$164) {
  accFreeInModuleOrNamespace: while (true) {
    switch (x$$210.tag) {
      case 2:
        {
          const bind$$15 = x$$210.fields[0];
          return accBindRhs(opts$$71, bind$$15, acc$$164);
        }

      case 3:
        {
          const e$$44 = x$$210.fields[0];
          return accFreeInExpr(opts$$71, e$$44, acc$$164);
        }

      case 1:
        {
          const defs$$5 = x$$210.fields[0];
          return accFreeInModuleOrNamespaces(opts$$71, defs$$5, acc$$164);
        }

      case 0:
        {
          const mdef$$1 = x$$210.fields[0].fields[1];
          opts$$71 = opts$$71;
          x$$210 = mdef$$1;
          acc$$164 = acc$$164;
          continue accFreeInModuleOrNamespace;
        }

      default:
        {
          const mbinds$$3 = x$$210.fields[2];
          return (0, _List.foldBack)(function (x$$211, acc$$165) {
            return accFreeInModuleOrNamespaceBind(opts$$71, x$$211, acc$$165);
          }, mbinds$$3, acc$$164);
        }
    }
  }
}

function accFreeInModuleOrNamespaceBind(opts$$72, x$$212, acc$$166) {
  if (x$$212.tag === 1) {
    const def$$2 = x$$212.fields[1];
    return accFreeInModuleOrNamespace(opts$$72, def$$2, acc$$166);
  } else {
    const bind$$16 = x$$212.fields[0];
    return accBindRhs(opts$$72, bind$$16, acc$$166);
  }
}

function accFreeInModuleOrNamespaces(opts$$73, x$$213, acc$$167) {
  return (0, _List.foldBack)(function (x$$214, acc$$168) {
    return accFreeInModuleOrNamespace(opts$$73, x$$214, acc$$168);
  }, x$$213, acc$$167);
}

function freeInBindingRhs(opts$$74, bind$$17) {
  return accBindRhs(opts$$74, bind$$17, emptyFreeVars);
}

function freeInModuleOrNamespace(opts$$75, mdef$$2) {
  return accFreeInModuleOrNamespace(opts$$75, mdef$$2, emptyFreeVars);
}

function stripLambda(e$$45, ty$$231) {
  if (e$$45.tag === 3) {
    const v$$106 = e$$45.fields[3];
    const rty$$36 = e$$45.fields[6];
    const ctorThisValOpt$$3 = e$$45.fields[1];
    const baseValOpt$$4 = e$$45.fields[2];
    const b$$26 = e$$45.fields[4];

    if (ctorThisValOpt$$3 != null) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("skipping ctorThisValOpt", Expr$002Eget_Range(e$$45)));
    }

    if (baseValOpt$$4 != null) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("skipping baseValOpt", Expr$002Eget_Range(e$$45)));
    }

    const patternInput$$46 = stripLambda(b$$26, rty$$36);
    return [(0, _Types.L)(v$$106, patternInput$$46[0]), patternInput$$46[1], patternInput$$46[2]];
  } else {
    return [(0, _Types.L)(), e$$45, ty$$231];
  }
}

function stripLambdaN(n$$19, e$$46) {
  var v$$107, ctorThisValOpt$$4, body$$21, baseValOpt$$5;
  var $target$$235, baseValOpt$$6, body$$22, ctorThisValOpt$$5, v$$108;

  if (e$$46.tag === 3) {
    if (v$$107 = e$$46.fields[3], (ctorThisValOpt$$4 = e$$46.fields[1], (body$$21 = e$$46.fields[4], (baseValOpt$$5 = e$$46.fields[2], n$$19 > 0)))) {
      $target$$235 = 0;
      baseValOpt$$6 = e$$46.fields[2];
      body$$22 = e$$46.fields[4];
      ctorThisValOpt$$5 = e$$46.fields[1];
      v$$108 = e$$46.fields[3];
    } else {
      $target$$235 = 1;
    }
  } else {
    $target$$235 = 1;
  }

  switch ($target$$235) {
    case 0:
      {
        if (ctorThisValOpt$$5 != null) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("skipping ctorThisValOpt", Expr$002Eget_Range(e$$46)));
        }

        if (baseValOpt$$6 != null) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("skipping baseValOpt", Expr$002Eget_Range(e$$46)));
        }

        const patternInput$$47 = stripLambdaN(n$$19 - 1, body$$22);
        return [(0, _Types.L)(v$$108, patternInput$$47[0]), patternInput$$47[1], patternInput$$47[2]];
      }

    case 1:
      {
        return [(0, _Types.L)(), e$$46, n$$19];
      }
  }
}

function tryStripLambdaN(n$$20, e$$47) {
  var $target$$236;

  if (e$$47.tag === 3) {
    if (e$$47.fields[1] == null) {
      if (e$$47.fields[2] == null) {
        $target$$236 = 0;
      } else {
        $target$$236 = 1;
      }
    } else {
      $target$$236 = 1;
    }
  } else {
    $target$$236 = 1;
  }

  switch ($target$$236) {
    case 0:
      {
        const patternInput$$48 = stripLambdaN(n$$20, e$$47);

        if (patternInput$$48[2] === 0) {
          return [patternInput$$48[0], patternInput$$48[1]];
        } else {
          return null;
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function stripTopLambda(e$$48, ty$$232) {
  let patternInput$$49;

  if (e$$48.tag === 4) {
    const tps$$40 = e$$48.fields[1];
    const rty$$37 = e$$48.fields[4];
    const b$$27 = e$$48.fields[2];
    patternInput$$49 = [tps$$40, b$$27, rty$$37];
  } else {
    patternInput$$49 = [(0, _Types.L)(), e$$48, ty$$232];
  }

  const patternInput$$50 = stripLambda(patternInput$$49[1], patternInput$$49[2]);
  return [patternInput$$49[0], patternInput$$50[0], patternInput$$50[1], patternInput$$50[2]];
}

const AllowTypeDirectedDetupling = (0, _Types.declare)(function AllowTypeDirectedDetupling(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AllowTypeDirectedDetupling = AllowTypeDirectedDetupling;

function InferArityOfExpr(g$$259, allowTypeDirectedDetupling, ty$$233, partialArgAttribsL, retAttribs, e$$49) {
  const stripLambda_notypes = function stripLambda_notypes(e$$50) {
    stripLambda_notypes: while (true) {
      switch (e$$50.tag) {
        case 3:
          {
            const vs$$30 = e$$50.fields[3];
            const b$$28 = e$$50.fields[4];
            const patternInput$$51 = stripLambda_notypes(b$$28);
            return [(0, _Types.L)(vs$$30, patternInput$$51[0]), patternInput$$51[1]];
          }

        case 13:
          {
            const b$$29 = e$$50.fields[1];
            e$$50 = b$$29;
            continue stripLambda_notypes;
          }

        default:
          {
            return [(0, _Types.L)(), e$$50];
          }
      }
    }
  };

  const stripTopLambdaNoTypes = function stripTopLambdaNoTypes(e$$51) {
    let patternInput$$52;

    if (e$$51.tag === 4) {
      const tps$$42 = e$$51.fields[1];
      const b$$30 = e$$51.fields[2];
      patternInput$$52 = [tps$$42, b$$30];
    } else {
      patternInput$$52 = [(0, _Types.L)(), e$$51];
    }

    const patternInput$$53 = stripLambda_notypes(patternInput$$52[1]);
    return [patternInput$$52[0], patternInput$$53[0], patternInput$$53[1]];
  };

  const patternInput$$54 = stripTopLambdaNoTypes(e$$49);
  const fun_arity = (0, _List.length)(patternInput$$54[1]) | 0;
  const patternInput$$55 = stripFunTyN(g$$259, fun_arity, tryDestForallTy(g$$259, ty$$233)[1]);
  const partialArgAttribsL$$1 = (0, _Array.ofList)(partialArgAttribsL, Array);
  const curriedArgInfos$$1 = (0, _List.mapIndexed)(function mapping$$25(i$$7, tupledArg$$64) {
    const partialAttribs = i$$7 < partialArgAttribsL$$1.length ? partialArgAttribsL$$1[i$$7] : (0, _Types.L)();
    const tys$$31 = allowTypeDirectedDetupling.tag === 0 ? (i$$7 === 0 ? isUnitTy(g$$259, tupledArg$$64[1]) : false) ? (0, _Types.L)() : tryDestRefTupleTy(g$$259, tupledArg$$64[1]) : (0, _Types.L)(tupledArg$$64[1], (0, _Types.L)());
    const ids = (0, _List.length)(tupledArg$$64[0]) === (0, _List.length)(tys$$31) ? (0, _List.map)(function mapping$$21(v$$109) {
      return (0, _tast.Val$$get_Id)(v$$109);
    }, tupledArg$$64[0]) : (0, _List.map)(function mapping$$22(_arg1$$103) {
      return null;
    }, tys$$31);
    const attribs$$2 = (0, _List.length)(partialAttribs) === (0, _List.length)(tys$$31) ? partialAttribs : (0, _List.map)(function mapping$$23(_arg2$$12) {
      return (0, _Types.L)();
    }, tys$$31);
    return (0, _List.map2)(function mapping$$24(id$$4, attribs$$3) {
      return new _tast.ArgReprInfo(attribs$$3, id$$4);
    }, ids, attribs$$2);
  }, (0, _List.zip)(patternInput$$54[1], patternInput$$55[0]));
  const retInfo$$4 = new _tast.ArgReprInfo(retAttribs, null);
  return new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(patternInput$$54[0]), curriedArgInfos$$1, retInfo$$4);
}

function InferArityOfExprBinding(g$$260, allowTypeDirectedDetupling$$1, v$$110, e$$52) {
  const matchValue$$131 = (0, _tast.Val$$get_ValReprInfo)(v$$110);

  if (matchValue$$131 == null) {
    return InferArityOfExpr(g$$260, allowTypeDirectedDetupling$$1, (0, _tast.Val$$get_Type)(v$$110), (0, _Types.L)(), (0, _Types.L)(), e$$52);
  } else {
    const info = matchValue$$131;
    return info;
  }
}

function underlyingTypeOfEnumTy(g$$261, ty$$235) {
  const matchValue$$132 = metadataOfTy(g$$261, ty$$235);

  if (matchValue$$132.tag === 1) {
    const tycon$$18 = (0, _tast.EntityRef$$get_Deref)(tcrefOfAppTy(g$$261, ty$$235));
    const matchValue$$134 = (0, _tast.Entity$$GetFieldByName$$Z721C83C5)(tycon$$18, "value__");

    if (matchValue$$134 == null) {
      return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("no 'value__' field found for enumeration type " + (0, _tast.Entity$$get_LogicalName)(tycon$$18), (0, _tast.Entity$$get_Range)(tycon$$18)));
    } else {
      const rf$$6 = matchValue$$134;
      return (0, _tast.RecdField$$get_FormalType)(rf$$6);
    }
  } else {
    const tdef$$1 = matchValue$$132.fields[0].fields[2];
    const info$$1 = (0, _il.computeILEnumInfo)((0, _il.ILTypeDef$$get_Name)(tdef$$1), (0, _il.ILTypeDef$$get_Fields)(tdef$$1));
    const ilTy = (0, _il.getTyOfILEnumInfo)(info$$1);
    const matchValue$$133 = (0, _il.ILTypeSpec$$get_Name)((0, _il.ILType$$get_TypeSpec)(ilTy));

    switch (matchValue$$133) {
      case "System.Byte":
        {
          return (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$261);
        }

      case "System.SByte":
        {
          return (0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g$$261);
        }

      case "System.Int16":
        {
          return (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$261);
        }

      case "System.Int32":
        {
          return (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$261);
        }

      case "System.Int64":
        {
          return (0, _TcGlobals.TcGlobals$$get_int64_ty)(g$$261);
        }

      case "System.UInt16":
        {
          return (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$261);
        }

      case "System.UInt32":
        {
          return (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$261);
        }

      case "System.UInt64":
        {
          return (0, _TcGlobals.TcGlobals$$get_uint64_ty)(g$$261);
        }

      case "System.Single":
        {
          return (0, _TcGlobals.TcGlobals$$get_float32_ty)(g$$261);
        }

      case "System.Double":
        {
          return (0, _TcGlobals.TcGlobals$$get_float_ty)(g$$261);
        }

      case "System.Char":
        {
          return (0, _TcGlobals.TcGlobals$$get_char_ty)(g$$261);
        }

      case "System.Boolean":
        {
          return (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$261);
        }

      default:
        {
          return (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$261);
        }
    }
  }
}

function setValHasNoArity(f$$53) {
  (0, _tast.Val$$SetValReprInfo$$Z35BE7615)(f$$53, null);
  return f$$53;
}

function normalizeEnumTy(g$$262, ty$$236) {
  if (isEnumTy(g$$262, ty$$236)) {
    return underlyingTypeOfEnumTy(g$$262, ty$$236);
  } else {
    return ty$$236;
  }
}

const StaticOptimizationAnswer = (0, _Types.declare)(function StaticOptimizationAnswer(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.Yes = arg2;
  this.No = arg3;
  this.Unknown = arg4;
}, _Types.Record);
exports.StaticOptimizationAnswer = StaticOptimizationAnswer;

function decideStaticOptimizationConstraint(g$$263, c$$17) {
  if (c$$17.tag === 1) {
    const a$$11 = c$$17.fields[0];
    const a$$12 = normalizeEnumTy(g$$263, stripTyEqnsAndMeasureEqns(g$$263, a$$11));
    const matchValue$$135 = tryDestAppTy(g$$263, a$$12);

    if (matchValue$$135 == null) {
      return 0;
    } else {
      const tcref1$$5 = matchValue$$135;

      if ((0, _tast.EntityRef$$get_IsStructOrEnumTycon)(tcref1$$5)) {
        return 1;
      } else {
        return -1 | 0;
      }
    }
  } else {
    const b$$31 = c$$17.fields[1];
    const a$$8 = c$$17.fields[0];

    const checkTypes = function checkTypes(a$$9, b$$32) {
      const a$$10 = normalizeEnumTy(g$$263, stripTyEqnsAndMeasureEqns(g$$263, a$$9));
      const activePatternResult33013 = $007CAppTy$007C_$007C(g$$263, a$$10);

      if (activePatternResult33013 != null) {
        const b$$33 = normalizeEnumTy(g$$263, stripTyEqnsAndMeasureEqns(g$$263, b$$32));
        const activePatternResult32995 = $007CAppTy$007C_$007C(g$$263, b$$33);

        if (activePatternResult32995 != null) {
          if (tyconRefEq(g$$263, activePatternResult33013[0], activePatternResult32995[0])) {
            return 1;
          } else {
            return -1 | 0;
          }
        } else {
          var $target$$237;

          if ($007CRefTupleTy$007C_$007C(g$$263, b$$33) != null) {
            $target$$237 = 0;
          } else if ($007CFunTy$007C_$007C(g$$263, b$$33) != null) {
            $target$$237 = 0;
          } else {
            $target$$237 = 1;
          }

          switch ($target$$237) {
            case 0:
              {
                return -1 | 0;
              }

            case 1:
              {
                return 0;
              }
          }
        }
      } else {
        if ($007CFunTy$007C_$007C(g$$263, a$$10) != null) {
          const b$$34 = normalizeEnumTy(g$$263, stripTyEqnsAndMeasureEqns(g$$263, b$$32));

          if ($007CFunTy$007C_$007C(g$$263, b$$34) != null) {
            return 1;
          } else {
            var $target$$238;

            if ($007CAppTy$007C_$007C(g$$263, b$$34) != null) {
              $target$$238 = 0;
            } else if ($007CRefTupleTy$007C_$007C(g$$263, b$$34) != null) {
              $target$$238 = 0;
            } else {
              $target$$238 = 1;
            }

            switch ($target$$238) {
              case 0:
                {
                  return -1 | 0;
                }

              case 1:
                {
                  return 0;
                }
            }
          }
        } else {
          const activePatternResult33009 = $007CRefTupleTy$007C_$007C(g$$263, a$$10);

          if (activePatternResult33009 != null) {
            const ts1 = activePatternResult33009;
            const b$$35 = normalizeEnumTy(g$$263, stripTyEqnsAndMeasureEqns(g$$263, b$$32));
            const activePatternResult33007 = $007CRefTupleTy$007C_$007C(g$$263, b$$35);

            if (activePatternResult33007 != null) {
              const ts2 = activePatternResult33007;

              if ((0, _List.length)(ts1) === (0, _List.length)(ts2)) {
                return 1;
              } else {
                return -1 | 0;
              }
            } else {
              var $target$$239;

              if ($007CAppTy$007C_$007C(g$$263, b$$35) != null) {
                $target$$239 = 0;
              } else if ($007CFunTy$007C_$007C(g$$263, b$$35) != null) {
                $target$$239 = 0;
              } else {
                $target$$239 = 1;
              }

              switch ($target$$239) {
                case 0:
                  {
                    return -1 | 0;
                  }

                case 1:
                  {
                    return 0;
                  }
              }
            }
          } else {
            return 0;
          }
        }
      }
    };

    return checkTypes(a$$8, b$$31) | 0;
  }
}

function DecideStaticOptimizations(g$$264, cs$$5) {
  DecideStaticOptimizations: while (true) {
    if (cs$$5.tail != null) {
      const t$$14 = cs$$5.tail;
      const h$$6 = cs$$5.head;
      const d$$12 = decideStaticOptimizationConstraint(g$$264, h$$6) | 0;

      if (d$$12 === -1) {
        return -1 | 0;
      } else if (d$$12 === 1) {
        g$$264 = g$$264;
        cs$$5 = t$$14;
        continue DecideStaticOptimizations;
      } else {
        return 0;
      }
    } else {
      return 1;
    }
  }
}

function mkStaticOptimizationExpr(g$$265, cs$$6, e1$$20, e2$$16, m$$129) {
  const d$$13 = DecideStaticOptimizations(g$$265, cs$$6) | 0;

  if (d$$13 === -1) {
    return e2$$16;
  } else if (d$$13 === 1) {
    return e1$$20;
  } else {
    return new _tast.Expr(10, "StaticOptimization", cs$$6, e1$$20, e2$$16, m$$129);
  }
}

const ValCopyFlag = (0, _Types.declare)(function ValCopyFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValCopyFlag = ValCopyFlag;

function fixValCopyFlagForQuotations(_arg1$$104) {
  if (_arg1$$104.tag === 1) {
    return new ValCopyFlag(0, "CloneAll");
  } else {
    const x$$215 = _arg1$$104;
    return x$$215;
  }
}

function markAsCompGen(compgen$$3, d$$14) {
  const compgen$$4 = compgen$$3.tag === 1 ? true : false;
  return new _tast.Val(d$$14.val_logical_name, d$$14.val_range, d$$14.val_type, d$$14.val_stamp, (0, _tast.ValFlags$$SetIsCompilerGenerated$$Z1FBCCD16)(d$$14.val_flags, (0, _tast.ValFlags$$get_IsCompilerGenerated)(d$$14.val_flags) ? true : compgen$$4), d$$14.val_opt_data);
}

function bindLocalVal(v$$111, v$0027$$1, tmenv$$3) {
  return new Remap(tmenv$$3.tpinst, ValMap$00601$$Add(tmenv$$3.valRemap, v$$111, (0, _tast.mkLocalValRef)(v$0027$$1)), tmenv$$3.tyconRefRemap, tmenv$$3.removeTraitSolutions);
}

function bindLocalVals(vs$$33, vs$0027$$2, tmenv$$4) {
  return new Remap(tmenv$$4.tpinst, (0, _List.foldBack2)(function folder$$18(v$$112, v$0027$$2, acc$$169) {
    return ValMap$00601$$Add(acc$$169, v$$112, (0, _tast.mkLocalValRef)(v$0027$$2));
  }, vs$$33, vs$0027$$2, tmenv$$4.valRemap), tmenv$$4.tyconRefRemap, tmenv$$4.removeTraitSolutions);
}

function bindTycon(tc$$17, tc$0027, tyenv$$16) {
  return new Remap(tyenv$$16.tpinst, tyenv$$16.valRemap, TyconRefMap$00601$$Add(tyenv$$16.tyconRefRemap, (0, _tast.mkLocalTyconRef)(tc$$17), (0, _tast.mkLocalTyconRef)(tc$0027)), tyenv$$16.removeTraitSolutions);
}

function bindTycons(tcs, tcs$0027, tyenv$$17) {
  return new Remap(tyenv$$17.tpinst, tyenv$$17.valRemap, (0, _List.foldBack2)(function folder$$19(tc$$18, tc$0027$$1, acc$$170) {
    return TyconRefMap$00601$$Add(acc$$170, (0, _tast.mkLocalTyconRef)(tc$$18), (0, _tast.mkLocalTyconRef)(tc$0027$$1));
  }, tcs, tcs$0027, tyenv$$17.tyconRefRemap), tyenv$$17.removeTraitSolutions);
}

function remapAttribKind(tmenv$$5, k$$1) {
  if (k$$1.tag === 1) {
    const vref$$42 = k$$1.fields[0];
    return new _tast.AttribKind(1, "FSAttrib", remapValRef(tmenv$$5, vref$$42));
  } else {
    const x$$216 = k$$1;
    return x$$216;
  }
}

function tmenvCopyRemapAndBindTypars(remapAttrib$$4, tmenv$$6, tps$$45) {
  const patternInput$$56 = copyAndRemapAndBindTyparsFull(remapAttrib$$4, tmenv$$6, tps$$45);
  const tmenvinner = patternInput$$56[1];
  return [patternInput$$56[0], tmenvinner];
}

function remapAttrib(g$$266, tmenv$$7, _arg1$$105) {
  const tcref$$86 = _arg1$$105.fields[0];
  const targets$$4 = _arg1$$105.fields[5];
  const props = _arg1$$105.fields[3];
  const m$$130 = _arg1$$105.fields[6];
  const kind$$1 = _arg1$$105.fields[1];
  const isGetOrSetAttr = _arg1$$105.fields[4];
  const args$$18 = _arg1$$105.fields[2];
  return new _tast.Attrib(0, "Attrib", remapTyconRef(tmenv$$7.tyconRefRemap, tcref$$86), remapAttribKind(tmenv$$7, kind$$1), (0, _List.map)(function mapping$$26(arg20$0040$$26) {
    return remapAttribExpr(g$$266, tmenv$$7, arg20$0040$$26);
  }, args$$18), (0, _List.map)(function mapping$$27(_arg1$$106) {
    const ty$$245 = _arg1$$106.fields[0][1];
    const nm$$21 = _arg1$$106.fields[0][0];
    const flg$$2 = _arg1$$106.fields[0][2];
    const expr$$22 = _arg1$$106.fields[0][3];
    return new _tast.AttribNamedArg(0, "AttribNamedArg", [nm$$21, remapType(tmenv$$7, ty$$245), flg$$2, remapAttribExpr(g$$266, tmenv$$7, expr$$22)]);
  }, props), isGetOrSetAttr, targets$$4, m$$130);
}

function remapAttribExpr(g$$267, tmenv$$8, _arg2$$13) {
  const e2$$17 = _arg2$$13.fields[1];
  const e1$$21 = _arg2$$13.fields[0];
  return new _tast.AttribExpr(0, "AttribExpr", remapExpr(g$$267, new ValCopyFlag(0, "CloneAll"), tmenv$$8, e1$$21), remapExpr(g$$267, new ValCopyFlag(0, "CloneAll"), tmenv$$8, e2$$17));
}

function remapAttribs(g$$268, tmenv$$9, xs$$7) {
  return (0, _List.map)(function (arg20$0040$$27) {
    return remapAttrib(g$$268, tmenv$$9, arg20$0040$$27);
  }, xs$$7);
}

function remapPossibleForallTy(g$$269, tmenv$$10, ty$$246) {
  return remapTypeFull(function (xs$$8) {
    return remapAttribs(g$$269, tmenv$$10, xs$$8);
  }, tmenv$$10, ty$$246);
}

function remapArgData(g$$270, tmenv$$11, argInfo$$1) {
  return new _tast.ArgReprInfo(remapAttribs(g$$270, tmenv$$11, argInfo$$1.Attribs), argInfo$$1.Name);
}

function remapValReprInfo(g$$271, tmenv$$12, _arg3$$8) {
  const tpNames$$1 = _arg3$$8.fields[0];
  const retInfo$$5 = _arg3$$8.fields[2];
  const arginfosl = _arg3$$8.fields[1];
  return new _tast.ValReprInfo(0, "ValReprInfo", tpNames$$1, (0, _illib.List$$$mapSquared)(function (argInfo$$2) {
    return remapArgData(g$$271, tmenv$$12, argInfo$$2);
  }, arginfosl), remapArgData(g$$271, tmenv$$12, retInfo$$5));
}

function remapValData(g$$272, tmenv$$13, d$$15) {
  var matchValue$$136, dd;
  const ty$$247 = d$$15.val_type;
  const topValInfo$$8 = (0, _tast.Val$$get_ValReprInfo)(d$$15);
  const tyR = remapPossibleForallTy(g$$272, tmenv$$13, ty$$247);
  const declaringEntityR = remapParentRef(tmenv$$13, (0, _tast.Val$$get_DeclaringEntity)(d$$15));
  const reprInfoR = (0, _Option.defaultArg)((0, _tast.Val$$get_ValReprInfo)(d$$15), null, function mapping$$28(arg20$0040$$29) {
    return remapValReprInfo(g$$272, tmenv$$13, arg20$0040$$29);
  });
  const memberInfoR = (0, _Option.defaultArg)((0, _tast.Val$$get_MemberInfo)(d$$15), null, function mapping$$29(x$$217) {
    return remapMemberInfo(g$$272, d$$15.val_range, topValInfo$$8, ty$$247, tyR, tmenv$$13, x$$217);
  });
  const attribsR = remapAttribs(g$$272, tmenv$$13, (0, _tast.Val$$get_Attribs)(d$$15));
  return new _tast.Val(d$$15.val_logical_name, d$$15.val_range, tyR, d$$15.val_stamp, d$$15.val_flags, (matchValue$$136 = d$$15.val_opt_data, matchValue$$136 == null ? null : (dd = matchValue$$136, new _tast.ValOptionalData(dd.val_compiled_name, dd.val_other_range, dd.val_const, dd.val_defn, reprInfoR, dd.val_access, dd.val_xmldoc, memberInfoR, declaringEntityR, dd.val_xmldocsig, attribsR))));
}

function remapParentRef(tyenv$$18, p$$5) {
  if (p$$5.tag === 0) {
    const x$$218 = p$$5.fields[0];
    return new _tast.ParentRef(0, "Parent", remapTyconRef(tyenv$$18.tyconRefRemap, x$$218));
  } else {
    return new _tast.ParentRef(1, "ParentNone");
  }
}

function mapImmediateValsAndTycons(ft$$2, fv$$1, x$$219) {
  const vals$$3 = (0, _QueueList.QueueListModule$$$map)(fv$$1, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(x$$219));
  const tycons$$4 = (0, _QueueList.QueueListModule$$$map)(ft$$2, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(x$$219));
  return (0, _tast.ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E)((0, _tast.ModuleOrNamespaceType$$get_ModuleOrNamespaceKind)(x$$219), vals$$3, tycons$$4);
}

function copyVal(compgen$$5, v$$113) {
  var $target$$246;

  if (compgen$$5.tag === 2) {
    if ((0, _tast.Val$$get_IsMemberOrModuleBinding)(v$$113)) {
      $target$$246 = 0;
    } else {
      $target$$246 = 1;
    }
  } else {
    $target$$246 = 1;
  }

  switch ($target$$246) {
    case 0:
      {
        return v$$113;
      }

    case 1:
      {
        return (0, _tast.NewModifiedVal)(function f$$54(x$$222) {
          return x$$222;
        }, v$$113);
      }
  }
}

function fixupValData(g$$273, compgen$$6, tmenv$$14, v2$$3) {
  var $target$$247;

  if (compgen$$6.tag === 2) {
    if ((0, _tast.Val$$get_IsMemberOrModuleBinding)(v2$$3)) {
      $target$$247 = 0;
    } else {
      $target$$247 = 1;
    }
  } else {
    $target$$247 = 1;
  }

  switch ($target$$247) {
    case 1:
      {
        const newData = markAsCompGen(compgen$$6, remapValData(g$$273, tmenv$$14, v2$$3));
        (0, _tast.Val$$SetData$$7D0CFEA5)(v2$$3, newData);
        break;
      }
  }
}

function copyAndRemapAndBindVals(g$$274, compgen$$7, tmenv$$15, vs$$34) {
  const vs2 = (0, _List.map)(function mapping$$30(v$$114) {
    return copyVal(compgen$$7, v$$114);
  }, vs$$34);
  const tmenvinner$$1 = bindLocalVals(vs$$34, vs2, tmenv$$15);
  (0, _List.iterate)(function action$$2(v2$$4) {
    fixupValData(g$$274, compgen$$7, tmenvinner$$1, v2$$4);
  }, vs2);
  return [vs2, tmenvinner$$1];
}

function copyAndRemapAndBindVal(g$$275, compgen$$8, tmenv$$16, v$$115) {
  const v2$$5 = copyVal(compgen$$8, v$$115);
  const tmenvinner$$2 = bindLocalVal(v$$115, v2$$5, tmenv$$16);
  fixupValData(g$$275, compgen$$8, tmenvinner$$2, v2$$5);
  return [v2$$5, tmenvinner$$2];
}

function remapExpr(g$$276, compgen$$9, tmenv$$17, x$$223) {
  var uref, tinst$$51, readonly$$9, m$$143, cidx, arg$$3, tinst$$48, rfref$$7, readonly$$7, m$$132, arg;

  remapExpr: while (true) {
    var $target$$248, b$$36, baseValOpt$$7, ctorThisValOpt$$6, m$$133, rty$$39, vs$$35, b$$38, m$$134, rty$$41, tps$$46, b$$39, m$$135, tps$$47, binds$$7, e$$53, m$$136, exprm$$1, m$$137, pt, spBind$$4, targets$$5, ty$$248, m$$138, vf$$1, vr$$2, a$$13, argExprs$$1, argTypes$$1, data, isFromQueryExpression, m$$139, ty$$249, typeDefs, a$$14, isFromQueryExpression$$1, m$$140, ty$$250, basecall$$2, basev$$4, iimpls$$5, m$$141, overrides$$5, ty$$251, arg$$1, m$$142, readonly$$8, rfref$$8, tinst$$49;

    if (x$$223.tag === 3) {
      $target$$248 = 0;
      b$$36 = x$$223.fields[4];
      baseValOpt$$7 = x$$223.fields[2];
      ctorThisValOpt$$6 = x$$223.fields[1];
      m$$133 = x$$223.fields[5];
      rty$$39 = x$$223.fields[6];
      vs$$35 = x$$223.fields[3];
    } else if (x$$223.tag === 4) {
      $target$$248 = 1;
      b$$38 = x$$223.fields[2];
      m$$134 = x$$223.fields[3];
      rty$$41 = x$$223.fields[4];
      tps$$46 = x$$223.fields[1];
    } else if (x$$223.tag === 13) {
      $target$$248 = 2;
      b$$39 = x$$223.fields[1];
      m$$135 = x$$223.fields[2];
      tps$$47 = x$$223.fields[0];
    } else if (x$$223.tag === 6) {
      $target$$248 = 3;
      binds$$7 = x$$223.fields[0];
      e$$53 = x$$223.fields[1];
      m$$136 = x$$223.fields[2];
    } else if (x$$223.tag === 2) {
      $target$$248 = 4;
    } else if (x$$223.tag === 7) {
      $target$$248 = 4;
    } else if (x$$223.tag === 9) {
      $target$$248 = 5;
      exprm$$1 = x$$223.fields[1];
      m$$137 = x$$223.fields[4];
      pt = x$$223.fields[2];
      spBind$$4 = x$$223.fields[0];
      targets$$5 = x$$223.fields[3];
      ty$$248 = x$$223.fields[5];
    } else if (x$$223.tag === 1) {
      $target$$248 = 6;
      m$$138 = x$$223.fields[2];
      vf$$1 = x$$223.fields[1];
      vr$$2 = x$$223.fields[0];
    } else if (x$$223.tag === 12) {
      if (x$$223.fields[1].contents == null) {
        $target$$248 = 8;
        a$$14 = x$$223.fields[0];
        isFromQueryExpression$$1 = x$$223.fields[2];
        m$$140 = x$$223.fields[3];
        ty$$250 = x$$223.fields[4];
      } else {
        $target$$248 = 7;
        a$$13 = x$$223.fields[0];
        argExprs$$1 = x$$223.fields[1].contents[2];
        argTypes$$1 = x$$223.fields[1].contents[1];
        data = x$$223.fields[1].contents[3];
        isFromQueryExpression = x$$223.fields[2];
        m$$139 = x$$223.fields[3];
        ty$$249 = x$$223.fields[4];
        typeDefs = x$$223.fields[1].contents[0];
      }
    } else if (x$$223.tag === 8) {
      $target$$248 = 9;
      basecall$$2 = x$$223.fields[3];
      basev$$4 = x$$223.fields[2];
      iimpls$$5 = x$$223.fields[5];
      m$$141 = x$$223.fields[6];
      overrides$$5 = x$$223.fields[4];
      ty$$251 = x$$223.fields[1];
    } else if (x$$223.tag === 11) {
      if (x$$223.fields[0].tag === 13) {
        if (x$$223.fields[2].tail != null) {
          if (x$$223.fields[2].tail.tail == null) {
            if (tinst$$48 = x$$223.fields[1], (rfref$$7 = x$$223.fields[0].fields[0], (readonly$$7 = x$$223.fields[0].fields[1], (m$$132 = x$$223.fields[3], (arg = x$$223.fields[2].head, !(0, _tast.RecdField$$get_IsMutable)((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$7)) ? !(0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$276), (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$7)) : false))))) {
              $target$$248 = 10;
              arg$$1 = x$$223.fields[2].head;
              m$$142 = x$$223.fields[3];
              readonly$$8 = x$$223.fields[0].fields[1];
              rfref$$8 = x$$223.fields[0].fields[0];
              tinst$$49 = x$$223.fields[1];
            } else {
              $target$$248 = 11;
            }
          } else {
            $target$$248 = 11;
          }
        } else {
          $target$$248 = 11;
        }
      } else {
        $target$$248 = 11;
      }
    } else {
      $target$$248 = 11;
    }

    switch ($target$$248) {
      case 0:
        {
          const patternInput$$57 = (0, _illib.Option$$$mapFold)(function (tmenv$$18, v$$117) {
            return copyAndRemapAndBindVal(g$$276, compgen$$9, tmenv$$18, v$$117);
          }, tmenv$$17, ctorThisValOpt$$6);
          const patternInput$$58 = (0, _illib.Option$$$mapFold)(function (tmenv$$20, v$$118) {
            return copyAndRemapAndBindVal(g$$276, compgen$$9, tmenv$$20, v$$118);
          }, patternInput$$57[1], baseValOpt$$7);
          const patternInput$$59 = copyAndRemapAndBindVals(g$$276, compgen$$9, patternInput$$58[1], vs$$35);
          const b$$37 = remapExpr(g$$276, compgen$$9, patternInput$$59[1], b$$36);
          const rty$$40 = remapType(patternInput$$59[1], rty$$39);
          return new _tast.Expr(3, "Lambda", (0, _tast.newUnique)(), patternInput$$57[0], patternInput$$58[0], patternInput$$59[0], b$$37, m$$133, rty$$40);
        }

      case 1:
        {
          const patternInput$$60 = tmenvCopyRemapAndBindTypars(function (xs$$10) {
            return remapAttribs(g$$276, tmenv$$17, xs$$10);
          }, tmenv$$17, tps$$46);
          return mkTypeLambda(m$$134, patternInput$$60[0], remapExpr(g$$276, compgen$$9, patternInput$$60[1], b$$38), remapType(patternInput$$60[1], rty$$41));
        }

      case 2:
        {
          const patternInput$$61 = tmenvCopyRemapAndBindTypars(function (xs$$11) {
            return remapAttribs(g$$276, tmenv$$17, xs$$11);
          }, tmenv$$17, tps$$47);
          return new _tast.Expr(13, "TyChoose", patternInput$$61[0], remapExpr(g$$276, compgen$$9, patternInput$$61[1], b$$39), m$$135);
        }

      case 3:
        {
          const patternInput$$62 = copyAndRemapAndBindBindings(g$$276, compgen$$9, tmenv$$17, binds$$7);
          return new _tast.Expr(6, "LetRec", patternInput$$62[0], remapExpr(g$$276, compgen$$9, patternInput$$62[1], e$$53), m$$136, (0, _tast.NewFreeVarsCache)());
        }

      case 4:
        {
          return remapLinearExpr(g$$276, compgen$$9, tmenv$$17, x$$223, function (x$$224) {
            return x$$224;
          });
        }

      case 5:
        {
          return primMkMatch(spBind$$4, exprm$$1, remapDecisionTree(g$$276, compgen$$9, tmenv$$17, pt), (0, _Array.map)(function mapping$$31(arg30$0040$$5) {
            return remapTarget(g$$276, compgen$$9, tmenv$$17, arg30$0040$$5);
          }, targets$$5, Array), m$$137, remapType(tmenv$$17, ty$$248));
        }

      case 6:
        {
          const vr$0027 = remapValRef(tmenv$$17, vr$$2);
          const vf$0027 = remapValFlags(tmenv$$17, vf$$1);

          if (vr$$2 === vr$0027 ? vf$$1 === vf$0027 : false) {
            return x$$223;
          } else {
            return new _tast.Expr(1, "Val", vr$0027, vf$0027, m$$138);
          }
        }

      case 7:
        {
          const compgen$$10 = fixValCopyFlagForQuotations(compgen$$9);
          return new _tast.Expr(12, "Quote", remapExpr(g$$276, compgen$$10, tmenv$$17, a$$13), new _Types.FSharpRef([typeDefs, remapTypesAux(tmenv$$17, argTypes$$1), remapExprs(g$$276, compgen$$10, tmenv$$17, argExprs$$1), data]), isFromQueryExpression, m$$139, remapType(tmenv$$17, ty$$249));
        }

      case 8:
        {
          return new _tast.Expr(12, "Quote", remapExpr(g$$276, fixValCopyFlagForQuotations(compgen$$9), tmenv$$17, a$$14), new _Types.FSharpRef(null), isFromQueryExpression$$1, m$$140, remapType(tmenv$$17, ty$$250));
        }

      case 9:
        {
          const patternInput$$63 = (0, _illib.Option$$$mapFold)(function (tmenv$$23, v$$119) {
            return copyAndRemapAndBindVal(g$$276, compgen$$9, tmenv$$23, v$$119);
          }, tmenv$$17, basev$$4);
          return mkObjExpr(remapType(tmenv$$17, ty$$251), patternInput$$63[0], remapExpr(g$$276, compgen$$9, tmenv$$17, basecall$$2), (0, _List.map)(function (arg30$0040$$6) {
            return remapMethod(g$$276, compgen$$9, patternInput$$63[1], arg30$0040$$6);
          }, overrides$$5), (0, _List.map)(function (tupledArg$$65) {
            return remapInterfaceImpl(g$$276, compgen$$9, patternInput$$63[1], tupledArg$$65[0], tupledArg$$65[1]);
          }, iimpls$$5), m$$141);
        }

      case 10:
        {
          const tinst$$50 = remapTypes(tmenv$$17, tinst$$49);
          const arg$$2 = remapExpr(g$$276, compgen$$9, tmenv$$17, arg$$1);
          const patternInput$$64 = mkMutableCompGenLocal(m$$142, "copyOfStruct", actualTyOfRecdFieldRef(rfref$$8, tinst$$50));
          return mkCompGenLet(m$$142, patternInput$$64[0], mkRecdFieldGetViaExprAddr(arg$$2, rfref$$8, tinst$$50, m$$142), mkValAddr(m$$142, readonly$$8, (0, _tast.mkLocalValRef)(patternInput$$64[0])));
        }

      case 11:
        {
          var $target$$249, arg$$4, cidx$$1, m$$144, readonly$$10, tinst$$52, uref$$1;

          if (x$$223.tag === 11) {
            if (x$$223.fields[0].tag === 17) {
              if (x$$223.fields[2].tail != null) {
                if (x$$223.fields[2].tail.tail == null) {
                  if (uref = x$$223.fields[0].fields[0], (tinst$$51 = x$$223.fields[1], (readonly$$9 = x$$223.fields[0].fields[2], (m$$143 = x$$223.fields[3], (cidx = x$$223.fields[0].fields[1] | 0, (arg$$3 = x$$223.fields[2].head, !(0, _tast.RecdField$$get_IsMutable)((0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(uref, cidx)) ? !(0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$276), (0, _tast.UnionCaseRef$$get_TyconRef)(uref)) : false)))))) {
                    $target$$249 = 0;
                    arg$$4 = x$$223.fields[2].head;
                    cidx$$1 = x$$223.fields[0].fields[1];
                    m$$144 = x$$223.fields[3];
                    readonly$$10 = x$$223.fields[0].fields[2];
                    tinst$$52 = x$$223.fields[1];
                    uref$$1 = x$$223.fields[0].fields[0];
                  } else {
                    $target$$249 = 1;
                  }
                } else {
                  $target$$249 = 1;
                }
              } else {
                $target$$249 = 1;
              }
            } else {
              $target$$249 = 1;
            }
          } else {
            $target$$249 = 1;
          }

          switch ($target$$249) {
            case 0:
              {
                const tinst$$53 = remapTypes(tmenv$$17, tinst$$52);
                const arg$$5 = remapExpr(g$$276, compgen$$9, tmenv$$17, arg$$4);
                const patternInput$$65 = mkMutableCompGenLocal(m$$144, "copyOfStruct", actualTyOfUnionFieldRef(uref$$1, cidx$$1, tinst$$53));
                return mkCompGenLet(m$$144, patternInput$$65[0], mkUnionCaseFieldGetProvenViaExprAddr(arg$$5, uref$$1, tinst$$53, cidx$$1, m$$144), mkValAddr(m$$144, readonly$$10, (0, _tast.mkLocalValRef)(patternInput$$65[0])));
              }

            case 1:
              {
                switch (x$$223.tag) {
                  case 11:
                    {
                      const tinst$$54 = x$$223.fields[1];
                      const op$$2 = x$$223.fields[0];
                      const m$$145 = x$$223.fields[3];
                      const args$$19 = x$$223.fields[2];
                      const op$0027 = remapOp(tmenv$$17, op$$2);
                      const tinst$0027$$1 = remapTypes(tmenv$$17, tinst$$54);
                      const args$0027 = remapExprs(g$$276, compgen$$9, tmenv$$17, args$$19);

                      if ((op$$2 === op$0027 ? tinst$$54 === tinst$0027$$1 : false) ? args$$19 === args$0027 : false) {
                        return x$$223;
                      } else {
                        return new _tast.Expr(11, "Op", op$0027, tinst$0027$$1, args$0027, m$$145);
                      }
                    }

                  case 5:
                    {
                      const tyargs$$16 = x$$223.fields[2];
                      const m$$146 = x$$223.fields[4];
                      const e1ty = x$$223.fields[1];
                      const e1$$22 = x$$223.fields[0];
                      const args$$20 = x$$223.fields[3];
                      const e1$0027 = remapExpr(g$$276, compgen$$9, tmenv$$17, e1$$22);
                      const e1ty$0027 = remapPossibleForallTy(g$$276, tmenv$$17, e1ty);
                      const tyargs$0027 = remapTypes(tmenv$$17, tyargs$$16);
                      const args$0027$$1 = remapExprs(g$$276, compgen$$9, tmenv$$17, args$$20);

                      if (((e1$$22 === e1$0027 ? e1ty === e1ty$0027 : false) ? tyargs$$16 === tyargs$0027 : false) ? args$$20 === args$0027$$1 : false) {
                        return x$$223;
                      } else {
                        return new _tast.Expr(5, "App", e1$0027, e1ty$0027, tyargs$0027, args$0027$$1, m$$146);
                      }
                    }

                  case 14:
                    {
                      const eref$$8 = x$$223.fields[0];
                      g$$276 = g$$276;
                      compgen$$9 = compgen$$9;
                      tmenv$$17 = tmenv$$17;
                      x$$223 = eref$$8.contents;
                      continue remapExpr;
                    }

                  case 10:
                    {
                      const m$$147 = x$$223.fields[3];
                      const e3$$5 = x$$223.fields[2];
                      const e2$$18 = x$$223.fields[1];
                      const cs$$7 = x$$223.fields[0];
                      return mkStaticOptimizationExpr(g$$276, (0, _List.map)(function (c$$18) {
                        return remapConstraint(tmenv$$17, c$$18);
                      }, cs$$7), remapExpr(g$$276, compgen$$9, tmenv$$17, e2$$18), remapExpr(g$$276, compgen$$9, tmenv$$17, e3$$5), m$$147);
                    }

                  case 0:
                    {
                      const ty$$253 = x$$223.fields[2];
                      const m$$148 = x$$223.fields[1];
                      const c$$19 = x$$223.fields[0];
                      const ty$0027$$4 = remapType(tmenv$$17, ty$$253);

                      if (ty$$253 === ty$0027$$4) {
                        return x$$223;
                      } else {
                        return new _tast.Expr(0, "Const", c$$19, m$$148, ty$0027$$4);
                      }
                    }

                  default:
                    {
                      throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/TastOps.fs", 4815, 10);
                    }
                }
              }
          }
        }
    }
  }
}

function remapTarget(g$$277, compgen$$11, tmenv$$24, _arg4$$3) {
  const vs$$37 = _arg4$$3.fields[0];
  const spTarget$$2 = _arg4$$3.fields[2];
  const e$$54 = _arg4$$3.fields[1];
  const patternInput$$66 = copyAndRemapAndBindVals(g$$277, compgen$$11, tmenv$$24, vs$$37);
  return new _tast.DecisionTreeTarget(0, "TTarget", patternInput$$66[0], remapExpr(g$$277, compgen$$11, patternInput$$66[1], e$$54), spTarget$$2);
}

function remapLinearExpr($arg$$250, $arg$$251, $arg$$252, $arg$$253, $arg$$254) {
  remapLinearExpr: while (true) {
    const g$$278 = $arg$$250,
          compgen$$12 = $arg$$251,
          tmenv$$25 = $arg$$252,
          e$$55 = $arg$$253,
          contf$$2 = $arg$$254;

    if (e$$55.tag === 7) {
      const patternInput$$67 = copyAndRemapAndBindBinding(g$$278, compgen$$12, tmenv$$25, e$$55.fields[0]);
      $arg$$250 = g$$278;
      $arg$$251 = compgen$$12;
      $arg$$252 = patternInput$$67[1];
      $arg$$253 = e$$55.fields[1];

      $arg$$254 = function ($arg$$44) {
        return contf$$2(mkLetBind(e$$55.fields[2], patternInput$$67[0], $arg$$44));
      };

      continue remapLinearExpr;
    } else if (e$$55.tag === 2) {
      const e1$0027$$1 = remapExpr(g$$278, compgen$$12, tmenv$$25, e$$55.fields[0]);
      $arg$$250 = g$$278;
      $arg$$251 = compgen$$12;
      $arg$$252 = tmenv$$25;
      $arg$$253 = e$$55.fields[1];

      $arg$$254 = function ($arg$$45) {
        return contf$$2((e$$55.fields[0] === e1$0027$$1 ? e$$55.fields[1] === $arg$$45 : false) ? e$$55 : new _tast.Expr(2, "Sequential", e1$0027$$1, $arg$$45, e$$55.fields[2], e$$55.fields[3], e$$55.fields[4]));
      };

      continue remapLinearExpr;
    } else {
      const activePatternResult33124 = $007CLinearMatchExpr$007C_$007C(e$$55);

      if (activePatternResult33124 != null) {
        const dtree$$11 = remapDecisionTree(g$$278, compgen$$12, tmenv$$25, activePatternResult33124[2]);
        const tg1$$4 = remapTarget(g$$278, compgen$$12, tmenv$$25, activePatternResult33124[3]);
        const ty$$255 = remapType(tmenv$$25, activePatternResult33124[7]);
        $arg$$250 = g$$278;
        $arg$$251 = compgen$$12;
        $arg$$252 = tmenv$$25;
        $arg$$253 = activePatternResult33124[4];

        $arg$$254 = function ($arg$$46) {
          return contf$$2(rebuildLinearMatchExpr([activePatternResult33124[0], activePatternResult33124[1], dtree$$11, tg1$$4, $arg$$46, activePatternResult33124[5], activePatternResult33124[6], ty$$255]));
        };

        continue remapLinearExpr;
      } else {
        return contf$$2(remapExpr(g$$278, compgen$$12, tmenv$$25, e$$55));
      }
    }
  }
}

function remapConstraint(tyenv$$19, c$$20) {
  if (c$$20.tag === 1) {
    const ty1$$12 = c$$20.fields[0];
    return new _tast.StaticOptimization(1, "TTyconIsStruct", remapType(tyenv$$19, ty1$$12));
  } else {
    const ty2$$7 = c$$20.fields[1];
    const ty1$$11 = c$$20.fields[0];
    return new _tast.StaticOptimization(0, "TTyconEqualsTycon", remapType(tyenv$$19, ty1$$11), remapType(tyenv$$19, ty2$$7));
  }
}

function remapOp(tmenv$$26, op$$3) {
  switch (op$$3.tag) {
    case 10:
      {
        const tcr$$26 = op$$3.fields[1];
        const ctor$$1 = op$$3.fields[0];
        return new _tast.TOp(10, "Recd", ctor$$1, remapTyconRef(tmenv$$26.tyconRefRemap, tcr$$26));
      }

    case 14:
      {
        const tcr$$27 = op$$3.fields[0];
        return new _tast.TOp(14, "UnionCaseTagGet", remapTyconRef(tmenv$$26.tyconRefRemap, tcr$$27));
      }

    case 0:
      {
        const ucref$$7 = op$$3.fields[0];
        return new _tast.TOp(0, "UnionCase", remapUnionCaseRef(tmenv$$26.tyconRefRemap, ucref$$7));
      }

    case 15:
      {
        const ucref$$8 = op$$3.fields[0];
        return new _tast.TOp(15, "UnionCaseProof", remapUnionCaseRef(tmenv$$26.tyconRefRemap, ucref$$8));
      }

    case 1:
      {
        const ec = op$$3.fields[0];
        return new _tast.TOp(1, "ExnConstr", remapTyconRef(tmenv$$26.tyconRefRemap, ec));
      }

    case 19:
      {
        const n$$21 = op$$3.fields[1] | 0;
        const ec$$1 = op$$3.fields[0];
        return new _tast.TOp(19, "ExnFieldGet", remapTyconRef(tmenv$$26.tyconRefRemap, ec$$1), n$$21);
      }

    case 20:
      {
        const n$$22 = op$$3.fields[1] | 0;
        const ec$$2 = op$$3.fields[0];
        return new _tast.TOp(20, "ExnFieldSet", remapTyconRef(tmenv$$26.tyconRefRemap, ec$$2), n$$22);
      }

    case 11:
      {
        const rfref$$9 = op$$3.fields[0];
        return new _tast.TOp(11, "ValFieldSet", remapRecdFieldRef(tmenv$$26.tyconRefRemap, rfref$$9));
      }

    case 12:
      {
        const rfref$$10 = op$$3.fields[0];
        return new _tast.TOp(12, "ValFieldGet", remapRecdFieldRef(tmenv$$26.tyconRefRemap, rfref$$10));
      }

    case 13:
      {
        const rfref$$11 = op$$3.fields[0];
        const readonly$$11 = op$$3.fields[1];
        return new _tast.TOp(13, "ValFieldGetAddr", remapRecdFieldRef(tmenv$$26.tyconRefRemap, rfref$$11), readonly$$11);
      }

    case 16:
      {
        const ucref$$9 = op$$3.fields[0];
        const n$$23 = op$$3.fields[1] | 0;
        return new _tast.TOp(16, "UnionCaseFieldGet", remapUnionCaseRef(tmenv$$26.tyconRefRemap, ucref$$9), n$$23);
      }

    case 17:
      {
        const ucref$$10 = op$$3.fields[0];
        const readonly$$12 = op$$3.fields[2];
        const n$$24 = op$$3.fields[1] | 0;
        return new _tast.TOp(17, "UnionCaseFieldGetAddr", remapUnionCaseRef(tmenv$$26.tyconRefRemap, ucref$$10), n$$24, readonly$$12);
      }

    case 18:
      {
        const ucref$$11 = op$$3.fields[0];
        const n$$25 = op$$3.fields[1] | 0;
        return new _tast.TOp(18, "UnionCaseFieldSet", remapUnionCaseRef(tmenv$$26.tyconRefRemap, ucref$$11), n$$25);
      }

    case 22:
      {
        const tys$$32 = op$$3.fields[1];
        const instrs$$2 = op$$3.fields[0];
        const tys2$$3 = remapTypes(tmenv$$26, tys$$32);

        if (tys$$32 === tys2$$3) {
          return op$$3;
        } else {
          return new _tast.TOp(22, "ILAsm", instrs$$2, tys2$$3);
        }
      }

    case 29:
      {
        const traitInfo$$4 = op$$3.fields[0];
        return new _tast.TOp(29, "TraitCall", remapTraitAux(tmenv$$26, traitInfo$$4));
      }

    case 30:
      {
        const lvr$$2 = op$$3.fields[1];
        const kind$$2 = op$$3.fields[0];
        return new _tast.TOp(30, "LValueOp", kind$$2, remapValRef(tmenv$$26, lvr$$2));
      }

    case 31:
      {
        const valu = op$$3.fields[2];
        const valUseFlags$$1 = op$$3.fields[4];
        const tys$$33 = op$$3.fields[10];
        const noTailCall = op$$3.fields[6];
        const methTypeArgs$$1 = op$$3.fields[9];
        const isVirtCall = op$$3.fields[0];
        const isProtectedCall$$1 = op$$3.fields[1];
        const isProperty = op$$3.fields[5];
        const isNewObjCall = op$$3.fields[3];
        const ilMethRef$$2 = op$$3.fields[7];
        const enclTypeArgs$$1 = op$$3.fields[8];
        return new _tast.TOp(31, "ILCall", isVirtCall, isProtectedCall$$1, valu, isNewObjCall, remapValFlags(tmenv$$26, valUseFlags$$1), isProperty, noTailCall, ilMethRef$$2, remapTypes(tmenv$$26, enclTypeArgs$$1), remapTypes(tmenv$$26, methTypeArgs$$1), remapTypes(tmenv$$26, tys$$33));
      }

    default:
      {
        return op$$3;
      }
  }
}

function remapValFlags(tmenv$$27, x$$238) {
  if (x$$238.tag === 0) {
    const ty$$256 = x$$238.fields[0];
    return new _tast.ValUseFlag(0, "PossibleConstrainedCall", remapType(tmenv$$27, ty$$256));
  } else {
    return x$$238;
  }
}

function remapExprs(g$$279, compgen$$13, tmenv$$28, es$$7) {
  return (0, _illib.List$$$mapq)(function (arg30$0040$$7) {
    return remapExpr(g$$279, compgen$$13, tmenv$$28, arg30$0040$$7);
  }, es$$7);
}

function remapFlatExprs(g$$280, compgen$$14, tmenv$$29, es$$8) {
  return (0, _illib.List$$$mapq)(function (arg30$0040$$8) {
    return remapExpr(g$$280, compgen$$14, tmenv$$29, arg30$0040$$8);
  }, es$$8);
}

function remapDecisionTree(g$$281, compgen$$15, tmenv$$30, x$$239) {
  switch (x$$239.tag) {
    case 1:
      {
        const n$$27 = x$$239.fields[1] | 0;
        const es$$9 = x$$239.fields[0];
        return new _tast.DecisionTree(1, "TDSuccess", remapFlatExprs(g$$281, compgen$$15, tmenv$$30, es$$9), n$$27);
      }

    case 2:
      {
        const rest$$2 = x$$239.fields[1];
        const bind$$19 = x$$239.fields[0];
        const patternInput$$68 = copyAndRemapAndBindBinding(g$$281, compgen$$15, tmenv$$30, bind$$19);
        return new _tast.DecisionTree(2, "TDBind", patternInput$$68[0], remapDecisionTree(g$$281, compgen$$15, patternInput$$68[1], rest$$2));
      }

    default:
      {
        const m$$151 = x$$239.fields[3];
        const e1$$24 = x$$239.fields[0];
        const dflt$$4 = x$$239.fields[2];
        const csl$$2 = x$$239.fields[1];
        return new _tast.DecisionTree(0, "TDSwitch", remapExpr(g$$281, compgen$$15, tmenv$$30, e1$$24), (0, _List.map)(function (_arg2$$14) {
          const y$$52 = _arg2$$14.fields[1];
          const test$$2 = _arg2$$14.fields[0];
          let test$0027;

          switch (test$$2.tag) {
            case 1:
              {
                const ty$$257 = test$$2.fields[1];
                const n$$26 = test$$2.fields[0] | 0;
                test$0027 = new _tast.DecisionTreeTest(1, "ArrayLength", n$$26, remapType(tmenv$$30, ty$$257));
                break;
              }

            case 2:
              {
                test$0027 = test$$2;
                break;
              }

            case 4:
              {
                const tgty$$1 = test$$2.fields[1];
                const srcty$$1 = test$$2.fields[0];
                test$0027 = new _tast.DecisionTreeTest(4, "IsInst", remapType(tmenv$$30, srcty$$1), remapType(tmenv$$30, tgty$$1));
                break;
              }

            case 3:
              {
                test$0027 = new _tast.DecisionTreeTest(3, "IsNull");
                break;
              }

            case 5:
              {
                throw new Error("DecisionTreeTest.ActivePatternCase should only be used during pattern match compilation");
                break;
              }

            default:
              {
                const uc$$2 = test$$2.fields[0];
                const tinst$$55 = test$$2.fields[1];
                test$0027 = new _tast.DecisionTreeTest(0, "UnionCase", remapUnionCaseRef(tmenv$$30.tyconRefRemap, uc$$2), remapTypes(tmenv$$30, tinst$$55));
              }
          }

          return new _tast.DecisionTreeCase(0, "TCase", test$0027, remapDecisionTree(g$$281, compgen$$15, tmenv$$30, y$$52));
        }, csl$$2), (0, _Option.defaultArg)(dflt$$4, null, function (x$$240) {
          return remapDecisionTree(g$$281, compgen$$15, tmenv$$30, x$$240);
        }), m$$151);
      }
  }
}

function copyAndRemapAndBindBinding(g$$282, compgen$$16, tmenv$$31, bind$$20) {
  const v$$120 = (0, _tast.Binding$$get_Var)(bind$$20);
  const patternInput$$69 = copyAndRemapAndBindVal(g$$282, compgen$$16, tmenv$$31, v$$120);
  return [remapAndRenameBind(g$$282, compgen$$16, patternInput$$69[1], bind$$20, patternInput$$69[0]), patternInput$$69[1]];
}

function copyAndRemapAndBindBindings(g$$283, compgen$$17, tmenv$$33, binds$$8) {
  const patternInput$$70 = copyAndRemapAndBindVals(g$$283, compgen$$17, tmenv$$33, valsOfBinds(binds$$8));
  return [remapAndRenameBinds(g$$283, compgen$$17, patternInput$$70[1], binds$$8, patternInput$$70[0]), patternInput$$70[1]];
}

function remapAndRenameBinds(g$$284, compgen$$18, tmenvinner$$11, binds$$9, vs$0027$$5) {
  return (0, _List.map2)(function (arg30$0040$$9, v$0027$$4) {
    return remapAndRenameBind(g$$284, compgen$$18, tmenvinner$$11, arg30$0040$$9, v$0027$$4);
  }, binds$$9, vs$0027$$5);
}

function remapAndRenameBind(g$$285, compgen$$19, tmenvinner$$12, _arg5$$3, v$0027$$5) {
  const repr$$4 = _arg5$$3.fields[1];
  const letSeqPtOpt$$1 = _arg5$$3.fields[2];
  return new _tast.Binding(0, "TBind", v$0027$$5, remapExpr(g$$285, compgen$$19, tmenvinner$$12, repr$$4), letSeqPtOpt$$1);
}

function remapMethod(g$$286, compgen$$20, tmenv$$34, _arg6$$1) {
  const vs$$38 = _arg6$$1.fields[3];
  const tps$$48 = _arg6$$1.fields[2];
  const slotsig$$3 = _arg6$$1.fields[0];
  const m$$152 = _arg6$$1.fields[5];
  const e$$57 = _arg6$$1.fields[4];
  const attribs$$4 = _arg6$$1.fields[1];
  const attribs2 = remapAttribs(g$$286, tmenv$$34, attribs$$4);
  const slotsig2 = remapSlotSig(function (xs$$13) {
    return remapAttribs(g$$286, tmenv$$34, xs$$13);
  }, tmenv$$34, slotsig$$3);
  const patternInput$$71 = tmenvCopyRemapAndBindTypars(function (xs$$14) {
    return remapAttribs(g$$286, tmenv$$34, xs$$14);
  }, tmenv$$34, tps$$48);
  const patternInput$$72 = (0, _List.mapFold)(function (tmenv$$35, vs$$39) {
    return copyAndRemapAndBindVals(g$$286, compgen$$20, tmenv$$35, vs$$39);
  }, patternInput$$71[1], vs$$38);
  const e2$$22 = remapExpr(g$$286, compgen$$20, patternInput$$72[1], e$$57);
  return new _tast.ObjExprMethod(0, "TObjExprMethod", slotsig2, attribs2, patternInput$$71[0], patternInput$$72[0], e2$$22, m$$152);
}

function remapInterfaceImpl(g$$287, compgen$$21, tmenv$$36, ty$$258, overrides$$7) {
  return [remapType(tmenv$$36, ty$$258), (0, _List.map)(function (arg30$0040$$10) {
    return remapMethod(g$$287, compgen$$21, tmenv$$36, arg30$0040$$10);
  }, overrides$$7)];
}

function remapRecdField(g$$288, tmenv$$37, x$$241) {
  return new _tast.RecdField(x$$241.rfield_mutable, x$$241.rfield_xmldoc, x$$241.rfield_xmldocsig, remapPossibleForallTy(g$$288, tmenv$$37, x$$241.rfield_type), x$$241.rfield_static, x$$241.rfield_volatile, x$$241.rfield_secret, x$$241.rfield_const, x$$241.rfield_access, remapAttribs(g$$288, tmenv$$37, x$$241.rfield_pattribs), remapAttribs(g$$288, tmenv$$37, x$$241.rfield_fattribs), x$$241.rfield_id, x$$241.rfield_name_generated, x$$241.rfield_other_range);
}

function remapRecdFields(g$$289, tmenv$$38, x$$242) {
  return (0, _tast.MakeRecdFieldsTable)((0, _List.map)(function mapping$$32(x$$243) {
    return remapRecdField(g$$289, tmenv$$38, x$$243);
  }, (0, _tast.TyconRecdFields$$get_AllFieldsAsList)(x$$242)));
}

function remapUnionCase(g$$290, tmenv$$39, x$$244) {
  return new _tast.UnionCase(remapRecdFields(g$$290, tmenv$$39, x$$244.FieldTable), remapType(tmenv$$39, x$$244.ReturnType), x$$244.CompiledName, x$$244.XmlDoc, x$$244.XmlDocSig, x$$244.Id, x$$244.OtherRangeOpt, x$$244.Accessibility, remapAttribs(g$$290, tmenv$$39, x$$244.Attribs));
}

function remapUnionCases(g$$291, tmenv$$40, x$$247) {
  return (0, _tast.MakeUnionCases)((0, _List.map)(function mapping$$33(x$$248) {
    return remapUnionCase(g$$291, tmenv$$40, x$$248);
  }, (0, _tast.TyconUnionData$$get_UnionCasesAsList)(x$$247)));
}

function remapFsObjData(g$$292, tmenv$$41, x$$249) {
  var slotsig$$4;
  return new _tast.TyconObjModelData(x$$249.fsobjmodel_kind.tag === 0 ? x$$249.fsobjmodel_kind : x$$249.fsobjmodel_kind.tag === 1 ? x$$249.fsobjmodel_kind : x$$249.fsobjmodel_kind.tag === 2 ? x$$249.fsobjmodel_kind : x$$249.fsobjmodel_kind.tag === 4 ? x$$249.fsobjmodel_kind : (slotsig$$4 = x$$249.fsobjmodel_kind.fields[0], new _tast.TyconObjModelKind(3, "TTyconDelegate", remapSlotSig(function (xs$$18) {
    return remapAttribs(g$$292, tmenv$$41, xs$$18);
  }, tmenv$$41, slotsig$$4))), (0, _List.map)(function mapping$$34(arg10$0040$$85) {
    return remapValRef(tmenv$$41, arg10$0040$$85);
  }, x$$249.fsobjmodel_vslots), remapRecdFields(g$$292, tmenv$$41, x$$249.fsobjmodel_rfields));
}

function remapTyconRepr(g$$293, tmenv$$42, repr$$5) {
  switch (repr$$5.tag) {
    case 1:
      {
        const x$$252 = repr$$5.fields[0];
        return new _tast.TyconRepresentation(1, "TRecdRepr", remapRecdFields(g$$293, tmenv$$42, x$$252));
      }

    case 2:
      {
        const x$$253 = repr$$5.fields[0];
        return new _tast.TyconRepresentation(2, "TUnionRepr", remapUnionCases(g$$293, tmenv$$42, x$$253));
      }

    case 3:
      {
        throw new Error("cannot remap IL type definitions");
      }

    case 6:
      {
        return repr$$5;
      }

    case 4:
      {
        return repr$$5;
      }

    case 5:
      {
        const x$$254 = repr$$5.fields[0];
        return new _tast.TyconRepresentation(5, "TMeasureableRepr", remapType(tmenv$$42, x$$254));
      }

    default:
      {
        const x$$251 = repr$$5.fields[0];
        return new _tast.TyconRepresentation(0, "TFSharpObjectRepr", remapFsObjData(g$$293, tmenv$$42, x$$251));
      }
  }
}

function remapTyconAug(tmenv$$43, x$$255) {
  return new _tast.TyconAugmentation((0, _Option.defaultArg)(x$$255.tcaug_compare, null, function mapping$$36(tupledArg$$67) {
    return (0, _lib.mapPair)(function f1$$18(arg10$0040$$88) {
      return remapValRef(tmenv$$43, arg10$0040$$88);
    }, function f2$$12(arg10$0040$$89) {
      return remapValRef(tmenv$$43, arg10$0040$$89);
    }, tupledArg$$67[0], tupledArg$$67[1]);
  }), (0, _Option.defaultArg)(x$$255.tcaug_compare_withc, null, function mapping$$37(arg10$0040$$90) {
    return remapValRef(tmenv$$43, arg10$0040$$90);
  }), (0, _Option.defaultArg)(x$$255.tcaug_equals, null, function mapping$$35(tupledArg$$66) {
    return (0, _lib.mapPair)(function f1$$17(arg10$0040$$86) {
      return remapValRef(tmenv$$43, arg10$0040$$86);
    }, function f2$$11(arg10$0040$$87) {
      return remapValRef(tmenv$$43, arg10$0040$$87);
    }, tupledArg$$66[0], tupledArg$$66[1]);
  }), (0, _Option.defaultArg)(x$$255.tcaug_hash_and_equals_withc, null, function mapping$$38(tupledArg$$68) {
    return (0, _lib.mapTriple)(function f1$$19(arg10$0040$$91) {
      return remapValRef(tmenv$$43, arg10$0040$$91);
    }, function f2$$13(arg10$0040$$92) {
      return remapValRef(tmenv$$43, arg10$0040$$92);
    }, function f3$$3(arg10$0040$$93) {
      return remapValRef(tmenv$$43, arg10$0040$$93);
    }, tupledArg$$68[0], tupledArg$$68[1], tupledArg$$68[2]);
  }), x$$255.tcaug_hasObjectGetHashCode, (0, _ResizeArray.map)(function arg00$0040$$49(tupledArg$$69) {
    return [tupledArg$$69[0], remapValRef(tmenv$$43, tupledArg$$69[1])];
  }, x$$255.tcaug_adhoc_list), (0, _illib.NameMapModule$$$map)(function f$$55(list$$77) {
    return (0, _List.map)(function mapping$$39(arg10$0040$$94) {
      return remapValRef(tmenv$$43, arg10$0040$$94);
    }, list$$77);
  }, x$$255.tcaug_adhoc), (0, _List.map)(function mapping$$41(tupledArg$$70) {
    return (0, _lib.map1Of3)(function f$$56(x$$257) {
      return remapType(tmenv$$43, x$$257);
    }, tupledArg$$70[0], tupledArg$$70[1], tupledArg$$70[2]);
  }, x$$255.tcaug_interfaces), (0, _Option.defaultArg)(x$$255.tcaug_super, null, function mapping$$40(x$$256) {
    return remapType(tmenv$$43, x$$256);
  }), x$$255.tcaug_closed, x$$255.tcaug_abstract);
}

function remapTyconExnInfo(g$$294, tmenv$$44, inp) {
  var $target$$255;

  switch (inp.tag) {
    case 2:
      $target$$255 = 1;
      break;

    case 1:
    case 3:
      $target$$255 = 2;
      break;

    default:
      $target$$255 = 0;
  }

  switch ($target$$255) {
    case 0:
      {
        const x$$258 = inp.fields[0];
        return new _tast.ExceptionInfo(0, "TExnAbbrevRepr", remapTyconRef(tmenv$$44.tyconRefRemap, x$$258));
      }

    case 1:
      {
        const x$$259 = inp.fields[0];
        return new _tast.ExceptionInfo(2, "TExnFresh", remapRecdFields(g$$294, tmenv$$44, x$$259));
      }

    case 2:
      {
        return inp;
      }
  }
}

function remapMemberInfo(g$$295, m$$153, topValInfo$$9, ty$$259, ty$0027$$5, tmenv$$45, x$$260) {
  const patternInput$$73 = GetMemberTypeInFSharpForm(g$$295, x$$260.MemberFlags, topValInfo$$9, ty$$259, m$$153);
  const patternInput$$74 = GetMemberTypeInFSharpForm(g$$295, x$$260.MemberFlags, topValInfo$$9, ty$0027$$5, m$$153);
  const patternInput$$75 = mkTyparToTyparRenaming(patternInput$$73[0], patternInput$$74[0]);
  const tmenv$$46 = new Remap((0, _List.append)(tmenv$$45.tpinst, patternInput$$75[0]), tmenv$$45.valRemap, tmenv$$45.tyconRefRemap, tmenv$$45.removeTraitSolutions);
  return new _tast.ValMemberInfo(remapTyconRef(tmenv$$46.tyconRefRemap, x$$260.ApparentEnclosingEntity), (0, _List.map)(function mapping$$42(arg20$0040$$32) {
    return remapSlotSig(function remapAttrib$$5(xs$$19) {
      return remapAttribs(g$$295, tmenv$$46, xs$$19);
    }, tmenv$$46, arg20$0040$$32);
  }, x$$260.ImplementedSlotSigs), x$$260.IsImplemented, x$$260.MemberFlags);
}

function copyAndRemapAndBindModTy(g$$296, compgen$$22, tmenv$$47, mty$$12) {
  const tycons$$5 = allEntitiesOfModuleOrNamespaceTy(mty$$12);
  const vs$$40 = allValsOfModuleOrNamespaceTy(mty$$12);
  const patternInput$$76 = copyAndRemapAndBindTyconsAndVals(g$$296, compgen$$22, tmenv$$47, tycons$$5, vs$$40);
  return [remapModTy(g$$296, compgen$$22, patternInput$$76[2], mty$$12), patternInput$$76[2]];
}

function remapModTy(_g$$3, _compgen, tmenv$$48, mty$$13) {
  return mapImmediateValsAndTycons(function (x$$261) {
    return renameTycon(tmenv$$48, x$$261);
  }, function (x$$262) {
    return renameVal(tmenv$$48, x$$262);
  }, mty$$13);
}

function renameTycon(tyenv$$20, x$$263) {
  let tcref$$87;

  try {
    const res$$8 = TyconRefMap$00601$$get_Item$$Z788D4AAC(tyenv$$20.tyconRefRemap, (0, _tast.mkLocalTyconRef)(x$$263));
    tcref$$87 = res$$8;
  } catch (matchValue$$138) {
    if (false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("couldn't remap internal tycon " + (0, _layout.showL)(DebugPrint$$$tyconL(x$$263)), (0, _tast.Entity$$get_Range)(x$$263)));
      tcref$$87 = (0, _tast.mkLocalTyconRef)(x$$263);
    } else {
      throw matchValue$$138;
    }
  }

  return (0, _tast.EntityRef$$get_Deref)(tcref$$87);
}

function renameVal(tmenv$$49, x$$264) {
  const matchValue$$139 = ValMap$00601$$TryFind$$7D0CFEA5(tmenv$$49.valRemap, x$$264);

  if (matchValue$$139 == null) {
    return x$$264;
  } else {
    const v$$121 = matchValue$$139;
    return (0, _tast.ValRef$$get_Deref)(v$$121);
  }
}

function copyTycon(compgen$$23, tycon$$19) {
  if (compgen$$23.tag === 2) {
    return tycon$$19;
  } else {
    return (0, _tast.NewClonedTycon)(tycon$$19);
  }
}

function copyAndRemapAndBindTyconsAndVals(g$$297, compgen$$24, tmenv$$50, tycons$$6, vs$$41) {
  const tycons$0027 = (0, _List.map)(function mapping$$43(tycon$$20) {
    return copyTycon(compgen$$24, tycon$$20);
  }, tycons$$6);
  const tmenvinner$$15 = bindTycons(tycons$$6, tycons$0027, tmenv$$50);
  const patternInput$$77 = copyAndRemapAndBindVals(g$$297, compgen$$24, tmenvinner$$15, vs$$41);

  const lookupVal = function lookupVal(v$$122) {
    let vref$$44;

    try {
      const res$$9 = ValMap$00601$$get_Item$$7D0CFEA5(patternInput$$77[1].valRemap, v$$122);
      vref$$44 = res$$9;
    } catch (matchValue$$140) {
      if (false) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("couldn't remap internal value '%s'"))((0, _tast.Val$$get_LogicalName)(v$$122)), (0, _tast.Val$$get_Range)(v$$122)));
        vref$$44 = (0, _tast.mkLocalValRef)(v$$122);
      } else {
        throw matchValue$$140;
      }
    }

    return (0, _tast.ValRef$$get_Deref)(vref$$44);
  };

  const lookupTycon = function lookupTycon(tycon$$21) {
    let tcref$$88;

    try {
      const res$$10 = TyconRefMap$00601$$get_Item$$Z788D4AAC(patternInput$$77[1].tyconRefRemap, (0, _tast.mkLocalTyconRef)(tycon$$21));
      tcref$$88 = res$$10;
    } catch (matchValue$$141) {
      if (false) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("couldn't remap internal tycon " + (0, _layout.showL)(DebugPrint$$$tyconL(tycon$$21)), (0, _tast.Entity$$get_Range)(tycon$$21)));
        tcref$$88 = (0, _tast.mkLocalTyconRef)(tycon$$21);
      } else {
        throw matchValue$$141;
      }
    }

    return (0, _tast.EntityRef$$get_Deref)(tcref$$88);
  };

  (0, _List.iterate2)(function action$$3(tcd, tcd$0027) {
    const patternInput$$78 = tmenvCopyRemapAndBindTypars(function (xs$$20) {
      return remapAttribs(g$$297, patternInput$$77[1], xs$$20);
    }, patternInput$$77[1], (0, _illib.LazyWithContext$00602$$Force$$2B594)(tcd.entity_typars, tcd.entity_range));
    tcd$0027.entity_typars = (0, _illib.LazyWithContext$00602$$$NotLazy$$2B595)(patternInput$$78[0]);
    tcd$0027.entity_attribs = remapAttribs(g$$297, patternInput$$78[1], tcd.entity_attribs);
    tcd$0027.entity_tycon_repr = remapTyconRepr(g$$297, patternInput$$78[1], tcd.entity_tycon_repr);
    const typeAbbrevR = (0, _Option.defaultArg)((0, _tast.Entity$$get_TypeAbbrev)(tcd), null, function mapping$$44(x$$265) {
      return remapType(patternInput$$78[1], x$$265);
    });
    tcd$0027.entity_tycon_tcaug = remapTyconAug(patternInput$$78[1], tcd.entity_tycon_tcaug);
    tcd$0027.entity_modul_contents = new _tast.MaybeLazy$00601(0, "Strict", mapImmediateValsAndTycons(lookupTycon, lookupVal, (0, _tast.MaybeLazy$00601$$get_Value)(tcd.entity_modul_contents)));
    const exnInfoR = remapTyconExnInfo(g$$297, patternInput$$78[1], (0, _tast.Entity$$get_ExceptionInfo)(tcd));
    const matchValue$$142 = tcd$0027.entity_opt_data;

    if (matchValue$$142 != null) {
      const optData = matchValue$$142;
      tcd$0027.entity_opt_data = new _tast.EntityOptionalData(optData.entity_compiled_name, optData.entity_other_range, optData.entity_kind, optData.entity_xmldoc, optData.entity_xmldocsig, typeAbbrevR, optData.entity_tycon_repr_accessibility, optData.entity_accessiblity, exnInfoR);
    } else {
      (0, _tast.Entity$$SetTypeAbbrev$$5268D4C7)(tcd$0027, typeAbbrevR);
      (0, _tast.Entity$$SetExceptionInfo$$762AAD87)(tcd$0027, exnInfoR);
    }
  }, tycons$$6, tycons$0027);
  return [tycons$0027, patternInput$$77[0], patternInput$$77[1]];
}

function allTyconsOfTycon(tycon$$22) {
  return (0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.singleton)(tycon$$22), (0, _Seq.delay)(function () {
      return (0, _Seq.collect)(allTyconsOfTycon, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.Entity$$get_ModuleOrNamespaceType)(tycon$$22)));
    }));
  });
}

function allEntitiesOfModDef(mdef$$3) {
  return (0, _Seq.delay)(function () {
    switch (mdef$$3.tag) {
      case 2:
        {
          return (0, _Seq.empty)();
        }

      case 3:
        {
          return (0, _Seq.empty)();
        }

      case 1:
        {
          const defs$$6 = mdef$$3.fields[0];
          return (0, _Seq.collect)(allEntitiesOfModDef, defs$$6);
        }

      case 0:
        {
          const mty$$14 = mdef$$3.fields[0].fields[0];
          return allEntitiesOfModuleOrNamespaceTy(mty$$14);
        }

      default:
        {
          const tycons$$7 = mdef$$3.fields[1];
          const mbinds$$4 = mdef$$3.fields[2];
          return (0, _Seq.append)((0, _Seq.collect)(allTyconsOfTycon, tycons$$7), (0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (mbind) {
              if (mbind.tag === 1) {
                const mspec$$6 = mbind.fields[0];
                const def$$3 = mbind.fields[1];
                return (0, _Seq.append)((0, _Seq.singleton)(mspec$$6), (0, _Seq.delay)(function () {
                  return allEntitiesOfModDef(def$$3);
                }));
              } else {
                return (0, _Seq.empty)();
              }
            }, mbinds$$4);
          }));
        }
    }
  });
}

function allValsOfModDef(mdef$$4) {
  return (0, _Seq.delay)(function () {
    switch (mdef$$4.tag) {
      case 2:
        {
          const bind$$22 = mdef$$4.fields[0];
          return (0, _Seq.singleton)((0, _tast.Binding$$get_Var)(bind$$22));
        }

      case 3:
        {
          return (0, _Seq.empty)();
        }

      case 1:
        {
          const defs$$7 = mdef$$4.fields[0];
          return (0, _Seq.collect)(allValsOfModDef, defs$$7);
        }

      case 0:
        {
          const mty$$15 = mdef$$4.fields[0].fields[0];
          return allValsOfModuleOrNamespaceTy(mty$$15);
        }

      default:
        {
          const tycons$$8 = mdef$$4.fields[1];
          const mbinds$$5 = mdef$$4.fields[2];
          return (0, _Seq.append)(abstractSlotValsOfTycons(tycons$$8), (0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (mbind$$1) {
              if (mbind$$1.tag === 1) {
                const def$$5 = mbind$$1.fields[1];
                return allValsOfModDef(def$$5);
              } else {
                const bind$$21 = mbind$$1.fields[0];
                return (0, _Seq.singleton)((0, _tast.Binding$$get_Var)(bind$$21));
              }
            }, mbinds$$5);
          }));
        }
    }
  });
}

function remapAndBindModuleOrNamespaceExprWithSig(g$$298, compgen$$25, tmenv$$51, _arg7$$1) {
  const mty$$16 = _arg7$$1.fields[0];
  const mdef$$5 = _arg7$$1.fields[1];
  const m$$154 = _arg7$$1.fields[2];
  const mdef$$6 = copyAndRemapModDef(g$$298, compgen$$25, tmenv$$51, mdef$$5);
  const patternInput$$79 = copyAndRemapAndBindModTy(g$$298, compgen$$25, tmenv$$51, mty$$16);
  return [new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", patternInput$$79[0], mdef$$6, m$$154), patternInput$$79[1]];
}

function remapModuleOrNamespaceExprWithSig(g$$299, compgen$$26, tmenv$$53, _arg8$$1) {
  const mty$$18 = _arg8$$1.fields[0];
  const mdef$$7 = _arg8$$1.fields[1];
  const m$$155 = _arg8$$1.fields[2];
  const mdef$$8 = copyAndRemapModDef(g$$299, compgen$$26, tmenv$$53, mdef$$7);
  const mty$$19 = remapModTy(g$$299, compgen$$26, tmenv$$53, mty$$18);
  return new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", mty$$19, mdef$$8, m$$155);
}

function copyAndRemapModDef(g$$300, compgen$$27, tmenv$$54, mdef$$9) {
  const tycons$$9 = (0, _List.ofSeq)(allEntitiesOfModDef(mdef$$9));
  const vs$$42 = (0, _List.ofSeq)(allValsOfModDef(mdef$$9));
  const patternInput$$80 = copyAndRemapAndBindTyconsAndVals(g$$300, compgen$$27, tmenv$$54, tycons$$9, vs$$42);
  return remapAndRenameModDef(g$$300, compgen$$27, patternInput$$80[2], mdef$$9);
}

function remapAndRenameModDefs(g$$301, compgen$$28, tmenv$$55, x$$268) {
  return (0, _List.map)(function (mdef$$10) {
    return remapAndRenameModDef(g$$301, compgen$$28, tmenv$$55, mdef$$10);
  }, x$$268);
}

function remapAndRenameModDef(g$$302, compgen$$29, tmenv$$56, mdef$$11) {
  switch (mdef$$11.tag) {
    case 2:
      {
        const m$$157 = mdef$$11.fields[1];
        const bind$$23 = mdef$$11.fields[0];
        const v$$123 = (0, _tast.Binding$$get_Var)(bind$$23);
        const bind$$24 = remapAndRenameBind(g$$302, compgen$$29, tmenv$$56, bind$$23, renameVal(tmenv$$56, v$$123));
        return new _tast.ModuleOrNamespaceExpr(2, "TMDefLet", bind$$24, m$$157);
      }

    case 3:
      {
        const m$$158 = mdef$$11.fields[1];
        const e$$58 = mdef$$11.fields[0];
        const e$$59 = remapExpr(g$$302, compgen$$29, tmenv$$56, e$$58);
        return new _tast.ModuleOrNamespaceExpr(3, "TMDefDo", e$$59, m$$158);
      }

    case 1:
      {
        const defs$$8 = mdef$$11.fields[0];
        const defs$$9 = remapAndRenameModDefs(g$$302, compgen$$29, tmenv$$56, defs$$8);
        return new _tast.ModuleOrNamespaceExpr(1, "TMDefs", defs$$9);
      }

    case 0:
      {
        const mexpr$$5 = mdef$$11.fields[0];
        const mexpr$$6 = remapModuleOrNamespaceExprWithSig(g$$302, compgen$$29, tmenv$$56, mexpr$$5);
        return new _tast.ModuleOrNamespaceExpr(0, "TMAbstract", mexpr$$6);
      }

    default:
      {
        const tycons$$10 = mdef$$11.fields[1];
        const mbinds$$6 = mdef$$11.fields[2];
        const m$$156 = mdef$$11.fields[3];
        const isRec = mdef$$11.fields[0];
        const tycons$$11 = (0, _List.map)(function mapping$$45(x$$269) {
          return renameTycon(tmenv$$56, x$$269);
        }, tycons$$10);
        const mbinds$$7 = (0, _List.map)(function mapping$$46(x$$270) {
          return remapAndRenameModBind(g$$302, compgen$$29, tmenv$$56, x$$270);
        }, mbinds$$6);
        return new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", isRec, tycons$$11, mbinds$$7, m$$156);
      }
  }
}

function remapAndRenameModBind(g$$303, compgen$$30, tmenv$$57, x$$271) {
  if (x$$271.tag === 1) {
    const mspec$$7 = x$$271.fields[0];
    const def$$7 = x$$271.fields[1];
    const mspec$$8 = renameTycon(tmenv$$57, mspec$$7);
    const def$$8 = remapAndRenameModDef(g$$303, compgen$$30, tmenv$$57, def$$7);
    return new _tast.ModuleOrNamespaceBinding(1, "Module", mspec$$8, def$$8);
  } else {
    const bind$$25 = x$$271.fields[0];
    const v2$$6 = renameVal(tmenv$$57, valOfBind(bind$$25));
    const bind2 = remapAndRenameBind(g$$303, compgen$$30, tmenv$$57, bind$$25, v2$$6);
    return new _tast.ModuleOrNamespaceBinding(0, "Binding", bind2);
  }
}

function remapImplFile(g$$304, compgen$$31, tmenv$$58, mv) {
  return (0, _tast.mapAccImplFile)(function (tmenv$$59, arg30$0040$$11) {
    return remapAndBindModuleOrNamespaceExprWithSig(g$$304, compgen$$31, tmenv$$59, arg30$0040$$11);
  }, tmenv$$58, mv);
}

function copyModuleOrNamespaceType(g$$305, compgen$$32, mtyp$$6) {
  return copyAndRemapAndBindModTy(g$$305, compgen$$32, Remap$$$get_Empty(), mtyp$$6)[0];
}

function copyExpr(g$$306, compgen$$33, e$$60) {
  return remapExpr(g$$306, compgen$$33, Remap$$$get_Empty(), e$$60);
}

function copyImplFile(g$$307, compgen$$34, e$$61) {
  return remapImplFile(g$$307, compgen$$34, Remap$$$get_Empty(), e$$61)[0];
}

function instExpr(g$$308, tpinst$$11, e$$62) {
  return remapExpr(g$$308, new ValCopyFlag(0, "CloneAll"), mkInstRemap(tpinst$$11), e$$62);
}

function remarkExpr(m$$159, x$$273) {
  switch (x$$273.tag) {
    case 4:
      {
        const uniq$$1 = x$$273.fields[0];
        const tps$$50 = x$$273.fields[1];
        const rty$$43 = x$$273.fields[4];
        const b$$42 = x$$273.fields[2];
        return new _tast.Expr(4, "TyLambda", uniq$$1, tps$$50, remarkExpr(m$$159, b$$42), m$$159, rty$$43);
      }

    case 13:
      {
        const tps$$51 = x$$273.fields[0];
        const b$$43 = x$$273.fields[1];
        return new _tast.Expr(13, "TyChoose", tps$$51, remarkExpr(m$$159, b$$43), m$$159);
      }

    case 6:
      {
        const fvs$$32 = x$$273.fields[3];
        const e$$63 = x$$273.fields[1];
        const binds$$10 = x$$273.fields[0];
        return new _tast.Expr(6, "LetRec", remarkBinds(m$$159, binds$$10), remarkExpr(m$$159, e$$63), m$$159, fvs$$32);
      }

    case 7:
      {
        const fvs$$33 = x$$273.fields[3];
        const e$$64 = x$$273.fields[1];
        const bind$$26 = x$$273.fields[0];
        return new _tast.Expr(7, "Let", remarkBind(m$$159, bind$$26), remarkExpr(m$$159, e$$64), m$$159, fvs$$33);
      }

    case 9:
      {
        const ty$$260 = x$$273.fields[5];
        const targets$$6 = x$$273.fields[3];
        const pt$$1 = x$$273.fields[2];
        return primMkMatch(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$159, remarkDecisionTree(m$$159, pt$$1), (0, _Array.map)(function (_arg1$$107) {
          const vs$$44 = _arg1$$107.fields[0];
          const e$$65 = _arg1$$107.fields[1];
          return new _tast.DecisionTreeTarget(0, "TTarget", vs$$44, remarkExpr(m$$159, e$$65), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
        }, targets$$6, Array), m$$159, ty$$260);
      }

    case 1:
      {
        const x$$274 = x$$273.fields[0];
        const valUseFlags$$2 = x$$273.fields[1];
        return new _tast.Expr(1, "Val", x$$274, valUseFlags$$2, m$$159);
      }

    case 12:
      {
        const ty$$261 = x$$273.fields[4];
        const isFromQueryExpression$$2 = x$$273.fields[2];
        const conv = x$$273.fields[1];
        const a$$15 = x$$273.fields[0];
        return new _tast.Expr(12, "Quote", remarkExpr(m$$159, a$$15), conv, isFromQueryExpression$$2, m$$159, ty$$261);
      }

    case 8:
      {
        const ty$$262 = x$$273.fields[1];
        const overrides$$8 = x$$273.fields[4];
        const n$$28 = x$$273.fields[0];
        const iimpls$$6 = x$$273.fields[5];
        const basev$$5 = x$$273.fields[2];
        const basecall$$3 = x$$273.fields[3];
        return new _tast.Expr(8, "Obj", n$$28, ty$$262, basev$$5, remarkExpr(m$$159, basecall$$3), (0, _List.map)(function (arg10$0040$$97) {
          return remarkObjExprMethod(m$$159, arg10$0040$$97);
        }, overrides$$8), (0, _List.map)(function (tupledArg$$71) {
          return remarkInterfaceImpl(m$$159, tupledArg$$71[0], tupledArg$$71[1]);
        }, iimpls$$6), m$$159);
      }

    case 11:
      {
        const tinst$$56 = x$$273.fields[1];
        const op$$4 = x$$273.fields[0];
        const args$$21 = x$$273.fields[2];
        const op$$5 = op$$4.tag === 9 ? new _tast.TOp(9, "TryFinally", new _ast.SequencePointInfoForTry(2, "NoSequencePointAtTry"), new _ast.SequencePointInfoForFinally(1, "NoSequencePointAtFinally")) : op$$4.tag === 8 ? new _tast.TOp(8, "TryCatch", new _ast.SequencePointInfoForTry(2, "NoSequencePointAtTry"), new _ast.SequencePointInfoForWith(1, "NoSequencePointAtWith")) : op$$4;
        return new _tast.Expr(11, "Op", op$$5, tinst$$56, remarkExprs(m$$159, args$$21), m$$159);
      }

    case 14:
      {
        const eref$$9 = x$$273.fields[0];
        eref$$9.contents = remarkExpr(m$$159, eref$$9.contents);
        return x$$273;
      }

    case 5:
      {
        const tyargs$$17 = x$$273.fields[2];
        const e1ty$$1 = x$$273.fields[1];
        const e1$$25 = x$$273.fields[0];
        const args$$22 = x$$273.fields[3];
        return new _tast.Expr(5, "App", remarkExpr(m$$159, e1$$25), e1ty$$1, tyargs$$17, remarkExprs(m$$159, args$$22), m$$159);
      }

    case 2:
      {
        const e2$$23 = x$$273.fields[1];
        const e1$$26 = x$$273.fields[0];
        const dir$$2 = x$$273.fields[2];
        return new _tast.Expr(2, "Sequential", remarkExpr(m$$159, e1$$26), remarkExpr(m$$159, e2$$23), dir$$2, new _ast.SequencePointInfoForSeq(1, "SuppressSequencePointOnExprOfSequential"), m$$159);
      }

    case 10:
      {
        const eqns = x$$273.fields[0];
        const e3$$6 = x$$273.fields[2];
        const e2$$24 = x$$273.fields[1];
        return new _tast.Expr(10, "StaticOptimization", eqns, remarkExpr(m$$159, e2$$24), remarkExpr(m$$159, e3$$6), m$$159);
      }

    case 0:
      {
        const ty$$264 = x$$273.fields[2];
        const c$$21 = x$$273.fields[0];
        return new _tast.Expr(0, "Const", c$$21, m$$159, ty$$264);
      }

    default:
      {
        const vs$$43 = x$$273.fields[3];
        const uniq = x$$273.fields[0];
        const rty$$42 = x$$273.fields[6];
        const ctorThisValOpt$$8 = x$$273.fields[1];
        const baseValOpt$$9 = x$$273.fields[2];
        const b$$41 = x$$273.fields[4];
        return new _tast.Expr(3, "Lambda", uniq, ctorThisValOpt$$8, baseValOpt$$9, vs$$43, remarkExpr(m$$159, b$$41), m$$159, rty$$42);
      }
  }
}

function remarkObjExprMethod(m$$160, _arg1$$108) {
  const vs$$45 = _arg1$$108.fields[3];
  const tps$$52 = _arg1$$108.fields[2];
  const slotsig$$5 = _arg1$$108.fields[0];
  const e$$66 = _arg1$$108.fields[4];
  const attribs$$5 = _arg1$$108.fields[1];
  return new _tast.ObjExprMethod(0, "TObjExprMethod", slotsig$$5, attribs$$5, tps$$52, vs$$45, remarkExpr(m$$160, e$$66), m$$160);
}

function remarkInterfaceImpl(m$$161, ty$$265, overrides$$10) {
  return [ty$$265, (0, _List.map)(function (arg10$0040$$98) {
    return remarkObjExprMethod(m$$161, arg10$0040$$98);
  }, overrides$$10)];
}

function remarkExprs(m$$162, es$$10) {
  return (0, _List.map)(function mapping$$47(arg10$0040$$99) {
    return remarkExpr(m$$162, arg10$0040$$99);
  }, es$$10);
}

function remarkFlatExprs(m$$163, es$$11) {
  return (0, _List.map)(function mapping$$48(arg10$0040$$100) {
    return remarkExpr(m$$163, arg10$0040$$100);
  }, es$$11);
}

function remarkDecisionTree(m$$164, x$$275) {
  switch (x$$275.tag) {
    case 1:
      {
        const n$$29 = x$$275.fields[1] | 0;
        const es$$12 = x$$275.fields[0];
        return new _tast.DecisionTree(1, "TDSuccess", remarkFlatExprs(m$$164, es$$12), n$$29);
      }

    case 2:
      {
        const rest$$3 = x$$275.fields[1];
        const bind$$27 = x$$275.fields[0];
        return new _tast.DecisionTree(2, "TDBind", remarkBind(m$$164, bind$$27), remarkDecisionTree(m$$164, rest$$3));
      }

    default:
      {
        const e1$$27 = x$$275.fields[0];
        const dflt$$5 = x$$275.fields[2];
        const csl$$3 = x$$275.fields[1];
        return new _tast.DecisionTree(0, "TDSwitch", remarkExpr(m$$164, e1$$27), (0, _List.map)(function (_arg2$$15) {
          const y$$53 = _arg2$$15.fields[1];
          const test$$3 = _arg2$$15.fields[0];
          return new _tast.DecisionTreeCase(0, "TCase", test$$3, remarkDecisionTree(m$$164, y$$53));
        }, csl$$3), (0, _Option.defaultArg)(dflt$$5, null, function (x$$276) {
          return remarkDecisionTree(m$$164, x$$276);
        }), m$$164);
      }
  }
}

function remarkBinds(m$$165, binds$$11) {
  return (0, _List.map)(function (arg10$0040$$101) {
    return remarkBind(m$$165, arg10$0040$$101);
  }, binds$$11);
}

function remarkBind(m$$166, _arg2$$16) {
  const v$$124 = _arg2$$16.fields[0];
  const repr$$7 = _arg2$$16.fields[1];
  return new _tast.Binding(0, "TBind", v$$124, remarkExpr(m$$166, repr$$7), new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"));
}

function isRecdOrStructFieldDefinitelyMutable(f$$57) {
  if (!(0, _tast.RecdField$$get_IsStatic)(f$$57)) {
    return (0, _tast.RecdField$$get_IsMutable)(f$$57);
  } else {
    return false;
  }
}

function isUnionCaseDefinitelyMutable(uc$$3) {
  return uc$$3.FieldTable.FieldsByIndex.some(isRecdOrStructFieldDefinitelyMutable);
}

function isUnionCaseRefDefinitelyMutable(uc$$4) {
  return isUnionCaseDefinitelyMutable((0, _tast.UnionCaseRef$$get_UnionCase)(uc$$4));
}

function isRecdOrUnionOrStructTyconRefDefinitelyMutable(tcref$$89) {
  const tycon$$24 = (0, _tast.EntityRef$$get_Deref)(tcref$$89);

  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$24)) {
    return (0, _tast.Entity$$get_UnionCasesArray)(tycon$$24).some(isUnionCaseDefinitelyMutable);
  } else if ((0, _tast.Entity$$get_IsRecordTycon)(tycon$$24) ? true : (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$24)) {
    return (0, _tast.Entity$$get_AllFieldsArray)(tycon$$24).some(isRecdOrStructFieldDefinitelyMutable);
  } else {
    return false;
  }
}

function isExnDefinitelyMutable(_ecref) {
  return true;
}

function isUnionCaseFieldMutable(g$$309, ucref$$12, n$$30) {
  if (((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$309) ? tyconRefEq(g$$309, (0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$12), (0, _TcGlobals.TcGlobals$$get_list_tcr_canon)(g$$309)) : false) ? n$$30 === 1 : false) {
    return true;
  } else {
    return (0, _tast.RecdField$$get_IsMutable)((0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(ucref$$12, n$$30));
  }
}

function isExnFieldMutable(ecref$$3, n$$31) {
  if (n$$31 < 0 ? true : n$$31 >= (0, _List.length)(recdFieldsOfExnDefRef(ecref$$3))) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("isExnFieldMutable, exnc = %s, n = %d"))((0, _tast.EntityRef$$get_LogicalName)(ecref$$3))(n$$31), (0, _tast.EntityRef$$get_Range)(ecref$$3)));
  }

  return (0, _tast.RecdField$$get_IsMutable)(recdFieldOfExnDefRefByIdx(ecref$$3, n$$31));
}

function useGenuineField(tycon$$25, f$$60) {
  if (((0, _tast.RecdField$$get_LiteralValue)(f$$60) != null ? true : (0, _tast.Entity$$get_IsEnumTycon)(tycon$$25)) ? true : f$$60.rfield_secret) {
    return true;
  } else if (!(0, _tast.RecdField$$get_IsStatic)(f$$60) ? f$$60.rfield_mutable : false) {
    return !(0, _tast.Entity$$get_IsRecordTycon)(tycon$$25);
  } else {
    return false;
  }
}

function ComputeFieldName(tycon$$26, f$$61) {
  if (useGenuineField(tycon$$26, f$$61)) {
    return (0, _ast.Ident$$get_idText)(f$$61.rfield_id);
  } else {
    return (0, _PrettyNaming.CompilerGeneratedName)((0, _ast.Ident$$get_idText)(f$$61.rfield_id));
  }
}

function isQuotedExprTy(g$$310, ty$$266) {
  const activePatternResult33327 = $007CAppTy$007C_$007C(g$$310, ty$$266);

  if (activePatternResult33327 != null) {
    return tyconRefEq(g$$310, activePatternResult33327[0], (0, _TcGlobals.TcGlobals$$get_expr_tcr)(g$$310));
  } else {
    return false;
  }
}

function destQuotedExprTy(g$$311, ty$$267) {
  var $target$$256, ty$$268;
  const activePatternResult33331 = $007CAppTy$007C_$007C(g$$311, ty$$267);

  if (activePatternResult33331 != null) {
    if (activePatternResult33331[1].tail != null) {
      if (activePatternResult33331[1].tail.tail == null) {
        $target$$256 = 0;
        ty$$268 = activePatternResult33331[1].head;
      } else {
        $target$$256 = 1;
      }
    } else {
      $target$$256 = 1;
    }
  } else {
    $target$$256 = 1;
  }

  switch ($target$$256) {
    case 0:
      {
        return ty$$268;
      }

    case 1:
      {
        throw new Error("destQuotedExprTy");
      }
  }
}

function mkQuotedExprTy(g$$312, ty$$269) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_expr_tcr)(g$$312), (0, _Types.L)(ty$$269, (0, _Types.L)()));
}

function mkRawQuotedExprTy(g$$313) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_raw_expr_tcr)(g$$313), (0, _Types.L)());
}

function mkAnyTupledTy(g$$314, tupInfo$$20, tys$$34) {
  if (tys$$34.tail != null) {
    if (tys$$34.tail.tail == null) {
      return tys$$34.head;
    } else {
      return new _tast.TType(2, "TType_tuple", tupInfo$$20, tys$$34);
    }
  } else {
    return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$314);
  }
}

function mkRefTupledTy(g$$315, tys$$35) {
  return mkAnyTupledTy(g$$315, _tast.tupInfoRef, tys$$35);
}

function mkRefTupledVarsTy(g$$316, vs$$46) {
  return mkRefTupledTy(g$$316, (0, _tast.typesOfVals)(vs$$46));
}

function mkMethodTy(g$$317, argtys$$10, rty$$44) {
  return mkIteratedFunTy((0, _List.map)(function (arg10$0040$$104) {
    return mkRefTupledTy(g$$317, arg10$0040$$104);
  }, argtys$$10), rty$$44);
}

function mkArrayType(g$$318, ty$$270) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_array_tcr_nice)(g$$318), (0, _Types.L)(ty$$270, (0, _Types.L)()));
}

function mkByteArrayTy(g$$319) {
  return mkArrayType(g$$319, (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$319));
}

function tyOfExpr(g$$320, e$$67) {
  tyOfExpr: while (true) {
    var $target$$257, ty$$271, e$$68;

    switch (e$$67.tag) {
      case 8:
        $target$$257 = 1;
        ty$$271 = e$$67.fields[1];
        break;

      case 9:
        $target$$257 = 1;
        ty$$271 = e$$67.fields[5];
        break;

      case 12:
        $target$$257 = 1;
        ty$$271 = e$$67.fields[4];
        break;

      case 0:
        $target$$257 = 1;
        ty$$271 = e$$67.fields[2];
        break;

      case 1:
        $target$$257 = 2;
        break;

      case 2:
        $target$$257 = 3;
        break;

      case 3:
        $target$$257 = 4;
        break;

      case 4:
        $target$$257 = 5;
        break;

      case 7:
        $target$$257 = 6;
        e$$68 = e$$67.fields[1];
        break;

      case 13:
        $target$$257 = 6;
        e$$68 = e$$67.fields[1];
        break;

      case 14:
        $target$$257 = 6;
        e$$68 = e$$67.fields[0].contents;
        break;

      case 10:
        $target$$257 = 6;
        e$$68 = e$$67.fields[2];
        break;

      case 6:
        $target$$257 = 6;
        e$$68 = e$$67.fields[1];
        break;

      case 11:
        $target$$257 = 7;
        break;

      default:
        $target$$257 = 0;
    }

    switch ($target$$257) {
      case 0:
        {
          const tyargs$$18 = e$$67.fields[2];
          const fty = e$$67.fields[1];
          const args$$23 = e$$67.fields[3];
          return applyTys(g$$320, fty, tyargs$$18, args$$23);
        }

      case 1:
        {
          return ty$$271;
        }

      case 2:
        {
          const vref$$45 = e$$67.fields[0];
          return (0, _tast.ValRef$$get_Type)(vref$$45);
        }

      case 3:
        {
          const k$$2 = e$$67.fields[2];
          const b$$44 = e$$67.fields[1];
          const a$$16 = e$$67.fields[0];
          g$$320 = g$$320;
          e$$67 = k$$2.tag === 1 ? a$$16 : b$$44;
          continue tyOfExpr;
        }

      case 4:
        {
          const vs$$47 = e$$67.fields[3];
          const rty$$45 = e$$67.fields[6];
          return op_MinusMinusGreater(mkRefTupledVarsTy(g$$320, vs$$47), rty$$45);
        }

      case 5:
        {
          const tyvs$$1 = e$$67.fields[1];
          const rty$$46 = e$$67.fields[4];
          return op_PlusMinusGreater(tyvs$$1, rty$$46);
        }

      case 6:
        {
          g$$320 = g$$320;
          e$$67 = e$$68;
          continue tyOfExpr;
        }

      case 7:
        {
          const tinst$$57 = e$$67.fields[1];
          const op$$6 = e$$67.fields[0];
          var $target$$258, rtys, uc$$7, uc$$8, tcref$$91, i$$8, tupInfo$$21, fref$$8, readonly$$13, fref$$9, cref$$6, j$$7, readonly$$14, cref$$7, j$$8, ecref$$4, j$$9, v$$125, readonly$$15, v$$126, readonly$$16, ty$$275;

          if (op$$6.tag === 31) {
            $target$$258 = 1;
            rtys = op$$6.fields[10];
          } else if (op$$6.tag === 22) {
            $target$$258 = 1;
            rtys = op$$6.fields[1];
          } else if (op$$6.tag === 0) {
            $target$$258 = 2;
            uc$$7 = op$$6.fields[0];
          } else if (op$$6.tag === 15) {
            $target$$258 = 3;
            uc$$8 = op$$6.fields[0];
          } else if (op$$6.tag === 10) {
            $target$$258 = 4;
            tcref$$91 = op$$6.fields[1];
          } else if (op$$6.tag === 1) {
            $target$$258 = 5;
          } else if (op$$6.tag === 4) {
            $target$$258 = 6;
          } else if (op$$6.tag === 5) {
            $target$$258 = 7;
          } else if (op$$6.tag === 21) {
            $target$$258 = 8;
            i$$8 = op$$6.fields[1];
          } else if (op$$6.tag === 2) {
            $target$$258 = 9;
            tupInfo$$21 = op$$6.fields[0];
          } else if (op$$6.tag === 7) {
            $target$$258 = 10;
          } else if (op$$6.tag === 6) {
            $target$$258 = 10;
          } else if (op$$6.tag === 3) {
            $target$$258 = 11;
          } else if (op$$6.tag === 8) {
            $target$$258 = 12;
          } else if (op$$6.tag === 9) {
            $target$$258 = 12;
          } else if (op$$6.tag === 13) {
            $target$$258 = 13;
            fref$$8 = op$$6.fields[0];
            readonly$$13 = op$$6.fields[1];
          } else if (op$$6.tag === 12) {
            $target$$258 = 14;
            fref$$9 = op$$6.fields[0];
          } else if (op$$6.tag === 11) {
            $target$$258 = 15;
          } else if (op$$6.tag === 18) {
            $target$$258 = 15;
          } else if (op$$6.tag === 20) {
            $target$$258 = 15;
          } else if (op$$6.tag === 30) {
            if (op$$6.fields[0].tag === 3) {
              $target$$258 = 15;
            } else if (op$$6.fields[0].tag === 1) {
              $target$$258 = 20;
              v$$125 = op$$6.fields[1];
            } else if (op$$6.fields[0].tag === 0) {
              $target$$258 = 21;
              readonly$$15 = op$$6.fields[0].fields[0];
              v$$126 = op$$6.fields[1];
            } else {
              $target$$258 = 15;
            }
          } else if (op$$6.tag === 14) {
            $target$$258 = 16;
          } else if (op$$6.tag === 17) {
            $target$$258 = 17;
            cref$$6 = op$$6.fields[0];
            j$$7 = op$$6.fields[1];
            readonly$$14 = op$$6.fields[2];
          } else if (op$$6.tag === 16) {
            $target$$258 = 18;
            cref$$7 = op$$6.fields[0];
            j$$8 = op$$6.fields[1];
          } else if (op$$6.tag === 19) {
            $target$$258 = 19;
            ecref$$4 = op$$6.fields[0];
            j$$9 = op$$6.fields[1];
          } else if (op$$6.tag === 23) {
            $target$$258 = 22;
            readonly$$16 = op$$6.fields[0];
          } else if (op$$6.tag === 29) {
            $target$$258 = 23;
            ty$$275 = op$$6.fields[0].fields[4];
          } else if (op$$6.tag === 25) {
            $target$$258 = 24;
          } else if (op$$6.tag === 27) {
            $target$$258 = 25;
          } else if (op$$6.tag === 28) {
            $target$$258 = 25;
          } else if (op$$6.tag === 26) {
            $target$$258 = 25;
          } else {
            $target$$258 = 0;
          }

          switch ($target$$258) {
            case 0:
              {
                var $target$$259, _fromTy, to_ty$$1;

                if (tinst$$57.tail != null) {
                  if (tinst$$57.tail.tail != null) {
                    if (tinst$$57.tail.tail.tail == null) {
                      $target$$259 = 0;
                      _fromTy = tinst$$57.tail.head;
                      to_ty$$1 = tinst$$57.head;
                    } else {
                      $target$$259 = 1;
                    }
                  } else {
                    $target$$259 = 1;
                  }
                } else {
                  $target$$259 = 1;
                }

                switch ($target$$259) {
                  case 0:
                    {
                      return to_ty$$1;
                    }

                  case 1:
                    {
                      throw new Error("bad TOp.Coerce node");
                    }
                }
              }

            case 1:
              {
                var $target$$260, h$$8;

                if (rtys.tail != null) {
                  if (rtys.tail.tail == null) {
                    $target$$260 = 0;
                    h$$8 = rtys.head;
                  } else {
                    $target$$260 = 1;
                  }
                } else {
                  $target$$260 = 1;
                }

                switch ($target$$260) {
                  case 0:
                    {
                      return h$$8;
                    }

                  case 1:
                    {
                      return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$320);
                    }
                }
              }

            case 2:
              {
                return actualResultTyOfUnionCase(tinst$$57, uc$$7);
              }

            case 3:
              {
                return mkProvenUnionCaseTy(uc$$8, tinst$$57);
              }

            case 4:
              {
                return mkAppTy(tcref$$91, tinst$$57);
              }

            case 5:
              {
                return (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$320);
              }

            case 6:
              {
                return mkByteArrayTy(g$$320);
              }

            case 7:
              {
                return mkArrayType(g$$320, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$320));
              }

            case 8:
              {
                return (0, _List.item)(i$$8, tinst$$57);
              }

            case 9:
              {
                return mkAnyTupledTy(g$$320, tupInfo$$21, tinst$$57);
              }

            case 10:
              {
                return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$320);
              }

            case 11:
              {
                var $target$$261, ty$$272;

                if (tinst$$57.tail != null) {
                  if (tinst$$57.tail.tail == null) {
                    $target$$261 = 0;
                    ty$$272 = tinst$$57.head;
                  } else {
                    $target$$261 = 1;
                  }
                } else {
                  $target$$261 = 1;
                }

                switch ($target$$261) {
                  case 0:
                    {
                      return mkArrayType(g$$320, ty$$272);
                    }

                  case 1:
                    {
                      throw new Error("bad TOp.Array node");
                    }
                }
              }

            case 12:
              {
                var $target$$262, ty$$273;

                if (tinst$$57.tail != null) {
                  if (tinst$$57.tail.tail == null) {
                    $target$$262 = 0;
                    ty$$273 = tinst$$57.head;
                  } else {
                    $target$$262 = 1;
                  }
                } else {
                  $target$$262 = 1;
                }

                switch ($target$$262) {
                  case 0:
                    {
                      return ty$$273;
                    }

                  case 1:
                    {
                      throw new Error("bad TOp_try node");
                    }
                }
              }

            case 13:
              {
                return mkByrefTyWithFlag(g$$320, readonly$$13, actualTyOfRecdFieldRef(fref$$8, tinst$$57));
              }

            case 14:
              {
                return actualTyOfRecdFieldRef(fref$$9, tinst$$57);
              }

            case 15:
              {
                return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$320);
              }

            case 16:
              {
                return (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$320);
              }

            case 17:
              {
                return mkByrefTyWithFlag(g$$320, readonly$$14, actualTyOfRecdField(mkTyconRefInst((0, _tast.UnionCaseRef$$get_TyconRef)(cref$$6), tinst$$57), (0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(cref$$6, j$$7)));
              }

            case 18:
              {
                return actualTyOfRecdField(mkTyconRefInst((0, _tast.UnionCaseRef$$get_TyconRef)(cref$$7), tinst$$57), (0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(cref$$7, j$$8));
              }

            case 19:
              {
                return recdFieldTyOfExnDefRefByIdx(ecref$$4, j$$9);
              }

            case 20:
              {
                return destByrefTy(g$$320, (0, _tast.ValRef$$get_Type)(v$$125));
              }

            case 21:
              {
                return mkByrefTyWithFlag(g$$320, readonly$$15, (0, _tast.ValRef$$get_Type)(v$$126));
              }

            case 22:
              {
                var $target$$263, ty$$274;

                if (tinst$$57.tail != null) {
                  if (tinst$$57.tail.tail == null) {
                    $target$$263 = 0;
                    ty$$274 = tinst$$57.head;
                  } else {
                    $target$$263 = 1;
                  }
                } else {
                  $target$$263 = 1;
                }

                switch ($target$$263) {
                  case 0:
                    {
                      return mkByrefTyWithFlag(g$$320, readonly$$16, ty$$274);
                    }

                  case 1:
                    {
                      throw new Error("bad TOp.RefAddrGet node");
                    }
                }
              }

            case 23:
              {
                return GetFSharpViewOfReturnType(g$$320, ty$$275);
              }

            case 24:
              {
                var $target$$264, rtn_ty;

                if (tinst$$57.tail != null) {
                  if (tinst$$57.tail.tail == null) {
                    $target$$264 = 0;
                    rtn_ty = tinst$$57.head;
                  } else {
                    $target$$264 = 1;
                  }
                } else {
                  $target$$264 = 1;
                }

                switch ($target$$264) {
                  case 0:
                    {
                      return rtn_ty;
                    }

                  case 1:
                    {
                      throw new Error("bad TOp.Reraise node");
                    }
                }
              }

            case 25:
              {
                return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$320);
              }
          }
        }
    }
  }
}

function primMkApp(tupledArg$$72, tyargs$$19, argsl, m$$167) {
  return new _tast.Expr(5, "App", tupledArg$$72[0], tupledArg$$72[1], tyargs$$19, argsl, m$$167);
}

function isExpansiveUnderInstantiation(g$$321, fty0, tyargs$$20, pargs, argsl$$1) {
  if (isForallTy(g$$321, fty0)) {
    const fty1 = formalApplyTys(g$$321, fty0, tyargs$$20, pargs);

    if (!isFunTy(g$$321, fty1)) {
      return true;
    } else {
      const loop$$2 = function loop$$2(fty$$2, xs$$22) {
        loop$$2: while (true) {
          if (xs$$22.tail != null) {
            const t$$15 = xs$$22.tail;

            if (!isFunTy(g$$321, fty$$2)) {
              return true;
            } else {
              fty$$2 = rangeOfFunTy(g$$321, fty$$2);
              xs$$22 = t$$15;
              continue loop$$2;
            }
          } else {
            return false;
          }
        }
      };

      return loop$$2(fty1, argsl$$1);
    }
  } else {
    return false;
  }
}

function mkExprApplAux(g$$322, f$$63, fty$$3, argsl$$2, m$$168) {
  var tyargs$$21, pargs$$1, m2$$7, fty$0027, f$0027, matchValue$$143, v$$127, matchValue$$144, info$$2;

  if (argsl$$2.tail == null) {
    return f$$63;
  } else {
    var $target$$265, f$0027$$1, fty$0027$$1, m2$$8, pargs$$2, tyargs$$22;

    if (f$$63.tag === 5) {
      if (tyargs$$21 = f$$63.fields[2], (pargs$$1 = f$$63.fields[3], (m2$$7 = f$$63.fields[4], (fty$0027 = f$$63.fields[1], (f$0027 = f$$63.fields[0], (pargs$$1.tail == null ? true : (matchValue$$143 = stripExpr(f$0027), matchValue$$143.tag === 1 ? (v$$127 = matchValue$$143.fields[0], (matchValue$$144 = (0, _tast.ValRef$$get_ValReprInfo)(v$$127), matchValue$$144 == null ? false : (info$$2 = matchValue$$144, (0, _tast.ValReprInfo$$get_NumCurriedArgs)(info$$2) > (0, _List.length)(pargs$$1)))) : false)) ? !isExpansiveUnderInstantiation(g$$322, fty$0027, tyargs$$21, pargs$$1, argsl$$2) : false))))) {
        $target$$265 = 0;
        f$0027$$1 = f$$63.fields[0];
        fty$0027$$1 = f$$63.fields[1];
        m2$$8 = f$$63.fields[4];
        pargs$$2 = f$$63.fields[3];
        tyargs$$22 = f$$63.fields[2];
      } else {
        $target$$265 = 1;
      }
    } else {
      $target$$265 = 1;
    }

    switch ($target$$265) {
      case 0:
        {
          return primMkApp([f$0027$$1, fty$0027$$1], tyargs$$22, (0, _List.append)(pargs$$2, argsl$$2), (0, _range.unionRanges)(m2$$8, m$$168));
        }

      case 1:
        {
          if (!isFunTy(g$$322, fty$$3)) {
            (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("expected a function type", m$$168));
          }

          return primMkApp([f$$63, fty$$3], (0, _Types.L)(), argsl$$2, m$$168);
        }
    }
  }
}

function mkAppsAux(g$$323, f$$64, fty$$4, tyargsl, argsl$$3, m$$169) {
  mkAppsAux: while (true) {
    if (tyargsl.tail == null) {
      return mkExprApplAux(g$$323, f$$64, fty$$4, argsl$$3, m$$169);
    } else {
      const tyargs$$23 = tyargsl.head;
      const rest$$4 = tyargsl.tail;

      if (tyargs$$23.tail == null) {
        g$$323 = g$$323;
        f$$64 = f$$64;
        fty$$4 = fty$$4;
        tyargsl = rest$$4;
        argsl$$3 = argsl$$3;
        m$$169 = m$$169;
        continue mkAppsAux;
      } else {
        const arfty = applyForallTy(g$$323, fty$$4, tyargs$$23);
        g$$323 = g$$323;
        f$$64 = primMkApp([f$$64, fty$$4], tyargs$$23, (0, _Types.L)(), m$$169);
        fty$$4 = arfty;
        tyargsl = rest$$4;
        argsl$$3 = argsl$$3;
        m$$169 = m$$169;
        continue mkAppsAux;
      }
    }
  }
}

function mkApps(g$$324, _arg1$$109, tyargsl$$1, argl, m$$170) {
  return mkAppsAux(g$$324, _arg1$$109[0], _arg1$$109[1], tyargsl$$1, argl, m$$170);
}

function mkTyAppExpr(m$$171, f$$66, fty$$6, tyargs$$24) {
  if (tyargs$$24.tail == null) {
    return f$$66;
  } else {
    return primMkApp([f$$66, fty$$6], tyargs$$24, (0, _Types.L)(), m$$171);
  }
}

function accTargetsOfDecisionTree(tree$$1, acc$$171) {
  accTargetsOfDecisionTree: while (true) {
    switch (tree$$1.tag) {
      case 1:
        {
          const i$$9 = tree$$1.fields[1] | 0;
          return (0, _Types.L)(i$$9, acc$$171);
        }

      case 2:
        {
          const rest$$5 = tree$$1.fields[1];
          tree$$1 = rest$$5;
          acc$$171 = acc$$171;
          continue accTargetsOfDecisionTree;
        }

      default:
        {
          const edges = tree$$1.fields[1];
          const dflt$$6 = tree$$1.fields[2];
          return (0, _List.foldBack)(function (c$$22, arg10$0040$$105) {
            return accTargetsOfDecisionTree((0, _tast.DecisionTreeCase$$get_CaseTree)(c$$22), arg10$0040$$105);
          }, edges, (0, _Seq.foldBack)(accTargetsOfDecisionTree, (0, _Option.defaultArg)(dflt$$6, [], function ($x$$47) {
            return [$x$$47];
          }), acc$$171));
        }
    }
  }
}

function mapAccTipsOfDecisionTree(f$$67, tree$$2) {
  switch (tree$$2.tag) {
    case 1:
      {
        const i$$10 = tree$$2.fields[1] | 0;
        const es$$13 = tree$$2.fields[0];
        return f$$67(es$$13, i$$10);
      }

    case 2:
      {
        const rest$$6 = tree$$2.fields[1];
        const bind$$28 = tree$$2.fields[0];
        return new _tast.DecisionTree(2, "TDBind", bind$$28, mapAccTipsOfDecisionTree(f$$67, rest$$6));
      }

    default:
      {
        const m$$172 = tree$$2.fields[3];
        const edges$$1 = tree$$2.fields[1];
        const e$$69 = tree$$2.fields[0];
        const dflt$$7 = tree$$2.fields[2];
        return new _tast.DecisionTree(0, "TDSwitch", e$$69, (0, _List.map)(function (arg10$0040$$107) {
          return mapAccTipsOfEdge(f$$67, arg10$0040$$107);
        }, edges$$1), (0, _Option.defaultArg)(dflt$$7, null, function (tree$$3) {
          return mapAccTipsOfDecisionTree(f$$67, tree$$3);
        }), m$$172);
      }
  }
}

function mapAccTipsOfEdge(f$$68, _arg1$$110) {
  const x$$277 = _arg1$$110.fields[0];
  const t$$16 = _arg1$$110.fields[1];
  return new _tast.DecisionTreeCase(0, "TCase", x$$277, mapAccTipsOfDecisionTree(f$$68, t$$16));
}

function mapTargetsOfDecisionTree(f$$69, tree$$4) {
  return mapAccTipsOfDecisionTree(function (es$$14, i$$11) {
    return new _tast.DecisionTree(1, "TDSuccess", es$$14, f$$69(i$$11));
  }, tree$$4);
}

function eliminateDeadTargetsFromMatch(tree$$5, targets$$7) {
  const used = (0, _Array.ofList)((0, _lib.ListSet$$$setify)(function f$$70(x$$278, y$$54) {
    return x$$278 === y$$54;
  }, accTargetsOfDecisionTree(tree$$5, (0, _Types.L)())), Int32Array);

  if (used.length < targets$$7.length) {
    used.sort();
    const ntargets = targets$$7.length | 0;
    let tree$0027;
    const remap$$1 = (0, _Array.fill)(new Int32Array(ntargets), 0, ntargets, -1);
    (0, _Array.iterateIndexed)(function (i$$12, tgn) {
      remap$$1[tgn] = i$$12;
    }, used);
    tree$0027 = mapTargetsOfDecisionTree(function f$$71(tgn$$1) {
      if (remap$$1[tgn$$1] === -1) {
        throw new Error("eliminateDeadTargetsFromMatch: failure while eliminating unused targets");
      }

      return remap$$1[tgn$$1] | 0;
    }, tree$$5);
    const targets$0027 = (0, _Array.map)(function (index) {
      return targets$$7[index];
    }, used, Array);
    return [tree$0027, targets$0027];
  } else {
    return [tree$$5, targets$$7];
  }
}

function targetOfSuccessDecisionTree(tree$$7) {
  targetOfSuccessDecisionTree: while (true) {
    switch (tree$$7.tag) {
      case 1:
        {
          const i$$13 = tree$$7.fields[1] | 0;
          return i$$13;
        }

      case 2:
        {
          const t$$17 = tree$$7.fields[1];
          tree$$7 = t$$17;
          continue targetOfSuccessDecisionTree;
        }

      default:
        {
          return null;
        }
    }
  }
}

function decisionTreeHasNonTrivialBindings(tree$$8) {
  switch (tree$$8.tag) {
    case 1:
      {
        return false;
      }

    case 2:
      {
        const t$$18 = tree$$8.fields[1];
        return targetOfSuccessDecisionTree(t$$18) == null;
      }

    default:
      {
        const edges$$2 = tree$$8.fields[1];
        const dflt$$8 = tree$$8.fields[2];

        if ((0, _List.exists)(function predicate$$15(c$$23) {
          return decisionTreeHasNonTrivialBindings((0, _tast.DecisionTreeCase$$get_CaseTree)(c$$23));
        }, edges$$2)) {
          return true;
        } else {
          return (0, _Seq.exists)(decisionTreeHasNonTrivialBindings, (0, _Option.defaultArg)(dflt$$8, [], function ($x$$48) {
            return [$x$$48];
          }));
        }
      }
  }
}

function foldLinearBindingTargetsOfMatch(tree$$10, targets$$8) {
  if (decisionTreeHasNonTrivialBindings(tree$$10)) {
    return [tree$$10, targets$$8];
  } else {
    const branchesToTargets = (0, _Array.fill)(new Array(targets$$8.length), 0, targets$$8.length, (0, _Types.L)());

    const accumulateTipsOfDecisionTree = function accumulateTipsOfDecisionTree(accBinds, tree$$11) {
      switch (tree$$11.tag) {
        case 1:
          {
            const i$$14 = tree$$11.fields[1] | 0;
            const es$$15 = tree$$11.fields[0];
            branchesToTargets[i$$14] = (0, _Types.L)([(0, _List.reverse)(accBinds), es$$15], branchesToTargets[i$$14]);
            break;
          }

        case 2:
          {
            const rest$$7 = tree$$11.fields[1];
            const bind$$29 = tree$$11.fields[0];
            accumulateTipsOfDecisionTree((0, _Types.L)(bind$$29, accBinds), rest$$7);
            break;
          }

        default:
          {
            const edges$$3 = tree$$11.fields[1];
            const dflt$$9 = tree$$11.fields[2];
            (0, _Seq.iterate)(function (edge) {
              accumulateTipsOfDecisionTree(accBinds, (0, _tast.DecisionTreeCase$$get_CaseTree)(edge));
            }, edges$$3);

            if (dflt$$9 != null) {
              const tree$$12 = dflt$$9;
              accumulateTipsOfDecisionTree(accBinds, tree$$12);
            }
          }
      }
    };

    accumulateTipsOfDecisionTree((0, _Types.L)(), tree$$10);

    const isLinearTarget = function isLinearTarget(bs$$2) {
      var $target$$272;

      if (bs$$2.tail != null) {
        if (bs$$2.tail.tail == null) {
          $target$$272 = 0;
        } else {
          $target$$272 = 1;
        }
      } else {
        $target$$272 = 1;
      }

      switch ($target$$272) {
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

    const isLinearTgtIdx = function isLinearTgtIdx(i$$15) {
      return isLinearTarget(branchesToTargets[i$$15]);
    };

    const getLinearTgtIdx = function getLinearTgtIdx(i$$16) {
      return (0, _List.head)(branchesToTargets[i$$16]);
    };

    const hasLinearTgtIdx = branchesToTargets.some(isLinearTarget);

    if (!hasLinearTgtIdx) {
      return [tree$$10, targets$$8];
    } else {
      const rebuildDecisionTree = function rebuildDecisionTree(tree$$13) {
        var i$$17;
        const matchValue$$145 = targetOfSuccessDecisionTree(tree$$13);
        var $target$$273, i$$18;

        if (matchValue$$145 != null) {
          if (i$$17 = matchValue$$145 | 0, isLinearTgtIdx(i$$17)) {
            $target$$273 = 0;
            i$$18 = matchValue$$145;
          } else {
            $target$$273 = 1;
          }
        } else {
          $target$$273 = 1;
        }

        switch ($target$$273) {
          case 0:
            {
              return new _tast.DecisionTree(1, "TDSuccess", (0, _Types.L)(), i$$18);
            }

          case 1:
            {
              switch (tree$$13.tag) {
                case 1:
                  {
                    return tree$$13;
                  }

                case 2:
                  {
                    return tree$$13;
                  }

                default:
                  {
                    const m$$173 = tree$$13.fields[3];
                    const edges$$4 = tree$$13.fields[1];
                    const e$$70 = tree$$13.fields[0];
                    const dflt$$10 = tree$$13.fields[2];
                    return new _tast.DecisionTree(0, "TDSwitch", e$$70, (0, _List.map)(rebuildDecisionTreeEdge, edges$$4), (0, _Option.defaultArg)(dflt$$10, null, rebuildDecisionTree), m$$173);
                  }
              }
            }
        }
      };

      const rebuildDecisionTreeEdge = function rebuildDecisionTreeEdge(_arg1$$111) {
        const x$$279 = _arg1$$111.fields[0];
        const t$$19 = _arg1$$111.fields[1];
        return new _tast.DecisionTreeCase(0, "TCase", x$$279, rebuildDecisionTree(t$$19));
      };

      const tree$0027$$1 = rebuildDecisionTree(tree$$10);
      const targets$0027$$1 = (0, _Array.mapIndexed)(function mapping$$50(i$$19, _arg1$$112) {
        const tg$$1 = _arg1$$112;
        const vs$$48 = tg$$1.fields[0];
        const spTarget$$3 = tg$$1.fields[2];
        const exprTarget = tg$$1.fields[1];

        if (isLinearTgtIdx(i$$19)) {
          const patternInput$$81 = getLinearTgtIdx(i$$19);
          const mTarget = Expr$002Eget_Range(exprTarget);
          const es$$17 = (0, _List.map)(function mapping$$49(arg10$0040$$108) {
            return remarkExpr(mTarget, arg10$0040$$108);
          }, patternInput$$81[1]);
          return new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(), mkLetsBind(mTarget, patternInput$$81[0], mkInvisibleLetsFromBindings(mTarget, vs$$48, es$$17, exprTarget)), spTarget$$3);
        } else {
          return tg$$1;
        }
      }, targets$$8, Array);
      return [tree$0027$$1, targets$0027$$1];
    }
  }
}

function simplifyTrivialMatch(spBind$$6, exprm$$3, matchm$$1, ty$$276, tree$$14, targets$$9) {
  if (tree$$14.tag === 1) {
    const n$$32 = tree$$14.fields[1] | 0;
    const es$$18 = tree$$14.fields[0];

    if (n$$32 >= targets$$9.length) {
      throw new Error("simplifyTrivialMatch: target out of range");
    }

    const patternInput$$82 = targets$$9[n$$32];
    const vs$$49 = patternInput$$82.fields[0];
    const rhs$$1 = patternInput$$82.fields[1];
    const _spTarget = patternInput$$82.fields[2];

    if ((0, _List.length)(vs$$49) !== (0, _List.length)(es$$18)) {
      throw new Error("simplifyTrivialMatch: invalid argument, n = " + (0, _Util.int32ToString)(n$$32) + ", List.length targets = " + (0, _Util.int32ToString)(targets$$9.length));
    }

    return mkInvisibleLetsFromBindings(Expr$002Eget_Range(rhs$$1), vs$$49, es$$18, rhs$$1);
  } else {
    return primMkMatch(spBind$$6, exprm$$3, tree$$14, targets$$9, matchm$$1, ty$$276);
  }
}

function mkAndSimplifyMatch(spBind$$7, exprm$$4, matchm$$2, ty$$277, tree$$15, targets$$10) {
  const targets$$11 = (0, _Array.ofList)(targets$$10, Array);

  if (tree$$15.tag === 1) {
    return simplifyTrivialMatch(spBind$$7, exprm$$4, matchm$$2, ty$$277, tree$$15, targets$$11);
  } else {
    const patternInput$$83 = eliminateDeadTargetsFromMatch(tree$$15, targets$$11);
    const patternInput$$84 = foldLinearBindingTargetsOfMatch(patternInput$$83[0], patternInput$$83[1]);
    return simplifyTrivialMatch(spBind$$7, exprm$$4, matchm$$2, ty$$277, patternInput$$84[0], patternInput$$84[1]);
  }
}

const Mutates = (0, _Types.declare)(function Mutates(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Mutates = Mutates;
const DefensiveCopyWarning = (0, _Types.declare)(function DefensiveCopyWarning(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.DefensiveCopyWarning = DefensiveCopyWarning;

function isRecdOrStructTyconRefAssumedImmutable(g$$325, tcref$$92) {
  if (((0, _tast.EntityRef$$get_CanDeref)(tcref$$92) ? !isRecdOrUnionOrStructTyconRefDefinitelyMutable(tcref$$92) : false) ? true : tyconRefEq(g$$325, tcref$$92, (0, _TcGlobals.TcGlobals$$get_decimal_tcr)(g$$325))) {
    return true;
  } else {
    return tyconRefEq(g$$325, tcref$$92, (0, _TcGlobals.TcGlobals$$get_date_tcr)(g$$325));
  }
}

function isRecdOrStructTyconRefReadOnly(g$$326, m$$174, tcref$$93) {
  if ((0, _tast.EntityRef$$get_CanDeref)(tcref$$93)) {
    const matchValue$$146 = (0, _tast.EntityRef$$get_TryIsReadOnly)(tcref$$93);

    if (matchValue$$146 == null) {
      const isImmutable = isRecdOrStructTyconRefAssumedImmutable(g$$326, tcref$$93);
      const hasAttrib = TyconRefHasAttribute(g$$326, m$$174, (0, _TcGlobals.TcGlobals$$get_attrib_IsReadOnlyAttribute)(g$$326), tcref$$93);
      const res$$12 = isImmutable ? true : hasAttrib;
      (0, _tast.EntityRef$$SetIsReadOnly$$Z1FBCCD16)(tcref$$93, res$$12);
      return res$$12;
    } else {
      const res$$11 = matchValue$$146;
      return res$$11;
    }
  } else {
    return false;
  }
}

function isRecdOrStructTyReadOnly(g$$327, m$$175, ty$$278) {
  const matchValue$$147 = tryDestAppTy(g$$327, ty$$278);

  if (matchValue$$147 != null) {
    const tcref$$94 = matchValue$$147;
    return isRecdOrStructTyconRefReadOnly(g$$327, m$$175, tcref$$94);
  } else {
    return false;
  }
}

function CanTakeAddressOf(g$$328, m$$176, ty$$279, mut$$1) {
  switch (mut$$1.tag) {
    case 2:
      {
        return isRecdOrStructTyReadOnly(g$$328, m$$176, ty$$279);
      }

    case 1:
      {
        return false;
      }

    case 0:
      {
        return true;
      }

    default:
      {
        return true;
      }
  }
}

function CanTakeAddressOfImmutableVal(g$$329, m$$177, vref$$46, mut$$2) {
  if (!(0, _tast.ValRef$$get_IsMutable)(vref$$46) ? !(0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$46) : false) {
    return CanTakeAddressOf(g$$329, m$$177, (0, _tast.ValRef$$get_Type)(vref$$46), mut$$2);
  } else {
    return false;
  }
}

function MustTakeAddressOfVal(g$$330, vref$$47) {
  if ((0, _tast.ValRef$$get_IsMutable)(vref$$47)) {
    return (0, _tast.valRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$330), vref$$47);
  } else {
    return false;
  }
}

function MustTakeAddressOfByrefGet(g$$331, vref$$48) {
  if (isByrefTy(g$$331, (0, _tast.ValRef$$get_Type)(vref$$48))) {
    return !isInByrefTy(g$$331, (0, _tast.ValRef$$get_Type)(vref$$48));
  } else {
    return false;
  }
}

function CanTakeAddressOfByrefGet(g$$332, vref$$49, mut$$3) {
  if (isInByrefTy(g$$332, (0, _tast.ValRef$$get_Type)(vref$$49))) {
    return CanTakeAddressOf(g$$332, (0, _tast.ValRef$$get_Range)(vref$$49), destByrefTy(g$$332, (0, _tast.ValRef$$get_Type)(vref$$49)), mut$$3);
  } else {
    return false;
  }
}

function MustTakeAddressOfRecdField(rfref$$12) {
  if (!(0, _tast.RecdField$$get_IsStatic)(rfref$$12)) {
    return (0, _tast.RecdField$$get_IsMutable)(rfref$$12);
  } else {
    return false;
  }
}

function MustTakeAddressOfRecdFieldRef(rfref$$13) {
  return MustTakeAddressOfRecdField((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$13));
}

function CanTakeAddressOfRecdFieldRef(g$$333, m$$178, rfref$$14, tinst$$58, mut$$4) {
  if ((0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$333), (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$14)) ? !(0, _tast.RecdField$$get_IsMutable)((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$14)) : false) {
    return CanTakeAddressOf(g$$333, m$$178, actualTyOfRecdFieldRef(rfref$$14, tinst$$58), mut$$4);
  } else {
    return false;
  }
}

function CanTakeAddressOfUnionFieldRef(g$$334, m$$179, uref$$2, cidx$$2, tinst$$59, mut$$5) {
  if ((0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$334), (0, _tast.UnionCaseRef$$get_TyconRef)(uref$$2))) {
    const rfref$$15 = (0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(uref$$2, cidx$$2);

    if (!(0, _tast.RecdField$$get_IsMutable)(rfref$$15)) {
      return CanTakeAddressOf(g$$334, m$$179, actualTyOfUnionFieldRef(uref$$2, cidx$$2, tinst$$59), mut$$5);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function mkExprAddrOfExprAux(g$$335, mustTakeAddress, useReadonlyForGenericArrayAddress, mut$$6, expr$$23, addrExprVal, m$$180) {
  var vref$$60, m$$195, vref$$58, m$$193, vref2$$1, vref$$56, e$$71, vref$$54, elemTy$$3, args$$24, aexpr$$3, vf$$2, nexpr, elemTy$$1, aexpr$$1, uref$$3, tinst$$64, objExpr$$2, m$$189, cidx$$3, tinst$$62, rfref$$18, m$$187, tinst$$60, rfref$$16, objExpr, m$$185, vref$$52, m$$183, vref$$50, m$$181;

  if (mustTakeAddress) {
    var $target$$274, m$$182, vref$$51;

    if (expr$$23.tag === 11) {
      if (expr$$23.fields[0].tag === 30) {
        if (expr$$23.fields[0].fields[0].tag === 1) {
          if (expr$$23.fields[2].tail == null) {
            if (vref$$50 = expr$$23.fields[0].fields[1], (m$$181 = expr$$23.fields[3], MustTakeAddressOfByrefGet(g$$335, vref$$50) ? true : CanTakeAddressOfByrefGet(g$$335, vref$$50, mut$$6))) {
              $target$$274 = 0;
              m$$182 = expr$$23.fields[3];
              vref$$51 = expr$$23.fields[0].fields[1];
            } else {
              $target$$274 = 1;
            }
          } else {
            $target$$274 = 1;
          }
        } else {
          $target$$274 = 1;
        }
      } else {
        $target$$274 = 1;
      }
    } else {
      $target$$274 = 1;
    }

    switch ($target$$274) {
      case 0:
        {
          const readonly$$17 = !MustTakeAddressOfByrefGet(g$$335, vref$$51);
          const writeonly = isOutByrefTy(g$$335, (0, _tast.ValRef$$get_Type)(vref$$51));
          return [null, exprForValRef(m$$182, vref$$51), readonly$$17, writeonly];
        }

      case 1:
        {
          var $target$$275, m$$184, vref$$53;

          if (expr$$23.tag === 1) {
            if (vref$$52 = expr$$23.fields[0], (m$$183 = expr$$23.fields[2], MustTakeAddressOfVal(g$$335, vref$$52) ? true : CanTakeAddressOfImmutableVal(g$$335, m$$183, vref$$52, mut$$6))) {
              $target$$275 = 0;
              m$$184 = expr$$23.fields[2];
              vref$$53 = expr$$23.fields[0];
            } else {
              $target$$275 = 1;
            }
          } else {
            $target$$275 = 1;
          }

          switch ($target$$275) {
            case 0:
              {
                const readonly$$18 = !MustTakeAddressOfVal(g$$335, vref$$53);
                const writeonly$$1 = false;
                return [null, mkValAddr(m$$184, readonly$$18, vref$$53), readonly$$18, writeonly$$1];
              }

            case 1:
              {
                var $target$$276, m$$186, objExpr$$1, rfref$$17, tinst$$61;

                if (expr$$23.tag === 11) {
                  if (expr$$23.fields[0].tag === 12) {
                    if (expr$$23.fields[2].tail != null) {
                      if (expr$$23.fields[2].tail.tail == null) {
                        if (tinst$$60 = expr$$23.fields[1], (rfref$$16 = expr$$23.fields[0].fields[0], (objExpr = expr$$23.fields[2].head, (m$$185 = expr$$23.fields[3], MustTakeAddressOfRecdFieldRef(rfref$$16) ? true : CanTakeAddressOfRecdFieldRef(g$$335, m$$185, rfref$$16, tinst$$60, mut$$6))))) {
                          $target$$276 = 0;
                          m$$186 = expr$$23.fields[3];
                          objExpr$$1 = expr$$23.fields[2].head;
                          rfref$$17 = expr$$23.fields[0].fields[0];
                          tinst$$61 = expr$$23.fields[1];
                        } else {
                          $target$$276 = 1;
                        }
                      } else {
                        $target$$276 = 1;
                      }
                    } else {
                      $target$$276 = 1;
                    }
                  } else {
                    $target$$276 = 1;
                  }
                } else {
                  $target$$276 = 1;
                }

                switch ($target$$276) {
                  case 0:
                    {
                      const objTy = tyOfExpr(g$$335, objExpr$$1);
                      const takeAddrOfObjExpr = isStructTy(g$$335, objTy);
                      const patternInput$$85 = mkExprAddrOfExprAux(g$$335, takeAddrOfObjExpr, false, mut$$6, objExpr$$1, null, m$$186);
                      const readonly$$20 = (patternInput$$85[2] ? true : isInByrefTy(g$$335, objTy)) ? true : !MustTakeAddressOfRecdFieldRef(rfref$$17);
                      const writeonly$$3 = patternInput$$85[3] ? true : isOutByrefTy(g$$335, objTy);
                      return [patternInput$$85[0], mkRecdFieldGetAddrViaExprAddr(readonly$$20, patternInput$$85[1], rfref$$17, tinst$$61, m$$186), readonly$$20, writeonly$$3];
                    }

                  case 1:
                    {
                      var $target$$277, m$$188, rfref$$19, tinst$$63;

                      if (expr$$23.tag === 11) {
                        if (expr$$23.fields[0].tag === 12) {
                          if (expr$$23.fields[2].tail == null) {
                            if (tinst$$62 = expr$$23.fields[1], (rfref$$18 = expr$$23.fields[0].fields[0], (m$$187 = expr$$23.fields[3], MustTakeAddressOfRecdFieldRef(rfref$$18) ? true : CanTakeAddressOfRecdFieldRef(g$$335, m$$187, rfref$$18, tinst$$62, mut$$6)))) {
                              $target$$277 = 0;
                              m$$188 = expr$$23.fields[3];
                              rfref$$19 = expr$$23.fields[0].fields[0];
                              tinst$$63 = expr$$23.fields[1];
                            } else {
                              $target$$277 = 1;
                            }
                          } else {
                            $target$$277 = 1;
                          }
                        } else {
                          $target$$277 = 1;
                        }
                      } else {
                        $target$$277 = 1;
                      }

                      switch ($target$$277) {
                        case 0:
                          {
                            const readonly$$21 = !MustTakeAddressOfRecdFieldRef(rfref$$19);
                            const writeonly$$4 = false;
                            return [null, mkStaticRecdFieldGetAddr(readonly$$21, rfref$$19, tinst$$63, m$$188), readonly$$21, writeonly$$4];
                          }

                        case 1:
                          {
                            var $target$$278, cidx$$4, m$$190, objExpr$$3, tinst$$65, uref$$4;

                            if (expr$$23.tag === 11) {
                              if (expr$$23.fields[0].tag === 16) {
                                if (expr$$23.fields[2].tail != null) {
                                  if (expr$$23.fields[2].tail.tail == null) {
                                    if (uref$$3 = expr$$23.fields[0].fields[0], (tinst$$64 = expr$$23.fields[1], (objExpr$$2 = expr$$23.fields[2].head, (m$$189 = expr$$23.fields[3], (cidx$$3 = expr$$23.fields[0].fields[1] | 0, MustTakeAddressOfRecdField((0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(uref$$3, cidx$$3)) ? true : CanTakeAddressOfUnionFieldRef(g$$335, m$$189, uref$$3, cidx$$3, tinst$$64, mut$$6)))))) {
                                      $target$$278 = 0;
                                      cidx$$4 = expr$$23.fields[0].fields[1];
                                      m$$190 = expr$$23.fields[3];
                                      objExpr$$3 = expr$$23.fields[2].head;
                                      tinst$$65 = expr$$23.fields[1];
                                      uref$$4 = expr$$23.fields[0].fields[0];
                                    } else {
                                      $target$$278 = 1;
                                    }
                                  } else {
                                    $target$$278 = 1;
                                  }
                                } else {
                                  $target$$278 = 1;
                                }
                              } else {
                                $target$$278 = 1;
                              }
                            } else {
                              $target$$278 = 1;
                            }

                            switch ($target$$278) {
                              case 0:
                                {
                                  const objTy$$1 = tyOfExpr(g$$335, objExpr$$3);
                                  const takeAddrOfObjExpr$$1 = isStructTy(g$$335, objTy$$1);
                                  const patternInput$$86 = mkExprAddrOfExprAux(g$$335, takeAddrOfObjExpr$$1, false, mut$$6, objExpr$$3, null, m$$190);
                                  const readonly$$23 = (patternInput$$86[2] ? true : isInByrefTy(g$$335, objTy$$1)) ? true : !MustTakeAddressOfRecdField((0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(uref$$4, cidx$$4));
                                  const writeonly$$6 = patternInput$$86[3] ? true : isOutByrefTy(g$$335, objTy$$1);
                                  return [patternInput$$86[0], mkUnionCaseFieldGetAddrProvenViaExprAddr(readonly$$23, patternInput$$86[1], uref$$4, tinst$$65, cidx$$4, m$$190), readonly$$23, writeonly$$6];
                                }

                              case 1:
                                {
                                  var $target$$279, _vol, fspec$$2, m$$191, tinst$$66, ty2$$8, _align, _vol$$1, fspec$$3, m$$192, objExpr$$4, tinst$$67, ty2$$9, aexpr$$2, elemTy$$2, nexpr$$1, vf$$3;

                                  if (expr$$23.tag === 11) {
                                    if (expr$$23.fields[0].tag === 22) {
                                      if (expr$$23.fields[0].fields[0].tail != null) {
                                        if (expr$$23.fields[0].fields[0].head.tag === 59) {
                                          if (expr$$23.fields[0].fields[0].tail.tail == null) {
                                            if (expr$$23.fields[0].fields[1].tail != null) {
                                              if (expr$$23.fields[0].fields[1].tail.tail == null) {
                                                if (expr$$23.fields[2].tail == null) {
                                                  $target$$279 = 0;
                                                  _vol = expr$$23.fields[0].fields[0].head.fields[0];
                                                  fspec$$2 = expr$$23.fields[0].fields[0].head.fields[1];
                                                  m$$191 = expr$$23.fields[3];
                                                  tinst$$66 = expr$$23.fields[1];
                                                  ty2$$8 = expr$$23.fields[0].fields[1].head;
                                                } else {
                                                  $target$$279 = 3;
                                                }
                                              } else {
                                                $target$$279 = 3;
                                              }
                                            } else {
                                              $target$$279 = 3;
                                            }
                                          } else {
                                            $target$$279 = 3;
                                          }
                                        } else if (expr$$23.fields[0].fields[0].head.tag === 60) {
                                          if (expr$$23.fields[0].fields[0].tail.tail == null) {
                                            if (expr$$23.fields[0].fields[1].tail != null) {
                                              if (expr$$23.fields[0].fields[1].tail.tail == null) {
                                                if (expr$$23.fields[2].tail != null) {
                                                  if (expr$$23.fields[2].tail.tail == null) {
                                                    $target$$279 = 1;
                                                    _align = expr$$23.fields[0].fields[0].head.fields[0];
                                                    _vol$$1 = expr$$23.fields[0].fields[0].head.fields[1];
                                                    fspec$$3 = expr$$23.fields[0].fields[0].head.fields[2];
                                                    m$$192 = expr$$23.fields[3];
                                                    objExpr$$4 = expr$$23.fields[2].head;
                                                    tinst$$67 = expr$$23.fields[1];
                                                    ty2$$9 = expr$$23.fields[0].fields[1].head;
                                                  } else {
                                                    $target$$279 = 3;
                                                  }
                                                } else {
                                                  $target$$279 = 3;
                                                }
                                              } else {
                                                $target$$279 = 3;
                                              }
                                            } else {
                                              $target$$279 = 3;
                                            }
                                          } else {
                                            $target$$279 = 3;
                                          }
                                        } else {
                                          $target$$279 = 3;
                                        }
                                      } else {
                                        $target$$279 = 3;
                                      }
                                    } else {
                                      $target$$279 = 3;
                                    }
                                  } else if (expr$$23.tag === 5) {
                                    if (expr$$23.fields[0].tag === 1) {
                                      if (expr$$23.fields[2].tail != null) {
                                        if (expr$$23.fields[2].tail.tail == null) {
                                          if (expr$$23.fields[3].tail != null) {
                                            if (expr$$23.fields[3].tail.tail != null) {
                                              if (expr$$23.fields[3].tail.tail.tail == null) {
                                                if (vf$$2 = expr$$23.fields[0].fields[0], (nexpr = expr$$23.fields[3].tail.head, (elemTy$$1 = expr$$23.fields[2].head, (aexpr$$1 = expr$$23.fields[3].head, valRefEq(g$$335, vf$$2, (0, _TcGlobals.TcGlobals$$get_array_get_vref)(g$$335)))))) {
                                                  $target$$279 = 2;
                                                  aexpr$$2 = expr$$23.fields[3].head;
                                                  elemTy$$2 = expr$$23.fields[2].head;
                                                  nexpr$$1 = expr$$23.fields[3].tail.head;
                                                  vf$$3 = expr$$23.fields[0].fields[0];
                                                } else {
                                                  $target$$279 = 3;
                                                }
                                              } else {
                                                $target$$279 = 3;
                                              }
                                            } else {
                                              $target$$279 = 3;
                                            }
                                          } else {
                                            $target$$279 = 3;
                                          }
                                        } else {
                                          $target$$279 = 3;
                                        }
                                      } else {
                                        $target$$279 = 3;
                                      }
                                    } else {
                                      $target$$279 = 3;
                                    }
                                  } else {
                                    $target$$279 = 3;
                                  }

                                  switch ($target$$279) {
                                    case 0:
                                      {
                                        const readonly$$24 = false;
                                        const writeonly$$7 = false;
                                        return [null, new _tast.Expr(11, "Op", new _tast.TOp(22, "ILAsm", (0, _Types.L)(new _il.ILInstr(61, "I_ldsflda", fspec$$2), (0, _Types.L)()), (0, _Types.L)(mkByrefTy(g$$335, ty2$$8), (0, _Types.L)())), tinst$$66, (0, _Types.L)(), m$$191), readonly$$24, writeonly$$7];
                                      }

                                    case 1:
                                      {
                                        const objTy$$2 = tyOfExpr(g$$335, objExpr$$4);
                                        const takeAddrOfObjExpr$$2 = isStructTy(g$$335, objTy$$2);
                                        const patternInput$$87 = mkExprAddrOfExprAux(g$$335, takeAddrOfObjExpr$$2, false, mut$$6, objExpr$$4, null, m$$192);
                                        const readonly$$26 = patternInput$$87[2] ? true : isInByrefTy(g$$335, objTy$$2);
                                        const writeonly$$9 = patternInput$$87[3] ? true : isOutByrefTy(g$$335, objTy$$2);
                                        return [patternInput$$87[0], new _tast.Expr(11, "Op", new _tast.TOp(22, "ILAsm", (0, _Types.L)(new _il.ILInstr(62, "I_ldflda", fspec$$3), (0, _Types.L)()), (0, _Types.L)(mkByrefTyWithFlag(g$$335, readonly$$26, ty2$$9), (0, _Types.L)())), tinst$$67, (0, _Types.L)(patternInput$$87[1], (0, _Types.L)()), m$$192), readonly$$26, writeonly$$9];
                                      }

                                    case 2:
                                      {
                                        const readonly$$27 = false;
                                        const writeonly$$10 = false;
                                        const shape$$1 = (0, _il.ILArrayShape$$$get_SingleDimensional)();
                                        const ilInstrReadOnlyAnnotation$$1 = (isTyparTy(g$$335, elemTy$$2) ? useReadonlyForGenericArrayAddress : false) ? new _il.ILReadonly(0, "ReadonlyAddress") : new _il.ILReadonly(1, "NormalAddress");
                                        let isNativePtr$$1;

                                        if (addrExprVal != null) {
                                          const vf$$4 = addrExprVal;
                                          isNativePtr$$1 = valRefEq(g$$335, vf$$4, (0, _TcGlobals.TcGlobals$$get_addrof2_vref)(g$$335));
                                        } else {
                                          isNativePtr$$1 = false;
                                        }

                                        return [null, mkArrayElemAddress(g$$335, readonly$$27, ilInstrReadOnlyAnnotation$$1, isNativePtr$$1, shape$$1, elemTy$$2, (0, _Types.L)(aexpr$$2, (0, _Types.L)(nexpr$$1, (0, _Types.L)())), m$$180), readonly$$27, writeonly$$10];
                                      }

                                    case 3:
                                      {
                                        var $target$$280, aexpr$$4, args$$25, elemTy$$4, vref$$55;

                                        if (expr$$23.tag === 5) {
                                          if (expr$$23.fields[0].tag === 1) {
                                            if (expr$$23.fields[2].tail != null) {
                                              if (expr$$23.fields[2].tail.tail == null) {
                                                if (expr$$23.fields[3].tail != null) {
                                                  if (vref$$54 = expr$$23.fields[0].fields[0], (elemTy$$3 = expr$$23.fields[2].head, (args$$24 = expr$$23.fields[3].tail, (aexpr$$3 = expr$$23.fields[3].head, (valRefEq(g$$335, vref$$54, (0, _TcGlobals.TcGlobals$$get_array2D_get_vref)(g$$335)) ? true : valRefEq(g$$335, vref$$54, (0, _TcGlobals.TcGlobals$$get_array3D_get_vref)(g$$335))) ? true : valRefEq(g$$335, vref$$54, (0, _TcGlobals.TcGlobals$$get_array4D_get_vref)(g$$335)))))) {
                                                    $target$$280 = 0;
                                                    aexpr$$4 = expr$$23.fields[3].head;
                                                    args$$25 = expr$$23.fields[3].tail;
                                                    elemTy$$4 = expr$$23.fields[2].head;
                                                    vref$$55 = expr$$23.fields[0].fields[0];
                                                  } else {
                                                    $target$$280 = 1;
                                                  }
                                                } else {
                                                  $target$$280 = 1;
                                                }
                                              } else {
                                                $target$$280 = 1;
                                              }
                                            } else {
                                              $target$$280 = 1;
                                            }
                                          } else {
                                            $target$$280 = 1;
                                          }
                                        } else {
                                          $target$$280 = 1;
                                        }

                                        switch ($target$$280) {
                                          case 0:
                                            {
                                              const readonly$$28 = false;
                                              const writeonly$$11 = false;
                                              const shape$$2 = (0, _il.ILArrayShape$$$FromRank$$Z524259A4)((0, _List.length)(args$$25));
                                              const ilInstrReadOnlyAnnotation$$2 = (isTyparTy(g$$335, elemTy$$4) ? useReadonlyForGenericArrayAddress : false) ? new _il.ILReadonly(0, "ReadonlyAddress") : new _il.ILReadonly(1, "NormalAddress");
                                              let isNativePtr$$2;

                                              if (addrExprVal != null) {
                                                const vf$$5 = addrExprVal;
                                                isNativePtr$$2 = valRefEq(g$$335, vf$$5, (0, _TcGlobals.TcGlobals$$get_addrof2_vref)(g$$335));
                                              } else {
                                                isNativePtr$$2 = false;
                                              }

                                              return [null, mkArrayElemAddress(g$$335, readonly$$28, ilInstrReadOnlyAnnotation$$2, isNativePtr$$2, shape$$2, elemTy$$4, (0, _Types.L)(aexpr$$4, args$$25), m$$180), readonly$$28, writeonly$$11];
                                            }

                                          case 1:
                                            {
                                              var $target$$281, e$$72, vref$$57, vref2$$2;

                                              if (expr$$23.tag === 7) {
                                                if (expr$$23.fields[1].tag === 11) {
                                                  if (expr$$23.fields[1].fields[0].tag === 30) {
                                                    if (expr$$23.fields[1].fields[0].fields[0].tag === 1) {
                                                      if (vref2$$1 = expr$$23.fields[1].fields[0].fields[1], (vref$$56 = expr$$23.fields[0].fields[0], (e$$71 = expr$$23.fields[0].fields[1], valRefEq(g$$335, (0, _tast.mkLocalValRef)(vref$$56), vref2$$1) ? MustTakeAddressOfByrefGet(g$$335, vref2$$1) ? true : CanTakeAddressOfByrefGet(g$$335, vref2$$1, mut$$6) : false))) {
                                                        $target$$281 = 0;
                                                        e$$72 = expr$$23.fields[0].fields[1];
                                                        vref$$57 = expr$$23.fields[0].fields[0];
                                                        vref2$$2 = expr$$23.fields[1].fields[0].fields[1];
                                                      } else {
                                                        $target$$281 = 1;
                                                      }
                                                    } else {
                                                      $target$$281 = 1;
                                                    }
                                                  } else {
                                                    $target$$281 = 1;
                                                  }
                                                } else {
                                                  $target$$281 = 1;
                                                }
                                              } else {
                                                $target$$281 = 1;
                                              }

                                              switch ($target$$281) {
                                                case 0:
                                                  {
                                                    const ty$$280 = tyOfExpr(g$$335, e$$72);
                                                    const readonly$$29 = isInByrefTy(g$$335, ty$$280);
                                                    const writeonly$$12 = isOutByrefTy(g$$335, ty$$280);
                                                    return [null, e$$72, readonly$$29, writeonly$$12];
                                                  }

                                                case 1:
                                                  {
                                                    var $target$$282, m$$194, vref$$59;

                                                    if (expr$$23.tag === 1) {
                                                      if (vref$$58 = expr$$23.fields[0], (m$$193 = expr$$23.fields[2], isByrefTy(g$$335, (0, _tast.ValRef$$get_Type)(vref$$58)))) {
                                                        $target$$282 = 0;
                                                        m$$194 = expr$$23.fields[2];
                                                        vref$$59 = expr$$23.fields[0];
                                                      } else {
                                                        $target$$282 = 1;
                                                      }
                                                    } else {
                                                      $target$$282 = 1;
                                                    }

                                                    switch ($target$$282) {
                                                      case 0:
                                                        {
                                                          return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastUnexpectedByRef)(), m$$194));
                                                        }

                                                      case 1:
                                                        {
                                                          var $target$$283, m$$196, vref$$61;

                                                          if (expr$$23.tag === 1) {
                                                            if (vref$$60 = expr$$23.fields[0], (m$$195 = expr$$23.fields[2], ((0, _Util.equals)(mut$$6, new Mutates(1, "DefinitelyMutates")) ? true : (0, _Util.equals)(mut$$6, new Mutates(0, "AddressOfOp"))) ? (0, _tast.ValRef$$get_IsMutable)(vref$$60) : false)) {
                                                              $target$$283 = 0;
                                                              m$$196 = expr$$23.fields[2];
                                                              vref$$61 = expr$$23.fields[0];
                                                            } else {
                                                              $target$$283 = 1;
                                                            }
                                                          } else {
                                                            $target$$283 = 1;
                                                          }

                                                          switch ($target$$283) {
                                                            case 0:
                                                              {
                                                                return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastInvalidAddressOfMutableAcrossAssemblyBoundary)(), m$$196));
                                                              }

                                                            case 1:
                                                              {
                                                                var $target$$284;

                                                                if (expr$$23.tag === 1) {
                                                                  if ((0, _Util.equals)(mut$$6, new Mutates(0, "AddressOfOp"))) {
                                                                    $target$$284 = 0;
                                                                  } else {
                                                                    $target$$284 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$284 = 1;
                                                                }

                                                                switch ($target$$284) {
                                                                  case 0:
                                                                    {
                                                                      return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastValueMustBeLocal)(), m$$180));
                                                                    }

                                                                  case 1:
                                                                    {
                                                                      var $target$$285;

                                                                      if (expr$$23.tag === 1) {
                                                                        if ((0, _Util.equals)(mut$$6, new Mutates(1, "DefinitelyMutates"))) {
                                                                          $target$$285 = 0;
                                                                        } else {
                                                                          $target$$285 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$285 = 1;
                                                                      }

                                                                      switch ($target$$285) {
                                                                        case 0:
                                                                          {
                                                                            return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastValueMustBeMutable)(), m$$180));
                                                                          }

                                                                        case 1:
                                                                          {
                                                                            const ty$$281 = tyOfExpr(g$$335, expr$$23);

                                                                            if (isStructTy(g$$335, ty$$281)) {
                                                                              switch (mut$$6.tag) {
                                                                                case 0:
                                                                                  {
                                                                                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastCantTakeAddressOfExpression)(), m$$180));
                                                                                    break;
                                                                                  }

                                                                                case 1:
                                                                                  {
                                                                                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastInvalidMutationOfConstant)(), m$$180));
                                                                                    break;
                                                                                  }

                                                                                case 2:
                                                                                  {
                                                                                    (0, _ErrorLogger.warning)(new DefensiveCopyWarning((0, _FSComp.SR$$$tastValueHasBeenCopied)(), m$$180));
                                                                                    break;
                                                                                  }

                                                                                default:
                                                                                  {}
                                                                              }
                                                                            }

                                                                            const patternInput$$88 = mut$$6.tag === 3 ? mkCompGenLocal(m$$180, "copyOfStruct", ty$$281) : mkMutableCompGenLocal(m$$180, "copyOfStruct", ty$$281);
                                                                            const readonly$$30 = true;
                                                                            const writeonly$$13 = false;
                                                                            return [[patternInput$$88[0], expr$$23], mkValAddr(m$$180, readonly$$30, (0, _tast.mkLocalValRef)(patternInput$$88[0])), readonly$$30, writeonly$$13];
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
              }
          }
        }
    }
  } else {
    return [null, expr$$23, false, false];
  }
}

function mkExprAddrOfExpr(g$$336, mustTakeAddress$$1, useReadonlyForGenericArrayAddress$$1, mut$$7, e$$73, addrExprVal$$1, m$$197) {
  const patternInput$$89 = mkExprAddrOfExprAux(g$$336, mustTakeAddress$$1, useReadonlyForGenericArrayAddress$$1, mut$$7, e$$73, addrExprVal$$1, m$$197);

  if (patternInput$$89[0] != null) {
    const tmp$$3 = patternInput$$89[0][0];
    const rval = patternInput$$89[0][1];
    return [function (x$$281) {
      return mkCompGenLet(m$$197, tmp$$3, rval, x$$281);
    }, patternInput$$89[1], patternInput$$89[2], patternInput$$89[3]];
  } else {
    return [function (x$$280) {
      return x$$280;
    }, patternInput$$89[1], patternInput$$89[2], patternInput$$89[3]];
  }
}

function mkTupleFieldGet(g$$337, tupInfo$$22, e$$74, tinst$$68, i$$20, m$$198) {
  const patternInput$$90 = mkExprAddrOfExpr(g$$337, evalTupInfoIsStruct(tupInfo$$22), false, new Mutates(3, "NeverMutates"), e$$74, null, m$$198);
  return patternInput$$90[0](mkTupleFieldGetViaExprAddr(tupInfo$$22, patternInput$$90[1], tinst$$68, i$$20, m$$198));
}

function mkRecdFieldGet(g$$338, e$$75, fref$$10, tinst$$69, m$$199) {
  const patternInput$$91 = mkExprAddrOfExpr(g$$338, (0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.RecdFieldRef$$get_Tycon)(fref$$10)), false, new Mutates(3, "NeverMutates"), e$$75, null, m$$199);
  return patternInput$$91[0](mkRecdFieldGetViaExprAddr(patternInput$$91[1], fref$$10, tinst$$69, m$$199));
}

function mkUnionCaseFieldGetUnproven(g$$339, e$$76, cref$$8, tinst$$70, j$$10, m$$200) {
  const patternInput$$92 = mkExprAddrOfExpr(g$$339, (0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.UnionCaseRef$$get_Tycon)(cref$$8)), false, new Mutates(3, "NeverMutates"), e$$76, null, m$$200);
  return patternInput$$92[0](mkUnionCaseFieldGetUnprovenViaExprAddr(patternInput$$92[1], cref$$8, tinst$$70, j$$10, m$$200));
}

function mkArray(argty$$1, args$$26, m$$201) {
  return new _tast.Expr(11, "Op", new _tast.TOp(3, "Array"), (0, _Types.L)(argty$$1, (0, _Types.L)()), args$$26, m$$201);
}

function IterateRecursiveFixups(g$$340, selfv, rvs, access$$1, set, exprToFix) {
  var tupInfo$$23, m$$202, argtys$$11, args$$27;
  const exprToFix$$1 = stripExpr(exprToFix);
  var $target$$292, args$$28, argtys$$12, m$$203, tupInfo$$24;

  if (exprToFix$$1.tag === 0) {
    $target$$292 = 0;
  } else if (exprToFix$$1.tag === 11) {
    if (exprToFix$$1.fields[0].tag === 2) {
      if (tupInfo$$23 = exprToFix$$1.fields[0].fields[0], (m$$202 = exprToFix$$1.fields[3], (argtys$$11 = exprToFix$$1.fields[1], (args$$27 = exprToFix$$1.fields[2], !evalTupInfoIsStruct(tupInfo$$23))))) {
        $target$$292 = 1;
        args$$28 = exprToFix$$1.fields[2];
        argtys$$12 = exprToFix$$1.fields[1];
        m$$203 = exprToFix$$1.fields[3];
        tupInfo$$24 = exprToFix$$1.fields[0].fields[0];
      } else {
        $target$$292 = 2;
      }
    } else {
      $target$$292 = 2;
    }
  } else {
    $target$$292 = 2;
  }

  switch ($target$$292) {
    case 1:
      {
        (0, _List.iterateIndexed)(function action$$4(n$$33, arg40$0040$$13) {
          IterateRecursiveFixups(g$$340, null, rvs, mkTupleFieldGet(g$$340, tupInfo$$24, access$$1, argtys$$12, n$$33, m$$203), function arg31$0040(e$$77) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastRecursiveValuesMayNotBeInConstructionOfTuple)(), m$$203));
            return e$$77;
          }, arg40$0040$$13);
        }, args$$28);
        break;
      }

    case 2:
      {
        var $target$$293, args$$29, c$$24, m$$204, tinst$$71, args$$30, m$$205, tcref$$96, tinst$$72;

        if (exprToFix$$1.tag === 11) {
          if (exprToFix$$1.fields[0].tag === 0) {
            $target$$293 = 0;
            args$$29 = exprToFix$$1.fields[2];
            c$$24 = exprToFix$$1.fields[0].fields[0];
            m$$204 = exprToFix$$1.fields[3];
            tinst$$71 = exprToFix$$1.fields[1];
          } else if (exprToFix$$1.fields[0].tag === 10) {
            $target$$293 = 1;
            args$$30 = exprToFix$$1.fields[2];
            m$$205 = exprToFix$$1.fields[3];
            tcref$$96 = exprToFix$$1.fields[0].fields[1];
            tinst$$72 = exprToFix$$1.fields[1];
          } else {
            $target$$293 = 3;
          }
        } else if (exprToFix$$1.tag === 1) {
          $target$$293 = 2;
        } else if (exprToFix$$1.tag === 3) {
          $target$$293 = 2;
        } else if (exprToFix$$1.tag === 8) {
          $target$$293 = 2;
        } else if (exprToFix$$1.tag === 13) {
          $target$$293 = 2;
        } else if (exprToFix$$1.tag === 4) {
          $target$$293 = 2;
        } else {
          $target$$293 = 3;
        }

        switch ($target$$293) {
          case 0:
            {
              (0, _List.iterateIndexed)(function action$$5(n$$34, arg40$0040$$14) {
                IterateRecursiveFixups(g$$340, null, rvs, mkUnionCaseFieldGetUnprovenViaExprAddr(access$$1, c$$24, tinst$$71, n$$34, m$$204), function arg31$0040$$1(e$$78) {
                  const tcref$$95 = (0, _tast.UnionCaseRef$$get_TyconRef)(c$$24);

                  if (!(0, _tast.RecdField$$get_IsMutable)((0, _tast.UnionCaseRef$$FieldByIndex$$Z524259A4)(c$$24, n$$34)) ? !(0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$340), tcref$$95) : false) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastRecursiveValuesMayNotAppearInConstructionOfType$$Z721C83C5)((0, _tast.EntityRef$$get_LogicalName)(tcref$$95)), m$$204));
                  }

                  return mkUnionCaseFieldSet(access$$1, c$$24, tinst$$71, n$$34, e$$78, m$$204);
                }, arg40$0040$$14);
              }, args$$29);
              break;
            }

          case 1:
            {
              (0, _List.iterate2)(function action$$6(fref$$11, arg$$6) {
                const fspec$$4 = (0, _tast.RecdFieldRef$$get_RecdField)(fref$$11);
                IterateRecursiveFixups(g$$340, null, rvs, mkRecdFieldGetViaExprAddr(access$$1, fref$$11, tinst$$72, m$$205), function (e$$79) {
                  if (!(0, _tast.RecdField$$get_IsMutable)(fspec$$4) ? !(0, _tast.entityRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$340), tcref$$96) : false) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastRecursiveValuesMayNotBeAssignedToNonMutableField$$Z384F8060)((0, _ast.Ident$$get_idText)(fspec$$4.rfield_id), (0, _tast.EntityRef$$get_LogicalName)(tcref$$96)), m$$205));
                  }

                  return mkRecdFieldSetViaExprAddr(access$$1, fref$$11, tinst$$72, e$$79, m$$205);
                }, arg$$6);
              }, (0, _tast.EntityRef$$get_TrueInstanceFieldsAsRefList)(tcref$$96), args$$30);
              break;
            }

          case 2:
            {
              rvs(selfv, access$$1, set, exprToFix$$1);
              break;
            }
        }

        break;
      }
  }
}

function JoinTyparStaticReq(r1, r2) {
  const matchValue$$148 = [r1, r2];
  var $target$$294, r$$27;

  if (matchValue$$148[0].tag === 1) {
    if (matchValue$$148[1].tag === 1) {
      $target$$294 = 1;
    } else {
      $target$$294 = 0;
      r$$27 = matchValue$$148[0];
    }
  } else {
    $target$$294 = 0;
    r$$27 = matchValue$$148[1];
  }

  switch ($target$$294) {
    case 0:
      {
        return r$$27;
      }

    case 1:
      {
        return matchValue$$148[1];
      }
  }
}

const ExprFolder$00601 = (0, _Types.declare)(function ExprFolder$00601(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.exprIntercept = arg1;
  this.valBindingSiteIntercept = arg2;
  this.nonRecBindingsIntercept = arg3;
  this.recBindingsIntercept = arg4;
  this.dtreeIntercept = arg5;
  this.targetIntercept = arg6;
  this.tmethodIntercept = arg7;
}, _Types.Record);
exports.ExprFolder$00601 = ExprFolder$00601;

function ExprFolder0() {
  return new ExprFolder$00601(function (_exprF, _z, _x) {
    return null;
  }, function (z$$27, _b) {
    return z$$27;
  }, function (z$$28, _bs) {
    return z$$28;
  }, function (z$$29, _bs$$1) {
    return z$$29;
  }, function (z$$30, _dt) {
    return z$$30;
  }, function (_exprF$$1, _z$$1, _x$$1) {
    return null;
  }, function (_exprF$$2, _z$$2, _x$$2) {
    return null;
  });
}

const ExprFolders$00601 = (0, _Types.declare)(function ExprFolders$00601(folders) {
  const $this$$49 = this;
  $this$$49.folders = folders;
  $this$$49.exprFClosure = (0, _Util.uncurry)(2, null);

  $this$$49.exprFClosure = function (z$$31, x$$282) {
    return ExprFolders$00601$$exprF($this$$49, z$$31, x$$282);
  };
});
exports.ExprFolders$00601 = ExprFolders$00601;

function ExprFolders$00601$$$$002Ector$$Z53FB4564(folders) {
  return this != null ? ExprFolders$00601.call(this, folders) : new ExprFolders$00601(folders);
}

function ExprFolders$00601$$get_FoldExpr(x$$283) {
  return function (z$$32) {
    return function (x$$284) {
      return ExprFolders$00601$$exprF(x$$283, z$$32, x$$284);
    };
  };
}

function ExprFolders$00601$$get_FoldImplFile(x$$285) {
  return function (z$$33) {
    return function (x$$286) {
      return ExprFolders$00601$$implF(x$$285, z$$33, x$$286);
    };
  };
}

function ExprFolders$00601$$exprsF(this$, z$$34, xs$$23) {
  return (0, _List.fold)(this$.exprFClosure, z$$34, xs$$23);
}

function ExprFolders$00601$$exprF(this$$$1, z$$35, x$$287) {
  ExprFolders$00601$$exprF: while (true) {
    const matchValue$$149 = this$$$1.folders.exprIntercept(this$$$1.exprFClosure, z$$35, x$$287);

    if (matchValue$$149 == null) {
      if (x$$287.tag === 1) {
        return z$$35;
      } else if (x$$287.tag === 11) {
        return ExprFolders$00601$$exprsF(this$$$1, z$$35, x$$287.fields[2]);
      } else if (x$$287.tag === 2) {
        return ExprFolders$00601$$exprsF(this$$$1, z$$35, (0, _Types.L)(x$$287.fields[0], (0, _Types.L)(x$$287.fields[1], (0, _Types.L)())));
      } else if (x$$287.tag === 3) {
        this$$$1 = this$$$1;
        z$$35 = z$$35;
        x$$287 = x$$287.fields[4];
        continue ExprFolders$00601$$exprF;
      } else if (x$$287.tag === 4) {
        this$$$1 = this$$$1;
        z$$35 = z$$35;
        x$$287 = x$$287.fields[2];
        continue ExprFolders$00601$$exprF;
      } else if (x$$287.tag === 13) {
        this$$$1 = this$$$1;
        z$$35 = z$$35;
        x$$287 = x$$287.fields[1];
        continue ExprFolders$00601$$exprF;
      } else if (x$$287.tag === 5) {
        const z$$37 = ExprFolders$00601$$exprF(this$$$1, z$$35, x$$287.fields[0]);
        const z$$38 = ExprFolders$00601$$exprsF(this$$$1, z$$37, x$$287.fields[3]);
        return z$$38;
      } else if (x$$287.tag === 6) {
        const z$$39 = ExprFolders$00601$$valBindsF(this$$$1, false, z$$35, x$$287.fields[0]);
        const z$$40 = ExprFolders$00601$$exprF(this$$$1, z$$39, x$$287.fields[1]);
        return z$$40;
      } else if (x$$287.tag === 7) {
        const z$$41 = ExprFolders$00601$$valBindF(this$$$1, false, z$$35, x$$287.fields[0]);
        const z$$42 = ExprFolders$00601$$exprF(this$$$1, z$$41, x$$287.fields[1]);
        return z$$42;
      } else if (x$$287.tag === 14) {
        this$$$1 = this$$$1;
        z$$35 = z$$35;
        x$$287 = x$$287.fields[0].contents;
        continue ExprFolders$00601$$exprF;
      } else if (x$$287.tag === 9) {
        const z$$43 = ExprFolders$00601$$dtreeF(this$$$1, z$$35, x$$287.fields[2]);
        const z$$45 = (0, _Array.fold)(function (z$$44, x$$289) {
          return ExprFolders$00601$$targetF(this$$$1, z$$44, x$$289);
        }, z$$43, x$$287.fields[3]);
        return z$$45;
      } else if (x$$287.tag === 12) {
        if (x$$287.fields[1].contents == null) {
          this$$$1 = this$$$1;
          z$$35 = z$$35;
          x$$287 = x$$287.fields[0];
          continue ExprFolders$00601$$exprF;
        } else {
          const z$$46 = ExprFolders$00601$$exprF(this$$$1, z$$35, x$$287.fields[0]);
          return ExprFolders$00601$$exprsF(this$$$1, z$$46, x$$287.fields[1].contents[2]);
        }
      } else if (x$$287.tag === 8) {
        const z$$47 = ExprFolders$00601$$exprF(this$$$1, z$$35, x$$287.fields[3]);
        const z$$49 = (0, _List.fold)(function (z$$48, x$$290) {
          return ExprFolders$00601$$tmethodF(this$$$1, z$$48, x$$290);
        }, z$$47, x$$287.fields[4]);
        const z$$52 = (0, _List.fold)(function (z$$51, x$$292) {
          return (0, _illib.foldOn)(function p$$6(tuple$$5) {
            return tuple$$5[1];
          }, function f$$73(state$$25, list$$90) {
            return (0, _List.fold)(function folder$$20(z$$50, x$$291) {
              return ExprFolders$00601$$tmethodF(this$$$1, z$$50, x$$291);
            }, state$$25, list$$90);
          }, z$$51, x$$292);
        }, z$$49, x$$287.fields[5]);
        return z$$52;
      } else if (x$$287.tag === 10) {
        return ExprFolders$00601$$exprsF(this$$$1, z$$35, (0, _Types.L)(x$$287.fields[1], (0, _Types.L)(x$$287.fields[2], (0, _Types.L)())));
      } else {
        return z$$35;
      }
    } else {
      const z$$36 = (0, _Option.value)(matchValue$$149);
      return z$$36;
    }
  }
}

function ExprFolders$00601$$valBindF(this$$$2, dtree$$15, z$$53, bind$$31) {
  const z$$54 = this$$$2.folders.nonRecBindingsIntercept(z$$53, bind$$31);
  return ExprFolders$00601$$bindF(this$$$2, dtree$$15, z$$54, bind$$31);
}

function ExprFolders$00601$$valBindsF(this$$$3, dtree$$16, z$$55, binds$$14) {
  const z$$56 = this$$$3.folders.recBindingsIntercept(z$$55, binds$$14);
  return (0, _List.fold)(function (z$$57, bind$$32) {
    return ExprFolders$00601$$bindF(this$$$3, dtree$$16, z$$57, bind$$32);
  }, z$$56, binds$$14);
}

function ExprFolders$00601$$bindF(this$$$4, dtree$$17, z$$58, bind$$33) {
  const z$$59 = this$$$4.folders.valBindingSiteIntercept(z$$58, [dtree$$17, (0, _tast.Binding$$get_Var)(bind$$33)]);
  return ExprFolders$00601$$exprF(this$$$4, z$$59, (0, _tast.Binding$$get_Expr)(bind$$33));
}

function ExprFolders$00601$$dtreeF(this$$$5, z$$60, dtree$$18) {
  ExprFolders$00601$$dtreeF: while (true) {
    const z$$61 = this$$$5.folders.dtreeIntercept(z$$60, dtree$$18);

    switch (dtree$$18.tag) {
      case 1:
        {
          const args$$32 = dtree$$18.fields[0];
          return ExprFolders$00601$$exprsF(this$$$5, z$$61, args$$32);
        }

      case 0:
        {
          const test$$4 = dtree$$18.fields[0];
          const dflt$$11 = dtree$$18.fields[2];
          const dcases$$1 = dtree$$18.fields[1];
          const z$$63 = ExprFolders$00601$$exprF(this$$$5, z$$61, test$$4);
          const z$$65 = (0, _List.fold)(function (z$$64, _arg1$$113) {
            return ExprFolders$00601$$dcaseF(this$$$5, z$$64, _arg1$$113);
          }, z$$63, dcases$$1);
          const z$$67 = (0, _Seq.fold)(function (z$$66, dtree$$20) {
            return ExprFolders$00601$$dtreeF(this$$$5, z$$66, dtree$$20);
          }, z$$65, (0, _Option.defaultArg)(dflt$$11, [], function ($x$$50) {
            return [$x$$50];
          }));
          return z$$67;
        }

      default:
        {
          const rest$$8 = dtree$$18.fields[1];
          const bind$$34 = dtree$$18.fields[0];
          const z$$62 = ExprFolders$00601$$valBindF(this$$$5, true, z$$61, bind$$34);
          this$$$5 = this$$$5;
          z$$60 = z$$62;
          dtree$$18 = rest$$8;
          continue ExprFolders$00601$$dtreeF;
        }
    }
  }
}

function ExprFolders$00601$$dcaseF(this$$$6, z$$68, _arg1$$114) {
  const dtree$$21 = _arg1$$114.fields[1];
  return ExprFolders$00601$$dtreeF(this$$$6, z$$68, dtree$$21);
}

function ExprFolders$00601$$targetF(this$$$7, z$$69, x$$295) {
  const matchValue$$150 = this$$$7.folders.targetIntercept(this$$$7.exprFClosure, z$$69, x$$295);

  if (matchValue$$150 == null) {
    const body$$31 = x$$295.fields[1];
    return ExprFolders$00601$$exprF(this$$$7, z$$69, body$$31);
  } else {
    const z$$70 = (0, _Option.value)(matchValue$$150);
    return z$$70;
  }
}

function ExprFolders$00601$$tmethodF(this$$$8, z$$71, x$$296) {
  const matchValue$$151 = this$$$8.folders.tmethodIntercept(this$$$8.exprFClosure, z$$71, x$$296);

  if (matchValue$$151 == null) {
    const e$$82 = x$$296.fields[4];
    return ExprFolders$00601$$exprF(this$$$8, z$$71, e$$82);
  } else {
    const z$$72 = (0, _Option.value)(matchValue$$151);
    return z$$72;
  }
}

function ExprFolders$00601$$mexprF(this$$$9, z$$73, x$$297) {
  const def$$9 = x$$297.fields[1];
  return ExprFolders$00601$$mdefF(this$$$9, z$$73, def$$9);
}

function ExprFolders$00601$$mdefF(this$$$10, z$$74, x$$298) {
  switch (x$$298.tag) {
    case 2:
      {
        const bind$$35 = x$$298.fields[0];
        return ExprFolders$00601$$valBindF(this$$$10, false, z$$74, bind$$35);
      }

    case 3:
      {
        const e$$83 = x$$298.fields[0];
        return ExprFolders$00601$$exprF(this$$$10, z$$74, e$$83);
      }

    case 1:
      {
        const defs$$10 = x$$298.fields[0];
        return (0, _List.fold)(function (z$$77, x$$300) {
          return ExprFolders$00601$$mdefF(this$$$10, z$$77, x$$300);
        }, z$$74, defs$$10);
      }

    case 0:
      {
        const x$$301 = x$$298.fields[0];
        return ExprFolders$00601$$mexprF(this$$$10, z$$74, x$$301);
      }

    default:
      {
        const mbinds$$8 = x$$298.fields[2];
        const z$$76 = (0, _List.fold)(function (z$$75, x$$299) {
          return ExprFolders$00601$$mbindF(this$$$10, z$$75, x$$299);
        }, z$$74, mbinds$$8);
        return z$$76;
      }
  }
}

function ExprFolders$00601$$mbindF(this$$$11, z$$78, x$$302) {
  if (x$$302.tag === 1) {
    const def$$10 = x$$302.fields[1];
    return ExprFolders$00601$$mdefF(this$$$11, z$$78, def$$10);
  } else {
    const b$$45 = x$$302.fields[0];
    return ExprFolders$00601$$valBindF(this$$$11, false, z$$78, b$$45);
  }
}

function ExprFolders$00601$$implF(this$$$12, z$$79, x$$303) {
  return (0, _tast.foldTImplFile)(function (z$$80, x$$304) {
    return ExprFolders$00601$$mexprF(this$$$12, z$$80, x$$304);
  }, z$$79, x$$303);
}

function FoldExpr(folders$$1) {
  return function (state$$26) {
    return function (expr$$24) {
      return ExprFolders$00601$$get_FoldExpr(ExprFolders$00601$$$$002Ector$$Z53FB4564(folders$$1))(state$$26)(expr$$24);
    };
  };
}

function FoldImplFile(folders$$2) {
  return function (state$$27) {
    return function (implFile) {
      return ExprFolders$00601$$get_FoldImplFile(ExprFolders$00601$$$$002Ector$$Z53FB4564(folders$$2))(state$$27)(implFile);
    };
  };
}

function mkString(g$$341, m$$206, n$$35) {
  return new _tast.Expr(0, "Const", new _tast.Const(14, "String", n$$35), m$$206, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$341));
}

function mkBool(g$$342, m$$207, b$$46) {
  return new _tast.Expr(0, "Const", new _tast.Const(0, "Bool", b$$46), m$$207, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$342));
}

function mkByte(g$$343, m$$208, b$$47) {
  return new _tast.Expr(0, "Const", new _tast.Const(2, "Byte", b$$47), m$$208, (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$343));
}

function mkUInt16(g$$344, m$$209, b$$48) {
  return new _tast.Expr(0, "Const", new _tast.Const(4, "UInt16", b$$48), m$$209, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$344));
}

function mkTrue(g$$345, m$$210) {
  return mkBool(g$$345, m$$210, true);
}

function mkFalse(g$$346, m$$211) {
  return mkBool(g$$346, m$$211, false);
}

function mkUnit(g$$347, m$$212) {
  return new _tast.Expr(0, "Const", new _tast.Const(16, "Unit"), m$$212, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$347));
}

function mkInt32(g$$348, m$$213, n$$36) {
  return new _tast.Expr(0, "Const", new _tast.Const(5, "Int32", n$$36), m$$213, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$348));
}

function mkInt(g$$349, m$$214, n$$37) {
  return mkInt32(g$$349, m$$214, n$$37);
}

function mkZero(g$$350, m$$215) {
  return mkInt(g$$350, m$$215, 0);
}

function mkOne(g$$351, m$$216) {
  return mkInt(g$$351, m$$216, 1);
}

function mkTwo(g$$352, m$$217) {
  return mkInt(g$$352, m$$217, 2);
}

function mkMinusOne(g$$353, m$$218) {
  return mkInt(g$$353, m$$218, -1);
}

function destInt32(_arg1$$115) {
  var $target$$295, n$$38;

  if (_arg1$$115.tag === 0) {
    if (_arg1$$115.fields[0].tag === 5) {
      $target$$295 = 0;
      n$$38 = _arg1$$115.fields[0].fields[0];
    } else {
      $target$$295 = 1;
    }
  } else {
    $target$$295 = 1;
  }

  switch ($target$$295) {
    case 0:
      {
        return n$$38;
      }

    case 1:
      {
        return null;
      }
  }
}

function isIDelegateEventType(g$$354, ty$$282) {
  if (isAppTy(g$$354, ty$$282)) {
    return tyconRefEq(g$$354, (0, _TcGlobals.TcGlobals$$get_fslib_IDelegateEvent_tcr)(g$$354), tcrefOfAppTy(g$$354, ty$$282));
  } else {
    return false;
  }
}

function destIDelegateEventType(g$$355, ty$$283) {
  if (isIDelegateEventType(g$$355, ty$$283)) {
    const matchValue$$152 = argsOfAppTy(g$$355, ty$$283);
    var $target$$296, ty1$$13;

    if (matchValue$$152.tail != null) {
      if (matchValue$$152.tail.tail == null) {
        $target$$296 = 0;
        ty1$$13 = matchValue$$152.head;
      } else {
        $target$$296 = 1;
      }
    } else {
      $target$$296 = 1;
    }

    switch ($target$$296) {
      case 0:
        {
          return ty1$$13;
        }

      case 1:
        {
          throw new Error("destIDelegateEventType: internal error");
        }
    }
  } else {
    throw new Error("destIDelegateEventType: not an IDelegateEvent type");
  }
}

function mkIEventType(g$$356, ty1$$14, ty2$$10) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_fslib_IEvent2_tcr)(g$$356), (0, _Types.L)(ty1$$14, (0, _Types.L)(ty2$$10, (0, _Types.L)())));
}

function mkIObservableType(g$$357, ty1$$15) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_tcref_IObservable)(g$$357), (0, _Types.L)(ty1$$15, (0, _Types.L)()));
}

function mkIObserverType(g$$358, ty1$$16) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_tcref_IObserver)(g$$358), (0, _Types.L)(ty1$$16, (0, _Types.L)()));
}

function mkRefCellContentsRef(g$$359) {
  return (0, _tast.mkRecdFieldRef)((0, _TcGlobals.TcGlobals$$get_refcell_tcr_canon)(g$$359), "contents");
}

function mkSequential(spSeq$$1, m$$219, e1$$28, e2$$25) {
  return new _tast.Expr(2, "Sequential", e1$$28, e2$$25, new _tast.SequentialOpKind(0, "NormalSeq"), spSeq$$1, m$$219);
}

function mkCompGenSequential(m$$220, e1$$29, e2$$26) {
  return mkSequential(new _ast.SequencePointInfoForSeq(1, "SuppressSequencePointOnExprOfSequential"), m$$220, e1$$29, e2$$26);
}

function mkSequentials(spSeq$$2, g$$360, m$$221, es$$19) {
  if (es$$19.tail == null) {
    return mkUnit(g$$360, m$$221);
  } else if (es$$19.tail.tail == null) {
    return es$$19.head;
  } else {
    return mkSequential(spSeq$$2, m$$221, es$$19.head, mkSequentials(spSeq$$2, g$$360, m$$221, es$$19.tail));
  }
}

function mkGetArg0(m$$222, ty$$284) {
  return mkAsmExpr((0, _Types.L)(_il.mkLdarg0, (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)(ty$$284, (0, _Types.L)()), m$$222);
}

function mkAnyTupled(g$$361, m$$223, tupInfo$$25, es$$21, tys$$36) {
  if (es$$21.tail != null) {
    if (es$$21.tail.tail == null) {
      return es$$21.head;
    } else {
      return new _tast.Expr(11, "Op", new _tast.TOp(2, "Tuple", tupInfo$$25), tys$$36, es$$21, m$$223);
    }
  } else {
    return mkUnit(g$$361, m$$223);
  }
}

function mkRefTupled(g$$362, m$$224, es$$22, tys$$37) {
  return mkAnyTupled(g$$362, m$$224, _tast.tupInfoRef, es$$22, tys$$37);
}

function mkRefTupledNoTypes(g$$363, m$$225, args$$33) {
  return mkRefTupled(g$$363, m$$225, args$$33, (0, _List.map)(function (arg10$0040$$111) {
    return tyOfExpr(g$$363, arg10$0040$$111);
  }, args$$33));
}

function mkRefTupledVars(g$$364, m$$226, vs$$50) {
  return mkRefTupled(g$$364, m$$226, (0, _List.map)(function (arg10$0040$$112) {
    return exprForVal(m$$226, arg10$0040$$112);
  }, vs$$50), (0, _tast.typesOfVals)(vs$$50));
}

function inversePerm(sigma) {
  const n$$39 = sigma.length | 0;
  const invSigma = (0, _Array.fill)(new Int32Array(n$$39), 0, n$$39, -1);

  for (let i$$21 = 0; i$$21 <= n$$39 - 1; i$$21++) {
    const sigma_i = sigma[i$$21] | 0;
    invSigma[sigma_i] = i$$21;
  }

  return invSigma;
}

function permute(sigma$$1, data$$1) {
  const n$$40 = sigma$$1.length | 0;
  const invSigma$$1 = inversePerm(sigma$$1);
  return (0, _Array.initialize)(n$$40, function (i$$22) {
    return data$$1[invSigma$$1[i$$22]];
  }, Array);
}

function existsR($arg$$297, $arg$$298, $arg$$299) {
  existsR: while (true) {
    const a$$17 = $arg$$297,
          b$$49 = $arg$$298,
          pred$$1 = $arg$$299;

    if (a$$17 <= b$$49) {
      if (pred$$1(a$$17)) {
        return true;
      } else {
        $arg$$297 = a$$17 + 1;
        $arg$$298 = b$$49;
        $arg$$299 = pred$$1;
        continue existsR;
      }
    } else {
      return false;
    }
  }
}

function liftAllBefore(sigma$$2) {
  const invSigma$$2 = inversePerm(sigma$$2);
  const lifted = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (i$$23) {
      const i$0027 = sigma$$2[i$$23] | 0;
      return existsR(0, i$0027 - 1, function (j$0027) {
        return invSigma$$2[j$0027] > i$$23;
      }) ? (0, _Seq.singleton)(i$$23) : (0, _Seq.empty)();
    }, (0, _Seq.rangeNumber)(0, 1, sigma$$2.length - 1));
  }));

  if (lifted.tail == null) {
    return 0;
  } else {
    return (0, _List.max)(lifted, {
      Compare: _Util.comparePrimitives
    }) + 1 | 0;
  }
}

function permuteExprList(sigma$$3, exprs$$1, ty$$285, names$$2) {
  const patternInput$$93 = [(0, _Array.ofList)(ty$$285, Array), (0, _Array.ofList)(names$$2, Array)];
  const liftLim = liftAllBefore(sigma$$3) | 0;

  const rewrite = function rewrite(rbinds, tupledArg$$73) {
    if (tupledArg$$73[0] < liftLim) {
      const patternInput$$94 = mkCompGenLocal(Expr$002Eget_Range(tupledArg$$73[1]), patternInput$$93[1][tupledArg$$73[0]], patternInput$$93[0][tupledArg$$73[0]]);
      const bindi = mkCompGenBind(patternInput$$94[0], tupledArg$$73[1]);
      return [patternInput$$94[1], (0, _Types.L)(bindi, rbinds)];
    } else {
      return [tupledArg$$73[1], rbinds];
    }
  };

  const patternInput$$95 = (0, _List.mapFold)(rewrite, (0, _Types.L)(), (0, _List.indexed)(exprs$$1));
  const binds$$15 = (0, _List.reverse)(patternInput$$95[1]);
  const reorderedExprs = permute(sigma$$3, (0, _Array.ofList)(patternInput$$95[0], Array));
  return [binds$$15, (0, _Array.toList)(reorderedExprs)];
}

function mkRecordExpr(g$$365, lnk, tcref$$97, tinst$$73, rfrefs, args$$34, m$$227) {
  const patternInput$$96 = destAppTy(g$$365, mkAppTy(tcref$$97, tinst$$73));
  const rfrefsArray = (0, _Array.ofList)((0, _List.indexed)(rfrefs), Array);
  (0, _Array.sortInPlaceBy)(function projection(tupledArg$$74) {
    return (0, _tast.RecdFieldRef$$get_Index)(tupledArg$$74[1]);
  }, rfrefsArray, {
    Compare: _Util.comparePrimitives
  });
  const sigma$$4 = (0, _Array.fill)(new Int32Array(rfrefsArray.length), 0, rfrefsArray.length, -1);
  (0, _Array.iterateIndexed)(function (j$$11, tupledArg$$75) {
    if (sigma$$4[tupledArg$$75[0]] !== -1) {
      (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("bad permutation", m$$227));
    }

    sigma$$4[tupledArg$$75[0]] = j$$11;
  }, rfrefsArray);
  const argTys = (0, _List.map)(function (rfref$$20) {
    return actualTyOfRecdFieldRef(rfref$$20, patternInput$$96[1]);
  }, rfrefs);
  const names$$4 = (0, _List.map)(function mapping$$51(rfref$$21) {
    return (0, _tast.RecdFieldRef$$get_FieldName)(rfref$$21);
  }, rfrefs);
  const patternInput$$97 = permuteExprList(sigma$$4, args$$34, argTys, names$$4);
  return mkLetsBind(m$$227, patternInput$$97[0], new _tast.Expr(11, "Op", new _tast.TOp(10, "Recd", lnk, patternInput$$96[0]), patternInput$$96[1], patternInput$$97[1], m$$227));
}

function mkRefCell(g$$366, m$$228, ty$$287, e$$87) {
  return mkRecordExpr(g$$366, new _tast.RecordConstructionInfo(1, "RecdExpr"), (0, _TcGlobals.TcGlobals$$get_refcell_tcr_canon)(g$$366), (0, _Types.L)(ty$$287, (0, _Types.L)()), (0, _Types.L)(mkRefCellContentsRef(g$$366), (0, _Types.L)()), (0, _Types.L)(e$$87, (0, _Types.L)()), m$$228);
}

function mkRefCellGet(g$$367, m$$229, ty$$288, e$$88) {
  return mkRecdFieldGetViaExprAddr(e$$88, mkRefCellContentsRef(g$$367), (0, _Types.L)(ty$$288, (0, _Types.L)()), m$$229);
}

function mkRefCellSet(g$$368, m$$230, ty$$289, e1$$30, e2$$27) {
  return mkRecdFieldSetViaExprAddr(e1$$30, mkRefCellContentsRef(g$$368), (0, _Types.L)(ty$$289, (0, _Types.L)()), e2$$27, m$$230);
}

function mkNil(g$$369, m$$231, ty$$290) {
  return mkUnionCaseExpr((0, _TcGlobals.TcGlobals$$get_nil_ucref)(g$$369), (0, _Types.L)(ty$$290, (0, _Types.L)()), (0, _Types.L)(), m$$231);
}

function mkCons(g$$370, ty$$291, h$$9, t$$20) {
  return mkUnionCaseExpr((0, _TcGlobals.TcGlobals$$get_cons_ucref)(g$$370), (0, _Types.L)(ty$$291, (0, _Types.L)()), (0, _Types.L)(h$$9, (0, _Types.L)(t$$20, (0, _Types.L)())), (0, _range.unionRanges)(Expr$002Eget_Range(h$$9), Expr$002Eget_Range(t$$20)));
}

function mkCompGenLocalAndInvisbleBind(g$$371, nm$$22, m$$232, e$$89) {
  const patternInput$$98 = mkCompGenLocal(m$$232, nm$$22, tyOfExpr(g$$371, e$$89));
  return [patternInput$$98[0], patternInput$$98[1], mkInvisibleBind(patternInput$$98[0], e$$89)];
}

const box = new _il.ILInstr(74, "I_box", (0, _il.mkILTyvarTy)(0));
exports.box = box;
const isinst = new _il.ILInstr(66, "I_isinst", (0, _il.mkILTyvarTy)(0));
exports.isinst = isinst;
const unbox = new _il.ILInstr(76, "I_unbox_any", (0, _il.mkILTyvarTy)(0));
exports.unbox = unbox;

function mkUnbox(ty$$292, e$$90, m$$233) {
  return mkAsmExpr((0, _Types.L)(unbox, (0, _Types.L)()), (0, _Types.L)(ty$$292, (0, _Types.L)()), (0, _Types.L)(e$$90, (0, _Types.L)()), (0, _Types.L)(ty$$292, (0, _Types.L)()), m$$233);
}

function mkBox(ty$$293, e$$91, m$$234) {
  return mkAsmExpr((0, _Types.L)(box, (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e$$91, (0, _Types.L)()), (0, _Types.L)(ty$$293, (0, _Types.L)()), m$$234);
}

function mkIsInst(ty$$294, e$$92, m$$235) {
  return mkAsmExpr((0, _Types.L)(isinst, (0, _Types.L)()), (0, _Types.L)(ty$$294, (0, _Types.L)()), (0, _Types.L)(e$$92, (0, _Types.L)()), (0, _Types.L)(ty$$294, (0, _Types.L)()), m$$235);
}

function mspec_Type_GetTypeFromHandle(g$$372) {
  return (0, _il.mkILNonGenericStaticMethSpecInTy)((0, _il.ILGlobals$$get_typ_Type)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$372)), "GetTypeFromHandle", (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_iltyp_RuntimeTypeHandle)(g$$372), (0, _Types.L)()), (0, _il.ILGlobals$$get_typ_Type)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$372)));
}

function mspec_String_Length(g$$373) {
  return (0, _il.mkILNonGenericInstanceMethSpecInTy)((0, _il.ILGlobals$$get_typ_String)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$373)), "get_Length", (0, _Types.L)(), (0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$373)));
}

function fspec_Missing_Value(g$$374) {
  return (0, _il.mkILFieldSpecInTy)((0, _TcGlobals.TcGlobals$$get_iltyp_Missing)(g$$374), "Value", (0, _TcGlobals.TcGlobals$$get_iltyp_Missing)(g$$374));
}

function mkInitializeArrayMethSpec(g$$375) {
  return (0, _il.mkILNonGenericStaticMethSpecInTy)((0, _il.mkILNonGenericBoxedTy)((0, _TcGlobals.TcGlobals$$FindSysILTypeRef$$Z721C83C5)(g$$375, "System.Runtime.CompilerServices.RuntimeHelpers")), "InitializeArray", (0, _Types.L)((0, _il.ILGlobals$$get_typ_Array)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$375)), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_iltyp_RuntimeFieldHandle)(g$$375), (0, _Types.L)())), new _il.ILType(0, "Void"));
}

function mkInvalidCastExnNewobj(g$$376) {
  return (0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)((0, _il.mkILNonGenericBoxedTy)((0, _TcGlobals.TcGlobals$$FindSysILTypeRef$$Z721C83C5)(g$$376, "System.InvalidCastException")), (0, _Types.L)()));
}

function typedExprForIntrinsic(_g$$4, m$$236, _arg1$$117) {
  const i$$26 = _arg1$$117;
  const ty$$295 = i$$26.fields[3];
  const vref$$62 = (0, _TcGlobals.ValRefForIntrinsic)(i$$26);
  return [exprForValRef(m$$236, vref$$62), ty$$295];
}

function mkCallGetGenericComparer(g$$377, m$$237) {
  return typedExprForIntrinsic(g$$377, m$$237, (0, _TcGlobals.TcGlobals$$get_get_generic_comparer_info)(g$$377))[0];
}

function mkCallGetGenericEREqualityComparer(g$$378, m$$238) {
  return typedExprForIntrinsic(g$$378, m$$238, (0, _TcGlobals.TcGlobals$$get_get_generic_er_equality_comparer_info)(g$$378))[0];
}

function mkCallGetGenericPEREqualityComparer(g$$379, m$$239) {
  return typedExprForIntrinsic(g$$379, m$$239, (0, _TcGlobals.TcGlobals$$get_get_generic_per_equality_comparer_info)(g$$379))[0];
}

function mkCallUnbox(g$$380, m$$240, ty$$296, e1$$31) {
  return mkApps(g$$380, typedExprForIntrinsic(g$$380, m$$240, (0, _TcGlobals.TcGlobals$$get_unbox_info)(g$$380)), (0, _Types.L)((0, _Types.L)(ty$$296, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$31, (0, _Types.L)()), m$$240);
}

function mkCallUnboxFast(g$$381, m$$241, ty$$297, e1$$32) {
  return mkApps(g$$381, typedExprForIntrinsic(g$$381, m$$241, (0, _TcGlobals.TcGlobals$$get_unbox_fast_info)(g$$381)), (0, _Types.L)((0, _Types.L)(ty$$297, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$32, (0, _Types.L)()), m$$241);
}

function mkCallTypeTest(g$$382, m$$242, ty$$298, e1$$33) {
  return mkApps(g$$382, typedExprForIntrinsic(g$$382, m$$242, (0, _TcGlobals.TcGlobals$$get_istype_info)(g$$382)), (0, _Types.L)((0, _Types.L)(ty$$298, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$33, (0, _Types.L)()), m$$242);
}

function mkCallTypeOf(g$$383, m$$243, ty$$299) {
  return mkApps(g$$383, typedExprForIntrinsic(g$$383, m$$243, (0, _TcGlobals.TcGlobals$$get_typeof_info)(g$$383)), (0, _Types.L)((0, _Types.L)(ty$$299, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(), m$$243);
}

function mkCallTypeDefOf(g$$384, m$$244, ty$$300) {
  return mkApps(g$$384, typedExprForIntrinsic(g$$384, m$$244, (0, _TcGlobals.TcGlobals$$get_typedefof_info)(g$$384)), (0, _Types.L)((0, _Types.L)(ty$$300, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(), m$$244);
}

function mkCallDispose(g$$385, m$$245, ty$$301, e1$$34) {
  return mkApps(g$$385, typedExprForIntrinsic(g$$385, m$$245, (0, _TcGlobals.TcGlobals$$get_dispose_info)(g$$385)), (0, _Types.L)((0, _Types.L)(ty$$301, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$34, (0, _Types.L)()), m$$245);
}

function mkCallSeq(g$$386, m$$246, ty$$302, e1$$35) {
  return mkApps(g$$386, typedExprForIntrinsic(g$$386, m$$246, (0, _TcGlobals.TcGlobals$$get_seq_info)(g$$386)), (0, _Types.L)((0, _Types.L)(ty$$302, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$35, (0, _Types.L)()), m$$246);
}

function mkCallCreateInstance(g$$387, m$$247, ty$$303) {
  return mkApps(g$$387, typedExprForIntrinsic(g$$387, m$$247, (0, _TcGlobals.TcGlobals$$get_create_instance_info)(g$$387)), (0, _Types.L)((0, _Types.L)(ty$$303, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(mkUnit(g$$387, m$$247), (0, _Types.L)()), m$$247);
}

function mkCallGetQuerySourceAsEnumerable(g$$388, m$$248, ty1$$17, ty2$$11, e1$$36) {
  return mkApps(g$$388, typedExprForIntrinsic(g$$388, m$$248, (0, _TcGlobals.TcGlobals$$get_query_source_as_enum_info)(g$$388)), (0, _Types.L)((0, _Types.L)(ty1$$17, (0, _Types.L)(ty2$$11, (0, _Types.L)())), (0, _Types.L)()), (0, _Types.L)(e1$$36, (0, _Types.L)(mkUnit(g$$388, m$$248), (0, _Types.L)())), m$$248);
}

function mkCallNewQuerySource(g$$389, m$$249, ty1$$18, ty2$$12, e1$$37) {
  return mkApps(g$$389, typedExprForIntrinsic(g$$389, m$$249, (0, _TcGlobals.TcGlobals$$get_new_query_source_info)(g$$389)), (0, _Types.L)((0, _Types.L)(ty1$$18, (0, _Types.L)(ty2$$12, (0, _Types.L)())), (0, _Types.L)()), (0, _Types.L)(e1$$37, (0, _Types.L)()), m$$249);
}

function mkCallCreateEvent(g$$390, m$$250, ty1$$19, ty2$$13, e1$$38, e2$$28, e3$$7) {
  return mkApps(g$$390, typedExprForIntrinsic(g$$390, m$$250, (0, _TcGlobals.TcGlobals$$get_create_event_info)(g$$390)), (0, _Types.L)((0, _Types.L)(ty1$$19, (0, _Types.L)(ty2$$13, (0, _Types.L)())), (0, _Types.L)()), (0, _Types.L)(e1$$38, (0, _Types.L)(e2$$28, (0, _Types.L)(e3$$7, (0, _Types.L)()))), m$$250);
}

function mkCallGenericComparisonWithComparerOuter(g$$391, m$$251, ty$$304, comp, e1$$39, e2$$29) {
  return mkApps(g$$391, typedExprForIntrinsic(g$$391, m$$251, (0, _TcGlobals.TcGlobals$$get_generic_comparison_withc_outer_info)(g$$391)), (0, _Types.L)((0, _Types.L)(ty$$304, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(comp, (0, _Types.L)(e1$$39, (0, _Types.L)(e2$$29, (0, _Types.L)()))), m$$251);
}

function mkCallGenericEqualityEROuter(g$$392, m$$252, ty$$305, e1$$40, e2$$30) {
  return mkApps(g$$392, typedExprForIntrinsic(g$$392, m$$252, (0, _TcGlobals.TcGlobals$$get_generic_equality_er_outer_info)(g$$392)), (0, _Types.L)((0, _Types.L)(ty$$305, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$40, (0, _Types.L)(e2$$30, (0, _Types.L)())), m$$252);
}

function mkCallGenericEqualityWithComparerOuter(g$$393, m$$253, ty$$306, comp$$1, e1$$41, e2$$31) {
  return mkApps(g$$393, typedExprForIntrinsic(g$$393, m$$253, (0, _TcGlobals.TcGlobals$$get_generic_equality_withc_outer_info)(g$$393)), (0, _Types.L)((0, _Types.L)(ty$$306, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(comp$$1, (0, _Types.L)(e1$$41, (0, _Types.L)(e2$$31, (0, _Types.L)()))), m$$253);
}

function mkCallGenericHashWithComparerOuter(g$$394, m$$254, ty$$307, comp$$2, e1$$42) {
  return mkApps(g$$394, typedExprForIntrinsic(g$$394, m$$254, (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_outer_info)(g$$394)), (0, _Types.L)((0, _Types.L)(ty$$307, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(comp$$2, (0, _Types.L)(e1$$42, (0, _Types.L)())), m$$254);
}

function mkCallEqualsOperator(g$$395, m$$255, ty$$308, e1$$43, e2$$32) {
  return mkApps(g$$395, typedExprForIntrinsic(g$$395, m$$255, (0, _TcGlobals.TcGlobals$$get_equals_operator_info)(g$$395)), (0, _Types.L)((0, _Types.L)(ty$$308, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$43, (0, _Types.L)(e2$$32, (0, _Types.L)())), m$$255);
}

function mkCallNotEqualsOperator(g$$396, m$$256, ty$$309, e1$$44, e2$$33) {
  return mkApps(g$$396, typedExprForIntrinsic(g$$396, m$$256, (0, _TcGlobals.TcGlobals$$get_not_equals_operator)(g$$396)), (0, _Types.L)((0, _Types.L)(ty$$309, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$44, (0, _Types.L)(e2$$33, (0, _Types.L)())), m$$256);
}

function mkCallLessThanOperator(g$$397, m$$257, ty$$310, e1$$45, e2$$34) {
  return mkApps(g$$397, typedExprForIntrinsic(g$$397, m$$257, (0, _TcGlobals.TcGlobals$$get_less_than_operator)(g$$397)), (0, _Types.L)((0, _Types.L)(ty$$310, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$45, (0, _Types.L)(e2$$34, (0, _Types.L)())), m$$257);
}

function mkCallLessThanOrEqualsOperator(g$$398, m$$258, ty$$311, e1$$46, e2$$35) {
  return mkApps(g$$398, typedExprForIntrinsic(g$$398, m$$258, (0, _TcGlobals.TcGlobals$$get_less_than_or_equals_operator)(g$$398)), (0, _Types.L)((0, _Types.L)(ty$$311, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$46, (0, _Types.L)(e2$$35, (0, _Types.L)())), m$$258);
}

function mkCallGreaterThanOperator(g$$399, m$$259, ty$$312, e1$$47, e2$$36) {
  return mkApps(g$$399, typedExprForIntrinsic(g$$399, m$$259, (0, _TcGlobals.TcGlobals$$get_greater_than_operator)(g$$399)), (0, _Types.L)((0, _Types.L)(ty$$312, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$47, (0, _Types.L)(e2$$36, (0, _Types.L)())), m$$259);
}

function mkCallGreaterThanOrEqualsOperator(g$$400, m$$260, ty$$313, e1$$48, e2$$37) {
  return mkApps(g$$400, typedExprForIntrinsic(g$$400, m$$260, (0, _TcGlobals.TcGlobals$$get_greater_than_or_equals_operator)(g$$400)), (0, _Types.L)((0, _Types.L)(ty$$313, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$48, (0, _Types.L)(e2$$37, (0, _Types.L)())), m$$260);
}

function mkCallAdditionOperator(g$$401, m$$261, ty$$314, e1$$49, e2$$38) {
  return mkApps(g$$401, typedExprForIntrinsic(g$$401, m$$261, (0, _TcGlobals.TcGlobals$$get_unchecked_addition_info)(g$$401)), (0, _Types.L)((0, _Types.L)(ty$$314, (0, _Types.L)(ty$$314, (0, _Types.L)(ty$$314, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$49, (0, _Types.L)(e2$$38, (0, _Types.L)())), m$$261);
}

function mkCallSubtractionOperator(g$$402, m$$262, ty$$315, e1$$50, e2$$39) {
  return mkApps(g$$402, typedExprForIntrinsic(g$$402, m$$262, (0, _TcGlobals.TcGlobals$$get_unchecked_subtraction_info)(g$$402)), (0, _Types.L)((0, _Types.L)(ty$$315, (0, _Types.L)(ty$$315, (0, _Types.L)(ty$$315, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$50, (0, _Types.L)(e2$$39, (0, _Types.L)())), m$$262);
}

function mkCallMultiplyOperator(g$$403, m$$263, ty$$316, e1$$51, e2$$40) {
  return mkApps(g$$403, typedExprForIntrinsic(g$$403, m$$263, (0, _TcGlobals.TcGlobals$$get_unchecked_multiply_info)(g$$403)), (0, _Types.L)((0, _Types.L)(ty$$316, (0, _Types.L)(ty$$316, (0, _Types.L)(ty$$316, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$51, (0, _Types.L)(e2$$40, (0, _Types.L)())), m$$263);
}

function mkCallDivisionOperator(g$$404, m$$264, ty$$317, e1$$52, e2$$41) {
  return mkApps(g$$404, typedExprForIntrinsic(g$$404, m$$264, (0, _TcGlobals.TcGlobals$$get_unchecked_division_info)(g$$404)), (0, _Types.L)((0, _Types.L)(ty$$317, (0, _Types.L)(ty$$317, (0, _Types.L)(ty$$317, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$52, (0, _Types.L)(e2$$41, (0, _Types.L)())), m$$264);
}

function mkCallModulusOperator(g$$405, m$$265, ty$$318, e1$$53, e2$$42) {
  return mkApps(g$$405, typedExprForIntrinsic(g$$405, m$$265, (0, _TcGlobals.TcGlobals$$get_unchecked_modulus_info)(g$$405)), (0, _Types.L)((0, _Types.L)(ty$$318, (0, _Types.L)(ty$$318, (0, _Types.L)(ty$$318, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$53, (0, _Types.L)(e2$$42, (0, _Types.L)())), m$$265);
}

function mkCallBitwiseAndOperator(g$$406, m$$266, ty$$319, e1$$54, e2$$43) {
  return mkApps(g$$406, typedExprForIntrinsic(g$$406, m$$266, (0, _TcGlobals.TcGlobals$$get_bitwise_and_info)(g$$406)), (0, _Types.L)((0, _Types.L)(ty$$319, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$54, (0, _Types.L)(e2$$43, (0, _Types.L)())), m$$266);
}

function mkCallBitwiseOrOperator(g$$407, m$$267, ty$$320, e1$$55, e2$$44) {
  return mkApps(g$$407, typedExprForIntrinsic(g$$407, m$$267, (0, _TcGlobals.TcGlobals$$get_bitwise_or_info)(g$$407)), (0, _Types.L)((0, _Types.L)(ty$$320, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$55, (0, _Types.L)(e2$$44, (0, _Types.L)())), m$$267);
}

function mkCallBitwiseXorOperator(g$$408, m$$268, ty$$321, e1$$56, e2$$45) {
  return mkApps(g$$408, typedExprForIntrinsic(g$$408, m$$268, (0, _TcGlobals.TcGlobals$$get_bitwise_xor_info)(g$$408)), (0, _Types.L)((0, _Types.L)(ty$$321, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$56, (0, _Types.L)(e2$$45, (0, _Types.L)())), m$$268);
}

function mkCallShiftLeftOperator(g$$409, m$$269, ty$$322, e1$$57, e2$$46) {
  return mkApps(g$$409, typedExprForIntrinsic(g$$409, m$$269, (0, _TcGlobals.TcGlobals$$get_bitwise_shift_left_info)(g$$409)), (0, _Types.L)((0, _Types.L)(ty$$322, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$57, (0, _Types.L)(e2$$46, (0, _Types.L)())), m$$269);
}

function mkCallShiftRightOperator(g$$410, m$$270, ty$$323, e1$$58, e2$$47) {
  return mkApps(g$$410, typedExprForIntrinsic(g$$410, m$$270, (0, _TcGlobals.TcGlobals$$get_bitwise_shift_right_info)(g$$410)), (0, _Types.L)((0, _Types.L)(ty$$323, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$58, (0, _Types.L)(e2$$47, (0, _Types.L)())), m$$270);
}

function mkCallUnaryNegOperator(g$$411, m$$271, ty$$324, e1$$59) {
  return mkApps(g$$411, typedExprForIntrinsic(g$$411, m$$271, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_minus_info)(g$$411)), (0, _Types.L)((0, _Types.L)(ty$$324, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$59, (0, _Types.L)()), m$$271);
}

function mkCallUnaryNotOperator(g$$412, m$$272, ty$$325, e1$$60) {
  return mkApps(g$$412, typedExprForIntrinsic(g$$412, m$$272, (0, _TcGlobals.TcGlobals$$get_bitwise_unary_not_info)(g$$412)), (0, _Types.L)((0, _Types.L)(ty$$325, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$60, (0, _Types.L)()), m$$272);
}

function mkCallAdditionChecked(g$$413, m$$273, ty$$326, e1$$61, e2$$48) {
  return mkApps(g$$413, typedExprForIntrinsic(g$$413, m$$273, (0, _TcGlobals.TcGlobals$$get_checked_addition_info)(g$$413)), (0, _Types.L)((0, _Types.L)(ty$$326, (0, _Types.L)(ty$$326, (0, _Types.L)(ty$$326, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$61, (0, _Types.L)(e2$$48, (0, _Types.L)())), m$$273);
}

function mkCallSubtractionChecked(g$$414, m$$274, ty$$327, e1$$62, e2$$49) {
  return mkApps(g$$414, typedExprForIntrinsic(g$$414, m$$274, (0, _TcGlobals.TcGlobals$$get_checked_subtraction_info)(g$$414)), (0, _Types.L)((0, _Types.L)(ty$$327, (0, _Types.L)(ty$$327, (0, _Types.L)(ty$$327, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$62, (0, _Types.L)(e2$$49, (0, _Types.L)())), m$$274);
}

function mkCallMultiplyChecked(g$$415, m$$275, ty$$328, e1$$63, e2$$50) {
  return mkApps(g$$415, typedExprForIntrinsic(g$$415, m$$275, (0, _TcGlobals.TcGlobals$$get_checked_multiply_info)(g$$415)), (0, _Types.L)((0, _Types.L)(ty$$328, (0, _Types.L)(ty$$328, (0, _Types.L)(ty$$328, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(e1$$63, (0, _Types.L)(e2$$50, (0, _Types.L)())), m$$275);
}

function mkCallUnaryNegChecked(g$$416, m$$276, ty$$329, e1$$64) {
  return mkApps(g$$416, typedExprForIntrinsic(g$$416, m$$276, (0, _TcGlobals.TcGlobals$$get_checked_unary_minus_info)(g$$416)), (0, _Types.L)((0, _Types.L)(ty$$329, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$64, (0, _Types.L)()), m$$276);
}

function mkCallToByteChecked(g$$417, m$$277, ty$$330, e1$$65) {
  return mkApps(g$$417, typedExprForIntrinsic(g$$417, m$$277, (0, _TcGlobals.TcGlobals$$get_byte_checked_info)(g$$417)), (0, _Types.L)((0, _Types.L)(ty$$330, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$65, (0, _Types.L)()), m$$277);
}

function mkCallToSByteChecked(g$$418, m$$278, ty$$331, e1$$66) {
  return mkApps(g$$418, typedExprForIntrinsic(g$$418, m$$278, (0, _TcGlobals.TcGlobals$$get_sbyte_checked_info)(g$$418)), (0, _Types.L)((0, _Types.L)(ty$$331, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$66, (0, _Types.L)()), m$$278);
}

function mkCallToInt16Checked(g$$419, m$$279, ty$$332, e1$$67) {
  return mkApps(g$$419, typedExprForIntrinsic(g$$419, m$$279, (0, _TcGlobals.TcGlobals$$get_int16_checked_info)(g$$419)), (0, _Types.L)((0, _Types.L)(ty$$332, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$67, (0, _Types.L)()), m$$279);
}

function mkCallToUInt16Checked(g$$420, m$$280, ty$$333, e1$$68) {
  return mkApps(g$$420, typedExprForIntrinsic(g$$420, m$$280, (0, _TcGlobals.TcGlobals$$get_uint16_checked_info)(g$$420)), (0, _Types.L)((0, _Types.L)(ty$$333, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$68, (0, _Types.L)()), m$$280);
}

function mkCallToIntChecked(g$$421, m$$281, ty$$334, e1$$69) {
  return mkApps(g$$421, typedExprForIntrinsic(g$$421, m$$281, (0, _TcGlobals.TcGlobals$$get_int_checked_info)(g$$421)), (0, _Types.L)((0, _Types.L)(ty$$334, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$69, (0, _Types.L)()), m$$281);
}

function mkCallToInt32Checked(g$$422, m$$282, ty$$335, e1$$70) {
  return mkApps(g$$422, typedExprForIntrinsic(g$$422, m$$282, (0, _TcGlobals.TcGlobals$$get_int32_checked_info)(g$$422)), (0, _Types.L)((0, _Types.L)(ty$$335, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$70, (0, _Types.L)()), m$$282);
}

function mkCallToUInt32Checked(g$$423, m$$283, ty$$336, e1$$71) {
  return mkApps(g$$423, typedExprForIntrinsic(g$$423, m$$283, (0, _TcGlobals.TcGlobals$$get_uint32_checked_info)(g$$423)), (0, _Types.L)((0, _Types.L)(ty$$336, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$71, (0, _Types.L)()), m$$283);
}

function mkCallToInt64Checked(g$$424, m$$284, ty$$337, e1$$72) {
  return mkApps(g$$424, typedExprForIntrinsic(g$$424, m$$284, (0, _TcGlobals.TcGlobals$$get_int64_checked_info)(g$$424)), (0, _Types.L)((0, _Types.L)(ty$$337, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$72, (0, _Types.L)()), m$$284);
}

function mkCallToUInt64Checked(g$$425, m$$285, ty$$338, e1$$73) {
  return mkApps(g$$425, typedExprForIntrinsic(g$$425, m$$285, (0, _TcGlobals.TcGlobals$$get_uint64_checked_info)(g$$425)), (0, _Types.L)((0, _Types.L)(ty$$338, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$73, (0, _Types.L)()), m$$285);
}

function mkCallToIntPtrChecked(g$$426, m$$286, ty$$339, e1$$74) {
  return mkApps(g$$426, typedExprForIntrinsic(g$$426, m$$286, (0, _TcGlobals.TcGlobals$$get_nativeint_checked_info)(g$$426)), (0, _Types.L)((0, _Types.L)(ty$$339, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$74, (0, _Types.L)()), m$$286);
}

function mkCallToUIntPtrChecked(g$$427, m$$287, ty$$340, e1$$75) {
  return mkApps(g$$427, typedExprForIntrinsic(g$$427, m$$287, (0, _TcGlobals.TcGlobals$$get_unativeint_checked_info)(g$$427)), (0, _Types.L)((0, _Types.L)(ty$$340, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$75, (0, _Types.L)()), m$$287);
}

function mkCallToByteOperator(g$$428, m$$288, ty$$341, e1$$76) {
  return mkApps(g$$428, typedExprForIntrinsic(g$$428, m$$288, (0, _TcGlobals.TcGlobals$$get_byte_operator_info)(g$$428)), (0, _Types.L)((0, _Types.L)(ty$$341, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$76, (0, _Types.L)()), m$$288);
}

function mkCallToSByteOperator(g$$429, m$$289, ty$$342, e1$$77) {
  return mkApps(g$$429, typedExprForIntrinsic(g$$429, m$$289, (0, _TcGlobals.TcGlobals$$get_sbyte_operator_info)(g$$429)), (0, _Types.L)((0, _Types.L)(ty$$342, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$77, (0, _Types.L)()), m$$289);
}

function mkCallToInt16Operator(g$$430, m$$290, ty$$343, e1$$78) {
  return mkApps(g$$430, typedExprForIntrinsic(g$$430, m$$290, (0, _TcGlobals.TcGlobals$$get_int16_operator_info)(g$$430)), (0, _Types.L)((0, _Types.L)(ty$$343, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$78, (0, _Types.L)()), m$$290);
}

function mkCallToUInt16Operator(g$$431, m$$291, ty$$344, e1$$79) {
  return mkApps(g$$431, typedExprForIntrinsic(g$$431, m$$291, (0, _TcGlobals.TcGlobals$$get_uint16_operator_info)(g$$431)), (0, _Types.L)((0, _Types.L)(ty$$344, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$79, (0, _Types.L)()), m$$291);
}

function mkCallToIntOperator(g$$432, m$$292, ty$$345, e1$$80) {
  return mkApps(g$$432, typedExprForIntrinsic(g$$432, m$$292, (0, _TcGlobals.TcGlobals$$get_int_operator_info)(g$$432)), (0, _Types.L)((0, _Types.L)(ty$$345, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$80, (0, _Types.L)()), m$$292);
}

function mkCallToInt32Operator(g$$433, m$$293, ty$$346, e1$$81) {
  return mkApps(g$$433, typedExprForIntrinsic(g$$433, m$$293, (0, _TcGlobals.TcGlobals$$get_int32_operator_info)(g$$433)), (0, _Types.L)((0, _Types.L)(ty$$346, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$81, (0, _Types.L)()), m$$293);
}

function mkCallToUInt32Operator(g$$434, m$$294, ty$$347, e1$$82) {
  return mkApps(g$$434, typedExprForIntrinsic(g$$434, m$$294, (0, _TcGlobals.TcGlobals$$get_uint32_operator_info)(g$$434)), (0, _Types.L)((0, _Types.L)(ty$$347, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$82, (0, _Types.L)()), m$$294);
}

function mkCallToInt64Operator(g$$435, m$$295, ty$$348, e1$$83) {
  return mkApps(g$$435, typedExprForIntrinsic(g$$435, m$$295, (0, _TcGlobals.TcGlobals$$get_int64_operator_info)(g$$435)), (0, _Types.L)((0, _Types.L)(ty$$348, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$83, (0, _Types.L)()), m$$295);
}

function mkCallToUInt64Operator(g$$436, m$$296, ty$$349, e1$$84) {
  return mkApps(g$$436, typedExprForIntrinsic(g$$436, m$$296, (0, _TcGlobals.TcGlobals$$get_uint64_operator_info)(g$$436)), (0, _Types.L)((0, _Types.L)(ty$$349, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$84, (0, _Types.L)()), m$$296);
}

function mkCallToSingleOperator(g$$437, m$$297, ty$$350, e1$$85) {
  return mkApps(g$$437, typedExprForIntrinsic(g$$437, m$$297, (0, _TcGlobals.TcGlobals$$get_float32_operator_info)(g$$437)), (0, _Types.L)((0, _Types.L)(ty$$350, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$85, (0, _Types.L)()), m$$297);
}

function mkCallToDoubleOperator(g$$438, m$$298, ty$$351, e1$$86) {
  return mkApps(g$$438, typedExprForIntrinsic(g$$438, m$$298, (0, _TcGlobals.TcGlobals$$get_float_operator_info)(g$$438)), (0, _Types.L)((0, _Types.L)(ty$$351, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$86, (0, _Types.L)()), m$$298);
}

function mkCallToIntPtrOperator(g$$439, m$$299, ty$$352, e1$$87) {
  return mkApps(g$$439, typedExprForIntrinsic(g$$439, m$$299, (0, _TcGlobals.TcGlobals$$get_nativeint_operator_info)(g$$439)), (0, _Types.L)((0, _Types.L)(ty$$352, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$87, (0, _Types.L)()), m$$299);
}

function mkCallToUIntPtrOperator(g$$440, m$$300, ty$$353, e1$$88) {
  return mkApps(g$$440, typedExprForIntrinsic(g$$440, m$$300, (0, _TcGlobals.TcGlobals$$get_unativeint_operator_info)(g$$440)), (0, _Types.L)((0, _Types.L)(ty$$353, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$88, (0, _Types.L)()), m$$300);
}

function mkCallToCharOperator(g$$441, m$$301, ty$$354, e1$$89) {
  return mkApps(g$$441, typedExprForIntrinsic(g$$441, m$$301, (0, _TcGlobals.TcGlobals$$get_char_operator_info)(g$$441)), (0, _Types.L)((0, _Types.L)(ty$$354, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$89, (0, _Types.L)()), m$$301);
}

function mkCallToEnumOperator(g$$442, m$$302, ty$$355, e1$$90) {
  return mkApps(g$$442, typedExprForIntrinsic(g$$442, m$$302, (0, _TcGlobals.TcGlobals$$get_enum_operator_info)(g$$442)), (0, _Types.L)((0, _Types.L)(ty$$355, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$90, (0, _Types.L)()), m$$302);
}

function mkCallArrayLength(g$$443, m$$303, ty$$356, e1$$91) {
  return mkApps(g$$443, typedExprForIntrinsic(g$$443, m$$303, (0, _TcGlobals.TcGlobals$$get_array_length_info)(g$$443)), (0, _Types.L)((0, _Types.L)(ty$$356, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$91, (0, _Types.L)()), m$$303);
}

function mkCallArrayGet(g$$444, m$$304, ty$$357, e1$$92, idx1) {
  return mkApps(g$$444, typedExprForIntrinsic(g$$444, m$$304, (0, _TcGlobals.TcGlobals$$get_array_get_info)(g$$444)), (0, _Types.L)((0, _Types.L)(ty$$357, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$92, (0, _Types.L)(idx1, (0, _Types.L)())), m$$304);
}

function mkCallArray2DGet(g$$445, m$$305, ty$$358, e1$$93, idx1$$1, idx2) {
  return mkApps(g$$445, typedExprForIntrinsic(g$$445, m$$305, (0, _TcGlobals.TcGlobals$$get_array2D_get_info)(g$$445)), (0, _Types.L)((0, _Types.L)(ty$$358, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$93, (0, _Types.L)(idx1$$1, (0, _Types.L)(idx2, (0, _Types.L)()))), m$$305);
}

function mkCallArray3DGet(g$$446, m$$306, ty$$359, e1$$94, idx1$$2, idx2$$1, idx3) {
  return mkApps(g$$446, typedExprForIntrinsic(g$$446, m$$306, (0, _TcGlobals.TcGlobals$$get_array3D_get_info)(g$$446)), (0, _Types.L)((0, _Types.L)(ty$$359, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$94, (0, _Types.L)(idx1$$2, (0, _Types.L)(idx2$$1, (0, _Types.L)(idx3, (0, _Types.L)())))), m$$306);
}

function mkCallArray4DGet(g$$447, m$$307, ty$$360, e1$$95, idx1$$3, idx2$$2, idx3$$1, idx4) {
  return mkApps(g$$447, typedExprForIntrinsic(g$$447, m$$307, (0, _TcGlobals.TcGlobals$$get_array4D_get_info)(g$$447)), (0, _Types.L)((0, _Types.L)(ty$$360, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$95, (0, _Types.L)(idx1$$3, (0, _Types.L)(idx2$$2, (0, _Types.L)(idx3$$1, (0, _Types.L)(idx4, (0, _Types.L)()))))), m$$307);
}

function mkCallArraySet(g$$448, m$$308, ty$$361, e1$$96, idx1$$4, v$$128) {
  return mkApps(g$$448, typedExprForIntrinsic(g$$448, m$$308, (0, _TcGlobals.TcGlobals$$get_array_set_info)(g$$448)), (0, _Types.L)((0, _Types.L)(ty$$361, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$96, (0, _Types.L)(idx1$$4, (0, _Types.L)(v$$128, (0, _Types.L)()))), m$$308);
}

function mkCallArray2DSet(g$$449, m$$309, ty$$362, e1$$97, idx1$$5, idx2$$3, v$$129) {
  return mkApps(g$$449, typedExprForIntrinsic(g$$449, m$$309, (0, _TcGlobals.TcGlobals$$get_array2D_set_info)(g$$449)), (0, _Types.L)((0, _Types.L)(ty$$362, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$97, (0, _Types.L)(idx1$$5, (0, _Types.L)(idx2$$3, (0, _Types.L)(v$$129, (0, _Types.L)())))), m$$309);
}

function mkCallArray3DSet(g$$450, m$$310, ty$$363, e1$$98, idx1$$6, idx2$$4, idx3$$2, v$$130) {
  return mkApps(g$$450, typedExprForIntrinsic(g$$450, m$$310, (0, _TcGlobals.TcGlobals$$get_array3D_set_info)(g$$450)), (0, _Types.L)((0, _Types.L)(ty$$363, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$98, (0, _Types.L)(idx1$$6, (0, _Types.L)(idx2$$4, (0, _Types.L)(idx3$$2, (0, _Types.L)(v$$130, (0, _Types.L)()))))), m$$310);
}

function mkCallArray4DSet(g$$451, m$$311, ty$$364, e1$$99, idx1$$7, idx2$$5, idx3$$3, idx4$$1, v$$131) {
  return mkApps(g$$451, typedExprForIntrinsic(g$$451, m$$311, (0, _TcGlobals.TcGlobals$$get_array4D_set_info)(g$$451)), (0, _Types.L)((0, _Types.L)(ty$$364, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$99, (0, _Types.L)(idx1$$7, (0, _Types.L)(idx2$$5, (0, _Types.L)(idx3$$3, (0, _Types.L)(idx4$$1, (0, _Types.L)(v$$131, (0, _Types.L)())))))), m$$311);
}

function mkCallHash(g$$452, m$$312, ty$$365, e1$$100) {
  return mkApps(g$$452, typedExprForIntrinsic(g$$452, m$$312, (0, _TcGlobals.TcGlobals$$get_hash_info)(g$$452)), (0, _Types.L)((0, _Types.L)(ty$$365, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$100, (0, _Types.L)()), m$$312);
}

function mkCallBox(g$$453, m$$313, ty$$366, e1$$101) {
  return mkApps(g$$453, typedExprForIntrinsic(g$$453, m$$313, (0, _TcGlobals.TcGlobals$$get_box_info)(g$$453)), (0, _Types.L)((0, _Types.L)(ty$$366, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$101, (0, _Types.L)()), m$$313);
}

function mkCallIsNull(g$$454, m$$314, ty$$367, e1$$102) {
  return mkApps(g$$454, typedExprForIntrinsic(g$$454, m$$314, (0, _TcGlobals.TcGlobals$$get_isnull_info)(g$$454)), (0, _Types.L)((0, _Types.L)(ty$$367, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$102, (0, _Types.L)()), m$$314);
}

function mkCallIsNotNull(g$$455, m$$315, ty$$368, e1$$103) {
  return mkApps(g$$455, typedExprForIntrinsic(g$$455, m$$315, (0, _TcGlobals.TcGlobals$$get_isnotnull_info)(g$$455)), (0, _Types.L)((0, _Types.L)(ty$$368, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$103, (0, _Types.L)()), m$$315);
}

function mkCallRaise(g$$456, m$$316, ty$$369, e1$$104) {
  return mkApps(g$$456, typedExprForIntrinsic(g$$456, m$$316, (0, _TcGlobals.TcGlobals$$get_raise_info)(g$$456)), (0, _Types.L)((0, _Types.L)(ty$$369, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$104, (0, _Types.L)()), m$$316);
}

function mkCallNewDecimal(g$$457, m$$317, e1$$105, e2$$51, e3$$8, e4, e5) {
  return mkApps(g$$457, typedExprForIntrinsic(g$$457, m$$317, (0, _TcGlobals.TcGlobals$$get_new_decimal_info)(g$$457)), (0, _Types.L)(), (0, _Types.L)(e1$$105, (0, _Types.L)(e2$$51, (0, _Types.L)(e3$$8, (0, _Types.L)(e4, (0, _Types.L)(e5, (0, _Types.L)()))))), m$$317);
}

function mkCallNewFormat(g$$458, m$$318, aty$$4, bty$$4, cty$$1, dty$$3, ety$$2, e1$$106) {
  return mkApps(g$$458, typedExprForIntrinsic(g$$458, m$$318, (0, _TcGlobals.TcGlobals$$get_new_format_info)(g$$458)), (0, _Types.L)((0, _Types.L)(aty$$4, (0, _Types.L)(bty$$4, (0, _Types.L)(cty$$1, (0, _Types.L)(dty$$3, (0, _Types.L)(ety$$2, (0, _Types.L)()))))), (0, _Types.L)()), (0, _Types.L)(e1$$106, (0, _Types.L)()), m$$318);
}

function TryEliminateDesugaredConstants(_g$$5, _m$$5, _c$$1) {
  return null;
}

function mkSeqTy(g$$459, ty$$370) {
  return mkAppTy((0, _TcGlobals.TcGlobals$$get_seq_tcr)(g$$459), (0, _Types.L)(ty$$370, (0, _Types.L)()));
}

function mkIEnumeratorTy(g$$460, ty$$371) {
  return mkAppTy((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IEnumerator)(g$$460), (0, _Types.L)(ty$$371, (0, _Types.L)()));
}

function mkCallSeqCollect(g$$461, m$$319, alphaTy, betaTy, arg1$$9, arg2$$6) {
  let enumty2;

  try {
    enumty2 = rangeOfFunTy(g$$461, tyOfExpr(g$$461, arg1$$9));
  } catch (matchValue$$153) {
    enumty2 = mkSeqTy(g$$461, betaTy);
  }

  return mkApps(g$$461, typedExprForIntrinsic(g$$461, m$$319, (0, _TcGlobals.TcGlobals$$get_seq_collect_info)(g$$461)), (0, _Types.L)((0, _Types.L)(alphaTy, (0, _Types.L)(enumty2, (0, _Types.L)(betaTy, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(arg1$$9, (0, _Types.L)(arg2$$6, (0, _Types.L)())), m$$319);
}

function mkCallSeqUsing(g$$462, m$$320, resourceTy, elemTy$$5, arg1$$10, arg2$$7) {
  let enumty;

  try {
    enumty = rangeOfFunTy(g$$462, tyOfExpr(g$$462, arg2$$7));
  } catch (matchValue$$154) {
    enumty = mkSeqTy(g$$462, elemTy$$5);
  }

  return mkApps(g$$462, typedExprForIntrinsic(g$$462, m$$320, (0, _TcGlobals.TcGlobals$$get_seq_using_info)(g$$462)), (0, _Types.L)((0, _Types.L)(resourceTy, (0, _Types.L)(enumty, (0, _Types.L)(elemTy$$5, (0, _Types.L)()))), (0, _Types.L)()), (0, _Types.L)(arg1$$10, (0, _Types.L)(arg2$$7, (0, _Types.L)())), m$$320);
}

function mkCallSeqDelay(g$$463, m$$321, elemTy$$6, arg1$$11) {
  return mkApps(g$$463, typedExprForIntrinsic(g$$463, m$$321, (0, _TcGlobals.TcGlobals$$get_seq_delay_info)(g$$463)), (0, _Types.L)((0, _Types.L)(elemTy$$6, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$11, (0, _Types.L)()), m$$321);
}

function mkCallSeqAppend(g$$464, m$$322, elemTy$$7, arg1$$12, arg2$$8) {
  return mkApps(g$$464, typedExprForIntrinsic(g$$464, m$$322, (0, _TcGlobals.TcGlobals$$get_seq_append_info)(g$$464)), (0, _Types.L)((0, _Types.L)(elemTy$$7, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$12, (0, _Types.L)(arg2$$8, (0, _Types.L)())), m$$322);
}

function mkCallSeqGenerated(g$$465, m$$323, elemTy$$8, arg1$$13, arg2$$9) {
  return mkApps(g$$465, typedExprForIntrinsic(g$$465, m$$323, (0, _TcGlobals.TcGlobals$$get_seq_generated_info)(g$$465)), (0, _Types.L)((0, _Types.L)(elemTy$$8, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$13, (0, _Types.L)(arg2$$9, (0, _Types.L)())), m$$323);
}

function mkCallSeqFinally(g$$466, m$$324, elemTy$$9, arg1$$14, arg2$$10) {
  return mkApps(g$$466, typedExprForIntrinsic(g$$466, m$$324, (0, _TcGlobals.TcGlobals$$get_seq_finally_info)(g$$466)), (0, _Types.L)((0, _Types.L)(elemTy$$9, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$14, (0, _Types.L)(arg2$$10, (0, _Types.L)())), m$$324);
}

function mkCallSeqOfFunctions(g$$467, m$$325, ty1$$20, ty2$$14, arg1$$15, arg2$$11, arg3) {
  return mkApps(g$$467, typedExprForIntrinsic(g$$467, m$$325, (0, _TcGlobals.TcGlobals$$get_seq_of_functions_info)(g$$467)), (0, _Types.L)((0, _Types.L)(ty1$$20, (0, _Types.L)(ty2$$14, (0, _Types.L)())), (0, _Types.L)()), (0, _Types.L)(arg1$$15, (0, _Types.L)(arg2$$11, (0, _Types.L)(arg3, (0, _Types.L)()))), m$$325);
}

function mkCallSeqToArray(g$$468, m$$326, elemTy$$10, arg1$$16) {
  return mkApps(g$$468, typedExprForIntrinsic(g$$468, m$$326, (0, _TcGlobals.TcGlobals$$get_seq_to_array_info)(g$$468)), (0, _Types.L)((0, _Types.L)(elemTy$$10, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$16, (0, _Types.L)()), m$$326);
}

function mkCallSeqToList(g$$469, m$$327, elemTy$$11, arg1$$17) {
  return mkApps(g$$469, typedExprForIntrinsic(g$$469, m$$327, (0, _TcGlobals.TcGlobals$$get_seq_to_list_info)(g$$469)), (0, _Types.L)((0, _Types.L)(elemTy$$11, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$17, (0, _Types.L)()), m$$327);
}

function mkCallSeqMap(g$$470, m$$328, inpElemTy, genElemTy, arg1$$18, arg2$$12) {
  return mkApps(g$$470, typedExprForIntrinsic(g$$470, m$$328, (0, _TcGlobals.TcGlobals$$get_seq_map_info)(g$$470)), (0, _Types.L)((0, _Types.L)(inpElemTy, (0, _Types.L)(genElemTy, (0, _Types.L)())), (0, _Types.L)()), (0, _Types.L)(arg1$$18, (0, _Types.L)(arg2$$12, (0, _Types.L)())), m$$328);
}

function mkCallSeqSingleton(g$$471, m$$329, ty1$$21, arg1$$19) {
  return mkApps(g$$471, typedExprForIntrinsic(g$$471, m$$329, (0, _TcGlobals.TcGlobals$$get_seq_singleton_info)(g$$471)), (0, _Types.L)((0, _Types.L)(ty1$$21, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(arg1$$19, (0, _Types.L)()), m$$329);
}

function mkCallSeqEmpty(g$$472, m$$330, ty1$$22) {
  return mkApps(g$$472, typedExprForIntrinsic(g$$472, m$$330, (0, _TcGlobals.TcGlobals$$get_seq_empty_info)(g$$472)), (0, _Types.L)((0, _Types.L)(ty1$$22, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(), m$$330);
}

function mkCallDeserializeQuotationFSharp20Plus(g$$473, m$$331, e1$$107, e2$$52, e3$$9, e4$$1) {
  const args$$36 = (0, _Types.L)(e1$$107, (0, _Types.L)(e2$$52, (0, _Types.L)(e3$$9, (0, _Types.L)(e4$$1, (0, _Types.L)()))));
  return mkApps(g$$473, typedExprForIntrinsic(g$$473, m$$331, (0, _TcGlobals.TcGlobals$$get_deserialize_quoted_FSharp_20_plus_info)(g$$473)), (0, _Types.L)(), (0, _Types.L)(mkRefTupledNoTypes(g$$473, m$$331, args$$36), (0, _Types.L)()), m$$331);
}

function mkCallDeserializeQuotationFSharp40Plus(g$$474, m$$332, e1$$108, e2$$53, e3$$10, e4$$2, e5$$1) {
  const args$$37 = (0, _Types.L)(e1$$108, (0, _Types.L)(e2$$53, (0, _Types.L)(e3$$10, (0, _Types.L)(e4$$2, (0, _Types.L)(e5$$1, (0, _Types.L)())))));
  return mkApps(g$$474, typedExprForIntrinsic(g$$474, m$$332, (0, _TcGlobals.TcGlobals$$get_deserialize_quoted_FSharp_40_plus_info)(g$$474)), (0, _Types.L)(), (0, _Types.L)(mkRefTupledNoTypes(g$$474, m$$332, args$$37), (0, _Types.L)()), m$$332);
}

function mkCallCastQuotation(g$$475, m$$333, ty$$372, e1$$109) {
  return mkApps(g$$475, typedExprForIntrinsic(g$$475, m$$333, (0, _TcGlobals.TcGlobals$$get_cast_quotation_info)(g$$475)), (0, _Types.L)((0, _Types.L)(ty$$372, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$109, (0, _Types.L)()), m$$333);
}

function mkCallLiftValueWithName(g$$476, m$$334, ty$$373, nm$$23, e1$$110) {
  const vref$$63 = (0, _TcGlobals.ValRefForIntrinsic)((0, _TcGlobals.TcGlobals$$get_lift_value_with_name_info)(g$$476));

  if ((0, _tast.ValRef$$get_TryDeref)(vref$$63).tag === 1) {
    return mkApps(g$$476, typedExprForIntrinsic(g$$476, m$$334, (0, _TcGlobals.TcGlobals$$get_lift_value_info)(g$$476)), (0, _Types.L)((0, _Types.L)(ty$$373, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$110, (0, _Types.L)()), m$$334);
  } else {
    return mkApps(g$$476, typedExprForIntrinsic(g$$476, m$$334, (0, _TcGlobals.TcGlobals$$get_lift_value_with_name_info)(g$$476)), (0, _Types.L)((0, _Types.L)(ty$$373, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(mkRefTupledNoTypes(g$$476, m$$334, (0, _Types.L)(e1$$110, (0, _Types.L)(mkString(g$$476, m$$334, nm$$23), (0, _Types.L)()))), (0, _Types.L)()), m$$334);
  }
}

function mkCallLiftValueWithDefn(g$$477, m$$335, qty, e1$$111) {
  const ty$$374 = destQuotedExprTy(g$$477, qty);
  const vref$$64 = (0, _TcGlobals.ValRefForIntrinsic)((0, _TcGlobals.TcGlobals$$get_lift_value_with_defn_info)(g$$477));

  if ((0, _tast.ValRef$$get_TryDeref)(vref$$64).tag === 1) {
    return new _tast.Expr(12, "Quote", e1$$111, new _Types.FSharpRef(null), false, m$$335, qty);
  } else {
    const copyOfExpr = copyExpr(g$$477, new ValCopyFlag(0, "CloneAll"), e1$$111);
    const quoteOfCopyOfExpr = new _tast.Expr(12, "Quote", copyOfExpr, new _Types.FSharpRef(null), false, m$$335, qty);
    return mkApps(g$$477, typedExprForIntrinsic(g$$477, m$$335, (0, _TcGlobals.TcGlobals$$get_lift_value_with_defn_info)(g$$477)), (0, _Types.L)((0, _Types.L)(ty$$374, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(mkRefTupledNoTypes(g$$477, m$$335, (0, _Types.L)(e1$$111, (0, _Types.L)(quoteOfCopyOfExpr, (0, _Types.L)()))), (0, _Types.L)()), m$$335);
  }
}

function mkCallCheckThis(g$$478, m$$336, ty$$375, e1$$112) {
  return mkApps(g$$478, typedExprForIntrinsic(g$$478, m$$336, (0, _TcGlobals.TcGlobals$$get_check_this_info)(g$$478)), (0, _Types.L)((0, _Types.L)(ty$$375, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$112, (0, _Types.L)()), m$$336);
}

function mkCallFailInit(g$$479, m$$337) {
  return mkApps(g$$479, typedExprForIntrinsic(g$$479, m$$337, (0, _TcGlobals.TcGlobals$$get_fail_init_info)(g$$479)), (0, _Types.L)(), (0, _Types.L)(mkUnit(g$$479, m$$337), (0, _Types.L)()), m$$337);
}

function mkCallFailStaticInit(g$$480, m$$338) {
  return mkApps(g$$480, typedExprForIntrinsic(g$$480, m$$338, (0, _TcGlobals.TcGlobals$$get_fail_static_init_info)(g$$480)), (0, _Types.L)(), (0, _Types.L)(mkUnit(g$$480, m$$338), (0, _Types.L)()), m$$338);
}

function mkCallQuoteToLinqLambdaExpression(g$$481, m$$339, ty$$376, e1$$113) {
  return mkApps(g$$481, typedExprForIntrinsic(g$$481, m$$339, (0, _TcGlobals.TcGlobals$$get_quote_to_linq_lambda_info)(g$$481)), (0, _Types.L)((0, _Types.L)(ty$$376, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e1$$113, (0, _Types.L)()), m$$339);
}

function mkLazyDelayed(g$$482, m$$340, ty$$377, f$$74) {
  return mkApps(g$$482, typedExprForIntrinsic(g$$482, m$$340, (0, _TcGlobals.TcGlobals$$get_lazy_create_info)(g$$482)), (0, _Types.L)((0, _Types.L)(ty$$377, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(f$$74, (0, _Types.L)()), m$$340);
}

function mkLazyForce(g$$483, m$$341, ty$$378, e$$93) {
  return mkApps(g$$483, typedExprForIntrinsic(g$$483, m$$341, (0, _TcGlobals.TcGlobals$$get_lazy_force_info)(g$$483)), (0, _Types.L)((0, _Types.L)(ty$$378, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)(e$$93, (0, _Types.L)(mkUnit(g$$483, m$$341), (0, _Types.L)())), m$$341);
}

function mkGetString(g$$484, m$$342, e1$$114, e2$$54) {
  return mkApps(g$$484, typedExprForIntrinsic(g$$484, m$$342, (0, _TcGlobals.TcGlobals$$get_getstring_info)(g$$484)), (0, _Types.L)(), (0, _Types.L)(e1$$114, (0, _Types.L)(e2$$54, (0, _Types.L)())), m$$342);
}

function mkGetStringChar(g$$485) {
  return function (m$$343) {
    return function (e1$$115) {
      return function (e2$$55) {
        return mkGetString(g$$485, m$$343, e1$$115, e2$$55);
      };
    };
  };
}

function mkGetStringLength(g$$486, m$$344, e$$94) {
  const mspec$$9 = mspec_String_Length(g$$486);
  return new _tast.Expr(11, "Op", new _tast.TOp(31, "ILCall", false, false, false, false, new _tast.ValUseFlag(1, "NormalValUse"), true, false, (0, _il.ILMethodSpec$$get_MethodRef)(mspec$$9), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$486), (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(e$$94, (0, _Types.L)()), m$$344);
}

function mkDecr(g$$487, m$$345, e$$95) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(22, "AI_sub"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e$$95, (0, _Types.L)(mkOne(g$$487, m$$345), (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$487), (0, _Types.L)()), m$$345);
}

function mkIncr(g$$488, m$$346, e$$96) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(0, "AI_add"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(mkOne(g$$488, m$$346), (0, _Types.L)(e$$96, (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$488), (0, _Types.L)()), m$$346);
}

function mkLdlen(g$$489, m$$347, arre) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(84, "I_ldlen"), (0, _Types.L)(new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(5, "DT_I4")), (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(arre, (0, _Types.L)()), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$489), (0, _Types.L)()), m$$347);
}

function mkLdelem(_g$$6, m$$348, ty$$379, arre$$1, idxe) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(81, "I_ldelem_any", (0, _il.ILArrayShape$$$get_SingleDimensional)(), (0, _il.mkILTyvarTy)(0)), (0, _Types.L)()), (0, _Types.L)(ty$$379, (0, _Types.L)()), (0, _Types.L)(arre$$1, (0, _Types.L)(idxe, (0, _Types.L)())), (0, _Types.L)(ty$$379, (0, _Types.L)()), m$$348);
}

function mkILAsmCeq(g$$490, m$$349, e1$$116, e2$$56) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(6, "AI_ceq"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e1$$116, (0, _Types.L)(e2$$56, (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$490), (0, _Types.L)()), m$$349);
}

function mkILAsmClt(g$$491, m$$350, e1$$117, e2$$57) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(9, "AI_clt"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e1$$117, (0, _Types.L)(e2$$57, (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$491), (0, _Types.L)()), m$$350);
}

function mkNull(m$$351, ty$$380) {
  return new _tast.Expr(0, "Const", new _tast.Const(17, "Zero"), m$$351, ty$$380);
}

function mkThrow(m$$352, ty$$381, e$$97) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(54, "I_throw"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e$$97, (0, _Types.L)()), (0, _Types.L)(ty$$381, (0, _Types.L)()), m$$352);
}

function destThrow(_arg1$$118) {
  var $target$$300, e$$98, m$$353, ty2$$15;

  if (_arg1$$118.tag === 11) {
    if (_arg1$$118.fields[0].tag === 22) {
      if (_arg1$$118.fields[0].fields[0].tail != null) {
        if (_arg1$$118.fields[0].fields[0].head.tag === 54) {
          if (_arg1$$118.fields[0].fields[0].tail.tail == null) {
            if (_arg1$$118.fields[0].fields[1].tail != null) {
              if (_arg1$$118.fields[0].fields[1].tail.tail == null) {
                if (_arg1$$118.fields[1].tail == null) {
                  if (_arg1$$118.fields[2].tail != null) {
                    if (_arg1$$118.fields[2].tail.tail == null) {
                      $target$$300 = 0;
                      e$$98 = _arg1$$118.fields[2].head;
                      m$$353 = _arg1$$118.fields[3];
                      ty2$$15 = _arg1$$118.fields[0].fields[1].head;
                    } else {
                      $target$$300 = 1;
                    }
                  } else {
                    $target$$300 = 1;
                  }
                } else {
                  $target$$300 = 1;
                }
              } else {
                $target$$300 = 1;
              }
            } else {
              $target$$300 = 1;
            }
          } else {
            $target$$300 = 1;
          }
        } else {
          $target$$300 = 1;
        }
      } else {
        $target$$300 = 1;
      }
    } else {
      $target$$300 = 1;
    }
  } else {
    $target$$300 = 1;
  }

  switch ($target$$300) {
    case 0:
      {
        return [m$$353, ty2$$15, e$$98];
      }

    case 1:
      {
        return null;
      }
  }
}

function isThrow(x$$305) {
  return destThrow(x$$305) != null;
}

function mkReraiseLibCall(g$$492, ty$$382, m$$354) {
  const patternInput$$99 = typedExprForIntrinsic(g$$492, m$$354, (0, _TcGlobals.TcGlobals$$get_reraise_info)(g$$492));
  return new _tast.Expr(5, "App", patternInput$$99[0], patternInput$$99[1], (0, _Types.L)(ty$$382, (0, _Types.L)()), (0, _Types.L)(mkUnit(g$$492, m$$354), (0, _Types.L)()), m$$354);
}

function mkReraise(m$$355, returnTy) {
  return new _tast.Expr(11, "Op", new _tast.TOp(25, "Reraise"), (0, _Types.L)(returnTy, (0, _Types.L)()), (0, _Types.L)(), m$$355);
}

const tnameCompilationSourceNameAttr = _ast.FSharpLib$$$Core + ".CompilationSourceNameAttribute";
exports.tnameCompilationSourceNameAttr = tnameCompilationSourceNameAttr;
const tnameCompilationArgumentCountsAttr = _ast.FSharpLib$$$Core + ".CompilationArgumentCountsAttribute";
exports.tnameCompilationArgumentCountsAttr = tnameCompilationArgumentCountsAttr;
const tnameCompilationMappingAttr = _ast.FSharpLib$$$Core + ".CompilationMappingAttribute";
exports.tnameCompilationMappingAttr = tnameCompilationMappingAttr;
const tnameSourceConstructFlags = _ast.FSharpLib$$$Core + ".SourceConstructFlags";
exports.tnameSourceConstructFlags = tnameSourceConstructFlags;

function tref_CompilationArgumentCountsAttr(g$$493) {
  return (0, _il.mkILTyRef)((0, _tast.CcuThunk$$get_ILScopeRef)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(g$$493)), tnameCompilationArgumentCountsAttr);
}

function tref_CompilationMappingAttr(g$$494) {
  return (0, _il.mkILTyRef)((0, _tast.CcuThunk$$get_ILScopeRef)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(g$$494)), tnameCompilationMappingAttr);
}

function tref_CompilationSourceNameAttr(g$$495) {
  return (0, _il.mkILTyRef)((0, _tast.CcuThunk$$get_ILScopeRef)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(g$$495)), tnameCompilationSourceNameAttr);
}

function tref_SourceConstructFlags(g$$496) {
  return (0, _il.mkILTyRef)((0, _tast.CcuThunk$$get_ILScopeRef)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(g$$496)), tnameSourceConstructFlags);
}

function mkCompilationMappingAttrPrim(g$$497, k$$3, nums) {
  return (0, _il.mkILCustomAttribute)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$497), tref_CompilationMappingAttr(g$$497), (0, _Types.L)((0, _il.mkILNonGenericValueTy)(tref_SourceConstructFlags(g$$497)), (0, _List.map)(function mapping$$52(_arg1$$119) {
    return (0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$497));
  }, nums)), (0, _List.map)(function mapping$$53(n$$41) {
    return new _il.ILAttribElem(5, "Int32", n$$41);
  }, (0, _Types.L)(k$$3, nums)), (0, _Types.L)());
}

function mkCompilationMappingAttr(g$$498, kind$$3) {
  return mkCompilationMappingAttrPrim(g$$498, kind$$3, (0, _Types.L)());
}

function mkCompilationMappingAttrWithSeqNum(g$$499, kind$$4, seqNum) {
  return mkCompilationMappingAttrPrim(g$$499, kind$$4, (0, _Types.L)(seqNum, (0, _Types.L)()));
}

function mkCompilationMappingAttrWithVariantNumAndSeqNum(g$$500, kind$$5, varNum, seqNum$$1) {
  return mkCompilationMappingAttrPrim(g$$500, kind$$5, (0, _Types.L)(varNum, (0, _Types.L)(seqNum$$1, (0, _Types.L)())));
}

function mkCompilationArgumentCountsAttr(g$$501, nums$$1) {
  return (0, _il.mkILCustomAttribute)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$501), tref_CompilationArgumentCountsAttr(g$$501), (0, _Types.L)((0, _il.mkILArr1DTy)((0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$501))), (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(16, "Array", (0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$501)), (0, _List.map)(function (n$$42) {
    return new _il.ILAttribElem(5, "Int32", n$$42);
  }, nums$$1)), (0, _Types.L)()), (0, _Types.L)());
}

function mkCompilationSourceNameAttr(g$$502, n$$43) {
  return (0, _il.mkILCustomAttribute)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$502), tref_CompilationSourceNameAttr(g$$502), (0, _Types.L)((0, _il.ILGlobals$$get_typ_String)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$502)), (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(0, "String", n$$43), (0, _Types.L)()), (0, _Types.L)());
}

function mkCompilationMappingAttrForQuotationResource(g$$503, nm$$24, tys$$38) {
  return (0, _il.mkILCustomAttribute)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$503), tref_CompilationMappingAttr(g$$503), (0, _Types.L)((0, _il.ILGlobals$$get_typ_String)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$503)), (0, _Types.L)((0, _il.mkILArr1DTy)((0, _il.ILGlobals$$get_typ_Type)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$503))), (0, _Types.L)())), (0, _Types.L)(new _il.ILAttribElem(0, "String", nm$$24), (0, _Types.L)(new _il.ILAttribElem(16, "Array", (0, _il.ILGlobals$$get_typ_Type)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$503)), (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (ty$$383) {
      return new _il.ILAttribElem(15, "TypeRef", ty$$383);
    }, tys$$38);
  }))), (0, _Types.L)())), (0, _Types.L)());
}

const tname_SignatureDataVersionAttr = _ast.FSharpLib$$$Core + ".FSharpInterfaceDataVersionAttribute";
exports.tname_SignatureDataVersionAttr = tname_SignatureDataVersionAttr;
const tnames_SignatureDataVersionAttr = (0, _il.splitILTypeName)(tname_SignatureDataVersionAttr);
exports.tnames_SignatureDataVersionAttr = tnames_SignatureDataVersionAttr;

function tref_SignatureDataVersionAttr() {
  return (0, _il.mkILTyRef)((0, _ilxsettings.ilxFsharpCoreLibScopeRef)(), tname_SignatureDataVersionAttr);
}

function mkSignatureDataVersionAttr(g$$504, _arg1$$120) {
  return (0, _il.mkILCustomAttribute)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$504), tref_SignatureDataVersionAttr(), (0, _Types.L)((0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$504)), (0, _Types.L)((0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$504)), (0, _Types.L)((0, _il.ILGlobals$$get_typ_Int32)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$504)), (0, _Types.L)()))), (0, _Types.L)(new _il.ILAttribElem(5, "Int32", ~~_arg1$$120[0]), (0, _Types.L)(new _il.ILAttribElem(5, "Int32", ~~_arg1$$120[1]), (0, _Types.L)(new _il.ILAttribElem(5, "Int32", ~~_arg1$$120[2]), (0, _Types.L)()))), (0, _Types.L)());
}

const tname_AutoOpenAttr = _ast.FSharpLib$$$Core + ".AutoOpenAttribute";
exports.tname_AutoOpenAttr = tname_AutoOpenAttr;

function IsSignatureDataVersionAttr(cattr) {
  return isILAttribByName((0, _Types.L)(), tname_SignatureDataVersionAttr, cattr);
}

function TryFindAutoOpenAttr(ilg, cattr$$1) {
  if (isILAttribByName((0, _Types.L)(), tname_AutoOpenAttr, cattr$$1)) {
    const matchValue$$157 = (0, _il.decodeILAttribData)(ilg, cattr$$1);
    var $target$$301, s$$9;

    if (matchValue$$157[0].tail == null) {
      $target$$301 = 1;
    } else if (matchValue$$157[0].head.tag === 0) {
      if (matchValue$$157[0].tail.tail == null) {
        $target$$301 = 0;
        s$$9 = matchValue$$157[0].head.fields[0];
      } else {
        $target$$301 = 2;
      }
    } else {
      $target$$301 = 2;
    }

    switch ($target$$301) {
      case 0:
        {
          return s$$9;
        }

      case 1:
        {
          return null;
        }

      case 2:
        {
          (0, _ErrorLogger.warning)((0, _FSharp.Operators$$$Failure)((0, _FSComp.SR$$$tastUnexpectedDecodeOfAutoOpenAttribute)()));
          return null;
        }
    }
  } else {
    return null;
  }
}

const tname_InternalsVisibleToAttr = "System.Runtime.CompilerServices.InternalsVisibleToAttribute";
exports.tname_InternalsVisibleToAttr = tname_InternalsVisibleToAttr;

function TryFindInternalsVisibleToAttr(ilg$$1, cattr$$2) {
  if (isILAttribByName((0, _Types.L)(), tname_InternalsVisibleToAttr, cattr$$2)) {
    const matchValue$$158 = (0, _il.decodeILAttribData)(ilg$$1, cattr$$2);
    var $target$$302, s$$10;

    if (matchValue$$158[0].tail == null) {
      $target$$302 = 1;
    } else if (matchValue$$158[0].head.tag === 0) {
      if (matchValue$$158[0].tail.tail == null) {
        $target$$302 = 0;
        s$$10 = matchValue$$158[0].head.fields[0];
      } else {
        $target$$302 = 2;
      }
    } else {
      $target$$302 = 2;
    }

    switch ($target$$302) {
      case 0:
        {
          return s$$10;
        }

      case 1:
        {
          return null;
        }

      case 2:
        {
          (0, _ErrorLogger.warning)((0, _FSharp.Operators$$$Failure)((0, _FSComp.SR$$$tastUnexpectedDecodeOfInternalsVisibleToAttribute)()));
          return null;
        }
    }
  } else {
    return null;
  }
}

function IsMatchingSignatureDataVersionAttr(ilg$$2, _arg1$$121, cattr$$3) {
  if (IsSignatureDataVersionAttr(cattr$$3)) {
    const matchValue$$159 = (0, _il.decodeILAttribData)(ilg$$2, cattr$$3);
    var $target$$303, u1$$1, u2$$1, u3;

    if (matchValue$$159[0].tail != null) {
      if (matchValue$$159[0].head.tag === 5) {
        if (matchValue$$159[0].tail.tail != null) {
          if (matchValue$$159[0].tail.head.tag === 5) {
            if (matchValue$$159[0].tail.tail.tail != null) {
              if (matchValue$$159[0].tail.tail.head.tag === 5) {
                if (matchValue$$159[0].tail.tail.tail.tail == null) {
                  $target$$303 = 0;
                  u1$$1 = matchValue$$159[0].head.fields[0];
                  u2$$1 = matchValue$$159[0].tail.head.fields[0];
                  u3 = matchValue$$159[0].tail.tail.head.fields[0];
                } else {
                  $target$$303 = 1;
                }
              } else {
                $target$$303 = 1;
              }
            } else {
              $target$$303 = 1;
            }
          } else {
            $target$$303 = 1;
          }
        } else {
          $target$$303 = 1;
        }
      } else {
        $target$$303 = 1;
      }
    } else {
      $target$$303 = 1;
    }

    switch ($target$$303) {
      case 0:
        {
          if (_arg1$$121[0] === (u1$$1 & 0xFFFF) ? _arg1$$121[1] === (u2$$1 & 0xFFFF) : false) {
            return _arg1$$121[2] === (u3 & 0xFFFF);
          } else {
            return false;
          }
        }

      case 1:
        {
          (0, _ErrorLogger.warning)((0, _FSharp.Operators$$$Failure)((0, _FSComp.SR$$$tastUnexpectedDecodeOfInterfaceDataVersionAttribute)()));
          return false;
        }
    }
  } else {
    return false;
  }
}

function mkCompilerGeneratedAttr(g$$505, n$$44) {
  return (0, _il.mkILCustomAttribute)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$505), tref_CompilationMappingAttr(g$$505), (0, _Types.L)((0, _il.mkILNonGenericValueTy)(tref_SourceConstructFlags(g$$505)), (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(5, "Int32", n$$44), (0, _Types.L)()), (0, _Types.L)());
}

function untupledToRefTupled(g$$506, vs$$51) {
  const untupledTys = (0, _tast.typesOfVals)(vs$$51);
  const m$$356 = (0, _tast.Val$$get_Range)((0, _List.head)(vs$$51));
  const patternInput$$100 = mkCompGenLocal(m$$356, "tupledArg", mkRefTupledTy(g$$506, untupledTys));
  const untupling_es = (0, _List.mapIndexed)(function (i$$27, _arg1$$122) {
    return mkTupleFieldGet(g$$506, _tast.tupInfoRef, patternInput$$100[1], untupledTys, i$$27, m$$356);
  }, untupledTys);
  return [patternInput$$100[0], function (body$$32) {
    return mkInvisibleLets(m$$356, vs$$51, untupling_es, body$$32);
  }];
}

function AdjustArityOfLambdaBody(g$$507, arity$$2, vs$$52, body$$33) {
  const nvs = (0, _List.length)(vs$$52) | 0;

  if (!((nvs === arity$$2 ? true : nvs === 1) ? true : arity$$2 === 1)) {
    throw new Error("lengths don't add up");
  }

  if (arity$$2 === 0) {
    return [vs$$52, body$$33];
  } else if (nvs === arity$$2) {
    return [vs$$52, body$$33];
  } else if (nvs === 1) {
    const v$$132 = (0, _List.head)(vs$$52);
    const untupledTys$$1 = destRefTupleTy(g$$507, (0, _tast.Val$$get_Type)(v$$132));

    if ((0, _List.length)(untupledTys$$1) !== arity$$2) {
      throw new Error("length untupledTys <> arity");
    }

    const patternInput$$101 = (0, _List.unzip)((0, _List.mapIndexed)(function mapping$$54(i$$28, ty$$384) {
      return mkCompGenLocal((0, _tast.Val$$get_Range)(v$$132), (0, _tast.Val$$get_LogicalName)(v$$132) + "_" + (0, _Util.int32ToString)(i$$28), ty$$384);
    }, untupledTys$$1));
    const body$$34 = mkInvisibleLet((0, _tast.Val$$get_Range)(v$$132), v$$132, mkRefTupled(g$$507, (0, _tast.Val$$get_Range)(v$$132), patternInput$$101[1], untupledTys$$1), body$$33);
    return [patternInput$$101[0], body$$34];
  } else {
    const patternInput$$102 = untupledToRefTupled(g$$507, vs$$52);
    return [(0, _Types.L)(patternInput$$102[0], (0, _Types.L)()), patternInput$$102[1](body$$33)];
  }
}

function MultiLambdaToTupledLambda(g$$508, vs$$53, body$$35) {
  if (vs$$53.tail != null) {
    if (vs$$53.tail.tail == null) {
      return [vs$$53.head, body$$35];
    } else {
      const patternInput$$103 = untupledToRefTupled(g$$508, vs$$53);
      return [patternInput$$103[0], patternInput$$103[1](body$$35)];
    }
  } else {
    throw new Error("MultiLambdaToTupledLambda: expected some argments");
  }
}

function $007CRefTuple$007C_$007C(expr$$25) {
  var $target$$304, args$$38;

  if (expr$$25.tag === 11) {
    if (expr$$25.fields[0].tag === 2) {
      if (expr$$25.fields[0].fields[0].fields[0]) {
        $target$$304 = 1;
      } else {
        $target$$304 = 0;
        args$$38 = expr$$25.fields[2];
      }
    } else {
      $target$$304 = 1;
    }
  } else {
    $target$$304 = 1;
  }

  switch ($target$$304) {
    case 0:
      {
        return args$$38;
      }

    case 1:
      {
        return null;
      }
  }
}

function MultiLambdaToTupledLambdaIfNeeded(g$$509, vs$$55, arg$$7, body$$36) {
  var args$$39;
  const matchValue$$160 = [vs$$55, arg$$7];
  var $target$$305, v$$134, args$$40, vs$$57;

  if (matchValue$$160[0].tail != null) {
    if (matchValue$$160[0].tail.tail == null) {
      $target$$305 = 1;
      v$$134 = matchValue$$160[0].head;
    } else {
      const activePatternResult34713 = $007CRefTuple$007C_$007C(matchValue$$160[1]);

      if (activePatternResult34713 != null) {
        if (args$$39 = activePatternResult34713, (0, _List.length)(args$$39) === (0, _List.length)(matchValue$$160[0])) {
          $target$$305 = 2;
          args$$40 = activePatternResult34713;
          vs$$57 = matchValue$$160[0];
        } else {
          $target$$305 = 3;
        }
      } else {
        $target$$305 = 3;
      }
    }
  } else {
    $target$$305 = 0;
  }

  switch ($target$$305) {
    case 0:
      {
        throw new Error("MultiLambdaToTupledLambda: expected some argments");
      }

    case 1:
      {
        return [(0, _Types.L)([v$$134, arg$$7], (0, _Types.L)()), body$$36];
      }

    case 2:
      {
        return [(0, _List.zip)(vs$$57, args$$40), body$$36];
      }

    case 3:
      {
        const patternInput$$104 = untupledToRefTupled(g$$509, matchValue$$160[0]);
        return [(0, _Types.L)([patternInput$$104[0], arg$$7], (0, _Types.L)()), patternInput$$104[1](body$$36)];
      }
  }
}

function MakeApplicationAndBetaReduceAux(g$$510, f$$75, fty$$7, tyargsl$$2, argsl$$4, m$$357) {
  var tyvs$$2, bodyty, body$$38;

  MakeApplicationAndBetaReduceAux: while (true) {
    if (f$$75.tag === 7) {
      const mlet = f$$75.fields[2];
      const body$$37 = f$$75.fields[1];
      const bind$$36 = f$$75.fields[0];
      return mkLetBind(mlet, bind$$36, MakeApplicationAndBetaReduceAux(g$$510, body$$37, fty$$7, tyargsl$$2, argsl$$4, m$$357));
    } else {
      if (tyargsl$$2.tail == null) {
        if (argsl$$4.tail == null) {
          return f$$75;
        } else {
          const matchValue$$161 = tryStripLambdaN((0, _List.length)(argsl$$4), f$$75);

          if (matchValue$$161 != null) {
            const body$$41 = matchValue$$161[1];
            const argvsl$$1 = matchValue$$161[0];
            const patternInput$$105 = (0, _List.mapFoldBack)(function (tupledArg$$76, body$$42) {
              return MultiLambdaToTupledLambdaIfNeeded(g$$510, tupledArg$$76[0], tupledArg$$76[1], body$$42);
            }, (0, _List.zip)(argvsl$$1, argsl$$4), body$$41);
            const patternInput$$106 = (0, _List.unzip)((0, _List.concat)(patternInput$$105[0]));
            return mkLetsBind(m$$357, mkCompGenBinds(patternInput$$106[0], patternInput$$106[1]), patternInput$$105[1]);
          } else {
            return mkExprApplAux(g$$510, f$$75, fty$$7, argsl$$4, m$$357);
          }
        }
      } else if (tyargsl$$2.head.tail == null) {
        g$$510 = g$$510;
        f$$75 = f$$75;
        fty$$7 = fty$$7;
        tyargsl$$2 = tyargsl$$2.tail;
        argsl$$4 = argsl$$4;
        m$$357 = m$$357;
        continue MakeApplicationAndBetaReduceAux;
      } else {
        var $target$$306, body$$39, bodyty$$1, tyvs$$3;

        if (f$$75.tag === 4) {
          if (tyvs$$2 = f$$75.fields[1], (bodyty = f$$75.fields[4], (body$$38 = f$$75.fields[2], (0, _List.length)(tyvs$$2) === (0, _List.length)(tyargsl$$2.head)))) {
            $target$$306 = 0;
            body$$39 = f$$75.fields[2];
            bodyty$$1 = f$$75.fields[4];
            tyvs$$3 = f$$75.fields[1];
          } else {
            $target$$306 = 1;
          }
        } else {
          $target$$306 = 1;
        }

        switch ($target$$306) {
          case 0:
            {
              const tpenv = bindTypars(tyvs$$3, tyargsl$$2.head, emptyTyparInst);
              const body$$40 = remarkExpr(m$$357, instExpr(g$$510, tpenv, body$$39));
              const bodyty$0027 = instType(tpenv, bodyty$$1);
              g$$510 = g$$510;
              f$$75 = body$$40;
              fty$$7 = bodyty$0027;
              tyargsl$$2 = tyargsl$$2.tail;
              argsl$$4 = argsl$$4;
              m$$357 = m$$357;
              continue MakeApplicationAndBetaReduceAux;
            }

          case 1:
            {
              const f$$76 = mkAppsAux(g$$510, f$$75, fty$$7, (0, _Types.L)(tyargsl$$2.head, (0, _Types.L)()), (0, _Types.L)(), m$$357);
              const fty$$8 = applyTyArgs(g$$510, fty$$7, tyargsl$$2.head);
              g$$510 = g$$510;
              f$$75 = f$$76;
              fty$$7 = fty$$8;
              tyargsl$$2 = tyargsl$$2.tail;
              argsl$$4 = argsl$$4;
              m$$357 = m$$357;
              continue MakeApplicationAndBetaReduceAux;
            }
        }
      }
    }
  }
}

function MakeApplicationAndBetaReduce(g$$511, f$$77, fty$$9, tyargsl$$3, argl$$1, m$$358) {
  return MakeApplicationAndBetaReduceAux(g$$511, f$$77, fty$$9, tyargsl$$3, argl$$1, m$$358);
}

function MakeArgsForTopArgs(_g$$7, m$$359, argtysl$$2, tpenv$$1) {
  return (0, _List.mapIndexed)(function mapping$$56(i$$29, argtys$$14) {
    return (0, _List.mapIndexed)(function mapping$$55(j$$12, tupledArg$$77) {
      const ty$$385 = instType(tpenv$$1, tupledArg$$77[0]);
      let nm$$25;
      const matchValue$$162 = tupledArg$$77[1].Name;

      if (matchValue$$162 != null) {
        const id$$5 = matchValue$$162;
        nm$$25 = (0, _ast.Ident$$get_idText)(id$$5);
      } else {
        nm$$25 = (0, _PrettyNaming.CompilerGeneratedName)("arg" + (0, _Util.int32ToString)(i$$29) + (0, _Util.int32ToString)(j$$12));
      }

      return mkCompGenLocal(m$$359, nm$$25, ty$$385)[0];
    }, argtys$$14);
  }, argtysl$$2);
}

function AdjustValForExpectedArity(g$$512, m$$360, vref$$65, flags$$2, topValInfo$$10) {
  const patternInput$$107 = GetTopValTypeInFSharpForm(g$$512, topValInfo$$10, (0, _tast.ValRef$$get_Type)(vref$$65), m$$360);
  const tps$0027$$7 = (0, _tast.copyTypars)(patternInput$$107[0]);
  const tyargs$0027$$1 = (0, _List.map)(_tast.mkTyparTy, tps$0027$$7);
  const tpenv$$2 = bindTypars(patternInput$$107[0], tyargs$0027$$1, emptyTyparInst);
  const rty$0027$$1 = instType(tpenv$$2, patternInput$$107[2]);
  const vsl$$5 = MakeArgsForTopArgs(g$$512, m$$360, patternInput$$107[1], tpenv$$2);
  const call = MakeApplicationAndBetaReduce(g$$512, new _tast.Expr(1, "Val", vref$$65, flags$$2, m$$360), (0, _tast.ValRef$$get_Type)(vref$$65), (0, _Types.L)(tyargs$0027$$1, (0, _Types.L)()), (0, _List.map)(function (arg20$0040$$33) {
    return mkRefTupledVars(g$$512, m$$360, arg20$0040$$33);
  }, vsl$$5), m$$360);
  const patternInput$$108 = (0, _List.foldBack)(function (vs$$60, tupledArg$$78) {
    return [mkMultiLambda(m$$360, vs$$60, tupledArg$$78[0], tupledArg$$78[1]), op_MinusMinusGreater(mkRefTupledVarsTy(g$$512, vs$$60), tupledArg$$78[1])];
  }, vsl$$5, [call, rty$0027$$1]);
  return [mkTypeLambda(m$$360, tps$0027$$7, patternInput$$108[0], patternInput$$108[1]), op_PlusMinusGreater(tps$0027$$7, patternInput$$108[1])];
}

function IsSubsumptionExpr(g$$513, expr$$26) {
  var $target$$307, actualTy, inputTy;

  if (expr$$26.tag === 11) {
    if (expr$$26.fields[0].tag === 24) {
      if (expr$$26.fields[1].tail != null) {
        if (expr$$26.fields[1].tail.tail != null) {
          if (expr$$26.fields[1].tail.tail.tail == null) {
            if (expr$$26.fields[2].tail != null) {
              if (expr$$26.fields[2].tail.tail == null) {
                $target$$307 = 0;
                actualTy = expr$$26.fields[1].tail.head;
                inputTy = expr$$26.fields[1].head;
              } else {
                $target$$307 = 1;
              }
            } else {
              $target$$307 = 1;
            }
          } else {
            $target$$307 = 1;
          }
        } else {
          $target$$307 = 1;
        }
      } else {
        $target$$307 = 1;
      }
    } else {
      $target$$307 = 1;
    }
  } else {
    $target$$307 = 1;
  }

  switch ($target$$307) {
    case 0:
      {
        if (isFunTy(g$$513, actualTy)) {
          return isFunTy(g$$513, inputTy);
        } else {
          return false;
        }
      }

    case 1:
      {
        return false;
      }
  }
}

function stripTupledFunTy(g$$514, ty$$387) {
  const patternInput$$109 = stripFunTy(g$$514, ty$$387);
  const curriedArgTys = (0, _List.map)(function mapping$$57(arg10$0040$$113) {
    return tryDestRefTupleTy(g$$514, arg10$0040$$113);
  }, patternInput$$109[0]);
  return [curriedArgTys, patternInput$$109[1]];
}

function $007CExprValWithPossibleTypeInst$007C_$007C(expr$$27) {
  var $target$$308, _fty$$1, flags$$3, m$$361, tyargs$$26, vref$$66, flags$$4, m$$362, vref$$67;

  if (expr$$27.tag === 5) {
    if (expr$$27.fields[0].tag === 1) {
      if (expr$$27.fields[3].tail == null) {
        $target$$308 = 0;
        _fty$$1 = expr$$27.fields[1];
        flags$$3 = expr$$27.fields[0].fields[1];
        m$$361 = expr$$27.fields[0].fields[2];
        tyargs$$26 = expr$$27.fields[2];
        vref$$66 = expr$$27.fields[0].fields[0];
      } else {
        $target$$308 = 2;
      }
    } else {
      $target$$308 = 2;
    }
  } else if (expr$$27.tag === 1) {
    $target$$308 = 1;
    flags$$4 = expr$$27.fields[1];
    m$$362 = expr$$27.fields[2];
    vref$$67 = expr$$27.fields[0];
  } else {
    $target$$308 = 2;
  }

  switch ($target$$308) {
    case 0:
      {
        return [vref$$66, flags$$3, tyargs$$26, m$$361];
      }

    case 1:
      {
        return [vref$$67, flags$$4, (0, _Types.L)(), m$$362];
      }

    case 2:
      {
        return null;
      }
  }
}

function mkCoerceIfNeeded(g$$515, tgtTy, srcTy, expr$$28) {
  if (typeEquiv(g$$515, tgtTy, srcTy)) {
    return expr$$28;
  } else {
    return mkCoerceExpr(expr$$28, tgtTy, Expr$002Eget_Range(expr$$28), srcTy);
  }
}

function mkCompGenLetIn(m$$363, nm$$26, ty$$388, e$$100, f$$78) {
  const patternInput$$110 = mkCompGenLocal(m$$363, nm$$26, ty$$388);
  return mkCompGenLet(m$$363, patternInput$$110[0], e$$100, f$$78([patternInput$$110[0], patternInput$$110[1]]));
}

function AdjustPossibleSubsumptionExpr(g$$516, expr$$29, suppliedArgs) {
  var vref$$68, m$$364, inputTy$$1, exprWithActualTy, actualTy$$1;
  var $target$$314, actualTy$$2, exprWithActualTy$$1, inputTy$$2, m$$365;

  if (expr$$29.tag === 11) {
    if (expr$$29.fields[0].tag === 24) {
      if (expr$$29.fields[1].tail != null) {
        if (expr$$29.fields[1].tail.tail != null) {
          if (expr$$29.fields[1].tail.tail.tail == null) {
            if (expr$$29.fields[2].tail != null) {
              if (expr$$29.fields[2].tail.tail == null) {
                if (m$$364 = expr$$29.fields[3], (inputTy$$1 = expr$$29.fields[1].head, (exprWithActualTy = expr$$29.fields[2].head, (actualTy$$1 = expr$$29.fields[1].tail.head, isFunTy(g$$516, actualTy$$1) ? isFunTy(g$$516, inputTy$$1) : false)))) {
                  $target$$314 = 0;
                  actualTy$$2 = expr$$29.fields[1].tail.head;
                  exprWithActualTy$$1 = expr$$29.fields[2].head;
                  inputTy$$2 = expr$$29.fields[1].head;
                  m$$365 = expr$$29.fields[3];
                } else {
                  $target$$314 = 1;
                }
              } else {
                $target$$314 = 1;
              }
            } else {
              $target$$314 = 1;
            }
          } else {
            $target$$314 = 1;
          }
        } else {
          $target$$314 = 1;
        }
      } else {
        $target$$314 = 1;
      }
    } else {
      $target$$314 = 1;
    }
  } else {
    $target$$314 = 1;
  }

  switch ($target$$314) {
    case 0:
      {
        if (typeEquiv(g$$516, actualTy$$2, inputTy$$2)) {
          return [exprWithActualTy$$1, suppliedArgs];
        } else {
          const patternInput$$111 = stripTupledFunTy(g$$516, actualTy$$2);
          const patternInput$$112 = stripFunTy(g$$516, inputTy$$2);
          const argTys$$2 = (0, _List.mapIndexed2)(function mapping$$58(i$$30, x$$306, y$$55) {
            return [i$$30, x$$306, y$$55];
          }, patternInput$$112[0], patternInput$$111[0]);
          let curriedNiceNames;
          var $target$$315, vref$$69;
          const activePatternResult34758 = $007CExprValWithPossibleTypeInst$007C_$007C(stripExpr(exprWithActualTy$$1));

          if (activePatternResult34758 != null) {
            if (vref$$68 = activePatternResult34758[0], (0, _tast.ValRef$$get_ValReprInfo)(vref$$68) != null) {
              $target$$315 = 0;
              vref$$69 = activePatternResult34758[0];
            } else {
              $target$$315 = 1;
            }
          } else {
            $target$$315 = 1;
          }

          switch ($target$$315) {
            case 0:
              {
                const patternInput$$113 = GetTopValTypeInFSharpForm(g$$516, (0, _tast.ValRef$$get_ValReprInfo)(vref$$69), (0, _tast.ValRef$$get_Type)(vref$$69), Expr$002Eget_Range(expr$$29));
                curriedNiceNames = (0, _List.mapIndexed)(function mapping$$60(i$$31, argtys$$15) {
                  return (0, _List.mapIndexed)(function mapping$$59(j$$13, tupledArg$$79) {
                    const matchValue$$164 = tupledArg$$79[1].Name;

                    if (matchValue$$164 != null) {
                      const id$$6 = matchValue$$164;
                      return (0, _ast.Ident$$get_idText)(id$$6);
                    } else {
                      return (0, _PrettyNaming.CompilerGeneratedName)("arg" + (0, _Util.int32ToString)(i$$31) + (0, _Util.int32ToString)(j$$13));
                    }
                  }, argtys$$15);
                }, patternInput$$113[1]);
                break;
              }

            case 1:
              {
                curriedNiceNames = (0, _Types.L)();
                break;
              }
          }

          const nCurriedNiceNames = (0, _List.length)(curriedNiceNames) | 0;
          const patternInput$$114 = (0, _List.splitAt)(nCurriedNiceNames, argTys$$2);
          const nSuppliedArgs = (0, _Util.min)(_Util.comparePrimitives, (0, _List.length)(suppliedArgs), nCurriedNiceNames) | 0;
          const patternInput$$115 = (0, _List.splitAt)(nSuppliedArgs, suppliedArgs);
          const appm = (0, _List.fold)(function folder$$21(m$$366, e$$101) {
            return (0, _range.unionRanges)(m$$366, Expr$002Eget_Range(e$$101));
          }, m$$365, patternInput$$115[0]);
          const buildingLambdas = nSuppliedArgs !== nCurriedNiceNames;

          const CoerceDetupled = function CoerceDetupled(argTys$$3, detupledArgs, actualTys) {
            const argm = (0, _List.reduce)(_range.unionRanges, (0, _List.map)(function mapping$$61(e$$102) {
              return Expr$002Eget_Range(e$$102);
            }, detupledArgs));
            return mkRefTupled(g$$516, argm, (0, _List.map3)(function (tgtTy$$1, srcTy$$1, arg30$0040$$14) {
              return mkCoerceIfNeeded(g$$516, tgtTy$$1, srcTy$$1, arg30$0040$$14);
            }, actualTys, argTys$$3, detupledArgs), actualTys);
          };

          const CoerceBoundTuple = function CoerceBoundTuple(tupleVar, argTys$$4, actualTys$$1) {
            return mkRefTupled(g$$516, appm, (0, _List.mapIndexed2)(function mapping$$62(i$$32, actualTy$$3, dummyTy) {
              const argExprElement = mkTupleFieldGet(g$$516, _tast.tupInfoRef, tupleVar, argTys$$4, i$$32, appm);
              return mkCoerceIfNeeded(g$$516, actualTy$$3, dummyTy, argExprElement);
            }, actualTys$$1, argTys$$4), actualTys$$1);
          };

          const CoerceTupled = function CoerceTupled(niceNames, argExpr, actualTys$$2) {
            const argExprTy = tyOfExpr(g$$516, argExpr);
            const argTys$$5 = actualTys$$2.tail != null ? actualTys$$2.tail.tail == null ? (0, _Types.L)(tyOfExpr(g$$516, argExpr), (0, _Types.L)()) : tryDestRefTupleTy(g$$516, argExprTy) : tryDestRefTupleTy(g$$516, argExprTy);
            const nm$$28 = niceNames.tail != null ? niceNames.tail.tail == null ? niceNames.head : "arg" : "arg";

            if (buildingLambdas) {
              const patternInput$$116 = mkCompGenLocal(appm, nm$$28, argExprTy);

              const binderBuilder = function binderBuilder(tm$$4) {
                return mkCompGenLet(appm, patternInput$$116[0], argExpr, tm$$4);
              };

              let expr$$30;
              const matchValue$$165 = [actualTys$$2, argTys$$5];
              var $target$$316, actualTy$$4, argTy;

              if (matchValue$$165[0].tail != null) {
                if (matchValue$$165[0].tail.tail == null) {
                  if (matchValue$$165[1].tail != null) {
                    if (matchValue$$165[1].tail.tail == null) {
                      $target$$316 = 0;
                      actualTy$$4 = matchValue$$165[0].head;
                      argTy = matchValue$$165[1].head;
                    } else {
                      $target$$316 = 1;
                    }
                  } else {
                    $target$$316 = 1;
                  }
                } else {
                  $target$$316 = 1;
                }
              } else {
                $target$$316 = 1;
              }

              switch ($target$$316) {
                case 0:
                  {
                    expr$$30 = mkCoerceIfNeeded(g$$516, actualTy$$4, argTy, patternInput$$116[1]);
                    break;
                  }

                case 1:
                  {
                    expr$$30 = CoerceBoundTuple(patternInput$$116[1], argTys$$5, actualTys$$2);
                    break;
                  }
              }

              return [binderBuilder, expr$$30];
            } else if (typeEquiv(g$$516, mkRefTupledTy(g$$516, actualTys$$2), argExprTy)) {
              return [function (tm$$5) {
                return tm$$5;
              }, argExpr];
            } else {
              const patternInput$$117 = actualTys$$2.tail != null ? actualTys$$2.tail.tail == null ? [(0, _Types.L)(argExpr, (0, _Types.L)()), (0, _Types.L)(tyOfExpr(g$$516, argExpr), (0, _Types.L)())] : [tryDestRefTupleExpr(argExpr), tryDestRefTupleTy(g$$516, argExprTy)] : [tryDestRefTupleExpr(argExpr), tryDestRefTupleTy(g$$516, argExprTy)];

              if ((0, _List.length)(patternInput$$117[0]) === (0, _List.length)(actualTys$$2)) {
                return [function (tm$$6) {
                  return tm$$6;
                }, CoerceDetupled(patternInput$$117[1], patternInput$$117[0], actualTys$$2)];
              } else {
                const patternInput$$118 = mkCompGenLocal(appm, nm$$28, argExprTy);

                const binderBuilder$$1 = function binderBuilder$$1(tm$$7) {
                  return mkCompGenLet(appm, patternInput$$118[0], argExpr, tm$$7);
                };

                const expr$$31 = CoerceBoundTuple(patternInput$$118[1], patternInput$$117[1], actualTys$$2);
                return [binderBuilder$$1, expr$$31];
              }
            }
          };

          const patternInput$$119 = mkCompGenLocal(appm, "result", patternInput$$111[1]);
          const N = (0, _List.length)(argTys$$2) | 0;
          const patternInput$$122 = (0, _List.foldBack)(function (tupledArg$$80, tupledArg$$81) {
            const inpArgTys = tupledArg$$80[2].tail != null ? tupledArg$$80[2].tail.tail == null ? (0, _Types.L)(tupledArg$$80[1], (0, _Types.L)()) : destRefTupleTy(g$$516, tupledArg$$80[1]) : destRefTupleTy(g$$516, tupledArg$$80[1]);
            const patternInput$$120 = (0, _List.unzip)((0, _List.mapIndexed)(function mapping$$63(j$$14, ty$$389) {
              return mkCompGenLocal(appm, "arg" + (0, _Util.int32ToString)(tupledArg$$80[0]) + (0, _Util.int32ToString)(j$$14), ty$$389);
            }, inpArgTys));
            const inpsAsActualArg = CoerceDetupled(inpArgTys, patternInput$$120[1], tupledArg$$80[2]);
            const inpCloVarType = mkFunTy(mkRefTupledTy(g$$516, tupledArg$$80[2]), (0, _tast.Val$$get_Type)(tupledArg$$81[0]));
            const newResTy = mkFunTy(tupledArg$$80[1], tupledArg$$81[2]);
            const patternInput$$121 = mkCompGenLocal(appm, "clo" + (0, _Util.int32ToString)(tupledArg$$80[0]), inpCloVarType);
            const newRes = tupledArg$$80[0] === N - 1 ? mkMultiLambda(appm, patternInput$$120[0], mkApps(g$$516, [patternInput$$121[1], inpCloVarType], (0, _Types.L)(), (0, _Types.L)(inpsAsActualArg, (0, _Types.L)()), appm), tupledArg$$81[2]) : mkMultiLambda(appm, patternInput$$120[0], mkCompGenLet(appm, tupledArg$$81[0], mkApps(g$$516, [patternInput$$121[1], inpCloVarType], (0, _Types.L)(), (0, _Types.L)(inpsAsActualArg, (0, _Types.L)()), appm), tupledArg$$81[1]), tupledArg$$81[2]);
            return [patternInput$$121[0], newRes, newResTy];
          }, patternInput$$114[1], [patternInput$$119[0], patternInput$$119[1], patternInput$$111[1]]);
          let exprForAllArgs;

          if (patternInput$$114[0].tail == null) {
            exprForAllArgs = mkCompGenLet(appm, patternInput$$122[0], exprWithActualTy$$1, patternInput$$122[1]);
          } else {
            const suppliedArgs$$2 = (0, _List.append)((0, _List.map)(function (arg0) {
              return arg0;
            }, patternInput$$115[0]), (0, _List.replicate)(nCurriedNiceNames - nSuppliedArgs, null));
            const patternInput$$125 = (0, _List.unzip3)((0, _List.map3)(function mapping$$66(tupledArg$$82, niceNames$$1, suppliedArg) {
              var nms;
              const inpArgTys$$1 = tupledArg$$82[2].tail != null ? tupledArg$$82[2].tail.tail == null ? (0, _Types.L)(tupledArg$$82[1], (0, _Types.L)()) : destRefTupleTy(g$$516, tupledArg$$82[1]) : destRefTupleTy(g$$516, tupledArg$$82[1]);
              let niceNames$$2;

              if (nms = niceNames$$1, (0, _List.length)(nms) === (0, _List.length)(inpArgTys$$1)) {
                const nms$$1 = niceNames$$1;
                niceNames$$2 = nms$$1;
              } else {
                var $target$$317, nm$$29, nms$$2;

                if (niceNames$$1.tail != null) {
                  if (niceNames$$1.tail.tail == null) {
                    $target$$317 = 0;
                    nm$$29 = niceNames$$1.head;
                  } else {
                    $target$$317 = 1;
                    nms$$2 = niceNames$$1;
                  }
                } else {
                  $target$$317 = 1;
                  nms$$2 = niceNames$$1;
                }

                switch ($target$$317) {
                  case 0:
                    {
                      niceNames$$2 = (0, _List.mapIndexed)(function mapping$$64(i$$34, _arg2$$18) {
                        return nm$$29 + (0, _Util.int32ToString)(i$$34);
                      }, inpArgTys$$1);
                      break;
                    }

                  case 1:
                    {
                      niceNames$$2 = nms$$2;
                      break;
                    }
                }
              }

              if (suppliedArg == null) {
                const patternInput$$124 = (0, _List.unzip)((0, _List.map2)(function mapping$$65(nm$$30, ty$$390) {
                  return mkCompGenLocal(appm, nm$$30, ty$$390);
                }, niceNames$$2, inpArgTys$$1));
                const inpsAsActualArg$$2 = CoerceDetupled(inpArgTys$$1, patternInput$$124[1], tupledArg$$82[2]);

                const lambdaBuilder$$1 = function lambdaBuilder$$1(tm$$9) {
                  return mkMultiLambda(appm, patternInput$$124[0], tm$$9, tyOfExpr(g$$516, tm$$9));
                };

                const binderBuilder$$3 = function binderBuilder$$3(tm$$10) {
                  return tm$$10;
                };

                return [lambdaBuilder$$1, binderBuilder$$3, inpsAsActualArg$$2];
              } else {
                const arg$$9 = suppliedArg;
                const patternInput$$123 = CoerceTupled(niceNames$$2, arg$$9, tupledArg$$82[2]);

                const lambdaBuilder = function lambdaBuilder(tm$$8) {
                  return tm$$8;
                };

                return [lambdaBuilder, patternInput$$123[0], patternInput$$123[1]];
              }
            }, patternInput$$114[0], curriedNiceNames, suppliedArgs$$2));
            const exprApp = patternInput$$114[1].tail == null ? mkApps(g$$516, [exprWithActualTy$$1, actualTy$$2], (0, _Types.L)(), patternInput$$125[2], appm) : mkCompGenLet(appm, patternInput$$122[0], mkApps(g$$516, [exprWithActualTy$$1, actualTy$$2], (0, _Types.L)(), patternInput$$125[2], appm), patternInput$$122[1]);
            exprForAllArgs = (0, _List.foldBack)(function (f$$79, acc$$172) {
              return f$$79(acc$$172);
            }, patternInput$$125[1], (0, _List.foldBack)(function (f$$80, acc$$173) {
              return f$$80(acc$$173);
            }, patternInput$$125[0], exprApp));
          }

          return [exprForAllArgs, patternInput$$115[1]];
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function NormalizeAndAdjustPossibleSubsumptionExprs(g$$517, inputExpr) {
  let patternInput$$126;
  const matchValue$$166 = stripExpr(inputExpr);

  var $target$$318, _fty$$2, args$$41, f$$81;

  if (matchValue$$166.tag === 5) {
    if (matchValue$$166.fields[2].tail == null) {
      $target$$318 = 0;
      _fty$$2 = matchValue$$166.fields[1];
      args$$41 = matchValue$$166.fields[3];
      f$$81 = matchValue$$166.fields[0];
    } else {
      $target$$318 = 1;
    }
  } else {
    $target$$318 = 1;
  }

  switch ($target$$318) {
    case 0:
      {
        patternInput$$126 = [f$$81, args$$41];
        break;
      }

    case 1:
      {
        patternInput$$126 = [inputExpr, (0, _Types.L)()];
        break;
      }
  }

  const matchValue$$167 = AdjustPossibleSubsumptionExpr(g$$517, patternInput$$126[0], patternInput$$126[1]);

  if (matchValue$$167 != null) {
    if (matchValue$$167[1].tail == null) {
      return matchValue$$167[0];
    } else {
      return new _tast.Expr(5, "App", matchValue$$167[0], tyOfExpr(g$$517, matchValue$$167[0]), (0, _Types.L)(), matchValue$$167[1], Expr$002Eget_Range(inputExpr));
    }
  } else {
    return inputExpr;
  }
}

function etaExpandTypeLambda(g$$518, m$$367, tps$$54, tm$$11, ty$$391) {
  if (tps$$54.tail == null) {
    return tm$$11;
  } else {
    return mkTypeLambda(m$$367, tps$$54, mkApps(g$$518, [tm$$11, ty$$391], (0, _Types.L)((0, _List.map)(_tast.mkTyparTy, tps$$54), (0, _Types.L)()), (0, _Types.L)(), m$$367), ty$$391);
  }
}

function AdjustValToTopVal(tmp$$4, parent$$1, valData) {
  (0, _tast.Val$$SetValReprInfo$$Z35BE7615)(tmp$$4, valData);
  (0, _tast.Val$$SetDeclaringEntity$$Z12FB10AD)(tmp$$4, parent$$1);
  (0, _tast.Val$$SetIsMemberOrModuleBinding)(tmp$$4);
}

function LinearizeTopMatchAux(g$$519, parent$$2, spBind$$8, m$$368, tree$$18, targets$$15, m2$$9, ty$$392) {
  const targetsL = (0, _Array.toList)(targets$$15);

  const itemsProj = function itemsProj(tys$$39, i$$35, x$$307) {
    if (tys$$39.tail != null) {
      if (tys$$39.tail.tail == null) {
        return x$$307;
      } else {
        return new _tast.Expr(11, "Op", new _tast.TOp(21, "TupleFieldGet", _tast.tupInfoRef, i$$35), tys$$39, (0, _Types.L)(x$$307, (0, _Types.L)()), m$$368);
      }
    } else {
      throw new Error("itemsProj: no items?");
    }
  };

  const isThrowingTarget = function isThrowingTarget(_arg1$$124) {
    const x$$308 = _arg1$$124.fields[1];
    return isThrow(x$$308);
  };

  if (1 + (0, _illib.List$$$count)(isThrowingTarget, targetsL) === (0, _List.length)(targetsL)) {
    const patternInput$$127 = (0, _List.tryFind)(function ($arg$$57) {
      return !isThrowingTarget($arg$$57);
    }, targetsL);
    const vs$$61 = patternInput$$127.fields[0];
    const spTarget$$4 = patternInput$$127.fields[2];
    const rhs$$2 = patternInput$$127.fields[1];
    const fvs$$34 = (0, _List.map)(function mapping$$67(v$$138) {
      return mkLocal((0, _tast.Val$$get_Range)(v$$138), (0, _tast.Val$$get_LogicalName)(v$$138), (0, _tast.Val$$get_Type)(v$$138))[0];
    }, vs$$61);
    const vtys = (0, _List.map)(function mapping$$68(v$$139) {
      return (0, _tast.Val$$get_Type)(v$$139);
    }, vs$$61);
    const tmpTy = mkRefTupledVarsTy(g$$519, vs$$61);
    const patternInput$$128 = mkCompGenLocal(m$$368, "matchResultHolder", tmpTy);
    AdjustValToTopVal(patternInput$$128[0], parent$$2, _tast.ValReprInfoModule$$$emptyValData);
    const newTg = new _tast.DecisionTreeTarget(0, "TTarget", fvs$$34, mkRefTupledVars(g$$519, m$$368, fvs$$34), spTarget$$4);

    const fixup = function fixup(_arg2$$19) {
      const tx = _arg2$$19.fields[1];
      const tvs = _arg2$$19.fields[0];
      const spTarget$$5 = _arg2$$19.fields[2];
      const matchValue$$168 = destThrow(tx);

      if (matchValue$$168 == null) {
        return newTg;
      } else {
        const m$$369 = matchValue$$168[0];
        const e$$103 = matchValue$$168[2];
        const tx$$1 = mkThrow(m$$369, tmpTy, e$$103);
        return new _tast.DecisionTreeTarget(0, "TTarget", tvs, tx$$1, spTarget$$5);
      }
    };

    const targets$$16 = (0, _Array.map)(fixup, targets$$15, Array);
    const binds$$17 = (0, _List.mapIndexed)(function mapping$$69(i$$36, v$$140) {
      const ty$$393 = (0, _tast.Val$$get_Type)(v$$140);
      const rhs$$3 = etaExpandTypeLambda(g$$519, m$$368, (0, _tast.Val$$get_Typars)(v$$140), itemsProj(vtys, i$$36, patternInput$$128[1]), ty$$393);
      (0, _tast.Val$$SetValReprInfo$$Z35BE7615)(v$$140, InferArityOfExpr(g$$519, new AllowTypeDirectedDetupling(0, "Yes"), ty$$393, (0, _Types.L)(), (0, _Types.L)(), rhs$$3));
      return mkInvisibleBind(v$$140, rhs$$3);
    }, vs$$61);
    return mkCompGenLet(m$$368, patternInput$$128[0], primMkMatch(spBind$$8, m$$368, tree$$18, targets$$16, m2$$9, tmpTy), mkLetsFromBindings(m$$368, binds$$17, rhs$$2));
  } else {
    return primMkMatch(spBind$$8, m$$368, tree$$18, targets$$15, m2$$9, ty$$392);
  }
}

function LinearizeTopMatch(g$$520, parent$$3, _arg1$$125) {
  if (_arg1$$125.tag === 9) {
    const ty$$394 = _arg1$$125.fields[5];
    const tree$$19 = _arg1$$125.fields[2];
    const targets$$17 = _arg1$$125.fields[3];
    const spBind$$9 = _arg1$$125.fields[0];
    const m2$$10 = _arg1$$125.fields[4];
    const m$$370 = _arg1$$125.fields[1];
    return LinearizeTopMatchAux(g$$520, parent$$3, spBind$$9, m$$370, tree$$19, targets$$17, m2$$10, ty$$394);
  } else {
    const x$$309 = _arg1$$125;
    return x$$309;
  }
}

function commaEncs(strs) {
  return (0, _String.join)(",", ...strs);
}

function angleEnc(str$$1) {
  return "{" + str$$1 + "}";
}

function ticksAndArgCountTextOfTyconRef(tcref$$99) {
  const path$$4 = (0, _List.append)((0, _Array.toList)(fullMangledPathToTyconRef(tcref$$99)), (0, _Types.L)((0, _tast.EntityRef$$get_CompiledName)(tcref$$99), (0, _Types.L)()));
  return (0, _ast.textOfPath)(path$$4);
}

function typarEnc(_g$$8, gtpsType, gtpsMethod, typar$$6) {
  const matchValue$$169 = (0, _List.tryFindIndex)(function (lv2$$7) {
    return (0, _tast.typarEq)(typar$$6, lv2$$7);
  }, gtpsType);

  if (matchValue$$169 == null) {
    const matchValue$$170 = (0, _List.tryFindIndex)(function (lv2$$8) {
      return (0, _tast.typarEq)(typar$$6, lv2$$8);
    }, gtpsMethod);

    if (matchValue$$170 == null) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.InternalError("Typar not found during XmlDoc generation", (0, _tast.Typar$$get_Range)(typar$$6)));
      return "``0";
    } else {
      const idx$$2 = matchValue$$170 | 0;
      return "``" + (0, _Util.int32ToString)(idx$$2);
    }
  } else {
    const idx$$1 = matchValue$$169 | 0;
    return "`" + (0, _Util.int32ToString)(idx$$1);
  }
}

function typeEnc(g$$521, gtpsType$$1, gtpsMethod$$1, ty$$395) {
  if (_lib.verbose) {
    (0, _ildiag.dprintf)((0, _String.printf)("--> typeEnc"));
  }

  const stripped = stripTyEqnsAndMeasureEqns(g$$521, ty$$395);

  if (stripped.tag === 0) {
    return "Microsoft.FSharp.Core.FSharpTypeFunc";
  } else if (isArrayTy(g$$521, ty$$395)) {
    const patternInput$$129 = destAppTy(g$$521, ty$$395);
    let arraySuffix;
    const matchValue$$171 = rankOfArrayTyconRef(g$$521, patternInput$$129[0]) | 0;

    switch (matchValue$$171) {
      case 1:
        {
          arraySuffix = "[]";
          break;
        }

      case 2:
        {
          arraySuffix = "[0:, 0:]";
          break;
        }

      case 3:
        {
          arraySuffix = "[0:, 0:, 0:]";
          break;
        }

      case 4:
        {
          arraySuffix = "[0:, 0:, 0:, 0:]";
          break;
        }

      default:
        {
          throw new Error("impossible: rankOfArrayTyconRef: unsupported array rank");
        }
    }

    return typeEnc(g$$521, gtpsType$$1, gtpsMethod$$1, (0, _List.head)(patternInput$$129[1])) + arraySuffix;
  } else {
    var $target$$319, tcref$$101, tinst$$76;

    switch (stripped.tag) {
      case 4:
        $target$$319 = 0;
        tcref$$101 = stripped.fields[0].fields[0];
        tinst$$76 = stripped.fields[1];
        break;

      case 1:
        $target$$319 = 0;
        tcref$$101 = stripped.fields[0];
        tinst$$76 = stripped.fields[1];
        break;

      case 2:
        $target$$319 = 1;
        break;

      case 3:
        $target$$319 = 2;
        break;

      case 5:
        $target$$319 = 3;
        break;

      case 6:
        $target$$319 = 4;
        break;

      default:
        $target$$319 = 5;
    }

    switch ($target$$319) {
      case 0:
        {
          if (tyconRefEq(g$$521, (0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$521), tcref$$101)) {
            return typeEnc(g$$521, gtpsType$$1, gtpsMethod$$1, (0, _List.head)(tinst$$76)) + "@";
          } else if (tyconRefEq(g$$521, tcref$$101, (0, _TcGlobals.TcGlobals$$get_nativeptr_tcr)(g$$521))) {
            return typeEnc(g$$521, gtpsType$$1, gtpsMethod$$1, (0, _List.head)(tinst$$76)) + "*";
          } else {
            let tyName;
            const ty$$396 = stripTyEqnsAndMeasureEqns(g$$521, ty$$395);

            if (ty$$396.tag === 1) {
              const tcref$$102 = ty$$396.fields[0];
              const _tinst = ty$$396.fields[1];
              const path$$5 = (0, _List.append)((0, _Array.toList)(fullMangledPathToTyconRef(tcref$$102)), (0, _Types.L)((0, _tast.EntityRef$$get_CompiledName)(tcref$$102), (0, _Types.L)()));
              tyName = (0, _ast.textOfPath)((0, _List.map)(_PrettyNaming.DemangleGenericTypeName, path$$5));
            } else {
              throw new Error("impossible");
            }

            return tyName + tyargsEnc(g$$521, gtpsType$$1, gtpsMethod$$1, tinst$$76);
          }
        }

      case 1:
        {
          const tys$$41 = stripped.fields[1];
          const tupInfo$$26 = stripped.fields[0];

          if (evalTupInfoIsStruct(tupInfo$$26)) {
            return (0, _String.toText)((0, _String.printf)("System.ValueTuple%s"))(tyargsEnc(g$$521, gtpsType$$1, gtpsMethod$$1, tys$$41));
          } else {
            return (0, _String.toText)((0, _String.printf)("System.Tuple%s"))(tyargsEnc(g$$521, gtpsType$$1, gtpsMethod$$1, tys$$41));
          }
        }

      case 2:
        {
          const x$$310 = stripped.fields[1];
          const f$$82 = stripped.fields[0];
          return "Microsoft.FSharp.Core.FSharpFunc" + tyargsEnc(g$$521, gtpsType$$1, gtpsMethod$$1, (0, _Types.L)(f$$82, (0, _Types.L)(x$$310, (0, _Types.L)())));
        }

      case 3:
        {
          const typar$$7 = stripped.fields[0];
          return typarEnc(g$$521, gtpsType$$1, gtpsMethod$$1, typar$$7);
        }

      case 4:
        {
          return "?";
        }

      case 5:
        {
          throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/TastOps.fs", 7313, 10);
        }
    }
  }
}

function tyargsEnc(g$$522, gtpsType$$2, gtpsMethod$$2, args$$43) {
  var a$$18;
  var $target$$320, a$$19;

  if (args$$43.tail != null) {
    if (args$$43.tail.tail == null) {
      if (a$$18 = args$$43.head, stripTyEqns(g$$522, a$$18).tag === 6 ? true : false) {
        $target$$320 = 1;
        a$$19 = args$$43.head;
      } else {
        $target$$320 = 2;
      }
    } else {
      $target$$320 = 2;
    }
  } else {
    $target$$320 = 0;
  }

  switch ($target$$320) {
    case 0:
      {
        return "";
      }

    case 1:
      {
        return "";
      }

    case 2:
      {
        return angleEnc(commaEncs((0, _List.map)(function (ty$$397) {
          return typeEnc(g$$522, gtpsType$$2, gtpsMethod$$2, ty$$397);
        }, args$$43)));
      }
  }
}

function XmlDocArgsEnc(g$$523, gtpsType$$3, gtpsMethod$$3, argTs) {
  if (argTs.tail == null) {
    return "";
  } else {
    return "(" + (0, _String.join)(",", ...(0, _List.map)(function (ty$$398) {
      return typeEnc(g$$523, gtpsType$$3, gtpsMethod$$3, ty$$398);
    }, argTs)) + ")";
  }
}

function buildAccessPath(cp) {
  if (cp == null) {
    return "Extension Type";
  } else {
    const cp$$1 = cp;
    const ap = (0, _Array.ofList)((0, _List.map)(function mapping$$70(tuple$$9) {
      return tuple$$9[0];
    }, (0, _tast.CompilationPath$$get_AccessPath)(cp$$1)), Array);
    return (0, _String.join)(".", ...ap);
  }
}

function prependPath(path$$6, name$$1) {
  if (path$$6 === "") {
    return name$$1;
  } else {
    return path$$6 + "." + name$$1;
  }
}

function XmlDocSigOfVal(g$$524, path$$7, v$$141) {
  var membInfo$$11;
  let patternInput$$134;
  const matchValue$$173 = (0, _tast.Val$$get_MemberInfo)(v$$141);
  var $target$$321, membInfo$$12;

  if (matchValue$$173 != null) {
    if (membInfo$$11 = matchValue$$173, !(0, _tast.Val$$get_IsExtensionMember)(v$$141)) {
      $target$$321 = 0;
      membInfo$$12 = matchValue$$173;
    } else {
      $target$$321 = 1;
    }
  } else {
    $target$$321 = 1;
  }

  switch ($target$$321) {
    case 0:
      {
        const patternInput$$130 = GetMemberTypeInMemberForm(g$$524, membInfo$$12.MemberFlags, (0, _tast.Val$$get_ValReprInfo)(v$$141), (0, _tast.Val$$get_Type)(v$$141), (0, _tast.Val$$get_Range)(v$$141));
        const patternInput$$131 = membInfo$$12.MemberFlags.MemberKind.tag === 1 ? ["M:", "#ctor"] : membInfo$$12.MemberFlags.MemberKind.tag === 2 ? ["M:", (0, _tast.Val$$get_CompiledName)(v$$141)] : membInfo$$12.MemberFlags.MemberKind.tag === 5 ? ["P:", (0, _tast.Val$$get_PropertyName)(v$$141)] : membInfo$$12.MemberFlags.MemberKind.tag === 4 ? ["P:", (0, _tast.Val$$get_PropertyName)(v$$141)] : membInfo$$12.MemberFlags.MemberKind.tag === 3 ? ["P:", (0, _tast.Val$$get_PropertyName)(v$$141)] : ["M:", "#ctor"];
        const path$$8 = (0, _tast.Val$$get_HasDeclaringEntity)(v$$141) ? prependPath(path$$7, (0, _tast.EntityRef$$get_CompiledName)((0, _tast.Val$$get_TopValDeclaringEntity)(v$$141))) : path$$7;
        let patternInput$$132;
        const matchValue$$175 = PartitionValTypars(g$$524, v$$141);

        if (matchValue$$175 == null) {
          patternInput$$132 = [(0, _Types.L)(), patternInput$$130[0]];
        } else {
          const memberParentTypars$$1 = matchValue$$175[1];
          const memberMethodTypars$$1 = matchValue$$175[2];
          patternInput$$132 = [memberParentTypars$$1, memberMethodTypars$$1];
        }

        patternInput$$134 = [patternInput$$132[0], patternInput$$132[1], patternInput$$130[1], patternInput$$131[0], path$$8, patternInput$$131[1]];
        break;
      }

    case 1:
      {
        const w$$7 = (0, _tast.arityOfVal)(v$$141);
        const patternInput$$133 = GetTopValTypeInCompiledForm(g$$524, w$$7, (0, _tast.Val$$get_Type)(v$$141), (0, _tast.Val$$get_Range)(v$$141));
        const name$$3 = (0, _tast.Val$$get_CompiledName)(v$$141);
        const prefix$$3 = ((0, _tast.ValReprInfo$$get_NumCurriedArgs)(w$$7) === 0 ? patternInput$$133[0].tail == null : false) ? "P:" : "M:";
        patternInput$$134 = [(0, _Types.L)(), patternInput$$133[0], patternInput$$133[1], prefix$$3, path$$7, name$$3];
        break;
      }
  }

  const argTs$$1 = (0, _List.map)(function mapping$$71(tuple$$10) {
    return tuple$$10[0];
  }, (0, _List.concat)(patternInput$$134[2]));
  const args$$44 = XmlDocArgsEnc(g$$524, patternInput$$134[0], patternInput$$134[1], argTs$$1);
  const arity$$3 = (0, _List.length)(patternInput$$134[1]) | 0;
  const genArity = arity$$3 === 0 ? "" : (0, _String.toText)((0, _String.printf)("``%d"))(arity$$3);
  return patternInput$$134[3] + prependPath(patternInput$$134[4], patternInput$$134[5]) + genArity + args$$44;
}

function BuildXmlDocSig(prefix$$5, paths$$1) {
  return prefix$$5 + (0, _List.fold)(prependPath, "", paths$$1);
}

function XmlDocSigOfUnionCase(paths$$2) {
  return BuildXmlDocSig("T:", paths$$2);
}

function XmlDocSigOfField(paths$$3) {
  return BuildXmlDocSig("F:", paths$$3);
}

function XmlDocSigOfProperty(paths$$4) {
  return BuildXmlDocSig("P:", paths$$4);
}

function XmlDocSigOfTycon(paths$$5) {
  return BuildXmlDocSig("T:", paths$$5);
}

function XmlDocSigOfSubModul(paths$$6) {
  return BuildXmlDocSig("T:", paths$$6);
}

function XmlDocSigOfEntity(eref$$10) {
  return XmlDocSigOfTycon((0, _Types.L)(buildAccessPath((0, _tast.EntityRef$$get_CompilationPathOpt)(eref$$10)), (0, _Types.L)((0, _tast.Entity$$get_CompiledName)((0, _tast.EntityRef$$get_Deref)(eref$$10)), (0, _Types.L)())));
}

const enum_CompilationRepresentationAttribute_Static = 1;
exports.enum_CompilationRepresentationAttribute_Static = enum_CompilationRepresentationAttribute_Static;
const enum_CompilationRepresentationAttribute_Instance = 2;
exports.enum_CompilationRepresentationAttribute_Instance = enum_CompilationRepresentationAttribute_Instance;
const enum_CompilationRepresentationAttribute_StaticInstanceMask = 3;
exports.enum_CompilationRepresentationAttribute_StaticInstanceMask = enum_CompilationRepresentationAttribute_StaticInstanceMask;
const enum_CompilationRepresentationAttribute_ModuleSuffix = 4;
exports.enum_CompilationRepresentationAttribute_ModuleSuffix = enum_CompilationRepresentationAttribute_ModuleSuffix;
const enum_CompilationRepresentationAttribute_PermitNull = 8;
exports.enum_CompilationRepresentationAttribute_PermitNull = enum_CompilationRepresentationAttribute_PermitNull;

function HasUseNullAsTrueValueAttribute(g$$525, attribs$$6) {
  const matchValue$$176 = TryFindFSharpInt32Attribute(g$$525, (0, _TcGlobals.TcGlobals$$get_attrib_CompilationRepresentationAttribute)(g$$525), attribs$$6);

  if (matchValue$$176 != null) {
    const flags$$5 = matchValue$$176 | 0;
    return (flags$$5 & enum_CompilationRepresentationAttribute_PermitNull) !== 0;
  } else {
    return false;
  }
}

function TyconHasUseNullAsTrueValueAttribute(g$$526, tycon$$27) {
  return HasUseNullAsTrueValueAttribute(g$$526, (0, _tast.Entity$$get_Attribs)(tycon$$27));
}

function CanHaveUseNullAsTrueValueAttribute(_g$$9, tycon$$28) {
  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$28)) {
    const ucs$$2 = (0, _tast.Entity$$get_UnionCasesArray)(tycon$$28);

    if (ucs$$2.length === 0) {
      return true;
    } else if ((0, _illib.Array$$$existsOne)(function p$$7(uc$$9) {
      return (0, _tast.UnionCase$$get_IsNullary)(uc$$9);
    }, ucs$$2)) {
      return ucs$$2.some(function predicate$$18(uc$$10) {
        return !(0, _tast.UnionCase$$get_IsNullary)(uc$$10);
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function IsUnionTypeWithNullAsTrueValue(g$$527, tycon$$29) {
  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$29)) {
    const ucs$$3 = (0, _tast.Entity$$get_UnionCasesArray)(tycon$$29);

    if (ucs$$3.length === 0) {
      return true;
    } else if (TyconHasUseNullAsTrueValueAttribute(g$$527, tycon$$29) ? (0, _illib.Array$$$existsOne)(function p$$8(uc$$11) {
      return (0, _tast.UnionCase$$get_IsNullary)(uc$$11);
    }, ucs$$3) : false) {
      return ucs$$3.some(function predicate$$19(uc$$12) {
        return !(0, _tast.UnionCase$$get_IsNullary)(uc$$12);
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function TyconCompilesInstanceMembersAsStatic(g$$528, tycon$$30) {
  return IsUnionTypeWithNullAsTrueValue(g$$528, tycon$$30);
}

function TcrefCompilesInstanceMembersAsStatic(g$$529, tcref$$103) {
  return TyconCompilesInstanceMembersAsStatic(g$$529, (0, _tast.EntityRef$$get_Deref)(tcref$$103));
}

function TypeNullNever(g$$530, ty$$399) {
  const underlyingTy = stripTyEqnsAndMeasureEqns(g$$530, ty$$399);

  if (isStructTy(g$$530, underlyingTy)) {
    return true;
  } else {
    return isByrefTy(g$$530, underlyingTy);
  }
}

function TypeNullIsExtraValue(g$$531, m$$371, ty$$400) {
  if (isILReferenceTy(g$$531, ty$$400) ? true : isDelegateTy(g$$531, ty$$400)) {
    return !(isAppTy(g$$531, ty$$400) ? (0, _Util.equals)(TryFindTyconRefBoolAttribute(g$$531, m$$371, (0, _TcGlobals.TcGlobals$$get_attrib_AllowNullLiteralAttribute)(g$$531), tcrefOfAppTy(g$$531, ty$$400)), false) : false);
  } else if (TypeNullNever(g$$531, ty$$400)) {
    return false;
  } else if (isAppTy(g$$531, ty$$400)) {
    return (0, _Util.equals)(TryFindTyconRefBoolAttribute(g$$531, m$$371, (0, _TcGlobals.TcGlobals$$get_attrib_AllowNullLiteralAttribute)(g$$531), tcrefOfAppTy(g$$531, ty$$400)), true);
  } else {
    return false;
  }
}

function TypeNullIsTrueValue(g$$532, ty$$401) {
  var matchValue$$177, tcref$$104;

  if (matchValue$$177 = tryDestAppTy(g$$532, ty$$401), matchValue$$177 != null ? (tcref$$104 = matchValue$$177, IsUnionTypeWithNullAsTrueValue(g$$532, (0, _tast.EntityRef$$get_Deref)(tcref$$104))) : false) {
    return true;
  } else {
    return isUnitTy(g$$532, ty$$401);
  }
}

function TypeNullNotLiked(g$$533, m$$372, ty$$402) {
  if (!TypeNullIsExtraValue(g$$533, m$$372, ty$$402) ? !TypeNullIsTrueValue(g$$533, ty$$402) : false) {
    return !TypeNullNever(g$$533, ty$$402);
  } else {
    return false;
  }
}

function TypeSatisfiesNullConstraint(g$$534, m$$373, ty$$403) {
  return TypeNullIsExtraValue(g$$534, m$$373, ty$$403);
}

function TypeHasDefaultValue(g$$535, m$$374, ty$$404) {
  const ty$$405 = stripTyEqnsAndMeasureEqns(g$$535, ty$$404);

  if (TypeSatisfiesNullConstraint(g$$535, m$$374, ty$$405)) {
    return true;
  } else if (isStructTy(g$$535, ty$$405)) {
    if (isFSharpStructTy(g$$535, ty$$405)) {
      const patternInput$$135 = destAppTy(g$$535, ty$$405);
      const flds = (0, _List.filter)(function predicate$$20(fld$$2) {
        return !(0, _Util.equals)(TryFindFSharpBoolAttribute(g$$535, (0, _TcGlobals.TcGlobals$$get_attrib_DefaultValueAttribute)(g$$535), (0, _tast.RecdField$$get_FieldAttribs)(fld$$2)), false);
      }, (0, _tast.EntityRef$$get_AllInstanceFieldsAsList)(patternInput$$135[0]));
      return (0, _List.forAll)(function predicate$$21($arg$$58) {
        return TypeHasDefaultValue(g$$535, m$$374, actualTyOfRecdField(mkTyconRefInst(patternInput$$135[0], patternInput$$135[1]), $arg$$58));
      }, flds);
    } else if (isStructTupleTy(g$$535, ty$$405)) {
      return (0, _List.forAll)(function predicate$$22(arg20$0040$$35) {
        return TypeHasDefaultValue(g$$535, m$$374, arg20$0040$$35);
      }, destStructTupleTy(g$$535, ty$$405));
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function $007CSpecialComparableHeadType$007C_$007C(g$$536, ty$$406) {
  if (isAnyTupleTy(g$$536, ty$$406)) {
    const patternInput$$136 = destAnyTupleTy(g$$536, ty$$406);
    return patternInput$$136[1];
  } else {
    const activePatternResult34885 = $007CAppTy$007C_$007C(g$$536, ty$$406);

    if (activePatternResult34885 != null) {
      if ((isArrayTyconRef(g$$536, activePatternResult34885[0]) ? true : tyconRefEq(g$$536, activePatternResult34885[0], (0, _TcGlobals.TcGlobals$$get_system_UIntPtr_tcref)(g$$536))) ? true : tyconRefEq(g$$536, activePatternResult34885[0], (0, _TcGlobals.TcGlobals$$get_system_IntPtr_tcref)(g$$536))) {
        return activePatternResult34885[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

function $007CSpecialEquatableHeadType$007C_$007C(g$$537, ty$$407) {
  return $007CSpecialComparableHeadType$007C_$007C(g$$537, ty$$407);
}

function $007CSpecialNotEquatableHeadType$007C_$007C(g$$538, ty$$408) {
  if (isFunTy(g$$538, ty$$408)) {
    return (0, _Option.some)(null);
  } else {
    return null;
  }
}

function canUseTypeTestFast(g$$539, ty$$409) {
  if (!isTyparTy(g$$539, ty$$409) ? !TypeNullIsTrueValue(g$$539, ty$$409) : false) {
    return !TypeNullNever(g$$539, ty$$409);
  } else {
    return false;
  }
}

function canUseUnboxFast(g$$540, m$$375, ty$$410) {
  if (!isTyparTy(g$$540, ty$$410)) {
    return !TypeNullNotLiked(g$$540, m$$375, ty$$410);
  } else {
    return false;
  }
}

function mkIsInstConditional(g$$541, m$$376, tgty$$2, vinpe, v$$142, e2$$58, e3$$11) {
  if (canUseTypeTestFast(g$$541, tgty$$2)) {
    const mbuilder$$1 = MatchBuilder$$$$002Ector$$5D7B8C21(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$376);
    const tg2 = MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder$$1, e2$$58, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const tg3 = MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder$$1, e3$$11, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const dtree$$24 = new _tast.DecisionTree(0, "TDSwitch", exprForVal(m$$376, v$$142), (0, _Types.L)(new _tast.DecisionTreeCase(0, "TCase", new _tast.DecisionTreeTest(3, "IsNull"), tg3), (0, _Types.L)()), tg2, m$$376);
    const expr$$33 = MatchBuilder$$Close$$569B5856(mbuilder$$1, dtree$$24, m$$376, tyOfExpr(g$$541, e2$$58));
    return mkCompGenLet(m$$376, v$$142, mkIsInst(tgty$$2, vinpe, m$$376), expr$$33);
  } else {
    const mbuilder$$2 = MatchBuilder$$$$002Ector$$5D7B8C21(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$376);
    const tg2$$1 = new _tast.DecisionTree(1, "TDSuccess", (0, _Types.L)(mkCallUnbox(g$$541, m$$376, tgty$$2, vinpe), (0, _Types.L)()), MatchBuilder$$AddTarget$$Z659D13A7(mbuilder$$2, new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(v$$142, (0, _Types.L)()), e2$$58, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"))));
    const tg3$$1 = MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder$$2, e3$$11, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const dtree$$25 = new _tast.DecisionTree(0, "TDSwitch", vinpe, (0, _Types.L)(new _tast.DecisionTreeCase(0, "TCase", new _tast.DecisionTreeTest(4, "IsInst", tyOfExpr(g$$541, vinpe), tgty$$2), tg2$$1), (0, _Types.L)()), tg3$$1, m$$376);
    const expr$$34 = MatchBuilder$$Close$$569B5856(mbuilder$$2, dtree$$25, m$$376, tyOfExpr(g$$541, e2$$58));
    return expr$$34;
  }
}

function mkNullTest(g$$542, m$$377, e1$$118, e2$$59, e3$$12) {
  const mbuilder$$3 = MatchBuilder$$$$002Ector$$5D7B8C21(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$377);
  const tg2$$2 = MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder$$3, e2$$59, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
  const tg3$$2 = MatchBuilder$$AddResultTarget$$6E549ABC(mbuilder$$3, e3$$12, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
  const dtree$$26 = new _tast.DecisionTree(0, "TDSwitch", e1$$118, (0, _Types.L)(new _tast.DecisionTreeCase(0, "TCase", new _tast.DecisionTreeTest(3, "IsNull"), tg3$$2), (0, _Types.L)()), tg2$$2, m$$377);
  const expr$$35 = MatchBuilder$$Close$$569B5856(mbuilder$$3, dtree$$26, m$$377, tyOfExpr(g$$542, e2$$59));
  return expr$$35;
}

function mkNonNullTest(g$$543, m$$378, e$$104) {
  return mkAsmExpr((0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(8, "AI_cgt_un"), (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(e$$104, (0, _Types.L)()), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$543), (0, _Types.L)()), m$$378);
}

function mkNonNullCond(g$$544, m$$379, ty$$411, e1$$119, e2$$60, e3$$13) {
  return mkCond(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$379, ty$$411, mkNonNullTest(g$$544, m$$379, e1$$119), e2$$60, e3$$13);
}

function mkIfThen(g$$545, m$$380, e1$$120, e2$$61) {
  return mkCond(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$380, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$545), e1$$120, e2$$61, mkUnit(g$$545, m$$380));
}

function ModuleNameIsMangled(g$$546, attrs$$14) {
  const matchValue$$178 = TryFindFSharpInt32Attribute(g$$546, (0, _TcGlobals.TcGlobals$$get_attrib_CompilationRepresentationAttribute)(g$$546), attrs$$14);

  if (matchValue$$178 != null) {
    const flags$$6 = matchValue$$178 | 0;
    return (flags$$6 & enum_CompilationRepresentationAttribute_ModuleSuffix) !== 0;
  } else {
    return false;
  }
}

function CompileAsEvent(g$$547, attrs$$15) {
  return HasFSharpAttribute(g$$547, (0, _TcGlobals.TcGlobals$$get_attrib_CLIEventAttribute)(g$$547), attrs$$15);
}

function MemberIsCompiledAsInstance(g$$548, parent$$4, isExtensionMember, membInfo$$13, attrs$$16) {
  if (isExtensionMember) {
    return false;
  } else if (membInfo$$13.MemberFlags.IsOverrideOrExplicitImpl) {
    return true;
  } else if (!(membInfo$$13.ImplementedSlotSigs.tail == null)) {
    return true;
  } else {
    let patternInput$$137;
    const matchValue$$179 = TryFindFSharpInt32Attribute(g$$548, (0, _TcGlobals.TcGlobals$$get_attrib_CompilationRepresentationAttribute)(g$$548), attrs$$16);

    if (matchValue$$179 != null) {
      const flags$$7 = matchValue$$179 | 0;
      patternInput$$137 = [(flags$$7 & enum_CompilationRepresentationAttribute_Instance) !== 0, (flags$$7 & enum_CompilationRepresentationAttribute_Static) !== 0];
    } else {
      patternInput$$137 = [false, false];
    }

    if (patternInput$$137[0]) {
      return true;
    } else if (membInfo$$13.MemberFlags.IsInstance ? !patternInput$$137[1] : false) {
      return !TcrefCompilesInstanceMembersAsStatic(g$$548, parent$$4);
    } else {
      return false;
    }
  }
}

function isSealedTy(g$$549, ty$$412) {
  const ty$$413 = stripTyEqnsAndMeasureEqns(g$$549, ty$$412);

  if ((!isRefTy(g$$549, ty$$413) ? true : isUnitTy(g$$549, ty$$413)) ? true : isArrayTy(g$$549, ty$$413)) {
    return true;
  } else {
    const matchValue$$180 = metadataOfTy(g$$549, ty$$413);

    if (matchValue$$180.tag === 1) {
      if (isFSharpInterfaceTy(g$$549, ty$$413) ? true : isFSharpClassTy(g$$549, ty$$413)) {
        const patternInput$$138 = destAppTy(g$$549, ty$$413);
        return (0, _Util.equals)(TryFindFSharpBoolAttribute(g$$549, (0, _TcGlobals.TcGlobals$$get_attrib_SealedAttribute)(g$$549), (0, _tast.EntityRef$$get_Attribs)(patternInput$$138[0])), true);
      } else {
        return true;
      }
    } else {
      const td$$6 = matchValue$$180.fields[0].fields[2];
      return (0, _il.ILTypeDef$$get_IsSealed)(td$$6);
    }
  }
}

function isComInteropTy(g$$550, ty$$414) {
  const patternInput$$139 = destAppTy(g$$550, ty$$414);
  const matchValue$$181 = (0, _TcGlobals.TcGlobals$$get_attrib_ComImportAttribute)(g$$550);

  if (matchValue$$181 != null) {
    const attr$$6 = matchValue$$181;
    return (0, _Util.equals)(TryFindFSharpBoolAttribute(g$$550, attr$$6, (0, _tast.EntityRef$$get_Attribs)(patternInput$$139[0])), true);
  } else {
    return false;
  }
}

function ValSpecIsCompiledAsInstance(g$$551, v$$143) {
  const matchValue$$182 = (0, _tast.Val$$get_MemberInfo)(v$$143);

  if (matchValue$$182 != null) {
    const membInfo$$14 = matchValue$$182;
    return MemberIsCompiledAsInstance(g$$551, (0, _tast.Val$$get_MemberApparentEntity)(v$$143), (0, _tast.Val$$get_IsExtensionMember)(v$$143), membInfo$$14, (0, _tast.Val$$get_Attribs)(v$$143));
  } else {
    return false;
  }
}

function ValRefIsCompiledAsInstanceMember(g$$552, vref$$70) {
  return ValSpecIsCompiledAsInstance(g$$552, (0, _tast.ValRef$$get_Deref)(vref$$70));
}

function GetMemberCallInfo(g$$553, vref$$71, vFlags) {
  var membInfo$$15;
  const matchValue$$183 = (0, _tast.ValRef$$get_MemberInfo)(vref$$71);
  var $target$$322, membInfo$$16;

  if (matchValue$$183 != null) {
    if (membInfo$$15 = matchValue$$183, !(0, _tast.ValRef$$get_IsExtensionMember)(vref$$71)) {
      $target$$322 = 0;
      membInfo$$16 = matchValue$$183;
    } else {
      $target$$322 = 1;
    }
  } else {
    $target$$322 = 1;
  }

  switch ($target$$322) {
    case 0:
      {
        const numEnclTypeArgs = (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)((0, _tast.ValRef$$get_MemberApparentEntity)(vref$$71))) | 0;
        const virtualCall = ((membInfo$$16.MemberFlags.IsOverrideOrExplicitImpl ? true : membInfo$$16.MemberFlags.IsDispatchSlot) ? !membInfo$$16.MemberFlags.IsFinal : false) ? vFlags.tag === 4 ? false : true : false;
        const isNewObj = (0, _Util.equals)(membInfo$$16.MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor")) ? vFlags.tag === 1 ? true : false : false;
        const isSuperInit = (0, _Util.equals)(membInfo$$16.MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor")) ? vFlags.tag === 2 ? true : false : false;
        const isSelfInit = (0, _Util.equals)(membInfo$$16.MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor")) ? vFlags.tag === 3 ? true : false : false;
        const isCompiledAsInstance = ValRefIsCompiledAsInstanceMember(g$$553, vref$$71);
        const takesInstanceArg = isCompiledAsInstance ? !isNewObj : false;
        const isPropGet = (0, _Util.equals)(membInfo$$16.MemberFlags.MemberKind, new _ast.MemberKind(3, "PropertyGet")) ? membInfo$$16.MemberFlags.IsInstance === isCompiledAsInstance : false;
        const isPropSet = (0, _Util.equals)(membInfo$$16.MemberFlags.MemberKind, new _ast.MemberKind(4, "PropertySet")) ? membInfo$$16.MemberFlags.IsInstance === isCompiledAsInstance : false;
        return [numEnclTypeArgs, virtualCall, isNewObj, isSuperInit, isSelfInit, takesInstanceArg, isPropGet, isPropSet];
      }

    case 1:
      {
        return [0, false, false, false, false, false, false, false];
      }
  }
}

function TryGetActivePatternInfo(vref$$72) {
  const logicalName = (0, _tast.ValRef$$get_LogicalName)(vref$$72);

  if (logicalName.length === 0 ? true : logicalName[0] !== "|") {
    return null;
  } else {
    return (0, _PrettyNaming.ActivePatternInfoOfValName)((0, _tast.ValRef$$get_CoreDisplayName)(vref$$72), (0, _tast.ValRef$$get_Range)(vref$$72));
  }
}

function ActivePatternElemRef$002Eget_Name(x$$311) {
  const vref$$73 = x$$311.fields[1];
  const n$$46 = x$$311.fields[2] | 0;
  const matchValue$$184 = TryGetActivePatternInfo(vref$$73);

  if (matchValue$$184 != null) {
    const apinfo = matchValue$$184;
    const nms$$3 = (0, _PrettyNaming.ActivePatternInfo$$get_ActiveTags)(apinfo);

    if (n$$46 < 0 ? true : n$$46 >= (0, _List.length)(nms$$3)) {
      (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("name_of_apref: index out of range for active pattern reference", (0, _tast.ValRef$$get_Range)(vref$$73)));
    }

    return (0, _List.item)(n$$46, nms$$3);
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("not an active pattern name", (0, _tast.ValRef$$get_Range)(vref$$73)));
  }
}

function mkChoiceTyconRef(g$$554, m$$381, n$$47) {
  var $target$$323;

  switch (n$$47) {
    case 0:
    case 1:
      $target$$323 = 0;
      break;

    case 2:
      $target$$323 = 1;
      break;

    case 3:
      $target$$323 = 2;
      break;

    case 4:
      $target$$323 = 3;
      break;

    case 5:
      $target$$323 = 4;
      break;

    case 6:
      $target$$323 = 5;
      break;

    case 7:
      $target$$323 = 6;
      break;

    default:
      $target$$323 = 7;
  }

  switch ($target$$323) {
    case 0:
      {
        return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("mkChoiceTyconRef", m$$381));
      }

    case 1:
      {
        return (0, _TcGlobals.TcGlobals$$get_choice2_tcr)(g$$554);
      }

    case 2:
      {
        return (0, _TcGlobals.TcGlobals$$get_choice3_tcr)(g$$554);
      }

    case 3:
      {
        return (0, _TcGlobals.TcGlobals$$get_choice4_tcr)(g$$554);
      }

    case 4:
      {
        return (0, _TcGlobals.TcGlobals$$get_choice5_tcr)(g$$554);
      }

    case 5:
      {
        return (0, _TcGlobals.TcGlobals$$get_choice6_tcr)(g$$554);
      }

    case 6:
      {
        return (0, _TcGlobals.TcGlobals$$get_choice7_tcr)(g$$554);
      }

    case 7:
      {
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastActivePatternsLimitedToSeven)(), m$$381));
      }
  }
}

function mkChoiceTy(g$$555, m$$382, tinst$$79) {
  const matchValue$$185 = (0, _List.length)(tinst$$79) | 0;

  switch (matchValue$$185) {
    case 0:
      {
        return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$555);
      }

    case 1:
      {
        return (0, _List.head)(tinst$$79);
      }

    default:
      {
        const length = matchValue$$185 | 0;
        return mkAppTy(mkChoiceTyconRef(g$$555, m$$382, length), tinst$$79);
      }
  }
}

function mkChoiceCaseRef(g$$556, m$$383, n$$48, i$$37) {
  return (0, _tast.mkUnionCaseRef)(mkChoiceTyconRef(g$$556, m$$383, n$$48), "Choice" + (0, _Util.int32ToString)(i$$37 + 1) + "Of" + (0, _Util.int32ToString)(n$$48));
}

function ActivePatternInfo$002Eget_Names(x$$312) {
  return (0, _PrettyNaming.ActivePatternInfo$$get_ActiveTags)(x$$312);
}

function ActivePatternInfo$002EResultType(apinfo$$1, g$$557, m$$384, rtys$$1) {
  const choicety = mkChoiceTy(g$$557, m$$384, rtys$$1);

  if ((0, _PrettyNaming.ActivePatternInfo$$get_IsTotal)(apinfo$$1)) {
    return choicety;
  } else {
    return mkOptionTy(g$$557, choicety);
  }
}

function ActivePatternInfo$002EOverallType(apinfo$$2, g$$558, m$$385, dty$$4, rtys$$2) {
  return mkFunTy(dty$$4, ActivePatternInfo$002EResultType(apinfo$$2, g$$558, m$$385, rtys$$2));
}

function doesActivePatternHaveFreeTypars(g$$559, v$$144) {
  const vty = (0, _tast.ValRef$$get_TauType)(v$$144);
  const vtps = (0, _lib.Zset$$$ofList)(typarOrder, (0, _tast.ValRef$$get_Typars)(v$$144));

  if (!isFunTy(g$$559, (0, _tast.ValRef$$get_TauType)(v$$144))) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$activePatternIdentIsNotFunctionTyped$$Z721C83C5)((0, _tast.ValRef$$get_LogicalName)(v$$144)), (0, _tast.ValRef$$get_Range)(v$$144)));
  }

  const patternInput$$140 = stripFunTy(g$$559, vty);
  const patternInput$$141 = [freeInTypes(CollectTypars, patternInput$$140[0]).FreeTypars, freeInType(CollectTypars, patternInput$$140[1]).FreeTypars];
  return !(0, _zset.ZsetModule$$$isEmpty)((0, _zset.ZsetModule$$$inter)((0, _zset.ZsetModule$$$diff)(patternInput$$141[1], patternInput$$141[0]), vtps));
}

const ExprRewritingEnv = (0, _Types.declare)(function ExprRewritingEnv(arg1, arg2, arg3, arg4) {
  this.PreIntercept = arg1;
  this.PostTransform = arg2;
  this.PreInterceptBinding = arg3;
  this.IsUnderQuotations = arg4;
}, _Types.Record);
exports.ExprRewritingEnv = ExprRewritingEnv;

function rewriteBind(env$$14, bind$$37) {
  if ((0, _Util.curry)(2, env$$14.PreInterceptBinding) == null) {
    return rewriteBindStructure(env$$14, bind$$37);
  } else {
    const f$$83 = env$$14.PreInterceptBinding;
    const matchValue$$187 = f$$83(function (arg10$0040$$117) {
      return RewriteExpr(env$$14, arg10$0040$$117);
    }, bind$$37);

    if (matchValue$$187 == null) {
      return rewriteBindStructure(env$$14, bind$$37);
    } else {
      const res$$14 = matchValue$$187;
      return res$$14;
    }
  }
}

function rewriteBindStructure(env$$15, _arg1$$126) {
  const v$$145 = _arg1$$126.fields[0];
  const letSeqPtOpt$$2 = _arg1$$126.fields[2];
  const e$$105 = _arg1$$126.fields[1];
  return new _tast.Binding(0, "TBind", v$$145, RewriteExpr(env$$15, e$$105), letSeqPtOpt$$2);
}

function rewriteBinds(env$$16, binds$$18) {
  return (0, _List.map)(function (bind$$38) {
    return rewriteBind(env$$16, bind$$38);
  }, binds$$18);
}

function RewriteExpr(env$$17, expr$$36) {
  var $target$$324;

  switch (expr$$36.tag) {
    case 7:
    case 2:
      $target$$324 = 0;
      break;

    default:
      $target$$324 = 1;
  }

  switch ($target$$324) {
    case 0:
      {
        return rewriteLinearExpr(env$$17, expr$$36, function (e$$106) {
          return e$$106;
        });
      }

    case 1:
      {
        let expr$$38;
        const matchValue$$188 = preRewriteExpr(env$$17, expr$$36);

        if (matchValue$$188 == null) {
          expr$$38 = rewriteExprStructure(env$$17, expr$$36);
        } else {
          const expr$$37 = matchValue$$188;
          expr$$38 = expr$$37;
        }

        return postRewriteExpr(env$$17, expr$$38);
      }
  }
}

function preRewriteExpr(env$$18, expr$$39) {
  if ((0, _Util.curry)(2, env$$18.PreIntercept) == null) {
    return null;
  } else {
    const f$$84 = env$$18.PreIntercept;
    return f$$84(function (arg10$0040$$118) {
      return RewriteExpr(env$$18, arg10$0040$$118);
    }, expr$$39);
  }
}

function postRewriteExpr(env$$19, expr$$40) {
  const matchValue$$190 = env$$19.PostTransform(expr$$40);

  if (matchValue$$190 != null) {
    const expr$$41 = matchValue$$190;
    return expr$$41;
  } else {
    return expr$$40;
  }
}

function rewriteExprStructure(env$$20, expr$$42) {
  var $target$$325, args$$45, f0$$1, f0ty$$1, m$$386, tyargs$$27, argExprs$$3, argTypes$$2, ast$$2, data$$2, isFromQueryExpression$$3, m$$387, ty$$415, typeDefs$$1, ast$$3, isFromQueryExpression$$4, m$$388, ty$$416, basecall$$5, basev$$6, iimpls$$8, m$$389, overrides$$12, ty$$417, eref$$11, args$$46, c$$25, m$$390, tyargs$$28, _lambdaId$$3, argvs$$2, baseValOpt$$10, body$$44, ctorThisValOpt$$9, m$$391, rty$$48, _lambdaId$$4, argtyvs$$2, body$$46, m$$392, rty$$49, dtree$$27, exprm$$5, m$$393, spBind$$10, targets$$18, ty$$419, binds$$19, e$$107, m$$394, constraints, e2$$62, e3$$14, m$$395, a$$20, b$$50, m$$396;

  if (expr$$42.tag === 1) {
    $target$$325 = 0;
  } else if (expr$$42.tag === 5) {
    $target$$325 = 1;
    args$$45 = expr$$42.fields[3];
    f0$$1 = expr$$42.fields[0];
    f0ty$$1 = expr$$42.fields[1];
    m$$386 = expr$$42.fields[4];
    tyargs$$27 = expr$$42.fields[2];
  } else if (expr$$42.tag === 12) {
    if (expr$$42.fields[1].contents == null) {
      $target$$325 = 3;
      ast$$3 = expr$$42.fields[0];
      isFromQueryExpression$$4 = expr$$42.fields[2];
      m$$388 = expr$$42.fields[3];
      ty$$416 = expr$$42.fields[4];
    } else {
      $target$$325 = 2;
      argExprs$$3 = expr$$42.fields[1].contents[2];
      argTypes$$2 = expr$$42.fields[1].contents[1];
      ast$$2 = expr$$42.fields[0];
      data$$2 = expr$$42.fields[1].contents[3];
      isFromQueryExpression$$3 = expr$$42.fields[2];
      m$$387 = expr$$42.fields[3];
      ty$$415 = expr$$42.fields[4];
      typeDefs$$1 = expr$$42.fields[1].contents[0];
    }
  } else if (expr$$42.tag === 8) {
    $target$$325 = 4;
    basecall$$5 = expr$$42.fields[3];
    basev$$6 = expr$$42.fields[2];
    iimpls$$8 = expr$$42.fields[5];
    m$$389 = expr$$42.fields[6];
    overrides$$12 = expr$$42.fields[4];
    ty$$417 = expr$$42.fields[1];
  } else if (expr$$42.tag === 14) {
    $target$$325 = 5;
    eref$$11 = expr$$42.fields[0];
  } else if (expr$$42.tag === 11) {
    $target$$325 = 6;
    args$$46 = expr$$42.fields[2];
    c$$25 = expr$$42.fields[0];
    m$$390 = expr$$42.fields[3];
    tyargs$$28 = expr$$42.fields[1];
  } else if (expr$$42.tag === 3) {
    $target$$325 = 7;
    _lambdaId$$3 = expr$$42.fields[0];
    argvs$$2 = expr$$42.fields[3];
    baseValOpt$$10 = expr$$42.fields[2];
    body$$44 = expr$$42.fields[4];
    ctorThisValOpt$$9 = expr$$42.fields[1];
    m$$391 = expr$$42.fields[5];
    rty$$48 = expr$$42.fields[6];
  } else if (expr$$42.tag === 4) {
    $target$$325 = 8;
    _lambdaId$$4 = expr$$42.fields[0];
    argtyvs$$2 = expr$$42.fields[1];
    body$$46 = expr$$42.fields[2];
    m$$392 = expr$$42.fields[3];
    rty$$49 = expr$$42.fields[4];
  } else if (expr$$42.tag === 9) {
    $target$$325 = 9;
    dtree$$27 = expr$$42.fields[2];
    exprm$$5 = expr$$42.fields[1];
    m$$393 = expr$$42.fields[4];
    spBind$$10 = expr$$42.fields[0];
    targets$$18 = expr$$42.fields[3];
    ty$$419 = expr$$42.fields[5];
  } else if (expr$$42.tag === 6) {
    $target$$325 = 10;
    binds$$19 = expr$$42.fields[0];
    e$$107 = expr$$42.fields[1];
    m$$394 = expr$$42.fields[2];
  } else if (expr$$42.tag === 7) {
    $target$$325 = 11;
  } else if (expr$$42.tag === 2) {
    $target$$325 = 12;
  } else if (expr$$42.tag === 10) {
    $target$$325 = 13;
    constraints = expr$$42.fields[0];
    e2$$62 = expr$$42.fields[1];
    e3$$14 = expr$$42.fields[2];
    m$$395 = expr$$42.fields[3];
  } else if (expr$$42.tag === 13) {
    $target$$325 = 14;
    a$$20 = expr$$42.fields[0];
    b$$50 = expr$$42.fields[1];
    m$$396 = expr$$42.fields[2];
  } else {
    $target$$325 = 0;
  }

  switch ($target$$325) {
    case 0:
      {
        return expr$$42;
      }

    case 1:
      {
        const f0$0027 = RewriteExpr(env$$20, f0$$1);
        const args$0027$$3 = rewriteExprs(env$$20, args$$45);

        if (f0$$1 === f0$0027 ? args$$45 === args$0027$$3 : false) {
          return expr$$42;
        } else {
          return new _tast.Expr(5, "App", f0$0027, f0ty$$1, tyargs$$27, args$0027$$3, m$$386);
        }
      }

    case 2:
      {
        return new _tast.Expr(12, "Quote", env$$20.IsUnderQuotations ? RewriteExpr(env$$20, ast$$2) : ast$$2, new _Types.FSharpRef([typeDefs$$1, argTypes$$2, rewriteExprs(env$$20, argExprs$$3), data$$2]), isFromQueryExpression$$3, m$$387, ty$$415);
      }

    case 3:
      {
        return new _tast.Expr(12, "Quote", env$$20.IsUnderQuotations ? RewriteExpr(env$$20, ast$$3) : ast$$3, new _Types.FSharpRef(null), isFromQueryExpression$$4, m$$388, ty$$416);
      }

    case 4:
      {
        return mkObjExpr(ty$$417, basev$$6, RewriteExpr(env$$20, basecall$$5), (0, _List.map)(function (arg10$0040$$119) {
          return rewriteObjExprOverride(env$$20, arg10$0040$$119);
        }, overrides$$12), (0, _List.map)(function (tupledArg$$83) {
          return rewriteObjExprInterfaceImpl(env$$20, tupledArg$$83[0], tupledArg$$83[1]);
        }, iimpls$$8), m$$389);
      }

    case 5:
      {
        return RewriteExpr(env$$20, eref$$11.contents);
      }

    case 6:
      {
        const args$0027$$4 = rewriteExprs(env$$20, args$$46);

        if (args$$46 === args$0027$$4) {
          return expr$$42;
        } else {
          return new _tast.Expr(11, "Op", c$$25, tyargs$$28, args$0027$$4, m$$390);
        }
      }

    case 7:
      {
        const body$$45 = RewriteExpr(env$$20, body$$44);
        return rebuildLambda(m$$391, ctorThisValOpt$$9, baseValOpt$$10, argvs$$2, body$$45, rty$$48);
      }

    case 8:
      {
        const body$$47 = RewriteExpr(env$$20, body$$46);
        return mkTypeLambda(m$$392, argtyvs$$2, body$$47, rty$$49);
      }

    case 9:
      {
        const dtree$0027 = rewriteDecisionTree(env$$20, dtree$$27);
        const targets$0027$$2 = rewriteTargets(env$$20, targets$$18);
        return mkAndSimplifyMatch(spBind$$10, exprm$$5, m$$393, ty$$419, dtree$0027, targets$0027$$2);
      }

    case 10:
      {
        const binds$$20 = rewriteBinds(env$$20, binds$$19);
        const e$0027$$3 = RewriteExpr(env$$20, e$$107);
        return new _tast.Expr(6, "LetRec", binds$$20, e$0027$$3, m$$394, (0, _tast.NewFreeVarsCache)());
      }

    case 11:
      {
        throw new Error("unreachable - linear let");
      }

    case 12:
      {
        throw new Error("unreachable - linear seq");
      }

    case 13:
      {
        const e2$0027$$1 = RewriteExpr(env$$20, e2$$62);
        const e3$0027 = RewriteExpr(env$$20, e3$$14);
        return new _tast.Expr(10, "StaticOptimization", constraints, e2$0027$$1, e3$0027, m$$395);
      }

    case 14:
      {
        return new _tast.Expr(13, "TyChoose", a$$20, RewriteExpr(env$$20, b$$50), m$$396);
      }
  }
}

function rewriteLinearExpr($arg$$326, $arg$$327, $arg$$328) {
  rewriteLinearExpr: while (true) {
    const env$$21 = $arg$$326,
          expr$$43 = $arg$$327,
          contf$$3 = $arg$$328;

    const contf$$4 = function contf$$4($arg$$59) {
      return contf$$3(postRewriteExpr(env$$21, $arg$$59));
    };

    const matchValue$$191 = preRewriteExpr(env$$21, expr$$43);

    if (matchValue$$191 == null) {
      if (expr$$43.tag === 7) {
        const bind$$40 = rewriteBind(env$$21, expr$$43.fields[0]);
        $arg$$326 = env$$21;
        $arg$$327 = expr$$43.fields[1];

        $arg$$328 = function ($arg$$60) {
          return contf$$4(mkLetBind(expr$$43.fields[2], bind$$40, $arg$$60));
        };

        continue rewriteLinearExpr;
      } else if (expr$$43.tag === 2) {
        const e1$0027$$2 = RewriteExpr(env$$21, expr$$43.fields[0]);
        $arg$$326 = env$$21;
        $arg$$327 = expr$$43.fields[1];

        $arg$$328 = function ($arg$$61) {
          return contf$$4((expr$$43.fields[0] === e1$0027$$2 ? expr$$43.fields[1] === $arg$$61 : false) ? expr$$43 : new _tast.Expr(2, "Sequential", e1$0027$$2, $arg$$61, expr$$43.fields[2], expr$$43.fields[3], expr$$43.fields[4]));
        };

        continue rewriteLinearExpr;
      } else {
        const activePatternResult34988 = $007CLinearMatchExpr$007C_$007C(expr$$43);

        if (activePatternResult34988 != null) {
          const dtree$$29 = rewriteDecisionTree(env$$21, activePatternResult34988[2]);
          const tg1$$6 = rewriteTarget(env$$21, activePatternResult34988[3]);
          $arg$$326 = env$$21;
          $arg$$327 = activePatternResult34988[4];

          $arg$$328 = function ($arg$$62) {
            return contf$$4(rebuildLinearMatchExpr([activePatternResult34988[0], activePatternResult34988[1], dtree$$29, tg1$$6, $arg$$62, activePatternResult34988[5], activePatternResult34988[6], activePatternResult34988[7]]));
          };

          continue rewriteLinearExpr;
        } else {
          return contf$$4(RewriteExpr(env$$21, expr$$43));
        }
      }
    } else {
      const expr$$45 = matchValue$$191;
      return contf$$4(expr$$45);
    }
  }
}

function rewriteExprs(env$$22, exprs$$2) {
  return (0, _illib.List$$$mapq)(function (arg10$0040$$120) {
    return RewriteExpr(env$$22, arg10$0040$$120);
  }, exprs$$2);
}

function rewriteFlatExprs(env$$23, exprs$$3) {
  return (0, _illib.List$$$mapq)(function (arg10$0040$$121) {
    return RewriteExpr(env$$23, arg10$0040$$121);
  }, exprs$$3);
}

function rewriteDecisionTree(env$$24, x$$318) {
  switch (x$$318.tag) {
    case 0:
      {
        const m$$399 = x$$318.fields[3];
        const e$$108 = x$$318.fields[0];
        const dflt$$12 = x$$318.fields[2];
        const cases = x$$318.fields[1];
        const e$0027$$4 = RewriteExpr(env$$24, e$$108);
        const cases$0027 = (0, _List.map)(function (_arg1$$127) {
          const e$$109 = _arg1$$127.fields[1];
          const discrim$$2 = _arg1$$127.fields[0];
          return new _tast.DecisionTreeCase(0, "TCase", discrim$$2, rewriteDecisionTree(env$$24, e$$109));
        }, cases);
        const dflt$0027 = (0, _Option.defaultArg)(dflt$$12, null, function (x$$319) {
          return rewriteDecisionTree(env$$24, x$$319);
        });
        return new _tast.DecisionTree(0, "TDSwitch", e$0027$$4, cases$0027, dflt$0027, m$$399);
      }

    case 2:
      {
        const body$$49 = x$$318.fields[1];
        const bind$$41 = x$$318.fields[0];
        const bind$0027$$2 = rewriteBind(env$$24, bind$$41);
        const body$$50 = rewriteDecisionTree(env$$24, body$$49);
        return new _tast.DecisionTree(2, "TDBind", bind$0027$$2, body$$50);
      }

    default:
      {
        const n$$49 = x$$318.fields[1] | 0;
        const es$$23 = x$$318.fields[0];
        const es$0027 = rewriteFlatExprs(env$$24, es$$23);

        if (es$$23 === es$0027) {
          return x$$318;
        } else {
          return new _tast.DecisionTree(1, "TDSuccess", es$0027, n$$49);
        }
      }
  }
}

function rewriteTarget(env$$25, _arg2$$20) {
  const vs$$62 = _arg2$$20.fields[0];
  const spTarget$$6 = _arg2$$20.fields[2];
  const e$$110 = _arg2$$20.fields[1];
  return new _tast.DecisionTreeTarget(0, "TTarget", vs$$62, RewriteExpr(env$$25, e$$110), spTarget$$6);
}

function rewriteTargets(env$$26, targets$$19) {
  return (0, _List.map)(function (arg10$0040$$122) {
    return rewriteTarget(env$$26, arg10$0040$$122);
  }, (0, _Array.toList)(targets$$19));
}

function rewriteObjExprOverride(env$$27, _arg3$$10) {
  const vs$$63 = _arg3$$10.fields[3];
  const tps$$57 = _arg3$$10.fields[2];
  const slotsig$$6 = _arg3$$10.fields[0];
  const m$$400 = _arg3$$10.fields[5];
  const e$$111 = _arg3$$10.fields[4];
  const attribs$$7 = _arg3$$10.fields[1];
  return new _tast.ObjExprMethod(0, "TObjExprMethod", slotsig$$6, attribs$$7, tps$$57, vs$$63, RewriteExpr(env$$27, e$$111), m$$400);
}

function rewriteObjExprInterfaceImpl(env$$28, ty$$421, overrides$$14) {
  return [ty$$421, (0, _List.map)(function (arg10$0040$$123) {
    return rewriteObjExprOverride(env$$28, arg10$0040$$123);
  }, overrides$$14)];
}

function rewriteModuleOrNamespaceExpr(env$$29, x$$320) {
  const mty$$20 = x$$320.fields[0];
  const m$$401 = x$$320.fields[2];
  const def$$11 = x$$320.fields[1];
  return new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", mty$$20, rewriteModuleOrNamespaceDef(env$$29, def$$11), m$$401);
}

function rewriteModuleOrNamespaceDefs(env$$30, x$$321) {
  return (0, _List.map)(function (x$$322) {
    return rewriteModuleOrNamespaceDef(env$$30, x$$322);
  }, x$$321);
}

function rewriteModuleOrNamespaceDef(env$$31, x$$323) {
  switch (x$$323.tag) {
    case 2:
      {
        const m$$403 = x$$323.fields[1];
        const bind$$42 = x$$323.fields[0];
        return new _tast.ModuleOrNamespaceExpr(2, "TMDefLet", rewriteBind(env$$31, bind$$42), m$$403);
      }

    case 3:
      {
        const m$$404 = x$$323.fields[1];
        const e$$112 = x$$323.fields[0];
        return new _tast.ModuleOrNamespaceExpr(3, "TMDefDo", RewriteExpr(env$$31, e$$112), m$$404);
      }

    case 1:
      {
        const defs$$11 = x$$323.fields[0];
        return new _tast.ModuleOrNamespaceExpr(1, "TMDefs", rewriteModuleOrNamespaceDefs(env$$31, defs$$11));
      }

    case 0:
      {
        const mexpr$$7 = x$$323.fields[0];
        return new _tast.ModuleOrNamespaceExpr(0, "TMAbstract", rewriteModuleOrNamespaceExpr(env$$31, mexpr$$7));
      }

    default:
      {
        const tycons$$12 = x$$323.fields[1];
        const mbinds$$9 = x$$323.fields[2];
        const m$$402 = x$$323.fields[3];
        const isRec$$1 = x$$323.fields[0];
        return new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", isRec$$1, tycons$$12, rewriteModuleOrNamespaceBindings(env$$31, mbinds$$9), m$$402);
      }
  }
}

function rewriteModuleOrNamespaceBinding(env$$32, x$$324) {
  if (x$$324.tag === 1) {
    const rhs$$4 = x$$324.fields[1];
    const nm$$31 = x$$324.fields[0];
    return new _tast.ModuleOrNamespaceBinding(1, "Module", nm$$31, rewriteModuleOrNamespaceDef(env$$32, rhs$$4));
  } else {
    const bind$$43 = x$$324.fields[0];
    return new _tast.ModuleOrNamespaceBinding(0, "Binding", rewriteBind(env$$32, bind$$43));
  }
}

function rewriteModuleOrNamespaceBindings(env$$33, mbinds$$10) {
  return (0, _List.map)(function (x$$325) {
    return rewriteModuleOrNamespaceBinding(env$$33, x$$325);
  }, mbinds$$10);
}

function RewriteImplFile(env$$34, mv$$1) {
  return (0, _tast.mapTImplFile)(function (x$$326) {
    return rewriteModuleOrNamespaceExpr(env$$34, x$$326);
  }, mv$$1);
}

function MakeExportRemapping(viewedCcu$$2, mspec$$10) {
  const accEntityRemap$$1 = function accEntityRemap$$1(entity$$5, acc$$174) {
    const matchValue$$192 = tryRescopeEntity(viewedCcu$$2, entity$$5);

    if (matchValue$$192 == null) {
      if ((0, _tast.Entity$$get_IsNamespace)(entity$$5)) {
        return acc$$174;
      } else {
        return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("Unexpected entity without a pubpath when remapping assembly data", (0, _tast.Entity$$get_Range)(entity$$5)));
      }
    } else {
      const eref$$12 = matchValue$$192;
      return addTyconRefRemap((0, _tast.mkLocalTyconRef)(entity$$5), eref$$12, acc$$174);
    }
  };

  const accValRemap$$1 = function accValRemap$$1(vspec$$4, acc$$175) {
    const matchValue$$193 = tryRescopeVal(viewedCcu$$2, acc$$175, vspec$$4);

    if (matchValue$$193 == null) {
      return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("Unexpected value without a pubpath when remapping assembly data", (0, _tast.Val$$get_Range)(vspec$$4)));
    } else {
      const vref$$74 = matchValue$$193;
      return new Remap(acc$$175.tpinst, ValMap$00601$$Add(acc$$175.valRemap, vspec$$4, vref$$74), acc$$175.tyconRefRemap, acc$$175.removeTraitSolutions);
    }
  };

  const mty$$21 = (0, _tast.Entity$$get_ModuleOrNamespaceType)(mspec$$10);
  const entities = allEntitiesOfModuleOrNamespaceTy(mty$$21);
  const vs$$64 = allValsOfModuleOrNamespaceTy(mty$$21);
  const acc$$176 = (0, _List.foldBack)(accEntityRemap$$1, entities, Remap$$$get_Empty());
  const allRemap = (0, _List.foldBack)(accValRemap$$1, vs$$64, acc$$176);
  return allRemap;
}

function remapEntityDataToNonLocal(g$$560, tmenv$$60, d$$17) {
  var matchValue$$194, dd$$1;
  const patternInput$$142 = tmenvCopyRemapAndBindTypars(function (xs$$27) {
    return remapAttribs(g$$560, tmenv$$60, xs$$27);
  }, tmenv$$60, (0, _illib.LazyWithContext$00602$$Force$$2B594)(d$$17.entity_typars, d$$17.entity_range));
  const typarsR = (0, _illib.LazyWithContext$00602$$$NotLazy$$2B595)(patternInput$$142[0]);
  const attribsR$$1 = remapAttribs(g$$560, patternInput$$142[1], d$$17.entity_attribs);
  const tyconReprR = remapTyconRepr(g$$560, patternInput$$142[1], d$$17.entity_tycon_repr);
  const tyconAbbrevR = (0, _Option.defaultArg)((0, _tast.Entity$$get_TypeAbbrev)(d$$17), null, function mapping$$72(x$$327) {
    return remapType(patternInput$$142[1], x$$327);
  });
  const tyconTcaugR = remapTyconAug(patternInput$$142[1], d$$17.entity_tycon_tcaug);
  const modulContentsR = new _tast.MaybeLazy$00601(0, "Strict", mapImmediateValsAndTycons(function ft$$3(x$$329) {
    return remapTyconToNonLocal(g$$560, tmenv$$60, x$$329);
  }, function fv$$2(inp$$2) {
    return remapValToNonLocal(g$$560, tmenv$$60, inp$$2);
  }, (0, _tast.MaybeLazy$00601$$get_Value)(d$$17.entity_modul_contents)));
  const exnInfoR$$1 = remapTyconExnInfo(g$$560, patternInput$$142[1], (0, _tast.Entity$$get_ExceptionInfo)(d$$17));
  return new _tast.Entity(typarsR, d$$17.entity_flags, d$$17.entity_stamp, d$$17.entity_logical_name, d$$17.entity_range, attribsR$$1, tyconReprR, tyconTcaugR, modulContentsR, d$$17.entity_pubpath, d$$17.entity_cpath, d$$17.entity_il_repr_cache, (matchValue$$194 = d$$17.entity_opt_data, matchValue$$194 != null ? (dd$$1 = matchValue$$194, new _tast.EntityOptionalData(dd$$1.entity_compiled_name, dd$$1.entity_other_range, dd$$1.entity_kind, dd$$1.entity_xmldoc, dd$$1.entity_xmldocsig, tyconAbbrevR, dd$$1.entity_tycon_repr_accessibility, dd$$1.entity_accessiblity, exnInfoR$$1)) : null));
}

function remapTyconToNonLocal(g$$561, tmenv$$61, x$$331) {
  return (0, _tast.NewModifiedTycon)(function f$$85(d$$18) {
    return remapEntityDataToNonLocal(g$$561, tmenv$$61, d$$18);
  }, x$$331);
}

function remapValToNonLocal(g$$562, tmenv$$62, inp$$4) {
  return (0, _tast.NewModifiedVal)(function f$$86(d$$19) {
    return remapValData(g$$562, tmenv$$62, d$$19);
  }, inp$$4);
}

function ApplyExportRemappingToEntity(g$$563, tmenv$$63, x$$332) {
  return remapTyconToNonLocal(g$$563, tmenv$$63, x$$332);
}

function isCompiledConstraint(cx) {
  var $target$$329;

  switch (cx.tag) {
    case 2:
    case 5:
    case 4:
    case 7:
    case 0:
      $target$$329 = 0;
      break;

    default:
      $target$$329 = 1;
  }

  switch ($target$$329) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function IsGenericValWithGenericContraints(g$$564, v$$146) {
  if (isForallTy(g$$564, (0, _tast.Val$$get_Type)(v$$146))) {
    return (0, _List.exists)(function predicate$$23(tp$$44) {
      return (0, _List.exists)(isCompiledConstraint, (0, _tast.Typar$$get_Constraints)(tp$$44));
    }, destForallTy(g$$564, (0, _tast.Val$$get_Type)(v$$146))[0]);
  } else {
    return false;
  }
}

function Entity$002EHasInterface(tycon$$31, g$$565, ty$$422) {
  return (0, _List.exists)(function predicate$$24(tupledArg$$84) {
    return typeEquiv(g$$565, ty$$422, tupledArg$$84[0]);
  }, (0, _tast.Entity$$get_TypeContents)(tycon$$31).tcaug_interfaces);
}

function Entity$002EHasOverride(tycon$$32, g$$566, nm$$32, argtys$$17) {
  return (0, _List.exists)(function predicate$$25(vref$$75) {
    const matchValue$$195 = (0, _tast.ValRef$$get_MemberInfo)(vref$$75);

    if (matchValue$$195 != null) {
      const membInfo$$17 = matchValue$$195;
      const argInfos$$7 = ArgInfosOfMember(g$$566, vref$$75);

      if ((0, _List.length)(argInfos$$7) === 1 ? (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$125, arg20$0040$$36) {
        return typeEquiv(g$$566, arg10$0040$$125, arg20$0040$$36);
      }, (0, _List.map)(function (tuple$$12) {
        return tuple$$12[0];
      }, (0, _List.head)(argInfos$$7)), argtys$$17) : false) {
        return membInfo$$17.MemberFlags.IsOverrideOrExplicitImpl;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, (0, _illib.NameMultiMapModule$$$find)(nm$$32, (0, _tast.Entity$$get_TypeContents)(tycon$$32).tcaug_adhoc));
}

function Entity$002EHasMember(tycon$$33, g$$567, nm$$33, argtys$$18) {
  return (0, _List.exists)(function predicate$$26(vref$$76) {
    if ((0, _tast.ValRef$$get_MemberInfo)(vref$$76) == null) {
      return false;
    } else {
      const argInfos$$8 = ArgInfosOfMember(g$$567, vref$$76);

      if ((0, _List.length)(argInfos$$8) === 1) {
        return (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$126, arg20$0040$$37) {
          return typeEquiv(g$$567, arg10$0040$$126, arg20$0040$$37);
        }, (0, _List.map)(function (tuple$$13) {
          return tuple$$13[0];
        }, (0, _List.head)(argInfos$$8)), argtys$$18);
      } else {
        return false;
      }
    }
  }, (0, _illib.NameMultiMapModule$$$find)(nm$$33, (0, _tast.Entity$$get_TypeContents)(tycon$$33).tcaug_adhoc));
}

function EntityRef$002EHasInterface(tcref$$108, g$$568, ty$$423) {
  return Entity$002EHasInterface((0, _tast.EntityRef$$get_Deref)(tcref$$108), g$$568, ty$$423);
}

function EntityRef$002EHasOverride(tcref$$109, g$$569, nm$$34, argtys$$19) {
  return Entity$002EHasOverride((0, _tast.EntityRef$$get_Deref)(tcref$$109), g$$569, nm$$34, argtys$$19);
}

function EntityRef$002EHasMember(tcref$$110, g$$570, nm$$35, argtys$$20) {
  return Entity$002EHasMember((0, _tast.EntityRef$$get_Deref)(tcref$$110), g$$570, nm$$35, argtys$$20);
}

function mkFastForLoop(g$$571, spLet, m$$407, idv, start$$1, dir$$4, finish, body$$51) {
  const dir$$5 = dir$$4 ? new _tast.ForLoopStyle(0, "FSharpForLoopUp") : new _tast.ForLoopStyle(1, "FSharpForLoopDown");
  return mkFor(g$$571, spLet, idv, start$$1, dir$$5, finish, body$$51, m$$407);
}

function IsSimpleSyntacticConstantExpr(g$$572, inputExpr$$1) {
  const checkExpr = function checkExpr(vrefs) {
    return function (x$$334) {
      var vref$$82, arg2$$13, arg1$$20, vref$$77, arg$$10, vref$$78, arg$$11, vref$$79, arg$$12, vref$$80, arg$$13;
      const matchValue$$197 = stripExpr(x$$334);
      var $target$$330, arg$$14, arg$$15, vref$$81;

      if (matchValue$$197.tag === 11) {
        if (matchValue$$197.fields[0].tag === 24) {
          if (matchValue$$197.fields[2].tail != null) {
            if (matchValue$$197.fields[2].tail.tail == null) {
              $target$$330 = 0;
              arg$$14 = matchValue$$197.fields[2].head;
            } else {
              const activePatternResult35093 = $007CUnopExpr$007C_$007C(g$$572, matchValue$$197);

              if (activePatternResult35093 != null) {
                if (vref$$77 = activePatternResult35093[0], (arg$$10 = activePatternResult35093[1], (((valRefEq(g$$572, vref$$77, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_minus_vref)(g$$572)) ? true : valRefEq(g$$572, vref$$77, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_plus_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$77, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$77, (0, _TcGlobals.TcGlobals$$get_bitwise_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$77, (0, _TcGlobals.TcGlobals$$get_enum_vref)(g$$572)))) {
                  $target$$330 = 1;
                  arg$$15 = activePatternResult35093[1];
                  vref$$81 = activePatternResult35093[0];
                } else {
                  $target$$330 = 2;
                }
              } else {
                $target$$330 = 2;
              }
            }
          } else {
            const activePatternResult35094 = $007CUnopExpr$007C_$007C(g$$572, matchValue$$197);

            if (activePatternResult35094 != null) {
              if (vref$$78 = activePatternResult35094[0], (arg$$11 = activePatternResult35094[1], (((valRefEq(g$$572, vref$$78, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_minus_vref)(g$$572)) ? true : valRefEq(g$$572, vref$$78, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_plus_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$78, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$78, (0, _TcGlobals.TcGlobals$$get_bitwise_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$78, (0, _TcGlobals.TcGlobals$$get_enum_vref)(g$$572)))) {
                $target$$330 = 1;
                arg$$15 = activePatternResult35094[1];
                vref$$81 = activePatternResult35094[0];
              } else {
                $target$$330 = 2;
              }
            } else {
              $target$$330 = 2;
            }
          }
        } else {
          const activePatternResult35095 = $007CUnopExpr$007C_$007C(g$$572, matchValue$$197);

          if (activePatternResult35095 != null) {
            if (vref$$79 = activePatternResult35095[0], (arg$$12 = activePatternResult35095[1], (((valRefEq(g$$572, vref$$79, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_minus_vref)(g$$572)) ? true : valRefEq(g$$572, vref$$79, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_plus_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$79, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$79, (0, _TcGlobals.TcGlobals$$get_bitwise_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$79, (0, _TcGlobals.TcGlobals$$get_enum_vref)(g$$572)))) {
              $target$$330 = 1;
              arg$$15 = activePatternResult35095[1];
              vref$$81 = activePatternResult35095[0];
            } else {
              $target$$330 = 2;
            }
          } else {
            $target$$330 = 2;
          }
        }
      } else {
        const activePatternResult35096 = $007CUnopExpr$007C_$007C(g$$572, matchValue$$197);

        if (activePatternResult35096 != null) {
          if (vref$$80 = activePatternResult35096[0], (arg$$13 = activePatternResult35096[1], (((valRefEq(g$$572, vref$$80, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_minus_vref)(g$$572)) ? true : valRefEq(g$$572, vref$$80, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_plus_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$80, (0, _TcGlobals.TcGlobals$$get_unchecked_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$80, (0, _TcGlobals.TcGlobals$$get_bitwise_unary_not_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$80, (0, _TcGlobals.TcGlobals$$get_enum_vref)(g$$572)))) {
            $target$$330 = 1;
            arg$$15 = activePatternResult35096[1];
            vref$$81 = activePatternResult35096[0];
          } else {
            $target$$330 = 2;
          }
        } else {
          $target$$330 = 2;
        }
      }

      switch ($target$$330) {
        case 0:
          {
            return checkExpr(vrefs)(arg$$14);
          }

        case 1:
          {
            return checkExpr(vrefs)(arg$$15);
          }

        case 2:
          {
            var $target$$331, arg1$$21, arg2$$14, vref$$83;
            const activePatternResult35091 = $007CBinopExpr$007C_$007C(g$$572, matchValue$$197);

            if (activePatternResult35091 != null) {
              if (vref$$82 = activePatternResult35091[0], (arg2$$13 = activePatternResult35091[2], (arg1$$20 = activePatternResult35091[1], (((((((((((((((valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_equals_operator_vref)(g$$572)) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_compare_operator_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_unchecked_addition_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_less_than_operator_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_less_than_or_equals_operator_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_greater_than_operator_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_greater_than_or_equals_operator_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_not_equals_operator_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_unchecked_addition_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_unchecked_multiply_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_unchecked_subtraction_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_bitwise_shift_left_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_bitwise_shift_right_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_bitwise_xor_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_bitwise_and_vref)(g$$572))) ? true : valRefEq(g$$572, vref$$82, (0, _TcGlobals.TcGlobals$$get_bitwise_or_vref)(g$$572))) ? !typeEquiv(g$$572, tyOfExpr(g$$572, arg1$$20), (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$572)) ? !typeEquiv(g$$572, tyOfExpr(g$$572, arg1$$20), (0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$572)) : false : false))) {
                $target$$331 = 0;
                arg1$$21 = activePatternResult35091[1];
                arg2$$14 = activePatternResult35091[2];
                vref$$83 = activePatternResult35091[0];
              } else {
                $target$$331 = 1;
              }
            } else {
              $target$$331 = 1;
            }

            switch ($target$$331) {
              case 0:
                {
                  return checkExpr(vrefs)(arg1$$21) ? checkExpr(vrefs)(arg2$$14) : false;
                }

              case 1:
                {
                  var $target$$332, vref$$84, dtree$$30, targets$$20, b$$51, e$$113, b$$52;

                  if (matchValue$$197.tag === 1) {
                    $target$$332 = 0;
                    vref$$84 = matchValue$$197.fields[0];
                  } else if (matchValue$$197.tag === 9) {
                    $target$$332 = 1;
                    dtree$$30 = matchValue$$197.fields[2];
                    targets$$20 = matchValue$$197.fields[3];
                  } else if (matchValue$$197.tag === 7) {
                    $target$$332 = 2;
                    b$$51 = matchValue$$197.fields[0];
                    e$$113 = matchValue$$197.fields[1];
                  } else if (matchValue$$197.tag === 13) {
                    $target$$332 = 3;
                    b$$52 = matchValue$$197.fields[1];
                  } else if (matchValue$$197.tag === 0) {
                    $target$$332 = 4;
                  } else if (matchValue$$197.tag === 11) {
                    if (matchValue$$197.fields[0].tag === 0) {
                      if (matchValue$$197.fields[2].tail == null) {
                        $target$$332 = 4;
                      } else if ($007CUncheckedDefaultOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                        $target$$332 = 4;
                      } else if ($007CSizeOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                        $target$$332 = 4;
                      } else if ($007CTypeOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                        $target$$332 = 4;
                      } else {
                        $target$$332 = 5;
                      }
                    } else if ($007CUncheckedDefaultOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                      $target$$332 = 4;
                    } else if ($007CSizeOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                      $target$$332 = 4;
                    } else if ($007CTypeOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                      $target$$332 = 4;
                    } else {
                      $target$$332 = 5;
                    }
                  } else if ($007CUncheckedDefaultOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                    $target$$332 = 4;
                  } else if ($007CSizeOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                    $target$$332 = 4;
                  } else if ($007CTypeOfExpr$007C_$007C(g$$572, matchValue$$197) != null) {
                    $target$$332 = 4;
                  } else {
                    $target$$332 = 5;
                  }

                  switch ($target$$332) {
                    case 0:
                      {
                        return (0, _tast.Val$$get_IsCompiledAsStaticPropertyWithoutField)((0, _tast.ValRef$$get_Deref)(vref$$84)) ? true : (0, _Set.FSharpSet$$Contains$$2B595)(vrefs, (0, _tast.ValRef$$get_Stamp)(vref$$84));
                      }

                    case 1:
                      {
                        return checkDecisionTree(vrefs)(dtree$$30) ? targets$$20.every(checkDecisionTreeTarget(vrefs)) : false;
                      }

                    case 2:
                      {
                        return checkExpr(vrefs)((0, _tast.Binding$$get_Expr)(b$$51)) ? checkExpr((0, _Set.FSharpSet$$Add$$2B595)(vrefs, (0, _tast.Val$$get_Stamp)((0, _tast.Binding$$get_Var)(b$$51))))(e$$113) : false;
                      }

                    case 3:
                      {
                        return checkExpr(vrefs)(b$$52);
                      }

                    case 4:
                      {
                        return true;
                      }

                    case 5:
                      {
                        return false;
                      }
                  }
                }
            }
          }
      }
    };
  };

  const checkDecisionTree = function checkDecisionTree(vrefs$$1) {
    return function (x$$335) {
      switch (x$$335.tag) {
        case 0:
          {
            const e$$114 = x$$335.fields[0];
            const dflt$$13 = x$$335.fields[2];
            const cases$$1 = x$$335.fields[1];
            const _m$$6 = x$$335.fields[3];
            return (checkExpr(vrefs$$1)(e$$114) ? (0, _List.forAll)(checkDecisionTreeCase(vrefs$$1), cases$$1) : false) ? (0, _Seq.forAll)(checkDecisionTree(vrefs$$1), (0, _Option.defaultArg)(dflt$$13, [], function ($x$$63) {
              return [$x$$63];
            })) : false;
          }

        case 2:
          {
            const body$$52 = x$$335.fields[1];
            const bind$$44 = x$$335.fields[0];
            return checkExpr(vrefs$$1)((0, _tast.Binding$$get_Expr)(bind$$44)) ? checkDecisionTree((0, _Set.FSharpSet$$Add$$2B595)(vrefs$$1, (0, _tast.Val$$get_Stamp)((0, _tast.Binding$$get_Var)(bind$$44))))(body$$52) : false;
          }

        default:
          {
            const es$$24 = x$$335.fields[0];

            const _n$$8 = x$$335.fields[1] | 0;

            return (0, _List.forAll)(checkExpr(vrefs$$1), es$$24);
          }
      }
    };
  };

  const checkDecisionTreeCase = function checkDecisionTreeCase(vrefs$$2) {
    return function (_arg1$$129) {
      var _c$$2;

      const dtree$$31 = _arg1$$129.fields[1];
      const discrim$$3 = _arg1$$129.fields[0];
      return (discrim$$3.tag === 2 ? (_c$$2 = discrim$$3.fields[0], true) : false) ? checkDecisionTree(vrefs$$2)(dtree$$31) : false;
    };
  };

  const checkDecisionTreeTarget = function checkDecisionTreeTarget(vrefs$$3) {
    return function (_arg2$$22) {
      const vs$$65 = _arg2$$22.fields[0];
      const e$$115 = _arg2$$22.fields[1];
      const vrefs$$4 = (0, _List.fold)(function folder$$22(s$$11, v$$147) {
        return (0, _Set.FSharpSet$$Add$$2B595)(s$$11, (0, _tast.Val$$get_Stamp)(v$$147));
      }, vrefs$$3, vs$$65);
      return checkExpr(vrefs$$4)(e$$115);
    };
  };

  return checkExpr((0, _Set.empty)({
    Compare: _Long.compare
  }))(inputExpr$$1);
}

function EvalArithBinOp(opInt8, opInt16, opInt32, opInt64, opUInt8, opUInt16, opUInt32, opUInt64, arg1$$22, arg2$$15) {
  const m$$408 = (0, _range.unionRanges)(Expr$002Eget_Range(arg1$$22), Expr$002Eget_Range(arg2$$15));

  try {
    const matchValue$$198 = [arg1$$22, arg2$$15];
    var $target$$343, ty$$424, x1$$6, x2$$4, ty$$425, x1$$7, x2$$5, ty$$426, x1$$8, x2$$6, ty$$427, x1$$9, x2$$7, ty$$428, x1$$10, x2$$8, ty$$429, x1$$11, x2$$9, ty$$430, x1$$12, x2$$10, ty$$431, x1$$13, x2$$11;

    if (matchValue$$198[0].tag === 0) {
      if (matchValue$$198[0].fields[0].tag === 5) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 5) {
            $target$$343 = 0;
            ty$$424 = matchValue$$198[0].fields[2];
            x1$$6 = matchValue$$198[0].fields[0].fields[0];
            x2$$4 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 1) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 1) {
            $target$$343 = 1;
            ty$$425 = matchValue$$198[0].fields[2];
            x1$$7 = matchValue$$198[0].fields[0].fields[0];
            x2$$5 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 3) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 3) {
            $target$$343 = 2;
            ty$$426 = matchValue$$198[0].fields[2];
            x1$$8 = matchValue$$198[0].fields[0].fields[0];
            x2$$6 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 7) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 7) {
            $target$$343 = 3;
            ty$$427 = matchValue$$198[0].fields[2];
            x1$$9 = matchValue$$198[0].fields[0].fields[0];
            x2$$7 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 2) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 2) {
            $target$$343 = 4;
            ty$$428 = matchValue$$198[0].fields[2];
            x1$$10 = matchValue$$198[0].fields[0].fields[0];
            x2$$8 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 4) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 4) {
            $target$$343 = 5;
            ty$$429 = matchValue$$198[0].fields[2];
            x1$$11 = matchValue$$198[0].fields[0].fields[0];
            x2$$9 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 6) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 6) {
            $target$$343 = 6;
            ty$$430 = matchValue$$198[0].fields[2];
            x1$$12 = matchValue$$198[0].fields[0].fields[0];
            x2$$10 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else if (matchValue$$198[0].fields[0].tag === 8) {
        if (matchValue$$198[1].tag === 0) {
          if (matchValue$$198[1].fields[0].tag === 8) {
            $target$$343 = 7;
            ty$$431 = matchValue$$198[0].fields[2];
            x1$$13 = matchValue$$198[0].fields[0].fields[0];
            x2$$11 = matchValue$$198[1].fields[0].fields[0];
          } else {
            $target$$343 = 8;
          }
        } else {
          $target$$343 = 8;
        }
      } else {
        $target$$343 = 8;
      }
    } else {
      $target$$343 = 8;
    }

    switch ($target$$343) {
      case 0:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(5, "Int32", opInt32(x1$$6, x2$$4)), m$$408, ty$$424);
        }

      case 1:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(1, "SByte", opInt8(x1$$7, x2$$5)), m$$408, ty$$425);
        }

      case 2:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(3, "Int16", opInt16(x1$$8, x2$$6)), m$$408, ty$$426);
        }

      case 3:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(7, "Int64", opInt64(x1$$9, x2$$7)), m$$408, ty$$427);
        }

      case 4:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(2, "Byte", opUInt8(x1$$10, x2$$8)), m$$408, ty$$428);
        }

      case 5:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(4, "UInt16", opUInt16(x1$$11, x2$$9)), m$$408, ty$$429);
        }

      case 6:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(6, "UInt32", opUInt32(x1$$12, x2$$10)), m$$408, ty$$430);
        }

      case 7:
        {
          return new _tast.Expr(0, "Const", new _tast.Const(8, "UInt64", opUInt64(x1$$13, x2$$11)), m$$408, ty$$431);
        }

      case 8:
        {
          return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastNotAConstantExpression)(), m$$408));
        }
    }
  } catch (matchValue$$199) {
    if (false) {
      return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastConstantExpressionOverflow)(), m$$408));
    } else {
      throw matchValue$$199;
    }
  }
}

function EvalAttribArgExpr(g$$573, x$$336) {
  EvalAttribArgExpr: while (true) {
    if (x$$336.tag === 0) {
      var $target$$344;

      if (x$$336.fields[0].tag === 5) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 1) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 3) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 7) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 2) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 4) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 6) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 8) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 12) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 11) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 13) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 17) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 14) {
        $target$$344 = 0;
      } else if (x$$336.fields[0].tag === 15) {
        $target$$344 = 1;
      } else if (x$$336.fields[0].tag === 9) {
        $target$$344 = 1;
      } else if (x$$336.fields[0].tag === 10) {
        $target$$344 = 1;
      } else if (x$$336.fields[0].tag === 16) {
        $target$$344 = 1;
      } else {
        $target$$344 = 0;
      }

      switch ($target$$344) {
        case 0:
          {
            return x$$336;
          }

        case 1:
          {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastNotAConstantExpression)(), x$$336.fields[1]));
            return x$$336;
          }
      }
    } else if ($007CTypeOfExpr$007C_$007C(g$$573, x$$336) != null) {
      return x$$336;
    } else {
      if ($007CTypeDefOfExpr$007C_$007C(g$$573, x$$336) != null) {
        return x$$336;
      } else {
        var $target$$345, arg$$16, arg1$$23;

        if (x$$336.tag === 11) {
          if (x$$336.fields[0].tag === 24) {
            if (x$$336.fields[2].tail != null) {
              if (x$$336.fields[2].tail.tail == null) {
                $target$$345 = 0;
                arg$$16 = x$$336.fields[2].head;
              } else {
                const activePatternResult35120 = $007CEnumExpr$007C_$007C(g$$573, x$$336);

                if (activePatternResult35120 != null) {
                  $target$$345 = 1;
                  arg1$$23 = activePatternResult35120;
                } else {
                  $target$$345 = 2;
                }
              }
            } else {
              const activePatternResult35121 = $007CEnumExpr$007C_$007C(g$$573, x$$336);

              if (activePatternResult35121 != null) {
                $target$$345 = 1;
                arg1$$23 = activePatternResult35121;
              } else {
                $target$$345 = 2;
              }
            }
          } else {
            const activePatternResult35122 = $007CEnumExpr$007C_$007C(g$$573, x$$336);

            if (activePatternResult35122 != null) {
              $target$$345 = 1;
              arg1$$23 = activePatternResult35122;
            } else {
              $target$$345 = 2;
            }
          }
        } else {
          const activePatternResult35123 = $007CEnumExpr$007C_$007C(g$$573, x$$336);

          if (activePatternResult35123 != null) {
            $target$$345 = 1;
            arg1$$23 = activePatternResult35123;
          } else {
            $target$$345 = 2;
          }
        }

        switch ($target$$345) {
          case 0:
            {
              g$$573 = g$$573;
              x$$336 = arg$$16;
              continue EvalAttribArgExpr;
            }

          case 1:
            {
              g$$573 = g$$573;
              x$$336 = arg1$$23;
              continue EvalAttribArgExpr;
            }

          case 2:
            {
              const activePatternResult35118 = $007CAttribBitwiseOrExpr$007C_$007C(g$$573, x$$336);

              if (activePatternResult35118 != null) {
                return EvalArithBinOp(function (x$$337, y$$61) {
                  return x$$337 | y$$61;
                }, function (x$$338, y$$62) {
                  return x$$338 | y$$62;
                }, function (x$$339, y$$63) {
                  return x$$339 | y$$63;
                }, _Long.op_BitwiseOr, function (x$$341, y$$65) {
                  return x$$341 | y$$65;
                }, function (x$$342, y$$66) {
                  return x$$342 | y$$66;
                }, function (x$$343, y$$67) {
                  return (x$$343 | y$$67) >>> 0;
                }, _Long.op_BitwiseOr, EvalAttribArgExpr(g$$573, activePatternResult35118[0]), EvalAttribArgExpr(g$$573, activePatternResult35118[1]));
              } else {
                const activePatternResult35116 = $007CSpecificBinopExpr$007C_$007C(g$$573, (0, _TcGlobals.TcGlobals$$get_unchecked_addition_vref)(g$$573), x$$336);

                if (activePatternResult35116 != null) {
                  const patternInput$$143 = [EvalAttribArgExpr(g$$573, activePatternResult35116[0]), EvalAttribArgExpr(g$$573, activePatternResult35116[1])];
                  const matchValue$$200 = [patternInput$$143[0], patternInput$$143[1]];
                  var $target$$346, m$$410, ty$$432, x1$$14, x2$$12;

                  if (matchValue$$200[0].tag === 0) {
                    if (matchValue$$200[0].fields[0].tag === 14) {
                      if (matchValue$$200[1].tag === 0) {
                        if (matchValue$$200[1].fields[0].tag === 14) {
                          $target$$346 = 0;
                          m$$410 = matchValue$$200[0].fields[1];
                          ty$$432 = matchValue$$200[0].fields[2];
                          x1$$14 = matchValue$$200[0].fields[0].fields[0];
                          x2$$12 = matchValue$$200[1].fields[0].fields[0];
                        } else {
                          $target$$346 = 1;
                        }
                      } else {
                        $target$$346 = 1;
                      }
                    } else {
                      $target$$346 = 1;
                    }
                  } else {
                    $target$$346 = 1;
                  }

                  switch ($target$$346) {
                    case 0:
                      {
                        return new _tast.Expr(0, "Const", new _tast.Const(14, "String", x1$$14 + x2$$12), m$$410, ty$$432);
                      }

                    case 1:
                      {
                        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastNotAConstantExpression)(), Expr$002Eget_Range(x$$336)));
                        return x$$336;
                      }
                  }
                } else {
                  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastNotAConstantExpression)(), Expr$002Eget_Range(x$$336)));
                  return x$$336;
                }
              }
            }
        }
      }
    }
  }
}

function EvaledAttribExprEquality(g$$574, e1$$122, e2$$66) {
  const matchValue$$201 = [e1$$122, e2$$66];
  var $target$$347, c1$$1, c2$$1, ty1$$23, ty2$$16;

  if (matchValue$$201[0].tag === 0) {
    if (matchValue$$201[1].tag === 0) {
      $target$$347 = 0;
      c1$$1 = matchValue$$201[0].fields[0];
      c2$$1 = matchValue$$201[1].fields[0];
    } else {
      const activePatternResult35136 = $007CTypeOfExpr$007C_$007C(g$$574, matchValue$$201[0]);

      if (activePatternResult35136 != null) {
        const activePatternResult35137 = $007CTypeOfExpr$007C_$007C(g$$574, matchValue$$201[1]);

        if (activePatternResult35137 != null) {
          $target$$347 = 1;
          ty1$$23 = activePatternResult35136;
          ty2$$16 = activePatternResult35137;
        } else {
          $target$$347 = 2;
        }
      } else {
        $target$$347 = 2;
      }
    }
  } else {
    const activePatternResult35138 = $007CTypeOfExpr$007C_$007C(g$$574, matchValue$$201[0]);

    if (activePatternResult35138 != null) {
      const activePatternResult35139 = $007CTypeOfExpr$007C_$007C(g$$574, matchValue$$201[1]);

      if (activePatternResult35139 != null) {
        $target$$347 = 1;
        ty1$$23 = activePatternResult35138;
        ty2$$16 = activePatternResult35139;
      } else {
        $target$$347 = 2;
      }
    } else {
      $target$$347 = 2;
    }
  }

  switch ($target$$347) {
    case 0:
      {
        return (0, _Util.equals)(c1$$1, c2$$1);
      }

    case 1:
      {
        return typeEquiv(g$$574, ty1$$23, ty2$$16);
      }

    case 2:
      {
        var $target$$348, ty1$$24, ty2$$17;
        const activePatternResult35132 = $007CTypeDefOfExpr$007C_$007C(g$$574, matchValue$$201[0]);

        if (activePatternResult35132 != null) {
          const activePatternResult35133 = $007CTypeDefOfExpr$007C_$007C(g$$574, matchValue$$201[1]);

          if (activePatternResult35133 != null) {
            $target$$348 = 0;
            ty1$$24 = activePatternResult35132;
            ty2$$17 = activePatternResult35133;
          } else {
            $target$$348 = 1;
          }
        } else {
          $target$$348 = 1;
        }

        switch ($target$$348) {
          case 0:
            {
              return typeEquiv(g$$574, ty1$$24, ty2$$17);
            }

          case 1:
            {
              return false;
            }
        }
      }
  }
}

function $007CConstToILFieldInit$007C_$007C(c$$27) {
  switch (c$$27.tag) {
    case 1:
      {
        const n$$50 = c$$27.fields[0] | 0;
        return new _il.ILFieldInit(3, "Int8", n$$50);
      }

    case 3:
      {
        const n$$51 = c$$27.fields[0] | 0;
        return new _il.ILFieldInit(4, "Int16", n$$51);
      }

    case 5:
      {
        const n$$52 = c$$27.fields[0] | 0;
        return new _il.ILFieldInit(5, "Int32", n$$52);
      }

    case 7:
      {
        const n$$53 = c$$27.fields[0];
        return new _il.ILFieldInit(6, "Int64", n$$53);
      }

    case 2:
      {
        const n$$54 = c$$27.fields[0];
        return new _il.ILFieldInit(7, "UInt8", n$$54);
      }

    case 4:
      {
        const n$$55 = c$$27.fields[0];
        return new _il.ILFieldInit(8, "UInt16", n$$55);
      }

    case 6:
      {
        const n$$56 = c$$27.fields[0];
        return new _il.ILFieldInit(9, "UInt32", n$$56);
      }

    case 8:
      {
        const n$$57 = c$$27.fields[0];
        return new _il.ILFieldInit(10, "UInt64", n$$57);
      }

    case 0:
      {
        const n$$58 = c$$27.fields[0];
        return new _il.ILFieldInit(1, "Bool", n$$58);
      }

    case 13:
      {
        const n$$59 = c$$27.fields[0];
        return new _il.ILFieldInit(2, "Char", n$$59.charCodeAt(0));
      }

    case 11:
      {
        const n$$60 = c$$27.fields[0];
        return new _il.ILFieldInit(11, "Single", n$$60);
      }

    case 12:
      {
        const n$$61 = c$$27.fields[0];
        return new _il.ILFieldInit(12, "Double", n$$61);
      }

    case 14:
      {
        const s$$12 = c$$27.fields[0];
        return new _il.ILFieldInit(0, "String", s$$12);
      }

    case 17:
      {
        return new _il.ILFieldInit(13, "Null");
      }

    default:
      {
        return null;
      }
  }
}

function EvalLiteralExprOrAttribArg(g$$575, x$$345) {
  var $target$$349, args$$47, elemTy$$12, m$$411;

  if (x$$345.tag === 11) {
    if (x$$345.fields[0].tag === 24) {
      if (x$$345.fields[2].tail != null) {
        if (x$$345.fields[2].head.tag === 11) {
          if (x$$345.fields[2].head.fields[0].tag === 3) {
            if (x$$345.fields[2].head.fields[1].tail != null) {
              if (x$$345.fields[2].head.fields[1].tail.tail == null) {
                if (x$$345.fields[2].tail.tail == null) {
                  $target$$349 = 0;
                  args$$47 = x$$345.fields[2].head.fields[2];
                  elemTy$$12 = x$$345.fields[2].head.fields[1].head;
                  m$$411 = x$$345.fields[2].head.fields[3];
                } else {
                  $target$$349 = 1;
                }
              } else {
                $target$$349 = 1;
              }
            } else {
              $target$$349 = 1;
            }
          } else {
            $target$$349 = 1;
          }
        } else {
          $target$$349 = 1;
        }
      } else {
        $target$$349 = 1;
      }
    } else if (x$$345.fields[0].tag === 3) {
      if (x$$345.fields[1].tail != null) {
        if (x$$345.fields[1].tail.tail == null) {
          $target$$349 = 0;
          args$$47 = x$$345.fields[2];
          elemTy$$12 = x$$345.fields[1].head;
          m$$411 = x$$345.fields[3];
        } else {
          $target$$349 = 1;
        }
      } else {
        $target$$349 = 1;
      }
    } else {
      $target$$349 = 1;
    }
  } else {
    $target$$349 = 1;
  }

  switch ($target$$349) {
    case 0:
      {
        const args$$48 = (0, _List.map)(function mapping$$73(x$$346) {
          return EvalAttribArgExpr(g$$575, x$$346);
        }, args$$47);
        return new _tast.Expr(11, "Op", new _tast.TOp(3, "Array"), (0, _Types.L)(elemTy$$12, (0, _Types.L)()), args$$48, m$$411);
      }

    case 1:
      {
        return EvalAttribArgExpr(g$$575, x$$345);
      }
  }
}

function GetTypeOfIntrinsicMemberInCompiledForm(g$$576, vref$$85) {
  const patternInput$$144 = checkMemberValRef(vref$$85);
  const patternInput$$145 = GetTypeOfMemberInMemberForm(g$$576, vref$$85);
  let argInfos$$10;

  if (patternInput$$144[0].MemberFlags.IsInstance ? !ValRefIsCompiledAsInstanceMember(g$$576, vref$$85) : false) {
    const patternInput$$146 = GetTopValTypeInFSharpForm(g$$576, patternInput$$144[1], (0, _tast.ValRef$$get_Type)(vref$$85), (0, _tast.ValRef$$get_Range)(vref$$85));

    if (patternInput$$146[1].tail != null) {
      const h$$10 = patternInput$$146[1].head;
      argInfos$$10 = (0, _Types.L)(h$$10, patternInput$$145[1]);
    } else {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("value does not have a valid member type", (0, _tast.ValRef$$get_Range)(vref$$85)));
      argInfos$$10 = patternInput$$145[1];
    }
  } else {
    argInfos$$10 = patternInput$$145[1];
  }

  return [patternInput$$145[0], argInfos$$10, patternInput$$145[2], patternInput$$145[3]];
}

function mkCompiledTuple(g$$577, isStruct$$3, argtys$$21, args$$49, m$$412) {
  var tn;
  const n$$62 = (0, _List.length)(argtys$$21) | 0;

  if (n$$62 <= 0) {
    throw new Error("mkCompiledTuple");
  } else if (n$$62 < maxTuple) {
    return [mkCompiledTupleTyconRef(g$$577, isStruct$$3, n$$62), argtys$$21, args$$49, m$$412];
  } else {
    const patternInput$$147 = (0, _illib.List$$$splitAfter)(goodTupleFields, argtys$$21);
    const patternInput$$148 = (0, _illib.List$$$splitAfter)(goodTupleFields, args$$49);
    let patternInput$$150;
    const matchValue$$202 = [patternInput$$147[1], patternInput$$148[1]];
    var $target$$350, arg8, ty8;

    if (matchValue$$202[0].tail != null) {
      if (matchValue$$202[0].tail.tail == null) {
        if (matchValue$$202[1].tail != null) {
          if (matchValue$$202[1].tail.tail == null) {
            $target$$350 = 0;
            arg8 = matchValue$$202[1].head;
            ty8 = matchValue$$202[0].head;
          } else {
            $target$$350 = 1;
          }
        } else {
          $target$$350 = 1;
        }
      } else {
        $target$$350 = 1;
      }
    } else {
      $target$$350 = 1;
    }

    switch ($target$$350) {
      case 0:
        {
          var $target$$351, tn$$1;

          if (ty8.tag === 1) {
            if (tn = ty8.fields[0], isCompiledTupleTyconRef(g$$577, tn)) {
              $target$$351 = 0;
              tn$$1 = ty8.fields[0];
            } else {
              $target$$351 = 1;
            }
          } else {
            $target$$351 = 1;
          }

          switch ($target$$351) {
            case 0:
              {
                patternInput$$150 = [ty8, arg8];
                break;
              }

            case 1:
              {
                const ty8enc = new _tast.TType(1, "TType_app", isStruct$$3 ? (0, _TcGlobals.TcGlobals$$get_struct_tuple1_tcr)(g$$577) : (0, _TcGlobals.TcGlobals$$get_ref_tuple1_tcr)(g$$577), (0, _Types.L)(ty8, (0, _Types.L)()));
                const v8enc = new _tast.Expr(11, "Op", new _tast.TOp(2, "Tuple", new _tast.TupInfo(0, "Const", isStruct$$3)), (0, _Types.L)(ty8, (0, _Types.L)()), (0, _Types.L)(arg8, (0, _Types.L)()), m$$412);
                patternInput$$150 = [ty8enc, v8enc];
                break;
              }
          }

          break;
        }

      case 1:
        {
          const patternInput$$149 = mkCompiledTuple(g$$577, isStruct$$3, patternInput$$147[1], patternInput$$148[1], m$$412);
          const ty8plus = new _tast.TType(1, "TType_app", patternInput$$149[0], patternInput$$149[1]);
          const v8plus = new _tast.Expr(11, "Op", new _tast.TOp(2, "Tuple", new _tast.TupInfo(0, "Const", isStruct$$3)), patternInput$$149[1], patternInput$$149[2], patternInput$$149[3]);
          patternInput$$150 = [ty8plus, v8plus];
          break;
        }
    }

    const argtysAB = (0, _List.append)(patternInput$$147[0], (0, _Types.L)(patternInput$$150[0], (0, _Types.L)()));
    return [mkCompiledTupleTyconRef(g$$577, isStruct$$3, (0, _List.length)(argtysAB)), argtysAB, (0, _List.append)(patternInput$$148[0], (0, _Types.L)(patternInput$$150[1], (0, _Types.L)())), m$$412];
  }
}

function mkILMethodSpecForTupleItem(_g$$10, ty$$433, n$$63) {
  var copyOfStruct;
  return (0, _il.mkILNonGenericInstanceMethSpecInTy)(ty$$433, n$$63 < goodTupleFields ? "get_Item" + (copyOfStruct = n$$63 + 1 | 0, (0, _Util.int32ToString)(copyOfStruct)) : "get_Rest", (0, _Types.L)(), (0, _il.mkILTyvarTy)(n$$63 & 0xFFFF));
}

function mkILFieldSpecForTupleItem(ty$$434, n$$64) {
  var copyOfStruct$$1;
  return (0, _il.mkILFieldSpecInTy)(ty$$434, n$$64 < goodTupleFields ? "Item" + (copyOfStruct$$1 = n$$64 + 1 | 0, (0, _Util.int32ToString)(copyOfStruct$$1)) : "Rest", (0, _il.mkILTyvarTy)(n$$64 & 0xFFFF));
}

function mkGetTupleItemN(g$$578, m$$413, n$$65, ty$$435, isStruct$$4, te, retty) {
  if (isStruct$$4) {
    return mkAsmExpr((0, _Types.L)((0, _il.mkNormalLdfld)(mkILFieldSpecForTupleItem(ty$$435, n$$65)), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(te, (0, _Types.L)()), (0, _Types.L)(retty, (0, _Types.L)()), m$$413);
  } else {
    return mkAsmExpr((0, _Types.L)((0, _il.mkNormalCall)(mkILMethodSpecForTupleItem(g$$578, ty$$435, n$$65)), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(te, (0, _Types.L)()), (0, _Types.L)(retty, (0, _Types.L)()), m$$413);
  }
}

function $007CInt32Expr$007C_$007C(expr$$53) {
  var $target$$352, n$$66;

  if (expr$$53.tag === 0) {
    if (expr$$53.fields[0].tag === 5) {
      $target$$352 = 0;
      n$$66 = expr$$53.fields[0].fields[0];
    } else {
      $target$$352 = 1;
    }
  } else {
    $target$$352 = 1;
  }

  switch ($target$$352) {
    case 0:
      {
        return n$$66;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CTryFinally$007C_$007C(expr$$54) {
  var $target$$353, _resty, e1$$123, e2$$67;

  if (expr$$54.tag === 11) {
    if (expr$$54.fields[0].tag === 9) {
      if (expr$$54.fields[1].tail != null) {
        if (expr$$54.fields[1].tail.tail == null) {
          if (expr$$54.fields[2].tail != null) {
            if (expr$$54.fields[2].head.tag === 3) {
              if (expr$$54.fields[2].head.fields[3].tail != null) {
                if (expr$$54.fields[2].head.fields[3].tail.tail == null) {
                  if (expr$$54.fields[2].tail.tail != null) {
                    if (expr$$54.fields[2].tail.head.tag === 3) {
                      if (expr$$54.fields[2].tail.head.fields[3].tail != null) {
                        if (expr$$54.fields[2].tail.head.fields[3].tail.tail == null) {
                          if (expr$$54.fields[2].tail.tail.tail == null) {
                            $target$$353 = 0;
                            _resty = expr$$54.fields[1].head;
                            e1$$123 = expr$$54.fields[2].head.fields[4];
                            e2$$67 = expr$$54.fields[2].tail.head.fields[4];
                          } else {
                            $target$$353 = 1;
                          }
                        } else {
                          $target$$353 = 1;
                        }
                      } else {
                        $target$$353 = 1;
                      }
                    } else {
                      $target$$353 = 1;
                    }
                  } else {
                    $target$$353 = 1;
                  }
                } else {
                  $target$$353 = 1;
                }
              } else {
                $target$$353 = 1;
              }
            } else {
              $target$$353 = 1;
            }
          } else {
            $target$$353 = 1;
          }
        } else {
          $target$$353 = 1;
        }
      } else {
        $target$$353 = 1;
      }
    } else {
      $target$$353 = 1;
    }
  } else {
    $target$$353 = 1;
  }

  switch ($target$$353) {
    case 0:
      {
        return [e1$$123, e2$$67];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CWhileLoopForCompiledForEachExpr$007C_$007C(expr$$55) {
  var $target$$354, e1$$124, e2$$68, m$$414;

  if (expr$$55.tag === 11) {
    if (expr$$55.fields[0].tag === 6) {
      if (expr$$55.fields[0].fields[1].tag === 1) {
        if (expr$$55.fields[2].tail != null) {
          if (expr$$55.fields[2].head.tag === 3) {
            if (expr$$55.fields[2].head.fields[3].tail != null) {
              if (expr$$55.fields[2].head.fields[3].tail.tail == null) {
                if (expr$$55.fields[2].tail.tail != null) {
                  if (expr$$55.fields[2].tail.head.tag === 3) {
                    if (expr$$55.fields[2].tail.head.fields[3].tail != null) {
                      if (expr$$55.fields[2].tail.head.fields[3].tail.tail == null) {
                        if (expr$$55.fields[2].tail.tail.tail == null) {
                          $target$$354 = 0;
                          e1$$124 = expr$$55.fields[2].head.fields[4];
                          e2$$68 = expr$$55.fields[2].tail.head.fields[4];
                          m$$414 = expr$$55.fields[3];
                        } else {
                          $target$$354 = 1;
                        }
                      } else {
                        $target$$354 = 1;
                      }
                    } else {
                      $target$$354 = 1;
                    }
                  } else {
                    $target$$354 = 1;
                  }
                } else {
                  $target$$354 = 1;
                }
              } else {
                $target$$354 = 1;
              }
            } else {
              $target$$354 = 1;
            }
          } else {
            $target$$354 = 1;
          }
        } else {
          $target$$354 = 1;
        }
      } else {
        $target$$354 = 1;
      }
    } else {
      $target$$354 = 1;
    }
  } else {
    $target$$354 = 1;
  }

  switch ($target$$354) {
    case 0:
      {
        return [e1$$124, e2$$68, m$$414];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CLet$007C_$007C(expr$$56) {
  if (expr$$56.tag === 7) {
    const v$$148 = expr$$56.fields[0].fields[0];
    const sp$$2 = expr$$56.fields[0].fields[2];
    const e2$$69 = expr$$56.fields[1];
    const e1$$125 = expr$$56.fields[0].fields[1];
    return [v$$148, e1$$125, sp$$2, e2$$69];
  } else {
    return null;
  }
}

function $007CRangeInt32Step$007C_$007C(g$$579, expr$$57) {
  var vf$$8, startExpr$$2, n$$67, finishExpr$$2, vf$$6, tyarg$$6, startExpr, finishExpr;
  var $target$$355, finishExpr$$1, startExpr$$1, tyarg$$7, vf$$7;

  if (expr$$57.tag === 5) {
    if (expr$$57.fields[0].tag === 1) {
      if (expr$$57.fields[2].tail != null) {
        if (expr$$57.fields[2].tail.tail == null) {
          if (expr$$57.fields[3].tail != null) {
            if (expr$$57.fields[3].tail.tail != null) {
              if (expr$$57.fields[3].tail.tail.tail == null) {
                if (vf$$6 = expr$$57.fields[0].fields[0], (tyarg$$6 = expr$$57.fields[2].head, (startExpr = expr$$57.fields[3].head, (finishExpr = expr$$57.fields[3].tail.head, valRefEq(g$$579, vf$$6, (0, _TcGlobals.TcGlobals$$get_range_op_vref)(g$$579)) ? typeEquiv(g$$579, tyarg$$6, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$579)) : false)))) {
                  $target$$355 = 0;
                  finishExpr$$1 = expr$$57.fields[3].tail.head;
                  startExpr$$1 = expr$$57.fields[3].head;
                  tyarg$$7 = expr$$57.fields[2].head;
                  vf$$7 = expr$$57.fields[0].fields[0];
                } else {
                  $target$$355 = 1;
                }
              } else {
                $target$$355 = 1;
              }
            } else {
              $target$$355 = 1;
            }
          } else {
            $target$$355 = 1;
          }
        } else {
          $target$$355 = 1;
        }
      } else {
        $target$$355 = 1;
      }
    } else {
      $target$$355 = 1;
    }
  } else {
    $target$$355 = 1;
  }

  switch ($target$$355) {
    case 0:
      {
        return [startExpr$$1, 1, finishExpr$$1];
      }

    case 1:
      {
        var $target$$356, finishExpr$$3, n$$68, startExpr$$3, vf$$9;

        if (expr$$57.tag === 5) {
          if (expr$$57.fields[0].tag === 1) {
            if (expr$$57.fields[2].tail == null) {
              if (expr$$57.fields[3].tail != null) {
                if (expr$$57.fields[3].tail.tail != null) {
                  const activePatternResult35167 = $007CInt32Expr$007C_$007C(expr$$57.fields[3].tail.head);

                  if (activePatternResult35167 != null) {
                    if (expr$$57.fields[3].tail.tail.tail != null) {
                      if (expr$$57.fields[3].tail.tail.tail.tail == null) {
                        if (vf$$8 = expr$$57.fields[0].fields[0], (startExpr$$2 = expr$$57.fields[3].head, (n$$67 = activePatternResult35167 | 0, (finishExpr$$2 = expr$$57.fields[3].tail.tail.head, valRefEq(g$$579, vf$$8, (0, _TcGlobals.TcGlobals$$get_range_int32_op_vref)(g$$579)))))) {
                          $target$$356 = 0;
                          finishExpr$$3 = expr$$57.fields[3].tail.tail.head;
                          n$$68 = activePatternResult35167;
                          startExpr$$3 = expr$$57.fields[3].head;
                          vf$$9 = expr$$57.fields[0].fields[0];
                        } else {
                          $target$$356 = 1;
                        }
                      } else {
                        $target$$356 = 1;
                      }
                    } else {
                      $target$$356 = 1;
                    }
                  } else {
                    $target$$356 = 1;
                  }
                } else {
                  $target$$356 = 1;
                }
              } else {
                $target$$356 = 1;
              }
            } else {
              $target$$356 = 1;
            }
          } else {
            $target$$356 = 1;
          }
        } else {
          $target$$356 = 1;
        }

        switch ($target$$356) {
          case 0:
            {
              return [startExpr$$3, n$$68, finishExpr$$3];
            }

          case 1:
            {
              return null;
            }
        }
      }
  }
}

function $007CGetEnumeratorCall$007C_$007C(expr$$58) {
  var $target$$357, iLMethodRef, vref$$86;

  if (expr$$58.tag === 11) {
    if (expr$$58.fields[0].tag === 31) {
      if (expr$$58.fields[2].tail != null) {
        if (expr$$58.fields[2].head.tag === 1) {
          if (expr$$58.fields[2].tail.tail == null) {
            $target$$357 = 0;
            iLMethodRef = expr$$58.fields[0].fields[7];
            vref$$86 = expr$$58.fields[2].head.fields[0];
          } else {
            $target$$357 = 1;
          }
        } else if (expr$$58.fields[2].head.tag === 11) {
          if (expr$$58.fields[2].head.fields[2].tail != null) {
            if (expr$$58.fields[2].head.fields[2].head.tag === 1) {
              if (expr$$58.fields[2].head.fields[2].head.fields[1].tag === 1) {
                if (expr$$58.fields[2].head.fields[2].tail.tail == null) {
                  if (expr$$58.fields[2].tail.tail == null) {
                    $target$$357 = 0;
                    iLMethodRef = expr$$58.fields[0].fields[7];
                    vref$$86 = expr$$58.fields[2].head.fields[2].head.fields[0];
                  } else {
                    $target$$357 = 1;
                  }
                } else {
                  $target$$357 = 1;
                }
              } else {
                $target$$357 = 1;
              }
            } else {
              $target$$357 = 1;
            }
          } else {
            $target$$357 = 1;
          }
        } else {
          $target$$357 = 1;
        }
      } else {
        $target$$357 = 1;
      }
    } else {
      $target$$357 = 1;
    }
  } else {
    $target$$357 = 1;
  }

  switch ($target$$357) {
    case 0:
      {
        if ((0, _il.ILMethodRef$$get_Name)(iLMethodRef) === "GetEnumerator") {
          return vref$$86;
        } else {
          return null;
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CCompiledForEachExpr$007C_$007C(g$$580, expr$$59) {
  var enumeratorVar, enumeratorBind, enumerableVar2, enumerableVar, enumerableExpr, elemVar, bodyExpr$$1, fvs$$35;
  var $target$$358, bodyExpr$$2, elemVar$$1, enumerableExpr$$1, enumerableVar$$1, enumerableVar2$$1, enumeratorBind$$1, enumeratorVar$$1;
  const activePatternResult35171 = $007CLet$007C_$007C(expr$$59);

  if (activePatternResult35171 != null) {
    const activePatternResult35172 = $007CLet$007C_$007C(activePatternResult35171[3]);

    if (activePatternResult35172 != null) {
      const activePatternResult35173 = $007CGetEnumeratorCall$007C_$007C(activePatternResult35172[1]);

      if (activePatternResult35173 != null) {
        const activePatternResult35174 = $007CTryFinally$007C_$007C(activePatternResult35172[3]);

        if (activePatternResult35174 != null) {
          const activePatternResult35175 = $007CWhileLoopForCompiledForEachExpr$007C_$007C(activePatternResult35174[0]);

          if (activePatternResult35175 != null) {
            const activePatternResult35176 = $007CLet$007C_$007C(activePatternResult35175[1]);

            if (activePatternResult35176 != null) {
              if (enumeratorVar = activePatternResult35172[0], (enumeratorBind = activePatternResult35172[2], (enumerableVar2 = activePatternResult35173, (enumerableVar = activePatternResult35171[0], (enumerableExpr = activePatternResult35171[1], (elemVar = activePatternResult35176[0], (bodyExpr$$1 = activePatternResult35176[3], ((valRefEq(g$$580, (0, _tast.mkLocalValRef)(enumerableVar), enumerableVar2) ? (0, _tast.Val$$get_IsCompilerGenerated)(enumerableVar) : false) ? (0, _tast.Val$$get_IsCompilerGenerated)(enumeratorVar) : false) ? (fvs$$35 = freeInExpr(CollectLocals, bodyExpr$$1), !(0, _zset.ZsetModule$$$contains)(enumerableVar, fvs$$35.FreeLocals) ? !(0, _zset.ZsetModule$$$contains)(enumeratorVar, fvs$$35.FreeLocals) : false) : false))))))) {
                $target$$358 = 0;
                bodyExpr$$2 = activePatternResult35176[3];
                elemVar$$1 = activePatternResult35176[0];
                enumerableExpr$$1 = activePatternResult35171[1];
                enumerableVar$$1 = activePatternResult35171[0];
                enumerableVar2$$1 = activePatternResult35173;
                enumeratorBind$$1 = activePatternResult35172[2];
                enumeratorVar$$1 = activePatternResult35172[0];
              } else {
                $target$$358 = 1;
              }
            } else {
              $target$$358 = 1;
            }
          } else {
            $target$$358 = 1;
          }
        } else {
          $target$$358 = 1;
        }
      } else {
        $target$$358 = 1;
      }
    } else {
      $target$$358 = 1;
    }
  } else {
    $target$$358 = 1;
  }

  switch ($target$$358) {
    case 0:
      {
        const mEnumExpr = Expr$002Eget_Range(enumerableExpr$$1);
        const mBody = Expr$002Eget_Range(bodyExpr$$2);
        const mWholeExpr = Expr$002Eget_Range(expr$$59);
        let patternInput$$151;

        if (enumeratorBind$$1.tag === 0) {
          const spStart = enumeratorBind$$1.fields[0];
          patternInput$$151 = [new _ast.SequencePointInfoForForLoop(0, "SequencePointAtForLoop", spStart), spStart];
        } else {
          patternInput$$151 = [new _ast.SequencePointInfoForForLoop(1, "NoSequencePointAtForLoop"), mEnumExpr];
        }

        let spWhileLoop;

        if (enumeratorBind$$1.tag === 0) {
          const spStart$$1 = enumeratorBind$$1.fields[0];
          spWhileLoop = new _ast.SequencePointInfoForWhileLoop(0, "SequencePointAtWhileLoop", spStart$$1);
        } else {
          spWhileLoop = new _ast.SequencePointInfoForWhileLoop(1, "NoSequencePointAtWhileLoop");
        }

        const enumerableTy = tyOfExpr(g$$580, enumerableExpr$$1);
        return [enumerableTy, enumerableExpr$$1, elemVar$$1, bodyExpr$$2, [mEnumExpr, mBody, patternInput$$151[0], patternInput$$151[1], spWhileLoop, mWholeExpr]];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CCompiledInt32RangeForEachExpr$007C_$007C(g$$581, expr$$60) {
  var $target$$359, bodyExpr$$3, elemVar$$2, finishExpr$$4, ranges, startExpr$$4, step;
  const activePatternResult35180 = $007CCompiledForEachExpr$007C_$007C(g$$581, expr$$60);

  if (activePatternResult35180 != null) {
    const activePatternResult35182 = $007CRangeInt32Step$007C_$007C(g$$581, activePatternResult35180[1]);

    if (activePatternResult35182 != null) {
      $target$$359 = 0;
      bodyExpr$$3 = activePatternResult35180[3];
      elemVar$$2 = activePatternResult35180[2];
      finishExpr$$4 = activePatternResult35182[2];
      ranges = activePatternResult35180[4];
      startExpr$$4 = activePatternResult35182[0];
      step = activePatternResult35182[1];
    } else {
      $target$$359 = 1;
    }
  } else {
    $target$$359 = 1;
  }

  switch ($target$$359) {
    case 0:
      {
        return [startExpr$$4, step, finishExpr$$4, elemVar$$2, bodyExpr$$3, ranges];
      }

    case 1:
      {
        return null;
      }
  }
}

const OptimizeForExpressionOptions = (0, _Types.declare)(function OptimizeForExpressionOptions(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OptimizeForExpressionOptions = OptimizeForExpressionOptions;

function DetectAndOptimizeForExpression(g$$582, option$$12, expr$$63) {
  const matchValue$$203 = [option$$12, expr$$63];
  var $target$$360, bodyExpr$$4, elemVar$$3, finishExpr$$5, ranges$$1, startExpr$$5, step$$1;
  const activePatternResult35204 = $007CCompiledInt32RangeForEachExpr$007C_$007C(g$$582, matchValue$$203[1]);

  if (activePatternResult35204 != null) {
    if (activePatternResult35204[1] === -1) {
      $target$$360 = 0;
      bodyExpr$$4 = activePatternResult35204[4];
      elemVar$$3 = activePatternResult35204[3];
      finishExpr$$5 = activePatternResult35204[2];
      ranges$$1 = activePatternResult35204[5];
      startExpr$$5 = activePatternResult35204[0];
      step$$1 = activePatternResult35204[1];
    } else if (activePatternResult35204[1] === 1) {
      $target$$360 = 0;
      bodyExpr$$4 = activePatternResult35204[4];
      elemVar$$3 = activePatternResult35204[3];
      finishExpr$$5 = activePatternResult35204[2];
      ranges$$1 = activePatternResult35204[5];
      startExpr$$5 = activePatternResult35204[0];
      step$$1 = activePatternResult35204[1];
    } else {
      $target$$360 = 1;
    }
  } else {
    $target$$360 = 1;
  }

  switch ($target$$360) {
    case 0:
      {
        const spForLoop$$1 = ranges$$1[2];
        const mWholeExpr$$1 = ranges$$1[5];
        const _spWhileLoop = ranges$$1[4];
        const _mForLoop = ranges$$1[3];
        const _mEnumExpr = ranges$$1[0];
        const _mBody = ranges$$1[1];
        return mkFastForLoop(g$$582, spForLoop$$1, mWholeExpr$$1, elemVar$$3, startExpr$$5, step$$1 === 1, finishExpr$$5, bodyExpr$$4);
      }

    case 1:
      {
        var $target$$361, bodyExpr$$5, elemVar$$4, enumerableExpr$$2, enumerableTy$$1, ranges$$2;

        if (matchValue$$203[0].tag === 1) {
          const activePatternResult35202 = $007CCompiledForEachExpr$007C_$007C(g$$582, matchValue$$203[1]);

          if (activePatternResult35202 != null) {
            $target$$361 = 0;
            bodyExpr$$5 = activePatternResult35202[3];
            elemVar$$4 = activePatternResult35202[2];
            enumerableExpr$$2 = activePatternResult35202[1];
            enumerableTy$$1 = activePatternResult35202[0];
            ranges$$2 = activePatternResult35202[4];
          } else {
            $target$$361 = 1;
          }
        } else {
          $target$$361 = 1;
        }

        switch ($target$$361) {
          case 0:
            {
              const spWhileLoop$$1 = ranges$$2[4];
              const spForLoop$$2 = ranges$$2[2];
              const mWholeExpr$$2 = ranges$$2[5];
              const mForLoop$$1 = ranges$$2[3];
              const mEnumExpr$$1 = ranges$$2[0];
              const mBody$$1 = ranges$$2[1];

              if (isStringTy(g$$582, enumerableTy$$1)) {
                const patternInput$$152 = mkCompGenLocal(mEnumExpr$$1, "str", enumerableTy$$1);
                const patternInput$$153 = mkCompGenLocal((0, _tast.Val$$get_Range)(elemVar$$4), "idx", (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$582));
                const lengthExpr = mkGetStringLength(g$$582, mForLoop$$1, patternInput$$152[1]);
                const charExpr = mkGetStringChar(g$$582)(mForLoop$$1)(patternInput$$152[1])(patternInput$$153[1]);
                const startExpr$$6 = mkZero(g$$582, mForLoop$$1);
                const finishExpr$$6 = mkDecr(g$$582, mForLoop$$1, lengthExpr);
                const loopItemExpr = mkCoerceIfNeeded(g$$582, (0, _tast.Val$$get_Type)(elemVar$$4), (0, _TcGlobals.TcGlobals$$get_char_ty)(g$$582), charExpr);
                const bodyExpr$$6 = mkCompGenLet(mForLoop$$1, elemVar$$4, loopItemExpr, bodyExpr$$5);
                const forExpr = mkFastForLoop(g$$582, spForLoop$$2, mWholeExpr$$2, patternInput$$153[0], startExpr$$6, true, finishExpr$$6, bodyExpr$$6);
                const expr$$66 = mkCompGenLet(mEnumExpr$$1, patternInput$$152[0], enumerableExpr$$2, forExpr);
                return expr$$66;
              } else if (isListTy(g$$582, enumerableTy$$1)) {
                const IndexHead = 0;
                const IndexTail = 1;
                const patternInput$$154 = mkMutableCompGenLocal(mEnumExpr$$1, "current", enumerableTy$$1);
                const patternInput$$155 = mkMutableCompGenLocal(mEnumExpr$$1, "next", enumerableTy$$1);
                const elemTy$$13 = destListTy(g$$582, enumerableTy$$1);
                const guardExpr = mkNonNullTest(g$$582, mForLoop$$1, patternInput$$155[1]);
                const headOrDefaultExpr = mkUnionCaseFieldGetUnprovenViaExprAddr(patternInput$$154[1], (0, _TcGlobals.TcGlobals$$get_cons_ucref)(g$$582), (0, _Types.L)(elemTy$$13, (0, _Types.L)()), IndexHead, mForLoop$$1);
                const tailOrNullExpr = mkUnionCaseFieldGetUnprovenViaExprAddr(patternInput$$154[1], (0, _TcGlobals.TcGlobals$$get_cons_ucref)(g$$582), (0, _Types.L)(elemTy$$13, (0, _Types.L)()), IndexTail, mForLoop$$1);
                const bodyExpr$$7 = mkCompGenLet(mForLoop$$1, elemVar$$4, headOrDefaultExpr, mkCompGenSequential(mForLoop$$1, bodyExpr$$5, mkCompGenSequential(mForLoop$$1, mkValSet(mForLoop$$1, (0, _tast.mkLocalValRef)(patternInput$$154[0]), patternInput$$155[1]), mkValSet(mForLoop$$1, (0, _tast.mkLocalValRef)(patternInput$$155[0]), tailOrNullExpr))));
                let expr$$67;
                let spBind$$12;

                if (spForLoop$$2.tag === 1) {
                  spBind$$12 = new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding");
                } else {
                  const spStart$$2 = spForLoop$$2.fields[0];
                  spBind$$12 = new _ast.SequencePointInfoForBinding(0, "SequencePointAtBinding", spStart$$2);
                }

                expr$$67 = mkLet(spBind$$12, mEnumExpr$$1, patternInput$$154[0], enumerableExpr$$2, mkCompGenLet(mForLoop$$1, patternInput$$155[0], tailOrNullExpr, mkWhile(g$$582, spWhileLoop$$1, new _tast.SpecialWhileLoopMarker(1, "WhileLoopForCompiledForEachExprMarker"), guardExpr, bodyExpr$$7, mBody$$1)));
                return expr$$67;
              } else {
                return expr$$63;
              }
            }

          case 1:
            {
              return expr$$63;
            }
        }
      }
  }
}

function $007CInnerExprPat$007C(expr$$68) {
  return stripExpr(expr$$68);
}

function BindUnitVars(g$$583, tupledArg$$85) {
  const matchValue$$204 = [tupledArg$$85[0], tupledArg$$85[1]];
  var $target$$362, v$$149;

  if (matchValue$$204[0].tail != null) {
    if (matchValue$$204[0].tail.tail == null) {
      if (matchValue$$204[1].tail == null) {
        $target$$362 = 0;
        v$$149 = matchValue$$204[0].head;
      } else {
        $target$$362 = 1;
      }
    } else {
      $target$$362 = 1;
    }
  } else {
    $target$$362 = 1;
  }

  switch ($target$$362) {
    case 0:
      {
        return [(0, _Types.L)(), mkLet(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), (0, _tast.Val$$get_Range)(v$$149), v$$149, mkUnit(g$$583, (0, _tast.Val$$get_Range)(v$$149)), tupledArg$$85[2])];
      }

    case 1:
      {
        return [tupledArg$$85[0], tupledArg$$85[2]];
      }
  }
}

function isThreadOrContextStatic(g$$584, attrs$$17) {
  if (HasFSharpAttributeOpt(g$$584, (0, _TcGlobals.TcGlobals$$get_attrib_ThreadStaticAttribute)(g$$584), attrs$$17)) {
    return true;
  } else {
    return HasFSharpAttributeOpt(g$$584, (0, _TcGlobals.TcGlobals$$get_attrib_ContextStaticAttribute)(g$$584), attrs$$17);
  }
}

function mkUnitDelayLambda(g$$585, m$$415, e$$116) {
  const patternInput$$156 = mkCompGenLocal(m$$415, "unitVar", (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$585));
  return mkLambda(m$$415, patternInput$$156[0], e$$116, tyOfExpr(g$$585, e$$116));
}