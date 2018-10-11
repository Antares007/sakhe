"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dictionary$00602$002EGetOrAdd$$7C49B873 = Dictionary$00602$002EGetOrAdd$$7C49B873;
exports.Dictionary$00602$002EAddOrUpdate$$Z5E44222A = Dictionary$00602$002EAddOrUpdate$$Z5E44222A;
exports.Project$$$$002Ector$$6CF661BB = Project$$$$002Ector$$6CF661BB;
exports.Project$$get_TimeStamp = Project$$get_TimeStamp;
exports.Project$$get_FableCore = Project$$get_FableCore;
exports.Project$$get_IsWatchCompile = Project$$get_IsWatchCompile;
exports.Project$$get_ImplementationFiles = Project$$get_ImplementationFiles;
exports.Project$$get_RootModules = Project$$get_RootModules;
exports.Project$$get_InlineExprs = Project$$get_InlineExprs;
exports.Project$$get_Errors = Project$$get_Errors;
exports.Project$$get_ProjectOptions = Project$$get_ProjectOptions;
exports.Project$$get_ProjectFile = Project$$get_ProjectFile;
exports.Project$$ContainsFile$$Z721C83C5 = Project$$ContainsFile$$Z721C83C5;
exports.Project$$HasSent$$Z721C83C5 = Project$$HasSent$$Z721C83C5;
exports.Project$$MarkSent$$Z721C83C5 = Project$$MarkSent$$Z721C83C5;
exports.Project$$GetDependencies = Project$$GetDependencies;
exports.Project$$AddDependencies$$Z211F87FA = Project$$AddDependencies$$Z211F87FA;
exports.Project$$GetFilesAndDependent$$5D66A394 = Project$$GetFilesAndDependent$$5D66A394;
exports.Project$$GetOrAddInlineExpr$$Z36C87420 = Project$$GetOrAddInlineExpr$$Z36C87420;
exports.Compiler$$$$002Ector$$Z736F6645 = Compiler$$$$002Ector$$Z736F6645;
exports.Compiler$$GetLogs = Compiler$$GetLogs;
exports.Compiler$$GetFormattedLogs = Compiler$$GetFormattedLogs;
exports.Compiler$$get_Options = Compiler$$get_Options;
exports.Compiler$$get_CurrentFile = Compiler$$get_CurrentFile;
exports.Compiler = exports.Log = exports.Project = exports.FileInfo = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _Types = require("../fable-core.2.0.3/Types");

var _Date = require("../fable-core.2.0.3/Date");

var _Prelude = require("../Global/Prelude");

var _Map = require("../fable-core.2.0.3/Map");

var _Seq = require("../fable-core.2.0.3/Seq");

var _FSharp2Fable = require("./FSharp2Fable");

var _String = require("../fable-core.2.0.3/String");

var _Array = require("../fable-core.2.0.3/Array");

var _Set = require("../fable-core.2.0.3/Set");

var _List = require("../fable-core.2.0.3/List");

var _Compiler = require("../Global/Compiler");

var _Option = require("../fable-core.2.0.3/Option");

function Dictionary$00602$002EGetOrAdd$$7C49B873(x, key, valueFactory) {
  const matchValue = (0, _Util.tryGetValue)(x, key, null);

  if (matchValue[0]) {
    return matchValue[1];
  } else {
    const v$$1 = valueFactory(key);
    x.set(key, v$$1);
    return v$$1;
  }
}

function Dictionary$00602$002EAddOrUpdate$$Z5E44222A(x$$1, key$$1, valueFactory$$1, updateFactory) {
  if (x$$1.has(key$$1)) {
    const v$$2 = updateFactory(key$$1, x$$1.get(key$$1));
    x$$1.set(key$$1, v$$2);
    return v$$2;
  } else {
    const v$$3 = valueFactory$$1(key$$1);
    x$$1.set(key$$1, v$$3);
    return v$$3;
  }
}

