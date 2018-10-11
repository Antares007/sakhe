"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartialLongName$$$Empty$$Z524259A4 = PartialLongName$$$Empty$$Z524259A4;
exports.QuickParse$$$CorrectIdentifierToken = QuickParse$$$CorrectIdentifierToken;
exports.QuickParse$$$isValidStrippedName = QuickParse$$$isValidStrippedName;
exports.QuickParse$$$GetCompleteIdentifierIslandImpl = QuickParse$$$GetCompleteIdentifierIslandImpl;
exports.QuickParse$$$GetCompleteIdentifierIsland = QuickParse$$$GetCompleteIdentifierIsland;
exports.QuickParse$$$GetPartialLongName = QuickParse$$$GetPartialLongName;
exports.QuickParse$$$GetPartialLongNameEx = QuickParse$$$GetPartialLongNameEx;
exports.QuickParse$$$TokenNameEquals = QuickParse$$$TokenNameEquals;
exports.QuickParse$$$TestMemberOrOverrideDeclaration = QuickParse$$$TestMemberOrOverrideDeclaration;
exports.QuickParse$$$MagicalAdjustmentConstant = exports.PartialLongName = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _String = require("../fable-core.2.0.3/String");

var _pars = require("../codegen/pars");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _Option = require("../fable-core.2.0.3/Option");

var _Util = require("../fable-core.2.0.3/Util");

var _Char = require("../fable-core.2.0.3/Char");

var _List = require("../fable-core.2.0.3/List");

var _Array = require("../fable-core.2.0.3/Array");

var _Seq = require("../fable-core.2.0.3/Seq");

const PartialLongName = (0, _Types.declare)(function PartialLongName(arg1, arg2, arg3, arg4) {
  this.QualifyingIdents = arg1;
  this.PartialIdent = arg2;
  this.EndColumn = arg3 | 0;
  this.LastDotPos = arg4;
}, _Types.Record);
exports.PartialLongName = PartialLongName;

function PartialLongName$$$Empty$$Z524259A4(endColumn) {
  return new PartialLongName((0, _Types.L)(), "", endColumn, null);
}

const QuickParse$$$MagicalAdjustmentConstant = 1;
exports.QuickParse$$$MagicalAdjustmentConstant = QuickParse$$$MagicalAdjustmentConstant;

function QuickParse$$$CorrectIdentifierToken(tokenText, tokenTag) {
  if ((0, _String.endsWith)(tokenText, "|", 4)) {
    return (0, _pars.tagOfToken)(new _pars.token(190, "IDENT", tokenText)) | 0;
  } else {
    return tokenTag | 0;
  }
}

function QuickParse$$$isValidStrippedName(name, idx) {
  QuickParse$$$isValidStrippedName: while (true) {
    if (idx === name.length) {
      return false;
    } else if ((0, _PrettyNaming.IsIdentifierPartCharacter)(name[idx])) {
      return true;
    } else {
      name = name;
      idx = idx + 1;
      continue QuickParse$$$isValidStrippedName;
    }
  }
}

function QuickParse$$$isValidActivePatternName(name$$1) {
  const matchValue = [(0, _String.startsWith)(name$$1, "|", 4), (0, _String.endsWith)(name$$1, "|_|", 4), (0, _String.endsWith)(name$$1, "|", 4)];
  var $target$$1;

  if (matchValue[0]) {
    if (matchValue[1]) {
      if (name$$1.length > 4) {
        $target$$1 = 0;
      } else {
        $target$$1 = 1;
      }
    } else {
      $target$$1 = 1;
    }
  } else {
    $target$$1 = 1;
  }

  switch ($target$$1) {
    case 0:
      {
        return QuickParse$$$isValidStrippedName(name$$1.substr(1, name$$1.length - 4), 0);
      }

    case 1:
      {
        var $target$$2;

        if (matchValue[0]) {
          if (matchValue[2]) {
            if (name$$1.length > 2) {
              $target$$2 = 0;
            } else {
              $target$$2 = 1;
            }
          } else {
            $target$$2 = 1;
          }
        } else {
          $target$$2 = 1;
        }

        switch ($target$$2) {
          case 0:
            {
              return QuickParse$$$isValidStrippedName(name$$1.substr(1, name$$1.length - 2), 0);
            }

          case 1:
            {
              return false;
            }
        }
      }
  }
}

