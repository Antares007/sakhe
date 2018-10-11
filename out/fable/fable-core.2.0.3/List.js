"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.head = head;
exports.tryHead = tryHead;
exports.tail = tail;
exports.last = last;
exports.tryLast = tryLast;
exports.compareWith = compareWith;
exports.foldIndexedAux = foldIndexedAux;
exports.foldIndexed = foldIndexed;
exports.fold = fold;
exports.reverse = reverse;
exports.foldBack = foldBack;
exports.toSeq = toSeq;
exports.ofSeq = ofSeq;
exports.concat = concat;
exports.foldIndexed2Aux = foldIndexed2Aux;
exports.foldIndexed2 = foldIndexed2;
exports.fold2 = fold2;
exports.foldBack2 = foldBack2;
exports.unfold = unfold;
exports.foldIndexed3Aux = foldIndexed3Aux;
exports.foldIndexed3 = foldIndexed3;
exports.fold3 = fold3;
exports.scan = scan;
exports.scanBack = scanBack;
exports.length = length;
exports.append = append;
exports.collect = collect;
exports.map = map;
exports.mapIndexed = mapIndexed;
exports.indexed = indexed;
exports.map2 = map2;
exports.mapIndexed2 = mapIndexed2;
exports.map3 = map3;
exports.mapIndexed3 = mapIndexed3;
exports.mapFold = mapFold;
exports.mapFoldBack = mapFoldBack;
exports.iterate = iterate;
exports.iterate2 = iterate2;
exports.iterateIndexed = iterateIndexed;
exports.iterateIndexed2 = iterateIndexed2;
exports.ofArray = ofArray;
exports.empty = empty;
exports.isEmpty = isEmpty;
exports.tryPickIndexedAux = tryPickIndexedAux;
exports.tryPickIndexed = tryPickIndexed;
exports.tryPick = tryPick;
exports.pick = pick;
exports.tryFindIndexed = tryFindIndexed;
exports.tryFind = tryFind;
exports.findIndexed = findIndexed;
exports.find = find;
exports.findBack = findBack;
exports.tryFindBack = tryFindBack;
exports.tryFindIndex = tryFindIndex;
exports.tryFindIndexBack = tryFindIndexBack;
exports.findIndex = findIndex;
exports.findIndexBack = findIndexBack;
exports.item = item;
exports.tryItem = tryItem;
exports.filter = filter;
exports.partition = partition;
exports.choose = choose;
exports.contains = contains;
exports.except = except;
exports.initialize = initialize;
exports.replicate = replicate;
exports.reduce = reduce;
exports.reduceBack = reduceBack;
exports.forAll = forAll;
exports.forAll2 = forAll2;
exports.exists = exists;
exports.exists2 = exists2;
exports.unzip = unzip;
exports.unzip3 = unzip3;
exports.zip = zip;
exports.zip3 = zip3;
exports.sort = sort;
exports.sortBy = sortBy;
exports.sortDescending = sortDescending;
exports.sortByDescending = sortByDescending;
exports.sortWith = sortWith;
exports.sum = sum;
exports.sumBy = sumBy;
exports.maxBy = maxBy;
exports.max = max;
exports.minBy = minBy;
exports.min = min;
exports.average = average;
exports.averageBy = averageBy;
exports.permute = permute;
exports.skip = skip;
exports.skipWhile = skipWhile;
exports.takeSplitAux = takeSplitAux;
exports.take = take;
exports.takeWhile = takeWhile;
exports.truncate = truncate;
exports.splitAt = splitAt;
exports.slice = slice;
exports.distinctBy = distinctBy;
exports.distinct = distinct;
exports.groupBy = groupBy;
exports.countBy = countBy;
exports.where = where;

var _Option = require("./Option");

var _Types = require("./Types");

var _Seq = require("./Seq");

var _Array = require("./Array");

var _Util = require("./Util");

var _Set = require("./Set");

var _Map = require("./Map");

function head(_arg1) {
  if (_arg1.tail != null) {
    const x = _arg1.head;
    return x;
  } else {
    throw new Error("List was empty");
  }
}

function tryHead(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    const x$$1 = _arg1$$1.head;
    return (0, _Option.some)(x$$1);
  } else {
    return null;
  }
}

function tail(_arg1$$2) {
  if (_arg1$$2.tail != null) {
    const xs = _arg1$$2.tail;
    return xs;
  } else {
    throw new Error("List was empty");
  }
}

function last(_arg1$$3) {
  last: while (true) {
    if (_arg1$$3.tail != null) {
      if (_arg1$$3.tail.tail == null) {
        return _arg1$$3.head;
      } else {
        _arg1$$3 = _arg1$$3.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }
  }
}

function tryLast(_arg1$$4) {
  tryLast: while (true) {
    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return (0, _Option.some)(_arg1$$4.head);
      } else {
        _arg1$$4 = _arg1$$4.tail;
        continue tryLast;
      }
    } else {
      return null;
    }
  }
}

