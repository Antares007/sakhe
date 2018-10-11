"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.length = length;
exports.get = get;
exports.set = set;
exports.create = create;
exports.init = init;
exports.blit = blit;
exports.concat = concat;
exports.append = append;
exports.sub = sub;
exports.fill = fill;
exports.copy = copy;
exports.toList = toList;
exports.ofList = ofList;
exports.iter = iter;
exports.map = map;
exports.mapi = mapi;
exports.iteri = iteri;
exports.exists = exists;
exports.forall = forall;
exports.indexNotFound = indexNotFound;
exports.find = find;
exports.tryPick = tryPick;
exports.tryFind = tryFind;
exports.iter2 = iter2;
exports.map2 = map2;
exports.choose = choose;
exports.filter = filter;
exports.partition = partition;
exports.rev = rev;
exports.foldBack = foldBack;
exports.fold = fold;
exports.toArray = toArray;
exports.ofArray = ofArray;
exports.toSeq = toSeq;
exports.sort = sort;
exports.sortBy = sortBy;
exports.exists2 = exists2;
exports.findIndex = findIndex;
exports.findIndexi = findIndexi;
exports.foldSub = foldSub;
exports.foldBackSub = foldBackSub;
exports.reduce = reduce;
exports.reduceBack = reduceBack;
exports.fold2 = fold2;
exports.foldBack2 = foldBack2;
exports.forall2 = forall2;
exports.isEmpty = isEmpty;
exports.iteri2 = iteri2;
exports.mapi2 = mapi2;
exports.scanBackSub = scanBackSub;
exports.scanSub = scanSub;
exports.scan = scan;
exports.scanBack = scanBack;
exports.singleton = singleton;
exports.tryFindIndex = tryFindIndex;
exports.tryFindIndexi = tryFindIndexi;
exports.zip = zip;
exports.unzip = unzip;

var _Util = require("../fable-core.2.0.3/Util");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

function length(arr) {
  return (0, _Util.count)(arr);
}

function get(arr$$1, n) {
  return arr$$1[n];
}

function set(arr$$2, n$$1, x) {
  arr$$2[n$$1] = x;
}

function create(n$$2, x$$1) {
  return Array.from((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue) {
      return (0, _Seq.singleton)(x$$1);
    }, (0, _Seq.rangeNumber)(1, 1, n$$2));
  }));
}

function init(n$$3, f) {
  return Array.from((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i) {
      return f(i);
    }, (0, _Seq.rangeNumber)(0, 1, n$$3 - 1));
  }));
}

function blit(arr1, start1, arr2, start2, len) {
  if (start1 < 0) {
    throw new Error("index must be positive" + "\\nParameter name: " + "start1");
  }

  if (start2 < 0) {
    throw new Error("index must be positive" + "\\nParameter name: " + "start2");
  }

  if (len < 0) {
    throw new Error("length must be positive" + "\\nParameter name: " + "len");
  }

  if (start1 + len > length(arr1)) {
    throw new Error("(start1+len) out of range" + "\\nParameter name: " + "start1");
  }

  if (start2 + len > length(arr2)) {
    throw new Error("(start2+len) out of range" + "\\nParameter name: " + "start2");
  }

  for (let i$$1 = 0; i$$1 <= len - 1; i$$1++) {
    arr2[start2 + i$$1] = arr1[start1 + i$$1];
  }
}

function concat(arrs) {
  return Array.from((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (arr$$3) {
      return (0, _Seq.map)(function (x$$2) {
        return x$$2;
      }, arr$$3);
    }, arrs);
  }));
}

function append(arr1$$1, arr2$$1) {
  return concat((0, _Types.L)(arr1$$1, (0, _Types.L)(arr2$$1, (0, _Types.L)())));
}

function sub(arr$$4, start, len$$1) {
  if (start < 0) {
    throw new Error("index must be positive" + "\\nParameter name: " + "start");
  }

  if (len$$1 < 0) {
    throw new Error("length must be positive" + "\\nParameter name: " + "len");
  }

  if (start + len$$1 > length(arr$$4)) {
    throw new Error("length must be positive" + "\\nParameter name: " + "len");
  }

  return Array.from((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i$$2) {
      return arr$$4[i$$2];
    }, (0, _Seq.rangeNumber)(start, 1, start + len$$1 - 1));
  }));
}

