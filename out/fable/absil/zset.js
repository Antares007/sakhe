"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZsetModule$$$empty = ZsetModule$$$empty;
exports.ZsetModule$$$isEmpty = ZsetModule$$$isEmpty;
exports.ZsetModule$$$contains = ZsetModule$$$contains;
exports.ZsetModule$$$add = ZsetModule$$$add;
exports.ZsetModule$$$addList = ZsetModule$$$addList;
exports.ZsetModule$$$singleton = ZsetModule$$$singleton;
exports.ZsetModule$$$remove = ZsetModule$$$remove;
exports.ZsetModule$$$fold = ZsetModule$$$fold;
exports.ZsetModule$$$iter = ZsetModule$$$iter;
exports.ZsetModule$$$forall = ZsetModule$$$forall;
exports.ZsetModule$$$count = ZsetModule$$$count;
exports.ZsetModule$$$exists = ZsetModule$$$exists;
exports.ZsetModule$$$subset = ZsetModule$$$subset;
exports.ZsetModule$$$equal = ZsetModule$$$equal;
exports.ZsetModule$$$elements = ZsetModule$$$elements;
exports.ZsetModule$$$filter = ZsetModule$$$filter;
exports.ZsetModule$$$union = ZsetModule$$$union;
exports.ZsetModule$$$inter = ZsetModule$$$inter;
exports.ZsetModule$$$diff = ZsetModule$$$diff;
exports.ZsetModule$$$memberOf = ZsetModule$$$memberOf;

var _TaggedCollections = require("../utils/TaggedCollections");

var _List = require("../fable-core.2.0.3/List");

function ZsetModule$$$empty(ord) {
  return (0, _TaggedCollections.Set$00602$$$Empty$$2B594)(ord);
}

function ZsetModule$$$isEmpty(s) {
  return (0, _TaggedCollections.Set$00602$$get_IsEmpty)(s);
}

function ZsetModule$$$contains(x, s$$1) {
  return (0, _TaggedCollections.Set$00602$$Contains$$2B595)(s$$1, x);
}

function ZsetModule$$$add(x$$1, s$$2) {
  return (0, _TaggedCollections.Set$00602$$Add$$2B595)(s$$2, x$$1);
}

function ZsetModule$$$addList(xs, a) {
  return (0, _List.fold)(function (a$$1, x$$2) {
    return ZsetModule$$$add(x$$2, a$$1);
  }, a, xs);
}

function ZsetModule$$$singleton(ord$$1, x$$3) {
  return ZsetModule$$$add(x$$3, ZsetModule$$$empty(ord$$1));
}

function ZsetModule$$$remove(x$$4, s$$3) {
  return (0, _TaggedCollections.Set$00602$$Remove$$2B595)(s$$3, x$$4);
}

function ZsetModule$$$fold(f, s$$4, b) {
  return (0, _TaggedCollections.Set$00602$$Fold)(s$$4, f, b);
}

function ZsetModule$$$iter(f$$1, s$$5) {
  (0, _TaggedCollections.Set$00602$$Iterate$$5028453F)(s$$5, f$$1);
}

function ZsetModule$$$forall(p, s$$6) {
  return (0, _TaggedCollections.Set$00602$$ForAll$$Z1D55A0D7)(s$$6, p);
}

function ZsetModule$$$count(s$$7) {
  return (0, _TaggedCollections.Set$00602$$get_Count)(s$$7);
}

function ZsetModule$$$exists(p$$1, s$$8) {
  return (0, _TaggedCollections.Set$00602$$Exists$$Z1D55A0D7)(s$$8, p$$1);
}

function ZsetModule$$$subset(s1, s2) {
  return (0, _TaggedCollections.Set$00602$$IsSubsetOf$$424E482E)(s1, s2);
}

function ZsetModule$$$equal(s1$$1, s2$$1) {
  return (0, _TaggedCollections.Set$00602$$$Equality$$Z31A6FA40)(s1$$1, s2$$1);
}

function ZsetModule$$$elements(s$$9) {
  return (0, _TaggedCollections.Set$00602$$ToList)(s$$9);
}

function ZsetModule$$$filter(p$$2, s$$10) {
  return (0, _TaggedCollections.Set$00602$$Filter$$Z1D55A0D7)(s$$10, p$$2);
}

function ZsetModule$$$union(s1$$2, s2$$2) {
  return (0, _TaggedCollections.Set$00602$$$Union$$Z31A6FA40)(s1$$2, s2$$2);
}

function ZsetModule$$$inter(s1$$3, s2$$3) {
  return (0, _TaggedCollections.Set$00602$$$Intersection$$Z31A6FA40)(s1$$3, s2$$3);
}

function ZsetModule$$$diff(s1$$4, s2$$4) {
  return (0, _TaggedCollections.Set$00602$$$Difference$$Z31A6FA40)(s1$$4, s2$$4);
}

function ZsetModule$$$memberOf(m, k) {
  return ZsetModule$$$contains(k, m);
}