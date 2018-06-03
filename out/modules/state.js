"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateUpdate = exports.StateState = undefined;
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
      type: "Update.State.StateState",
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
(0, _Symbol2.setType)("Update.State.StateState", StateState);

class StateUpdate {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Update.State.StateUpdate",
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
(0, _Symbol2.setType)("Update.State.StateUpdate", StateUpdate);

function set(s) {
  return new _update.UpdateMonad(0, function (_arg1) {
    return [new StateUpdate(0, s), null];
  });
}

function get() {
  return new _update.UpdateMonad(0, function (_arg1) {
    return [new StateUpdate(1), _arg1.data];
  });
}

function setRun(s, _arg1) {
  return _arg1.data(new StateState(0, s));
}