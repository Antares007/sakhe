"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.bind = bind;
exports.run = run;
exports.TaskIO$$$pmap = TaskIO$$$pmap;
exports.TaskIO$002EI$$$map = TaskIO$002EI$$$map;
exports.TaskIO$$$return$0027 = TaskIO$$$return$0027;
exports.TaskIO$$$run = TaskIO$$$run;
exports.TaskIO$002ETryCatch$00601 = void 0;

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _pith = require("./pith");

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _disposable = require("./s/disposable");

function return$0027(f) {
  return function ($arg$$1) {
    return (0, _Util.partialApply)(1, f, [$arg$$1]);
  };
}

function map(f$$1, _arg1) {
  const io = _arg1;
  return function (i) {
    const p = io(i);
    return (0, _Util.partialApply)(1, f$$1, [p]);
  };
}

function bind(g, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return function (i$$1) {
    const p$$1 = io$$1(i$$1);
    const io$$2 = g(p$$1);
    return io$$2(i$$1);
  };
}

function run(i$$2, o, _arg1$$2) {
  const io$$3 = _arg1$$2;
  return (0, _pith.Pith$$$run)(o, io$$3(i$$2));
}

const TaskIO$002ETryCatch$00601 = (0, _Types.declare)(function TaskIO$002ETryCatch$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TaskIO$002ETryCatch$00601 = TaskIO$002ETryCatch$00601;

function TaskIO$$$pmap(f$$2, _arg1$$3) {
  const io$$4 = _arg1$$3;
  return function (i$$3) {
    const p$$2 = io$$4(i$$3);
    return (0, _Util.partialApply)(1, f$$2, [p$$2]);
  };
}

function TaskIO$002EI$$$map(f$$3, _arg1$$4) {
  if (_arg1$$4.tag === 1) {
    const exn = _arg1$$4.fields[1];
    const a$$1 = _arg1$$4.fields[0];
    return new TaskIO$002ETryCatch$00601(1, "Catch", f$$3(a$$1), exn);
  } else {
    const a = _arg1$$4.fields[0];
    return new TaskIO$002ETryCatch$00601(0, "Try", f$$3(a));
  }
}

function TaskIO$$$return$0027(f$$4) {
  return f$$4;
}

function TaskIO$$$run(a$$2, _arg1$$5) {
  const io$$5 = _arg1$$5;
  const o$$1 = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
  let b;

  try {
    try {
      b = (0, _pith.Pith$$$run)(o$$1, io$$5(new TaskIO$002ETryCatch$00601(0, "Try", a$$2)));
    } catch (err) {
      b = (0, _pith.Pith$$$run)(o$$1, io$$5(new TaskIO$002ETryCatch$00601(1, "Catch", a$$2, err)));
    }
  } catch (err$$1) {
    (0, _pith.O$00602$$get_Value)(o$$1).Dispose();
    throw err$$1;
  }

  return [b, (0, _pith.O$00602$$get_Value)(o$$1)];
}