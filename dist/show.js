import { run, combineArray, at, map, tap, on, merge, periodic } from "./stream";
import { empty } from "./disposable";
import { createAtom } from "./fable-library.2.1.0-beta-006/Util";
import { scheduler } from "./default";
import { toConsole, printf } from "./fable-library.2.1.0-beta-006/String";
export function pair(a, b) {
  return [a, b];
}
export const s = merge(periodic(1000, "a"), periodic(2000, "b"));
export const d = createAtom(empty);
export const onClick = map(function f$$2(e$$1) {
  return "clientX:" + e$$1.clientX.toString() + " clientY:" + e$$1.clientY.toString();
}, map(function f$$1(e) {
  return e;
}, merge(tap(function f(_arg1) {
  d().Dispose();
}, on("click", window)), on("mousemove", window))));
export const sc = combineArray([at(3, "a"), at(2, "b"), at(1, "c")]);
d(run(scheduler, function (arg10) {
  toConsole(printf("%A"))(arg10);
}, merge(onClick, s)));