import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
export const T = declare(function T(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(f) {
  return new T(0, "Clock", f);
}
export function now(_arg1) {
  const f$$1 = _arg1.fields[0];
  return f$$1();
}