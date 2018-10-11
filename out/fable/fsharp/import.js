"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportMap$$$$002Ector$$Z7170FEEE = ImportMap$$$$002Ector$$Z7170FEEE;
exports.ImportMap$$get_g = ImportMap$$get_g;
exports.ImportMap$$get_assemblyLoader = ImportMap$$get_assemblyLoader;
exports.ImportMap$$get_ILTypeRefToTyconRefCache = ImportMap$$get_ILTypeRefToTyconRefCache;
exports.CanImportILScopeRef = CanImportILScopeRef;
exports.ImportTypeRefData = ImportTypeRefData;
exports.ImportILTypeRefUncached = ImportILTypeRefUncached;
exports.ImportILTypeRef = ImportILTypeRef;
exports.CanImportILTypeRef = CanImportILTypeRef;
exports.ImportTyconRefApp = ImportTyconRefApp;
exports.ImportILType = ImportILType;
exports.CanImportILType = CanImportILType;
exports.ImportILGenericParameters = ImportILGenericParameters;
exports.multisetDiscriminateAndMap = multisetDiscriminateAndMap;
exports.ImportILTypeDef = ImportILTypeDef;
exports.ImportILTypeDefList = ImportILTypeDefList;
exports.ImportILTypeDefs = ImportILTypeDefs;
exports.ImportILAssemblyMainTypeDefs = ImportILAssemblyMainTypeDefs;
exports.ImportILAssemblyExportedType = ImportILAssemblyExportedType;
exports.ImportILAssemblyExportedTypes = ImportILAssemblyExportedTypes;
exports.ImportILAssemblyTypeDefs = ImportILAssemblyTypeDefs;
exports.ImportILAssemblyTypeForwarders = ImportILAssemblyTypeForwarders;
exports.ImportILAssembly = ImportILAssembly;
exports.ImportMap = void 0;

var _adapters = require("../fcs-fable/adapters");

var _Types = require("../fable-core.2.0.3/Types");

var _illib = require("../absil/illib");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _tast = require("./tast");

var _Array = require("../fable-core.2.0.3/Array");

var _String = require("../fable-core.2.0.3/String");

var _TastOps = require("./TastOps");

var _List = require("../fable-core.2.0.3/List");

var _il = require("../absil/il");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Util = require("../fable-core.2.0.3/Util");

var _TcGlobals = require("./TcGlobals");

var _ast = require("./ast");

var _Map = require("../fable-core.2.0.3/Map");

const ImportMap = (0, _Types.declare)(function ImportMap(g, assemblyLoader) {
  const $this$$1 = this;
  $this$$1["g@59"] = g;
  $this$$1["assemblyLoader@59"] = assemblyLoader;
  $this$$1.typeRefToTyconRefCache = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector)();
});
exports.ImportMap = ImportMap;

function ImportMap$$$$002Ector$$Z7170FEEE(g, assemblyLoader) {
  return this != null ? ImportMap.call(this, g, assemblyLoader) : new ImportMap(g, assemblyLoader);
}

function ImportMap$$get_g(this$) {
  return this$["g@59"];
}

function ImportMap$$get_assemblyLoader(this$$$1) {
  return this$$$1["assemblyLoader@59"];
}

function ImportMap$$get_ILTypeRefToTyconRefCache(this$$$2) {
  return this$$$2.typeRefToTyconRefCache;
}

function CanImportILScopeRef(env, m, scoref) {
  switch (scoref.tag) {
    case 1:
      {
        return true;
      }

    case 2:
      {
        const assref = scoref.fields[0];
        const ctok = (0, _illib.AssumeCompilationThreadWithoutEvidence)();

        if (ImportMap$$get_assemblyLoader(env).FindCcuFromAssemblyRef(ctok, m, assref).tag === 0) {
          return true;
        } else {
          return false;
        }
      }

    default:
      {
        return true;
      }
  }
}

