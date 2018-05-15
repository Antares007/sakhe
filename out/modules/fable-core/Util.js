"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectRef = exports.Function = exports.Array = exports.Unit = exports.Any = exports.NonDeclaredType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Option = Option;
exports.Tuple = Tuple;
exports.GenericParam = GenericParam;
exports.Interface = Interface;
exports.makeGeneric = makeGeneric;
exports.isGeneric = isGeneric;
exports.getDefinition = getDefinition;
exports.extendInfo = extendInfo;
exports.hasInterface = hasInterface;
exports.getPropertyNames = getPropertyNames;
exports.isArray = isArray;
exports.toString = toString;
exports.getHashCode = getHashCode;
exports.hash = hash;
exports.equals = equals;
exports.comparePrimitives = comparePrimitives;
exports.compare = compare;
exports.lessThan = lessThan;
exports.lessOrEqual = lessOrEqual;
exports.greaterThan = greaterThan;
exports.greaterOrEqual = greaterOrEqual;
exports.equalsRecords = equalsRecords;
exports.compareRecords = compareRecords;
exports.equalsUnions = equalsUnions;
exports.compareUnions = compareUnions;
exports.createDisposable = createDisposable;
exports.createAtom = createAtom;
exports.createObj = createObj;
exports.toPlainJsObj = toPlainJsObj;
exports.jsOptions = jsOptions;
exports.round = round;
exports.sign = sign;
exports.randomNext = randomNext;
exports.applyOperator = applyOperator;
exports.unescapeDataString = unescapeDataString;
exports.escapeDataString = escapeDataString;
exports.escapeUriString = escapeUriString;
exports.clear = clear;

var _Date = require("./Date");

var _Symbol = require("./Symbol");

