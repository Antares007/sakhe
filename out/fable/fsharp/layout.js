"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigableTaggedText$$$$002Ector$$2DA4AF5D = NavigableTaggedText$$$$002Ector$$2DA4AF5D;
exports.NavigableTaggedText$$get_Range = NavigableTaggedText$$get_Range;
exports.mkNav = mkNav;
exports.spaces = spaces;
exports.juxtLeft = juxtLeft;
exports.juxtRight = juxtRight;
exports.isEmptyL = isEmptyL;
exports.mkNode = mkNode;
exports.wordL = wordL;
exports.sepL = sepL;
exports.rightL = rightL;
exports.leftL = leftL;
exports.TaggedTextOps$$$tagActivePatternCase = TaggedTextOps$$$tagActivePatternCase;
exports.TaggedTextOps$$$tagActivePatternResult = TaggedTextOps$$$tagActivePatternResult;
exports.TaggedTextOps$$$tagAlias = TaggedTextOps$$$tagAlias;
exports.TaggedTextOps$$$tagClass = TaggedTextOps$$$tagClass;
exports.TaggedTextOps$$$tagUnion = TaggedTextOps$$$tagUnion;
exports.TaggedTextOps$$$tagUnionCase = TaggedTextOps$$$tagUnionCase;
exports.TaggedTextOps$$$tagDelegate = TaggedTextOps$$$tagDelegate;
exports.TaggedTextOps$$$tagEnum = TaggedTextOps$$$tagEnum;
exports.TaggedTextOps$$$tagEvent = TaggedTextOps$$$tagEvent;
exports.TaggedTextOps$$$tagField = TaggedTextOps$$$tagField;
exports.TaggedTextOps$$$tagInterface = TaggedTextOps$$$tagInterface;
exports.TaggedTextOps$$$tagKeyword = TaggedTextOps$$$tagKeyword;
exports.TaggedTextOps$$$tagLineBreak = TaggedTextOps$$$tagLineBreak;
exports.TaggedTextOps$$$tagLocal = TaggedTextOps$$$tagLocal;
exports.TaggedTextOps$$$tagRecord = TaggedTextOps$$$tagRecord;
exports.TaggedTextOps$$$tagRecordField = TaggedTextOps$$$tagRecordField;
exports.TaggedTextOps$$$tagMethod = TaggedTextOps$$$tagMethod;
exports.TaggedTextOps$$$tagMember = TaggedTextOps$$$tagMember;
exports.TaggedTextOps$$$tagModule = TaggedTextOps$$$tagModule;
exports.TaggedTextOps$$$tagModuleBinding = TaggedTextOps$$$tagModuleBinding;
exports.TaggedTextOps$$$tagNamespace = TaggedTextOps$$$tagNamespace;
exports.TaggedTextOps$$$tagNumericLiteral = TaggedTextOps$$$tagNumericLiteral;
exports.TaggedTextOps$$$tagOperator = TaggedTextOps$$$tagOperator;
exports.TaggedTextOps$$$tagParameter = TaggedTextOps$$$tagParameter;
exports.TaggedTextOps$$$tagProperty = TaggedTextOps$$$tagProperty;
exports.TaggedTextOps$$$tagSpace = TaggedTextOps$$$tagSpace;
exports.TaggedTextOps$$$tagStringLiteral = TaggedTextOps$$$tagStringLiteral;
exports.TaggedTextOps$$$tagStruct = TaggedTextOps$$$tagStruct;
exports.TaggedTextOps$$$tagTypeParameter = TaggedTextOps$$$tagTypeParameter;
exports.TaggedTextOps$$$tagText = TaggedTextOps$$$tagText;
exports.TaggedTextOps$$$tagPunctuation = TaggedTextOps$$$tagPunctuation;
exports.TaggedTextOps$$$tagUnknownEntity = TaggedTextOps$$$tagUnknownEntity;
exports.TaggedTextOps$$$tagUnknownType = TaggedTextOps$$$tagUnknownType;
exports.aboveL = aboveL;
exports.tagAttrL = tagAttrL;
exports.apply2 = apply2;
exports.op_HatHat = op_HatHat;
exports.op_PlusPlus = op_PlusPlus;
exports.op_MinusMinus = op_MinusMinus;
exports.op_MinusMinusMinus = op_MinusMinusMinus;
exports.op_MinusMinusMinusMinus = op_MinusMinusMinusMinus;
exports.op_MinusMinusMinusMinusMinus = op_MinusMinusMinusMinusMinus;
exports.op_AtAt = op_AtAt;
exports.op_AtAtMinus = op_AtAtMinus;
exports.op_AtAtMinusMinus = op_AtAtMinusMinus;
exports.tagListL = tagListL;
exports.commaListL = commaListL;
exports.semiListL = semiListL;
exports.spaceListL = spaceListL;
exports.sepListL = sepListL;
exports.bracketL = bracketL;
exports.tupleL = tupleL;
exports.aboveListL = aboveListL;
exports.optionL = optionL;
exports.listL = listL;
exports.breaks0 = breaks0;
exports.pushBreak = pushBreak;
exports.popBreak = popBreak;
exports.forceBreak = forceBreak;
exports.squashTo = squashTo;
exports.renderL = renderL;
exports.taggedTextListR = taggedTextListR;
exports.bufferR = bufferR;
exports.showL = showL;
exports.bufferL = bufferL;
exports.RightL$$$colon = exports.RightL$$$rightParen = exports.RightL$$$comma = exports.LeftL$$$keywordTypedefof = exports.LeftL$$$keywordTypeof = exports.LeftL$$$leftBracketBar = exports.LeftL$$$leftBracketAngle = exports.LeftL$$$colon = exports.LeftL$$$questionMark = exports.LeftL$$$leftParen = exports.WordL$$$keywordEnum = exports.WordL$$$keywordOverride = exports.WordL$$$keywordAbstract = exports.WordL$$$keywordPrivate = exports.WordL$$$keywordInternal = exports.WordL$$$keywordOf = exports.WordL$$$keywordDelegate = exports.WordL$$$keywordType = exports.WordL$$$keywordNested = exports.WordL$$$keywordEnd = exports.WordL$$$keywordInherit = exports.WordL$$$keywordStruct = exports.WordL$$$bar = exports.WordL$$$keywordFalse = exports.WordL$$$keywordTrue = exports.WordL$$$keywordGet = exports.WordL$$$keywordSet = exports.WordL$$$keywordWith = exports.WordL$$$keywordEvent = exports.WordL$$$keywordVal = exports.WordL$$$keywordMember = exports.WordL$$$keywordStatic = exports.WordL$$$structUnit = exports.WordL$$$keywordNew = exports.WordL$$$equals = exports.WordL$$$colon = exports.WordL$$$star = exports.WordL$$$arrow = exports.SepL$$$rightParen = exports.SepL$$$lineBreak = exports.SepL$$$leftAngle = exports.SepL$$$leftBracket = exports.SepL$$$space = exports.SepL$$$comma = exports.SepL$$$leftParen = exports.SepL$$$questionMark = exports.SepL$$$colon = exports.SepL$$$star = exports.SepL$$$dot = exports.TaggedTextOps$002ELiterals$$$keywordTypedefof = exports.TaggedTextOps$002ELiterals$$$keywordTypeof = exports.TaggedTextOps$002ELiterals$$$rightBracketBar = exports.TaggedTextOps$002ELiterals$$$leftBracketBar = exports.TaggedTextOps$002ELiterals$$$keywordEnum = exports.TaggedTextOps$002ELiterals$$$keywordOverride = exports.TaggedTextOps$002ELiterals$$$keywordAbstract = exports.TaggedTextOps$002ELiterals$$$keywordPrivate = exports.TaggedTextOps$002ELiterals$$$keywordInternal = exports.TaggedTextOps$002ELiterals$$$keywordOf = exports.TaggedTextOps$002ELiterals$$$keywordDelegate = exports.TaggedTextOps$002ELiterals$$$keywordType = exports.TaggedTextOps$002ELiterals$$$keywordNested = exports.TaggedTextOps$002ELiterals$$$keywordEnd = exports.TaggedTextOps$002ELiterals$$$keywordInherit = exports.TaggedTextOps$002ELiterals$$$keywordStruct = exports.TaggedTextOps$002ELiterals$$$bar = exports.TaggedTextOps$002ELiterals$$$keywordFalse = exports.TaggedTextOps$002ELiterals$$$keywordTrue = exports.TaggedTextOps$002ELiterals$$$keywordGet = exports.TaggedTextOps$002ELiterals$$$keywordSet = exports.TaggedTextOps$002ELiterals$$$keywordWith = exports.TaggedTextOps$002ELiterals$$$keywordEvent = exports.TaggedTextOps$002ELiterals$$$keywordVal = exports.TaggedTextOps$002ELiterals$$$keywordMember = exports.TaggedTextOps$002ELiterals$$$keywordStatic = exports.TaggedTextOps$002ELiterals$$$structUnit = exports.TaggedTextOps$002ELiterals$$$rightBracketAngle = exports.TaggedTextOps$002ELiterals$$$leftBracketAngle = exports.TaggedTextOps$002ELiterals$$$keywordNew = exports.TaggedTextOps$002ELiterals$$$minus = exports.TaggedTextOps$002ELiterals$$$colon = exports.TaggedTextOps$002ELiterals$$$star = exports.TaggedTextOps$002ELiterals$$$rightAngle = exports.TaggedTextOps$002ELiterals$$$leftAngle = exports.TaggedTextOps$002ELiterals$$$dot = exports.TaggedTextOps$002ELiterals$$$questionMark = exports.TaggedTextOps$002ELiterals$$$arrow = exports.TaggedTextOps$002ELiterals$$$equals = exports.TaggedTextOps$002ELiterals$$$rightBrace = exports.TaggedTextOps$002ELiterals$$$leftBrace = exports.TaggedTextOps$002ELiterals$$$rightBracket = exports.TaggedTextOps$002ELiterals$$$leftBracket = exports.TaggedTextOps$002ELiterals$$$rightParen = exports.TaggedTextOps$002ELiterals$$$leftParen = exports.TaggedTextOps$002ELiterals$$$semicolon = exports.TaggedTextOps$002ELiterals$$$comma = exports.TaggedTextOps$002ELiterals$$$space = exports.TaggedTextOps$002ELiterals$$$lineBreak = exports.emptyL = exports.NavigableTaggedText = void 0;
exports.NoResult = exports.NoState = exports.stringR = exports.chunkN = exports.breaks = exports.RightL$$$rightBracketBar = exports.RightL$$$rightBracketAngle = exports.RightL$$$rightAngle = exports.RightL$$$rightBracket = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _sformat = require("../utils/sformat");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _Array = require("../fable-core.2.0.3/Array");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _String = require("../fable-core.2.0.3/String");

