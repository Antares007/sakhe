"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleOfBits = singleOfBits;
exports.doubleOfBits = doubleOfBits;
exports.align = align;
exports.uncodedToken = uncodedToken;
exports.i32ToUncodedToken = i32ToUncodedToken;
exports.TaggedIndex$00601$$$$002Ector$$Z521B3197 = TaggedIndex$00601$$$$002Ector$$Z521B3197;
exports.uncodedTokenToTypeDefOrRefOrSpec = uncodedTokenToTypeDefOrRefOrSpec;
exports.uncodedTokenToMethodDefOrRef = uncodedTokenToMethodDefOrRef;
exports.$007CTaggedIndex$007C = $007CTaggedIndex$007C;
exports.tokToTaggedIdx = tokToTaggedIdx;
exports.GetStatistics = GetStatistics;
exports.BinaryView$$$$002Ector = BinaryView$$$$002Ector;
exports.ByteView$$$$002Ector$$6C95DA22 = ByteView$$$$002Ector$$6C95DA22;
exports.ByteFile$$$$002Ector$$26C6D9B9 = ByteFile$$$$002Ector$$26C6D9B9;
exports.ByteFile$$get_FileName = ByteFile$$get_FileName;
exports.seekReadByte = seekReadByte;
exports.seekReadBytes = seekReadBytes;
exports.seekReadInt32 = seekReadInt32;
exports.seekReadUInt16 = seekReadUInt16;
exports.seekReadByteAsInt32 = seekReadByteAsInt32;
exports.seekReadInt64 = seekReadInt64;
exports.seekReadUInt16AsInt32 = seekReadUInt16AsInt32;
exports.seekReadCompressedUInt32 = seekReadCompressedUInt32;
exports.seekReadSByte = seekReadSByte;
exports.seekReadSingle = seekReadSingle;
exports.seekReadDouble = seekReadDouble;
exports.seekCountUtf8String = seekCountUtf8String;
exports.seekReadUTF8String = seekReadUTF8String;
exports.seekReadBlob = seekReadBlob;
exports.seekReadUserString = seekReadUserString;
exports.seekReadGuid = seekReadGuid;
exports.seekReadUncodedToken = seekReadUncodedToken;
exports.sigptrCheck = sigptrCheck;
exports.sigptrGetByte = sigptrGetByte;
exports.sigptrGetBool = sigptrGetBool;
exports.sigptrGetSByte = sigptrGetSByte;
exports.sigptrGetUInt16 = sigptrGetUInt16;
exports.sigptrGetInt16 = sigptrGetInt16;
exports.sigptrGetInt32 = sigptrGetInt32;
exports.sigptrGetUInt32 = sigptrGetUInt32;
exports.sigptrGetUInt64 = sigptrGetUInt64;
exports.sigptrGetInt64 = sigptrGetInt64;
exports.sigptrGetSingle = sigptrGetSingle;
exports.sigptrGetDouble = sigptrGetDouble;
exports.sigptrGetZInt32 = sigptrGetZInt32;
exports.sigptrFoldAcc = sigptrFoldAcc;
exports.sigptrFold = sigptrFold;
exports.sigptrGetBytes = sigptrGetBytes;
exports.sigptrGetString = sigptrGetString;
exports.noPrefixes = noPrefixes;
exports.volatileOrUnalignedPrefix = volatileOrUnalignedPrefix;
exports.volatilePrefix = volatilePrefix;
exports.tailPrefix = tailPrefix;
exports.constraintOrTailPrefix = constraintOrTailPrefix;
exports.readonlyPrefix = readonlyPrefix;
exports.mkStind = mkStind;
exports.mkLdind = mkLdind;
exports.instrs = instrs;
exports.fillInstrs = fillInstrs;
exports.getOneByteInstr = getOneByteInstr;
exports.getTwoByteInstr = getTwoByteInstr;
exports.chunk = chunk;
exports.nochunk = nochunk;
exports.hcCompare = hcCompare;
exports.hsCompare = hsCompare;
exports.hcaCompare = hcaCompare;
exports.mfCompare = mfCompare;
exports.hdsCompare = hdsCompare;
exports.hfmCompare = hfmCompare;
exports.tomdCompare = tomdCompare;
exports.simpleIndexCompare = simpleIndexCompare;
exports.mkCacheInt32 = mkCacheInt32;
exports.mkCacheGeneric = mkCacheGeneric;
exports.seekFindRow = seekFindRow;
exports.seekReadIndexedRows = seekReadIndexedRows;
exports.seekReadOptionalIndexedRow = seekReadOptionalIndexedRow;
exports.seekReadIndexedRow = seekReadIndexedRow;
exports.seekReadUInt16Adv = seekReadUInt16Adv;
exports.seekReadInt32Adv = seekReadInt32Adv;
exports.seekReadUInt16AsInt32Adv = seekReadUInt16AsInt32Adv;
exports.seekReadTaggedIdx = seekReadTaggedIdx;
exports.seekReadIdx = seekReadIdx;
exports.seekReadUntaggedIdx = seekReadUntaggedIdx;
exports.seekReadResolutionScopeIdx = seekReadResolutionScopeIdx;
exports.seekReadTypeDefOrRefOrSpecIdx = seekReadTypeDefOrRefOrSpecIdx;
exports.seekReadTypeOrMethodDefIdx = seekReadTypeOrMethodDefIdx;
exports.seekReadHasConstantIdx = seekReadHasConstantIdx;
exports.seekReadHasCustomAttributeIdx = seekReadHasCustomAttributeIdx;
exports.seekReadHasFieldMarshalIdx = seekReadHasFieldMarshalIdx;
exports.seekReadHasDeclSecurityIdx = seekReadHasDeclSecurityIdx;
exports.seekReadMemberRefParentIdx = seekReadMemberRefParentIdx;
exports.seekReadHasSemanticsIdx = seekReadHasSemanticsIdx;
exports.seekReadMethodDefOrRefIdx = seekReadMethodDefOrRefIdx;
exports.seekReadMemberForwardedIdx = seekReadMemberForwardedIdx;
exports.seekReadImplementationIdx = seekReadImplementationIdx;
exports.seekReadCustomAttributeTypeIdx = seekReadCustomAttributeTypeIdx;
exports.seekReadStringIdx = seekReadStringIdx;
exports.seekReadGuidIdx = seekReadGuidIdx;
exports.seekReadBlobIdx = seekReadBlobIdx;
exports.seekReadModuleRow = seekReadModuleRow;
exports.seekReadTypeRefRow = seekReadTypeRefRow;
exports.seekReadTypeDefRow = seekReadTypeDefRow;
exports.seekReadTypeDefRowUncached = seekReadTypeDefRowUncached;
exports.seekReadFieldRow = seekReadFieldRow;
exports.seekReadMethodRow = seekReadMethodRow;
exports.seekReadParamRow = seekReadParamRow;
exports.seekReadInterfaceImplRow = seekReadInterfaceImplRow;
exports.seekReadMemberRefRow = seekReadMemberRefRow;
exports.seekReadConstantRow = seekReadConstantRow;
exports.seekReadConstantRowUncached = seekReadConstantRowUncached;
exports.seekReadCustomAttributeRow = seekReadCustomAttributeRow;
exports.seekReadFieldMarshalRow = seekReadFieldMarshalRow;
exports.seekReadPermissionRow = seekReadPermissionRow;
exports.seekReadClassLayoutRow = seekReadClassLayoutRow;
exports.seekReadFieldLayoutRow = seekReadFieldLayoutRow;
exports.seekReadStandAloneSigRow = seekReadStandAloneSigRow;
exports.seekReadEventMapRow = seekReadEventMapRow;
exports.seekReadEventRow = seekReadEventRow;
exports.seekReadPropertyMapRow = seekReadPropertyMapRow;
exports.seekReadPropertyRow = seekReadPropertyRow;
exports.seekReadMethodSemanticsRow = seekReadMethodSemanticsRow;
exports.seekReadMethodSemanticsRowUncached = seekReadMethodSemanticsRowUncached;
exports.seekReadMethodImplRow = seekReadMethodImplRow;
exports.seekReadModuleRefRow = seekReadModuleRefRow;
exports.seekReadTypeSpecRow = seekReadTypeSpecRow;
exports.seekReadImplMapRow = seekReadImplMapRow;
exports.seekReadFieldRVARow = seekReadFieldRVARow;
exports.seekReadAssemblyRow = seekReadAssemblyRow;
exports.seekReadAssemblyRefRow = seekReadAssemblyRefRow;
exports.seekReadFileRow = seekReadFileRow;
exports.seekReadExportedTypeRow = seekReadExportedTypeRow;
exports.seekReadManifestResourceRow = seekReadManifestResourceRow;
exports.seekReadNestedRow = seekReadNestedRow;
exports.seekReadNestedRowUncached = seekReadNestedRowUncached;
exports.seekReadGenericParamRow = seekReadGenericParamRow;
exports.seekReadGenericParamConstraintRow = seekReadGenericParamConstraintRow;
exports.seekReadMethodSpecRow = seekReadMethodSpecRow;
exports.readUserStringHeapUncached = readUserStringHeapUncached;
exports.readUserStringHeap = readUserStringHeap;
exports.readStringHeapUncached = readStringHeapUncached;
exports.readStringHeap = readStringHeap;
exports.readStringHeapOption = readStringHeapOption;
exports.readBlobHeapUncached = readBlobHeapUncached;
exports.readBlobHeap = readBlobHeap;
exports.readBlobHeapOption = readBlobHeapOption;
exports.readBlobHeapAsBool = readBlobHeapAsBool;
exports.readBlobHeapAsSByte = readBlobHeapAsSByte;
exports.readBlobHeapAsInt16 = readBlobHeapAsInt16;
exports.readBlobHeapAsInt32 = readBlobHeapAsInt32;
exports.readBlobHeapAsInt64 = readBlobHeapAsInt64;
exports.readBlobHeapAsByte = readBlobHeapAsByte;
exports.readBlobHeapAsUInt16 = readBlobHeapAsUInt16;
exports.readBlobHeapAsUInt32 = readBlobHeapAsUInt32;
exports.readBlobHeapAsUInt64 = readBlobHeapAsUInt64;
exports.readBlobHeapAsSingle = readBlobHeapAsSingle;
exports.readBlobHeapAsDouble = readBlobHeapAsDouble;
exports.readNativeResources = readNativeResources;
exports.getDataEndPointsDelayed = getDataEndPointsDelayed;
exports.rvaToData = rvaToData;
exports.isSorted = isSorted;
exports.seekReadModule = seekReadModule;
exports.seekReadAssemblyManifest = seekReadAssemblyManifest;
exports.seekReadAssemblyRef = seekReadAssemblyRef;
exports.seekReadAssemblyRefUncached = seekReadAssemblyRefUncached;
exports.seekReadModuleRef = seekReadModuleRef;
exports.seekReadFile = seekReadFile;
exports.seekReadClassLayout = seekReadClassLayout;
exports.typeAccessOfFlags = typeAccessOfFlags;
exports.typeLayoutOfFlags = typeLayoutOfFlags;
exports.isTopTypeDef = isTopTypeDef;
exports.seekIsTopTypeDefOfIdx = seekIsTopTypeDefOfIdx;
exports.readBlobHeapAsSplitTypeName = readBlobHeapAsSplitTypeName;
exports.readBlobHeapAsTypeName = readBlobHeapAsTypeName;
exports.seekReadTypeDefRowExtents = seekReadTypeDefRowExtents;
exports.seekReadTypeDefRowWithExtents = seekReadTypeDefRowWithExtents;
exports.seekReadPreTypeDef = seekReadPreTypeDef;
exports.typeDefReader = typeDefReader;
exports.seekReadTopTypeDefs = seekReadTopTypeDefs;
exports.seekReadNestedTypeDefs = seekReadNestedTypeDefs;
exports.seekReadInterfaceImpls = seekReadInterfaceImpls;
exports.seekReadGenericParams = seekReadGenericParams;
exports.seekReadGenericParamsUncached = seekReadGenericParamsUncached;
exports.seekReadGenericParamConstraints = seekReadGenericParamConstraints;
exports.seekReadTypeDefAsType = seekReadTypeDefAsType;
exports.seekReadTypeDefAsTypeUncached = seekReadTypeDefAsTypeUncached;
exports.seekReadTypeDefAsTypeRef = seekReadTypeDefAsTypeRef;
exports.seekReadTypeRef = seekReadTypeRef;
exports.seekReadTypeRefUncached = seekReadTypeRefUncached;
exports.seekReadTypeRefAsType = seekReadTypeRefAsType;
exports.seekReadTypeRefAsTypeUncached = seekReadTypeRefAsTypeUncached;
exports.seekReadTypeDefOrRef = seekReadTypeDefOrRef;
exports.seekReadTypeDefOrRefAsTypeRef = seekReadTypeDefOrRefAsTypeRef;
exports.seekReadMethodRefParent = seekReadMethodRefParent;
exports.seekReadMethodDefOrRef = seekReadMethodDefOrRef;
exports.seekReadMethodDefOrRefNoVarargs = seekReadMethodDefOrRefNoVarargs;
exports.seekReadCustomAttrType = seekReadCustomAttrType;
exports.seekReadImplAsScopeRef = seekReadImplAsScopeRef;
exports.seekReadTypeRefScope = seekReadTypeRefScope;
exports.seekReadOptionalTypeDefOrRef = seekReadOptionalTypeDefOrRef;
exports.seekReadField = seekReadField;
exports.seekReadFields = seekReadFields;
exports.seekReadMethods = seekReadMethods;
exports.sigptrGetTypeDefOrRefOrSpecIdx = sigptrGetTypeDefOrRefOrSpecIdx;
exports.sigptrGetTy = sigptrGetTy;
exports.sigptrGetVarArgTys = sigptrGetVarArgTys;
exports.sigptrGetArgTys = sigptrGetArgTys;
exports.sigptrGetLocal = sigptrGetLocal;
exports.readBlobHeapAsMethodSig = readBlobHeapAsMethodSig;
exports.readBlobHeapAsMethodSigUncached = readBlobHeapAsMethodSigUncached;
exports.readBlobHeapAsType = readBlobHeapAsType;
exports.readBlobHeapAsFieldSig = readBlobHeapAsFieldSig;
exports.readBlobHeapAsFieldSigUncached = readBlobHeapAsFieldSigUncached;
exports.readBlobHeapAsPropertySig = readBlobHeapAsPropertySig;
exports.readBlobHeapAsPropertySigUncached = readBlobHeapAsPropertySigUncached;
exports.readBlobHeapAsLocalsSig = readBlobHeapAsLocalsSig;
exports.readBlobHeapAsLocalsSigUncached = readBlobHeapAsLocalsSigUncached;
exports.byteAsHasThis = byteAsHasThis;
exports.byteAsCallConv = byteAsCallConv;
exports.seekReadMemberRefAsMethodData = seekReadMemberRefAsMethodData;
exports.seekReadMemberRefAsMethodDataUncached = seekReadMemberRefAsMethodDataUncached;
exports.seekReadMemberRefAsMethDataNoVarArgs = seekReadMemberRefAsMethDataNoVarArgs;
exports.seekReadMethodSpecAsMethodData = seekReadMethodSpecAsMethodData;
exports.seekReadMethodSpecAsMethodDataUncached = seekReadMethodSpecAsMethodDataUncached;
exports.seekReadMemberRefAsFieldSpec = seekReadMemberRefAsFieldSpec;
exports.seekReadMemberRefAsFieldSpecUncached = seekReadMemberRefAsFieldSpecUncached;
exports.seekReadMethodDefAsMethodData = seekReadMethodDefAsMethodData;
exports.seekReadMethodDefAsMethodDataUncached = seekReadMethodDefAsMethodDataUncached;
exports.seekReadFieldDefAsFieldSpec = seekReadFieldDefAsFieldSpec;
exports.seekReadFieldDefAsFieldSpecUncached = seekReadFieldDefAsFieldSpecUncached;
exports.seekReadMethod = seekReadMethod;
exports.seekReadParams = seekReadParams;
exports.seekReadParamExtras = seekReadParamExtras;
exports.seekReadMethodImpls = seekReadMethodImpls;
exports.seekReadMultipleMethodSemantics = seekReadMultipleMethodSemantics;
exports.seekReadoptional_MethodSemantics = seekReadoptional_MethodSemantics;
exports.seekReadMethodSemantics = seekReadMethodSemantics;
exports.seekReadEvent = seekReadEvent;
exports.seekReadEvents = seekReadEvents;
exports.seekReadProperty = seekReadProperty;
exports.seekReadProperties = seekReadProperties;
exports.customAttrsReader = customAttrsReader;
exports.seekReadCustomAttr = seekReadCustomAttr;
exports.seekReadCustomAttrUncached = seekReadCustomAttrUncached;
exports.securityDeclsReader = securityDeclsReader;
exports.seekReadSecurityDecl = seekReadSecurityDecl;
exports.seekReadConstant = seekReadConstant;
exports.seekReadImplMap = seekReadImplMap;
exports.seekReadTopCode = seekReadTopCode;
exports.seekReadMethodRVA = seekReadMethodRVA;
exports.int32AsILVariantType = int32AsILVariantType;
exports.readBlobHeapAsNativeType = readBlobHeapAsNativeType;
exports.sigptrGetILNativeType = sigptrGetILNativeType;
exports.seekReadManifestResources = seekReadManifestResources;
exports.seekReadNestedExportedTypes = seekReadNestedExportedTypes;
exports.seekReadTopExportedTypes = seekReadTopExportedTypes;
exports.openMetadataReader = openMetadataReader;
exports.openPEFileReader = openPEFileReader;
exports.openPE = openPE;
exports.openPEMetadataOnly = openPEMetadataOnly;
exports.ClosePdbReader = ClosePdbReader;
exports.ILModuleReaderImpl$$$$002Ector$$16CBF37C = ILModuleReaderImpl$$$$002Ector$$16CBF37C;
exports.OpenILModuleReaderFromBytes = OpenILModuleReaderFromBytes;
exports.ILModuleReaderImpl = exports.ILReaderOptions = exports.ReduceMemoryFlag = exports.MetadataOnlyFlag = exports.emptyByteArray = exports.ILMetadataReader = exports.PEReader = exports.VarArgMethodData = exports.MethodData = exports.GenericParamsIdx = exports.CustomAttrIdx = exports.MemberRefAsFspecIdx = exports.MethodSpecAsMspecIdx = exports.MemberRefAsMspecIdx = exports.BlobAsLocalSigIdx = exports.BlobAsPropSigIdx = exports.BlobAsFieldSigIdx = exports.BlobAsMethodSigIdx = exports.TypeRefAsTypIdx = exports.TypeDefAsTypIdx = exports.kindIllegal = exports.kindModule = exports.kindGenericParamConstraint = exports.kindMethodSpec = exports.kindGenericParam_v2_0 = exports.kindGenericParam_v1_1 = exports.kindAssembly = exports.kindExportedType = exports.kindClassLayout = exports.kindManifestResource = exports.kindEvent = exports.kindProperty = exports.kindMethodSemantics = exports.kindImplMap = exports.kindMethodImpl = exports.kindMethodDef = exports.kindParam = exports.kindFieldLayout = exports.kindConstant = exports.kindFieldMarshal = exports.kindFieldRVA = exports.kindFieldDef = exports.kindStandAloneSig = exports.kindMemberRef = exports.kindDeclSecurity = exports.kindCustomAttribute = exports.kindNested = exports.kindInterfaceImpl = exports.kindEventMap = exports.kindPropertyMap = exports.kindTypeDef = exports.kindTypeSpec = exports.kindTypeRef = exports.kindFileRef = exports.kindModuleRef = exports.kindAssemblyRef = exports.RowKind = exports.RowElementKind = exports.ImageChunk = exports.twoByteInstrs = exports.oneByteInstrs = exports.ILInstrDecoder = exports.ILInstrPrefixesRegister = exports.ByteFile = exports.ByteView = exports.BinaryView = exports.stats = exports.Statistics = exports.TaggedIndex$00601 = exports.stronglyHeldReaderCacheSize = exports.stronglyHeldReaderCacheSizeDefault = exports.alwaysMemoryMapFSC = exports.noStableFileHeuristic = exports.logging = exports.checking = void 0;

var _ildiag = require("./ildiag");

var _BitConverter = require("../fable-core.2.0.3/BitConverter");

var _ilbinary = require("./ilbinary");

var _illib = require("./illib");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _Array = require("../fable-core.2.0.3/Array");

var _Encoding = require("../fable-core.2.0.3/Encoding");

var _Long = require("../fable-core.2.0.3/Long");

var _List = require("../fable-core.2.0.3/List");

var _bytes = require("./bytes");

var _il = require("./il");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _String = require("../fable-core.2.0.3/String");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _filename = require("../utils/filename");

const checking = false;
exports.checking = checking;
const logging = false;
exports.logging = logging;

if (checking) {
  (0, _ildiag.dprintn)("warning : ILBinaryReader.checking is on");
}

const noStableFileHeuristic = false;
exports.noStableFileHeuristic = noStableFileHeuristic;
const alwaysMemoryMapFSC = false;
exports.alwaysMemoryMapFSC = alwaysMemoryMapFSC;
const stronglyHeldReaderCacheSizeDefault = 30;
exports.stronglyHeldReaderCacheSizeDefault = stronglyHeldReaderCacheSizeDefault;
const stronglyHeldReaderCacheSize = stronglyHeldReaderCacheSizeDefault;
exports.stronglyHeldReaderCacheSize = stronglyHeldReaderCacheSize;

function singleOfBits(x) {
  return (0, _BitConverter.toSingle)((0, _BitConverter.getBytesInt32)(x), 0);
}

function doubleOfBits(x$$1) {
  return (0, _BitConverter.int64BitsToDouble)(x$$1);
}

function align(alignment, n) {
  return ~~((n + alignment - 1) / alignment) * alignment;
}

function uncodedToken(tab, idx) {
  return (0, _ilbinary.TableName$$get_Index)(tab) << 24 | idx;
}

function i32ToUncodedToken(tok) {
  const idx$$1 = tok & 16777215 | 0;
  const tab$$1 = (0, _illib.op_GreaterGreaterGreaterAmp)(tok, 24) | 0;
  return [(0, _ilbinary.TableName$$$FromIndex$$Z524259A4)(tab$$1), idx$$1];
}

const TaggedIndex$00601 = (0, _Types.declare)(function TaggedIndex$00601(arg1, arg2) {
  this.tag = arg1;
  this.index = arg2 | 0;
}, _Types.Record);
exports.TaggedIndex$00601 = TaggedIndex$00601;

function TaggedIndex$00601$$$$002Ector$$Z521B3197(tag, index) {
  return new TaggedIndex$00601(tag, index);
}

function uncodedTokenToTypeDefOrRefOrSpec(tab$$2, tok$$1) {
  let tag$$1;

  if ((0, _Util.equals)(tab$$2, _ilbinary.TableNames$$$TypeDef)) {
    tag$$1 = _ilbinary.tdor_TypeDef;
  } else if ((0, _Util.equals)(tab$$2, _ilbinary.TableNames$$$TypeRef)) {
    tag$$1 = _ilbinary.tdor_TypeRef;
  } else if ((0, _Util.equals)(tab$$2, _ilbinary.TableNames$$$TypeSpec)) {
    tag$$1 = _ilbinary.tdor_TypeSpec;
  } else {
    throw new Error("bad table in uncodedTokenToTypeDefOrRefOrSpec");
  }

  return TaggedIndex$00601$$$$002Ector$$Z521B3197(tag$$1, tok$$1);
}

function uncodedTokenToMethodDefOrRef(tab$$3, tok$$2) {
  let tag$$2;

  if ((0, _Util.equals)(tab$$3, _ilbinary.TableNames$$$Method)) {
    tag$$2 = _ilbinary.mdor_MethodDef;
  } else if ((0, _Util.equals)(tab$$3, _ilbinary.TableNames$$$MemberRef)) {
    tag$$2 = _ilbinary.mdor_MemberRef;
  } else {
    throw new Error("bad table in uncodedTokenToMethodDefOrRef");
  }

  return TaggedIndex$00601$$$$002Ector$$Z521B3197(tag$$2, tok$$2);
}

function $007CTaggedIndex$007C(x$$2) {
  return [x$$2.tag, x$$2.index];
}

function tokToTaggedIdx(f, nbits, tok$$3) {
  let tagmask;

  if (nbits === 1) {
    tagmask = 1;
  } else if (nbits === 2) {
    tagmask = 3;
  } else if (nbits === 3) {
    tagmask = 7;
  } else if (nbits === 4) {
    tagmask = 15;
  } else if (nbits === 5) {
    tagmask = 31;
  } else {
    throw new Error("too many nbits");
  }

  const tag$$3 = tok$$3 & tagmask | 0;
  const idx$$2 = (0, _illib.op_GreaterGreaterGreaterAmp)(tok$$3, nbits) | 0;
  return TaggedIndex$00601$$$$002Ector$$Z521B3197(f(tag$$3), idx$$2);
}

const Statistics = (0, _Types.declare)(function Statistics(arg1, arg2, arg3, arg4, arg5) {
  this.rawMemoryFileCount = arg1 | 0;
  this.memoryMapFileOpenedCount = arg2 | 0;
  this.memoryMapFileClosedCount = arg3 | 0;
  this.weakByteFileCount = arg4 | 0;
  this.byteFileCount = arg5 | 0;
}, _Types.Record);
exports.Statistics = Statistics;
const stats = new Statistics(0, 0, 0, 0, 0);
exports.stats = stats;

function GetStatistics() {
  return stats;
}

const BinaryView = (0, _Types.declare)(function BinaryView() {});
exports.BinaryView = BinaryView;

function BinaryView$$$$002Ector() {
  return this != null ? BinaryView.call(this) : new BinaryView();
}

const ByteView = (0, _Types.declare)(function ByteView(bytes) {
  const $this$$2 = this;
  BinaryView$$$$002Ector.call($this$$2);
  $this$$2.bytes = bytes;
}, BinaryView);
exports.ByteView = ByteView;

function ByteView$$$$002Ector$$6C95DA22(bytes) {
  return this != null ? ByteView.call(this, bytes) : new ByteView(bytes);
}

ByteView.prototype.ReadByte = function (addr) {
  const __ = this;
  return __.bytes[addr];
};

ByteView.prototype.ReadBytes = function (addr$$1, len) {
  const __$$1 = this;
  return (0, _Array.getSubArray)(__$$1.bytes, addr$$1, len);
};

ByteView.prototype.CountUtf8String = function (addr$$2) {
  const __$$2 = this;
  let p = addr$$2 | 0;

  while (__$$2.bytes[p] !== 0) {
    p = p + 1;
  }

  return p - addr$$2 | 0;
};

ByteView.prototype.ReadUTF8String = function (addr$$3) {
  const bfv = this;
  const n$$1 = bfv.CountUtf8String(addr$$3) | 0;
  return (0, _Encoding.get_UTF8)().getString(bfv.bytes, addr$$3, n$$1);
};

ByteView.prototype.ReadInt32 = function (addr$$4) {
  const bfv$$1 = this;
  const b0 = bfv$$1.ReadByte(addr$$4);
  const b1 = bfv$$1.ReadByte(addr$$4 + 1);
  const b2 = bfv$$1.ReadByte(addr$$4 + 2);
  const b3 = bfv$$1.ReadByte(addr$$4 + 3);
  return ~~b0 | ~~b1 << 8 | ~~b2 << 16 | ~~b3 << 24 | 0;
};

ByteView.prototype.ReadUInt16 = function (addr$$5) {
  const bfv$$2 = this;
  const b0$$1 = bfv$$2.ReadByte(addr$$5);
  const b1$$1 = bfv$$2.ReadByte(addr$$5 + 1);
  return b0$$1 | b1$$1 << 8;
};

const ByteFile = (0, _Types.declare)(function ByteFile(fileName, bytes$$1) {
  const $this$$3 = this;
  $this$$3.fileName = fileName;
  $this$$3.view = ByteView$$$$002Ector$$6C95DA22(bytes$$1);
  stats.byteFileCount = stats.byteFileCount + 1;
});
exports.ByteFile = ByteFile;

function ByteFile$$$$002Ector$$26C6D9B9(fileName, bytes$$1) {
  return this != null ? ByteFile.call(this, fileName, bytes$$1) : new ByteFile(fileName, bytes$$1);
}

function ByteFile$$get_FileName(__$$3) {
  return __$$3.fileName;
}

ByteFile.prototype.GetView = function () {
  const bf = this;
  return bf.view;
};

function seekReadByte(mdv, addr$$6) {
  return mdv.ReadByte(addr$$6);
}

function seekReadBytes(mdv$$1, addr$$7, len$$1) {
  return mdv$$1.ReadBytes(addr$$7, len$$1);
}

function seekReadInt32(mdv$$2, addr$$8) {
  return mdv$$2.ReadInt32(addr$$8);
}

function seekReadUInt16(mdv$$3, addr$$9) {
  return mdv$$3.ReadUInt16(addr$$9);
}

function seekReadByteAsInt32(mdv$$4, addr$$10) {
  return ~~seekReadByte(mdv$$4, addr$$10);
}

function seekReadInt64(mdv$$5, addr$$11) {
  const b0$$2 = seekReadByte(mdv$$5, addr$$11);
  const b1$$2 = seekReadByte(mdv$$5, addr$$11 + 1);
  const b2$$1 = seekReadByte(mdv$$5, addr$$11 + 2);
  const b3$$1 = seekReadByte(mdv$$5, addr$$11 + 3);
  const b4 = seekReadByte(mdv$$5, addr$$11 + 4);
  const b5 = seekReadByte(mdv$$5, addr$$11 + 5);
  const b6 = seekReadByte(mdv$$5, addr$$11 + 6);
  const b7 = seekReadByte(mdv$$5, addr$$11 + 7);
  return (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.fromInteger)(b0$$2, false, 4), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b1$$2, false, 4), 8)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b2$$1, false, 4), 16)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b3$$1, false, 4), 24)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b4, false, 4), 32)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b5, false, 4), 40)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b6, false, 4), 48)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(b7, false, 4), 56));
}

function seekReadUInt16AsInt32(mdv$$6, addr$$12) {
  return ~~seekReadUInt16(mdv$$6, addr$$12);
}

function seekReadCompressedUInt32(mdv$$7, addr$$13) {
  const b0$$3 = seekReadByte(mdv$$7, addr$$13);

  if (b0$$3 <= 127) {
    return [~~b0$$3, addr$$13 + 1];
  } else if (b0$$3 <= 191) {
    const b0$$4 = b0$$3 & 127;
    const b1$$3 = seekReadByteAsInt32(mdv$$7, addr$$13 + 1) | 0;
    return [~~b0$$4 << 8 | b1$$3, addr$$13 + 2];
  } else {
    const b0$$5 = b0$$3 & 63;
    const b1$$4 = seekReadByteAsInt32(mdv$$7, addr$$13 + 1) | 0;
    const b2$$2 = seekReadByteAsInt32(mdv$$7, addr$$13 + 2) | 0;
    const b3$$2 = seekReadByteAsInt32(mdv$$7, addr$$13 + 3) | 0;
    return [~~b0$$5 << 24 | b1$$4 << 16 | b2$$2 << 8 | b3$$2, addr$$13 + 4];
  }
}

function seekReadSByte(mdv$$8, addr$$14) {
  return (seekReadByte(mdv$$8, addr$$14) + 0x80 & 0xFF) - 0x80;
}

function seekReadSingle(mdv$$9, addr$$15) {
  return singleOfBits(seekReadInt32(mdv$$9, addr$$15));
}

function seekReadDouble(mdv$$10, addr$$16) {
  return doubleOfBits(seekReadInt64(mdv$$10, addr$$16));
}

function seekCountUtf8String(mdv$$11, addr$$17, n$$2) {
  seekCountUtf8String: while (true) {
    const c = seekReadByteAsInt32(mdv$$11, addr$$17) | 0;

    if (c === 0) {
      return n$$2 | 0;
    } else {
      mdv$$11 = mdv$$11;
      addr$$17 = addr$$17 + 1;
      n$$2 = n$$2 + 1;
      continue seekCountUtf8String;
    }
  }
}

function seekReadUTF8String(mdv$$12, addr$$18) {
  const n$$3 = seekCountUtf8String(mdv$$12, addr$$18, 0) | 0;
  const bytes$$2 = seekReadBytes(mdv$$12, addr$$18, n$$3);
  return (0, _Encoding.get_UTF8)().getString(bytes$$2, 0, bytes$$2.length);
}

function seekReadBlob(mdv$$13, addr$$19) {
  const patternInput = seekReadCompressedUInt32(mdv$$13, addr$$19);
  return seekReadBytes(mdv$$13, patternInput[1], patternInput[0]);
}

function seekReadUserString(mdv$$14, addr$$21) {
  const patternInput$$1 = seekReadCompressedUInt32(mdv$$14, addr$$21);
  const bytes$$3 = seekReadBytes(mdv$$14, patternInput$$1[1], patternInput$$1[0] - 1);
  return (0, _Encoding.get_Unicode)().getString(bytes$$3, 0, bytes$$3.length);
}

function seekReadGuid(mdv$$15, addr$$23) {
  return seekReadBytes(mdv$$15, addr$$23, 16);
}

function seekReadUncodedToken(mdv$$16, addr$$24) {
  return i32ToUncodedToken(seekReadInt32(mdv$$16, addr$$24));
}

function sigptrCheck(bytes$$4, sigptr) {
  if (checking ? sigptr >= bytes$$4.length : false) {
    throw new Error("read past end of sig. ");
  }
}

function sigptrGetByte(bytes$$5, sigptr$$1) {
  sigptrCheck(bytes$$5, sigptr$$1);
  return [bytes$$5[sigptr$$1], sigptr$$1 + 1];
}

function sigptrGetBool(bytes$$6, sigptr$$2) {
  const patternInput$$2 = sigptrGetByte(bytes$$6, sigptr$$2);
  return [patternInput$$2[0] === 1, patternInput$$2[1]];
}

function sigptrGetSByte(bytes$$7, sigptr$$4) {
  const patternInput$$3 = sigptrGetByte(bytes$$7, sigptr$$4);
  return [(patternInput$$3[0] + 0x80 & 0xFF) - 0x80, patternInput$$3[1]];
}

function sigptrGetUInt16(bytes$$8, sigptr$$6) {
  const patternInput$$4 = sigptrGetByte(bytes$$8, sigptr$$6);
  const patternInput$$5 = sigptrGetByte(bytes$$8, patternInput$$4[1]);
  return [(~~patternInput$$4[0] | ~~patternInput$$5[0] << 8) & 0xFFFF, patternInput$$5[1]];
}

function sigptrGetInt16(bytes$$9, sigptr$$9) {
  const patternInput$$6 = sigptrGetUInt16(bytes$$9, sigptr$$9);
  return [(patternInput$$6[0] + 0x8000 & 0xFFFF) - 0x8000, patternInput$$6[1]];
}

function sigptrGetInt32(bytes$$10, sigptr$$11) {
  sigptrCheck(bytes$$10, sigptr$$11);
  const b0$$8 = bytes$$10[sigptr$$11];
  const b1$$6 = bytes$$10[sigptr$$11 + 1];
  const b2$$3 = bytes$$10[sigptr$$11 + 2];
  const b3$$3 = bytes$$10[sigptr$$11 + 3];
  const res = ~~b0$$8 | ~~b1$$6 << 8 | ~~b2$$3 << 16 | ~~b3$$3 << 24 | 0;
  return [res, sigptr$$11 + 4];
}

function sigptrGetUInt32(bytes$$11, sigptr$$12) {
  const patternInput$$7 = sigptrGetInt32(bytes$$11, sigptr$$12);
  return [patternInput$$7[0] >>> 0, patternInput$$7[1]];
}

function sigptrGetUInt64(bytes$$12, sigptr$$14) {
  const patternInput$$8 = sigptrGetUInt32(bytes$$12, sigptr$$14);
  const patternInput$$9 = sigptrGetUInt32(bytes$$12, patternInput$$8[1]);
  return [(0, _Long.op_BitwiseOr)((0, _Long.fromInteger)(patternInput$$8[0], true, 6), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$9[0], true, 6), 32)), patternInput$$9[1]];
}

function sigptrGetInt64(bytes$$13, sigptr$$17) {
  const patternInput$$10 = sigptrGetUInt64(bytes$$13, sigptr$$17);
  return [(0, _Long.fromValue)(patternInput$$10[0], false), patternInput$$10[1]];
}

function sigptrGetSingle(bytes$$14, sigptr$$19) {
  const patternInput$$11 = sigptrGetInt32(bytes$$14, sigptr$$19);
  return [singleOfBits(patternInput$$11[0]), patternInput$$11[1]];
}

function sigptrGetDouble(bytes$$15, sigptr$$21) {
  const patternInput$$12 = sigptrGetInt64(bytes$$15, sigptr$$21);
  return [doubleOfBits(patternInput$$12[0]), patternInput$$12[1]];
}

function sigptrGetZInt32(bytes$$16, sigptr$$23) {
  const patternInput$$13 = sigptrGetByte(bytes$$16, sigptr$$23);

  if (patternInput$$13[0] <= 127) {
    return [~~patternInput$$13[0], patternInput$$13[1]];
  } else if (patternInput$$13[0] <= 191) {
    const b0$$10 = patternInput$$13[0] & 127;
    const patternInput$$14 = sigptrGetByte(bytes$$16, patternInput$$13[1]);
    return [~~b0$$10 << 8 | ~~patternInput$$14[0], patternInput$$14[1]];
  } else {
    const b0$$11 = patternInput$$13[0] & 63;
    const patternInput$$15 = sigptrGetByte(bytes$$16, patternInput$$13[1]);
    const patternInput$$16 = sigptrGetByte(bytes$$16, patternInput$$15[1]);
    const patternInput$$17 = sigptrGetByte(bytes$$16, patternInput$$16[1]);
    return [~~b0$$11 << 24 | ~~patternInput$$15[0] << 16 | ~~patternInput$$16[0] << 8 | ~~patternInput$$17[0], patternInput$$17[1]];
  }
}

function sigptrFoldAcc($arg$$20, $arg$$21, $arg$$22, $arg$$23, $arg$$24, $arg$$25) {
  sigptrFoldAcc: while (true) {
    const f$$1 = $arg$$20,
          n$$4 = $arg$$21,
          bytes$$17 = $arg$$22,
          sigptr$$29 = $arg$$23,
          i$$1 = $arg$$24,
          acc = $arg$$25;

    if (i$$1 < n$$4) {
      const patternInput$$18 = f$$1(bytes$$17, sigptr$$29);
      $arg$$20 = f$$1;
      $arg$$21 = n$$4;
      $arg$$22 = bytes$$17;
      $arg$$23 = patternInput$$18[1];
      $arg$$24 = i$$1 + 1;
      $arg$$25 = (0, _Types.L)(patternInput$$18[0], acc);
      continue sigptrFoldAcc;
    } else {
      return [(0, _List.reverse)(acc), sigptr$$29];
    }
  }
}

function sigptrFold(f$$2, n$$5, bytes$$18, sigptr$$30) {
  return sigptrFoldAcc(f$$2, n$$5, bytes$$18, sigptr$$30, 0, (0, _Types.L)());
}