function compareWith(comparer, xs$$3, ys) {
  if (xs$$3 === ys) {
    return 0;
  } else {
    const loop = function loop(xs$$4, ys$$1) {
      loop: while (true) {
        const matchValue = [xs$$4, ys$$1];

        if (matchValue[0].tail != null) {
          if (matchValue[1].tail != null) {
            const matchValue$$1 = comparer(matchValue[0].head, matchValue[1].head) | 0;

            if (matchValue$$1 === 0) {
              xs$$4 = matchValue[0].tail;
              ys$$1 = matchValue[1].tail;
              continue loop;
            } else {
              const res = matchValue$$1 | 0;
              return res | 0;
            }
          } else {
            return 1;
          }
        } else if (matchValue[1].tail == null) {
          return 0;
        } else {
          return -1 | 0;
        }
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}

function foldIndexedAux($arg$$5, $arg$$6, $arg$$7, $arg$$8) {
  foldIndexedAux: while (true) {
    const f = $arg$$5,
          i = $arg$$6,
          acc = $arg$$7,
          _arg1$$5 = $arg$$8;

    if (_arg1$$5.tail != null) {
      const xs$$6 = _arg1$$5.tail;
      const x$$5 = _arg1$$5.head;
      $arg$$5 = f;
      $arg$$6 = i + 1;
      $arg$$7 = f(i, acc, x$$5);
      $arg$$8 = xs$$6;
      continue foldIndexedAux;
    } else {
      return acc;
    }
  }
}

function foldIndexed(f$$1, state, xs$$7) {
  return foldIndexedAux(f$$1, 0, state, xs$$7);
}

function fold($arg$$12, $arg$$13, $arg$$14) {
  fold: while (true) {
    const f$$2 = $arg$$12,
          state$$1 = $arg$$13,
          xs$$8 = $arg$$14;

    if (xs$$8.tail != null) {
      const t = xs$$8.tail;
      const h = xs$$8.head;
      $arg$$12 = f$$2;
      $arg$$13 = f$$2(state$$1, h);
      $arg$$14 = t;
      continue fold;
    } else {
      return state$$1;
    }
  }
}

function reverse(xs$$9) {
  return fold(function (acc$$1, x$$6) {
    return (0, _Types.L)(x$$6, acc$$1);
  }, (0, _Types.L)(), xs$$9);
}

function foldBack(f$$3, xs$$10, state$$2) {
  return fold(function (acc$$2, x$$7) {
    return f$$3(x$$7, acc$$2);
  }, state$$2, reverse(xs$$10));
}

function toSeq(xs$$11) {
  return (0, _Seq.map)(function (x$$8) {
    return x$$8;
  }, xs$$11);
}

function ofSeq(xs$$12) {
  return reverse((0, _Seq.fold)(function (acc$$3, x$$9) {
    return (0, _Types.L)(x$$9, acc$$3);
  }, (0, _Types.L)(), xs$$12));
}

function concat(lists) {
  return reverse((0, _Seq.fold)(function (state$$3, xs$$14) {
    return fold(function f$$4(acc$$4, x$$10) {
      return (0, _Types.L)(x$$10, acc$$4);
    }, state$$3, xs$$14);
  }, (0, _Types.L)(), lists));
}

function foldIndexed2Aux($arg$$18, $arg$$19, $arg$$20, $arg$$21, $arg$$22) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $arg$$18,
          i$$1 = $arg$$19,
          acc$$5 = $arg$$20,
          bs = $arg$$21,
          cs = $arg$$22;
    const matchValue$$2 = [bs, cs];
    var $target$$23, x$$11, xs$$16, y$$1, ys$$3;

    if (matchValue$$2[0].tail != null) {
      if (matchValue$$2[1].tail != null) {
        $target$$23 = 1;
        x$$11 = matchValue$$2[0].head;
        xs$$16 = matchValue$$2[0].tail;
        y$$1 = matchValue$$2[1].head;
        ys$$3 = matchValue$$2[1].tail;
      } else {
        $target$$23 = 2;
      }
    } else if (matchValue$$2[1].tail == null) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }

    switch ($target$$23) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $arg$$18 = f$$5;
          $arg$$19 = i$$1 + 1;
          $arg$$20 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $arg$$21 = xs$$16;
          $arg$$22 = ys$$3;
          continue foldIndexed2Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }
  }
}

function foldIndexed2(f$$6, state$$4, xs$$17, ys$$4) {
  return foldIndexed2Aux(f$$6, 0, state$$4, xs$$17, ys$$4);
}

function fold2(f$$7, state$$5, xs$$18, ys$$5) {
  return (0, _Seq.fold2)(f$$7, state$$5, xs$$18, ys$$5);
}

