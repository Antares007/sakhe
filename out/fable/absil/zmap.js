"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZmapModule$$$empty = ZmapModule$$$empty;
exports.ZmapModule$$$add = ZmapModule$$$add;
exports.ZmapModule$$$find = ZmapModule$$$find;
exports.ZmapModule$$$tryFind = ZmapModule$$$tryFind;
exports.ZmapModule$$$remove = ZmapModule$$$remove;
exports.ZmapModule$$$mem = ZmapModule$$$mem;
exports.ZmapModule$$$iter = ZmapModule$$$iter;
exports.ZmapModule$$$first = ZmapModule$$$first;
exports.ZmapModule$$$exists = ZmapModule$$$exists;
exports.ZmapModule$$$forall = ZmapModule$$$forall;
exports.ZmapModule$$$map = ZmapModule$$$map;
exports.ZmapModule$$$mapi = ZmapModule$$$mapi;
exports.ZmapModule$$$fold = ZmapModule$$$fold;
exports.ZmapModule$$$toList = ZmapModule$$$toList;
exports.ZmapModule$$$foldSection = ZmapModule$$$foldSection;
exports.ZmapModule$$$isEmpty = ZmapModule$$$isEmpty;
exports.ZmapModule$$$foldMap = ZmapModule$$$foldMap;
exports.ZmapModule$$$choose = ZmapModule$$$choose;
exports.ZmapModule$$$chooseL = ZmapModule$$$chooseL;
exports.ZmapModule$$$ofList = ZmapModule$$$ofList;
exports.ZmapModule$$$keys = ZmapModule$$$keys;
exports.ZmapModule$$$values = ZmapModule$$$values;
exports.ZmapModule$$$memberOf = ZmapModule$$$memberOf;

var _TaggedCollections = require("../utils/TaggedCollections");

var _Option = require("../fable-core.2.0.3/Option");

var _Types = require("../fable-core.2.0.3/Types");

function ZmapModule$$$empty(ord) {
  return (0, _TaggedCollections.Map$00603$$$Empty$$2B597)(ord);
}

function ZmapModule$$$add(k, v, m) {
  return (0, _TaggedCollections.Map$00603$$Add$$5BDDA1)(m, k, v);
}

function ZmapModule$$$find(k$$1, m$$1) {
  return (0, _TaggedCollections.Map$00603$$get_Item$$2B595)(m$$1, k$$1);
}

function ZmapModule$$$tryFind(k$$2, m$$2) {
  return (0, _TaggedCollections.Map$00603$$TryFind$$2B595)(m$$2, k$$2);
}

function ZmapModule$$$remove(k$$3, m$$3) {
  return (0, _TaggedCollections.Map$00603$$Remove$$2B595)(m$$3, k$$3);
}

function ZmapModule$$$mem(k$$4, m$$4) {
  return (0, _TaggedCollections.Map$00603$$ContainsKey$$2B595)(m$$4, k$$4);
}

function ZmapModule$$$iter(f, m$$5) {
  (0, _TaggedCollections.Map$00603$$Iterate$$1DCFB91D)(m$$5, f);
}

function ZmapModule$$$first(f$$1, m$$6) {
  return (0, _TaggedCollections.Map$00603$$First$$72321DD7)(m$$6, function (k$$5, v$$1) {
    return f$$1(k$$5, v$$1) ? [k$$5, v$$1] : null;
  });
}

function ZmapModule$$$exists(f$$2, m$$7) {
  return (0, _TaggedCollections.Map$00603$$Exists$$Z395DDC35)(m$$7, f$$2);
}

function ZmapModule$$$forall(f$$3, m$$8) {
  return (0, _TaggedCollections.Map$00603$$ForAll$$Z395DDC35)(m$$8, f$$3);
}

function ZmapModule$$$map(f$$4, m$$9) {
  return (0, _TaggedCollections.Map$00603$$MapRange$$6DC7247)(m$$9, f$$4);
}

function ZmapModule$$$mapi(f$$5, m$$10) {
  return (0, _TaggedCollections.Map$00603$$Map$$Z6F6B671C)(m$$10, f$$5);
}

function ZmapModule$$$fold(f$$6, m$$11, x) {
  return (0, _TaggedCollections.Map$00603$$Fold)(m$$11, f$$6, x);
}

function ZmapModule$$$toList(m$$12) {
  return (0, _TaggedCollections.Map$00603$$ToList)(m$$12);
}

function ZmapModule$$$foldSection(lo, hi, f$$7, m$$13, x$$1) {
  return (0, _TaggedCollections.Map$00603$$FoldSection)(m$$13, lo, hi, f$$7, x$$1);
}

function ZmapModule$$$isEmpty(m$$14) {
  return (0, _TaggedCollections.Map$00603$$get_IsEmpty)(m$$14);
}

function ZmapModule$$$foldMap(f$$8, z, m$$15) {
  const patternInput$$1 = (0, _TaggedCollections.Map$00603$$FoldAndMap)(m$$15, function (k$$6, v$$2, z$$1) {
    const patternInput = f$$8(z$$1, k$$6, v$$2);
    return [patternInput[1], patternInput[0]];
  }, z);
  return [patternInput$$1[1], patternInput$$1[0]];
}

function ZmapModule$$$choose(f$$9, m$$17) {
  return (0, _TaggedCollections.Map$00603$$First$$72321DD7)(m$$17, f$$9);
}

function ZmapModule$$$chooseL(f$$10, m$$18) {
  return (0, _TaggedCollections.Map$00603$$Fold)(m$$18, function (k$$7, v$$3, s) {
    const matchValue = f$$10(k$$7, v$$3);

    if (matchValue != null) {
      const x$$2 = (0, _Option.value)(matchValue);
      return (0, _Types.L)(x$$2, s);
    } else {
      return s;
    }
  }, (0, _Types.L)());
}

function ZmapModule$$$ofList(ord$$1, xs) {
  return (0, _TaggedCollections.Map$00603$$$FromList$$2AD4A113)(ord$$1, xs);
}

function ZmapModule$$$keys(m$$19) {
  return (0, _TaggedCollections.Map$00603$$Fold)(m$$19, function (k$$8, _arg1, s$$1) {
    return (0, _Types.L)(k$$8, s$$1);
  }, (0, _Types.L)());
}

function ZmapModule$$$values(m$$20) {
  return (0, _TaggedCollections.Map$00603$$Fold)(m$$20, function (_arg1$$1, v$$4, s$$2) {
    return (0, _Types.L)(v$$4, s$$2);
  }, (0, _Types.L)());
}

function ZmapModule$$$memberOf(m$$21, k$$9) {
  return ZmapModule$$$mem(k$$9, m$$21);
}