function sigptrGetBytes(n$$6, bytes$$19, sigptr$$31) {
  if (checking ? sigptr$$31 + n$$6 >= bytes$$19.length : false) {
    (0, _ildiag.dprintn)("read past end of sig. in sigptrGetString");
    return [(0, _bytes.Bytes$$$zeroCreate)(0), sigptr$$31];
  } else {
    const res$$1 = (0, _bytes.Bytes$$$zeroCreate)(n$$6);

    for (let i$$2 = 0; i$$2 <= n$$6 - 1; i$$2++) {
      res$$1[i$$2] = bytes$$19[sigptr$$31 + i$$2];
    }

    return [res$$1, sigptr$$31 + n$$6];
  }
}

function sigptrGetString(n$$7, bytes$$20, sigptr$$32) {
  const patternInput$$19 = sigptrGetBytes(n$$7, bytes$$20, sigptr$$32);
  return [(0, _Encoding.get_UTF8)().getString(patternInput$$19[0], 0, patternInput$$19[0].length), patternInput$$19[1]];
}

const ILInstrPrefixesRegister = (0, _Types.declare)(function ILInstrPrefixesRegister(arg1, arg2, arg3, arg4, arg5) {
  this.al = arg1;
  this.tl = arg2;
  this.vol = arg3;
  this.ro = arg4;
  this.constrained = arg5;
}, _Types.Record);
exports.ILInstrPrefixesRegister = ILInstrPrefixesRegister;

function noPrefixes(mk, prefixes) {
  if (!(0, _Util.equals)(prefixes.al, new _il.ILAlignment(0, "Aligned"))) {
    throw new Error("an unaligned prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes.vol, new _il.ILVolatility(1, "Nonvolatile"))) {
    throw new Error("a volatile prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes.tl, new _il.ILTailcall(1, "Normalcall"))) {
    throw new Error("a tailcall prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes.ro, new _il.ILReadonly(1, "NormalAddress"))) {
    throw new Error("a readonly prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes.constrained, null)) {
    throw new Error("a constrained prefix is not allowed here");
  }

  return mk;
}

function volatileOrUnalignedPrefix(mk$$1, prefixes$$1) {
  if (!(0, _Util.equals)(prefixes$$1.tl, new _il.ILTailcall(1, "Normalcall"))) {
    throw new Error("a tailcall prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$1.constrained, null)) {
    throw new Error("a constrained prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$1.ro, new _il.ILReadonly(1, "NormalAddress"))) {
    throw new Error("a readonly prefix is not allowed here");
  }

  return mk$$1([prefixes$$1.al, prefixes$$1.vol]);
}

function volatilePrefix(mk$$2, prefixes$$2) {
  if (!(0, _Util.equals)(prefixes$$2.al, new _il.ILAlignment(0, "Aligned"))) {
    throw new Error("an unaligned prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$2.tl, new _il.ILTailcall(1, "Normalcall"))) {
    throw new Error("a tailcall prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$2.constrained, null)) {
    throw new Error("a constrained prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$2.ro, new _il.ILReadonly(1, "NormalAddress"))) {
    throw new Error("a readonly prefix is not allowed here");
  }

  return mk$$2(prefixes$$2.vol);
}

function tailPrefix(mk$$3, prefixes$$3) {
  if (!(0, _Util.equals)(prefixes$$3.al, new _il.ILAlignment(0, "Aligned"))) {
    throw new Error("an unaligned prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$3.vol, new _il.ILVolatility(1, "Nonvolatile"))) {
    throw new Error("a volatile prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$3.constrained, null)) {
    throw new Error("a constrained prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$3.ro, new _il.ILReadonly(1, "NormalAddress"))) {
    throw new Error("a readonly prefix is not allowed here");
  }

  return mk$$3(prefixes$$3.tl);
}

function constraintOrTailPrefix(mk$$4, prefixes$$4) {
  if (!(0, _Util.equals)(prefixes$$4.al, new _il.ILAlignment(0, "Aligned"))) {
    throw new Error("an unaligned prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$4.vol, new _il.ILVolatility(1, "Nonvolatile"))) {
    throw new Error("a volatile prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$4.ro, new _il.ILReadonly(1, "NormalAddress"))) {
    throw new Error("a readonly prefix is not allowed here");
  }

  return mk$$4([prefixes$$4.constrained, prefixes$$4.tl]);
}

function readonlyPrefix(mk$$5, prefixes$$5) {
  if (!(0, _Util.equals)(prefixes$$5.al, new _il.ILAlignment(0, "Aligned"))) {
    throw new Error("an unaligned prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$5.vol, new _il.ILVolatility(1, "Nonvolatile"))) {
    throw new Error("a volatile prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$5.tl, new _il.ILTailcall(1, "Normalcall"))) {
    throw new Error("a tailcall prefix is not allowed here");
  }

  if (!(0, _Util.equals)(prefixes$$5.constrained, null)) {
    throw new Error("a constrained prefix is not allowed here");
  }

  return mk$$5(prefixes$$5.ro);
}

const ILInstrDecoder = (0, _Types.declare)(function ILInstrDecoder(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILInstrDecoder = ILInstrDecoder;

function mkStind(dt) {
  return function (prefixes$$6) {
    return volatileOrUnalignedPrefix(function mk$$6(tupledArg) {
      return new _il.ILInstr(41, "I_stind", tupledArg[0], tupledArg[1], dt);
    }, prefixes$$6);
  };
}

function mkLdind(dt$$1) {
  return function (prefixes$$7) {
    return volatileOrUnalignedPrefix(function mk$$7(tupledArg$$1) {
      return new _il.ILInstr(37, "I_ldind", tupledArg$$1[0], tupledArg$$1[1], dt$$1);
    }, prefixes$$7);
  };
}

function instrs() {
  return (0, _Types.L)([_ilbinary.i_ldarg_s, new ILInstrDecoder(0, "I_u16_u8_instr", (0, _Util.uncurry)(2, function (prefixes$$8) {
    return noPrefixes(_il.mkLdarg, prefixes$$8);
  }))], (0, _Types.L)([_ilbinary.i_starg_s, new ILInstrDecoder(0, "I_u16_u8_instr", (0, _Util.uncurry)(2, function (prefixes$$9) {
    return noPrefixes(function mk$$8(arg0) {
      return new _il.ILInstr(40, "I_starg", arg0);
    }, prefixes$$9);
  }))], (0, _Types.L)([_ilbinary.i_ldarga_s, new ILInstrDecoder(0, "I_u16_u8_instr", (0, _Util.uncurry)(2, function (prefixes$$10) {
    return noPrefixes(function mk$$9(arg0$$1) {
      return new _il.ILInstr(36, "I_ldarga", arg0$$1);
    }, prefixes$$10);
  }))], (0, _Types.L)([_ilbinary.i_stloc_s, new ILInstrDecoder(0, "I_u16_u8_instr", (0, _Util.uncurry)(2, function (prefixes$$11) {
    return noPrefixes(_il.mkStloc, prefixes$$11);
  }))], (0, _Types.L)([_ilbinary.i_ldloc_s, new ILInstrDecoder(0, "I_u16_u8_instr", (0, _Util.uncurry)(2, function (prefixes$$12) {
    return noPrefixes(_il.mkLdloc, prefixes$$12);
  }))], (0, _Types.L)([_ilbinary.i_ldloca_s, new ILInstrDecoder(0, "I_u16_u8_instr", (0, _Util.uncurry)(2, function (prefixes$$13) {
    return noPrefixes(function mk$$10(arg0$$2) {
      return new _il.ILInstr(39, "I_ldloca", arg0$$2);
    }, prefixes$$13);
  }))], (0, _Types.L)([_ilbinary.i_ldarg, new ILInstrDecoder(1, "I_u16_u16_instr", (0, _Util.uncurry)(2, function (prefixes$$14) {
    return noPrefixes(_il.mkLdarg, prefixes$$14);
  }))], (0, _Types.L)([_ilbinary.i_starg, new ILInstrDecoder(1, "I_u16_u16_instr", (0, _Util.uncurry)(2, function (prefixes$$15) {
    return noPrefixes(function mk$$11(arg0$$3) {
      return new _il.ILInstr(40, "I_starg", arg0$$3);
    }, prefixes$$15);
  }))], (0, _Types.L)([_ilbinary.i_ldarga, new ILInstrDecoder(1, "I_u16_u16_instr", (0, _Util.uncurry)(2, function (prefixes$$16) {
    return noPrefixes(function mk$$12(arg0$$4) {
      return new _il.ILInstr(36, "I_ldarga", arg0$$4);
    }, prefixes$$16);
  }))], (0, _Types.L)([_ilbinary.i_stloc, new ILInstrDecoder(1, "I_u16_u16_instr", (0, _Util.uncurry)(2, function (prefixes$$17) {
    return noPrefixes(_il.mkStloc, prefixes$$17);
  }))], (0, _Types.L)([_ilbinary.i_ldloc, new ILInstrDecoder(1, "I_u16_u16_instr", (0, _Util.uncurry)(2, function (prefixes$$18) {
    return noPrefixes(_il.mkLdloc, prefixes$$18);
  }))], (0, _Types.L)([_ilbinary.i_ldloca, new ILInstrDecoder(1, "I_u16_u16_instr", (0, _Util.uncurry)(2, function (prefixes$$19) {
    return noPrefixes(function mk$$13(arg0$$5) {
      return new _il.ILInstr(39, "I_ldloca", arg0$$5);
    }, prefixes$$19);
  }))], (0, _Types.L)([_ilbinary.i_stind_i, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(11, "DT_I")))], (0, _Types.L)([_ilbinary.i_stind_i1, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(1, "DT_I1")))], (0, _Types.L)([_ilbinary.i_stind_i2, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(3, "DT_I2")))], (0, _Types.L)([_ilbinary.i_stind_i4, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(5, "DT_I4")))], (0, _Types.L)([_ilbinary.i_stind_i8, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(7, "DT_I8")))], (0, _Types.L)([_ilbinary.i_stind_r4, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(9, "DT_R4")))], (0, _Types.L)([_ilbinary.i_stind_r8, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(10, "DT_R8")))], (0, _Types.L)([_ilbinary.i_stind_ref, new ILInstrDecoder(2, "I_none_instr", mkStind(new _il.ILBasicType(13, "DT_REF")))], (0, _Types.L)([_ilbinary.i_ldind_i, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(11, "DT_I")))], (0, _Types.L)([_ilbinary.i_ldind_i1, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(1, "DT_I1")))], (0, _Types.L)([_ilbinary.i_ldind_i2, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(3, "DT_I2")))], (0, _Types.L)([_ilbinary.i_ldind_i4, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(5, "DT_I4")))], (0, _Types.L)([_ilbinary.i_ldind_i8, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(7, "DT_I8")))], (0, _Types.L)([_ilbinary.i_ldind_u1, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(2, "DT_U1")))], (0, _Types.L)([_ilbinary.i_ldind_u2, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(4, "DT_U2")))], (0, _Types.L)([_ilbinary.i_ldind_u4, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(6, "DT_U4")))], (0, _Types.L)([_ilbinary.i_ldind_r4, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(9, "DT_R4")))], (0, _Types.L)([_ilbinary.i_ldind_r8, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(10, "DT_R8")))], (0, _Types.L)([_ilbinary.i_ldind_ref, new ILInstrDecoder(2, "I_none_instr", mkLdind(new _il.ILBasicType(13, "DT_REF")))], (0, _Types.L)([_ilbinary.i_cpblk, new ILInstrDecoder(2, "I_none_instr", function (prefixes$$20) {
    return volatileOrUnalignedPrefix(function mk$$14(tupledArg$$2) {
      return new _il.ILInstr(92, "I_cpblk", tupledArg$$2[0], tupledArg$$2[1]);
    }, prefixes$$20);
  })], (0, _Types.L)([_ilbinary.i_initblk, new ILInstrDecoder(2, "I_none_instr", function (prefixes$$21) {
    return volatileOrUnalignedPrefix(function mk$$15(tupledArg$$3) {
      return new _il.ILInstr(93, "I_initblk", tupledArg$$3[0], tupledArg$$3[1]);
    }, prefixes$$21);
  })], (0, _Types.L)([_ilbinary.i_ldc_i8, new ILInstrDecoder(3, "I_i64_instr", (0, _Util.uncurry)(2, function (prefixes$$22) {
    return noPrefixes(function mk$$16(x$$6) {
      return new _il.ILInstr(34, "AI_ldc", new _il.ILBasicType(7, "DT_I8"), new _il.ILConst(1, "I8", x$$6));
    }, prefixes$$22);
  }))], (0, _Types.L)([_ilbinary.i_ldc_i4, new ILInstrDecoder(4, "I_i32_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$23) {
    return noPrefixes(_il.mkLdcInt32, prefixes$$23);
  }))], (0, _Types.L)([_ilbinary.i_ldc_i4_s, new ILInstrDecoder(5, "I_i32_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$24) {
    return noPrefixes(_il.mkLdcInt32, prefixes$$24);
  }))], (0, _Types.L)([_ilbinary.i_ldc_r4, new ILInstrDecoder(6, "I_r4_instr", (0, _Util.uncurry)(2, function (prefixes$$25) {
    return noPrefixes(function mk$$17(x$$7) {
      return new _il.ILInstr(34, "AI_ldc", new _il.ILBasicType(9, "DT_R4"), new _il.ILConst(2, "R4", x$$7));
    }, prefixes$$25);
  }))], (0, _Types.L)([_ilbinary.i_ldc_r8, new ILInstrDecoder(7, "I_r8_instr", (0, _Util.uncurry)(2, function (prefixes$$26) {
    return noPrefixes(function mk$$18(x$$8) {
      return new _il.ILInstr(34, "AI_ldc", new _il.ILBasicType(10, "DT_R8"), new _il.ILConst(3, "R8", x$$8));
    }, prefixes$$26);
  }))], (0, _Types.L)([_ilbinary.i_ldfld, new ILInstrDecoder(8, "I_field_instr", (0, _Util.uncurry)(2, function (prefixes$$27) {
    return volatileOrUnalignedPrefix(function mk$$19(tupledArg$$4) {
      return function (fspec) {
        return new _il.ILInstr(60, "I_ldfld", tupledArg$$4[0], tupledArg$$4[1], fspec);
      };
    }, prefixes$$27);
  }))], (0, _Types.L)([_ilbinary.i_stfld, new ILInstrDecoder(8, "I_field_instr", (0, _Util.uncurry)(2, function (prefixes$$28) {
    return volatileOrUnalignedPrefix(function mk$$20(tupledArg$$5) {
      return function (fspec$$1) {
        return new _il.ILInstr(64, "I_stfld", tupledArg$$5[0], tupledArg$$5[1], fspec$$1);
      };
    }, prefixes$$28);
  }))], (0, _Types.L)([_ilbinary.i_ldsfld, new ILInstrDecoder(8, "I_field_instr", (0, _Util.uncurry)(2, function (prefixes$$29) {
    return volatilePrefix(function mk$$21(x$$11) {
      return function (fspec$$2) {
        return new _il.ILInstr(59, "I_ldsfld", x$$11, fspec$$2);
      };
    }, prefixes$$29);
  }))], (0, _Types.L)([_ilbinary.i_stsfld, new ILInstrDecoder(8, "I_field_instr", (0, _Util.uncurry)(2, function (prefixes$$30) {
    return volatilePrefix(function mk$$22(x$$12) {
      return function (fspec$$3) {
        return new _il.ILInstr(63, "I_stsfld", x$$12, fspec$$3);
      };
    }, prefixes$$30);
  }))], (0, _Types.L)([_ilbinary.i_ldflda, new ILInstrDecoder(8, "I_field_instr", (0, _Util.uncurry)(2, function (prefixes$$31) {
    return noPrefixes(function mk$$23(arg0$$8) {
      return new _il.ILInstr(62, "I_ldflda", arg0$$8);
    }, prefixes$$31);
  }))], (0, _Types.L)([_ilbinary.i_ldsflda, new ILInstrDecoder(8, "I_field_instr", (0, _Util.uncurry)(2, function (prefixes$$32) {
    return noPrefixes(function mk$$24(arg0$$9) {
      return new _il.ILInstr(61, "I_ldsflda", arg0$$9);
    }, prefixes$$32);
  }))], (0, _Types.L)([_ilbinary.i_call, new ILInstrDecoder(9, "I_method_instr", (0, _Util.uncurry)(2, function (prefixes$$33) {
    return tailPrefix(function mk$$25(tl) {
      return function (tupledArg$$6) {
        return new _il.ILInstr(48, "I_call", tl, tupledArg$$6[0], tupledArg$$6[1]);
      };
    }, prefixes$$33);
  }))], (0, _Types.L)([_ilbinary.i_ldftn, new ILInstrDecoder(9, "I_method_instr", (0, _Util.uncurry)(2, function (prefixes$$34) {
    return noPrefixes(function mk$$26(tupledArg$$7) {
      return new _il.ILInstr(52, "I_ldftn", tupledArg$$7[0]);
    }, prefixes$$34);
  }))], (0, _Types.L)([_ilbinary.i_ldvirtftn, new ILInstrDecoder(9, "I_method_instr", (0, _Util.uncurry)(2, function (prefixes$$35) {
    return noPrefixes(function mk$$27(tupledArg$$8) {
      return new _il.ILInstr(69, "I_ldvirtftn", tupledArg$$8[0]);
    }, prefixes$$35);
  }))], (0, _Types.L)([_ilbinary.i_newobj, new ILInstrDecoder(9, "I_method_instr", (0, _Util.uncurry)(2, function (prefixes$$36) {
    return noPrefixes(function mk$$28(tupledArg$$9) {
      return new _il.ILInstr(53, "I_newobj", tupledArg$$9[0], tupledArg$$9[1]);
    }, prefixes$$36);
  }))], (0, _Types.L)([_ilbinary.i_callvirt, new ILInstrDecoder(9, "I_method_instr", (0, _Util.uncurry)(2, function (prefixes$$37) {
    return constraintOrTailPrefix(function mk$$29(tupledArg$$10) {
      return function (tupledArg$$11) {
        if (tupledArg$$10[0] == null) {
          return new _il.ILInstr(49, "I_callvirt", tupledArg$$10[1], tupledArg$$11[0], tupledArg$$11[1]);
        } else {
          const ty = tupledArg$$10[0];
          return new _il.ILInstr(50, "I_callconstraint", tupledArg$$10[1], ty, tupledArg$$11[0], tupledArg$$11[1]);
        }
      };
    }, prefixes$$37);
  }))], (0, _Types.L)([_ilbinary.i_leave_s, new ILInstrDecoder(11, "I_unconditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$38) {
    return noPrefixes(function mk$$30(x$$13) {
      return new _il.ILInstr(57, "I_leave", x$$13);
    }, prefixes$$38);
  }))], (0, _Types.L)([_ilbinary.i_br_s, new ILInstrDecoder(11, "I_unconditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$39) {
    return noPrefixes(function mk$$31(arg0$$11) {
      return new _il.ILInstr(43, "I_br", arg0$$11);
    }, prefixes$$39);
  }))], (0, _Types.L)([_ilbinary.i_leave, new ILInstrDecoder(10, "I_unconditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$40) {
    return noPrefixes(function mk$$32(x$$14) {
      return new _il.ILInstr(57, "I_leave", x$$14);
    }, prefixes$$40);
  }))], (0, _Types.L)([_ilbinary.i_br, new ILInstrDecoder(10, "I_unconditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$41) {
    return noPrefixes(function mk$$33(arg0$$12) {
      return new _il.ILInstr(43, "I_br", arg0$$12);
    }, prefixes$$41);
  }))], (0, _Types.L)([_ilbinary.i_brtrue_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$42) {
    return noPrefixes(function mk$$34(x$$15) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(11, "BI_brtrue"), x$$15);
    }, prefixes$$42);
  }))], (0, _Types.L)([_ilbinary.i_brfalse_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$43) {
    return noPrefixes(function mk$$35(x$$16) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(10, "BI_brfalse"), x$$16);
    }, prefixes$$43);
  }))], (0, _Types.L)([_ilbinary.i_beq_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$44) {
    return noPrefixes(function mk$$36(x$$17) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(0, "BI_beq"), x$$17);
    }, prefixes$$44);
  }))], (0, _Types.L)([_ilbinary.i_blt_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$45) {
    return noPrefixes(function mk$$37(x$$18) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(7, "BI_blt"), x$$18);
    }, prefixes$$45);
  }))], (0, _Types.L)([_ilbinary.i_blt_un_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$46) {
    return noPrefixes(function mk$$38(x$$19) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(8, "BI_blt_un"), x$$19);
    }, prefixes$$46);
  }))], (0, _Types.L)([_ilbinary.i_ble_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$47) {
    return noPrefixes(function mk$$39(x$$20) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(5, "BI_ble"), x$$20);
    }, prefixes$$47);
  }))], (0, _Types.L)([_ilbinary.i_ble_un_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$48) {
    return noPrefixes(function mk$$40(x$$21) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(6, "BI_ble_un"), x$$21);
    }, prefixes$$48);
  }))], (0, _Types.L)([_ilbinary.i_bgt_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$49) {
    return noPrefixes(function mk$$41(x$$22) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(3, "BI_bgt"), x$$22);
    }, prefixes$$49);
  }))], (0, _Types.L)([_ilbinary.i_bgt_un_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$50) {
    return noPrefixes(function mk$$42(x$$23) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(4, "BI_bgt_un"), x$$23);
    }, prefixes$$50);
  }))], (0, _Types.L)([_ilbinary.i_bge_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$51) {
    return noPrefixes(function mk$$43(x$$24) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(1, "BI_bge"), x$$24);
    }, prefixes$$51);
  }))], (0, _Types.L)([_ilbinary.i_bge_un_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$52) {
    return noPrefixes(function mk$$44(x$$25) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(2, "BI_bge_un"), x$$25);
    }, prefixes$$52);
  }))], (0, _Types.L)([_ilbinary.i_bne_un_s, new ILInstrDecoder(13, "I_conditional_i8_instr", (0, _Util.uncurry)(2, function (prefixes$$53) {
    return noPrefixes(function mk$$45(x$$26) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(9, "BI_bne_un"), x$$26);
    }, prefixes$$53);
  }))], (0, _Types.L)([_ilbinary.i_brtrue, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$54) {
    return noPrefixes(function mk$$46(x$$27) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(11, "BI_brtrue"), x$$27);
    }, prefixes$$54);
  }))], (0, _Types.L)([_ilbinary.i_brfalse, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$55) {
    return noPrefixes(function mk$$47(x$$28) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(10, "BI_brfalse"), x$$28);
    }, prefixes$$55);
  }))], (0, _Types.L)([_ilbinary.i_beq, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$56) {
    return noPrefixes(function mk$$48(x$$29) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(0, "BI_beq"), x$$29);
    }, prefixes$$56);
  }))], (0, _Types.L)([_ilbinary.i_blt, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$57) {
    return noPrefixes(function mk$$49(x$$30) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(7, "BI_blt"), x$$30);
    }, prefixes$$57);
  }))], (0, _Types.L)([_ilbinary.i_blt_un, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$58) {
    return noPrefixes(function mk$$50(x$$31) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(8, "BI_blt_un"), x$$31);
    }, prefixes$$58);
  }))], (0, _Types.L)([_ilbinary.i_ble, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$59) {
    return noPrefixes(function mk$$51(x$$32) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(5, "BI_ble"), x$$32);
    }, prefixes$$59);
  }))], (0, _Types.L)([_ilbinary.i_ble_un, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$60) {
    return noPrefixes(function mk$$52(x$$33) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(6, "BI_ble_un"), x$$33);
    }, prefixes$$60);
  }))], (0, _Types.L)([_ilbinary.i_bgt, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$61) {
    return noPrefixes(function mk$$53(x$$34) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(3, "BI_bgt"), x$$34);
    }, prefixes$$61);
  }))], (0, _Types.L)([_ilbinary.i_bgt_un, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$62) {
    return noPrefixes(function mk$$54(x$$35) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(4, "BI_bgt_un"), x$$35);
    }, prefixes$$62);
  }))], (0, _Types.L)([_ilbinary.i_bge, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$63) {
    return noPrefixes(function mk$$55(x$$36) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(1, "BI_bge"), x$$36);
    }, prefixes$$63);
  }))], (0, _Types.L)([_ilbinary.i_bge_un, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$64) {
    return noPrefixes(function mk$$56(x$$37) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(2, "BI_bge_un"), x$$37);
    }, prefixes$$64);
  }))], (0, _Types.L)([_ilbinary.i_bne_un, new ILInstrDecoder(12, "I_conditional_i32_instr", (0, _Util.uncurry)(2, function (prefixes$$65) {
    return noPrefixes(function mk$$57(x$$38) {
      return new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(9, "BI_bne_un"), x$$38);
    }, prefixes$$65);
  }))], (0, _Types.L)([_ilbinary.i_ldstr, new ILInstrDecoder(14, "I_string_instr", (0, _Util.uncurry)(2, function (prefixes$$66) {
    return noPrefixes(function mk$$58(arg0$$13) {
      return new _il.ILInstr(65, "I_ldstr", arg0$$13);
    }, prefixes$$66);
  }))], (0, _Types.L)([_ilbinary.i_switch, new ILInstrDecoder(15, "I_switch_instr", (0, _Util.uncurry)(2, function (prefixes$$67) {
    return noPrefixes(function mk$$59(arg0$$14) {
      return new _il.ILInstr(46, "I_switch", arg0$$14);
    }, prefixes$$67);
  }))], (0, _Types.L)([_ilbinary.i_ldtoken, new ILInstrDecoder(16, "I_tok_instr", (0, _Util.uncurry)(2, function (prefixes$$68) {
    return noPrefixes(function mk$$60(arg0$$15) {
      return new _il.ILInstr(68, "I_ldtoken", arg0$$15);
    }, prefixes$$68);
  }))], (0, _Types.L)([_ilbinary.i_calli, new ILInstrDecoder(17, "I_sig_instr", (0, _Util.uncurry)(2, function (prefixes$$69) {
    return tailPrefix(function mk$$61(tl$$2) {
      return function (tupledArg$$12) {
        return new _il.ILInstr(51, "I_calli", tl$$2, tupledArg$$12[0], tupledArg$$12[1]);
      };
    }, prefixes$$69);
  }))], (0, _Types.L)([_ilbinary.i_mkrefany, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$70) {
    return noPrefixes(function mk$$62(arg0$$16) {
      return new _il.ILInstr(85, "I_mkrefany", arg0$$16);
    }, prefixes$$70);
  }))], (0, _Types.L)([_ilbinary.i_refanyval, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$71) {
    return noPrefixes(function mk$$63(arg0$$17) {
      return new _il.ILInstr(87, "I_refanyval", arg0$$17);
    }, prefixes$$71);
  }))], (0, _Types.L)([_ilbinary.i_ldelema, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$72) {
    return readonlyPrefix(function mk$$64(ro) {
      return function (x$$40) {
        return new _il.ILInstr(80, "I_ldelema", ro, false, (0, _il.ILArrayShape$$$get_SingleDimensional)(), x$$40);
      };
    }, prefixes$$72);
  }))], (0, _Types.L)([_ilbinary.i_ldelem_any, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$73) {
    return noPrefixes(function mk$$65(x$$41) {
      return new _il.ILInstr(81, "I_ldelem_any", (0, _il.ILArrayShape$$$get_SingleDimensional)(), x$$41);
    }, prefixes$$73);
  }))], (0, _Types.L)([_ilbinary.i_stelem_any, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$74) {
    return noPrefixes(function mk$$66(x$$42) {
      return new _il.ILInstr(82, "I_stelem_any", (0, _il.ILArrayShape$$$get_SingleDimensional)(), x$$42);
    }, prefixes$$74);
  }))], (0, _Types.L)([_ilbinary.i_newarr, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$75) {
    return noPrefixes(function mk$$67(x$$43) {
      return new _il.ILInstr(83, "I_newarr", (0, _il.ILArrayShape$$$get_SingleDimensional)(), x$$43);
    }, prefixes$$75);
  }))], (0, _Types.L)([_ilbinary.i_castclass, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$76) {
    return noPrefixes(function mk$$68(arg0$$18) {
      return new _il.ILInstr(67, "I_castclass", arg0$$18);
    }, prefixes$$76);
  }))], (0, _Types.L)([_ilbinary.i_isinst, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$77) {
    return noPrefixes(function mk$$69(arg0$$19) {
      return new _il.ILInstr(66, "I_isinst", arg0$$19);
    }, prefixes$$77);
  }))], (0, _Types.L)([_ilbinary.i_unbox_any, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$78) {
    return noPrefixes(function mk$$70(arg0$$20) {
      return new _il.ILInstr(76, "I_unbox_any", arg0$$20);
    }, prefixes$$78);
  }))], (0, _Types.L)([_ilbinary.i_cpobj, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$79) {
    return noPrefixes(function mk$$71(arg0$$21) {
      return new _il.ILInstr(70, "I_cpobj", arg0$$21);
    }, prefixes$$79);
  }))], (0, _Types.L)([_ilbinary.i_initobj, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$80) {
    return noPrefixes(function mk$$72(arg0$$22) {
      return new _il.ILInstr(71, "I_initobj", arg0$$22);
    }, prefixes$$80);
  }))], (0, _Types.L)([_ilbinary.i_ldobj, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$81) {
    return volatileOrUnalignedPrefix(function mk$$73(tupledArg$$13) {
      return function (z) {
        return new _il.ILInstr(72, "I_ldobj", tupledArg$$13[0], tupledArg$$13[1], z);
      };
    }, prefixes$$81);
  }))], (0, _Types.L)([_ilbinary.i_stobj, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$82) {
    return volatileOrUnalignedPrefix(function mk$$74(tupledArg$$14) {
      return function (z$$1) {
        return new _il.ILInstr(73, "I_stobj", tupledArg$$14[0], tupledArg$$14[1], z$$1);
      };
    }, prefixes$$82);
  }))], (0, _Types.L)([_ilbinary.i_sizeof, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$83) {
    return noPrefixes(function mk$$75(arg0$$23) {
      return new _il.ILInstr(77, "I_sizeof", arg0$$23);
    }, prefixes$$83);
  }))], (0, _Types.L)([_ilbinary.i_box, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$84) {
    return noPrefixes(function mk$$76(arg0$$24) {
      return new _il.ILInstr(74, "I_box", arg0$$24);
    }, prefixes$$84);
  }))], (0, _Types.L)([_ilbinary.i_unbox, new ILInstrDecoder(18, "I_type_instr", (0, _Util.uncurry)(2, function (prefixes$$85) {
    return noPrefixes(function mk$$77(arg0$$25) {
      return new _il.ILInstr(75, "I_unbox", arg0$$25);
    }, prefixes$$85);
  }))], (0, _Types.L)())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
}

const oneByteInstrs = new _Types.FSharpRef(null);
exports.oneByteInstrs = oneByteInstrs;
const twoByteInstrs = new _Types.FSharpRef(null);
exports.twoByteInstrs = twoByteInstrs;

function fillInstrs() {
  const oneByteInstrTable = (0, _Array.fill)(new Array(256), 0, 256, new ILInstrDecoder(19, "I_invalid_instr"));
  const twoByteInstrTable = (0, _Array.fill)(new Array(256), 0, 256, new ILInstrDecoder(19, "I_invalid_instr"));

  const addInstr = function addInstr(tupledArg$$15) {
    if (tupledArg$$15[0] > 255) {
      const i$$4 = tupledArg$$15[0] & 255 | 0;

      if (twoByteInstrTable[i$$4].tag === 19) {} else {
        (0, _ildiag.dprintn)("warning: duplicate decode entries for " + (0, _Util.int32ToString)(i$$4));
      }

      twoByteInstrTable[i$$4] = tupledArg$$15[1];
    } else {
      if (oneByteInstrTable[tupledArg$$15[0]].tag === 19) {} else {
        (0, _ildiag.dprintn)("warning: duplicate decode entries for " + (0, _Util.int32ToString)(tupledArg$$15[0]));
      }

      oneByteInstrTable[tupledArg$$15[0]] = tupledArg$$15[1];
    }
  };

  (0, _List.iterate)(addInstr, instrs());
  (0, _List.iterate)(function (tupledArg$$16) {
    addInstr([tupledArg$$16[0], new ILInstrDecoder(2, "I_none_instr", function (prefixes$$86) {
      return noPrefixes(tupledArg$$16[1], prefixes$$86);
    })]);
  }, _ilbinary.noArgInstrs.Value);
  oneByteInstrs.contents = oneByteInstrTable;
  twoByteInstrs.contents = twoByteInstrTable;
}

function getOneByteInstr(i$$5) {
  getOneByteInstr: while (true) {
    const matchValue$$2 = oneByteInstrs.contents;

    if (matchValue$$2 != null) {
      const t = matchValue$$2;
      return t[i$$5];
    } else {
      fillInstrs();
      i$$5 = i$$5;
      continue getOneByteInstr;
    }
  }
}

function getTwoByteInstr(i$$6) {
  getTwoByteInstr: while (true) {
    const matchValue$$3 = twoByteInstrs.contents;

    if (matchValue$$3 != null) {
      const t$$1 = matchValue$$3;
      return t$$1[i$$6];
    } else {
      fillInstrs();
      i$$6 = i$$6;
      continue getTwoByteInstr;
    }
  }
}

const ImageChunk = (0, _Types.declare)(function ImageChunk(arg1, arg2) {
  this.size = arg1 | 0;
  this.addr = arg2 | 0;
}, _Types.Record);
exports.ImageChunk = ImageChunk;

function chunk(sz, next) {
  return [new ImageChunk(sz, next), next + sz];
}

function nochunk(next$$1) {
  return [new ImageChunk(0, 0), next$$1];
}

const RowElementKind = (0, _Types.declare)(function RowElementKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RowElementKind = RowElementKind;
const RowKind = (0, _Types.declare)(function RowKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RowKind = RowKind;
const kindAssemblyRef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))))))))));
exports.kindAssemblyRef = kindAssemblyRef;
const kindModuleRef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)()));
exports.kindModuleRef = kindModuleRef;
const kindFileRef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindFileRef = kindFileRef;
const kindTypeRef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(20, "ResolutionScope"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)()))));
exports.kindTypeRef = kindTypeRef;
const kindTypeSpec = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()));
exports.kindTypeSpec = kindTypeSpec;
const kindTypeDef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(8, "TypeDefOrRefOrSpec"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Field), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Method), (0, _Types.L)())))))));
exports.kindTypeDef = kindTypeDef;
const kindPropertyMap = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Property), (0, _Types.L)())));
exports.kindPropertyMap = kindPropertyMap;
const kindEventMap = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Event), (0, _Types.L)())));
exports.kindEventMap = kindEventMap;
const kindInterfaceImpl = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)(new RowElementKind(8, "TypeDefOrRefOrSpec"), (0, _Types.L)())));
exports.kindInterfaceImpl = kindInterfaceImpl;
const kindNested = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)())));
exports.kindNested = kindNested;
const kindCustomAttribute = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(11, "HasCustomAttribute"), (0, _Types.L)(new RowElementKind(19, "CustomAttributeType"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindCustomAttribute = kindCustomAttribute;
const kindDeclSecurity = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(13, "HasDeclSecurity"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindDeclSecurity = kindDeclSecurity;
const kindMemberRef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(14, "MemberRefParent"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindMemberRef = kindMemberRef;
const kindStandAloneSig = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()));
exports.kindStandAloneSig = kindStandAloneSig;
const kindFieldDef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindFieldDef = kindFieldDef;
const kindFieldRVA = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(3, "Data"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Field), (0, _Types.L)())));
exports.kindFieldRVA = kindFieldRVA;
const kindFieldMarshal = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(12, "HasFieldMarshal"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)())));
exports.kindFieldMarshal = kindFieldMarshal;
const kindConstant = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(10, "HasConstant"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindConstant = kindConstant;
const kindFieldLayout = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Field), (0, _Types.L)())));
exports.kindFieldLayout = kindFieldLayout;
const kindParam = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)()))));
exports.kindParam = kindParam;
const kindMethodDef = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Param), (0, _Types.L)())))))));
exports.kindMethodDef = kindMethodDef;
const kindMethodImpl = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)(new RowElementKind(16, "MethodDefOrRef"), (0, _Types.L)(new RowElementKind(16, "MethodDefOrRef"), (0, _Types.L)()))));
exports.kindMethodImpl = kindMethodImpl;
const kindImplMap = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(17, "MemberForwarded"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$ModuleRef), (0, _Types.L)())))));
exports.kindImplMap = kindImplMap;
const kindMethodSemantics = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$Method), (0, _Types.L)(new RowElementKind(15, "HasSemantics"), (0, _Types.L)()))));
exports.kindMethodSemantics = kindMethodSemantics;
const kindProperty = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)()))));
exports.kindProperty = kindProperty;
const kindEvent = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(8, "TypeDefOrRefOrSpec"), (0, _Types.L)()))));
exports.kindEvent = kindEvent;
const kindManifestResource = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(18, "Implementation"), (0, _Types.L)())))));
exports.kindManifestResource = kindManifestResource;
const kindClassLayout = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$TypeDef), (0, _Types.L)()))));
exports.kindClassLayout = kindClassLayout;
const kindExportedType = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(18, "Implementation"), (0, _Types.L)()))))));
exports.kindExportedType = kindExportedType;
const kindAssembly = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(1, "ULong"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)()))))))))));
exports.kindAssembly = kindAssembly;
const kindGenericParam_v1_1 = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(9, "TypeOrMethodDef"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(8, "TypeDefOrRefOrSpec"), (0, _Types.L)()))))));
exports.kindGenericParam_v1_1 = kindGenericParam_v1_1;
const kindGenericParam_v2_0 = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(9, "TypeOrMethodDef"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)())))));
exports.kindGenericParam_v2_0 = kindGenericParam_v2_0;
const kindMethodSpec = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(16, "MethodDefOrRef"), (0, _Types.L)(new RowElementKind(5, "Blob"), (0, _Types.L)())));
exports.kindMethodSpec = kindMethodSpec;
const kindGenericParamConstraint = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(7, "SimpleIndex", _ilbinary.TableNames$$$GenericParam), (0, _Types.L)(new RowElementKind(8, "TypeDefOrRefOrSpec"), (0, _Types.L)())));
exports.kindGenericParamConstraint = kindGenericParamConstraint;
const kindModule = new RowKind(0, "RowKind", (0, _Types.L)(new RowElementKind(0, "UShort"), (0, _Types.L)(new RowElementKind(6, "SString"), (0, _Types.L)(new RowElementKind(4, "GGuid"), (0, _Types.L)(new RowElementKind(4, "GGuid"), (0, _Types.L)(new RowElementKind(4, "GGuid"), (0, _Types.L)()))))));
exports.kindModule = kindModule;
const kindIllegal = new RowKind(0, "RowKind", (0, _Types.L)());
exports.kindIllegal = kindIllegal;

