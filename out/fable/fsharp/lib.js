"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.condition = condition;
exports.GetEnvInteger = GetEnvInteger;
exports.Bits$$$b0 = Bits$$$b0;
exports.Bits$$$b1 = Bits$$$b1;
exports.Bits$$$b2 = Bits$$$b2;
exports.Bits$$$b3 = Bits$$$b3;
exports.Bits$$$pown32 = Bits$$$pown32;
exports.Bits$$$pown64 = Bits$$$pown64;
exports.Bits$$$mask32 = Bits$$$mask32;
exports.Bits$$$mask64 = Bits$$$mask64;
exports.Filename$$$fullpath = Filename$$$fullpath;
exports.Filename$$$hasSuffixCaseInsensitive = Filename$$$hasSuffixCaseInsensitive;
exports.Filename$$$isDll = Filename$$$isDll;
exports.Pair$$$order = Pair$$$order;
exports.NameSetModule$$$ofList = NameSetModule$$$ofList;
exports.NameMapModule$$$domain = NameMapModule$$$domain;
exports.NameMapModule$$$domainL = NameMapModule$$$domainL;
exports.Check$$$NotNone = Check$$$NotNone;
exports.Check$$$ArgumentNotNull = Check$$$ArgumentNotNull;
exports.Check$$$ArrayArgumentNotNullOrEmpty = Check$$$ArrayArgumentNotNullOrEmpty;
exports.Check$$$StringArgumentNotNullOrEmpty = Check$$$StringArgumentNotNullOrEmpty;
exports.IntMap$$$empty = IntMap$$$empty;
exports.IntMap$$$add = IntMap$$$add;
exports.IntMap$$$find = IntMap$$$find;
exports.IntMap$$$tryFind = IntMap$$$tryFind;
exports.IntMap$$$remove = IntMap$$$remove;
exports.IntMap$$$mem = IntMap$$$mem;
exports.IntMap$$$iter = IntMap$$$iter;
exports.IntMap$$$map = IntMap$$$map;
exports.IntMap$$$fold = IntMap$$$fold;
exports.ListAssoc$$$find = ListAssoc$$$find;
exports.ListAssoc$$$tryFind = ListAssoc$$$tryFind;
exports.ListSet$$$insert = ListSet$$$insert;
exports.ListSet$$$unionFavourRight = ListSet$$$unionFavourRight;
exports.ListSet$$$findIndex = ListSet$$$findIndex;
exports.ListSet$$$remove = ListSet$$$remove;
exports.ListSet$$$subtract = ListSet$$$subtract;
exports.ListSet$$$isSubsetOf = ListSet$$$isSubsetOf;
exports.ListSet$$$isSupersetOf = ListSet$$$isSupersetOf;
exports.ListSet$$$equals = ListSet$$$equals;
exports.ListSet$$$unionFavourLeft = ListSet$$$unionFavourLeft;
exports.ListSet$$$intersect = ListSet$$$intersect;
exports.ListSet$$$setify = ListSet$$$setify;
exports.ListSet$$$hasDuplicates = ListSet$$$hasDuplicates;
exports.mapFoldFst = mapFoldFst;
exports.mapFoldSnd = mapFoldSnd;
exports.pair = pair;
exports.p13 = p13;
exports.p23 = p23;
exports.p33 = p33;
exports.map1Of2 = map1Of2;
exports.map2Of2 = map2Of2;
exports.map1Of3 = map1Of3;
exports.map2Of3 = map2Of3;
exports.map3Of3 = map3Of3;
exports.map3Of4 = map3Of4;
exports.map4Of4 = map4Of4;
exports.map5Of5 = map5Of5;
exports.map6Of6 = map6Of6;
exports.foldPair = foldPair;
exports.fold1Of2 = fold1Of2;
exports.foldTriple = foldTriple;
exports.foldQuadruple = foldQuadruple;
exports.mapPair = mapPair;
exports.mapTriple = mapTriple;
exports.mapQuadruple = mapQuadruple;
exports.fmap2Of2 = fmap2Of2;
exports.List$$$noRepeats = List$$$noRepeats;
exports.Zmap$$$force = Zmap$$$force;
exports.Zmap$$$mapKey = Zmap$$$mapKey;
exports.Zset$$$ofList = Zset$$$ofList;
exports.Zset$$$fixpoint = Zset$$$fixpoint;
exports.equalOn = equalOn;
exports.bufs = bufs;
exports.Graph$00602$$$$002Ector$$10CBBCD = Graph$00602$$$$002Ector$$10CBBCD;
exports.Graph$00602$$GetNodeData$$2B594 = Graph$00602$$GetNodeData$$2B594;
exports.Graph$00602$$IterateCycles$$Z6F3E1F4B = Graph$00602$$IterateCycles$$Z6F3E1F4B;
exports.nullableSlotEmpty = nullableSlotEmpty;
exports.nullableSlotFull = nullableSlotFull;
exports.newCache = newCache;
exports.cache$00601 = exports.Graph$00602 = exports.GraphNode$00602 = exports.Int64$$$order = exports.Int32$$$order = exports.Bool$$$order = exports.tracking = exports.progress = exports.verbose = exports.debug = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Long = require("../fable-core.2.0.3/Long");