function foldBack2(f$$8, xs$$19, ys$$6, state$$6) {
  return (0, _Seq.foldBack2)(f$$8, xs$$19, ys$$6, state$$6);
}

function unfold(f$$9, state$$7) {
  const unfoldInner = function unfoldInner(acc$$6, state$$8) {
    unfoldInner: while (true) {
      const matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$9 = matchValue$$3[1];
        acc$$6 = (0, _Types.L)(x$$12, acc$$6);
        state$$8 = state$$9;
        continue unfoldInner;
      } else {
        return reverse(acc$$6);
      }
    }
  };

  return unfoldInner((0, _Types.L)(), state$$7);
}

function foldIndexed3Aux($arg$$38, $arg$$39, $arg$$40, $arg$$41, $arg$$42, $arg$$43) {
  foldIndexed3Aux: while (true) {
    const f$$10 = $arg$$38,
          i$$2 = $arg$$39,
          acc$$7 = $arg$$40,
          bs$$1 = $arg$$41,
          cs$$1 = $arg$$42,
          ds = $arg$$43;
    const matchValue$$4 = [bs$$1, cs$$1, ds];
    var $target$$44, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (matchValue$$4[0].tail != null) {
      if (matchValue$$4[1].tail != null) {
        if (matchValue$$4[2].tail != null) {
          $target$$44 = 1;
          x$$13 = matchValue$$4[0].head;
          xs$$20 = matchValue$$4[0].tail;
          y$$2 = matchValue$$4[1].head;
          ys$$7 = matchValue$$4[1].tail;
          z = matchValue$$4[2].head;
          zs = matchValue$$4[2].tail;
        } else {
          $target$$44 = 2;
        }
      } else {
        $target$$44 = 2;
      }
    } else if (matchValue$$4[1].tail == null) {
      if (matchValue$$4[2].tail == null) {
        $target$$44 = 0;
      } else {
        $target$$44 = 2;
      }
    } else {
      $target$$44 = 2;
    }

    switch ($target$$44) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $arg$$38 = f$$10;
          $arg$$39 = i$$2 + 1;
          $arg$$40 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $arg$$41 = xs$$20;
          $arg$$42 = ys$$7;
          $arg$$43 = zs;
          continue foldIndexed3Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }
  }
}

function foldIndexed3(f$$11, seed, xs$$21, ys$$8, zs$$1) {
  return foldIndexed3Aux(f$$11, 0, seed, xs$$21, ys$$8, zs$$1);
}

function fold3(f$$12, state$$10, xs$$22, ys$$9, zs$$2) {
  return foldIndexed3(function (_arg1$$6, acc$$8, x$$14, y$$3, z$$1) {
    return f$$12(acc$$8, x$$14, y$$3, z$$1);
  }, state$$10, xs$$22, ys$$9, zs$$2);
}

function scan(f$$13, state$$11, xs$$23) {
  return ofSeq((0, _Seq.scan)(f$$13, state$$11, xs$$23));
}

function scanBack(f$$14, xs$$25, state$$12) {
  return ofSeq((0, _Seq.scanBack)(f$$14, xs$$25, state$$12));
}

function length(xs$$27) {
  return fold(function (acc$$9, _arg1$$7) {
    return acc$$9 + 1;
  }, 0, xs$$27);
}

function append(xs$$28, ys$$10) {
  return fold(function (acc$$10, x$$15) {
    return (0, _Types.L)(x$$15, acc$$10);
  }, ys$$10, reverse(xs$$28));
}

function collect(f$$15, xs$$29) {
  return ofSeq((0, _Seq.collect)(f$$15, xs$$29));
}

function map(f$$16, xs$$31) {
  return reverse(fold(function (acc$$11, x$$16) {
    return (0, _Types.L)(f$$16(x$$16), acc$$11);
  }, (0, _Types.L)(), xs$$31));
}

function mapIndexed(f$$17, xs$$33) {
  return reverse(foldIndexed(function (i$$3, acc$$12, x$$17) {
    return (0, _Types.L)(f$$17(i$$3, x$$17), acc$$12);
  }, (0, _Types.L)(), xs$$33));
}

function indexed(xs$$35) {
  return mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$35);
}

function map2(f$$18, xs$$36, ys$$11) {
  return reverse(fold2(function (acc$$13, x$$19, y$$4) {
    return (0, _Types.L)(f$$18(x$$19, y$$4), acc$$13);
  }, (0, _Types.L)(), xs$$36, ys$$11));
}

function mapIndexed2(f$$19, xs$$38, ys$$12) {
  return reverse(foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return (0, _Types.L)(f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, (0, _Types.L)(), xs$$38, ys$$12));
}

function map3(f$$20, xs$$40, ys$$13, zs$$3) {
  return reverse(fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return (0, _Types.L)(f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, (0, _Types.L)(), xs$$40, ys$$13, zs$$3));
}

