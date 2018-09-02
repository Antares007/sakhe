import * as scheduler$$1 from "@most/scheduler";
import * as core from "@most/core";
const scheduler = scheduler$$1;
const defaultScheduler = scheduler.newDefaultScheduler();
export const S = core;
export function IExports$002Edrain$$Z57BFC98E(__, s) {
  return S.runEffects(s, defaultScheduler);
}