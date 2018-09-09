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
export function appendArray(disposables) {
  return return$0027(function () {
    const to$0027 = disposables.length - 1 | 0;

    for (let i = 0; i <= to$0027; i++) {
      const f$$2 = disposables[i];
      f$$2();
    }
  });
}