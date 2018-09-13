"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.append = append;
exports.map = map;
exports.fold = fold;
exports.run = run;
exports.On$00601 = exports.a = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _task = require("./s/task");

const a = 42;
exports.a = a;
const On$00601 = (0, _Types.declare)(function On$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.On$00601 = On$00601;

function empty() {
  return function () {
    return function (o) {};
  };
}

function append(_arg2, _arg1) {
  const o$$1 = _arg2;
  const a$$1 = _arg1;
  return function (i) {
    return (0, _pith.Pith$$$append)(o$$1(i), a$$1(i));
  };
}

function map(f, g, _arg1$$1) {
  const pithIO = _arg1$$1;
  return function (i$$1) {
    return (0, _pith.Pith$$$map)(f, pithIO(g(i$$1)));
  };
}

function fold(f$$1, s, _arg1$$2) {
  const g$$1 = _arg1$$2;
  return function (i$$2) {
    return (0, _pith.Pith$$$fold)(f$$1, s, g$$1(i$$2));
  };
}

function run(_arg1$$3) {
  const io = _arg1$$3;
  return (0, _task.run)((0, _task.return$0027)(function (i$$3) {
    var err, a$$2;
    return (0, _List.fold)(function folder(o$$2, a$$3) {
      const matchValue = [o$$2, a$$3];

      if (matchValue[0] != null) {
        if (matchValue[1] != null) {
          const a$$4 = matchValue[1];
          const o$$4 = matchValue[0];
          return (0, _disposable.append)(a$$4, o$$4);
        } else {
          const o$$3 = matchValue[0];
          return o$$3;
        }
      } else if (matchValue[1] != null) {
        const d = matchValue[1];
        return d;
      } else {
        return null;
      }
    }, null, (0, _pith.Pith$$$toList)(i$$3.tag === 1 ? (err = i$$3.fields[1], (a$$2 = i$$3.fields[0], io(new On$00601(1, "Exn", null, err)))) : io(new On$00601(0, "Run", null))));
  }));
}