const NavigableTaggedText = (0, _Types.declare)(function NavigableTaggedText(taggedText, range) {
  const $this$$1 = this;
  $this$$1.taggedText = taggedText;
  $this$$1["Range@"] = range;
});
exports.NavigableTaggedText = NavigableTaggedText;

function NavigableTaggedText$$$$002Ector$$2DA4AF5D(taggedText, range) {
  return this != null ? NavigableTaggedText.call(this, taggedText, range) : new NavigableTaggedText(taggedText, range);
}

function NavigableTaggedText$$get_Range(__) {
  return __["Range@"];
}

Object.defineProperty(NavigableTaggedText.prototype, "Tag", {
  "get": function () {
    const x = this;
    return x.taggedText.Tag;
  }
});
Object.defineProperty(NavigableTaggedText.prototype, "Text", {
  "get": function () {
    const x$$1 = this;
    return x$$1.taggedText.Text;
  }
});

function mkNav(r, t) {
  return NavigableTaggedText$$$$002Ector$$2DA4AF5D(t, r);
}

function spaces(n) {
  return Array(n + 1).join(" ");
}

function juxtLeft(_arg1) {
  juxtLeft: while (true) {
    switch (_arg1.tag) {
      case 1:
        {
          const jl$$1 = _arg1.fields[0];
          const _text$$1 = _arg1.fields[1];
          const _jr$$1 = _arg1.fields[2];
          return jl$$1;
        }

      case 2:
        {
          const jl$$2 = _arg1.fields[0];
          const _r = _arg1.fields[3];
          const _l = _arg1.fields[1];
          const _jr$$2 = _arg1.fields[4];
          const _joint = _arg1.fields[5];
          const _jm = _arg1.fields[2];
          return jl$$2;
        }

      case 3:
        {
          const l = _arg1.fields[2];
          const _tag = _arg1.fields[0];
          const _attrs = _arg1.fields[1];
          _arg1 = l;
          continue juxtLeft;
        }

      default:
        {
          const jl = _arg1.fields[0];
          const _text = _arg1.fields[1];
          const _jr = _arg1.fields[2];
          return jl;
        }
    }
  }
}

function juxtRight(_arg1$$1) {
  juxtRight: while (true) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          const jr$$1 = _arg1$$1.fields[2];
          const _text$$3 = _arg1$$1.fields[1];
          const _jl$$1 = _arg1$$1.fields[0];
          return jr$$1;
        }

      case 2:
        {
          const jr$$2 = _arg1$$1.fields[4];
          const _r$$1 = _arg1$$1.fields[3];
          const _l$$1 = _arg1$$1.fields[1];
          const _joint$$1 = _arg1$$1.fields[5];
          const _jm$$1 = _arg1$$1.fields[2];
          const _jl$$2 = _arg1$$1.fields[0];
          return jr$$2;
        }

      case 3:
        {
          const l$$1 = _arg1$$1.fields[2];
          const _tag$$1 = _arg1$$1.fields[0];
          const _attrs$$1 = _arg1$$1.fields[1];
          _arg1$$1 = l$$1;
          continue juxtRight;
        }

      default:
        {
          const jr = _arg1$$1.fields[2];
          const _text$$2 = _arg1$$1.fields[1];
          const _jl = _arg1$$1.fields[0];
          return jr;
        }
    }
  }
}

const emptyL = new _sformat.Layout(1, "Leaf", true, (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(29, "Text"), ""), true);
exports.emptyL = emptyL;

