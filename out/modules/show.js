import Event$ from "./fable-core.2.0.0-beta-003/Event";
import { IObservable$00601$002Eget_toStream as IObservable$002400601$0024002Eget_toStream, Extensions$$$S as Extensions$0024$0024$0024S, Extensions$$$defaultScheduler as Extensions$0024$0024$0024defaultScheduler } from "./most";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { ClockTimer$$$$002Ector$$3D77EC07 as ClockTimer$0024$0024$0024$0024002Ector$0024$00243D77EC07 } from "./scheduler/clocktimer";
import { comparePrimitives } from "./fable-core.2.0.0-beta-003/Util";
import { map, sort } from "./fable-core.2.0.0-beta-003/Array";
import { removeByTime, insertByTime, findAppendPosition } from "./scheduler/timeline";
export const e = new Event$();
export function drain(sink, s$$1) {
  return Extensions$0024$0024$0024S.run(sink, Extensions$0024$0024$0024defaultScheduler, s$$1);
}
console.log("trigger");
export const disposable = drain({
  event(t, e$$1) {
    toConsole(printf("event: %f %d"))(t)(e$$1);
  },

  end(t$$1) {
    toConsole(printf("end: %f"))(t$$1);
  },

  error(t$$2, error) {
    toConsole(printf("end: %f %A"))(t$$2)(error);
  }

}, Extensions$0024$0024$0024S.tap(function (arg10$$2) {
  toConsole(printf("tap: %d"))(arg10$$2);
}, IObservable$002400601$0024002Eget_toStream(e.Publish)));
e.Trigger(42);
console.log("triggered");
export function ClockTimer(arg00$$2) {
  return ClockTimer$0024$0024$0024$0024002Ector$0024$00243D77EC07(arg00$$2);
}
export function timeSortedArray(array) {
  return map(function mapping(i) {
    return [i.toString(), i];
  }, sort(array, {
    Compare: comparePrimitives
  }), Array);
}
export function s(array$$3, i$$1) {
  const rez = findAppendPosition(i$$1, array$$3) | 0;
  toConsole(printf("rez: %A"))(rez);
}
window.timeSortedArray = timeSortedArray;
window.s = s;
window.insertByTime = insertByTime;
window.removeByTime = removeByTime;