const FileInfo = (0, _Types.declare)(function FileInfo(arg1, arg2) {
  this.SentToClient = arg1;
  this.Dependencies = arg2;
}, _Types.Record);
exports.FileInfo = FileInfo;
const Project = (0, _Types.declare)(function Project(projectOptions, implFiles, errors, dependencies, fableCore, isWatchCompile) {
  const $this$$1 = this;
  $this$$1.projectOptions = projectOptions;
  $this$$1.implFiles = implFiles;
  $this$$1.errors = errors;
  $this$$1.fableCore = fableCore;
  $this$$1.isWatchCompile = isWatchCompile;
  $this$$1.timestamp = (0, _Date.now)();
  $this$$1.projectFile = (0, _Prelude.Path$$$normalizePath)($this$$1.projectOptions.ProjectFileName);
  $this$$1.inlineExprs = new Map([]);
  $this$$1.normalizedFiles = (0, _Map.ofSeq)((0, _Seq.map)(function mapping(f) {
    const path = (0, _Prelude.Path$$$normalizeFullPath)(f);
    const matchValue$$1 = (0, _Map.tryFind)(path, dependencies);

    if (matchValue$$1 == null) {
      return [path, new FileInfo(false, [])];
    } else {
      const deps = matchValue$$1;
      return [path, new FileInfo(false, deps)];
    }
  }, $this$$1.projectOptions.SourceFiles), {
    Compare: _Util.comparePrimitives
  });
  $this$$1.rootModules = (0, _Map.map)(function mapping$$1(_arg2, file$$1) {
    return (0, _FSharp2Fable.getRootModuleFullName)(file$$1);
  }, (0, _Map.filter)(function predicate(file, _arg1) {
    return !(0, _String.endsWith)(file, "fsi");
  }, $this$$1.implFiles));
});
exports.Project = Project;

function Project$$$$002Ector$$6CF661BB(projectOptions, implFiles, errors, dependencies, fableCore, isWatchCompile) {
  return this != null ? Project.call(this, projectOptions, implFiles, errors, dependencies, fableCore, isWatchCompile) : new Project(projectOptions, implFiles, errors, dependencies, fableCore, isWatchCompile);
}

function Project$$get_TimeStamp(__) {
  return __.timestamp;
}

function Project$$get_FableCore(__$$1) {
  return __$$1.fableCore;
}

function Project$$get_IsWatchCompile(__$$2) {
  return __$$2.isWatchCompile;
}

function Project$$get_ImplementationFiles(__$$3) {
  return __$$3.implFiles;
}

function Project$$get_RootModules(__$$4) {
  return __$$4.rootModules;
}

function Project$$get_InlineExprs(__$$5) {
  return __$$5.inlineExprs;
}

function Project$$get_Errors(__$$6) {
  return __$$6.errors;
}

function Project$$get_ProjectOptions(__$$7) {
  return __$$7.projectOptions;
}

function Project$$get_ProjectFile(__$$8) {
  return __$$8.projectFile;
}

function Project$$ContainsFile$$Z721C83C5(__$$9, sourceFile) {
  return (0, _Map.FSharpMap$$ContainsKey$$2B595)(__$$9.normalizedFiles, sourceFile);
}

function Project$$HasSent$$Z721C83C5(__$$10, sourceFile$$1) {
  return (0, _Map.FSharpMap$$get_Item$$2B595)(__$$10.normalizedFiles, sourceFile$$1).SentToClient;
}

function Project$$MarkSent$$Z721C83C5(__$$11, sourceFile$$2) {
  const matchValue$$2 = (0, _Map.tryFind)(sourceFile$$2, __$$11.normalizedFiles);

  if (matchValue$$2 == null) {} else {
    const f$$1 = matchValue$$2;
    f$$1.SentToClient = true;
  }
}