var _illib = require("../absil/illib");

var _adapters = require("../fcs-fable/adapters");

var _filename = require("../utils/filename");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _zset = require("../absil/zset");

var _List = require("../fable-core.2.0.3/List");

var _Map = require("../fable-core.2.0.3/Map");

var _Option = require("../fable-core.2.0.3/Option");

var _Util = require("../fable-core.2.0.3/Util");

var _zmap = require("../absil/zmap");

var _System = require("../fable-core.2.0.3/System.Text");

var _Seq = require("../fable-core.2.0.3/Seq");

const debug = false;
exports.debug = debug;
const verbose = false;
exports.verbose = verbose;
const progress = new _Types.FSharpRef(false);
exports.progress = progress;
const tracking = new _Types.FSharpRef(false);
exports.tracking = tracking;

function condition(_s) {
  return false;
}

function GetEnvInteger(_e, dflt) {
  return dflt;
}

function Bits$$$b0(n) {
  return n & 255;
}

function Bits$$$b1(n$$1) {
  return n$$1 >> 8 & 255;
}

function Bits$$$b2(n$$2) {
  return n$$2 >> 16 & 255;
}

function Bits$$$b3(n$$3) {
  return n$$3 >> 24 & 255;
}

function Bits$$$pown32(n$$4) {
  if (n$$4 === 0) {
    return 0;
  } else {
    return Bits$$$pown32(n$$4 - 1) | 1 << n$$4 - 1 | 0;
  }
}

function Bits$$$pown64(n$$5) {
  if (n$$5 === 0) {
    return (0, _Long.fromBits)(0, 0, false);
  } else {
    return (0, _Long.op_BitwiseOr)(Bits$$$pown64(n$$5 - 1), (0, _Long.op_LeftShift)((0, _Long.fromBits)(1, 0, false), n$$5 - 1));
  }
}

function Bits$$$mask32(m, n$$6) {
  return Bits$$$pown32(n$$6) << m;
}

function Bits$$$mask64(m$$1, n$$7) {
  return (0, _Long.op_LeftShift)(Bits$$$pown64(n$$7), m$$1);
}

function Filename$$$fullpath(cwd, nm) {
  const p = (0, _illib.Shim$$$FileSystem)().IsPathRootedShim(nm) ? nm : (0, _adapters.System$002EIO$002EPath$$$Combine)(cwd, nm);

  try {
    return (0, _illib.Shim$$$FileSystem)().GetFullPathShim(p);
  } catch (matchValue) {
    var $target$$5;

    if (false) {
      $target$$5 = 0;
    } else if (false) {
      $target$$5 = 0;
    } else if (false) {
      $target$$5 = 0;
    } else if (false) {
      $target$$5 = 0;
    } else {
      $target$$5 = 1;
    }

    switch ($target$$5) {
      case 0:
        {
          return p;
        }

      case 1:
        {
          throw matchValue;
        }
    }
  }
}

function Filename$$$hasSuffixCaseInsensitive(suffix, filename) {
  return (0, _filename.checkSuffix)((0, _illib.String$$$lowercase)(filename), (0, _illib.String$$$lowercase)(suffix));
}

