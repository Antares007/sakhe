"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Some = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.makeSome = makeSome;
exports.getValue = getValue;
exports.defaultArg = defaultArg;
exports.defaultArgWith = defaultArgWith;
exports.filter = filter;

var _Util = require("./Util");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Some = exports.Some = function () {
  function Some(value) {
    _classCallCheck(this, Some);

    this.value = value;
  }
  // We don't prefix it with "Some" for consistency with erased options


  _createClass(Some, [{
    key: "ToString",
    value: function ToString() {
      return (0, _Util.toString)(this.value);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      if (other == null) {
        return false;
      } else {
        return (0, _Util.equals)(this.value, other instanceof Some ? other.value : other);
      }
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      if (other == null) {
        return 1;
      } else {
        return (0, _Util.compare)(this.value, other instanceof Some ? other.value : other);
      }
    }
  }]);

  return Some;
}();

function makeSome(x) {
  return x == null || x instanceof Some ? new Some(x) : x;
}
function getValue(x, acceptNull) {
  if (x == null) {
    if (!acceptNull) {
      throw new Error("Option has no value");
    }
    return null;
  } else {
    return x instanceof Some ? x.value : x;
  }
}
function defaultArg(arg, defaultValue, f) {
  return arg == null ? defaultValue : f != null ? f(getValue(arg)) : getValue(arg);
}
function defaultArgWith(arg, defThunk) {
  return arg == null ? defThunk() : getValue(arg);
}
function filter(predicate, arg) {
  return arg != null ? !predicate(getValue(arg)) ? null : arg : arg;
}
//# sourceMappingURL=Option.js.map