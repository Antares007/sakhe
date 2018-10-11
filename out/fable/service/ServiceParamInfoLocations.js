"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9 = FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9;
exports.FSharpNoteworthyParamInfoLocations$$get_LongId = FSharpNoteworthyParamInfoLocations$$get_LongId;
exports.FSharpNoteworthyParamInfoLocations$$get_LongIdStartLocation = FSharpNoteworthyParamInfoLocations$$get_LongIdStartLocation;
exports.FSharpNoteworthyParamInfoLocations$$get_LongIdEndLocation = FSharpNoteworthyParamInfoLocations$$get_LongIdEndLocation;
exports.FSharpNoteworthyParamInfoLocations$$get_OpenParenLocation = FSharpNoteworthyParamInfoLocations$$get_OpenParenLocation;
exports.FSharpNoteworthyParamInfoLocations$$get_TupleEndLocations = FSharpNoteworthyParamInfoLocations$$get_TupleEndLocations;
exports.FSharpNoteworthyParamInfoLocations$$get_IsThereACloseParen = FSharpNoteworthyParamInfoLocations$$get_IsThereACloseParen;
exports.FSharpNoteworthyParamInfoLocations$$get_NamedParamNames = FSharpNoteworthyParamInfoLocations$$get_NamedParamNames;
exports.NoteworthyParamInfoLocationsImpl$$$isStaticArg = NoteworthyParamInfoLocationsImpl$$$isStaticArg;
exports.NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr = NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr;
exports.NoteworthyParamInfoLocationsImpl$$$digOutIdentFromStaticArg = NoteworthyParamInfoLocationsImpl$$$digOutIdentFromStaticArg;
exports.NoteworthyParamInfoLocationsImpl$$$getNamedParamName = NoteworthyParamInfoLocationsImpl$$$getNamedParamName;
exports.NoteworthyParamInfoLocationsImpl$$$getTypeName = NoteworthyParamInfoLocationsImpl$$$getTypeName;
exports.NoteworthyParamInfoLocationsImpl$$$handleSingleArg = NoteworthyParamInfoLocationsImpl$$$handleSingleArg;
exports.NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr = NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr;
exports.NoteworthyParamInfoLocationsImpl$$$$007CStaticParameters$007C_$007C = NoteworthyParamInfoLocationsImpl$$$$007CStaticParameters$007C_$007C;
exports.NoteworthyParamInfoLocationsImpl$$$traverseInput = NoteworthyParamInfoLocationsImpl$$$traverseInput;
exports.FSharpNoteworthyParamInfoLocations$$$Find$$721C2652 = FSharpNoteworthyParamInfoLocations$$$Find$$721C2652;
exports.NoteworthyParamInfoLocationsImpl$002EFindResult = exports.FSharpNoteworthyParamInfoLocations = void 0;

var _Array = require("../fable-core.2.0.3/Array");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Types = require("../fable-core.2.0.3/Types");

var _range2 = require("../fsharp/range");

var _ast = require("../fsharp/ast");

var _ServiceParseTreeWalk = require("./ServiceParseTreeWalk");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _Util = require("../fable-core.2.0.3/Util");

const FSharpNoteworthyParamInfoLocations = (0, _Types.declare)(function FSharpNoteworthyParamInfoLocations(longId, longIdRange, openParenLocation, tupleEndLocations, isThereACloseParen, namedParamNames) {
  const $this$$1 = this;
  $this$$1.longId = longId;
  $this$$1.longIdRange = longIdRange;
  $this$$1.openParenLocation = openParenLocation;
  $this$$1.isThereACloseParen = isThereACloseParen;
  $this$$1["tupleEndLocations@11"] = (0, _Array.ofList)(tupleEndLocations, Array);
  const namedParamNames$$1 = (0, _Array.ofList)(namedParamNames, Array);

  if ($this$$1["tupleEndLocations@11"].length === namedParamNames$$1.length) {
    $this$$1["namedParamNames@13-1"] = namedParamNames$$1;
  } else {
    $this$$1["namedParamNames@13-1"] = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.append)(namedParamNames$$1, (0, _Seq.delay)(function () {
        return (0, _Seq.singleton)(null);
      }));
    }), Array);
  }
});
exports.FSharpNoteworthyParamInfoLocations = FSharpNoteworthyParamInfoLocations;

function FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9(longId, longIdRange, openParenLocation, tupleEndLocations, isThereACloseParen, namedParamNames) {
  return this != null ? FSharpNoteworthyParamInfoLocations.call(this, longId, longIdRange, openParenLocation, tupleEndLocations, isThereACloseParen, namedParamNames) : new FSharpNoteworthyParamInfoLocations(longId, longIdRange, openParenLocation, tupleEndLocations, isThereACloseParen, namedParamNames);
}

function FSharpNoteworthyParamInfoLocations$$get_LongId(this$) {
  return this$.longId;
}

function FSharpNoteworthyParamInfoLocations$$get_LongIdStartLocation(this$$$1) {
  return (0, _range2.range$$get_Start)(this$$$1.longIdRange);
}

function FSharpNoteworthyParamInfoLocations$$get_LongIdEndLocation(this$$$2) {
  return (0, _range2.range$$get_End)(this$$$2.longIdRange);
}

function FSharpNoteworthyParamInfoLocations$$get_OpenParenLocation(this$$$3) {
  return this$$$3.openParenLocation;
}

function FSharpNoteworthyParamInfoLocations$$get_TupleEndLocations(this$$$4) {
  return this$$$4["tupleEndLocations@11"];
}

function FSharpNoteworthyParamInfoLocations$$get_IsThereACloseParen(this$$$5) {
  return this$$$5.isThereACloseParen;
}

function FSharpNoteworthyParamInfoLocations$$get_NamedParamNames(this$$$6) {
  return this$$$6["namedParamNames@13-1"];
}

function NoteworthyParamInfoLocationsImpl$$$isStaticArg(a) {
  var $target$$2;

  switch (a.tag) {
    case 13:
    case 14:
    case 15:
      $target$$2 = 0;
      break;

    case 0:
      $target$$2 = 1;
      break;

    default:
      $target$$2 = 2;
  }

  switch ($target$$2) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return true;
      }

    case 2:
      {
        return false;
      }
  }
}

function NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr(synExpr) {
  NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr: while (true) {
    var $target$$3, lid, lidRange;

    switch (synExpr.tag) {
      case 28:
        $target$$3 = 0;
        break;

      case 29:
        $target$$3 = 1;
        lid = synExpr.fields[1].fields[0];
        lidRange = synExpr.fields[3];
        break;

      case 31:
        $target$$3 = 1;
        lid = synExpr.fields[2].fields[0];
        lidRange = synExpr.fields[3];
        break;

      case 21:
        $target$$3 = 2;
        break;

      default:
        $target$$3 = 3;
    }

    switch ($target$$3) {
      case 0:
        {
          const id = synExpr.fields[0];
          return [(0, _Types.L)((0, _ast.Ident$$get_idText)(id), (0, _Types.L)()), (0, _ast.Ident$$get_idRange)(id)];
        }

      case 1:
        {
          return [(0, _ast.pathOfLid)(lid), lidRange];
        }

      case 2:
        {
          const synExpr$$1 = synExpr.fields[0];
          const _synTypeList = synExpr.fields[2];
          const _range = synExpr.fields[6];
          const _commas = synExpr.fields[3];
          synExpr = synExpr$$1;
          continue NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr;
        }

      case 3:
        {
          return null;
        }
    }
  }
}