function isEmptyL(_arg1$$2) {
  var tag;
  var $target$$2, tag$$1;

  if (_arg1$$2.tag === 1) {
    if (_arg1$$2.fields[0]) {
      if (_arg1$$2.fields[2]) {
        if (tag = _arg1$$2.fields[1], tag.Text === "") {
          $target$$2 = 0;
          tag$$1 = _arg1$$2.fields[1];
        } else {
          $target$$2 = 1;
        }
      } else {
        $target$$2 = 1;
      }
    } else {
      $target$$2 = 1;
    }
  } else {
    $target$$2 = 1;
  }

  switch ($target$$2) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function mkNode(l$$2, r$$1, joint) {
  if (isEmptyL(l$$2)) {
    return r$$1;
  } else if (isEmptyL(r$$1)) {
    return l$$2;
  } else {
    const jl$$3 = juxtLeft(l$$2);
    const jm = juxtRight(l$$2) ? true : juxtLeft(r$$1);
    const jr$$3 = juxtRight(r$$1);
    return new _sformat.Layout(2, "Node", jl$$3, l$$2, jm, r$$1, jr$$3, joint);
  }
}

function wordL(str) {
  return new _sformat.Layout(1, "Leaf", false, str, false);
}

function sepL(str$$1) {
  return new _sformat.Layout(1, "Leaf", true, str$$1, true);
}

function rightL(str$$2) {
  return new _sformat.Layout(1, "Leaf", true, str$$2, false);
}

function leftL(str$$3) {
  return new _sformat.Layout(1, "Leaf", false, str$$3, true);
}

function TaggedTextOps$$$tagActivePatternCase(arg10$0040) {
  return (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(0, "ActivePatternCase"), arg10$0040);
}

function TaggedTextOps$$$tagActivePatternResult(arg10$0040$$1) {
  return (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(1, "ActivePatternResult"), arg10$0040$$1);
}

function TaggedTextOps$$$tagAlias(arg00$0040$$2) {
  return (0, _sformat.TaggedTextOps$$$tagAlias)(arg00$0040$$2);
}

function TaggedTextOps$$$tagClass(arg00$0040$$3) {
  return (0, _sformat.TaggedTextOps$$$tagClass)(arg00$0040$$3);
}

function TaggedTextOps$$$tagUnion(arg10$0040$$2) {
  return (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(4, "Union"), arg10$0040$$2);
}

function TaggedTextOps$$$tagUnionCase(arg00$0040$$5) {
  return (0, _sformat.TaggedTextOps$$$tagUnionCase)(arg00$0040$$5);
}

function TaggedTextOps$$$tagDelegate(arg00$0040$$6) {
  return (0, _sformat.TaggedTextOps$$$tagDelegate)(arg00$0040$$6);
}

function TaggedTextOps$$$tagEnum(arg00$0040$$7) {
  return (0, _sformat.TaggedTextOps$$$tagEnum)(arg00$0040$$7);
}

function TaggedTextOps$$$tagEvent(arg00$0040$$8) {
  return (0, _sformat.TaggedTextOps$$$tagEvent)(arg00$0040$$8);
}

function TaggedTextOps$$$tagField(arg00$0040$$9) {
  return (0, _sformat.TaggedTextOps$$$tagField)(arg00$0040$$9);
}

function TaggedTextOps$$$tagInterface(arg00$0040$$10) {
  return (0, _sformat.TaggedTextOps$$$tagInterface)(arg00$0040$$10);
}

function TaggedTextOps$$$tagKeyword(arg00$0040$$11) {
  return (0, _sformat.TaggedTextOps$$$tagKeyword)(arg00$0040$$11);
}

function TaggedTextOps$$$tagLineBreak(arg00$0040$$12) {
  return (0, _sformat.TaggedTextOps$$$tagLineBreak)(arg00$0040$$12);
}

function TaggedTextOps$$$tagLocal(arg00$0040$$13) {
  return (0, _sformat.TaggedTextOps$$$tagLocal)(arg00$0040$$13);
}

function TaggedTextOps$$$tagRecord(arg00$0040$$14) {
  return (0, _sformat.TaggedTextOps$$$tagRecord)(arg00$0040$$14);
}

function TaggedTextOps$$$tagRecordField(arg00$0040$$15) {
  return (0, _sformat.TaggedTextOps$$$tagRecordField)(arg00$0040$$15);
}

function TaggedTextOps$$$tagMethod(arg00$0040$$16) {
  return (0, _sformat.TaggedTextOps$$$tagMethod)(arg00$0040$$16);
}

function TaggedTextOps$$$tagMember(arg10$0040$$3) {
  return (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(17, "Member"), arg10$0040$$3);
}

function TaggedTextOps$$$tagModule(arg00$0040$$18) {
  return (0, _sformat.TaggedTextOps$$$tagModule)(arg00$0040$$18);
}

function TaggedTextOps$$$tagModuleBinding(arg00$0040$$19) {
  return (0, _sformat.TaggedTextOps$$$tagModuleBinding)(arg00$0040$$19);
}

function TaggedTextOps$$$tagNamespace(arg00$0040$$20) {
  return (0, _sformat.TaggedTextOps$$$tagNamespace)(arg00$0040$$20);
}

function TaggedTextOps$$$tagNumericLiteral(arg00$0040$$21) {
  return (0, _sformat.TaggedTextOps$$$tagNumericLiteral)(arg00$0040$$21);
}

function TaggedTextOps$$$tagOperator(arg00$0040$$22) {
  return (0, _sformat.TaggedTextOps$$$tagOperator)(arg00$0040$$22);
}

function TaggedTextOps$$$tagParameter(arg00$0040$$23) {
  return (0, _sformat.TaggedTextOps$$$tagParameter)(arg00$0040$$23);
}

function TaggedTextOps$$$tagProperty(arg00$0040$$24) {
  return (0, _sformat.TaggedTextOps$$$tagProperty)(arg00$0040$$24);
}

function TaggedTextOps$$$tagSpace(arg00$0040$$25) {
  return (0, _sformat.TaggedTextOps$$$tagSpace)(arg00$0040$$25);
}

function TaggedTextOps$$$tagStringLiteral(arg00$0040$$26) {
  return (0, _sformat.TaggedTextOps$$$tagStringLiteral)(arg00$0040$$26);
}

function TaggedTextOps$$$tagStruct(arg00$0040$$27) {
  return (0, _sformat.TaggedTextOps$$$tagStruct)(arg00$0040$$27);
}

function TaggedTextOps$$$tagTypeParameter(arg00$0040$$28) {
  return (0, _sformat.TaggedTextOps$$$tagTypeParameter)(arg00$0040$$28);
}

function TaggedTextOps$$$tagText(arg00$0040$$29) {
  return (0, _sformat.TaggedTextOps$$$tagText)(arg00$0040$$29);
}

function TaggedTextOps$$$tagPunctuation(arg00$0040$$30) {
  return (0, _sformat.TaggedTextOps$$$tagPunctuation)(arg00$0040$$30);
}

function TaggedTextOps$$$tagUnknownEntity(arg10$0040$$4) {
  return (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(32, "UnknownEntity"), arg10$0040$$4);
}

function TaggedTextOps$$$tagUnknownType(arg10$0040$$5) {
  return (0, _sformat.TaggedTextOps$$$tag)(new _sformat.LayoutTag(31, "UnknownType"), arg10$0040$$5);
}

const TaggedTextOps$002ELiterals$$$lineBreak = _sformat.TaggedTextOps$002ELiterals$$$lineBreak;
exports.TaggedTextOps$002ELiterals$$$lineBreak = TaggedTextOps$002ELiterals$$$lineBreak;
const TaggedTextOps$002ELiterals$$$space = _sformat.TaggedTextOps$002ELiterals$$$space;
exports.TaggedTextOps$002ELiterals$$$space = TaggedTextOps$002ELiterals$$$space;
const TaggedTextOps$002ELiterals$$$comma = _sformat.TaggedTextOps$002ELiterals$$$comma;
exports.TaggedTextOps$002ELiterals$$$comma = TaggedTextOps$002ELiterals$$$comma;
const TaggedTextOps$002ELiterals$$$semicolon = _sformat.TaggedTextOps$002ELiterals$$$semicolon;
exports.TaggedTextOps$002ELiterals$$$semicolon = TaggedTextOps$002ELiterals$$$semicolon;
const TaggedTextOps$002ELiterals$$$leftParen = _sformat.TaggedTextOps$002ELiterals$$$leftParen;
exports.TaggedTextOps$002ELiterals$$$leftParen = TaggedTextOps$002ELiterals$$$leftParen;
const TaggedTextOps$002ELiterals$$$rightParen = _sformat.TaggedTextOps$002ELiterals$$$rightParen;
exports.TaggedTextOps$002ELiterals$$$rightParen = TaggedTextOps$002ELiterals$$$rightParen;
const TaggedTextOps$002ELiterals$$$leftBracket = _sformat.TaggedTextOps$002ELiterals$$$leftBracket;
exports.TaggedTextOps$002ELiterals$$$leftBracket = TaggedTextOps$002ELiterals$$$leftBracket;
const TaggedTextOps$002ELiterals$$$rightBracket = _sformat.TaggedTextOps$002ELiterals$$$rightBracket;
exports.TaggedTextOps$002ELiterals$$$rightBracket = TaggedTextOps$002ELiterals$$$rightBracket;
const TaggedTextOps$002ELiterals$$$leftBrace = _sformat.TaggedTextOps$002ELiterals$$$leftBrace;
exports.TaggedTextOps$002ELiterals$$$leftBrace = TaggedTextOps$002ELiterals$$$leftBrace;
const TaggedTextOps$002ELiterals$$$rightBrace = _sformat.TaggedTextOps$002ELiterals$$$rightBrace;
exports.TaggedTextOps$002ELiterals$$$rightBrace = TaggedTextOps$002ELiterals$$$rightBrace;
const TaggedTextOps$002ELiterals$$$equals = _sformat.TaggedTextOps$002ELiterals$$$equals;
exports.TaggedTextOps$002ELiterals$$$equals = TaggedTextOps$002ELiterals$$$equals;
const TaggedTextOps$002ELiterals$$$arrow = _sformat.TaggedTextOps$002ELiterals$$$arrow;
exports.TaggedTextOps$002ELiterals$$$arrow = TaggedTextOps$002ELiterals$$$arrow;
const TaggedTextOps$002ELiterals$$$questionMark = _sformat.TaggedTextOps$002ELiterals$$$questionMark;
exports.TaggedTextOps$002ELiterals$$$questionMark = TaggedTextOps$002ELiterals$$$questionMark;
const TaggedTextOps$002ELiterals$$$dot = TaggedTextOps$$$tagPunctuation(".");
exports.TaggedTextOps$002ELiterals$$$dot = TaggedTextOps$002ELiterals$$$dot;
const TaggedTextOps$002ELiterals$$$leftAngle = TaggedTextOps$$$tagPunctuation("<");
exports.TaggedTextOps$002ELiterals$$$leftAngle = TaggedTextOps$002ELiterals$$$leftAngle;
const TaggedTextOps$002ELiterals$$$rightAngle = TaggedTextOps$$$tagPunctuation(">");
exports.TaggedTextOps$002ELiterals$$$rightAngle = TaggedTextOps$002ELiterals$$$rightAngle;
const TaggedTextOps$002ELiterals$$$star = TaggedTextOps$$$tagOperator("*");
exports.TaggedTextOps$002ELiterals$$$star = TaggedTextOps$002ELiterals$$$star;
const TaggedTextOps$002ELiterals$$$colon = TaggedTextOps$$$tagPunctuation(":");
exports.TaggedTextOps$002ELiterals$$$colon = TaggedTextOps$002ELiterals$$$colon;
const TaggedTextOps$002ELiterals$$$minus = TaggedTextOps$$$tagPunctuation("-");
exports.TaggedTextOps$002ELiterals$$$minus = TaggedTextOps$002ELiterals$$$minus;
const TaggedTextOps$002ELiterals$$$keywordNew = TaggedTextOps$$$tagKeyword("new");
exports.TaggedTextOps$002ELiterals$$$keywordNew = TaggedTextOps$002ELiterals$$$keywordNew;
const TaggedTextOps$002ELiterals$$$leftBracketAngle = TaggedTextOps$$$tagPunctuation("[<");
exports.TaggedTextOps$002ELiterals$$$leftBracketAngle = TaggedTextOps$002ELiterals$$$leftBracketAngle;
const TaggedTextOps$002ELiterals$$$rightBracketAngle = TaggedTextOps$$$tagPunctuation(">]");
exports.TaggedTextOps$002ELiterals$$$rightBracketAngle = TaggedTextOps$002ELiterals$$$rightBracketAngle;
const TaggedTextOps$002ELiterals$$$structUnit = TaggedTextOps$$$tagStruct("unit");
exports.TaggedTextOps$002ELiterals$$$structUnit = TaggedTextOps$002ELiterals$$$structUnit;
const TaggedTextOps$002ELiterals$$$keywordStatic = TaggedTextOps$$$tagKeyword("static");
exports.TaggedTextOps$002ELiterals$$$keywordStatic = TaggedTextOps$002ELiterals$$$keywordStatic;
const TaggedTextOps$002ELiterals$$$keywordMember = TaggedTextOps$$$tagKeyword("member");
exports.TaggedTextOps$002ELiterals$$$keywordMember = TaggedTextOps$002ELiterals$$$keywordMember;
const TaggedTextOps$002ELiterals$$$keywordVal = TaggedTextOps$$$tagKeyword("val");
exports.TaggedTextOps$002ELiterals$$$keywordVal = TaggedTextOps$002ELiterals$$$keywordVal;
const TaggedTextOps$002ELiterals$$$keywordEvent = TaggedTextOps$$$tagKeyword("event");
exports.TaggedTextOps$002ELiterals$$$keywordEvent = TaggedTextOps$002ELiterals$$$keywordEvent;
const TaggedTextOps$002ELiterals$$$keywordWith = TaggedTextOps$$$tagKeyword("with");
exports.TaggedTextOps$002ELiterals$$$keywordWith = TaggedTextOps$002ELiterals$$$keywordWith;
const TaggedTextOps$002ELiterals$$$keywordSet = TaggedTextOps$$$tagKeyword("set");
exports.TaggedTextOps$002ELiterals$$$keywordSet = TaggedTextOps$002ELiterals$$$keywordSet;
const TaggedTextOps$002ELiterals$$$keywordGet = TaggedTextOps$$$tagKeyword("get");
exports.TaggedTextOps$002ELiterals$$$keywordGet = TaggedTextOps$002ELiterals$$$keywordGet;
const TaggedTextOps$002ELiterals$$$keywordTrue = TaggedTextOps$$$tagKeyword("true");
exports.TaggedTextOps$002ELiterals$$$keywordTrue = TaggedTextOps$002ELiterals$$$keywordTrue;
const TaggedTextOps$002ELiterals$$$keywordFalse = TaggedTextOps$$$tagKeyword("false");
exports.TaggedTextOps$002ELiterals$$$keywordFalse = TaggedTextOps$002ELiterals$$$keywordFalse;
const TaggedTextOps$002ELiterals$$$bar = TaggedTextOps$$$tagPunctuation("|");
exports.TaggedTextOps$002ELiterals$$$bar = TaggedTextOps$002ELiterals$$$bar;
const TaggedTextOps$002ELiterals$$$keywordStruct = TaggedTextOps$$$tagKeyword("struct");
exports.TaggedTextOps$002ELiterals$$$keywordStruct = TaggedTextOps$002ELiterals$$$keywordStruct;
const TaggedTextOps$002ELiterals$$$keywordInherit = TaggedTextOps$$$tagKeyword("inherit");
exports.TaggedTextOps$002ELiterals$$$keywordInherit = TaggedTextOps$002ELiterals$$$keywordInherit;
const TaggedTextOps$002ELiterals$$$keywordEnd = TaggedTextOps$$$tagKeyword("end");
exports.TaggedTextOps$002ELiterals$$$keywordEnd = TaggedTextOps$002ELiterals$$$keywordEnd;
const TaggedTextOps$002ELiterals$$$keywordNested = TaggedTextOps$$$tagKeyword("nested");
exports.TaggedTextOps$002ELiterals$$$keywordNested = TaggedTextOps$002ELiterals$$$keywordNested;
const TaggedTextOps$002ELiterals$$$keywordType = TaggedTextOps$$$tagKeyword("type");
exports.TaggedTextOps$002ELiterals$$$keywordType = TaggedTextOps$002ELiterals$$$keywordType;
const TaggedTextOps$002ELiterals$$$keywordDelegate = TaggedTextOps$$$tagKeyword("delegate");
exports.TaggedTextOps$002ELiterals$$$keywordDelegate = TaggedTextOps$002ELiterals$$$keywordDelegate;
const TaggedTextOps$002ELiterals$$$keywordOf = TaggedTextOps$$$tagKeyword("of");
exports.TaggedTextOps$002ELiterals$$$keywordOf = TaggedTextOps$002ELiterals$$$keywordOf;
const TaggedTextOps$002ELiterals$$$keywordInternal = TaggedTextOps$$$tagKeyword("internal");
exports.TaggedTextOps$002ELiterals$$$keywordInternal = TaggedTextOps$002ELiterals$$$keywordInternal;
const TaggedTextOps$002ELiterals$$$keywordPrivate = TaggedTextOps$$$tagKeyword("private");
exports.TaggedTextOps$002ELiterals$$$keywordPrivate = TaggedTextOps$002ELiterals$$$keywordPrivate;
const TaggedTextOps$002ELiterals$$$keywordAbstract = TaggedTextOps$$$tagKeyword("abstract");
exports.TaggedTextOps$002ELiterals$$$keywordAbstract = TaggedTextOps$002ELiterals$$$keywordAbstract;
const TaggedTextOps$002ELiterals$$$keywordOverride = TaggedTextOps$$$tagKeyword("override");
exports.TaggedTextOps$002ELiterals$$$keywordOverride = TaggedTextOps$002ELiterals$$$keywordOverride;
const TaggedTextOps$002ELiterals$$$keywordEnum = TaggedTextOps$$$tagKeyword("enum");
exports.TaggedTextOps$002ELiterals$$$keywordEnum = TaggedTextOps$002ELiterals$$$keywordEnum;
const TaggedTextOps$002ELiterals$$$leftBracketBar = TaggedTextOps$$$tagPunctuation("[|");
exports.TaggedTextOps$002ELiterals$$$leftBracketBar = TaggedTextOps$002ELiterals$$$leftBracketBar;
const TaggedTextOps$002ELiterals$$$rightBracketBar = TaggedTextOps$$$tagPunctuation("|]");
exports.TaggedTextOps$002ELiterals$$$rightBracketBar = TaggedTextOps$002ELiterals$$$rightBracketBar;
const TaggedTextOps$002ELiterals$$$keywordTypeof = TaggedTextOps$$$tagKeyword("typeof");
exports.TaggedTextOps$002ELiterals$$$keywordTypeof = TaggedTextOps$002ELiterals$$$keywordTypeof;
const TaggedTextOps$002ELiterals$$$keywordTypedefof = TaggedTextOps$$$tagKeyword("typedefof");
exports.TaggedTextOps$002ELiterals$$$keywordTypedefof = TaggedTextOps$002ELiterals$$$keywordTypedefof;
const SepL$$$dot = sepL(TaggedTextOps$002ELiterals$$$dot);
exports.SepL$$$dot = SepL$$$dot;
const SepL$$$star = sepL(TaggedTextOps$002ELiterals$$$star);
exports.SepL$$$star = SepL$$$star;
const SepL$$$colon = sepL(TaggedTextOps$002ELiterals$$$colon);
exports.SepL$$$colon = SepL$$$colon;
const SepL$$$questionMark = sepL(TaggedTextOps$002ELiterals$$$questionMark);
exports.SepL$$$questionMark = SepL$$$questionMark;
const SepL$$$leftParen = sepL(TaggedTextOps$002ELiterals$$$leftParen);
exports.SepL$$$leftParen = SepL$$$leftParen;
const SepL$$$comma = sepL(TaggedTextOps$002ELiterals$$$comma);
exports.SepL$$$comma = SepL$$$comma;
const SepL$$$space = sepL(TaggedTextOps$002ELiterals$$$space);
exports.SepL$$$space = SepL$$$space;
const SepL$$$leftBracket = sepL(TaggedTextOps$002ELiterals$$$leftBracket);
exports.SepL$$$leftBracket = SepL$$$leftBracket;
const SepL$$$leftAngle = sepL(TaggedTextOps$002ELiterals$$$leftAngle);
exports.SepL$$$leftAngle = SepL$$$leftAngle;
const SepL$$$lineBreak = sepL(TaggedTextOps$002ELiterals$$$lineBreak);
exports.SepL$$$lineBreak = SepL$$$lineBreak;
const SepL$$$rightParen = sepL(TaggedTextOps$002ELiterals$$$rightParen);
exports.SepL$$$rightParen = SepL$$$rightParen;
const WordL$$$arrow = wordL(TaggedTextOps$002ELiterals$$$arrow);
exports.WordL$$$arrow = WordL$$$arrow;
const WordL$$$star = wordL(TaggedTextOps$002ELiterals$$$star);
exports.WordL$$$star = WordL$$$star;
const WordL$$$colon = wordL(TaggedTextOps$002ELiterals$$$colon);
exports.WordL$$$colon = WordL$$$colon;
const WordL$$$equals = wordL(TaggedTextOps$002ELiterals$$$equals);
exports.WordL$$$equals = WordL$$$equals;
const WordL$$$keywordNew = wordL(TaggedTextOps$002ELiterals$$$keywordNew);
exports.WordL$$$keywordNew = WordL$$$keywordNew;
const WordL$$$structUnit = wordL(TaggedTextOps$002ELiterals$$$structUnit);
exports.WordL$$$structUnit = WordL$$$structUnit;
const WordL$$$keywordStatic = wordL(TaggedTextOps$002ELiterals$$$keywordStatic);
exports.WordL$$$keywordStatic = WordL$$$keywordStatic;
const WordL$$$keywordMember = wordL(TaggedTextOps$002ELiterals$$$keywordMember);
exports.WordL$$$keywordMember = WordL$$$keywordMember;
const WordL$$$keywordVal = wordL(TaggedTextOps$002ELiterals$$$keywordVal);
exports.WordL$$$keywordVal = WordL$$$keywordVal;
const WordL$$$keywordEvent = wordL(TaggedTextOps$002ELiterals$$$keywordEvent);
exports.WordL$$$keywordEvent = WordL$$$keywordEvent;
const WordL$$$keywordWith = wordL(TaggedTextOps$002ELiterals$$$keywordWith);
exports.WordL$$$keywordWith = WordL$$$keywordWith;
const WordL$$$keywordSet = wordL(TaggedTextOps$002ELiterals$$$keywordSet);
exports.WordL$$$keywordSet = WordL$$$keywordSet;
const WordL$$$keywordGet = wordL(TaggedTextOps$002ELiterals$$$keywordGet);
exports.WordL$$$keywordGet = WordL$$$keywordGet;
const WordL$$$keywordTrue = wordL(TaggedTextOps$002ELiterals$$$keywordTrue);
exports.WordL$$$keywordTrue = WordL$$$keywordTrue;
const WordL$$$keywordFalse = wordL(TaggedTextOps$002ELiterals$$$keywordFalse);
exports.WordL$$$keywordFalse = WordL$$$keywordFalse;
const WordL$$$bar = wordL(TaggedTextOps$002ELiterals$$$bar);
exports.WordL$$$bar = WordL$$$bar;
const WordL$$$keywordStruct = wordL(TaggedTextOps$002ELiterals$$$keywordStruct);
exports.WordL$$$keywordStruct = WordL$$$keywordStruct;
const WordL$$$keywordInherit = wordL(TaggedTextOps$002ELiterals$$$keywordInherit);
exports.WordL$$$keywordInherit = WordL$$$keywordInherit;
const WordL$$$keywordEnd = wordL(TaggedTextOps$002ELiterals$$$keywordEnd);
exports.WordL$$$keywordEnd = WordL$$$keywordEnd;
const WordL$$$keywordNested = wordL(TaggedTextOps$002ELiterals$$$keywordNested);
exports.WordL$$$keywordNested = WordL$$$keywordNested;
const WordL$$$keywordType = wordL(TaggedTextOps$002ELiterals$$$keywordType);
exports.WordL$$$keywordType = WordL$$$keywordType;
const WordL$$$keywordDelegate = wordL(TaggedTextOps$002ELiterals$$$keywordDelegate);
exports.WordL$$$keywordDelegate = WordL$$$keywordDelegate;
const WordL$$$keywordOf = wordL(TaggedTextOps$002ELiterals$$$keywordOf);
exports.WordL$$$keywordOf = WordL$$$keywordOf;
const WordL$$$keywordInternal = wordL(TaggedTextOps$002ELiterals$$$keywordInternal);
exports.WordL$$$keywordInternal = WordL$$$keywordInternal;
const WordL$$$keywordPrivate = wordL(TaggedTextOps$002ELiterals$$$keywordPrivate);
exports.WordL$$$keywordPrivate = WordL$$$keywordPrivate;
const WordL$$$keywordAbstract = wordL(TaggedTextOps$002ELiterals$$$keywordAbstract);
exports.WordL$$$keywordAbstract = WordL$$$keywordAbstract;
const WordL$$$keywordOverride = wordL(TaggedTextOps$002ELiterals$$$keywordOverride);
exports.WordL$$$keywordOverride = WordL$$$keywordOverride;
const WordL$$$keywordEnum = wordL(TaggedTextOps$002ELiterals$$$keywordEnum);
exports.WordL$$$keywordEnum = WordL$$$keywordEnum;
const LeftL$$$leftParen = leftL(TaggedTextOps$002ELiterals$$$leftParen);
exports.LeftL$$$leftParen = LeftL$$$leftParen;
const LeftL$$$questionMark = leftL(TaggedTextOps$002ELiterals$$$questionMark);
exports.LeftL$$$questionMark = LeftL$$$questionMark;
const LeftL$$$colon = leftL(TaggedTextOps$002ELiterals$$$colon);
exports.LeftL$$$colon = LeftL$$$colon;
const LeftL$$$leftBracketAngle = leftL(TaggedTextOps$002ELiterals$$$leftBracketAngle);
exports.LeftL$$$leftBracketAngle = LeftL$$$leftBracketAngle;
const LeftL$$$leftBracketBar = leftL(TaggedTextOps$002ELiterals$$$leftBracketBar);
exports.LeftL$$$leftBracketBar = LeftL$$$leftBracketBar;
const LeftL$$$keywordTypeof = leftL(TaggedTextOps$002ELiterals$$$keywordTypeof);
exports.LeftL$$$keywordTypeof = LeftL$$$keywordTypeof;
const LeftL$$$keywordTypedefof = leftL(TaggedTextOps$002ELiterals$$$keywordTypedefof);
exports.LeftL$$$keywordTypedefof = LeftL$$$keywordTypedefof;
const RightL$$$comma = rightL(TaggedTextOps$002ELiterals$$$comma);
exports.RightL$$$comma = RightL$$$comma;
const RightL$$$rightParen = rightL(TaggedTextOps$002ELiterals$$$rightParen);
exports.RightL$$$rightParen = RightL$$$rightParen;
const RightL$$$colon = rightL(TaggedTextOps$002ELiterals$$$colon);
exports.RightL$$$colon = RightL$$$colon;
const RightL$$$rightBracket = rightL(TaggedTextOps$002ELiterals$$$rightBracket);
exports.RightL$$$rightBracket = RightL$$$rightBracket;
const RightL$$$rightAngle = rightL(TaggedTextOps$002ELiterals$$$rightAngle);
exports.RightL$$$rightAngle = RightL$$$rightAngle;
const RightL$$$rightBracketAngle = rightL(TaggedTextOps$002ELiterals$$$rightBracketAngle);
exports.RightL$$$rightBracketAngle = RightL$$$rightBracketAngle;
const RightL$$$rightBracketBar = rightL(TaggedTextOps$002ELiterals$$$rightBracketBar);
exports.RightL$$$rightBracketBar = RightL$$$rightBracketBar;

function aboveL(l$$3, r$$2) {
  return mkNode(l$$3, r$$2, new _sformat.Joint(2, "Broken", 0));
}

function tagAttrL(str$$4, attrs, ly) {
  return new _sformat.Layout(3, "Attr", str$$4, attrs, ly);
}

function apply2(f, l$$4, r$$3) {
  if (isEmptyL(l$$4)) {
    return r$$3;
  } else if (isEmptyL(r$$3)) {
    return l$$4;
  } else {
    return f(l$$4, r$$3);
  }
}

function op_HatHat(l$$5, r$$4) {
  return mkNode(l$$5, r$$4, new _sformat.Joint(0, "Unbreakable"));
}

function op_PlusPlus(l$$6, r$$5) {
  return mkNode(l$$6, r$$5, new _sformat.Joint(1, "Breakable", 0));
}

function op_MinusMinus(l$$7, r$$6) {
  return mkNode(l$$7, r$$6, new _sformat.Joint(1, "Breakable", 1));
}

function op_MinusMinusMinus(l$$8, r$$7) {
  return mkNode(l$$8, r$$7, new _sformat.Joint(1, "Breakable", 2));
}

function op_MinusMinusMinusMinus(l$$9, r$$8) {
  return mkNode(l$$9, r$$8, new _sformat.Joint(1, "Breakable", 3));
}

function op_MinusMinusMinusMinusMinus(l$$10, r$$9) {
  return mkNode(l$$10, r$$9, new _sformat.Joint(1, "Breakable", 4));
}

function op_AtAt(l$$11, r$$10) {
  return apply2(function (l$$12, r$$11) {
    return mkNode(l$$12, r$$11, new _sformat.Joint(2, "Broken", 0));
  }, l$$11, r$$10);
}

function op_AtAtMinus(l$$13, r$$12) {
  return apply2(function (l$$14, r$$13) {
    return mkNode(l$$14, r$$13, new _sformat.Joint(2, "Broken", 1));
  }, l$$13, r$$12);
}

function op_AtAtMinusMinus(l$$15, r$$14) {
  return apply2(function (l$$16, r$$15) {
    return mkNode(l$$16, r$$15, new _sformat.Joint(2, "Broken", 2));
  }, l$$15, r$$14);
}

function tagListL(tagger, _arg1$$3) {
  if (_arg1$$3.tail != null) {
    if (_arg1$$3.tail.tail == null) {
      return _arg1$$3.head;
    } else {
      const process$0027 = function process$0027(prefixL, _arg2) {
        process$0027: while (true) {
          if (_arg2.tail != null) {
            const ys = _arg2.tail;
            const y = _arg2.head;
            prefixL = op_PlusPlus(tagger(prefixL), y);
            _arg2 = ys;
            continue process$0027;
          } else {
            return prefixL;
          }
        }
      };

      return process$0027(_arg1$$3.head, _arg1$$3.tail);
    }
  } else {
    return emptyL;
  }
}

function commaListL(x$$4) {
  return tagListL(function (prefixL$$1) {
    return op_HatHat(prefixL$$1, rightL(TaggedTextOps$002ELiterals$$$comma));
  }, x$$4);
}

function semiListL(x$$5) {
  return tagListL(function (prefixL$$2) {
    return op_HatHat(prefixL$$2, rightL(TaggedTextOps$002ELiterals$$$semicolon));
  }, x$$5);
}

function spaceListL(x$$6) {
  return tagListL(function (prefixL$$3) {
    return prefixL$$3;
  }, x$$6);
}

function sepListL(x$$7, y$$1) {
  return tagListL(function (prefixL$$4) {
    return op_HatHat(prefixL$$4, x$$7);
  }, y$$1);
}

function bracketL(l$$17) {
  return op_HatHat(leftL(TaggedTextOps$002ELiterals$$$leftParen), op_HatHat(l$$17, rightL(TaggedTextOps$002ELiterals$$$rightParen)));
}

function tupleL(xs$$1) {
  return bracketL(sepListL(sepL(TaggedTextOps$002ELiterals$$$comma), xs$$1));
}

function aboveListL(_arg1$$4) {
  if (_arg1$$4.tail != null) {
    if (_arg1$$4.tail.tail == null) {
      return _arg1$$4.head;
    } else {
      return (0, _List.fold)(op_AtAt, _arg1$$4.head, _arg1$$4.tail);
    }
  } else {
    return emptyL;
  }
}

function optionL(xL, _arg1$$5) {
  if (_arg1$$5 != null) {
    const x$$10 = (0, _Option.value)(_arg1$$5);
    return op_MinusMinus(wordL(TaggedTextOps$$$tagUnionCase("Some")), xL(x$$10));
  } else {
    return wordL(TaggedTextOps$$$tagUnionCase("None"));
  }
}

function listL(xL$$1, xs$$2) {
  return op_HatHat(leftL(TaggedTextOps$002ELiterals$$$leftBracket), op_HatHat(sepListL(sepL(TaggedTextOps$002ELiterals$$$semicolon), (0, _List.map)(xL$$1, xs$$2)), rightL(TaggedTextOps$002ELiterals$$$rightBracket)));
}

const breaks = (0, _Types.declare)(function breaks(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.breaks = breaks;
const chunkN = 400;
exports.chunkN = chunkN;

function breaks0() {
  return new breaks(0, "Breaks", 0, 0, (0, _Array.fill)(new Int32Array(chunkN), 0, chunkN, 0));
}

function pushBreak(saving, _arg1$$6) {
  const stack = _arg1$$6.fields[2];
  const outer = _arg1$$6.fields[1] | 0;
  const next = _arg1$$6.fields[0] | 0;
  const stack$$1 = next === stack.length ? (0, _Array.append)(stack, (0, _Array.fill)(new Int32Array(chunkN), 0, chunkN, 0), Int32Array) : stack;
  stack$$1[next] = saving;
  return new breaks(0, "Breaks", next + 1, outer, stack$$1);
}

function popBreak(_arg1$$7) {
  const stack$$2 = _arg1$$7.fields[2];
  const outer$$1 = _arg1$$7.fields[1] | 0;
  const next$$1 = _arg1$$7.fields[0] | 0;

  if (next$$1 === 0) {
    throw (0, _FSharp.Operators$$$Failure)("popBreak: underflow");
  }

  const topBroke = stack$$2[next$$1 - 1] < 0;
  const outer$$2 = (outer$$1 === next$$1 ? outer$$1 - 1 : outer$$1) | 0;
  const next$$2 = next$$1 - 1 | 0;
  return [new breaks(0, "Breaks", next$$2, outer$$2, stack$$2), topBroke];
}

function forceBreak(_arg1$$8) {
  const stack$$3 = _arg1$$8.fields[2];
  const outer$$3 = _arg1$$8.fields[1] | 0;
  const next$$3 = _arg1$$8.fields[0] | 0;

  if (outer$$3 === next$$3) {
    return null;
  } else {
    const saving$$1 = stack$$3[outer$$3] | 0;
    stack$$3[outer$$3] = -stack$$3[outer$$3];
    const outer$$4 = outer$$3 + 1 | 0;
    return [new breaks(0, "Breaks", next$$3, outer$$4, stack$$3), saving$$1];
  }
}

function squashTo(maxWidth, layout$$1) {
  const fit = function fit(breaks$$1, tupledArg) {
    let patternInput$$9;

    if (tupledArg[1].tag === 3) {
      const tag$$2 = tupledArg[1].fields[0];
      const l$$18 = tupledArg[1].fields[2];
      const attrs$$1 = tupledArg[1].fields[1];
      const patternInput = fit(breaks$$1, [tupledArg[0], l$$18]);
      const layout$$4 = new _sformat.Layout(3, "Attr", tag$$2, attrs$$1, patternInput[1]);
      patternInput$$9 = [patternInput[0], layout$$4, patternInput[2], patternInput[3]];
    } else if (tupledArg[1].tag === 1) {
      const taggedText$$1 = tupledArg[1].fields[1];
      const _jr$$3 = tupledArg[1].fields[2];
      const _jl$$3 = tupledArg[1].fields[0];
      const textWidth = taggedText$$1.Text.length | 0;

      const fitLeaf = function fitLeaf(breaks$$3, pos$$2) {
        fitLeaf: while (true) {
          if (pos$$2 + textWidth <= maxWidth) {
            return [breaks$$3, tupledArg[1], pos$$2 + textWidth, textWidth];
          } else {
            const matchValue = forceBreak(breaks$$3);

            if (matchValue != null) {
              const saving$$2 = matchValue[1] | 0;
              const breaks$$4 = matchValue[0];
              const pos$$3 = pos$$2 - saving$$2 | 0;
              breaks$$3 = breaks$$4;
              pos$$2 = pos$$3;
              continue fitLeaf;
            } else {
              return [breaks$$3, tupledArg[1], pos$$2 + textWidth, textWidth];
            }
          }
        }
      };

      patternInput$$9 = fitLeaf(breaks$$1, tupledArg[0]);
    } else if (tupledArg[1].tag === 2) {
      const r$$16 = tupledArg[1].fields[3];
      const l$$19 = tupledArg[1].fields[1];
      const jr$$4 = tupledArg[1].fields[4];
      const joint$$1 = tupledArg[1].fields[5];
      const jm$$1 = tupledArg[1].fields[2];
      const jl$$4 = tupledArg[1].fields[0];
      const mid = (jm$$1 ? 0 : 1) | 0;

      switch (joint$$1.tag) {
        case 2:
          {
            const indent = joint$$1.fields[0] | 0;
            const patternInput$$3 = fit(breaks$$1, [tupledArg[0], l$$19]);
            const pos$$8 = patternInput$$3[2] - patternInput$$3[3] + indent | 0;
            const patternInput$$4 = fit(patternInput$$3[0], [pos$$8, r$$16]);
            patternInput$$9 = [patternInput$$4[0], new _sformat.Layout(2, "Node", jl$$4, patternInput$$3[1], jm$$1, patternInput$$4[1], jr$$4, new _sformat.Joint(2, "Broken", indent)), patternInput$$4[2], indent + patternInput$$4[3]];
            break;
          }

        case 1:
          {
            const indent$$1 = joint$$1.fields[0] | 0;
            const patternInput$$5 = fit(breaks$$1, [tupledArg[0], l$$19]);
            const saving$$3 = patternInput$$5[3] + mid - indent$$1 | 0;
            const pos$$11 = patternInput$$5[2] + mid | 0;

            if (saving$$3 > 0) {
              const breaks$$10 = pushBreak(saving$$3, patternInput$$5[0]);
              const patternInput$$6 = fit(breaks$$10, [pos$$11, r$$16]);
              const patternInput$$7 = popBreak(patternInput$$6[0]);
              patternInput$$9 = patternInput$$7[1] ? [patternInput$$7[0], new _sformat.Layout(2, "Node", jl$$4, patternInput$$5[1], jm$$1, patternInput$$6[1], jr$$4, new _sformat.Joint(2, "Broken", indent$$1)), patternInput$$6[2], indent$$1 + patternInput$$6[3]] : [patternInput$$7[0], new _sformat.Layout(2, "Node", jl$$4, patternInput$$5[1], jm$$1, patternInput$$6[1], jr$$4, new _sformat.Joint(1, "Breakable", indent$$1)), patternInput$$6[2], patternInput$$5[3] + mid + patternInput$$6[3]];
            } else {
              const patternInput$$8 = fit(patternInput$$5[0], [pos$$11, r$$16]);
              patternInput$$9 = [patternInput$$8[0], new _sformat.Layout(2, "Node", jl$$4, patternInput$$5[1], jm$$1, patternInput$$8[1], jr$$4, new _sformat.Joint(1, "Breakable", indent$$1)), patternInput$$8[2], patternInput$$5[3] + mid + patternInput$$8[3]];
            }

            break;
          }

        default:
          {
            const patternInput$$1 = fit(breaks$$1, [tupledArg[0], l$$19]);
            const pos$$5 = patternInput$$1[2] + mid | 0;
            const patternInput$$2 = fit(patternInput$$1[0], [pos$$5, r$$16]);
            patternInput$$9 = [patternInput$$2[0], new _sformat.Layout(2, "Node", jl$$4, patternInput$$1[1], jm$$1, patternInput$$2[1], jr$$4, new _sformat.Joint(0, "Unbreakable")), patternInput$$2[2], patternInput$$1[3] + mid + patternInput$$2[3]];
          }
      }
    } else {
      throw new Error("ObjLeaf should not appear here");
    }

    return [patternInput$$9[0], patternInput$$9[1], patternInput$$9[2], patternInput$$9[3]];
  };

  const breaks$$15 = breaks0();
  const pos$$15 = 0;
  const patternInput$$10 = fit(breaks$$15, [pos$$15, layout$$1]);
  return patternInput$$10[1];
}

function renderL(rr, layout$$7) {
  const addL = function addL($arg$$12, $arg$$13, $arg$$14, $arg$$15, $arg$$16) {
    addL: while (true) {
      const z = $arg$$12,
            pos$$16 = $arg$$13,
            i = $arg$$14,
            layout$$8 = $arg$$15,
            k = $arg$$16;

      if (layout$$8.tag === 1) {
        return k([rr.AddText(z, layout$$8.fields[1]), i + layout$$8.fields[1].Text.length]);
      } else if (layout$$8.tag === 2) {
        if (layout$$8.fields[5].tag === 2) {
          $arg$$12 = z;
          $arg$$13 = pos$$16;
          $arg$$14 = i;
          $arg$$15 = layout$$8.fields[1];

          $arg$$16 = function (tupledArg$$1) {
            const patternInput$$11 = [rr.AddBreak(tupledArg$$1[0], pos$$16 + layout$$8.fields[5].fields[0]), pos$$16 + layout$$8.fields[5].fields[0]];
            return addL(patternInput$$11[0], pos$$16 + layout$$8.fields[5].fields[0], patternInput$$11[1], layout$$8.fields[3], k);
          };

          continue addL;
        } else {
          $arg$$12 = z;
          $arg$$13 = pos$$16;
          $arg$$14 = i;
          $arg$$15 = layout$$8.fields[1];

          $arg$$16 = function (tupledArg$$2) {
            const patternInput$$12 = layout$$8.fields[2] ? [tupledArg$$2[0], tupledArg$$2[1]] : [rr.AddText(tupledArg$$2[0], TaggedTextOps$002ELiterals$$$space), tupledArg$$2[1] + 1];
            const pos$$17 = patternInput$$12[1] | 0;
            return addL(patternInput$$12[0], pos$$17, patternInput$$12[1], layout$$8.fields[3], k);
          };

          continue addL;
        }
      } else if (layout$$8.tag === 3) {
        const z$$5 = rr.AddTag(z, layout$$8.fields[0], layout$$8.fields[1], true);
        $arg$$12 = z$$5;
        $arg$$13 = pos$$16;
        $arg$$14 = i;
        $arg$$15 = layout$$8.fields[2];

        $arg$$16 = function (tupledArg$$4) {
          const z$$7 = rr.AddTag(tupledArg$$4[0], layout$$8.fields[0], layout$$8.fields[1], false);
          return k([z$$7, tupledArg$$4[1]]);
        };

        continue addL;
      } else {
        throw new Error("ObjLeaf should never apper here");
      }
    }
  };

  const pos$$18 = 0;
  const patternInput$$13 = [rr.Start(), 0];
  const patternInput$$14 = addL(patternInput$$13[0], pos$$18, patternInput$$13[1], layout$$7, function (x$$11) {
    return x$$11;
  });
  return rr.Finish(patternInput$$14[0]);
}

const stringR = {
  Start() {
    return (0, _Types.L)();
  },

  AddText(rstrs, taggedText$$2) {
    return (0, _Types.L)(taggedText$$2.Text, rstrs);
  },

  AddBreak(rstrs$$1, n$$1) {
    return (0, _Types.L)(spaces(n$$1), (0, _Types.L)("\n", rstrs$$1));
  },

  AddTag(z$$10, _arg1$$9, _arg2$$1, _arg3) {
    return z$$10;
  },

  Finish(rstrs$$2) {
    return (0, _String.join)("", ...(0, _Array.ofList)((0, _List.reverse)(rstrs$$2), Array));
  }

};
exports.stringR = stringR;
const NoState = (0, _Types.declare)(function NoState(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NoState = NoState;
const NoResult = (0, _Types.declare)(function NoResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NoResult = NoResult;

function taggedTextListR(collector) {
  return {
    Start() {
      return new NoState(0, "NoState");
    },

    AddText(z$$11, text$$1) {
      collector(text$$1);
      return z$$11;
    },

    AddBreak(rstrs$$3, n$$2) {
      collector(TaggedTextOps$002ELiterals$$$lineBreak);
      collector(TaggedTextOps$$$tagSpace(spaces(n$$2)));
      return rstrs$$3;
    },

    AddTag(z$$12, _arg1$$10, _arg2$$2, _arg3$$1) {
      return z$$12;
    },

    Finish(rstrs$$4) {
      return new NoResult(0, "NoResult");
    }

  };
}

function bufferR(os) {
  return {
    Start() {
      return new NoState(0, "NoState");
    },

    AddText(z$$13, s) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os, (0, _String.printf)("%s"))(s.Text);
      return z$$13;
    },

    AddBreak(z$$14, n$$3) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os, (0, _String.printf)("\n"));
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os, (0, _String.printf)("%s"))(spaces(n$$3));
      return z$$14;
    },

    AddTag(z$$15, tag$$4, attrs$$3, start) {
      return z$$15;
    },

    Finish(z$$16) {
      return new NoResult(0, "NoResult");
    }

  };
}

function showL(layout$$9) {
  return renderL(stringR, layout$$9);
}

function bufferL(os$$1, layout$$10) {
  renderL(bufferR(os$$1), layout$$10);
}