"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeContainsPosLeftEdgeInclusive = rangeContainsPosLeftEdgeInclusive;
exports.rangeContainsPosEdgesExclusive = rangeContainsPosEdgesExclusive;
exports.AstVisitorBase$00601$$$$002Ector = AstVisitorBase$00601$$$$002Ector;
exports.dive = dive;
exports.pick = pick;
exports.Traverse = Traverse;
exports.AstVisitorBase$00601 = exports.TraverseStep = void 0;

var _range4 = require("../fsharp/range");

var _Types = require("../fable-core.2.0.3/Types");

var _String = require("../fable-core.2.0.3/String");

var _List = require("../fable-core.2.0.3/List");

var _Seq = require("../fable-core.2.0.3/Seq");

var _ast = require("../fsharp/ast");

var _Util = require("../fable-core.2.0.3/Util");

var _Option = require("../fable-core.2.0.3/Option");

var _Map = require("../fable-core.2.0.3/Map");

function rangeContainsPosLeftEdgeInclusive(m1, p) {
  if ((0, _range4.posEq)((0, _range4.range$$get_Start)(m1), (0, _range4.range$$get_End)(m1))) {
    if ((0, _range4.posGeq)(p, (0, _range4.range$$get_Start)(m1))) {
      return (0, _range4.posGeq)((0, _range4.range$$get_End)(m1), p);
    } else {
      return false;
    }
  } else if ((0, _range4.posGeq)(p, (0, _range4.range$$get_Start)(m1))) {
    return (0, _range4.posGt)((0, _range4.range$$get_End)(m1), p);
  } else {
    return false;
  }
}

function rangeContainsPosEdgesExclusive(m1$$1, p$$1) {
  if ((0, _range4.posGt)(p$$1, (0, _range4.range$$get_Start)(m1$$1))) {
    return (0, _range4.posGt)((0, _range4.range$$get_End)(m1$$1), p$$1);
  } else {
    return false;
  }
}

