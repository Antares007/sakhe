export function empty() {}
export function return$0027(f) {
  let disposed = false;
  return function () {
    if (!disposed) {
      disposed = true;
      f();
    }
  };
}
export function append(_arg2, _arg1) {
  const l = _arg2;
  const r = _arg1;
  return return$0027(function () {
    l();
    r();
  });
}
export function dispose(_arg1$$1) {
  const f$$1 = _arg1$$1;
  f$$1();
}