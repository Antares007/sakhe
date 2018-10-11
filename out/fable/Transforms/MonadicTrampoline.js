"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.TrampolineBuilder$$$$002Ector = TrampolineBuilder$$$$002Ector;
exports.TrampolineBuilder$$Bind$$1CF97553 = TrampolineBuilder$$Bind$$1CF97553;
exports.TrampolineBuilder$$Delay$$Z6B697DAB = TrampolineBuilder$$Delay$$Z6B697DAB;
exports.TrampolineBuilder$$Return$$1505 = TrampolineBuilder$$Return$$1505;
exports.TrampolineBuilder$$ReturnFrom$$1C7D6CBF = TrampolineBuilder$$ReturnFrom$$1C7D6CBF;
exports.trampolineListMapAcc = trampolineListMapAcc;
exports.trampoline = exports.TrampolineBuilder = exports.Thunk = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

const Thunk = (0, _Types.declare)(function Thunk(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Thunk = Thunk;

function run(thunk) {
  const runInner = function runInner(cont, _arg1) {
    runInner: while (true) {
      switch (_arg1.tag) {
        case 1:
          {
            const v = _arg1.fields[0];

            if (cont.tail != null) {
              const f$$1 = cont.head;
              const cont$$1 = cont.tail;
              cont = cont$$1;
              _arg1 = f$$1(v);
              continue runInner;
            } else {
              return v;
            }
          }

        case 2:
          {
            const thunk$$1 = _arg1.fields[0];
            const f$$2 = _arg1.fields[1];
            cont = (0, _Types.L)(f$$2, cont);
            _arg1 = thunk$$1;
            continue runInner;
          }

        default:
          {
            const f = _arg1.fields[0];
            cont = cont;
            _arg1 = f();
            continue runInner;
          }
      }
    }
  };

  return runInner((0, _Types.L)(), thunk);
}

const TrampolineBuilder = (0, _Types.declare)(function TrampolineBuilder() {});
exports.TrampolineBuilder = TrampolineBuilder;

function TrampolineBuilder$$$$002Ector() {
  return this != null ? TrampolineBuilder.call(this) : new TrampolineBuilder();
}

function TrampolineBuilder$$Bind$$1CF97553(__, thunk$$2, f$$3) {
  return new Thunk(2, "BindValue", thunk$$2, function ($arg$$2) {
    return f$$3($arg$$2);
  });
}

function TrampolineBuilder$$Delay$$Z6B697DAB(__$$1, f$$4) {
  return new Thunk(0, "DelayValue", f$$4);
}

function TrampolineBuilder$$Return$$1505(__$$2, a) {
  return new Thunk(1, "ReturnValue", a);
}

function TrampolineBuilder$$ReturnFrom$$1C7D6CBF(__$$3, a$$1) {
  return a$$1;
}

const trampoline = TrampolineBuilder$$$$002Ector();
exports.trampoline = trampoline;

function trampolineListMapAcc(acc, f$$5, xs) {
  return TrampolineBuilder$$Delay$$Z6B697DAB(trampoline, function () {
    if (xs.tail != null) {
      const t = xs.tail;
      const h = xs.head;
      return TrampolineBuilder$$Bind$$1CF97553(trampoline, f$$5(h), function (_arg1$$1) {
        const x = _arg1$$1;
        return TrampolineBuilder$$ReturnFrom$$1C7D6CBF(trampoline, trampolineListMapAcc((0, _Types.L)(x, acc), f$$5, t));
      });
    } else {
      return TrampolineBuilder$$Return$$1505(trampoline, (0, _List.reverse)(acc));
    }
  });
}