function mapIndexed3(f$$21, xs$$42, ys$$14, zs$$4) {
  return reverse(foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return (0, _Types.L)(f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, (0, _Types.L)(), xs$$42, ys$$14, zs$$4));
}

function mapFold(f$$22, s, xs$$44) {
  const foldFn = function foldFn(tupledArg, x$$23) {
    const patternInput = f$$22(tupledArg[1], x$$23);
    return [(0, _Types.L)(patternInput[0], tupledArg[0]), patternInput[1]];
  };

  const patternInput$$1 = fold(foldFn, [(0, _Types.L)(), s], xs$$44);
  return [reverse(patternInput$$1[0]), patternInput$$1[1]];
}

function mapFoldBack(f$$23, xs$$45, s$$2) {
  return mapFold(function (s$$3, v) {
    return f$$23(v, s$$3);
  }, s$$2, reverse(xs$$45));
}

function iterate(f$$24, xs$$46) {
  fold(function (unitVar0, x$$24) {
    f$$24(x$$24);
  }, null, xs$$46);
}

function iterate2(f$$25, xs$$47, ys$$15) {
  fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, null, xs$$47, ys$$15);
}

function iterateIndexed(f$$26, xs$$48) {
  foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, null, xs$$48);
}

function iterateIndexed2(f$$27, xs$$49, ys$$16) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, null, xs$$49, ys$$16);
}

function ofArray(xs$$50) {
  return (0, _Array.foldBack)(function (x$$28, acc$$17) {
    return (0, _Types.L)(x$$28, acc$$17);
  }, xs$$50, (0, _Types.L)());
}

function empty() {
  return (0, _Types.L)();
}

function isEmpty(_arg1$$8) {
  if (_arg1$$8.tail == null) {
    return true;
  } else {
    return false;
  }
}

