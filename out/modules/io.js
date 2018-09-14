"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO$$$empty = IO$$$empty;
exports.IO$$$append = IO$$$append;
exports.IO$$$map = IO$$$map;
exports.IO$$$fold = IO$$$fold;
exports.IO$$$run = IO$$$run;
exports.IO$002EOn$00601 = exports.IO$$$a = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _task = require("./s/task");

const IO$$$a = 42;
exports.IO$$$a = IO$$$a;
const IO$002EOn$00601 = (0, _Types.declare)(function IO$002EOn$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IO$002EOn$00601 = IO$002EOn$00601;

function IO$$$empty() {
  return function () {
    return function (o) {};
  };
}

function IO$$$append(_arg2, _arg1) {
  const o$$1 = _arg2;
  const a = _arg1;
  return function (i) {
    return (0, _pith.Pith$$$append)(o$$1(i), a(i));
  };
}

function IO$$$map(g, f, _arg1$$1) {
  const io = _arg1$$1;
  return function (i$$1) {
    return (0, _pith.Pith$$$map)(f, io(g(i$$1)));
  };
}

function IO$$$fold(f$$1, s, _arg1$$2) {
  const io$$1 = _arg1$$2;
  return function (i$$2) {
    return (0, _pith.Pith$$$fold)(f$$1, s, io$$1(i$$2));
  };
}

function IO$$$run(_arg1$$3) {
  const io$$2 = _arg1$$3;
  return (0, _task.run)((0, _task.return$0027)(function (i$$3) {
    var err;
    return (0, _List.fold)(function folder(o$$2, a$$1) {
      const matchValue = [o$$2, a$$1];

      if (matchValue[0] != null) {
        if (matchValue[1] != null) {
          const a$$2 = matchValue[1];
          const o$$4 = matchValue[0];
          return (0, _disposable.append)(a$$2, o$$4);
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
    }, null, (0, _pith.Pith$$$toList)(i$$3.tag === 1 ? (err = i$$3.fields[1], io$$2(new IO$002EOn$00601(1, "Exn", null, err))) : io$$2(new IO$002EOn$00601(0, "Run", null))));
  }));
}