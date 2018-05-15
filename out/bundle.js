'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function padWithZeros(i, length) {
    let str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function offsetToString(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = (offset % 3600000) / 60000;
    return (isMinus ? "-" : "+") +
        padWithZeros(hours, 2) + ":" +
        padWithZeros(minutes, 2);
}
function toHalfUTCString(date, half) {
    const str = date.toISOString();
    return half === "first"
        ? str.substring(0, str.indexOf("T"))
        : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function toISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    }
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return padWithZeros(d.getFullYear(), 4) + "-" +
            padWithZeros(d.getMonth() + 1, 2) + "-" +
            padWithZeros(d.getDate(), 2) + "T" +
            padWithZeros(d.getHours(), 2) + ":" +
            padWithZeros(d.getMinutes(), 2) + ":" +
            padWithZeros(d.getSeconds(), 2) + "." +
            padWithZeros(d.getMilliseconds(), 3) +
            (printOffset ? offsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function toISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + offsetToString(offset);
}
function toStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, (match) => {
        let rep = match;
        switch (match.substring(0, 1)) {
            case "y":
                const y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                const h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
        }
        if (rep !== match && rep < 10 && match.length > 1) {
            rep = "0" + rep;
        }
        return rep;
    });
}
function toStringWithOffset(date, format) {
    const d = new Date(date.getTime() + date.offset);
    if (!format) {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + offsetToString(date.offset);
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d": return toHalfUTCString(d, "first");
            case "T":
            case "t": return toHalfUTCString(d, "second");
            case "O":
            case "o": return toISOStringWithOffset(d, date.offset);
            default: throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return toStringWithCustomFormat(d, format, true);
    }
}
function toStringWithKind(date, format) {
    const utc = date.kind === 1 /* UTC */;
    if (!format) {
        return utc ? date.toUTCString() : date.toLocaleString();
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? toHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? toHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return toISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return toStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format) {
    return date.offset != null
        ? toStringWithOffset(date, format)
        : toStringWithKind(date, format);
}
function compare(x, y) {
    const xtime = x.getTime();
    const ytime = y.getTime();
    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);
}

const types = new Map();
function setType(fullName, cons) {
    types.set(fullName, cons);
}
var FSymbol = {
    reflection: Symbol("reflection"),
};

class NonDeclaredType {
    constructor(kind, definition, generics) {
        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }
    Equals(other) {
        if (this.kind === other.kind && this.definition === other.definition) {
            return typeof this.generics === "object"
                // equalsRecords should also work for Type[] (tuples)
                ? equalsRecords(this.generics, other.generics)
                : this.generics === other.generics;
        }
        return false;
    }
}
const Any = new NonDeclaredType("Any");
const Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, [t]);
}
function FableFunction(types) {
    return new NonDeclaredType("Function", null, types);
}
function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[Symbol.iterator] === "function";
    }
    else if (typeof obj[FSymbol.reflection] === "function") {
        const interfaces = obj[FSymbol.reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
/**
 * Returns:
 * - Records: array with names of fields
 * - Classes: array with names of getters
 * - Nulls and unions: empty array
 * - JS Objects: The result of calling Object.getOwnPropertyNames
 */
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    const propertyMap = typeof obj[FSymbol.reflection] === "function" ? obj[FSymbol.reflection]().properties || [] : obj;
    return Object.getOwnPropertyNames(propertyMap);
}
function toString$1(obj, quoteStrings = false) {
    function isObject(x) {
        return x !== null && typeof x === "object" && !(x instanceof Number)
            && !(x instanceof String) && !(x instanceof Boolean);
    }
    if (obj == null || typeof obj === "number") {
        return String(obj);
    }
    if (typeof obj === "string") {
        return quoteStrings ? JSON.stringify(obj) : obj;
    }
    if (obj instanceof Date) {
        return toString(obj);
    }
    if (typeof obj.ToString === "function") {
        return obj.ToString();
    }
    if (hasInterface(obj, "FSharpUnion")) {
        const info = obj[FSymbol.reflection]();
        const uci = info.cases[obj.tag];
        switch (uci.length) {
            case 1:
                return uci[0];
            case 2:
                // For simplicity let's always use parens, in .NET they're ommitted in some cases
                return uci[0] + " (" + toString$1(obj.data, true) + ")";
            default:
                return uci[0] + " (" + obj.data.map((x) => toString$1(x, true)).join(",") + ")";
        }
    }
    try {
        return JSON.stringify(obj, (k, v) => {
            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v)
                : v && typeof v.ToString === "function" ? toString$1(v) : v;
        });
    }
    catch (err) {
        // Fallback for objects with circular references
        return "{" + Object.getOwnPropertyNames(obj).map((k) => k + ": " + String(obj[k])).join(", ") + "}";
    }
}
function hash(x) {
    if (typeof x === typeof 1) {
        return x * 2654435761 | 0;
    }
    if (x != null && typeof x.GetHashCode === "function") {
        return x.GetHashCode();
    }
    else {
        const s = toString$1(x);
        let h = 5381;
        let i = 0;
        const len = s.length;
        while (i < len) {
            h = (h * 33) ^ s.charCodeAt(i++);
        }
        return h;
    }
}
function equals$1(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    }
    else if (x == null) {
        return y == null;
    }
    else if (y == null) {
        return false;
    }
    else if (typeof x !== "object" || typeof y !== "object") {
        return x === y;
        // Equals override or IEquatable implementation
    }
    else if (typeof x.Equals === "function") {
        return x.Equals(y);
    }
    else if (typeof y.Equals === "function") {
        return y.Equals(x);
    }
    else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
        return false;
    }
    else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return false;
        }
        for (let i = 0; i < x.length; i++) {
            if (!equals$1(x[i], y[i])) {
                return false;
            }
        }
        return true;
    }
    else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return false;
        }
        const dv1 = new DataView(x.buffer);
        const dv2 = new DataView(y.buffer);
        for (let i = 0; i < x.byteLength; i++) {
            if (dv1.getUint8(i) !== dv2.getUint8(i)) {
                return false;
            }
        }
        return true;
    }
    else if (x instanceof Date) {
        return x.getTime() === y.getTime();
    }
    else {
        return false;
    }
}
function compare$1(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    }
    else if (x == null) {
        return y == null ? 0 : -1;
    }
    else if (y == null) {
        return 1; // everything is bigger than null
    }
    else if (typeof x !== "object" || typeof y !== "object") {
        return x === y ? 0 : (x < y ? -1 : 1);
        // Some types (see Long.ts) may just implement the function and not the interface
        // else if (hasInterface(x, "System.IComparable"))
    }
    else if (typeof x.CompareTo === "function") {
        return x.CompareTo(y);
    }
    else if (typeof y.CompareTo === "function") {
        return y.CompareTo(x) * -1;
    }
    else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
        return -1;
    }
    else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return x.length < y.length ? -1 : 1;
        }
        for (let i = 0, j = 0; i < x.length; i++) {
            j = compare$1(x[i], y[i]);
            if (j !== 0) {
                return j;
            }
        }
        return 0;
    }
    else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return x.byteLength < y.byteLength ? -1 : 1;
        }
        const dv1 = new DataView(x.buffer);
        const dv2 = new DataView(y.buffer);
        for (let i = 0, b1 = 0, b2 = 0; i < x.byteLength; i++) {
            b1 = dv1.getUint8(i), b2 = dv2.getUint8(i);
            if (b1 < b2) {
                return -1;
            }
            if (b1 > b2) {
                return 1;
            }
        }
        return 0;
    }
    else if (x instanceof Date) {
        return compare(x, y);
    }
    else if (typeof x === "object") {
        const xhash = hash(x);
        const yhash = hash(y);
        if (xhash === yhash) {
            return equals$1(x, y) ? 0 : -1;
        }
        else {
            return xhash < yhash ? -1 : 1;
        }
    }
    else {
        return x < y ? -1 : 1;
    }
}
function equalsRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    }
    else {
        const keys = getPropertyNames(x);
        for (const key of keys) {
            if (!equals$1(x[key], y[key])) {
                return false;
            }
        }
        return true;
    }
}
function equalsUnions(x, y) {
    return x === y || (x.tag === y.tag && equals$1(x.data, y.data));
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    }
    else {
        const res = x.tag < y.tag ? -1 : (x.tag > y.tag ? 1 : 0);
        return res !== 0 ? res : compare$1(x.data, y.data);
    }
}

class Some {
    constructor(value) {
        this.value = value;
    }
    // We don't prefix it with "Some" for consistency with erased options
    ToString() {
        return toString$1(this.value);
    }
    Equals(other) {
        if (other == null) {
            return false;
        }
        else {
            return equals$1(this.value, other instanceof Some
                ? other.value : other);
        }
    }
    CompareTo(other) {
        if (other == null) {
            return 1;
        }
        else {
            return compare$1(this.value, other instanceof Some
                ? other.value : other);
        }
    }
}
function makeSome(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function getValue(x, acceptNull) {
    if (x == null) {
        if (!acceptNull) {
            throw new Error("Option has no value");
        }
        return null;
    }
    else {
        return x instanceof Some ? x.value : x;
    }
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */

// append :: a -> [a] -> [a]
// a with x appended
function append(x, a) {
  var l = a.length;
  var b = new Array(l + 1);
  for (var i = 0; i < l; ++i) {
    b[i] = a[i];
  }

  b[l] = x;
  return b;
}

// map :: (a -> b) -> [a] -> [b]
// transform each element with f
function map(f, a) {
  var l = a.length;
  var b = new Array(l);
  for (var i = 0; i < l; ++i) {
    b[i] = f(a[i]);
  }
  return b;
}

// reduce :: (a -> b -> a) -> a -> [b] -> a
// accumulate via left-fold
function reduce(f, z, a) {
  var r = z;
  for (var i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i);
  }
  return r;
}

// remove :: Int -> [a] -> [a]
// remove element at index
function remove(i, a) {
  // eslint-disable-line complexity
  if (i < 0) {
    throw new TypeError('i must be >= 0');
  }

  var l = a.length;
  if (l === 0 || i >= l) {
    // exit early if index beyond end of array
    return a;
  }

  if (l === 1) {
    // exit early if index in bounds and length === 1
    return [];
  }

  return unsafeRemove(i, a, l - 1);
}

// unsafeRemove :: Int -> [a] -> Int -> [a]
// Internal helper to remove element at index
function unsafeRemove(i, a, l) {
  var b = new Array(l);
  var j = void 0;
  for (j = 0; j < i; ++j) {
    b[j] = a[j];
  }
  for (j = i; j < l; ++j) {
    b[j] = a[j + 1];
  }

  return b;
}

// removeAll :: (a -> boolean) -> [a] -> [a]
// remove all elements matching a predicate
function removeAll(f, a) {
  var l = a.length;
  var b = new Array(l);
  var j = 0;
  for (var x, i = 0; i < l; ++i) {
    x = a[i];
    if (!f(x)) {
      b[j] = x;
      ++j;
    }
  }

  b.length = j;
  return b;
}

// findIndex :: a -> [a] -> Int
// find index of x in a, from the left
function findIndex(x, a) {
  for (var i = 0, l = a.length; i < l; ++i) {
    if (x === a[i]) {
      return i;
    }
  }
  return -1;
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */

// id :: a -> a
var id = function id(x) {
  return x;
};

// compose :: (b -> c) -> (a -> b) -> (a -> c)
var compose = function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
};

// apply :: (a -> b) -> a -> b
var apply = function apply(f, x) {
  return f(x);
};

// curry2 :: ((a, b) -> c) -> (a -> b -> c)
function curry2(f) {
  function curried(a, b) {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return function (b) {
          return f(a, b);
        };
      default:
        return f(a, b);
    }
  }
  return curried;
}

// curry3 :: ((a, b, c) -> d) -> (a -> b -> c -> d)
function curry3(f) {
  function curried(a, b, c) {
    // eslint-disable-line complexity
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry2(function (b, c) {
          return f(a, b, c);
        });
      case 2:
        return function (c) {
          return f(a, b, c);
        };
      default:
        return f(a, b, c);
    }
  }
  return curried;
}
//# sourceMappingURL=index.es.js.map

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var ScheduledTask = /*#__PURE__*/function () {
  function ScheduledTask(time, localOffset, period, task, scheduler) {
    classCallCheck(this, ScheduledTask);

    this.time = time;
    this.localOffset = localOffset;
    this.period = period;
    this.task = task;
    this.scheduler = scheduler;
    this.active = true;
  }

  ScheduledTask.prototype.run = function run() {
    return this.task.run(this.time - this.localOffset);
  };

  ScheduledTask.prototype.error = function error(e) {
    return this.task.error(this.time - this.localOffset, e);
  };

  ScheduledTask.prototype.dispose = function dispose() {
    this.scheduler.cancel(this);
    return this.task.dispose();
  };

  return ScheduledTask;
}();

var RelativeScheduler = /*#__PURE__*/function () {
  function RelativeScheduler(origin, scheduler) {
    classCallCheck(this, RelativeScheduler);

    this.origin = origin;
    this.scheduler = scheduler;
  }

  RelativeScheduler.prototype.currentTime = function currentTime() {
    return this.scheduler.currentTime() - this.origin;
  };

  RelativeScheduler.prototype.scheduleTask = function scheduleTask(localOffset, delay, period, task) {
    return this.scheduler.scheduleTask(localOffset + this.origin, delay, period, task);
  };

  RelativeScheduler.prototype.relative = function relative(origin) {
    return new RelativeScheduler(origin + this.origin, this.scheduler);
  };

  RelativeScheduler.prototype.cancel = function cancel(task) {
    return this.scheduler.cancel(task);
  };

  RelativeScheduler.prototype.cancelAll = function cancelAll(f) {
    return this.scheduler.cancelAll(f);
  };

  return RelativeScheduler;
}();

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var defer = function defer(task) {
  return Promise.resolve(task).then(runTask);
};

