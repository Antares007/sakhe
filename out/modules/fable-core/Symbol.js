"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setType = setType;
exports.getType = getType;
var types = new Map();
function setType(fullName, cons) {
  types.set(fullName, cons);
}
function getType(fullName) {
  return types.get(fullName);
}
exports.default = {
  reflection: Symbol("reflection")
};
//# sourceMappingURL=Symbol.js.map