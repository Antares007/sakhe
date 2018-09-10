;require._modules["/fable-core.2.0.0-beta-004\Int32.js"] = (function() { var __filename = "/fable-core.2.0.0-beta-004\Int32.js"; var __dirname = "/fable-core.2.0.0-beta-004"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /fable-core.2.0.0-beta-004\Int32.js  == */ var __module__ = function() { 
 const parseRadix = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
const invalidRadix2 = /[^01]/;
const invalidRadix8 = /[^0-7]/;
const invalidRadix10 = /[^0-9]/;
export function isValid(s, radix) {
  const res = parseRadix.exec(s);

  if (res != null) {
    if (radix == null) {
      switch (res[2]) {
        case "0b":
        case "0B":
          radix = 2;
          break;

        case "0o":
        case "0O":
          radix = 8;
          break;

        case "0x":
        case "0X":
          radix = 16;
          break;

        default:
          radix = 10;
          break;
      }
    }

    switch (radix) {
      case 2:
        return invalidRadix2.test(res[3]) ? null : [res, 2];

      case 8:
        return invalidRadix8.test(res[3]) ? null : [res, 8];

      case 10:
        return invalidRadix10.test(res[3]) ? null : [res, 10];

      case 16:
        return [res, 16];

      default:
        throw new Error("Invalid Base.");
    }
  }

  return null;
} // TODO does this perfectly match the .NET behavior ?

export function tryParse(s, radix, initial) {
  const a = isValid(s, radix);

  if (a !== null) {
    const [[, prefix,, digits], radix_] = a;
    const v = parseInt((prefix || "") + digits, radix_);

    if (!Number.isNaN(v)) {
      return [true, v];
    }
  }

  return [false, initial];
}
export function parse(s, radix) {
  const a = tryParse(s, radix, 0);

  if (a[0]) {
    return a[1];
  } else {
    throw new Error("Input string was not in a correct format.");
  }
} 
 }; /* ==  End source for module /fable-core.2.0.0-beta-004\Int32.js  == */ return module; }());;