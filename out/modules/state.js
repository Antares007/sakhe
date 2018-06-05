"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.StateBuilder = exports.State = exports.StateUpdate = exports.StateState = undefined;
exports.valueOf = valueOf;
exports.Of = Of;
exports.set = set;
exports.get = get;
exports.setRun = setRun;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _update = require("./update");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StateState {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.State.StateState",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["State", (0, _Util.GenericParam)("T")]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

  CompareTo(other) {
    return (0, _Util.compareUnions)(this, other) | 0;
  }

}

exports.StateState = StateState;
(0, _Symbol2.setType)("Sakhe.State.StateState", StateState);

class StateUpdate {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.State.StateUpdate",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["Set", (0, _Util.GenericParam)("T")], ["SetNop"]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

  CompareTo(other) {
    return (0, _Util.compareUnions)(this, other) | 0;
  }

  static get Unit() {
    return new StateUpdate(1);
  }

  static Combine(a, b) {
    const matchValue = [a, b];

    if (matchValue[0].tag === 0) {
      if (matchValue[1].tag === 0) {
        return new StateUpdate(0, matchValue[1].data);
      } else {
        return matchValue[0];
      }
    } else {
      return matchValue[1];
    }
  }

  static Apply(s, p) {
    if (p.tag === 0) {
      return new StateState(0, p.data);
    } else {
      return s;
    }
  }

}

exports.StateUpdate = StateUpdate;
(0, _Symbol2.setType)("Sakhe.State.StateUpdate", StateUpdate);

class State {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.State.State",
      interfaces: ["FSharpUnion"],
      cases: [["M", (0, _Util.makeGeneric)(_update.UpdateMonad, {
        state: (0, _Util.makeGeneric)(StateState, {
          T: (0, _Util.GenericParam)("s")
        }),
        update: (0, _Util.makeGeneric)(StateUpdate, {
          T: (0, _Util.GenericParam)("s")
        }),
        value: (0, _Util.GenericParam)("a")
      })]]
    };
  }

}

exports.State = State;
(0, _Symbol2.setType)("Sakhe.State.State", State);

function valueOf(_arg1) {
  return _arg1.data;
}

function Of(a) {
  return new State(0, a);
}

function set(s) {
  return new State(0, new _update.UpdateMonad(0, function (_arg1) {
    return [new StateUpdate(0, s), null];
  }));
}

function get() {
  return new State(0, new _update.UpdateMonad(0, function (_arg1) {
    return [new StateUpdate(1), _arg1.data];
  }));
}

function setRun(s, _arg1) {
  const f = _arg1.data.data;
  return f(new StateState(0, s));
}

class StateBuilder {
  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.State.StateBuilder",
      properties: {}
    };
  }

  constructor() {
    this.ub = new _update.UpdateBuilder();
  }

}

exports.StateBuilder = StateBuilder;
(0, _Symbol2.setType)("Sakhe.State.StateBuilder", StateBuilder);
const state = exports.state = new StateBuilder();