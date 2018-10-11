"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyAndFixupFormatTypar = copyAndFixupFormatTypar;
exports.mkFlexibleFormatTypar = mkFlexibleFormatTypar;
exports.mkFlexibleIntFormatTypar = mkFlexibleIntFormatTypar;
exports.mkFlexibleDecimalFormatTypar = mkFlexibleDecimalFormatTypar;
exports.mkFlexibleFloatFormatTypar = mkFlexibleFloatFormatTypar;
exports.isDigit = isDigit;
exports.newInfo = newInfo;
exports.parseFormatStringInternal = parseFormatStringInternal;
exports.ParseFormatString = ParseFormatString;
exports.TryCountFormatStringArguments = TryCountFormatStringArguments;
exports.FormatInfoRegister = exports.lowestDefaultPriority = exports.FormatItem = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _tast = require("./tast");

var _ConstraintSolver = require("./ConstraintSolver");

var _List = require("../fable-core.2.0.3/List");

var _ast = require("./ast");

var _TcGlobals = require("./TcGlobals");

var _range = require("./range");

var _Util = require("../fable-core.2.0.3/Util");

var _String = require("../fable-core.2.0.3/String");

var _FSComp = require("../codegen/FSComp");

var _Char = require("../fable-core.2.0.3/Char");

var _Option = require("../fable-core.2.0.3/Option");

var _TastOps = require("./TastOps");

var _illib = require("../absil/illib");

const FormatItem = (0, _Types.declare)(function FormatItem(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FormatItem = FormatItem;

function copyAndFixupFormatTypar(m, tp) {
  const patternInput = (0, _ConstraintSolver.FreshenAndFixupTypars)(m, new _tast.TyparRigidity(3, "Flexible"), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)(tp, (0, _Types.L)()));
  return (0, _List.head)(patternInput[2]);
}

const lowestDefaultPriority = 0;
exports.lowestDefaultPriority = lowestDefaultPriority;

function mkFlexibleFormatTypar(m$$1, tys, dflt) {
  const tp$$1 = (0, _tast.NewTypar)(new _tast.TyparKind(0, "Type"), new _tast.TyparRigidity(0, "Rigid"), new _ast.SynTypar(0, "Typar", (0, _ast.mkSynId)(m$$1, "fmt"), new _ast.TyparStaticReq(1, "HeadTypeStaticReq"), true), false, new _tast.TyparDynamicReq(1, "Yes"), (0, _Types.L)(), false, false);
  (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp$$1, (0, _Types.L)(new _tast.TyparConstraint(6, "SimpleChoice", tys, m$$1), (0, _Types.L)(new _tast.TyparConstraint(1, "DefaultsTo", lowestDefaultPriority, dflt, m$$1), (0, _Types.L)())));
  return copyAndFixupFormatTypar(m$$1, tp$$1);
}

function mkFlexibleIntFormatTypar(g, m$$2) {
  return mkFlexibleFormatTypar(m$$2, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_byte_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int16_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int32_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int64_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_uint16_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_uint32_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_uint64_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_nativeint_ty)(g), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_unativeint_ty)(g), (0, _Types.L)())))))))))), (0, _TcGlobals.TcGlobals$$get_int_ty)(g));
}

function mkFlexibleDecimalFormatTypar(g$$1, m$$3) {
  return mkFlexibleFormatTypar(m$$3, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$1), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$1));
}

function mkFlexibleFloatFormatTypar(g$$2, m$$4) {
  return mkFlexibleFormatTypar(m$$4, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_float_ty)(g$$2), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_float32_ty)(g$$2), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$2), (0, _Types.L)()))), (0, _TcGlobals.TcGlobals$$get_float_ty)(g$$2));
}

function isDigit(c) {
  if ("0" <= c) {
    return c <= "9";
  } else {
    return false;
  }
}

