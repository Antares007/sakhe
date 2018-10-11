"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashMultiMap$00602$$$$002Ector$$Z1C047C8B = HashMultiMap$00602$$$$002Ector$$Z1C047C8B;
exports.HashMultiMap$00602$$GetRest$$2B595 = HashMultiMap$00602$$GetRest$$2B595;
exports.HashMultiMap$00602$$Add$$5BDDA1 = HashMultiMap$00602$$Add$$5BDDA1;
exports.HashMultiMap$00602$$Clear = HashMultiMap$00602$$Clear;
exports.HashMultiMap$00602$$get_FirstEntries = HashMultiMap$00602$$get_FirstEntries;
exports.HashMultiMap$00602$$get_Rest = HashMultiMap$00602$$get_Rest;
exports.HashMultiMap$00602$$Copy = HashMultiMap$00602$$Copy;
exports.HashMultiMap$00602$$get_Item$$2B595 = HashMultiMap$00602$$get_Item$$2B595;
exports.HashMultiMap$00602$$set_Item$$5BDDA1 = HashMultiMap$00602$$set_Item$$5BDDA1;
exports.HashMultiMap$00602$$FindAll$$2B595 = HashMultiMap$00602$$FindAll$$2B595;
exports.HashMultiMap$00602$$Fold = HashMultiMap$00602$$Fold;
exports.HashMultiMap$00602$$Iterate$$1DCFB91D = HashMultiMap$00602$$Iterate$$1DCFB91D;
exports.HashMultiMap$00602$$Contains$$2B595 = HashMultiMap$00602$$Contains$$2B595;
exports.HashMultiMap$00602$$ContainsKey$$2B595 = HashMultiMap$00602$$ContainsKey$$2B595;
exports.HashMultiMap$00602$$Remove$$2B595 = HashMultiMap$00602$$Remove$$2B595;
exports.HashMultiMap$00602$$Replace$$5BDDA1 = HashMultiMap$00602$$Replace$$5BDDA1;
exports.HashMultiMap$00602$$TryFind$$2B595 = HashMultiMap$00602$$TryFind$$2B595;
exports.HashMultiMap$00602$$get_Count = HashMultiMap$00602$$get_Count;
exports.HashMultiMap$00602 = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _Map = require("../fable-core.2.0.3/Map");

var _Types = require("../fable-core.2.0.3/Types");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Option = require("../fable-core.2.0.3/Option");

const HashMultiMap$00602 = (0, _Types.declare)(function HashMultiMap$00602(n, hasheq) {
  const $this$$1 = this;
  $this$$1.hasheq = hasheq;
  $this$$1.firstEntries = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)($this$$1.hasheq));
  $this$$1.rest = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)($this$$1.hasheq));
});
exports.HashMultiMap$00602 = HashMultiMap$00602;

function HashMultiMap$00602$$$$002Ector$$Z1C047C8B(n, hasheq) {
  return this != null ? HashMultiMap$00602.call(this, n, hasheq) : new HashMultiMap$00602(n, hasheq);
}

function HashMultiMap$00602$$GetRest$$2B595(x, k) {
  const patternInput = (0, _Util.tryGetValue)(x.rest, k, null);

  if (patternInput[0]) {
    return patternInput[1];
  } else {
    return (0, _Types.L)();
  }
}

function HashMultiMap$00602$$Add$$5BDDA1(x$$1, y, z) {
  const patternInput$$1 = (0, _Util.tryGetValue)(x$$1.firstEntries, y, null);

  if (patternInput$$1[0]) {
    x$$1.rest.set(y, (0, _Types.L)(patternInput$$1[1], HashMultiMap$00602$$GetRest$$2B595(x$$1, y)));
  }

  x$$1.firstEntries.set(y, z);
}

function HashMultiMap$00602$$Clear(x$$2) {
  x$$2.firstEntries.clear();
  x$$2.rest.clear();
}

function HashMultiMap$00602$$get_FirstEntries(x$$3) {
  return x$$3.firstEntries;
}

function HashMultiMap$00602$$get_Rest(x$$4) {
  return x$$4.rest;
}

function HashMultiMap$00602$$Copy(x$$5) {
  const res$$2 = HashMultiMap$00602$$$$002Ector$$Z1C047C8B(x$$5.firstEntries.size, x$$5.hasheq);
  (0, _Seq.iterate)(function (kvp) {
    HashMultiMap$00602$$get_FirstEntries(res$$2).set(kvp[0], kvp[1]);
  }, x$$5.firstEntries);
  (0, _Seq.iterate)(function (kvp$$1) {
    HashMultiMap$00602$$get_Rest(res$$2).set(kvp$$1[0], kvp$$1[1]);
  }, x$$5.rest);
  return res$$2;
}

