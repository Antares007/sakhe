import { max, comparePrimitives } from "../fable-core.2.0.0-beta-003/Util";
export function return$0027(f) {
  if (!(f >= 0)) {
    debugger;
  }

  return Math.floor(f);
}
export function add(_arg2, _arg1) {
  const now = _arg2;
  const delay = _arg1;
  return now + delay;
}
export function DelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}
export function DelayModule$$$value(_arg1$$1) {
  const i$$1 = _arg1$$1;
  return i$$1 | 0;
}
export function DelayModule$$$fromTo(_arg2$$1, _arg1$$2) {
  const from = _arg2$$1;
  const to$0027 = _arg1$$2;
  return max(comparePrimitives, 0, to$0027 - from);
}