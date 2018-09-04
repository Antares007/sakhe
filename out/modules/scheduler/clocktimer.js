import { declare } from "../fable-core.2.0.0-beta-003/Types";
import { THIS_REF } from "../fable-core.2.0.0-beta-003/Util";
import { defer } from "./task";
import { TimerToken } from "./types";
const Asap = declare(function Asap(f) {
  const $this$$1 = this;
  $this$$1.f = f;
  $this$$1["active@3"] = true;
});

function Asap$$$$002Ector$$3A5B6456(f) {
  return this != null ? Asap.call(this, f) : new Asap(f);
}

function Asap$$$Sakhe$002EScheduler$002EIScheduledTask($this$$3) {
  return {
    [THIS_REF]: $this$$3,

    get active() {
      return $this$$3["active@3"];
    },

    set active(v) {
      $this$$3["active@3"] = v;
    },

    get time() {
      return 0;
    },

    run() {
      if ($this$$3["active@3"]) {
        $this$$3.f();
      }
    },

    error(e) {
      throw e;
    }

  };
}

function Asap$$cancel(__) {
  __["active@3"] = false;
}

function runAsap(f$$1) {
  const task = Asap$$$$002Ector$$3A5B6456(f$$1);
  defer(Asap$$$Sakhe$002EScheduler$002EIScheduledTask(task));
  return task;
}

export const ClockTimer = declare(function ClockTimer(clock) {
  const $this$$2 = this;
  $this$$2.clock = clock;
});
export function ClockTimer$$$$002Ector$$3D77EC07(clock) {
  return this != null ? ClockTimer.call(this, clock) : new ClockTimer(clock);
}
export function ClockTimer$$$Sakhe$002EScheduler$002EITimer($this$$5) {
  return {
    [THIS_REF]: $this$$5,

    now() {
      return $this$$5.clock.now();
    },

    setTimer(f$$2, dt) {
      return dt <= 0 ? new TimerToken(0, "Asap", Asap$$$Sakhe$002EScheduler$002EIScheduledTask(runAsap(f$$2))) : new TimerToken(1, "Timer", setTimeout(f$$2, dt));
    },

    clearTimer(token) {
      if (token.tag === 1) {
        const token$$1 = token.fields[0];
        clearTimeout(token$$1);
      } else {
        const asap = token.fields[0];
        Asap$$cancel(asap);
      }
    }

  };
}