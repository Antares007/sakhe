import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
export const Clock$002ET = declare(function Clock$002ET(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Clock$$$return$0027(f) {
  return new Clock$002ET(0, "Clock", f);
}
export function Clock$$$now(_arg1) {
  const f$$1 = _arg1.fields[0];
  return f$$1();
}