function runTask(task) {
  try {
    return task.run();
  } catch (e) {
    return task.error(e);
  }
}

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var Scheduler = /*#__PURE__*/function () {
  function Scheduler(timer, timeline) {
    var _this = this;

    classCallCheck(this, Scheduler);

    this.timer = timer;
    this.timeline = timeline;

    this._timer = null;
    this._nextArrival = Infinity;

    this._runReadyTasksBound = function () {
      return _this._runReadyTasks(_this.currentTime());
    };
  }

  Scheduler.prototype.currentTime = function currentTime() {
    return this.timer.now();
  };

  Scheduler.prototype.scheduleTask = function scheduleTask(localOffset, delay, period, task) {
    var time = this.currentTime() + Math.max(0, delay);
    var st = new ScheduledTask(time, localOffset, period, task, this);

    this.timeline.add(st);
    this._scheduleNextRun();
    return st;
  };

  Scheduler.prototype.relative = function relative(offset) {
    return new RelativeScheduler(offset, this);
  };

  Scheduler.prototype.cancel = function cancel(task) {
    task.active = false;
    if (this.timeline.remove(task)) {
      this._reschedule();
    }
  };

  Scheduler.prototype.cancelAll = function cancelAll(f) {
    this.timeline.removeAll(f);
    this._reschedule();
  };

  Scheduler.prototype._reschedule = function _reschedule() {
    if (this.timeline.isEmpty()) {
      this._unschedule();
    } else {
      this._scheduleNextRun(this.currentTime());
    }
  };

  Scheduler.prototype._unschedule = function _unschedule() {
    this.timer.clearTimer(this._timer);
    this._timer = null;
  };

  Scheduler.prototype._scheduleNextRun = function _scheduleNextRun() {
    // eslint-disable-line complexity
    if (this.timeline.isEmpty()) {
      return;
    }

    var nextArrival = this.timeline.nextArrival();

    if (this._timer === null) {
      this._scheduleNextArrival(nextArrival);
    } else if (nextArrival < this._nextArrival) {
      this._unschedule();
      this._scheduleNextArrival(nextArrival);
    }
  };

  Scheduler.prototype._scheduleNextArrival = function _scheduleNextArrival(nextArrival) {
    this._nextArrival = nextArrival;
    var delay = Math.max(0, nextArrival - this.currentTime());
    this._timer = this.timer.setTimer(this._runReadyTasksBound, delay);
  };

  Scheduler.prototype._runReadyTasks = function _runReadyTasks() {
    this._timer = null;
    this.timeline.runTasks(this.currentTime(), runTask);
    this._scheduleNextRun();
  };

  return Scheduler;
}();

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var Timeline = /*#__PURE__*/function () {
  function Timeline() {
    classCallCheck(this, Timeline);

    this.tasks = [];
  }

  Timeline.prototype.nextArrival = function nextArrival() {
    return this.isEmpty() ? Infinity : this.tasks[0].time;
  };

  Timeline.prototype.isEmpty = function isEmpty() {
    return this.tasks.length === 0;
  };

  Timeline.prototype.add = function add(st) {
    insertByTime(st, this.tasks);
  };

  Timeline.prototype.remove = function remove$$1(st) {
    var i = binarySearch(getTime(st), this.tasks);

    if (i >= 0 && i < this.tasks.length) {
      var at = findIndex(st, this.tasks[i].events);
      if (at >= 0) {
        this.tasks[i].events.splice(at, 1);
        return true;
      }
    }

    return false;
  };

  Timeline.prototype.removeAll = function removeAll$$1(f) {
    for (var i = 0; i < this.tasks.length; ++i) {
      removeAllFrom(f, this.tasks[i]);
    }
  };

  Timeline.prototype.runTasks = function runTasks(t, runTask) {
    var tasks = this.tasks;
    var l = tasks.length;
    var i = 0;

    while (i < l && tasks[i].time <= t) {
      ++i;
    }

    this.tasks = tasks.slice(i);

    // Run all ready tasks
    for (var j = 0; j < i; ++j) {
      this.tasks = runReadyTasks(runTask, tasks[j].events, this.tasks);
    }
  };

  return Timeline;
}();

function runReadyTasks(runTask, events, tasks) {
  // eslint-disable-line complexity
  for (var i = 0; i < events.length; ++i) {
    var task = events[i];

    if (task.active) {
      runTask(task);

      // Reschedule periodic repeating tasks
      // Check active again, since a task may have canceled itself
      if (task.period >= 0 && task.active) {
        task.time = task.time + task.period;
        insertByTime(task, tasks);
      }
    }
  }

  return tasks;
}

function insertByTime(task, timeslots) {
  var l = timeslots.length;
  var time = getTime(task);

  if (l === 0) {
    timeslots.push(newTimeslot(time, [task]));
    return;
  }

  var i = binarySearch(time, timeslots);

  if (i >= l) {
    timeslots.push(newTimeslot(time, [task]));
  } else {
    insertAtTimeslot(task, timeslots, time, i);
  }
}

function insertAtTimeslot(task, timeslots, time, i) {
  var timeslot = timeslots[i];
  if (time === timeslot.time) {
    addEvent(task, timeslot.events, time);
  } else {
    timeslots.splice(i, 0, newTimeslot(time, [task]));
  }
}

function addEvent(task, events) {
  if (events.length === 0 || task.time >= events[events.length - 1].time) {
    events.push(task);
  } else {
    spliceEvent(task, events);
  }
}

function spliceEvent(task, events) {
  for (var j = 0; j < events.length; j++) {
    if (task.time < events[j].time) {
      events.splice(j, 0, task);
      break;
    }
  }
}

function getTime(scheduledTask) {
  return Math.floor(scheduledTask.time);
}

function removeAllFrom(f, timeslot) {
  timeslot.events = removeAll(f, timeslot.events);
}

function binarySearch(t, sortedArray) {
  // eslint-disable-line complexity
  var lo = 0;
  var hi = sortedArray.length;
  var mid = void 0,
      y = void 0;

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2);
    y = sortedArray[mid];

    if (t === y.time) {
      return mid;
    } else if (t < y.time) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return hi;
}

var newTimeslot = function newTimeslot(t, events) {
  return { time: t, events: events };
};

/** @license MIT License (c) copyright 2010-2017 original author or authors */

/* global setTimeout, clearTimeout */

var ClockTimer = /*#__PURE__*/function () {
  function ClockTimer(clock) {
    classCallCheck(this, ClockTimer);

    this._clock = clock;
  }

  ClockTimer.prototype.now = function now() {
    return this._clock.now();
  };

  ClockTimer.prototype.setTimer = function setTimer(f, dt) {
    return dt <= 0 ? runAsap(f) : setTimeout(f, dt);
  };

  ClockTimer.prototype.clearTimer = function clearTimer(t) {
    return t instanceof Asap ? t.cancel() : clearTimeout(t);
  };

  return ClockTimer;
}();

var Asap = /*#__PURE__*/function () {
  function Asap(f) {
    classCallCheck(this, Asap);

    this.f = f;
    this.active = true;
  }

  Asap.prototype.run = function run() {
    return this.active && this.f();
  };

  Asap.prototype.error = function error(e) {
    throw e;
  };

  Asap.prototype.cancel = function cancel() {
    this.active = false;
  };

  return Asap;
}();

function runAsap(f) {
  var task = new Asap(f);
  defer(task);
  return task;
}

/** @license MIT License (c) copyright 2010-2017 original author or authors */

/* global performance, process */

var RelativeClock = /*#__PURE__*/function () {
  function RelativeClock(clock, origin) {
    classCallCheck(this, RelativeClock);

    this.origin = origin;
    this.clock = clock;
  }

  RelativeClock.prototype.now = function now() {
    return this.clock.now() - this.origin;
  };

  return RelativeClock;
}();

var HRTimeClock = /*#__PURE__*/function () {
  function HRTimeClock(hrtime, origin) {
    classCallCheck(this, HRTimeClock);

    this.origin = origin;
    this.hrtime = hrtime;
  }

  HRTimeClock.prototype.now = function now() {
    var hrt = this.hrtime(this.origin);
    return (hrt[0] * 1e9 + hrt[1]) / 1e6;
  };

  return HRTimeClock;
}();

var clockRelativeTo = function clockRelativeTo(clock) {
  return new RelativeClock(clock, clock.now());
};

var newPerformanceClock = function newPerformanceClock() {
  return clockRelativeTo(performance);
};

var newDateClock = function newDateClock() {
  return clockRelativeTo(Date);
};

var newHRTimeClock = function newHRTimeClock() {
  return new HRTimeClock(process.hrtime, process.hrtime());
};

var newPlatformClock = function newPlatformClock() {
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    return newPerformanceClock();
  } else if (typeof process !== 'undefined' && typeof process.hrtime === 'function') {
    return newHRTimeClock();
  }

  return newDateClock();
};

// Read the current time from the provided Scheduler
var currentTime = function currentTime(scheduler) {
  return scheduler.currentTime();
};

// Schedule a task to run as soon as possible, but
// not in the current call stack
var asap = /*#__PURE__*/curry2(function (task, scheduler) {
  return scheduler.scheduleTask(0, 0, -1, task);
});

// Schedule a task to run after a millisecond delay
var delay = /*#__PURE__*/curry3(function (delay, task, scheduler) {
  return scheduler.scheduleTask(0, delay, -1, task);
});

// Schedule a task to run periodically, with the
// first run starting asap
var periodic = /*#__PURE__*/curry3(function (period, task, scheduler) {
  return scheduler.scheduleTask(0, 0, period, task);
});

// Cancel a scheduledTask
var cancelTask = function cancelTask(scheduledTask) {
  return scheduledTask.dispose();
};

// Cancel all ScheduledTasks for which a predicate
// is true
var cancelAllTasks = /*#__PURE__*/curry2(function (predicate, scheduler) {
  return scheduler.cancelAll(predicate);
});

var schedulerRelativeTo = /*#__PURE__*/curry2(function (offset, scheduler) {
  return new RelativeScheduler(offset, scheduler);
});

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var newScheduler = /*#__PURE__*/curry2(function (timer, timeline) {
  return new Scheduler(timer, timeline);
});

var newDefaultScheduler = function newDefaultScheduler() {
  return new Scheduler(newDefaultTimer(), new Timeline());
};

var newDefaultTimer = function newDefaultTimer() {
  return new ClockTimer(newPlatformClock());
};
var newClockTimer = function newClockTimer(clock) {
  return new ClockTimer(clock);
};

var newTimeline = function newTimeline() {
  return new Timeline();
};
//# sourceMappingURL=index.es.js.map

var scheduler = /*#__PURE__*/Object.freeze({
    newScheduler: newScheduler,
    newDefaultScheduler: newDefaultScheduler,
    newDefaultTimer: newDefaultTimer,
    newClockTimer: newClockTimer,
    newTimeline: newTimeline,
    RelativeClock: RelativeClock,
    HRTimeClock: HRTimeClock,
    clockRelativeTo: clockRelativeTo,
    newPerformanceClock: newPerformanceClock,
    newDateClock: newDateClock,
    newHRTimeClock: newHRTimeClock,
    newPlatformClock: newPlatformClock,
    currentTime: currentTime,
    asap: asap,
    delay: delay,
    periodic: periodic,
    cancelTask: cancelTask,
    cancelAllTasks: cancelAllTasks,
    schedulerRelativeTo: schedulerRelativeTo
});

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var dispose = function dispose(disposable) {
  return disposable.dispose();
};





var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var disposeNone = function disposeNone() {
  return NONE;
};
var NONE = /*#__PURE__*/new (function () {
  function DisposeNone() {
    classCallCheck$1(this, DisposeNone);
  }

  DisposeNone.prototype.dispose = function dispose() {};

  return DisposeNone;
}())();

/** @license MIT License (c) copyright 2010-2017 original author or authors */

// Wrap an existing disposable (which may not already have been once()d)
// so that it will only dispose its underlying resource at most once.
var disposeOnce = function disposeOnce(disposable) {
  return new DisposeOnce(disposable);
};

var DisposeOnce = /*#__PURE__*/function () {
  function DisposeOnce(disposable) {
    classCallCheck$1(this, DisposeOnce);

    this.disposed = false;
    this.disposable = disposable;
  }

  DisposeOnce.prototype.dispose = function dispose() {
    if (!this.disposed) {
      this.disposed = true;
      this.disposable.dispose();
      this.disposable = undefined;
    }
  };

  return DisposeOnce;
}();

/** @license MIT License (c) copyright 2010-2017 original author or authors */
// Create a Disposable that will use the provided
// dispose function to dispose the resource
var disposeWith = /*#__PURE__*/curry2(function (dispose, resource) {
  return disposeOnce(new DisposeWith(dispose, resource));
});

// Disposable represents a resource that must be
// disposed/released. It aggregates a function to dispose
// the resource and a handle to a key/id/handle/reference
// that identifies the resource

var DisposeWith = /*#__PURE__*/function () {
  function DisposeWith(dispose, resource) {
    classCallCheck$1(this, DisposeWith);

    this._dispose = dispose;
    this._resource = resource;
  }

  DisposeWith.prototype.dispose = function dispose() {
    this._dispose(this._resource);
  };

  return DisposeWith;
}();

/** @license MIT License (c) copyright 2010-2017 original author or authors */
// Aggregate a list of disposables into a DisposeAll
var disposeAll = function disposeAll(ds) {
  return new DisposeAll(ds);
};

// Convenience to aggregate 2 disposables
var disposeBoth = /*#__PURE__*/curry2(function (d1, d2) {
  return disposeAll([d1, d2]);
});

var DisposeAll = /*#__PURE__*/function () {
  function DisposeAll(disposables) {
    classCallCheck$1(this, DisposeAll);

    this.disposables = disposables;
  }

  DisposeAll.prototype.dispose = function dispose() {
    throwIfErrors(disposeCollectErrors(this.disposables));
  };

  return DisposeAll;
}();

// Dispose all, safely collecting errors into an array


var disposeCollectErrors = function disposeCollectErrors(disposables) {
  return reduce(appendIfError, [], disposables);
};

// Call dispose and if throws, append thrown error to errors
var appendIfError = function appendIfError(errors, d) {
  try {
    d.dispose();
  } catch (e) {
    errors.push(e);
  }
  return errors;
};

// Throw DisposeAllError if errors is non-empty
var throwIfErrors = function throwIfErrors(errors) {
  if (errors.length > 0) {
    throw new DisposeAllError(errors.length + ' errors', errors);
  }
};

var DisposeAllError = /*#__PURE__*/function (Error) {
  function DisposeAllError(message, errors) {
    Error.call(this, message);
    this.message = message;
    this.name = DisposeAllError.name;
    this.errors = errors;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DisposeAllError);
    }

    this.stack = '' + this.stack + formatErrorStacks(this.errors);
  }

  DisposeAllError.prototype = /*#__PURE__*/Object.create(Error.prototype);

  return DisposeAllError;
}(Error);

var formatErrorStacks = function formatErrorStacks(errors) {
  return reduce(formatErrorStack, '', errors);
};

var formatErrorStack = function formatErrorStack(s, e, i) {
  return s + ('\n[' + (i + 1) + '] ' + e.stack);
};

/** @license MIT License (c) copyright 2010-2017 original author or authors */
// Try to dispose the disposable.  If it throws, send
// the error to sink.error with the provided Time value
var tryDispose = /*#__PURE__*/curry3(function (t, disposable, sink) {
  try {
    disposable.dispose();
  } catch (e) {
    sink.error(t, e);
  }
});
//# sourceMappingURL=index.es.js.map