const NoteworthyParamInfoLocationsImpl$002EFindResult = (0, _Types.declare)(function NoteworthyParamInfoLocationsImpl$002EFindResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NoteworthyParamInfoLocationsImpl$002EFindResult = NoteworthyParamInfoLocationsImpl$002EFindResult;

function NoteworthyParamInfoLocationsImpl$$$digOutIdentFromStaticArg(synType) {
  var $target$$4, id$$1, id$$2;

  if (synType.tag === 15) {
    if (synType.fields[0].tag === 0) {
      if (synType.fields[0].fields[0].fields[0].tail != null) {
        if (synType.fields[0].fields[0].fields[0].tail.tail == null) {
          $target$$4 = 0;
          id$$1 = synType.fields[0].fields[0].fields[0].head;
        } else {
          $target$$4 = 2;
        }
      } else {
        $target$$4 = 2;
      }
    } else {
      $target$$4 = 2;
    }
  } else if (synType.tag === 0) {
    if (synType.fields[0].fields[0].tail != null) {
      if (synType.fields[0].fields[0].tail.tail == null) {
        $target$$4 = 1;
        id$$2 = synType.fields[0].fields[0].head;
      } else {
        $target$$4 = 2;
      }
    } else {
      $target$$4 = 2;
    }
  } else {
    $target$$4 = 2;
  }

  switch ($target$$4) {
    case 0:
      {
        return (0, _ast.Ident$$get_idText)(id$$1);
      }

    case 1:
      {
        return (0, _ast.Ident$$get_idText)(id$$2);
      }

    case 2:
      {
        return null;
      }
  }
}

function NoteworthyParamInfoLocationsImpl$$$getNamedParamName(e) {
  var op$$2, n$$2, _ref, _range$$3, _lidrange, op, n, _range$$1;

  var $target$$5, _range$$2, n$$1, op$$1;

  if (e.tag === 20) {
    if (e.fields[0] === 1) {
      if (e.fields[2].tag === 20) {
        if (e.fields[2].fields[0] === 1) {
          if (e.fields[2].fields[1]) {
            if (e.fields[2].fields[2].tag === 28) {
              if (e.fields[2].fields[3].tag === 28) {
                if (op = e.fields[2].fields[2].fields[0], (n = e.fields[2].fields[3].fields[0], (_range$$1 = e.fields[2].fields[4], (0, _ast.Ident$$get_idText)(op) === "op_Equality"))) {
                  $target$$5 = 0;
                  _range$$2 = e.fields[2].fields[4];
                  n$$1 = e.fields[2].fields[3].fields[0];
                  op$$1 = e.fields[2].fields[2].fields[0];
                } else {
                  $target$$5 = 1;
                }
              } else {
                $target$$5 = 1;
              }
            } else {
              $target$$5 = 1;
            }
          } else {
            $target$$5 = 1;
          }
        } else {
          $target$$5 = 1;
        }
      } else {
        $target$$5 = 1;
      }
    } else {
      $target$$5 = 1;
    }
  } else {
    $target$$5 = 1;
  }

  switch ($target$$5) {
    case 0:
      {
        return (0, _ast.Ident$$get_idText)(n$$1);
      }

    case 1:
      {
        var $target$$6, _lidrange$$1, _range$$4, _ref$$1, n$$3, op$$3;

        if (e.tag === 20) {
          if (e.fields[0] === 1) {
            if (e.fields[2].tag === 20) {
              if (e.fields[2].fields[0] === 1) {
                if (e.fields[2].fields[1]) {
                  if (e.fields[2].fields[2].tag === 28) {
                    if (e.fields[2].fields[3].tag === 29) {
                      if (e.fields[2].fields[3].fields[0]) {
                        if (e.fields[2].fields[3].fields[1].fields[0].tail != null) {
                          if (e.fields[2].fields[3].fields[1].fields[0].tail.tail == null) {
                            if (op$$2 = e.fields[2].fields[2].fields[0], (n$$2 = e.fields[2].fields[3].fields[1].fields[0].head, (_ref = e.fields[2].fields[3].fields[2], (_range$$3 = e.fields[2].fields[4], (_lidrange = e.fields[2].fields[3].fields[3], (0, _ast.Ident$$get_idText)(op$$2) === "op_Equality"))))) {
                              $target$$6 = 0;
                              _lidrange$$1 = e.fields[2].fields[3].fields[3];
                              _range$$4 = e.fields[2].fields[4];
                              _ref$$1 = e.fields[2].fields[3].fields[2];
                              n$$3 = e.fields[2].fields[3].fields[1].fields[0].head;
                              op$$3 = e.fields[2].fields[2].fields[0];
                            } else {
                              $target$$6 = 1;
                            }
                          } else {
                            $target$$6 = 1;
                          }
                        } else {
                          $target$$6 = 1;
                        }
                      } else {
                        $target$$6 = 1;
                      }
                    } else {
                      $target$$6 = 1;
                    }
                  } else {
                    $target$$6 = 1;
                  }
                } else {
                  $target$$6 = 1;
                }
              } else {
                $target$$6 = 1;
              }
            } else {
              $target$$6 = 1;
            }
          } else {
            $target$$6 = 1;
          }
        } else {
          $target$$6 = 1;
        }

        switch ($target$$6) {
          case 0:
            {
              return (0, _ast.Ident$$get_idText)(n$$3);
            }

          case 1:
            {
              return null;
            }
        }
      }
  }
}

function NoteworthyParamInfoLocationsImpl$$$getTypeName(synType$$1) {
  if (synType$$1.tag === 0) {
    const ids = synType$$1.fields[0].fields[0];
    return (0, _ast.pathOfLid)(ids);
  } else {
    return (0, _Types.L)("", (0, _Types.L)());
  }
}

function NoteworthyParamInfoLocationsImpl$$$handleSingleArg(traverseSynExpr, pos, synExpr$$2, parenRange, rpRangeOpt) {
  const inner = traverseSynExpr(synExpr$$2);

  if (inner == null) {
    if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(parenRange, pos)) {
      return [new NoteworthyParamInfoLocationsImpl$002EFindResult(0, "Found", (0, _range2.range$$get_Start)(parenRange), (0, _Types.L)([(0, _range2.range$$get_End)(parenRange), NoteworthyParamInfoLocationsImpl$$$getNamedParamName(synExpr$$2)], (0, _Types.L)()), rpRangeOpt != null), null];
    } else {
      return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), null];
    }
  } else {
    return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), null];
  }
}

function NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr(traverseSynExpr$$1, pos$$1, expr) {
  var copyOfStruct, copyOfStruct$$1;

  var $target$$15, _lpRange, _tupleRange, commaRanges, parenRange$$1, rpRangeOpt$$1, synExpr$$3, synExprList;

  const activePatternResult60183 = (0, _ast.$007CSynExprParen$007C_$007C)(expr);

  if (activePatternResult60183 != null) {
    if (activePatternResult60183[0].tag === 4) {
      $target$$15 = 0;
      _lpRange = activePatternResult60183[1];
      _tupleRange = activePatternResult60183[0].fields[2];
      commaRanges = activePatternResult60183[0].fields[1];
      parenRange$$1 = activePatternResult60183[3];
      rpRangeOpt$$1 = activePatternResult60183[2];
      synExpr$$3 = activePatternResult60183[0];
      synExprList = activePatternResult60183[0].fields[0];
    } else {
      $target$$15 = 1;
    }
  } else {
    $target$$15 = 1;
  }

  switch ($target$$15) {
    case 0:
      {
        const inner$$1 = traverseSynExpr$$1(synExpr$$3);

        if (inner$$1 == null) {
          if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(parenRange$$1, pos$$1)) {
            const commasAndCloseParen = (0, _List.map2)(function mapping(e$$1, c) {
              return [(0, _range2.range$$get_End)(c), NoteworthyParamInfoLocationsImpl$$$getNamedParamName(e$$1)];
            }, synExprList, (0, _List.append)(commaRanges, (0, _Types.L)(parenRange$$1, (0, _Types.L)())));
            const r = new NoteworthyParamInfoLocationsImpl$002EFindResult(0, "Found", (0, _range2.range$$get_Start)(parenRange$$1), commasAndCloseParen, rpRangeOpt$$1 != null);
            return [r, null];
          } else {
            return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), null];
          }
        } else {
          return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), null];
        }
      }

    case 1:
      {
        var $target$$16, parenRange$$2, rpRangeOpt$$2, synExpr$$4;
        const activePatternResult60181 = (0, _ast.$007CSynExprParen$007C_$007C)(expr);

        if (activePatternResult60181 != null) {
          const activePatternResult60182 = (0, _ast.$007CSynExprParen$007C_$007C)(activePatternResult60181[0]);

          if (activePatternResult60182 != null) {
            if (activePatternResult60182[0].tag === 4) {
              $target$$16 = 0;
              parenRange$$2 = activePatternResult60181[3];
              rpRangeOpt$$2 = activePatternResult60181[2];
              synExpr$$4 = activePatternResult60181[0];
            } else {
              $target$$16 = 1;
            }
          } else {
            $target$$16 = 1;
          }
        } else {
          $target$$16 = 1;
        }

        switch ($target$$16) {
          case 0:
            {
              return NoteworthyParamInfoLocationsImpl$$$handleSingleArg(traverseSynExpr$$1, pos$$1, synExpr$$4, parenRange$$2, rpRangeOpt$$2);
            }

          case 1:
            {
              var $target$$17, _parenRange, synExpr$$5;

              const activePatternResult60179 = (0, _ast.$007CSynExprParen$007C_$007C)(expr);

              if (activePatternResult60179 != null) {
                if ((0, _ast.$007CSynExprParen$007C_$007C)(activePatternResult60179[0]) != null) {
                  $target$$17 = 0;
                  _parenRange = activePatternResult60179[3];
                  synExpr$$5 = activePatternResult60179[0];
                } else {
                  $target$$17 = 1;
                }
              } else {
                $target$$17 = 1;
              }

              switch ($target$$17) {
                case 0:
                  {
                    const patternInput = NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr(traverseSynExpr$$1, pos$$1, synExpr$$5);
                    return [patternInput[0], null];
                  }

                case 1:
                  {
                    const activePatternResult60178 = (0, _ast.$007CSynExprParen$007C_$007C)(expr);

                    if (activePatternResult60178 != null) {
                      return NoteworthyParamInfoLocationsImpl$$$handleSingleArg(traverseSynExpr$$1, pos$$1, activePatternResult60178[0], activePatternResult60178[3], activePatternResult60178[2]);
                    } else {
                      var $target$$18, _debugStr, range, unitRange, e$$2;

                      if (expr.tag === 57) {
                        $target$$18 = 0;
                        _debugStr = expr.fields[0];
                        range = expr.fields[1];
                      } else if (expr.tag === 2) {
                        if (expr.fields[0].tag === 0) {
                          $target$$18 = 1;
                          unitRange = expr.fields[1];
                        } else {
                          $target$$18 = 2;
                          e$$2 = expr;
                        }
                      } else {
                        $target$$18 = 2;
                        e$$2 = expr;
                      }

                      switch ($target$$18) {
                        case 0:
                          {
                            if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(range, pos$$1)) {
                              const r$$2 = new NoteworthyParamInfoLocationsImpl$002EFindResult(0, "Found", (0, _range2.range$$get_Start)(range), (0, _Types.L)([(0, _range2.range$$get_End)(range), null], (0, _Types.L)()), false);
                              return [r$$2, null];
                            } else {
                              return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), null];
                            }
                          }

                        case 1:
                          {
                            if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(unitRange, pos$$1)) {
                              const r$$3 = new NoteworthyParamInfoLocationsImpl$002EFindResult(0, "Found", (0, _range2.range$$get_Start)(unitRange), (0, _Types.L)([(0, _range2.range$$get_End)(unitRange), null], (0, _Types.L)()), true);
                              return [r$$3, null];
                            } else {
                              return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), null];
                            }
                          }

                        case 2:
                          {
                            const inner$$2 = traverseSynExpr$$1(e$$2);

                            if (inner$$2 == null) {
                              if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)((0, _ast.SynExpr$$get_Range)(e$$2), pos$$1)) {
                                return [new NoteworthyParamInfoLocationsImpl$002EFindResult(0, "Found", (copyOfStruct = (0, _ast.SynExpr$$get_Range)(e$$2), (0, _range2.range$$get_Start)(copyOfStruct)), (0, _Types.L)([(copyOfStruct$$1 = (0, _ast.SynExpr$$get_Range)(e$$2), (0, _range2.range$$get_End)(copyOfStruct$$1)), null], (0, _Types.L)()), false), (0, _Option.some)(inner$$2)];
                              } else {
                                return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), (0, _Option.some)(inner$$2)];
                              }
                            } else {
                              return [new NoteworthyParamInfoLocationsImpl$002EFindResult(1, "NotFound"), (0, _Option.some)(inner$$2)];
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

function NoteworthyParamInfoLocationsImpl$$$$007CStaticParameters$007C_$007C(pos$$2, synType$$2) {
  var $target$$19, _pf, args, closemOpt, commas, lid$$2, lidwd, openm, wholem;

  if (synType$$2.tag === 1) {
    if (synType$$2.fields[0].tag === 0) {
      if (synType$$2.fields[1] != null) {
        $target$$19 = 0;
        _pf = synType$$2.fields[5];
        args = synType$$2.fields[2];
        closemOpt = synType$$2.fields[4];
        commas = synType$$2.fields[3];
        lid$$2 = synType$$2.fields[0].fields[0].fields[0];
        lidwd = synType$$2.fields[0].fields[0];
        openm = synType$$2.fields[1];
        wholem = synType$$2.fields[6];
      } else {
        $target$$19 = 1;
      }
    } else {
      $target$$19 = 1;
    }
  } else {
    $target$$19 = 1;
  }

  switch ($target$$19) {
    case 0:
      {
        const lidm = (0, _ast.LongIdentWithDots$$get_Range)(lidwd);
        const betweenTheBrackets = (0, _range2.mkRange)((0, _range2.range$$get_FileName)(wholem), (0, _range2.range$$get_Start)(openm), (0, _range2.range$$get_End)(wholem));

        if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(betweenTheBrackets, pos$$2) ? (0, _List.forAll)(NoteworthyParamInfoLocationsImpl$$$isStaticArg, args) : false) {
          const commasAndCloseParen$$1 = (0, _List.append)((0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.map)(function (c$$1) {
              return (0, _range2.range$$get_End)(c$$1);
            }, commas);
          })), (0, _Types.L)((0, _range2.range$$get_End)(wholem), (0, _Types.L)()));
          return FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9((0, _ast.pathOfLid)(lid$$2), lidm, (0, _range2.range$$get_Start)(openm), commasAndCloseParen$$1, closemOpt != null, (0, _List.map)(NoteworthyParamInfoLocationsImpl$$$digOutIdentFromStaticArg, args));
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

function NoteworthyParamInfoLocationsImpl$$$traverseInput(pos$$3, parseTree) {
  return (0, _ServiceParseTreeWalk.Traverse)(pos$$3, parseTree, (0, _Util.extend)((0, _ServiceParseTreeWalk.AstVisitorBase$00601$$$$002Ector)(), {
    VisitExpr(_path, traverseSynExpr$$2, defaultTraverse, expr$$1) {
      var loc, copyOfStruct$$2, wholem$$1, synExpr$$7, openm$$1, op$$4;
      const expr$$2 = expr$$1;
      var $target$$20, synExpr$$8, synType$$4, op$$5, openm$$2, synExpr$$9, wholem$$2;

      if (expr$$2.tag === 8) {
        $target$$20 = 0;
        synExpr$$8 = expr$$2.fields[2];
        synType$$4 = expr$$2.fields[1];
      } else if (expr$$2.tag === 20) {
        if (expr$$2.fields[2].tag === 20) {
          if (expr$$2.fields[2].fields[1]) {
            if (expr$$2.fields[2].fields[2].tag === 28) {
              if (expr$$2.fields[3].tag === 57) {
                if (wholem$$1 = expr$$2.fields[4], (synExpr$$7 = expr$$2.fields[2].fields[3], (openm$$1 = expr$$2.fields[2].fields[4], (op$$4 = expr$$2.fields[2].fields[2].fields[0], (0, _ast.Ident$$get_idText)(op$$4) === "op_LessThan")))) {
                  $target$$20 = 1;
                  op$$5 = expr$$2.fields[2].fields[2].fields[0];
                  openm$$2 = expr$$2.fields[2].fields[4];
                  synExpr$$9 = expr$$2.fields[2].fields[3];
                  wholem$$2 = expr$$2.fields[4];
                } else {
                  $target$$20 = 2;
                }
              } else {
                $target$$20 = 2;
              }
            } else {
              $target$$20 = 2;
            }
          } else {
            $target$$20 = 2;
          }
        } else {
          $target$$20 = 2;
        }
      } else {
        $target$$20 = 2;
      }

      switch ($target$$20) {
        case 0:
          {
            const patternInput$$1 = NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr(traverseSynExpr$$2, pos$$3, synExpr$$8);
            const matchValue = [patternInput$$1[0], patternInput$$1[1]];

            if (matchValue[0].tag === 1) {
              if (matchValue[1] != null) {
                const cache = (0, _Option.value)(matchValue[1]);
                return cache;
              } else {
                const activePatternResult60193 = NoteworthyParamInfoLocationsImpl$$$$007CStaticParameters$007C_$007C(pos$$3, synType$$4);
                return activePatternResult60193 != null ? (loc = activePatternResult60193, loc) : traverseSynExpr$$2(synExpr$$8);
              }
            } else {
              const parenLoc = matchValue[0].fields[0];
              const isThereACloseParen$$1 = matchValue[0].fields[2];
              const args$$1 = matchValue[0].fields[1];
              const typeName = NoteworthyParamInfoLocationsImpl$$$getTypeName(synType$$4);
              return FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9(typeName, (0, _ast.SynType$$get_Range)(synType$$4), parenLoc, (0, _List.map)(function mapping$$1(tuple) {
                return tuple[0];
              }, args$$1), isThereACloseParen$$1, (0, _List.map)(function mapping$$2(tuple$$1) {
                return tuple$$1[1];
              }, args$$1));
            }
          }

        case 1:
          {
            const fResult = traverseSynExpr$$2(synExpr$$9);

            if (fResult != null) {
              return fResult;
            } else {
              const typeArgsm = (0, _range2.mkRange)((0, _range2.range$$get_FileName)(openm$$2), (0, _range2.range$$get_Start)(openm$$2), (0, _range2.range$$get_End)(wholem$$2));

              if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(typeArgsm, pos$$3)) {
                const matchValue$$1 = NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr(synExpr$$9);

                if (matchValue$$1 == null) {
                  return null;
                } else {
                  const lidRange$$1 = matchValue$$1[1];
                  const lid$$3 = matchValue$$1[0];
                  return FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9(lid$$3, lidRange$$1, (copyOfStruct$$2 = (0, _ast.Ident$$get_idRange)(op$$5), (0, _range2.range$$get_Start)(copyOfStruct$$2)), (0, _Types.L)((0, _range2.range$$get_End)(wholem$$2), (0, _Types.L)()), false, (0, _Types.L)());
                }
              } else {
                return null;
              }
            }
          }

        case 2:
          {
            switch (expr$$2.tag) {
              case 20:
                {
                  const synExpr2 = expr$$2.fields[3];
                  const synExpr$$10 = expr$$2.fields[2];
                  const isInfix = expr$$2.fields[1];
                  const _range$$5 = expr$$2.fields[4];

                  const _exprAtomicFlag = expr$$2.fields[0] | 0;

                  const fResult$$1 = traverseSynExpr$$2(synExpr$$10);

                  if (fResult$$1 != null) {
                    return fResult$$1;
                  } else {
                    const patternInput$$2 = NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr(traverseSynExpr$$2, pos$$3, synExpr2);
                    const matchValue$$2 = [patternInput$$2[0], patternInput$$2[1]];

                    if (matchValue$$2[0].tag === 1) {
                      if (matchValue$$2[1] != null) {
                        const cache$$1 = (0, _Option.value)(matchValue$$2[1]);
                        return cache$$1;
                      } else {
                        return traverseSynExpr$$2(synExpr2);
                      }
                    } else {
                      const parenLoc$$1 = matchValue$$2[0].fields[0];
                      const isThereACloseParen$$2 = matchValue$$2[0].fields[2];
                      const args$$2 = matchValue$$2[0].fields[1];
                      const matchValue$$3 = NoteworthyParamInfoLocationsImpl$$$digOutIdentFromFuncExpr(synExpr$$10);

                      if (matchValue$$3 == null) {
                        return null;
                      } else {
                        const lidRange$$2 = matchValue$$3[1];
                        const lid$$4 = matchValue$$3[0];
                        return isInfix ? null : FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9(lid$$4, lidRange$$2, parenLoc$$1, (0, _List.map)(function mapping$$3(tuple$$2) {
                          return tuple$$2[0];
                        }, args$$2), isThereACloseParen$$2, (0, _List.map)(function mapping$$4(tuple$$3) {
                          return tuple$$3[1];
                        }, args$$2));
                      }
                    }
                  }
                }

              case 21:
                {
                  const wholem$$3 = expr$$2.fields[6];
                  const tyArgs = expr$$2.fields[2];
                  const synExpr$$11 = expr$$2.fields[0];
                  const openm$$3 = expr$$2.fields[1];
                  const commas$$1 = expr$$2.fields[3];
                  const closemOpt$$1 = expr$$2.fields[4];
                  const matchValue$$4 = traverseSynExpr$$2(synExpr$$11);

                  if (matchValue$$4 == null) {
                    const typeArgsm$$1 = (0, _range2.mkRange)((0, _range2.range$$get_FileName)(openm$$3), (0, _range2.range$$get_Start)(openm$$3), (0, _range2.range$$get_End)(wholem$$3));

                    if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(typeArgsm$$1, pos$$3) ? (0, _List.forAll)(NoteworthyParamInfoLocationsImpl$$$isStaticArg, tyArgs) : false) {
                      const commasAndCloseParen$$2 = (0, _List.append)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                        return (0, _Seq.map)(function (c$$2) {
                          return (0, _range2.range$$get_End)(c$$2);
                        }, commas$$1);
                      })), (0, _Types.L)((0, _range2.range$$get_End)(wholem$$3), (0, _Types.L)()));
                      const r$$5 = FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9((0, _Types.L)("dummy", (0, _Types.L)()), (0, _ast.SynExpr$$get_Range)(synExpr$$11), (0, _range2.range$$get_Start)(openm$$3), commasAndCloseParen$$2, closemOpt$$1 != null, (0, _List.map)(NoteworthyParamInfoLocationsImpl$$$digOutIdentFromStaticArg, tyArgs));
                      return r$$5;
                    } else {
                      return null;
                    }
                  } else {
                    const r$$4 = matchValue$$4;
                    return r$$4;
                  }
                }

              default:
                {
                  return defaultTraverse(expr$$2);
                }
            }
          }
      }
    },

    VisitTypeAbbrev(tyAbbrevRhs, _m) {
      var activePatternResult60199, loc$$1;
      return activePatternResult60199 = NoteworthyParamInfoLocationsImpl$$$$007CStaticParameters$007C_$007C(pos$$3, tyAbbrevRhs), activePatternResult60199 != null ? (loc$$1 = activePatternResult60199, loc$$1) : null;
    },

    VisitImplicitInherit(defaultTraverse$$1, ty, expr$$3, m) {
      const matchValue$$5 = defaultTraverse$$1(expr$$3);

      if (matchValue$$5 == null) {
        const inheritm = (0, _range2.mkRange)((0, _range2.range$$get_FileName)(m), (0, _range2.range$$get_Start)(m), (0, _range2.range$$get_End)(m));

        if ((0, _ServiceParseTreeWalk.rangeContainsPosEdgesExclusive)(inheritm, pos$$3)) {
          const patternInput$$3 = NoteworthyParamInfoLocationsImpl$$$searchSynArgExpr(defaultTraverse$$1, pos$$3, expr$$3);

          if (patternInput$$3[0].tag === 1) {
            return null;
          } else {
            const parenLoc$$2 = patternInput$$3[0].fields[0];
            const isThereACloseParen$$3 = patternInput$$3[0].fields[2];
            const args$$3 = patternInput$$3[0].fields[1];
            const typeName$$1 = NoteworthyParamInfoLocationsImpl$$$getTypeName(ty);
            const r$$7 = FSharpNoteworthyParamInfoLocations$$$$002Ector$$3B023AB9(typeName$$1, (0, _ast.SynType$$get_Range)(ty), parenLoc$$2, (0, _List.map)(function mapping$$5(tuple$$4) {
              return tuple$$4[0];
            }, args$$3), isThereACloseParen$$3, (0, _List.map)(function mapping$$6(tuple$$5) {
              return tuple$$5[1];
            }, args$$3));
            return r$$7;
          }
        } else {
          return null;
        }
      } else {
        const r$$6 = matchValue$$5;
        return r$$6;
      }
    }

  }));
}

function FSharpNoteworthyParamInfoLocations$$$Find$$721C2652(pos$$4, parseTree$$1) {
  const matchValue$$6 = NoteworthyParamInfoLocationsImpl$$$traverseInput(pos$$4, parseTree$$1);

  if (matchValue$$6 != null) {
    const r$$8 = matchValue$$6;
    const nwpl = matchValue$$6;
    nwpl;
    return r$$8;
  } else {
    return null;
  }
}