function Filename$$$isDll(file) {
  return Filename$$$hasSuffixCaseInsensitive(".dll", file);
}

const Bool$$$order = (0, _FSharp.LanguagePrimitives$$$FastGenericComparer)();
exports.Bool$$$order = Bool$$$order;
const Int32$$$order = (0, _FSharp.LanguagePrimitives$$$FastGenericComparer)();
exports.Int32$$$order = Int32$$$order;
const Int64$$$order = (0, _FSharp.LanguagePrimitives$$$FastGenericComparer)();
exports.Int64$$$order = Int64$$$order;

function Pair$$$order(compare1, compare2) {
  return {
    Compare(_arg1, _arg2) {
      const res1 = compare1.Compare(_arg1[0], _arg2[0]) | 0;
      return (res1 !== 0 ? res1 : compare2.Compare(_arg1[1], _arg2[1])) | 0;
    }

  };
}

function NameSetModule$$$ofList(l) {
  return (0, _List.foldBack)(_zset.ZsetModule$$$add, l, (0, _zset.ZsetModule$$$empty)(_illib.String$$$order));
}

function NameMapModule$$$domain(m$$2) {
  return (0, _Map.foldBack)(function (x, _arg1$$1, acc) {
    return (0, _zset.ZsetModule$$$add)(x, acc);
  }, m$$2, (0, _zset.ZsetModule$$$empty)(_illib.String$$$order));
}

function NameMapModule$$$domainL(m$$3) {
  return (0, _zset.ZsetModule$$$elements)(NameMapModule$$$domain(m$$3));
}

function Check$$$NotNone(argname, arg) {
  if (arg != null) {
    const x$$1 = (0, _Option.value)(arg);
    return x$$1;
  } else {
    throw new Error(argname);
  }
}

function Check$$$ArgumentNotNull(arg$$1, argname$$1) {
  if ((0, _Util.equals)(arg$$1, null)) {
    throw new Error(argname$$1);
  }
}

function Check$$$ArrayArgumentNotNullOrEmpty(arr, argname$$2) {
  Check$$$ArgumentNotNull(arr, argname$$2);

  if (0 === arr.length) {
    throw new Error(argname$$2);
  }
}

function Check$$$StringArgumentNotNullOrEmpty(s, argname$$3) {
  Check$$$ArgumentNotNull(s, argname$$3);

  if (s.length === 0) {
    throw new Error(argname$$3);
  }
}

function IntMap$$$empty() {
  return (0, _zmap.ZmapModule$$$empty)(Int32$$$order);
}

function IntMap$$$add(k, v, t) {
  return (0, _zmap.ZmapModule$$$add)(k, v, t);
}

function IntMap$$$find(k$$1, t$$1) {
  return (0, _zmap.ZmapModule$$$find)(k$$1, t$$1);
}

function IntMap$$$tryFind(k$$2, t$$2) {
  return (0, _zmap.ZmapModule$$$tryFind)(k$$2, t$$2);
}

function IntMap$$$remove(k$$3, t$$3) {
  return (0, _zmap.ZmapModule$$$remove)(k$$3, t$$3);
}

function IntMap$$$mem(k$$4, t$$4) {
  return (0, _zmap.ZmapModule$$$mem)(k$$4, t$$4);
}

function IntMap$$$iter(f, t$$5) {
  (0, _zmap.ZmapModule$$$iter)(f, t$$5);
}

function IntMap$$$map(f$$1, t$$6) {
  return (0, _zmap.ZmapModule$$$map)(f$$1, t$$6);
}

function IntMap$$$fold(f$$2, t$$7, z) {
  return (0, _zmap.ZmapModule$$$fold)(f$$2, t$$7, z);
}

function ListAssoc$$$find($arg$$13, $arg$$14, $arg$$15) {
  ListAssoc$$$find: while (true) {
    const f$$3 = $arg$$13,
          x$$2 = $arg$$14,
          l$$1 = $arg$$15;

    if (l$$1.tail != null) {
      const y = l$$1.head[1];
      const x$0027 = l$$1.head[0];
      const t$$8 = l$$1.tail;

      if (f$$3(x$$2, x$0027)) {
        return y;
      } else {
        $arg$$13 = f$$3;
        $arg$$14 = x$$2;
        $arg$$15 = t$$8;
        continue ListAssoc$$$find;
      }
    } else {
      return (0, _illib.notFound)();
    }
  }
}