function ImportTypeRefData(env$$1, m$$1, scoref$$1, path, typeName) {
  const ctok$$1 = (0, _illib.AssumeCompilationThreadWithoutEvidence)();
  let ccu;

  switch (scoref$$1.tag) {
    case 1:
      {
        ccu = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("ImportILTypeRef: reference found to a type in an auxiliary module", m$$1));
        break;
      }

    case 2:
      {
        const assref$$1 = scoref$$1.fields[0];
        ccu = ImportMap$$get_assemblyLoader(env$$1).FindCcuFromAssemblyRef(ctok$$1, m$$1, assref$$1);
        break;
      }

    default:
      {
        ccu = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("ImportILTypeRef: unexpected local scope", m$$1));
      }
  }

  let ccu$$2;

  if (ccu.tag === 1) {
    const ccuName = ccu.fields[0];
    ccu$$2 = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$impTypeRequiredUnavailable$$Z384F8060)(typeName, ccuName), m$$1));
  } else {
    const ccu$$1 = ccu.fields[0];
    ccu$$2 = ccu$$1;
  }

  const fakeTyconRef = (0, _tast.mkNonLocalTyconRef)((0, _tast.mkNonLocalEntityRef)(ccu$$2, path), typeName);
  let tycon;

  try {
    tycon = (0, _tast.EntityRef$$get_Deref)(fakeTyconRef);
  } catch (matchValue$$1) {
    tycon = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$impReferencedTypeCouldNotBeFoundInAssembly$$Z384F8060)((0, _String.join)(".", ...(0, _Array.append)(path, [typeName], Array)), (0, _tast.CcuThunk$$get_AssemblyName)(ccu$$2)), m$$1));
  }

  const matchValue$$2 = (0, _TastOps.tryRescopeEntity)(ccu$$2, tycon);

  if (matchValue$$2 != null) {
    const tcref = matchValue$$2;
    return tcref;
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$impImportedAssemblyUsesNotPublicType$$Z721C83C5)((0, _String.join)(".", ...(0, _List.append)((0, _Array.toList)(path), (0, _Types.L)(typeName, (0, _Types.L)())))), m$$1));
  }
}

function ImportILTypeRefUncached(env$$2, m$$2, tref) {
  let patternInput$$1;
  const matchValue$$3 = (0, _il.ILTypeRef$$get_Enclosing)(tref);

  if (matchValue$$3.tail != null) {
    const t = matchValue$$3.tail;
    const h = matchValue$$3.head;
    const patternInput = (0, _il.splitILTypeNameWithPossibleStaticArguments)(h);
    patternInput$$1 = [(0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.append)(patternInput[0], (0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.singleton)(patternInput[1]), (0, _Seq.delay)(function () {
          return t;
        }));
      }));
    }), Array), (0, _il.ILTypeRef$$get_Name)(tref)];
  } else {
    patternInput$$1 = (0, _il.splitILTypeNameWithPossibleStaticArguments)((0, _il.ILTypeRef$$get_Name)(tref));
  }

  return ImportTypeRefData(env$$2, m$$2, (0, _il.ILTypeRef$$get_Scope)(tref), patternInput$$1[0], patternInput$$1[1]);
}

function ImportILTypeRef(env$$3, m$$3, tref$$1) {
  const matchValue$$4 = (0, _Util.tryGetValue)(ImportMap$$get_ILTypeRefToTyconRefCache(env$$3), tref$$1, null);

  if (matchValue$$4[0]) {
    return matchValue$$4[1];
  } else {
    const tcref$$2 = ImportILTypeRefUncached(env$$3, m$$3, tref$$1);
    ImportMap$$get_ILTypeRefToTyconRefCache(env$$3).set(tref$$1, tcref$$2);
    return tcref$$2;
  }
}

function CanImportILTypeRef(env$$4, m$$4, tref$$2) {
  if (ImportMap$$get_ILTypeRefToTyconRefCache(env$$4).has(tref$$2)) {
    return true;
  } else {
    return CanImportILScopeRef(env$$4, m$$4, (0, _il.ILTypeRef$$get_Scope)(tref$$2));
  }
}

