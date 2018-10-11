"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaggedTextOps$$$tag = TaggedTextOps$$$tag;
exports.TaggedTextOps$$$length = TaggedTextOps$$$length;
exports.TaggedTextOps$$$toText = TaggedTextOps$$$toText;
exports.TaggedTextOps$$$tagAlias = TaggedTextOps$$$tagAlias;
exports.TaggedTextOps$$$tagClass = TaggedTextOps$$$tagClass;
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
exports.LayoutOps$$$juxtLeft = LayoutOps$$$juxtLeft;
exports.LayoutOps$$$juxtRight = LayoutOps$$$juxtRight;
exports.LayoutOps$$$mkNode = LayoutOps$$$mkNode;
exports.LayoutOps$$$objL = LayoutOps$$$objL;
exports.LayoutOps$$$sLeaf = LayoutOps$$$sLeaf;
exports.LayoutOps$$$wordL = LayoutOps$$$wordL;
exports.LayoutOps$$$sepL = LayoutOps$$$sepL;
exports.LayoutOps$$$rightL = LayoutOps$$$rightL;
exports.LayoutOps$$$leftL = LayoutOps$$$leftL;
exports.LayoutOps$$$isEmptyL = LayoutOps$$$isEmptyL;
exports.LayoutOps$$$aboveL = LayoutOps$$$aboveL;
exports.LayoutOps$$$tagAttrL = LayoutOps$$$tagAttrL;
exports.LayoutOps$$$apply2 = LayoutOps$$$apply2;
exports.LayoutOps$$$op_HatHat = LayoutOps$$$op_HatHat;
exports.LayoutOps$$$op_PlusPlus = LayoutOps$$$op_PlusPlus;
exports.LayoutOps$$$op_MinusMinus = LayoutOps$$$op_MinusMinus;
exports.LayoutOps$$$op_MinusMinusMinus = LayoutOps$$$op_MinusMinusMinus;
exports.LayoutOps$$$op_AtAt = LayoutOps$$$op_AtAt;
exports.LayoutOps$$$op_AtAtMinus = LayoutOps$$$op_AtAtMinus;
exports.LayoutOps$$$op_AtAtMinusMinus = LayoutOps$$$op_AtAtMinusMinus;
exports.LayoutOps$$$tagListL = LayoutOps$$$tagListL;
exports.LayoutOps$$$commaListL = LayoutOps$$$commaListL;
exports.LayoutOps$$$semiListL = LayoutOps$$$semiListL;
exports.LayoutOps$$$spaceListL = LayoutOps$$$spaceListL;
exports.LayoutOps$$$sepListL = LayoutOps$$$sepListL;
exports.LayoutOps$$$bracketL = LayoutOps$$$bracketL;
exports.LayoutOps$$$tupleL = LayoutOps$$$tupleL;
exports.LayoutOps$$$aboveListL = LayoutOps$$$aboveListL;
exports.LayoutOps$$$optionL = LayoutOps$$$optionL;
exports.LayoutOps$$$listL = LayoutOps$$$listL;
exports.LayoutOps$$$squareBracketL = LayoutOps$$$squareBracketL;
exports.LayoutOps$$$braceL = LayoutOps$$$braceL;
exports.LayoutOps$$$boundedUnfoldL = LayoutOps$$$boundedUnfoldL;
exports.LayoutOps$$$unfoldL = LayoutOps$$$unfoldL;
exports.LayoutOps$$$emptyL = exports.TaggedTextOps$002ELiterals$$$questionMark = exports.TaggedTextOps$002ELiterals$$$arrow = exports.TaggedTextOps$002ELiterals$$$equals = exports.TaggedTextOps$002ELiterals$$$rightBrace = exports.TaggedTextOps$002ELiterals$$$leftBrace = exports.TaggedTextOps$002ELiterals$$$rightBracket = exports.TaggedTextOps$002ELiterals$$$leftBracket = exports.TaggedTextOps$002ELiterals$$$rightParen = exports.TaggedTextOps$002ELiterals$$$leftParen = exports.TaggedTextOps$002ELiterals$$$semicolon = exports.TaggedTextOps$002ELiterals$$$comma = exports.TaggedTextOps$002ELiterals$$$space = exports.TaggedTextOps$002ELiterals$$$lineBreak = exports.TaggedTextOps$$$keywordTypes = exports.TaggedTextOps$$$keywordFunctions = exports.Layout = exports.Joint = exports.LayoutTag = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _Set = require("../fable-core.2.0.3/Set");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