function ListAssoc$$$tryFind($arg$$16, $arg$$17, $arg$$18) {
  ListAssoc$$$tryFind: while (true) {
    const f$$4 = $arg$$16,
          x$$3 = $arg$$17,
          l$$2 = $arg$$18;

    if (l$$2.tail != null) {
      const y$$1 = l$$2.head[1];
      const x$0027$$1 = l$$2.head[0];
      const t$$9 = l$$2.tail;

      if (f$$4(x$$3, x$0027$$1)) {
        return (0, _Option.some)(y$$1);
      } else {
        $arg$$16 = f$$4;
        $arg$$17 = x$$3;
        $arg$$18 = t$$9;
        continue ListAssoc$$$tryFind;
      }
    } else {
      return null;
    }
  }
}

function ListSet$$$insert(f$$5, x$$4, l$$3) {
  if ((0, _List.exists)((0, _Util.partialApply)(1, f$$5, [x$$4]), l$$3)) {
    return l$$3;
  } else {
    return (0, _Types.L)(x$$4, l$$3);
  }
}

function ListSet$$$unionFavourRight(f$$7, l1, l2) {
  const matchValue$$2 = [l1, l2];

  if (matchValue$$2[1].tail == null) {
    return l1;
  } else if (matchValue$$2[0].tail == null) {
    return l2;
  } else {
    return (0, _List.foldBack)(function (x$$6, l$$5) {
      return ListSet$$$insert(f$$7, x$$6, l$$5);
    }, l1, l2);
  }
}

function ListSet$$$findIndexAux($arg$$25, $arg$$26, $arg$$27, $arg$$28) {
  ListSet$$$findIndexAux: while (true) {
    const eq = $arg$$25,
          x$$7 = $arg$$26,
          l$$6 = $arg$$27,
          n$$8 = $arg$$28;

    if (l$$6.tail != null) {
      const t$$10 = l$$6.tail;
      const h = l$$6.head;

      if (eq(h, x$$7)) {
        return n$$8 | 0;
      } else {
        $arg$$25 = eq;
        $arg$$26 = x$$7;
        $arg$$27 = t$$10;
        $arg$$28 = n$$8 + 1;
        continue ListSet$$$findIndexAux;
      }
    } else {
      return (0, _illib.notFound)() | 0;
    }
  }
}

function ListSet$$$findIndex(eq$$1, x$$8, l$$7) {
  return ListSet$$$findIndexAux(eq$$1, x$$8, l$$7, 0);
}

function ListSet$$$remove(f$$8, x$$9, l$$8) {
  if (l$$8.tail == null) {
    return (0, _Types.L)();
  } else {
    const t$$11 = l$$8.tail;
    const h$$1 = l$$8.head;

    if (f$$8(x$$9, h$$1)) {
      return t$$11;
    } else {
      return (0, _Types.L)(h$$1, ListSet$$$remove(f$$8, x$$9, t$$11));
    }
  }
}

function ListSet$$$subtract($arg$$35, $arg$$36, $arg$$37) {
  ListSet$$$subtract: while (true) {
    const f$$9 = $arg$$35,
          l1$$1 = $arg$$36,
          l2$$1 = $arg$$37;

    if (l2$$1.tail == null) {
      return l1$$1;
    } else {
      const t$$12 = l2$$1.tail;
      const h$$2 = l2$$1.head;
      $arg$$35 = f$$9;
      $arg$$36 = ListSet$$$remove(function (y2, y1) {
        return f$$9(y1, y2);
      }, h$$2, l1$$1);
      $arg$$37 = t$$12;
      continue ListSet$$$subtract;
    }
  }
}

function ListSet$$$isSubsetOf(f$$10, l1$$2, l2$$2) {
  return (0, _List.forAll)(function (x1) {
    return (0, _List.exists)((0, _Util.partialApply)(1, f$$10, [x1]), l2$$2);
  }, l1$$2);
}