function ImportTyconRefApp(env$$5, tcref$$3, tyargs) {
  return (0, _TcGlobals.TcGlobals$$improveType)(ImportMap$$get_g(env$$5), tcref$$3, tyargs);
}

function ImportILType(env$$6, m$$5, tinst, ty) {
  var ty$$1, tref$$3;

  ImportILType: while (true) {
    var $target$$6, bounds, ty$$2, tspec, tref$$4, ty$$3;

    if (ty.tag === 0) {
      $target$$6 = 0;
    } else if (ty.tag === 1) {
      $target$$6 = 1;
      bounds = ty.fields[0];
      ty$$2 = ty.fields[1];
    } else if (ty.tag === 3) {
      $target$$6 = 2;
      tspec = ty.fields[0];
    } else if (ty.tag === 2) {
      $target$$6 = 2;
      tspec = ty.fields[0];
    } else if (ty.tag === 8) {
      if (ty.fields[2].tag === 5) {
        if (ty$$1 = ty.fields[2].fields[0], (tref$$3 = ty.fields[1], (0, _il.ILTypeRef$$get_Name)(tref$$3) === "System.Runtime.InteropServices.InAttribute")) {
          $target$$6 = 3;
          tref$$4 = ty.fields[1];
          ty$$3 = ty.fields[2].fields[0];
        } else {
          $target$$6 = 4;
        }
      } else {
        $target$$6 = 4;
      }
    } else {
      $target$$6 = 4;
    }

    switch ($target$$6) {
      case 0:
        {
          return (0, _TcGlobals.TcGlobals$$get_unit_ty)(ImportMap$$get_g(env$$6));
        }

      case 1:
        {
          const n = (0, _il.ILArrayShape$$get_Rank)(bounds) | 0;
          const elementType = ImportILType(env$$6, m$$5, tinst, ty$$2);
          return (0, _TastOps.mkArrayTy)(ImportMap$$get_g(env$$6), n, elementType, m$$5);
        }

      case 2:
        {
          const tcref$$4 = ImportILTypeRef(env$$6, m$$5, (0, _il.ILTypeSpec$$get_TypeRef)(tspec));
          const inst = (0, _List.map)(function mapping(arg30$0040) {
            return ImportILType(env$$6, m$$5, tinst, arg30$0040);
          }, (0, _il.ILTypeSpec$$get_GenericArgs)(tspec));
          return ImportTyconRefApp(env$$6, tcref$$4, inst);
        }

      case 3:
        {
          return (0, _TastOps.mkInByrefTy)(ImportMap$$get_g(env$$6), ImportILType(env$$6, m$$5, tinst, ty$$3));
        }

      case 4:
        {
          var $target$$7, ty$$4;

          if (ty.tag === 5) {
            $target$$7 = 0;
            ty$$4 = ty.fields[0];
          } else if (ty.tag === 4) {
            if (ty.fields[0].tag === 0) {
              if ((0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_voidptr_tcr)(ImportMap$$get_g(env$$6)))) {
                $target$$7 = 1;
              } else {
                $target$$7 = 2;
              }
            } else {
              $target$$7 = 2;
            }
          } else {
            $target$$7 = 2;
          }

          switch ($target$$7) {
            case 0:
              {
                return (0, _TastOps.mkByrefTy)(ImportMap$$get_g(env$$6), ImportILType(env$$6, m$$5, tinst, ty$$4));
              }

            case 1:
              {
                return (0, _TastOps.mkVoidPtrTy)(ImportMap$$get_g(env$$6));
              }

            case 2:
              {
                switch (ty.tag) {
                  case 4:
                    {
                      const ty$$5 = ty.fields[0];
                      return (0, _TastOps.mkNativePtrTy)(ImportMap$$get_g(env$$6), ImportILType(env$$6, m$$5, tinst, ty$$5));
                    }

                  case 6:
                    {
                      return (0, _TcGlobals.TcGlobals$$get_nativeint_ty)(ImportMap$$get_g(env$$6));
                    }

                  case 8:
                    {
                      const ty$$6 = ty.fields[2];
                      env$$6 = env$$6;
                      m$$5 = m$$5;
                      tinst = tinst;
                      ty = ty$$6;
                      continue ImportILType;
                    }

                  case 7:
                    {
                      const u16 = ty.fields[0];

                      try {
                        return (0, _List.item)(~~u16, tinst);
                      } catch (matchValue$$5) {
                        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$impNotEnoughTypeParamsInScopeWhileImporting)(), m$$5));
                      }
                    }

                  default:
                    {
                      throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/import.fs", 161, 10);
                    }
                }
              }
          }
        }
    }
  }
}

