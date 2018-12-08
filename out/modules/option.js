"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappend = mappend;

var _Option = require("./fable-library.2.1.6/Option");

function mappend(mappend$$1, l, r) {
  const matchValue = [l, r];

  if (matchValue[0] != null) {
    if (matchValue[1] != null) {
      const l$$2 = (0, _Option.value)(matchValue[0]);
      const r$$2 = (0, _Option.value)(matchValue[1]);
      return (0, _Option.some)(mappend$$1(l$$2, r$$2));
    } else {
      const l$$1 = (0, _Option.value)(matchValue[0]);
      return (0, _Option.some)(l$$1);
    }
  } else if (matchValue[1] != null) {
    const r$$1 = (0, _Option.value)(matchValue[1]);
    return (0, _Option.some)(r$$1);
  } else {
    return null;
  }
}