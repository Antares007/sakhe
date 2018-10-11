"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetTreeModule$$$empty = SetTreeModule$$$empty;
exports.SetTreeModule$$$height = SetTreeModule$$$height;
exports.SetTreeModule$$$mk = SetTreeModule$$$mk;
exports.SetTreeModule$$$rebalance = SetTreeModule$$$rebalance;
exports.SetTreeModule$$$add = SetTreeModule$$$add;
exports.SetTreeModule$$$balance = SetTreeModule$$$balance;
exports.SetTreeModule$$$split = SetTreeModule$$$split;
exports.SetTreeModule$$$spliceOutSuccessor = SetTreeModule$$$spliceOutSuccessor;
exports.SetTreeModule$$$remove = SetTreeModule$$$remove;
exports.SetTreeModule$$$contains = SetTreeModule$$$contains;
exports.SetTreeModule$$$iter = SetTreeModule$$$iter;
exports.SetTreeModule$$$fold = SetTreeModule$$$fold;
exports.SetTreeModule$$$forAll = SetTreeModule$$$forAll;
exports.SetTreeModule$$$exists = SetTreeModule$$$exists;
exports.SetTreeModule$$$isEmpty = SetTreeModule$$$isEmpty;
exports.SetTreeModule$$$subset = SetTreeModule$$$subset;
exports.SetTreeModule$$$elementsAux = SetTreeModule$$$elementsAux;
exports.SetTreeModule$$$elements = SetTreeModule$$$elements;
exports.SetTreeModule$$$filterAux = SetTreeModule$$$filterAux;
exports.SetTreeModule$$$filter = SetTreeModule$$$filter;
exports.SetTreeModule$$$diffAux = SetTreeModule$$$diffAux;
exports.SetTreeModule$$$diff = SetTreeModule$$$diff;
exports.SetTreeModule$$$countAux = SetTreeModule$$$countAux;
exports.SetTreeModule$$$count = SetTreeModule$$$count;
exports.SetTreeModule$$$union = SetTreeModule$$$union;
exports.SetTreeModule$$$intersectionAux = SetTreeModule$$$intersectionAux;
exports.SetTreeModule$$$intersection = SetTreeModule$$$intersection;
exports.SetTreeModule$$$partition1 = SetTreeModule$$$partition1;
exports.SetTreeModule$$$partitionAux = SetTreeModule$$$partitionAux;
exports.SetTreeModule$$$partition = SetTreeModule$$$partition;
exports.SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C = SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C;
exports.SetTreeModule$$$nextElemCont = SetTreeModule$$$nextElemCont;
exports.SetTreeModule$$$nextElem = SetTreeModule$$$nextElem;
exports.SetTreeModule$$$prevElemCont = SetTreeModule$$$prevElemCont;
exports.SetTreeModule$$$prevElem = SetTreeModule$$$prevElem;
exports.SetTreeModule$$$minimumElementAux = SetTreeModule$$$minimumElementAux;
exports.SetTreeModule$$$minimumElementOpt = SetTreeModule$$$minimumElementOpt;
exports.SetTreeModule$$$maximumElementAux = SetTreeModule$$$maximumElementAux;
exports.SetTreeModule$$$maximumElementOpt = SetTreeModule$$$maximumElementOpt;
exports.SetTreeModule$$$minimumElement = SetTreeModule$$$minimumElement;
exports.SetTreeModule$$$maximumElement = SetTreeModule$$$maximumElement;
exports.SetTreeModule$002ESetIterator$00601$$$$002Ector$$3D130E36 = SetTreeModule$002ESetIterator$00601$$$$002Ector$$3D130E36;
exports.SetTreeModule$002ESetIterator$00601$$get_Current = SetTreeModule$002ESetIterator$00601$$get_Current;
exports.SetTreeModule$002ESetIterator$00601$$MoveNext = SetTreeModule$002ESetIterator$00601$$MoveNext;
exports.SetTreeModule$$$toSeq = SetTreeModule$$$toSeq;
exports.SetTreeModule$$$compareStacks = SetTreeModule$$$compareStacks;
exports.SetTreeModule$$$compare = SetTreeModule$$$compare;
exports.SetTreeModule$$$choose = SetTreeModule$$$choose;
exports.SetTreeModule$$$toList = SetTreeModule$$$toList;
exports.SetTreeModule$$$copyToArray = SetTreeModule$$$copyToArray;
exports.SetTreeModule$$$toArray = SetTreeModule$$$toArray;
exports.SetTreeModule$$$mkFromEnumerator = SetTreeModule$$$mkFromEnumerator;
exports.SetTreeModule$$$ofSeq = SetTreeModule$$$ofSeq;
exports.SetTreeModule$$$ofArray = SetTreeModule$$$ofArray;
exports.Set$00602$$$$002Ector$$Z430296A9 = Set$00602$$$$002Ector$$Z430296A9;
exports.Set$00602$$get_Tree = Set$00602$$get_Tree;
exports.Set$00602$$get_Comparer = Set$00602$$get_Comparer;
exports.Set$00602$$$Empty$$2B594 = Set$00602$$$Empty$$2B594;
exports.Set$00602$$Add$$2B595 = Set$00602$$Add$$2B595;
exports.Set$00602$$Remove$$2B595 = Set$00602$$Remove$$2B595;
exports.Set$00602$$get_Count = Set$00602$$get_Count;
exports.Set$00602$$Contains$$2B595 = Set$00602$$Contains$$2B595;
exports.Set$00602$$Iterate$$5028453F = Set$00602$$Iterate$$5028453F;
exports.Set$00602$$Fold = Set$00602$$Fold;
exports.Set$00602$$get_IsEmpty = Set$00602$$get_IsEmpty;
exports.Set$00602$$Partition$$Z1D55A0D7 = Set$00602$$Partition$$Z1D55A0D7;
exports.Set$00602$$Filter$$Z1D55A0D7 = Set$00602$$Filter$$Z1D55A0D7;
exports.Set$00602$$Exists$$Z1D55A0D7 = Set$00602$$Exists$$Z1D55A0D7;
exports.Set$00602$$ForAll$$Z1D55A0D7 = Set$00602$$ForAll$$Z1D55A0D7;
exports.Set$00602$$$op_Subtraction$$Z31A6FA40 = Set$00602$$$op_Subtraction$$Z31A6FA40;
exports.Set$00602$$$op_Addition$$Z31A6FA40 = Set$00602$$$op_Addition$$Z31A6FA40;
exports.Set$00602$$$Intersection$$Z31A6FA40 = Set$00602$$$Intersection$$Z31A6FA40;
exports.Set$00602$$$Union$$Z31A6FA40 = Set$00602$$$Union$$Z31A6FA40;
exports.Set$00602$$$Difference$$Z31A6FA40 = Set$00602$$$Difference$$Z31A6FA40;
exports.Set$00602$$$Equality$$Z31A6FA40 = Set$00602$$$Equality$$Z31A6FA40;
exports.Set$00602$$$Compare$$Z31A6FA40 = Set$00602$$$Compare$$Z31A6FA40;
exports.Set$00602$$get_Choose = Set$00602$$get_Choose;
exports.Set$00602$$get_MinimumElement = Set$00602$$get_MinimumElement;
exports.Set$00602$$get_MaximumElement = Set$00602$$get_MaximumElement;
exports.Set$00602$$IsSubsetOf$$424E482E = Set$00602$$IsSubsetOf$$424E482E;
exports.Set$00602$$IsSupersetOf$$424E482E = Set$00602$$IsSupersetOf$$424E482E;
exports.Set$00602$$ToList = Set$00602$$ToList;
exports.Set$00602$$ToArray = Set$00602$$ToArray;
exports.Set$00602$$ComputeHashCode = Set$00602$$ComputeHashCode;
exports.Set$00602$$$Singleton$$5BDD81 = Set$00602$$$Singleton$$5BDD81;
exports.Set$00602$$$Create$$E23F2E = Set$00602$$$Create$$E23F2E;
exports.MapTreeModule$$$empty = MapTreeModule$$$empty;
exports.MapTreeModule$$$rebalance = MapTreeModule$$$rebalance;
exports.MapTreeModule$$$sizeAux = MapTreeModule$$$sizeAux;
exports.MapTreeModule$$$MapOne = MapTreeModule$$$MapOne;
exports.MapTreeModule$$$count = MapTreeModule$$$count;
exports.MapTreeModule$$$add = MapTreeModule$$$add;
exports.MapTreeModule$$$indexNotFound = MapTreeModule$$$indexNotFound;
exports.MapTreeModule$$$find = MapTreeModule$$$find;
exports.MapTreeModule$$$tryFind = MapTreeModule$$$tryFind;
exports.MapTreeModule$$$partition1 = MapTreeModule$$$partition1;
exports.MapTreeModule$$$partitionAux = MapTreeModule$$$partitionAux;
exports.MapTreeModule$$$partition = MapTreeModule$$$partition;
exports.MapTreeModule$$$filter1 = MapTreeModule$$$filter1;
exports.MapTreeModule$$$filterAux = MapTreeModule$$$filterAux;
exports.MapTreeModule$$$filter = MapTreeModule$$$filter;
exports.MapTreeModule$$$spliceOutSuccessor = MapTreeModule$$$spliceOutSuccessor;
exports.MapTreeModule$$$remove = MapTreeModule$$$remove;
exports.MapTreeModule$$$containsKey = MapTreeModule$$$containsKey;
exports.MapTreeModule$$$iter = MapTreeModule$$$iter;
exports.MapTreeModule$$$first = MapTreeModule$$$first;
exports.MapTreeModule$$$exists = MapTreeModule$$$exists;
exports.MapTreeModule$$$forAll = MapTreeModule$$$forAll;
exports.MapTreeModule$$$map = MapTreeModule$$$map;
exports.MapTreeModule$$$mapi = MapTreeModule$$$mapi;
exports.MapTreeModule$$$fold = MapTreeModule$$$fold;
exports.MapTreeModule$$$foldSection = MapTreeModule$$$foldSection;
exports.MapTreeModule$$$foldMap = MapTreeModule$$$foldMap;
exports.MapTreeModule$$$toList = MapTreeModule$$$toList;
exports.MapTreeModule$$$toArray = MapTreeModule$$$toArray;
exports.MapTreeModule$$$ofList = MapTreeModule$$$ofList;
exports.MapTreeModule$$$mkFromEnumerator = MapTreeModule$$$mkFromEnumerator;
exports.MapTreeModule$$$ofSeq = MapTreeModule$$$ofSeq;
exports.MapTreeModule$$$copyToArray = MapTreeModule$$$copyToArray;
exports.MapTreeModule$002EMapIterator$00602$$$$002Ector$$19A7B9B6 = MapTreeModule$002EMapIterator$00602$$$$002Ector$$19A7B9B6;
exports.MapTreeModule$002EMapIterator$00602$$get_Current = MapTreeModule$002EMapIterator$00602$$get_Current;
exports.MapTreeModule$002EMapIterator$00602$$MoveNext = MapTreeModule$002EMapIterator$00602$$MoveNext;
exports.MapTreeModule$$$toSeq = MapTreeModule$$$toSeq;
exports.Map$00603$$$$002Ector$$Z67B62129 = Map$00603$$$$002Ector$$Z67B62129;
exports.Map$00603$$get_Tree = Map$00603$$get_Tree;
exports.Map$00603$$get_Comparer = Map$00603$$get_Comparer;
exports.Map$00603$$$Empty$$2B597 = Map$00603$$$Empty$$2B597;
exports.Map$00603$$Add$$5BDDA1 = Map$00603$$Add$$5BDDA1;
exports.Map$00603$$get_IsEmpty = Map$00603$$get_IsEmpty;
exports.Map$00603$$get_Item$$2B595 = Map$00603$$get_Item$$2B595;
exports.Map$00603$$First$$72321DD7 = Map$00603$$First$$72321DD7;
exports.Map$00603$$Exists$$Z395DDC35 = Map$00603$$Exists$$Z395DDC35;
exports.Map$00603$$Filter$$Z395DDC35 = Map$00603$$Filter$$Z395DDC35;
exports.Map$00603$$ForAll$$Z395DDC35 = Map$00603$$ForAll$$Z395DDC35;
exports.Map$00603$$Fold = Map$00603$$Fold;
exports.Map$00603$$FoldSection = Map$00603$$FoldSection;
exports.Map$00603$$FoldAndMap = Map$00603$$FoldAndMap;
exports.Map$00603$$Iterate$$1DCFB91D = Map$00603$$Iterate$$1DCFB91D;
exports.Map$00603$$MapRange$$6DC7247 = Map$00603$$MapRange$$6DC7247;
exports.Map$00603$$Map$$Z6F6B671C = Map$00603$$Map$$Z6F6B671C;
exports.Map$00603$$Partition$$Z395DDC35 = Map$00603$$Partition$$Z395DDC35;
exports.Map$00603$$get_Count = Map$00603$$get_Count;
exports.Map$00603$$ContainsKey$$2B595 = Map$00603$$ContainsKey$$2B595;
exports.Map$00603$$Remove$$2B595 = Map$00603$$Remove$$2B595;
exports.Map$00603$$TryFind$$2B595 = Map$00603$$TryFind$$2B595;
exports.Map$00603$$ToList = Map$00603$$ToList;
exports.Map$00603$$ToArray = Map$00603$$ToArray;
exports.Map$00603$$$FromList$$2AD4A113 = Map$00603$$$FromList$$2AD4A113;
exports.Map$00603$$$Create$$11DDBEB6 = Map$00603$$$Create$$11DDBEB6;
exports.Map$00603$$ComputeHashCode = Map$00603$$ComputeHashCode;
exports.Map$00603 = exports.MapTreeModule$002EMapIterator$00602 = exports.MapTree$00602 = exports.Set$00602 = exports.SetTreeModule$002ESetIterator$00601 = exports.SetTreeModule$$$tolerance = exports.SetTree$00601 = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Option = require("../fable-core.2.0.3/Option");