function hcCompare(_arg2, _arg1) {
  const activePatternResult17696 = $007CTaggedIndex$007C(_arg2);
  const activePatternResult17695 = $007CTaggedIndex$007C(_arg1);

  if (activePatternResult17696[1] < activePatternResult17695[1]) {
    return -1 | 0;
  } else if (activePatternResult17696[1] > activePatternResult17695[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.HasConstantTag$$get_Tag)(activePatternResult17696[0]), (0, _ilbinary.HasConstantTag$$get_Tag)(activePatternResult17695[0])) | 0;
  }
}

function hsCompare(_arg2$$1, _arg1$$1) {
  const activePatternResult17700 = $007CTaggedIndex$007C(_arg2$$1);
  const activePatternResult17699 = $007CTaggedIndex$007C(_arg1$$1);

  if (activePatternResult17700[1] < activePatternResult17699[1]) {
    return -1 | 0;
  } else if (activePatternResult17700[1] > activePatternResult17699[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.HasSemanticsTag$$get_Tag)(activePatternResult17700[0]), (0, _ilbinary.HasSemanticsTag$$get_Tag)(activePatternResult17699[0])) | 0;
  }
}

function hcaCompare(_arg2$$2, _arg1$$2) {
  const activePatternResult17704 = $007CTaggedIndex$007C(_arg2$$2);
  const activePatternResult17703 = $007CTaggedIndex$007C(_arg1$$2);

  if (activePatternResult17704[1] < activePatternResult17703[1]) {
    return -1 | 0;
  } else if (activePatternResult17704[1] > activePatternResult17703[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.HasCustomAttributeTag$$get_Tag)(activePatternResult17704[0]), (0, _ilbinary.HasCustomAttributeTag$$get_Tag)(activePatternResult17703[0])) | 0;
  }
}

function mfCompare(_arg2$$3, _arg1$$3) {
  const activePatternResult17708 = $007CTaggedIndex$007C(_arg2$$3);
  const activePatternResult17707 = $007CTaggedIndex$007C(_arg1$$3);

  if (activePatternResult17708[1] < activePatternResult17707[1]) {
    return -1 | 0;
  } else if (activePatternResult17708[1] > activePatternResult17707[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.MemberForwardedTag$$get_Tag)(activePatternResult17708[0]), (0, _ilbinary.MemberForwardedTag$$get_Tag)(activePatternResult17707[0])) | 0;
  }
}

function hdsCompare(_arg2$$4, _arg1$$4) {
  const activePatternResult17712 = $007CTaggedIndex$007C(_arg2$$4);
  const activePatternResult17711 = $007CTaggedIndex$007C(_arg1$$4);

  if (activePatternResult17712[1] < activePatternResult17711[1]) {
    return -1 | 0;
  } else if (activePatternResult17712[1] > activePatternResult17711[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.HasDeclSecurityTag$$get_Tag)(activePatternResult17712[0]), (0, _ilbinary.HasDeclSecurityTag$$get_Tag)(activePatternResult17711[0])) | 0;
  }
}

function hfmCompare(_arg2$$5, _arg1$$5) {
  const activePatternResult17716 = $007CTaggedIndex$007C(_arg2$$5);
  const activePatternResult17715 = $007CTaggedIndex$007C(_arg1$$5);

  if (activePatternResult17716[1] < activePatternResult17715[1]) {
    return -1 | 0;
  } else if (activePatternResult17716[1] > activePatternResult17715[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.HasFieldMarshalTag$$get_Tag)(activePatternResult17716[0]), (0, _ilbinary.HasFieldMarshalTag$$get_Tag)(activePatternResult17715[0])) | 0;
  }
}

function tomdCompare(_arg2$$6, _arg1$$6) {
  const activePatternResult17720 = $007CTaggedIndex$007C(_arg2$$6);
  const activePatternResult17719 = $007CTaggedIndex$007C(_arg1$$6);

  if (activePatternResult17720[1] < activePatternResult17719[1]) {
    return -1 | 0;
  } else if (activePatternResult17720[1] > activePatternResult17719[1]) {
    return 1;
  } else {
    return (0, _Util.comparePrimitives)((0, _ilbinary.TypeOrMethodDefTag$$get_Tag)(activePatternResult17720[0]), (0, _ilbinary.TypeOrMethodDefTag$$get_Tag)(activePatternResult17719[0])) | 0;
  }
}

function simpleIndexCompare(idx1$$7, idx2$$7) {
  return (0, _Util.comparePrimitives)(idx1$$7, idx2$$7);
}

const TypeDefAsTypIdx = (0, _Types.declare)(function TypeDefAsTypIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeDefAsTypIdx = TypeDefAsTypIdx;
const TypeRefAsTypIdx = (0, _Types.declare)(function TypeRefAsTypIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeRefAsTypIdx = TypeRefAsTypIdx;
const BlobAsMethodSigIdx = (0, _Types.declare)(function BlobAsMethodSigIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BlobAsMethodSigIdx = BlobAsMethodSigIdx;
const BlobAsFieldSigIdx = (0, _Types.declare)(function BlobAsFieldSigIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BlobAsFieldSigIdx = BlobAsFieldSigIdx;
const BlobAsPropSigIdx = (0, _Types.declare)(function BlobAsPropSigIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BlobAsPropSigIdx = BlobAsPropSigIdx;
const BlobAsLocalSigIdx = (0, _Types.declare)(function BlobAsLocalSigIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BlobAsLocalSigIdx = BlobAsLocalSigIdx;
const MemberRefAsMspecIdx = (0, _Types.declare)(function MemberRefAsMspecIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MemberRefAsMspecIdx = MemberRefAsMspecIdx;
const MethodSpecAsMspecIdx = (0, _Types.declare)(function MethodSpecAsMspecIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethodSpecAsMspecIdx = MethodSpecAsMspecIdx;
const MemberRefAsFspecIdx = (0, _Types.declare)(function MemberRefAsFspecIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MemberRefAsFspecIdx = MemberRefAsFspecIdx;
const CustomAttrIdx = (0, _Types.declare)(function CustomAttrIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CustomAttrIdx = CustomAttrIdx;
const GenericParamsIdx = (0, _Types.declare)(function GenericParamsIdx(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.GenericParamsIdx = GenericParamsIdx;

function mkCacheInt32(lowMem, _inbase, _nm, _sz) {
  if (lowMem) {
    return function (f$$4) {
      return function (x$$47) {
        return f$$4(x$$47);
      };
    };
  } else {
    const cache = new _Types.FSharpRef(null);
    const count = new _Types.FSharpRef(0);
    return function (f$$5) {
      return function (idx$$3) {
        let cache$$1;

        if ((0, _Util.equals)(cache.contents, null)) {
          cache.contents = new Map([]);
        }

        cache$$1 = cache.contents;
        const patternInput$$20 = (0, _Util.tryGetValue)(cache$$1, idx$$3, null);

        if (patternInput$$20[0]) {
          void count.contents++;
          return patternInput$$20[1];
        } else {
          const res$$3 = f$$5(idx$$3);
          cache$$1.set(idx$$3, res$$3);
          return res$$3;
        }
      };
    };
  }
}

function mkCacheGeneric(lowMem$$1, _inbase$$1, _nm$$1, _sz$$1) {
  if (lowMem$$1) {
    return function (f$$6) {
      return function (x$$48) {
        return f$$6(x$$48);
      };
    };
  } else {
    const cache$$2 = new _Types.FSharpRef(null);
    const count$$1 = new _Types.FSharpRef(0);
    return function (f$$7) {
      return function (idx$$4) {
        let cache$$3;

        if ((0, _Util.equals)(cache$$2.contents, null)) {
          cache$$2.contents = new Map([]);
        }

        cache$$3 = cache$$2.contents;
        const matchValue$$6 = (0, _Util.tryGetValue)(cache$$3, idx$$4, null);

        if (matchValue$$6[0]) {
          void count$$1.contents++;
          return matchValue$$6[1];
        } else {
          const res$$4 = f$$7(idx$$4);
          cache$$3.set(idx$$4, res$$4);
          return res$$4;
        }
      };
    };
  }
}

function seekFindRow(numRows, rowChooser) {
  let i$$7 = 1;

  while (i$$7 <= numRows ? !rowChooser(i$$7) : false) {
    i$$7 = i$$7 + 1;
  }

  if (i$$7 > numRows) {
    (0, _ildiag.dprintn)("warning: seekFindRow: row not found");
  }

  return i$$7 | 0;
}

function seekReadIndexedRows(numRows$$1, rowReader, keyFunc, keyComparer, binaryChop, rowConverter) {
  if (binaryChop) {
    let low = 0;
    let high = numRows$$1 + 1 | 0;
    let fin = false;

    while (!fin) {
      if (high - low <= 1) {
        fin = true;
      } else {
        const mid = ~~((low + high) / 2) | 0;
        const midrow = rowReader(mid);
        const c$$2 = keyComparer(keyFunc(midrow)) | 0;

        if (c$$2 > 0) {
          low = mid;
        } else if (c$$2 < 0) {
          high = mid;
        } else {
          fin = true;
        }
      }
    }

    let res$$5 = (0, _Types.L)();

    if (high - low > 1) {
      const mid$$1 = ~~((low + high) / 2) | 0;
      let fin$$1 = false;
      let curr = mid$$1 | 0;

      while (!fin$$1) {
        if (curr > numRows$$1) {
          fin$$1 = true;
        } else {
          const currrow = rowReader(curr);

          if (keyComparer(keyFunc(currrow)) === 0) {
            res$$5 = (0, _Types.L)(rowConverter(currrow), res$$5);
          } else {
            fin$$1 = true;
          }

          curr = curr + 1;
        }
      }

      res$$5 = (0, _List.reverse)(res$$5);
      let fin$$2 = false;
      let curr$$1 = mid$$1 - 1 | 0;

      while (!fin$$2) {
        if (curr$$1 === 0) {
          fin$$2 = true;
        } else {
          const currrow$$1 = rowReader(curr$$1);

          if (keyComparer(keyFunc(currrow$$1)) === 0) {
            res$$5 = (0, _Types.L)(rowConverter(currrow$$1), res$$5);
          } else {
            fin$$2 = true;
          }

          curr$$1 = curr$$1 - 1;
        }
      }
    }

    return res$$5;
  } else {
    const res$$6 = new _Types.FSharpRef((0, _Types.L)());

    for (let i$$8 = 1; i$$8 <= numRows$$1; i$$8++) {
      const rowinfo = rowReader(i$$8);

      if (keyComparer(keyFunc(rowinfo)) === 0) {
        res$$6.contents = (0, _Types.L)(rowConverter(rowinfo), res$$6.contents);
      }
    }

    return (0, _List.reverse)(res$$6.contents);
  }
}

function seekReadOptionalIndexedRow(info_0, info_1, info_2, info_3, info_4, info_5) {
  const info = [info_0, info_1, info_2, info_3, info_4, info_5];
  const matchValue$$7 = seekReadIndexedRows(info[0], info[1], info[2], info[3], info[4], info[5]);

  if (matchValue$$7.tail == null) {
    return null;
  } else if (matchValue$$7.tail.tail == null) {
    return (0, _Option.some)(matchValue$$7.head);
  } else {
    (0, _ildiag.dprintn)("multiple rows found when indexing table");
    return (0, _Option.some)(matchValue$$7.head);
  }
}

function seekReadIndexedRow(info_0$$1, info_1$$1, info_2$$1, info_3$$1, info_4$$1, info_5$$1) {
  const info$$1 = [info_0$$1, info_1$$1, info_2$$1, info_3$$1, info_4$$1, info_5$$1];
  const matchValue$$8 = seekReadOptionalIndexedRow(info$$1[0], info$$1[1], info$$1[2], info$$1[3], info$$1[4], info$$1[5]);

  if (matchValue$$8 == null) {
    throw new Error("no row found for key when indexing table");
  } else {
    const row = (0, _Option.value)(matchValue$$8);
    return row;
  }
}

const MethodData = (0, _Types.declare)(function MethodData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethodData = MethodData;
const VarArgMethodData = (0, _Types.declare)(function VarArgMethodData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.VarArgMethodData = VarArgMethodData;
const PEReader = (0, _Types.declare)(function PEReader(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
  this.fileName = arg1;
  this.pdb = arg2;
  this.entryPointToken = arg3;
  this.pefile = arg4;
  this.textSegmentPhysicalLoc = arg5 | 0;
  this.textSegmentPhysicalSize = arg6 | 0;
  this.dataSegmentPhysicalLoc = arg7 | 0;
  this.dataSegmentPhysicalSize = arg8 | 0;
  this.anyV2P = arg9;
  this.metadataAddr = arg10 | 0;
  this.sectionHeaders = arg11;
  this.nativeResourcesAddr = arg12 | 0;
  this.nativeResourcesSize = arg13 | 0;
  this.resourcesAddr = arg14 | 0;
  this.strongnameAddr = arg15 | 0;
  this.vtableFixupsAddr = arg16 | 0;
  this.noFileOnDisk = arg17;
}, _Types.Record);
exports.PEReader = PEReader;
const ILMetadataReader = (0, _Types.declare)(function ILMetadataReader(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28, arg29, arg30, arg31, arg32, arg33, arg34, arg35, arg36, arg37, arg38, arg39, arg40, arg41, arg42, arg43, arg44, arg45, arg46, arg47, arg48, arg49, arg50, arg51, arg52, arg53, arg54, arg55, arg56, arg57, arg58, arg59, arg60, arg61, arg62, arg63, arg64, arg65, arg66, arg67, arg68, arg69) {
  this.ilg = arg1;
  this.sorted = arg2;
  this.mdfile = arg3;
  this.pectxtCaptured = arg4;
  this.entryPointToken = arg5;
  this.dataEndPoints = arg6;
  this.fileName = arg7;
  this.getNumRows = arg8;
  this.userStringsStreamPhysicalLoc = arg9 | 0;
  this.stringsStreamPhysicalLoc = arg10 | 0;
  this.blobsStreamPhysicalLoc = arg11 | 0;
  this.blobsStreamSize = arg12 | 0;
  this.readUserStringHeap = arg13;
  this.memoizeString = arg14;
  this.readStringHeap = arg15;
  this.readBlobHeap = arg16;
  this.guidsStreamPhysicalLoc = arg17 | 0;
  this.rowAddr = arg18;
  this.tableBigness = arg19;
  this.rsBigness = arg20;
  this.tdorBigness = arg21;
  this.tomdBigness = arg22;
  this.hcBigness = arg23;
  this.hcaBigness = arg24;
  this.hfmBigness = arg25;
  this.hdsBigness = arg26;
  this.mrpBigness = arg27;
  this.hsBigness = arg28;
  this.mdorBigness = arg29;
  this.mfBigness = arg30;
  this.iBigness = arg31;
  this.catBigness = arg32;
  this.stringsBigness = arg33;
  this.guidsBigness = arg34;
  this.blobsBigness = arg35;
  this.seekReadNestedRow = arg36;
  this.seekReadConstantRow = arg37;
  this.seekReadMethodSemanticsRow = arg38;
  this.seekReadTypeDefRow = arg39;
  this.seekReadAssemblyRef = arg40;
  this.seekReadMethodSpecAsMethodData = arg41;
  this.seekReadMemberRefAsMethodData = arg42;
  this.seekReadMemberRefAsFieldSpec = arg43;
  this.seekReadCustomAttr = arg44;
  this.seekReadTypeRef = arg45;
  this.seekReadTypeRefAsType = arg46;
  this.readBlobHeapAsPropertySig = arg47;
  this.readBlobHeapAsFieldSig = arg48;
  this.readBlobHeapAsMethodSig = arg49;
  this.readBlobHeapAsLocalsSig = arg50;
  this.seekReadTypeDefAsType = arg51;
  this.seekReadMethodDefAsMethodData = arg52;
  this.seekReadGenericParams = arg53;
  this.seekReadFieldDefAsFieldSpec = arg54;
  this.customAttrsReader_Module = arg55;
  this.customAttrsReader_Assembly = arg56;
  this.customAttrsReader_TypeDef = arg57;
  this.customAttrsReader_GenericParam = arg58;
  this.customAttrsReader_FieldDef = arg59;
  this.customAttrsReader_MethodDef = arg60;
  this.customAttrsReader_ParamDef = arg61;
  this.customAttrsReader_Event = arg62;
  this.customAttrsReader_Property = arg63;
  this.customAttrsReader_ManifestResource = arg64;
  this.customAttrsReader_ExportedType = arg65;
  this.securityDeclsReader_TypeDef = arg66;
  this.securityDeclsReader_MethodDef = arg67;
  this.securityDeclsReader_Assembly = arg68;
  this.typeDefReader = arg69;
}, _Types.Record);
exports.ILMetadataReader = ILMetadataReader;

function seekReadUInt16Adv(mdv$$17, addr$$26) {
  const res$$7 = seekReadUInt16(mdv$$17, addr$$26.contents);
  addr$$26.contents = addr$$26.contents + 2;
  return res$$7;
}

function seekReadInt32Adv(mdv$$18, addr$$27) {
  const res$$8 = seekReadInt32(mdv$$18, addr$$27.contents) | 0;
  addr$$27.contents = addr$$27.contents + 4;
  return res$$8 | 0;
}

function seekReadUInt16AsInt32Adv(mdv$$19, addr$$28) {
  const res$$9 = seekReadUInt16AsInt32(mdv$$19, addr$$28.contents) | 0;
  addr$$28.contents = addr$$28.contents + 2;
  return res$$9 | 0;
}

function seekReadTaggedIdx(f$$8, nbits$$1, big, mdv$$20, addr$$29) {
  const tok$$4 = (big ? seekReadInt32Adv(mdv$$20, addr$$29) : seekReadUInt16AsInt32Adv(mdv$$20, addr$$29)) | 0;
  return tokToTaggedIdx(f$$8, nbits$$1, tok$$4);
}

function seekReadIdx(big$$1, mdv$$21, addr$$30) {
  if (big$$1) {
    return seekReadInt32Adv(mdv$$21, addr$$30) | 0;
  } else {
    return seekReadUInt16AsInt32Adv(mdv$$21, addr$$30) | 0;
  }
}

function seekReadUntaggedIdx(tab$$4, ctxt, mdv$$22, addr$$31) {
  return seekReadIdx(ctxt.tableBigness[(0, _ilbinary.TableName$$get_Index)(tab$$4)], mdv$$22, addr$$31);
}

function seekReadResolutionScopeIdx(ctxt$$1, mdv$$23, addr$$32) {
  return seekReadTaggedIdx(_ilbinary.mkResolutionScopeTag, 2, ctxt$$1.rsBigness, mdv$$23, addr$$32);
}

function seekReadTypeDefOrRefOrSpecIdx(ctxt$$2, mdv$$24, addr$$33) {
  return seekReadTaggedIdx(_ilbinary.mkTypeDefOrRefOrSpecTag, 2, ctxt$$2.tdorBigness, mdv$$24, addr$$33);
}

function seekReadTypeOrMethodDefIdx(ctxt$$3, mdv$$25, addr$$34) {
  return seekReadTaggedIdx(_ilbinary.mkTypeOrMethodDefTag, 1, ctxt$$3.tomdBigness, mdv$$25, addr$$34);
}

function seekReadHasConstantIdx(ctxt$$4, mdv$$26, addr$$35) {
  return seekReadTaggedIdx(_ilbinary.mkHasConstantTag, 2, ctxt$$4.hcBigness, mdv$$26, addr$$35);
}

function seekReadHasCustomAttributeIdx(ctxt$$5, mdv$$27, addr$$36) {
  return seekReadTaggedIdx(_ilbinary.mkHasCustomAttributeTag, 5, ctxt$$5.hcaBigness, mdv$$27, addr$$36);
}

function seekReadHasFieldMarshalIdx(ctxt$$6, mdv$$28, addr$$37) {
  return seekReadTaggedIdx(_ilbinary.mkHasFieldMarshalTag, 1, ctxt$$6.hfmBigness, mdv$$28, addr$$37);
}

function seekReadHasDeclSecurityIdx(ctxt$$7, mdv$$29, addr$$38) {
  return seekReadTaggedIdx(_ilbinary.mkHasDeclSecurityTag, 2, ctxt$$7.hdsBigness, mdv$$29, addr$$38);
}

function seekReadMemberRefParentIdx(ctxt$$8, mdv$$30, addr$$39) {
  return seekReadTaggedIdx(_ilbinary.mkMemberRefParentTag, 3, ctxt$$8.mrpBigness, mdv$$30, addr$$39);
}

function seekReadHasSemanticsIdx(ctxt$$9, mdv$$31, addr$$40) {
  return seekReadTaggedIdx(_ilbinary.mkHasSemanticsTag, 1, ctxt$$9.hsBigness, mdv$$31, addr$$40);
}

function seekReadMethodDefOrRefIdx(ctxt$$10, mdv$$32, addr$$41) {
  return seekReadTaggedIdx(_ilbinary.mkMethodDefOrRefTag, 1, ctxt$$10.mdorBigness, mdv$$32, addr$$41);
}

function seekReadMemberForwardedIdx(ctxt$$11, mdv$$33, addr$$42) {
  return seekReadTaggedIdx(_ilbinary.mkMemberForwardedTag, 1, ctxt$$11.mfBigness, mdv$$33, addr$$42);
}

function seekReadImplementationIdx(ctxt$$12, mdv$$34, addr$$43) {
  return seekReadTaggedIdx(_ilbinary.mkImplementationTag, 2, ctxt$$12.iBigness, mdv$$34, addr$$43);
}

function seekReadCustomAttributeTypeIdx(ctxt$$13, mdv$$35, addr$$44) {
  return seekReadTaggedIdx(_ilbinary.mkILCustomAttributeTypeTag, 3, ctxt$$13.catBigness, mdv$$35, addr$$44);
}

function seekReadStringIdx(ctxt$$14, mdv$$36, addr$$45) {
  return seekReadIdx(ctxt$$14.stringsBigness, mdv$$36, addr$$45);
}

function seekReadGuidIdx(ctxt$$15, mdv$$37, addr$$46) {
  return seekReadIdx(ctxt$$15.guidsBigness, mdv$$37, addr$$46);
}

function seekReadBlobIdx(ctxt$$16, mdv$$38, addr$$47) {
  return seekReadIdx(ctxt$$16.blobsBigness, mdv$$38, addr$$47);
}

function seekReadModuleRow(ctxt$$17, mdv$$39, idx$$5) {
  if (idx$$5 === 0) {
    throw new Error("cannot read Module table row 0");
  }

  let addr$$48 = new _Types.FSharpRef(ctxt$$17.rowAddr(_ilbinary.TableNames$$$Module, idx$$5));
  const generation = seekReadUInt16Adv(mdv$$39, addr$$48);
  const nameIdx = seekReadStringIdx(ctxt$$17, mdv$$39, addr$$48) | 0;
  const mvidIdx = seekReadGuidIdx(ctxt$$17, mdv$$39, addr$$48) | 0;
  const encidIdx = seekReadGuidIdx(ctxt$$17, mdv$$39, addr$$48) | 0;
  const encbaseidIdx = seekReadGuidIdx(ctxt$$17, mdv$$39, addr$$48) | 0;
  return [generation, nameIdx, mvidIdx, encidIdx, encbaseidIdx];
}

function seekReadTypeRefRow(ctxt$$19, mdv$$40, idx$$7) {
  let addr$$49 = new _Types.FSharpRef(ctxt$$19.rowAddr(_ilbinary.TableNames$$$TypeRef, idx$$7));
  const scopeIdx = seekReadResolutionScopeIdx(ctxt$$19, mdv$$40, addr$$49);
  const nameIdx$$1 = seekReadStringIdx(ctxt$$19, mdv$$40, addr$$49) | 0;
  const namespaceIdx = seekReadStringIdx(ctxt$$19, mdv$$40, addr$$49) | 0;
  return [scopeIdx, nameIdx$$1, namespaceIdx];
}

function seekReadTypeDefRow(ctxt$$21, idx$$9) {
  return ctxt$$21.seekReadTypeDefRow(idx$$9);
}

function seekReadTypeDefRowUncached(ctxtH, idx$$10) {
  const ctxt$$22 = (0, _illib.getHole)(ctxtH);
  const mdv$$41 = ctxt$$22.mdfile.GetView();
  let addr$$50 = new _Types.FSharpRef(ctxt$$22.rowAddr(_ilbinary.TableNames$$$TypeDef, idx$$10));
  const flags = seekReadInt32Adv(mdv$$41, addr$$50) | 0;
  const nameIdx$$2 = seekReadStringIdx(ctxt$$22, mdv$$41, addr$$50) | 0;
  const namespaceIdx$$1 = seekReadStringIdx(ctxt$$22, mdv$$41, addr$$50) | 0;
  const extendsIdx = seekReadTypeDefOrRefOrSpecIdx(ctxt$$22, mdv$$41, addr$$50);
  const fieldsIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Field, ctxt$$22, mdv$$41, addr$$50) | 0;
  const methodsIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Method, ctxt$$22, mdv$$41, addr$$50) | 0;
  return [flags, nameIdx$$2, namespaceIdx$$1, extendsIdx, fieldsIdx, methodsIdx];
}

function seekReadFieldRow(ctxt$$24, mdv$$42, idx$$12) {
  let addr$$51 = new _Types.FSharpRef(ctxt$$24.rowAddr(_ilbinary.TableNames$$$Field, idx$$12));
  const flags$$1 = seekReadUInt16AsInt32Adv(mdv$$42, addr$$51) | 0;
  const nameIdx$$3 = seekReadStringIdx(ctxt$$24, mdv$$42, addr$$51) | 0;
  const typeIdx = seekReadBlobIdx(ctxt$$24, mdv$$42, addr$$51) | 0;
  return [flags$$1, nameIdx$$3, typeIdx];
}

function seekReadMethodRow(ctxt$$26, mdv$$43, idx$$14) {
  let addr$$52 = new _Types.FSharpRef(ctxt$$26.rowAddr(_ilbinary.TableNames$$$Method, idx$$14));
  const codeRVA = seekReadInt32Adv(mdv$$43, addr$$52) | 0;
  const implflags = seekReadUInt16AsInt32Adv(mdv$$43, addr$$52) | 0;
  const flags$$2 = seekReadUInt16AsInt32Adv(mdv$$43, addr$$52) | 0;
  const nameIdx$$4 = seekReadStringIdx(ctxt$$26, mdv$$43, addr$$52) | 0;
  const typeIdx$$1 = seekReadBlobIdx(ctxt$$26, mdv$$43, addr$$52) | 0;
  const paramIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Param, ctxt$$26, mdv$$43, addr$$52) | 0;
  return [codeRVA, implflags, flags$$2, nameIdx$$4, typeIdx$$1, paramIdx];
}

function seekReadParamRow(ctxt$$28, mdv$$44, idx$$16) {
  let addr$$53 = new _Types.FSharpRef(ctxt$$28.rowAddr(_ilbinary.TableNames$$$Param, idx$$16));
  const flags$$3 = seekReadUInt16AsInt32Adv(mdv$$44, addr$$53) | 0;
  const seq = seekReadUInt16AsInt32Adv(mdv$$44, addr$$53) | 0;
  const nameIdx$$5 = seekReadStringIdx(ctxt$$28, mdv$$44, addr$$53) | 0;
  return [flags$$3, seq, nameIdx$$5];
}

function seekReadInterfaceImplRow(ctxt$$30, mdv$$45, idx$$18) {
  let addr$$54 = new _Types.FSharpRef(ctxt$$30.rowAddr(_ilbinary.TableNames$$$InterfaceImpl, idx$$18));
  const tidx = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$30, mdv$$45, addr$$54) | 0;
  const intfIdx = seekReadTypeDefOrRefOrSpecIdx(ctxt$$30, mdv$$45, addr$$54);
  return [tidx, intfIdx];
}

function seekReadMemberRefRow(ctxt$$32, mdv$$46, idx$$20) {
  let addr$$55 = new _Types.FSharpRef(ctxt$$32.rowAddr(_ilbinary.TableNames$$$MemberRef, idx$$20));
  const mrpIdx = seekReadMemberRefParentIdx(ctxt$$32, mdv$$46, addr$$55);
  const nameIdx$$6 = seekReadStringIdx(ctxt$$32, mdv$$46, addr$$55) | 0;
  const typeIdx$$2 = seekReadBlobIdx(ctxt$$32, mdv$$46, addr$$55) | 0;
  return [mrpIdx, nameIdx$$6, typeIdx$$2];
}

function seekReadConstantRow(ctxt$$34, idx$$22) {
  return ctxt$$34.seekReadConstantRow(idx$$22);
}

function seekReadConstantRowUncached(ctxtH$$1, idx$$23) {
  const ctxt$$35 = (0, _illib.getHole)(ctxtH$$1);
  const mdv$$47 = ctxt$$35.mdfile.GetView();
  let addr$$56 = new _Types.FSharpRef(ctxt$$35.rowAddr(_ilbinary.TableNames$$$Constant, idx$$23));
  const kind = seekReadUInt16Adv(mdv$$47, addr$$56);
  const parentIdx = seekReadHasConstantIdx(ctxt$$35, mdv$$47, addr$$56);
  const valIdx = seekReadBlobIdx(ctxt$$35, mdv$$47, addr$$56) | 0;
  return [kind, parentIdx, valIdx];
}

function seekReadCustomAttributeRow(ctxt$$37, idx$$25) {
  const mdv$$48 = ctxt$$37.mdfile.GetView();
  let addr$$57 = new _Types.FSharpRef(ctxt$$37.rowAddr(_ilbinary.TableNames$$$CustomAttribute, idx$$25));
  const parentIdx$$1 = seekReadHasCustomAttributeIdx(ctxt$$37, mdv$$48, addr$$57);
  const typeIdx$$3 = seekReadCustomAttributeTypeIdx(ctxt$$37, mdv$$48, addr$$57);
  const valIdx$$1 = seekReadBlobIdx(ctxt$$37, mdv$$48, addr$$57) | 0;
  return [parentIdx$$1, typeIdx$$3, valIdx$$1];
}

function seekReadFieldMarshalRow(ctxt$$39, mdv$$49, idx$$27) {
  let addr$$58 = new _Types.FSharpRef(ctxt$$39.rowAddr(_ilbinary.TableNames$$$FieldMarshal, idx$$27));
  const parentIdx$$2 = seekReadHasFieldMarshalIdx(ctxt$$39, mdv$$49, addr$$58);
  const typeIdx$$4 = seekReadBlobIdx(ctxt$$39, mdv$$49, addr$$58) | 0;
  return [parentIdx$$2, typeIdx$$4];
}

function seekReadPermissionRow(ctxt$$41, mdv$$50, idx$$29) {
  let addr$$59 = new _Types.FSharpRef(ctxt$$41.rowAddr(_ilbinary.TableNames$$$Permission, idx$$29));
  const action = seekReadUInt16Adv(mdv$$50, addr$$59);
  const parentIdx$$3 = seekReadHasDeclSecurityIdx(ctxt$$41, mdv$$50, addr$$59);
  const typeIdx$$5 = seekReadBlobIdx(ctxt$$41, mdv$$50, addr$$59) | 0;
  return [action, parentIdx$$3, typeIdx$$5];
}

function seekReadClassLayoutRow(ctxt$$43, mdv$$51, idx$$31) {
  let addr$$60 = new _Types.FSharpRef(ctxt$$43.rowAddr(_ilbinary.TableNames$$$ClassLayout, idx$$31));
  const pack = seekReadUInt16Adv(mdv$$51, addr$$60);
  const size = seekReadInt32Adv(mdv$$51, addr$$60) | 0;
  const tidx$$1 = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$43, mdv$$51, addr$$60) | 0;
  return [pack, size, tidx$$1];
}

function seekReadFieldLayoutRow(ctxt$$45, mdv$$52, idx$$33) {
  let addr$$61 = new _Types.FSharpRef(ctxt$$45.rowAddr(_ilbinary.TableNames$$$FieldLayout, idx$$33));
  const offset = seekReadInt32Adv(mdv$$52, addr$$61) | 0;
  const fidx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Field, ctxt$$45, mdv$$52, addr$$61) | 0;
  return [offset, fidx];
}

function seekReadStandAloneSigRow(ctxt$$47, mdv$$53, idx$$35) {
  let addr$$62 = new _Types.FSharpRef(ctxt$$47.rowAddr(_ilbinary.TableNames$$$StandAloneSig, idx$$35));
  const sigIdx = seekReadBlobIdx(ctxt$$47, mdv$$53, addr$$62) | 0;
  return sigIdx | 0;
}

function seekReadEventMapRow(ctxt$$49, mdv$$54, idx$$37) {
  let addr$$63 = new _Types.FSharpRef(ctxt$$49.rowAddr(_ilbinary.TableNames$$$EventMap, idx$$37));
  const tidx$$2 = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$49, mdv$$54, addr$$63) | 0;
  const eventsIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Event, ctxt$$49, mdv$$54, addr$$63) | 0;
  return [tidx$$2, eventsIdx];
}

function seekReadEventRow(ctxt$$51, mdv$$55, idx$$39) {
  let addr$$64 = new _Types.FSharpRef(ctxt$$51.rowAddr(_ilbinary.TableNames$$$Event, idx$$39));
  const flags$$4 = seekReadUInt16AsInt32Adv(mdv$$55, addr$$64) | 0;
  const nameIdx$$7 = seekReadStringIdx(ctxt$$51, mdv$$55, addr$$64) | 0;
  const typIdx = seekReadTypeDefOrRefOrSpecIdx(ctxt$$51, mdv$$55, addr$$64);
  return [flags$$4, nameIdx$$7, typIdx];
}

function seekReadPropertyMapRow(ctxt$$53, mdv$$56, idx$$41) {
  let addr$$65 = new _Types.FSharpRef(ctxt$$53.rowAddr(_ilbinary.TableNames$$$PropertyMap, idx$$41));
  const tidx$$3 = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$53, mdv$$56, addr$$65) | 0;
  const propsIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Property, ctxt$$53, mdv$$56, addr$$65) | 0;
  return [tidx$$3, propsIdx];
}

function seekReadPropertyRow(ctxt$$55, mdv$$57, idx$$43) {
  let addr$$66 = new _Types.FSharpRef(ctxt$$55.rowAddr(_ilbinary.TableNames$$$Property, idx$$43));
  const flags$$5 = seekReadUInt16AsInt32Adv(mdv$$57, addr$$66) | 0;
  const nameIdx$$8 = seekReadStringIdx(ctxt$$55, mdv$$57, addr$$66) | 0;
  const typIdx$$1 = seekReadBlobIdx(ctxt$$55, mdv$$57, addr$$66) | 0;
  return [flags$$5, nameIdx$$8, typIdx$$1];
}

function seekReadMethodSemanticsRow(ctxt$$57, idx$$45) {
  return ctxt$$57.seekReadMethodSemanticsRow(idx$$45);
}

function seekReadMethodSemanticsRowUncached(ctxtH$$2, idx$$46) {
  const ctxt$$58 = (0, _illib.getHole)(ctxtH$$2);
  const mdv$$58 = ctxt$$58.mdfile.GetView();
  let addr$$67 = new _Types.FSharpRef(ctxt$$58.rowAddr(_ilbinary.TableNames$$$MethodSemantics, idx$$46));
  const flags$$6 = seekReadUInt16AsInt32Adv(mdv$$58, addr$$67) | 0;
  const midx = seekReadUntaggedIdx(_ilbinary.TableNames$$$Method, ctxt$$58, mdv$$58, addr$$67) | 0;
  const assocIdx = seekReadHasSemanticsIdx(ctxt$$58, mdv$$58, addr$$67);
  return [flags$$6, midx, assocIdx];
}

function seekReadMethodImplRow(ctxt$$60, mdv$$59, idx$$48) {
  let addr$$68 = new _Types.FSharpRef(ctxt$$60.rowAddr(_ilbinary.TableNames$$$MethodImpl, idx$$48));
  const tidx$$4 = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$60, mdv$$59, addr$$68) | 0;
  const mbodyIdx = seekReadMethodDefOrRefIdx(ctxt$$60, mdv$$59, addr$$68);
  const mdeclIdx = seekReadMethodDefOrRefIdx(ctxt$$60, mdv$$59, addr$$68);
  return [tidx$$4, mbodyIdx, mdeclIdx];
}

function seekReadModuleRefRow(ctxt$$62, mdv$$60, idx$$50) {
  let addr$$69 = new _Types.FSharpRef(ctxt$$62.rowAddr(_ilbinary.TableNames$$$ModuleRef, idx$$50));
  const nameIdx$$9 = seekReadStringIdx(ctxt$$62, mdv$$60, addr$$69) | 0;
  return nameIdx$$9 | 0;
}

function seekReadTypeSpecRow(ctxt$$64, mdv$$61, idx$$52) {
  let addr$$70 = new _Types.FSharpRef(ctxt$$64.rowAddr(_ilbinary.TableNames$$$TypeSpec, idx$$52));
  const blobIdx = seekReadBlobIdx(ctxt$$64, mdv$$61, addr$$70) | 0;
  return blobIdx | 0;
}

function seekReadImplMapRow(ctxt$$66, mdv$$62, idx$$54) {
  let addr$$71 = new _Types.FSharpRef(ctxt$$66.rowAddr(_ilbinary.TableNames$$$ImplMap, idx$$54));
  const flags$$7 = seekReadUInt16AsInt32Adv(mdv$$62, addr$$71) | 0;
  const forwrdedIdx = seekReadMemberForwardedIdx(ctxt$$66, mdv$$62, addr$$71);
  const nameIdx$$10 = seekReadStringIdx(ctxt$$66, mdv$$62, addr$$71) | 0;
  const scopeIdx$$1 = seekReadUntaggedIdx(_ilbinary.TableNames$$$ModuleRef, ctxt$$66, mdv$$62, addr$$71) | 0;
  return [flags$$7, forwrdedIdx, nameIdx$$10, scopeIdx$$1];
}

function seekReadFieldRVARow(ctxt$$68, mdv$$63, idx$$56) {
  let addr$$72 = new _Types.FSharpRef(ctxt$$68.rowAddr(_ilbinary.TableNames$$$FieldRVA, idx$$56));
  const rva = seekReadInt32Adv(mdv$$63, addr$$72) | 0;
  const fidx$$1 = seekReadUntaggedIdx(_ilbinary.TableNames$$$Field, ctxt$$68, mdv$$63, addr$$72) | 0;
  return [rva, fidx$$1];
}

function seekReadAssemblyRow(ctxt$$70, mdv$$64, idx$$58) {
  let addr$$73 = new _Types.FSharpRef(ctxt$$70.rowAddr(_ilbinary.TableNames$$$Assembly, idx$$58));
  const hash = seekReadInt32Adv(mdv$$64, addr$$73) | 0;
  const v1 = seekReadUInt16Adv(mdv$$64, addr$$73);
  const v2 = seekReadUInt16Adv(mdv$$64, addr$$73);
  const v3 = seekReadUInt16Adv(mdv$$64, addr$$73);
  const v4 = seekReadUInt16Adv(mdv$$64, addr$$73);
  const flags$$8 = seekReadInt32Adv(mdv$$64, addr$$73) | 0;
  const publicKeyIdx = seekReadBlobIdx(ctxt$$70, mdv$$64, addr$$73) | 0;
  const nameIdx$$11 = seekReadStringIdx(ctxt$$70, mdv$$64, addr$$73) | 0;
  const localeIdx = seekReadStringIdx(ctxt$$70, mdv$$64, addr$$73) | 0;
  return [hash, v1, v2, v3, v4, flags$$8, publicKeyIdx, nameIdx$$11, localeIdx];
}

function seekReadAssemblyRefRow(ctxt$$72, mdv$$65, idx$$60) {
  let addr$$74 = new _Types.FSharpRef(ctxt$$72.rowAddr(_ilbinary.TableNames$$$AssemblyRef, idx$$60));
  const v1$$1 = seekReadUInt16Adv(mdv$$65, addr$$74);
  const v2$$1 = seekReadUInt16Adv(mdv$$65, addr$$74);
  const v3$$1 = seekReadUInt16Adv(mdv$$65, addr$$74);
  const v4$$1 = seekReadUInt16Adv(mdv$$65, addr$$74);
  const flags$$9 = seekReadInt32Adv(mdv$$65, addr$$74) | 0;
  const publicKeyOrTokenIdx = seekReadBlobIdx(ctxt$$72, mdv$$65, addr$$74) | 0;
  const nameIdx$$12 = seekReadStringIdx(ctxt$$72, mdv$$65, addr$$74) | 0;
  const localeIdx$$1 = seekReadStringIdx(ctxt$$72, mdv$$65, addr$$74) | 0;
  const hashValueIdx = seekReadBlobIdx(ctxt$$72, mdv$$65, addr$$74) | 0;
  return [v1$$1, v2$$1, v3$$1, v4$$1, flags$$9, publicKeyOrTokenIdx, nameIdx$$12, localeIdx$$1, hashValueIdx];
}

function seekReadFileRow(ctxt$$74, mdv$$66, idx$$62) {
  let addr$$75 = new _Types.FSharpRef(ctxt$$74.rowAddr(_ilbinary.TableNames$$$File, idx$$62));
  const flags$$10 = seekReadInt32Adv(mdv$$66, addr$$75) | 0;
  const nameIdx$$13 = seekReadStringIdx(ctxt$$74, mdv$$66, addr$$75) | 0;
  const hashValueIdx$$1 = seekReadBlobIdx(ctxt$$74, mdv$$66, addr$$75) | 0;
  return [flags$$10, nameIdx$$13, hashValueIdx$$1];
}

function seekReadExportedTypeRow(ctxt$$76, mdv$$67, idx$$64) {
  let addr$$76 = new _Types.FSharpRef(ctxt$$76.rowAddr(_ilbinary.TableNames$$$ExportedType, idx$$64));
  const flags$$11 = seekReadInt32Adv(mdv$$67, addr$$76) | 0;
  const tok$$5 = seekReadInt32Adv(mdv$$67, addr$$76) | 0;
  const nameIdx$$14 = seekReadStringIdx(ctxt$$76, mdv$$67, addr$$76) | 0;
  const namespaceIdx$$2 = seekReadStringIdx(ctxt$$76, mdv$$67, addr$$76) | 0;
  const implIdx = seekReadImplementationIdx(ctxt$$76, mdv$$67, addr$$76);
  return [flags$$11, tok$$5, nameIdx$$14, namespaceIdx$$2, implIdx];
}

function seekReadManifestResourceRow(ctxt$$78, mdv$$68, idx$$66) {
  let addr$$77 = new _Types.FSharpRef(ctxt$$78.rowAddr(_ilbinary.TableNames$$$ManifestResource, idx$$66));
  const offset$$1 = seekReadInt32Adv(mdv$$68, addr$$77) | 0;
  const flags$$12 = seekReadInt32Adv(mdv$$68, addr$$77) | 0;
  const nameIdx$$15 = seekReadStringIdx(ctxt$$78, mdv$$68, addr$$77) | 0;
  const implIdx$$1 = seekReadImplementationIdx(ctxt$$78, mdv$$68, addr$$77);
  return [offset$$1, flags$$12, nameIdx$$15, implIdx$$1];
}

function seekReadNestedRow(ctxt$$80, idx$$68) {
  return ctxt$$80.seekReadNestedRow(idx$$68);
}

function seekReadNestedRowUncached(ctxtH$$3, idx$$69) {
  const ctxt$$81 = (0, _illib.getHole)(ctxtH$$3);
  const mdv$$69 = ctxt$$81.mdfile.GetView();
  let addr$$78 = new _Types.FSharpRef(ctxt$$81.rowAddr(_ilbinary.TableNames$$$Nested, idx$$69));
  const nestedIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$81, mdv$$69, addr$$78) | 0;
  const enclIdx = seekReadUntaggedIdx(_ilbinary.TableNames$$$TypeDef, ctxt$$81, mdv$$69, addr$$78) | 0;
  return [nestedIdx, enclIdx];
}

function seekReadGenericParamRow(ctxt$$83, mdv$$70, idx$$71) {
  let addr$$79 = new _Types.FSharpRef(ctxt$$83.rowAddr(_ilbinary.TableNames$$$GenericParam, idx$$71));
  const seq$$1 = seekReadUInt16Adv(mdv$$70, addr$$79);
  const flags$$13 = seekReadUInt16Adv(mdv$$70, addr$$79);
  const ownerIdx = seekReadTypeOrMethodDefIdx(ctxt$$83, mdv$$70, addr$$79);
  const nameIdx$$16 = seekReadStringIdx(ctxt$$83, mdv$$70, addr$$79) | 0;
  return [idx$$71, seq$$1, flags$$13, ownerIdx, nameIdx$$16];
}

function seekReadGenericParamConstraintRow(ctxt$$85, mdv$$71, idx$$73) {
  let addr$$80 = new _Types.FSharpRef(ctxt$$85.rowAddr(_ilbinary.TableNames$$$GenericParamConstraint, idx$$73));
  const pidx = seekReadUntaggedIdx(_ilbinary.TableNames$$$GenericParam, ctxt$$85, mdv$$71, addr$$80) | 0;
  const constraintIdx = seekReadTypeDefOrRefOrSpecIdx(ctxt$$85, mdv$$71, addr$$80);
  return [pidx, constraintIdx];
}

function seekReadMethodSpecRow(ctxt$$87, mdv$$72, idx$$75) {
  let addr$$81 = new _Types.FSharpRef(ctxt$$87.rowAddr(_ilbinary.TableNames$$$MethodSpec, idx$$75));
  const mdorIdx = seekReadMethodDefOrRefIdx(ctxt$$87, mdv$$72, addr$$81);
  const instIdx = seekReadBlobIdx(ctxt$$87, mdv$$72, addr$$81) | 0;
  return [mdorIdx, instIdx];
}

function readUserStringHeapUncached(ctxtH$$4, idx$$77) {
  const ctxt$$89 = (0, _illib.getHole)(ctxtH$$4);
  const mdv$$73 = ctxt$$89.mdfile.GetView();
  return seekReadUserString(mdv$$73, ctxt$$89.userStringsStreamPhysicalLoc + idx$$77);
}

function readUserStringHeap(ctxt$$90, idx$$78) {
  return ctxt$$90.readUserStringHeap(idx$$78);
}

function readStringHeapUncached(ctxtH$$5, idx$$79) {
  const ctxt$$91 = (0, _illib.getHole)(ctxtH$$5);
  const mdv$$74 = ctxt$$91.mdfile.GetView();
  return seekReadUTF8String(mdv$$74, ctxt$$91.stringsStreamPhysicalLoc + idx$$79);
}

function readStringHeap(ctxt$$92, idx$$80) {
  return ctxt$$92.readStringHeap(idx$$80);
}

function readStringHeapOption(ctxt$$93, idx$$81) {
  if (idx$$81 === 0) {
    return null;
  } else {
    return readStringHeap(ctxt$$93, idx$$81);
  }
}

const emptyByteArray = new Uint8Array([]);
exports.emptyByteArray = emptyByteArray;

function readBlobHeapUncached(ctxtH$$6, idx$$82) {
  const ctxt$$94 = (0, _illib.getHole)(ctxtH$$6);
  const mdv$$75 = ctxt$$94.mdfile.GetView();

  if (idx$$82 <= 0 ? true : idx$$82 >= ctxt$$94.blobsStreamSize) {
    return emptyByteArray;
  } else {
    return seekReadBlob(mdv$$75, ctxt$$94.blobsStreamPhysicalLoc + idx$$82);
  }
}

function readBlobHeap(ctxt$$95, idx$$83) {
  return ctxt$$95.readBlobHeap(idx$$83);
}

function readBlobHeapOption(ctxt$$96, idx$$84) {
  if (idx$$84 === 0) {
    return null;
  } else {
    return readBlobHeap(ctxt$$96, idx$$84);
  }
}

function readBlobHeapAsBool(ctxt$$97, vidx) {
  return sigptrGetBool(readBlobHeap(ctxt$$97, vidx), 0)[0];
}

function readBlobHeapAsSByte(ctxt$$98, vidx$$1) {
  return sigptrGetSByte(readBlobHeap(ctxt$$98, vidx$$1), 0)[0];
}

function readBlobHeapAsInt16(ctxt$$99, vidx$$2) {
  return sigptrGetInt16(readBlobHeap(ctxt$$99, vidx$$2), 0)[0];
}

function readBlobHeapAsInt32(ctxt$$100, vidx$$3) {
  return sigptrGetInt32(readBlobHeap(ctxt$$100, vidx$$3), 0)[0];
}

function readBlobHeapAsInt64(ctxt$$101, vidx$$4) {
  return sigptrGetInt64(readBlobHeap(ctxt$$101, vidx$$4), 0)[0];
}

function readBlobHeapAsByte(ctxt$$102, vidx$$5) {
  return sigptrGetByte(readBlobHeap(ctxt$$102, vidx$$5), 0)[0];
}

function readBlobHeapAsUInt16(ctxt$$103, vidx$$6) {
  return sigptrGetUInt16(readBlobHeap(ctxt$$103, vidx$$6), 0)[0];
}

function readBlobHeapAsUInt32(ctxt$$104, vidx$$7) {
  return sigptrGetUInt32(readBlobHeap(ctxt$$104, vidx$$7), 0)[0];
}

function readBlobHeapAsUInt64(ctxt$$105, vidx$$8) {
  return sigptrGetUInt64(readBlobHeap(ctxt$$105, vidx$$8), 0)[0];
}

function readBlobHeapAsSingle(ctxt$$106, vidx$$9) {
  return sigptrGetSingle(readBlobHeap(ctxt$$106, vidx$$9), 0)[0];
}

function readBlobHeapAsDouble(ctxt$$107, vidx$$10) {
  return sigptrGetDouble(readBlobHeap(ctxt$$107, vidx$$10), 0)[0];
}

function readNativeResources(pectxt) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    if (pectxt.nativeResourcesSize !== 0 ? pectxt.nativeResourcesAddr !== 0 : false) {
      const start = pectxt.anyV2P([pectxt.fileName + ": native resources", pectxt.nativeResourcesAddr]) | 0;

      if (pectxt.noFileOnDisk) {
        return (0, _Seq.empty)();
      } else {
        return (0, _Seq.singleton)(new _il.ILNativeResource(0, "In", pectxt.fileName, pectxt.nativeResourcesAddr, start, pectxt.nativeResourcesSize));
      }
    } else {
      return (0, _Seq.empty)();
    }
  }));
}

