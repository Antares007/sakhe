import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { end$0027 as end$00240027, event, error, map as map$$1 } from "./sink";
import { return$0027 as return$00240027 } from "./task";
import { schedule } from "./scheduler";
export const T$00601 = declare(function T$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(f) {
  return new T$00601(0, "Stream", function (tupledArg) {
    return f(tupledArg[0], tupledArg[1]);
  });
}
export function run(scheduler$$1, sink$$1, _arg1) {
  const f$$1 = _arg1.fields[0];
  return f$$1([sink$$1, scheduler$$1]);
}
export function map(f$$2, source) {
  return new T$00601(0, "Stream", function (tupledArg$$1) {
    return run(tupledArg$$1[1], map$$1(f$$2, tupledArg$$1[0]), source);
  });
}
export function now(a) {
  return new T$00601(0, "Stream", function (tupledArg$$2) {
    return schedule(null, null, return$00240027(function (_arg1$$1) {
      if (_arg1$$1.tag === 1) {
        const t$$1 = _arg1$$1.fields[0][0];
        const err = _arg1$$1.fields[1];
        error(t$$1, err, tupledArg$$2[0]);
        return null;
      } else {
        const t = _arg1$$1.fields[0][0];
        const s = _arg1$$1.fields[0][1];
        event(t, a, tupledArg$$2[0]);
        end$00240027(t, tupledArg$$2[0]);
        return null;
      }
    }), tupledArg$$2[1]);
  });
}
export function periodic(period$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$3) {
    return schedule(null, period$$1, return$00240027(function (_arg1$$2) {
      if (_arg1$$2.tag === 1) {
        const t$$3 = _arg1$$2.fields[0][0];
        const err$$1 = _arg1$$2.fields[1];
        error(t$$3, err$$1, tupledArg$$3[0]);
        return null;
      } else {
        const t$$2 = _arg1$$2.fields[0][0];
        const s$$1 = _arg1$$2.fields[0][1];
        event(t$$2, null, tupledArg$$3[0]);
        return null;
      }
    }), tupledArg$$3[1]);
  });
}