function ListSet$$$isSupersetOf(f$$12, l1$$3, l2$$3) {
  return (0, _List.forAll)(function (x2) {
    return (0, _List.exists)(function f$$13(y2$$1) {
      return function (y1$$1) {
        return f$$12(y1$$1, y2$$1);
      };
    }(x2), l1$$3);
  }, l2$$3);
}

function ListSet$$$equals(f$$14, l1$$4, l2$$4) {
  if (ListSet$$$isSubsetOf(f$$14, l1$$4, l2$$4)) {
    return ListSet$$$isSupersetOf(f$$14, l1$$4, l2$$4);
  } else {
    return false;
  }
}

function ListSet$$$unionFavourLeft(f$$15, l1$$5, l2$$5) {
  const matchValue$$3 = [l1$$5, l2$$5];

  if (matchValue$$3[1].tail == null) {
    return l1$$5;
  } else if (matchValue$$3[0].tail == null) {
    return l2$$5;
  } else {
    return (0, _List.append)(l1$$5, ListSet$$$subtract(f$$15, l2$$5, l1$$5));
  }
}

function ListSet$$$intersect($arg$$50, $arg$$51, $arg$$52) {
  ListSet$$$intersect: while (true) {
    const f$$16 = $arg$$50,
          l1$$6 = $arg$$51,
          l2$$6 = $arg$$52;

    if (l2$$6.tail == null) {
      return (0, _Types.L)();
    } else {
      const t$$13 = l2$$6.tail;
      const h$$3 = l2$$6.head;

      if ((0, _List.exists)((0, _Util.partialApply)(1, f$$16, [h$$3]), l1$$6)) {
        return (0, _Types.L)(h$$3, ListSet$$$intersect(f$$16, l1$$6, t$$13));
      } else {
        $arg$$50 = f$$16;
        $arg$$51 = l1$$6;
        $arg$$52 = t$$13;
        continue ListSet$$$intersect;
      }
    }
  }
}

function ListSet$$$setify(f$$18, l$$12) {
  return (0, _List.reverse)((0, _List.foldBack)(function (x$$13, l$$13) {
    return ListSet$$$insert(f$$18, x$$13, l$$13);
  }, (0, _List.reverse)(l$$12), (0, _Types.L)()));
}