const LayoutTag = (0, _Types.declare)(function LayoutTag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LayoutTag = LayoutTag;
const Joint = (0, _Types.declare)(function Joint(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Joint = Joint;
const Layout = (0, _Types.declare)(function Layout(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Layout = Layout;

function TaggedTextOps$$$tag(tag, text) {
  return {
    get Tag() {
      return tag;
    },

    get Text() {
      return text;
    }

  };
}

function TaggedTextOps$$$length(tt) {
  return tt.Text.length;
}

function TaggedTextOps$$$toText(tt$$1) {
  return tt$$1.Text;
}

function TaggedTextOps$$$tagAlias(t) {
  return TaggedTextOps$$$tag(new LayoutTag(2, "Alias"), t);
}

const TaggedTextOps$$$keywordFunctions = (0, _Set.ofSeq)(["raise", "reraise", "typeof", "typedefof", "sizeof", "nameof"], {
  Compare: _Util.comparePrimitives
});
exports.TaggedTextOps$$$keywordFunctions = TaggedTextOps$$$keywordFunctions;
const TaggedTextOps$$$keywordTypes = (0, _Set.ofList)((0, _Types.L)("array", (0, _Types.L)("bigint", (0, _Types.L)("bool", (0, _Types.L)("byref", (0, _Types.L)("byte", (0, _Types.L)("char", (0, _Types.L)("decimal", (0, _Types.L)("double", (0, _Types.L)("float", (0, _Types.L)("float32", (0, _Types.L)("int", (0, _Types.L)("int8", (0, _Types.L)("int16", (0, _Types.L)("int32", (0, _Types.L)("int64", (0, _Types.L)("list", (0, _Types.L)("nativeint", (0, _Types.L)("obj", (0, _Types.L)("sbyte", (0, _Types.L)("seq", (0, _Types.L)("single", (0, _Types.L)("string", (0, _Types.L)("unit", (0, _Types.L)("uint", (0, _Types.L)("uint8", (0, _Types.L)("uint16", (0, _Types.L)("uint32", (0, _Types.L)("uint64", (0, _Types.L)("unativeint", (0, _Types.L)()))))))))))))))))))))))))))))), {
  Compare: _Util.comparePrimitives
});
exports.TaggedTextOps$$$keywordTypes = TaggedTextOps$$$keywordTypes;

function TaggedTextOps$$$tagClass(name) {
  if ((0, _Set.contains)(name, TaggedTextOps$$$keywordTypes)) {
    return TaggedTextOps$$$tag(new LayoutTag(11, "Keyword"), name);
  } else {
    return TaggedTextOps$$$tag(new LayoutTag(3, "Class"), name);
  }
}

function TaggedTextOps$$$tagUnionCase(t$$1) {
  return TaggedTextOps$$$tag(new LayoutTag(5, "UnionCase"), t$$1);
}

function TaggedTextOps$$$tagDelegate(t$$2) {
  return TaggedTextOps$$$tag(new LayoutTag(6, "Delegate"), t$$2);
}

function TaggedTextOps$$$tagEnum(t$$3) {
  return TaggedTextOps$$$tag(new LayoutTag(7, "Enum"), t$$3);
}

function TaggedTextOps$$$tagEvent(t$$4) {
  return TaggedTextOps$$$tag(new LayoutTag(8, "Event"), t$$4);
}

function TaggedTextOps$$$tagField(t$$5) {
  return TaggedTextOps$$$tag(new LayoutTag(9, "Field"), t$$5);
}

function TaggedTextOps$$$tagInterface(t$$6) {
  return TaggedTextOps$$$tag(new LayoutTag(10, "Interface"), t$$6);
}

function TaggedTextOps$$$tagKeyword(t$$7) {
  return TaggedTextOps$$$tag(new LayoutTag(11, "Keyword"), t$$7);
}

function TaggedTextOps$$$tagLineBreak(t$$8) {
  return TaggedTextOps$$$tag(new LayoutTag(12, "LineBreak"), t$$8);
}

function TaggedTextOps$$$tagLocal(t$$9) {
  return TaggedTextOps$$$tag(new LayoutTag(13, "Local"), t$$9);
}

function TaggedTextOps$$$tagRecord(t$$10) {
  return TaggedTextOps$$$tag(new LayoutTag(14, "Record"), t$$10);
}

function TaggedTextOps$$$tagRecordField(t$$11) {
  return TaggedTextOps$$$tag(new LayoutTag(15, "RecordField"), t$$11);
}

function TaggedTextOps$$$tagMethod(t$$12) {
  return TaggedTextOps$$$tag(new LayoutTag(16, "Method"), t$$12);
}

function TaggedTextOps$$$tagModule(t$$13) {
  return TaggedTextOps$$$tag(new LayoutTag(19, "Module"), t$$13);
}

function TaggedTextOps$$$tagModuleBinding(name$$1) {
  if ((0, _Set.FSharpSet$$Contains$$2B595)(TaggedTextOps$$$keywordFunctions, name$$1)) {
    return TaggedTextOps$$$tag(new LayoutTag(11, "Keyword"), name$$1);
  } else {
    return TaggedTextOps$$$tag(new LayoutTag(18, "ModuleBinding"), name$$1);
  }
}

function TaggedTextOps$$$tagNamespace(t$$14) {
  return TaggedTextOps$$$tag(new LayoutTag(20, "Namespace"), t$$14);
}

function TaggedTextOps$$$tagNumericLiteral(t$$15) {
  return TaggedTextOps$$$tag(new LayoutTag(21, "NumericLiteral"), t$$15);
}

function TaggedTextOps$$$tagOperator(t$$16) {
  return TaggedTextOps$$$tag(new LayoutTag(22, "Operator"), t$$16);
}

function TaggedTextOps$$$tagParameter(t$$17) {
  return TaggedTextOps$$$tag(new LayoutTag(23, "Parameter"), t$$17);
}

function TaggedTextOps$$$tagProperty(t$$18) {
  return TaggedTextOps$$$tag(new LayoutTag(24, "Property"), t$$18);
}

function TaggedTextOps$$$tagSpace(t$$19) {
  return TaggedTextOps$$$tag(new LayoutTag(25, "Space"), t$$19);
}

function TaggedTextOps$$$tagStringLiteral(t$$20) {
  return TaggedTextOps$$$tag(new LayoutTag(26, "StringLiteral"), t$$20);
}

function TaggedTextOps$$$tagStruct(t$$21) {
  return TaggedTextOps$$$tag(new LayoutTag(27, "Struct"), t$$21);
}

function TaggedTextOps$$$tagTypeParameter(t$$22) {
  return TaggedTextOps$$$tag(new LayoutTag(28, "TypeParameter"), t$$22);
}

function TaggedTextOps$$$tagText(t$$23) {
  return TaggedTextOps$$$tag(new LayoutTag(29, "Text"), t$$23);
}

function TaggedTextOps$$$tagPunctuation(t$$24) {
  return TaggedTextOps$$$tag(new LayoutTag(30, "Punctuation"), t$$24);
}

const TaggedTextOps$002ELiterals$$$lineBreak = TaggedTextOps$$$tagLineBreak("\n");
exports.TaggedTextOps$002ELiterals$$$lineBreak = TaggedTextOps$002ELiterals$$$lineBreak;
const TaggedTextOps$002ELiterals$$$space = TaggedTextOps$$$tagSpace(" ");
exports.TaggedTextOps$002ELiterals$$$space = TaggedTextOps$002ELiterals$$$space;
const TaggedTextOps$002ELiterals$$$comma = TaggedTextOps$$$tagPunctuation(",");
exports.TaggedTextOps$002ELiterals$$$comma = TaggedTextOps$002ELiterals$$$comma;
const TaggedTextOps$002ELiterals$$$semicolon = TaggedTextOps$$$tagPunctuation(";");
exports.TaggedTextOps$002ELiterals$$$semicolon = TaggedTextOps$002ELiterals$$$semicolon;
const TaggedTextOps$002ELiterals$$$leftParen = TaggedTextOps$$$tagPunctuation("(");
exports.TaggedTextOps$002ELiterals$$$leftParen = TaggedTextOps$002ELiterals$$$leftParen;
const TaggedTextOps$002ELiterals$$$rightParen = TaggedTextOps$$$tagPunctuation(")");
exports.TaggedTextOps$002ELiterals$$$rightParen = TaggedTextOps$002ELiterals$$$rightParen;
const TaggedTextOps$002ELiterals$$$leftBracket = TaggedTextOps$$$tagPunctuation("[");
exports.TaggedTextOps$002ELiterals$$$leftBracket = TaggedTextOps$002ELiterals$$$leftBracket;
const TaggedTextOps$002ELiterals$$$rightBracket = TaggedTextOps$$$tagPunctuation("]");
exports.TaggedTextOps$002ELiterals$$$rightBracket = TaggedTextOps$002ELiterals$$$rightBracket;
const TaggedTextOps$002ELiterals$$$leftBrace = TaggedTextOps$$$tagPunctuation("{");
exports.TaggedTextOps$002ELiterals$$$leftBrace = TaggedTextOps$002ELiterals$$$leftBrace;
const TaggedTextOps$002ELiterals$$$rightBrace = TaggedTextOps$$$tagPunctuation("}");
exports.TaggedTextOps$002ELiterals$$$rightBrace = TaggedTextOps$002ELiterals$$$rightBrace;
const TaggedTextOps$002ELiterals$$$equals = TaggedTextOps$$$tagOperator("=");
exports.TaggedTextOps$002ELiterals$$$equals = TaggedTextOps$002ELiterals$$$equals;
const TaggedTextOps$002ELiterals$$$arrow = TaggedTextOps$$$tagPunctuation("->");
exports.TaggedTextOps$002ELiterals$$$arrow = TaggedTextOps$002ELiterals$$$arrow;
const TaggedTextOps$002ELiterals$$$questionMark = TaggedTextOps$$$tagPunctuation("?");
exports.TaggedTextOps$002ELiterals$$$questionMark = TaggedTextOps$002ELiterals$$$questionMark;

function LayoutOps$$$juxtLeft(_arg1) {
  LayoutOps$$$juxtLeft: while (true) {
    switch (_arg1.tag) {
      case 1:
        {
          const jl$$1 = _arg1.fields[0];
          return jl$$1;
        }

      case 2:
        {
          const jl$$2 = _arg1.fields[0];
          return jl$$2;
        }

      case 3:
        {
          const l = _arg1.fields[2];
          _arg1 = l;
          continue LayoutOps$$$juxtLeft;
        }

      default:
        {
          const jl = _arg1.fields[0];
          return jl;
        }
    }
  }
}

function LayoutOps$$$juxtRight(_arg1$$1) {
  LayoutOps$$$juxtRight: while (true) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          const jr$$1 = _arg1$$1.fields[2];
          return jr$$1;
        }

      case 2:
        {
          const jr$$2 = _arg1$$1.fields[4];
          return jr$$2;
        }

      case 3:
        {
          const l$$1 = _arg1$$1.fields[2];
          _arg1$$1 = l$$1;
          continue LayoutOps$$$juxtRight;
        }

      default:
        {
          const jr = _arg1$$1.fields[2];
          return jr;
        }
    }
  }
}

function LayoutOps$$$mkNode(l$$2, r, joint$$1) {
  const jl$$3 = LayoutOps$$$juxtLeft(l$$2);
  const jm = LayoutOps$$$juxtRight(l$$2) ? true : LayoutOps$$$juxtLeft(r);
  const jr$$3 = LayoutOps$$$juxtRight(r);
  return new Layout(2, "Node", jl$$3, l$$2, jm, r, jr$$3, joint$$1);
}

function LayoutOps$$$objL(value) {
  if (typeof value === "string") {
    return new Layout(1, "Leaf", false, TaggedTextOps$$$tag(new LayoutTag(29, "Text"), value), false);
  } else {
    return new Layout(0, "ObjLeaf", false, value, false);
  }
}

function LayoutOps$$$sLeaf(l$$3, t$$25, r$$1) {
  return new Layout(1, "Leaf", l$$3, t$$25, r$$1);
}

function LayoutOps$$$wordL(text$$1) {
  return LayoutOps$$$sLeaf(false, text$$1, false);
}

function LayoutOps$$$sepL(text$$2) {
  return LayoutOps$$$sLeaf(true, text$$2, true);
}

function LayoutOps$$$rightL(text$$3) {
  return LayoutOps$$$sLeaf(true, text$$3, false);
}

function LayoutOps$$$leftL(text$$4) {
  return LayoutOps$$$sLeaf(false, text$$4, true);
}

const LayoutOps$$$emptyL = LayoutOps$$$sLeaf(true, TaggedTextOps$$$tag(new LayoutTag(29, "Text"), ""), true);
exports.LayoutOps$$$emptyL = LayoutOps$$$emptyL;

function LayoutOps$$$isEmptyL(layout$$1) {
  var $target$$5, s$$1;

  if (layout$$1.tag === 1) {
    if (layout$$1.fields[0]) {
      if (layout$$1.fields[2]) {
        $target$$5 = 0;
        s$$1 = layout$$1.fields[1];
      } else {
        $target$$5 = 1;
      }
    } else {
      $target$$5 = 1;
    }
  } else {
    $target$$5 = 1;
  }

  switch ($target$$5) {
    case 0:
      {
        return s$$1.Text === "";
      }

    case 1:
      {
        return false;
      }
  }
}

function LayoutOps$$$aboveL(layout1, layout2) {
  return LayoutOps$$$mkNode(layout1, layout2, new Joint(2, "Broken", 0));
}

function LayoutOps$$$tagAttrL(text$$5, maps, layout$$2) {
  return new Layout(3, "Attr", text$$5, maps, layout$$2);
}

function LayoutOps$$$apply2(f, l$$4, r$$2) {
  if (LayoutOps$$$isEmptyL(l$$4)) {
    return r$$2;
  } else if (LayoutOps$$$isEmptyL(r$$2)) {
    return l$$4;
  } else {
    return f(l$$4, r$$2);
  }
}

function LayoutOps$$$op_HatHat(layout1$$1, layout2$$1) {
  return LayoutOps$$$mkNode(layout1$$1, layout2$$1, new Joint(0, "Unbreakable"));
}

function LayoutOps$$$op_PlusPlus(layout1$$2, layout2$$2) {
  return LayoutOps$$$mkNode(layout1$$2, layout2$$2, new Joint(1, "Breakable", 0));
}

function LayoutOps$$$op_MinusMinus(layout1$$3, layout2$$3) {
  return LayoutOps$$$mkNode(layout1$$3, layout2$$3, new Joint(1, "Breakable", 1));
}

function LayoutOps$$$op_MinusMinusMinus(layout1$$4, layout2$$4) {
  return LayoutOps$$$mkNode(layout1$$4, layout2$$4, new Joint(1, "Breakable", 2));
}

function LayoutOps$$$op_AtAt(layout1$$5, layout2$$5) {
  return LayoutOps$$$apply2(function (l$$5, r$$3) {
    return LayoutOps$$$mkNode(l$$5, r$$3, new Joint(2, "Broken", 0));
  }, layout1$$5, layout2$$5);
}

function LayoutOps$$$op_AtAtMinus(layout1$$6, layout2$$6) {
  return LayoutOps$$$apply2(function (l$$6, r$$4) {
    return LayoutOps$$$mkNode(l$$6, r$$4, new Joint(2, "Broken", 1));
  }, layout1$$6, layout2$$6);
}

function LayoutOps$$$op_AtAtMinusMinus(layout1$$7, layout2$$7) {
  return LayoutOps$$$apply2(function (l$$7, r$$5) {
    return LayoutOps$$$mkNode(l$$7, r$$5, new Joint(2, "Broken", 2));
  }, layout1$$7, layout2$$7);
}

function LayoutOps$$$tagListL(tagger, _arg1$$2) {
  if (_arg1$$2.tail != null) {
    if (_arg1$$2.tail.tail == null) {
      return _arg1$$2.head;
    } else {
      const process$0027 = function process$0027(prefixL, _arg2) {
        process$0027: while (true) {
          if (_arg2.tail != null) {
            const ys = _arg2.tail;
            const y = _arg2.head;
            prefixL = LayoutOps$$$op_PlusPlus(tagger(prefixL), y);
            _arg2 = ys;
            continue process$0027;
          } else {
            return prefixL;
          }
        }
      };

      return process$0027(_arg1$$2.head, _arg1$$2.tail);
    }
  } else {
    return LayoutOps$$$emptyL;
  }
}

function LayoutOps$$$commaListL(layouts) {
  return LayoutOps$$$tagListL(function (prefixL$$1) {
    return LayoutOps$$$op_HatHat(prefixL$$1, LayoutOps$$$rightL(TaggedTextOps$002ELiterals$$$comma));
  }, layouts);
}

function LayoutOps$$$semiListL(layouts$$1) {
  return LayoutOps$$$tagListL(function (prefixL$$2) {
    return LayoutOps$$$op_HatHat(prefixL$$2, LayoutOps$$$rightL(TaggedTextOps$002ELiterals$$$semicolon));
  }, layouts$$1);
}

function LayoutOps$$$spaceListL(layouts$$2) {
  return LayoutOps$$$tagListL(function (prefixL$$3) {
    return prefixL$$3;
  }, layouts$$2);
}

function LayoutOps$$$sepListL(layout1$$8, layouts$$3) {
  return LayoutOps$$$tagListL(function (prefixL$$4) {
    return LayoutOps$$$op_HatHat(prefixL$$4, layout1$$8);
  }, layouts$$3);
}

function LayoutOps$$$bracketL(layout$$3) {
  return LayoutOps$$$op_HatHat(LayoutOps$$$leftL(TaggedTextOps$002ELiterals$$$leftParen), LayoutOps$$$op_HatHat(layout$$3, LayoutOps$$$rightL(TaggedTextOps$002ELiterals$$$rightParen)));
}

function LayoutOps$$$tupleL(layouts$$4) {
  return LayoutOps$$$bracketL(LayoutOps$$$sepListL(LayoutOps$$$sepL(TaggedTextOps$002ELiterals$$$comma), layouts$$4));
}

function LayoutOps$$$aboveListL(layouts$$5) {
  if (layouts$$5.tail != null) {
    if (layouts$$5.tail.tail == null) {
      return layouts$$5.head;
    } else {
      return (0, _List.fold)(LayoutOps$$$op_AtAt, layouts$$5.head, layouts$$5.tail);
    }
  } else {
    return LayoutOps$$$emptyL;
  }
}

function LayoutOps$$$optionL(selector, value$$1) {
  if (value$$1 != null) {
    const x$$6 = (0, _Option.value)(value$$1);
    return LayoutOps$$$op_MinusMinus(LayoutOps$$$wordL(TaggedTextOps$$$tagUnionCase("Some")), selector(x$$6));
  } else {
    return LayoutOps$$$wordL(TaggedTextOps$$$tagUnionCase("None"));
  }
}

function LayoutOps$$$listL(selector$$1, value$$2) {
  return LayoutOps$$$op_HatHat(LayoutOps$$$leftL(TaggedTextOps$002ELiterals$$$leftBracket), LayoutOps$$$op_HatHat(LayoutOps$$$sepListL(LayoutOps$$$sepL(TaggedTextOps$002ELiterals$$$semicolon), (0, _List.map)(selector$$1, value$$2)), LayoutOps$$$rightL(TaggedTextOps$002ELiterals$$$rightBracket)));
}

function LayoutOps$$$squareBracketL(layout$$4) {
  return LayoutOps$$$op_HatHat(LayoutOps$$$leftL(TaggedTextOps$002ELiterals$$$leftBracket), LayoutOps$$$op_HatHat(layout$$4, LayoutOps$$$rightL(TaggedTextOps$002ELiterals$$$rightBracket)));
}

function LayoutOps$$$braceL(layout$$5) {
  return LayoutOps$$$op_HatHat(LayoutOps$$$leftL(TaggedTextOps$002ELiterals$$$leftBrace), LayoutOps$$$op_HatHat(layout$$5, LayoutOps$$$rightL(TaggedTextOps$002ELiterals$$$rightBrace)));
}

function LayoutOps$$$boundedUnfoldL(itemL, project, stopShort, z, maxLength) {
  const consume = function consume(n, z$$1) {
    if (stopShort(z$$1)) {
      return (0, _Types.L)(LayoutOps$$$wordL(TaggedTextOps$$$tagPunctuation("...")), (0, _Types.L)());
    } else {
      const matchValue = project(z$$1);

      if (matchValue != null) {
        const z$$2 = matchValue[1];
        const x$$7 = matchValue[0];

        if (n <= 0) {
          return (0, _Types.L)(LayoutOps$$$wordL(TaggedTextOps$$$tagPunctuation("...")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(itemL(x$$7), consume(n - 1, z$$2));
        }
      } else {
        return (0, _Types.L)();
      }
    }
  };

  return consume(maxLength, z);
}

function LayoutOps$$$unfoldL(selector$$2, folder, state, count) {
  return LayoutOps$$$boundedUnfoldL(selector$$2, folder, function (_arg1$$3) {
    return false;
  }, state, count);
}