var disposable = /*#__PURE__*/Object.freeze({
    dispose: dispose,
    disposeNone: disposeNone,
    disposeWith: disposeWith,
    disposeOnce: disposeOnce,
    disposeAll: disposeAll,
    disposeBoth: disposeBoth,
    DisposeAllError: DisposeAllError,
    tryDispose: tryDispose
});

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function fatalError(e) {
  setTimeout(rethrow, 0, e);
}

function rethrow(e) {
  throw e;
}





var classCallCheck$2 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var propagateTask$1 = function propagateTask(run, value, sink) {
  return new PropagateTask(run, value, sink);
};

var propagateEventTask$1 = function propagateEventTask(value, sink) {
  return propagateTask$1(runEvent, value, sink);
};

var propagateEndTask = function propagateEndTask(sink) {
  return propagateTask$1(runEnd, undefined, sink);
};

var propagateErrorTask$1 = function propagateErrorTask(value, sink) {
  return propagateTask$1(runError, value, sink);
};

var PropagateTask = /*#__PURE__*/function () {
  function PropagateTask(run, value, sink) {
    classCallCheck$2(this, PropagateTask);

    this._run = run;
    this.value = value;
    this.sink = sink;
    this.active = true;
  }

  PropagateTask.prototype.dispose = function dispose$$1() {
    this.active = false;
  };

  PropagateTask.prototype.run = function run(t) {
    if (!this.active) {
      return;
    }
    var run = this._run;
    run(t, this.value, this.sink);
  };

  PropagateTask.prototype.error = function error(t, e) {
    // TODO: Remove this check and just do this.sink.error(t, e)?
    if (!this.active) {
      return fatalError(e);
    }
    this.sink.error(t, e);
  };

  return PropagateTask;
}();

var runEvent = function runEvent(t, x, sink) {
  return sink.event(t, x);
};

var runEnd = function runEnd(t, _, sink) {
  return sink.end(t);
};

var runError = function runError(t, e, sink) {
  return sink.error(t, e);
};

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var empty = function empty() {
  return EMPTY;
};

var isCanonicalEmpty = function isCanonicalEmpty(stream) {
  return stream === EMPTY;
};

var containsCanonicalEmpty = function containsCanonicalEmpty(streams) {
  return streams.some(isCanonicalEmpty);
};

var Empty = /*#__PURE__*/function () {
  function Empty() {
    classCallCheck$2(this, Empty);
  }

  Empty.prototype.run = function run(sink, scheduler$$1) {
    return asap(propagateEndTask(sink), scheduler$$1);
  };

  return Empty;
}();

var EMPTY = /*#__PURE__*/new Empty();

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var never = function never() {
  return NEVER;
};

var Never = /*#__PURE__*/function () {
  function Never() {
    classCallCheck$2(this, Never);
  }

  Never.prototype.run = function run() {
    return disposeNone();
  };

  return Never;
}();

var NEVER = /*#__PURE__*/new Never();

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var at = function at(t, x) {
  return new At(t, x);
};

var At = /*#__PURE__*/function () {
  function At(t, x) {
    classCallCheck$2(this, At);

    this.time = t;
    this.value = x;
  }

  At.prototype.run = function run(sink, scheduler$$1) {
    return delay(this.time, propagateTask$1(runAt, this.value, sink), scheduler$$1);
  };

  return At;
}();

function runAt(t, x, sink) {
  sink.event(t, x);
  sink.end(t);
}

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var now$1 = function now(x) {
  return at(0, x);
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Create a stream of events that occur at a regular period
 * @param {Number} period periodicity of events
 * @returns {Stream} new stream of periodic events, the event value is undefined
 */
var periodic$1 = function periodic$$1(period) {
  return new Periodic(period);
};

var Periodic = /*#__PURE__*/function () {
  function Periodic(period) {
    classCallCheck$2(this, Periodic);

    this.period = period;
  }

  Periodic.prototype.run = function run(sink, scheduler$$1) {
    return periodic(this.period, propagateEventTask$1(undefined, sink), scheduler$$1);
  };

  return Periodic;
}();

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var newStream = function newStream(run) {
  return new Stream(run);
};

var Stream = function Stream(run) {
  classCallCheck$2(this, Stream);

  this.run = run;
};

/** @license MIT License (c) copyright 2010-2017 original author or authors */
/** @author Brian Cavalier */

var Pipe = /*#__PURE__*/function () {
  function Pipe(sink) {
    classCallCheck$2(this, Pipe);

    this.sink = sink;
  }

  Pipe.prototype.event = function event(t, x) {
    return this.sink.event(t, x);
  };

  Pipe.prototype.end = function end(t) {
    return this.sink.end(t);
  };

  Pipe.prototype.error = function error(t, e) {
    return this.sink.error(t, e);
  };

  return Pipe;
}();

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Filter = /*#__PURE__*/function () {
  function Filter(p, source) {
    classCallCheck$2(this, Filter);

    this.p = p;
    this.source = source;
  }

  Filter.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new FilterSink(this.p, sink), scheduler$$1);
  };

  /**
   * Create a filtered source, fusing adjacent filter.filter if possible
   * @param {function(x:*):boolean} p filtering predicate
   * @param {{run:function}} source source to filter
   * @returns {Filter} filtered source
   */


  Filter.create = function create(p, source) {
    if (isCanonicalEmpty(source)) {
      return source;
    }

    if (source instanceof Filter) {
      return new Filter(and(source.p, p), source.source);
    }

    return new Filter(p, source);
  };

  return Filter;
}();

var FilterSink = /*#__PURE__*/function (_Pipe) {
  inherits(FilterSink, _Pipe);

  function FilterSink(p, sink) {
    classCallCheck$2(this, FilterSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.p = p;
    return _this;
  }

  FilterSink.prototype.event = function event(t, x) {
    var p = this.p;
    p(x) && this.sink.event(t, x);
  };

  return FilterSink;
}(Pipe);

var and = function and(p, q) {
  return function (x) {
    return p(x) && q(x);
  };
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var FilterMap = /*#__PURE__*/function () {
  function FilterMap(p, f, source) {
    classCallCheck$2(this, FilterMap);

    this.p = p;
    this.f = f;
    this.source = source;
  }

  FilterMap.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new FilterMapSink(this.p, this.f, sink), scheduler$$1);
  };

  return FilterMap;
}();

var FilterMapSink = /*#__PURE__*/function (_Pipe) {
  inherits(FilterMapSink, _Pipe);

  function FilterMapSink(p, f, sink) {
    classCallCheck$2(this, FilterMapSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.p = p;
    _this.f = f;
    return _this;
  }

  FilterMapSink.prototype.event = function event(t, x) {
    var f = this.f;
    var p = this.p;
    p(x) && this.sink.event(t, f(x));
  };

  return FilterMapSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Map$1 = /*#__PURE__*/function () {
  function Map(f, source) {
    classCallCheck$2(this, Map);

    this.f = f;
    this.source = source;
  }

  Map.prototype.run = function run(sink, scheduler$$1) {
    // eslint-disable-line no-extend-native
    return this.source.run(new MapSink(this.f, sink), scheduler$$1);
  };

  /**
   * Create a mapped source, fusing adjacent map.map, filter.map,
   * and filter.map.map if possible
   * @param {function(*):*} f mapping function
   * @param {{run:function}} source source to map
   * @returns {Map|FilterMap} mapped source, possibly fused
   */


  Map.create = function create(f, source) {
    if (isCanonicalEmpty(source)) {
      return empty();
    }

    if (source instanceof Map) {
      return new Map(compose(f, source.f), source.source);
    }

    if (source instanceof Filter) {
      return new FilterMap(source.p, f, source.source);
    }

    return new Map(f, source);
  };

  return Map;
}();

var MapSink = /*#__PURE__*/function (_Pipe) {
  inherits(MapSink, _Pipe);

  function MapSink(f, sink) {
    classCallCheck$2(this, MapSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    return _this;
  }

  MapSink.prototype.event = function event(t, x) {
    var f = this.f;
    this.sink.event(t, f(x));
  };

  return MapSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var SettableDisposable = /*#__PURE__*/function () {
  function SettableDisposable() {
    classCallCheck$2(this, SettableDisposable);

    this.disposable = undefined;
    this.disposed = false;
  }

  SettableDisposable.prototype.setDisposable = function setDisposable(disposable$$1) {
    if (this.disposable !== void 0) {
      throw new Error('setDisposable called more than once');
    }

    this.disposable = disposable$$1;

    if (this.disposed) {
      disposable$$1.dispose();
    }
  };

  SettableDisposable.prototype.dispose = function dispose$$1() {
    if (this.disposed) {
      return;
    }

    this.disposed = true;

    if (this.disposable !== void 0) {
      this.disposable.dispose();
    }
  };

  return SettableDisposable;
}();

/** @license MIT License (c) copyright 2010 original author or authors */

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream containing only up to the first n items from stream
 */
var take$1 = function take(n, stream) {
  return slice$1(0, n, stream);
};

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream with the first n items removed
 */
var skip$1 = function skip(n, stream) {
  return slice$1(n, Infinity, stream);
};

/**
 * Slice a stream by index. Negative start/end indexes are not supported
 * @param {number} start
 * @param {number} end
 * @param {Stream} stream
 * @returns {Stream} stream containing items where start <= index < end
 */
var slice$1 = function slice(start, end, stream) {
  return end <= start || isCanonicalEmpty(stream) ? empty() : sliceSource(start, end, stream);
};

var sliceSource = function sliceSource(start, end, stream) {
  return stream instanceof Map$1 ? commuteMapSlice(start, end, stream) : stream instanceof Slice ? fuseSlice(start, end, stream) : new Slice(start, end, stream);
};

var commuteMapSlice = function commuteMapSlice(start, end, mapStream) {
  return Map$1.create(mapStream.f, slice$1(start, end, mapStream.source));
};

function fuseSlice(start, end, sliceStream) {
  var fusedStart = start + sliceStream.min;
  var fusedEnd = Math.min(end + sliceStream.min, sliceStream.max);
  return slice$1(fusedStart, fusedEnd, sliceStream.source);
}

var Slice = /*#__PURE__*/function () {
  function Slice(min, max, source) {
    classCallCheck$2(this, Slice);

    this.source = source;
    this.min = min;
    this.max = max;
  }

  Slice.prototype.run = function run(sink, scheduler$$1) {
    var disposable$$1 = new SettableDisposable();
    var sliceSink = new SliceSink(this.min, this.max - this.min, sink, disposable$$1);

    disposable$$1.setDisposable(this.source.run(sliceSink, scheduler$$1));

    return disposable$$1;
  };

  return Slice;
}();

var SliceSink = /*#__PURE__*/function (_Pipe) {
  inherits(SliceSink, _Pipe);

  function SliceSink(skip, take, sink, disposable$$1) {
    classCallCheck$2(this, SliceSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.skip = skip;
    _this.take = take;
    _this.disposable = disposable$$1;
    return _this;
  }

  SliceSink.prototype.event = function event(t, x) {
    /* eslint complexity: [1, 4] */
    if (this.skip > 0) {
      this.skip -= 1;
      return;
    }

    if (this.take === 0) {
      return;
    }

    this.take -= 1;
    this.sink.event(t, x);
    if (this.take === 0) {
      this.disposable.dispose();
      this.sink.end(t);
    }
  };

  return SliceSink;
}(Pipe);

var takeWhile$1 = function takeWhile(p, stream) {
  return isCanonicalEmpty(stream) ? empty() : new TakeWhile(p, stream);
};

var TakeWhile = /*#__PURE__*/function () {
  function TakeWhile(p, source) {
    classCallCheck$2(this, TakeWhile);

    this.p = p;
    this.source = source;
  }

  TakeWhile.prototype.run = function run(sink, scheduler$$1) {
    var disposable$$1 = new SettableDisposable();
    var takeWhileSink = new TakeWhileSink(this.p, sink, disposable$$1);

    disposable$$1.setDisposable(this.source.run(takeWhileSink, scheduler$$1));

    return disposable$$1;
  };

  return TakeWhile;
}();

var TakeWhileSink = /*#__PURE__*/function (_Pipe2) {
  inherits(TakeWhileSink, _Pipe2);

  function TakeWhileSink(p, sink, disposable$$1) {
    classCallCheck$2(this, TakeWhileSink);

    var _this2 = possibleConstructorReturn(this, _Pipe2.call(this, sink));

    _this2.p = p;
    _this2.active = true;
    _this2.disposable = disposable$$1;
    return _this2;
  }

  TakeWhileSink.prototype.event = function event(t, x) {
    if (!this.active) {
      return;
    }

    var p = this.p;
    this.active = p(x);

    if (this.active) {
      this.sink.event(t, x);
    } else {
      this.disposable.dispose();
      this.sink.end(t);
    }
  };

  return TakeWhileSink;
}(Pipe);

var skipWhile$1 = function skipWhile(p, stream) {
  return isCanonicalEmpty(stream) ? empty() : new SkipWhile(p, stream);
};

var SkipWhile = /*#__PURE__*/function () {
  function SkipWhile(p, source) {
    classCallCheck$2(this, SkipWhile);

    this.p = p;
    this.source = source;
  }

  SkipWhile.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new SkipWhileSink(this.p, sink), scheduler$$1);
  };

  return SkipWhile;
}();

var SkipWhileSink = /*#__PURE__*/function (_Pipe3) {
  inherits(SkipWhileSink, _Pipe3);

  function SkipWhileSink(p, sink) {
    classCallCheck$2(this, SkipWhileSink);

    var _this3 = possibleConstructorReturn(this, _Pipe3.call(this, sink));

    _this3.p = p;
    _this3.skipping = true;
    return _this3;
  }

  SkipWhileSink.prototype.event = function event(t, x) {
    if (this.skipping) {
      var p = this.p;
      this.skipping = p(x);
      if (this.skipping) {
        return;
      }
    }

    this.sink.event(t, x);
  };

  return SkipWhileSink;
}(Pipe);

var skipAfter$1 = function skipAfter(p, stream) {
  return isCanonicalEmpty(stream) ? empty() : new SkipAfter(p, stream);
};

var SkipAfter = /*#__PURE__*/function () {
  function SkipAfter(p, source) {
    classCallCheck$2(this, SkipAfter);

    this.p = p;
    this.source = source;
  }

  SkipAfter.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new SkipAfterSink(this.p, sink), scheduler$$1);
  };

  return SkipAfter;
}();

var SkipAfterSink = /*#__PURE__*/function (_Pipe4) {
  inherits(SkipAfterSink, _Pipe4);

  function SkipAfterSink(p, sink) {
    classCallCheck$2(this, SkipAfterSink);

    var _this4 = possibleConstructorReturn(this, _Pipe4.call(this, sink));

    _this4.p = p;
    _this4.skipping = false;
    return _this4;
  }

  SkipAfterSink.prototype.event = function event(t, x) {
    if (this.skipping) {
      return;
    }

    var p = this.p;
    this.skipping = p(x);
    this.sink.event(t, x);

    if (this.skipping) {
      this.sink.end(t);
    }
  };

  return SkipAfterSink;
}(Pipe);

/** @license MIT License (c) copyright 2017 original author or authors */

var withItems$1 = function withItems(items, stream) {
  return zipItems$1(keepLeft, items, stream);
};

var zipItems$1 = function zipItems(f, items, stream) {
  return isCanonicalEmpty(stream) || items.length === 0 ? empty() : new ZipItems(f, items, take$1(items.length, stream));
};

var keepLeft = function keepLeft(a, _) {
  return a;
};

var ZipItems = /*#__PURE__*/function () {
  function ZipItems(f, items, source) {
    classCallCheck$2(this, ZipItems);

    this.f = f;
    this.items = items;
    this.source = source;
  }

  ZipItems.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new ZipItemsSink(this.f, this.items, sink), scheduler$$1);
  };

  return ZipItems;
}();