function tryPickIndexedAux($arg$$97, $arg$$98, $arg$$99) {
  tryPickIndexedAux: while (true) {
    const f$$28 = $arg$$97,
          i$$9 = $arg$$98,
          _arg1$$9 = $arg$$99;

    if (_arg1$$9.tail != null) {
      const xs$$51 = _arg1$$9.tail;
      const x$$29 = _arg1$$9.head;
      const result = f$$28(i$$9, x$$29);

      if (result == null) {
        $arg$$97 = f$$28;
        $arg$$98 = i$$9 + 1;
        $arg$$99 = xs$$51;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return null;
    }
  }
}

function tryPickIndexed(f$$29, xs$$52) {
  return tryPickIndexedAux(f$$29, 0, xs$$52);
}

function tryPick(f$$30, xs$$53) {
  return tryPickIndexed(function (_arg1$$10, x$$30) {
    return f$$30(x$$30);
  }, xs$$53);
}

function pick(f$$31, xs$$54) {
  const matchValue$$5 = tryPick(f$$31, xs$$54);

  if (matchValue$$5 != null) {
    const x$$31 = (0, _Option.value)(matchValue$$5);
    return x$$31;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}

function tryFindIndexed(f$$32, xs$$55) {
  return tryPickIndexed(function (i$$10, x$$32) {
    return f$$32(i$$10, x$$32) ? (0, _Option.some)(x$$32) : null;
  }, xs$$55);
}

function tryFind(f$$33, xs$$56) {
  return tryPickIndexed(function (_arg1$$11, x$$33) {
    return f$$33(x$$33) ? (0, _Option.some)(x$$33) : null;
  }, xs$$56);
}

function findIndexed(f$$34, xs$$57) {
  const matchValue$$6 = tryFindIndexed(f$$34, xs$$57);

  if (matchValue$$6 != null) {
    const x$$34 = (0, _Option.value)(matchValue$$6);
    return x$$34;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}

function find(f$$35, xs$$58) {
  return findIndexed(function (_arg1$$12, x$$35) {
    return f$$35(x$$35);
  }, xs$$58);
}

function findBack(f$$36, xs$$59) {
  return find(f$$36, reverse(xs$$59));
}

function tryFindBack(f$$37, xs$$62) {
  return tryFind(f$$37, reverse(xs$$62));
}

function tryFindIndex(f$$38, xs$$65) {
  return tryPickIndexed(function (i$$11, x$$36) {
    return f$$38(x$$36) ? i$$11 : null;
  }, xs$$65);
}

function tryFindIndexBack(f$$39, xs$$66) {
  return (0, _Array.tryFindIndexBack)(f$$39, (0, _Array.ofList)(xs$$66, Array));
}

function findIndex(f$$40, xs$$67) {
  const matchValue$$7 = tryFindIndex(f$$40, xs$$67);

  if (matchValue$$7 != null) {
    const x$$37 = matchValue$$7 | 0;
    return x$$37 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}

function findIndexBack(f$$41, xs$$68) {
  return (0, _Array.findIndexBack)(f$$41, (0, _Array.ofList)(xs$$68, Array));
}

function item(n, xs$$69) {
  return findIndexed(function (i$$12, _arg1$$13) {
    return n === i$$12;
  }, xs$$69);
}

function tryItem(n$$1, xs$$70) {
  return tryFindIndexed(function (i$$13, _arg1$$14) {
    return n$$1 === i$$13;
  }, xs$$70);
}

function filter(f$$42, xs$$71) {
  return foldBack(function (x$$38, acc$$18) {
    return f$$42(x$$38) ? (0, _Types.L)(x$$38, acc$$18) : acc$$18;
  }, xs$$71, (0, _Types.L)());
}

function partition(f$$43, xs$$72) {
  return fold(function (tupledArg$$1, x$$39) {
    return f$$43(x$$39) ? [(0, _Types.L)(x$$39, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], (0, _Types.L)(x$$39, tupledArg$$1[1])];
  }, [(0, _Types.L)(), (0, _Types.L)()], reverse(xs$$72));
}

function choose(f$$44, xs$$73) {
  return reverse(fold(function (acc$$19, x$$40) {
    const matchValue$$8 = f$$44(x$$40);

    if (matchValue$$8 == null) {
      return acc$$19;
    } else {
      const y$$10 = (0, _Option.value)(matchValue$$8);
      return (0, _Types.L)(y$$10, acc$$19);
    }
  }, (0, _Types.L)(), xs$$73));
}

function contains(value, list, eq) {
  const loop$$1 = function loop$$1(xs$$75) {
    loop$$1: while (true) {
      if (xs$$75.tail != null) {
        const v$$1 = xs$$75.head;
        const rest = xs$$75.tail;

        if (eq.Equals(value, v$$1)) {
          return true;
        } else {
          xs$$75 = rest;
          continue loop$$1;
        }
      } else {
        return false;
      }
    }
  };

  return loop$$1(list);
}

function except(itemsToExclude, array$$2, eq$$1) {
  if (isEmpty(array$$2)) {
    return array$$2;
  } else {
    const cached = (0, _Set.createMutable)(itemsToExclude, (0, _Util.comparerFromEqualityComparer)(eq$$1));
    return filter(function f$$45(arg00) {
      return (0, _Util.addToSet)(arg00, cached);
    }, array$$2);
  }
}

function initialize(n$$2, f$$46) {
  let xs$$77 = (0, _Types.L)();

  for (let i$$14 = 1; i$$14 <= n$$2; i$$14++) {
    xs$$77 = (0, _Types.L)(f$$46(n$$2 - i$$14), xs$$77);
  }

  return xs$$77;
}

function replicate(n$$3, x$$41) {
  return initialize(n$$3, function (_arg1$$15) {
    return x$$41;
  });
}

function reduce(f$$47, _arg1$$16) {
  if (_arg1$$16.tail != null) {
    const t$$1 = _arg1$$16.tail;
    const h$$1 = _arg1$$16.head;
    return fold(f$$47, h$$1, t$$1);
  } else {
    throw new Error("List was empty");
  }
}

function reduceBack(f$$48, _arg1$$17) {
  if (_arg1$$17.tail != null) {
    const t$$2 = _arg1$$17.tail;
    const h$$2 = _arg1$$17.head;
    return foldBack(f$$48, t$$2, h$$2);
  } else {
    throw new Error("List was empty");
  }
}

function forAll(f$$49, xs$$78) {
  return fold(function (acc$$20, x$$42) {
    return acc$$20 ? f$$49(x$$42) : false;
  }, true, xs$$78);
}

function forAll2(f$$50, xs$$79, ys$$17) {
  return fold2(function (acc$$21, x$$43, y$$11) {
    return acc$$21 ? f$$50(x$$43, y$$11) : false;
  }, true, xs$$79, ys$$17);
}

function exists($arg$$143, $arg$$144) {
  exists: while (true) {
    const f$$51 = $arg$$143,
          _arg1$$18 = $arg$$144;

    if (_arg1$$18.tail != null) {
      const xs$$80 = _arg1$$18.tail;
      const x$$44 = _arg1$$18.head;

      if (f$$51(x$$44)) {
        return true;
      } else {
        $arg$$143 = f$$51;
        $arg$$144 = xs$$80;
        continue exists;
      }
    } else {
      return false;
    }
  }
}

function exists2($arg$$145, $arg$$146, $arg$$147) {
  exists2: while (true) {
    const f$$52 = $arg$$145,
          bs$$2 = $arg$$146,
          cs$$2 = $arg$$147;
    const matchValue$$9 = [bs$$2, cs$$2];
    var $target$$148, x$$45, xs$$81, y$$12, ys$$18;

    if (matchValue$$9[0].tail != null) {
      if (matchValue$$9[1].tail != null) {
        $target$$148 = 1;
        x$$45 = matchValue$$9[0].head;
        xs$$81 = matchValue$$9[0].tail;
        y$$12 = matchValue$$9[1].head;
        ys$$18 = matchValue$$9[1].tail;
      } else {
        $target$$148 = 2;
      }
    } else if (matchValue$$9[1].tail == null) {
      $target$$148 = 0;
    } else {
      $target$$148 = 2;
    }

    switch ($target$$148) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$45, y$$12)) {
            return true;
          } else {
            $arg$$145 = f$$52;
            $arg$$146 = xs$$81;
            $arg$$147 = ys$$18;
            continue exists2;
          }
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }
  }
}

function unzip(xs$$82) {
  return foldBack(function (tupledArg$$2, tupledArg$$3) {
    return [(0, _Types.L)(tupledArg$$2[0], tupledArg$$3[0]), (0, _Types.L)(tupledArg$$2[1], tupledArg$$3[1])];
  }, xs$$82, [(0, _Types.L)(), (0, _Types.L)()]);
}

function unzip3(xs$$83) {
  return foldBack(function (tupledArg$$4, tupledArg$$5) {
    return [(0, _Types.L)(tupledArg$$4[0], tupledArg$$5[0]), (0, _Types.L)(tupledArg$$4[1], tupledArg$$5[1]), (0, _Types.L)(tupledArg$$4[2], tupledArg$$5[2])];
  }, xs$$83, [(0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)()]);
}

function zip(xs$$84, ys$$19) {
  return map2(function (x$$48, y$$15) {
    return [x$$48, y$$15];
  }, xs$$84, ys$$19);
}

function zip3(xs$$85, ys$$20, zs$$5) {
  return map3(function (x$$49, y$$16, z$$5) {
    return [x$$49, y$$16, z$$5];
  }, xs$$85, ys$$20, zs$$5);
}

function sort(xs$$86, comparer$$1) {
  var xs$$87;
  return ofArray((xs$$87 = (0, _Array.ofList)(xs$$86, Array), (xs$$87.sort(function comparer$$2(x$$50, y$$17) {
    return comparer$$1.Compare(x$$50, y$$17);
  }), xs$$87)));
}

function sortBy(projection, xs$$89, comparer$$3) {
  var xs$$90;
  return ofArray((xs$$90 = (0, _Array.ofList)(xs$$89, Array), (xs$$90.sort(function comparer$$4(x$$51, y$$18) {
    return comparer$$3.Compare(projection(x$$51), projection(y$$18));
  }), xs$$90)));
}

function sortDescending(xs$$92, comparer$$5) {
  var xs$$93;
  return ofArray((xs$$93 = (0, _Array.ofList)(xs$$92, Array), (xs$$93.sort(function comparer$$6(x$$52, y$$19) {
    return comparer$$5.Compare(x$$52, y$$19) * -1;
  }), xs$$93)));
}

function sortByDescending(projection$$1, xs$$95, comparer$$7) {
  var xs$$96;
  return ofArray((xs$$96 = (0, _Array.ofList)(xs$$95, Array), (xs$$96.sort(function comparer$$8(x$$53, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$53), projection$$1(y$$20)) * -1;
  }), xs$$96)));
}

