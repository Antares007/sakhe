"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CurriedLambda;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function CurriedLambda(f, expectedArgsLength) {
  if (f.curried === true) {
    return f;
  }
  var curriedFn = function curriedFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var args2 = args.map(function (x) {
      return typeof x === "function" ? CurriedLambda(x) : x;
    });
    var actualArgsLength = Math.max(args2.length, 1);
    expectedArgsLength = Math.max(expectedArgsLength || f.length, 1);
    if (actualArgsLength >= expectedArgsLength) {
      var restArgs = args2.splice(expectedArgsLength);
      var res = f.apply(undefined, _toConsumableArray(args2));
      if (typeof res === "function") {
        var newLambda = CurriedLambda(res);
        return restArgs.length === 0 ? newLambda : newLambda.apply(undefined, _toConsumableArray(restArgs));
      } else {
        return res;
      }
    } else {
      return CurriedLambda(function () {
        for (var _len2 = arguments.length, args3 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args3[_key2] = arguments[_key2];
        }

        return f.apply(undefined, _toConsumableArray(args2.concat(args3)));
      }, expectedArgsLength - actualArgsLength);
    }
  };
  curriedFn.curried = true;
  return curriedFn;
}