var ZipItemsSink = /*#__PURE__*/function (_Pipe) {
  inherits(ZipItemsSink, _Pipe);

  function ZipItemsSink(f, items, sink) {
    classCallCheck$2(this, ZipItemsSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    _this.items = items;
    _this.index = 0;
    return _this;
  }

  ZipItemsSink.prototype.event = function event(t, b) {
    var f = this.f;
    this.sink.event(t, f(this.items[this.index], b));
    this.index += 1;
  };

  return ZipItemsSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var runEffects$1 = /*#__PURE__*/curry2(function (stream, scheduler$$1) {
  return new Promise(function (resolve, reject) {
    return runStream(stream, scheduler$$1, resolve, reject);
  });
});

function runStream(stream, scheduler$$1, resolve, reject) {
  var disposable$$1 = new SettableDisposable();
  var observer = new RunEffectsSink(resolve, reject, disposable$$1);

  disposable$$1.setDisposable(stream.run(observer, scheduler$$1));
}

var RunEffectsSink = /*#__PURE__*/function () {
  function RunEffectsSink(end, error, disposable$$1) {
    classCallCheck$2(this, RunEffectsSink);

    this._end = end;
    this._error = error;
    this._disposable = disposable$$1;
    this.active = true;
  }

  RunEffectsSink.prototype.event = function event(t, x) {};

  RunEffectsSink.prototype.end = function end(t) {
    if (!this.active) {
      return;
    }
    this._dispose(this._error, this._end, undefined);
  };

  RunEffectsSink.prototype.error = function error(t, e) {
    this._dispose(this._error, this._error, e);
  };

  RunEffectsSink.prototype._dispose = function _dispose(error, end, x) {
    this.active = false;
    tryDispose$1(error, end, x, this._disposable);
  };

  return RunEffectsSink;
}();

function tryDispose$1(error, end, x, disposable$$1) {
  try {
    disposable$$1.dispose();
  } catch (e) {
    error(e);
    return;
  }

  end(x);
}

/** @license MIT License (c) copyright 2010-2017 original author or authors */

// Run a Stream, sending all its events to the
// provided Sink.
var run$1 = function run(sink, scheduler$$1, stream) {
    return stream.run(sink, scheduler$$1);
};

var RelativeSink = /*#__PURE__*/function () {
  function RelativeSink(offset, sink) {
    classCallCheck$2(this, RelativeSink);

    this.sink = sink;
    this.offset = offset;
  }

  RelativeSink.prototype.event = function event(t, x) {
    this.sink.event(t + this.offset, x);
  };

  RelativeSink.prototype.error = function error(t, e) {
    this.sink.error(t + this.offset, e);
  };

  RelativeSink.prototype.end = function end(t) {
    this.sink.end(t + this.offset);
  };

  return RelativeSink;
}();

// Create a stream with its own local clock
// This transforms time from the provided scheduler's clock to a stream-local
// clock (which starts at 0), and then *back* to the scheduler's clock before
// propagating events to sink.  In other words, upstream sources will see local times,
// and downstream sinks will see non-local (original) times.
var withLocalTime$1 = function withLocalTime(origin, stream) {
  return new WithLocalTime(origin, stream);
};

var WithLocalTime = /*#__PURE__*/function () {
  function WithLocalTime(origin, source) {
    classCallCheck$2(this, WithLocalTime);

    this.origin = origin;
    this.source = source;
  }

  WithLocalTime.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(relativeSink(this.origin, sink), schedulerRelativeTo(this.origin, scheduler$$1));
  };

  return WithLocalTime;
}();

// Accumulate offsets instead of nesting RelativeSinks, which can happen
// with higher-order stream and combinators like continueWith when they're
// applied recursively.


var relativeSink = function relativeSink(origin, sink) {
  return sink instanceof RelativeSink ? new RelativeSink(origin + sink.offset, sink.sink) : new RelativeSink(origin, sink);
};

/** @license MIT License (c) copyright 2010 original author or authors */

/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @param {Stream} stream event stream
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
var loop$1 = function loop(stepper, seed, stream) {
  return isCanonicalEmpty(stream) ? empty() : new Loop(stepper, seed, stream);
};

var Loop = /*#__PURE__*/function () {
  function Loop(stepper, seed, source) {
    classCallCheck$2(this, Loop);

    this.step = stepper;
    this.seed = seed;
    this.source = source;
  }

  Loop.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new LoopSink(this.step, this.seed, sink), scheduler$$1);
  };

  return Loop;
}();