function sortWith(comparer$$9, xs$$98) {
  var xs$$99;
  return ofArray((xs$$99 = (0, _Array.ofList)(xs$$98, Array), (xs$$99.sort(comparer$$9), xs$$99)));
}

function sum(xs$$101, adder) {
  return fold(function (acc$$22, x$$54) {
    return adder.Add(acc$$22, x$$54);
  }, adder.GetZero(), xs$$101);
}

function sumBy(f$$53, xs$$102, adder$$1) {
  return fold(function (acc$$23, x$$55) {
    return adder$$1.Add(acc$$23, f$$53(x$$55));
  }, adder$$1.GetZero(), xs$$102);
}

function maxBy(projection$$2, xs$$103, comparer$$11) {
  return reduce(function (x$$56, y$$21) {
    return comparer$$11.Compare(projection$$2(y$$21), projection$$2(x$$56)) > 0 ? y$$21 : x$$56;
  }, xs$$103);
}

function max(li, comparer$$12) {
  return reduce(function (x$$57, y$$22) {
    return comparer$$12.Compare(y$$22, x$$57) > 0 ? y$$22 : x$$57;
  }, li);
}

function minBy(projection$$3, xs$$104, comparer$$13) {
  return reduce(function (x$$58, y$$23) {
    return comparer$$13.Compare(projection$$3(y$$23), projection$$3(x$$58)) > 0 ? x$$58 : y$$23;
  }, xs$$104);
}

function min(xs$$105, comparer$$14) {
  return reduce(function (x$$59, y$$24) {
    return comparer$$14.Compare(y$$24, x$$59) > 0 ? x$$59 : y$$24;
  }, xs$$105);
}

function average(xs$$106, averager) {
  const total = fold(function (acc$$24, x$$60) {
    return averager.Add(acc$$24, x$$60);
  }, averager.GetZero(), xs$$106);
  return averager.DivideByInt(total, length(xs$$106));
}

