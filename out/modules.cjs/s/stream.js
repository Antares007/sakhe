;require._modules["/s\stream.js"] = (function() { var __filename = "/s\stream.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\stream.js  == */ var __module__ = function() { 
 import { declare, Union } from "../fable-core.2.0.0-beta-004/Types";
import { Send$$$event as Send$0024$0024$0024event, Send$$$end$0027 as Send$0024$0024$0024end$00240027, Send$$$error as Send$0024$0024$0024error, mergeArray as mergeArray$$1, combineArray as combineArray$$1, skipRepeats as skipRepeats$$1, filterMap as filterMap$$1, filter as filter$$1, map as map$$1 } from "./sink";
import { mapIndexed } from "../fable-core.2.0.0-beta-004/Array";
import { empty as empty$$1, appendArray } from "./disposable";
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
export function filter(p, source$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$2) {
    return run(tupledArg$$2[1], filter$$1(p, tupledArg$$2[0]), source$$1);
  });
}
export function filterMap(f$$3, p$$1, source$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$3) {
    return run(tupledArg$$3[1], filterMap$$1(f$$3, p$$1, tupledArg$$3[0]), source$$2);
  });
}
export function skipRepeats(eq, source$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$4) {
    return run(tupledArg$$4[1], skipRepeats$$1(eq, tupledArg$$4[0]), source$$3);
  });
}
export function combineArray(sources) {
  return new T$00601(0, "Stream", function (tupledArg$$5) {
    return appendArray(mapIndexed(function mapping(i, sink$$11) {
      return run(tupledArg$$5[1], sink$$11, sources[i]);
    }, combineArray$$1(sources.length, tupledArg$$5[0]), Array));
  });
}
export function mergeArray(sources$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$6) {
    return appendArray(mapIndexed(function mapping$$1(i$$1, sink$$13) {
      return run(tupledArg$$6[1], sink$$13, sources$$2[i$$1]);
    }, mergeArray$$1(sources$$2.length, tupledArg$$6[0]), Array));
  });
}
export function empty() {
  return new T$00601(0, "Stream", function (tupledArg$$7) {
    return schedule(null, null, return$00240027(function (_arg1$$1) {
      if (_arg1$$1.tag === 1) {
        const t$$1 = _arg1$$1.fields[0][0];
        const err = _arg1$$1.fields[1];
        Send$0024$0024$0024error(t$$1, err, tupledArg$$7[0]);
        return null;
      } else {
        const t = _arg1$$1.fields[0][0];
        const s = _arg1$$1.fields[0][1];
        Send$0024$0024$0024end$00240027(t, tupledArg$$7[0]);
        return null;
      }
    }), tupledArg$$7[1]);
  });
}
export function never() {
  return new T$00601(0, "Stream", function (tupledArg$$8) {
    return empty$$1;
  });
}
export function now(a) {
  return new T$00601(0, "Stream", function (tupledArg$$9) {
    return schedule(null, null, return$00240027(function (_arg1$$3) {
      if (_arg1$$3.tag === 1) {
        const t$$3 = _arg1$$3.fields[0][0];
        const err$$1 = _arg1$$3.fields[1];
        Send$0024$0024$0024error(t$$3, err$$1, tupledArg$$9[0]);
        return null;
      } else {
        const t$$2 = _arg1$$3.fields[0][0];
        const s$$1 = _arg1$$3.fields[0][1];
        Send$0024$0024$0024event(t$$2, a, tupledArg$$9[0]);
        Send$0024$0024$0024end$00240027(t$$2, tupledArg$$9[0]);
        return null;
      }
    }), tupledArg$$9[1]);
  });
}
export function at(delay$$2, a$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$10) {
    return schedule(delay$$2, null, return$00240027(function (_arg1$$4) {
      if (_arg1$$4.tag === 1) {
        const t$$5 = _arg1$$4.fields[0][0];
        const err$$2 = _arg1$$4.fields[1];
        Send$0024$0024$0024error(t$$5, err$$2, tupledArg$$10[0]);
        return null;
      } else {
        const t$$4 = _arg1$$4.fields[0][0];
        const s$$2 = _arg1$$4.fields[0][1];
        Send$0024$0024$0024event(t$$4, a$$1, tupledArg$$10[0]);
        Send$0024$0024$0024end$00240027(t$$4, tupledArg$$10[0]);
        return null;
      }
    }), tupledArg$$10[1]);
  });
}
export function periodic(period$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$11) {
    return schedule(null, period$$3, return$00240027(function (_arg1$$5) {
      if (_arg1$$5.tag === 1) {
        const t$$7 = _arg1$$5.fields[0][0];
        const err$$3 = _arg1$$5.fields[1];
        Send$0024$0024$0024error(t$$7, err$$3, tupledArg$$11[0]);
        return null;
      } else {
        const t$$6 = _arg1$$5.fields[0][0];
        const s$$3 = _arg1$$5.fields[0][1];
        Send$0024$0024$0024event(t$$6, null, tupledArg$$11[0]);
        return null;
      }
    }), tupledArg$$11[1]);
  });
}
export function throwError(err$$4) {
  return new T$00601(0, "Stream", function (tupledArg$$12) {
    return schedule(null, null, return$00240027(function (_arg1$$6) {
      if (_arg1$$6.tag === 1) {
        const t$$9 = _arg1$$6.fields[0][0];
        const err$$5 = _arg1$$6.fields[1];
        throw err$$5;
        return null;
      } else {
        const t$$8 = _arg1$$6.fields[0][0];
        const s$$4 = _arg1$$6.fields[0][1];
        Send$0024$0024$0024error(t$$8, err$$4, tupledArg$$12[0]);
        return null;
      }
    }), tupledArg$$12[1]);
  });
} 
 }; /* ==  End source for module /s\stream.js  == */ return module; }());;