function Project$$GetDependencies(__$$12) {
  return (0, _Map.map)(function mapping$$2(_arg3, info) {
    return info.Dependencies;
  }, __$$12.normalizedFiles);
}

function Project$$AddDependencies$$Z211F87FA(__$$13, sourceFile$$3, dependencies$$1) {
  const matchValue$$3 = (0, _Map.tryFind)(sourceFile$$3, __$$13.normalizedFiles);

  if (matchValue$$3 == null) {} else {
    const f$$2 = matchValue$$3;
    f$$2.Dependencies = (0, _Array.map)(_Prelude.Path$$$normalizePath, dependencies$$1, Array);
  }
}

function Project$$GetFilesAndDependent$$5D66A394(__$$14, files) {
  const files$$1 = (0, _Set.ofSeq)(files, {
    Compare: _Util.comparePrimitives
  });
  const dependentFiles = (0, _Set.ofSeq)((0, _Seq.map)(function mapping$$3(kv$$1) {
    return kv$$1[0];
  }, (0, _Seq.filter)(function predicate$$2(kv) {
    return (0, _Seq.exists)(function predicate$$1(arg00$$1) {
      return (0, _Set.FSharpSet$$Contains$$2B595)(files$$1, arg00$$1);
    }, kv[1].Dependencies);
  }, __$$14.normalizedFiles)), {
    Compare: _Util.comparePrimitives
  });
  const filesAndDependent = (0, _Set.union)(files$$1, dependentFiles);
  return (0, _Array.ofSeq)((0, _Seq.choose)(function chooser(kv$$2) {
    if ((0, _Set.FSharpSet$$Contains$$2B595)(filesAndDependent, kv$$2[0])) {
      return kv$$2[0];
    } else {
      return null;
    }
  }, __$$14.normalizedFiles), Array);
}

function Project$$GetOrAddInlineExpr$$Z36C87420(__$$15, fullName, generate) {
  return Dictionary$00602$002EGetOrAdd$$7C49B873(__$$15.inlineExprs, fullName, function (_arg4) {
    return generate();
  });
}

const Log = (0, _Types.declare)(function Log(arg1, arg2, arg3, arg4, arg5) {
  this.Message = arg1;
  this.Tag = arg2;
  this.Severity = arg3;
  this.Range = arg4;
  this.FileName = arg5;
}, _Types.Record);
exports.Log = Log;
const Compiler = (0, _Types.declare)(function Compiler(currentFile, project, options, fableCore$$1) {
  const $this$$8 = this;
  $this$$8.currentFile = currentFile;
  $this$$8.project = project;
  $this$$8.options = options;
  $this$$8.id = 0;
  $this$$8.logs = [];

  if (fableCore$$1 == null) {
    $this$$8["fableCore@94"] = (0, _String.trimEnd)((0, _Prelude.Path$$$getRelativePath)($this$$8.currentFile, Project$$get_FableCore($this$$8.project)), "/");
  } else {
    const fableCore$$2 = fableCore$$1;
    $this$$8["fableCore@94"] = (0, _String.trimEnd)(fableCore$$2, "/");
  }
});
exports.Compiler = Compiler;

function Compiler$$$$002Ector$$Z736F6645(currentFile, project, options, fableCore$$1) {
  return this != null ? Compiler.call(this, currentFile, project, options, fableCore$$1) : new Compiler(currentFile, project, options, fableCore$$1);
}

function Compiler$$GetLogs(__$$16) {
  return (0, _List.ofSeq)(__$$16.logs);
}