function averageBy(f$$54, xs$$107, averager$$1) {
  const total$$1 = fold(function (acc$$25, x$$61) {
    return averager$$1.Add(acc$$25, f$$54(x$$61));
  }, averager$$1.GetZero(), xs$$107);
  return averager$$1.DivideByInt(total$$1, length(xs$$107));
}

function permute(f$$55, xs$$108) {
  return ofArray((0, _Array.permute)(f$$55, (0, _Array.ofList)(xs$$108, Array)));
}

function skip(i$$15, xs$$110) {
  const skipInner = function skipInner(i$$16, xs$$111) {
    skipInner: while (true) {
      const matchValue$$10 = [i$$16, xs$$111];

      if (matchValue$$10[0] === 0) {
        return xs$$111;
      } else if (matchValue$$10[1].tail != null) {
        const xs$$112 = matchValue$$10[1].tail;
        i$$16 = i$$16 - 1;
        xs$$111 = xs$$112;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }
    }
  };

  const matchValue$$11 = [i$$15, xs$$110];

  if (matchValue$$11[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$171, i$$19, xs$$114;

    if (matchValue$$11[0] === 0) {
      $target$$171 = 0;
    } else if (matchValue$$11[0] === 1) {
      if (matchValue$$11[1].tail != null) {
        $target$$171 = 1;
      } else {
        $target$$171 = 2;
        i$$19 = matchValue$$11[0];
        xs$$114 = matchValue$$11[1];
      }
    } else {
      $target$$171 = 2;
      i$$19 = matchValue$$11[0];
      xs$$114 = matchValue$$11[1];
    }

    switch ($target$$171) {
      case 0:
        {
          return xs$$110;
        }

      case 1:
        {
          const xs$$113 = matchValue$$11[1].tail;
          return xs$$113;
        }

      case 2:
        {
          return skipInner(i$$19, xs$$114);
        }
    }
  }
}

function skipWhile($arg$$172, $arg$$173) {
  var t$$3, h$$3;

  skipWhile: while (true) {
    const predicate = $arg$$172,
          xs$$115 = $arg$$173;
    var $target$$174, h$$4, t$$4;

    if (xs$$115.tail != null) {
      if (t$$3 = xs$$115.tail, (h$$3 = xs$$115.head, predicate(h$$3))) {
        $target$$174 = 0;
        h$$4 = xs$$115.head;
        t$$4 = xs$$115.tail;
      } else {
        $target$$174 = 1;
      }
    } else {
      $target$$174 = 1;
    }

    switch ($target$$174) {
      case 0:
        {
          $arg$$172 = predicate;
          $arg$$173 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$115;
        }
    }
  }
}

function takeSplitAux(error, i$$20, acc$$26, xs$$116) {
  takeSplitAux: while (true) {
    const matchValue$$12 = [i$$20, xs$$116];

    if (matchValue$$12[0] === 0) {
      return [reverse(acc$$26), xs$$116];
    } else if (matchValue$$12[1].tail != null) {
      const xs$$117 = matchValue$$12[1].tail;
      const x$$62 = matchValue$$12[1].head;
      error = error;
      i$$20 = i$$20 - 1;
      acc$$26 = (0, _Types.L)(x$$62, acc$$26);
      xs$$116 = xs$$117;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$26), xs$$116];
      }
    }
  }
}

