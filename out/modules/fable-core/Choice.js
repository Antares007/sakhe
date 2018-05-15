"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.choice1Of2 = choice1Of2;
exports.choice2Of2 = choice2Of2;

var _Symbol = require("./Symbol");

var _Symbol2 = _interopRequireDefault(_Symbol);

var _Util = require("./Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function choice1Of2(v) {
  return new Choice(0, v);
}
function choice2Of2(v) {
  return new Choice(1, v);
}

var Choice = function () {
  function Choice(tag, data) {
    _classCallCheck(this, Choice);

    this.tag = tag | 0;
    this.data = data;
  }

  _createClass(Choice, [{
    key: "Equals",
    value: function Equals(other) {
      return (0, _Util.equalsUnions)(this, other);
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      return (0, _Util.compareUnions)(this, other);
    }
  }, {
    key: _Symbol2.default.reflection,
    value: function value() {
      return {
        type: "Microsoft.FSharp.Core.FSharpChoice",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["Choice1Of2", _Util.Any], ["Choice2Of2", _Util.Any]]
      };
    }
  }, {
    key: "valueIfChoice1",
    get: function get() {
      return this.tag === 0 ? this.data : null;
    }
  }, {
    key: "valueIfChoice2",
    get: function get() {
      return this.tag === 1 ? this.data : null;
    }
  }]);

  return Choice;
}();

exports.default = Choice;
//# sourceMappingURL=Choice.js.map