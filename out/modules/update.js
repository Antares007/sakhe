"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.UpdateBuilder = exports.UpdateMonad = undefined;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateMonad {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Update.UpdateMonad",
      interfaces: ["FSharpUnion"],
      cases: [["UM", (0, _Util.Function)([(0, _Util.GenericParam)("TState"), (0, _Util.Tuple)([(0, _Util.GenericParam)("TUpdate"), (0, _Util.GenericParam)("T")])])]]
    };
  }

}

exports.UpdateMonad = UpdateMonad;
(0, _Symbol2.setType)("Update.UpdateMonad", UpdateMonad);

class UpdateBuilder {
  [_Symbol3.default.reflection]() {
    return {
      type: "Update.UpdateBuilder",
      properties: {}
    };
  }

  constructor() {}

}

exports.UpdateBuilder = UpdateBuilder;
(0, _Symbol2.setType)("Update.UpdateBuilder", UpdateBuilder);
const update = exports.update = new UpdateBuilder();