function ListSet$$$hasDuplicates(f$$19, l$$14) {
  if (l$$14.tail != null) {
    if (l$$14.tail.tail != null) {
      if (l$$14.tail.tail.tail == null) {
        return f$$19(l$$14.head, l$$14.tail.head);
      } else {
        const loop = function loop(acc$$1, l$$15) {
          loop: while (true) {
            if (l$$15.tail != null) {
              const x$$16 = l$$15.head;
              const rest$$1 = l$$15.tail;

              if ((0, _List.exists)((0, _Util.partialApply)(1, f$$19, [x$$16]), acc$$1)) {
                return true;
              } else {
                acc$$1 = (0, _Types.L)(x$$16, acc$$1);
                l$$15 = rest$$1;
                continue loop;
              }
            } else {
              return false;
            }
          }
        };

        return loop((0, _Types.L)(l$$14.head, (0, _Types.L)()), l$$14.tail);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function mapFoldFst(f$$21, s$$1, x$$18, y$$3) {
  const patternInput = f$$21(s$$1, x$$18);
  return [[patternInput[0], y$$3], patternInput[1]];
}

function mapFoldSnd(f$$22, s$$3, x$$19, y$$4) {
  const patternInput$$1 = f$$22(s$$3, y$$4);
  return [[x$$19, patternInput$$1[0]], patternInput$$1[1]];
}

function pair(a, b) {
  return [a, b];
}

function p13(x$$20, _y, _z) {
  return x$$20;
}

function p23(_x, y$$5, _z$$1) {
  return y$$5;
}

function p33(_x$$1, _y$$1, z$$1) {
  return z$$1;
}

function map1Of2(f$$23, a1$$1, a2$$1) {
  return [f$$23(a1$$1), a2$$1];
}

function map2Of2(f$$24, a1$$2, a2$$2) {
  return [a1$$2, f$$24(a2$$2)];
}

function map1Of3(f$$25, a1$$3, a2$$3, a3) {
  return [f$$25(a1$$3), a2$$3, a3];
}

function map2Of3(f$$26, a1$$4, a2$$4, a3$$1) {
  return [a1$$4, f$$26(a2$$4), a3$$1];
}

function map3Of3(f$$27, a1$$5, a2$$5, a3$$2) {
  return [a1$$5, a2$$5, f$$27(a3$$2)];
}

function map3Of4(f$$28, a1$$6, a2$$6, a3$$3, a4) {
  return [a1$$6, a2$$6, f$$28(a3$$3), a4];
}

function map4Of4(f$$29, a1$$7, a2$$7, a3$$4, a4$$1) {
  return [a1$$7, a2$$7, a3$$4, f$$29(a4$$1)];
}

function map5Of5(f$$30, a1$$8, a2$$8, a3$$5, a4$$2, a5) {
  return [a1$$8, a2$$8, a3$$5, a4$$2, f$$30(a5)];
}

function map6Of6(f$$31, a1$$9, a2$$9, a3$$6, a4$$3, a5$$1, a6) {
  return [a1$$9, a2$$9, a3$$6, a4$$3, a5$$1, f$$31(a6)];
}

function foldPair(f1, f2, acc$$2, a1$$10, a2$$10) {
  return f2(f1(acc$$2, a1$$10), a2$$10);
}

function fold1Of2(f1$$1, acc$$3, a1$$11, _a2) {
  return f1$$1(acc$$3, a1$$11);
}

function foldTriple(f1$$2, f2$$1, f3, acc$$4, a1$$12, a2$$11, a3$$7) {
  return f3(f2$$1(f1$$2(acc$$4, a1$$12), a2$$11), a3$$7);
}

function foldQuadruple(f1$$3, f2$$2, f3$$1, f4, acc$$5, a1$$13, a2$$12, a3$$8, a4$$4) {
  return f4(f3$$1(f2$$2(f1$$3(acc$$5, a1$$13), a2$$12), a3$$8), a4$$4);
}

function mapPair(f1$$4, f2$$3, a1$$14, a2$$13) {
  return [f1$$4(a1$$14), f2$$3(a2$$13)];
}

function mapTriple(f1$$5, f2$$4, f3$$2, a1$$15, a2$$14, a3$$9) {
  return [f1$$5(a1$$15), f2$$4(a2$$14), f3$$2(a3$$9)];
}

function mapQuadruple(f1$$6, f2$$5, f3$$3, f4$$1, a1$$16, a2$$15, a3$$10, a4$$5) {
  return [f1$$6(a1$$16), f2$$5(a2$$15), f3$$3(a3$$10), f4$$1(a4$$5)];
}

function fmap2Of2(f$$32, z$$2, a1$$17, a2$$16) {
  const patternInput$$2 = f$$32(z$$2, a2$$16);
  return [patternInput$$2[0], [a1$$17, patternInput$$2[1]]];
}

function List$$$noRepeats(xOrder, xs) {
  const s$$5 = (0, _zset.ZsetModule$$$addList)(xs, (0, _zset.ZsetModule$$$empty)(xOrder));
  return (0, _zset.ZsetModule$$$elements)(s$$5);
}

function Zmap$$$force(k$$5, mp) {
  const matchValue$$4 = (0, _zmap.ZmapModule$$$tryFind)(k$$5, mp);

  if (matchValue$$4 == null) {
    throw new Error("Zmap.force: lookup failed");
  } else {
    const x$$21 = (0, _Option.value)(matchValue$$4);
    return x$$21;
  }
}

function Zmap$$$mapKey(key, f$$33, mp$$1) {
  const matchValue$$5 = f$$33((0, _zmap.ZmapModule$$$tryFind)(key, mp$$1));

  if (matchValue$$5 == null) {
    return (0, _zmap.ZmapModule$$$remove)(key, mp$$1);
  } else {
    const fx = (0, _Option.value)(matchValue$$5);
    return (0, _zmap.ZmapModule$$$add)(key, fx, mp$$1);
  }
}

function Zset$$$ofList(order, xs$$1) {
  return (0, _zset.ZsetModule$$$addList)(xs$$1, (0, _zset.ZsetModule$$$empty)(order));
}

function Zset$$$fixpoint($arg$$156, $arg$$157) {
  Zset$$$fixpoint: while (true) {
    const f$$34 = $arg$$156,
          _arg1$$2 = $arg$$157;
    const s0 = _arg1$$2;
    const s$$6 = s0;
    const s$$7 = f$$34(s$$6);

    if ((0, _zset.ZsetModule$$$equal)(s$$7, s0)) {
      return s0;
    } else {
      $arg$$156 = f$$34;
      $arg$$157 = s$$7;
      continue Zset$$$fixpoint;
    }
  }
}

function equalOn(f$$35, x$$22, y$$6) {
  return (0, _Util.equals)(f$$35(x$$22), f$$35(y$$6));
}

function bufs(f$$36) {
  const buf = (0, _System.StringBuilder$$$$002Ector$$Z524259A4)(100);
  f$$36(buf);
  return (0, _Util.toString)(buf);
}

const GraphNode$00602 = (0, _Types.declare)(function GraphNode$00602(arg1, arg2, arg3) {
  this.nodeId = arg1;
  this.nodeData = arg2;
  this.nodeNeighbours = arg3;
}, _Types.Record);
exports.GraphNode$00602 = GraphNode$00602;
const Graph$00602 = (0, _Types.declare)(function Graph$00602(nodeIdentity, nodes, edges) {
  const $this$$1 = this;
  $this$$1.nodeIdentity = nodeIdentity;
  const edges$$1 = (0, _List.map)(function mapping(tupledArg) {
    return [$this$$1.nodeIdentity(tupledArg[0]), $this$$1.nodeIdentity(tupledArg[1])];
  }, edges);
  const nodes$$1 = (0, _List.map)(function mapping$$1(d) {
    return [$this$$1.nodeIdentity(d), new GraphNode$00602($this$$1.nodeIdentity(d), d, (0, _Types.L)())];
  }, nodes);
  $this$$1.tab = (0, _Map.ofList)(nodes$$1, {
    Compare: _Util.compare
  });
  $this$$1["nodes@363-1"] = (0, _List.map)(function (tuple) {
    return tuple[1];
  }, nodes$$1);
  (0, _Seq.iterate)(function (node) {
    node.nodeNeighbours = (0, _List.map)(function mapping$$2(tupledArg$$2) {
      return (0, _Map.FSharpMap$$get_Item$$2B595)($this$$1.tab, tupledArg$$2[1]);
    }, (0, _List.filter)(function predicate(tupledArg$$1) {
      return (0, _Util.equals)(tupledArg$$1[0], node.nodeId);
    }, edges$$1));
  }, $this$$1["nodes@363-1"]);
});
exports.Graph$00602 = Graph$00602;

function Graph$00602$$$$002Ector$$10CBBCD(nodeIdentity, nodes, edges) {
  return this != null ? Graph$00602.call(this, nodeIdentity, nodes, edges) : new Graph$00602(nodeIdentity, nodes, edges);
}

function Graph$00602$$GetNodeData$$2B594(g, nodeId$$1) {
  return (0, _Map.FSharpMap$$get_Item$$2B595)(g.tab, nodeId$$1).nodeData;
}

function Graph$00602$$IterateCycles$$Z6F3E1F4B(g$$1, f$$37) {
  const trace = function trace(path, node$$1) {
    if ((0, _List.exists)(function ($arg$$4) {
      return (0, _Util.equals)(node$$1.nodeId, g$$1.nodeIdentity($arg$$4));
    }, path)) {
      f$$37((0, _List.reverse)(path));
    } else {
      (0, _List.iterate)((0, _Util.partialApply)(1, trace, [(0, _Types.L)(node$$1.nodeData, path)]), node$$1.nodeNeighbours);
    }
  };

  (0, _List.iterate)(function (node$$2) {
    trace((0, _Types.L)(), node$$2);
  }, g$$1["nodes@363-1"]);
}

function nullableSlotEmpty() {
  return null;
}

function nullableSlotFull(x$$25) {
  return x$$25;
}

const cache$00601 = (0, _Types.declare)(function cache$00601(arg1) {
  this.cacheVal = arg1;
}, _Types.Record);
exports.cache$00601 = cache$00601;

function newCache() {
  return new cache$00601(nullableSlotEmpty());
}