function fill(arr$$5, start$$1, len$$2, x$$3) {
  if (start$$1 < 0) {
    throw new Error("index must be positive" + "\\nParameter name: " + "start");
  }

  if (len$$2 < 0) {
    throw new Error("length must be positive" + "\\nParameter name: " + "len");
  }

  if (start$$1 + len$$2 > length(arr$$5)) {
    throw new Error("length must be positive" + "\\nParameter name: " + "len");
  }

  for (let i$$3 = start$$1; i$$3 <= start$$1 + len$$2 - 1; i$$3++) {
    arr$$5[i$$3] = x$$3;
  }
}

function copy(arr$$6) {
  return Array.from(arr$$6);
}

function toList(arr$$7) {
  let res = (0, _Types.L)();

  for (let i$$4 = length(arr$$7) - 1; i$$4 >= 0; i$$4--) {
    res = (0, _Types.L)(arr$$7[i$$4], res);
  }

  return res;
}

function ofList(l) {
  const len$$3 = (0, _List.length)(l) | 0;
  const res$$1 = [];

  const add = function add(_arg1) {
    if (_arg1.tail != null) {
      const l$$1 = _arg1.tail;
      const e = _arg1.head;
      res$$1.push(e);
      add(l$$1);
    }
  };

  add(l);
  return res$$1;
}

function iter(f$$1, arr$$8) {
  for (let i$$5 = 0; i$$5 <= (0, _Util.count)(arr$$8) - 1; i$$5++) {
    f$$1(arr$$8[i$$5]);
  }
}

function map(f$$2, arr$$9) {
  const len$$4 = length(arr$$9) | 0;
  const res$$2 = [];

  for (let i$$6 = 0; i$$6 <= len$$4 - 1; i$$6++) {
    res$$2.push(f$$2(arr$$9[i$$6]));
  }

  return res$$2;
}

function mapi(f$$3, arr$$10) {
  const f$$4 = f$$3;
  const len$$5 = length(arr$$10) | 0;
  const res$$3 = [];

  for (let i$$7 = 0; i$$7 <= len$$5 - 1; i$$7++) {
    res$$3.push((0, _Util.curry)(2, f$$4)(i$$7, arr$$10[i$$7]));
  }

  return res$$3;
}

function iteri(f$$5, arr$$11) {
  const f$$6 = f$$5;

  for (let i$$8 = 0; i$$8 <= (0, _Util.count)(arr$$11) - 1; i$$8++) {
    (0, _Util.curry)(2, f$$6)(i$$8, arr$$11[i$$8]);
  }
}

function exists(f$$7, arr$$12) {
  const len$$6 = length(arr$$12) | 0;

  const loop = function loop(i$$9) {
    loop: while (true) {
      if (i$$9 < len$$6) {
        if (f$$7(arr$$12[i$$9])) {
          return true;
        } else {
          i$$9 = i$$9 + 1;
          continue loop;
        }
      } else {
        return false;
      }
    }
  };

  return loop(0);
}

function forall(f$$8, arr$$13) {
  const len$$7 = length(arr$$13) | 0;

  const loop$$1 = function loop$$1(i$$10) {
    loop$$1: while (true) {
      if (i$$10 >= len$$7) {
        return true;
      } else if (f$$8(arr$$13[i$$10])) {
        i$$10 = i$$10 + 1;
        continue loop$$1;
      } else {
        return false;
      }
    }
  };

  return loop$$1(0);
}

function indexNotFound() {
  throw new Error("An index satisfying the predicate was not found in the collection");
}

function find(f$$9, arr$$14) {
  const loop$$2 = function loop$$2(i$$11) {
    loop$$2: while (true) {
      if (i$$11 >= length(arr$$14)) {
        return indexNotFound();
      } else if (f$$9(arr$$14[i$$11])) {
        return arr$$14[i$$11];
      } else {
        i$$11 = i$$11 + 1;
        continue loop$$2;
      }
    }
  };

  return loop$$2(0);
}

function tryPick(f$$10, arr$$15) {
  const loop$$3 = function loop$$3(i$$12) {
    loop$$3: while (true) {
      if (i$$12 >= length(arr$$15)) {
        return null;
      } else {
        const matchValue$$1 = f$$10(arr$$15[i$$12]);

        if (matchValue$$1 == null) {
          i$$12 = i$$12 + 1;
          continue loop$$3;
        } else {
          const res$$4 = matchValue$$1;
          return res$$4;
        }
      }
    }
  };

  return loop$$3(0);
}