function CanImportILType(env$$7, m$$6, ty$$7) {
  CanImportILType: while (true) {
    var $target$$8, tspec$$1;

    switch (ty$$7.tag) {
      case 1:
        $target$$8 = 1;
        break;

      case 3:
        $target$$8 = 2;
        tspec$$1 = ty$$7.fields[0];
        break;

      case 2:
        $target$$8 = 2;
        tspec$$1 = ty$$7.fields[0];
        break;

      case 5:
        $target$$8 = 3;
        break;

      case 4:
        $target$$8 = 4;
        break;

      case 6:
        $target$$8 = 5;
        break;

      case 8:
        $target$$8 = 6;
        break;

      case 7:
        $target$$8 = 7;
        break;

      default:
        $target$$8 = 0;
    }

    switch ($target$$8) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          const ety = ty$$7.fields[1];
          const _bounds = ty$$7.fields[0];
          env$$7 = env$$7;
          m$$6 = m$$6;
          ty$$7 = ety;
          continue CanImportILType;
        }

      case 2:
        {
          if (CanImportILTypeRef(env$$7, m$$6, (0, _il.ILTypeSpec$$get_TypeRef)(tspec$$1))) {
            return (0, _List.forAll)(function predicate(arg20$0040) {
              return CanImportILType(env$$7, m$$6, arg20$0040);
            }, (0, _il.ILTypeSpec$$get_GenericArgs)(tspec$$1));
          } else {
            return false;
          }
        }

      case 3:
        {
          const ety$$1 = ty$$7.fields[0];
          env$$7 = env$$7;
          m$$6 = m$$6;
          ty$$7 = ety$$1;
          continue CanImportILType;
        }

      case 4:
        {
          const ety$$2 = ty$$7.fields[0];
          env$$7 = env$$7;
          m$$6 = m$$6;
          ty$$7 = ety$$2;
          continue CanImportILType;
        }

      case 5:
        {
          return true;
        }

      case 6:
        {
          const ety$$3 = ty$$7.fields[2];
          env$$7 = env$$7;
          m$$6 = m$$6;
          ty$$7 = ety$$3;
          continue CanImportILType;
        }

      case 7:
        {
          const _u16 = ty$$7.fields[0];
          return true;
        }
    }
  }
}

function ImportILGenericParameters(amap, m$$7, scoref$$2, tinst$$1, gps) {
  if (gps.tail == null) {
    return (0, _Types.L)();
  } else {
    const amap$$1 = amap();
    const tps = (0, _List.map)(function mapping$$1(gp) {
      return (0, _tast.NewRigidTypar)(gp.Name, m$$7);
    }, gps);
    const tptys = (0, _List.map)(_tast.mkTyparTy, tps);
    const importInst = (0, _List.append)(tinst$$1, tptys);
    (0, _List.iterate2)(function action(tp$$1, gp$$1) {
      const constraints = (0, _List.map)(function mapping$$2(ilty) {
        return new _tast.TyparConstraint(0, "CoercesTo", ImportILType(amap$$1, m$$7, importInst, (0, _il.rescopeILType)(scoref$$2, ilty)), m$$7);
      }, gp$$1.Constraints);
      const constraints$$1 = gp$$1.HasReferenceTypeConstraint ? (0, _Types.L)(new _tast.TyparConstraint(5, "IsReferenceType", m$$7), constraints) : constraints;
      const constraints$$2 = gp$$1.HasNotNullableValueTypeConstraint ? (0, _Types.L)(new _tast.TyparConstraint(4, "IsNonNullableStruct", m$$7), constraints$$1) : constraints$$1;
      const constraints$$3 = gp$$1.HasDefaultConstructorConstraint ? (0, _Types.L)(new _tast.TyparConstraint(7, "RequiresDefaultConstructor", m$$7), constraints$$2) : constraints$$2;
      (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp$$1, constraints$$3);
    }, tps, gps);
    return tps;
  }
}

