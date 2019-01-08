"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = compare;
exports.equals = equals;
exports.abs = abs;
exports.round = round;
exports.truncate = truncate;
exports.ceil = ceil;
exports.floor = floor;
exports.pow = pow;
exports.sqrt = sqrt;
exports.op_Subtraction = op_Subtraction;
exports.op_Modulus = op_Modulus;
exports.op_Addition = op_Addition;
exports.op_Division = op_Division;
exports.op_Multiply = op_Multiply;
exports.op_UnaryNegation = op_UnaryNegation;
exports.toString = toString;
exports.tryParse = tryParse;
exports.parse = parse;
exports.toNumber = toNumber;
exports.getBytes = getBytes;
exports.fromBytes = fromBytes;
exports.get_MinValue = exports.get_MaxValue = exports.get_MinusOne = exports.get_One = exports.get_Zero = exports.default = void 0;

var _big = _interopRequireDefault(require("../lib/big"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _big.default;
exports.default = _default;
const get_Zero = new _big.default(0);
exports.get_Zero = get_Zero;
const get_One = new _big.default(1);
exports.get_One = get_One;
const get_MinusOne = new _big.default(-1);
exports.get_MinusOne = get_MinusOne;
const get_MaxValue = new _big.default("79228162514264337593543950335");
exports.get_MaxValue = get_MaxValue;
const get_MinValue = new _big.default("-79228162514264337593543950335");
exports.get_MinValue = get_MinValue;

function compare(x, y) {
  return x.cmp(y);
}

function equals(x, y) {
  return !x.cmp(y);
}

function abs(x) {
  return x.abs();
}

function round(x, digits = 0) {
  return x.round(digits, x.cmp(0) >= 0 ? 1
  /* ROUND_HALF_UP */
  : 2
  /* ROUND_HALF_EVEN */
  );
}

function truncate(x) {
  return x.round(0, 0
  /* ROUND_DOWN */
  );
}

function ceil(x) {
  return x.round(0, x.cmp(0) >= 0 ? 3
  /* ROUND_UP */
  : 0
  /* ROUND_DOWN */
  );
}

function floor(x) {
  return x.round(0, x.cmp(0) >= 0 ? 0
  /* ROUND_DOWN */
  : 3
  /* ROUND_UP */
  );
}

function pow(x, n) {
  return x.pow(n);
}

function sqrt(x) {
  return x.sqrt();
}

function op_Subtraction(x, y) {
  return x.sub(y);
}

function op_Modulus(x, y) {
  return x.mod(y);
}

function op_Addition(x, y) {
  return x.add(y);
}

function op_Division(x, y) {
  return x.div(y);
}

function op_Multiply(x, y) {
  return x.mul(y);
}

function op_UnaryNegation(x) {
  const x2 = new _big.default(x);
  x2.s = -x2.s || 0;
  return x2;
}

function toString(x) {
  return x.toString();
}

function tryParse(str) {
  try {
    return [true, new _big.default(str.trim())];
  } catch (_a) {
    return [false, get_Zero];
  }
}

function parse(str) {
  const [ok, value] = tryParse(str);

  if (ok) {
    return value;
  } else {
    throw new Error("Input string was not in a correct format.");
  }
}

function toNumber(x) {
  return +x;
} // tslint:disable
// From https://github.com/bridgedotnet/Bridge/blob/e99e7eab5eda0f9ef74e11fbc3aebd3c24e8c0b1/Bridge/Resources/Decimal.js#L516
// https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md
// tslint:enable


function getBytes(x) {
  const s = x.s;
  const e = x.e;
  const d = x.c;
  const bytes = new Uint8Array(23);
  bytes[0] = s & 255;
  bytes[1] = e;

  if (d && d.length > 0) {
    bytes[2] = d.length * 4;

    for (let i = 0; i < d.length; i++) {
      bytes[i * 4 + 3] = d[i] & 255;
      bytes[i * 4 + 4] = d[i] >> 8 & 255;
      bytes[i * 4 + 5] = d[i] >> 16 & 255;
      bytes[i * 4 + 6] = d[i] >> 24 & 255;
    }
  } else {
    bytes[2] = 0;
  }

  return bytes;
}

function fromBytes(bytes) {
  const value = new _big.default(0);
  const s = bytes[0] & 255;
  const e = bytes[1];
  const ln = bytes[2];
  const d = [];
  value.s = s;
  value.e = e;

  if (ln > 0) {
    for (let i = 3; i < ln + 3;) {
      d.push(bytes[i] | bytes[i + 1] << 8 | bytes[i + 2] << 16 | bytes[i + 3] << 24);
      i = i + 4;
    }
  }

  value.c = d;
  return value;
}