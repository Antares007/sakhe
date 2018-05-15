"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Choice = require("./fable-core/Choice");

var _Choice2 = _interopRequireDefault(_Choice);

var _Option = require("./fable-core/Option");

var _most = require("./most");

var _m = require("./m");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var T = exports.T = function () {
  function T(tag, data) {
    _classCallCheck(this, T);

    this.tag = tag | 0;
    this.data = data;
  }

  _createClass(T, [{
    key: _Symbol3.default.reflection,
    value: function value() {
      return {
        type: "Sakhe.Dom.T",
        interfaces: ["FSharpUnion"],
        cases: [["Absurd", (0, _Util.Function)([_Util.Unit, (0, _Util.GenericParam)("a")])], ["Prove", (0, _Util.Function)([(0, _Util.GenericParam)("a"), (0, _Util.Option)((0, _Util.GenericParam)("b"))])]]
      };
    }
  }]);

  return T;
}();

(0, _Symbol2.setType)("Sakhe.Dom.T", T);

function _IndexOutOfBounds_ProvedNode_FoundNode_OtherNode_(index, prove, parentElement) {
  var childNodes = parentElement.childNodes;
  var length = ~~childNodes.length | 0;

  if (index >= length) {
    return new _Choice2.default(0, null);
  } else {
    var childAtIndex = childNodes[index];
    var matchValue = prove(childAtIndex);

    if (matchValue == null) {
      var findNode = function findNode(index_1) {
        findNode: while (true) {
          if (index_1 < length) {
            var matchValue_1 = prove(childNodes[index_1]);

            if (matchValue_1 == null) {
              index_1 = index_1 + 1;
              continue findNode;
            } else {
              return (0, _Option.makeSome)((0, _Option.getValue)(matchValue_1));
            }
          } else {
            return null;
          }
        }
      };

      var matchValue_2 = findNode(index);

      if (matchValue_2 == null) {
        return new _Choice2.default(3, childAtIndex);
      } else {
        return new _Choice2.default(2, [(0, _Option.getValue)(matchValue_2), childAtIndex]);
      }
    } else {
      return new _Choice2.default(1, (0, _Option.getValue)(matchValue));
    }
  }
}

var disposable = _most.DisposableModule.require;

function tree(pith) {
  var ring = function ring(pith_1, o) {
    var c = 0;
    pith_1(_defineProperty({
      Node: function Node(_arg1, pith_2) {
        var index = c | 0;
        c = c + 1 | 0;
        o(_m.most.map((0, _CurriedLambda2.default)(function (childNodePatch) {
          return function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
              if (f) {
                b = f.call(this, a);
                f = null;
              }

              return b;
            };
          }(function (parentElement) {
            var matchValue = [index, _arg1[1], parentElement];

            var activePatternResult24873 = _IndexOutOfBounds_ProvedNode_FoundNode_OtherNode_(matchValue[0], matchValue[1], matchValue[2]);

            if (activePatternResult24873.tag === 1) {
              childNodePatch(activePatternResult24873.data), void 0;
            } else if (activePatternResult24873.tag === 2) {
              childNodePatch(activePatternResult24873.data[0]);
              parentElement.insertBefore(activePatternResult24873.data[0], activePatternResult24873.data[1]), void 0;
            } else if (activePatternResult24873.tag === 3) {
              var child = _arg1[0]();

              childNodePatch(child);
              parentElement.insertBefore(child, activePatternResult24873.data), void 0;
            } else {
              var child_1 = _arg1[0]();

              childNodePatch(child_1);
              parentElement.insertBefore(child_1, null), void 0;
            }
          });
        }))(tree(pith_2)));
      },
      Leaf: function Leaf(_arg2, s) {
        var index = c | 0;
        c = c + 1 | 0;
        o(_m.most.map((0, _CurriedLambda2.default)(function (childNodePatch) {
          return function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
              if (f) {
                b = f.call(this, a);
                f = null;
              }

              return b;
            };
          }(function (parentElement) {
            var matchValue = [index, _arg2[1], parentElement];

            var activePatternResult24878 = _IndexOutOfBounds_ProvedNode_FoundNode_OtherNode_(matchValue[0], matchValue[1], matchValue[2]);

            if (activePatternResult24878.tag === 1) {
              childNodePatch(activePatternResult24878.data), void 0;
            } else if (activePatternResult24878.tag === 2) {
              childNodePatch(activePatternResult24878.data[0]);
              parentElement.insertBefore(activePatternResult24878.data[0], activePatternResult24878.data[1]), void 0;
            } else if (activePatternResult24878.tag === 3) {
              var child = _arg2[0]();

              childNodePatch(child);
              parentElement.insertBefore(child, activePatternResult24878.data), void 0;
            } else {
              var child_1 = _arg2[0]();

              childNodePatch(child_1);
              parentElement.insertBefore(child_1, null), void 0;
            }
          });
        }))(s));
      },
      Patch: function Patch(s) {
        o(_m.most.map(function ($var3) {
          return function ($var4) {
            (function makeOnce(f) {
              var b;
              return function onceAtoBtoAtoB(a) {
                if (f) {
                  b = f.call(this, a);
                  f = null;
                }

                return b;
              };
            })(function ($var1) {
              return function ($var2) {
                (function (patch, n) {
                  patch(n);
                })($var1, $var2);
              };
            })($var3, $var4);
          };
        })(s));
      }
    }, _Symbol3.default.reflection, function () {
      return {
        interfaces: ["Sakhe.Dom.ILang"]
      };
    }));
    o(_m.most.now(function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function (element) {
      var childNodes = element.childNodes;
      var length = ~~childNodes.length | 0;

      for (var i = c; i <= length - 1; i++) {
        element.removeChild(childNodes[i]), void 0;
      }
    })));
  };

  return _m.most.newStream(function (sink, scheduler) {
    var restore = {
      contents: function contents() {}
    };

    var f = function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function (element_1) {
      var oldNodes = [].concat(_toConsumableArray(element_1.childNodes));

      restore.contents = function () {
        var ref = element_1.childNodes[0];

        for (var i_1 = 0; i_1 <= oldNodes.length - 1; i_1++) {
          element_1.insertBefore(oldNodes[i_1], ref), void 0;
        }

        for (var i_2 = oldNodes.length; i_2 <= ~~element_1.childNodes.length - 1; i_2++) {
          element_1.removeChild(element_1.childNodes[i_2]), void 0;
        }
      };
    });

    var s = _m.most.map(function ($var5) {
      return function ($var6) {
        (function (patch, element_2) {
          f(element_2);
          patch(element_2);
        })($var5, $var6);
      };
    })((0, _m.tree)((0, _CurriedLambda2.default)(function (arg00, arg10) {
      return _m.most.combineArray(function () {
        for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
          list[_key] = arguments[_key];
        }

        return function ($var7) {
          return function ($var8) {
            arg00($var7, $var8);
          };
        }(list);
      }, arg10);
    })(function (ps, e) {
      ps.forEach(function (p) {
        p(e);
      });
    }), _m.most.map(function ($var9) {
      return function ($var10) {
        ring($var9, $var10);
      };
    })(pith)));

    var dispble = _m.most.run(sink)(scheduler, s);

    return disposable.disposeWith(function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function () {
      var d1 = dispble.dispose.bind(dispble);
      d1();
      var dispose = restore.contents;
      dispose();
    }), void 0);
  });
}