var _Array = require("../fable-core.2.0.3/Array");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

const SetTree$00601 = (0, _Types.declare)(function SetTree$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SetTree$00601 = SetTree$00601;

function SetTreeModule$$$empty() {
  return new SetTree$00601(0, "SetEmpty");
}

function SetTreeModule$$$height(t) {
  if (t.tag === 1) {
    const h = t.fields[3] | 0;
    return h | 0;
  } else {
    return 0;
  }
}

const SetTreeModule$$$tolerance = 2;
exports.SetTreeModule$$$tolerance = SetTreeModule$$$tolerance;

function SetTreeModule$$$mk(l, hl, k, r, hr) {
  const m = (hl < hr ? hr : hl) | 0;
  return new SetTree$00601(1, "SetNode", k, l, r, m + 1);
}

function SetTreeModule$$$rebalance(t1, k$$1, t2) {
  const t1h = SetTreeModule$$$height(t1) | 0;
  const t2h = SetTreeModule$$$height(t2) | 0;

  if (t2h > t1h + SetTreeModule$$$tolerance) {
    if (t2.tag === 1) {
      const t2r = t2.fields[2];
      const t2l = t2.fields[1];
      const t2k = t2.fields[0];
      const t2lh = SetTreeModule$$$height(t2l) | 0;

      if (t2lh > t1h + 1) {
        if (t2l.tag === 1) {
          const t2lr = t2l.fields[2];
          const t2ll = t2l.fields[1];
          const t2lk = t2l.fields[0];
          const l$$1 = SetTreeModule$$$mk(t1, t1h, k$$1, t2ll, SetTreeModule$$$height(t2ll));
          const r$$1 = SetTreeModule$$$mk(t2lr, SetTreeModule$$$height(t2lr), t2k, t2r, SetTreeModule$$$height(t2r));
          return SetTreeModule$$$mk(l$$1, SetTreeModule$$$height(l$$1), t2lk, r$$1, SetTreeModule$$$height(r$$1));
        } else {
          throw new Error("rebalance");
        }
      } else {
        const l$$2 = SetTreeModule$$$mk(t1, t1h, k$$1, t2l, t2lh);
        return SetTreeModule$$$mk(l$$2, SetTreeModule$$$height(l$$2), t2k, t2r, SetTreeModule$$$height(t2r));
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + SetTreeModule$$$tolerance) {
    if (t1.tag === 1) {
      const t1r = t1.fields[2];
      const t1l = t1.fields[1];
      const t1k = t1.fields[0];
      const t1rh = SetTreeModule$$$height(t1r) | 0;

      if (t1rh > t2h + 1) {
        if (t1r.tag === 1) {
          const t1rr = t1r.fields[2];
          const t1rl = t1r.fields[1];
          const t1rk = t1r.fields[0];
          const l$$3 = SetTreeModule$$$mk(t1l, SetTreeModule$$$height(t1l), t1k, t1rl, SetTreeModule$$$height(t1rl));
          const r$$2 = SetTreeModule$$$mk(t1rr, SetTreeModule$$$height(t1rr), k$$1, t2, t2h);
          return SetTreeModule$$$mk(l$$3, SetTreeModule$$$height(l$$3), t1rk, r$$2, SetTreeModule$$$height(r$$2));
        } else {
          throw new Error("rebalance");
        }
      } else {
        const r$$3 = SetTreeModule$$$mk(t1r, t1rh, k$$1, t2, t2h);
        return SetTreeModule$$$mk(t1l, SetTreeModule$$$height(t1l), t1k, r$$3, SetTreeModule$$$height(r$$3));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return SetTreeModule$$$mk(t1, t1h, k$$1, t2, t2h);
  }
}

function SetTreeModule$$$add(comparer, k$$2, t$$1) {
  if (t$$1.tag === 0) {
    return new SetTree$00601(1, "SetNode", k$$2, new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty"), 1);
  } else {
    const r$$4 = t$$1.fields[2];
    const l$$4 = t$$1.fields[1];
    const k2 = t$$1.fields[0];
    const c = comparer.Compare(k$$2, k2) | 0;

    if (c < 0) {
      return SetTreeModule$$$rebalance(SetTreeModule$$$add(comparer, k$$2, l$$4), k2, r$$4);
    } else if (c === 0) {
      return t$$1;
    } else {
      return SetTreeModule$$$rebalance(l$$4, k2, SetTreeModule$$$add(comparer, k$$2, r$$4));
    }
  }
}

function SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t2$$1) {
  const matchValue = [t1$$1, t2$$1];

  if (matchValue[0].tag === 1) {
    if (matchValue[1].tag === 1) {
      if (matchValue[0].fields[3] + SetTreeModule$$$tolerance < matchValue[1].fields[3]) {
        return SetTreeModule$$$rebalance(SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, matchValue[1].fields[1]), matchValue[1].fields[0], matchValue[1].fields[2]);
      } else if (matchValue[1].fields[3] + SetTreeModule$$$tolerance < matchValue[0].fields[3]) {
        return SetTreeModule$$$rebalance(matchValue[0].fields[1], matchValue[0].fields[0], SetTreeModule$$$balance(comparer$$1, matchValue[0].fields[2], k$$3, t2$$1));
      } else {
        return SetTreeModule$$$mk(t1$$1, matchValue[0].fields[3], k$$3, t2$$1, matchValue[1].fields[3]);
      }
    } else {
      return SetTreeModule$$$add(comparer$$1, k$$3, matchValue[0]);
    }
  } else {
    return SetTreeModule$$$add(comparer$$1, k$$3, matchValue[1]);
  }
}

function SetTreeModule$$$split(comparer$$2, pivot, t$$2) {
  if (t$$2.tag === 0) {
    return [new SetTree$00601(0, "SetEmpty"), false, new SetTree$00601(0, "SetEmpty")];
  } else {
    const t12$$1 = t$$2.fields[2];
    const t11$$1 = t$$2.fields[1];
    const k1$$1 = t$$2.fields[0];
    const c$$1 = comparer$$2.Compare(pivot, k1$$1) | 0;

    if (c$$1 < 0) {
      const patternInput = SetTreeModule$$$split(comparer$$2, pivot, t11$$1);
      return [patternInput[0], patternInput[1], SetTreeModule$$$balance(comparer$$2, patternInput[2], k1$$1, t12$$1)];
    } else if (c$$1 === 0) {
      return [t11$$1, true, t12$$1];
    } else {
      const patternInput$$1 = SetTreeModule$$$split(comparer$$2, pivot, t12$$1);
      return [SetTreeModule$$$balance(comparer$$2, t11$$1, k1$$1, patternInput$$1[0]), patternInput$$1[1], patternInput$$1[2]];
    }
  }
}

function SetTreeModule$$$spliceOutSuccessor(t$$3) {
  if (t$$3.tag === 1) {
    const r$$5 = t$$3.fields[2];
    const l$$5 = t$$3.fields[1];
    const k2$$2 = t$$3.fields[0];

    if (l$$5.tag === 0) {
      return [k2$$2, r$$5];
    } else {
      const patternInput$$2 = SetTreeModule$$$spliceOutSuccessor(l$$5);
      return [patternInput$$2[0], SetTreeModule$$$mk(patternInput$$2[1], SetTreeModule$$$height(patternInput$$2[1]), k2$$2, r$$5, SetTreeModule$$$height(r$$5))];
    }
  } else {
    throw new Error("internal error: Map.splice_out_succ_or_pred");
  }
}

function SetTreeModule$$$remove(comparer$$3, k$$4, t$$4) {
  if (t$$4.tag === 1) {
    const r$$6 = t$$4.fields[2];
    const l$$6 = t$$4.fields[1];
    const k2$$3 = t$$4.fields[0];
    const c$$2 = comparer$$3.Compare(k$$4, k2$$3) | 0;

    if (c$$2 < 0) {
      return SetTreeModule$$$rebalance(SetTreeModule$$$remove(comparer$$3, k$$4, l$$6), k2$$3, r$$6);
    } else if (c$$2 === 0) {
      const matchValue$$1 = [l$$6, r$$6];

      if (matchValue$$1[0].tag === 0) {
        return r$$6;
      } else if (matchValue$$1[1].tag === 0) {
        return l$$6;
      } else {
        const patternInput$$3 = SetTreeModule$$$spliceOutSuccessor(r$$6);
        return SetTreeModule$$$mk(l$$6, SetTreeModule$$$height(l$$6), patternInput$$3[0], patternInput$$3[1], SetTreeModule$$$height(patternInput$$3[1]));
      }
    } else {
      return SetTreeModule$$$rebalance(l$$6, k2$$3, SetTreeModule$$$remove(comparer$$3, k$$4, r$$6));
    }
  } else {
    return t$$4;
  }
}

function SetTreeModule$$$contains(comparer$$4, k$$5, t$$5) {
  SetTreeModule$$$contains: while (true) {
    if (t$$5.tag === 0) {
      return false;
    } else {
      const r$$7 = t$$5.fields[2];
      const l$$7 = t$$5.fields[1];
      const k2$$4 = t$$5.fields[0];
      const c$$3 = comparer$$4.Compare(k$$5, k2$$4) | 0;

      if (c$$3 < 0) {
        comparer$$4 = comparer$$4;
        k$$5 = k$$5;
        t$$5 = l$$7;
        continue SetTreeModule$$$contains;
      } else if (c$$3 === 0) {
        return true;
      } else {
        comparer$$4 = comparer$$4;
        k$$5 = k$$5;
        t$$5 = r$$7;
        continue SetTreeModule$$$contains;
      }
    }
  }
}

function SetTreeModule$$$iter(f, t$$6) {
  if (t$$6.tag === 0) {} else {
    const r$$8 = t$$6.fields[2];
    const l$$8 = t$$6.fields[1];
    const k2$$5 = t$$6.fields[0];
    SetTreeModule$$$iter(f, l$$8);
    f(k2$$5);
    SetTreeModule$$$iter(f, r$$8);
  }
}

function SetTreeModule$$$fold($arg$$7, $arg$$8, $arg$$9) {
  SetTreeModule$$$fold: while (true) {
    const f$$1 = $arg$$7,
          m$$1 = $arg$$8,
          x$$1 = $arg$$9;

    if (m$$1.tag === 0) {
      return x$$1;
    } else {
      const r$$9 = m$$1.fields[2];
      const l$$9 = m$$1.fields[1];
      const k$$6 = m$$1.fields[0];
      $arg$$7 = f$$1;
      $arg$$8 = r$$9;
      $arg$$9 = f$$1(k$$6, SetTreeModule$$$fold(f$$1, l$$9, x$$1));
      continue SetTreeModule$$$fold;
    }
  }
}

function SetTreeModule$$$forAll($arg$$10, $arg$$11) {
  SetTreeModule$$$forAll: while (true) {
    const f$$2 = $arg$$10,
          m$$2 = $arg$$11;

    if (m$$2.tag === 0) {
      return true;
    } else {
      const r$$10 = m$$2.fields[2];
      const l$$10 = m$$2.fields[1];
      const k2$$6 = m$$2.fields[0];

      if (f$$2(k2$$6) ? SetTreeModule$$$forAll(f$$2, l$$10) : false) {
        $arg$$10 = f$$2;
        $arg$$11 = r$$10;
        continue SetTreeModule$$$forAll;
      } else {
        return false;
      }
    }
  }
}

function SetTreeModule$$$exists($arg$$12, $arg$$13) {
  SetTreeModule$$$exists: while (true) {
    const f$$3 = $arg$$12,
          m$$3 = $arg$$13;

    if (m$$3.tag === 0) {
      return false;
    } else {
      const r$$11 = m$$3.fields[2];
      const l$$11 = m$$3.fields[1];
      const k2$$7 = m$$3.fields[0];

      if (f$$3(k2$$7) ? true : SetTreeModule$$$exists(f$$3, l$$11)) {
        return true;
      } else {
        $arg$$12 = f$$3;
        $arg$$13 = r$$11;
        continue SetTreeModule$$$exists;
      }
    }
  }
}

function SetTreeModule$$$isEmpty(m$$4) {
  if (m$$4.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function SetTreeModule$$$subset(comparer$$5, a, b) {
  return SetTreeModule$$$forAll(function (x$$2) {
    return SetTreeModule$$$contains(comparer$$5, x$$2, b);
  }, a);
}

function SetTreeModule$$$elementsAux(m$$5, acc) {
  if (m$$5.tag === 0) {
    return acc;
  } else {
    const r$$12 = m$$5.fields[2];
    const l$$12 = m$$5.fields[1];
    const k2$$8 = m$$5.fields[0];
    return (0, _Types.L)(k2$$8, SetTreeModule$$$elementsAux(l$$12, SetTreeModule$$$elementsAux(r$$12, acc)));
  }
}

function SetTreeModule$$$elements(a$$1) {
  return SetTreeModule$$$elementsAux(a$$1, (0, _Types.L)());
}

function SetTreeModule$$$filterAux($arg$$14, $arg$$15, $arg$$16, $arg$$17) {
  SetTreeModule$$$filterAux: while (true) {
    const comparer$$6 = $arg$$14,
          f$$4 = $arg$$15,
          s = $arg$$16,
          acc$$1 = $arg$$17;

    if (s.tag === 0) {
      return acc$$1;
    } else {
      const r$$13 = s.fields[2];
      const l$$13 = s.fields[1];
      const k$$7 = s.fields[0];
      const acc$$2 = f$$4(k$$7) ? SetTreeModule$$$add(comparer$$6, k$$7, acc$$1) : acc$$1;
      $arg$$14 = comparer$$6;
      $arg$$15 = f$$4;
      $arg$$16 = l$$13;
      $arg$$17 = SetTreeModule$$$filterAux(comparer$$6, f$$4, r$$13, acc$$2);
      continue SetTreeModule$$$filterAux;
    }
  }
}

function SetTreeModule$$$filter(comparer$$7, f$$5, s$$1) {
  return SetTreeModule$$$filterAux(comparer$$7, f$$5, s$$1, SetTreeModule$$$empty());
}

function SetTreeModule$$$diffAux(comparer$$8, m$$6, acc$$3) {
  SetTreeModule$$$diffAux: while (true) {
    if (m$$6.tag === 0) {
      return acc$$3;
    } else {
      const r$$14 = m$$6.fields[2];
      const l$$14 = m$$6.fields[1];
      const k$$8 = m$$6.fields[0];
      const $var$$21 = comparer$$8;
      m$$6 = l$$14;
      acc$$3 = SetTreeModule$$$diffAux(comparer$$8, r$$14, SetTreeModule$$$remove(comparer$$8, k$$8, acc$$3));
      comparer$$8 = $var$$21;
      continue SetTreeModule$$$diffAux;
    }
  }
}

function SetTreeModule$$$diff(comparer$$9, a$$2, b$$1) {
  return SetTreeModule$$$diffAux(comparer$$9, b$$1, a$$2);
}

function SetTreeModule$$$countAux(s$$2, acc$$4) {
  SetTreeModule$$$countAux: while (true) {
    if (s$$2.tag === 0) {
      return acc$$4 | 0;
    } else {
      const r$$15 = s$$2.fields[2];
      const l$$15 = s$$2.fields[1];
      s$$2 = l$$15;
      acc$$4 = SetTreeModule$$$countAux(r$$15, acc$$4 + 1);
      continue SetTreeModule$$$countAux;
    }
  }
}

function SetTreeModule$$$count(s$$3) {
  return SetTreeModule$$$countAux(s$$3, 0);
}

function SetTreeModule$$$union(comparer$$10, t1$$3, t2$$3) {
  const matchValue$$2 = [t1$$3, t2$$3];

  if (matchValue$$2[0].tag === 0) {
    return matchValue$$2[1];
  } else if (matchValue$$2[1].tag === 0) {
    return matchValue$$2[0];
  } else {
    if (matchValue$$2[0].fields[3] > matchValue$$2[1].fields[3]) {
      const patternInput$$4 = SetTreeModule$$$split(comparer$$10, matchValue$$2[0].fields[0], t2$$3);
      return SetTreeModule$$$balance(comparer$$10, SetTreeModule$$$union(comparer$$10, matchValue$$2[0].fields[1], patternInput$$4[0]), matchValue$$2[0].fields[0], SetTreeModule$$$union(comparer$$10, matchValue$$2[0].fields[2], patternInput$$4[2]));
    } else {
      const patternInput$$5 = SetTreeModule$$$split(comparer$$10, matchValue$$2[1].fields[0], t1$$3);
      return SetTreeModule$$$balance(comparer$$10, SetTreeModule$$$union(comparer$$10, matchValue$$2[1].fields[1], patternInput$$5[0]), matchValue$$2[1].fields[0], SetTreeModule$$$union(comparer$$10, matchValue$$2[1].fields[2], patternInput$$5[2]));
    }
  }
}

function SetTreeModule$$$intersectionAux(comparer$$11, b$$2, m$$7, acc$$5) {
  SetTreeModule$$$intersectionAux: while (true) {
    if (m$$7.tag === 0) {
      return acc$$5;
    } else {
      const r$$16 = m$$7.fields[2];
      const l$$16 = m$$7.fields[1];
      const k$$9 = m$$7.fields[0];
      const acc$$6 = SetTreeModule$$$intersectionAux(comparer$$11, b$$2, r$$16, acc$$5);
      const acc$$7 = SetTreeModule$$$contains(comparer$$11, k$$9, b$$2) ? SetTreeModule$$$add(comparer$$11, k$$9, acc$$6) : acc$$6;
      comparer$$11 = comparer$$11;
      b$$2 = b$$2;
      m$$7 = l$$16;
      acc$$5 = acc$$7;
      continue SetTreeModule$$$intersectionAux;
    }
  }
}

function SetTreeModule$$$intersection(comparer$$12, a$$3, b$$3) {
  return SetTreeModule$$$intersectionAux(comparer$$12, b$$3, a$$3, SetTreeModule$$$empty());
}

function SetTreeModule$$$partition1(comparer$$13, f$$6, k$$10, acc1, acc2) {
  if (f$$6(k$$10)) {
    return [SetTreeModule$$$add(comparer$$13, k$$10, acc1), acc2];
  } else {
    return [acc1, SetTreeModule$$$add(comparer$$13, k$$10, acc2)];
  }
}

function SetTreeModule$$$partitionAux($arg$$27, $arg$$28, $arg$$29, $arg$$30, $arg$$31) {
  SetTreeModule$$$partitionAux: while (true) {
    const comparer$$14 = $arg$$27,
          f$$7 = $arg$$28,
          s$$4 = $arg$$29,
          acc_0 = $arg$$30,
          acc_1 = $arg$$31;
    const acc$$8 = [acc_0, acc_1];

    if (s$$4.tag === 0) {
      return acc$$8;
    } else {
      const r$$17 = s$$4.fields[2];
      const l$$17 = s$$4.fields[1];
      const k$$11 = s$$4.fields[0];
      const acc$$9 = SetTreeModule$$$partitionAux(comparer$$14, f$$7, r$$17, acc$$8[0], acc$$8[1]);
      const acc$$10 = SetTreeModule$$$partition1(comparer$$14, f$$7, k$$11, acc$$9[0], acc$$9[1]);
      $arg$$27 = comparer$$14;
      $arg$$28 = f$$7;
      $arg$$29 = l$$17;
      $arg$$30 = acc$$10[0];
      $arg$$31 = acc$$10[1];
      continue SetTreeModule$$$partitionAux;
    }
  }
}

function SetTreeModule$$$partition(comparer$$15, f$$8, s$$5) {
  return SetTreeModule$$$partitionAux(comparer$$15, f$$8, s$$5, SetTreeModule$$$empty(), SetTreeModule$$$empty());
}

function SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C(s$$6) {
  if (s$$6.tag === 0) {
    return new _Option.Choice(1, "Choice2Of2", null);
  } else {
    const r$$18 = s$$6.fields[2];
    const l$$18 = s$$6.fields[1];
    const k2$$10 = s$$6.fields[0];
    return new _Option.Choice(0, "Choice1Of2", [k2$$10, l$$18, r$$18]);
  }
}

function SetTreeModule$$$nextElemCont($arg$$35, $arg$$36, $arg$$37, $arg$$38) {
  SetTreeModule$$$nextElemCont: while (true) {
    const comparer$$16 = $arg$$35,
          k$$12 = $arg$$36,
          s$$7 = $arg$$37,
          cont = $arg$$38;
    const activePatternResult8881 = SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C(s$$7);

    if (activePatternResult8881.tag === 1) {
      return cont(null);
    } else {
      const c$$4 = comparer$$16.Compare(k$$12, activePatternResult8881.fields[0][0]) | 0;

      if (c$$4 < 0) {
        $arg$$35 = comparer$$16;
        $arg$$36 = k$$12;
        $arg$$37 = activePatternResult8881.fields[0][1];

        $arg$$38 = function (_arg1) {
          if (_arg1 == null) {
            return cont((0, _Option.some)(activePatternResult8881.fields[0][0]));
          } else {
            const res = _arg1;
            return res;
          }
        };

        continue SetTreeModule$$$nextElemCont;
      } else if (c$$4 === 0) {
        return cont(SetTreeModule$$$minimumElementOpt(activePatternResult8881.fields[0][2]));
      } else {
        $arg$$35 = comparer$$16;
        $arg$$36 = k$$12;
        $arg$$37 = activePatternResult8881.fields[0][2];
        $arg$$38 = cont;
        continue SetTreeModule$$$nextElemCont;
      }
    }
  }
}

function SetTreeModule$$$nextElem(comparer$$17, k$$13, s$$8) {
  return SetTreeModule$$$nextElemCont(comparer$$17, k$$13, s$$8, function (res$$1) {
    return res$$1;
  });
}

function SetTreeModule$$$prevElemCont($arg$$39, $arg$$40, $arg$$41, $arg$$42) {
  SetTreeModule$$$prevElemCont: while (true) {
    const comparer$$18 = $arg$$39,
          k$$14 = $arg$$40,
          s$$9 = $arg$$41,
          cont$$1 = $arg$$42;
    const activePatternResult8891 = SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C(s$$9);

    if (activePatternResult8891.tag === 1) {
      return cont$$1(null);
    } else {
      const c$$5 = comparer$$18.Compare(k$$14, activePatternResult8891.fields[0][0]) | 0;

      if (c$$5 > 0) {
        $arg$$39 = comparer$$18;
        $arg$$40 = k$$14;
        $arg$$41 = activePatternResult8891.fields[0][2];

        $arg$$42 = function (_arg2) {
          if (_arg2 == null) {
            return cont$$1((0, _Option.some)(activePatternResult8891.fields[0][0]));
          } else {
            const res$$2 = _arg2;
            return res$$2;
          }
        };

        continue SetTreeModule$$$prevElemCont;
      } else if (c$$5 === 0) {
        return cont$$1(SetTreeModule$$$maximumElementOpt(activePatternResult8891.fields[0][2]));
      } else {
        $arg$$39 = comparer$$18;
        $arg$$40 = k$$14;
        $arg$$41 = activePatternResult8891.fields[0][1];
        $arg$$42 = cont$$1;
        continue SetTreeModule$$$prevElemCont;
      }
    }
  }
}

function SetTreeModule$$$prevElem(comparer$$19, k$$15, s$$10) {
  return SetTreeModule$$$prevElemCont(comparer$$19, k$$15, s$$10, function (res$$3) {
    return res$$3;
  });
}

function SetTreeModule$$$minimumElementAux(s$$11, n) {
  SetTreeModule$$$minimumElementAux: while (true) {
    if (s$$11.tag === 0) {
      return n;
    } else {
      const l$$21 = s$$11.fields[1];
      const k$$16 = s$$11.fields[0];
      s$$11 = l$$21;
      n = k$$16;
      continue SetTreeModule$$$minimumElementAux;
    }
  }
}

function SetTreeModule$$$minimumElementOpt(s$$12) {
  if (s$$12.tag === 0) {
    return null;
  } else {
    const l$$22 = s$$12.fields[1];
    const k$$17 = s$$12.fields[0];
    return (0, _Option.some)(SetTreeModule$$$minimumElementAux(l$$22, k$$17));
  }
}

function SetTreeModule$$$maximumElementAux(s$$13, n$$1) {
  SetTreeModule$$$maximumElementAux: while (true) {
    if (s$$13.tag === 0) {
      return n$$1;
    } else {
      const r$$21 = s$$13.fields[2];
      const k$$18 = s$$13.fields[0];
      s$$13 = r$$21;
      n$$1 = k$$18;
      continue SetTreeModule$$$maximumElementAux;
    }
  }
}

function SetTreeModule$$$maximumElementOpt(s$$14) {
  if (s$$14.tag === 0) {
    return null;
  } else {
    const r$$22 = s$$14.fields[2];
    const k$$19 = s$$14.fields[0];
    return (0, _Option.some)(SetTreeModule$$$maximumElementAux(r$$22, k$$19));
  }
}

function SetTreeModule$$$minimumElement(s$$15) {
  const matchValue$$3 = SetTreeModule$$$minimumElementOpt(s$$15);

  if (matchValue$$3 == null) {
    throw new Error("minimumElement");
  } else {
    const k$$20 = (0, _Option.value)(matchValue$$3);
    return k$$20;
  }
}

function SetTreeModule$$$maximumElement(s$$16) {
  const matchValue$$4 = SetTreeModule$$$maximumElementOpt(s$$16);

  if (matchValue$$4 == null) {
    throw new Error("maximumElement");
  } else {
    const k$$21 = (0, _Option.value)(matchValue$$4);
    return k$$21;
  }
}

const SetTreeModule$002ESetIterator$00601 = (0, _Types.declare)(function SetTreeModule$002ESetIterator$00601(s$$17) {
  const $this$$1 = this;
  $this$$1.stack = SetTreeModule$002ESetIterator$00601$$collapseLHS$$6A01F4AA($this$$1, (0, _Types.L)(s$$17, (0, _Types.L)()));
  $this$$1.started = false;
});
exports.SetTreeModule$002ESetIterator$00601 = SetTreeModule$002ESetIterator$00601;

function SetTreeModule$002ESetIterator$00601$$$$002Ector$$3D130E36(s$$17) {
  return this != null ? SetTreeModule$002ESetIterator$00601.call(this, s$$17) : new SetTreeModule$002ESetIterator$00601(s$$17);
}

function SetTreeModule$002ESetIterator$00601$$get_Current(i) {
  if (i.started) {
    const matchValue$$5 = i.stack;

    if (matchValue$$5.tail == null) {
      return SetTreeModule$002ESetIterator$00601$$alreadyFinished(i);
    } else if (matchValue$$5.head.tag === 1) {
      return matchValue$$5.head.fields[0];
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
  } else {
    return SetTreeModule$002ESetIterator$00601$$notStarted(i);
  }
}

function SetTreeModule$002ESetIterator$00601$$MoveNext(i$$1) {
  if (i$$1.started) {
    const matchValue$$6 = i$$1.stack;

    if (matchValue$$6.tail == null) {
      return false;
    } else if (matchValue$$6.head.tag === 1) {
      i$$1.stack = SetTreeModule$002ESetIterator$00601$$collapseLHS$$6A01F4AA(i$$1, matchValue$$6.tail);
      return !(i$$1.stack.tail == null);
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
    }
  } else {
    i$$1.started = true;
    return !(i$$1.stack.tail == null);
  }
}

function SetTreeModule$002ESetIterator$00601$$collapseLHS$$6A01F4AA(this$, stack$$1) {
  SetTreeModule$002ESetIterator$00601$$collapseLHS$$6A01F4AA: while (true) {
    var $target$$43, rest$$1, k$$23, l$$23, r$$23, rest$$2;

    if (stack$$1.tail != null) {
      if (stack$$1.head.tag === 1) {
        if (stack$$1.head.fields[1].tag === 0) {
          if (stack$$1.head.fields[2].tag === 0) {
            $target$$43 = 2;
          } else {
            $target$$43 = 3;
            k$$23 = stack$$1.head.fields[0];
            l$$23 = stack$$1.head.fields[1];
            r$$23 = stack$$1.head.fields[2];
            rest$$2 = stack$$1.tail;
          }
        } else {
          $target$$43 = 3;
          k$$23 = stack$$1.head.fields[0];
          l$$23 = stack$$1.head.fields[1];
          r$$23 = stack$$1.head.fields[2];
          rest$$2 = stack$$1.tail;
        }
      } else {
        $target$$43 = 1;
        rest$$1 = stack$$1.tail;
      }
    } else {
      $target$$43 = 0;
    }

    switch ($target$$43) {
      case 0:
        {
          return (0, _Types.L)();
        }

      case 1:
        {
          this$ = this$;
          stack$$1 = rest$$1;
          continue SetTreeModule$002ESetIterator$00601$$collapseLHS$$6A01F4AA;
        }

      case 2:
        {
          return stack$$1;
        }

      case 3:
        {
          this$ = this$;
          stack$$1 = (0, _Types.L)(l$$23, (0, _Types.L)(new SetTree$00601(1, "SetNode", k$$23, new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty"), 1), (0, _Types.L)(r$$23, rest$$2)));
          continue SetTreeModule$002ESetIterator$00601$$collapseLHS$$6A01F4AA;
        }
    }
  }
}

function SetTreeModule$002ESetIterator$00601$$notStarted(this$$$1) {
  throw new Error("Enumeration has not started. Call MoveNext.");
}

function SetTreeModule$002ESetIterator$00601$$alreadyFinished(this$$$2) {
  throw new Error("Enumeration already finished.");
}

function SetTreeModule$$$toSeq(s$$18) {
  const i$$2 = new _Types.FSharpRef(SetTreeModule$002ESetIterator$00601$$$$002Ector$$3D130E36(s$$18));
  return {
    get Current() {
      return SetTreeModule$002ESetIterator$00601$$get_Current(i$$2.contents);
    },

    get Current() {
      return SetTreeModule$002ESetIterator$00601$$get_Current(i$$2.contents);
    },

    MoveNext() {
      return SetTreeModule$002ESetIterator$00601$$MoveNext(i$$2.contents);
    },

    Reset() {
      i$$2.contents = SetTreeModule$002ESetIterator$00601$$$$002Ector$$3D130E36(s$$18);
    },

    Dispose() {}

  };
}

function SetTreeModule$$$compareStacks(comparer$$20, l1, l2) {
  SetTreeModule$$$compareStacks: while (true) {
    const matchValue$$7 = [l1, l2];
    var $target$$44, t1$$4, t2$$4, n1k, n1r, n2k, n2r, t1$$5, t2$$5, n1k$$1, n1l, n1r$$1, t1$$6, n2k$$1, n2l, n2r$$1, t2$$6;

    if (matchValue$$7[0].tail != null) {
      if (matchValue$$7[1].tail != null) {
        if (matchValue$$7[1].head.tag === 1) {
          if (matchValue$$7[1].head.fields[1].tag === 0) {
            if (matchValue$$7[0].head.tag === 1) {
              if (matchValue$$7[0].head.fields[1].tag === 0) {
                $target$$44 = 4;
                n1k = matchValue$$7[0].head.fields[0];
                n1r = matchValue$$7[0].head.fields[2];
                n2k = matchValue$$7[1].head.fields[0];
                n2r = matchValue$$7[1].head.fields[2];
                t1$$5 = matchValue$$7[0].tail;
                t2$$5 = matchValue$$7[1].tail;
              } else {
                $target$$44 = 5;
                n1k$$1 = matchValue$$7[0].head.fields[0];
                n1l = matchValue$$7[0].head.fields[1];
                n1r$$1 = matchValue$$7[0].head.fields[2];
                t1$$6 = matchValue$$7[0].tail;
              }
            } else {
              $target$$44 = 6;
              n2k$$1 = matchValue$$7[1].head.fields[0];
              n2l = matchValue$$7[1].head.fields[1];
              n2r$$1 = matchValue$$7[1].head.fields[2];
              t2$$6 = matchValue$$7[1].tail;
            }
          } else if (matchValue$$7[0].head.tag === 1) {
            $target$$44 = 5;
            n1k$$1 = matchValue$$7[0].head.fields[0];
            n1l = matchValue$$7[0].head.fields[1];
            n1r$$1 = matchValue$$7[0].head.fields[2];
            t1$$6 = matchValue$$7[0].tail;
          } else {
            $target$$44 = 6;
            n2k$$1 = matchValue$$7[1].head.fields[0];
            n2l = matchValue$$7[1].head.fields[1];
            n2r$$1 = matchValue$$7[1].head.fields[2];
            t2$$6 = matchValue$$7[1].tail;
          }
        } else if (matchValue$$7[0].head.tag === 1) {
          $target$$44 = 5;
          n1k$$1 = matchValue$$7[0].head.fields[0];
          n1l = matchValue$$7[0].head.fields[1];
          n1r$$1 = matchValue$$7[0].head.fields[2];
          t1$$6 = matchValue$$7[0].tail;
        } else {
          $target$$44 = 3;
          t1$$4 = matchValue$$7[0].tail;
          t2$$4 = matchValue$$7[1].tail;
        }
      } else {
        $target$$44 = 2;
      }
    } else if (matchValue$$7[1].tail != null) {
      $target$$44 = 1;
    } else {
      $target$$44 = 0;
    }

    switch ($target$$44) {
      case 0:
        {
          return 0;
        }

      case 1:
        {
          return -1 | 0;
        }

      case 2:
        {
          return 1;
        }

      case 3:
        {
          comparer$$20 = comparer$$20;
          l1 = t1$$4;
          l2 = t2$$4;
          continue SetTreeModule$$$compareStacks;
        }

      case 4:
        {
          const c$$6 = comparer$$20.Compare(n1k, n2k) | 0;

          if (c$$6 !== 0) {
            return c$$6 | 0;
          } else {
            comparer$$20 = comparer$$20;
            l1 = (0, _Types.L)(n1r, t1$$5);
            l2 = (0, _Types.L)(n2r, t2$$5);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 5:
        {
          comparer$$20 = comparer$$20;
          l1 = (0, _Types.L)(n1l, (0, _Types.L)(new SetTree$00601(1, "SetNode", n1k$$1, SetTreeModule$$$empty(), n1r$$1, 0), t1$$6));
          l2 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 6:
        {
          comparer$$20 = comparer$$20;
          l1 = l1;
          l2 = (0, _Types.L)(n2l, (0, _Types.L)(new SetTree$00601(1, "SetNode", n2k$$1, SetTreeModule$$$empty(), n2r$$1, 0), t2$$6));
          continue SetTreeModule$$$compareStacks;
        }
    }
  }
}

function SetTreeModule$$$compare(comparer$$21, s1, s2) {
  const matchValue$$8 = [s1, s2];

  if (matchValue$$8[0].tag === 0) {
    if (matchValue$$8[1].tag === 0) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (matchValue$$8[1].tag === 0) {
    return 1;
  } else {
    return SetTreeModule$$$compareStacks(comparer$$21, (0, _Types.L)(s1, (0, _Types.L)()), (0, _Types.L)(s2, (0, _Types.L)())) | 0;
  }
}

function SetTreeModule$$$choose(s$$19) {
  return SetTreeModule$$$minimumElement(s$$19);
}

function SetTreeModule$$$toList(s$$20) {
  const loop = function loop(m$$8, x$$4) {
    loop: while (true) {
      if (m$$8.tag === 0) {
        return x$$4;
      } else {
        const r$$24 = m$$8.fields[2];
        const l$$24 = m$$8.fields[1];
        const k$$24 = m$$8.fields[0];
        m$$8 = l$$24;
        x$$4 = (0, _Types.L)(k$$24, loop(r$$24, x$$4));
        continue loop;
      }
    }
  };

  return loop(s$$20, (0, _Types.L)());
}

function SetTreeModule$$$copyToArray(s$$21, arr, i$$3) {
  const j = new _Types.FSharpRef(i$$3);
  SetTreeModule$$$iter(function (x$$5) {
    arr[j.contents] = x$$5;
    j.contents = j.contents + 1;
  }, s$$21);
}

function SetTreeModule$$$toArray(s$$22) {
  const n$$2 = SetTreeModule$$$count(s$$22) | 0;
  const res$$4 = (0, _Array.fill)(new Array(n$$2), 0, n$$2, null);
  SetTreeModule$$$copyToArray(s$$22, res$$4, 0);
  return res$$4;
}

function SetTreeModule$$$mkFromEnumerator(comparer$$22, acc$$11, e) {
  SetTreeModule$$$mkFromEnumerator: while (true) {
    if (e.MoveNext()) {
      const $var$$45 = comparer$$22;
      acc$$11 = SetTreeModule$$$add(comparer$$22, e.Current, acc$$11);
      e = e;
      comparer$$22 = $var$$45;
      continue SetTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$11;
    }
  }
}

function SetTreeModule$$$ofSeq(comparer$$23, c$$7) {
  const ie = (0, _Seq.getEnumerator)(c$$7);

  try {
    return SetTreeModule$$$mkFromEnumerator(comparer$$23, SetTreeModule$$$empty(), ie);
  } finally {
    if ((0, _Util.isDisposable)(ie)) {
      ie.Dispose();
    }
  }
}

function SetTreeModule$$$ofArray(comparer$$24, l$$25) {
  return (0, _Array.fold)(function (acc$$12, k$$25) {
    return SetTreeModule$$$add(comparer$$24, k$$25, acc$$12);
  }, SetTreeModule$$$empty(), l$$25);
}

const Set$00602 = (0, _Types.declare)(function Set$00602(comparer$$25, tree) {
  const $this$$2 = this;
  $this$$2.comparer = comparer$$25;
  $this$$2.tree = tree;
});
exports.Set$00602 = Set$00602;

function Set$00602$$$$002Ector$$Z430296A9(comparer$$25, tree) {
  return this != null ? Set$00602.call(this, comparer$$25, tree) : new Set$00602(comparer$$25, tree);
}

(function Set$00602$$$$002Ecctor() {})();

function Set$00602$$get_Tree(s$$23) {
  return s$$23.tree;
}

function Set$00602$$get_Comparer(s$$24) {
  return s$$24.comparer;
}

function Set$00602$$$Empty$$2B594(comparer$$26) {
  return Set$00602$$$$002Ector$$Z430296A9(comparer$$26, SetTreeModule$$$empty());
}

function Set$00602$$Add$$2B595(s$$25, x$$6) {
  return Set$00602$$$refresh(s$$25, SetTreeModule$$$add(s$$25.comparer, x$$6, s$$25.tree));
}

function Set$00602$$Remove$$2B595(s$$26, x$$7) {
  return Set$00602$$$refresh(s$$26, SetTreeModule$$$remove(s$$26.comparer, x$$7, s$$26.tree));
}

function Set$00602$$get_Count(s$$27) {
  return SetTreeModule$$$count(s$$27.tree);
}

function Set$00602$$Contains$$2B595(s$$28, x$$8) {
  return SetTreeModule$$$contains(s$$28.comparer, x$$8, s$$28.tree);
}

function Set$00602$$Iterate$$5028453F(s$$29, x$$9) {
  SetTreeModule$$$iter(x$$9, s$$29.tree);
}

function Set$00602$$Fold(s$$30, f$$9, x$$10) {
  return SetTreeModule$$$fold(f$$9, s$$30.tree, x$$10);
}

function Set$00602$$get_IsEmpty(s$$31) {
  return SetTreeModule$$$isEmpty(s$$31.tree);
}

function Set$00602$$Partition$$Z1D55A0D7(s$$32, f$$10) {
  if (s$$32.tree.tag === 0) {
    return [s$$32, s$$32];
  } else {
    const patternInput$$6 = SetTreeModule$$$partition(s$$32.comparer, f$$10, s$$32.tree);
    return [Set$00602$$$refresh(s$$32, patternInput$$6[0]), Set$00602$$$refresh(s$$32, patternInput$$6[1])];
  }
}

function Set$00602$$Filter$$Z1D55A0D7(s$$33, f$$11) {
  if (s$$33.tree.tag === 0) {
    return s$$33;
  } else {
    return Set$00602$$$refresh(s$$33, SetTreeModule$$$filter(s$$33.comparer, f$$11, s$$33.tree));
  }
}

function Set$00602$$Exists$$Z1D55A0D7(s$$34, f$$12) {
  return SetTreeModule$$$exists(f$$12, s$$34.tree);
}

function Set$00602$$ForAll$$Z1D55A0D7(s$$35, f$$13) {
  return SetTreeModule$$$forAll(f$$13, s$$35.tree);
}

function Set$00602$$$op_Subtraction$$Z31A6FA40(a$$4, b$$4) {
  return Set$00602$$$Difference$$Z31A6FA40(a$$4, b$$4);
}

function Set$00602$$$op_Addition$$Z31A6FA40(a$$5, b$$5) {
  return Set$00602$$$Union$$Z31A6FA40(a$$5, b$$5);
}

function Set$00602$$$Intersection$$Z31A6FA40(a$$6, b$$6) {
  if (Set$00602$$get_Tree(b$$6).tag === 0) {
    return b$$6;
  } else if (Set$00602$$get_Tree(a$$6).tag === 0) {
    return a$$6;
  } else {
    return Set$00602$$$refresh(a$$6, SetTreeModule$$$intersection(Set$00602$$get_Comparer(a$$6), Set$00602$$get_Tree(a$$6), Set$00602$$get_Tree(b$$6)));
  }
}

function Set$00602$$$Union$$Z31A6FA40(a$$7, b$$7) {
  if (Set$00602$$get_Tree(b$$7).tag === 0) {
    return a$$7;
  } else if (Set$00602$$get_Tree(a$$7).tag === 0) {
    return b$$7;
  } else {
    return Set$00602$$$refresh(a$$7, SetTreeModule$$$union(Set$00602$$get_Comparer(a$$7), Set$00602$$get_Tree(a$$7), Set$00602$$get_Tree(b$$7)));
  }
}

function Set$00602$$$Difference$$Z31A6FA40(a$$8, b$$8) {
  if (Set$00602$$get_Tree(a$$8).tag === 0) {
    return a$$8;
  } else if (Set$00602$$get_Tree(b$$8).tag === 0) {
    return a$$8;
  } else {
    return Set$00602$$$refresh(a$$8, SetTreeModule$$$diff(Set$00602$$get_Comparer(a$$8), Set$00602$$get_Tree(a$$8), Set$00602$$get_Tree(b$$8)));
  }
}

function Set$00602$$$Equality$$Z31A6FA40(a$$9, b$$9) {
  return SetTreeModule$$$compare(Set$00602$$get_Comparer(a$$9), Set$00602$$get_Tree(a$$9), Set$00602$$get_Tree(b$$9)) === 0;
}

function Set$00602$$$Compare$$Z31A6FA40(a$$10, b$$10) {
  return SetTreeModule$$$compare(Set$00602$$get_Comparer(a$$10), Set$00602$$get_Tree(a$$10), Set$00602$$get_Tree(b$$10));
}

function Set$00602$$get_Choose(s$$36) {
  return SetTreeModule$$$choose(s$$36.tree);
}

function Set$00602$$get_MinimumElement(s$$37) {
  return SetTreeModule$$$minimumElement(s$$37.tree);
}

function Set$00602$$get_MaximumElement(s$$38) {
  return SetTreeModule$$$maximumElement(s$$38.tree);
}

function Set$00602$$IsSubsetOf$$424E482E(s$$39, y) {
  return SetTreeModule$$$subset(s$$39.comparer, s$$39.tree, Set$00602$$get_Tree(y));
}

function Set$00602$$IsSupersetOf$$424E482E(s$$40, y$$1) {
  return SetTreeModule$$$subset(s$$40.comparer, Set$00602$$get_Tree(y$$1), s$$40.tree);
}

function Set$00602$$ToList(s$$41) {
  return SetTreeModule$$$toList(s$$41.tree);
}

function Set$00602$$ToArray(s$$42) {
  return SetTreeModule$$$toArray(s$$42.tree);
}

Set$00602.prototype.Equals = function (that) {
  const this$$$3 = this;
  return this$$$3.CompareTo(that) === 0;
};

function Set$00602$$ComputeHashCode(this$$$4) {
  const combineHash = function combineHash(x$$11, y$$2) {
    return (x$$11 << 1) + y$$2 + 631;
  };

  let res$$5 = 0;
  (0, _Seq.iterate)(function (x$$12) {
    res$$5 = combineHash(res$$5, (0, _Util.structuralHash)(x$$12));
  }, this$$$4);
  return Math.abs(res$$5) | 0;
}

Set$00602.prototype.GetHashCode = function () {
  const this$$$5 = this;
  return Set$00602$$ComputeHashCode(this$$$5) | 0;
};

function Set$00602$$$Singleton$$5BDD81(comparer$$27, x$$13) {
  return Set$00602$$Add$$2B595(Set$00602$$$Empty$$2B594(comparer$$27), x$$13);
}

function Set$00602$$$Create$$E23F2E(comparer$$28, l$$26) {
  return Set$00602$$$$002Ector$$Z430296A9(comparer$$28, SetTreeModule$$$ofSeq(comparer$$28, l$$26));
}

Set$00602.prototype.CompareTo = function (s2$$1) {
  const s1$$1 = this;
  return SetTreeModule$$$compare(Set$00602$$get_Comparer(s1$$1), Set$00602$$get_Tree(s1$$1), Set$00602$$get_Tree(s2$$1)) | 0;
};

Set$00602.prototype.Add = function (_arg1$$1) {
  throw new Error("ReadOnlyCollection");
};

Set$00602.prototype.Clear = function () {
  throw new Error("ReadOnlyCollection");
};

Set$00602.prototype.Remove = function (_arg2$$1) {
  throw new Error("ReadOnlyCollection");
};

Set$00602.prototype.Contains = function (x$$14) {
  const s$$46 = this;
  return SetTreeModule$$$contains(s$$46.comparer, x$$14, s$$46.tree);
};

Set$00602.prototype.CopyTo = function (arr$$1, i$$4) {
  const s$$47 = this;
  SetTreeModule$$$copyToArray(s$$47.tree, arr$$1, i$$4);
};

Object.defineProperty(Set$00602.prototype, "IsReadOnly", {
  "get": function () {
    return true;
  }
});
Object.defineProperty(Set$00602.prototype, "Count", {
  "get": function () {
    const s$$49 = this;
    return SetTreeModule$$$count(s$$49.tree) | 0;
  }
});

Set$00602.prototype[Symbol.iterator] = function () {
  const s$$50 = this;
  return (0, _Seq.toIterator)(SetTreeModule$$$toSeq(s$$50.tree));
};

function Set$00602$$$refresh(s$$51, t$$15) {
  return Set$00602$$$$002Ector$$Z430296A9(Set$00602$$get_Comparer(s$$51), t$$15);
}

const MapTree$00602 = (0, _Types.declare)(function MapTree$00602(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MapTree$00602 = MapTree$00602;

function MapTreeModule$$$empty() {
  return new MapTree$00602(0, "MapEmpty");
}

function MapTreeModule$$$rebalance(t1$$8, k$$26, v, t2$$8) {
  var h$$3, h$$14;
  let t1h$$2;

  if (t1$$8.tag === 1) {
    const h$$1 = t1$$8.fields[4] | 0;
    t1h$$2 = h$$1;
  } else {
    t1h$$2 = 0;
  }

  let t2h$$2;

  if (t2$$8.tag === 1) {
    const h$$2 = t2$$8.fields[4] | 0;
    t2h$$2 = h$$2;
  } else {
    t2h$$2 = 0;
  }

  if (t2h$$2 > t1h$$2 + 2) {
    if (t2$$8.tag === 1) {
      const t2v = t2$$8.fields[1];
      const t2r$$1 = t2$$8.fields[3];
      const t2l$$1 = t2$$8.fields[2];
      const t2k$$1 = t2$$8.fields[0];

      if ((t2l$$1.tag === 1 ? (h$$3 = t2l$$1.fields[4] | 0, h$$3) : 0) > t1h$$2 + 1) {
        if (t2l$$1.tag === 1) {
          const t2lv = t2l$$1.fields[1];
          const t2lr$$1 = t2l$$1.fields[3];
          const t2ll$$1 = t2l$$1.fields[2];
          const t2lk$$1 = t2l$$1.fields[0];
          let l$$29;
          let hl$$1;

          if (t1$$8.tag === 1) {
            const h$$4 = t1$$8.fields[4] | 0;
            hl$$1 = h$$4;
          } else {
            hl$$1 = 0;
          }

          let hr$$1;

          if (t2ll$$1.tag === 1) {
            const h$$5 = t2ll$$1.fields[4] | 0;
            hr$$1 = h$$5;
          } else {
            hr$$1 = 0;
          }

          const m$$9 = (hl$$1 < hr$$1 ? hr$$1 : hl$$1) | 0;
          l$$29 = new MapTree$00602(1, "MapNode", k$$26, v, t1$$8, t2ll$$1, m$$9 + 1);
          let r$$27;
          let hl$$2;

          if (t2lr$$1.tag === 1) {
            const h$$6 = t2lr$$1.fields[4] | 0;
            hl$$2 = h$$6;
          } else {
            hl$$2 = 0;
          }

          let hr$$2;

          if (t2r$$1.tag === 1) {
            const h$$7 = t2r$$1.fields[4] | 0;
            hr$$2 = h$$7;
          } else {
            hr$$2 = 0;
          }

          const m$$10 = (hl$$2 < hr$$2 ? hr$$2 : hl$$2) | 0;
          r$$27 = new MapTree$00602(1, "MapNode", t2k$$1, t2v, t2lr$$1, t2r$$1, m$$10 + 1);
          let hl$$3;

          if (l$$29.tag === 1) {
            const h$$8 = l$$29.fields[4] | 0;
            hl$$3 = h$$8;
          } else {
            hl$$3 = 0;
          }

          let hr$$3;

          if (r$$27.tag === 1) {
            const h$$9 = r$$27.fields[4] | 0;
            hr$$3 = h$$9;
          } else {
            hr$$3 = 0;
          }

          const m$$11 = (hl$$3 < hr$$3 ? hr$$3 : hl$$3) | 0;
          return new MapTree$00602(1, "MapNode", t2lk$$1, t2lv, l$$29, r$$27, m$$11 + 1);
        } else {
          throw new Error("rebalance");
        }
      } else {
        let l$$31;
        let hl$$4;

        if (t1$$8.tag === 1) {
          const h$$10 = t1$$8.fields[4] | 0;
          hl$$4 = h$$10;
        } else {
          hl$$4 = 0;
        }

        let hr$$4;

        if (t2l$$1.tag === 1) {
          const h$$11 = t2l$$1.fields[4] | 0;
          hr$$4 = h$$11;
        } else {
          hr$$4 = 0;
        }

        const m$$12 = (hl$$4 < hr$$4 ? hr$$4 : hl$$4) | 0;
        l$$31 = new MapTree$00602(1, "MapNode", k$$26, v, t1$$8, t2l$$1, m$$12 + 1);
        let hl$$5;

        if (l$$31.tag === 1) {
          const h$$12 = l$$31.fields[4] | 0;
          hl$$5 = h$$12;
        } else {
          hl$$5 = 0;
        }

        let hr$$5;

        if (t2r$$1.tag === 1) {
          const h$$13 = t2r$$1.fields[4] | 0;
          hr$$5 = h$$13;
        } else {
          hr$$5 = 0;
        }

        const m$$13 = (hl$$5 < hr$$5 ? hr$$5 : hl$$5) | 0;
        return new MapTree$00602(1, "MapNode", t2k$$1, t2v, l$$31, t2r$$1, m$$13 + 1);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h$$2 > t2h$$2 + 2) {
    if (t1$$8.tag === 1) {
      const t1v = t1$$8.fields[1];
      const t1r$$1 = t1$$8.fields[3];
      const t1l$$1 = t1$$8.fields[2];
      const t1k$$1 = t1$$8.fields[0];

      if ((t1r$$1.tag === 1 ? (h$$14 = t1r$$1.fields[4] | 0, h$$14) : 0) > t2h$$2 + 1) {
        if (t1r$$1.tag === 1) {
          const t1rv = t1r$$1.fields[1];
          const t1rr$$1 = t1r$$1.fields[3];
          const t1rl$$1 = t1r$$1.fields[2];
          const t1rk$$1 = t1r$$1.fields[0];
          let l$$34;
          let hl$$6;

          if (t1l$$1.tag === 1) {
            const h$$15 = t1l$$1.fields[4] | 0;
            hl$$6 = h$$15;
          } else {
            hl$$6 = 0;
          }

          let hr$$6;

          if (t1rl$$1.tag === 1) {
            const h$$16 = t1rl$$1.fields[4] | 0;
            hr$$6 = h$$16;
          } else {
            hr$$6 = 0;
          }

          const m$$14 = (hl$$6 < hr$$6 ? hr$$6 : hl$$6) | 0;
          l$$34 = new MapTree$00602(1, "MapNode", t1k$$1, t1v, t1l$$1, t1rl$$1, m$$14 + 1);
          let r$$32;
          let hl$$7;

          if (t1rr$$1.tag === 1) {
            const h$$17 = t1rr$$1.fields[4] | 0;
            hl$$7 = h$$17;
          } else {
            hl$$7 = 0;
          }

          let hr$$7;

          if (t2$$8.tag === 1) {
            const h$$18 = t2$$8.fields[4] | 0;
            hr$$7 = h$$18;
          } else {
            hr$$7 = 0;
          }

          const m$$15 = (hl$$7 < hr$$7 ? hr$$7 : hl$$7) | 0;
          r$$32 = new MapTree$00602(1, "MapNode", k$$26, v, t1rr$$1, t2$$8, m$$15 + 1);
          let hl$$8;

          if (l$$34.tag === 1) {
            const h$$19 = l$$34.fields[4] | 0;
            hl$$8 = h$$19;
          } else {
            hl$$8 = 0;
          }

          let hr$$8;

          if (r$$32.tag === 1) {
            const h$$20 = r$$32.fields[4] | 0;
            hr$$8 = h$$20;
          } else {
            hr$$8 = 0;
          }

          const m$$16 = (hl$$8 < hr$$8 ? hr$$8 : hl$$8) | 0;
          return new MapTree$00602(1, "MapNode", t1rk$$1, t1rv, l$$34, r$$32, m$$16 + 1);
        } else {
          throw new Error("rebalance");
        }
      } else {
        let r$$34;
        let hl$$9;

        if (t1r$$1.tag === 1) {
          const h$$21 = t1r$$1.fields[4] | 0;
          hl$$9 = h$$21;
        } else {
          hl$$9 = 0;
        }

        let hr$$9;

        if (t2$$8.tag === 1) {
          const h$$22 = t2$$8.fields[4] | 0;
          hr$$9 = h$$22;
        } else {
          hr$$9 = 0;
        }

        const m$$17 = (hl$$9 < hr$$9 ? hr$$9 : hl$$9) | 0;
        r$$34 = new MapTree$00602(1, "MapNode", k$$26, v, t1r$$1, t2$$8, m$$17 + 1);
        let hl$$10;

        if (t1l$$1.tag === 1) {
          const h$$23 = t1l$$1.fields[4] | 0;
          hl$$10 = h$$23;
        } else {
          hl$$10 = 0;
        }

        let hr$$10;

        if (r$$34.tag === 1) {
          const h$$24 = r$$34.fields[4] | 0;
          hr$$10 = h$$24;
        } else {
          hr$$10 = 0;
        }

        const m$$18 = (hl$$10 < hr$$10 ? hr$$10 : hl$$10) | 0;
        return new MapTree$00602(1, "MapNode", t1k$$1, t1v, t1l$$1, r$$34, m$$18 + 1);
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    let hl$$11;

    if (t1$$8.tag === 1) {
      const h$$25 = t1$$8.fields[4] | 0;
      hl$$11 = h$$25;
    } else {
      hl$$11 = 0;
    }

    let hr$$11;

    if (t2$$8.tag === 1) {
      const h$$26 = t2$$8.fields[4] | 0;
      hr$$11 = h$$26;
    } else {
      hr$$11 = 0;
    }

    const m$$19 = (hl$$11 < hr$$11 ? hr$$11 : hl$$11) | 0;
    return new MapTree$00602(1, "MapNode", k$$26, v, t1$$8, t2$$8, m$$19 + 1);
  }
}

function MapTreeModule$$$sizeAux(acc$$13, m$$20) {
  MapTreeModule$$$sizeAux: while (true) {
    if (m$$20.tag === 1) {
      const r$$36 = m$$20.fields[3];
      const l$$38 = m$$20.fields[2];
      acc$$13 = MapTreeModule$$$sizeAux(acc$$13 + 1, l$$38);
      m$$20 = r$$36;
      continue MapTreeModule$$$sizeAux;
    } else {
      return acc$$13 | 0;
    }
  }
}

function MapTreeModule$$$MapOne(k$$38, v$$12) {
  return new MapTree$00602(1, "MapNode", k$$38, v$$12, new MapTree$00602(0, "MapEmpty"), new MapTree$00602(0, "MapEmpty"), 1);
}

function MapTreeModule$$$count(x$$41) {
  return MapTreeModule$$$sizeAux(0, x$$41);
}

function MapTreeModule$$$add(comparer$$29, k$$39, v$$13, m$$21) {
  if (m$$21.tag === 1) {
    const v2 = m$$21.fields[1];
    const r$$37 = m$$21.fields[3];
    const l$$39 = m$$21.fields[2];
    const k2$$13 = m$$21.fields[0];
    const h$$27 = m$$21.fields[4] | 0;
    const c$$8 = comparer$$29.Compare(k$$39, k2$$13) | 0;

    if (c$$8 < 0) {
      return MapTreeModule$$$rebalance(MapTreeModule$$$add(comparer$$29, k$$39, v$$13, l$$39), k2$$13, v2, r$$37);
    } else if (c$$8 === 0) {
      return new MapTree$00602(1, "MapNode", k$$39, v$$13, l$$39, r$$37, h$$27);
    } else {
      return MapTreeModule$$$rebalance(l$$39, k2$$13, v2, MapTreeModule$$$add(comparer$$29, k$$39, v$$13, r$$37));
    }
  } else {
    return MapTreeModule$$$MapOne(k$$39, v$$13);
  }
}

function MapTreeModule$$$indexNotFound() {
  throw new Error("An index satisfying the predicate was not found in the collection");
}

function MapTreeModule$$$find(comparer$$30, k$$40, m$$22) {
  MapTreeModule$$$find: while (true) {
    if (m$$22.tag === 1) {
      const v2$$1 = m$$22.fields[1];
      const r$$38 = m$$22.fields[3];
      const l$$40 = m$$22.fields[2];
      const k2$$14 = m$$22.fields[0];
      const c$$9 = comparer$$30.Compare(k$$40, k2$$14) | 0;

      if (c$$9 < 0) {
        comparer$$30 = comparer$$30;
        k$$40 = k$$40;
        m$$22 = l$$40;
        continue MapTreeModule$$$find;
      } else if (c$$9 === 0) {
        return v2$$1;
      } else {
        comparer$$30 = comparer$$30;
        k$$40 = k$$40;
        m$$22 = r$$38;
        continue MapTreeModule$$$find;
      }
    } else {
      return MapTreeModule$$$indexNotFound();
    }
  }
}

function MapTreeModule$$$tryFind(comparer$$31, k$$41, m$$23) {
  MapTreeModule$$$tryFind: while (true) {
    if (m$$23.tag === 1) {
      const v2$$2 = m$$23.fields[1];
      const r$$39 = m$$23.fields[3];
      const l$$41 = m$$23.fields[2];
      const k2$$15 = m$$23.fields[0];
      const c$$10 = comparer$$31.Compare(k$$41, k2$$15) | 0;

      if (c$$10 < 0) {
        comparer$$31 = comparer$$31;
        k$$41 = k$$41;
        m$$23 = l$$41;
        continue MapTreeModule$$$tryFind;
      } else if (c$$10 === 0) {
        return (0, _Option.some)(v2$$2);
      } else {
        comparer$$31 = comparer$$31;
        k$$41 = k$$41;
        m$$23 = r$$39;
        continue MapTreeModule$$$tryFind;
      }
    } else {
      return null;
    }
  }
}

function MapTreeModule$$$partition1(comparer$$32, f$$14, k$$42, v$$14, acc1$$2, acc2$$2) {
  if (f$$14(k$$42, v$$14)) {
    return [MapTreeModule$$$add(comparer$$32, k$$42, v$$14, acc1$$2), acc2$$2];
  } else {
    return [acc1$$2, MapTreeModule$$$add(comparer$$32, k$$42, v$$14, acc2$$2)];
  }
}

function MapTreeModule$$$partitionAux($arg$$65, $arg$$66, $arg$$67, $arg$$68, $arg$$69) {
  MapTreeModule$$$partitionAux: while (true) {
    const comparer$$33 = $arg$$65,
          f$$15 = $arg$$66,
          s$$52 = $arg$$67,
          acc_0$$1 = $arg$$68,
          acc_1$$1 = $arg$$69;
    const acc$$14 = [acc_0$$1, acc_1$$1];

    if (s$$52.tag === 1) {
      const v$$15 = s$$52.fields[1];
      const r$$40 = s$$52.fields[3];
      const l$$42 = s$$52.fields[2];
      const k$$43 = s$$52.fields[0];
      const acc$$15 = MapTreeModule$$$partitionAux(comparer$$33, f$$15, r$$40, acc$$14[0], acc$$14[1]);
      const acc$$16 = MapTreeModule$$$partition1(comparer$$33, f$$15, k$$43, v$$15, acc$$15[0], acc$$15[1]);
      $arg$$65 = comparer$$33;
      $arg$$66 = f$$15;
      $arg$$67 = l$$42;
      $arg$$68 = acc$$16[0];
      $arg$$69 = acc$$16[1];
      continue MapTreeModule$$$partitionAux;
    } else {
      return acc$$14;
    }
  }
}

function MapTreeModule$$$partition(comparer$$34, f$$16, s$$53) {
  return MapTreeModule$$$partitionAux(comparer$$34, f$$16, s$$53, MapTreeModule$$$empty(), MapTreeModule$$$empty());
}

function MapTreeModule$$$filter1(comparer$$35, f$$17, k$$44, v$$16, acc$$17) {
  if (f$$17(k$$44, v$$16)) {
    return MapTreeModule$$$add(comparer$$35, k$$44, v$$16, acc$$17);
  } else {
    return acc$$17;
  }
}

function MapTreeModule$$$filterAux($arg$$78, $arg$$79, $arg$$80, $arg$$81) {
  MapTreeModule$$$filterAux: while (true) {
    const comparer$$36 = $arg$$78,
          f$$18 = $arg$$79,
          s$$54 = $arg$$80,
          acc$$18 = $arg$$81;

    if (s$$54.tag === 1) {
      const v$$17 = s$$54.fields[1];
      const r$$41 = s$$54.fields[3];
      const l$$43 = s$$54.fields[2];
      const k$$45 = s$$54.fields[0];
      const acc$$19 = MapTreeModule$$$filterAux(comparer$$36, f$$18, l$$43, acc$$18);
      const acc$$20 = MapTreeModule$$$filter1(comparer$$36, f$$18, k$$45, v$$17, acc$$19);
      $arg$$78 = comparer$$36;
      $arg$$79 = f$$18;
      $arg$$80 = r$$41;
      $arg$$81 = acc$$20;
      continue MapTreeModule$$$filterAux;
    } else {
      return acc$$18;
    }
  }
}

function MapTreeModule$$$filter(comparer$$37, f$$19, s$$55) {
  return MapTreeModule$$$filterAux(comparer$$37, f$$19, s$$55, MapTreeModule$$$empty());
}

function MapTreeModule$$$spliceOutSuccessor(m$$24) {
  var hl$$12, h$$28, hr$$12, h$$29, m$$25;

  if (m$$24.tag === 1) {
    const v2$$3 = m$$24.fields[1];
    const r$$42 = m$$24.fields[3];
    const l$$44 = m$$24.fields[2];
    const k2$$16 = m$$24.fields[0];

    if (l$$44.tag === 0) {
      return [k2$$16, v2$$3, r$$42];
    } else {
      const patternInput$$7 = MapTreeModule$$$spliceOutSuccessor(l$$44);
      return [patternInput$$7[0], patternInput$$7[1], (hl$$12 = (patternInput$$7[2].tag === 1 ? (h$$28 = patternInput$$7[2].fields[4] | 0, h$$28) : 0) | 0, (hr$$12 = (r$$42.tag === 1 ? (h$$29 = r$$42.fields[4] | 0, h$$29) : 0) | 0, (m$$25 = (hl$$12 < hr$$12 ? hr$$12 : hl$$12) | 0, new MapTree$00602(1, "MapNode", k2$$16, v2$$3, patternInput$$7[2], r$$42, m$$25 + 1))))];
    }
  } else {
    throw new Error("internal error: Map.splice_out_succ_or_pred");
  }
}

function MapTreeModule$$$remove(comparer$$38, k$$47, m$$26) {
  if (m$$26.tag === 1) {
    const v2$$4 = m$$26.fields[1];
    const r$$44 = m$$26.fields[3];
    const l$$46 = m$$26.fields[2];
    const k2$$17 = m$$26.fields[0];
    const c$$11 = comparer$$38.Compare(k$$47, k2$$17) | 0;

    if (c$$11 < 0) {
      return MapTreeModule$$$rebalance(MapTreeModule$$$remove(comparer$$38, k$$47, l$$46), k2$$17, v2$$4, r$$44);
    } else if (c$$11 === 0) {
      const matchValue$$17 = [l$$46, r$$44];

      if (matchValue$$17[0].tag === 0) {
        return r$$44;
      } else if (matchValue$$17[1].tag === 0) {
        return l$$46;
      } else {
        const patternInput$$8 = MapTreeModule$$$spliceOutSuccessor(r$$44);
        let hl$$13;

        if (l$$46.tag === 1) {
          const h$$30 = l$$46.fields[4] | 0;
          hl$$13 = h$$30;
        } else {
          hl$$13 = 0;
        }

        let hr$$13;

        if (patternInput$$8[2].tag === 1) {
          const h$$31 = patternInput$$8[2].fields[4] | 0;
          hr$$13 = h$$31;
        } else {
          hr$$13 = 0;
        }

        const m$$27 = (hl$$13 < hr$$13 ? hr$$13 : hl$$13) | 0;
        return new MapTree$00602(1, "MapNode", patternInput$$8[0], patternInput$$8[1], l$$46, patternInput$$8[2], m$$27 + 1);
      }
    } else {
      return MapTreeModule$$$rebalance(l$$46, k2$$17, v2$$4, MapTreeModule$$$remove(comparer$$38, k$$47, r$$44));
    }
  } else {
    return MapTreeModule$$$empty();
  }
}

function MapTreeModule$$$containsKey(comparer$$39, k$$49, m$$28) {
  MapTreeModule$$$containsKey: while (true) {
    if (m$$28.tag === 1) {
      const r$$46 = m$$28.fields[3];
      const l$$48 = m$$28.fields[2];
      const k2$$18 = m$$28.fields[0];
      const c$$12 = comparer$$39.Compare(k$$49, k2$$18) | 0;

      if (c$$12 < 0) {
        comparer$$39 = comparer$$39;
        k$$49 = k$$49;
        m$$28 = l$$48;
        continue MapTreeModule$$$containsKey;
      } else if (c$$12 === 0) {
        return true;
      } else {
        comparer$$39 = comparer$$39;
        k$$49 = k$$49;
        m$$28 = r$$46;
        continue MapTreeModule$$$containsKey;
      }
    } else {
      return false;
    }
  }
}

function MapTreeModule$$$iter(f$$20, m$$29) {
  if (m$$29.tag === 1) {
    const v2$$5 = m$$29.fields[1];
    const r$$47 = m$$29.fields[3];
    const l$$49 = m$$29.fields[2];
    const k2$$19 = m$$29.fields[0];
    MapTreeModule$$$iter(f$$20, l$$49);
    f$$20(k2$$19, v2$$5);
    MapTreeModule$$$iter(f$$20, r$$47);
  }
}

function MapTreeModule$$$first($arg$$87, $arg$$88) {
  MapTreeModule$$$first: while (true) {
    const f$$21 = $arg$$87,
          m$$30 = $arg$$88;

    if (m$$30.tag === 1) {
      const v2$$6 = m$$30.fields[1];
      const r$$48 = m$$30.fields[3];
      const l$$50 = m$$30.fields[2];
      const k2$$20 = m$$30.fields[0];
      const matchValue$$18 = MapTreeModule$$$first(f$$21, l$$50);

      if (matchValue$$18 == null) {
        const matchValue$$19 = f$$21(k2$$20, v2$$6);

        if (matchValue$$19 == null) {
          $arg$$87 = f$$21;
          $arg$$88 = r$$48;
          continue MapTreeModule$$$first;
        } else {
          const res$$7 = matchValue$$19;
          return res$$7;
        }
      } else {
        const res$$6 = matchValue$$18;
        return res$$6;
      }
    } else {
      return null;
    }
  }
}

function MapTreeModule$$$exists($arg$$89, $arg$$90) {
  MapTreeModule$$$exists: while (true) {
    const f$$22 = $arg$$89,
          m$$31 = $arg$$90;

    if (m$$31.tag === 1) {
      const v2$$7 = m$$31.fields[1];
      const r$$49 = m$$31.fields[3];
      const l$$51 = m$$31.fields[2];
      const k2$$21 = m$$31.fields[0];

      if (f$$22(k2$$21, v2$$7) ? true : MapTreeModule$$$exists(f$$22, l$$51)) {
        return true;
      } else {
        $arg$$89 = f$$22;
        $arg$$90 = r$$49;
        continue MapTreeModule$$$exists;
      }
    } else {
      return false;
    }
  }
}

function MapTreeModule$$$forAll($arg$$91, $arg$$92) {
  MapTreeModule$$$forAll: while (true) {
    const f$$23 = $arg$$91,
          m$$32 = $arg$$92;

    if (m$$32.tag === 1) {
      const v2$$8 = m$$32.fields[1];
      const r$$50 = m$$32.fields[3];
      const l$$52 = m$$32.fields[2];
      const k2$$22 = m$$32.fields[0];

      if (f$$23(k2$$22, v2$$8) ? MapTreeModule$$$forAll(f$$23, l$$52) : false) {
        $arg$$91 = f$$23;
        $arg$$92 = r$$50;
        continue MapTreeModule$$$forAll;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}

function MapTreeModule$$$map(f$$24, m$$33) {
  if (m$$33.tag === 1) {
    const v$$20 = m$$33.fields[1];
    const r$$51 = m$$33.fields[3];
    const l$$53 = m$$33.fields[2];
    const k$$50 = m$$33.fields[0];
    const h$$32 = m$$33.fields[4] | 0;
    const v2$$9 = f$$24(v$$20);
    return new MapTree$00602(1, "MapNode", k$$50, v2$$9, MapTreeModule$$$map(f$$24, l$$53), MapTreeModule$$$map(f$$24, r$$51), h$$32);
  } else {
    return MapTreeModule$$$empty();
  }
}

function MapTreeModule$$$mapi(f$$25, m$$34) {
  if (m$$34.tag === 1) {
    const v$$21 = m$$34.fields[1];
    const r$$52 = m$$34.fields[3];
    const l$$54 = m$$34.fields[2];
    const k$$51 = m$$34.fields[0];
    const h$$33 = m$$34.fields[4] | 0;
    const v2$$10 = f$$25(k$$51, v$$21);
    return new MapTree$00602(1, "MapNode", k$$51, v2$$10, MapTreeModule$$$mapi(f$$25, l$$54), MapTreeModule$$$mapi(f$$25, r$$52), h$$33);
  } else {
    return MapTreeModule$$$empty();
  }
}

function MapTreeModule$$$fold($arg$$97, $arg$$98, $arg$$99) {
  MapTreeModule$$$fold: while (true) {
    const f$$26 = $arg$$97,
          m$$35 = $arg$$98,
          x$$46 = $arg$$99;

    if (m$$35.tag === 1) {
      const v$$22 = m$$35.fields[1];
      const r$$53 = m$$35.fields[3];
      const l$$55 = m$$35.fields[2];
      const k$$52 = m$$35.fields[0];
      $arg$$97 = f$$26;
      $arg$$98 = l$$55;
      $arg$$99 = f$$26(k$$52, v$$22, MapTreeModule$$$fold(f$$26, r$$53, x$$46));
      continue MapTreeModule$$$fold;
    } else {
      return x$$46;
    }
  }
}

function MapTreeModule$$$foldSection(comparer$$40, lo$$2, hi$$2, f$$27, m$$36, x$$47) {
  const fold_from_to = function fold_from_to(f$$28, m$$37, x$$48) {
    if (m$$37.tag === 1) {
      const v$$23 = m$$37.fields[1];
      const r$$54 = m$$37.fields[3];
      const l$$56 = m$$37.fields[2];
      const k$$53 = m$$37.fields[0];
      const clo_k = comparer$$40.Compare(lo$$2, k$$53) | 0;
      const ck_hi = comparer$$40.Compare(k$$53, hi$$2) | 0;
      const x$$49 = clo_k < 0 ? fold_from_to(f$$28, l$$56, x$$48) : x$$48;
      const x$$50 = (clo_k <= 0 ? ck_hi <= 0 : false) ? f$$28(k$$53, v$$23, x$$49) : x$$49;
      const x$$51 = ck_hi < 0 ? fold_from_to(f$$28, r$$54, x$$50) : x$$50;
      return x$$51;
    } else {
      return x$$48;
    }
  };

  if (comparer$$40.Compare(lo$$2, hi$$2) === 1) {
    return x$$47;
  } else {
    return fold_from_to(f$$27, m$$36, x$$47);
  }
}

function MapTreeModule$$$foldMap($arg$$109, $arg$$110, $arg$$111, $arg$$112, $arg$$113) {
  MapTreeModule$$$foldMap: while (true) {
    const comparer$$41 = $arg$$109,
          f$$29 = $arg$$110,
          m$$38 = $arg$$111,
          z = $arg$$112,
          acc$$21 = $arg$$113;

    if (m$$38.tag === 1) {
      const v$$24 = m$$38.fields[1];
      const r$$55 = m$$38.fields[3];
      const l$$57 = m$$38.fields[2];
      const k$$54 = m$$38.fields[0];
      const patternInput$$9 = MapTreeModule$$$foldMap(comparer$$41, f$$29, r$$55, z, acc$$21);
      const patternInput$$10 = f$$29(k$$54, v$$24, patternInput$$9[1]);
      const acc$$23 = MapTreeModule$$$add(comparer$$41, k$$54, patternInput$$10[0], patternInput$$9[0]);
      $arg$$109 = comparer$$41;
      $arg$$110 = f$$29;
      $arg$$111 = l$$57;
      $arg$$112 = patternInput$$10[1];
      $arg$$113 = acc$$23;
      continue MapTreeModule$$$foldMap;
    } else {
      return [acc$$21, z];
    }
  }
}

function MapTreeModule$$$toList(m$$39) {
  return MapTreeModule$$$fold(function (k$$55, v$$25, acc$$24) {
    return (0, _Types.L)([k$$55, v$$25], acc$$24);
  }, m$$39, (0, _Types.L)());
}

function MapTreeModule$$$toArray(m$$40) {
  return (0, _Array.ofList)(MapTreeModule$$$toList(m$$40), Array);
}

function MapTreeModule$$$ofList(comparer$$42, l$$58) {
  return (0, _List.fold)(function (acc$$25, tupledArg) {
    return MapTreeModule$$$add(comparer$$42, tupledArg[0], tupledArg[1], acc$$25);
  }, MapTreeModule$$$empty(), l$$58);
}

function MapTreeModule$$$mkFromEnumerator(comparer$$43, acc$$26, e$$1) {
  MapTreeModule$$$mkFromEnumerator: while (true) {
    if (e$$1.MoveNext()) {
      const patternInput$$11 = e$$1.Current;
      const $var$$114 = comparer$$43;
      acc$$26 = MapTreeModule$$$add(comparer$$43, patternInput$$11[0], patternInput$$11[1], acc$$26);
      e$$1 = e$$1;
      comparer$$43 = $var$$114;
      continue MapTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$26;
    }
  }
}

function MapTreeModule$$$ofSeq(comparer$$44, c$$13) {
  const ie$$1 = (0, _Seq.getEnumerator)(c$$13);

  try {
    return MapTreeModule$$$mkFromEnumerator(comparer$$44, MapTreeModule$$$empty(), ie$$1);
  } finally {
    if ((0, _Util.isDisposable)(ie$$1)) {
      ie$$1.Dispose();
    }
  }
}

function MapTreeModule$$$copyToArray(s$$56, arr$$2, i$$5) {
  const j$$1 = new _Types.FSharpRef(i$$5);
  MapTreeModule$$$iter(function f$$30(x$$53, y$$4) {
    arr$$2[j$$1.contents] = [x$$53, y$$4];
    j$$1.contents = j$$1.contents + 1;
  }, s$$56);
}

const MapTreeModule$002EMapIterator$00602 = (0, _Types.declare)(function MapTreeModule$002EMapIterator$00602(s$$57) {
  const $this$$3 = this;
  $this$$3.stack = MapTreeModule$002EMapIterator$00602$$collapseLHS$$Z1D72BFC3($this$$3, (0, _Types.L)(s$$57, (0, _Types.L)()));
  $this$$3.started = false;
});
exports.MapTreeModule$002EMapIterator$00602 = MapTreeModule$002EMapIterator$00602;

function MapTreeModule$002EMapIterator$00602$$$$002Ector$$19A7B9B6(s$$57) {
  return this != null ? MapTreeModule$002EMapIterator$00602.call(this, s$$57) : new MapTreeModule$002EMapIterator$00602(s$$57);
}

function MapTreeModule$002EMapIterator$00602$$get_Current(i$$6) {
  if (i$$6.started) {
    const matchValue$$20 = i$$6.stack;
    var $target$$115, k$$57, v$$27;

    if (matchValue$$20.tail == null) {
      $target$$115 = 1;
    } else if (matchValue$$20.head.tag === 1) {
      if (matchValue$$20.head.fields[2].tag === 0) {
        if (matchValue$$20.head.fields[3].tag === 0) {
          $target$$115 = 0;
          k$$57 = matchValue$$20.head.fields[0];
          v$$27 = matchValue$$20.head.fields[1];
        } else {
          $target$$115 = 2;
        }
      } else {
        $target$$115 = 2;
      }
    } else {
      $target$$115 = 2;
    }

    switch ($target$$115) {
      case 0:
        {
          return [k$$57, v$$27];
        }

      case 1:
        {
          return MapTreeModule$002EMapIterator$00602$$alreadyFinished(i$$6);
        }

      case 2:
        {
          throw new Error("Please report error: Map iterator, unexpected stack for current");
        }
    }
  } else {
    return MapTreeModule$002EMapIterator$00602$$notStarted(i$$6);
  }
}

function MapTreeModule$002EMapIterator$00602$$MoveNext(i$$7) {
  if (i$$7.started) {
    const matchValue$$21 = i$$7.stack;
    var $target$$116, rest$$3;

    if (matchValue$$21.tail == null) {
      $target$$116 = 1;
    } else if (matchValue$$21.head.tag === 1) {
      if (matchValue$$21.head.fields[2].tag === 0) {
        if (matchValue$$21.head.fields[3].tag === 0) {
          $target$$116 = 0;
          rest$$3 = matchValue$$21.tail;
        } else {
          $target$$116 = 2;
        }
      } else {
        $target$$116 = 2;
      }
    } else {
      $target$$116 = 2;
    }

    switch ($target$$116) {
      case 0:
        {
          i$$7.stack = MapTreeModule$002EMapIterator$00602$$collapseLHS$$Z1D72BFC3(i$$7, rest$$3);
          return !(i$$7.stack.tail == null);
        }

      case 1:
        {
          return false;
        }

      case 2:
        {
          throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
        }
    }
  } else {
    i$$7.started = true;
    return !(i$$7.stack.tail == null);
  }
}

function MapTreeModule$002EMapIterator$00602$$collapseLHS$$Z1D72BFC3(this$$$6, stack$$4) {
  MapTreeModule$002EMapIterator$00602$$collapseLHS$$Z1D72BFC3: while (true) {
    var $target$$117, rest$$4, k$$58, l$$59, r$$56, rest$$5, v$$28;

    if (stack$$4.tail != null) {
      if (stack$$4.head.tag === 1) {
        if (stack$$4.head.fields[2].tag === 0) {
          if (stack$$4.head.fields[3].tag === 0) {
            $target$$117 = 2;
          } else {
            $target$$117 = 3;
            k$$58 = stack$$4.head.fields[0];
            l$$59 = stack$$4.head.fields[2];
            r$$56 = stack$$4.head.fields[3];
            rest$$5 = stack$$4.tail;
            v$$28 = stack$$4.head.fields[1];
          }
        } else {
          $target$$117 = 3;
          k$$58 = stack$$4.head.fields[0];
          l$$59 = stack$$4.head.fields[2];
          r$$56 = stack$$4.head.fields[3];
          rest$$5 = stack$$4.tail;
          v$$28 = stack$$4.head.fields[1];
        }
      } else {
        $target$$117 = 1;
        rest$$4 = stack$$4.tail;
      }
    } else {
      $target$$117 = 0;
    }

    switch ($target$$117) {
      case 0:
        {
          return (0, _Types.L)();
        }

      case 1:
        {
          this$$$6 = this$$$6;
          stack$$4 = rest$$4;
          continue MapTreeModule$002EMapIterator$00602$$collapseLHS$$Z1D72BFC3;
        }

      case 2:
        {
          return stack$$4;
        }

      case 3:
        {
          this$$$6 = this$$$6;
          stack$$4 = (0, _Types.L)(l$$59, (0, _Types.L)(MapTreeModule$$$MapOne(k$$58, v$$28), (0, _Types.L)(r$$56, rest$$5)));
          continue MapTreeModule$002EMapIterator$00602$$collapseLHS$$Z1D72BFC3;
        }
    }
  }
}

function MapTreeModule$002EMapIterator$00602$$notStarted(this$$$7) {
  throw new Error("Enumeration has not started. Call MoveNext.");
}

function MapTreeModule$002EMapIterator$00602$$alreadyFinished(this$$$8) {
  throw new Error("Enumeration already finished.");
}

function MapTreeModule$$$toSeq(s$$58) {
  const i$$8 = new _Types.FSharpRef(MapTreeModule$002EMapIterator$00602$$$$002Ector$$19A7B9B6(s$$58));
  return {
    get Current() {
      return MapTreeModule$002EMapIterator$00602$$get_Current(i$$8.contents);
    },

    get Current() {
      return MapTreeModule$002EMapIterator$00602$$get_Current(i$$8.contents);
    },

    MoveNext() {
      return MapTreeModule$002EMapIterator$00602$$MoveNext(i$$8.contents);
    },

    Reset() {
      i$$8.contents = MapTreeModule$002EMapIterator$00602$$$$002Ector$$19A7B9B6(s$$58);
    },

    Dispose() {}

  };
}

const Map$00603 = (0, _Types.declare)(function Map$00603(comparer$$45, tree$$1) {
  const $this$$4 = this;
  $this$$4.comparer = comparer$$45;
  $this$$4.tree = tree$$1;
});
exports.Map$00603 = Map$00603;

function Map$00603$$$$002Ector$$Z67B62129(comparer$$45, tree$$1) {
  return this != null ? Map$00603.call(this, comparer$$45, tree$$1) : new Map$00603(comparer$$45, tree$$1);
}

(function Map$00603$$$$002Ecctor() {})();

function Map$00603$$get_Tree(s$$59) {
  return s$$59.tree;
}

function Map$00603$$get_Comparer(s$$60) {
  return s$$60.comparer;
}

function Map$00603$$$Empty$$2B597(comparer$$46) {
  return Map$00603$$$$002Ector$$Z67B62129(comparer$$46, MapTreeModule$$$empty());
}

function Map$00603$$Add$$5BDDA1(m$$43, k$$59, v$$29) {
  return Map$00603$$$refresh(m$$43, MapTreeModule$$$add(m$$43.comparer, k$$59, v$$29, m$$43.tree));
}

function Map$00603$$get_IsEmpty(m$$44) {
  if (m$$44.tree.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function Map$00603$$get_Item$$2B595(m$$46, k$$60) {
  return MapTreeModule$$$find(m$$46.comparer, k$$60, m$$46.tree);
}

function Map$00603$$First$$72321DD7(m$$47, f$$31) {
  return MapTreeModule$$$first(f$$31, m$$47.tree);
}

function Map$00603$$Exists$$Z395DDC35(m$$48, f$$32) {
  return MapTreeModule$$$exists(f$$32, m$$48.tree);
}

function Map$00603$$Filter$$Z395DDC35(m$$49, f$$33) {
  return Map$00603$$$refresh(m$$49, MapTreeModule$$$filter(m$$49.comparer, f$$33, m$$49.tree));
}

function Map$00603$$ForAll$$Z395DDC35(m$$50, f$$34) {
  return MapTreeModule$$$forAll(f$$34, m$$50.tree);
}

function Map$00603$$Fold(m$$51, f$$35, acc$$27) {
  return MapTreeModule$$$fold(f$$35, m$$51.tree, acc$$27);
}

function Map$00603$$FoldSection(m$$52, lo$$3, hi$$3, f$$36, acc$$28) {
  return MapTreeModule$$$foldSection(m$$52.comparer, lo$$3, hi$$3, f$$36, m$$52.tree, acc$$28);
}

function Map$00603$$FoldAndMap(m$$53, f$$37, z$$3) {
  const patternInput$$12 = MapTreeModule$$$foldMap(m$$53.comparer, f$$37, m$$53.tree, z$$3, MapTreeModule$$$empty());
  return [Map$00603$$$refresh(m$$53, patternInput$$12[0]), patternInput$$12[1]];
}

function Map$00603$$Iterate$$1DCFB91D(m$$54, f$$38) {
  MapTreeModule$$$iter(f$$38, m$$54.tree);
}

function Map$00603$$MapRange$$6DC7247(m$$55, f$$39) {
  return Map$00603$$$refresh(m$$55, MapTreeModule$$$map(f$$39, m$$55.tree));
}

function Map$00603$$Map$$Z6F6B671C(m$$56, f$$40) {
  return Map$00603$$$refresh(m$$56, MapTreeModule$$$mapi(f$$40, m$$56.tree));
}

function Map$00603$$Partition$$Z395DDC35(m$$57, f$$41) {
  const patternInput$$13 = MapTreeModule$$$partition(m$$57.comparer, f$$41, m$$57.tree);
  return [Map$00603$$$refresh(m$$57, patternInput$$13[0]), Map$00603$$$refresh(m$$57, patternInput$$13[1])];
}

function Map$00603$$get_Count(m$$58) {
  return MapTreeModule$$$count(m$$58.tree);
}

function Map$00603$$ContainsKey$$2B595(m$$59, k$$61) {
  return MapTreeModule$$$containsKey(m$$59.comparer, k$$61, m$$59.tree);
}

function Map$00603$$Remove$$2B595(m$$60, k$$62) {
  return Map$00603$$$refresh(m$$60, MapTreeModule$$$remove(m$$60.comparer, k$$62, m$$60.tree));
}

function Map$00603$$TryFind$$2B595(m$$61, k$$63) {
  return MapTreeModule$$$tryFind(m$$61.comparer, k$$63, m$$61.tree);
}

function Map$00603$$ToList(m$$62) {
  return MapTreeModule$$$toList(m$$62.tree);
}

function Map$00603$$ToArray(m$$63) {
  return MapTreeModule$$$toArray(m$$63.tree);
}

function Map$00603$$$FromList$$2AD4A113(comparer$$47, l$$60) {
  return Map$00603$$$$002Ector$$Z67B62129(comparer$$47, MapTreeModule$$$ofList(comparer$$47, l$$60));
}

function Map$00603$$$Create$$11DDBEB6(comparer$$48, ie$$2) {
  return Map$00603$$$$002Ector$$Z67B62129(comparer$$48, MapTreeModule$$$ofSeq(comparer$$48, ie$$2));
}

Map$00603.prototype.Equals = function (that$$1) {
  const this$$$9 = this;
  return this$$$9.CompareTo(that$$1) === 0;
};

function Map$00603$$ComputeHashCode(this$$$10) {
  const combineHash$$1 = function combineHash$$1(x$$54, y$$5) {
    return (x$$54 << 1) + y$$5 + 631;
  };

  let res$$8 = 0;
  (0, _Seq.iterate)(function (forLoopVar) {
    const activePatternResult9618 = forLoopVar;
    res$$8 = combineHash$$1(res$$8, (0, _Util.structuralHash)(activePatternResult9618[0]));
    res$$8 = combineHash$$1(res$$8, (0, _Util.structuralHash)(activePatternResult9618[1]));
  }, this$$$10);
  return Math.abs(res$$8) | 0;
}

Map$00603.prototype.GetHashCode = function () {
  const this$$$11 = this;
  return Map$00603$$ComputeHashCode(this$$$11) | 0;
};

Map$00603.prototype[Symbol.iterator] = function () {
  const s$$61 = this;
  return (0, _Seq.toIterator)(MapTreeModule$$$toSeq(s$$61.tree));
};

Map$00603.prototype.CompareTo = function (m2) {
  const m1 = this;
  return (0, _Seq.compareWith)(function (kvp1, kvp2) {
    const c$$14 = Map$00603$$get_Comparer(m1).Compare(kvp1[0], kvp2[0]) | 0;
    return (c$$14 !== 0 ? c$$14 : (0, _Util.compare)(kvp1[1], kvp2[1])) | 0;
  }, m1, m2) | 0;
};

function Map$00603$$$refresh(m$$64, t$$21) {
  return Map$00603$$$$002Ector$$Z67B62129(Map$00603$$get_Comparer(m$$64), t$$21);
}