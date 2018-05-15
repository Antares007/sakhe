"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padWithZeros = padWithZeros;
exports.offsetToString = offsetToString;
exports.toHalfUTCString = toHalfUTCString;
exports.toStringWithOffset = toStringWithOffset;
exports.toStringWithKind = toStringWithKind;
exports.toString = toString;
exports.default = DateTime;
exports.minValue = minValue;
exports.maxValue = maxValue;
exports.parseRaw = parseRaw;
exports.parse = parse;
exports.tryParse = tryParse;
exports.offset = offset;
exports.create = create;
exports.now = now;
exports.utcNow = utcNow;
exports.today = today;
exports.isLeapYear = isLeapYear;
exports.daysInMonth = daysInMonth;
exports.toUniversalTime = toUniversalTime;
exports.toLocalTime = toLocalTime;
exports.timeOfDay = timeOfDay;
exports.date = date;
exports.day = day;
exports.hour = hour;
exports.millisecond = millisecond;
exports.minute = minute;
exports.month = month;
exports.second = second;
exports.year = year;
exports.dayOfWeek = dayOfWeek;
exports.dayOfYear = dayOfYear;
exports.add = add;
exports.addDays = addDays;
exports.addHours = addHours;
exports.addMinutes = addMinutes;
exports.addSeconds = addSeconds;
exports.addMilliseconds = addMilliseconds;
exports.addYears = addYears;
exports.addMonths = addMonths;
exports.subtract = subtract;
exports.toLongDateString = toLongDateString;
exports.toShortDateString = toShortDateString;
exports.toLongTimeString = toLongTimeString;
exports.toShortTimeString = toShortTimeString;
exports.equals = equals;
exports.compare = compare;
exports.op_Addition = op_Addition;
exports.op_Subtraction = op_Subtraction;
exports.isDaylightSavingTime = isDaylightSavingTime;
var offsetRegex = exports.offsetRegex = /(?:Z|[+-](\d{2}):?(\d{2})?)$/;
function padWithZeros(i, length) {
  var str = i.toString(10);
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}
function offsetToString(offset) {
  var isMinus = offset < 0;
  offset = Math.abs(offset);
  var hours = ~~(offset / 3600000);
  var minutes = offset % 3600000 / 60000;
  return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
}
function toHalfUTCString(date, half) {
  var str = date.toISOString();
  return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function toISOString(d, utc) {
  if (utc) {
    return d.toISOString();
  } else {
    // JS Date is always local
    var printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
    return padWithZeros(d.getFullYear(), 4) + "-" + padWithZeros(d.getMonth() + 1, 2) + "-" + padWithZeros(d.getDate(), 2) + "T" + padWithZeros(d.getHours(), 2) + ":" + padWithZeros(d.getMinutes(), 2) + ":" + padWithZeros(d.getSeconds(), 2) + "." + padWithZeros(d.getMilliseconds(), 3) + (printOffset ? offsetToString(d.getTimezoneOffset() * -60000) : "");
  }
}
function toISOStringWithOffset(dateWithOffset, offset) {
  var str = dateWithOffset.toISOString();
  return str.substring(0, str.length - 1) + offsetToString(offset);
}
function toStringWithCustomFormat(date, format, utc) {
  return format.replace(/(\w)\1*/g, function (match) {
    var rep = match;
    switch (match.substring(0, 1)) {
      case "y":
        var y = utc ? date.getUTCFullYear() : date.getFullYear();
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
        var h = utc ? date.getUTCHours() : date.getHours();
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
  var d = new Date(date.getTime() + date.offset);
  if (!format) {
    return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + offsetToString(date.offset);
  } else if (format.length === 1) {
    switch (format) {
      case "D":
      case "d":
        return toHalfUTCString(d, "first");
      case "T":
      case "t":
        return toHalfUTCString(d, "second");
      case "O":
      case "o":
        return toISOStringWithOffset(d, date.offset);
      default:
        throw new Error("Unrecognized Date print format");
    }
  } else {
    return toStringWithCustomFormat(d, format, true);
  }
}
function toStringWithKind(date, format) {
  var utc = date.kind === 1 /* UTC */;
  if (!format) {
    return utc ? date.toUTCString() : date.toLocaleString();
  } else if (format.length === 1) {
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
  } else {
    return toStringWithCustomFormat(date, format, utc);
  }
}
function toString(date, format) {
  return date.offset != null ? toStringWithOffset(date, format) : toStringWithKind(date, format);
}
function DateTime(value, kind) {
  kind = kind == null ? 0 /* Unspecified */ : kind;
  var d = new Date(value);
  d.kind = kind | 0;
  return d;
}
function minValue() {
  // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
  return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
  // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
  return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(str) {
  var date = new Date(str);
  if (isNaN(date.getTime())) {
    // Check if this is a time-only string, which JS Date parsing cannot handle (see #1045)
    if (/^(?:[01]?\d|2[0-3]):(?:[0-5]?\d)(?::[0-5]?\d(?:\.\d+)?)?(?:\s*[AaPp][Mm])?$/.test(str)) {
      var d = new Date();
      date = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + str);
    } else {
      throw new Error("The string is not a valid Date.");
    }
  }
  return date;
}
function parse(str) {
  var detectUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var date = parseRaw(str);
  var offset = offsetRegex.exec(str);
  // .NET always parses DateTime as Local if there's offset info (even "Z")
  // Newtonsoft.Json uses UTC if the offset is "Z"
  var kind = offset != null ? detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */ : 0 /* Unspecified */;
  return DateTime(date.getTime(), kind);
}
function tryParse(v) {
  try {
    return [true, parse(v)];
  } catch (_err) {
    return [false, minValue()];
  }
}
function offset(date) {
  var date1 = date;
  return typeof date1.offset === "number" ? date1.offset : date.kind === 1 /* UTC */
  ? 0 : date.getTimezoneOffset() * -60000;
}
function create(year, month, day) {
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var kind = arguments[7];

  var dateValue = kind === 1 /* UTC */
  ? Date.UTC(year, month - 1, day, h, m, s, ms) : new Date(year, month - 1, day, h, m, s, ms).getTime();
  if (isNaN(dateValue)) {
    throw new Error("The parameters describe an unrepresentable Date.");
  }
  var date = DateTime(dateValue, kind);
  if (year <= 99) {
    date.setFullYear(year, month - 1, day);
  }
  return date;
}
function now() {
  return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
  return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
  return date(now());
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
  return month === 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 === 0 ? 31 : 30 : month % 2 === 0 ? 30 : 31;
}
function toUniversalTime(date) {
  return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
  return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function timeOfDay(d) {
  return hour(d) * 3600000 + minute(d) * 60000 + second(d) * 1000 + millisecond(d);
}
function date(d) {
  return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
  return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
  return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
  var _year = year(d);
  var _month = month(d);
  var _day = day(d);
  for (var i = 1; i < _month; i++) {
    _day += daysInMonth(_year, i);
  }
  return _day;
}
function add(d, ts) {
  return DateTime(d.getTime() + ts, d.kind);
}
function addDays(d, v) {
  return DateTime(d.getTime() + v * 86400000, d.kind);
}
function addHours(d, v) {
  return DateTime(d.getTime() + v * 3600000, d.kind);
}
function addMinutes(d, v) {
  return DateTime(d.getTime() + v * 60000, d.kind);
}
function addSeconds(d, v) {
  return DateTime(d.getTime() + v * 1000, d.kind);
}
function addMilliseconds(d, v) {
  return DateTime(d.getTime() + v, d.kind);
}
function addYears(d, v) {
  var newMonth = month(d);
  var newYear = year(d) + v;
  var _daysInMonth = daysInMonth(newYear, newMonth);
  var newDay = Math.min(_daysInMonth, day(d));
  return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
  var newMonth = month(d) + v;
  var newMonth_ = 0;
  var yearOffset = 0;
  if (newMonth > 12) {
    newMonth_ = newMonth % 12;
    yearOffset = Math.floor(newMonth / 12);
    newMonth = newMonth_;
  } else if (newMonth < 1) {
    newMonth_ = 12 + newMonth % 12;
    yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
    newMonth = newMonth_;
  }
  var newYear = year(d) + yearOffset;
  var _daysInMonth = daysInMonth(newYear, newMonth);
  var newDay = Math.min(_daysInMonth, day(d));
  return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
  return typeof that === "number" ? DateTime(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
  return d.toDateString();
}
function toShortDateString(d) {
  return d.toLocaleDateString();
}
function toLongTimeString(d) {
  return d.toLocaleTimeString();
}
function toShortTimeString(d) {
  return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
  return d1.getTime() === d2.getTime();
}
function compare(x, y) {
  var xtime = x.getTime();
  var ytime = y.getTime();
  return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
var compareTo = exports.compareTo = compare;
function op_Addition(x, y) {
  return add(x, y);
}
function op_Subtraction(x, y) {
  return subtract(x, y);
}
function isDaylightSavingTime(x) {
  var jan = new Date(x.getFullYear(), 0, 1);
  var jul = new Date(x.getFullYear(), 6, 1);
  return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
  return Math.min(janOffset, julOffset) === tOffset;
}
//# sourceMappingURL=Date.js.map