function tryFind(f$$11, arr$$16) {
  const loop$$4 = function loop$$4(i$$13) {
    loop$$4: while (true) {
      if (i$$13 >= length(arr$$16)) {
        return null;
      } else if (f$$11(arr$$16[i$$13])) {
        return (0, _Option.some)(arr$$16[i$$13]);
      } else {
        i$$13 = i$$13 + 1;
        continue loop$$4;
      }
    }
  };

  return loop$$4(0);
}

function iter2(f$$12, arr1$$2, arr2$$2) {
  const f$$13 = f$$12;
  const len1 = length(arr1$$2) | 0;

  if (len1 !== length(arr2$$2)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  for (let i$$14 = 0; i$$14 <= len1 - 1; i$$14++) {
    (0, _Util.curry)(2, f$$13)(arr1$$2[i$$14], arr2$$2[i$$14]);
  }
}

function map2(f$$14, arr1$$3, arr2$$3) {
  const f$$15 = f$$14;
  const len1$$1 = length(arr1$$3) | 0;

  if (len1$$1 !== length(arr2$$3)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  const res$$5 = [];

  for (let i$$15 = 0; i$$15 <= len1$$1 - 1; i$$15++) {
    res$$5.push((0, _Util.curry)(2, f$$15)(arr1$$3[i$$15], arr2$$3[i$$15]));
  }

  return res$$5;
}

function choose(f$$16, arr$$17) {
  const res$$6 = [];

  for (let i$$16 = 0; i$$16 <= length(arr$$17) - 1; i$$16++) {
    const matchValue$$2 = f$$16(arr$$17[i$$16]);

    if (matchValue$$2 != null) {
      const b = (0, _Option.value)(matchValue$$2);
      res$$6.push(b);
    }
  }

  return res$$6;
}

function filter(f$$17, arr$$18) {
  const res$$7 = [];

  for (let i$$17 = 0; i$$17 <= length(arr$$18) - 1; i$$17++) {
    const x$$4 = arr$$18[i$$17];

    if (f$$17(x$$4)) {
      res$$7.push(x$$4);
    }
  }

  return res$$7;
}

function partition(f$$18, arr$$19) {
  const res1 = [];
  const res2 = [];

  for (let i$$18 = 0; i$$18 <= length(arr$$19) - 1; i$$18++) {
    const x$$5 = arr$$19[i$$18];

    if (f$$18(x$$5)) {
      res1.push(x$$5);
    } else {
      res2.push(x$$5);
    }
  }

  return [res1, res2];
}

function rev(arr$$20) {
  const len$$8 = length(arr$$20) | 0;
  const res$$8 = [];

  for (let i$$19 = len$$8 - 1; i$$19 >= 0; i$$19--) {
    res$$8.push(arr$$20[i$$19]);
  }

  return res$$8;
}

function foldBack(f$$19, arr$$21, acc) {
  let res$$9 = acc;
  const len$$9 = length(arr$$21) | 0;

  for (let i$$20 = len$$9 - 1; i$$20 >= 0; i$$20--) {
    res$$9 = f$$19(get(arr$$21, i$$20), res$$9);
  }

  return res$$9;
}

function fold(f$$20, acc$$1, arr$$22) {
  let res$$10 = acc$$1;
  const len$$10 = length(arr$$22) | 0;

  for (let i$$21 = 0; i$$21 <= len$$10 - 1; i$$21++) {
    res$$10 = f$$20(res$$10, get(arr$$22, i$$21));
  }

  return res$$10;
}

function toArray(arr$$23) {
  return arr$$23.slice();
}

function ofArray(arr$$24) {
  return Array.from(arr$$24);
}

function toSeq(arr$$25) {
  return (0, _Seq.readOnly)(arr$$25);
}

function sort(f$$21, arr$$26) {
  arr$$26.sort(f$$21);
}

function sortBy(f$$22, arr$$27) {
  arr$$27.sort(function (x$$6, y) {
    return (0, _Util.compare)(f$$22(x$$6), f$$22(y));
  });
}

function exists2(f$$23, arr1$$4, arr2$$4) {
  const len1$$2 = length(arr1$$4) | 0;

  if (len1$$2 !== length(arr2$$4)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  const loop$$5 = function loop$$5(i$$22) {
    loop$$5: while (true) {
      if (i$$22 < len1$$2) {
        if (f$$23(arr1$$4[i$$22], arr2$$4[i$$22])) {
          return true;
        } else {
          i$$22 = i$$22 + 1;
          continue loop$$5;
        }
      } else {
        return false;
      }
    }
  };

  return loop$$5(0);
}

function findIndex(f$$24, arr$$28) {
  const go = function go(n$$4) {
    go: while (true) {
      if (n$$4 >= length(arr$$28)) {
        return indexNotFound() | 0;
      } else if (f$$24(arr$$28[n$$4])) {
        return n$$4 | 0;
      } else {
        n$$4 = n$$4 + 1;
        continue go;
      }
    }
  };

  return go(0) | 0;
}

function findIndexi(f$$25, arr$$29) {
  const go$$1 = function go$$1(n$$5) {
    go$$1: while (true) {
      if (n$$5 >= length(arr$$29)) {
        return indexNotFound() | 0;
      } else if (f$$25(n$$5, arr$$29[n$$5])) {
        return n$$5 | 0;
      } else {
        n$$5 = n$$5 + 1;
        continue go$$1;
      }
    }
  };

  return go$$1(0) | 0;
}

function foldSub(f$$26, acc$$2, arr$$30, start$$2, fin) {
  let res$$11 = acc$$2;

  for (let i$$23 = start$$2; i$$23 <= fin; i$$23++) {
    res$$11 = f$$26(res$$11, arr$$30[i$$23]);
  }

  return res$$11;
}

function foldBackSub(f$$27, arr$$31, start$$3, fin$$1, acc$$3) {
  let res$$12 = acc$$3;

  for (let i$$24 = fin$$1; i$$24 >= start$$3; i$$24--) {
    res$$12 = f$$27(arr$$31[i$$24], res$$12);
  }

  return res$$12;
}

function reduce(f$$28, arr$$32) {
  const arrn = length(arr$$32) | 0;

  if (arrn === 0) {
    throw new Error("the input array may not be empty" + "\\nParameter name: " + "arr");
  } else {
    return foldSub(f$$28, arr$$32[0], arr$$32, 1, arrn - 1);
  }
}

function reduceBack(f$$29, arr$$33) {
  const arrn$$1 = length(arr$$33) | 0;

  if (arrn$$1 === 0) {
    throw new Error("the input array may not be empty" + "\\nParameter name: " + "arr");
  } else {
    return foldBackSub(f$$29, arr$$33, 0, arrn$$1 - 2, arr$$33[arrn$$1 - 1]);
  }
}

function fold2(f$$30, acc$$4, arr1$$5, arr2$$5) {
  const f$$31 = f$$30;
  let res$$13 = acc$$4;
  const len$$11 = length(arr1$$5) | 0;

  if (len$$11 !== length(arr2$$5)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  for (let i$$25 = 0; i$$25 <= len$$11 - 1; i$$25++) {
    res$$13 = (0, _Util.curry)(3, f$$31)(res$$13, arr1$$5[i$$25], arr2$$5[i$$25]);
  }

  return res$$13;
}

function foldBack2(f$$32, arr1$$6, arr2$$6, acc$$5) {
  const f$$33 = f$$32;
  let res$$14 = acc$$5;
  const len$$12 = length(arr1$$6) | 0;

  if (len$$12 !== length(arr2$$6)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  for (let i$$26 = len$$12 - 1; i$$26 >= 0; i$$26--) {
    res$$14 = (0, _Util.curry)(3, f$$33)(arr1$$6[i$$26], arr2$$6[i$$26], res$$14);
  }

  return res$$14;
}

function forall2(f$$34, arr1$$7, arr2$$7) {
  const len1$$3 = length(arr1$$7) | 0;

  if (len1$$3 !== length(arr2$$7)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  const loop$$6 = function loop$$6(i$$27) {
    loop$$6: while (true) {
      if (i$$27 >= len1$$3) {
        return true;
      } else if (f$$34(arr1$$7[i$$27], arr2$$7[i$$27])) {
        i$$27 = i$$27 + 1;
        continue loop$$6;
      } else {
        return false;
      }
    }
  };

  return loop$$6(0);
}

function isEmpty(arr$$34) {
  return length(arr$$34) === 0;
}

function iteri2(f$$35, arr1$$8, arr2$$8) {
  const f$$36 = f$$35;
  const len1$$4 = length(arr1$$8) | 0;

  if (len1$$4 !== length(arr2$$8)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  for (let i$$28 = 0; i$$28 <= len1$$4 - 1; i$$28++) {
    (0, _Util.curry)(3, f$$36)(i$$28, arr1$$8[i$$28], arr2$$8[i$$28]);
  }
}

function mapi2(f$$37, arr1$$9, arr2$$9) {
  const f$$38 = f$$37;
  const len1$$5 = length(arr1$$9) | 0;

  if (len1$$5 !== length(arr2$$9)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  return init(len1$$5, function (i$$29) {
    return (0, _Util.curry)(3, f$$38)(i$$29, arr1$$9[i$$29], arr2$$9[i$$29]);
  });
}

function scanBackSub(f$$39, arr$$35, start$$4, fin$$2, acc$$6) {
  const f$$40 = f$$39;
  let state = acc$$6;
  const res$$15 = create(2 + fin$$2 - start$$4, acc$$6);

  for (let i$$30 = fin$$2; i$$30 >= start$$4; i$$30--) {
    state = (0, _Util.curry)(2, f$$40)(arr$$35[i$$30], state);
    res$$15[i$$30 - start$$4] = state;
  }

  return res$$15;
}

function scanSub(f$$41, acc$$7, arr$$36, start$$5, fin$$3) {
  const f$$42 = f$$41;
  let state$$1 = acc$$7;
  const res$$16 = create(fin$$3 - start$$5 + 2, acc$$7);

  for (let i$$31 = start$$5; i$$31 <= fin$$3; i$$31++) {
    state$$1 = (0, _Util.curry)(2, f$$42)(state$$1, arr$$36[i$$31]);
    res$$16[i$$31 - start$$5 + 1] = state$$1;
  }

  return res$$16;
}

function scan(f$$43, acc$$8, arr$$37) {
  const arrn$$2 = length(arr$$37) | 0;
  return scanSub(f$$43, acc$$8, arr$$37, 0, arrn$$2 - 1);
}

function scanBack(f$$44, arr$$38, acc$$9) {
  const arrn$$3 = length(arr$$38) | 0;
  return scanBackSub(f$$44, arr$$38, 0, arrn$$3 - 1, acc$$9);
}

function singleton(x$$7) {
  const res$$17 = [];
  res$$17.push(x$$7);
  return res$$17;
}

function tryFindIndex(f$$45, arr$$39) {
  const go$$2 = function go$$2(n$$6) {
    go$$2: while (true) {
      if (n$$6 >= length(arr$$39)) {
        return null;
      } else if (f$$45(arr$$39[n$$6])) {
        return n$$6;
      } else {
        n$$6 = n$$6 + 1;
        continue go$$2;
      }
    }
  };

  return go$$2(0);
}

function tryFindIndexi(f$$46, arr$$40) {
  const go$$3 = function go$$3(n$$7) {
    go$$3: while (true) {
      if (n$$7 >= length(arr$$40)) {
        return null;
      } else if (f$$46(n$$7, arr$$40[n$$7])) {
        return n$$7;
      } else {
        n$$7 = n$$7 + 1;
        continue go$$3;
      }
    }
  };

  return go$$3(0);
}

function zip(arr1$$10, arr2$$10) {
  const len1$$6 = length(arr1$$10) | 0;

  if (len1$$6 !== length(arr2$$10)) {
    throw new Error("the arrays have different lengths" + "\\nParameter name: " + "arr2");
  }

  return init(len1$$6, function (i$$32) {
    return [arr1$$10[i$$32], arr2$$10[i$$32]];
  });
}

function unzip(arr$$41) {
  const len$$13 = length(arr$$41) | 0;
  const res1$$1 = [];
  const res2$$1 = [];

  for (let i$$33 = 0; i$$33 <= len$$13 - 1; i$$33++) {
    const patternInput = arr$$41[i$$33];
    res1$$1.push(patternInput[0]);
    res2$$1.push(patternInput[1]);
  }

  return [res1$$1, res2$$1];
}