function take(i$$21, xs$$118) {
  const matchValue$$13 = [i$$21, xs$$118];

  if (matchValue$$13[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$175, i$$24, xs$$119;

    if (matchValue$$13[0] === 0) {
      $target$$175 = 0;
    } else if (matchValue$$13[0] === 1) {
      if (matchValue$$13[1].tail != null) {
        $target$$175 = 1;
      } else {
        $target$$175 = 2;
        i$$24 = matchValue$$13[0];
        xs$$119 = matchValue$$13[1];
      }
    } else {
      $target$$175 = 2;
      i$$24 = matchValue$$13[0];
      xs$$119 = matchValue$$13[1];
    }

    switch ($target$$175) {
      case 0:
        {
          return (0, _Types.L)();
        }

      case 1:
        {
          const x$$63 = matchValue$$13[1].head;
          return (0, _Types.L)(x$$63, (0, _Types.L)());
        }

      case 2:
        {
          return takeSplitAux(true, i$$24, (0, _Types.L)(), xs$$119)[0];
        }
    }
  }
}

function takeWhile(predicate$$1, xs$$120) {
  if (xs$$120.tail != null) {
    if (xs$$120.tail.tail == null) {
      if (predicate$$1(xs$$120.head)) {
        return xs$$120;
      } else {
        return xs$$120.tail;
      }
    } else {
      if (!predicate$$1(xs$$120.head)) {
        return (0, _Types.L)();
      } else {
        return (0, _Types.L)(xs$$120.head, takeWhile(predicate$$1, xs$$120.tail));
      }
    }
  } else {
    return xs$$120;
  }
}

function truncate(i$$25, xs$$122) {
  const matchValue$$14 = [i$$25, xs$$122];

  if (matchValue$$14[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$178, i$$28, xs$$123;

    if (matchValue$$14[0] === 0) {
      $target$$178 = 0;
    } else if (matchValue$$14[0] === 1) {
      if (matchValue$$14[1].tail != null) {
        $target$$178 = 1;
      } else {
        $target$$178 = 2;
        i$$28 = matchValue$$14[0];
        xs$$123 = matchValue$$14[1];
      }
    } else {
      $target$$178 = 2;
      i$$28 = matchValue$$14[0];
      xs$$123 = matchValue$$14[1];
    }

    switch ($target$$178) {
      case 0:
        {
          return (0, _Types.L)();
        }

      case 1:
        {
          const x$$66 = matchValue$$14[1].head;
          return (0, _Types.L)(x$$66, (0, _Types.L)());
        }

      case 2:
        {
          return takeSplitAux(false, i$$28, (0, _Types.L)(), xs$$123)[0];
        }
    }
  }
}

function splitAt(i$$29, xs$$124) {
  const matchValue$$15 = [i$$29, xs$$124];

  if (matchValue$$15[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$179, i$$32, xs$$126;

    if (matchValue$$15[0] === 0) {
      $target$$179 = 0;
    } else if (matchValue$$15[0] === 1) {
      if (matchValue$$15[1].tail != null) {
        $target$$179 = 1;
      } else {
        $target$$179 = 2;
        i$$32 = matchValue$$15[0];
        xs$$126 = matchValue$$15[1];
      }
    } else {
      $target$$179 = 2;
      i$$32 = matchValue$$15[0];
      xs$$126 = matchValue$$15[1];
    }

    switch ($target$$179) {
      case 0:
        {
          return [(0, _Types.L)(), xs$$124];
        }

      case 1:
        {
          const xs$$125 = matchValue$$15[1].tail;
          const x$$67 = matchValue$$15[1].head;
          return [(0, _Types.L)(x$$67, (0, _Types.L)()), xs$$125];
        }

      case 2:
        {
          return takeSplitAux(true, i$$32, (0, _Types.L)(), xs$$126);
        }
    }
  }
}

function slice(lower, upper, xs$$127) {
  const lower$$1 = (0, _Option.defaultArg)(lower, -1) | 0;
  const upper$$1 = (0, _Option.defaultArg)(upper, -1) | 0;
  return reverse(foldIndexed(function f$$56(i$$33, acc$$27, x$$68) {
    if ((lower$$1 === -1 ? true : lower$$1 <= i$$33) ? upper$$1 === -1 ? true : i$$33 <= upper$$1 : false) {
      return (0, _Types.L)(x$$68, acc$$27);
    } else {
      return acc$$27;
    }
  }, (0, _Types.L)(), xs$$127));
}

function distinctBy(projection$$4, xs$$130, eq$$2) {
  const hashSet = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$2));
  return filter(function f$$57($arg$$1) {
    return (0, _Util.addToSet)(projection$$4($arg$$1), hashSet);
  }, xs$$130);
}

function distinct(xs$$132, eq$$3) {
  return distinctBy(function (x$$69) {
    return x$$69;
  }, xs$$132, eq$$3);
}

function groupBy(projection$$5, xs$$133, eq$$4) {
  const dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$4));
  (0, _Seq.iterate)(function (v$$2) {
    const key = projection$$5(v$$2);

    if (dict.has(key)) {
      dict.set(key, (0, _Types.L)(v$$2, dict.get(key)));
    } else {
      dict.set(key, (0, _Types.L)(v$$2, (0, _Types.L)()));
    }
  }, xs$$133);
  return ofSeq((0, _Seq.map)(function mapping(kv) {
    return [kv[0], reverse(kv[1])];
  }, dict));
}

function countBy(projection$$6, xs$$135, eq$$5) {
  const dict$$1 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$5));
  iterate(function (v$$3) {
    const key$$1 = projection$$6(v$$3);
    const matchValue$$16 = (0, _Util.tryGetValue)(dict$$1, key$$1, null);

    if (matchValue$$16[0]) {
      matchValue$$16[1].contents = matchValue$$16[1].contents + 1;
    } else {
      dict$$1.set(key$$1, new _Types.FSharpRef(1));
    }
  }, xs$$135);
  let result$$1 = (0, _Types.L)();
  (0, _Seq.iterate)(function (group) {
    result$$1 = (0, _Types.L)([group[0], group[1].contents], result$$1);
  }, dict$$1);
  return result$$1;
}

function where(predicate$$2, xs$$136) {
  return filter(predicate$$2, xs$$136);
}