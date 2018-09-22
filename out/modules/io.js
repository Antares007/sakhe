"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.run = run;
exports.TaskIO$$$run2 = TaskIO$$$run2;
exports.TaskIO$$$pmap = TaskIO$$$pmap;
exports.TaskIO$002EI$$$map = TaskIO$002EI$$$map;
exports.TaskIO$$$return$0027 = TaskIO$$$return$0027;
exports.TaskIO$$$run = TaskIO$$$run;
exports.TaskIO$002ETryCatch$00601 = void 0;

var _pith = require("./pith");

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _disposable = require("./s/disposable");

function return$0027(f) {
  return f;
}

function map(f$$1, _arg1) {
  const io = _arg1;
  return function ($arg$$1) {
    return f$$1(io($arg$$1));
  };
}

function run(i, o, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return (0, _pith.Pith$$$run)(o, io$$1(i));
}

const TaskIO$002ETryCatch$00601 = (0, _Types.declare)(function TaskIO$002ETryCatch$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TaskIO$002ETryCatch$00601 = TaskIO$002ETryCatch$00601;

function TaskIO$$$run2(i$$1, io$$2) {
  return return$0027(function () {
    return function (o$$1) {
      const o$$2 = (0, _pith.O$$$return$0027)(function (unitVar0$$1, a) {
        o$$1(a);
      }, null);

      try {
        return (0, _pith.Pith$$$run)(o$$2, io$$2(new TaskIO$002ETryCatch$00601(0, "Try", i$$1)));
      } catch (err) {
        return (0, _pith.Pith$$$run)(o$$2, io$$2(new TaskIO$002ETryCatch$00601(1, "Catch", i$$1, err)));
      }
    };
  });
}

function TaskIO$$$pmap(f$$3, _arg1$$2) {
  const io$$3 = _arg1$$2;
  return function (i$$2) {
    const p = io$$3(i$$2);
    return (0, _Util.partialApply)(1, f$$3, [p]);
  };
}

function TaskIO$002EI$$$map(f$$4, _arg1$$3) {
  if (_arg1$$3.tag === 1) {
    const exn = _arg1$$3.fields[1];
    const a$$2 = _arg1$$3.fields[0];
    return new TaskIO$002ETryCatch$00601(1, "Catch", f$$4(a$$2), exn);
  } else {
    const a$$1 = _arg1$$3.fields[0];
    return new TaskIO$002ETryCatch$00601(0, "Try", f$$4(a$$1));
  }
}

function TaskIO$$$return$0027(f$$5) {
  return f$$5;
}

function TaskIO$$$run(a$$3, _arg1$$4) {
  const io$$4 = _arg1$$4;
  const o$$3 = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
  let b;

  try {
    try {
      b = (0, _pith.Pith$$$run)(o$$3, io$$4(new TaskIO$002ETryCatch$00601(0, "Try", a$$3)));
    } catch (err$$1) {
      b = (0, _pith.Pith$$$run)(o$$3, io$$4(new TaskIO$002ETryCatch$00601(1, "Catch", a$$3, err$$1)));
    }
  } catch (err$$2) {
    (0, _pith.O$00602$$get_Value)(o$$3).Dispose();
    throw err$$2;
  }

  return [b, (0, _pith.O$00602$$get_Value)(o$$3)];
}