function getDataEndPointsDelayed(pectxt$$1, ctxtH$$7) {
  return new _Util.Lazy(function () {
    const ctxt$$108 = (0, _illib.getHole)(ctxtH$$7);
    const mdv$$76 = ctxt$$108.mdfile.GetView();
    let dataStartPoints;
    const res$$10 = new _Types.FSharpRef((0, _Types.L)());

    for (let i$$9 = 1; i$$9 <= ctxt$$108.getNumRows(_ilbinary.TableNames$$$FieldRVA); i$$9++) {
      const patternInput$$21 = seekReadFieldRVARow(ctxt$$108, mdv$$76, i$$9);
      res$$10.contents = (0, _Types.L)(["field", patternInput$$21[0]], res$$10.contents);
    }

    for (let i$$10 = 1; i$$10 <= ctxt$$108.getNumRows(_ilbinary.TableNames$$$ManifestResource); i$$10++) {
      const patternInput$$22 = seekReadManifestResourceRow(ctxt$$108, mdv$$76, i$$10);
      const activePatternResult18190 = $007CTaggedIndex$007C(patternInput$$22[3]);

      if (activePatternResult18190[1] === 0) {
        const rva$$2 = pectxt$$1.resourcesAddr + patternInput$$22[0] | 0;
        res$$10.contents = (0, _Types.L)(["manifest resource", rva$$2], res$$10.contents);
      }
    }

    dataStartPoints = res$$10.contents;

    if (dataStartPoints.tail == null) {
      return (0, _Types.L)();
    } else {
      let methodRVAs;
      const res$$11 = new _Types.FSharpRef((0, _Types.L)());

      for (let i$$11 = 1; i$$11 <= ctxt$$108.getNumRows(_ilbinary.TableNames$$$Method); i$$11++) {
        const patternInput$$23 = seekReadMethodRow(ctxt$$108, mdv$$76, i$$11);

        if (patternInput$$23[0] !== 0) {
          const nm = readStringHeap(ctxt$$108, patternInput$$23[3]);
          res$$11.contents = (0, _Types.L)([nm, patternInput$$23[0]], res$$11.contents);
        }
      }

      methodRVAs = res$$11.contents;
      return (0, _List.sort)((0, _List.distinct)((0, _List.append)((0, _Types.L)(pectxt$$1.textSegmentPhysicalLoc + pectxt$$1.textSegmentPhysicalSize, (0, _Types.L)(pectxt$$1.dataSegmentPhysicalLoc + pectxt$$1.dataSegmentPhysicalSize, (0, _Types.L)())), (0, _List.map)(pectxt$$1.anyV2P, (0, _List.append)(dataStartPoints, (0, _List.append)((0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (matchValue$$9) {
          return (0, _Seq.singleton)(["section start", matchValue$$9[0]]);
        }, pectxt$$1.sectionHeaders);
      })), (0, _List.append)((0, _Types.L)(["md", pectxt$$1.metadataAddr], (0, _Types.L)()), (0, _List.append)(pectxt$$1.nativeResourcesAddr === 0 ? (0, _Types.L)() : (0, _Types.L)(["native resources", pectxt$$1.nativeResourcesAddr], (0, _Types.L)()), (0, _List.append)(pectxt$$1.resourcesAddr === 0 ? (0, _Types.L)() : (0, _Types.L)(["managed resources", pectxt$$1.resourcesAddr], (0, _Types.L)()), (0, _List.append)(pectxt$$1.strongnameAddr === 0 ? (0, _Types.L)() : (0, _Types.L)(["managed strongname", pectxt$$1.strongnameAddr], (0, _Types.L)()), (0, _List.append)(pectxt$$1.vtableFixupsAddr === 0 ? (0, _Types.L)() : (0, _Types.L)(["managed vtable_fixups", pectxt$$1.vtableFixupsAddr], (0, _Types.L)()), methodRVAs))))))))), {
        Equals($x$$4, $y$$5) {
          return $x$$4 === $y$$5;
        },

        GetHashCode: _Util.structuralHash
      }), {
        Compare: _Util.comparePrimitives
      });
    }
  });
}

function rvaToData(ctxt$$109, pectxt$$2, nm$$1, rva$$4) {
  if (rva$$4 === 0) {
    throw new Error("rva is zero");
  }

  const start$$1 = pectxt$$2.anyV2P([nm$$1, rva$$4]) | 0;
  const endPoints = (0, _illib.Lazy$$$force)(ctxt$$109.dataEndPoints);

  const look = function look(l$$1) {
    look: while (true) {
      if (l$$1.tail != null) {
        const t$$2 = l$$1.tail;
        const e = l$$1.head | 0;

        if (start$$1 < e) {
          const pev = pectxt$$2.pefile.GetView();
          return seekReadBytes(pev, start$$1, e - start$$1);
        } else {
          l$$1 = t$$2;
          continue look;
        }
      } else {
        return (0, _String.toFail)((0, _String.printf)("find_text_data_extent: none found for fileName=%s, name=%s, rva=0x%08x, start=0x%08x"))(ctxt$$109.fileName)(nm$$1)(rva$$4)(start$$1);
      }
    }
  };

  return look(endPoints);
}

function isSorted(ctxt$$110, tab$$5) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(ctxt$$110.sorted, (0, _Long.op_LeftShift)((0, _Long.fromInteger)(1, false, 2), (0, _ilbinary.TableName$$get_Index)(tab$$5))), (0, _Long.fromInteger)(0, false, 2));
}

function seekReadModule(ctxt$$111, pectxtEager, pevEager, peinfo_0, peinfo_1, peinfo_2, peinfo_3, peinfo_4, peinfo_5, peinfo_6, peinfo_7, peinfo_8, peinfo_9, peinfo_10, peinfo_11, ilMetadataVersion, idx$$86) {
  const peinfo = [peinfo_0, peinfo_1, peinfo_2, peinfo_3, peinfo_4, peinfo_5, peinfo_6, peinfo_7, peinfo_8, peinfo_9, peinfo_10, peinfo_11];
  const useHighEntropyVA = peinfo[2];
  const subsysversion = peinfo[1];
  const subsys = peinfo[0];
  const platform = peinfo[7];
  const only64 = peinfo[6];
  const only32 = peinfo[4];
  const isDll = peinfo[8];
  const is32bitpreferred = peinfo[5];
  const imageBaseReal = peinfo[11] | 0;
  const ilOnly = peinfo[3];
  const alignVirt = peinfo[9] | 0;
  const alignPhys = peinfo[10] | 0;
  const mdv$$77 = ctxt$$111.mdfile.GetView();
  const patternInput$$24 = seekReadModuleRow(ctxt$$111, mdv$$77, idx$$86);
  const ilModuleName = readStringHeap(ctxt$$111, patternInput$$24[1]);
  const nativeResources = readNativeResources(pectxtEager);
  return new _il.ILModuleDef(ctxt$$111.getNumRows(_ilbinary.TableNames$$$Assembly) > 0 ? seekReadAssemblyManifest(ctxt$$111, pectxtEager, 1) : null, ilModuleName, (0, _il.mkILTypeDefsComputed)(function () {
    return seekReadTopTypeDefs(ctxt$$111);
  }), subsysversion, useHighEntropyVA, ~~subsys, isDll, ilOnly, platform, null, only32, is32bitpreferred, only64, alignVirt, alignPhys, imageBaseReal, ilMetadataVersion, seekReadManifestResources(ctxt$$111, mdv$$77, pectxtEager, pevEager), nativeResources, ctxt$$111.customAttrsReader_Module, idx$$86);
}

function seekReadAssemblyManifest(ctxt$$112, pectxt$$3, idx$$87) {
  var masked, patternInput$$26;
  const mdview = ctxt$$112.mdfile.GetView();
  const patternInput$$25 = seekReadAssemblyRow(ctxt$$112, mdview, idx$$87);
  const name = readStringHeap(ctxt$$112, patternInput$$25[7]);
  const pubkey = readBlobHeapOption(ctxt$$112, patternInput$$25[6]);
  return new _il.ILAssemblyManifest(name, patternInput$$25[0], ctxt$$112.securityDeclsReader_Assembly, pubkey, [patternInput$$25[1], patternInput$$25[2], patternInput$$25[3], patternInput$$25[4]], readStringHeapOption(ctxt$$112, patternInput$$25[8]), ctxt$$112.customAttrsReader_Assembly, (masked = patternInput$$25[5] & 14 | 0, masked === 0 ? new _il.ILAssemblyLongevity(0, "Unspecified") : masked === 2 ? new _il.ILAssemblyLongevity(1, "Library") : masked === 4 ? new _il.ILAssemblyLongevity(2, "PlatformAppDomain") : masked === 6 ? new _il.ILAssemblyLongevity(3, "PlatformProcess") : masked === 8 ? new _il.ILAssemblyLongevity(4, "PlatformSystem") : new _il.ILAssemblyLongevity(0, "Unspecified")), 0 !== (patternInput$$25[5] & 16384), 0 !== (patternInput$$25[5] & 32768), 0 !== (patternInput$$25[5] & 8192), 0 !== (patternInput$$25[5] & 256), seekReadTopExportedTypes(ctxt$$112), (patternInput$$26 = pectxt$$3.entryPointToken, (0, _Util.equals)(patternInput$$26[0], _ilbinary.TableNames$$$File) ? seekReadFile(ctxt$$112, mdview, patternInput$$26[1]) : null), idx$$87);
}

function seekReadAssemblyRef(ctxt$$113, idx$$88) {
  return ctxt$$113.seekReadAssemblyRef(idx$$88);
}

function seekReadAssemblyRefUncached(ctxtH$$8, idx$$89) {
  const ctxt$$114 = (0, _illib.getHole)(ctxtH$$8);
  const mdv$$78 = ctxt$$114.mdfile.GetView();
  const patternInput$$27 = seekReadAssemblyRefRow(ctxt$$114, mdv$$78, idx$$89);
  const nm$$2 = readStringHeap(ctxt$$114, patternInput$$27[6]);
  let publicKey;
  const matchValue$$10 = readBlobHeapOption(ctxt$$114, patternInput$$27[5]);

  if (matchValue$$10 != null) {
    const blob = matchValue$$10;
    publicKey = (patternInput$$27[4] & 1) !== 0 ? new _il.PublicKey(0, "PublicKey", blob) : new _il.PublicKey(1, "PublicKeyToken", blob);
  } else {
    publicKey = null;
  }

  return (0, _il.ILAssemblyRef$$$Create$$2BC8E713)(nm$$2, readBlobHeapOption(ctxt$$114, patternInput$$27[8]), publicKey, (patternInput$$27[4] & 256) !== 0, [patternInput$$27[0], patternInput$$27[1], patternInput$$27[2], patternInput$$27[3]], readStringHeapOption(ctxt$$114, patternInput$$27[7]));
}

function seekReadModuleRef(ctxt$$115, mdv$$79, idx$$90) {
  const nameIdx$$21 = seekReadModuleRefRow(ctxt$$115, mdv$$79, idx$$90) | 0;
  return (0, _il.ILModuleRef$$$Create$$10F6F906)(readStringHeap(ctxt$$115, nameIdx$$21), true, null);
}

function seekReadFile(ctxt$$116, mdv$$80, idx$$91) {
  const patternInput$$28 = seekReadFileRow(ctxt$$116, mdv$$80, idx$$91);
  return (0, _il.ILModuleRef$$$Create$$10F6F906)(readStringHeap(ctxt$$116, patternInput$$28[1]), (patternInput$$28[0] & 1) === 0, readBlobHeapOption(ctxt$$116, patternInput$$28[2]));
}

function seekReadClassLayout(ctxt$$117, mdv$$81, idx$$92) {
  const matchValue$$11 = seekReadOptionalIndexedRow(ctxt$$117.getNumRows(_ilbinary.TableNames$$$ClassLayout), function (idx$$93) {
    return seekReadClassLayoutRow(ctxt$$117, mdv$$81, idx$$93);
  }, function (tupledArg$$17) {
    return tupledArg$$17[2];
  }, function (idx2$$8) {
    return simpleIndexCompare(idx$$92, idx2$$8);
  }, isSorted(ctxt$$117, _ilbinary.TableNames$$$ClassLayout), function (tupledArg$$18) {
    return [tupledArg$$18[0], tupledArg$$18[1]];
  });

  if (matchValue$$11 != null) {
    const size$$2 = matchValue$$11[1] | 0;
    const pack$$2 = matchValue$$11[0];
    return new _il.ILTypeDefLayoutInfo(size$$2, pack$$2);
  } else {
    return new _il.ILTypeDefLayoutInfo(null, null);
  }
}

function typeAccessOfFlags(flags$$17) {
  const f$$9 = flags$$17 & 7 | 0;

  if (f$$9 === 1) {
    return new _il.ILTypeDefAccess(0, "Public");
  } else if (f$$9 === 2) {
    return new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(6, "Public"));
  } else if (f$$9 === 3) {
    return new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(5, "Private"));
  } else if (f$$9 === 4) {
    return new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(4, "Family"));
  } else if (f$$9 === 6) {
    return new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(2, "FamilyAndAssembly"));
  } else if (f$$9 === 7) {
    return new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(3, "FamilyOrAssembly"));
  } else if (f$$9 === 5) {
    return new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(0, "Assembly"));
  } else {
    return new _il.ILTypeDefAccess(1, "Private");
  }
}

function typeLayoutOfFlags(ctxt$$118, mdv$$82, flags$$18, tidx$$6) {
  const f$$10 = flags$$18 & 24 | 0;

  if (f$$10 === 8) {
    return new _il.ILTypeDefLayout(1, "Sequential", seekReadClassLayout(ctxt$$118, mdv$$82, tidx$$6));
  } else if (f$$10 === 16) {
    return new _il.ILTypeDefLayout(2, "Explicit", seekReadClassLayout(ctxt$$118, mdv$$82, tidx$$6));
  } else {
    return new _il.ILTypeDefLayout(0, "Auto");
  }
}

function isTopTypeDef(flags$$19) {
  if ((0, _Util.equals)(typeAccessOfFlags(flags$$19), new _il.ILTypeDefAccess(1, "Private"))) {
    return true;
  } else {
    return (0, _Util.equals)(typeAccessOfFlags(flags$$19), new _il.ILTypeDefAccess(0, "Public"));
  }
}

function seekIsTopTypeDefOfIdx(ctxt$$119, idx$$94) {
  const patternInput$$29 = seekReadTypeDefRow(ctxt$$119, idx$$94);
  return isTopTypeDef(patternInput$$29[0]);
}

function readBlobHeapAsSplitTypeName(ctxt$$120, nameIdx$$23, namespaceIdx$$3) {
  const name$$1 = readStringHeap(ctxt$$120, nameIdx$$23);
  const nspace = readStringHeapOption(ctxt$$120, namespaceIdx$$3);

  if (nspace == null) {
    return [(0, _Types.L)(), name$$1];
  } else {
    const nspace$$1 = nspace;
    return [(0, _il.splitNamespace)(nspace$$1), name$$1];
  }
}

function readBlobHeapAsTypeName(ctxt$$121, nameIdx$$24, namespaceIdx$$4) {
  const name$$2 = readStringHeap(ctxt$$121, nameIdx$$24);
  const nspace$$2 = readStringHeapOption(ctxt$$121, namespaceIdx$$4);

  if (nspace$$2 != null) {
    const ns = nspace$$2;
    return ctxt$$121.memoizeString(ns + "." + name$$2);
  } else {
    return name$$2;
  }
}

function seekReadTypeDefRowExtents(ctxt$$122, _info, idx$$95) {
  if (idx$$95 >= ctxt$$122.getNumRows(_ilbinary.TableNames$$$TypeDef)) {
    return [ctxt$$122.getNumRows(_ilbinary.TableNames$$$Field) + 1, ctxt$$122.getNumRows(_ilbinary.TableNames$$$Method) + 1];
  } else {
    const patternInput$$30 = seekReadTypeDefRow(ctxt$$122, idx$$95 + 1);
    return [patternInput$$30[4], patternInput$$30[5]];
  }
}

function seekReadTypeDefRowWithExtents(ctxt$$123, idx$$96) {
  const info$$2 = seekReadTypeDefRow(ctxt$$123, idx$$96);
  return [info$$2, seekReadTypeDefRowExtents(ctxt$$123, info$$2, idx$$96)];
}

function seekReadPreTypeDef(ctxt$$124, toponly, idx$$97) {
  const patternInput$$31 = seekReadTypeDefRow(ctxt$$124, idx$$97);

  if (toponly ? !isTopTypeDef(patternInput$$31[0]) : false) {
    return null;
  } else {
    const patternInput$$32 = readBlobHeapAsSplitTypeName(ctxt$$124, patternInput$$31[1], patternInput$$31[2]);
    return (0, _il.mkILPreTypeDefRead)(patternInput$$32[0], patternInput$$32[1], idx$$97, ctxt$$124.typeDefReader);
  }
}

function typeDefReader(ctxtH$$9) {
  return (0, _il.mkILTypeDefReader)(function (idx$$98) {
    const ctxt$$125 = (0, _illib.getHole)(ctxtH$$9);
    const mdv$$83 = ctxt$$125.mdfile.GetView();
    const info$$3 = seekReadTypeDefRow(ctxt$$125, idx$$98);
    const namespaceIdx$$6 = info$$3[2] | 0;
    const nameIdx$$26 = info$$3[1] | 0;
    const methodsIdx$$2 = info$$3[5] | 0;
    const flags$$22 = info$$3[0] | 0;
    const fieldsIdx$$2 = info$$3[4] | 0;
    const extendsIdx$$1 = info$$3[3];
    const nm$$3 = readBlobHeapAsTypeName(ctxt$$125, nameIdx$$26, namespaceIdx$$6);
    const patternInput$$33 = seekReadTypeDefRowExtents(ctxt$$125, info$$3, idx$$98);
    const typars = seekReadGenericParams(ctxt$$125, 0, _ilbinary.tomd_TypeDef, idx$$98);
    const numtypars = (0, _List.length)(typars) | 0;
    const super$ = seekReadOptionalTypeDefOrRef(ctxt$$125, numtypars, new _il.ILBoxity(0, "AsObject"), extendsIdx$$1);
    const layout = typeLayoutOfFlags(ctxt$$125, mdv$$83, flags$$22, idx$$98);
    const hasLayout = layout.tag === 2 ? true : false;
    const mdefs = seekReadMethods(ctxt$$125, numtypars, methodsIdx$$2, patternInput$$33[1]);
    const fdefs = seekReadFields(ctxt$$125, numtypars, hasLayout, fieldsIdx$$2, patternInput$$33[0]);
    const nested = seekReadNestedTypeDefs(ctxt$$125, idx$$98);
    const impls = seekReadInterfaceImpls(ctxt$$125, mdv$$83, numtypars, idx$$98);
    const mimpls = seekReadMethodImpls(ctxt$$125, numtypars, idx$$98);
    const props = seekReadProperties(ctxt$$125, numtypars, idx$$98);
    const events = seekReadEvents(ctxt$$125, numtypars, idx$$98);
    return (0, _il.ILTypeDef$$$CreateStored$$Z51F7F1CB)(nm$$3, flags$$22, layout, impls, typars, super$, mdefs, nested, fdefs, mimpls, events, props, ctxt$$125.securityDeclsReader_TypeDef, ctxt$$125.customAttrsReader_TypeDef, idx$$98);
  });
}

function seekReadTopTypeDefs(ctxt$$126) {
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (i$$12) {
      const matchValue$$12 = seekReadPreTypeDef(ctxt$$126, true, i$$12);

      if (matchValue$$12 != null) {
        const td = matchValue$$12;
        return (0, _Seq.singleton)(td);
      } else {
        return (0, _Seq.empty)();
      }
    }, (0, _Seq.rangeNumber)(1, 1, ctxt$$126.getNumRows(_ilbinary.TableNames$$$TypeDef)));
  }), Array);
}

function seekReadNestedTypeDefs(ctxt$$127, tidx$$7) {
  return (0, _il.mkILTypeDefsComputed)(function () {
    const nestedIdxs = seekReadIndexedRows(ctxt$$127.getNumRows(_ilbinary.TableNames$$$Nested), function (idx$$99) {
      return seekReadNestedRow(ctxt$$127, idx$$99);
    }, function (tuple) {
      return tuple[1];
    }, function (idx2$$9) {
      return simpleIndexCompare(tidx$$7, idx2$$9);
    }, false, function (tuple$$1) {
      return tuple$$1[0];
    });
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (i$$13) {
        const matchValue$$13 = seekReadPreTypeDef(ctxt$$127, false, i$$13);

        if (matchValue$$13 != null) {
          const td$$1 = matchValue$$13;
          return (0, _Seq.singleton)(td$$1);
        } else {
          return (0, _Seq.empty)();
        }
      }, nestedIdxs);
    }), Array);
  });
}

function seekReadInterfaceImpls(ctxt$$128, mdv$$84, numtypars$$1, tidx$$8) {
  return seekReadIndexedRows(ctxt$$128.getNumRows(_ilbinary.TableNames$$$InterfaceImpl), function (idx$$100) {
    return seekReadInterfaceImplRow(ctxt$$128, mdv$$84, idx$$100);
  }, function (tuple$$2) {
    return tuple$$2[0];
  }, function (idx2$$10) {
    return simpleIndexCompare(tidx$$8, idx2$$10);
  }, isSorted(ctxt$$128, _ilbinary.TableNames$$$InterfaceImpl), function ($arg$$8) {
    return seekReadTypeDefOrRef(ctxt$$128, numtypars$$1, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), $arg$$8[1]);
  });
}

function seekReadGenericParams(ctxt$$129, numtypars$$2, a, b) {
  return ctxt$$129.seekReadGenericParams(new GenericParamsIdx(0, "GenericParamsIdx", numtypars$$2, a, b));
}

function seekReadGenericParamsUncached(ctxtH$$10, _arg1$$8) {
  const numtypars$$3 = _arg1$$8.fields[0] | 0;
  const b$$1 = _arg1$$8.fields[2] | 0;
  const a$$1 = _arg1$$8.fields[1];
  const ctxt$$130 = (0, _illib.getHole)(ctxtH$$10);
  const mdv$$85 = ctxt$$130.mdfile.GetView();
  const pars = seekReadIndexedRows(ctxt$$130.getNumRows(_ilbinary.TableNames$$$GenericParam), function (idx$$101) {
    return seekReadGenericParamRow(ctxt$$130, mdv$$85, idx$$101);
  }, function (tupledArg$$19) {
    return tupledArg$$19[3];
  }, function (arg10$0040) {
    return tomdCompare(TaggedIndex$00601$$$$002Ector$$Z521B3197(a$$1, b$$1), arg10$0040);
  }, isSorted(ctxt$$130, _ilbinary.TableNames$$$GenericParam), function (tupledArg$$20) {
    const flags$$24 = ~~tupledArg$$20[2] | 0;
    const variance_flags = flags$$24 & 3 | 0;
    const variance = variance_flags === 0 ? new _il.ILGenericVariance(0, "NonVariant") : variance_flags === 1 ? new _il.ILGenericVariance(1, "CoVariant") : variance_flags === 2 ? new _il.ILGenericVariance(2, "ContraVariant") : new _il.ILGenericVariance(0, "NonVariant");
    const constraints = seekReadGenericParamConstraints(ctxt$$130, mdv$$85, numtypars$$3, tupledArg$$20[0]);
    return [tupledArg$$20[1], new _il.ILGenericParameterDef(readStringHeap(ctxt$$130, tupledArg$$20[4]), constraints, variance, (flags$$24 & 4) !== 0, (flags$$24 & 8) !== 0, (flags$$24 & 16) !== 0, ctxt$$130.customAttrsReader_GenericParam, tupledArg$$20[0])];
  });
  return (0, _List.map)(function mapping(tuple$$5) {
    return tuple$$5[1];
  }, (0, _List.sortBy)(function projection(tuple$$4) {
    return tuple$$4[0];
  }, pars, {
    Compare: _Util.comparePrimitives
  }));
}

function seekReadGenericParamConstraints(ctxt$$131, mdv$$86, numtypars$$4, gpidx$$1) {
  return seekReadIndexedRows(ctxt$$131.getNumRows(_ilbinary.TableNames$$$GenericParamConstraint), function (idx$$102) {
    return seekReadGenericParamConstraintRow(ctxt$$131, mdv$$86, idx$$102);
  }, function (tuple$$6) {
    return tuple$$6[0];
  }, function (idx2$$11) {
    return simpleIndexCompare(gpidx$$1, idx2$$11);
  }, isSorted(ctxt$$131, _ilbinary.TableNames$$$GenericParamConstraint), function ($arg$$11) {
    return seekReadTypeDefOrRef(ctxt$$131, numtypars$$4, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), $arg$$11[1]);
  });
}

function seekReadTypeDefAsType(ctxt$$132, boxity$$2, ginst$$2, idx$$103) {
  return ctxt$$132.seekReadTypeDefAsType(new TypeDefAsTypIdx(0, "TypeDefAsTypIdx", boxity$$2, ginst$$2, idx$$103));
}

function seekReadTypeDefAsTypeUncached(ctxtH$$11, _arg2$$8) {
  const idx$$104 = _arg2$$8.fields[2] | 0;
  const ginst$$3 = _arg2$$8.fields[1];
  const boxity$$3 = _arg2$$8.fields[0];
  const ctxt$$133 = (0, _illib.getHole)(ctxtH$$11);
  return (0, _il.mkILTy)(boxity$$3, (0, _il.ILTypeSpec$$$Create$$7469E1FB)(seekReadTypeDefAsTypeRef(ctxt$$133, idx$$104), ginst$$3));
}

function seekReadTypeDefAsTypeRef(ctxt$$134, idx$$105) {
  let enc;

  if (seekIsTopTypeDefOfIdx(ctxt$$134, idx$$105)) {
    enc = (0, _Types.L)();
  } else {
    const enclIdx$$1 = seekReadIndexedRow(ctxt$$134.getNumRows(_ilbinary.TableNames$$$Nested), function (idx$$106) {
      return seekReadNestedRow(ctxt$$134, idx$$106);
    }, function (tuple$$8) {
      return tuple$$8[0];
    }, function (idx2$$12) {
      return simpleIndexCompare(idx$$105, idx2$$12);
    }, isSorted(ctxt$$134, _ilbinary.TableNames$$$Nested), function (tuple$$9) {
      return tuple$$9[1];
    }) | 0;
    const tref = seekReadTypeDefAsTypeRef(ctxt$$134, enclIdx$$1);
    enc = (0, _List.append)((0, _il.ILTypeRef$$get_Enclosing)(tref), (0, _Types.L)((0, _il.ILTypeRef$$get_Name)(tref), (0, _Types.L)()));
  }

  const patternInput$$34 = seekReadTypeDefRow(ctxt$$134, idx$$105);
  const nm$$4 = readBlobHeapAsTypeName(ctxt$$134, patternInput$$34[1], patternInput$$34[2]);
  return (0, _il.ILTypeRef$$$Create$$113F1D6)(new _il.ILScopeRef(0, "Local"), enc, nm$$4);
}

function seekReadTypeRef(ctxt$$135, idx$$107) {
  return ctxt$$135.seekReadTypeRef(idx$$107);
}

function seekReadTypeRefUncached(ctxtH$$12, idx$$108) {
  const ctxt$$136 = (0, _illib.getHole)(ctxtH$$12);
  const mdv$$87 = ctxt$$136.mdfile.GetView();
  const patternInput$$35 = seekReadTypeRefRow(ctxt$$136, mdv$$87, idx$$108);
  const patternInput$$36 = seekReadTypeRefScope(ctxt$$136, mdv$$87, patternInput$$35[0]);
  const nm$$5 = readBlobHeapAsTypeName(ctxt$$136, patternInput$$35[1], patternInput$$35[2]);
  return (0, _il.ILTypeRef$$$Create$$113F1D6)(patternInput$$36[0], patternInput$$36[1], nm$$5);
}

function seekReadTypeRefAsType(ctxt$$137, boxity$$4, ginst$$4, idx$$109) {
  return ctxt$$137.seekReadTypeRefAsType(new TypeRefAsTypIdx(0, "TypeRefAsTypIdx", boxity$$4, ginst$$4, idx$$109));
}

