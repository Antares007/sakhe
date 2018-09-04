import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
export const TimerToken = declare(function TimerToken(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);