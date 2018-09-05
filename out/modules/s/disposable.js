import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
export const T = declare(function T(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const empty = new T(0, "Disposable", function () {});
export function return$0027(f) {
  let disposed = false;
  return new T(0, "Disposable", function () {
    if (!disposed) {
      disposed = true;
      f();
    }
  });
}
export function append(_arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return return$0027(function () {
    l();
    r();
  });
}
export function dispose(_arg1$$1) {
  const f$$1 = _arg1$$1.fields[0];
  f$$1();
}