var LoopSink = /*#__PURE__*/function (_Pipe) {
  inherits(LoopSink, _Pipe);

  function LoopSink(stepper, seed, sink) {
    classCallCheck$2(this, LoopSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.step = stepper;
    _this.seed = seed;
    return _this;
  }

  LoopSink.prototype.event = function event(t, x) {
    var result = this.step(this.seed, x);
    this.seed = result.seed;
    this.sink.event(t, result.value);
  };

  return LoopSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream stream to scan
 * @returns {Stream} new stream containing successive reduce results
 */
var scan$1 = function scan(f, initial, stream) {
  return new Scan(f, initial, stream);
};

var Scan = /*#__PURE__*/function () {
  function Scan(f, z, source) {
    classCallCheck$2(this, Scan);

    this.source = source;
    this.f = f;
    this.value = z;
  }

  Scan.prototype.run = function run(sink, scheduler$$1) {
    var d1 = asap(propagateEventTask$1(this.value, sink), scheduler$$1);
    var d2 = this.source.run(new ScanSink(this.f, this.value, sink), scheduler$$1);
    return disposeBoth(d1, d2);
  };

  return Scan;
}();

var ScanSink = /*#__PURE__*/function (_Pipe) {
  inherits(ScanSink, _Pipe);

  function ScanSink(f, z, sink) {
    classCallCheck$2(this, ScanSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    _this.value = z;
    return _this;
  }

  ScanSink.prototype.event = function event(t, x) {
    var f = this.f;
    this.value = f(this.value, x);
    this.sink.event(t, this.value);
  };

  return ScanSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var continueWith$1 = function continueWith(f, stream) {
  return new ContinueWith(f, stream);
};

var ContinueWith = /*#__PURE__*/function () {
  function ContinueWith(f, source) {
    classCallCheck$2(this, ContinueWith);

    this.f = f;
    this.source = source;
  }

  ContinueWith.prototype.run = function run(sink, scheduler$$1) {
    return new ContinueWithSink(this.f, this.source, sink, scheduler$$1);
  };

  return ContinueWith;
}();

var ContinueWithSink = /*#__PURE__*/function (_Pipe) {
  inherits(ContinueWithSink, _Pipe);

  function ContinueWithSink(f, source, sink, scheduler$$1) {
    classCallCheck$2(this, ContinueWithSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    _this.scheduler = scheduler$$1;
    _this.active = true;
    _this.disposable = disposeOnce(source.run(_this, scheduler$$1));
    return _this;
  }

  ContinueWithSink.prototype.event = function event(t, x) {
    if (!this.active) {
      return;
    }
    this.sink.event(t, x);
  };

  ContinueWithSink.prototype.end = function end(t) {
    if (!this.active) {
      return;
    }

    tryDispose(t, this.disposable, this.sink);

    this._startNext(t, this.sink);
  };

  ContinueWithSink.prototype._startNext = function _startNext(t, sink) {
    try {
      this.disposable = this._continue(this.f, t, sink);
    } catch (e) {
      sink.error(t, e);
    }
  };

  ContinueWithSink.prototype._continue = function _continue(f, t, sink) {
    return run$1(sink, this.scheduler, withLocalTime$1(t, f()));
  };

  ContinueWithSink.prototype.dispose = function dispose$$1() {
    this.active = false;
    return this.disposable.dispose();
  };

  return ContinueWithSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2017 original author or authors */

var startWith$1 = function startWith(x, stream) {
  return continueWith$1(function () {
    return stream;
  }, now$1(x));
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @param {Stream} stream stream to map
 * @returns {Stream} stream containing items transformed by f
 */
var map$2 = function map$$1(f, stream) {
  return Map$1.create(f, stream);
};

/**
* Replace each value in the stream with x
* @param {*} x
* @param {Stream} stream
* @returns {Stream} stream containing items replaced with x
*/
var constant$1 = function constant(x, stream) {
  return map$2(function () {
    return x;
  }, stream);
};

/**
* Perform a side effect for each item in the stream
* @param {function(x:*):*} f side effect to execute for each item. The
*  return value will be discarded.
* @param {Stream} stream stream to tap
* @returns {Stream} new stream containing the same items as this stream
*/
var tap$1 = function tap(f, stream) {
  return new Tap(f, stream);
};

var Tap = /*#__PURE__*/function () {
  function Tap(f, source) {
    classCallCheck$2(this, Tap);

    this.source = source;
    this.f = f;
  }

  Tap.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new TapSink(this.f, sink), scheduler$$1);
  };

  return Tap;
}();

var TapSink = /*#__PURE__*/function (_Pipe) {
  inherits(TapSink, _Pipe);

  function TapSink(f, sink) {
    classCallCheck$2(this, TapSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    return _this;
  }

  TapSink.prototype.event = function event(t, x) {
    var f = this.f;
    f(x);
    this.sink.event(t, x);
  };

  return TapSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var IndexSink = /*#__PURE__*/function (_Sink) {
  inherits(IndexSink, _Sink);

  function IndexSink(i, sink) {
    classCallCheck$2(this, IndexSink);

    var _this = possibleConstructorReturn(this, _Sink.call(this, sink));

    _this.index = i;
    _this.active = true;
    _this.value = undefined;
    return _this;
  }

  IndexSink.prototype.event = function event(t, x) {
    if (!this.active) {
      return;
    }
    this.value = x;
    this.sink.event(t, this);
  };

  IndexSink.prototype.end = function end(t) {
    if (!this.active) {
      return;
    }
    this.active = false;
    this.sink.event(t, this);
  };

  return IndexSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function invoke(f, args) {
  /* eslint complexity: [2,7] */
  switch (args.length) {
    case 0:
      return f();
    case 1:
      return f(args[0]);
    case 2:
      return f(args[0], args[1]);
    case 3:
      return f(args[0], args[1], args[2]);
    case 4:
      return f(args[0], args[1], args[2], args[3]);
    case 5:
      return f(args[0], args[1], args[2], args[3], args[4]);
    default:
      return f.apply(void 0, args);
  }
}

/** @license MIT License (c) copyright 2010 original author or authors */

/**
 * Combine latest events from two streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
var combine$1 = function combine(f, stream1, stream2) {
  return combineArray$1(f, [stream1, stream2]);
};

/**
* Combine latest events from all input streams
* @param {function(...events):*} f function to combine most recent events
* @param {[Stream]} streams most recent events
* @returns {Stream} stream containing the result of applying f to the most recent
*  event of each input stream, whenever a new event arrives on any stream.
*/
var combineArray$1 = function combineArray(f, streams) {
  return streams.length === 0 || containsCanonicalEmpty(streams) ? empty() : streams.length === 1 ? map$2(f, streams[0]) : new Combine(f, streams);
};

var Combine = /*#__PURE__*/function () {
  function Combine(f, sources) {
    classCallCheck$2(this, Combine);

    this.f = f;
    this.sources = sources;
  }

  Combine.prototype.run = function run(sink, scheduler$$1) {
    var l = this.sources.length;
    var disposables = new Array(l);
    var sinks = new Array(l);

    var mergeSink = new CombineSink(disposables, sinks, sink, this.f);

    for (var indexSink, i = 0; i < l; ++i) {
      indexSink = sinks[i] = new IndexSink(i, mergeSink);
      disposables[i] = this.sources[i].run(indexSink, scheduler$$1);
    }

    return disposeAll(disposables);
  };

  return Combine;
}();

var CombineSink = /*#__PURE__*/function (_Pipe) {
  inherits(CombineSink, _Pipe);

  function CombineSink(disposables, sinks, sink, f) {
    classCallCheck$2(this, CombineSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.disposables = disposables;
    _this.sinks = sinks;
    _this.f = f;

    var l = sinks.length;
    _this.awaiting = l;
    _this.values = new Array(l);
    _this.hasValue = new Array(l).fill(false);
    _this.activeCount = sinks.length;
    return _this;
  }

  CombineSink.prototype.event = function event(t, indexedValue) {
    if (!indexedValue.active) {
      this._dispose(t, indexedValue.index);
      return;
    }

    var i = indexedValue.index;
    var awaiting = this._updateReady(i);

    this.values[i] = indexedValue.value;
    if (awaiting === 0) {
      this.sink.event(t, invoke(this.f, this.values));
    }
  };

  CombineSink.prototype._updateReady = function _updateReady(index) {
    if (this.awaiting > 0) {
      if (!this.hasValue[index]) {
        this.hasValue[index] = true;
        this.awaiting -= 1;
      }
    }
    return this.awaiting;
  };

  CombineSink.prototype._dispose = function _dispose(t, index) {
    tryDispose(t, this.disposables[index], this.sink);
    if (--this.activeCount === 0) {
      this.sink.end(t);
    }
  };

  return CombineSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Assume fs is a stream containing functions, and apply the latest function
 * in fs to the latest value in xs.
 * fs:         --f---------g--------h------>
 * xs:         -a-------b-------c-------d-->
 * ap(fs, xs): --fa-----fb-gb---gc--hc--hd->
 * @param {Stream} fs stream of functions to apply to the latest x
 * @param {Stream} xs stream of values to which to apply all the latest f
 * @returns {Stream} stream containing all the applications of fs to xs
 */
function ap$1(fs, xs) {
  return combine$1(apply, fs, xs);
}

/** @license MIT License (c) copyright 2010 original author or authors */

/**
 * Doubly linked list
 * @constructor
 */
var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    classCallCheck$2(this, LinkedList);

    this.head = null;
    this.length = 0;
  }

  /**
   * Add a node to the end of the list
   * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to add
   */


  LinkedList.prototype.add = function add(x) {
    if (this.head !== null) {
      this.head.prev = x;
      x.next = this.head;
    }
    this.head = x;
    ++this.length;
  };

  /**
   * Remove the provided node from the list
   * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to remove
   */


  LinkedList.prototype.remove = function remove$$1(x) {
    // eslint-disable-line  complexity
    --this.length;
    if (x === this.head) {
      this.head = this.head.next;
    }
    if (x.next !== null) {
      x.next.prev = x.prev;
      x.next = null;
    }
    if (x.prev !== null) {
      x.prev.next = x.next;
      x.prev = null;
    }
  };

  /**
   * @returns {boolean} true iff there are no nodes in the list
   */


  LinkedList.prototype.isEmpty = function isEmpty() {
    return this.length === 0;
  };

  /**
   * Dispose all nodes
   * @returns {void}
   */


  LinkedList.prototype.dispose = function dispose$$1() {
    if (this.isEmpty()) {
      return;
    }

    var head = this.head;
    this.head = null;
    this.length = 0;

    while (head !== null) {
      head.dispose();
      head = head.next;
    }
  };

  return LinkedList;
}();

/** @license MIT License (c) copyright 2010 original author or authors */

var mergeConcurrently$1 = function mergeConcurrently(concurrency, stream) {
  return mergeMapConcurrently$1(id, concurrency, stream);
};

var mergeMapConcurrently$1 = function mergeMapConcurrently(f, concurrency, stream) {
  return isCanonicalEmpty(stream) ? empty() : new MergeConcurrently(f, concurrency, stream);
};

var MergeConcurrently = /*#__PURE__*/function () {
  function MergeConcurrently(f, concurrency, source) {
    classCallCheck$2(this, MergeConcurrently);

    this.f = f;
    this.concurrency = concurrency;
    this.source = source;
  }

  MergeConcurrently.prototype.run = function run(sink, scheduler$$1) {
    return new Outer(this.f, this.concurrency, this.source, sink, scheduler$$1);
  };

  return MergeConcurrently;
}();

var Outer = /*#__PURE__*/function () {
  function Outer(f, concurrency, source, sink, scheduler$$1) {
    classCallCheck$2(this, Outer);

    this.f = f;
    this.concurrency = concurrency;
    this.sink = sink;
    this.scheduler = scheduler$$1;
    this.pending = [];
    this.current = new LinkedList();
    this.disposable = disposeOnce(source.run(this, scheduler$$1));
    this.active = true;
  }

  Outer.prototype.event = function event(t, x) {
    this._addInner(t, x);
  };

  Outer.prototype._addInner = function _addInner(t, x) {
    if (this.current.length < this.concurrency) {
      this._startInner(t, x);
    } else {
      this.pending.push(x);
    }
  };

  Outer.prototype._startInner = function _startInner(t, x) {
    try {
      this._initInner(t, x);
    } catch (e) {
      this.error(t, e);
    }
  };

  Outer.prototype._initInner = function _initInner(t, x) {
    var innerSink = new Inner(t, this, this.sink);
    innerSink.disposable = mapAndRun(this.f, t, x, innerSink, this.scheduler);
    this.current.add(innerSink);
  };

  Outer.prototype.end = function end(t) {
    this.active = false;
    tryDispose(t, this.disposable, this.sink);
    this._checkEnd(t);
  };

  Outer.prototype.error = function error(t, e) {
    this.active = false;
    this.sink.error(t, e);
  };

  Outer.prototype.dispose = function dispose$$1() {
    this.active = false;
    this.pending.length = 0;
    this.disposable.dispose();
    this.current.dispose();
  };

  Outer.prototype._endInner = function _endInner(t, inner) {
    this.current.remove(inner);
    tryDispose(t, inner, this);

    if (this.pending.length === 0) {
      this._checkEnd(t);
    } else {
      this._startInner(t, this.pending.shift());
    }
  };

  Outer.prototype._checkEnd = function _checkEnd(t) {
    if (!this.active && this.current.isEmpty()) {
      this.sink.end(t);
    }
  };

  return Outer;
}();

var mapAndRun = function mapAndRun(f, t, x, sink, scheduler$$1) {
  return f(x).run(sink, schedulerRelativeTo(t, scheduler$$1));
};

var Inner = /*#__PURE__*/function () {
  function Inner(time, outer, sink) {
    classCallCheck$2(this, Inner);

    this.prev = this.next = null;
    this.time = time;
    this.outer = outer;
    this.sink = sink;
    this.disposable = void 0;
  }

  Inner.prototype.event = function event(t, x) {
    this.sink.event(t + this.time, x);
  };

  Inner.prototype.end = function end(t) {
    this.outer._endInner(t + this.time, this);
  };

  Inner.prototype.error = function error(t, e) {
    this.outer.error(t + this.time, e);
  };

  Inner.prototype.dispose = function dispose$$1() {
    return this.disposable.dispose();
  };

  return Inner;
}();

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
var chain$1 = function chain(f, stream) {
  return mergeMapConcurrently$1(f, Infinity, stream);
};

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @param {Stream<Stream<X>>} stream stream of streams
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
var join = function join(stream) {
  return mergeConcurrently$1(Infinity, stream);
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Map each value in stream to a new stream, and concatenate them all
 * stream:              -a---b---cX
 * f(a):                 1-1-1-1X
 * f(b):                        -2-2-2-2X
 * f(c):                                -3-3-3-3X
 * stream.concatMap(f): -1-1-1-1-2-2-2-2-3-3-3-3X
 * @param {function(x:*):Stream} f function to map each value to a stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
var concatMap$1 = function concatMap(f, stream) {
  return mergeMapConcurrently$1(f, 1, stream);
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * @returns {Stream} stream containing events from two streams in time order.
 * If two events are simultaneous they will be merged in arbitrary order.
 */
function merge$1(stream1, stream2) {
  return mergeArray([stream1, stream2]);
}

/**
 * @param {Array} streams array of stream to merge
 * @returns {Stream} stream containing events from all input observables
 * in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
var mergeArray = function mergeArray(streams) {
  return mergeStreams(withoutCanonicalEmpty(streams));
};

/**
 * This implements fusion/flattening for merge.  It will
 * fuse adjacent merge operations.  For example:
 * - a.merge(b).merge(c) effectively becomes merge(a, b, c)
 * - merge(a, merge(b, c)) effectively becomes merge(a, b, c)
 * It does this by concatenating the sources arrays of
 * any nested Merge sources, in effect "flattening" nested
 * merge operations into a single merge.
 */
var mergeStreams = function mergeStreams(streams) {
  return streams.length === 0 ? empty() : streams.length === 1 ? streams[0] : new Merge(reduce(appendSources, [], streams));
};

var withoutCanonicalEmpty = function withoutCanonicalEmpty(streams) {
  return streams.filter(isNotCanonicalEmpty);
};

var isNotCanonicalEmpty = function isNotCanonicalEmpty(stream) {
  return !isCanonicalEmpty(stream);
};

var appendSources = function appendSources(sources, stream) {
  return sources.concat(stream instanceof Merge ? stream.sources : stream);
};

var Merge = /*#__PURE__*/function () {
  function Merge(sources) {
    classCallCheck$2(this, Merge);

    this.sources = sources;
  }

  Merge.prototype.run = function run(sink, scheduler$$1) {
    var l = this.sources.length;
    var disposables = new Array(l);
    var sinks = new Array(l);

    var mergeSink = new MergeSink(disposables, sinks, sink);

    for (var indexSink, i = 0; i < l; ++i) {
      indexSink = sinks[i] = new IndexSink(i, mergeSink);
      disposables[i] = this.sources[i].run(indexSink, scheduler$$1);
    }

    return disposeAll(disposables);
  };

  return Merge;
}();

var MergeSink = /*#__PURE__*/function (_Pipe) {
  inherits(MergeSink, _Pipe);

  function MergeSink(disposables, sinks, sink) {
    classCallCheck$2(this, MergeSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.disposables = disposables;
    _this.activeCount = sinks.length;
    return _this;
  }

  MergeSink.prototype.event = function event(t, indexValue) {
    if (!indexValue.active) {
      this._dispose(t, indexValue.index);
      return;
    }
    this.sink.event(t, indexValue.value);
  };

  MergeSink.prototype._dispose = function _dispose(t, index) {
    tryDispose(t, this.disposables[index], this.sink);
    if (--this.activeCount === 0) {
      this.sink.end(t);
    }
  };

  return MergeSink;
}(Pipe);

/** @license MIT License (c) copyright 2010 original author or authors */

var sample$1 = function sample(values, sampler) {
  return snapshot$1(function (x, _) {
    return x;
  }, values, sampler);
};

var snapshot$1 = function snapshot(f, values, sampler) {
  return isCanonicalEmpty(sampler) || isCanonicalEmpty(values) ? empty() : new Snapshot(f, values, sampler);
};

var Snapshot = /*#__PURE__*/function () {
  function Snapshot(f, values, sampler) {
    classCallCheck$2(this, Snapshot);

    this.f = f;
    this.values = values;
    this.sampler = sampler;
  }

  Snapshot.prototype.run = function run(sink, scheduler$$1) {
    var sampleSink = new SnapshotSink(this.f, sink);
    var valuesDisposable = this.values.run(sampleSink.latest, scheduler$$1);
    var samplerDisposable = this.sampler.run(sampleSink, scheduler$$1);

    return disposeBoth(samplerDisposable, valuesDisposable);
  };

  return Snapshot;
}();

var SnapshotSink = /*#__PURE__*/function (_Pipe) {
  inherits(SnapshotSink, _Pipe);

  function SnapshotSink(f, sink) {
    classCallCheck$2(this, SnapshotSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    _this.latest = new LatestValueSink(_this);
    return _this;
  }

  SnapshotSink.prototype.event = function event(t, x) {
    if (this.latest.hasValue) {
      var f = this.f;
      this.sink.event(t, f(this.latest.value, x));
    }
  };

  return SnapshotSink;
}(Pipe);

var LatestValueSink = /*#__PURE__*/function (_Pipe2) {
  inherits(LatestValueSink, _Pipe2);

  function LatestValueSink(sink) {
    classCallCheck$2(this, LatestValueSink);

    var _this2 = possibleConstructorReturn(this, _Pipe2.call(this, sink));

    _this2.hasValue = false;
    return _this2;
  }

  LatestValueSink.prototype.event = function event(t, x) {
    this.value = x;
    this.hasValue = true;
  };

  LatestValueSink.prototype.end = function end() {};

  return LatestValueSink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

// Based on https://github.com/petkaantonov/deque

var Queue = /*#__PURE__*/function () {
  function Queue() {
    var capPow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    classCallCheck$2(this, Queue);

    this._capacity = capPow2;
    this._length = 0;
    this._head = 0;
  }

  Queue.prototype.push = function push(x) {
    var len = this._length;
    this._checkCapacity(len + 1);

    var i = this._head + len & this._capacity - 1;
    this[i] = x;
    this._length = len + 1;
  };

  Queue.prototype.shift = function shift() {
    var head = this._head;
    var x = this[head];

    this[head] = void 0;
    this._head = head + 1 & this._capacity - 1;
    this._length--;
    return x;
  };

  Queue.prototype.isEmpty = function isEmpty() {
    return this._length === 0;
  };

  Queue.prototype.length = function length() {
    return this._length;
  };

  Queue.prototype._checkCapacity = function _checkCapacity(size) {
    if (this._capacity < size) {
      this._ensureCapacity(this._capacity << 1);
    }
  };

  Queue.prototype._ensureCapacity = function _ensureCapacity(capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;

    var last = this._head + this._length;

    if (last > oldCapacity) {
      copy$1(this, 0, this, oldCapacity, last & oldCapacity - 1);
    }
  };

  return Queue;
}();

function copy$1(src, srcIndex, dst, dstIndex, len) {
  for (var j = 0; j < len; ++j) {
    dst[j + dstIndex] = src[j + srcIndex];
    src[j + srcIndex] = void 0;
  }
}

/** @license MIT License (c) copyright 2010 original author or authors */

/**
 * Combine two streams pairwise by index by applying f to values at corresponding
 * indices.  The returned stream ends when either of the input streams ends.
 * @param {function} f function to combine values
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zip$1(f, stream1, stream2) {
  return zipArray$1(f, [stream1, stream2]);
}

/**
* Combine streams pairwise (or tuple-wise) by index by applying f to values
* at corresponding indices.  The returned stream ends when any of the input
* streams ends.
* @param {function} f function to combine values
* @param {[Stream]} streams streams to zip using f
* @returns {Stream} new stream with items at corresponding indices combined
*  using f
*/
var zipArray$1 = function zipArray(f, streams) {
  return streams.length === 0 || containsCanonicalEmpty(streams) ? empty() : streams.length === 1 ? map$2(f, streams[0]) : new Zip(f, streams);
};

var Zip = /*#__PURE__*/function () {
  function Zip(f, sources) {
    classCallCheck$2(this, Zip);

    this.f = f;
    this.sources = sources;
  }

  Zip.prototype.run = function run(sink, scheduler$$1) {
    var l = this.sources.length;
    var disposables = new Array(l);
    var sinks = new Array(l);
    var buffers = new Array(l);

    var zipSink = new ZipSink(this.f, buffers, sinks, sink);

    for (var indexSink, i = 0; i < l; ++i) {
      buffers[i] = new Queue();
      indexSink = sinks[i] = new IndexSink(i, zipSink);
      disposables[i] = this.sources[i].run(indexSink, scheduler$$1);
    }

    return disposeAll(disposables);
  };

  return Zip;
}();

var ZipSink = /*#__PURE__*/function (_Pipe) {
  inherits(ZipSink, _Pipe);

  function ZipSink(f, buffers, sinks, sink) {
    classCallCheck$2(this, ZipSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.f = f;
    _this.sinks = sinks;
    _this.buffers = buffers;
    return _this;
  }

  ZipSink.prototype.event = function event(t, indexedValue) {
    /* eslint complexity: [1, 5] */
    if (!indexedValue.active) {
      this._dispose(t, indexedValue.index);
      return;
    }

    var buffers = this.buffers;
    var buffer = buffers[indexedValue.index];

    buffer.push(indexedValue.value);

    if (buffer.length() === 1) {
      if (!ready(this.buffers)) {
        return;
      }

      emitZipped(this.f, t, buffers, this.sink);

      if (ended(this.buffers, this.sinks)) {
        this.sink.end(t);
      }
    }
  };

  ZipSink.prototype._dispose = function _dispose(t, index) {
    var buffer = this.buffers[index];
    if (buffer.isEmpty()) {
      this.sink.end(t);
    }
  };

  return ZipSink;
}(Pipe);

var emitZipped = function emitZipped(f, t, buffers, sink) {
  return sink.event(t, invoke(f, map(head, buffers)));
};

var head = function head(buffer) {
  return buffer.shift();
};

function ended(buffers, sinks) {
  for (var i = 0, l = buffers.length; i < l; ++i) {
    if (buffers[i].isEmpty() && !sinks[i].active) {
      return true;
    }
  }
  return false;
}

function ready(buffers) {
  for (var i = 0, l = buffers.length; i < l; ++i) {
    if (buffers[i].isEmpty()) {
      return false;
    }
  }
  return true;
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @param {Stream} stream of streams on which to switch
 * @returns {Stream} switching stream
 */
var switchLatest = function switchLatest(stream) {
  return isCanonicalEmpty(stream) ? empty() : new Switch(stream);
};

var Switch = /*#__PURE__*/function () {
  function Switch(source) {
    classCallCheck$2(this, Switch);

    this.source = source;
  }

  Switch.prototype.run = function run(sink, scheduler$$1) {
    var switchSink = new SwitchSink(sink, scheduler$$1);
    return disposeBoth(switchSink, this.source.run(switchSink, scheduler$$1));
  };

  return Switch;
}();

var SwitchSink = /*#__PURE__*/function () {
  function SwitchSink(sink, scheduler$$1) {
    classCallCheck$2(this, SwitchSink);

    this.sink = sink;
    this.scheduler = scheduler$$1;
    this.current = null;
    this.ended = false;
  }

  SwitchSink.prototype.event = function event(t, stream) {
    this._disposeCurrent(t);
    this.current = new Segment(stream, t, Infinity, this, this.sink, this.scheduler);
  };

  SwitchSink.prototype.end = function end(t) {
    this.ended = true;
    this._checkEnd(t);
  };

  SwitchSink.prototype.error = function error(t, e) {
    this.ended = true;
    this.sink.error(t, e);
  };

  SwitchSink.prototype.dispose = function dispose$$1() {
    return this._disposeCurrent(currentTime(this.scheduler));
  };

  SwitchSink.prototype._disposeCurrent = function _disposeCurrent(t) {
    if (this.current !== null) {
      return this.current._dispose(t);
    }
  };

  SwitchSink.prototype._disposeInner = function _disposeInner(t, inner) {
    inner._dispose(t);
    if (inner === this.current) {
      this.current = null;
    }
  };

  SwitchSink.prototype._checkEnd = function _checkEnd(t) {
    if (this.ended && this.current === null) {
      this.sink.end(t);
    }
  };

  SwitchSink.prototype._endInner = function _endInner(t, inner) {
    this._disposeInner(t, inner);
    this._checkEnd(t);
  };

  SwitchSink.prototype._errorInner = function _errorInner(t, e, inner) {
    this._disposeInner(t, inner);
    this.sink.error(t, e);
  };

  return SwitchSink;
}();

var Segment = /*#__PURE__*/function () {
  function Segment(source, min, max, outer, sink, scheduler$$1) {
    classCallCheck$2(this, Segment);

    this.min = min;
    this.max = max;
    this.outer = outer;
    this.sink = sink;
    this.disposable = source.run(this, schedulerRelativeTo(min, scheduler$$1));
  }

  Segment.prototype.event = function event(t, x) {
    var time = Math.max(0, t + this.min);
    if (time < this.max) {
      this.sink.event(time, x);
    }
  };

  Segment.prototype.end = function end(t) {
    this.outer._endInner(t + this.min, this);
  };

  Segment.prototype.error = function error(t, e) {
    this.outer._errorInner(t + this.min, e, this);
  };

  Segment.prototype._dispose = function _dispose(t) {
    tryDispose(t + this.min, this.disposable, this.sink);
  };

  return Segment;
}();

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Retain only items matching a predicate
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @param {Stream} stream stream to filter
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
var filter$1 = function filter(p, stream) {
  return Filter.create(p, stream);
};

/**
 * Skip repeated events, using === to detect duplicates
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
var skipRepeats = function skipRepeats(stream) {
  return skipRepeatsWith$1(same, stream);
};

/**
 * Skip repeated events using the provided equals function to detect duplicates
 * @param {function(a:*, b:*):boolean} equals optional function to compare items
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
var skipRepeatsWith$1 = function skipRepeatsWith(equals, stream) {
  return isCanonicalEmpty(stream) ? empty() : new SkipRepeats(equals, stream);
};

var SkipRepeats = /*#__PURE__*/function () {
  function SkipRepeats(equals, source) {
    classCallCheck$2(this, SkipRepeats);

    this.equals = equals;
    this.source = source;
  }

  SkipRepeats.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new SkipRepeatsSink(this.equals, sink), scheduler$$1);
  };

  return SkipRepeats;
}();

var SkipRepeatsSink = /*#__PURE__*/function (_Pipe) {
  inherits(SkipRepeatsSink, _Pipe);

  function SkipRepeatsSink(equals, sink) {
    classCallCheck$2(this, SkipRepeatsSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.equals = equals;
    _this.value = void 0;
    _this.init = true;
    return _this;
  }

  SkipRepeatsSink.prototype.event = function event(t, x) {
    if (this.init) {
      this.init = false;
      this.value = x;
      this.sink.event(t, x);
    } else if (!this.equals(this.value, x)) {
      this.value = x;
      this.sink.event(t, x);
    }
  };

  return SkipRepeatsSink;
}(Pipe);

function same(a, b) {
  return a === b;
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var until$1 = function until(signal, stream) {
  return new Until(signal, stream);
};

var since$1 = function since(signal, stream) {
  return new Since(signal, stream);
};

var during$1 = function during(timeWindow, stream) {
  return until$1(join(timeWindow), since$1(timeWindow, stream));
};

var Until = /*#__PURE__*/function () {
  function Until(maxSignal, source) {
    classCallCheck$2(this, Until);

    this.maxSignal = maxSignal;
    this.source = source;
  }

  Until.prototype.run = function run(sink, scheduler$$1) {
    var min = new Bound(-Infinity, sink);
    var max = new UpperBound(this.maxSignal, sink, scheduler$$1);
    var disposable$$1 = this.source.run(new TimeWindowSink(min, max, sink), scheduler$$1);

    return disposeAll([min, max, disposable$$1]);
  };

  return Until;
}();

var Since = /*#__PURE__*/function () {
  function Since(minSignal, source) {
    classCallCheck$2(this, Since);

    this.minSignal = minSignal;
    this.source = source;
  }

  Since.prototype.run = function run(sink, scheduler$$1) {
    var min = new LowerBound(this.minSignal, sink, scheduler$$1);
    var max = new Bound(Infinity, sink);
    var disposable$$1 = this.source.run(new TimeWindowSink(min, max, sink), scheduler$$1);

    return disposeAll([min, max, disposable$$1]);
  };

  return Since;
}();

var Bound = /*#__PURE__*/function (_Pipe) {
  inherits(Bound, _Pipe);

  function Bound(value, sink) {
    classCallCheck$2(this, Bound);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.value = value;
    return _this;
  }

  Bound.prototype.event = function event() {};

  Bound.prototype.end = function end() {};

  Bound.prototype.dispose = function dispose$$1() {};

  return Bound;
}(Pipe);

var TimeWindowSink = /*#__PURE__*/function (_Pipe2) {
  inherits(TimeWindowSink, _Pipe2);

  function TimeWindowSink(min, max, sink) {
    classCallCheck$2(this, TimeWindowSink);

    var _this2 = possibleConstructorReturn(this, _Pipe2.call(this, sink));

    _this2.min = min;
    _this2.max = max;
    return _this2;
  }

  TimeWindowSink.prototype.event = function event(t, x) {
    if (t >= this.min.value && t < this.max.value) {
      this.sink.event(t, x);
    }
  };

  return TimeWindowSink;
}(Pipe);

var LowerBound = /*#__PURE__*/function (_Pipe3) {
  inherits(LowerBound, _Pipe3);

  function LowerBound(signal, sink, scheduler$$1) {
    classCallCheck$2(this, LowerBound);

    var _this3 = possibleConstructorReturn(this, _Pipe3.call(this, sink));

    _this3.value = Infinity;
    _this3.disposable = signal.run(_this3, scheduler$$1);
    return _this3;
  }

  LowerBound.prototype.event = function event(t /*, x */) {
    if (t < this.value) {
      this.value = t;
    }
  };

  LowerBound.prototype.end = function end() {};

  LowerBound.prototype.dispose = function dispose$$1() {
    return this.disposable.dispose();
  };

  return LowerBound;
}(Pipe);

var UpperBound = /*#__PURE__*/function (_Pipe4) {
  inherits(UpperBound, _Pipe4);

  function UpperBound(signal, sink, scheduler$$1) {
    classCallCheck$2(this, UpperBound);

    var _this4 = possibleConstructorReturn(this, _Pipe4.call(this, sink));

    _this4.value = Infinity;
    _this4.disposable = signal.run(_this4, scheduler$$1);
    return _this4;
  }

  UpperBound.prototype.event = function event(t, x) {
    if (t < this.value) {
      this.value = t;
      this.sink.end(t);
    }
  };

  UpperBound.prototype.end = function end() {};

  UpperBound.prototype.dispose = function dispose$$1() {
    return this.disposable.dispose();
  };

  return UpperBound;
}(Pipe);

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * @param {Number} delayTime milliseconds to delay each item
 * @param {Stream} stream
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
var delay$2 = function delay$$1(delayTime, stream) {
  return delayTime <= 0 ? stream : new Delay(delayTime, stream);
};

var Delay = /*#__PURE__*/function () {
  function Delay(dt, source) {
    classCallCheck$2(this, Delay);

    this.dt = dt;
    this.source = source;
  }

  Delay.prototype.run = function run(sink, scheduler$$1) {
    var delaySink = new DelaySink(this.dt, sink, scheduler$$1);
    return disposeBoth(delaySink, this.source.run(delaySink, scheduler$$1));
  };

  return Delay;
}();

var DelaySink = /*#__PURE__*/function (_Pipe) {
  inherits(DelaySink, _Pipe);

  function DelaySink(dt, sink, scheduler$$1) {
    classCallCheck$2(this, DelaySink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.dt = dt;
    _this.scheduler = scheduler$$1;
    return _this;
  }

  DelaySink.prototype.dispose = function dispose$$1() {
    var _this2 = this;

    cancelAllTasks(function (task) {
      return task.sink === _this2.sink;
    }, this.scheduler);
  };

  DelaySink.prototype.event = function event(t, x) {
    delay(this.dt, propagateEventTask$1(x, this.sink), this.scheduler);
  };

  DelaySink.prototype.end = function end(t) {
    delay(this.dt, propagateEndTask(this.sink), this.scheduler);
  };

  return DelaySink;
}(Pipe);

/** @license MIT License (c) copyright 2010-2017 original author or authors */

/**
 * Limit the rate of events by suppressing events that occur too often
 * @param {Number} period time to suppress events
 * @param {Stream} stream
 * @returns {Stream}
 */
var throttle$1 = function throttle(period, stream) {
  return isCanonicalEmpty(stream) ? empty() : stream instanceof Map$1 ? commuteMapThrottle(period, stream) : stream instanceof Throttle ? fuseThrottle(period, stream) : new Throttle(period, stream);
};

var commuteMapThrottle = function commuteMapThrottle(period, mapStream) {
  return Map$1.create(mapStream.f, throttle$1(period, mapStream.source));
};

var fuseThrottle = function fuseThrottle(period, throttleStream) {
  return new Throttle(Math.max(period, throttleStream.period), throttleStream.source);
};

var Throttle = /*#__PURE__*/function () {
  function Throttle(period, source) {
    classCallCheck$2(this, Throttle);

    this.period = period;
    this.source = source;
  }

  Throttle.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new ThrottleSink(this.period, sink), scheduler$$1);
  };

  return Throttle;
}();

var ThrottleSink = /*#__PURE__*/function (_Pipe) {
  inherits(ThrottleSink, _Pipe);

  function ThrottleSink(period, sink) {
    classCallCheck$2(this, ThrottleSink);

    var _this = possibleConstructorReturn(this, _Pipe.call(this, sink));

    _this.time = 0;
    _this.period = period;
    return _this;
  }

  ThrottleSink.prototype.event = function event(t, x) {
    if (t >= this.time) {
      this.time = t + this.period;
      this.sink.event(t, x);
    }
  };

  return ThrottleSink;
}(Pipe);
/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * @param {Number} period events occuring more frequently than this
 *  will be suppressed
 * @param {Stream} stream stream to debounce
 * @returns {Stream} new debounced stream
 */


var debounce$1 = function debounce(period, stream) {
  return isCanonicalEmpty(stream) ? empty() : new Debounce(period, stream);
};

var Debounce = /*#__PURE__*/function () {
  function Debounce(dt, source) {
    classCallCheck$2(this, Debounce);

    this.dt = dt;
    this.source = source;
  }

  Debounce.prototype.run = function run(sink, scheduler$$1) {
    return new DebounceSink(this.dt, this.source, sink, scheduler$$1);
  };

  return Debounce;
}();

var DebounceSink = /*#__PURE__*/function () {
  function DebounceSink(dt, source, sink, scheduler$$1) {
    classCallCheck$2(this, DebounceSink);

    this.dt = dt;
    this.sink = sink;
    this.scheduler = scheduler$$1;
    this.value = void 0;
    this.timer = null;

    this.disposable = source.run(this, scheduler$$1);
  }

  DebounceSink.prototype.event = function event(t, x) {
    this._clearTimer();
    this.value = x;
    this.timer = delay(this.dt, new DebounceTask(this, x), this.scheduler);
  };

  DebounceSink.prototype._event = function _event(t, x) {
    this._clearTimer();
    this.sink.event(t, x);
  };

  DebounceSink.prototype.end = function end(t) {
    if (this._clearTimer()) {
      this.sink.event(t, this.value);
      this.value = undefined;
    }
    this.sink.end(t);
  };

  DebounceSink.prototype.error = function error(t, x) {
    this._clearTimer();
    this.sink.error(t, x);
  };

  DebounceSink.prototype.dispose = function dispose$$1() {
    this._clearTimer();
    this.disposable.dispose();
  };

  DebounceSink.prototype._clearTimer = function _clearTimer() {
    if (this.timer === null) {
      return false;
    }
    this.timer.dispose();
    this.timer = null;
    return true;
  };

  return DebounceSink;
}();

var DebounceTask = /*#__PURE__*/function () {
  function DebounceTask(debounce, value) {
    classCallCheck$2(this, DebounceTask);

    this.debounce = debounce;
    this.value = value;
  }

  DebounceTask.prototype.run = function run(t) {
    this.debounce._event(t, this.value);
  };

  DebounceTask.prototype.error = function error(t, e) {
    this.debounce.error(t, e);
  };

  DebounceTask.prototype.dispose = function dispose$$1() {};

  return DebounceTask;
}();

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Turn a Stream<Promise<T>> into Stream<T> by awaiting each promise.
 * Event order is preserved. The stream will fail if any promise rejects.
 */
var awaitPromises = function awaitPromises(stream) {
  return isCanonicalEmpty(stream) ? empty() : new Await(stream);
};

/**
 * Create a stream containing only the promise's fulfillment
 * value at the time it fulfills.
 * @param {Promise<T>} p promise
 * @return {Stream<T>} stream containing promise's fulfillment value.
 *  If the promise rejects, the stream will error
 */
var fromPromise = /*#__PURE__*/compose(awaitPromises, now$1);

var Await = /*#__PURE__*/function () {
  function Await(source) {
    classCallCheck$2(this, Await);

    this.source = source;
  }

  Await.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(new AwaitSink(sink, scheduler$$1), scheduler$$1);
  };

  return Await;
}();

var AwaitSink = /*#__PURE__*/function () {
  function AwaitSink(sink, scheduler$$1) {
    var _this = this;

    classCallCheck$2(this, AwaitSink);

    this.sink = sink;
    this.scheduler = scheduler$$1;
    this.queue = Promise.resolve();

    // Pre-create closures, to avoid creating them per event
    this._eventBound = function (x) {
      return _this.sink.event(currentTime(_this.scheduler), x);
    };
    this._endBound = function () {
      return _this.sink.end(currentTime(_this.scheduler));
    };
    this._errorBound = function (e) {
      return _this.sink.error(currentTime(_this.scheduler), e);
    };
  }

  AwaitSink.prototype.event = function event(t, promise) {
    var _this2 = this;

    this.queue = this.queue.then(function () {
      return _this2._event(promise);
    }).catch(this._errorBound);
  };

  AwaitSink.prototype.end = function end(t) {
    this.queue = this.queue.then(this._endBound).catch(this._errorBound);
  };

  AwaitSink.prototype.error = function error(t, e) {
    var _this3 = this;

    // Don't resolve error values, propagate directly
    this.queue = this.queue.then(function () {
      return _this3._errorBound(e);
    }).catch(fatalError);
  };

  AwaitSink.prototype._event = function _event(promise) {
    return promise.then(this._eventBound);
  };

  return AwaitSink;
}();

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var SafeSink = /*#__PURE__*/function () {
  function SafeSink(sink) {
    classCallCheck$2(this, SafeSink);

    this.sink = sink;
    this.active = true;
  }

  SafeSink.prototype.event = function event(t, x) {
    if (!this.active) {
      return;
    }
    this.sink.event(t, x);
  };

  SafeSink.prototype.end = function end(t, x) {
    if (!this.active) {
      return;
    }
    this.disable();
    this.sink.end(t, x);
  };

  SafeSink.prototype.error = function error(t, e) {
    this.disable();
    this.sink.error(t, e);
  };

  SafeSink.prototype.disable = function disable() {
    this.active = false;
    return this.sink;
  };

  return SafeSink;
}();

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function tryEvent(t, x, sink) {
  try {
    sink.event(t, x);
  } catch (e) {
    sink.error(t, e);
  }
}

function tryEnd(t, sink) {
  try {
    sink.end(t);
  } catch (e) {
    sink.error(t, e);
  }
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * If stream encounters an error, recover and continue with items from stream
 * returned by f.
 * @param {function(error:*):Stream} f function which returns a new stream
 * @param {Stream} stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
var recoverWith$1 = function recoverWith(f, stream) {
  return isCanonicalEmpty(stream) ? empty() : new RecoverWith(f, stream);
};

/**
 * Create a stream containing only an error
 * @param {*} e error value, preferably an Error or Error subtype
 * @returns {Stream} new stream containing only an error
 */
var throwError = function throwError(e) {
  return new ErrorStream(e);
};

var ErrorStream = /*#__PURE__*/function () {
  function ErrorStream(e) {
    classCallCheck$2(this, ErrorStream);

    this.value = e;
  }

  ErrorStream.prototype.run = function run(sink, scheduler$$1) {
    return asap(propagateErrorTask$1(this.value, sink), scheduler$$1);
  };

  return ErrorStream;
}();

var RecoverWith = /*#__PURE__*/function () {
  function RecoverWith(f, source) {
    classCallCheck$2(this, RecoverWith);

    this.f = f;
    this.source = source;
  }

  RecoverWith.prototype.run = function run(sink, scheduler$$1) {
    return new RecoverWithSink(this.f, this.source, sink, scheduler$$1);
  };

  return RecoverWith;
}();

var RecoverWithSink = /*#__PURE__*/function () {
  function RecoverWithSink(f, source, sink, scheduler$$1) {
    classCallCheck$2(this, RecoverWithSink);

    this.f = f;
    this.sink = new SafeSink(sink);
    this.scheduler = scheduler$$1;
    this.disposable = source.run(this, scheduler$$1);
  }

  RecoverWithSink.prototype.event = function event(t, x) {
    tryEvent(t, x, this.sink);
  };

  RecoverWithSink.prototype.end = function end(t) {
    tryEnd(t, this.sink);
  };

  RecoverWithSink.prototype.error = function error(t, e) {
    var nextSink = this.sink.disable();

    tryDispose(t, this.disposable, this.sink);

    this._startNext(t, e, nextSink);
  };

  RecoverWithSink.prototype._startNext = function _startNext(t, x, sink) {
    try {
      this.disposable = this._continue(this.f, t, x, sink);
    } catch (e) {
      sink.error(t, e);
    }
  };

  RecoverWithSink.prototype._continue = function _continue(f, t, x, sink) {
    return run$1(sink, this.scheduler, withLocalTime$1(t, f(x)));
  };

  RecoverWithSink.prototype.dispose = function dispose$$1() {
    return this.disposable.dispose();
  };

  return RecoverWithSink;
}();

var multicast = function multicast(stream) {
  return stream instanceof Multicast || isCanonicalEmpty(stream) ? stream : new Multicast(stream);
};

var Multicast = /*#__PURE__*/function () {
  function Multicast(source) {
    classCallCheck$2(this, Multicast);

    this.source = new MulticastSource(source);
  }

  Multicast.prototype.run = function run(sink, scheduler$$1) {
    return this.source.run(sink, scheduler$$1);
  };

  return Multicast;
}();

var MulticastSource = /*#__PURE__*/function () {
  function MulticastSource(source) {
    classCallCheck$2(this, MulticastSource);

    this.source = source;
    this.sinks = [];
    this.disposable = disposeNone();
  }

  MulticastSource.prototype.run = function run(sink, scheduler$$1) {
    var n = this.add(sink);
    if (n === 1) {
      this.disposable = this.source.run(this, scheduler$$1);
    }
    return disposeOnce(new MulticastDisposable(this, sink));
  };

  MulticastSource.prototype.dispose = function dispose$$1() {
    var disposable$$1 = this.disposable;
    this.disposable = disposeNone();
    return disposable$$1.dispose();
  };

  MulticastSource.prototype.add = function add(sink) {
    this.sinks = append(sink, this.sinks);
    return this.sinks.length;
  };

  MulticastSource.prototype.remove = function remove$$1(sink) {
    var i = findIndex(sink, this.sinks);
    // istanbul ignore next
    if (i >= 0) {
      this.sinks = remove(i, this.sinks);
    }

    return this.sinks.length;
  };

  MulticastSource.prototype.event = function event(time, value) {
    var s = this.sinks;
    if (s.length === 1) {
      return s[0].event(time, value);
    }
    for (var i = 0; i < s.length; ++i) {
      tryEvent(time, value, s[i]);
    }
  };

  MulticastSource.prototype.end = function end(time) {
    var s = this.sinks;
    for (var i = 0; i < s.length; ++i) {
      tryEnd(time, s[i]);
    }
  };

  MulticastSource.prototype.error = function error(time, err) {
    var s = this.sinks;
    for (var i = 0; i < s.length; ++i) {
      s[i].error(time, err);
    }
  };

  return MulticastSource;
}();

var MulticastDisposable = /*#__PURE__*/function () {
  function MulticastDisposable(source, sink) {
    classCallCheck$2(this, MulticastDisposable);

    this.source = source;
    this.sink = sink;
  }

  MulticastDisposable.prototype.dispose = function dispose$$1() {
    if (this.source.remove(this.sink) === 0) {
      this.source.dispose();
    }
  };

  return MulticastDisposable;
}();

/** @license MIT License (c) copyright 2016 original author or authors */
/* eslint-disable import/first */
var zipItems$$1 = /*#__PURE__*/curry3(zipItems$1);
var withItems$$1 = /*#__PURE__*/curry2(withItems$1);

// -----------------------------------------------------------------------
// Observing

var runEffects$$1 = /*#__PURE__*/curry2(runEffects$1);
var run$$1 = /*#__PURE__*/curry3(run$1);

// -------------------------------------------------------

var withLocalTime$$1 = /*#__PURE__*/curry2(withLocalTime$1);

// -------------------------------------------------------

var loop$$1 = /*#__PURE__*/curry3(loop$1);

// -------------------------------------------------------

var scan$$1 = /*#__PURE__*/curry3(scan$1);

// -----------------------------------------------------------------------
// Extending

var startWith$$1 = /*#__PURE__*/curry2(startWith$1);

// -----------------------------------------------------------------------
// Transforming

var map$1 = /*#__PURE__*/curry2(map$2);
var constant$$1 = /*#__PURE__*/curry2(constant$1);
var tap$$1 = /*#__PURE__*/curry2(tap$1);
var ap$$1 = /*#__PURE__*/curry2(ap$1);

// -----------------------------------------------------------------------
// FlatMapping

var chain$$1 = /*#__PURE__*/curry2(chain$1);
var continueWith$$1 = /*#__PURE__*/curry2(continueWith$1);

var concatMap$$1 = /*#__PURE__*/curry2(concatMap$1);

// -----------------------------------------------------------------------
// Concurrent merging

var mergeConcurrently$$1 = /*#__PURE__*/curry2(mergeConcurrently$1);
var mergeMapConcurrently$$1 = /*#__PURE__*/curry3(mergeMapConcurrently$1);

// -----------------------------------------------------------------------
// Merging

var merge$$1 = /*#__PURE__*/curry2(merge$1);
// -----------------------------------------------------------------------
// Combining

var combine$$1 = /*#__PURE__*/curry3(combine$1);
var combineArray$$1 = /*#__PURE__*/curry2(combineArray$1);

// -----------------------------------------------------------------------
// Sampling

var sample$$1 = /*#__PURE__*/curry2(sample$1);
var snapshot$$1 = /*#__PURE__*/curry3(snapshot$1);

// -----------------------------------------------------------------------
// Zipping

var zip$$1 = /*#__PURE__*/curry3(zip$1);
var zipArray$$1 = /*#__PURE__*/curry2(zipArray$1);

// -----------------------------------------------------------------------
// Filtering

var filter$$1 = /*#__PURE__*/curry2(filter$1);
var skipRepeatsWith$$1 = /*#__PURE__*/curry2(skipRepeatsWith$1);

// -----------------------------------------------------------------------
// Slicing

var take$$1 = /*#__PURE__*/curry2(take$1);
var skip$$1 = /*#__PURE__*/curry2(skip$1);
var slice$$1 = /*#__PURE__*/curry3(slice$1);
var takeWhile$$1 = /*#__PURE__*/curry2(takeWhile$1);
var skipWhile$$1 = /*#__PURE__*/curry2(skipWhile$1);
var skipAfter$$1 = /*#__PURE__*/curry2(skipAfter$1);

// -----------------------------------------------------------------------
// Time slicing

var until$$1 = /*#__PURE__*/curry2(until$1);
var since$$1 = /*#__PURE__*/curry2(since$1);
var during$$1 = /*#__PURE__*/curry2(during$1);

// -----------------------------------------------------------------------
// Delaying

var delay$1 = /*#__PURE__*/curry2(delay$2);

// -----------------------------------------------------------------------
// Rate limiting

var throttle$$1 = /*#__PURE__*/curry2(throttle$1);
var debounce$$1 = /*#__PURE__*/curry2(debounce$1);

// -----------------------------------------------------------------------
// Error handling

var recoverWith$$1 = /*#__PURE__*/curry2(recoverWith$1);
// ----------------------------------------------------------------------
var propagateTask$$1 = /*#__PURE__*/curry3(propagateTask$1);
var propagateEventTask$$1 = /*#__PURE__*/curry2(propagateEventTask$1);
var propagateErrorTask$$1 = /*#__PURE__*/curry2(propagateErrorTask$1);
//# sourceMappingURL=index.es.js.map

var core = /*#__PURE__*/Object.freeze({
    zipItems: zipItems$$1,
    withItems: withItems$$1,
    runEffects: runEffects$$1,
    run: run$$1,
    withLocalTime: withLocalTime$$1,
    loop: loop$$1,
    scan: scan$$1,
    startWith: startWith$$1,
    map: map$1,
    constant: constant$$1,
    tap: tap$$1,
    ap: ap$$1,
    chain: chain$$1,
    join: join,
    continueWith: continueWith$$1,
    concatMap: concatMap$$1,
    mergeConcurrently: mergeConcurrently$$1,
    mergeMapConcurrently: mergeMapConcurrently$$1,
    merge: merge$$1,
    mergeArray: mergeArray,
    combine: combine$$1,
    combineArray: combineArray$$1,
    sample: sample$$1,
    snapshot: snapshot$$1,
    zip: zip$$1,
    zipArray: zipArray$$1,
    filter: filter$$1,
    skipRepeats: skipRepeats,
    skipRepeatsWith: skipRepeatsWith$$1,
    take: take$$1,
    skip: skip$$1,
    slice: slice$$1,
    takeWhile: takeWhile$$1,
    skipWhile: skipWhile$$1,
    skipAfter: skipAfter$$1,
    until: until$$1,
    since: since$$1,
    during: during$$1,
    delay: delay$1,
    throttle: throttle$$1,
    debounce: debounce$$1,
    recoverWith: recoverWith$$1,
    throwError: throwError,
    propagateTask: propagateTask$$1,
    propagateEventTask: propagateEventTask$$1,
    propagateErrorTask: propagateErrorTask$$1,
    propagateEndTask: propagateEndTask,
    empty: empty,
    never: never,
    now: now$1,
    at: at,
    periodic: periodic$1,
    newStream: newStream,
    switchLatest: switchLatest,
    fromPromise: fromPromise,
    awaitPromises: awaitPromises,
    multicast: multicast,
    MulticastSource: MulticastSource
});

const Core = function (__exports) {
    const require = __exports.require = core;

    return __exports;
}({});
const SchedulerModule = function (__exports) {
    const require_1 = __exports.require = scheduler;
    return __exports;
}({});
const DisposableModule = function (__exports) {
    const require_2 = __exports.require = disposable;
    return __exports;
}({});

function tree(deltac, pith) {
    let lst = [];
    const put = lst.push.bind(lst);
    pith(put);
    return deltac(Array.from(lst));
}

const most = Core.require;
function tree$1(deltac, mpith) {
    return most.switchLatest.bind(most)(most.map(function (pith) {
        return tree(deltac, pith);
    })(mpith));
}

class Choice {
    constructor(tag, data) {
        this.tag = tag | 0;
        this.data = data;
    }
    get valueIfChoice1() {
        return this.tag === 0 ? this.data : null;
    }
    get valueIfChoice2() {
        return this.tag === 1 ? this.data : null;
    }
    Equals(other) {
        return equalsUnions(this, other);
    }
    CompareTo(other) {
        return compareUnions(this, other);
    }
    [FSymbol.reflection]() {
        return {
            type: "Microsoft.FSharp.Core.FSharpChoice",
            interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
            cases: [["Choice1Of2", Any], ["Choice2Of2", Any]],
        };
    }
}

function CurriedLambda(f, expectedArgsLength) {
    if (f.curried === true) {
        return f;
    }
    const curriedFn = (...args) => {
        const args2 = args.map((x) => typeof x === "function" ? CurriedLambda(x) : x);
        const actualArgsLength = Math.max(args2.length, 1);
        expectedArgsLength = Math.max(expectedArgsLength || f.length, 1);
        if (actualArgsLength >= expectedArgsLength) {
            const restArgs = args2.splice(expectedArgsLength);
            const res = f(...args2);
            if (typeof res === "function") {
                const newLambda = CurriedLambda(res);
                return restArgs.length === 0 ? newLambda : newLambda(...restArgs);
            }
            else {
                return res;
            }
        }
        else {
            return CurriedLambda((...args3) => {
                return f(...args2.concat(args3));
            }, expectedArgsLength - actualArgsLength);
        }
    };
    curriedFn.curried = true;
    return curriedFn;
}

class T {
    constructor(tag, data) {
        this.tag = tag | 0;
        this.data = data;
    }

    [FSymbol.reflection]() {
        return {
            type: "Sakhe.Dom.T",
            interfaces: ["FSharpUnion"],
            cases: [["Absurd", FableFunction([Unit, GenericParam("a")])], ["Prove", FableFunction([GenericParam("a"), Option(GenericParam("b"))])]]
        };
    }

}
setType("Sakhe.Dom.T", T);

function _IndexOutOfBounds_ProvedNode_FoundNode_OtherNode_(index, prove, parentElement) {
    const childNodes = parentElement.childNodes;
    const length = ~~childNodes.length | 0;

    if (index >= length) {
        return new Choice(0, null);
    } else {
        const childAtIndex = childNodes[index];
        const matchValue = prove(childAtIndex);

        if (matchValue == null) {
            const findNode = function (index_1) {
                findNode: while (true) {
                    if (index_1 < length) {
                        const matchValue_1 = prove(childNodes[index_1]);

                        if (matchValue_1 == null) {
                            index_1 = index_1 + 1;
                            continue findNode;
                        } else {
                            return makeSome(getValue(matchValue_1));
                        }
                    } else {
                        return null;
                    }
                }
            };

            const matchValue_2 = findNode(index);

            if (matchValue_2 == null) {
                return new Choice(3, childAtIndex);
            } else {
                return new Choice(2, [getValue(matchValue_2), childAtIndex]);
            }
        } else {
            return new Choice(1, getValue(matchValue));
        }
    }
}
const disposable$1 = DisposableModule.require;
function tree$2(pith) {
    const ring = function (pith_1, o) {
        let c = 0;
        pith_1({
            Node(_arg1, pith_2) {
                const index = c | 0;
                c = c + 1 | 0;
                o(most.map(CurriedLambda(childNodePatch => function makeOnce(f) {
                    var b;
                    return function onceAtoBtoAtoB(a) {
                        if (f) {
                            b = f.call(this, a);
                            f = null;
                        }

                        return b;
                    };
                }(parentElement => {
                    const matchValue = [index, _arg1[1], parentElement];

                    const activePatternResult10696 = _IndexOutOfBounds_ProvedNode_FoundNode_OtherNode_(matchValue[0], matchValue[1], matchValue[2]);

                    if (activePatternResult10696.tag === 1) {
                        childNodePatch(activePatternResult10696.data), void 0;
                    } else if (activePatternResult10696.tag === 2) {
                        childNodePatch(activePatternResult10696.data[0]);
                        parentElement.insertBefore(activePatternResult10696.data[0], activePatternResult10696.data[1]), void 0;
                    } else if (activePatternResult10696.tag === 3) {
                        const child = _arg1[0]();

                        childNodePatch(child);
                        parentElement.insertBefore(child, activePatternResult10696.data), void 0;
                    } else {
                        const child_1 = _arg1[0]();

                        childNodePatch(child_1);
                        parentElement.insertBefore(child_1, null), void 0;
                    }
                })))(tree$2(pith_2)));
            },

            Leaf(_arg2, s) {
                const index = c | 0;
                c = c + 1 | 0;
                o(most.map(CurriedLambda(childNodePatch => function makeOnce(f) {
                    var b;
                    return function onceAtoBtoAtoB(a) {
                        if (f) {
                            b = f.call(this, a);
                            f = null;
                        }

                        return b;
                    };
                }(parentElement => {
                    const matchValue = [index, _arg2[1], parentElement];

                    const activePatternResult10701 = _IndexOutOfBounds_ProvedNode_FoundNode_OtherNode_(matchValue[0], matchValue[1], matchValue[2]);

                    if (activePatternResult10701.tag === 1) {
                        childNodePatch(activePatternResult10701.data), void 0;
                    } else if (activePatternResult10701.tag === 2) {
                        childNodePatch(activePatternResult10701.data[0]);
                        parentElement.insertBefore(activePatternResult10701.data[0], activePatternResult10701.data[1]), void 0;
                    } else if (activePatternResult10701.tag === 3) {
                        const child = _arg2[0]();

                        childNodePatch(child);
                        parentElement.insertBefore(child, activePatternResult10701.data), void 0;
                    } else {
                        const child_1 = _arg2[0]();

                        childNodePatch(child_1);
                        parentElement.insertBefore(child_1, null), void 0;
                    }
                })))(s));
            },

            Patch(s) {
                o(most.map($var3 => $var4 => {
                    (function makeOnce(f) {
                        var b;
                        return function onceAtoBtoAtoB(a) {
                            if (f) {
                                b = f.call(this, a);
                                f = null;
                            }

                            return b;
                        };
                    })($var1 => $var2 => {
                        ((patch, n) => {
                            patch(n);
                        })($var1, $var2);
                    })($var3, $var4);
                })(s));
            },

            [FSymbol.reflection]() {
                return {
                    interfaces: ["Sakhe.Dom.ILang"]
                };
            }

        });
        o(most.now(function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
                if (f) {
                    b = f.call(this, a);
                    f = null;
                }

                return b;
            };
        }(function (element) {
            const childNodes = element.childNodes;
            const length = ~~childNodes.length | 0;

            for (let i = c; i <= length - 1; i++) {
                element.removeChild(childNodes[i]), void 0;
            }
        })));
    };

    return most.newStream(function (sink, scheduler) {
        const restore = {
            contents: function () {}
        };

        const f = function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
                if (f) {
                    b = f.call(this, a);
                    f = null;
                }

                return b;
            };
        }(function (element_1) {
            const oldNodes = [...element_1.childNodes];

            restore.contents = function () {
                const ref = element_1.childNodes[0];

                for (let i_1 = 0; i_1 <= oldNodes.length - 1; i_1++) {
                    element_1.insertBefore(oldNodes[i_1], ref), void 0;
                }

                for (let i_2 = oldNodes.length; i_2 <= ~~element_1.childNodes.length - 1; i_2++) {
                    element_1.removeChild(element_1.childNodes[i_2]), void 0;
                }
            };
        });

        const s = most.map($var5 => $var6 => {
            (function (patch, element_2) {
                f(element_2);
                patch(element_2);
            })($var5, $var6);
        })(tree$1(CurriedLambda(function (arg00, arg10) {
            return most.combineArray((...list) => ($var7 => $var8 => {
                arg00($var7, $var8);
            })(list), arg10);
        })(function (ps, e) {
            ps.forEach(function (p) {
                p(e);
            });
        }), most.map($var9 => $var10 => {
            ring($var9, $var10);
        })(pith)));
        const dispble = most.run(sink)(scheduler, s);
        return disposable$1.disposeWith(function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
                if (f) {
                    b = f.call(this, a);
                    f = null;
                }

                return b;
            };
        }(function () {
            const d1 = dispble.dispose.bind(dispble);
            d1();
            const dispose = restore.contents;
            dispose();
        }), void 0);
    });
}

function mkAbsurdProve(create, prove) {
    return [create, function (n) {
        return prove(n) ? makeSome(n) : null;
    }];
}
function elm(ap_0, ap_1, pith) {
    const ap = [ap_0, ap_1];
    return [ap, pith];
}
function chr(ap_0, ap_1, pith) {
    const ap = [ap_0, ap_1];
    return [ap, pith];
}
const a = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("a".toUpperCase());
const h1 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h1".toUpperCase());
const h2 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h2".toUpperCase());
const h3 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h3".toUpperCase());
const h4 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h4".toUpperCase());
const span = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("span".toUpperCase());
const div = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("div".toUpperCase());
const button = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("button".toUpperCase());
const text = mkAbsurdProve(function () {
    return document.createTextNode("");
}, function (node) {
    return node.nodeName === "#text";
});
function H1(f) {
    const arg00_ = h1[0];
    const arg01_ = h1[1];
    return elm(arg00_, arg01_, f);
}
function H2(f) {
    const arg00_ = h2[0];
    const arg01_ = h2[1];
    return elm(arg00_, arg01_, f);
}
function H3(f) {
    const arg00_ = h3[0];
    const arg01_ = h3[1];
    return elm(arg00_, arg01_, f);
}
function Span(f) {
    const arg00_ = span[0];
    const arg01_ = span[1];
    return elm(arg00_, arg01_, f);
}
function Div(f) {
    const arg00_ = div[0];
    const arg01_ = div[1];
    return elm(arg00_, arg01_, f);
}
function Button(f) {
    const arg00_ = button[0];
    const arg01_ = button[1];
    return elm(arg00_, arg01_, f);
}

function _Text(f) {
    const arg00_ = text[0];
    const arg01_ = text[1];
    return chr(arg00_, arg01_, f);
}
function op_ColonEquals(a_1, b) {
    return a_1(most.merge(most.now(b))(most.never()));
}
const intS = most.scan(function (c, _arg1) {
    return c + 1;
})(0)(most.periodic(10));
function counter(d, o) {
    op_ColonEquals($var1 => function (tupledArg) {
        o.Node(tupledArg[0], tupledArg[1]);
    }(Div($var1)), function (o_1) {
        op_ColonEquals(o_1.Patch.bind(o_1), function (d_1) {
            d_1.style.padding = "5px 10px";
            d_1.style.textAlign = "center";
        });
        op_ColonEquals($var2 => function (tupledArg_1) {
            o_1.Node(tupledArg_1[0], tupledArg_1[1]);
        }(Button($var2)), function (o_2) {
            var d_2;
            op_ColonEquals($var3 => function (tupledArg_2) {
                o_2.Node(tupledArg_2[0], tupledArg_2[1]);
            }(Span($var3)), function (o_3) {
                op_ColonEquals($var4 => function (tupledArg_3) {
                    o_3.Leaf(tupledArg_3[0], tupledArg_3[1]);
                }(_Text($var4)), function (text_1) {
                    text_1.textContent = "+";
                });
            });

            if (d > 0) {
                op_ColonEquals($var5 => function (tupledArg_4) {
                    o_2.Node(tupledArg_4[0], tupledArg_4[1]);
                }(Div($var5)), (d_2 = d - 1 | 0, function (o_4) {
                    counter(d_2, o_4);
                }));
            }
        });
        op_ColonEquals($var6 => function (tupledArg_5) {
            o_1.Node(tupledArg_5[0], tupledArg_5[1]);
        }(Button($var6)), function (o_5) {
            var d_3;
            op_ColonEquals($var7 => function (tupledArg_6) {
                o_5.Node(tupledArg_6[0], tupledArg_6[1]);
            }(Span($var7)), function (o_6) {
                op_ColonEquals($var8 => function (tupledArg_7) {
                    o_6.Leaf(tupledArg_7[0], tupledArg_7[1]);
                }(_Text($var8)), function (text_2) {
                    text_2.textContent = "-";
                });
            });

            if (d > 0) {
                op_ColonEquals($var9 => function (tupledArg_8) {
                    o_5.Node(tupledArg_8[0], tupledArg_8[1]);
                }(Div($var9)), (d_3 = d - 1 | 0, function (o_7) {
                    counter(d_3, o_7);
                }));
            }
        });
        op_ColonEquals($var10 => function (tupledArg_9) {
            o_1.Node(tupledArg_9[0], tupledArg_9[1]);
        }(H3($var10)), function (o_8) {
            ($var11 => function (tupledArg_10) {
                o_8.Leaf(tupledArg_10[0], tupledArg_10[1]);
            }(_Text($var11)))(most.map($var12 => $var13 => {
                (function (i, text_3) {
                    text_3.textContent = i.toString();
                })($var12, $var13);
            })(intS));
        });
    });
}
const rez = op_ColonEquals(tree$2, function (o) {
    counter(4, o);
});
const rootNode = document.getElementById.bind(document)("root-node");
const patches = most.until(most.skip(1)(most.periodic(3000)))(most.scan(function (n, p) {
    p(n);
    return n;
})(rootNode)(rez));
function sink() {
    return {
        event(time, value) {},

        end(time) {
            console.info(time, "|");
        },

        error(time, err) {
            console.error(time, err);
        },

        [FSymbol.reflection]() {
            return {
                interfaces: ["Most.Sink"]
            };
        }

    };
}
most.runEffects(patches, SchedulerModule.require.newDefaultScheduler()), void 0;

exports.mkAbsurdProve = mkAbsurdProve;
exports.elm = elm;
exports.chr = chr;
exports.a = a;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.span = span;
exports.div = div;
exports.button = button;
exports.text = text;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.Span = Span;
exports.Div = Div;
exports.Button = Button;
exports.Text = _Text;
exports.op_ColonEquals = op_ColonEquals;
exports.intS = intS;
exports.counter = counter;
exports.rez = rez;
exports.rootNode = rootNode;
exports.patches = patches;
exports.sink = sink;