const FormatInfoRegister = (0, _Types.declare)(function FormatInfoRegister(arg1, arg2, arg3, arg4) {
  this.leftJustify = arg1;
  this.numPrefixIfPos = arg2;
  this.addZeros = arg3;
  this.precision = arg4;
}, _Types.Record);
exports.FormatInfoRegister = FormatInfoRegister;

function newInfo() {
  return new FormatInfoRegister(false, null, false, false);
}

function parseFormatStringInternal(m$$5, g$$3, context, fmt, bty, cty) {
  let patternInput$$1;

  if (context == null) {
    patternInput$$1 = [1, fmt];
  } else {
    const context$$1 = context;
    const length = context$$1.NormalizedSource.length | 0;

    if ((0, _range.range$$get_EndLine)(m$$5) < context$$1.LineEndPositions.length) {
      const startIndex = context$$1.LineEndPositions[(0, _range.range$$get_StartLine)(m$$5) - 1] + (0, _range.range$$get_StartColumn)(m$$5) | 0;
      const endIndex = context$$1.LineEndPositions[(0, _range.range$$get_EndLine)(m$$5) - 1] + (0, _range.range$$get_EndColumn)(m$$5) - 1 | 0;
      patternInput$$1 = (startIndex < length - 3 ? context$$1.NormalizedSource.slice(startIndex, startIndex + 2 + 1) === "\"\"\"" : false) ? [3, context$$1.NormalizedSource.slice(startIndex + 3, endIndex - 3 + 1)] : (startIndex < length - 2 ? context$$1.NormalizedSource.slice(startIndex, startIndex + 1 + 1) === "@\"" : false) ? [2, context$$1.NormalizedSource.slice(startIndex + 2, endIndex - 1 + 1)] : [1, context$$1.NormalizedSource.slice(startIndex + 1, endIndex - 1 + 1)];
    } else {
      patternInput$$1 = [1, fmt];
    }
  }

  const len = patternInput$$1[1].length | 0;
  const specifierLocations = [];

  const parseLoop = function parseLoop(acc, tupledArg) {
    var copyOfStruct$$1;

    parseLoop: while (true) {
      if (tupledArg[0] >= len) {
        const argtys = (0, _List.forAll)(function predicate(tupledArg$$1) {
          return (0, _Util.equals)(tupledArg$$1[0], null);
        }, acc) ? (0, _List.reverse)((0, _List.map)(function mapping(tuple) {
          return tuple[1];
        }, acc)) : (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forPositionalSpecifiersNotPermitted)());
        return argtys;
      } else if ((0, _Char.isSurrogatePair)(patternInput$$1[1], tupledArg[0])) {
        acc = acc;
        tupledArg = [tupledArg[0] + 2, tupledArg[1], tupledArg[2] + 2];
        continue parseLoop;
      } else {
        const c$$1 = patternInput$$1[1][tupledArg[0]];

        switch (c$$1) {
          case "\n":
            {
              acc = acc;
              tupledArg = [tupledArg[0] + 1, tupledArg[1] + 1, 0];
              continue parseLoop;
            }

          case "%":
            {
              const startCol = tupledArg[2] | 0;
              const relCol$$1 = tupledArg[2] + 1 | 0;
              const i$$1 = tupledArg[0] + 1 | 0;

              if (i$$1 >= len) {
                (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forMissingFormatSpecifier)());
              }

              const info = newInfo();

              const flags = function flags(i$$2) {
                flags: while (true) {
                  if (i$$2 >= len) {
                    (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forMissingFormatSpecifier)());
                  }

                  const matchValue = patternInput$$1[1][i$$2];

                  switch (matchValue) {
                    case " ":
                      {
                        if (!(0, _Util.equals)(info.numPrefixIfPos, null)) {
                          (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forPrefixFlagSpacePlusSetTwice)());
                        }

                        info.numPrefixIfPos = " ";
                        i$$2 = i$$2 + 1;
                        continue flags;
                      }

                    case "#":
                      {
                        return (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forHashSpecifierIsInvalid)()) | 0;
                      }

                    case "+":
                      {
                        if (!(0, _Util.equals)(info.numPrefixIfPos, null)) {
                          (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forPrefixFlagSpacePlusSetTwice)());
                        }

                        info.numPrefixIfPos = "+";
                        i$$2 = i$$2 + 1;
                        continue flags;
                      }

                    case "-":
                      {
                        if (info.leftJustify) {
                          (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forFlagSetTwice$$Z721C83C5)("-"));
                        }

                        info.leftJustify = true;
                        i$$2 = i$$2 + 1;
                        continue flags;
                      }

                    case "0":
                      {
                        if (info.addZeros) {
                          (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forFlagSetTwice$$Z721C83C5)("0"));
                        }

                        info.addZeros = true;
                        i$$2 = i$$2 + 1;
                        continue flags;
                      }

                    default:
                      {
                        return i$$2 | 0;
                      }
                  }
                }
              };

              const digitsPrecision = function digitsPrecision(i$$3) {
                var c$$2;

                digitsPrecision: while (true) {
                  if (i$$3 >= len) {
                    (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadPrecision)());
                  }

                  const matchValue$$1 = patternInput$$1[1][i$$3];

                  if (c$$2 = matchValue$$1, isDigit(c$$2)) {
                    const c$$3 = matchValue$$1;
                    i$$3 = i$$3 + 1;
                    continue digitsPrecision;
                  } else {
                    return i$$3 | 0;
                  }
                }
              };

              const precision = function precision(i$$4) {
                var c$$4;

                if (i$$4 >= len) {
                  (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadWidth)());
                }

                const matchValue$$2 = patternInput$$1[1][i$$4];

                if (c$$4 = matchValue$$2, isDigit(c$$4)) {
                  const c$$5 = matchValue$$2;
                  info.precision = true;
                  return [false, digitsPrecision(i$$4 + 1)];
                } else if (matchValue$$2 === "*") {
                  info.precision = true;
                  return [true, i$$4 + 1];
                } else {
                  return (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forPrecisionMissingAfterDot)());
                }
              };

              const optionalDotAndPrecision = function optionalDotAndPrecision(i$$5) {
                if (i$$5 >= len) {
                  (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadPrecision)());
                }

                if (patternInput$$1[1][i$$5] === ".") {
                  return precision(i$$5 + 1);
                } else {
                  return [false, i$$5];
                }
              };

              const digitsWidthAndPrecision = function digitsWidthAndPrecision(i$$6) {
                var c$$6;

                digitsWidthAndPrecision: while (true) {
                  if (i$$6 >= len) {
                    (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadPrecision)());
                  }

                  const matchValue$$4 = patternInput$$1[1][i$$6];

                  if (c$$6 = matchValue$$4, isDigit(c$$6)) {
                    const c$$7 = matchValue$$4;
                    i$$6 = i$$6 + 1;
                    continue digitsWidthAndPrecision;
                  } else {
                    return optionalDotAndPrecision(i$$6);
                  }
                }
              };

              const widthAndPrecision = function widthAndPrecision(i$$7) {
                var c$$8;

                if (i$$7 >= len) {
                  (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadPrecision)());
                }

                const matchValue$$5 = patternInput$$1[1][i$$7];

                if (c$$8 = matchValue$$5, isDigit(c$$8)) {
                  const c$$9 = matchValue$$5;
                  return [false, digitsWidthAndPrecision(i$$7)];
                } else if (matchValue$$5 === "*") {
                  return [true, optionalDotAndPrecision(i$$7 + 1)];
                } else {
                  return [false, optionalDotAndPrecision(i$$7)];
                }
              };

              const digitsPosition = function digitsPosition(n, i$$8) {
                var c$$10;

                digitsPosition: while (true) {
                  if (i$$8 >= len) {
                    (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadPrecision)());
                  }

                  const matchValue$$6 = patternInput$$1[1][i$$8];

                  if (c$$10 = matchValue$$6, isDigit(c$$10)) {
                    const c$$11 = matchValue$$6;
                    n = n * 10 + c$$11.charCodeAt(0) - "0".charCodeAt(0);
                    i$$8 = i$$8 + 1;
                    continue digitsPosition;
                  } else if (matchValue$$6 === "$") {
                    return [n, i$$8 + 1];
                  } else {
                    return [null, i$$8];
                  }
                }
              };

              const position = function position(i$$9) {
                var c$$12;
                const matchValue$$7 = patternInput$$1[1][i$$9];

                if (c$$12 = matchValue$$7, c$$12 >= "1" ? c$$12 <= "9" : false) {
                  const c$$13 = matchValue$$7;
                  const patternInput$$2 = digitsPosition(c$$13.charCodeAt(0) - "0".charCodeAt(0), i$$9 + 1);

                  if ((0, _Util.equals)(patternInput$$2[0], null)) {
                    return [null, i$$9];
                  } else {
                    return [patternInput$$2[0], patternInput$$2[1]];
                  }
                } else {
                  return [null, i$$9];
                }
              };

              const oldI = i$$1 | 0;
              const patternInput$$3 = position(i$$1);
              const relCol$$2 = relCol$$1 + patternInput$$3[1] - oldI | 0;
              const oldI$$1 = patternInput$$3[1] | 0;
              const i$$11 = flags(patternInput$$3[1]) | 0;
              const relCol$$3 = relCol$$2 + i$$11 - oldI$$1 | 0;
              const oldI$$2 = i$$11 | 0;
              const patternInput$$4 = widthAndPrecision(i$$11);
              const precisionArg = patternInput$$4[1][0];
              const i$$12 = patternInput$$4[1][1] | 0;
              const relCol$$4 = relCol$$3 + i$$12 - oldI$$2 | 0;

              if (i$$12 >= len) {
                (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadPrecision)());
              }

              const acc$$1 = precisionArg ? (0, _Types.L)([(0, _Option.defaultArg)(patternInput$$3[0], null, function (y) {
                return 1 + y;
              }), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$3)], acc) : acc;
              const acc$$2 = patternInput$$4[0] ? (0, _Types.L)([(0, _Option.defaultArg)(patternInput$$3[0], null, function (y$$1) {
                return 1 + y$$1;
              }), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$3)], acc$$1) : acc$$1;

              const checkNoPrecision = function checkNoPrecision(c$$14) {
                if (info.precision) {
                  (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forFormatDoesntSupportPrecision$$Z721C83C5)((0, _Util.toString)(c$$14)));
                }
              };

              const checkNoZeroFlag = function checkNoZeroFlag(c$$15) {
                if (info.addZeros) {
                  (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forDoesNotSupportZeroFlag$$Z721C83C5)((0, _Util.toString)(c$$15)));
                }
              };

              const checkNoNumericPrefix = function checkNoNumericPrefix(c$$16) {
                var copyOfStruct;

                if (!(0, _Util.equals)(info.numPrefixIfPos, null)) {
                  (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forDoesNotSupportPrefixFlag$$Z384F8060)((0, _Util.toString)(c$$16), (copyOfStruct = info.numPrefixIfPos, copyOfStruct)));
                }
              };

              const checkOtherFlags = function checkOtherFlags(c$$17) {
                checkNoPrecision(c$$17);
                checkNoZeroFlag(c$$17);
                checkNoNumericPrefix(c$$17);
              };

              const collectSpecifierLocation = function collectSpecifierLocation(relLine$$1, relCol$$5, numStdArgs) {
                const numArgsForSpecifier = numStdArgs + (patternInput$$4[0] ? 1 : 0) + (precisionArg ? 1 : 0) | 0;

                if (relLine$$1 === 0) {
                  specifierLocations.push([(0, _range.mkFileIndexRange)((0, _range.range$$get_FileIndex)(m$$5), (0, _range.mkPos)((0, _range.range$$get_StartLine)(m$$5), startCol + patternInput$$1[0]), (0, _range.mkPos)((0, _range.range$$get_StartLine)(m$$5), relCol$$5 + patternInput$$1[0] + 1)), numArgsForSpecifier]);
                } else {
                  specifierLocations.push([(0, _range.mkFileIndexRange)((0, _range.range$$get_FileIndex)(m$$5), (0, _range.mkPos)((0, _range.range$$get_StartLine)(m$$5) + relLine$$1, startCol), (0, _range.mkPos)((0, _range.range$$get_StartLine)(m$$5) + relLine$$1, relCol$$5 + 1)), numArgsForSpecifier]);
                }
              };

              const ch = patternInput$$1[1][i$$12];
              var $target$$1;

              switch (ch) {
                case "%":
                  $target$$1 = 0;
                  break;

                case "A":
                  $target$$1 = 10;
                  break;

                case "E":
                case "F":
                case "G":
                case "e":
                case "f":
                case "g":
                  $target$$1 = 5;
                  break;

                case "H":
                case "h":
                  $target$$1 = 3;
                  break;

                case "L":
                case "l":
                  $target$$1 = 2;
                  break;

                case "M":
                  $target$$1 = 4;
                  break;

                case "O":
                  $target$$1 = 9;
                  break;

                case "X":
                case "d":
                case "i":
                case "o":
                case "u":
                case "x":
                  $target$$1 = 1;
                  break;

                case "a":
                  $target$$1 = 11;
                  break;

                case "b":
                  $target$$1 = 6;
                  break;

                case "c":
                  $target$$1 = 7;
                  break;

                case "s":
                  $target$$1 = 8;
                  break;

                case "t":
                  $target$$1 = 12;
                  break;

                default:
                  $target$$1 = 13;
              }

              switch ($target$$1) {
                case 0:
                  {
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 0);
                    acc = acc$$2;
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 1:
                  {
                    if (info.precision) {
                      (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forFormatDoesntSupportPrecision$$Z721C83C5)(ch));
                    }

                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], mkFlexibleIntFormatTypar(g$$3, m$$5)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 2:
                  {
                    if (info.precision) {
                      (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forFormatDoesntSupportPrecision$$Z721C83C5)(ch));
                    }

                    const relCol$$6 = relCol$$4 + 1 | 0;
                    const i$$13 = i$$12 + 1 | 0;

                    if (i$$13 >= len) {
                      (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadFormatSpecifier)());
                    }

                    (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forLIsUnnecessary)());
                    const matchValue$$8 = patternInput$$1[1][i$$13];
                    var $target$$2;

                    switch (matchValue$$8) {
                      case "X":
                      case "d":
                      case "i":
                      case "o":
                      case "u":
                      case "x":
                        $target$$2 = 0;
                        break;

                      default:
                        $target$$2 = 1;
                    }

                    switch ($target$$2) {
                      case 0:
                        {
                          collectSpecifierLocation(tupledArg[1], relCol$$6, 1);
                          acc = (0, _Types.L)([patternInput$$3[0], mkFlexibleIntFormatTypar(g$$3, m$$5)], acc$$2);
                          tupledArg = [i$$13 + 1, tupledArg[1], relCol$$6 + 1];
                          continue parseLoop;
                        }

                      case 1:
                        {
                          return (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadFormatSpecifier)());
                        }
                    }
                  }

                case 3:
                  {
                    return (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forHIsUnnecessary)());
                  }

                case 4:
                  {
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], mkFlexibleDecimalFormatTypar(g$$3, m$$5)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 5:
                  {
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], mkFlexibleFloatFormatTypar(g$$3, m$$5)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 6:
                  {
                    checkOtherFlags(ch);
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$3)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 7:
                  {
                    checkOtherFlags(ch);
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], (0, _TcGlobals.TcGlobals$$get_char_ty)(g$$3)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 8:
                  {
                    checkOtherFlags(ch);
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$3)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 9:
                  {
                    checkOtherFlags(ch);
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], (0, _ConstraintSolver.NewInferenceType)()], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 10:
                  {
                    const matchValue$$9 = info.numPrefixIfPos;
                    var $target$$3;

                    if (matchValue$$9 != null) {
                      if (matchValue$$9 === "+") {
                        $target$$3 = 0;
                      } else {
                        $target$$3 = 1;
                      }
                    } else {
                      $target$$3 = 0;
                    }

                    switch ($target$$3) {
                      case 0:
                        {
                          collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                          acc = (0, _Types.L)([patternInput$$3[0], (0, _ConstraintSolver.NewInferenceType)()], acc$$2);
                          tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                          continue parseLoop;
                        }

                      case 1:
                        {
                          return (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forDoesNotSupportPrefixFlag$$Z384F8060)(ch, (copyOfStruct$$1 = info.numPrefixIfPos, copyOfStruct$$1)));
                        }
                    }
                  }

                case 11:
                  {
                    checkOtherFlags(ch);
                    const xty = (0, _ConstraintSolver.NewInferenceType)();
                    const fty = (0, _TastOps.op_MinusMinusGreater)(bty, (0, _TastOps.op_MinusMinusGreater)(xty, cty));
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 2);
                    acc = (0, _Types.L)([(0, _Option.defaultArg)(patternInput$$3[0], null, function (y$$2) {
                      return 1 + y$$2;
                    }), xty], (0, _Types.L)([patternInput$$3[0], fty], acc$$2));
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 12:
                  {
                    checkOtherFlags(ch);
                    collectSpecifierLocation(tupledArg[1], relCol$$4, 1);
                    acc = (0, _Types.L)([patternInput$$3[0], (0, _TastOps.op_MinusMinusGreater)(bty, cty)], acc$$2);
                    tupledArg = [i$$12 + 1, tupledArg[1], relCol$$4 + 1];
                    continue parseLoop;
                  }

                case 13:
                  {
                    const c$$18 = ch;
                    return (0, _String.toFail)((0, _String.printf)("%s"))((0, _FSComp.SR$$$forBadFormatSpecifierGeneral$$Z721C83C5)((0, _illib.String$$$make)(1, c$$18)));
                  }
              }
            }

          default:
            {
              acc = acc;
              tupledArg = [tupledArg[0] + 1, tupledArg[1], tupledArg[2] + 1];
              continue parseLoop;
            }
        }
      }
    }
  };

  const results = parseLoop((0, _Types.L)(), [0, 0, (0, _range.range$$get_StartColumn)(m$$5)]);
  return [results, (0, _List.ofSeq)(specifierLocations)];
}

function ParseFormatString(m$$6, g$$4, formatStringCheckContext, fmt$$2, bty$$1, cty$$1, dty) {
  const patternInput$$5 = parseFormatStringInternal(m$$6, g$$4, formatStringCheckContext, fmt$$2, bty$$1, cty$$1);
  const aty = (0, _List.foldBack)(_TastOps.op_MinusMinusGreater, patternInput$$5[0], dty);
  const ety = (0, _TastOps.mkRefTupledTy)(g$$4, patternInput$$5[0]);
  return [[aty, ety], patternInput$$5[1]];
}

function TryCountFormatStringArguments(m$$7, g$$5, fmt$$3, bty$$2, cty$$2) {
  try {
    const patternInput$$6 = parseFormatStringInternal(m$$7, g$$5, null, fmt$$3, bty$$2, cty$$2);
    return (0, _List.length)(patternInput$$6[0]);
  } catch (matchValue$$10) {
    return null;
  }
}