function HashMultiMap$00602$$get_Item$$2B595(x$$6, y$$1) {
  const patternInput$$2 = (0, _Util.tryGetValue)(x$$6.firstEntries, y$$1, null);

  if (patternInput$$2[0]) {
    return patternInput$$2[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}

function HashMultiMap$00602$$set_Item$$5BDDA1(x$$7, y$$2, z$$1) {
  HashMultiMap$00602$$Replace$$5BDDA1(x$$7, y$$2, z$$1);
}

function HashMultiMap$00602$$FindAll$$2B595(x$$8, y$$3) {
  const patternInput$$3 = (0, _Util.tryGetValue)(x$$8.firstEntries, y$$3, null);

  if (patternInput$$3[0]) {
    return (0, _Types.L)(patternInput$$3[1], HashMultiMap$00602$$GetRest$$2B595(x$$8, y$$3));
  } else {
    return (0, _Types.L)();
  }
}

function HashMultiMap$00602$$Fold(x$$9, f, acc) {
  let res$$5 = acc;
  (0, _Seq.iterate)(function (kvp$$2) {
    res$$5 = f(kvp$$2[0], kvp$$2[1], res$$5);
    const matchValue = HashMultiMap$00602$$GetRest$$2B595(x$$9, kvp$$2[0]);

    if (matchValue.tail == null) {} else {
      const rest = matchValue;
      (0, _Seq.iterate)(function (z$$2) {
        res$$5 = f(kvp$$2[0], z$$2, res$$5);
      }, rest);
    }
  }, x$$9.firstEntries);
  return res$$5;
}

function HashMultiMap$00602$$Iterate$$1DCFB91D(x$$10, f$$1) {
  (0, _Seq.iterate)(function (kvp$$3) {
    f$$1(kvp$$3[0], kvp$$3[1]);
    const matchValue$$1 = HashMultiMap$00602$$GetRest$$2B595(x$$10, kvp$$3[0]);

    if (matchValue$$1.tail == null) {} else {
      const rest$$1 = matchValue$$1;
      (0, _Seq.iterate)(function (z$$3) {
        f$$1(kvp$$3[0], z$$3);
      }, rest$$1);
    }
  }, x$$10.firstEntries);
}

function HashMultiMap$00602$$Contains$$2B595(x$$11, y$$4) {
  return x$$11.firstEntries.has(y$$4);
}

function HashMultiMap$00602$$ContainsKey$$2B595(x$$12, y$$5) {
  return x$$12.firstEntries.has(y$$5);
}

function HashMultiMap$00602$$Remove$$2B595(x$$13, y$$6) {
  const patternInput$$4 = (0, _Util.tryGetValue)(x$$13.firstEntries, y$$6, null);

  if (patternInput$$4[0]) {
    const patternInput$$5 = (0, _Util.tryGetValue)(x$$13.rest, y$$6, null);

    if (patternInput$$5[0]) {
      if (patternInput$$5[1].tail != null) {
        if (patternInput$$5[1].tail.tail == null) {
          x$$13.firstEntries.set(y$$6, patternInput$$5[1].head);
          x$$13.rest.delete(y$$6);
        } else {
          x$$13.firstEntries.set(y$$6, patternInput$$5[1].head);
          x$$13.rest.set(y$$6, patternInput$$5[1].tail);
        }
      }
    } else {
      x$$13.firstEntries.delete(y$$6);
    }
  }
}

function HashMultiMap$00602$$Replace$$5BDDA1(x$$14, y$$7, z$$4) {
  x$$14.firstEntries.set(y$$7, z$$4);
}

function HashMultiMap$00602$$TryFind$$2B595(x$$15, y$$8) {
  const patternInput$$6 = (0, _Util.tryGetValue)(x$$15.firstEntries, y$$8, null);

  if (patternInput$$6[0]) {
    return (0, _Option.some)(patternInput$$6[1]);
  } else {
    return null;
  }
}

function HashMultiMap$00602$$get_Count(x$$16) {
  return x$$16.firstEntries.size;
}

HashMultiMap$00602.prototype[Symbol.iterator] = function () {
  var elems;
  const s = this;
  return (0, _Seq.toIterator)((elems = (0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (kvp$$4) {
      return (0, _Seq.append)((0, _Seq.singleton)(kvp$$4), (0, _Seq.delay)(function () {
        return (0, _Seq.map)(function (z$$5) {
          return [kvp$$4[0], z$$5];
        }, HashMultiMap$00602$$GetRest$$2B595(s, kvp$$4[0]));
      }));
    }, s.firstEntries);
  }), (0, _Seq.getEnumerator)(elems)));
};

HashMultiMap$00602.prototype.Add = function (x$$17) {
  const s$$1 = this;
  HashMultiMap$00602$$set_Item$$5BDDA1(s$$1, x$$17[0], x$$17[1]);
};

HashMultiMap$00602.prototype.Clear = function () {
  const s$$2 = this;
  HashMultiMap$00602$$Clear(s$$2);
};

HashMultiMap$00602.prototype.Remove = function (x$$18) {
  const s$$3 = this;
  const matchValue$$2 = HashMultiMap$00602$$TryFind$$2B595(s$$3, x$$18[0]);

  if (matchValue$$2 != null) {
    const v = (0, _Option.value)(matchValue$$2);

    if ((0, _Util.equals)(v, x$$18[1])) {
      HashMultiMap$00602$$Remove$$2B595(s$$3, x$$18[0]);
    }

    return true;
  } else {
    return false;
  }
};

HashMultiMap$00602.prototype.Contains = function (x$$19) {
  var v$$1;
  const s$$4 = this;
  const matchValue$$3 = HashMultiMap$00602$$TryFind$$2B595(s$$4, x$$19[0]);
  var $target$$7, v$$2;

  if (matchValue$$3 != null) {
    if (v$$1 = (0, _Option.value)(matchValue$$3), (0, _Util.equals)(v$$1, x$$19[1])) {
      $target$$7 = 0;
      v$$2 = (0, _Option.value)(matchValue$$3);
    } else {
      $target$$7 = 1;
    }
  } else {
    $target$$7 = 1;
  }

  switch ($target$$7) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
};

HashMultiMap$00602.prototype.CopyTo = function (arr, arrIndex) {
  const s$$5 = this;
  (0, _Seq.iterateIndexed)(function action(j, x$$20) {
    arr[arrIndex + j] = x$$20;
  }, s$$5);
};

Object.defineProperty(HashMultiMap$00602.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});
Object.defineProperty(HashMultiMap$00602.prototype, "Count", {
  "get": function () {
    const s$$7 = this;
    return HashMultiMap$00602$$get_Count(s$$7) | 0;
  }
});