function Compiler$$GetFormattedLogs(__$$17) {
  const severityToString = function severityToString(_arg1$$1) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          return "error";
        }

      case 2:
        {
          return "info";
        }

      default:
        {
          return "warning";
        }
    }
  };

  return (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$5(tupledArg) {
    return (0, _Prelude.Tuple$$$make2)(tupledArg[0], (0, _Array.ofSeq)((0, _Seq.map)(function mapping$$4(log$$1) {
      if (log$$1.FileName == null) {
        return log$$1.Message;
      } else {
        const file$$2 = log$$1.FileName;

        if (log$$1.Range == null) {
          return (0, _String.toText)((0, _String.printf)("%s(1,1): %s %s: %s"))(file$$2)(tupledArg[0])(log$$1.Tag)(log$$1.Message);
        } else {
          const r = log$$1.Range;
          return (0, _String.toText)((0, _String.printf)("%s(%i,%i): (%i,%i) %s %s: %s"))(file$$2)(r.start.line)(r.start.column)(r.end.line)(r.end.column)(tupledArg[0])(log$$1.Tag)(log$$1.Message);
        }
      }
    }, tupledArg[1]), Array));
  }, (0, _Map.groupBy)(function projection(log) {
    return severityToString(log.Severity);
  }, __$$17.logs, {
    Compare: _Util.comparePrimitives
  })), {
    Compare: _Util.comparePrimitives
  });
}

function Compiler$$get_Options(__$$18) {
  return __$$18.options;
}

function Compiler$$get_CurrentFile(__$$19) {
  return __$$19.currentFile;
}

Object.defineProperty(Compiler.prototype, "Options", {
  "get": function () {
    const __$$20 = this;
    return __$$20.options;
  }
});
Object.defineProperty(Compiler.prototype, "FableCore", {
  "get": function () {
    const __$$21 = this;
    return __$$21["fableCore@94"];
  }
});
Object.defineProperty(Compiler.prototype, "CurrentFile", {
  "get": function () {
    const __$$22 = this;
    return __$$22.currentFile;
  }
});

Compiler.prototype.GetRootModule = function (fileName) {
  const x$$2 = this;
  const fileName$$1 = (0, _Prelude.Path$$$normalizePathAndEnsureFsExtension)(fileName);
  const matchValue$$6 = (0, _Map.tryFind)(fileName$$1, Project$$get_RootModules(x$$2.project));

  if (matchValue$$6 == null) {
    const msg = (0, _String.toText)((0, _String.printf)("Cannot find root module for %s"))(fileName$$1);
    x$$2.AddLog(msg, new _Compiler.Severity(0, "Warning"));
    return "";
  } else {
    const rootModule = matchValue$$6;
    return rootModule;
  }
};

Compiler.prototype.GetOrAddInlineExpr = function (fullName$$1, generate$$1) {
  const __$$23 = this;
  return Dictionary$00602$002EGetOrAdd$$7C49B873(Project$$get_InlineExprs(__$$23.project), fullName$$1, function (_arg5) {
    return generate$$1();
  });
};

Compiler.prototype.AddLog = function (msg$$1, severity$$1, range, fileName$$2, tag) {
  var file$$3;
  const __$$24 = this;
  const matchValue$$7 = [severity$$1, fileName$$2];
  var $target$$23, file$$4;

  if (matchValue$$7[0].tag === 0) {
    if (matchValue$$7[1] != null) {
      if (file$$3 = matchValue$$7[1], (0, _String.split)(file$$3, ["\\", "/"]).some(function predicate$$3(y$$1) {
        return ".fable" === y$$1;
      })) {
        $target$$23 = 0;
        file$$4 = matchValue$$7[1];
      } else {
        $target$$23 = 1;
      }
    } else {
      $target$$23 = 1;
    }
  } else {
    $target$$23 = 1;
  }

  switch ($target$$23) {
    case 1:
      {
        __$$24.logs.push(new Log(msg$$1, (0, _Option.defaultArg)(tag, "FABLE"), severity$$1, range, fileName$$2));

        break;
      }
  }
};

Compiler.prototype.GetUniqueVar = function (name) {
  const __$$25 = this;
  __$$25.id = __$$25.id + 1;
  return (0, _Prelude.Naming$$$getUniqueName)((0, _Option.defaultArg)(name, "var"), __$$25.id);
};