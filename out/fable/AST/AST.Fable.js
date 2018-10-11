"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type$$get_Generics = Type$$get_Generics;
exports.Type$$ReplaceGenerics$$ZE41DBA1 = Type$$ReplaceGenerics$$ZE41DBA1;
exports.File$$$$002Ector$$788BC77C = File$$$$002Ector$$788BC77C;
exports.File$$get_SourcePath = File$$get_SourcePath;
exports.File$$get_Declarations = File$$get_Declarations;
exports.File$$get_UsedVarNames = File$$get_UsedVarNames;
exports.File$$get_Dependencies = File$$get_Dependencies;
exports.Ident$$get_IsBaseValue = Ident$$get_IsBaseValue;
exports.Ident$$get_IsThisArgDeclaration = Ident$$get_IsThisArgDeclaration;
exports.ValueKind$$get_Type = ValueKind$$get_Type;
exports.Expr$$get_Type = Expr$$get_Type;
exports.Expr$$get_Range = Expr$$get_Range;
exports.File = exports.Expr = exports.DelayedResolutionKind = exports.ObjectMember = exports.ObjectMemberKind = exports.TestKind = exports.SetKind = exports.GetKind = exports.OperationKind = exports.ReplaceCallInfo = exports.ArgInfo = exports.SignatureKind = exports.CallKind = exports.SpreadKind = exports.FunctionKind = exports.LoopKind = exports.ValueKind = exports.NewArrayKind = exports.EnumKind = exports.ImportKind = exports.Ident = exports.IdentKind = exports.Declaration = exports.AttachedMemberDeclarationInfo = exports.ConstructorKind = exports.CompilerGeneratedConstructorInfo = exports.UnionConstructorInfo = exports.ClassImplicitConstructorInfo = exports.ValueDeclarationInfo = exports.Type = exports.FunctionTypeKind = exports.EnumTypeKind = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

var _Prelude = require("../Global/Prelude");

var _Util = require("../fable-core.2.0.3/Util");

var _Set = require("../fable-core.2.0.3/Set");

var _Option = require("../fable-core.2.0.3/Option");

