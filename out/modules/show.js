import * as scheduler from "@most/scheduler";
import * as core from "@most/core";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
const Exts$$$scheduler = scheduler;
const Exts$$$defaultScheduler = Exts$$$scheduler.newDefaultScheduler();
export function IExports$002Edrain$$Z57BFC98E(xs, s) {
  return xs.runEffects(s, Exts$$$defaultScheduler);
}
export const Play$$$S = core;
IExports$002Edrain$$Z57BFC98E(Play$$$S, Play$$$S.takeWhile(function (y$$2) {
  return 0 < y$$2;
}, Play$$$S.tap(function (arg10$$6) {
  toConsole(printf("%d"))(arg10$$6);
}, Play$$$S.tap(function (arg00$$5) {
  console.log(arg00$$5);
}, Play$$$S.map(function (y$$1) {
  return 10 - y$$1;
}, Play$$$S.scan(function (x, y) {
  return x + y;
}, 0, Play$$$S.constant(1, Play$$$S.periodic(1000))))))));