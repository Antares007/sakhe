"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gcd = gcd;
exports.lcm = lcm;
exports.mkRational = mkRational;
exports.intToRational = intToRational;
exports.AddRational = AddRational;
exports.NegRational = NegRational;
exports.MulRational = MulRational;
exports.DivRational = DivRational;
exports.AbsRational = AbsRational;
exports.RationalToString = RationalToString;
exports.GcdRational = GcdRational;
exports.GetNumerator = GetNumerator;
exports.GetDenominator = GetDenominator;
exports.SignRational = SignRational;
exports.OneRational = exports.ZeroRational = exports.Rational = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _BigInt = require("../fable-core.2.0.3/BigInt");

var _String = require("../fable-core.2.0.3/String");

const Rational = (0, _Types.declare)(function Rational(arg1, arg2) {
  this.numerator = arg1;
  this.denominator = arg2;
}, _Types.Record);
exports.Rational = Rational;

function gcd(a, b) {
  gcd: while (true) {
    if ((0, _BigInt.equals)(b, (0, _BigInt.get_Zero)())) {
      return a;
    } else {
      const $var$$1 = b;
      b = (0, _BigInt.op_Modulus)(a, b);
      a = $var$$1;
      continue gcd;
    }
  }
}

function lcm(a$$1, b$$1) {
  return (0, _BigInt.op_Division)((0, _BigInt.op_Multiply)(a$$1, b$$1), gcd(a$$1, b$$1));
}

function mkRational(p, q) {
  let patternInput;

  if ((0, _BigInt.equals)(q, (0, _BigInt.get_Zero)())) {
    throw new Error();
  }

  const g = gcd(q, p);
  patternInput = [(0, _BigInt.op_Division)(p, g), (0, _BigInt.op_Division)(q, g)];
  const patternInput$$1 = (0, _BigInt.compare)(patternInput[1], (0, _BigInt.get_Zero)()) > 0 ? [patternInput[0], patternInput[1]] : [(0, _BigInt.op_UnaryNegation)(patternInput[0]), (0, _BigInt.op_UnaryNegation)(patternInput[1])];
  return new Rational(patternInput$$1[0], patternInput$$1[1]);
}

function intToRational(p$$3) {
  return mkRational((0, _BigInt.fromInt32)(p$$3), (0, _BigInt.get_One)());
}

const ZeroRational = mkRational((0, _BigInt.get_Zero)(), (0, _BigInt.get_One)());
exports.ZeroRational = ZeroRational;
const OneRational = mkRational((0, _BigInt.get_One)(), (0, _BigInt.get_One)());
exports.OneRational = OneRational;

function AddRational(m, n) {
  const d = gcd(m.denominator, n.denominator);
  const m$0027 = (0, _BigInt.op_Division)(m.denominator, d);
  const n$0027 = (0, _BigInt.op_Division)(n.denominator, d);
  return mkRational((0, _BigInt.op_Addition)((0, _BigInt.op_Multiply)(m.numerator, n$0027), (0, _BigInt.op_Multiply)(n.numerator, m$0027)), (0, _BigInt.op_Multiply)(m.denominator, n$0027));
}

function NegRational(m$$1) {
  return mkRational((0, _BigInt.op_UnaryNegation)(m$$1.numerator), m$$1.denominator);
}

function MulRational(m$$2, n$$1) {
  return mkRational((0, _BigInt.op_Multiply)(m$$2.numerator, n$$1.numerator), (0, _BigInt.op_Multiply)(m$$2.denominator, n$$1.denominator));
}

function DivRational(m$$3, n$$2) {
  return mkRational((0, _BigInt.op_Multiply)(m$$3.numerator, n$$2.denominator), (0, _BigInt.op_Multiply)(m$$3.denominator, n$$2.numerator));
}

function AbsRational(m$$4) {
  return mkRational((0, _BigInt.abs)(m$$4.numerator), m$$4.denominator);
}

function RationalToString(m$$5) {
  if ((0, _BigInt.equals)(m$$5.denominator, (0, _BigInt.get_One)())) {
    return m$$5.numerator.toString();
  } else {
    return (0, _String.toText)((0, _String.printf)("(%A/%A)"))(m$$5.numerator)(m$$5.denominator);
  }
}

function GcdRational(m$$6, n$$3) {
  return mkRational(gcd(m$$6.numerator, n$$3.numerator), lcm(m$$6.denominator, n$$3.denominator));
}

function GetNumerator(p$$4) {
  return (0, _BigInt.toInt32)(p$$4.numerator);
}

function GetDenominator(p$$5) {
  return (0, _BigInt.toInt32)(p$$5.denominator);
}

function SignRational(p$$6) {
  if ((0, _BigInt.compare)(p$$6.numerator, (0, _BigInt.get_Zero)()) < 0) {
    return -1 | 0;
  } else if ((0, _BigInt.compare)(p$$6.numerator, (0, _BigInt.get_Zero)()) > 0) {
    return 1;
  } else {
    return 0;
  }
}