const EnumTypeKind = (0, _Types.declare)(function EnumTypeKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.EnumTypeKind = EnumTypeKind;
const FunctionTypeKind = (0, _Types.declare)(function FunctionTypeKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FunctionTypeKind = FunctionTypeKind;
const Type = (0, _Types.declare)(function Type(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Type = Type;
const ValueDeclarationInfo = (0, _Types.declare)(function ValueDeclarationInfo(arg1, arg2, arg3, arg4, arg5) {
  this.Name = arg1;
  this.IsPublic = arg2;
  this.IsMutable = arg3;
  this.IsEntryPoint = arg4;
  this.HasSpread = arg5;
}, _Types.Record);
exports.ValueDeclarationInfo = ValueDeclarationInfo;
const ClassImplicitConstructorInfo = (0, _Types.declare)(function ClassImplicitConstructorInfo(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  this.Name = arg1;
  this.Entity = arg2;
  this.EntityName = arg3;
  this.IsEntityPublic = arg4;
  this.IsConstructorPublic = arg5;
  this.HasSpread = arg6;
  this.Base = arg7;
  this.Arguments = arg8;
  this.BoundConstructorThis = arg9;
  this.Body = arg10;
}, _Types.Record);
exports.ClassImplicitConstructorInfo = ClassImplicitConstructorInfo;
const UnionConstructorInfo = (0, _Types.declare)(function UnionConstructorInfo(arg1, arg2, arg3) {
  this.Entity = arg1;
  this.EntityName = arg2;
  this.IsPublic = arg3;
}, _Types.Record);
exports.UnionConstructorInfo = UnionConstructorInfo;
const CompilerGeneratedConstructorInfo = (0, _Types.declare)(function CompilerGeneratedConstructorInfo(arg1, arg2, arg3) {
  this.Entity = arg1;
  this.EntityName = arg2;
  this.IsPublic = arg3;
}, _Types.Record);
exports.CompilerGeneratedConstructorInfo = CompilerGeneratedConstructorInfo;
const ConstructorKind = (0, _Types.declare)(function ConstructorKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ConstructorKind = ConstructorKind;
const AttachedMemberDeclarationInfo = (0, _Types.declare)(function AttachedMemberDeclarationInfo(arg1, arg2, arg3) {
  this.Name = arg1;
  this.Kind = arg2;
  this.EntityName = arg3;
}, _Types.Record);
exports.AttachedMemberDeclarationInfo = AttachedMemberDeclarationInfo;
const Declaration = (0, _Types.declare)(function Declaration(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Declaration = Declaration;
const IdentKind = (0, _Types.declare)(function IdentKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IdentKind = IdentKind;
const Ident = (0, _Types.declare)(function Ident(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Name = arg1;
  this.Type = arg2;
  this.Kind = arg3;
  this.IsMutable = arg4;
  this.IsCompilerGenerated = arg5;
  this.Range = arg6;
}, _Types.Record);
exports.Ident = Ident;
const ImportKind = (0, _Types.declare)(function ImportKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ImportKind = ImportKind;
const EnumKind = (0, _Types.declare)(function EnumKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.EnumKind = EnumKind;
const NewArrayKind = (0, _Types.declare)(function NewArrayKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NewArrayKind = NewArrayKind;
const ValueKind = (0, _Types.declare)(function ValueKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValueKind = ValueKind;
const LoopKind = (0, _Types.declare)(function LoopKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LoopKind = LoopKind;
const FunctionKind = (0, _Types.declare)(function FunctionKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FunctionKind = FunctionKind;
const SpreadKind = (0, _Types.declare)(function SpreadKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SpreadKind = SpreadKind;
const CallKind = (0, _Types.declare)(function CallKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CallKind = CallKind;
const SignatureKind = (0, _Types.declare)(function SignatureKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SignatureKind = SignatureKind;
const ArgInfo = (0, _Types.declare)(function ArgInfo(arg1, arg2, arg3, arg4, arg5) {
  this.ThisArg = arg1;
  this.Args = arg2;
  this.SignatureArgTypes = arg3;
  this.Spread = arg4;
  this.IsBaseOrSelfConstructorCall = arg5;
}, _Types.Record);
exports.ArgInfo = ArgInfo;
const ReplaceCallInfo = (0, _Types.declare)(function ReplaceCallInfo(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.CompiledName = arg1;
  this.OverloadSuffix = arg2;
  this.SignatureArgTypes = arg3;
  this.Spread = arg4;
  this.DeclaringEntityFullName = arg5;
  this.GenericArgs = arg6;
}, _Types.Record);
exports.ReplaceCallInfo = ReplaceCallInfo;
const OperationKind = (0, _Types.declare)(function OperationKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OperationKind = OperationKind;
const GetKind = (0, _Types.declare)(function GetKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.GetKind = GetKind;
const SetKind = (0, _Types.declare)(function SetKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SetKind = SetKind;
const TestKind = (0, _Types.declare)(function TestKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TestKind = TestKind;
const ObjectMemberKind = (0, _Types.declare)(function ObjectMemberKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ObjectMemberKind = ObjectMemberKind;
const ObjectMember = (0, _Types.declare)(function ObjectMember(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ObjectMember = ObjectMember;
const DelayedResolutionKind = (0, _Types.declare)(function DelayedResolutionKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.DelayedResolutionKind = DelayedResolutionKind;
const Expr = (0, _Types.declare)(function Expr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Expr = Expr;

function Type$$get_Generics(this$) {
  var $target$$6, gen, argType, returnType, argTypes, returnType$$1, gen$$1, gen$$2, gen$$3;

  if (this$.tag === 9) {
    $target$$6 = 0;
    gen = this$.fields[0];
  } else if (this$.tag === 11) {
    $target$$6 = 0;
    gen = this$.fields[0];
  } else if (this$.tag === 12) {
    $target$$6 = 0;
    gen = this$.fields[0];
  } else if (this$.tag === 13) {
    if (this$.fields[0].tag === 1) {
      $target$$6 = 2;
      argTypes = this$.fields[0].fields[0];
      returnType$$1 = this$.fields[1];
    } else {
      $target$$6 = 1;
      argType = this$.fields[0].fields[0];
      returnType = this$.fields[1];
    }
  } else if (this$.tag === 10) {
    $target$$6 = 3;
    gen$$1 = this$.fields[0];
  } else if (this$.tag === 15) {
    $target$$6 = 4;
    gen$$2 = this$.fields[0];
  } else if (this$.tag === 16) {
    $target$$6 = 5;
    gen$$3 = this$.fields[1];
  } else {
    $target$$6 = 6;
  }

  switch ($target$$6) {
    case 0:
      {
        return (0, _Types.L)(gen, (0, _Types.L)());
      }

    case 1:
      {
        return (0, _Types.L)(argType, (0, _Types.L)(returnType, (0, _Types.L)()));
      }

    case 2:
      {
        return (0, _List.append)(argTypes, (0, _Types.L)(returnType$$1, (0, _Types.L)()));
      }

    case 3:
      {
        return gen$$1;
      }

    case 4:
      {
        return gen$$2;
      }

    case 5:
      {
        return gen$$3;
      }

    case 6:
      {
        return (0, _Types.L)();
      }
  }
}

function Type$$ReplaceGenerics$$ZE41DBA1(this$$$1, newGen) {
  if (this$$$1.tag === 9) {
    return new Type(9, "Option", (0, _List.head)(newGen));
  } else if (this$$$1.tag === 11) {
    return new Type(11, "Array", (0, _List.head)(newGen));
  } else if (this$$$1.tag === 12) {
    return new Type(12, "List", (0, _List.head)(newGen));
  } else if (this$$$1.tag === 13) {
    if (this$$$1.fields[0].tag === 1) {
      const patternInput$$1 = (0, _Prelude.List$$$splitLast)(newGen);
      return new Type(13, "FunctionType", new FunctionTypeKind(1, "DelegateType", patternInput$$1[0]), patternInput$$1[1]);
    } else {
      const patternInput = (0, _Prelude.List$$$splitLast)(newGen);
      return new Type(13, "FunctionType", new FunctionTypeKind(0, "LambdaType", (0, _List.head)(patternInput[0])), patternInput[1]);
    }
  } else if (this$$$1.tag === 10) {
    return new Type(10, "Tuple", newGen);
  } else if (this$$$1.tag === 15) {
    return new Type(15, "ErasedUnion", newGen);
  } else if (this$$$1.tag === 16) {
    return new Type(16, "DeclaredType", this$$$1.fields[0], newGen);
  } else {
    return this$$$1;
  }
}

const File = (0, _Types.declare)(function File(sourcePath, decls, usedVarNames, dependencies) {
  const $this$$1 = this;
  $this$$1.sourcePath = sourcePath;
  $this$$1.decls = decls;
  $this$$1.usedVarNames = usedVarNames;
  $this$$1.dependencies = dependencies;
});
exports.File = File;

function File$$$$002Ector$$788BC77C(sourcePath, decls, usedVarNames, dependencies) {
  return this != null ? File.call(this, sourcePath, decls, usedVarNames, dependencies) : new File(sourcePath, decls, usedVarNames, dependencies);
}

function File$$get_SourcePath(__) {
  return __.sourcePath;
}

function File$$get_Declarations(__$$1) {
  return __$$1.decls;
}

function File$$get_UsedVarNames(__$$2) {
  return (0, _Option.defaultArg)(__$$2.usedVarNames, (0, _Set.empty)({
    Compare: _Util.comparePrimitives
  }));
}

function File$$get_Dependencies(__$$3) {
  return (0, _Option.defaultArg)(__$$3.dependencies, (0, _Set.empty)({
    Compare: _Util.comparePrimitives
  }));
}

function Ident$$get_IsBaseValue(x) {
  if (x.Kind.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function Ident$$get_IsThisArgDeclaration(x$$1) {
  if (x$$1.Kind.tag === 2) {
    return true;
  } else {
    return false;
  }
}

function ValueKind$$get_Type(this$$$2) {
  switch (this$$$2.tag) {
    case 1:
      {
        const t$$1 = this$$$2.fields[0];
        return t$$1;
      }

    case 2:
      {
        return new Type(2, "Unit");
      }

    case 3:
      {
        return new Type(3, "Boolean");
      }

    case 4:
      {
        return new Type(4, "Char");
      }

    case 5:
      {
        return new Type(5, "String");
      }

    case 6:
      {
        const kind = this$$$2.fields[1];
        return new Type(7, "Number", kind);
      }

    case 7:
      {
        return new Type(6, "Regex");
      }

    case 8:
      {
        const kind$$1 = this$$$2.fields[0];
        const fullName = this$$$2.fields[1];
        const kind$$2 = kind$$1.tag === 1 ? new EnumTypeKind(1, "StringEnumType") : new EnumTypeKind(0, "NumberEnumType");
        return new Type(8, "EnumType", kind$$2, fullName);
      }

    case 9:
      {
        const t$$2 = this$$$2.fields[1];
        return new Type(9, "Option", t$$2);
      }

    case 10:
      {
        const t$$3 = this$$$2.fields[1];
        return new Type(11, "Array", t$$3);
      }

    case 11:
      {
        const t$$4 = this$$$2.fields[1];
        return new Type(12, "List", t$$4);
      }

    case 12:
      {
        const exprs = this$$$2.fields[0];
        return new Type(10, "Tuple", (0, _List.map)(function mapping(e) {
          return Expr$$get_Type(e);
        }, exprs));
      }

    case 13:
      {
        const genArgs = this$$$2.fields[2];
        const ent$$1 = this$$$2.fields[1];
        return new Type(16, "DeclaredType", ent$$1, genArgs);
      }

    case 14:
      {
        const genArgs$$1 = this$$$2.fields[3];
        const ent$$2 = this$$$2.fields[2];
        return new Type(16, "DeclaredType", ent$$2, genArgs$$1);
      }

    case 15:
      {
        const genArgs$$2 = this$$$2.fields[1];
        return new Type(15, "ErasedUnion", genArgs$$2);
      }

    default:
      {
        return new Type(0, "MetaType");
      }
  }
}

function Expr$$get_Type(this$$$3) {
  var $target$$7, t$$5, expr;

  switch (this$$$3.tag) {
    case 0:
      $target$$7 = 1;
      break;

    case 1:
      $target$$7 = 2;
      break;

    case 2:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[1];
      break;

    case 4:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[3];
      break;

    case 3:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[1];
      break;

    case 6:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[1];
      break;

    case 8:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[1];
      break;

    case 9:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[2];
      break;

    case 11:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[1];
      break;

    case 13:
      $target$$7 = 3;
      t$$5 = this$$$3.fields[2];
      break;

    case 10:
    case 16:
    case 17:
      $target$$7 = 4;
      break;

    case 14:
      $target$$7 = 5;
      break;

    case 15:
      $target$$7 = 6;
      expr = this$$$3.fields[1];
      break;

    case 18:
      $target$$7 = 6;
      expr = this$$$3.fields[0];
      break;

    case 19:
      $target$$7 = 6;
      expr = this$$$3.fields[1];
      break;

    case 12:
      $target$$7 = 6;
      expr = this$$$3.fields[0];
      break;

    case 5:
      $target$$7 = 7;
      break;

    default:
      $target$$7 = 0;
  }

  switch ($target$$7) {
    case 0:
      {
        return new Type(3, "Boolean");
      }

    case 1:
      {
        const kind$$3 = this$$$3.fields[0];
        return ValueKind$$get_Type(kind$$3);
      }

    case 2:
      {
        const id = this$$$3.fields[0];
        return id.Type;
      }

    case 3:
      {
        return t$$5;
      }

    case 4:
      {
        return new Type(2, "Unit");
      }

    case 5:
      {
        const exprs$$1 = this$$$3.fields[0];
        return Expr$$get_Type((0, _List.last)(exprs$$1));
      }

    case 6:
      {
        return Expr$$get_Type(expr);
      }

    case 7:
      {
        const kind$$4 = this$$$3.fields[0];
        const body = this$$$3.fields[1];

        if (kind$$4.tag === 1) {
          const args = kind$$4.fields[0];
          return new Type(13, "FunctionType", new FunctionTypeKind(1, "DelegateType", (0, _List.map)(function mapping$$1(a) {
            return a.Type;
          }, args)), Expr$$get_Type(body));
        } else {
          const arg = kind$$4.fields[0];
          return new Type(13, "FunctionType", new FunctionTypeKind(0, "LambdaType", arg.Type), Expr$$get_Type(body));
        }
      }
  }
}

function Expr$$get_Range(this$$$4) {
  var $target$$8, e$$1, r;

  switch (this$$$4.tag) {
    case 4:
    case 3:
    case 6:
    case 10:
    case 14:
    case 15:
    case 19:
    case 18:
    case 12:
    case 13:
      $target$$8 = 0;
      break;

    case 5:
      $target$$8 = 1;
      e$$1 = this$$$4.fields[1];
      break;

    case 2:
      $target$$8 = 1;
      e$$1 = this$$$4.fields[0];
      break;

    case 1:
      $target$$8 = 2;
      break;

    case 7:
      $target$$8 = 3;
      r = this$$$4.fields[2];
      break;

    case 8:
      $target$$8 = 3;
      r = this$$$4.fields[2];
      break;

    case 9:
      $target$$8 = 3;
      r = this$$$4.fields[3];
      break;

    case 11:
      $target$$8 = 3;
      r = this$$$4.fields[2];
      break;

    case 16:
      $target$$8 = 3;
      r = this$$$4.fields[3];
      break;

    case 17:
      $target$$8 = 3;
      r = this$$$4.fields[1];
      break;

    default:
      $target$$8 = 0;
  }

  switch ($target$$8) {
    case 0:
      {
        return null;
      }

    case 1:
      {
        return Expr$$get_Range(e$$1);
      }

    case 2:
      {
        const id$$1 = this$$$4.fields[0];
        return id$$1.Range;
      }

    case 3:
      {
        return r;
      }
  }
}