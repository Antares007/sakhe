"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsInEditDistanceProximity = IsInEditDistanceProximity;
exports.FilterPredictions = FilterPredictions;
exports.FormatPredictions = FormatPredictions;
exports.minStringLengthForThreshold = exports.highConfidenceThreshold = exports.minThresholdForSuggestions = exports.maxSuggestions = void 0;

var _EditDistance = require("../utils/EditDistance");

var _String = require("../fable-core.2.0.3/String");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

var _FSComp = require("../codegen/FSComp");

const maxSuggestions = 5;
exports.maxSuggestions = maxSuggestions;
const minThresholdForSuggestions = 0.7;
exports.minThresholdForSuggestions = minThresholdForSuggestions;
const highConfidenceThreshold = 0.85;
exports.highConfidenceThreshold = highConfidenceThreshold;
const minStringLengthForThreshold = 3;
exports.minStringLengthForThreshold = minStringLengthForThreshold;

function IsInEditDistanceProximity(idText, suggestion) {
  var x, x$$2;
  const editDistance = (0, _EditDistance.CalcEditDistance)(idText, suggestion) | 0;
  let threshold;
  const matchValue = idText.length | 0;

  if (x = matchValue | 0, x < 5) {
    const x$$1 = matchValue | 0;
    threshold = 1;
  } else if (x$$2 = matchValue | 0, x$$2 < 7) {
    const x$$3 = matchValue | 0;
    threshold = 2;
  } else {
    const x$$4 = matchValue | 0;
    threshold = ~~(x$$4 / 4) + 1;
  }

  return editDistance <= threshold;
}

function FilterPredictions(idText$$1, suggestionF) {
  var projection;
  const uppercaseText = idText$$1.toUpperCase();
  const allSuggestions = suggestionF();

  const demangle = function demangle(nm) {
    if ((0, _String.startsWith)(nm, "( ", 4) ? (0, _String.endsWith)(nm, " )", 4) : false) {
      const cleanName = nm.slice(2, nm.length - 3 + 1);
      return cleanName;
    } else {
      return nm;
    }
  };

  const IsOperatorName = function IsOperatorName(name) {
    if (!((0, _String.startsWith)(name, "( ", 4) ? (0, _String.endsWith)(name, " )", 4) : false)) {
      return false;
    } else {
      const name$$1 = name.slice(2, name.length - 3 + 1);
      return (0, _Seq.forAll)(function predicate(c) {
        return c !== " ";
      }, name$$1.split(""));
    }
  };

  if (allSuggestions.has(idText$$1)) {
    return (0, _Types.L)();
  } else {
    return (0, _List.ofSeq)((0, _Seq.map)(function mapping$$1(tuple$$1) {
      return tuple$$1[1];
    }, (0, _Seq.takeWhile)(function predicate$$1(tupledArg) {
      return tupledArg[0] < maxSuggestions;
    }, (0, _Seq.mapIndexed)(function mapping(i, x$$11) {
      return [i, x$$11];
    }, (projection = function projection(tuple) {
      return tuple[0];
    }, function (source$$2) {
      return (0, _Seq.sortWith)(function ($x$$1, $y$$2) {
        return -(0, _Util.comparePrimitives)(projection($x$$1), projection($y$$2));
      }, source$$2);
    })((0, _Seq.choose)(function chooser(suggestion$$1) {
      if (IsOperatorName(suggestion$$1) ? true : (0, _String.startsWith)(suggestion$$1, "_", 4)) {
        return null;
      } else {
        const suggestion$$2 = demangle(suggestion$$1);
        const suggestedText = suggestion$$2.toUpperCase();
        const similarity = (0, _EditDistance.JaroWinklerDistance)(uppercaseText, suggestedText);

        if (similarity >= highConfidenceThreshold ? true : (0, _String.endsWith)(suggestion$$2, "." + idText$$1, 4)) {
          return [similarity, suggestion$$2];
        } else if (similarity < minThresholdForSuggestions ? suggestedText.length > minStringLengthForThreshold : false) {
          return null;
        } else if (IsInEditDistanceProximity(uppercaseText, suggestedText)) {
          return [similarity, suggestion$$2];
        } else {
          return null;
        }
      }
    }, allSuggestions))))));
  }
}

function FormatPredictions(normalizeF, predictions) {
  if (predictions.tail == null) {
    return "";
  } else {
    const suggestions = (0, _String.join)("", ...(0, _List.map)(function (arg20) {
      return (0, _String.toText)((0, _String.printf)("%s   %s"))("\n")(arg20);
    }, (0, _List.map)(function mapping$$2($arg$$3) {
      return normalizeF($arg$$3[1]);
    }, predictions)));
    return " " + (0, _FSComp.SR$$$undefinedNameSuggestionsIntro)() + suggestions;
  }
}