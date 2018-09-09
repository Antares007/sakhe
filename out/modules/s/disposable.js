"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.return$0027 = return$0027;
exports.append = append;
exports.appendArray = appendArray;

function empty() {}

function return$0027(f) {
  let disposed = false;
  return function () {
    if (!disposed) {
      disposed = true;
      f();
    }
  };
}

function append(_arg2, _arg1) {
  const l = _arg2;
  const r = _arg1;
  return return$0027(function () {
    l();
    r();
  });
}

function appendArray(disposables) {
  return return$0027(function () {
    const to$0027 = disposables.length - 1 | 0;

    for (let i = 0; i <= to$0027; i++) {
      const f$$2 = disposables[i];
      f$$2();
    }
  });
}