function multisetDiscriminateAndMap(nodef, tipf, items) {
  const tips = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$6) {
      if (matchValue$$6[0].tail == null) {
        return (0, _Seq.singleton)(tipf(matchValue$$6[1]));
      } else {
        return (0, _Seq.empty)();
      }
    }, items);
  }));
  let nodes;
  const buckets = new Map([]);
  (0, _Seq.iterate)(function (forLoopVar) {
    var matchValue$$7;

    if (forLoopVar[0].tail != null) {
      const rest = forLoopVar[0].tail;
      const key = forLoopVar[0].head;
      buckets.set(key, (matchValue$$7 = (0, _Util.tryGetValue)(buckets, key, null), matchValue$$7[0] ? (0, _Types.L)([rest, forLoopVar[1]], matchValue$$7[1]) : (0, _Types.L)([rest, forLoopVar[1]], (0, _Types.L)())));
    }
  }, items);
  nodes = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$8) {
      const activePatternResult36601 = matchValue$$8;
      return (0, _Seq.singleton)(nodef(activePatternResult36601[0], activePatternResult36601[1]));
    }, buckets);
  }));
  return (0, _List.append)(tips, nodes);
}

function ImportILTypeDef(amap$$2, m$$8, scoref$$3, cpath, enc, nm, tdef) {
  const lazyModuleOrNamespaceTypeForNestedTypes = new _Util.Lazy(function () {
    const cpath$$1 = (0, _tast.CompilationPath$$NestedCompPath)(cpath, nm, new _tast.ModuleOrNamespaceKind(1, "ModuleOrType"));
    return ImportILTypeDefs(amap$$2, m$$8, scoref$$3, cpath$$1, (0, _List.append)(enc, (0, _Types.L)(tdef, (0, _Types.L)())), (0, _il.ILTypeDef$$get_NestedTypes)(tdef));
  });
  return (0, _tast.NewILTycon)(cpath, nm, m$$8, (0, _illib.LazyWithContext$00602$$$Create$$4F384A61)(function (m$$9) {
    return ImportILGenericParameters(amap$$2, m$$9, scoref$$3, (0, _Types.L)(), (0, _il.ILTypeDef$$get_GenericParams)(tdef));
  }, _ErrorLogger.findOriginalException), scoref$$3, enc, tdef, new _tast.MaybeLazy$00601(1, "Lazy", lazyModuleOrNamespaceTypeForNestedTypes));
}

function ImportILTypeDefList(amap$$3, m$$10, cpath$$2, enc$$1, items$$2) {
  const entities = multisetDiscriminateAndMap(function nodef$$1(n$$1, tgs) {
    const modty = new _Util.Lazy(function () {
      return ImportILTypeDefList(amap$$3, m$$10, (0, _tast.CompilationPath$$NestedCompPath)(cpath$$2, n$$1, new _tast.ModuleOrNamespaceKind(2, "Namespace")), enc$$1, tgs);
    });
    return (0, _tast.NewModuleOrNamespace)(cpath$$2, _tast.taccessPublic, (0, _ast.mkSynId)(m$$10, n$$1), (0, _ast.XmlDoc$$$get_Empty)(), (0, _Types.L)(), new _tast.MaybeLazy$00601(1, "Lazy", modty));
  }, function tipf$$1(tupledArg) {
    const patternInput$$2 = tupledArg[1].Value;
    return ImportILTypeDef(amap$$3, m$$10, patternInput$$2[0], cpath$$2, enc$$1, tupledArg[0], (0, _il.ILPreTypeDef$$GetTypeDef)(patternInput$$2[2]));
  }, items$$2);
  const kind = enc$$1.tail == null ? new _tast.ModuleOrNamespaceKind(2, "Namespace") : new _tast.ModuleOrNamespaceKind(1, "ModuleOrType");
  return (0, _tast.NewModuleOrNamespaceType)(kind, entities, (0, _Types.L)());
}