function QuickParse$$$GetCompleteIdentifierIslandImpl(lineStr, index) {
  if ((index < 0 ? true : lineStr == null) ? true : index >= lineStr.length) {
    return null;
  } else {
    const fixup = (index < lineStr.length ? lineStr[index] === "|" ? true : (0, _PrettyNaming.IsIdentifierPartCharacter)(lineStr[index]) : false) ? index : null;

    const $007CChar$007C_$007C = function $007CChar$007C_$007C(p) {
      if (p >= 0 ? p < lineStr.length : false) {
        return lineStr[p];
      } else {
        return null;
      }
    };

    const $007CIsLongIdentifierPartChar$007C_$007C = function $007CIsLongIdentifierPartChar$007C_$007C(c) {
      if ((0, _PrettyNaming.IsLongIdentifierPartCharacter)(c)) {
        return (0, _Option.some)(null);
      } else {
        return null;
      }
    };

    const $007CIsIdentifierPartChar$007C_$007C = function $007CIsIdentifierPartChar$007C_$007C(c$$1) {
      if ((0, _PrettyNaming.IsIdentifierPartCharacter)(c$$1)) {
        return (0, _Option.some)(null);
      } else {
        return null;
      }
    };

    const searchLeft = function searchLeft(p$$1) {
      searchLeft: while (true) {
        const matchValue$$1 = [p$$1 - 1, p$$1 - 2];
        var $target$$3;
        const activePatternResult61526 = $007CChar$007C_$007C(matchValue$$1[0]);

        if (activePatternResult61526 != null) {
          if (activePatternResult61526 === "|") {
            const activePatternResult61527 = $007CChar$007C_$007C(matchValue$$1[1]);

            if (activePatternResult61527 != null) {
              if (activePatternResult61527 === "[") {
                $target$$3 = 0;
              } else {
                $target$$3 = 1;
              }
            } else {
              $target$$3 = 1;
            }
          } else {
            $target$$3 = 1;
          }
        } else {
          $target$$3 = 1;
        }

        switch ($target$$3) {
          case 0:
            {
              return p$$1 | 0;
            }

          case 1:
            {
              var $target$$4;
              const activePatternResult61524 = $007CChar$007C_$007C(matchValue$$1[0]);

              if (activePatternResult61524 != null) {
                if (activePatternResult61524 === "|") {
                  $target$$4 = 0;
                } else if ($007CIsLongIdentifierPartChar$007C_$007C(activePatternResult61524) != null) {
                  $target$$4 = 0;
                } else {
                  $target$$4 = 1;
                }
              } else {
                $target$$4 = 1;
              }

              switch ($target$$4) {
                case 0:
                  {
                    p$$1 = p$$1 - 1;
                    continue searchLeft;
                  }

                case 1:
                  {
                    return p$$1 | 0;
                  }
              }
            }
        }
      }
    };

    const searchRight = function searchRight(p$$2) {
      searchRight: while (true) {
        const matchValue$$2 = [p$$2 + 1, p$$2 + 2];
        var $target$$5;
        const activePatternResult61531 = $007CChar$007C_$007C(matchValue$$2[0]);

        if (activePatternResult61531 != null) {
          if (activePatternResult61531 === "|") {
            const activePatternResult61532 = $007CChar$007C_$007C(matchValue$$2[1]);

            if (activePatternResult61532 != null) {
              if (activePatternResult61532 === "]") {
                $target$$5 = 0;
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
              return p$$2 | 0;
            }

          case 1:
            {
              var $target$$6;
              const activePatternResult61529 = $007CChar$007C_$007C(matchValue$$2[0]);

              if (activePatternResult61529 != null) {
                if (activePatternResult61529 === "|") {
                  $target$$6 = 0;
                } else if ($007CIsIdentifierPartChar$007C_$007C(activePatternResult61529) != null) {
                  $target$$6 = 0;
                } else {
                  $target$$6 = 1;
                }
              } else {
                $target$$6 = 1;
              }

              switch ($target$$6) {
                case 0:
                  {
                    p$$2 = p$$2 + 1;
                    continue searchRight;
                  }

                case 1:
                  {
                    return p$$2 | 0;
                  }
              }
            }
        }
      }
    };

    let tickColsOpt;

    const walkOutsideBackticks = function walkOutsideBackticks(i) {
      walkOutsideBackticks: while (true) {
        if (i >= lineStr.length) {
          return null;
        } else {
          const matchValue$$3 = [i, i + 1];
          var $target$$7;
          const activePatternResult61534 = $007CChar$007C_$007C(matchValue$$3[0]);

          if (activePatternResult61534 != null) {
            if (activePatternResult61534 === "`") {
              const activePatternResult61535 = $007CChar$007C_$007C(matchValue$$3[1]);

              if (activePatternResult61535 != null) {
                if (activePatternResult61535 === "`") {
                  $target$$7 = 0;
                } else {
                  $target$$7 = 1;
                }
              } else {
                $target$$7 = 1;
              }
            } else {
              $target$$7 = 1;
            }
          } else {
            $target$$7 = 1;
          }

          switch ($target$$7) {
            case 0:
              {
                return walkInsideBackticks(i + 2)(i);
              }

            case 1:
              {
                if (i >= index) {
                  return null;
                } else {
                  i = i + 1;
                  continue walkOutsideBackticks;
                }
              }
          }
        }
      }
    };

    const walkInsideBackticks = function walkInsideBackticks(i$$1) {
      return function (start) {
        if (i$$1 >= lineStr.length) {
          return null;
        } else {
          const matchValue$$4 = [i$$1, i$$1 + 1];
          var $target$$8;
          const activePatternResult61537 = $007CChar$007C_$007C(matchValue$$4[0]);

          if (activePatternResult61537 != null) {
            if (activePatternResult61537 === "`") {
              const activePatternResult61538 = $007CChar$007C_$007C(matchValue$$4[1]);

              if (activePatternResult61538 != null) {
                if (activePatternResult61538 === "`") {
                  $target$$8 = 0;
                } else {
                  $target$$8 = 1;
                }
              } else {
                $target$$8 = 1;
              }
            } else {
              $target$$8 = 1;
            }
          } else {
            $target$$8 = 1;
          }

          switch ($target$$8) {
            case 0:
              {
                return (index >= start ? index < i$$1 + 2 : false) ? [start, i$$1] : walkOutsideBackticks(i$$1 + 2);
              }

            case 1:
              {
                return walkInsideBackticks(i$$1 + 1)(start);
              }
          }
        }
      };
    };

    tickColsOpt = walkOutsideBackticks(0);

    if (tickColsOpt != null) {
      const prevTickTick = tickColsOpt[0] | 0;
      const idxTickTick = tickColsOpt[1] | 0;
      const pos = idxTickTick + 1 + QuickParse$$$MagicalAdjustmentConstant | 0;
      const ident = lineStr.substr(prevTickTick, idxTickTick - prevTickTick + 2);
      return [ident, pos, true];
    } else {
      return (0, _Option.defaultArg)(fixup, null, function binder(p$$3) {
        const l = searchLeft(p$$3) | 0;
        const r = searchRight(p$$3) | 0;
        const ident$$1 = lineStr.substr(l, r - l + 1);

        if (ident$$1.indexOf("|") !== -1 ? !QuickParse$$$isValidActivePatternName(ident$$1) : false) {
          return null;
        } else {
          const pos$$1 = r + QuickParse$$$MagicalAdjustmentConstant | 0;
          return [ident$$1, pos$$1, false];
        }
      });
    }
  }
}

function QuickParse$$$GetCompleteIdentifierIsland(tolerateJustAfter, lineStr$$1, index$$1) {
  if ((0, _String.isNullOrEmpty)(lineStr$$1)) {
    return null;
  } else {
    const directResult = QuickParse$$$GetCompleteIdentifierIslandImpl(lineStr$$1, index$$1);

    if (tolerateJustAfter ? (0, _Util.equals)(directResult, null) : false) {
      return QuickParse$$$GetCompleteIdentifierIslandImpl(lineStr$$1, index$$1 - 1);
    } else {
      return directResult;
    }
  }
}

function QuickParse$$$defaultName() {
  return [(0, _Types.L)(), ""];
}

function QuickParse$$$GetPartialLongName(lineStr$$2, index$$2) {
  if (lineStr$$2 == null) {
    return QuickParse$$$defaultName();
  } else if (index$$2 < 0) {
    return QuickParse$$$defaultName();
  } else if (index$$2 >= lineStr$$2.length) {
    return QuickParse$$$defaultName();
  } else {
    const IsIdentifierPartCharacter = function IsIdentifierPartCharacter(pos$$2) {
      return (0, _PrettyNaming.IsIdentifierPartCharacter)(lineStr$$2[pos$$2]);
    };

    const IsLongIdentifierPartCharacter = function IsLongIdentifierPartCharacter(pos$$3) {
      return (0, _PrettyNaming.IsLongIdentifierPartCharacter)(lineStr$$2[pos$$3]);
    };

    const IsDot = function IsDot(pos$$4) {
      return lineStr$$2[pos$$4] === ".";
    };

    const InLeadingIdentifier = function InLeadingIdentifier(tupledArg) {
      InLeadingIdentifier: while (true) {
        const PushName = function PushName() {
          return [(0, _Types.L)(lineStr$$2.substr(tupledArg[0] + 1, tupledArg[1] - tupledArg[0] - 1), tupledArg[2][0]), tupledArg[2][1]];
        };

        if (tupledArg[0] < 0) {
          return PushName();
        } else if (IsIdentifierPartCharacter(tupledArg[0])) {
          tupledArg = [tupledArg[0] - 1, tupledArg[1], [tupledArg[2][0], tupledArg[2][1]]];
          continue InLeadingIdentifier;
        } else if (IsDot(tupledArg[0])) {
          tupledArg = [tupledArg[0] - 1, tupledArg[0], PushName()];
          continue InLeadingIdentifier;
        } else {
          return PushName();
        }
      }
    };

    const InName = function InName(tupledArg$$1) {
      InName: while (true) {
        const NameAndResidue = function NameAndResidue() {
          return [(0, _Types.L)(lineStr$$2.substr(tupledArg$$1[0] + 1, tupledArg$$1[1] - tupledArg$$1[0] - 1), (0, _Types.L)()), lineStr$$2.substr(tupledArg$$1[1] + 1, tupledArg$$1[2] - tupledArg$$1[1])];
        };

        if (tupledArg$$1[0] < 0) {
          return [(0, _Types.L)(lineStr$$2.substr(tupledArg$$1[0] + 1, tupledArg$$1[1] - tupledArg$$1[0] - 1), (0, _Types.L)()), lineStr$$2.substr(tupledArg$$1[1] + 1, tupledArg$$1[2] - tupledArg$$1[1])];
        } else if (IsIdentifierPartCharacter(tupledArg$$1[0])) {
          tupledArg$$1 = [tupledArg$$1[0] - 1, tupledArg$$1[1], tupledArg$$1[2]];
          continue InName;
        } else if (IsDot(tupledArg$$1[0])) {
          return InLeadingIdentifier([tupledArg$$1[0] - 1, tupledArg$$1[0], NameAndResidue()]);
        } else {
          return NameAndResidue();
        }
      }
    };

    const InResidue = function InResidue(tupledArg$$2) {
      InResidue: while (true) {
        if (tupledArg$$2[0] < 0) {
          return [(0, _Types.L)(), lineStr$$2.substr(tupledArg$$2[0] + 1, tupledArg$$2[1] - tupledArg$$2[0])];
        } else if (IsDot(tupledArg$$2[0])) {
          return InName([tupledArg$$2[0] - 1, tupledArg$$2[0], tupledArg$$2[1]]);
        } else if (IsLongIdentifierPartCharacter(tupledArg$$2[0])) {
          tupledArg$$2 = [tupledArg$$2[0] - 1, tupledArg$$2[1]];
          continue InResidue;
        } else {
          return [(0, _Types.L)(), lineStr$$2.substr(tupledArg$$2[0] + 1, tupledArg$$2[1] - tupledArg$$2[0])];
        }
      }
    };

    const result = InResidue([index$$2, index$$2]);
    return result;
  }
}

const QuickParse$002EEatCommentCallContext = (0, _Types.declare)(function QuickParse$002EEatCommentCallContext(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);

function QuickParse$$$GetPartialLongNameEx(lineStr$$3, index$$3) {
  var s;

  if (lineStr$$3 == null) {
    return PartialLongName$$$Empty$$Z524259A4(index$$3);
  } else if (index$$3 < 0) {
    return PartialLongName$$$Empty$$Z524259A4(index$$3);
  } else if (index$$3 >= lineStr$$3.length) {
    return PartialLongName$$$Empty$$Z524259A4(index$$3);
  } else {
    const IsIdentifierPartCharacter$$1 = function IsIdentifierPartCharacter$$1(pos$$8) {
      return (0, _PrettyNaming.IsIdentifierPartCharacter)(lineStr$$3[pos$$8]);
    };

    const IsIdentifierStartCharacter = function IsIdentifierStartCharacter(pos$$9) {
      return IsIdentifierPartCharacter$$1(pos$$9);
    };

    const IsDot$$1 = function IsDot$$1(pos$$10) {
      return lineStr$$3[pos$$10] === ".";
    };

    const IsTick = function IsTick(pos$$11) {
      return lineStr$$3[pos$$11] === "`";
    };

    const IsEndOfComment = function IsEndOfComment(pos$$12) {
      if (pos$$12 < index$$3 - 1 ? lineStr$$3[pos$$12] === "*" : false) {
        return lineStr$$3[pos$$12 + 1] === ")";
      } else {
        return false;
      }
    };

    const IsStartOfComment = function IsStartOfComment(pos$$13) {
      if (pos$$13 < index$$3 - 1 ? lineStr$$3[pos$$13] === "(" : false) {
        return lineStr$$3[pos$$13 + 1] === "*";
      } else {
        return false;
      }
    };

    const IsWhitespace = function IsWhitespace(pos$$14) {
      return (0, _Char.isWhiteSpace)(lineStr$$3[pos$$14]);
    };

    const SkipWhitespaceBeforeDotIdentifier = function SkipWhitespaceBeforeDotIdentifier(tupledArg$$3) {
      SkipWhitespaceBeforeDotIdentifier: while (true) {
        if (tupledArg$$3[0] > index$$3) {
          return PartialLongName$$$Empty$$Z524259A4(index$$3);
        } else if (IsWhitespace(tupledArg$$3[0])) {
          tupledArg$$3 = [tupledArg$$3[0] + 1, tupledArg$$3[1], tupledArg$$3[2], tupledArg$$3[3], tupledArg$$3[4]];
          continue SkipWhitespaceBeforeDotIdentifier;
        } else if (IsDot$$1(tupledArg$$3[0])) {
          return AtStartOfIdentifier([tupledArg$$3[0] + 1, (0, _Types.L)(tupledArg$$3[1], tupledArg$$3[2]), tupledArg$$3[3], tupledArg$$3[0]]);
        } else if (IsStartOfComment(tupledArg$$3[0])) {
          return EatComment([1, tupledArg$$3[0] + 1, new QuickParse$002EEatCommentCallContext(0, "SkipWhiteSpaces", tupledArg$$3[1], tupledArg$$3[2], tupledArg$$3[3]), tupledArg$$3[4]]);
        } else {
          return AtStartOfIdentifier([tupledArg$$3[0], (0, _Types.L)(), false, null]);
        }
      }
    };

    const EatComment = function EatComment(tupledArg$$4) {
      EatComment: while (true) {
        if (tupledArg$$4[1] > index$$3) {
          return PartialLongName$$$Empty$$Z524259A4(index$$3);
        } else if (IsStartOfComment(tupledArg$$4[1])) {
          tupledArg$$4 = [tupledArg$$4[0] + 1, tupledArg$$4[1] + 2, tupledArg$$4[2], tupledArg$$4[3]];
          continue EatComment;
        } else if (IsEndOfComment(tupledArg$$4[1])) {
          if (tupledArg$$4[0] === 1) {
            if (tupledArg$$4[2].tag === 1) {
              const throwAway$$1 = tupledArg$$4[2].fields[1];
              const current$$2 = tupledArg$$4[2].fields[0];
              return AtStartOfIdentifier([tupledArg$$4[1] + 2, current$$2, throwAway$$1, tupledArg$$4[3]]);
            } else {
              const throwAway = tupledArg$$4[2].fields[2];
              const ident$$3 = tupledArg$$4[2].fields[0];
              const current$$1 = tupledArg$$4[2].fields[1];
              return SkipWhitespaceBeforeDotIdentifier([tupledArg$$4[1] + 2, ident$$3, current$$1, throwAway, tupledArg$$4[3]]);
            }
          } else {
            tupledArg$$4 = [tupledArg$$4[0] - 1, tupledArg$$4[1] + 2, tupledArg$$4[2], tupledArg$$4[3]];
            continue EatComment;
          }
        } else {
          tupledArg$$4 = [tupledArg$$4[0], tupledArg$$4[1] + 1, tupledArg$$4[2], tupledArg$$4[3]];
          continue EatComment;
        }
      }
    };

    const InUnquotedIdentifier = function InUnquotedIdentifier(tupledArg$$5) {
      InUnquotedIdentifier: while (true) {
        if (tupledArg$$5[1] > index$$3) {
          if (tupledArg$$5[3]) {
            return PartialLongName$$$Empty$$Z524259A4(index$$3);
          } else {
            return new PartialLongName(tupledArg$$5[2], lineStr$$3.substr(tupledArg$$5[0], tupledArg$$5[1] - tupledArg$$5[0]), index$$3, tupledArg$$5[4]);
          }
        } else if (IsIdentifierPartCharacter$$1(tupledArg$$5[1])) {
          tupledArg$$5 = [tupledArg$$5[0], tupledArg$$5[1] + 1, tupledArg$$5[2], tupledArg$$5[3], tupledArg$$5[4]];
          continue InUnquotedIdentifier;
        } else if (IsDot$$1(tupledArg$$5[1])) {
          const ident$$4 = lineStr$$3.substr(tupledArg$$5[0], tupledArg$$5[1] - tupledArg$$5[0]);
          return AtStartOfIdentifier([tupledArg$$5[1] + 1, (0, _Types.L)(ident$$4, tupledArg$$5[2]), tupledArg$$5[3], tupledArg$$5[1]]);
        } else if (IsWhitespace(tupledArg$$5[1]) ? true : IsStartOfComment(tupledArg$$5[1])) {
          const ident$$5 = lineStr$$3.substr(tupledArg$$5[0], tupledArg$$5[1] - tupledArg$$5[0]);
          return SkipWhitespaceBeforeDotIdentifier([tupledArg$$5[1], ident$$5, tupledArg$$5[2], tupledArg$$5[3], tupledArg$$5[4]]);
        } else {
          return AtStartOfIdentifier([tupledArg$$5[1], (0, _Types.L)(), false, null]);
        }
      }
    };

    const InQuotedIdentifier = function InQuotedIdentifier(tupledArg$$6) {
      InQuotedIdentifier: while (true) {
        if (tupledArg$$6[1] > index$$3) {
          if (tupledArg$$6[3]) {
            return PartialLongName$$$Empty$$Z524259A4(index$$3);
          } else {
            return new PartialLongName(tupledArg$$6[2], lineStr$$3.substr(tupledArg$$6[0], tupledArg$$6[1] - tupledArg$$6[0]), index$$3, tupledArg$$6[4]);
          }
        } else {
          const remainingLength = lineStr$$3.length - tupledArg$$6[1] | 0;

          if ((IsTick(tupledArg$$6[1]) ? remainingLength > 1 : false) ? IsTick(tupledArg$$6[1] + 1) : false) {
            const ident$$6 = lineStr$$3.substr(tupledArg$$6[0], tupledArg$$6[1] - tupledArg$$6[0]);
            return SkipWhitespaceBeforeDotIdentifier([tupledArg$$6[1] + 2, ident$$6, tupledArg$$6[2], tupledArg$$6[3], tupledArg$$6[4]]);
          } else {
            tupledArg$$6 = [tupledArg$$6[0], tupledArg$$6[1] + 1, tupledArg$$6[2], tupledArg$$6[3], tupledArg$$6[4]];
            continue InQuotedIdentifier;
          }
        }
      }
    };

    const AtStartOfIdentifier = function AtStartOfIdentifier(tupledArg$$7) {
      AtStartOfIdentifier: while (true) {
        if (tupledArg$$7[0] > index$$3) {
          if (tupledArg$$7[2]) {
            return PartialLongName$$$Empty$$Z524259A4(index$$3);
          } else {
            return new PartialLongName(tupledArg$$7[1], "", index$$3, tupledArg$$7[3]);
          }
        } else if (IsWhitespace(tupledArg$$7[0])) {
          tupledArg$$7 = [tupledArg$$7[0] + 1, tupledArg$$7[1], tupledArg$$7[2], tupledArg$$7[3]];
          continue AtStartOfIdentifier;
        } else {
          const remainingLength$$1 = lineStr$$3.length - tupledArg$$7[0] | 0;

          if ((IsTick(tupledArg$$7[0]) ? remainingLength$$1 > 1 : false) ? IsTick(tupledArg$$7[0] + 1) : false) {
            return InQuotedIdentifier([tupledArg$$7[0] + 2, tupledArg$$7[0] + 2, tupledArg$$7[1], tupledArg$$7[2], tupledArg$$7[3]]);
          } else if (IsStartOfComment(tupledArg$$7[0])) {
            return EatComment([1, tupledArg$$7[0] + 1, new QuickParse$002EEatCommentCallContext(1, "StartIdentifier", tupledArg$$7[1], tupledArg$$7[2]), tupledArg$$7[3]]);
          } else if (IsIdentifierStartCharacter(tupledArg$$7[0])) {
            return InUnquotedIdentifier([tupledArg$$7[0], tupledArg$$7[0] + 1, tupledArg$$7[1], tupledArg$$7[2], tupledArg$$7[3]]);
          } else if (IsDot$$1(tupledArg$$7[0])) {
            if (tupledArg$$7[0] === 0) {
              tupledArg$$7 = [tupledArg$$7[0] + 1, (0, _Types.L)("", tupledArg$$7[1]), tupledArg$$7[2], tupledArg$$7[0]];
              continue AtStartOfIdentifier;
            } else if (!(tupledArg$$7[0] > 0 ? IsIdentifierPartCharacter$$1(tupledArg$$7[0] - 1) ? true : IsWhitespace(tupledArg$$7[0] - 1) : false)) {
              if (lineStr$$3[tupledArg$$7[0] - 1] === ")") {
                tupledArg$$7 = [tupledArg$$7[0] + 1, (0, _Types.L)(), true, null];
                continue AtStartOfIdentifier;
              } else {
                tupledArg$$7 = [tupledArg$$7[0] + 1, (0, _Types.L)(), false, null];
                continue AtStartOfIdentifier;
              }
            } else {
              tupledArg$$7 = [tupledArg$$7[0] + 1, (0, _Types.L)("", tupledArg$$7[1]), tupledArg$$7[2], tupledArg$$7[0]];
              continue AtStartOfIdentifier;
            }
          } else {
            tupledArg$$7 = [tupledArg$$7[0] + 1, (0, _Types.L)(), tupledArg$$7[2], null];
            continue AtStartOfIdentifier;
          }
        }
      }
    };

    const partialLongName = AtStartOfIdentifier([0, (0, _Types.L)(), false, null]);
    const matchValue$$5 = (0, _List.reverse)(partialLongName.QualifyingIdents);
    var $target$$9, s$$1;

    if (matchValue$$5.tail != null) {
      if (s = matchValue$$5.head, s.length > 0 ? (0, _Char.isDigit)(s[0]) : false) {
        $target$$9 = 0;
        s$$1 = matchValue$$5.head;
      } else {
        $target$$9 = 1;
      }
    } else {
      $target$$9 = 1;
    }

    switch ($target$$9) {
      case 0:
        {
          return PartialLongName$$$Empty$$Z524259A4(index$$3);
        }

      case 1:
        {
          const plid = matchValue$$5;
          return new PartialLongName(plid, partialLongName.PartialIdent, partialLongName.EndColumn, partialLongName.LastDotPos);
        }
    }
  }
}

function QuickParse$$$TokenNameEquals(tokenInfo, token2) {
  return (0, _String.compare)(tokenInfo.TokenName, token2, 5) === 0;
}

const QuickParse$$$expected = (0, _Types.L)(["dot"], (0, _Types.L)(["ident"], (0, _Types.L)(["member", "override"], (0, _Types.L)())));

function QuickParse$$$TestMemberOrOverrideDeclaration(tokens) {
  const filteredReversed = (0, _Array.reverse)(tokens.filter(function predicate(tok) {
    if (((!QuickParse$$$TokenNameEquals(tok, "comment") ? !QuickParse$$$TokenNameEquals(tok, "whitespace") : false) ? !QuickParse$$$TokenNameEquals(tok, "private") : false) ? !QuickParse$$$TokenNameEquals(tok, "internal") : false) {
      return !QuickParse$$$TokenNameEquals(tok, "public");
    } else {
      return false;
    }
  }), Array);

  if (filteredReversed.length < (0, _List.length)(QuickParse$$$expected)) {
    return false;
  } else {
    return (0, _Seq.forAll2)(function predicate$$2(tok$$1, expect) {
      return expect.some(function predicate$$1(token2$$1) {
        return QuickParse$$$TokenNameEquals(tok$$1, token2$$1);
      });
    }, filteredReversed, QuickParse$$$expected);
  }
}