function seekReadTypeRefAsTypeUncached(ctxtH$$13, _arg3$$1) {
  const idx$$110 = _arg3$$1.fields[2] | 0;
  const ginst$$5 = _arg3$$1.fields[1];
  const boxity$$5 = _arg3$$1.fields[0];
  const ctxt$$138 = (0, _illib.getHole)(ctxtH$$13);
  return (0, _il.mkILTy)(boxity$$5, (0, _il.ILTypeSpec$$$Create$$7469E1FB)(seekReadTypeRef(ctxt$$138, idx$$110), ginst$$5));
}

function seekReadTypeDefOrRef(ctxt$$139, numtypars$$5, boxity$$6, ginst$$6, _arg4$$1) {
  var tag$$5, tag$$7, tag$$9;
  const activePatternResult18297 = $007CTaggedIndex$007C(_arg4$$1);
  const mdv$$88 = ctxt$$139.mdfile.GetView();

  if (tag$$5 = activePatternResult18297[0], (0, _Util.equals)(tag$$5, _ilbinary.tdor_TypeDef)) {
    const tag$$6 = activePatternResult18297[0];
    return seekReadTypeDefAsType(ctxt$$139, boxity$$6, ginst$$6, activePatternResult18297[1]);
  } else if (tag$$7 = activePatternResult18297[0], (0, _Util.equals)(tag$$7, _ilbinary.tdor_TypeRef)) {
    const tag$$8 = activePatternResult18297[0];
    return seekReadTypeRefAsType(ctxt$$139, boxity$$6, ginst$$6, activePatternResult18297[1]);
  } else if (tag$$9 = activePatternResult18297[0], (0, _Util.equals)(tag$$9, _ilbinary.tdor_TypeSpec)) {
    const tag$$10 = activePatternResult18297[0];

    if (!(ginst$$6.tail == null)) {
      (0, _ildiag.dprintn)("type spec used as type constructor for a generic instantiation: ignoring instantiation");
    }

    return readBlobHeapAsType(ctxt$$139, numtypars$$5, seekReadTypeSpecRow(ctxt$$139, mdv$$88, activePatternResult18297[1]));
  } else {
    throw new Error("seekReadTypeDefOrRef ctxt");
  }
}

function seekReadTypeDefOrRefAsTypeRef(ctxt$$140, _arg5$$1) {
  var tag$$12, tag$$14, tag$$16;
  const activePatternResult18303 = $007CTaggedIndex$007C(_arg5$$1);

  if (tag$$12 = activePatternResult18303[0], (0, _Util.equals)(tag$$12, _ilbinary.tdor_TypeDef)) {
    const tag$$13 = activePatternResult18303[0];
    return seekReadTypeDefAsTypeRef(ctxt$$140, activePatternResult18303[1]);
  } else if (tag$$14 = activePatternResult18303[0], (0, _Util.equals)(tag$$14, _ilbinary.tdor_TypeRef)) {
    const tag$$15 = activePatternResult18303[0];
    return seekReadTypeRef(ctxt$$140, activePatternResult18303[1]);
  } else if (tag$$16 = activePatternResult18303[0], (0, _Util.equals)(tag$$16, _ilbinary.tdor_TypeSpec)) {
    const tag$$17 = activePatternResult18303[0];
    (0, _ildiag.dprintn)("type spec used where a type ref or def is required");
    return (0, _il.ILType$$get_TypeRef)((0, _il.ILGlobals$$get_typ_Object)(ctxt$$140.ilg));
  } else {
    throw new Error("seekReadTypeDefOrRefAsTypeRef_readTypeDefOrRefOrSpec");
  }
}

function seekReadMethodRefParent(ctxt$$141, mdv$$89, numtypars$$6, _arg6$$1) {
  var tag$$19, tag$$21, tag$$23, tag$$25;
  const activePatternResult18306 = $007CTaggedIndex$007C(_arg6$$1);

  if (tag$$19 = activePatternResult18306[0], (0, _Util.equals)(tag$$19, _ilbinary.mrp_TypeRef)) {
    const tag$$20 = activePatternResult18306[0];
    return seekReadTypeRefAsType(ctxt$$141, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), activePatternResult18306[1]);
  } else if (tag$$21 = activePatternResult18306[0], (0, _Util.equals)(tag$$21, _ilbinary.mrp_ModuleRef)) {
    const tag$$22 = activePatternResult18306[0];
    return (0, _il.mkILTypeForGlobalFunctions)(new _il.ILScopeRef(1, "Module", seekReadModuleRef(ctxt$$141, mdv$$89, activePatternResult18306[1])));
  } else if (tag$$23 = activePatternResult18306[0], (0, _Util.equals)(tag$$23, _ilbinary.mrp_MethodDef)) {
    const tag$$24 = activePatternResult18306[0];
    const patternInput$$37 = seekReadMethodDefAsMethodData(ctxt$$141, activePatternResult18306[1]);
    const retty = patternInput$$37.fields[4];
    const nm$$6 = patternInput$$37.fields[2];
    const minst = patternInput$$37.fields[5];
    const enclTy = patternInput$$37.fields[0];
    const cc = patternInput$$37.fields[1];
    const argtys = patternInput$$37.fields[3];
    const mspec$$4 = (0, _il.mkILMethSpecInTy)(enclTy, cc, nm$$6, argtys, retty, minst);
    return (0, _il.ILMethodSpec$$get_DeclaringType)(mspec$$4);
  } else if (tag$$25 = activePatternResult18306[0], (0, _Util.equals)(tag$$25, _ilbinary.mrp_TypeSpec)) {
    const tag$$26 = activePatternResult18306[0];
    return readBlobHeapAsType(ctxt$$141, numtypars$$6, seekReadTypeSpecRow(ctxt$$141, mdv$$89, activePatternResult18306[1]));
  } else {
    throw new Error("seekReadMethodRefParent");
  }
}

function seekReadMethodDefOrRef(ctxt$$142, numtypars$$7, _arg7$$1) {
  var tag$$28, tag$$30;
  const activePatternResult18311 = $007CTaggedIndex$007C(_arg7$$1);

  if (tag$$28 = activePatternResult18311[0], (0, _Util.equals)(tag$$28, _ilbinary.mdor_MethodDef)) {
    const tag$$29 = activePatternResult18311[0];
    const patternInput$$38 = seekReadMethodDefAsMethodData(ctxt$$142, activePatternResult18311[1]);
    const retty$$1 = patternInput$$38.fields[4];
    const nm$$7 = patternInput$$38.fields[2];
    const minst$$1 = patternInput$$38.fields[5];
    const enclTy$$1 = patternInput$$38.fields[0];
    const cc$$1 = patternInput$$38.fields[1];
    const argtys$$1 = patternInput$$38.fields[3];
    return new VarArgMethodData(0, "VarArgMethodData", enclTy$$1, cc$$1, nm$$7, argtys$$1, null, retty$$1, minst$$1);
  } else if (tag$$30 = activePatternResult18311[0], (0, _Util.equals)(tag$$30, _ilbinary.mdor_MemberRef)) {
    const tag$$31 = activePatternResult18311[0];
    return seekReadMemberRefAsMethodData(ctxt$$142, numtypars$$7, activePatternResult18311[1]);
  } else {
    throw new Error("seekReadMethodDefOrRef");
  }
}

function seekReadMethodDefOrRefNoVarargs(ctxt$$143, numtypars$$8, x$$182) {
  const patternInput$$39 = seekReadMethodDefOrRef(ctxt$$143, numtypars$$8, x$$182);
  const varargs = patternInput$$39.fields[4];
  const retty$$2 = patternInput$$39.fields[5];
  const nm$$8 = patternInput$$39.fields[2];
  const minst$$2 = patternInput$$39.fields[6];
  const enclTy$$2 = patternInput$$39.fields[0];
  const cc$$2 = patternInput$$39.fields[1];
  const argtys$$2 = patternInput$$39.fields[3];

  if (!(0, _Util.equals)(varargs, null)) {
    (0, _ildiag.dprintf)((0, _String.printf)("ignoring sentinel and varargs in ILMethodDef token signature"));
  }

  return new MethodData(0, "MethodData", enclTy$$2, cc$$2, nm$$8, argtys$$2, retty$$2, minst$$2);
}

function seekReadCustomAttrType(ctxt$$144, _arg8$$1) {
  var tag$$33, tag$$35;
  const activePatternResult18318 = $007CTaggedIndex$007C(_arg8$$1);

  if (tag$$33 = activePatternResult18318[0], (0, _Util.equals)(tag$$33, _ilbinary.cat_MethodDef)) {
    const tag$$34 = activePatternResult18318[0];
    const patternInput$$40 = seekReadMethodDefAsMethodData(ctxt$$144, activePatternResult18318[1]);
    const retty$$3 = patternInput$$40.fields[4];
    const nm$$9 = patternInput$$40.fields[2];
    const minst$$3 = patternInput$$40.fields[5];
    const enclTy$$3 = patternInput$$40.fields[0];
    const cc$$3 = patternInput$$40.fields[1];
    const argtys$$3 = patternInput$$40.fields[3];
    return (0, _il.mkILMethSpecInTy)(enclTy$$3, cc$$3, nm$$9, argtys$$3, retty$$3, minst$$3);
  } else if (tag$$35 = activePatternResult18318[0], (0, _Util.equals)(tag$$35, _ilbinary.cat_MemberRef)) {
    const tag$$36 = activePatternResult18318[0];
    const patternInput$$41 = seekReadMemberRefAsMethDataNoVarArgs(ctxt$$144, 0, activePatternResult18318[1]);
    const retty$$4 = patternInput$$41.fields[4];
    const nm$$10 = patternInput$$41.fields[2];
    const minst$$4 = patternInput$$41.fields[5];
    const enclTy$$4 = patternInput$$41.fields[0];
    const cc$$4 = patternInput$$41.fields[1];
    const argtys$$4 = patternInput$$41.fields[3];
    return (0, _il.mkILMethSpecInTy)(enclTy$$4, cc$$4, nm$$10, argtys$$4, retty$$4, minst$$4);
  } else {
    throw new Error("seekReadCustomAttrType ctxt");
  }
}

function seekReadImplAsScopeRef(ctxt$$145, mdv$$90, _arg9) {
  var tag$$38, tag$$40, tag$$42;
  const activePatternResult18321 = $007CTaggedIndex$007C(_arg9);

  if (activePatternResult18321[1] === 0) {
    return new _il.ILScopeRef(0, "Local");
  } else if (tag$$38 = activePatternResult18321[0], (0, _Util.equals)(tag$$38, _ilbinary.i_File)) {
    const tag$$39 = activePatternResult18321[0];
    return new _il.ILScopeRef(1, "Module", seekReadFile(ctxt$$145, mdv$$90, activePatternResult18321[1]));
  } else if (tag$$40 = activePatternResult18321[0], (0, _Util.equals)(tag$$40, _ilbinary.i_AssemblyRef)) {
    const tag$$41 = activePatternResult18321[0];
    return new _il.ILScopeRef(2, "Assembly", seekReadAssemblyRef(ctxt$$145, activePatternResult18321[1]));
  } else if (tag$$42 = activePatternResult18321[0], (0, _Util.equals)(tag$$42, _ilbinary.i_ExportedType)) {
    const tag$$43 = activePatternResult18321[0];
    throw new Error("seekReadImplAsScopeRef");
  } else {
    throw new Error("seekReadImplAsScopeRef");
  }
}

function seekReadTypeRefScope(ctxt$$146, mdv$$91, _arg10) {
  var tag$$45, tag$$47, tag$$49, tag$$51;
  const activePatternResult18325 = $007CTaggedIndex$007C(_arg10);

  if (tag$$45 = activePatternResult18325[0], (0, _Util.equals)(tag$$45, _ilbinary.rs_Module)) {
    const tag$$46 = activePatternResult18325[0];
    return [new _il.ILScopeRef(0, "Local"), (0, _Types.L)()];
  } else if (tag$$47 = activePatternResult18325[0], (0, _Util.equals)(tag$$47, _ilbinary.rs_ModuleRef)) {
    const tag$$48 = activePatternResult18325[0];
    return [new _il.ILScopeRef(1, "Module", seekReadModuleRef(ctxt$$146, mdv$$91, activePatternResult18325[1])), (0, _Types.L)()];
  } else if (tag$$49 = activePatternResult18325[0], (0, _Util.equals)(tag$$49, _ilbinary.rs_AssemblyRef)) {
    const tag$$50 = activePatternResult18325[0];
    return [new _il.ILScopeRef(2, "Assembly", seekReadAssemblyRef(ctxt$$146, activePatternResult18325[1])), (0, _Types.L)()];
  } else if (tag$$51 = activePatternResult18325[0], (0, _Util.equals)(tag$$51, _ilbinary.rs_TypeRef)) {
    const tag$$52 = activePatternResult18325[0];
    const tref$$1 = seekReadTypeRef(ctxt$$146, activePatternResult18325[1]);
    return [(0, _il.ILTypeRef$$get_Scope)(tref$$1), (0, _List.append)((0, _il.ILTypeRef$$get_Enclosing)(tref$$1), (0, _Types.L)((0, _il.ILTypeRef$$get_Name)(tref$$1), (0, _Types.L)()))];
  } else {
    throw new Error("seekReadTypeRefScope");
  }
}

function seekReadOptionalTypeDefOrRef(ctxt$$147, numtypars$$9, boxity$$7, idx$$118) {
  if ((0, _Util.equals)(idx$$118, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.tdor_TypeDef, 0))) {
    return null;
  } else {
    return seekReadTypeDefOrRef(ctxt$$147, numtypars$$9, boxity$$7, (0, _Types.L)(), idx$$118);
  }
}

function seekReadField(ctxt$$148, mdv$$92, numtypars$$10, hasLayout$$1, idx$$119) {
  var pectxt$$4, rva$$5;
  const patternInput$$42 = seekReadFieldRow(ctxt$$148, mdv$$92, idx$$119);
  const nm$$11 = readStringHeap(ctxt$$148, patternInput$$42[1]);
  const isStatic = (patternInput$$42[0] & 16) !== 0;
  return (0, _il.ILFieldDef$$$CreateStored$$Z4E5D7682)(nm$$11, readBlobHeapAsFieldSig(ctxt$$148, numtypars$$10, patternInput$$42[2]), patternInput$$42[0], (patternInput$$42[0] & 256) === 0 ? null : ctxt$$148.pectxtCaptured != null ? (pectxt$$4 = ctxt$$148.pectxtCaptured, (rva$$5 = seekReadIndexedRow(ctxt$$148.getNumRows(_ilbinary.TableNames$$$FieldRVA), function (idx$$120) {
    return seekReadFieldRVARow(ctxt$$148, mdv$$92, idx$$120);
  }, function (tuple$$10) {
    return tuple$$10[1];
  }, function (idx2$$13) {
    return simpleIndexCompare(idx$$119, idx2$$13);
  }, isSorted(ctxt$$148, _ilbinary.TableNames$$$FieldRVA), function (tuple$$11) {
    return tuple$$11[0];
  }) | 0, rvaToData(ctxt$$148, pectxt$$4, "field", rva$$5))) : null, (patternInput$$42[0] & 32768) === 0 ? null : seekReadConstant(ctxt$$148, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hc_FieldDef, idx$$119)), (hasLayout$$1 ? !isStatic : false) ? seekReadIndexedRow(ctxt$$148.getNumRows(_ilbinary.TableNames$$$FieldLayout), function (idx$$121) {
    return seekReadFieldLayoutRow(ctxt$$148, mdv$$92, idx$$121);
  }, function (tuple$$12) {
    return tuple$$12[1];
  }, function (idx2$$14) {
    return simpleIndexCompare(idx$$119, idx2$$14);
  }, isSorted(ctxt$$148, _ilbinary.TableNames$$$FieldLayout), function (tuple$$13) {
    return tuple$$13[0];
  }) : null, (patternInput$$42[0] & 4096) === 0 ? null : seekReadIndexedRow(ctxt$$148.getNumRows(_ilbinary.TableNames$$$FieldMarshal), function (idx$$122) {
    return seekReadFieldMarshalRow(ctxt$$148, mdv$$92, idx$$122);
  }, function (tuple$$14) {
    return tuple$$14[0];
  }, function (arg10$0040$$1) {
    return hfmCompare(TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hfm_FieldDef, idx$$119), arg10$0040$$1);
  }, isSorted(ctxt$$148, _ilbinary.TableNames$$$FieldMarshal), function ($arg$$12) {
    return readBlobHeapAsNativeType(ctxt$$148, $arg$$12[1]);
  }), ctxt$$148.customAttrsReader_FieldDef, idx$$119);
}

function seekReadFields(ctxt$$149, numtypars$$11, hasLayout$$2, fidx1, fidx2) {
  return (0, _il.mkILFieldsLazy)(new _Util.Lazy(function () {
    const mdv$$93 = ctxt$$149.mdfile.GetView();
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (i$$14) {
        return seekReadField(ctxt$$149, mdv$$93, numtypars$$11, hasLayout$$2, i$$14);
      }, (0, _Seq.rangeNumber)(fidx1, 1, fidx2 - 1));
    }));
  }));
}

function seekReadMethods(ctxt$$150, numtypars$$12, midx1, midx2) {
  return (0, _il.mkILMethodsComputed)(function () {
    const mdv$$94 = ctxt$$150.mdfile.GetView();
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (i$$15) {
        return seekReadMethod(ctxt$$150, mdv$$94, numtypars$$12, i$$15);
      }, (0, _Seq.rangeNumber)(midx1, 1, midx2 - 1));
    }), Array);
  });
}

function sigptrGetTypeDefOrRefOrSpecIdx(bytes$$21, sigptr$$34) {
  const patternInput$$43 = sigptrGetZInt32(bytes$$21, sigptr$$34);

  if ((patternInput$$43[0] & 1) === 0) {
    return [TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.tdor_TypeDef, (0, _illib.op_GreaterGreaterGreaterAmp)(patternInput$$43[0], 2)), patternInput$$43[1]];
  } else {
    return [TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.tdor_TypeRef, (0, _illib.op_GreaterGreaterGreaterAmp)(patternInput$$43[0], 2)), patternInput$$43[1]];
  }
}

function sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, sigptr$$36) {
  const patternInput$$44 = sigptrGetByte(bytes$$22, sigptr$$36);

  if (patternInput$$44[0] === _ilbinary.et_OBJECT) {
    return [(0, _il.ILGlobals$$get_typ_Object)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_STRING) {
    return [(0, _il.ILGlobals$$get_typ_String)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_I1) {
    return [(0, _il.ILGlobals$$get_typ_SByte)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_I2) {
    return [(0, _il.ILGlobals$$get_typ_Int16)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_I4) {
    return [(0, _il.ILGlobals$$get_typ_Int32)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_I8) {
    return [(0, _il.ILGlobals$$get_typ_Int64)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_I) {
    return [(0, _il.ILGlobals$$get_typ_IntPtr)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_U1) {
    return [(0, _il.ILGlobals$$get_typ_Byte)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_U2) {
    return [(0, _il.ILGlobals$$get_typ_UInt16)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_U4) {
    return [(0, _il.ILGlobals$$get_typ_UInt32)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_U8) {
    return [(0, _il.ILGlobals$$get_typ_UInt64)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_U) {
    return [(0, _il.ILGlobals$$get_typ_UIntPtr)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_R4) {
    return [(0, _il.ILGlobals$$get_typ_Single)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_R8) {
    return [(0, _il.ILGlobals$$get_typ_Double)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_CHAR) {
    return [(0, _il.ILGlobals$$get_typ_Char)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_BOOLEAN) {
    return [(0, _il.ILGlobals$$get_typ_Bool)(ctxt$$151.ilg), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_WITH) {
    const patternInput$$45 = sigptrGetByte(bytes$$22, patternInput$$44[1]);
    const patternInput$$46 = sigptrGetTypeDefOrRefOrSpecIdx(bytes$$22, patternInput$$45[1]);
    const patternInput$$47 = sigptrGetZInt32(bytes$$22, patternInput$$46[1]);
    const patternInput$$48 = sigptrFold(function (bytes$$23, sigptr$$41) {
      return sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$23, sigptr$$41);
    }, patternInput$$47[0], bytes$$22, patternInput$$47[1]);
    return [seekReadTypeDefOrRef(ctxt$$151, numtypars$$13, patternInput$$45[0] === _ilbinary.et_CLASS ? new _il.ILBoxity(0, "AsObject") : new _il.ILBoxity(1, "AsValue"), patternInput$$48[0], patternInput$$46[0]), patternInput$$48[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_CLASS) {
    const patternInput$$49 = sigptrGetTypeDefOrRefOrSpecIdx(bytes$$22, patternInput$$44[1]);
    return [seekReadTypeDefOrRef(ctxt$$151, numtypars$$13, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), patternInput$$49[0]), patternInput$$49[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_VALUETYPE) {
    const patternInput$$50 = sigptrGetTypeDefOrRefOrSpecIdx(bytes$$22, patternInput$$44[1]);
    return [seekReadTypeDefOrRef(ctxt$$151, numtypars$$13, new _il.ILBoxity(1, "AsValue"), (0, _Types.L)(), patternInput$$50[0]), patternInput$$50[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_VAR) {
    const patternInput$$51 = sigptrGetZInt32(bytes$$22, patternInput$$44[1]);
    return [new _il.ILType(7, "TypeVar", patternInput$$51[0] & 0xFFFF), patternInput$$51[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_MVAR) {
    const patternInput$$52 = sigptrGetZInt32(bytes$$22, patternInput$$44[1]);
    return [new _il.ILType(7, "TypeVar", patternInput$$52[0] + numtypars$$13 & 0xFFFF), patternInput$$52[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_BYREF) {
    const patternInput$$53 = sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, patternInput$$44[1]);
    return [new _il.ILType(5, "Byref", patternInput$$53[0]), patternInput$$53[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_PTR) {
    const patternInput$$54 = sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, patternInput$$44[1]);
    return [new _il.ILType(4, "Ptr", patternInput$$54[0]), patternInput$$54[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_SZARRAY) {
    const patternInput$$55 = sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, patternInput$$44[1]);
    return [(0, _il.mkILArr1DTy)(patternInput$$55[0]), patternInput$$55[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_ARRAY) {
    const patternInput$$56 = sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, patternInput$$44[1]);
    const patternInput$$57 = sigptrGetZInt32(bytes$$22, patternInput$$56[1]);
    const patternInput$$58 = sigptrGetZInt32(bytes$$22, patternInput$$57[1]);
    const patternInput$$59 = sigptrFold(sigptrGetZInt32, patternInput$$58[0], bytes$$22, patternInput$$58[1]);
    const patternInput$$60 = sigptrGetZInt32(bytes$$22, patternInput$$59[1]);
    const patternInput$$61 = sigptrFold(sigptrGetZInt32, patternInput$$60[0], bytes$$22, patternInput$$60[1]);
    let shape;

    const dim = function dim(i$$16) {
      return [i$$16 < patternInput$$60[0] ? (0, _List.item)(i$$16, patternInput$$61[0]) : null, i$$16 < patternInput$$58[0] ? (0, _List.item)(i$$16, patternInput$$59[0]) : null];
    };

    shape = new _il.ILArrayShape(0, "ILArrayShape", (0, _Array.toList)((0, _Array.initialize)(patternInput$$57[0], dim, Array)));
    return [(0, _il.mkILArrTy)(patternInput$$56[0], shape), patternInput$$61[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_VOID) {
    return [new _il.ILType(0, "Void"), patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_TYPEDBYREF) {
    const t$$3 = (0, _il.mkILNonGenericValueTy)((0, _il.mkILTyRef)((0, _il.ILGlobals$$get_primaryAssemblyScopeRef)(ctxt$$151.ilg), "System.TypedReference"));
    return [t$$3, patternInput$$44[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_CMOD_REQD ? true : patternInput$$44[0] === _ilbinary.et_CMOD_OPT) {
    const patternInput$$62 = sigptrGetTypeDefOrRefOrSpecIdx(bytes$$22, patternInput$$44[1]);
    const patternInput$$63 = sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, patternInput$$62[1]);
    return [new _il.ILType(8, "Modified", patternInput$$44[0] === _ilbinary.et_CMOD_REQD, seekReadTypeDefOrRefAsTypeRef(ctxt$$151, patternInput$$62[0]), patternInput$$63[0]), patternInput$$63[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_FNPTR) {
    const patternInput$$64 = sigptrGetByte(bytes$$22, patternInput$$44[1]);
    const patternInput$$65 = byteAsCallConv(patternInput$$64[0]);

    if (patternInput$$65[0]) {
      throw new Error("fptr sig may not be generic");
    }

    const patternInput$$66 = sigptrGetZInt32(bytes$$22, patternInput$$64[1]);
    const patternInput$$67 = sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$22, patternInput$$66[1]);
    const patternInput$$68 = sigptrFold(function (bytes$$26, sigptr$$63) {
      return sigptrGetTy(ctxt$$151, numtypars$$13, bytes$$26, sigptr$$63);
    }, patternInput$$66[0], bytes$$22, patternInput$$67[1]);
    return [new _il.ILType(6, "FunctionPointer", new _il.ILCallingSignature(patternInput$$65[1], patternInput$$68[0], patternInput$$67[0])), patternInput$$68[1]];
  } else if (patternInput$$44[0] === _ilbinary.et_SENTINEL) {
    throw new Error("varargs NYI");
  } else {
    return [new _il.ILType(0, "Void"), patternInput$$44[1]];
  }
}

function sigptrGetVarArgTys(ctxt$$152, n$$13, numtypars$$14, bytes$$27, sigptr$$65) {
  return sigptrFold(function (bytes$$28, sigptr$$66) {
    return sigptrGetTy(ctxt$$152, numtypars$$14, bytes$$28, sigptr$$66);
  }, n$$13, bytes$$27, sigptr$$65);
}

function sigptrGetArgTys(ctxt$$153, n$$14, numtypars$$15, bytes$$29, sigptr$$67, acc$$1) {
  sigptrGetArgTys: while (true) {
    if (n$$14 <= 0) {
      return [[(0, _List.reverse)(acc$$1), null], sigptr$$67];
    } else {
      const patternInput$$69 = sigptrGetByte(bytes$$29, sigptr$$67);

      if (patternInput$$69[0] === _ilbinary.et_SENTINEL) {
        const patternInput$$70 = sigptrGetVarArgTys(ctxt$$153, n$$14, numtypars$$15, bytes$$29, patternInput$$69[1]);
        return [[(0, _List.reverse)(acc$$1), patternInput$$70[0]], patternInput$$70[1]];
      } else {
        const patternInput$$71 = sigptrGetTy(ctxt$$153, numtypars$$15, bytes$$29, sigptr$$67);
        ctxt$$153 = ctxt$$153;
        n$$14 = n$$14 - 1;
        numtypars$$15 = numtypars$$15;
        bytes$$29 = bytes$$29;
        sigptr$$67 = patternInput$$71[1];
        acc$$1 = (0, _Types.L)(patternInput$$71[0], acc$$1);
        continue sigptrGetArgTys;
      }
    }
  }
}

function sigptrGetLocal(ctxt$$154, numtypars$$16, bytes$$30, sigptr$$70) {
  let patternInput$$73;
  const patternInput$$72 = sigptrGetByte(bytes$$30, sigptr$$70);
  patternInput$$73 = patternInput$$72[0] === _ilbinary.et_PINNED ? [true, patternInput$$72[1]] : [false, sigptr$$70];
  const patternInput$$74 = sigptrGetTy(ctxt$$154, numtypars$$16, bytes$$30, patternInput$$73[1]);
  const loc = new _il.ILLocal(patternInput$$74[0], patternInput$$73[0], null);
  return [loc, patternInput$$74[1]];
}

function readBlobHeapAsMethodSig(ctxt$$155, numtypars$$17, blobIdx$$2) {
  return ctxt$$155.readBlobHeapAsMethodSig(new BlobAsMethodSigIdx(0, "BlobAsMethodSigIdx", numtypars$$17, blobIdx$$2));
}

function readBlobHeapAsMethodSigUncached(ctxtH$$14, _arg11) {
  const numtypars$$18 = _arg11.fields[0] | 0;
  const blobIdx$$3 = _arg11.fields[1] | 0;
  const ctxt$$156 = (0, _illib.getHole)(ctxtH$$14);
  const bytes$$31 = readBlobHeap(ctxt$$156, blobIdx$$3);
  const sigptr$$73 = 0;
  const patternInput$$75 = sigptrGetByte(bytes$$31, sigptr$$73);
  const patternInput$$76 = byteAsCallConv(patternInput$$75[0]);
  const patternInput$$77 = patternInput$$76[0] ? sigptrGetZInt32(bytes$$31, patternInput$$75[1]) : [0, patternInput$$75[1]];
  const patternInput$$78 = sigptrGetZInt32(bytes$$31, patternInput$$77[1]);
  const patternInput$$79 = sigptrGetTy(ctxt$$156, numtypars$$18, bytes$$31, patternInput$$78[1]);
  const patternInput$$80 = sigptrGetArgTys(ctxt$$156, patternInput$$78[0], numtypars$$18, bytes$$31, patternInput$$79[1], (0, _Types.L)());
  const varargs$$2 = patternInput$$80[0][1];
  const argtys$$7 = patternInput$$80[0][0];
  return [patternInput$$76[0], patternInput$$77[0], patternInput$$76[1], patternInput$$79[0], argtys$$7, varargs$$2];
}

function readBlobHeapAsType(ctxt$$157, numtypars$$19, blobIdx$$4) {
  const bytes$$32 = readBlobHeap(ctxt$$157, blobIdx$$4);
  const patternInput$$81 = sigptrGetTy(ctxt$$157, numtypars$$19, bytes$$32, 0);
  return patternInput$$81[0];
}

function readBlobHeapAsFieldSig(ctxt$$158, numtypars$$20, blobIdx$$5) {
  return ctxt$$158.readBlobHeapAsFieldSig(new BlobAsFieldSigIdx(0, "BlobAsFieldSigIdx", numtypars$$20, blobIdx$$5));
}

function readBlobHeapAsFieldSigUncached(ctxtH$$15, _arg12) {
  const numtypars$$21 = _arg12.fields[0] | 0;
  const blobIdx$$6 = _arg12.fields[1] | 0;
  const ctxt$$159 = (0, _illib.getHole)(ctxtH$$15);
  const bytes$$33 = readBlobHeap(ctxt$$159, blobIdx$$6);
  const sigptr$$78 = 0;
  const patternInput$$82 = sigptrGetByte(bytes$$33, sigptr$$78);

  if (patternInput$$82[0] !== _ilbinary.e_IMAGE_CEE_CS_CALLCONV_FIELD) {
    (0, _ildiag.dprintn)("warning: field sig was not CC_FIELD");
  }

  const patternInput$$83 = sigptrGetTy(ctxt$$159, numtypars$$21, bytes$$33, patternInput$$82[1]);
  return patternInput$$83[0];
}

function readBlobHeapAsPropertySig(ctxt$$160, numtypars$$22, blobIdx$$7) {
  return ctxt$$160.readBlobHeapAsPropertySig(new BlobAsPropSigIdx(0, "BlobAsPropSigIdx", numtypars$$22, blobIdx$$7));
}

function readBlobHeapAsPropertySigUncached(ctxtH$$16, _arg13) {
  const numtypars$$23 = _arg13.fields[0] | 0;
  const blobIdx$$8 = _arg13.fields[1] | 0;
  const ctxt$$161 = (0, _illib.getHole)(ctxtH$$16);
  const bytes$$34 = readBlobHeap(ctxt$$161, blobIdx$$8);
  const sigptr$$80 = 0;
  const patternInput$$84 = sigptrGetByte(bytes$$34, sigptr$$80);
  const hasthis = byteAsHasThis(patternInput$$84[0]);
  const ccMaxked = patternInput$$84[0] & 15;

  if (ccMaxked !== _ilbinary.e_IMAGE_CEE_CS_CALLCONV_PROPERTY) {
    (0, _ildiag.dprintn)("warning: property sig was " + ccMaxked.toString() + " instead of CC_PROPERTY");
  }

  const patternInput$$85 = sigptrGetZInt32(bytes$$34, patternInput$$84[1]);
  const patternInput$$86 = sigptrGetTy(ctxt$$161, numtypars$$23, bytes$$34, patternInput$$85[1]);
  const patternInput$$87 = sigptrFold(function (bytes$$35, sigptr$$84) {
    return sigptrGetTy(ctxt$$161, numtypars$$23, bytes$$35, sigptr$$84);
  }, patternInput$$85[0], bytes$$34, patternInput$$86[1]);
  return [hasthis, patternInput$$86[0], patternInput$$87[0]];
}

function readBlobHeapAsLocalsSig(ctxt$$162, numtypars$$24, blobIdx$$9) {
  return ctxt$$162.readBlobHeapAsLocalsSig(new BlobAsLocalSigIdx(0, "BlobAsLocalSigIdx", numtypars$$24, blobIdx$$9));
}

function readBlobHeapAsLocalsSigUncached(ctxtH$$17, _arg14) {
  const numtypars$$25 = _arg14.fields[0] | 0;
  const blobIdx$$10 = _arg14.fields[1] | 0;
  const ctxt$$163 = (0, _illib.getHole)(ctxtH$$17);
  const bytes$$36 = readBlobHeap(ctxt$$163, blobIdx$$10);
  const sigptr$$85 = 0;
  const patternInput$$88 = sigptrGetByte(bytes$$36, sigptr$$85);

  if (patternInput$$88[0] !== _ilbinary.e_IMAGE_CEE_CS_CALLCONV_LOCAL_SIG) {
    (0, _ildiag.dprintn)("warning: local sig was not CC_LOCAL");
  }

  const patternInput$$89 = sigptrGetZInt32(bytes$$36, patternInput$$88[1]);
  const patternInput$$90 = sigptrFold(function (bytes$$37, sigptr$$88) {
    return sigptrGetLocal(ctxt$$163, numtypars$$25, bytes$$37, sigptr$$88);
  }, patternInput$$89[0], bytes$$36, patternInput$$89[1]);
  return patternInput$$90[0];
}

function byteAsHasThis(b$$2) {
  const hasthis_masked = b$$2 & 96;

  if (hasthis_masked === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_INSTANCE) {
    return new _il.ILThisConvention(0, "Instance");
  } else if (hasthis_masked === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_INSTANCE_EXPLICIT) {
    return new _il.ILThisConvention(1, "InstanceExplicit");
  } else {
    return new _il.ILThisConvention(2, "Static");
  }
}

function byteAsCallConv(b$$3) {
  let cc$$7;
  const ccMaxked$$1 = b$$3 & 15;
  cc$$7 = ccMaxked$$1 === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_FASTCALL ? new _il.ILArgConvention(4, "FastCall") : ccMaxked$$1 === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_STDCALL ? new _il.ILArgConvention(2, "StdCall") : ccMaxked$$1 === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_THISCALL ? new _il.ILArgConvention(3, "ThisCall") : ccMaxked$$1 === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_CDECL ? new _il.ILArgConvention(1, "CDecl") : ccMaxked$$1 === _ilbinary.e_IMAGE_CEE_CS_CALLCONV_VARARG ? new _il.ILArgConvention(5, "VarArg") : new _il.ILArgConvention(0, "Default");
  const generic$$2 = (b$$3 & _ilbinary.e_IMAGE_CEE_CS_CALLCONV_GENERIC) !== 0;
  return [generic$$2, new _il.ILCallingConv(0, "Callconv", byteAsHasThis(b$$3), cc$$7)];
}

function seekReadMemberRefAsMethodData(ctxt$$164, numtypars$$26, idx$$123) {
  return ctxt$$164.seekReadMemberRefAsMethodData(new MemberRefAsMspecIdx(0, "MemberRefAsMspecIdx", numtypars$$26, idx$$123));
}

function seekReadMemberRefAsMethodDataUncached(ctxtH$$18, _arg15) {
  const numtypars$$27 = _arg15.fields[0] | 0;
  const idx$$124 = _arg15.fields[1] | 0;
  const ctxt$$165 = (0, _illib.getHole)(ctxtH$$18);
  const mdv$$95 = ctxt$$165.mdfile.GetView();
  const patternInput$$91 = seekReadMemberRefRow(ctxt$$165, mdv$$95, idx$$124);
  const nm$$12 = readStringHeap(ctxt$$165, patternInput$$91[1]);
  const enclTy$$5 = seekReadMethodRefParent(ctxt$$165, mdv$$95, numtypars$$27, patternInput$$91[0]);
  const patternInput$$92 = readBlobHeapAsMethodSig(ctxt$$165, (0, _List.length)((0, _il.ILType$$get_GenericArgs)(enclTy$$5)), patternInput$$91[2]);
  const minst$$5 = (0, _List.initialize)(patternInput$$92[1], function (n$$15) {
    return (0, _il.mkILTyvarTy)(numtypars$$27 + n$$15 & 0xFFFF);
  });
  return new VarArgMethodData(0, "VarArgMethodData", enclTy$$5, patternInput$$92[2], nm$$12, patternInput$$92[4], patternInput$$92[5], patternInput$$92[3], minst$$5);
}

function seekReadMemberRefAsMethDataNoVarArgs(ctxt$$166, numtypars$$28, idx$$125) {
  const patternInput$$93 = seekReadMemberRefAsMethodData(ctxt$$166, numtypars$$28, idx$$125);
  const varargs$$4 = patternInput$$93.fields[4];
  const retty$$10 = patternInput$$93.fields[5];
  const nm$$13 = patternInput$$93.fields[2];
  const minst$$6 = patternInput$$93.fields[6];
  const enclTy$$6 = patternInput$$93.fields[0];
  const cc$$9 = patternInput$$93.fields[1];
  const argtys$$10 = patternInput$$93.fields[3];

  if (varargs$$4 != null) {
    (0, _ildiag.dprintf)((0, _String.printf)("ignoring sentinel and varargs in ILMethodDef token signature"));
  }

  return new MethodData(0, "MethodData", enclTy$$6, cc$$9, nm$$13, argtys$$10, retty$$10, minst$$6);
}

function seekReadMethodSpecAsMethodData(ctxt$$167, numtypars$$29, idx$$126) {
  return ctxt$$167.seekReadMethodSpecAsMethodData(new MethodSpecAsMspecIdx(0, "MethodSpecAsMspecIdx", numtypars$$29, idx$$126));
}

function seekReadMethodSpecAsMethodDataUncached(ctxtH$$19, _arg16) {
  const numtypars$$30 = _arg16.fields[0] | 0;
  const idx$$127 = _arg16.fields[1] | 0;
  const ctxt$$168 = (0, _illib.getHole)(ctxtH$$19);
  const mdv$$96 = ctxt$$168.mdfile.GetView();
  const patternInput$$94 = seekReadMethodSpecRow(ctxt$$168, mdv$$96, idx$$127);
  const patternInput$$95 = seekReadMethodDefOrRef(ctxt$$168, numtypars$$30, patternInput$$94[0]);
  const varargs$$5 = patternInput$$95.fields[4];
  const retty$$11 = patternInput$$95.fields[5];
  const nm$$14 = patternInput$$95.fields[2];
  const enclTy$$7 = patternInput$$95.fields[0];
  const cc$$10 = patternInput$$95.fields[1];
  const argtys$$11 = patternInput$$95.fields[3];
  let minst$$7;
  const bytes$$38 = readBlobHeap(ctxt$$168, patternInput$$94[1]);
  const sigptr$$89 = 0;
  const patternInput$$96 = sigptrGetByte(bytes$$38, sigptr$$89);

  if (patternInput$$96[0] !== _ilbinary.e_IMAGE_CEE_CS_CALLCONV_GENERICINST) {
    (0, _ildiag.dprintn)("warning: method inst ILCallingConv was " + patternInput$$96[0].toString() + " instead of CC_GENERICINST");
  }

  const patternInput$$97 = sigptrGetZInt32(bytes$$38, patternInput$$96[1]);
  const patternInput$$98 = sigptrFold(function (bytes$$39, sigptr$$92) {
    return sigptrGetTy(ctxt$$168, numtypars$$30, bytes$$39, sigptr$$92);
  }, patternInput$$97[0], bytes$$38, patternInput$$97[1]);
  minst$$7 = patternInput$$98[0];
  return new VarArgMethodData(0, "VarArgMethodData", enclTy$$7, cc$$10, nm$$14, argtys$$11, varargs$$5, retty$$11, minst$$7);
}

function seekReadMemberRefAsFieldSpec(ctxt$$169, numtypars$$31, idx$$128) {
  return ctxt$$169.seekReadMemberRefAsFieldSpec(new MemberRefAsFspecIdx(0, "MemberRefAsFspecIdx", numtypars$$31, idx$$128));
}

function seekReadMemberRefAsFieldSpecUncached(ctxtH$$20, _arg17) {
  const numtypars$$32 = _arg17.fields[0] | 0;
  const idx$$129 = _arg17.fields[1] | 0;
  const ctxt$$170 = (0, _illib.getHole)(ctxtH$$20);
  const mdv$$97 = ctxt$$170.mdfile.GetView();
  const patternInput$$99 = seekReadMemberRefRow(ctxt$$170, mdv$$97, idx$$129);
  const nm$$15 = readStringHeap(ctxt$$170, patternInput$$99[1]);
  const enclTy$$8 = seekReadMethodRefParent(ctxt$$170, mdv$$97, numtypars$$32, patternInput$$99[0]);
  const retty$$12 = readBlobHeapAsFieldSig(ctxt$$170, numtypars$$32, patternInput$$99[2]);
  return (0, _il.mkILFieldSpecInTy)(enclTy$$8, nm$$15, retty$$12);
}

function seekReadMethodDefAsMethodData(ctxt$$171, idx$$130) {
  return ctxt$$171.seekReadMethodDefAsMethodData(idx$$130);
}

function seekReadMethodDefAsMethodDataUncached(ctxtH$$21, idx$$131) {
  const ctxt$$172 = (0, _illib.getHole)(ctxtH$$21);
  const mdv$$98 = ctxt$$172.mdfile.GetView();
  const tidx$$9 = seekReadIndexedRow(ctxt$$172.getNumRows(_ilbinary.TableNames$$$TypeDef), function (i$$17) {
    return [i$$17, seekReadTypeDefRowWithExtents(ctxt$$172, i$$17)];
  }, function (r) {
    return r;
  }, function (tupledArg$$21) {
    const methodsIdx$$3 = tupledArg$$21[1][0][5] | 0;
    const endMethodsIdx$$1 = tupledArg$$21[1][1][1] | 0;
    return (endMethodsIdx$$1 <= idx$$131 ? 1 : (methodsIdx$$3 <= idx$$131 ? idx$$131 < endMethodsIdx$$1 : false) ? 0 : -1) | 0;
  }, true, function (tuple$$16) {
    return tuple$$16[0];
  }) | 0;
  const typeGenericArgs = seekReadGenericParams(ctxt$$172, 0, _ilbinary.tomd_TypeDef, tidx$$9);
  const typeGenericArgsCount = (0, _List.length)(typeGenericArgs) | 0;
  const methodGenericArgs = seekReadGenericParams(ctxt$$172, typeGenericArgsCount, _ilbinary.tomd_MethodDef, idx$$131);
  const finst = (0, _il.mkILFormalGenericArgs)(0, typeGenericArgs);
  const minst$$8 = (0, _il.mkILFormalGenericArgs)(typeGenericArgsCount, methodGenericArgs);
  const enclTy$$9 = seekReadTypeDefAsType(ctxt$$172, new _il.ILBoxity(0, "AsObject"), finst, tidx$$9);
  const patternInput$$100 = seekReadMethodRow(ctxt$$172, mdv$$98, idx$$131);
  const nm$$16 = readStringHeap(ctxt$$172, patternInput$$100[3]);
  const patternInput$$101 = readBlobHeapAsMethodSig(ctxt$$172, typeGenericArgsCount, patternInput$$100[4]);

  if (!(0, _Util.equals)(patternInput$$101[5], null)) {
    (0, _ildiag.dprintf)((0, _String.printf)("ignoring sentinel and varargs in ILMethodDef token signature"));
  }

  return new MethodData(0, "MethodData", enclTy$$9, patternInput$$101[2], nm$$16, patternInput$$101[4], patternInput$$101[3], minst$$8);
}

function seekReadFieldDefAsFieldSpec(ctxt$$173, idx$$132) {
  return ctxt$$173.seekReadFieldDefAsFieldSpec(idx$$132);
}

function seekReadFieldDefAsFieldSpecUncached(ctxtH$$22, idx$$133) {
  const ctxt$$174 = (0, _illib.getHole)(ctxtH$$22);
  const mdv$$99 = ctxt$$174.mdfile.GetView();
  const patternInput$$102 = seekReadFieldRow(ctxt$$174, mdv$$99, idx$$133);
  const nm$$17 = readStringHeap(ctxt$$174, patternInput$$102[1]);
  const tidx$$10 = seekReadIndexedRow(ctxt$$174.getNumRows(_ilbinary.TableNames$$$TypeDef), function (i$$18) {
    return [i$$18, seekReadTypeDefRowWithExtents(ctxt$$174, i$$18)];
  }, function (r$$1) {
    return r$$1;
  }, function (tupledArg$$22) {
    const fieldsIdx$$3 = tupledArg$$22[1][0][4] | 0;
    const endFieldsIdx$$1 = tupledArg$$22[1][1][0] | 0;
    return (endFieldsIdx$$1 <= idx$$133 ? 1 : (fieldsIdx$$3 <= idx$$133 ? idx$$133 < endFieldsIdx$$1 : false) ? 0 : -1) | 0;
  }, true, function (tuple$$17) {
    return tuple$$17[0];
  }) | 0;
  const retty$$14 = readBlobHeapAsFieldSig(ctxt$$174, 0, patternInput$$102[2]);
  const finst$$1 = (0, _il.mkILFormalGenericArgs)(0, seekReadGenericParams(ctxt$$174, 0, _ilbinary.tomd_TypeDef, tidx$$10));
  const enclTy$$10 = seekReadTypeDefAsType(ctxt$$174, new _il.ILBoxity(0, "AsObject"), finst$$1, tidx$$10);
  return (0, _il.mkILFieldSpecInTy)(enclTy$$10, nm$$17, retty$$14);
}

function seekReadMethod(ctxt$$175, mdv$$100, numtypars$$33, idx$$134) {
  const patternInput$$103 = seekReadMethodRow(ctxt$$175, mdv$$100, idx$$134);
  const nm$$18 = readStringHeap(ctxt$$175, patternInput$$103[3]);
  const abstr = (patternInput$$103[2] & 1024) !== 0;
  const pinvoke = (patternInput$$103[2] & 8192) !== 0;
  const codetype = patternInput$$103[1] & 3 | 0;
  const unmanaged = (patternInput$$103[1] & 4) !== 0;
  const internalcall = (patternInput$$103[1] & 4096) !== 0;
  const noinline = (patternInput$$103[1] & 8) !== 0;
  const aggressiveinline = (patternInput$$103[1] & 256) !== 0;
  const patternInput$$104 = readBlobHeapAsMethodSig(ctxt$$175, numtypars$$33, patternInput$$103[4]);

  if (!(0, _Util.equals)(patternInput$$104[5], null)) {
    (0, _ildiag.dprintf)((0, _String.printf)("ignoring sentinel and varargs in ILMethodDef signature"));
  }

  let endParamIdx;

  if (idx$$134 >= ctxt$$175.getNumRows(_ilbinary.TableNames$$$Method)) {
    endParamIdx = ctxt$$175.getNumRows(_ilbinary.TableNames$$$Param) + 1;
  } else {
    const patternInput$$105 = seekReadMethodRow(ctxt$$175, mdv$$100, idx$$134 + 1);
    endParamIdx = patternInput$$105[5];
  }

  const patternInput$$106 = seekReadParams(ctxt$$175, mdv$$100, patternInput$$104[3], patternInput$$104[4], patternInput$$103[5], endParamIdx);
  let isEntryPoint;
  const patternInput$$107 = ctxt$$175.entryPointToken;
  isEntryPoint = (0, _Util.equals)(patternInput$$107[0], _ilbinary.TableNames$$$Method) ? patternInput$$107[1] === idx$$134 : false;
  let body;

  if (codetype === 1 ? pinvoke : false) {
    body = _il.methBodyNative;
  } else if (pinvoke) {
    body = seekReadImplMap(ctxt$$175, nm$$18, idx$$134);
  } else if (((internalcall ? true : abstr) ? true : unmanaged) ? true : codetype !== 0) {
    body = _il.methBodyAbstract;
  } else {
    if (ctxt$$175.pectxtCaptured != null) {
      const pectxt$$5 = ctxt$$175.pectxtCaptured;
      body = seekReadMethodRVA(pectxt$$5, ctxt$$175, idx$$134, nm$$18, internalcall, noinline, aggressiveinline, numtypars$$33, patternInput$$103[0]);
    } else {
      body = _il.methBodyNotAvailable;
    }
  }

  return (0, _il.ILMethodDef$$$CreateStored$$5F38DB7D)(nm$$18, patternInput$$103[2], patternInput$$103[1], patternInput$$104[2], patternInput$$106[1], patternInput$$106[0], body, isEntryPoint, seekReadGenericParams(ctxt$$175, numtypars$$33, _ilbinary.tomd_MethodDef, idx$$134), ctxt$$175.securityDeclsReader_MethodDef, ctxt$$175.customAttrsReader_MethodDef, idx$$134);
}

function seekReadParams(ctxt$$176, mdv$$101, retty$$16, argtys$$15, pidx1, pidx2) {
  const retRes = new _Types.FSharpRef((0, _il.mkILReturn)(retty$$16));
  const paramsRes = (0, _Array.map)(_il.mkILParamAnon, (0, _Array.ofList)(argtys$$15, Array), Array);

  for (let i$$19 = pidx1; i$$19 <= pidx2 - 1; i$$19++) {
    seekReadParamExtras(ctxt$$176, mdv$$101, retRes, paramsRes, i$$19);
  }

  return [retRes.contents, (0, _List.ofArray)(paramsRes)];
}

function seekReadParamExtras(ctxt$$177, mdv$$102, retRes$$1, paramsRes$$1, idx$$135) {
  const patternInput$$108 = seekReadParamRow(ctxt$$177, mdv$$102, idx$$135);
  const inOutMasked = patternInput$$108[0] & 255 | 0;
  const hasMarshal = (patternInput$$108[0] & 8192) !== 0;
  const hasDefault = (patternInput$$108[0] & 4096) !== 0;

  const fmReader = function fmReader(idx$$136) {
    return seekReadIndexedRow(ctxt$$177.getNumRows(_ilbinary.TableNames$$$FieldMarshal), function (idx$$137) {
      return seekReadFieldMarshalRow(ctxt$$177, mdv$$102, idx$$137);
    }, function (tuple$$18) {
      return tuple$$18[0];
    }, function (arg10$0040$$2) {
      return hfmCompare(idx$$136, arg10$0040$$2);
    }, isSorted(ctxt$$177, _ilbinary.TableNames$$$FieldMarshal), function ($arg$$13) {
      return readBlobHeapAsNativeType(ctxt$$177, $arg$$13[1]);
    });
  };

  if (patternInput$$108[1] === 0) {
    retRes$$1.contents = new _il.ILReturn(hasMarshal ? fmReader(TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hfm_ParamDef, idx$$135)) : null, retRes$$1.contents.Type, ctxt$$177.customAttrsReader_ParamDef, idx$$135);
  } else if (patternInput$$108[1] > paramsRes$$1.length) {
    (0, _ildiag.dprintn)("bad seq num. for param");
  } else {
    paramsRes$$1[patternInput$$108[1] - 1] = new _il.ILParameter(readStringHeapOption(ctxt$$177, patternInput$$108[2]), paramsRes$$1[patternInput$$108[1] - 1].Type, hasDefault ? seekReadConstant(ctxt$$177, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hc_ParamDef, idx$$135)) : null, hasMarshal ? fmReader(TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hfm_ParamDef, idx$$135)) : null, (inOutMasked & 1) !== 0, (inOutMasked & 2) !== 0, (inOutMasked & 16) !== 0, ctxt$$177.customAttrsReader_ParamDef, idx$$135);
  }
}

function seekReadMethodImpls(ctxt$$178, numtypars$$34, tidx$$11) {
  return (0, _il.mkILMethodImplsLazy)(new _Util.Lazy(function () {
    const mdv$$103 = ctxt$$178.mdfile.GetView();
    const mimpls$$1 = seekReadIndexedRows(ctxt$$178.getNumRows(_ilbinary.TableNames$$$MethodImpl), function (idx$$138) {
      return seekReadMethodImplRow(ctxt$$178, mdv$$103, idx$$138);
    }, function (tupledArg$$23) {
      return tupledArg$$23[0];
    }, function (idx2$$15) {
      return simpleIndexCompare(tidx$$11, idx2$$15);
    }, isSorted(ctxt$$178, _ilbinary.TableNames$$$MethodImpl), function (tupledArg$$24) {
      return [tupledArg$$24[1], tupledArg$$24[2]];
    });
    return (0, _List.map)(function mapping$$1(tupledArg$$25) {
      var patternInput$$110, retty$$18, nm$$20, minst$$10, enclTy$$12, cc$$14, argtys$$17, mspec$$5, patternInput$$109, retty$$17, nm$$19, minst$$9, enclTy$$11, cc$$13, argtys$$16;
      return new _il.ILMethodImplDef((patternInput$$110 = seekReadMethodDefOrRefNoVarargs(ctxt$$178, numtypars$$34, tupledArg$$25[1]), (retty$$18 = patternInput$$110.fields[4], (nm$$20 = patternInput$$110.fields[2], (minst$$10 = patternInput$$110.fields[5], (enclTy$$12 = patternInput$$110.fields[0], (cc$$14 = patternInput$$110.fields[1], (argtys$$17 = patternInput$$110.fields[3], (mspec$$5 = (0, _il.mkILMethSpecInTy)(enclTy$$12, cc$$14, nm$$20, argtys$$17, retty$$18, minst$$10), new _il.ILOverridesSpec(0, "OverridesSpec", (0, _il.ILMethodSpec$$get_MethodRef)(mspec$$5), (0, _il.ILMethodSpec$$get_DeclaringType)(mspec$$5)))))))))), (patternInput$$109 = seekReadMethodDefOrRefNoVarargs(ctxt$$178, numtypars$$34, tupledArg$$25[0]), (retty$$17 = patternInput$$109.fields[4], (nm$$19 = patternInput$$109.fields[2], (minst$$9 = patternInput$$109.fields[5], (enclTy$$11 = patternInput$$109.fields[0], (cc$$13 = patternInput$$109.fields[1], (argtys$$16 = patternInput$$109.fields[3], (0, _il.mkILMethSpecInTy)(enclTy$$11, cc$$13, nm$$19, argtys$$16, retty$$17, minst$$9)))))))));
    }, mimpls$$1);
  }));
}

function seekReadMultipleMethodSemantics(ctxt$$179, flags$$28, id) {
  return (0, _List.map)(function mapping$$2(tuple$$20) {
    return tuple$$20[1];
  }, (0, _List.filter)(function predicate(tupledArg$$28) {
    return flags$$28 === tupledArg$$28[0];
  }, seekReadIndexedRows(ctxt$$179.getNumRows(_ilbinary.TableNames$$$MethodSemantics), function (idx$$139) {
    return seekReadMethodSemanticsRow(ctxt$$179, idx$$139);
  }, function (tupledArg$$26) {
    return tupledArg$$26[2];
  }, function (arg10$0040$$3) {
    return hsCompare(id, arg10$0040$$3);
  }, isSorted(ctxt$$179, _ilbinary.TableNames$$$MethodSemantics), function (tupledArg$$27) {
    const patternInput$$111 = seekReadMethodDefAsMethodData(ctxt$$179, tupledArg$$27[1]);
    const retty$$19 = patternInput$$111.fields[4];
    const nm$$21 = patternInput$$111.fields[2];
    const minst$$11 = patternInput$$111.fields[5];
    const enclTy$$13 = patternInput$$111.fields[0];
    const cc$$15 = patternInput$$111.fields[1];
    const argtys$$18 = patternInput$$111.fields[3];
    return [tupledArg$$27[0], (0, _il.ILMethodSpec$$get_MethodRef)((0, _il.mkILMethSpecInTy)(enclTy$$13, cc$$15, nm$$21, argtys$$18, retty$$19, minst$$11))];
  })));
}

function seekReadoptional_MethodSemantics(ctxt$$180, id_0, id_1) {
  const id$$1 = [id_0, id_1];
  const matchValue$$16 = seekReadMultipleMethodSemantics(ctxt$$180, id$$1[0], id$$1[1]);

  if (matchValue$$16.tail != null) {
    if (matchValue$$16.tail.tail == null) {
      return matchValue$$16.head;
    } else {
      (0, _ildiag.dprintn)("multiple method semantics found");
      return matchValue$$16.head;
    }
  } else {
    return null;
  }
}

function seekReadMethodSemantics(ctxt$$181, id_0$$1, id_1$$1) {
  const id$$3 = [id_0$$1, id_1$$1];
  const matchValue$$17 = seekReadoptional_MethodSemantics(ctxt$$181, id$$3[0], id$$3[1]);

  if (matchValue$$17 != null) {
    const x$$184 = matchValue$$17;
    return x$$184;
  } else {
    throw new Error("seekReadMethodSemantics ctxt: no method found");
  }
}

function seekReadEvent(ctxt$$182, mdv$$104, numtypars$$35, idx$$140) {
  const patternInput$$112 = seekReadEventRow(ctxt$$182, mdv$$104, idx$$140);
  return (0, _il.ILEventDef$$$CreateStored$$Z970C03B)(seekReadOptionalTypeDefOrRef(ctxt$$182, numtypars$$35, new _il.ILBoxity(0, "AsObject"), patternInput$$112[2]), readStringHeap(ctxt$$182, patternInput$$112[1]), patternInput$$112[0], seekReadMethodSemantics(ctxt$$182, 8, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hs_Event, idx$$140)), seekReadMethodSemantics(ctxt$$182, 16, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hs_Event, idx$$140)), seekReadoptional_MethodSemantics(ctxt$$182, 32, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hs_Event, idx$$140)), seekReadMultipleMethodSemantics(ctxt$$182, 4, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hs_Event, idx$$140)), ctxt$$182.customAttrsReader_Event, idx$$140);
}

function seekReadEvents(ctxt$$183, numtypars$$36, tidx$$12) {
  return (0, _il.mkILEventsLazy)(new _Util.Lazy(function () {
    const mdv$$105 = ctxt$$183.mdfile.GetView();
    const matchValue$$18 = seekReadOptionalIndexedRow(ctxt$$183.getNumRows(_ilbinary.TableNames$$$EventMap), function (i$$20) {
      return [i$$20, seekReadEventMapRow(ctxt$$183, mdv$$105, i$$20)];
    }, function (tupledArg$$29) {
      return tupledArg$$29[1][0];
    }, function (e2) {
      return (0, _Util.comparePrimitives)(tidx$$12, e2);
    }, false, function (tupledArg$$30) {
      return [tupledArg$$30[0], tupledArg$$30[1][1]];
    });

    if (matchValue$$18 != null) {
      const rowNum = matchValue$$18[0] | 0;
      const beginEventIdx = matchValue$$18[1] | 0;
      let endEventIdx$$1;

      if (rowNum >= ctxt$$183.getNumRows(_ilbinary.TableNames$$$EventMap)) {
        endEventIdx$$1 = ctxt$$183.getNumRows(_ilbinary.TableNames$$$Event) + 1;
      } else {
        const patternInput$$113 = seekReadEventMapRow(ctxt$$183, mdv$$105, rowNum + 1);
        endEventIdx$$1 = patternInput$$113[1];
      }

      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.map)(function (i$$22) {
          return seekReadEvent(ctxt$$183, mdv$$105, numtypars$$36, i$$22);
        }, (0, _Seq.rangeNumber)(beginEventIdx, 1, endEventIdx$$1 - 1));
      }));
    } else {
      return (0, _Types.L)();
    }
  }));
}

function seekReadProperty(ctxt$$184, mdv$$106, numtypars$$37, idx$$141) {
  const patternInput$$114 = seekReadPropertyRow(ctxt$$184, mdv$$106, idx$$141);
  const patternInput$$115 = readBlobHeapAsPropertySig(ctxt$$184, numtypars$$37, patternInput$$114[2]);
  const setter = seekReadoptional_MethodSemantics(ctxt$$184, 1, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hs_Property, idx$$141));
  const getter = seekReadoptional_MethodSemantics(ctxt$$184, 2, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hs_Property, idx$$141));
  let cc2;

  if (getter == null) {
    if (setter == null) {
      cc2 = patternInput$$115[0];
    } else {
      const mref$$1 = setter;
      cc2 = (0, _il.ILCallingConv$$get_ThisConv)((0, _il.ILMethodRef$$get_CallingConv)(mref$$1));
    }
  } else {
    const mref = getter;
    cc2 = (0, _il.ILCallingConv$$get_ThisConv)((0, _il.ILMethodRef$$get_CallingConv)(mref));
  }

  return (0, _il.ILPropertyDef$$$CreateStored$$ZEE27C7)(readStringHeap(ctxt$$184, patternInput$$114[1]), patternInput$$114[0], setter, getter, cc2, patternInput$$115[1], (patternInput$$114[0] & 4096) === 0 ? null : seekReadConstant(ctxt$$184, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.hc_Property, idx$$141)), patternInput$$115[2], ctxt$$184.customAttrsReader_Property, idx$$141);
}

function seekReadProperties(ctxt$$185, numtypars$$38, tidx$$13) {
  return (0, _il.mkILPropertiesLazy)(new _Util.Lazy(function () {
    const mdv$$107 = ctxt$$185.mdfile.GetView();
    const matchValue$$19 = seekReadOptionalIndexedRow(ctxt$$185.getNumRows(_ilbinary.TableNames$$$PropertyMap), function (i$$23) {
      return [i$$23, seekReadPropertyMapRow(ctxt$$185, mdv$$107, i$$23)];
    }, function (tupledArg$$31) {
      return tupledArg$$31[1][0];
    }, function (e2$$1) {
      return (0, _Util.comparePrimitives)(tidx$$13, e2$$1);
    }, false, function (tupledArg$$32) {
      return [tupledArg$$32[0], tupledArg$$32[1][1]];
    });

    if (matchValue$$19 != null) {
      const rowNum$$1 = matchValue$$19[0] | 0;
      const beginPropIdx = matchValue$$19[1] | 0;
      let endPropIdx$$1;

      if (rowNum$$1 >= ctxt$$185.getNumRows(_ilbinary.TableNames$$$PropertyMap)) {
        endPropIdx$$1 = ctxt$$185.getNumRows(_ilbinary.TableNames$$$Property) + 1;
      } else {
        const patternInput$$116 = seekReadPropertyMapRow(ctxt$$185, mdv$$107, rowNum$$1 + 1);
        endPropIdx$$1 = patternInput$$116[1];
      }

      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.map)(function (i$$25) {
          return seekReadProperty(ctxt$$185, mdv$$107, numtypars$$38, i$$25);
        }, (0, _Seq.rangeNumber)(beginPropIdx, 1, endPropIdx$$1 - 1));
      }));
    } else {
      return (0, _Types.L)();
    }
  }));
}

function customAttrsReader(ctxtH$$23, tag$$53) {
  return (0, _il.mkILCustomAttrsReader)(function (idx$$142) {
    const ctxt$$186 = (0, _illib.getHole)(ctxtH$$23);
    return (0, _Array.ofList)(seekReadIndexedRows(ctxt$$186.getNumRows(_ilbinary.TableNames$$$CustomAttribute), function (idx$$143) {
      return seekReadCustomAttributeRow(ctxt$$186, idx$$143);
    }, function (tupledArg$$33) {
      return tupledArg$$33[0];
    }, function (arg10$0040$$5) {
      return hcaCompare(TaggedIndex$00601$$$$002Ector$$Z521B3197(tag$$53, idx$$142), arg10$0040$$5);
    }, isSorted(ctxt$$186, _ilbinary.TableNames$$$CustomAttribute), function (tupledArg$$34) {
      return seekReadCustomAttr(ctxt$$186, tupledArg$$34[1], tupledArg$$34[2]);
    }), Array);
  });
}

function seekReadCustomAttr(ctxt$$187, _arg18$$1, b$$8) {
  const activePatternResult18495 = $007CTaggedIndex$007C(_arg18$$1);
  return ctxt$$187.seekReadCustomAttr(new CustomAttrIdx(0, "CustomAttrIdx", activePatternResult18495[0], activePatternResult18495[1], b$$8));
}

function seekReadCustomAttrUncached(ctxtH$$24, _arg19$$1) {
  var matchValue$$20, bytes$$40;
  const valIdx$$2 = _arg19$$1.fields[2] | 0;
  const idx$$145 = _arg19$$1.fields[1] | 0;
  const cat$$1 = _arg19$$1.fields[0];
  const ctxt$$188 = (0, _illib.getHole)(ctxtH$$24);
  return new _il.ILAttribute(seekReadCustomAttrType(ctxt$$188, TaggedIndex$00601$$$$002Ector$$Z521B3197(cat$$1, idx$$145)), (matchValue$$20 = readBlobHeapOption(ctxt$$188, valIdx$$2), matchValue$$20 == null ? (0, _bytes.Bytes$$$ofInt32Array)(new Int32Array([])) : (bytes$$40 = matchValue$$20, bytes$$40)), (0, _Types.L)());
}

function securityDeclsReader(ctxtH$$25, tag$$54) {
  return (0, _il.mkILSecurityDeclsReader)(function (idx$$146) {
    const ctxt$$189 = (0, _illib.getHole)(ctxtH$$25);
    const mdv$$108 = ctxt$$189.mdfile.GetView();
    return (0, _Array.ofList)(seekReadIndexedRows(ctxt$$189.getNumRows(_ilbinary.TableNames$$$Permission), function (idx$$147) {
      return seekReadPermissionRow(ctxt$$189, mdv$$108, idx$$147);
    }, function (tupledArg$$35) {
      return tupledArg$$35[1];
    }, function (arg10$0040$$6) {
      return hdsCompare(TaggedIndex$00601$$$$002Ector$$Z521B3197(tag$$54, idx$$146), arg10$0040$$6);
    }, isSorted(ctxt$$189, _ilbinary.TableNames$$$Permission), function (tupledArg$$36) {
      return seekReadSecurityDecl(ctxt$$189, tupledArg$$36[0], tupledArg$$36[2]);
    }), Array);
  });
}

function seekReadSecurityDecl(ctxt$$190, act$$1, ty$$9) {
  return new _il.ILSecurityDecl(0, "ILSecurityDecl", (0, _illib.List$$$memAssoc)(~~act$$1, (0, _illib.Lazy$$$force)(_ilbinary.ILSecurityActionRevMap)) ? (0, _illib.List$$$assoc)(~~act$$1, (0, _illib.Lazy$$$force)(_ilbinary.ILSecurityActionRevMap)) : (() => {
    throw new Error("unknown security action");
  })(), readBlobHeap(ctxt$$190, ty$$9));
}

function seekReadConstant(ctxt$$191, idx$$148) {
  var x$$185, x$$187, x$$189, x$$191, x$$193, x$$195, x$$197, x$$199, x$$201, x$$203, x$$205, x$$207, x$$209, x$$211;
  const patternInput$$117 = seekReadIndexedRow(ctxt$$191.getNumRows(_ilbinary.TableNames$$$Constant), function (idx$$149) {
    return seekReadConstantRow(ctxt$$191, idx$$149);
  }, function (tupledArg$$37) {
    return tupledArg$$37[1];
  }, function (arg10$0040$$7) {
    return hcCompare(idx$$148, arg10$0040$$7);
  }, isSorted(ctxt$$191, _ilbinary.TableNames$$$Constant), function (tupledArg$$38) {
    return [tupledArg$$38[0], tupledArg$$38[2]];
  });

  if (x$$185 = patternInput$$117[0], x$$185 === _ilbinary.et_STRING) {
    const x$$186 = patternInput$$117[0];
    const blobHeap = readBlobHeap(ctxt$$191, patternInput$$117[1]);
    const s = (0, _Encoding.get_Unicode)().getString(blobHeap, 0, blobHeap.length);
    return new _il.ILFieldInit(0, "String", s);
  } else if (x$$187 = patternInput$$117[0], x$$187 === _ilbinary.et_BOOLEAN) {
    const x$$188 = patternInput$$117[0];
    return new _il.ILFieldInit(1, "Bool", readBlobHeapAsBool(ctxt$$191, patternInput$$117[1]));
  } else if (x$$189 = patternInput$$117[0], x$$189 === _ilbinary.et_CHAR) {
    const x$$190 = patternInput$$117[0];
    return new _il.ILFieldInit(2, "Char", readBlobHeapAsUInt16(ctxt$$191, patternInput$$117[1]));
  } else if (x$$191 = patternInput$$117[0], x$$191 === _ilbinary.et_I1) {
    const x$$192 = patternInput$$117[0];
    return new _il.ILFieldInit(3, "Int8", readBlobHeapAsSByte(ctxt$$191, patternInput$$117[1]));
  } else if (x$$193 = patternInput$$117[0], x$$193 === _ilbinary.et_I2) {
    const x$$194 = patternInput$$117[0];
    return new _il.ILFieldInit(4, "Int16", readBlobHeapAsInt16(ctxt$$191, patternInput$$117[1]));
  } else if (x$$195 = patternInput$$117[0], x$$195 === _ilbinary.et_I4) {
    const x$$196 = patternInput$$117[0];
    return new _il.ILFieldInit(5, "Int32", readBlobHeapAsInt32(ctxt$$191, patternInput$$117[1]));
  } else if (x$$197 = patternInput$$117[0], x$$197 === _ilbinary.et_I8) {
    const x$$198 = patternInput$$117[0];
    return new _il.ILFieldInit(6, "Int64", readBlobHeapAsInt64(ctxt$$191, patternInput$$117[1]));
  } else if (x$$199 = patternInput$$117[0], x$$199 === _ilbinary.et_U1) {
    const x$$200 = patternInput$$117[0];
    return new _il.ILFieldInit(7, "UInt8", readBlobHeapAsByte(ctxt$$191, patternInput$$117[1]));
  } else if (x$$201 = patternInput$$117[0], x$$201 === _ilbinary.et_U2) {
    const x$$202 = patternInput$$117[0];
    return new _il.ILFieldInit(8, "UInt16", readBlobHeapAsUInt16(ctxt$$191, patternInput$$117[1]));
  } else if (x$$203 = patternInput$$117[0], x$$203 === _ilbinary.et_U4) {
    const x$$204 = patternInput$$117[0];
    return new _il.ILFieldInit(9, "UInt32", readBlobHeapAsUInt32(ctxt$$191, patternInput$$117[1]));
  } else if (x$$205 = patternInput$$117[0], x$$205 === _ilbinary.et_U8) {
    const x$$206 = patternInput$$117[0];
    return new _il.ILFieldInit(10, "UInt64", readBlobHeapAsUInt64(ctxt$$191, patternInput$$117[1]));
  } else if (x$$207 = patternInput$$117[0], x$$207 === _ilbinary.et_R4) {
    const x$$208 = patternInput$$117[0];
    return new _il.ILFieldInit(11, "Single", readBlobHeapAsSingle(ctxt$$191, patternInput$$117[1]));
  } else if (x$$209 = patternInput$$117[0], x$$209 === _ilbinary.et_R8) {
    const x$$210 = patternInput$$117[0];
    return new _il.ILFieldInit(12, "Double", readBlobHeapAsDouble(ctxt$$191, patternInput$$117[1]));
  } else if (x$$211 = patternInput$$117[0], x$$211 === _ilbinary.et_CLASS ? true : x$$211 === _ilbinary.et_OBJECT) {
    const x$$212 = patternInput$$117[0];
    return new _il.ILFieldInit(13, "Null");
  } else {
    return new _il.ILFieldInit(13, "Null");
  }
}

function seekReadImplMap(ctxt$$192, nm$$22, midx$$1) {
  return (0, _il.mkMethBodyLazyAux)(new _Util.Lazy(function () {
    var matchValue$$21, nm2;
    const mdv$$109 = ctxt$$192.mdfile.GetView();
    const patternInput$$118 = seekReadIndexedRow(ctxt$$192.getNumRows(_ilbinary.TableNames$$$ImplMap), function (idx$$150) {
      return seekReadImplMapRow(ctxt$$192, mdv$$109, idx$$150);
    }, function (tupledArg$$39) {
      return tupledArg$$39[1];
    }, function (arg10$0040$$8) {
      return mfCompare(TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.mf_MethodDef, midx$$1), arg10$0040$$8);
    }, isSorted(ctxt$$192, _ilbinary.TableNames$$$ImplMap), function (tupledArg$$40) {
      return [tupledArg$$40[0], tupledArg$$40[2], tupledArg$$40[3]];
    });
    let cc$$17;
    const masked$$1 = patternInput$$118[0] & 1792 | 0;

    if (masked$$1 === 0) {
      cc$$17 = new _il.PInvokeCallingConvention(0, "None");
    } else if (masked$$1 === 512) {
      cc$$17 = new _il.PInvokeCallingConvention(1, "Cdecl");
    } else if (masked$$1 === 768) {
      cc$$17 = new _il.PInvokeCallingConvention(2, "Stdcall");
    } else if (masked$$1 === 1024) {
      cc$$17 = new _il.PInvokeCallingConvention(3, "Thiscall");
    } else if (masked$$1 === 1280) {
      cc$$17 = new _il.PInvokeCallingConvention(4, "Fastcall");
    } else if (masked$$1 === 256) {
      cc$$17 = new _il.PInvokeCallingConvention(5, "WinApi");
    } else {
      (0, _ildiag.dprintn)("strange CallingConv");
      cc$$17 = new _il.PInvokeCallingConvention(0, "None");
    }

    let enc$$2;
    const masked$$2 = patternInput$$118[0] & 6 | 0;

    if (masked$$2 === 0) {
      enc$$2 = new _il.PInvokeCharEncoding(0, "None");
    } else if (masked$$2 === 2) {
      enc$$2 = new _il.PInvokeCharEncoding(1, "Ansi");
    } else if (masked$$2 === 4) {
      enc$$2 = new _il.PInvokeCharEncoding(2, "Unicode");
    } else if (masked$$2 === 6) {
      enc$$2 = new _il.PInvokeCharEncoding(3, "Auto");
    } else {
      (0, _ildiag.dprintn)("strange CharEncoding");
      enc$$2 = new _il.PInvokeCharEncoding(0, "None");
    }

    let bestfit;
    const masked$$3 = patternInput$$118[0] & 48 | 0;

    if (masked$$3 === 0) {
      bestfit = new _il.PInvokeCharBestFit(0, "UseAssembly");
    } else if (masked$$3 === 16) {
      bestfit = new _il.PInvokeCharBestFit(1, "Enabled");
    } else if (masked$$3 === 32) {
      bestfit = new _il.PInvokeCharBestFit(2, "Disabled");
    } else {
      (0, _ildiag.dprintn)("strange CharBestFit");
      bestfit = new _il.PInvokeCharBestFit(0, "UseAssembly");
    }

    let unmap;
    const masked$$4 = patternInput$$118[0] & 12288 | 0;

    if (masked$$4 === 0) {
      unmap = new _il.PInvokeThrowOnUnmappableChar(0, "UseAssembly");
    } else if (masked$$4 === 4096) {
      unmap = new _il.PInvokeThrowOnUnmappableChar(1, "Enabled");
    } else if (masked$$4 === 8192) {
      unmap = new _il.PInvokeThrowOnUnmappableChar(2, "Disabled");
    } else {
      (0, _ildiag.dprintn)("strange ThrowOnUnmappableChar");
      unmap = new _il.PInvokeThrowOnUnmappableChar(0, "UseAssembly");
    }

    return new _il.MethodBody(1, "PInvoke", new _il.PInvokeMethod(seekReadModuleRef(ctxt$$192, mdv$$109, patternInput$$118[2]), (matchValue$$21 = readStringHeapOption(ctxt$$192, patternInput$$118[1]), matchValue$$21 != null ? (nm2 = matchValue$$21, nm2) : nm$$22), cc$$17, enc$$2, (patternInput$$118[0] & 1) !== 0, (patternInput$$118[0] & 64) !== 0, unmap, bestfit));
  }));
}

function seekReadTopCode(ctxt$$193, pev$$1, mdv$$110, numtypars$$39, sz$$1, start$$2, seqpoints) {
  var matchValue$$24, i$$26, _tag$$1, _rest;

  const labelsOfRawOffsets = new Map([]);
  const ilOffsetsOfLabels = new Map([]);

  const tryRawToLabel = function tryRawToLabel(rawOffset) {
    const matchValue$$22 = (0, _Util.tryGetValue)(labelsOfRawOffsets, rawOffset, 0);

    if (matchValue$$22[0]) {
      return matchValue$$22[1];
    } else {
      return null;
    }
  };

  const rawToLabel = function rawToLabel(rawOffset$$1) {
    const matchValue$$23 = tryRawToLabel(rawOffset$$1);

    if (matchValue$$23 == null) {
      const lab = (0, _il.generateCodeLabel)() | 0;
      labelsOfRawOffsets.set(rawOffset$$1, lab);
      return lab | 0;
    } else {
      const l$$2 = matchValue$$23 | 0;
      return l$$2 | 0;
    }
  };

  const markAsInstructionStart = function markAsInstructionStart(rawOffset$$2, ilOffset) {
    const lab$$1 = rawToLabel(rawOffset$$2) | 0;
    ilOffsetsOfLabels.set(lab$$1, ilOffset);
  };

  const ibuf = [];
  const curr$$2 = new _Types.FSharpRef(0);
  const prefixes$$87 = new ILInstrPrefixesRegister(new _il.ILAlignment(0, "Aligned"), new _il.ILTailcall(1, "Normalcall"), new _il.ILVolatility(1, "Nonvolatile"), new _il.ILReadonly(1, "NormalAddress"), null);
  const lastb = new _Types.FSharpRef(0);
  const lastb2 = new _Types.FSharpRef(0);
  const b$$9 = new _Types.FSharpRef(0);

  const get = function get() {
    lastb.contents = seekReadByteAsInt32(pev$$1, start$$2 + curr$$2.contents);
    void curr$$2.contents++;

    if (lastb.contents === 254 ? curr$$2.contents < sz$$1 : false) {
      lastb2.contents = seekReadByteAsInt32(pev$$1, start$$2 + curr$$2.contents);
      void curr$$2.contents++;
      b$$9.contents = lastb2.contents;
    } else {
      b$$9.contents = lastb.contents;
    }
  };

  const seqPointsRemaining = new _Types.FSharpRef(seqpoints);

  while (curr$$2.contents < sz$$1) {
    markAsInstructionStart(curr$$2.contents, (0, _Util.count)(ibuf));

    while (matchValue$$24 = seqPointsRemaining.contents, matchValue$$24.tail != null ? (i$$26 = matchValue$$24.head[0] | 0, (_tag$$1 = matchValue$$24.head[1], (_rest = matchValue$$24.tail, i$$26 <= curr$$2.contents))) ? true : false : false) {
      const patternInput$$119 = (0, _List.head)(seqPointsRemaining.contents);
      seqPointsRemaining.contents = (0, _List.tail)(seqPointsRemaining.contents);
      ibuf.push(new _il.ILInstr(89, "I_seqpoint", patternInput$$119[1]));
    }

    prefixes$$87.al = new _il.ILAlignment(0, "Aligned");
    prefixes$$87.tl = new _il.ILTailcall(1, "Normalcall");
    prefixes$$87.vol = new _il.ILVolatility(1, "Nonvolatile");
    prefixes$$87.ro = new _il.ILReadonly(1, "NormalAddress");
    prefixes$$87.constrained = null;
    get();

    while ((curr$$2.contents < sz$$1 ? lastb.contents === 254 : false) ? (((b$$9.contents === (_ilbinary.i_constrained & 255) ? true : b$$9.contents === (_ilbinary.i_readonly & 255)) ? true : b$$9.contents === (_ilbinary.i_unaligned & 255)) ? true : b$$9.contents === (_ilbinary.i_volatile & 255)) ? true : b$$9.contents === (_ilbinary.i_tail & 255) : false) {
      if (b$$9.contents === (_ilbinary.i_unaligned & 255)) {
        const unal = seekReadByteAsInt32(pev$$1, start$$2 + curr$$2.contents) | 0;
        void curr$$2.contents++;

        if (unal === 1) {
          prefixes$$87.al = new _il.ILAlignment(1, "Unaligned1");
        } else if (unal === 2) {
          prefixes$$87.al = new _il.ILAlignment(2, "Unaligned2");
        } else if (unal === 4) {
          prefixes$$87.al = new _il.ILAlignment(3, "Unaligned4");
        } else {
          (0, _ildiag.dprintn)("bad alignment for unaligned");
          prefixes$$87.al = new _il.ILAlignment(0, "Aligned");
        }
      } else if (b$$9.contents === (_ilbinary.i_volatile & 255)) {
        prefixes$$87.vol = new _il.ILVolatility(0, "Volatile");
      } else if (b$$9.contents === (_ilbinary.i_readonly & 255)) {
        prefixes$$87.ro = new _il.ILReadonly(0, "ReadonlyAddress");
      } else if (b$$9.contents === (_ilbinary.i_constrained & 255)) {
        const uncoded = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
        curr$$2.contents = curr$$2.contents + 4;
        const ty$$10 = seekReadTypeDefOrRef(ctxt$$193, numtypars$$39, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), uncodedTokenToTypeDefOrRefOrSpec(uncoded[0], uncoded[1]));
        prefixes$$87.constrained = ty$$10;
      } else {
        prefixes$$87.tl = new _il.ILTailcall(0, "Tailcall");
      }

      get();
    }

    if (curr$$2.contents <= sz$$1) {
      const idecoder = lastb.contents === 254 ? getTwoByteInstr(lastb2.contents) : getOneByteInstr(lastb.contents);
      let instr;

      switch (idecoder.tag) {
        case 1:
          {
            const f$$12 = idecoder.fields[0];
            const x$$214 = seekReadUInt16(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 2;
            instr = f$$12(prefixes$$87, x$$214);
            break;
          }

        case 2:
          {
            const f$$13 = idecoder.fields[0];
            instr = f$$13(prefixes$$87);
            break;
          }

        case 3:
          {
            const f$$14 = idecoder.fields[0];
            const x$$215 = seekReadInt64(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 8;
            instr = f$$14(prefixes$$87, x$$215);
            break;
          }

        case 5:
          {
            const f$$15 = idecoder.fields[0];
            const x$$216 = seekReadSByte(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 1;
            instr = f$$15(prefixes$$87, x$$216);
            break;
          }

        case 4:
          {
            const f$$16 = idecoder.fields[0];
            const x$$217 = seekReadInt32(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 4;
            instr = f$$16(prefixes$$87, x$$217);
            break;
          }

        case 6:
          {
            const f$$17 = idecoder.fields[0];
            const x$$218 = seekReadSingle(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;
            instr = f$$17(prefixes$$87, x$$218);
            break;
          }

        case 7:
          {
            const f$$18 = idecoder.fields[0];
            const x$$219 = seekReadDouble(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 8;
            instr = f$$18(prefixes$$87, x$$219);
            break;
          }

        case 8:
          {
            const f$$19 = idecoder.fields[0];
            const patternInput$$120 = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;
            let fspec$$4;

            if ((0, _Util.equals)(patternInput$$120[0], _ilbinary.TableNames$$$Field)) {
              fspec$$4 = seekReadFieldDefAsFieldSpec(ctxt$$193, patternInput$$120[1]);
            } else if ((0, _Util.equals)(patternInput$$120[0], _ilbinary.TableNames$$$MemberRef)) {
              fspec$$4 = seekReadMemberRefAsFieldSpec(ctxt$$193, numtypars$$39, patternInput$$120[1]);
            } else {
              throw new Error("bad table in FieldDefOrRef");
            }

            instr = f$$19(prefixes$$87, fspec$$4);
            break;
          }

        case 9:
          {
            const f$$20 = idecoder.fields[0];
            const patternInput$$121 = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;
            let patternInput$$122;

            if ((0, _Util.equals)(patternInput$$121[0], _ilbinary.TableNames$$$Method)) {
              patternInput$$122 = seekReadMethodDefOrRef(ctxt$$193, numtypars$$39, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.mdor_MethodDef, patternInput$$121[1]));
            } else if ((0, _Util.equals)(patternInput$$121[0], _ilbinary.TableNames$$$MemberRef)) {
              patternInput$$122 = seekReadMethodDefOrRef(ctxt$$193, numtypars$$39, TaggedIndex$00601$$$$002Ector$$Z521B3197(_ilbinary.mdor_MemberRef, patternInput$$121[1]));
            } else if ((0, _Util.equals)(patternInput$$121[0], _ilbinary.TableNames$$$MethodSpec)) {
              patternInput$$122 = seekReadMethodSpecAsMethodData(ctxt$$193, numtypars$$39, patternInput$$121[1]);
            } else {
              throw new Error("bad table in MethodDefOrRefOrSpec");
            }

            const varargs$$8 = patternInput$$122.fields[4];
            const retty$$21 = patternInput$$122.fields[5];
            const nm$$23 = patternInput$$122.fields[2];
            const minst$$12 = patternInput$$122.fields[6];
            const enclTy$$14 = patternInput$$122.fields[0];
            const cc$$18 = patternInput$$122.fields[1];
            const argtys$$20 = patternInput$$122.fields[3];

            if (enclTy$$14.tag === 1) {
              const ty$$11 = enclTy$$14.fields[1];
              const shape$$1 = enclTy$$14.fields[0];

              switch (nm$$23) {
                case "Get":
                  {
                    instr = new _il.ILInstr(81, "I_ldelem_any", shape$$1, ty$$11);
                    break;
                  }

                case "Set":
                  {
                    instr = new _il.ILInstr(82, "I_stelem_any", shape$$1, ty$$11);
                    break;
                  }

                case "Address":
                  {
                    instr = new _il.ILInstr(80, "I_ldelema", prefixes$$87.ro, false, shape$$1, ty$$11);
                    break;
                  }

                case ".ctor":
                  {
                    instr = new _il.ILInstr(83, "I_newarr", shape$$1, ty$$11);
                    break;
                  }

                default:
                  {
                    throw new Error("bad method on array type");
                  }
              }
            } else {
              const mspec$$6 = (0, _il.mkILMethSpecInTy)(enclTy$$14, cc$$18, nm$$23, argtys$$20, retty$$21, minst$$12);
              instr = f$$20(prefixes$$87, [mspec$$6, varargs$$8]);
            }

            break;
          }

        case 18:
          {
            const f$$21 = idecoder.fields[0];
            const uncoded$$1 = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;
            const ty$$12 = seekReadTypeDefOrRef(ctxt$$193, numtypars$$39, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), uncodedTokenToTypeDefOrRefOrSpec(uncoded$$1[0], uncoded$$1[1]));
            instr = f$$21(prefixes$$87, ty$$12);
            break;
          }

        case 14:
          {
            const f$$22 = idecoder.fields[0];
            const patternInput$$123 = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;

            if (!(0, _Util.equals)(patternInput$$123[0], _ilbinary.TableNames$$$UserStrings)) {
              (0, _ildiag.dprintn)("warning: bad table in user string for ldstr");
            }

            instr = f$$22(prefixes$$87, readUserStringHeap(ctxt$$193, patternInput$$123[1]));
            break;
          }

        case 12:
          {
            const f$$23 = idecoder.fields[0];
            const offsDest = seekReadInt32(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 4;
            const dest = curr$$2.contents + offsDest | 0;
            instr = f$$23(prefixes$$87, rawToLabel(dest));
            break;
          }

        case 13:
          {
            const f$$24 = idecoder.fields[0];
            const offsDest$$1 = seekReadSByte(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 1;
            const dest$$1 = curr$$2.contents + offsDest$$1 | 0;
            instr = f$$24(prefixes$$87, rawToLabel(dest$$1));
            break;
          }

        case 10:
          {
            const f$$25 = idecoder.fields[0];
            const offsDest$$2 = seekReadInt32(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 4;
            const dest$$2 = curr$$2.contents + offsDest$$2 | 0;
            instr = f$$25(prefixes$$87, rawToLabel(dest$$2));
            break;
          }

        case 11:
          {
            const f$$26 = idecoder.fields[0];
            const offsDest$$3 = seekReadSByte(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 1;
            const dest$$3 = curr$$2.contents + offsDest$$3 | 0;
            instr = f$$26(prefixes$$87, rawToLabel(dest$$3));
            break;
          }

        case 19:
          {
            (0, _ildiag.dprintn)("invalid instruction: " + (0, _Util.int32ToString)(lastb.contents) + (lastb.contents === 254 ? ", " + (0, _Util.int32ToString)(lastb2.contents) : ""));
            instr = new _il.ILInstr(47, "I_ret");
            break;
          }

        case 16:
          {
            const f$$27 = idecoder.fields[0];
            const patternInput$$124 = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;
            let token_info;

            if ((0, _Util.equals)(patternInput$$124[0], _ilbinary.TableNames$$$Method) ? true : (0, _Util.equals)(patternInput$$124[0], _ilbinary.TableNames$$$MemberRef)) {
              const patternInput$$125 = seekReadMethodDefOrRefNoVarargs(ctxt$$193, numtypars$$39, uncodedTokenToMethodDefOrRef(patternInput$$124[0], patternInput$$124[1]));
              const retty$$22 = patternInput$$125.fields[4];
              const nm$$24 = patternInput$$125.fields[2];
              const minst$$13 = patternInput$$125.fields[5];
              const enclTy$$15 = patternInput$$125.fields[0];
              const cc$$19 = patternInput$$125.fields[1];
              const argtys$$21 = patternInput$$125.fields[3];
              token_info = new _il.ILToken(1, "ILMethod", (0, _il.mkILMethSpecInTy)(enclTy$$15, cc$$19, nm$$24, argtys$$21, retty$$22, minst$$13));
            } else if ((0, _Util.equals)(patternInput$$124[0], _ilbinary.TableNames$$$Field)) {
              token_info = new _il.ILToken(2, "ILField", seekReadFieldDefAsFieldSpec(ctxt$$193, patternInput$$124[1]));
            } else if (((0, _Util.equals)(patternInput$$124[0], _ilbinary.TableNames$$$TypeDef) ? true : (0, _Util.equals)(patternInput$$124[0], _ilbinary.TableNames$$$TypeRef)) ? true : (0, _Util.equals)(patternInput$$124[0], _ilbinary.TableNames$$$TypeSpec)) {
              token_info = new _il.ILToken(0, "ILType", seekReadTypeDefOrRef(ctxt$$193, numtypars$$39, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), uncodedTokenToTypeDefOrRefOrSpec(patternInput$$124[0], patternInput$$124[1])));
            } else {
              throw new Error("bad token for ldtoken");
            }

            instr = f$$27(prefixes$$87, token_info);
            break;
          }

        case 17:
          {
            const f$$28 = idecoder.fields[0];
            const patternInput$$126 = seekReadUncodedToken(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 4;

            if (!(0, _Util.equals)(patternInput$$126[0], _ilbinary.TableNames$$$StandAloneSig)) {
              (0, _ildiag.dprintn)("strange table for callsig token");
            }

            const patternInput$$127 = readBlobHeapAsMethodSig(ctxt$$193, numtypars$$39, seekReadStandAloneSigRow(ctxt$$193, mdv$$110, patternInput$$126[1]));

            if (patternInput$$127[0]) {
              throw new Error("bad image: a generic method signature is begin used at a calli instruction");
            }

            instr = f$$28(prefixes$$87, [(0, _il.mkILCallSig)(patternInput$$127[2], patternInput$$127[4], patternInput$$127[3]), patternInput$$127[5]]);
            break;
          }

        case 15:
          {
            const f$$29 = idecoder.fields[0];
            const n$$16 = seekReadInt32(pev$$1, start$$2 + curr$$2.contents) | 0;
            curr$$2.contents = curr$$2.contents + 4;
            const offsets = (0, _List.initialize)(n$$16, function (_arg33) {
              const i$$28 = seekReadInt32(pev$$1, start$$2 + curr$$2.contents) | 0;
              curr$$2.contents = curr$$2.contents + 4;
              return i$$28 | 0;
            });
            const dests = (0, _List.map)(function (offs) {
              return rawToLabel(curr$$2.contents + offs);
            }, offsets);
            instr = f$$29(prefixes$$87, dests);
            break;
          }

        default:
          {
            const f$$11 = idecoder.fields[0];
            const x$$213 = seekReadByte(pev$$1, start$$2 + curr$$2.contents);
            curr$$2.contents = curr$$2.contents + 1;
            instr = f$$11(prefixes$$87, x$$213);
          }
      }

      ibuf.push(instr);
    }
  }

  markAsInstructionStart(curr$$2.contents, (0, _Util.count)(ibuf));
  const lab2pc = ilOffsetsOfLabels;

  const raw2nextLab = function raw2nextLab(rawOffset$$3) {
    const isInstrStart = function isInstrStart(x$$220) {
      const matchValue$$25 = tryRawToLabel(x$$220);

      if (matchValue$$25 != null) {
        const lab$$2 = matchValue$$25 | 0;
        return ilOffsetsOfLabels.has(lab$$2);
      } else {
        return false;
      }
    };

    if (isInstrStart(rawOffset$$3)) {
      return rawToLabel(rawOffset$$3) | 0;
    } else if (isInstrStart(rawOffset$$3 + 1)) {
      return rawToLabel(rawOffset$$3 + 1) | 0;
    } else {
      throw new Error("the bytecode raw offset " + (0, _Util.int32ToString)(rawOffset$$3) + " did not refer either to the start or end of an instruction");
    }
  };

  const instrs$$1 = ibuf.slice();
  return [instrs$$1, rawToLabel, lab2pc, raw2nextLab];
}

function seekReadMethodRVA(pectxt$$6, ctxt$$194, _idx, nm$$25, _internalcall, noinline$$1, aggressiveinline$$1, numtypars$$40, rva$$6) {
  return (0, _il.mkMethBodyLazyAux)(new _Util.Lazy(function () {
    const pev$$2 = pectxt$$6.pefile.GetView();
    const mdv$$111 = ctxt$$194.mdfile.GetView();
    const patternInput$$128 = [(0, _Types.L)(), null, (0, _Types.L)()];
    const baseRVA = pectxt$$6.anyV2P(["method rva", rva$$6]) | 0;
    const b$$10 = seekReadByte(pev$$2, baseRVA);

    if ((b$$10 & _ilbinary.e_CorILMethod_FormatMask) === _ilbinary.e_CorILMethod_TinyFormat) {
      const codeBase = baseRVA + 1 | 0;
      const codeSize = (0, _illib.op_GreaterGreaterGreaterAmp)(~~b$$10, 2) | 0;
      const patternInput$$129 = seekReadTopCode(ctxt$$194, pev$$2, mdv$$111, numtypars$$40, codeSize, codeBase, patternInput$$128[2]);
      const localPdbInfos2 = (0, _List.map)(function (f$$30) {
        return f$$30(patternInput$$129[3]);
      }, patternInput$$128[0]);
      const code = (0, _il.buildILCode)(nm$$25, patternInput$$129[2], patternInput$$129[0], (0, _Types.L)(), localPdbInfos2);
      return new _il.MethodBody(0, "IL", new _il.ILMethodBody(false, 8, noinline$$1, aggressiveinline$$1, (0, _Types.L)(), code, patternInput$$128[1]));
    } else if ((b$$10 & _ilbinary.e_CorILMethod_FormatMask) === _ilbinary.e_CorILMethod_FatFormat) {
      const hasMoreSections = (b$$10 & _ilbinary.e_CorILMethod_MoreSects) !== 0;
      const initlocals = (b$$10 & _ilbinary.e_CorILMethod_InitLocals) !== 0;
      const maxstack = seekReadUInt16AsInt32(pev$$2, baseRVA + 2) | 0;
      const codeSize$$1 = seekReadInt32(pev$$2, baseRVA + 4) | 0;
      const patternInput$$130 = seekReadUncodedToken(pev$$2, baseRVA + 8);
      const codeBase$$1 = baseRVA + 12 | 0;
      let locals;

      if (patternInput$$130[1] === 0) {
        locals = (0, _Types.L)();
      } else {
        if (!(0, _Util.equals)(patternInput$$130[0], _ilbinary.TableNames$$$StandAloneSig)) {
          (0, _ildiag.dprintn)("strange table for locals token");
        }

        locals = readBlobHeapAsLocalsSig(ctxt$$194, numtypars$$40, seekReadStandAloneSigRow(ctxt$$194, pev$$2, patternInput$$130[1]));
      }

      const patternInput$$131 = seekReadTopCode(ctxt$$194, pev$$2, mdv$$111, numtypars$$40, codeSize$$1, codeBase$$1, patternInput$$128[2]);
      const nextSectionBase = new _Types.FSharpRef(align(4, codeBase$$1 + codeSize$$1));
      const moreSections = new _Types.FSharpRef(hasMoreSections);
      const seh = new _Types.FSharpRef((0, _Types.L)());

      while (moreSections.contents) {
        const sectionBase = nextSectionBase.contents | 0;
        const sectionFlag = seekReadByte(pev$$2, sectionBase);
        let patternInput$$132;

        if ((sectionFlag & _ilbinary.e_CorILMethod_Sect_FatFormat) !== 0) {
          const bigSize = (0, _illib.op_GreaterGreaterGreaterAmp)(seekReadInt32(pev$$2, sectionBase), 8) | 0;
          let clauses;

          if ((sectionFlag & _ilbinary.e_CorILMethod_Sect_EHTable) !== 0) {
            const numClauses = ~~(bigSize / 24) | 0;
            clauses = (0, _List.initialize)(numClauses, function (i$$29) {
              const clauseBase = sectionBase + 4 + i$$29 * 24 | 0;
              const kind$$3 = seekReadInt32(pev$$2, clauseBase + 0) | 0;
              const st1 = seekReadInt32(pev$$2, clauseBase + 4) | 0;
              const sz1 = seekReadInt32(pev$$2, clauseBase + 8) | 0;
              const st2 = seekReadInt32(pev$$2, clauseBase + 12) | 0;
              const sz2 = seekReadInt32(pev$$2, clauseBase + 16) | 0;
              const extra = seekReadInt32(pev$$2, clauseBase + 20) | 0;
              return [kind$$3, st1, sz1, st2, sz2, extra];
            });
          } else {
            clauses = (0, _Types.L)();
          }

          patternInput$$132 = [bigSize, clauses];
        } else {
          const smallSize = seekReadByteAsInt32(pev$$2, sectionBase + 1) | 0;
          let clauses$$1;

          if ((sectionFlag & _ilbinary.e_CorILMethod_Sect_EHTable) !== 0) {
            const numClauses$$1 = ~~(smallSize / 12) | 0;
            clauses$$1 = (0, _List.initialize)(numClauses$$1, function (i$$30) {
              const clauseBase$$1 = sectionBase + 4 + i$$30 * 12 | 0;
              const kind$$4 = seekReadUInt16AsInt32(pev$$2, clauseBase$$1 + 0) | 0;

              if (logging) {
                (0, _ildiag.dprintn)("One tiny SEH clause, kind = " + (0, _Util.int32ToString)(kind$$4));
              }

              const st1$$1 = seekReadUInt16AsInt32(pev$$2, clauseBase$$1 + 2) | 0;
              const sz1$$1 = seekReadByteAsInt32(pev$$2, clauseBase$$1 + 4) | 0;
              const st2$$1 = seekReadUInt16AsInt32(pev$$2, clauseBase$$1 + 5) | 0;
              const sz2$$1 = seekReadByteAsInt32(pev$$2, clauseBase$$1 + 7) | 0;
              const extra$$1 = seekReadInt32(pev$$2, clauseBase$$1 + 8) | 0;
              return [kind$$4, st1$$1, sz1$$1, st2$$1, sz2$$1, extra$$1];
            });
          } else {
            clauses$$1 = (0, _Types.L)();
          }

          patternInput$$132 = [smallSize, clauses$$1];
        }

        let sehClauses;
        const sehMap = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
        (0, _List.iterate)(function (tupledArg$$41) {
          var tupledArg$$42;
          const tryStart = patternInput$$131[1](tupledArg$$41[1]) | 0;
          const tryFinish = patternInput$$131[1](tupledArg$$41[1] + tupledArg$$41[2]) | 0;
          const handlerStart = patternInput$$131[1](tupledArg$$41[3]) | 0;
          const handlerFinish = patternInput$$131[1](tupledArg$$41[3] + tupledArg$$41[4]) | 0;
          let clause;

          if (tupledArg$$41[0] === _ilbinary.e_COR_ILEXCEPTION_CLAUSE_EXCEPTION) {
            clause = new _il.ILExceptionClause(3, "TypeCatch", seekReadTypeDefOrRef(ctxt$$194, numtypars$$40, new _il.ILBoxity(0, "AsObject"), (0, _Types.L)(), (tupledArg$$42 = i32ToUncodedToken(tupledArg$$41[5]), uncodedTokenToTypeDefOrRefOrSpec(tupledArg$$42[0], tupledArg$$42[1]))), [handlerStart, handlerFinish]);
          } else if (tupledArg$$41[0] === _ilbinary.e_COR_ILEXCEPTION_CLAUSE_FILTER) {
            const filterStart = patternInput$$131[1](tupledArg$$41[5]) | 0;
            const filterFinish = handlerStart | 0;
            clause = new _il.ILExceptionClause(2, "FilterCatch", [filterStart, filterFinish], [handlerStart, handlerFinish]);
          } else if (tupledArg$$41[0] === _ilbinary.e_COR_ILEXCEPTION_CLAUSE_FINALLY) {
            clause = new _il.ILExceptionClause(0, "Finally", [handlerStart, handlerFinish]);
          } else if (tupledArg$$41[0] === _ilbinary.e_COR_ILEXCEPTION_CLAUSE_FAULT) {
            clause = new _il.ILExceptionClause(1, "Fault", [handlerStart, handlerFinish]);
          } else {
            (0, _ildiag.dprintn)(ctxt$$194.fileName + ": unknown exception handler kind: " + (0, _Util.int32ToString)(tupledArg$$41[0]));
            clause = new _il.ILExceptionClause(0, "Finally", [handlerStart, handlerFinish]);
          }

          const key$$1 = [tryStart, tryFinish];
          const matchValue$$26 = (0, _Util.tryGetValue)(sehMap, key$$1, null);

          if (matchValue$$26[0]) {
            sehMap.set(key$$1, (0, _List.append)(matchValue$$26[1], (0, _Types.L)(clause, (0, _Types.L)())));
          } else {
            sehMap.set(key$$1, (0, _Types.L)(clause, (0, _Types.L)()));
          }
        }, patternInput$$132[1]);
        sehClauses = (0, _Seq.fold)(function folder(acc$$2, _arg34) {
          const activePatternResult18546 = _arg34;
          return (0, _List.append)((0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.map)(function (b$$11) {
              return new _il.ILExceptionSpec(activePatternResult18546[0], b$$11);
            }, activePatternResult18546[1]);
          })), acc$$2);
        }, (0, _Types.L)(), sehMap);
        seh.contents = sehClauses;
        moreSections.contents = (sectionFlag & _ilbinary.e_CorILMethod_Sect_MoreSects) !== 0;
        nextSectionBase.contents = sectionBase + patternInput$$132[0];
      }

      if (logging) {
        (0, _ildiag.dprintn)("doing localPdbInfos2");
      }

      const localPdbInfos2$$1 = (0, _List.map)(function (f$$31) {
        return f$$31(patternInput$$131[3]);
      }, patternInput$$128[0]);

      if (logging) {
        (0, _ildiag.dprintn)("done localPdbInfos2, checking code...");
      }

      const code$$1 = (0, _il.buildILCode)(nm$$25, patternInput$$131[2], patternInput$$131[0], seh.contents, localPdbInfos2$$1);

      if (logging) {
        (0, _ildiag.dprintn)("done checking code.");
      }

      return new _il.MethodBody(0, "IL", new _il.ILMethodBody(initlocals, maxstack, noinline$$1, aggressiveinline$$1, locals, code$$1, patternInput$$128[1]));
    } else {
      if (logging) {
        throw new Error("unknown format");
      }

      return new _il.MethodBody(2, "Abstract");
    }
  }));
}

function int32AsILVariantType(ctxt$$195, n$$17) {
  if ((0, _illib.List$$$memAssoc)(n$$17, (0, _illib.Lazy$$$force)(_ilbinary.ILVariantTypeRevMap))) {
    return (0, _illib.List$$$assoc)(n$$17, (0, _illib.Lazy$$$force)(_ilbinary.ILVariantTypeRevMap));
  } else if ((n$$17 & _ilbinary.vt_ARRAY) !== 0) {
    return new _il.ILNativeVariant(39, "Array", int32AsILVariantType(ctxt$$195, n$$17 & ~_ilbinary.vt_ARRAY));
  } else if ((n$$17 & _ilbinary.vt_VECTOR) !== 0) {
    return new _il.ILNativeVariant(40, "Vector", int32AsILVariantType(ctxt$$195, n$$17 & ~_ilbinary.vt_VECTOR));
  } else if ((n$$17 & _ilbinary.vt_BYREF) !== 0) {
    return new _il.ILNativeVariant(41, "Byref", int32AsILVariantType(ctxt$$195, n$$17 & ~_ilbinary.vt_BYREF));
  } else {
    (0, _ildiag.dprintn)(ctxt$$195.fileName + ": int32AsILVariantType ctxt: unexpected variant type, n = " + (0, _Util.int32ToString)(n$$17));
    return new _il.ILNativeVariant(0, "Empty");
  }
}

function readBlobHeapAsNativeType(ctxt$$196, blobIdx$$12) {
  const bytes$$41 = readBlobHeap(ctxt$$196, blobIdx$$12);
  const patternInput$$133 = sigptrGetILNativeType(ctxt$$196, bytes$$41, 0);
  return patternInput$$133[0];
}

function sigptrGetILNativeType(ctxt$$197, bytes$$42, sigptr$$93) {
  const patternInput$$134 = sigptrGetByte(bytes$$42, sigptr$$93);

  if ((0, _illib.List$$$memAssoc)(patternInput$$134[0], (0, _illib.Lazy$$$force)(_ilbinary.ILNativeTypeMap))) {
    return [(0, _illib.List$$$assoc)(patternInput$$134[0], (0, _illib.Lazy$$$force)(_ilbinary.ILNativeTypeMap)), patternInput$$134[1]];
  } else if (patternInput$$134[0] === 0) {
    return [new _il.ILNativeType(0, "Empty"), patternInput$$134[1]];
  } else if (patternInput$$134[0] === _ilbinary.nt_CUSTOMMARSHALER) {
    const patternInput$$135 = sigptrGetZInt32(bytes$$42, patternInput$$134[1]);
    const patternInput$$136 = sigptrGetBytes(patternInput$$135[0], bytes$$42, patternInput$$135[1]);
    const patternInput$$137 = sigptrGetZInt32(bytes$$42, patternInput$$136[1]);
    const patternInput$$138 = sigptrGetString(patternInput$$137[0], bytes$$42, patternInput$$137[1]);
    const patternInput$$139 = sigptrGetZInt32(bytes$$42, patternInput$$138[1]);
    const patternInput$$140 = sigptrGetString(patternInput$$139[0], bytes$$42, patternInput$$139[1]);
    const patternInput$$141 = sigptrGetZInt32(bytes$$42, patternInput$$140[1]);
    const patternInput$$142 = sigptrGetBytes(patternInput$$141[0], bytes$$42, patternInput$$141[1]);
    return [new _il.ILNativeType(1, "Custom", patternInput$$136[0], patternInput$$138[0], patternInput$$140[0], patternInput$$142[0]), patternInput$$142[1]];
  } else if (patternInput$$134[0] === _ilbinary.nt_FIXEDSYSSTRING) {
    const patternInput$$143 = sigptrGetZInt32(bytes$$42, patternInput$$134[1]);
    return [new _il.ILNativeType(2, "FixedSysString", patternInput$$143[0]), patternInput$$143[1]];
  } else if (patternInput$$134[0] === _ilbinary.nt_FIXEDARRAY) {
    const patternInput$$144 = sigptrGetZInt32(bytes$$42, patternInput$$134[1]);
    return [new _il.ILNativeType(3, "FixedArray", patternInput$$144[0]), patternInput$$144[1]];
  } else if (patternInput$$134[0] === _ilbinary.nt_SAFEARRAY) {
    if (patternInput$$134[1] >= bytes$$42.length) {
      return [new _il.ILNativeType(35, "SafeArray", new _il.ILNativeVariant(0, "Empty"), null), patternInput$$134[1]];
    } else {
      const patternInput$$145 = sigptrGetZInt32(bytes$$42, patternInput$$134[1]);

      if (patternInput$$145[1] >= bytes$$42.length) {
        return [new _il.ILNativeType(35, "SafeArray", int32AsILVariantType(ctxt$$197, patternInput$$145[0]), null), patternInput$$145[1]];
      } else {
        const patternInput$$146 = sigptrGetZInt32(bytes$$42, patternInput$$145[1]);
        const patternInput$$147 = sigptrGetString(patternInput$$146[0], bytes$$42, patternInput$$146[1]);
        return [new _il.ILNativeType(35, "SafeArray", int32AsILVariantType(ctxt$$197, patternInput$$145[0]), patternInput$$147[0]), patternInput$$147[1]];
      }
    }
  } else if (patternInput$$134[0] === _ilbinary.nt_ARRAY) {
    if (patternInput$$134[1] >= bytes$$42.length) {
      return [new _il.ILNativeType(25, "Array", null, null), patternInput$$134[1]];
    } else {
      let patternInput$$149;
      const patternInput$$148 = sigptrGetZInt32(bytes$$42, patternInput$$134[1]);
      patternInput$$149 = patternInput$$148[0] === ~~_ilbinary.nt_MAX ? [new _il.ILNativeType(0, "Empty"), patternInput$$148[1]] : sigptrGetILNativeType(ctxt$$197, bytes$$42, patternInput$$134[1]);

      if (patternInput$$149[1] >= bytes$$42.length) {
        return [new _il.ILNativeType(25, "Array", patternInput$$149[0], null), patternInput$$149[1]];
      } else {
        const patternInput$$150 = sigptrGetZInt32(bytes$$42, patternInput$$149[1]);

        if (patternInput$$150[1] >= bytes$$42.length) {
          return [new _il.ILNativeType(25, "Array", patternInput$$149[0], [patternInput$$150[0], null]), patternInput$$150[1]];
        } else {
          const patternInput$$151 = patternInput$$150[1] >= bytes$$42.length ? [0, patternInput$$150[1]] : sigptrGetZInt32(bytes$$42, patternInput$$150[1]);
          return [new _il.ILNativeType(25, "Array", patternInput$$149[0], [patternInput$$150[0], patternInput$$151[0]]), patternInput$$151[1]];
        }
      }
    }
  } else {
    return [new _il.ILNativeType(0, "Empty"), patternInput$$134[1]];
  }
}

function seekReadManifestResources(ctxt$$198, mdv$$112, pectxtEager$$1, pevEager$$1) {
  return (0, _il.mkILResources)((0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (i$$34) {
      const patternInput$$152 = seekReadManifestResourceRow(ctxt$$198, mdv$$112, i$$34);
      const scoref = seekReadImplAsScopeRef(ctxt$$198, mdv$$112, patternInput$$152[3]);
      let location;

      switch (scoref.tag) {
        case 1:
          {
            const mref$$2 = scoref.fields[0];
            location = new _il.ILResourceLocation(2, "File", mref$$2, patternInput$$152[0]);
            break;
          }

        case 2:
          {
            const aref = scoref.fields[0];
            location = new _il.ILResourceLocation(3, "Assembly", aref);
            break;
          }

        default:
          {
            const start$$3 = pectxtEager$$1.anyV2P(["resource", patternInput$$152[0] + pectxtEager$$1.resourcesAddr]) | 0;
            const resourceLength = seekReadInt32(pevEager$$1, start$$3) | 0;
            const offsetOfBytesFromStartOfPhysicalPEFile = start$$3 + 4 | 0;
            const bytes$$43 = seekReadBytes(pevEager$$1, offsetOfBytesFromStartOfPhysicalPEFile, resourceLength);
            location = new _il.ILResourceLocation(1, "LocalOut", bytes$$43);
          }
      }

      const r$$2 = new _il.ILResource(readStringHeap(ctxt$$198, patternInput$$152[2]), location, (patternInput$$152[1] & 1) !== 0 ? new _il.ILResourceAccess(0, "Public") : new _il.ILResourceAccess(1, "Private"), ctxt$$198.customAttrsReader_ManifestResource, i$$34);
      return (0, _Seq.singleton)(r$$2);
    }, (0, _Seq.rangeNumber)(1, 1, ctxt$$198.getNumRows(_ilbinary.TableNames$$$ManifestResource)));
  })));
}

function seekReadNestedExportedTypes(ctxt$$199, exported, nested$$1, parentIdx$$4) {
  return (0, _il.mkILNestedExportedTypesLazy)(new _Util.Lazy(function () {
    return (0, _List.map)(function mapping$$3(i$$35) {
      var matchValue$$27, n$$18;
      const patternInput$$153 = exported[i$$35 - 1];
      return new _il.ILNestedExportedType(readBlobHeapAsTypeName(ctxt$$199, patternInput$$153[2], patternInput$$153[3]), (matchValue$$27 = typeAccessOfFlags(patternInput$$153[0]), matchValue$$27.tag === 2 ? (n$$18 = matchValue$$27.fields[0], n$$18) : (() => {
        throw new Error("non-nested access for a nested type described as being in an auxiliary module");
      })()), seekReadNestedExportedTypes(ctxt$$199, exported, nested$$1, i$$35), ctxt$$199.customAttrsReader_ExportedType, i$$35);
    }, nested$$1.Value[parentIdx$$4 - 1]);
  }));
}

function seekReadTopExportedTypes(ctxt$$200) {
  return (0, _il.mkILExportedTypesLazy)(new _Util.Lazy(function () {
    const mdv$$113 = ctxt$$200.mdfile.GetView();
    const numRows$$3 = ctxt$$200.getNumRows(_ilbinary.TableNames$$$ExportedType) | 0;
    const exported$$1 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (i$$36) {
        return seekReadExportedTypeRow(ctxt$$200, mdv$$113, i$$36);
      }, (0, _Seq.rangeNumber)(1, 1, numRows$$3));
    }), Array);
    const nested$$3 = new _Util.Lazy(function () {
      const nested$$2 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.map)(function (_i) {
          return (0, _Types.L)();
        }, (0, _Seq.rangeNumber)(1, 1, numRows$$3));
      }), Array);

      for (let i$$37 = 1; i$$37 <= numRows$$3; i$$37++) {
        const patternInput$$154 = exported$$1[i$$37 - 1];
        const activePatternResult18583 = $007CTaggedIndex$007C(patternInput$$154[4]);

        if (!isTopTypeDef(patternInput$$154[0]) ? (0, _Util.equals)(activePatternResult18583[0], _ilbinary.i_ExportedType) : false) {
          nested$$2[activePatternResult18583[1] - 1] = (0, _Types.L)(i$$37, nested$$2[activePatternResult18583[1] - 1]);
        }
      }

      return nested$$2;
    });
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (i$$38) {
        const patternInput$$155 = exported$$1[i$$38 - 1];
        const activePatternResult18588 = $007CTaggedIndex$007C(patternInput$$155[4]);
        return (isTopTypeDef(patternInput$$155[0]) ? !(0, _Util.equals)(activePatternResult18588[0], _ilbinary.i_ExportedType) : false) ? (0, _Seq.singleton)(new _il.ILExportedTypeOrForwarder(seekReadImplAsScopeRef(ctxt$$200, mdv$$113, patternInput$$155[4]), readBlobHeapAsTypeName(ctxt$$200, patternInput$$155[2], patternInput$$155[3]), patternInput$$155[0], seekReadNestedExportedTypes(ctxt$$200, exported$$1, nested$$3, i$$38), ctxt$$200.customAttrsReader_ExportedType, i$$38)) : (0, _Seq.empty)();
      }, (0, _Seq.rangeNumber)(1, 1, numRows$$3));
    }));
  }));
}

function openMetadataReader(fileName$$1, mdfile, metadataPhysLoc, peinfo$$1, pectxtEager$$2, pevEager$$2, pectxtCaptured, reduceMemoryUsage, ilGlobals) {
  var pectxt$$7;
  const mdv$$114 = mdfile.GetView();
  const magic = seekReadUInt16AsInt32(mdv$$114, metadataPhysLoc) | 0;

  if (magic !== 21314) {
    throw new Error(fileName$$1 + ": bad metadata magic number: " + (0, _Util.int32ToString)(magic));
  }

  const magic2 = seekReadUInt16AsInt32(mdv$$114, metadataPhysLoc + 2) | 0;

  if (magic2 !== 16970) {
    throw new Error("bad metadata magic number");
  }

  const _majorMetadataVersion = seekReadUInt16(mdv$$114, metadataPhysLoc + 4);

  const _minorMetadataVersion = seekReadUInt16(mdv$$114, metadataPhysLoc + 6);

  const versionLength = seekReadInt32(mdv$$114, metadataPhysLoc + 12) | 0;
  const ilMetadataVersion$$1 = seekReadBytes(mdv$$114, metadataPhysLoc + 16, versionLength).filter(function predicate$$1(b$$12) {
    return b$$12 !== 0;
  });
  const x$$221 = align(4, 16 + versionLength) | 0;
  const numStreams = seekReadUInt16AsInt32(mdv$$114, metadataPhysLoc + x$$221 + 2) | 0;
  const streamHeadersStart = metadataPhysLoc + x$$221 + 4 | 0;

  const tryFindStream = function tryFindStream(name$$3) {
    const look$$1 = function look$$1(i$$39, pos) {
      look$$1: while (true) {
        if (i$$39 >= numStreams) {
          return null;
        } else {
          const offset$$4 = seekReadInt32(mdv$$114, pos + 0) | 0;
          const length = seekReadInt32(mdv$$114, pos + 4) | 0;
          const res$$13 = new _Types.FSharpRef(true);
          const fin$$3 = new _Types.FSharpRef(false);
          const n$$19 = new _Types.FSharpRef(0);

          while (!fin$$3.contents) {
            const c$$8 = seekReadByteAsInt32(mdv$$114, pos + 8 + n$$19.contents) | 0;

            if (c$$8 === 0) {
              fin$$3.contents = true;
            } else if (n$$19.contents >= name$$3.length ? true : c$$8 !== name$$3[n$$19.contents]) {
              res$$13.contents = false;
            }

            void n$$19.contents++;
          }

          if (res$$13.contents) {
            return [offset$$4 + metadataPhysLoc, length];
          } else {
            i$$39 = i$$39 + 1;
            pos = align(4, pos + 8 + n$$19.contents);
            continue look$$1;
          }
        }
      }
    };

    return look$$1(0, streamHeadersStart);
  };

  const findStream = function findStream(name$$4) {
    const matchValue$$28 = tryFindStream(name$$4);

    if (matchValue$$28 != null) {
      const positions = matchValue$$28;
      return positions;
    } else {
      return [0, 0];
    }
  };

  let patternInput$$156;
  const matchValue$$29 = tryFindStream(new Int32Array([35, 126]));

  if (matchValue$$29 == null) {
    const matchValue$$30 = tryFindStream(new Int32Array([35, 45]));

    if (matchValue$$30 == null) {
      const firstStreamOffset = seekReadInt32(mdv$$114, streamHeadersStart + 0) | 0;
      const firstStreamLength = seekReadInt32(mdv$$114, streamHeadersStart + 4) | 0;
      patternInput$$156 = [firstStreamOffset, firstStreamLength];
    } else {
      const res$$15 = matchValue$$30;
      patternInput$$156 = res$$15;
    }
  } else {
    const res$$14 = matchValue$$29;
    patternInput$$156 = res$$14;
  }

  const patternInput$$157 = findStream(new Int32Array([35, 83, 116, 114, 105, 110, 103, 115]));
  const patternInput$$158 = findStream(new Int32Array([35, 85, 83]));
  const patternInput$$159 = findStream(new Int32Array([35, 71, 85, 73, 68]));
  const patternInput$$160 = findStream(new Int32Array([35, 66, 108, 111, 98]));
  const tableKinds = [kindModule, kindTypeRef, kindTypeDef, kindIllegal, kindFieldDef, kindIllegal, kindMethodDef, kindIllegal, kindParam, kindInterfaceImpl, kindMemberRef, kindConstant, kindCustomAttribute, kindFieldMarshal, kindDeclSecurity, kindClassLayout, kindFieldLayout, kindStandAloneSig, kindEventMap, kindIllegal, kindEvent, kindPropertyMap, kindIllegal, kindProperty, kindMethodSemantics, kindMethodImpl, kindModuleRef, kindTypeSpec, kindImplMap, kindFieldRVA, kindIllegal, kindIllegal, kindAssembly, kindIllegal, kindIllegal, kindAssemblyRef, kindIllegal, kindIllegal, kindFileRef, kindExportedType, kindManifestResource, kindNested, kindGenericParam_v2_0, kindMethodSpec, kindGenericParamConstraint, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal, kindIllegal];
  const heapSizes = seekReadByteAsInt32(mdv$$114, patternInput$$156[0] + 6) | 0;
  const valid = seekReadInt64(mdv$$114, patternInput$$156[0] + 8);
  const sorted = seekReadInt64(mdv$$114, patternInput$$156[0] + 16);
  let patternInput$$161;
  const present = new _Types.FSharpRef((0, _Types.L)());
  const numRows$$4 = (0, _Array.fill)(new Int32Array(64), 0, 64, 0);
  const prevNumRowIdx = new _Types.FSharpRef(patternInput$$156[0] + 24);

  for (let i$$40 = 0; i$$40 <= 63; i$$40++) {
    if (!(0, _Long.equals)((0, _Long.op_BitwiseAnd)(valid, (0, _Long.op_LeftShift)((0, _Long.fromInteger)(1, false, 2), i$$40)), (0, _Long.fromInteger)(0, false, 2))) {
      present.contents = (0, _Types.L)(i$$40, present.contents);
      numRows$$4[i$$40] = seekReadInt32(mdv$$114, prevNumRowIdx.contents);
      prevNumRowIdx.contents = prevNumRowIdx.contents + 4;
    }
  }

  patternInput$$161 = [(0, _List.reverse)(present.contents), numRows$$4, prevNumRowIdx.contents];

  const getNumRows = function getNumRows(tab$$16) {
    return patternInput$$161[1][(0, _ilbinary.TableName$$get_Index)(tab$$16)];
  };

  const numTables = (0, _List.length)(patternInput$$161[0]) | 0;
  const stringsBigness = (heapSizes & 1) !== 0;
  const guidsBigness = (heapSizes & 2) !== 0;
  const blobsBigness = (heapSizes & 4) !== 0;

  if (logging) {
    (0, _ildiag.dprintn)(fileName$$1 + ": numTables = " + (0, _Util.int32ToString)(numTables));
  }

  if (logging ? stringsBigness : false) {
    (0, _ildiag.dprintn)(fileName$$1 + ": strings are big");
  }

  if (logging ? blobsBigness : false) {
    (0, _ildiag.dprintn)(fileName$$1 + ": blobs are big");
  }

  const tableBigness = (0, _Array.map)(function (n$$20) {
    return n$$20 >= 65536;
  }, patternInput$$161[1], Array);

  const codedBigness = function codedBigness(nbits$$2, tab$$17) {
    const rows = getNumRows(tab$$17) | 0;
    return rows >= (0, _illib.op_GreaterGreaterGreaterAmp)(65536, nbits$$2);
  };

  const tdorBigness = (codedBigness(2, _ilbinary.TableNames$$$TypeDef) ? true : codedBigness(2, _ilbinary.TableNames$$$TypeRef)) ? true : codedBigness(2, _ilbinary.TableNames$$$TypeSpec);
  const tomdBigness = codedBigness(1, _ilbinary.TableNames$$$TypeDef) ? true : codedBigness(1, _ilbinary.TableNames$$$Method);
  const hcBigness = (codedBigness(2, _ilbinary.TableNames$$$Field) ? true : codedBigness(2, _ilbinary.TableNames$$$Param)) ? true : codedBigness(2, _ilbinary.TableNames$$$Property);
  const hcaBigness = ((((((((((((((((((((codedBigness(5, _ilbinary.TableNames$$$Method) ? true : codedBigness(5, _ilbinary.TableNames$$$Field)) ? true : codedBigness(5, _ilbinary.TableNames$$$TypeRef)) ? true : codedBigness(5, _ilbinary.TableNames$$$TypeDef)) ? true : codedBigness(5, _ilbinary.TableNames$$$Param)) ? true : codedBigness(5, _ilbinary.TableNames$$$InterfaceImpl)) ? true : codedBigness(5, _ilbinary.TableNames$$$MemberRef)) ? true : codedBigness(5, _ilbinary.TableNames$$$Module)) ? true : codedBigness(5, _ilbinary.TableNames$$$Permission)) ? true : codedBigness(5, _ilbinary.TableNames$$$Property)) ? true : codedBigness(5, _ilbinary.TableNames$$$Event)) ? true : codedBigness(5, _ilbinary.TableNames$$$StandAloneSig)) ? true : codedBigness(5, _ilbinary.TableNames$$$ModuleRef)) ? true : codedBigness(5, _ilbinary.TableNames$$$TypeSpec)) ? true : codedBigness(5, _ilbinary.TableNames$$$Assembly)) ? true : codedBigness(5, _ilbinary.TableNames$$$AssemblyRef)) ? true : codedBigness(5, _ilbinary.TableNames$$$File)) ? true : codedBigness(5, _ilbinary.TableNames$$$ExportedType)) ? true : codedBigness(5, _ilbinary.TableNames$$$ManifestResource)) ? true : codedBigness(5, _ilbinary.TableNames$$$GenericParam)) ? true : codedBigness(5, _ilbinary.TableNames$$$GenericParamConstraint)) ? true : codedBigness(5, _ilbinary.TableNames$$$MethodSpec);
  const hfmBigness = codedBigness(1, _ilbinary.TableNames$$$Field) ? true : codedBigness(1, _ilbinary.TableNames$$$Param);
  const hdsBigness = (codedBigness(2, _ilbinary.TableNames$$$TypeDef) ? true : codedBigness(2, _ilbinary.TableNames$$$Method)) ? true : codedBigness(2, _ilbinary.TableNames$$$Assembly);
  const mrpBigness = ((codedBigness(3, _ilbinary.TableNames$$$TypeRef) ? true : codedBigness(3, _ilbinary.TableNames$$$ModuleRef)) ? true : codedBigness(3, _ilbinary.TableNames$$$Method)) ? true : codedBigness(3, _ilbinary.TableNames$$$TypeSpec);
  const hsBigness = codedBigness(1, _ilbinary.TableNames$$$Event) ? true : codedBigness(1, _ilbinary.TableNames$$$Property);
  const mdorBigness = codedBigness(1, _ilbinary.TableNames$$$Method) ? true : codedBigness(1, _ilbinary.TableNames$$$MemberRef);
  const mfBigness = codedBigness(1, _ilbinary.TableNames$$$Field) ? true : codedBigness(1, _ilbinary.TableNames$$$Method);
  const iBigness = (codedBigness(2, _ilbinary.TableNames$$$File) ? true : codedBigness(2, _ilbinary.TableNames$$$AssemblyRef)) ? true : codedBigness(2, _ilbinary.TableNames$$$ExportedType);
  const catBigness = codedBigness(3, _ilbinary.TableNames$$$Method) ? true : codedBigness(3, _ilbinary.TableNames$$$MemberRef);
  const rsBigness = ((codedBigness(2, _ilbinary.TableNames$$$Module) ? true : codedBigness(2, _ilbinary.TableNames$$$ModuleRef)) ? true : codedBigness(2, _ilbinary.TableNames$$$AssemblyRef)) ? true : codedBigness(2, _ilbinary.TableNames$$$TypeRef);

  const rowKindSize = function rowKindSize(_arg1$$9) {
    const kinds = _arg1$$9.fields[0];
    return (0, _List.sumBy)(function projection$$1(x$$222) {
      switch (x$$222.tag) {
        case 1:
          {
            return 4;
          }

        case 2:
          {
            return 1;
          }

        case 3:
          {
            return 4;
          }

        case 4:
          {
            if (guidsBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 5:
          {
            if (blobsBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 6:
          {
            if (stringsBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 7:
          {
            const tab$$18 = x$$222.fields[0];

            if (tableBigness[(0, _ilbinary.TableName$$get_Index)(tab$$18)]) {
              return 4;
            } else {
              return 2;
            }
          }

        case 8:
          {
            if (tdorBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 9:
          {
            if (tomdBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 10:
          {
            if (hcBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 11:
          {
            if (hcaBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 12:
          {
            if (hfmBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 13:
          {
            if (hdsBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 14:
          {
            if (mrpBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 15:
          {
            if (hsBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 16:
          {
            if (mdorBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 17:
          {
            if (mfBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 18:
          {
            if (iBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 19:
          {
            if (catBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        case 20:
          {
            if (rsBigness) {
              return 4;
            } else {
              return 2;
            }
          }

        default:
          {
            return 2;
          }
      }
    }, kinds, {
      GetZero() {
        return 0;
      },

      Add($x$$14, $y$$15) {
        return $x$$14 + $y$$15;
      }

    }) | 0;
  };

  const tableRowSizes = (0, _Array.map)(rowKindSize, tableKinds, Int32Array);
  let tablePhysLocations;
  const res$$16 = (0, _Array.fill)(new Int32Array(64), 0, 64, 0);
  let prevTablePhysLoc = patternInput$$161[2] | 0;

  for (let i$$41 = 0; i$$41 <= 63; i$$41++) {
    res$$16[i$$41] = prevTablePhysLoc;
    prevTablePhysLoc = prevTablePhysLoc + patternInput$$161[1][i$$41] * tableRowSizes[i$$41];
  }

  tablePhysLocations = res$$16;
  const inbase = (0, _filename.fileNameOfPath)(fileName$$1) + ": ";
  const cacheAssemblyRef = mkCacheInt32(reduceMemoryUsage, inbase, "ILAssemblyRef", getNumRows(_ilbinary.TableNames$$$AssemblyRef));
  const cacheMethodSpecAsMethodData = mkCacheGeneric(reduceMemoryUsage, inbase, "MethodSpecAsMethodData", ~~(getNumRows(_ilbinary.TableNames$$$MethodSpec) / 20) + 1);
  const cacheMemberRefAsMemberData = mkCacheGeneric(reduceMemoryUsage, inbase, "MemberRefAsMemberData", ~~(getNumRows(_ilbinary.TableNames$$$MemberRef) / 20) + 1);
  const cacheCustomAttr = mkCacheGeneric(reduceMemoryUsage, inbase, "CustomAttr", ~~(getNumRows(_ilbinary.TableNames$$$CustomAttribute) / 50) + 1);
  const cacheTypeRef = mkCacheInt32(reduceMemoryUsage, inbase, "ILTypeRef", ~~(getNumRows(_ilbinary.TableNames$$$TypeRef) / 20) + 1);
  const cacheTypeRefAsType = mkCacheGeneric(reduceMemoryUsage, inbase, "TypeRefAsType", ~~(getNumRows(_ilbinary.TableNames$$$TypeRef) / 20) + 1);
  const cacheBlobHeapAsPropertySig = mkCacheGeneric(reduceMemoryUsage, inbase, "BlobHeapAsPropertySig", ~~(getNumRows(_ilbinary.TableNames$$$Property) / 20) + 1);
  const cacheBlobHeapAsFieldSig = mkCacheGeneric(reduceMemoryUsage, inbase, "BlobHeapAsFieldSig", ~~(getNumRows(_ilbinary.TableNames$$$Field) / 20) + 1);
  const cacheBlobHeapAsMethodSig = mkCacheGeneric(reduceMemoryUsage, inbase, "BlobHeapAsMethodSig", ~~(getNumRows(_ilbinary.TableNames$$$Method) / 20) + 1);
  const cacheTypeDefAsType = mkCacheGeneric(reduceMemoryUsage, inbase, "TypeDefAsType", ~~(getNumRows(_ilbinary.TableNames$$$TypeDef) / 20) + 1);
  const cacheMethodDefAsMethodData = mkCacheInt32(reduceMemoryUsage, inbase, "MethodDefAsMethodData", ~~(getNumRows(_ilbinary.TableNames$$$Method) / 20) + 1);
  const cacheGenericParams = mkCacheGeneric(reduceMemoryUsage, inbase, "GenericParams", ~~(getNumRows(_ilbinary.TableNames$$$GenericParam) / 20) + 1);
  const cacheFieldDefAsFieldSpec = mkCacheInt32(reduceMemoryUsage, inbase, "FieldDefAsFieldSpec", ~~(getNumRows(_ilbinary.TableNames$$$Field) / 20) + 1);
  const cacheUserStringHeap = mkCacheInt32(reduceMemoryUsage, inbase, "UserStringHeap", ~~(patternInput$$158[1] / 20) + 1);
  const cacheStringHeap = mkCacheInt32(false, inbase, "string heap", ~~(patternInput$$157[1] / 50) + 1);
  const cacheBlobHeap = mkCacheInt32(reduceMemoryUsage, inbase, "blob heap", ~~(patternInput$$160[1] / 50) + 1);
  const cacheNestedRow = mkCacheInt32(reduceMemoryUsage, inbase, "Nested Table Rows", ~~(getNumRows(_ilbinary.TableNames$$$Nested) / 20) + 1);
  const cacheConstantRow = mkCacheInt32(reduceMemoryUsage, inbase, "Constant Rows", ~~(getNumRows(_ilbinary.TableNames$$$Constant) / 20) + 1);
  const cacheMethodSemanticsRow = mkCacheInt32(reduceMemoryUsage, inbase, "MethodSemantics Rows", ~~(getNumRows(_ilbinary.TableNames$$$MethodSemantics) / 20) + 1);
  const cacheTypeDefRow = mkCacheInt32(reduceMemoryUsage, inbase, "ILTypeDef Rows", ~~(getNumRows(_ilbinary.TableNames$$$TypeDef) / 20) + 1);

  const rowAddr$$1 = function rowAddr$$1(tab$$19, idx$$156) {
    return tablePhysLocations[(0, _ilbinary.TableName$$get_Index)(tab$$19)] + (idx$$156 - 1) * tableRowSizes[(0, _ilbinary.TableName$$get_Index)(tab$$19)];
  };

  const ctxtH$$26 = new _Types.FSharpRef(null);
  let ctxt$$201;
  const entryPointToken = pectxtEager$$2.entryPointToken;
  ctxt$$201 = new ILMetadataReader(ilGlobals, sorted, mdfile, pectxtCaptured, entryPointToken, pectxtCaptured != null ? (pectxt$$7 = pectxtCaptured, getDataEndPointsDelayed(pectxt$$7, ctxtH$$26)) : (0, _illib.notlazy)((0, _Types.L)()), fileName$$1, getNumRows, patternInput$$158[0], patternInput$$157[0], patternInput$$160[0], patternInput$$160[1], cacheUserStringHeap(function (idx$$157) {
    return readUserStringHeapUncached(ctxtH$$26, idx$$157);
  }), (0, _illib.Tables$$$memoize)(function (x$$223) {
    return x$$223;
  }), cacheStringHeap(function (idx$$158) {
    return readStringHeapUncached(ctxtH$$26, idx$$158);
  }), cacheBlobHeap(function (idx$$159) {
    return readBlobHeapUncached(ctxtH$$26, idx$$159);
  }), patternInput$$159[0], rowAddr$$1, tableBigness, rsBigness, tdorBigness, tomdBigness, hcBigness, hcaBigness, hfmBigness, hdsBigness, mrpBigness, hsBigness, mdorBigness, mfBigness, iBigness, catBigness, stringsBigness, guidsBigness, blobsBigness, cacheNestedRow(function (idx$$160) {
    return seekReadNestedRowUncached(ctxtH$$26, idx$$160);
  }), cacheConstantRow(function (idx$$161) {
    return seekReadConstantRowUncached(ctxtH$$26, idx$$161);
  }), cacheMethodSemanticsRow(function (idx$$162) {
    return seekReadMethodSemanticsRowUncached(ctxtH$$26, idx$$162);
  }), cacheTypeDefRow(function (idx$$163) {
    return seekReadTypeDefRowUncached(ctxtH$$26, idx$$163);
  }), cacheAssemblyRef(function (idx$$164) {
    return seekReadAssemblyRefUncached(ctxtH$$26, idx$$164);
  }), cacheMethodSpecAsMethodData(function (arg10$0040$$9) {
    return seekReadMethodSpecAsMethodDataUncached(ctxtH$$26, arg10$0040$$9);
  }), cacheMemberRefAsMemberData(function (arg10$0040$$10) {
    return seekReadMemberRefAsMethodDataUncached(ctxtH$$26, arg10$0040$$10);
  }), function seekReadMemberRefAsFieldSpec$$1(arg10$0040$$11) {
    return seekReadMemberRefAsFieldSpecUncached(ctxtH$$26, arg10$0040$$11);
  }, cacheCustomAttr(function (arg10$0040$$12) {
    return seekReadCustomAttrUncached(ctxtH$$26, arg10$0040$$12);
  }), cacheTypeRef(function (idx$$165) {
    return seekReadTypeRefUncached(ctxtH$$26, idx$$165);
  }), cacheTypeRefAsType(function (arg10$0040$$18) {
    return seekReadTypeRefAsTypeUncached(ctxtH$$26, arg10$0040$$18);
  }), cacheBlobHeapAsPropertySig(function (arg10$0040$$13) {
    return readBlobHeapAsPropertySigUncached(ctxtH$$26, arg10$0040$$13);
  }), cacheBlobHeapAsFieldSig(function (arg10$0040$$14) {
    return readBlobHeapAsFieldSigUncached(ctxtH$$26, arg10$0040$$14);
  }), cacheBlobHeapAsMethodSig(function (arg10$0040$$15) {
    return readBlobHeapAsMethodSigUncached(ctxtH$$26, arg10$0040$$15);
  }), function readBlobHeapAsLocalsSig$$1(arg10$0040$$16) {
    return readBlobHeapAsLocalsSigUncached(ctxtH$$26, arg10$0040$$16);
  }, cacheTypeDefAsType(function (arg10$0040$$17) {
    return seekReadTypeDefAsTypeUncached(ctxtH$$26, arg10$0040$$17);
  }), cacheMethodDefAsMethodData(function (idx$$166) {
    return seekReadMethodDefAsMethodDataUncached(ctxtH$$26, idx$$166);
  }), cacheGenericParams(function (arg10$0040$$19) {
    return seekReadGenericParamsUncached(ctxtH$$26, arg10$0040$$19);
  }), cacheFieldDefAsFieldSpec(function (idx$$167) {
    return seekReadFieldDefAsFieldSpecUncached(ctxtH$$26, idx$$167);
  }), customAttrsReader(ctxtH$$26, _ilbinary.hca_Module), customAttrsReader(ctxtH$$26, _ilbinary.hca_Assembly), customAttrsReader(ctxtH$$26, _ilbinary.hca_TypeDef), customAttrsReader(ctxtH$$26, _ilbinary.hca_GenericParam), customAttrsReader(ctxtH$$26, _ilbinary.hca_FieldDef), customAttrsReader(ctxtH$$26, _ilbinary.hca_MethodDef), customAttrsReader(ctxtH$$26, _ilbinary.hca_ParamDef), customAttrsReader(ctxtH$$26, _ilbinary.hca_Event), customAttrsReader(ctxtH$$26, _ilbinary.hca_Property), customAttrsReader(ctxtH$$26, _ilbinary.hca_ManifestResource), customAttrsReader(ctxtH$$26, _ilbinary.hca_ExportedType), securityDeclsReader(ctxtH$$26, _ilbinary.hds_TypeDef), securityDeclsReader(ctxtH$$26, _ilbinary.hds_MethodDef), securityDeclsReader(ctxtH$$26, _ilbinary.hds_Assembly), typeDefReader(ctxtH$$26));
  ctxtH$$26.contents = ctxt$$201;
  let ilModule;
  const arg31$0040 = peinfo$$1[1];
  ilModule = seekReadModule(ctxt$$201, pectxtEager$$2, pevEager$$2, peinfo$$1[0], arg31$0040, peinfo$$1[2], peinfo$$1[3], peinfo$$1[4], peinfo$$1[5], peinfo$$1[6], peinfo$$1[7], peinfo$$1[8], peinfo$$1[9], peinfo$$1[10], peinfo$$1[11], (0, _Encoding.get_UTF8)().getString(ilMetadataVersion$$1, 0, ilMetadataVersion$$1.length), 1);
  const ilAssemblyRefs = new _Util.Lazy(function () {
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (i$$42) {
        return seekReadAssemblyRef(ctxt$$201, i$$42);
      }, (0, _Seq.rangeNumber)(1, 1, getNumRows(_ilbinary.TableNames$$$AssemblyRef)));
    }));
  });
  return [ilModule, ilAssemblyRefs];
}

function openPEFileReader(fileName$$2, pefile, pdbDirPath, noFileOnDisk) {
  const pev$$3 = pefile.GetView();
  const peSignaturePhysLoc = seekReadInt32(pev$$3, 60) | 0;
  const peFileHeaderPhysLoc = peSignaturePhysLoc + 4 | 0;
  const peOptionalHeaderPhysLoc = peFileHeaderPhysLoc + 20 | 0;
  const peSignature = seekReadInt32(pev$$3, peSignaturePhysLoc + 0) | 0;

  if (peSignature !== 17744) {
    (0, _String.toFail)((0, _String.printf)("not a PE file - bad magic PE number 0x%08x, is = %A"))(peSignature)(pev$$3);
  }

  const machine = seekReadUInt16AsInt32(pev$$3, peFileHeaderPhysLoc + 0) | 0;
  const numSections = seekReadUInt16AsInt32(pev$$3, peFileHeaderPhysLoc + 2) | 0;
  const optHeaderSize = seekReadUInt16AsInt32(pev$$3, peFileHeaderPhysLoc + 16) | 0;

  if (optHeaderSize !== 224 ? optHeaderSize !== 240 : false) {
    throw new Error("not a PE file - bad optional header size");
  }

  const x64adjust = optHeaderSize - 224 | 0;
  const only64$$1 = optHeaderSize === 240;
  const platform$$1 = machine === 512 ? new _il.ILPlatform(2, "IA64") : machine === 34404 ? new _il.ILPlatform(1, "AMD64") : new _il.ILPlatform(0, "X86");
  const sectionHeadersStartPhysLoc = peOptionalHeaderPhysLoc + optHeaderSize | 0;
  const flags$$37 = seekReadUInt16AsInt32(pev$$3, peFileHeaderPhysLoc + 18) | 0;
  const isDll$$1 = (flags$$37 & 8192) !== 0;

  const _textPhysSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 4) | 0;

  const _initdataPhysSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 8) | 0;

  const _uninitdataPhysSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 12) | 0;

  const _entrypointAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 16) | 0;

  const _textAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 20) | 0;

  const dataSegmentAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 24) | 0;
  const imageBaseReal$$1 = (only64$$1 ? dataSegmentAddr : seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 28)) | 0;
  const alignVirt$$1 = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 32) | 0;
  const alignPhys$$1 = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 36) | 0;

  const _osMajor = seekReadUInt16(pev$$3, peOptionalHeaderPhysLoc + 40);

  const _osMinor = seekReadUInt16(pev$$3, peOptionalHeaderPhysLoc + 42);

  const _userMajor = seekReadUInt16(pev$$3, peOptionalHeaderPhysLoc + 44);

  const _userMinor = seekReadUInt16(pev$$3, peOptionalHeaderPhysLoc + 46);

  const subsysMajor = seekReadUInt16AsInt32(pev$$3, peOptionalHeaderPhysLoc + 48) | 0;
  const subsysMinor = seekReadUInt16AsInt32(pev$$3, peOptionalHeaderPhysLoc + 50) | 0;

  const _imageEndAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 56) | 0;

  const _headerPhysSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 60) | 0;

  const subsys$$1 = seekReadUInt16(pev$$3, peOptionalHeaderPhysLoc + 68);
  let useHighEnthropyVA;
  const n$$21 = seekReadUInt16(pev$$3, peOptionalHeaderPhysLoc + 70);
  const highEnthropyVA = 32;
  useHighEnthropyVA = (n$$21 & highEnthropyVA) === highEnthropyVA;

  const _numDataDirectories = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 92 + x64adjust) | 0;

  const _importTableAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 104 + x64adjust) | 0;

  const _importTableSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 108 + x64adjust) | 0;

  const nativeResourcesAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 112 + x64adjust) | 0;
  const nativeResourcesSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 116 + x64adjust) | 0;

  const _importAddrTableAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 192 + x64adjust) | 0;

  const _importAddrTableSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 196 + x64adjust) | 0;

  const cliHeaderAddr = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 208 + x64adjust) | 0;

  const _cliHeaderSize = seekReadInt32(pev$$3, peOptionalHeaderPhysLoc + 212 + x64adjust) | 0;

  const sectionHeaders = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (i$$43) {
      const pos$$1 = sectionHeadersStartPhysLoc + i$$43 * 40 | 0;
      const virtSize = seekReadInt32(pev$$3, pos$$1 + 8) | 0;
      const virtAddr$$1 = seekReadInt32(pev$$3, pos$$1 + 12) | 0;
      const physLoc = seekReadInt32(pev$$3, pos$$1 + 20) | 0;
      return (0, _Seq.singleton)([virtAddr$$1, virtSize, physLoc]);
    }, (0, _Seq.rangeNumber)(0, 1, numSections - 1));
  }));

  const findSectionHeader = function findSectionHeader(addr$$82) {
    const look$$2 = function look$$2(i$$44, pos$$2) {
      look$$2: while (true) {
        if (i$$44 >= numSections) {
          return 0;
        } else {
          const virtSize$$1 = seekReadInt32(pev$$3, pos$$2 + 8) | 0;
          const virtAddr$$2 = seekReadInt32(pev$$3, pos$$2 + 12) | 0;

          if (addr$$82 >= virtAddr$$2 ? addr$$82 < virtAddr$$2 + virtSize$$1 : false) {
            return pos$$2 | 0;
          } else {
            i$$44 = i$$44 + 1;
            pos$$2 = pos$$2 + 40;
            continue look$$2;
          }
        }
      }
    };

    return look$$2(0, sectionHeadersStartPhysLoc) | 0;
  };

  const textHeaderStart = findSectionHeader(cliHeaderAddr) | 0;
  const dataHeaderStart = findSectionHeader(dataSegmentAddr) | 0;

  const _textSize = (textHeaderStart === 0 ? 0 : seekReadInt32(pev$$3, textHeaderStart + 8)) | 0;

  const _textAddr$$1 = (textHeaderStart === 0 ? 0 : seekReadInt32(pev$$3, textHeaderStart + 12)) | 0;

  const textSegmentPhysicalSize = (textHeaderStart === 0 ? 0 : seekReadInt32(pev$$3, textHeaderStart + 16)) | 0;
  const textSegmentPhysicalLoc = (textHeaderStart === 0 ? 0 : seekReadInt32(pev$$3, textHeaderStart + 20)) | 0;
  const dataSegmentPhysicalSize = (dataHeaderStart === 0 ? 0 : seekReadInt32(pev$$3, dataHeaderStart + 16)) | 0;
  const dataSegmentPhysicalLoc = (dataHeaderStart === 0 ? 0 : seekReadInt32(pev$$3, dataHeaderStart + 20)) | 0;

  const anyV2P = function anyV2P(tupledArg$$43) {
    const pev$$4 = pefile.GetView();

    const look$$3 = function look$$3(i$$45, pos$$3) {
      look$$3: while (true) {
        if (i$$45 >= numSections) {
          throw new Error(fileName$$2 + ": bad " + tupledArg$$43[0] + ", rva " + (0, _Util.int32ToString)(tupledArg$$43[1]));
          return 0;
        } else {
          const virtSize$$2 = seekReadInt32(pev$$4, pos$$3 + 8) | 0;
          const virtAddr$$3 = seekReadInt32(pev$$4, pos$$3 + 12) | 0;
          const physLoc$$1 = seekReadInt32(pev$$4, pos$$3 + 20) | 0;

          if (tupledArg$$43[1] >= virtAddr$$3 ? tupledArg$$43[1] < virtAddr$$3 + virtSize$$2 : false) {
            return tupledArg$$43[1] - virtAddr$$3 + physLoc$$1 | 0;
          } else {
            i$$45 = i$$45 + 1;
            pos$$3 = pos$$3 + 40;
            continue look$$3;
          }
        }
      }
    };

    return look$$3(0, sectionHeadersStartPhysLoc) | 0;
  };

  const cliHeaderPhysLoc = anyV2P(["cli header", cliHeaderAddr]) | 0;

  const _majorRuntimeVersion = seekReadUInt16(pev$$3, cliHeaderPhysLoc + 4);

  const _minorRuntimeVersion = seekReadUInt16(pev$$3, cliHeaderPhysLoc + 6);

  const metadataAddr = seekReadInt32(pev$$3, cliHeaderPhysLoc + 8) | 0;
  const metadataSize = seekReadInt32(pev$$3, cliHeaderPhysLoc + 12) | 0;
  const cliFlags = seekReadInt32(pev$$3, cliHeaderPhysLoc + 16) | 0;
  const ilOnly$$1 = (cliFlags & 1) !== 0;
  const only32$$1 = (cliFlags & 2) !== 0;
  const is32bitpreferred$$1 = (cliFlags & 131075) !== 0;

  const _strongnameSigned = (cliFlags & 8) !== 0;

  const _trackdebugdata = (cliFlags & 65536) !== 0;

  const entryPointToken$$1 = seekReadUncodedToken(pev$$3, cliHeaderPhysLoc + 20);
  const resourcesAddr = seekReadInt32(pev$$3, cliHeaderPhysLoc + 24) | 0;
  const resourcesSize = seekReadInt32(pev$$3, cliHeaderPhysLoc + 28) | 0;
  const strongnameAddr = seekReadInt32(pev$$3, cliHeaderPhysLoc + 32) | 0;

  const _strongnameSize = seekReadInt32(pev$$3, cliHeaderPhysLoc + 36) | 0;

  const vtableFixupsAddr = seekReadInt32(pev$$3, cliHeaderPhysLoc + 40) | 0;

  const _vtableFixupsSize = seekReadInt32(pev$$3, cliHeaderPhysLoc + 44) | 0;

  if (logging) {
    (0, _ildiag.dprintn)(fileName$$2 + ": metadataAddr = " + (0, _Util.int32ToString)(metadataAddr));
  }

  if (logging) {
    (0, _ildiag.dprintn)(fileName$$2 + ": resourcesAddr = " + (0, _Util.int32ToString)(resourcesAddr));
  }

  if (logging) {
    (0, _ildiag.dprintn)(fileName$$2 + ": resourcesSize = " + (0, _Util.int32ToString)(resourcesSize));
  }

  if (logging) {
    (0, _ildiag.dprintn)(fileName$$2 + ": nativeResourcesAddr = " + (0, _Util.int32ToString)(nativeResourcesAddr));
  }

  if (logging) {
    (0, _ildiag.dprintn)(fileName$$2 + ": nativeResourcesSize = " + (0, _Util.int32ToString)(nativeResourcesSize));
  }

  const metadataPhysLoc$$1 = anyV2P(["metadata", metadataAddr]) | 0;
  let pdb;
  pdbDirPath;
  pdb = null;
  const pectxt$$8 = new PEReader(fileName$$2, pdb, entryPointToken$$1, pefile, textSegmentPhysicalLoc, textSegmentPhysicalSize, dataSegmentPhysicalLoc, dataSegmentPhysicalSize, anyV2P, metadataAddr, sectionHeaders, nativeResourcesAddr, nativeResourcesSize, resourcesAddr, strongnameAddr, vtableFixupsAddr, noFileOnDisk);
  const peinfo$$2 = [subsys$$1, [subsysMajor, subsysMinor], useHighEnthropyVA, ilOnly$$1, only32$$1, is32bitpreferred$$1, only64$$1, platform$$1, isDll$$1, alignVirt$$1, alignPhys$$1, imageBaseReal$$1];
  return [metadataPhysLoc$$1, metadataSize, peinfo$$2, pectxt$$8, pev$$3, pdb];
}

function openPE(fileName$$3, pefile$$1, pdbDirPath$$1, reduceMemoryUsage$$1, ilGlobals$$1, noFileOnDisk$$1) {
  const patternInput$$162 = openPEFileReader(fileName$$3, pefile$$1, pdbDirPath$$1, noFileOnDisk$$1);
  const patternInput$$163 = openMetadataReader(fileName$$3, pefile$$1, patternInput$$162[0], patternInput$$162[2], patternInput$$162[3], patternInput$$162[4], patternInput$$162[3], reduceMemoryUsage$$1, ilGlobals$$1);
  return [patternInput$$163[0], patternInput$$163[1], patternInput$$162[5]];
}

function openPEMetadataOnly(fileName$$4, peinfo$$4, pectxtEager$$3, pev$$6, mdfile$$1, reduceMemoryUsage$$2, ilGlobals$$2) {
  return openMetadataReader(fileName$$4, mdfile$$1, 0, peinfo$$4, pectxtEager$$3, pev$$6, null, reduceMemoryUsage$$2, ilGlobals$$2);
}

function ClosePdbReader(pdb$$2) {
  pdb$$2;
}

const MetadataOnlyFlag = (0, _Types.declare)(function MetadataOnlyFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MetadataOnlyFlag = MetadataOnlyFlag;
const ReduceMemoryFlag = (0, _Types.declare)(function ReduceMemoryFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ReduceMemoryFlag = ReduceMemoryFlag;
const ILReaderOptions = (0, _Types.declare)(function ILReaderOptions(arg1, arg2, arg3, arg4, arg5) {
  this.pdbDirPath = arg1;
  this.ilGlobals = arg2;
  this.reduceMemoryUsage = arg3;
  this.metadataOnly = arg4;
  this.tryGetMetadataSnapshot = arg5;
}, _Types.Record);
exports.ILReaderOptions = ILReaderOptions;
const ILModuleReaderImpl = (0, _Types.declare)(function ILModuleReaderImpl(ilModule$$2, ilAssemblyRefs$$2, dispose) {
  const $this$$16 = this;
  $this$$16.ilModule = ilModule$$2;
  $this$$16.ilAssemblyRefs = ilAssemblyRefs$$2;
  $this$$16.dispose = dispose;
});
exports.ILModuleReaderImpl = ILModuleReaderImpl;

function ILModuleReaderImpl$$$$002Ector$$16CBF37C(ilModule$$2, ilAssemblyRefs$$2, dispose) {
  return this != null ? ILModuleReaderImpl.call(this, ilModule$$2, ilAssemblyRefs$$2, dispose) : new ILModuleReaderImpl(ilModule$$2, ilAssemblyRefs$$2, dispose);
}

Object.defineProperty(ILModuleReaderImpl.prototype, "ILModuleDef", {
  "get": function () {
    const x$$224 = this;
    return x$$224.ilModule;
  }
});
Object.defineProperty(ILModuleReaderImpl.prototype, "ILAssemblyRefs", {
  "get": function () {
    const x$$225 = this;
    return x$$225.ilAssemblyRefs.Value;
  }
});

ILModuleReaderImpl.prototype.Dispose = function () {
  const x$$226 = this;
  x$$226.dispose();
};

function OpenILModuleReaderFromBytes(fileName$$5, bytes$$44, opts) {
  const pefile$$2 = ByteFile$$$$002Ector$$26C6D9B9(fileName$$5, bytes$$44);
  const patternInput$$164 = openPE(fileName$$5, pefile$$2, opts.pdbDirPath, (0, _Util.equals)(opts.reduceMemoryUsage, new ReduceMemoryFlag(0, "Yes")), opts.ilGlobals, true);
  return ILModuleReaderImpl$$$$002Ector$$16CBF37C(patternInput$$164[0], patternInput$$164[1], function () {
    ClosePdbReader(patternInput$$164[2]);
  });
}