function ImportILTypeDefs(amap$$4, m$$11, scoref$$4, cpath$$3, enc$$2, tdefs) {
  return ImportILTypeDefList(amap$$4, m$$11, cpath$$3, enc$$2, (0, _Array.toList)((0, _Array.map)(function mapping$$3(pre) {
    return [(0, _il.ILPreTypeDef$$get_Namespace)(pre), [(0, _il.ILPreTypeDef$$get_Name)(pre), (0, _illib.notlazy)([scoref$$4, (0, _il.ILPreTypeDef$$get_MetadataIndex)(pre), pre])]];
  }, (0, _il.ILTypeDefs$$get_AsArrayOfPreTypeDefs)(tdefs), Array)));
}

function ImportILAssemblyMainTypeDefs(amap$$5, m$$12, scoref$$5, modul) {
  return ImportILTypeDefs(amap$$5, m$$12, scoref$$5, new _tast.CompilationPath(0, "CompPath", scoref$$5, (0, _Types.L)()), (0, _Types.L)(), modul.TypeDefs);
}

function ImportILAssemblyExportedType(amap$$6, m$$13, auxModLoader, scoref$$6, exportedType) {
  if ((0, _il.ILExportedTypeOrForwarder$$get_IsForwarder)(exportedType)) {
    return (0, _Types.L)();
  } else {
    const patternInput$$3 = (0, _il.splitILTypeName)(exportedType.Name);
    const info$$1 = new _Util.Lazy(function () {
      let matchValue$$10;

      try {
        const modul$$1 = auxModLoader(exportedType.ScopeRef);
        const ptd = (0, _il.mkILPreTypeDefComputed)(patternInput$$3[0], patternInput$$3[1], function () {
          return (0, _il.ILTypeDefs$$FindByName$$Z721C83C5)(modul$$1.TypeDefs, exportedType.Name);
        });
        matchValue$$10 = ptd;
      } catch (matchValue$$9) {
        if (false) {
          matchValue$$10 = null;
        } else {
          throw matchValue$$9;
        }
      }

      if (matchValue$$10 != null) {
        const preTypeDef = matchValue$$10;
        return [scoref$$6, -1, preTypeDef];
      } else {
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$impReferenceToDllRequiredByAssembly$$30230F9B)((0, _il.ILScopeRef$$get_QualifiedName)(exportedType.ScopeRef), (0, _il.ILScopeRef$$get_QualifiedName)(scoref$$6), exportedType.Name), m$$13));
      }
    });
    return (0, _Types.L)(ImportILTypeDefList(amap$$6, m$$13, new _tast.CompilationPath(0, "CompPath", scoref$$6, (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)([patternInput$$3[0], [patternInput$$3[1], info$$1]], (0, _Types.L)())), (0, _Types.L)());
  }
}

function ImportILAssemblyExportedTypes(amap$$7, m$$14, auxModLoader$$1, scoref$$7, exportedTypes) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (exportedType$$1) {
      return ImportILAssemblyExportedType(amap$$7, m$$14, auxModLoader$$1, scoref$$7, exportedType$$1);
    }, (0, _il.ILExportedTypesAndForwarders$$get_AsList)(exportedTypes));
  }));
}

