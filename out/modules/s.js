"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskIO$$$return$0027 = TaskIO$$$return$0027;
exports.TaskIO$$$run = TaskIO$$$run;
exports.testTaskIO = exports.TaskIO$002EO$00601 = exports.TaskIO$002EI$00601 = exports.TaskIO$002ET$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _task = require("./s/task");

var _String = require("./fable-core.2.0.0-beta-004/String");

const TaskIO$002ET$00601 = (0, _Types.declare)(function TaskIO$002ET$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TaskIO$002ET$00601 = TaskIO$002ET$00601;
const TaskIO$002EI$00601 = (0, _Types.declare)(function TaskIO$002EI$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TaskIO$002EI$00601 = TaskIO$002EI$00601;
const TaskIO$002EO$00601 = (0, _Types.declare)(function TaskIO$002EO$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TaskIO$002EO$00601 = TaskIO$002EO$00601;

function TaskIO$$$return$0027(f) {
  return new TaskIO$002ET$00601(0, "TaskIO", f);
}

function TaskIO$$$run(a, _arg1) {
  const io = _arg1.fields[0];
  return (0, _task.run)((0, _task.return$0027)(function (i) {
    var err;
    return (0, _List.fold)(function folder(o, _arg2) {
      if (_arg2.tag === 1) {
        const a$$1 = _arg2.fields[0];

        if (o != null) {
          const o$$1 = o;
          return (0, _disposable.append)(a$$1, o$$1);
        } else {
          return a$$1;
        }
      } else {
        const io$$1 = _arg2.fields[0];
        return TaskIO$$$run(a, io$$1);
      }
    }, null, (0, _pith.Pith$$$toList)(i.tag === 1 ? (err = i.fields[1], io(new TaskIO$002EI$00601(1, "Exn", a, err))) : io(new TaskIO$002EI$00601(0, "Run", a))));
  }));
}

const testTaskIO = TaskIO$$$run(42, TaskIO$$$return$0027(function (_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const err$$1 = _arg1$$1.fields[1];
    const a$$4 = _arg1$$1.fields[0] | 0;
    return function (o$$3) {
      (0, _String.toConsole)((0, _String.printf)("%A"))(err$$1.message);
    };
  } else {
    const a$$3 = _arg1$$1.fields[0] | 0;
    return function (o$$2) {
      (0, _String.toConsole)((0, _String.printf)("hello"));
      (0, _String.toConsole)((0, _String.printf)("world"));
    };
  }
}));
exports.testTaskIO = testTaskIO;