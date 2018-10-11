"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenizeLine = tokenizeLine;
exports.getSymbol = getSymbol;
exports.SymbolLookupKind = exports.LexerSymbol = exports.SymbolKind = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _Seq = require("./fable-core.2.0.3/Seq");

var _List = require("./fable-core.2.0.3/List");

var _ServiceLexing = require("./service/ServiceLexing");

var _Long = require("./fable-core.2.0.3/Long");

var _Option = require("./fable-core.2.0.3/Option");

var _Util = require("./fable-core.2.0.3/Util");

const SymbolKind = (0, _Types.declare)(function SymbolKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SymbolKind = SymbolKind;
const LexerSymbol = (0, _Types.declare)(function LexerSymbol(arg1, arg2, arg3, arg4, arg5) {
  this.Kind = arg1;
  this.Line = arg2 | 0;
  this.LeftColumn = arg3 | 0;
  this.RightColumn = arg4 | 0;
  this.Text = arg5;
}, _Types.Record);
exports.LexerSymbol = LexerSymbol;
const SymbolLookupKind = (0, _Types.declare)(function SymbolLookupKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SymbolLookupKind = SymbolLookupKind;
const DraftToken = (0, _Types.declare)(function DraftToken(arg1, arg2, arg3) {
  this.Kind = arg1;
  this.Token = arg2;
  this.RightColumn = arg3 | 0;
}, _Types.Record);

function tokenizeLine(args, lineStr) {
  const defines = (0, _List.ofSeq)((0, _Seq.choose)(function chooser(s) {
    if (s.indexOf("--define:") === 0) {
      return s.slice(9, s.length);
    } else {
      return null;
    }
  }, args));
  const sourceTokenizer = (0, _ServiceLexing.FSharpSourceTokenizer$$$$002Ector$$5B59003F)(defines, "/tmp.fsx");
  const lineTokenizer = (0, _ServiceLexing.FSharpSourceTokenizer$$CreateLineTokenizer$$Z721C83C5)(sourceTokenizer, lineStr);

  const loop = function loop(lexState, acc) {
    loop: while (true) {
      const matchValue = (0, _ServiceLexing.FSharpLineTokenizer$$ScanToken$$Z524259C1)(lineTokenizer, lexState);

      if (matchValue[0] != null) {
        const tok = matchValue[0];
        lexState = matchValue[1];
        acc = (0, _Types.L)(tok, acc);
        continue loop;
      } else {
        return (0, _List.reverse)(acc);
      }
    }
  };

  return loop((0, _Long.fromBits)(0, 0, false), (0, _Types.L)());
}

function fixTokens(lineStr$$1, tokens) {
  var state$$1;
  return (state$$1 = [(0, _Types.L)(), null], function (list) {
    return (0, _List.fold)(function folder(tupledArg, token) {
      var ap, kind$$3, kind$$4, lastToken$$1, t;
      var $target$$3, t$$1;

      if (tupledArg[1] != null) {
        if (t = tupledArg[1], token.LeftColumn <= t.RightColumn) {
          $target$$3 = 0;
          t$$1 = tupledArg[1];
        } else {
          $target$$3 = 1;
        }
      } else {
        $target$$3 = 1;
      }

      switch ($target$$3) {
        case 0:
          {
            return [tupledArg[0], tupledArg[1]];
          }

        case 1:
          {
            var $target$$4, lastToken$$2;

            if (tupledArg[1] != null) {
              if (tupledArg[1].Kind.tag === 4) {
                if (lastToken$$1 = tupledArg[1], (token.Tag === _ServiceLexing.FSharpTokenTag$$$BAR ? true : token.Tag === _ServiceLexing.FSharpTokenTag$$$IDENT) ? true : token.Tag === _ServiceLexing.FSharpTokenTag$$$UNDERSCORE) {
                  $target$$4 = 0;
                  lastToken$$2 = tupledArg[1];
                } else {
                  $target$$4 = 1;
                }
              } else {
                $target$$4 = 1;
              }
            } else {
              $target$$4 = 1;
            }

            switch ($target$$4) {
              case 0:
                {
                  const mergedToken = new _ServiceLexing.FSharpTokenInfo(lastToken$$2.Token.LeftColumn, token.RightColumn, lastToken$$2.Token.ColorClass, lastToken$$2.Token.CharClass, lastToken$$2.Token.FSharpTokenTriggerClass, _ServiceLexing.FSharpTokenTag$$$IDENT, lastToken$$2.Token.TokenName, lastToken$$2.Token.FullMatchedLength + token.FullMatchedLength);
                  return [tupledArg[0], new DraftToken(lastToken$$2.Kind, mergedToken, lastToken$$2.RightColumn + token.FullMatchedLength)];
                }

              case 1:
                {
                  const matchValue$$1 = [token, lineStr$$1];
                  const activePatternResult70341 = matchValue$$1[0].Tag === _ServiceLexing.FSharpTokenTag$$$QUOTE ? new _Option.Choice(0, "Choice1Of4", null) : matchValue$$1[0].Tag === _ServiceLexing.FSharpTokenTag$$$INFIX_AT_HAT_OP ? (matchValue$$1[0].FullMatchedLength === 1 ? matchValue$$1[1][matchValue$$1[0].LeftColumn] === "^" : false) ? new _Option.Choice(1, "Choice2Of4", null) : new _Option.Choice(3, "Choice4Of4", null) : matchValue$$1[0].Tag === _ServiceLexing.FSharpTokenTag$$$LPAREN ? (matchValue$$1[0].FullMatchedLength === 1 ? matchValue$$1[1][matchValue$$1[0].LeftColumn + 1] === "|" : false) ? new _Option.Choice(2, "Choice3Of4", null) : new _Option.Choice(3, "Choice4Of4", null) : new _Option.Choice(3, "Choice4Of4", null);

                  if (activePatternResult70341.tag === 1) {
                    return [tupledArg[0], new DraftToken(new SymbolKind(3, "StaticallyResolvedTypeParameter"), token, token.LeftColumn + token.FullMatchedLength - 1)];
                  } else if (activePatternResult70341.tag === 2) {
                    return [tupledArg[0], new DraftToken(new SymbolKind(4, "ActivePattern"), token, token.LeftColumn + token.FullMatchedLength - 1)];
                  } else if (activePatternResult70341.tag === 3) {
                    let draftToken;
                    var $target$$5, kind$$5;

                    if (tupledArg[1] != null) {
                      if (tupledArg[1].Kind.tag === 2) {
                        if (kind$$3 = tupledArg[1].Kind, token.CharClass === 2) {
                          $target$$5 = 0;
                          kind$$5 = tupledArg[1].Kind;
                        } else {
                          $target$$5 = 1;
                        }
                      } else if (tupledArg[1].Kind.tag === 3) {
                        if (kind$$4 = tupledArg[1].Kind, token.CharClass === 2) {
                          $target$$5 = 0;
                          kind$$5 = tupledArg[1].Kind;
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
                          const arg10$$3 = new _ServiceLexing.FSharpTokenInfo(token.LeftColumn - 1, token.RightColumn, token.ColorClass, token.CharClass, token.FSharpTokenTriggerClass, token.Tag, token.TokenName, token.FullMatchedLength + 1);
                          draftToken = new DraftToken(kind$$5, arg10$$3, arg10$$3.LeftColumn + arg10$$3.FullMatchedLength - 1);
                          break;
                        }

                      case 1:
                        {
                          var $target$$6, ap$$1;

                          if (tupledArg[1] != null) {
                            if (tupledArg[1].Kind.tag === 4) {
                              if (ap = tupledArg[1], token.Tag === _ServiceLexing.FSharpTokenTag$$$RPAREN) {
                                $target$$6 = 0;
                                ap$$1 = tupledArg[1];
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
                                draftToken = new DraftToken(new SymbolKind(0, "Ident"), ap$$1.Token, ap$$1.Token.LeftColumn + ap$$1.Token.FullMatchedLength - 1);
                                break;
                              }

                            case 1:
                              {
                                const kind$$8 = token.ColorClass === 10 ? new SymbolKind(1, "Operator") : token.CharClass === 2 ? new SymbolKind(0, "Ident") : token.ColorClass === 1 ? new SymbolKind(5, "Keyword") : new SymbolKind(6, "Other");
                                draftToken = new DraftToken(kind$$8, token, token.LeftColumn + token.FullMatchedLength - 1);
                                break;
                              }
                          }

                          break;
                        }
                    }

                    return [(0, _Types.L)(draftToken, tupledArg[0]), draftToken];
                  } else {
                    return [tupledArg[0], new DraftToken(new SymbolKind(2, "GenericTypeParameter"), token, token.LeftColumn + token.FullMatchedLength - 1)];
                  }
                }
            }
          }
      }
    }, state$$1, list);
  })(tokens)[0];
}

function getSymbolFromTokens(tokens$$1, line, col, lineStr$$4, lookupKind) {
  var t$$8, remainingTokens$$1, _arg1$$1, x$$3;

  const tokens$$2 = fixTokens(lineStr$$4, tokens$$1);
  const tokensUnderCursor = lookupKind.tag === 0 ? (0, _List.filter)(function predicate(x) {
    if (x.Token.LeftColumn <= col) {
      return x.RightColumn + 1 >= col;
    } else {
      return false;
    }
  }, tokens$$2) : lookupKind.tag === 1 ? (0, _List.filter)(function predicate$$1(x$$1) {
    return x$$1.RightColumn === col;
  }, tokens$$2) : lookupKind.tag === 2 ? (0, _List.filter)(function predicate$$2(x$$2) {
    return x$$2.Token.LeftColumn <= col;
  }, tokens$$2) : (0, _List.filter)(function predicate(x) {
    if (x.Token.LeftColumn <= col) {
      return x.RightColumn + 1 >= col;
    } else {
      return false;
    }
  }, tokens$$2);
  var $target$$7;

  switch (lookupKind.tag) {
    case 0:
    case 1:
      $target$$7 = 1;
      break;

    case 3:
      $target$$7 = 2;
      break;

    default:
      $target$$7 = 0;
  }

  switch ($target$$7) {
    case 0:
      {
        const tryFindStartColumn = function tryFindStartColumn(tokens$$3) {
          tryFindStartColumn: while (true) {
            var $target$$8, remainingTokens, t1, t2, t$$7;

            if (tokens$$3.tail == null) {
              $target$$8 = 2;
            } else if (tokens$$3.head.Kind.tag === 0) {
              if (tokens$$3.tail.tail != null) {
                if (tokens$$3.tail.head.Kind.tag === 6) {
                  $target$$8 = 0;
                  remainingTokens = tokens$$3.tail.tail;
                  t1 = tokens$$3.head.Token;
                  t2 = tokens$$3.tail.head.Token;
                } else {
                  $target$$8 = 1;
                  t$$7 = tokens$$3.head.Token;
                }
              } else {
                $target$$8 = 1;
                t$$7 = tokens$$3.head.Token;
              }
            } else {
              $target$$8 = 2;
            }

            switch ($target$$8) {
              case 0:
                {
                  if (t2.Tag === _ServiceLexing.FSharpTokenTag$$$DOT) {
                    tokens$$3 = remainingTokens;
                    continue tryFindStartColumn;
                  } else {
                    return t1.LeftColumn;
                  }
                }

              case 1:
                {
                  return t$$7.LeftColumn;
                }

              case 2:
                {
                  return null;
                }
            }
          }
        };

        let decreasingTokens;
        const matchValue$$2 = (0, _List.sortBy)(function projection(token$$9) {
          return -token$$9.Token.LeftColumn;
        }, tokensUnderCursor, {
          Compare: _Util.comparePrimitives
        });
        var $target$$9, remainingTokens$$2, t$$9;

        if (matchValue$$2.tail != null) {
          if (matchValue$$2.head.Kind.tag === 6) {
            if (t$$8 = matchValue$$2.head.Token, (remainingTokens$$1 = matchValue$$2.tail, t$$8.Tag === _ServiceLexing.FSharpTokenTag$$$DOT)) {
              $target$$9 = 0;
              remainingTokens$$2 = matchValue$$2.tail;
              t$$9 = matchValue$$2.head.Token;
            } else {
              $target$$9 = 1;
            }
          } else {
            $target$$9 = 1;
          }
        } else {
          $target$$9 = 1;
        }

        switch ($target$$9) {
          case 0:
            {
              decreasingTokens = remainingTokens$$2;
              break;
            }

          case 1:
            {
              const newTokens = matchValue$$2;
              decreasingTokens = newTokens;
              break;
            }
        }

        if (decreasingTokens.tail != null) {
          const first = decreasingTokens.head;
          return (0, _Option.defaultArg)(tryFindStartColumn(decreasingTokens), null, function mapping(leftCol) {
            return new LexerSymbol(new SymbolKind(0, "Ident"), line, leftCol, first.RightColumn + 1, lineStr$$4.slice(leftCol, first.RightColumn + 1));
          });
        } else {
          return null;
        }
      }

    case 1:
      {
        return (0, _Option.defaultArg)((_arg1$$1 = (0, _List.tryFind)(function predicate$$3(_arg1) {
          const k = _arg1.Kind;
          var $target$$10;

          switch (k.tag) {
            case 0:
            case 2:
            case 3:
            case 5:
              $target$$10 = 0;
              break;

            default:
              $target$$10 = 1;
          }

          switch ($target$$10) {
            case 0:
              {
                return true;
              }

            case 1:
              {
                return false;
              }
          }
        }, tokensUnderCursor), _arg1$$1 == null ? function f() {
          return (0, _List.tryFind)(function predicate$$4(_arg2) {
            const k$$1 = _arg2.Kind;
            return (0, _Util.equals)(k$$1, new SymbolKind(1, "Operator"));
          }, tokensUnderCursor);
        }() : (x$$3 = _arg1$$1, x$$3)), null, function mapping$$1(token$$10) {
          return new LexerSymbol(token$$10.Kind, line, token$$10.Token.LeftColumn, token$$10.RightColumn + 1, lineStr$$4.substr(token$$10.Token.LeftColumn, token$$10.Token.FullMatchedLength));
        });
      }

    case 2:
      {
        return (0, _Option.defaultArg)((0, _List.tryLast)(tokensUnderCursor), null, function mapping$$2(token$$11) {
          return new LexerSymbol(token$$11.Kind, line, token$$11.Token.LeftColumn, token$$11.RightColumn + 1, lineStr$$4.substr(token$$11.Token.LeftColumn, token$$11.Token.FullMatchedLength));
        });
      }
  }
}

function getSymbol(line$$1, col$$1, lineStr$$5, lookupKind$$1, args$$1) {
  const tokens$$4 = tokenizeLine(args$$1, lineStr$$5);

  try {
    return getSymbolFromTokens(tokens$$4, line$$1, col$$1, lineStr$$5, lookupKind$$1);
  } catch (matchValue$$3) {
    return null;
  }
}