const TraverseStep = (0, _Types.declare)(function TraverseStep(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TraverseStep = TraverseStep;
const AstVisitorBase$00601 = (0, _Types.declare)(function AstVisitorBase$00601() {});
exports.AstVisitorBase$00601 = AstVisitorBase$00601;

function AstVisitorBase$00601$$$$002Ector() {
  return this != null ? AstVisitorBase$00601.call(this) : new AstVisitorBase$00601();
}

AstVisitorBase$00601.prototype.VisitTypeAbbrev = function (_ty, _m) {
  return null;
};

AstVisitorBase$00601.prototype.VisitImplicitInherit = function (defaultTraverse, _ty$$1, expr, _m$$1) {
  return defaultTraverse(expr);
};

AstVisitorBase$00601.prototype.VisitModuleDecl = function (defaultTraverse$$1, decl) {
  return defaultTraverse$$1(decl);
};

AstVisitorBase$00601.prototype.VisitBinding = function (defaultTraverse$$2, binding) {
  return defaultTraverse$$2(binding);
};

AstVisitorBase$00601.prototype.VisitMatchClause = function (defaultTraverse$$3, mc) {
  return defaultTraverse$$3(mc);
};

AstVisitorBase$00601.prototype.VisitInheritSynMemberDefn = function (_componentInfo, _typeDefnKind, _synType, _members, _range) {
  return null;
};

AstVisitorBase$00601.prototype.VisitInterfaceSynMemberDefnType = function (_synType$$1) {
  return null;
};

AstVisitorBase$00601.prototype.VisitRecordField = function (_path, _copyOpt, _recordField) {
  return null;
};

AstVisitorBase$00601.prototype.VisitHashDirective = function (_arg1) {
  return null;
};

AstVisitorBase$00601.prototype.VisitModuleOrNamespace = function (_arg2) {
  return null;
};

AstVisitorBase$00601.prototype.VisitComponentInfo = function (_arg3) {
  return null;
};

AstVisitorBase$00601.prototype.VisitLetOrUse = function (_arg4, _arg5, _arg6, _arg7) {
  return null;
};

AstVisitorBase$00601.prototype.VisitSimplePats = function (_arg8) {
  return null;
};

AstVisitorBase$00601.prototype.VisitPat = function (defaultTraverse$$4, pat) {
  return defaultTraverse$$4(pat);
};

AstVisitorBase$00601.prototype.VisitType = function (defaultTraverse$$5, ty) {
  return defaultTraverse$$5(ty);
};

function dive(node, range, project) {
  return [range, function () {
    return project(node);
  }];
}

function pick(pos, outerRange, _debugObj, diveResults) {
  if (diveResults.tail == null) {
    return null;
  } else {
    const isOrdered = true;

    if (!isOrdered) {
      const s = (0, _String.toText)((0, _String.printf)("ServiceParseTreeWalk: not isOrdered: %A"))((0, _List.map)(function mapping(tupledArg) {
        return (0, _range4.range$$ToShortString)(tupledArg[0]);
      }, diveResults));
      s;
    }

    let outerContainsInner;
    outerRange;
    outerContainsInner = true;

    if (!outerContainsInner) {
      const s$$1 = (0, _String.toText)((0, _String.printf)("ServiceParseTreeWalk: not outerContainsInner: %A : %A"))((0, _range4.range$$ToShortString)(outerRange))((0, _List.map)(function mapping$$1(tupledArg$$1) {
        return (0, _range4.range$$ToShortString)(tupledArg$$1[0]);
      }, diveResults));
      s$$1;
    }

    const isZeroWidth = function isZeroWidth(r$$2) {
      return (0, _range4.posEq)((0, _range4.range$$get_Start)(r$$2), (0, _range4.range$$get_End)(r$$2));
    };

    const matchValue = (0, _List.choose)(function (tupledArg$$2) {
      return (rangeContainsPosLeftEdgeInclusive(tupledArg$$2[0], pos) ? !isZeroWidth(tupledArg$$2[0]) : false) ? tupledArg$$2[1] : null;
    }, diveResults);

    if (matchValue.tail != null) {
      if (matchValue.tail.tail == null) {
        return matchValue.head();
      } else {
        return null;
      }
    } else {
      let e = (0, _List.head)(diveResults);
      (0, _Seq.iterate)(function (r$$4) {
        var copyOfStruct;

        if ((0, _range4.posGt)(pos, (copyOfStruct = r$$4[0], (0, _range4.range$$get_Start)(copyOfStruct)))) {
          e = r$$4;
        }
      }, diveResults);
      return e[1]();
    }
  }
}

function Traverse(pos$$1, parseTree, visitor) {
  const pick$$1 = function pick$$1(x$$1, _debugObj$$1, diveResults$$1) {
    return pick(pos$$1, x$$1, _debugObj$$1, diveResults$$1);
  };

  const traverseSynModuleDecl = function traverseSynModuleDecl(path) {
    return function (decl$$1) {
      const pick$$2 = (0, _Util.partialApply)(2, pick$$1, [(0, _ast.SynModuleDecl$$get_Range)(decl$$1)]);

      const defaultTraverse$$6 = function defaultTraverse$$6(m) {
        const path$$1 = (0, _Types.L)(new TraverseStep(1, "Module", m), path);

        switch (m.tag) {
          case 1:
            {
              const synModuleDecls = m.fields[2];
              const _synComponentInfo = m.fields[0];
              const _range$$2 = m.fields[4];
              const _isRec = m.fields[1];
              return pick$$2(decl$$1)((0, _List.map)(function mapping$$2(x$$2) {
                return dive(x$$2, (0, _ast.SynModuleDecl$$get_Range)(x$$2), traverseSynModuleDecl(path$$1));
              }, synModuleDecls));
            }

          case 2:
            {
              const synBindingList = m.fields[1];
              const range$$1 = m.fields[2];
              const matchValue$$1 = visitor.VisitLetOrUse(path$$1, traverseSynBinding(path$$1), synBindingList, range$$1);

              if (matchValue$$1 == null) {
                return pick$$2(decl$$1)((0, _List.map)(function mapping$$3(x$$4) {
                  return dive(x$$4, (0, _ast.SynBinding$$get_RangeOfBindingAndRhs)(x$$4), traverseSynBinding(path$$1));
                }, synBindingList));
              } else {
                const x$$3 = (0, _Option.value)(matchValue$$1);
                return (0, _Option.some)(x$$3);
              }
            }

          case 3:
            {
              const synExpr = m.fields[1];
              const _sequencePointInfoForBinding = m.fields[0];
              const _range$$3 = m.fields[2];
              return traverseSynExpr(path$$1)(synExpr);
            }

          case 4:
            {
              const synTypeDefnList = m.fields[0];
              const _range$$4 = m.fields[1];
              return pick$$2(decl$$1)((0, _List.map)(function mapping$$4(x$$5) {
                return dive(x$$5, (0, _ast.SynTypeDefn$$get_Range)(x$$5), traverseSynTypeDefn(path$$1));
              }, synTypeDefnList));
            }

          case 5:
            {
              const _synExceptionDefn = m.fields[0];
              const _range$$5 = m.fields[1];
              return null;
            }

          case 6:
            {
              const _range$$6 = m.fields[1];
              const _longIdent$$1 = m.fields[0];
              return null;
            }

          case 7:
            {
              const _synAttributes = m.fields[0];
              const _range$$7 = m.fields[1];
              return null;
            }

          case 8:
            {
              const range$$2 = m.fields[1];
              const _parsedHashDirective = m.fields[0];
              return visitor.VisitHashDirective(range$$2);
            }

          case 9:
            {
              const synModuleOrNamespace = m.fields[0];
              return traverseSynModuleOrNamespace(path$$1)(synModuleOrNamespace);
            }

          default:
            {
              const _range$$1 = m.fields[2];
              const _longIdent = m.fields[1];
              const _ident = m.fields[0];
              return null;
            }
        }
      };

      return visitor.VisitModuleDecl(defaultTraverse$$6, decl$$1);
    };
  };

  const traverseSynModuleOrNamespace = function traverseSynModuleOrNamespace(path$$2) {
    return function (_arg1$$2) {
      const mors = _arg1$$2;
      const synModuleDecls$$1 = mors.fields[3];
      const range$$3 = mors.fields[7];
      const _synAttributes$$1 = mors.fields[5];
      const _synAccessOpt = mors.fields[6];
      const _preXmlDoc = mors.fields[4];
      const _longIdent$$2 = mors.fields[0];
      const _isRec$$1 = mors.fields[1];
      const _isModule = mors.fields[2];
      const matchValue$$2 = visitor.VisitModuleOrNamespace(mors);

      if (matchValue$$2 == null) {
        const path$$3 = (0, _Types.L)(new TraverseStep(2, "ModuleOrNamespace", mors), path$$2);
        return pick$$1(range$$3, mors, (0, _List.map)(function mapping$$5(x$$7) {
          return dive(x$$7, (0, _ast.SynModuleDecl$$get_Range)(x$$7), traverseSynModuleDecl(path$$3));
        }, synModuleDecls$$1));
      } else {
        const x$$6 = (0, _Option.value)(matchValue$$2);
        return (0, _Option.some)(x$$6);
      }
    };
  };

  const traverseSynExpr = function traverseSynExpr(path$$4) {
    return function (expr$$1) {
      const pick$$3 = (0, _Util.partialApply)(2, pick$$1, [(0, _ast.SynExpr$$get_Range)(expr$$1)]);

      const defaultTraverse$$7 = function defaultTraverse$$7(e$$1) {
        const origPath = path$$4;
        const path$$5 = (0, _Types.L)(new TraverseStep(0, "Expr", e$$1), path$$4);
        const traverseSynExpr$$1 = traverseSynExpr(path$$5);

        var $target$$7, _range$$11, synExprList, synExpr$$24, synExpr2$$8;

        switch (e$$1.tag) {
          case 1:
            $target$$7 = 1;
            break;

          case 2:
            $target$$7 = 2;
            break;

          case 3:
            $target$$7 = 3;
            break;

          case 4:
            $target$$7 = 4;
            _range$$11 = e$$1.fields[2];
            synExprList = e$$1.fields[0];
            break;

          case 5:
            $target$$7 = 4;
            _range$$11 = e$$1.fields[2];
            synExprList = e$$1.fields[0];
            break;

          case 6:
            $target$$7 = 5;
            break;

          case 7:
            $target$$7 = 6;
            break;

          case 8:
            $target$$7 = 7;
            break;

          case 9:
            $target$$7 = 8;
            break;

          case 10:
            $target$$7 = 9;
            break;

          case 11:
            $target$$7 = 10;
            break;

          case 12:
            $target$$7 = 11;
            break;

          case 13:
            $target$$7 = 12;
            break;

          case 14:
            $target$$7 = 13;
            break;

          case 15:
            $target$$7 = 14;
            break;

          case 16:
            $target$$7 = 15;
            break;

          case 17:
            $target$$7 = 16;
            break;

          case 18:
            $target$$7 = 17;
            break;

          case 19:
            $target$$7 = 18;
            break;

          case 60:
            $target$$7 = 19;
            break;

          case 20:
            $target$$7 = 20;
            break;

          case 21:
            $target$$7 = 21;
            break;

          case 22:
            $target$$7 = 22;
            break;

          case 23:
            $target$$7 = 23;
            break;

          case 24:
            $target$$7 = 24;
            break;

          case 25:
            $target$$7 = 25;
            break;

          case 26:
            $target$$7 = 26;
            break;

          case 27:
            $target$$7 = 27;
            break;

          case 28:
            $target$$7 = 28;
            break;

          case 29:
            $target$$7 = 29;
            break;

          case 30:
            $target$$7 = 30;
            break;

          case 31:
            $target$$7 = 31;
            break;

          case 33:
            $target$$7 = 32;
            synExpr$$24 = e$$1.fields[0];
            synExpr2$$8 = e$$1.fields[1];
            break;

          case 32:
            $target$$7 = 32;
            synExpr$$24 = e$$1.fields[0];
            synExpr2$$8 = e$$1.fields[2];
            break;

          case 34:
            $target$$7 = 33;
            break;

          case 35:
            $target$$7 = 34;
            break;

          case 46:
            $target$$7 = 35;
            break;

          case 36:
            $target$$7 = 36;
            break;

          case 37:
            $target$$7 = 37;
            break;

          case 38:
            $target$$7 = 38;
            break;

          case 39:
            $target$$7 = 39;
            break;

          case 40:
            $target$$7 = 40;
            break;

          case 41:
            $target$$7 = 41;
            break;

          case 42:
            $target$$7 = 42;
            break;

          case 43:
            $target$$7 = 43;
            break;

          case 44:
            $target$$7 = 44;
            break;

          case 45:
            $target$$7 = 45;
            break;

          case 47:
            $target$$7 = 46;
            break;

          case 48:
            $target$$7 = 47;
            break;

          case 49:
            $target$$7 = 48;
            break;

          case 50:
            $target$$7 = 49;
            break;

          case 51:
            $target$$7 = 50;
            break;

          case 52:
            $target$$7 = 51;
            break;

          case 53:
            $target$$7 = 52;
            break;

          case 54:
            $target$$7 = 53;
            break;

          case 55:
            $target$$7 = 54;
            break;

          case 56:
            $target$$7 = 55;
            break;

          case 57:
            $target$$7 = 56;
            break;

          case 58:
            $target$$7 = 57;
            break;

          case 59:
            $target$$7 = 58;
            break;

          default:
            $target$$7 = 0;
        }

        switch ($target$$7) {
          case 0:
            {
              const synExpr$$1 = e$$1.fields[0];
              const _parenRange = e$$1.fields[3];
              return traverseSynExpr$$1(synExpr$$1);
            }

          case 1:
            {
              const synExpr2 = e$$1.fields[2];
              const _synExpr = e$$1.fields[0];
              const _range$$8 = e$$1.fields[4];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr2, (0, _ast.SynExpr$$get_Range)(synExpr2), traverseSynExpr$$1), (0, _Types.L)()));
            }

          case 2:
            {
              const _synConst = e$$1.fields[0];
              const _range$$9 = e$$1.fields[1];
              return null;
            }

          case 3:
            {
              const synType = e$$1.fields[1];
              const synExpr$$2 = e$$1.fields[0];
              const _range$$10 = e$$1.fields[2];
              return (0, _List.tryPick)(function chooser(x$$8) {
                return x$$8;
              }, (0, _Types.L)(traverseSynExpr$$1(synExpr$$2), (0, _Types.L)(traverseSynType(synType), (0, _Types.L)())));
            }

          case 4:
            {
              return pick$$3(expr$$1)((0, _List.map)(function mapping$$6(x$$9) {
                return dive(x$$9, (0, _ast.SynExpr$$get_Range)(x$$9), traverseSynExpr$$1);
              }, synExprList));
            }

          case 5:
            {
              const synExprList$$1 = e$$1.fields[1];
              const _range$$12 = e$$1.fields[2];
              return pick$$3(expr$$1)((0, _List.map)(function mapping$$7(x$$10) {
                return dive(x$$10, (0, _ast.SynExpr$$get_Range)(x$$10), traverseSynExpr$$1);
              }, synExprList$$1));
            }

          case 6:
            {
              const inheritOpt = e$$1.fields[0];
              const fields = e$$1.fields[2];
              const copyOpt = e$$1.fields[1];
              const _range$$13 = e$$1.fields[3];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                var sepOpt, inheritRange, expr$$2, _ty$$2, _range$$14;

                const diveIntoSeparator = function diveIntoSeparator(offsideColumn, scPosOpt, copyOpt$$1) {
                  if (scPosOpt == null) {
                    if ((0, _range4.pos$$get_Column)(pos$$1) === offsideColumn) {
                      return visitor.VisitRecordField(path$$5, copyOpt$$1, null);
                    } else {
                      return null;
                    }
                  } else {
                    const scPos = scPosOpt;

                    if ((0, _range4.posGeq)(pos$$1, scPos)) {
                      return visitor.VisitRecordField(path$$5, copyOpt$$1, null);
                    } else {
                      return null;
                    }
                  }
                };

                return (0, _Seq.append)(inheritOpt != null ? (sepOpt = inheritOpt[3], (inheritRange = inheritOpt[4], (expr$$2 = inheritOpt[1], (_ty$$2 = inheritOpt[0], (_range$$14 = inheritOpt[2], (0, _Seq.append)((0, _Seq.singleton)(dive(expr$$2, (0, _ast.SynExpr$$get_Range)(expr$$2), function (expr$$3) {
                  return ((!(0, _range4.rangeContainsPos)((0, _ast.SynExpr$$get_Range)(expr$$3), pos$$1) ? sepOpt == null : false) ? (0, _range4.pos$$get_Column)(pos$$1) === (0, _range4.range$$get_StartColumn)(inheritRange) : false) ? visitor.VisitRecordField(path$$5, null, null) : traverseSynExpr$$1(expr$$3);
                })), (0, _Seq.delay)(function () {
                  if (sepOpt == null) {
                    return (0, _Seq.empty)();
                  } else {
                    const sep = sepOpt[0];
                    const scPosOpt$$1 = sepOpt[1];
                    return (0, _Seq.singleton)(dive(null, sep, function () {
                      return diveIntoSeparator((0, _range4.range$$get_StartColumn)(inheritRange), scPosOpt$$1, null);
                    }));
                  }
                }))))))) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
                  var withRange, expr$$4;
                  return (0, _Seq.append)(copyOpt != null ? (withRange = copyOpt[1][0], (expr$$4 = copyOpt[0], (0, _Seq.append)((0, _Seq.singleton)(dive(expr$$4, (0, _ast.SynExpr$$get_Range)(expr$$4), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                    return (0, _Seq.singleton)(dive(null, withRange, function () {
                      return (0, _range4.posGeq)(pos$$1, (0, _range4.range$$get_End)(withRange)) ? visitor.VisitRecordField(path$$5, expr$$4, null) : null;
                    }));
                  })))) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
                    const copyOpt$$2 = (0, _Option.defaultArg)(copyOpt, null, function (tuple) {
                      return tuple[0];
                    });
                    return (0, _Seq.collect)(function (matchValue$$3) {
                      const field = matchValue$$3[0][0];
                      return (0, _Seq.append)((0, _Seq.singleton)(dive([path$$5, copyOpt$$2, field], (0, _ast.LongIdentWithDots$$get_Range)(field), function (r$$5) {
                        return (0, _range4.rangeContainsPos)((0, _ast.LongIdentWithDots$$get_Range)(field), pos$$1) ? visitor.VisitRecordField(r$$5[0], r$$5[1], r$$5[2]) : null;
                      })), (0, _Seq.delay)(function () {
                        var e$$3;
                        let offsideColumn$$1;

                        if (inheritOpt == null) {
                          let copyOfStruct$$1 = (0, _ast.LongIdentWithDots$$get_Range)(field);
                          offsideColumn$$1 = (0, _range4.range$$get_StartColumn)(copyOfStruct$$1);
                        } else {
                          const inheritRange$$1 = inheritOpt[4];
                          offsideColumn$$1 = (0, _range4.range$$get_StartColumn)(inheritRange$$1);
                        }

                        return (0, _Seq.append)(matchValue$$3[1] == null ? (null, (0, _Seq.empty)()) : (e$$3 = matchValue$$3[1], (0, _Seq.singleton)(dive(e$$3, (0, _ast.SynExpr$$get_Range)(e$$3), function (expr$$5) {
                          return ((!(0, _range4.rangeContainsPos)((0, _ast.SynExpr$$get_Range)(e$$3), pos$$1) ? matchValue$$3[2] == null : false) ? (0, _range4.pos$$get_Column)(pos$$1) === offsideColumn$$1 : false) ? visitor.VisitRecordField(path$$5, copyOpt$$2, null) : traverseSynExpr$$1(expr$$5);
                        }))), (0, _Seq.delay)(function () {
                          if (matchValue$$3[2] != null) {
                            const sep$$1 = matchValue$$3[2][0];
                            const scPosOpt$$2 = matchValue$$3[2][1];
                            return (0, _Seq.singleton)(dive(null, sep$$1, function () {
                              return diveIntoSeparator(offsideColumn$$1, scPosOpt$$2, copyOpt$$2);
                            }));
                          } else {
                            return (0, _Seq.empty)();
                          }
                        }));
                      }));
                    }, fields);
                  }));
                }));
              })));
            }

          case 7:
            {
              const synExpr$$3 = e$$1.fields[2];
              const _synType$$2 = e$$1.fields[1];
              const _range$$15 = e$$1.fields[3];
              return traverseSynExpr$$1(synExpr$$3);
            }

          case 8:
            {
              const ty$$1 = e$$1.fields[0];
              const ifaces = e$$1.fields[3];
              const binds = e$$1.fields[2];
              const baseCallOpt = e$$1.fields[1];
              const _range2 = e$$1.fields[5];
              const _range1 = e$$1.fields[4];
              const result = (0, _Seq.tryPick)(function chooser$$1(arg00$$1) {
                return visitor.VisitInterfaceSynMemberDefnType(arg00$$1);
              }, (0, _Seq.map)(function mapping$$8(_arg1$$3) {
                const ty$$2 = _arg1$$3.fields[0];
                return ty$$2;
              }, ifaces));

              if (result != null) {
                return result;
              } else {
                return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                  var expr$$6, newCall;
                  return (0, _Seq.append)(baseCallOpt != null ? (expr$$6 = baseCallOpt[0], (newCall = new _ast.SynExpr(8, "New", false, ty$$1, expr$$6, (0, _range4.unionRanges)((0, _ast.SynType$$get_Range)(ty$$1), (0, _ast.SynExpr$$get_Range)(expr$$6))), (0, _Seq.singleton)(dive(newCall, (0, _ast.SynExpr$$get_Range)(newCall), traverseSynExpr$$1)))) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)((0, _Seq.map)(function (b) {
                      return dive(b, (0, _ast.SynBinding$$get_RangeOfBindingAndRhs)(b), traverseSynBinding(path$$5));
                    }, binds), (0, _Seq.delay)(function () {
                      return (0, _Seq.collect)(function (matchValue$$4) {
                        const binds$$1 = matchValue$$4.fields[1];
                        const _ty$$3 = matchValue$$4.fields[0];
                        const _range$$16 = matchValue$$4.fields[2];
                        return (0, _Seq.map)(function (b$$1) {
                          return dive(b$$1, (0, _ast.SynBinding$$get_RangeOfBindingAndRhs)(b$$1), traverseSynBinding(path$$5));
                        }, binds$$1);
                      }, ifaces);
                    }));
                  }));
                })));
              }
            }

          case 9:
            {
              const synExpr2$$1 = e$$1.fields[2];
              const synExpr$$4 = e$$1.fields[1];
              const _sequencePointInfoForWhileLoop = e$$1.fields[0];
              const _range$$17 = e$$1.fields[3];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$4, (0, _ast.SynExpr$$get_Range)(synExpr$$4), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$1, (0, _ast.SynExpr$$get_Range)(synExpr2$$1), traverseSynExpr$$1), (0, _Types.L)())));
            }

          case 10:
            {
              const synExpr3 = e$$1.fields[5];
              const synExpr2$$2 = e$$1.fields[4];
              const synExpr$$5 = e$$1.fields[2];
              const _sequencePointInfoForForLoop = e$$1.fields[0];
              const _range$$18 = e$$1.fields[6];
              const _ident$$1 = e$$1.fields[1];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$5, (0, _ast.SynExpr$$get_Range)(synExpr$$5), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$2, (0, _ast.SynExpr$$get_Range)(synExpr2$$2), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr3, (0, _ast.SynExpr$$get_Range)(synExpr3), traverseSynExpr$$1), (0, _Types.L)()))));
            }

          case 11:
            {
              const synPat = e$$1.fields[3];
              const synExpr2$$3 = e$$1.fields[5];
              const synExpr$$6 = e$$1.fields[4];
              const _sequencePointInfoForForLoop$$1 = e$$1.fields[0];
              const _seqExprOnly = e$$1.fields[1];
              const _range$$19 = e$$1.fields[6];
              const _isFromSource = e$$1.fields[2];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synPat, (0, _ast.SynPat$$get_Range)(synPat), traversePat), (0, _Types.L)(dive(synExpr$$6, (0, _ast.SynExpr$$get_Range)(synExpr$$6), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$3, (0, _ast.SynExpr$$get_Range)(synExpr2$$3), traverseSynExpr$$1), (0, _Types.L)()))));
            }

          case 12:
            {
              const synExpr$$7 = e$$1.fields[1];
              const _range$$20 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$7);
            }

          case 13:
            {
              const synExpr$$8 = e$$1.fields[2];
              const _range$$21 = e$$1.fields[3];
              const isPartOfArrayOrList = origPath.tail != null ? origPath.head.tag === 0 ? origPath.head.fields[0].tag === 13 ? true : false : false : false;
              let ok;
              const matchValue$$5 = [isPartOfArrayOrList, synExpr$$8];
              var $target$$8, ident, lidwd;

              if (matchValue$$5[0]) {
                $target$$8 = 2;
              } else if (matchValue$$5[1].tag === 28) {
                $target$$8 = 0;
                ident = matchValue$$5[1].fields[0];
              } else if (matchValue$$5[1].tag === 29) {
                if (matchValue$$5[1].fields[0]) {
                  $target$$8 = 2;
                } else {
                  $target$$8 = 1;
                  lidwd = matchValue$$5[1].fields[1];
                }
              } else {
                $target$$8 = 2;
              }

              switch ($target$$8) {
                case 0:
                  {
                    ok = visitor.VisitRecordField(path$$5, null, new _ast.LongIdentWithDots(0, "LongIdentWithDots", (0, _Types.L)(ident, (0, _Types.L)()), (0, _Types.L)()));
                    break;
                  }

                case 1:
                  {
                    ok = visitor.VisitRecordField(path$$5, null, lidwd);
                    break;
                  }

                case 2:
                  {
                    ok = null;
                    break;
                  }
              }

              if (ok != null) {
                return ok;
              } else {
                return traverseSynExpr$$1(synExpr$$8);
              }
            }

          case 14:
            {
              const synSimplePats = e$$1.fields[2];
              const synExpr$$9 = e$$1.fields[3];
              const _range$$22 = e$$1.fields[4];

              if (synSimplePats.tag === 0) {
                const pats = synSimplePats.fields[0];
                const matchValue$$6 = visitor.VisitSimplePats(pats);

                if (matchValue$$6 == null) {
                  return traverseSynExpr$$1(synExpr$$9);
                } else {
                  const x$$11 = (0, _Option.value)(matchValue$$6);
                  return (0, _Option.some)(x$$11);
                }
              } else {
                return traverseSynExpr$$1(synExpr$$9);
              }
            }

          case 15:
            {
              const synMatchClauseList = e$$1.fields[2];
              const _wholem = e$$1.fields[4];
              const _spBind = e$$1.fields[3];
              const _isExnMatch = e$$1.fields[0];
              const _argm = e$$1.fields[1];
              return pick$$3(expr$$1)((0, _List.map)(function mapping$$9(x$$12) {
                return dive(x$$12, (0, _ast.SynMatchClause$$get_Range)(x$$12), traverseSynMatchClause(path$$5));
              }, synMatchClauseList));
            }

          case 16:
            {
              const synMatchClauseList$$1 = e$$1.fields[2];
              const synExpr$$10 = e$$1.fields[1];
              const _sequencePointInfoForBinding$$1 = e$$1.fields[0];
              const _range$$23 = e$$1.fields[4];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr$$10, (0, _ast.SynExpr$$get_Range)(synExpr$$10), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                  return (0, _List.map)(function mapping$$10(x$$13) {
                    return dive(x$$13, (0, _ast.SynMatchClause$$get_RangeOfGuardAndRhs)(x$$13), traverseSynMatchClause(path$$5));
                  }, synMatchClauseList$$1);
                }));
              })));
            }

          case 17:
            {
              const synExpr$$11 = e$$1.fields[0];
              const _range$$24 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$11);
            }

          case 18:
            {
              const synExpr$$12 = e$$1.fields[0];
              const _range$$25 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$12);
            }

          case 19:
            {
              const synExpr$$13 = e$$1.fields[0];
              const _range$$26 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$13);
            }

          case 20:
            {
              const synExpr2$$4 = e$$1.fields[3];
              const synExpr$$14 = e$$1.fields[2];
              const isInfix = e$$1.fields[1];
              const _range$$27 = e$$1.fields[4];

              const _exprAtomicFlag = e$$1.fields[0] | 0;

              if (isInfix) {
                return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr2$$4, (0, _ast.SynExpr$$get_Range)(synExpr2$$4), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr$$14, (0, _ast.SynExpr$$get_Range)(synExpr$$14), traverseSynExpr$$1), (0, _Types.L)())));
              } else {
                return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$14, (0, _ast.SynExpr$$get_Range)(synExpr$$14), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$4, (0, _ast.SynExpr$$get_Range)(synExpr2$$4), traverseSynExpr$$1), (0, _Types.L)())));
              }
            }

          case 21:
            {
              const synExpr$$15 = e$$1.fields[0];
              const _synTypeList = e$$1.fields[2];
              const _range$$28 = e$$1.fields[6];
              const _commas = e$$1.fields[3];
              return traverseSynExpr$$1(synExpr$$15);
            }

          case 22:
            {
              const synExpr$$16 = e$$1.fields[3];
              const synBindingList$$1 = e$$1.fields[2];
              const range$$4 = e$$1.fields[4];
              const matchValue$$7 = visitor.VisitLetOrUse(path$$5, traverseSynBinding(path$$5), synBindingList$$1, range$$4);

              if (matchValue$$7 == null) {
                return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _List.map)(function mapping$$11(x$$15) {
                    return dive(x$$15, (0, _ast.SynBinding$$get_RangeOfBindingAndRhs)(x$$15), traverseSynBinding(path$$5));
                  }, synBindingList$$1), (0, _Seq.delay)(function () {
                    return (0, _Seq.singleton)(dive(synExpr$$16, (0, _ast.SynExpr$$get_Range)(synExpr$$16), traverseSynExpr$$1));
                  }));
                })));
              } else {
                const x$$14 = (0, _Option.value)(matchValue$$7);
                return (0, _Option.some)(x$$14);
              }
            }

          case 23:
            {
              const synMatchClauseList$$2 = e$$1.fields[2];
              const synExpr$$17 = e$$1.fields[0];
              const _sequencePointInfoForWith = e$$1.fields[6];
              const _sequencePointInfoForTry = e$$1.fields[5];
              const _range3 = e$$1.fields[4];
              const _range2$$1 = e$$1.fields[3];
              const _range$$29 = e$$1.fields[1];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr$$17, (0, _ast.SynExpr$$get_Range)(synExpr$$17), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                  return (0, _List.map)(function mapping$$12(x$$16) {
                    return dive(x$$16, (0, _ast.SynMatchClause$$get_Range)(x$$16), traverseSynMatchClause(path$$5));
                  }, synMatchClauseList$$2);
                }));
              })));
            }

          case 24:
            {
              const synExpr2$$5 = e$$1.fields[1];
              const synExpr$$18 = e$$1.fields[0];
              const _sequencePointInfoForTry$$1 = e$$1.fields[3];
              const _sequencePointInfoForFinally = e$$1.fields[4];
              const _range$$30 = e$$1.fields[2];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$18, (0, _ast.SynExpr$$get_Range)(synExpr$$18), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$5, (0, _ast.SynExpr$$get_Range)(synExpr2$$5), traverseSynExpr$$1), (0, _Types.L)())));
            }

          case 25:
            {
              const synExpr$$19 = e$$1.fields[0];
              const _range$$31 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$19);
            }

          case 26:
            {
              const synExpr2$$6 = e$$1.fields[3];
              const synExpr$$20 = e$$1.fields[2];
              const _sequencePointInfoForSeq = e$$1.fields[0];
              const _range$$32 = e$$1.fields[4];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$20, (0, _ast.SynExpr$$get_Range)(synExpr$$20), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$6, (0, _ast.SynExpr$$get_Range)(synExpr2$$6), traverseSynExpr$$1), (0, _Types.L)())));
            }

          case 27:
            {
              const synExprOpt = e$$1.fields[2];
              const synExpr2$$7 = e$$1.fields[1];
              const synExpr$$21 = e$$1.fields[0];
              const _sequencePointInfoForBinding$$2 = e$$1.fields[3];
              const _range2$$2 = e$$1.fields[6];
              const _range$$33 = e$$1.fields[5];
              const _isRecovery = e$$1.fields[4];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr$$21, (0, _ast.SynExpr$$get_Range)(synExpr$$21), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr2$$7, (0, _ast.SynExpr$$get_Range)(synExpr2$$7), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                    if (synExprOpt != null) {
                      const x$$17 = synExprOpt;
                      return (0, _Seq.singleton)(dive(x$$17, (0, _ast.SynExpr$$get_Range)(x$$17), traverseSynExpr$$1));
                    } else {
                      return (0, _Seq.empty)();
                    }
                  }));
                }));
              })));
            }

          case 28:
            {
              const _ident$$2 = e$$1.fields[0];
              return null;
            }

          case 29:
            {
              const _range$$34 = e$$1.fields[3];
              const _longIdent$$3 = e$$1.fields[1];
              const _altNameRefCell = e$$1.fields[2];
              return null;
            }

          case 30:
            {
              const synExpr$$22 = e$$1.fields[1];
              const _range$$35 = e$$1.fields[2];
              const _longIdent$$4 = e$$1.fields[0];
              return traverseSynExpr$$1(synExpr$$22);
            }

          case 31:
            {
              const synExpr$$23 = e$$1.fields[0];
              const _range$$36 = e$$1.fields[3];
              const _longIdent$$5 = e$$1.fields[2];
              const _dotm = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$23);
            }

          case 32:
            {
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$24, (0, _ast.SynExpr$$get_Range)(synExpr$$24), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$8, (0, _ast.SynExpr$$get_Range)(synExpr2$$8), traverseSynExpr$$1), (0, _Types.L)())));
            }

          case 33:
            {
              const synExprList$$2 = e$$1.fields[1];
              const synExpr$$25 = e$$1.fields[0];
              const _range2$$3 = e$$1.fields[3];
              const _range$$37 = e$$1.fields[2];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr$$25, (0, _ast.SynExpr$$get_Range)(synExpr$$25), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                  return (0, _Seq.collect)(function (synExpr$$26) {
                    return (0, _Seq.map)(function (x$$18) {
                      return dive(x$$18, (0, _ast.SynExpr$$get_Range)(x$$18), traverseSynExpr$$1);
                    }, (0, _ast.SynIndexerArg$$get_Exprs)(synExpr$$26));
                  }, synExprList$$2);
                }));
              })));
            }

          case 34:
            {
              const synExprList$$3 = e$$1.fields[1];
              const synExpr2$$9 = e$$1.fields[2];
              const synExpr$$27 = e$$1.fields[0];
              const _range2$$4 = e$$1.fields[5];
              const _range$$38 = e$$1.fields[4];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr$$27, (0, _ast.SynExpr$$get_Range)(synExpr$$27), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Seq.collect)(function (synExpr$$28) {
                    return (0, _Seq.map)(function (x$$19) {
                      return dive(x$$19, (0, _ast.SynExpr$$get_Range)(x$$19), traverseSynExpr$$1);
                    }, (0, _ast.SynIndexerArg$$get_Exprs)(synExpr$$28));
                  }, synExprList$$3), (0, _Seq.delay)(function () {
                    return (0, _Seq.singleton)(dive(synExpr2$$9, (0, _ast.SynExpr$$get_Range)(synExpr2$$9), traverseSynExpr$$1));
                  }));
                }));
              })));
            }

          case 35:
            {
              const synExpr2$$10 = e$$1.fields[2];
              const synExpr1 = e$$1.fields[0];
              const _range2$$5 = e$$1.fields[3];
              const _range$$39 = e$$1.fields[1];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr1, (0, _ast.SynExpr$$get_Range)(synExpr1), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$10, (0, _ast.SynExpr$$get_Range)(synExpr2$$10), traverseSynExpr$$1), (0, _Types.L)())));
            }

          case 36:
            {
              const synExpr2$$11 = e$$1.fields[2];
              const synExpr$$29 = e$$1.fields[1];
              const _range$$40 = e$$1.fields[3];
              const _longIdent$$6 = e$$1.fields[0];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$29, (0, _ast.SynExpr$$get_Range)(synExpr$$29), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$11, (0, _ast.SynExpr$$get_Range)(synExpr2$$11), traverseSynExpr$$1), (0, _Types.L)())));
            }

          case 37:
            {
              const synExpr3$$1 = e$$1.fields[3];
              const synExpr2$$12 = e$$1.fields[2];
              const synExpr$$30 = e$$1.fields[0];
              const _range$$41 = e$$1.fields[4];
              const _longIdent$$7 = e$$1.fields[1];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synExpr$$30, (0, _ast.SynExpr$$get_Range)(synExpr$$30), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$12, (0, _ast.SynExpr$$get_Range)(synExpr2$$12), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr3$$1, (0, _ast.SynExpr$$get_Range)(synExpr3$$1), traverseSynExpr$$1), (0, _Types.L)()))));
            }

          case 38:
            {
              const synExpr$$31 = e$$1.fields[0];
              const _synType$$3 = e$$1.fields[1];
              const _range$$42 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$31);
            }

          case 39:
            {
              const synExpr$$32 = e$$1.fields[0];
              const _synType$$4 = e$$1.fields[1];
              const _range$$43 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$32);
            }

          case 40:
            {
              const synExpr$$33 = e$$1.fields[0];
              const _synType$$5 = e$$1.fields[1];
              const _range$$44 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$33);
            }

          case 41:
            {
              const synExpr$$34 = e$$1.fields[0];
              const _range$$45 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$34);
            }

          case 42:
            {
              const synExpr$$35 = e$$1.fields[0];
              const _range$$46 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$35);
            }

          case 43:
            {
              const _range$$47 = e$$1.fields[0];
              return null;
            }

          case 44:
            {
              const synExpr$$36 = e$$1.fields[1];
              const _range2$$6 = e$$1.fields[3];
              const _range$$48 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$36);
            }

          case 45:
            {
              const synExpr$$37 = e$$1.fields[2];
              const _synTyparList = e$$1.fields[0];
              const _synMemberSig = e$$1.fields[1];
              const _range$$49 = e$$1.fields[3];
              return traverseSynExpr$$1(synExpr$$37);
            }

          case 46:
            {
              const _range$$50 = e$$1.fields[0];
              return null;
            }

          case 47:
            {
              const synExpr$$38 = e$$1.fields[1];
              const _range$$51 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$38);
            }

          case 48:
            {
              const synExpr$$39 = e$$1.fields[1];
              const _range$$52 = e$$1.fields[2];
              return traverseSynExpr$$1(synExpr$$39);
            }

          case 49:
            {
              const synPat$$1 = e$$1.fields[3];
              const synExpr2$$13 = e$$1.fields[5];
              const synExpr$$40 = e$$1.fields[4];
              const _sequencePointInfoForBinding$$3 = e$$1.fields[0];
              const _range$$53 = e$$1.fields[6];
              return pick$$3(expr$$1)((0, _Types.L)(dive(synPat$$1, (0, _ast.SynPat$$get_Range)(synPat$$1), traversePat), (0, _Types.L)(dive(synExpr$$40, (0, _ast.SynExpr$$get_Range)(synExpr$$40), traverseSynExpr$$1), (0, _Types.L)(dive(synExpr2$$13, (0, _ast.SynExpr$$get_Range)(synExpr2$$13), traverseSynExpr$$1), (0, _Types.L)()))));
            }

          case 50:
            {
              const synMatchClauseList$$3 = e$$1.fields[2];
              const synExpr$$41 = e$$1.fields[1];
              const _sequencePointInfoForBinding$$4 = e$$1.fields[0];
              const _range$$54 = e$$1.fields[4];
              return pick$$3(expr$$1)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)(dive(synExpr$$41, (0, _ast.SynExpr$$get_Range)(synExpr$$41), traverseSynExpr$$1)), (0, _Seq.delay)(function () {
                  return (0, _List.map)(function mapping$$13(x$$20) {
                    return dive(x$$20, (0, _ast.SynMatchClause$$get_RangeOfGuardAndRhs)(x$$20), traverseSynMatchClause(path$$5));
                  }, synMatchClauseList$$3);
                }));
              })));
            }

          case 51:
            {
              const synExpr$$42 = e$$1.fields[0];
              const _range$$55 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$42);
            }

          case 52:
            {
              return null;
            }

          case 53:
            {
              return null;
            }

          case 54:
            {
              return null;
            }

          case 55:
            {
              return null;
            }

          case 56:
            {
              const _range$$56 = e$$1.fields[1];
              const _debugStr = e$$1.fields[0];
              return null;
            }

          case 57:
            {
              const synExpr$$43 = e$$1.fields[0];
              const _range$$57 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$43);
            }

          case 58:
            {
              const synExpr$$44 = e$$1.fields[0];
              const _range$$58 = e$$1.fields[1];
              return traverseSynExpr$$1(synExpr$$44);
            }
        }
      };

      return visitor.VisitExpr(path$$4, traverseSynExpr(path$$4), defaultTraverse$$7, expr$$1);
    };
  };

  const traversePat = function traversePat(pat$$1) {
    const defaultTraverse$$8 = function defaultTraverse$$8(p$$2) {
      var $target$$9, ps;

      switch (p$$2.tag) {
        case 10:
          $target$$9 = 0;
          break;

        case 5:
          $target$$9 = 1;
          break;

        case 6:
          $target$$9 = 2;
          ps = p$$2.fields[0];
          break;

        case 8:
          $target$$9 = 2;
          ps = p$$2.fields[0];
          break;

        case 9:
          $target$$9 = 2;
          ps = p$$2.fields[0];
          break;

        case 11:
          $target$$9 = 2;
          ps = p$$2.fields[1];
          break;

        case 4:
          $target$$9 = 3;
          break;

        case 7:
          $target$$9 = 4;
          break;

        case 3:
          $target$$9 = 5;
          break;

        default:
          $target$$9 = 6;
      }

      switch ($target$$9) {
        case 0:
          {
            const p$$3 = p$$2.fields[0];
            return traversePat(p$$3);
          }

        case 1:
          {
            const p2 = p$$2.fields[1];
            const p1 = p$$2.fields[0];
            return (0, _List.tryPick)(traversePat, (0, _Types.L)(p1, (0, _Types.L)(p2, (0, _Types.L)())));
          }

        case 2:
          {
            return (0, _List.tryPick)(traversePat, ps);
          }

        case 3:
          {
            const p$$4 = p$$2.fields[0];
            return traversePat(p$$4);
          }

        case 4:
          {
            const args = p$$2.fields[3];

            if (args.tag === 1) {
              const ps$$2 = args.fields[0];
              return (0, _List.tryPick)(traversePat, (0, _List.map)(function mapping$$14(tuple$$1) {
                return tuple$$1[1];
              }, ps$$2));
            } else {
              const ps$$1 = args.fields[0];
              return (0, _List.tryPick)(traversePat, ps$$1);
            }
          }

        case 5:
          {
            const ty$$3 = p$$2.fields[1];
            const p$$5 = p$$2.fields[0];
            return (0, _List.tryPick)(function chooser$$6(x$$21) {
              return x$$21;
            }, (0, _Types.L)(traversePat(p$$5), (0, _Types.L)(traverseSynType(ty$$3), (0, _Types.L)())));
          }

        case 6:
          {
            return null;
          }
      }
    };

    return visitor.VisitPat(defaultTraverse$$8, pat$$1);
  };

  const traverseSynType = function traverseSynType(ty$$4) {
    const defaultTraverse$$9 = function defaultTraverse$$9(ty$$5) {
      var $target$$10, typeArgs, typeName, ty$$6, ty1$$1, ty2$$1, tys;

      switch (ty$$5.tag) {
        case 1:
          $target$$10 = 0;
          typeArgs = ty$$5.fields[2];
          typeName = ty$$5.fields[0];
          break;

        case 2:
          $target$$10 = 0;
          typeArgs = ty$$5.fields[3];
          typeName = ty$$5.fields[0];
          break;

        case 6:
          $target$$10 = 1;
          break;

        case 12:
          $target$$10 = 2;
          ty$$6 = ty$$5.fields[0];
          break;

        case 10:
          $target$$10 = 2;
          ty$$6 = ty$$5.fields[0];
          break;

        case 9:
          $target$$10 = 2;
          ty$$6 = ty$$5.fields[0];
          break;

        case 5:
          $target$$10 = 2;
          ty$$6 = ty$$5.fields[1];
          break;

        case 15:
          $target$$10 = 3;
          ty1$$1 = ty$$5.fields[0];
          ty2$$1 = ty$$5.fields[1];
          break;

        case 11:
          $target$$10 = 3;
          ty1$$1 = ty$$5.fields[0];
          ty2$$1 = ty$$5.fields[1];
          break;

        case 3:
          $target$$10 = 4;
          tys = ty$$5.fields[0];
          break;

        case 4:
          $target$$10 = 4;
          tys = ty$$5.fields[0];
          break;

        case 14:
          $target$$10 = 5;
          break;

        case 8:
          $target$$10 = 6;
          break;

        default:
          $target$$10 = 7;
      }

      switch ($target$$10) {
        case 0:
          {
            return (0, _List.tryPick)(traverseSynType, (0, _List.ofSeq)((0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Seq.singleton)(typeName), (0, _Seq.delay)(function () {
                return typeArgs;
              }));
            })));
          }

        case 1:
          {
            const ty2 = ty$$5.fields[1];
            const ty1 = ty$$5.fields[0];
            return (0, _List.tryPick)(traverseSynType, (0, _Types.L)(ty1, (0, _Types.L)(ty2, (0, _Types.L)())));
          }

        case 2:
          {
            return traverseSynType(ty$$6);
          }

        case 3:
          {
            return (0, _List.tryPick)(traverseSynType, (0, _Types.L)(ty1$$1, (0, _Types.L)(ty2$$1, (0, _Types.L)())));
          }

        case 4:
          {
            return (0, _List.tryPick)(traverseSynType, (0, _List.map)(function mapping$$15(tuple$$2) {
              return tuple$$2[1];
            }, tys));
          }

        case 5:
          {
            const expr$$7 = ty$$5.fields[0];
            return traverseSynExpr((0, _Types.L)())(expr$$7);
          }

        case 6:
          {
            return null;
          }

        case 7:
          {
            return null;
          }
      }
    };

    return visitor.VisitType(defaultTraverse$$9, ty$$4);
  };

  const normalizeMembersToDealWithPeculiaritiesOfGettersAndSetters = function normalizeMembersToDealWithPeculiaritiesOfGettersAndSetters(path$$6) {
    return function (traverseInherit) {
      return function (synMemberDefns) {
        return (0, _Seq.choose)(function chooser$$11(tupledArg$$4) {
          const matchValue$$8 = (0, _List.ofSeq)(tupledArg$$4[1]);
          var $target$$11, mem, info1, info2, lid1, lid2, mem1, mem2;

          if (matchValue$$8.tail == null) {
            $target$$11 = 2;
          } else if (matchValue$$8.tail.tail != null) {
            if (matchValue$$8.tail.head.tag === 1) {
              if (matchValue$$8.tail.head.fields[0].fields[7].tag === 7) {
                if (matchValue$$8.tail.head.fields[0].fields[7].fields[1] != null) {
                  if (matchValue$$8.tail.tail.tail == null) {
                    if (matchValue$$8.head.tag === 1) {
                      if (matchValue$$8.head.fields[0].fields[7].tag === 7) {
                        if (matchValue$$8.head.fields[0].fields[7].fields[1] != null) {
                          $target$$11 = 1;
                          info1 = matchValue$$8.head.fields[0].fields[7].fields[1];
                          info2 = matchValue$$8.tail.head.fields[0].fields[7].fields[1];
                          lid1 = matchValue$$8.head.fields[0].fields[7].fields[0];
                          lid2 = matchValue$$8.tail.head.fields[0].fields[7].fields[0];
                          mem1 = matchValue$$8.head;
                          mem2 = matchValue$$8.tail.head;
                        } else {
                          $target$$11 = 3;
                        }
                      } else {
                        $target$$11 = 3;
                      }
                    } else {
                      $target$$11 = 3;
                    }
                  } else {
                    $target$$11 = 3;
                  }
                } else {
                  $target$$11 = 3;
                }
              } else {
                $target$$11 = 3;
              }
            } else {
              $target$$11 = 3;
            }
          } else {
            $target$$11 = 0;
            mem = matchValue$$8.head;
          }

          switch ($target$$11) {
            case 0:
              {
                return dive(mem, tupledArg$$4[0], traverseSynMemberDefn(path$$6)(traverseInherit));
              }

            case 1:
              {
                return [tupledArg$$4[0], function () {
                  const matchValue$$9 = traverseSynMemberDefn(path$$6)(function (_arg2$$2) {
                    return null;
                  })(mem1);

                  if (matchValue$$9 != null) {
                    const x$$23 = matchValue$$9;
                    return x$$23;
                  } else {
                    return traverseSynMemberDefn(path$$6)(function (_arg3$$1) {
                      return null;
                    })(mem2);
                  }
                }];
              }

            case 2:
              {
                return null;
              }

            case 3:
              {
                return null;
              }
          }
        }, (0, _Map.groupBy)(function projection(x$$22) {
          return (0, _ast.SynMemberDefn$$get_Range)(x$$22);
        }, synMemberDefns, {
          Compare($x$$2, $y$$3) {
            return $x$$2.CompareTo($y$$3);
          }

        }));
      };
    };
  };

  const traverseSynTypeDefn = function traverseSynTypeDefn(path$$7) {
    return function (_arg2$$3) {
      const tydef = _arg2$$3;
      const tRange = tydef.fields[3];
      const synTypeDefnRepr = tydef.fields[1];
      const synMemberDefns$$1 = tydef.fields[2];
      const synComponentInfo = tydef.fields[0];
      const path$$8 = (0, _Types.L)(new TraverseStep(3, "TypeDefn", tydef), path$$7);
      const matchValue$$10 = visitor.VisitComponentInfo(synComponentInfo);

      if (matchValue$$10 == null) {
        return pick$$1(tRange, tydef, (0, _List.ofSeq)((0, _Seq.delay)(function () {
          var synTypeDefnKind, synMemberDefns$$2, _oRange, traverseInherit$$1, synTypeDefnSimpleRepr, _range$$59, synType$$2, m$$1;

          return (0, _Seq.append)(synTypeDefnRepr.tag === 0 ? (synTypeDefnKind = synTypeDefnRepr.fields[0], (synMemberDefns$$2 = synTypeDefnRepr.fields[1], (_oRange = synTypeDefnRepr.fields[2], (traverseInherit$$1 = function traverseInherit$$1(tupledArg$$5) {
            return visitor.VisitInheritSynMemberDefn(synComponentInfo, synTypeDefnKind, tupledArg$$5[0], synMemberDefns$$2, tupledArg$$5[1]);
          }, normalizeMembersToDealWithPeculiaritiesOfGettersAndSetters(path$$8)(traverseInherit$$1)(synMemberDefns$$2))))) : synTypeDefnRepr.tag === 1 ? (synTypeDefnSimpleRepr = synTypeDefnRepr.fields[0], (_range$$59 = synTypeDefnRepr.fields[1], synTypeDefnSimpleRepr.tag === 5 ? (synType$$2 = synTypeDefnSimpleRepr.fields[1], (m$$1 = synTypeDefnSimpleRepr.fields[2], (0, _Seq.singleton)(dive(synTypeDefnRepr, (0, _ast.SynTypeDefnRepr$$get_Range)(synTypeDefnRepr), function (_arg4$$1) {
            return visitor.VisitTypeAbbrev(synType$$2, m$$1);
          })))) : (null, (0, _Seq.empty)()))) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
            return normalizeMembersToDealWithPeculiaritiesOfGettersAndSetters(path$$8)(function (_arg5$$1) {
              return null;
            })(synMemberDefns$$1);
          }));
        })));
      } else {
        const x$$24 = (0, _Option.value)(matchValue$$10);
        return (0, _Option.some)(x$$24);
      }
    };
  };

  const traverseSynMemberDefn = function traverseSynMemberDefn(path$$9) {
    return function (traverseInherit$$2) {
      return function (m$$2) {
        const pick$$4 = function pick$$4(debugObj) {
          return (0, _Util.partialApply)(1, pick$$1, [(0, _ast.SynMemberDefn$$get_Range)(m$$2), debugObj]);
        };

        const path$$10 = (0, _Types.L)(new TraverseStep(4, "MemberDefn", m$$2), path$$9);

        switch (m$$2.tag) {
          case 1:
            {
              const synBinding = m$$2.fields[0];
              const _range$$61 = m$$2.fields[1];
              return traverseSynBinding(path$$10)(synBinding);
            }

          case 2:
            {
              const synSimplePatList = m$$2.fields[2];
              const _synAttributes$$2 = m$$2.fields[1];
              const _synAccessOption = m$$2.fields[0];
              const _range$$62 = m$$2.fields[4];
              const _identOption = m$$2.fields[3];
              return visitor.VisitSimplePats(synSimplePatList);
            }

          case 3:
            {
              const synType$$3 = m$$2.fields[0];
              const synExpr$$45 = m$$2.fields[1];
              const range$$6 = m$$2.fields[3];
              const _identOption$$1 = m$$2.fields[2];
              return pick$$4(m$$2)((0, _Types.L)(dive(null, (0, _ast.SynType$$get_Range)(synType$$3), function () {
                const matchValue$$11 = traverseInherit$$2([synType$$3, range$$6]);

                if (matchValue$$11 == null) {
                  return visitor.VisitImplicitInherit(traverseSynExpr(path$$10), synType$$3, synExpr$$45, range$$6);
                } else {
                  const x$$25 = matchValue$$11;
                  return x$$25;
                }
              }), (0, _Types.L)(dive(null, (0, _ast.SynExpr$$get_Range)(synExpr$$45), function () {
                return visitor.VisitImplicitInherit(traverseSynExpr(path$$10), synType$$3, synExpr$$45, range$$6);
              }), (0, _Types.L)())));
            }

          case 10:
            {
              const synExpr$$46 = m$$2.fields[8];
              const _xmlDoc = m$$2.fields[6];
              const _tyOpt = m$$2.fields[3];
              const _propKind = m$$2.fields[4];
              const _isStatic = m$$2.fields[1];
              const _id = m$$2.fields[2];
              const _attribs = m$$2.fields[0];
              const _access = m$$2.fields[7];
              return traverseSynExpr(path$$10)(synExpr$$46);
            }

          case 4:
            {
              const synBindingList$$2 = m$$2.fields[0];
              const range$$7 = m$$2.fields[3];
              const matchValue$$12 = visitor.VisitLetOrUse(path$$10, traverseSynBinding(path$$10), synBindingList$$2, range$$7);

              if (matchValue$$12 == null) {
                return pick$$4(m$$2)((0, _List.map)(function mapping$$16(x$$27) {
                  return dive(x$$27, (0, _ast.SynBinding$$get_RangeOfBindingAndRhs)(x$$27), traverseSynBinding(path$$10));
                }, synBindingList$$2));
              } else {
                const x$$26 = (0, _Option.value)(matchValue$$12);
                return (0, _Option.some)(x$$26);
              }
            }

          case 5:
            {
              const _synValSig = m$$2.fields[0];
              const _range$$63 = m$$2.fields[2];
              const _memberFlags = m$$2.fields[1];
              return null;
            }

          case 6:
            {
              const synType$$4 = m$$2.fields[0];
              const synMemberDefnsOption = m$$2.fields[1];
              const _range$$64 = m$$2.fields[2];
              const matchValue$$13 = visitor.VisitInterfaceSynMemberDefnType(synType$$4);

              if (matchValue$$13 == null) {
                if (synMemberDefnsOption != null) {
                  const x$$28 = synMemberDefnsOption;
                  return pick$$4(x$$28)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return normalizeMembersToDealWithPeculiaritiesOfGettersAndSetters(path$$10)(function (_arg6$$1) {
                      return null;
                    })(x$$28);
                  })));
                } else {
                  return null;
                }
              } else {
                const ok$$1 = matchValue$$13;
                return ok$$1;
              }
            }

          case 7:
            {
              const synType$$5 = m$$2.fields[0];
              const range$$8 = m$$2.fields[2];
              const _identOption$$2 = m$$2.fields[1];
              return traverseInherit$$2([synType$$5, range$$8]);
            }

          case 8:
            {
              const _synField = m$$2.fields[0];
              const _range$$65 = m$$2.fields[1];
              return null;
            }

          case 9:
            {
              const synTypeDefn = m$$2.fields[0];
              const _synAccessOption$$1 = m$$2.fields[1];
              const _range$$66 = m$$2.fields[2];
              return traverseSynTypeDefn(path$$10)(synTypeDefn);
            }

          default:
            {
              const _range$$60 = m$$2.fields[1];
              const _longIdent$$8 = m$$2.fields[0];
              return null;
            }
        }
      };
    };
  };

  const traverseSynMatchClause = function traverseSynMatchClause(path$$11) {
    return function (mc$$1) {
      const path$$12 = (0, _Types.L)(new TraverseStep(5, "MatchClause", mc$$1), path$$11);

      const defaultTraverse$$10 = function defaultTraverse$$10(mc$$2) {
        const all = mc$$2;
        const synPat$$2 = all.fields[0];
        const synExprOption = all.fields[1];
        const synExpr$$47 = all.fields[2];
        const _sequencePointInfoForTarget = all.fields[4];
        const _range$$67 = all.fields[3];
        return pick$$1((0, _ast.SynMatchClause$$get_Range)(all), all, (0, _List.append)((0, _Types.L)(dive(synPat$$2, (0, _ast.SynPat$$get_Range)(synPat$$2), traversePat), (0, _Types.L)()), (0, _List.map)(function mapping$$17(x$$29) {
          return dive(x$$29, (0, _ast.SynExpr$$get_Range)(x$$29), traverseSynExpr(path$$12));
        }, (0, _List.ofSeq)((0, _Seq.delay)(function () {
          var guard;
          return (0, _Seq.append)(synExprOption != null ? (guard = synExprOption, (0, _Seq.singleton)(guard)) : (null, (0, _Seq.empty)()), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)(synExpr$$47);
          }));
        })))));
      };

      return visitor.VisitMatchClause(defaultTraverse$$10, mc$$1);
    };
  };

  const traverseSynBinding = function traverseSynBinding(path$$13) {
    return function (b$$2) {
      const defaultTraverse$$11 = function defaultTraverse$$11(b$$3) {
        const path$$14 = (0, _Types.L)(new TraverseStep(6, "Binding", b$$3), path$$13);
        const synPat$$3 = b$$3.fields[7];
        const synExpr$$48 = b$$3.fields[9];
        const _synValData = b$$3.fields[6];
        const _synBindingReturnInfoOption = b$$3.fields[8];
        const _synBindingKind = b$$3.fields[1];
        const _synAttributes$$3 = b$$3.fields[4];
        const _synAccessOption$$2 = b$$3.fields[0];
        const _sequencePointInfoForBinding$$5 = b$$3.fields[11];
        const _range$$68 = b$$3.fields[10];
        const _preXmlDoc$$1 = b$$3.fields[5];
        return (0, _List.tryPick)(function chooser$$12(x$$30) {
          return x$$30;
        }, (0, _Types.L)(traversePat(synPat$$3), (0, _Types.L)(traverseSynExpr(path$$14)(synExpr$$48), (0, _Types.L)())));
      };

      return visitor.VisitBinding(defaultTraverse$$11, b$$2);
    };
  };

  if (parseTree.tag === 1) {
    const _sigFile = parseTree.fields[0];
    return null;
  } else {
    const l = parseTree.fields[0].fields[5];
    const fileRange = _range4.range0;
    return pick$$1(fileRange, l, (0, _List.map)(function mapping$$18(x$$31) {
      return dive(x$$31, (0, _ast.SynModuleOrNamespace$$get_Range)(x$$31), traverseSynModuleOrNamespace((0, _Types.L)()));
    }, l));
  }
}