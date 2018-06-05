"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.UpdateBuilder = exports.UpdateMonad = undefined;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _s = require("./s");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateMonad {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.Update.UpdateMonad",
      interfaces: ["FSharpUnion"],
      cases: [["UM", (0, _Util.Function)([(0, _Util.GenericParam)("state"), (0, _Util.Tuple)([(0, _Util.GenericParam)("update"), (0, _Util.GenericParam)("value")])])]]
    };
  }

}

exports.UpdateMonad = UpdateMonad;
(0, _Symbol2.setType)("Sakhe.Update.UpdateMonad", UpdateMonad);

function tree(f, i, p) {
  return _s.S.treeCombine(f, i, p);
}

class UpdateBuilder {
  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.Update.UpdateBuilder",
      properties: {}
    };
  }

  constructor() {}

}

exports.UpdateBuilder = UpdateBuilder;
(0, _Symbol2.setType)("Sakhe.Update.UpdateBuilder", UpdateBuilder);
const update = exports.update = new UpdateBuilder();