import { max, comparePrimitives } from "../fable-core.2.0.0-beta-003/Util";
import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
export function Time$$$return$0027(f) {
  if (!(f >= 0)) {
    debugger;
  }

  return Math.floor(f);
}
export function Time$$$value(_arg1) {
  const f$$1 = _arg1;
  return f$$1;
}
export function Time$$$add(now, _arg1$$1) {
  if (_arg1$$1 != null) {
    const delay = _arg1$$1;
    const now$$1 = now;
    return now$$1 + delay;
  } else {
    return now;
  }
}
export function Time$002EDelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}
export function Time$002EDelayModule$$$value(_arg1$$2) {
  const i$$1 = _arg1$$2;
  return i$$1 | 0;
}
export function Time$002EDelayModule$$$fromTo(_arg2, _arg1$$3) {
  const from = _arg2;
  const to$0027 = _arg1$$3;
  return max(comparePrimitives, 0, to$0027 - from);
}
export const Clock$002ET = declare(function Clock$002ET(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Clock$$$return$0027(f$$2) {
  return new Clock$002ET(0, "Clock", f$$2);
}
export function Clock$$$now(_arg1$$4) {
  const f$$3 = _arg1$$4.fields[0];
  return f$$3();
}