var _Symbol2 = _interopRequireDefault(_Symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonDeclaredType = exports.NonDeclaredType = function () {
  function NonDeclaredType(kind, definition, generics) {
    _classCallCheck(this, NonDeclaredType);

    this.kind = kind;
    this.definition = definition;
    this.generics = generics;
  }

  _createClass(NonDeclaredType, [{
    key: "Equals",
    value: function Equals(other) {
      if (this.kind === other.kind && this.definition === other.definition) {
        return _typeof(this.generics) === "object"
        // equalsRecords should also work for Type[] (tuples)
        ? equalsRecords(this.generics, other.generics) : this.generics === other.generics;
      }
      return false;
    }
  }]);

  return NonDeclaredType;
}();

var Any = exports.Any = new NonDeclaredType("Any");
var Unit = exports.Unit = new NonDeclaredType("Unit");
function Option(t) {
  return new NonDeclaredType("Option", null, [t]);
}
function FableArray(t) {
  var isTypedArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var def = null;
  var genArg = null;
  if (isTypedArray) {
    def = t;
  } else {
    genArg = t;
  }
  return new NonDeclaredType("Array", def, [genArg]);
}
exports.Array = FableArray;
function Tuple(types) {
  return new NonDeclaredType("Tuple", null, types);
}
function FableFunction(types) {
  return new NonDeclaredType("Function", null, types);
}
exports.Function = FableFunction;
function GenericParam(definition) {
  return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
  return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
  return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
  return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
/**
 * Returns the parent if this is a declared generic type or the argument otherwise.
 * Attention: Unlike .NET this doesn't throw an exception if type is not generic.
 */
function getDefinition(typ) {
  return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
  var parent = Object.getPrototypeOf(cons.prototype);
  if (typeof parent[_Symbol2.default.reflection] === "function") {
    var newInfo = {};
    var parentInfo = parent[_Symbol2.default.reflection]();
    Object.getOwnPropertyNames(info).forEach(function (k) {
      var i = info[k];
      if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object") {
        newInfo[k] = Array.isArray(i) ? (parentInfo[k] || []).concat(i) : Object.assign(parentInfo[k] || {}, i);
      } else {
        newInfo[k] = i;
      }
    });
    return newInfo;
  }
  return info;
}
function hasInterface(obj, interfaceName) {
  if (interfaceName === "System.Collections.Generic.IEnumerable") {
    return typeof obj[Symbol.iterator] === "function";
  } else if (typeof obj[_Symbol2.default.reflection] === "function") {
    var interfaces = obj[_Symbol2.default.reflection]().interfaces;
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
  var propertyMap = typeof obj[_Symbol2.default.reflection] === "function" ? obj[_Symbol2.default.reflection]().properties || [] : obj;
  return Object.getOwnPropertyNames(propertyMap);
}
function isArray(obj) {
  return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function toString(obj) {
  var quoteStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  function isObject(x) {
    return x !== null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
  }
  if (obj == null || typeof obj === "number") {
    return String(obj);
  }
  if (typeof obj === "string") {
    return quoteStrings ? JSON.stringify(obj) : obj;
  }
  if (obj instanceof Date) {
    return (0, _Date.toString)(obj);
  }
  if (typeof obj.ToString === "function") {
    return obj.ToString();
  }
  if (hasInterface(obj, "FSharpUnion")) {
    var info = obj[_Symbol2.default.reflection]();
    var uci = info.cases[obj.tag];
    switch (uci.length) {
      case 1:
        return uci[0];
      case 2:
        // For simplicity let's always use parens, in .NET they're ommitted in some cases
        return uci[0] + " (" + toString(obj.data, true) + ")";
      default:
        return uci[0] + " (" + obj.data.map(function (x) {
          return toString(x, true);
        }).join(",") + ")";
    }
  }
  try {
    return JSON.stringify(obj, function (k, v) {
      return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v && typeof v.ToString === "function" ? toString(v) : v;
    });
  } catch (err) {
    // Fallback for objects with circular references
    return "{" + Object.getOwnPropertyNames(obj).map(function (k) {
      return k + ": " + String(obj[k]);
    }).join(", ") + "}";
  }
}

var ObjectRef = exports.ObjectRef = function () {
  function ObjectRef() {
    _classCallCheck(this, ObjectRef);
  }

  _createClass(ObjectRef, null, [{
    key: "id",
    value: function id(o) {
      if (!ObjectRef.idMap.has(o)) {
        ObjectRef.idMap.set(o, ++ObjectRef.count);
      }
      return ObjectRef.idMap.get(o);
    }
  }]);

  return ObjectRef;
}();

ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function getHashCode(x) {
  return ObjectRef.id(x) * 2654435761 | 0;
}
function hash(x) {
  if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === _typeof(1)) {
    return x * 2654435761 | 0;
  }
  if (x != null && typeof x.GetHashCode === "function") {
    return x.GetHashCode();
  } else {
    var s = toString(x);
    var h = 5381;
    var i = 0;
    var len = s.length;
    while (i < len) {
      h = h * 33 ^ s.charCodeAt(i++);
    }
    return h;
  }
}
function equals(x, y) {
  // Optimization if they are referencially equal
  if (x === y) {
    return true;
  } else if (x == null) {
    return y == null;
  } else if (y == null) {
    return false;
  } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object" || (typeof y === "undefined" ? "undefined" : _typeof(y)) !== "object") {
    return x === y;
    // Equals override or IEquatable implementation
  } else if (typeof x.Equals === "function") {
    return x.Equals(y);
  } else if (typeof y.Equals === "function") {
    return y.Equals(x);
  } else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
    return false;
  } else if (Array.isArray(x)) {
    if (x.length !== y.length) {
      return false;
    }
    for (var i = 0; i < x.length; i++) {
      if (!equals(x[i], y[i])) {
        return false;
      }
    }
    return true;
  } else if (ArrayBuffer.isView(x)) {
    if (x.byteLength !== y.byteLength) {
      return false;
    }
    var dv1 = new DataView(x.buffer);
    var dv2 = new DataView(y.buffer);
    for (var _i = 0; _i < x.byteLength; _i++) {
      if (dv1.getUint8(_i) !== dv2.getUint8(_i)) {
        return false;
      }
    }
    return true;
  } else if (x instanceof Date) {
    return x.getTime() === y.getTime();
  } else {
    return false;
  }
}
function comparePrimitives(x, y) {
  return x === y ? 0 : x < y ? -1 : 1;
}
function compare(x, y) {
  // Optimization if they are referencially equal
  if (x === y) {
    return 0;
  } else if (x == null) {
    return y == null ? 0 : -1;
  } else if (y == null) {
    return 1; // everything is bigger than null
  } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object" || (typeof y === "undefined" ? "undefined" : _typeof(y)) !== "object") {
    return x === y ? 0 : x < y ? -1 : 1;
    // Some types (see Long.ts) may just implement the function and not the interface
    // else if (hasInterface(x, "System.IComparable"))
  } else if (typeof x.CompareTo === "function") {
    return x.CompareTo(y);
  } else if (typeof y.CompareTo === "function") {
    return y.CompareTo(x) * -1;
  } else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
    return -1;
  } else if (Array.isArray(x)) {
    if (x.length !== y.length) {
      return x.length < y.length ? -1 : 1;
    }
    for (var i = 0, j = 0; i < x.length; i++) {
      j = compare(x[i], y[i]);
      if (j !== 0) {
        return j;
      }
    }
    return 0;
  } else if (ArrayBuffer.isView(x)) {
    if (x.byteLength !== y.byteLength) {
      return x.byteLength < y.byteLength ? -1 : 1;
    }
    var dv1 = new DataView(x.buffer);
    var dv2 = new DataView(y.buffer);
    for (var _i2 = 0, b1 = 0, b2 = 0; _i2 < x.byteLength; _i2++) {
      b1 = dv1.getUint8(_i2), b2 = dv2.getUint8(_i2);
      if (b1 < b2) {
        return -1;
      }
      if (b1 > b2) {
        return 1;
      }
    }
    return 0;
  } else if (x instanceof Date) {
    return (0, _Date.compare)(x, y);
  } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === "object") {
    var xhash = hash(x);
    var yhash = hash(y);
    if (xhash === yhash) {
      return equals(x, y) ? 0 : -1;
    } else {
      return xhash < yhash ? -1 : 1;
    }
  } else {
    return x < y ? -1 : 1;
  }
}
function lessThan(x, y) {
  return compare(x, y) < 0;
}
function lessOrEqual(x, y) {
  return compare(x, y) <= 0;
}
function greaterThan(x, y) {
  return compare(x, y) > 0;
}
function greaterOrEqual(x, y) {
  return compare(x, y) >= 0;
}
function equalsRecords(x, y) {
  // Optimization if they are referencially equal
  if (x === y) {
    return true;
  } else {
    var keys = getPropertyNames(x);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        if (!equals(x[key], y[key])) {
          return false;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  }
}
function compareRecords(x, y) {
  // Optimization if they are referencially equal
  if (x === y) {
    return 0;
  } else {
    var keys = getPropertyNames(x);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        var res = compare(x[key], y[key]);
        if (res !== 0) {
          return res;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return 0;
  }
}
function equalsUnions(x, y) {
  return x === y || x.tag === y.tag && equals(x.data, y.data);
}
function compareUnions(x, y) {
  if (x === y) {
    return 0;
  } else {
    var res = x.tag < y.tag ? -1 : x.tag > y.tag ? 1 : 0;
    return res !== 0 ? res : compare(x.data, y.data);
  }
}
function createDisposable(f) {
  return _defineProperty({
    Dispose: f
  }, _Symbol2.default.reflection, function () {
    return { interfaces: ["System.IDisposable"] };
  });
}
// tslint forbids non-arrow functions, but it's
// necessary here to use the arguments object
/* tslint:disable */
function createAtom(value) {
  var atom = value;
  return function () {
    return arguments.length === 0 ? atom : (atom = arguments[0], void 0);
  };
}
/* tslint:enable */
var CaseRules = {
  None: 0,
  LowerFirst: 1
};
function isList(o) {
  if (o != null) {
    if (typeof o[_Symbol2.default.reflection] === "function") {
      return o[_Symbol2.default.reflection]().type === "Microsoft.FSharp.Collections.FSharpList";
    }
  }
  return false;
}
function createObj(fields) {
  var caseRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaseRules.None;
  var casesCache = arguments[2];

  var iter = fields[Symbol.iterator]();
  var cur = iter.next();
  var o = {};
  while (!cur.done) {
    var value = cur.value;
    if (Array.isArray(value)) {
      o[value[0]] = value[1];
    } else {
      casesCache = casesCache || new Map();
      var proto = Object.getPrototypeOf(value);
      var cases = casesCache.get(proto);
      if (cases == null) {
        if (typeof proto[_Symbol2.default.reflection] === "function") {
          cases = proto[_Symbol2.default.reflection]().cases;
          casesCache.set(proto, cases);
        }
      }
      var caseInfo = cases != null ? cases[value.tag] : null;
      if (Array.isArray(caseInfo)) {
        var key = caseInfo[0];
        if (caseRule === CaseRules.LowerFirst) {
          key = key[0].toLowerCase() + key.substr(1);
        }
        o[key] = caseInfo.length === 1 ? true : isList(value.data) ? createObj(value.data, caseRule, casesCache) : value.data;
      } else {
        throw new Error("Cannot infer key and value of " + value);
      }
    }
    cur = iter.next();
  }
  return o;
}
function toPlainJsObj(source) {
  if (source != null && source.constructor !== Object) {
    var target = {};
    var props = Object.getOwnPropertyNames(source);
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = props[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var p = _step3.value;

        target[p] = source[p];
      }
      // Copy also properties from prototype, see #192
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var proto = Object.getPrototypeOf(source);
    if (proto != null) {
      props = Object.getOwnPropertyNames(proto);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = props[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _p = _step4.value;

          var prop = Object.getOwnPropertyDescriptor(proto, _p);
          if (prop.value) {
            target[_p] = prop.value;
          } else if (prop.get) {
            target[_p] = prop.get.apply(source);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
    return target;
  } else {
    return source;
  }
}
function jsOptions(mutator) {
  var opts = {};
  mutator(opts);
  return opts;
}
function round(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var m = Math.pow(10, digits);
  var n = +(digits ? value * m : value).toFixed(8);
  var i = Math.floor(n);
  var f = n - i;
  var e = 1e-8;
  var r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
  return digits ? r / m : r;
}
function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function applyOperator(x, y, operator) {
  function getMethod(obj) {
    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
      var cons = Object.getPrototypeOf(obj).constructor;
      if (typeof cons[operator] === "function") {
        return cons[operator];
      }
    }
    return null;
  }
  var meth = getMethod(x);
  if (meth != null) {
    return meth(x, y);
  }
  meth = getMethod(y);
  if (meth != null) {
    return meth(x, y);
  }
  switch (operator) {
    case "op_Addition":
      return x + y;
    case "op_Subtraction":
      return x - y;
    case "op_Multiply":
      return x * y;
    case "op_Division":
      return x / y;
    case "op_Modulus":
      return x % y;
    case "op_LeftShift":
      return x << y;
    case "op_RightShift":
      return x >> y;
    case "op_BitwiseAnd":
      return x & y;
    case "op_BitwiseOr":
      return x | y;
    case "op_ExclusiveOr":
      return x ^ y;
    case "op_LogicalNot":
      return x + y;
    case "op_UnaryNegation":
      return !x;
    case "op_BooleanAnd":
      return x && y;
    case "op_BooleanOr":
      return x || y;
    default:
      return null;
  }
}
function unescapeDataString(s) {
  // https://stackoverflow.com/a/4458580/524236
  return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function escapeDataString(s) {
  return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function escapeUriString(s) {
  return encodeURI(s);
}
// ICollection.Clear method can be called on IDictionary
// too so we need to make a runtime check (see #1120)
function clear(col) {
  if (Array.isArray(col)) {
    col.splice(0);
  } else {
    col.clear();
  }
}