function ImportILAssemblyTypeDefs(amap$$8, m$$15, auxModLoader$$2, aref, mainmod) {
  const scoref$$8 = new _il.ILScopeRef(2, "Assembly", aref);
  const mtypsForExportedTypes = ImportILAssemblyExportedTypes(amap$$8, m$$15, auxModLoader$$2, scoref$$8, (0, _il.ILModuleDef$$get_ManifestOfAssembly)(mainmod).ExportedTypes);
  const mainmod$$1 = ImportILAssemblyMainTypeDefs(amap$$8, m$$15, scoref$$8, mainmod);
  return (0, _tast.CombineCcuContentFragments)(m$$15, (0, _Types.L)(mainmod$$1, mtypsForExportedTypes));
}

function ImportILAssemblyTypeForwarders(amap$$9, m$$16, exportedTypes$$1) {
  return (0, _Map.ofList)((0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (exportedType$$2) {
      const patternInput$$4 = (0, _il.splitILTypeName)(exportedType$$2.Name);
      const tcref$$5 = new _Util.Lazy(function () {
        return ImportILTypeRefUncached(amap$$9(), m$$16, (0, _il.ILTypeRef$$$Create$$113F1D6)(exportedType$$2.ScopeRef, (0, _Types.L)(), exportedType$$2.Name));
      });
      return (0, _Seq.append)((0, _Seq.singleton)([[(0, _Array.ofList)(patternInput$$4[0], Array), patternInput$$4[1]], tcref$$5]), (0, _Seq.delay)(function () {
        const nested = function nested(nets, enc$$4) {
          return (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (net) {
              const tcref$$6 = new _Util.Lazy(function () {
                return ImportILTypeRefUncached(amap$$9(), m$$16, (0, _il.ILTypeRef$$$Create$$113F1D6)(exportedType$$2.ScopeRef, enc$$4, net.Name));
              });
              return (0, _Seq.append)((0, _Seq.singleton)([[(0, _Array.ofList)(enc$$4, Array), exportedType$$2.Name], tcref$$6]), (0, _Seq.delay)(function () {
                return nested(net.Nested, (0, _List.append)(enc$$4, (0, _Types.L)(net.Name, (0, _Types.L)())));
              }));
            }, (0, _il.ILNestedExportedTypes$$get_AsList)(nets));
          }));
        };

        return nested(exportedType$$2.Nested, (0, _List.append)(patternInput$$4[0], (0, _Types.L)(patternInput$$4[1], (0, _Types.L)())));
      }));
    }, (0, _il.ILExportedTypesAndForwarders$$get_AsList)(exportedTypes$$1));
  })), {
    Compare: _Util.compareArrays
  });
}

function ImportILAssembly(amap$$10, m$$17, auxModuleLoader, ilScopeRef, sourceDir, filename, ilModule, invalidateCcu) {
  var manifest;
  invalidateCcu;
  let aref$$2;

  if (ilScopeRef.tag === 2) {
    const aref$$1 = ilScopeRef.fields[0];
    aref$$2 = aref$$1;
  } else {
    aref$$2 = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("ImportILAssembly: cannot reference .NET netmodules directly, reference the containing assembly instead", m$$17));
  }

  const nm$$1 = (0, _il.ILAssemblyRef$$get_Name)(aref$$2);
  const mty = ImportILAssemblyTypeDefs(amap$$10, m$$17, auxModuleLoader, aref$$2, ilModule);
  const ccuData = new _tast.CcuData(filename, ilScopeRef, (0, _tast.newStamp)(), (0, _il.ILScopeRef$$get_QualifiedName)(ilScopeRef), sourceDir, false, false, (0, _tast.NewCcuContents)(ilScopeRef, m$$17, nm$$1, mty), function () {
    return ilModule;
  }, function MemberSignatureEquality(ty1, ty2) {
    return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(0, "EraseAll"), ImportMap$$get_g(amap$$10()), ty1, ty2);
  }, ilModule.Manifest != null ? (manifest = ilModule.Manifest, ImportILAssemblyTypeForwarders(amap$$10, m$$17, manifest.ExportedTypes)) : (0, _Map.empty)({
    Compare: _Util.compareArrays
  }));
  return (0, _tast.CcuThunk$$$Create$$Z68F5F4C0)(nm$$1, ccuData);
}