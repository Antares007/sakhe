"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueList$00601$$$$002Ector$$630EF6BC = QueueList$00601$$$$002Ector$$630EF6BC;
exports.QueueList$00601$$$get_Empty = QueueList$00601$$$get_Empty;
exports.QueueList$00601$$$$002Ector$$Z38D79C61 = QueueList$00601$$$$002Ector$$Z38D79C61;
exports.QueueList$00601$$ToList = QueueList$00601$$ToList;
exports.QueueList$00601$$get_FirstElements = QueueList$00601$$get_FirstElements;
exports.QueueList$00601$$get_LastElements = QueueList$00601$$get_LastElements;
exports.QueueList$00601$$AppendOne$$2B595 = QueueList$00601$$AppendOne$$2B595;
exports.QueueList$00601$$Append$$BB573A = QueueList$00601$$Append$$BB573A;
exports.QueueListModule$$$empty = QueueListModule$$$empty;
exports.QueueListModule$$$ofSeq = QueueListModule$$$ofSeq;
exports.QueueListModule$$$iter = QueueListModule$$$iter;
exports.QueueListModule$$$map = QueueListModule$$$map;
exports.QueueListModule$$$exists = QueueListModule$$$exists;
exports.QueueListModule$$$filter = QueueListModule$$$filter;
exports.QueueListModule$$$foldBack = QueueListModule$$$foldBack;
exports.QueueListModule$$$forall = QueueListModule$$$forall;
exports.QueueListModule$$$ofList = QueueListModule$$$ofList;
exports.QueueListModule$$$toList = QueueListModule$$$toList;
exports.QueueListModule$$$tryFind = QueueListModule$$$tryFind;
exports.QueueListModule$$$one = QueueListModule$$$one;
exports.QueueListModule$$$appendOne = QueueListModule$$$appendOne;
exports.QueueListModule$$$append = QueueListModule$$$append;
exports.QueueList$00601 = void 0;

var _List = require("../fable-core.2.0.3/List");

var _Types = require("../fable-core.2.0.3/Types");

var _Seq = require("../fable-core.2.0.3/Seq");

const QueueList$00601 = (0, _Types.declare)(function QueueList$00601(firstElementsIn, lastElementsRevIn, numLastElementsIn) {
  const $this$$1 = this;
  $this$$1.numLastElementsIn = numLastElementsIn;
  const numFirstElements = (0, _List.length)(firstElementsIn) | 0;
  $this$$1.push = $this$$1.numLastElementsIn > ~~(numFirstElements / 5);
  $this$$1.firstElements = $this$$1.push ? (0, _List.append)(firstElementsIn, (0, _List.reverse)(lastElementsRevIn)) : firstElementsIn;
  $this$$1.lastElementsRev = $this$$1.push ? (0, _Types.L)() : lastElementsRevIn;
  $this$$1.numLastElements = $this$$1.push ? 0 : $this$$1.numLastElementsIn;
});
exports.QueueList$00601 = QueueList$00601;

function QueueList$00601$$$$002Ector$$630EF6BC(firstElementsIn, lastElementsRevIn, numLastElementsIn) {
  return this != null ? QueueList$00601.call(this, firstElementsIn, lastElementsRevIn, numLastElementsIn) : new QueueList$00601(firstElementsIn, lastElementsRevIn, numLastElementsIn);
}

(function QueueList$00601$$$$002Ecctor() {
  QueueList$00601.empty = QueueList$00601$$$$002Ector$$630EF6BC((0, _Types.L)(), (0, _Types.L)(), 0);
})();

function QueueList$00601$$$get_Empty() {
  return QueueList$00601.empty;
}

function QueueList$00601$$$$002Ector$$Z38D79C61(xs) {
  return QueueList$00601$$$$002Ector$$630EF6BC.call(this, xs, (0, _Types.L)(), 0);
}

function QueueList$00601$$ToList(x) {
  if (x.push) {
    return x.firstElements;
  } else {
    return (0, _List.append)(x.firstElements, QueueList$00601$$lastElements(x));
  }
}

function QueueList$00601$$get_FirstElements(x$$1) {
  return x$$1.firstElements;
}

function QueueList$00601$$get_LastElements(x$$2) {
  return QueueList$00601$$lastElements(x$$2);
}

function QueueList$00601$$AppendOne$$2B595(x$$3, y) {
  return QueueList$00601$$$$002Ector$$630EF6BC(x$$3.firstElements, (0, _Types.L)(y, x$$3.lastElementsRev), x$$3.numLastElements + 1);
}

function QueueList$00601$$Append$$BB573A(x$$4, ys) {
  const newElements = (0, _List.ofSeq)(ys);
  const newLength = (0, _List.length)(newElements) | 0;
  const lastElementsRevIn$$1 = (0, _List.append)((0, _List.reverse)(newElements), x$$4.lastElementsRev);
  return QueueList$00601$$$$002Ector$$630EF6BC(x$$4.firstElements, lastElementsRevIn$$1, x$$4.numLastElementsIn + newLength);
}

QueueList$00601.prototype[Symbol.iterator] = function () {
  const x$$5 = this;
  return (0, _Seq.toIterator)((0, _Seq.getEnumerator)(QueueList$00601$$ToList(x$$5)));
};

function QueueList$00601$$lastElements(this$) {
  if (this$.push) {
    return (0, _Types.L)();
  } else {
    return (0, _List.reverse)(this$.lastElementsRev);
  }
}

function QueueListModule$$$empty() {
  return QueueList$00601$$$get_Empty();
}

function QueueListModule$$$ofSeq(x$$6) {
  return QueueList$00601$$$$002Ector$$Z38D79C61((0, _List.ofSeq)(x$$6));
}

function QueueListModule$$$iter(f, x$$7) {
  (0, _Seq.iterate)(f, x$$7);
}

function QueueListModule$$$map(f$$1, x$$8) {
  return QueueListModule$$$ofSeq((0, _Seq.map)(f$$1, x$$8));
}

function QueueListModule$$$exists(f$$2, x$$9) {
  return (0, _Seq.exists)(f$$2, x$$9);
}

function QueueListModule$$$filter(f$$3, x$$10) {
  return QueueListModule$$$ofSeq((0, _Seq.filter)(f$$3, x$$10));
}

function QueueListModule$$$foldBack(f$$4, x$$11, acc) {
  return (0, _List.foldBack)(f$$4, QueueList$00601$$get_FirstElements(x$$11), (0, _List.foldBack)(f$$4, QueueList$00601$$get_LastElements(x$$11), acc));
}

function QueueListModule$$$forall(f$$5, x$$12) {
  return (0, _Seq.forAll)(f$$5, x$$12);
}

function QueueListModule$$$ofList(x$$13) {
  return QueueList$00601$$$$002Ector$$Z38D79C61(x$$13);
}

function QueueListModule$$$toList(x$$14) {
  return (0, _List.ofSeq)(x$$14);
}

function QueueListModule$$$tryFind(f$$6, x$$15) {
  return (0, _Seq.tryFind)(f$$6, x$$15);
}

function QueueListModule$$$one(x$$16) {
  return QueueList$00601$$$$002Ector$$Z38D79C61((0, _Types.L)(x$$16, (0, _Types.L)()));
}

function QueueListModule$$$appendOne(x$$17, y$$1) {
  return QueueList$00601$$AppendOne$$2B595(x$$17, y$$1);
}

function QueueListModule$$$append(x$$18, ys$$1) {
  return QueueList$00601$$Append$$BB573A(x$$18, ys$$1);
}