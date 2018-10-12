#load "fable.fsx"
open System.Diagnostics.CodeAnalysis

[<SuppressMessage("NameConventions", "*")>]
module Base =
    open System
    open Fable.Core
    open Fable.Import.JS

    module NodeJS =
        type [<AllowNullLiteral>] Console =
            abstract ``assert``: value: obj * ?message: string * [<ParamArray>] optionalParams: obj[] -> unit
            abstract dir: obj: obj * ?options: obj -> unit
            abstract error: ?message: obj * [<ParamArray>] optionalParams: obj[] -> unit
            abstract info: ?message: obj * [<ParamArray>] optionalParams: obj[] -> unit
            abstract log: ?message: obj * [<ParamArray>] optionalParams: obj[] -> unit
            abstract time: label: string -> unit
            abstract timeEnd: label: string -> unit
            abstract trace: ?message: obj * [<ParamArray>] optionalParams: obj[] -> unit
            abstract warn: ?message: obj * [<ParamArray>] optionalParams: obj[] -> unit

        type [<AllowNullLiteral>] Error =
            abstract name: string with get, set
            abstract stack: string with get, set
            abstract message: string with get, set

        type [<AllowNullLiteral>] NodeRequireFunction =
            [<Emit("$0($1...)")>] abstract Invoke: id: string -> obj

        type [<AllowNullLiteral>] NodeRequire =
            inherit NodeRequireFunction
            abstract cache: obj with get, set
            abstract extensions: obj with get, set
            abstract main: NodeModule with get, set
            abstract resolve: id: string -> string

        and [<AllowNullLiteral>] NodeModule =
            abstract exports: obj with get, set
            abstract require: NodeRequireFunction with get, set
            abstract id: string with get, set
            abstract filename: string with get, set
            abstract loaded: bool with get, set
            abstract parent: U2<NodeModule, obj> with get, set
            abstract ``null``: obj with get, set
            abstract children: ResizeArray<NodeModule> with get, set

        type [<AllowNullLiteral>] IterableIterator<'T> =
            interface end

        type [<AllowNullLiteral>] ErrnoException =
            inherit Error
            abstract errno: float option with get, set
            abstract code: string option with get, set
            abstract path: string option with get, set
            abstract syscall: string option with get, set
            abstract stack: string option with get, set

        type [<AllowNullLiteral>] ProcessVersions =
            abstract http_parser: string with get, set
            abstract node: string with get, set
            abstract v8: string with get, set
            abstract ares: string with get, set
            abstract uv: string with get, set
            abstract zlib: string with get, set
            abstract modules: string with get, set
            abstract openssl: string with get, set

        type [<AllowNullLiteral>] MemoryUsage =
            abstract rss: float with get, set
            abstract heapTotal: float with get, set
            abstract heapUsed: float with get, set

        type [<AllowNullLiteral>] CpuUsage =
            abstract user: float with get, set
            abstract system: float with get, set

        type [<StringEnum>] Arch =
            | Arm | Arm64 | Ia32 | Mips | Mipsel | Ppc | Ppc64 | S390 | S390x | X32 | X64 | X86

        type [<StringEnum>] Platform =
            | Aix | Android | Darwin | Freebsd | Linux | Openbsd | Sunos | Win32

        type [<AllowNullLiteral>] Timer =
            abstract ref: unit -> unit
            abstract unref: unit -> unit

        type [<AllowNullLiteral>] Global =
            abstract Array: obj with get, set
            abstract ArrayBuffer: obj with get, set
            abstract Boolean: obj with get, set
            abstract Buffer: obj with get, set
            abstract DataView: obj with get, set
            abstract Date: obj with get, set
            abstract Error: obj with get, set
            abstract EvalError: obj with get, set
            abstract Float32Array: obj with get, set
            abstract Float64Array: obj with get, set
            abstract Function: obj with get, set
            abstract GLOBAL: Global with get, set
            abstract Infinity: obj with get, set
            abstract Int16Array: obj with get, set
            abstract Int32Array: obj with get, set
            abstract Int8Array: obj with get, set
            abstract Intl: obj with get, set
            abstract JSON: obj with get, set
            abstract Map: MapConstructor with get, set
            abstract Math: obj with get, set
            abstract NaN: obj with get, set
            abstract Number: obj with get, set
            abstract Object: obj with get, set
            abstract Promise: Function with get, set
            abstract RangeError: obj with get, set
            abstract ReferenceError: obj with get, set
            abstract RegExp: obj with get, set
            abstract Set: SetConstructor with get, set
            abstract String: obj with get, set
            abstract Symbol: Function with get, set
            abstract SyntaxError: obj with get, set
            abstract TypeError: obj with get, set
            abstract URIError: obj with get, set
            abstract Uint16Array: obj with get, set
            abstract Uint32Array: obj with get, set
            abstract Uint8Array: obj with get, set
            abstract Uint8ClampedArray: Function with get, set
            abstract WeakMap: WeakMapConstructor with get, set
            abstract WeakSet: WeakSetConstructor with get, set
            abstract console: Console with get, set
            abstract decodeURI: obj with get, set
            abstract decodeURIComponent: obj with get, set
            abstract encodeURI: obj with get, set
            abstract encodeURIComponent: obj with get, set
            abstract escape: Func<string, string> with get, set
            abstract eval: obj with get, set
            abstract ``global``: Global with get, set
            abstract isFinite: obj with get, set
            abstract isNaN: obj with get, set
            abstract parseFloat: obj with get, set
            abstract parseInt: obj with get, set
            abstract root: Global with get, set
            abstract undefined: obj with get, set
            abstract unescape: Func<string, string> with get, set
            abstract gc: Func<unit, unit> with get, set
            abstract v8debug: obj option with get, set

[<SuppressMessage("NameConventions", "*")>]
module Buffer =
    open Fable.Core
    open Fable.Import.JS

    [<StringEnum>]
    type BufferEncoding =
        ///For 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
        | Ascii
        /// Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
        | Utf8
        /// 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
        | Utf16le
        /// Alias of 'utf16le'
        | Usc2
        /// Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.
        | Base64
        /// A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes)
        | Latin1
        /// Alias for 'latin1'.
        | Binary
        ///  Encode each byte as two hexadecimal characters.
        | Hex

    type Buffer =
        abstract write: string: string * ?offset: float * ?length: float * ?encoding: string -> float
        abstract toString: ?encoding: string * ?start: float * ?``end``: float -> string
        abstract toJSON: unit -> obj
        abstract equals: otherBuffer: Buffer -> bool
        abstract compare: otherBuffer: Buffer * ?targetStart: float * ?targetEnd: float * ?sourceStart: float * ?sourceEnd: float -> float
        abstract copy: targetBuffer: Buffer * ?targetStart: float * ?sourceStart: float * ?sourceEnd: float -> float
        abstract slice: ?start: float * ?``end``: float -> Buffer
        abstract writeUIntLE: value: float * offset: float * byteLength: float * ?noAssert: bool -> float
        abstract writeUIntBE: value: float * offset: float * byteLength: float * ?noAssert: bool -> float
        abstract writeIntLE: value: float * offset: float * byteLength: float * ?noAssert: bool -> float
        abstract writeIntBE: value: float * offset: float * byteLength: float * ?noAssert: bool -> float
        abstract readUIntLE: offset: float * byteLength: float * ?noAssert: bool -> float
        abstract readUIntBE: offset: float * byteLength: float * ?noAssert: bool -> float
        abstract readIntLE: offset: float * byteLength: float * ?noAssert: bool -> float
        abstract readIntBE: offset: float * byteLength: float * ?noAssert: bool -> float
        abstract readUInt8: offset: float * ?noAssert: bool -> float
        abstract readUInt16LE: offset: float * ?noAssert: bool -> float
        abstract readUInt16BE: offset: float * ?noAssert: bool -> float
        abstract readUInt32LE: offset: float * ?noAssert: bool -> float
        abstract readUInt32BE: offset: float * ?noAssert: bool -> float
        abstract readInt8: offset: float * ?noAssert: bool -> float
        abstract readInt16LE: offset: float * ?noAssert: bool -> float
        abstract readInt16BE: offset: float * ?noAssert: bool -> float
        abstract readInt32LE: offset: float * ?noAssert: bool -> float
        abstract readInt32BE: offset: float * ?noAssert: bool -> float
        abstract readFloatLE: offset: float * ?noAssert: bool -> float
        abstract readFloatBE: offset: float * ?noAssert: bool -> float
        abstract readDoubleLE: offset: float * ?noAssert: bool -> float
        abstract readDoubleBE: offset: float * ?noAssert: bool -> float
        abstract swap16: unit -> Buffer
        abstract swap32: unit -> Buffer
        abstract swap64: unit -> Buffer
        abstract writeUInt8: value: float * offset: float * ?noAssert: bool -> float
        abstract writeUInt16LE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeUInt16BE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeUInt32LE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeUInt32BE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeInt8: value: float * offset: float * ?noAssert: bool -> float
        abstract writeInt16LE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeInt16BE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeInt32LE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeInt32BE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeFloatLE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeFloatBE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeDoubleLE: value: float * offset: float * ?noAssert: bool -> float
        abstract writeDoubleBE: value: float * offset: float * ?noAssert: bool -> float
        abstract fill: value: obj * ?offset: float * ?``end``: float -> obj
        abstract indexOf: value: U3<string, float, Buffer> * ?byteOffset: float * ?encoding: string -> float
        abstract lastIndexOf: value: U3<string, float, Buffer> * ?byteOffset: float * ?encoding: string -> float
        abstract entries: unit -> IterableIterator<float * float>
        abstract includes: value: U3<string, float, Buffer> * ?byteOffset: float * ?encoding: string -> bool
        abstract keys: unit -> IterableIterator<float>
        abstract values: unit -> IterableIterator<float>
        abstract from: array: ResizeArray<obj> -> Buffer
        abstract from: arrayBuffer: ArrayBuffer * ?byteOffset: float * ?length: float -> Buffer
        abstract from: buffer: Buffer -> Buffer
        abstract from: str: string * ?encoding: string -> Buffer
        abstract isBuffer: obj: obj -> obj
        abstract isEncoding: encoding: string -> bool
        abstract byteLength: string: string * ?encoding: string -> float
        abstract compare: buf1: Buffer * buf2: Buffer -> float
        abstract alloc: size: float * ?fill: U3<string, Buffer, float> * ?encoding: string -> Buffer
        abstract allocUnsafe: size: float -> Buffer
        abstract allocUnsafeSlow: size: float -> Buffer

    type [<AllowNullLiteral>] BufferStatic =
        [<Emit("new $0($1...)")>] abstract Create: str: string * ?encoding: string -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: str: float -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: array: Uint8Array -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: arrayBuffer: ArrayBuffer -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: array: ResizeArray<obj> -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: buffer: Buffer -> Buffer
        abstract from: array: ResizeArray<obj> -> Buffer
        abstract from: buffer: Buffer -> Buffer
        abstract from: arrayBuffer: ArrayBuffer * ?byteOffset: float * ?length: float -> Buffer
        abstract from: str: string * ?encoding: string -> Buffer
        abstract concat: list: Buffer [] * ?totalLength: float -> Buffer

    type [<AllowNullLiteral>] SlowBuffer =
        abstract prototype: Buffer with get, set
        abstract isBuffer: obj: obj -> bool
        abstract byteLength: string: string * ?encoding: string -> float
        abstract concat: list: ResizeArray<Buffer> * ?totalLength: float -> Buffer

    type [<AllowNullLiteral>] SlowBufferStatic =
        [<Emit("new $0($1...)")>] abstract Create: str: string * ?encoding: string -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: str: float -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: array: Uint8Array -> Buffer
        [<Emit("new $0($1...)")>] abstract Create: array: ResizeArray<obj> -> Buffer

    type IExports =
        abstract Buffer: BufferStatic with get, set
        abstract SlowBuffer: SlowBufferStatic with get, set

[<SuppressMessage("NameConventions", "*")>]
module Events =
    open System
    open Fable.Import.JS
    open Fable.Core

    type [<AllowNullLiteral>] EventEmitter =
        abstract defaultMaxListeners: float with get, set
        abstract addListener: ev: string * listener: Function -> EventEmitter
        abstract on: ev: string * listener: ('a -> unit) -> EventEmitter
        abstract on: ev: string * listener: ('a -> 'b -> unit) -> EventEmitter
        abstract once: ev: string * listener: ('a -> unit) -> EventEmitter
        abstract once: ev: string * listener: ('a -> 'b -> unit) -> EventEmitter
        abstract prependListener: ev: string * listener: Function -> EventEmitter
        abstract prependOnceListener: ev: string * listener: Function -> EventEmitter
        abstract removeListener: ev: string * listener: Function -> EventEmitter
        abstract removeAllListener: ev: string * listener: Function -> EventEmitter
        abstract setMaxListeners: n: int -> EventEmitter
        abstract getMaxListeners: unit -> int
        abstract listeners: ev: string -> ResizeArray<Function>
        abstract emit: ev: string * [<ParamArray>] args: obj[] -> bool
        abstract eventNames: unit -> ResizeArray<string>

    type [<AllowNullLiteral>] EventEmitterStatic =
        [<Emit("new $0()")>] abstract Create: unit -> EventEmitter

    type IExports =
        abstract defaultMaxListeners: float with get, set
        abstract EventEmitter: EventEmitterStatic with get, set

[<SuppressMessage("NameConventions", "*")>]
module Stream =
    open Fable.Core
    open Fable.Import.JS


    /// Legacy Stream Representation
    type [<AllowNullLiteral>] Stream =
        inherit Events.EventEmitter

    and [<AllowNullLiteral>] StreamStatic =
        [<Emit("new $0()")>] abstract Create: unit -> Stream

    and [<AllowNullLiteral>] Options =
        /// The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource. Defaults to 16384 (16kb), or 16 for objectMode streams
        abstract highWaterMark: int option with get, set
        /// Whether this stream should behave as a stream of objects. Defaults to false
        abstract objectMode: bool option with get, set

    and [<AllowNullLiteral>] ReadableOptions =
        inherit Options
        /// If specified, then buffers will be decoded to strings using the specified encoding. Defaults to null
        abstract encoding: Buffer.BufferEncoding option with get, set
        /// All Readable stream implementations must provide an implementation of the readable._read() method to fetch data from the underlying resource.
        /// When readable._read() is called, if data is available from the resource, the implementation should begin pushing that data into the read queue using the this.push(dataChunk) method. _read() should continue reading from the resource and pushing data until readable.push() returns false. Only when _read() is called again after it has stopped should it resume pushing additional data onto the queue.
        /// Note: Once the readable._read() method has been called, it will not be called again until the readable.push() method is called.
        /// The size argument is advisory. For implementations where a "read" is a single operation that returns data can use the size argument to determine how much data to fetch. Other implementations may ignore this argument and simply provide data whenever it becomes available. There is no need to "wait" until size bytes are available before calling stream.push(chunk).
        abstract read: (int -> unit) option with get, set

    /// Readable streams are an abstraction for a source from which data is consumed.
    and [<AllowNullLiteral>] Readable<'a> =
        inherit Stream
        /// Legacy. Always returns true.
        abstract readable: bool with get, set
        /// When chunk is a Buffer, Uint8Array or string, the chunk of data will be added to the internal queue for users of the stream to consume. Passing chunk as null signals the end of the stream (EOF), after which no more data can be written.
        /// When the Readable is operating in paused mode, the data added with readable.push() can be read out by calling the readable.read() method when the 'readable' event is emitted.
        /// When the Readable is operating in flowing mode, the data added with readable.push() will be delivered by emitting a 'data' event.
        /// The readable.push() method is designed to be as flexible as possible. For example, when wrapping a lower-level source that provides some form of pause/resume mechanism, and a data callback, the low-level source can be wrapped by the custom Readable instance
        abstract push: chunk: 'a option * ?encoding: Buffer.BufferEncoding -> bool
        /// The readable.unshift() method pushes a chunk of data back into the internal buffer. This is useful in certain situations where a stream is being consumed by code that needs to "un-consume" some amount of data that it has optimistically pulled out of the source, so that the data can be passed on to some other party.
        /// Note: The stream.unshift(chunk) method cannot be called after the 'end' event has been emitted or a runtime error will be thrown.
        /// Developers using stream.unshift() often should consider switching to use of a Transform stream instead.
        abstract unshift: chunk: 'a -> unit
        /// The readable.pipe() method attaches a Writable stream to the readable, causing it to switch automatically into flowing mode and push all of its data to the attached Writable. The flow of data will be automatically managed so that the destination Writable stream is not overwhelmed by a faster Readable stream.
        abstract pipe<'b when 'b :> Writable<'a> > : destination: 'b * ?options: obj -> 'b
        /// The readable.unpipe() method detaches a Writable stream previously attached using the stream.pipe() method.
        /// If the destination is not specified, then all pipes are detached.
        /// If the destination is specified, but no pipe is set up for it, then the method does nothing.
        abstract unpipe: ?destination: Writable<'a> -> unit
        /// Versions of Node.js prior to v0.10 had streams that did not implement the entire stream module API as it is currently defined. (See Compatibility for more information.)
        /// When using an older Node.js library that emits 'data' events and has a stream.pause() method that is advisory only, the readable.wrap() method can be used to create a Readable stream that uses the old stream as its data source.
        /// It will rarely be necessary to use readable.wrap() but the method has been provided as a convenience for interacting with older Node.js applications and libraries.
        abstract wrap: oldStream: Stream -> Readable<'a>
        /// The readable.pause() method will cause a stream in flowing mode to stop emitting 'data' events, switching out of flowing mode. Any data that becomes available will remain in the internal buffer.
        abstract pause: unit -> Readable<'a>
        /// The readable.resume() method causes an explicitly paused Readable stream to resume emitting 'data' events, switching the stream into flowing mode.
        /// The readable.resume() method can be used to fully consume the data from a stream without actually processing any of that data.
        abstract resume: unit -> Readable<'a>
        /// The readable.isPaused() method returns the current operating state of the Readable. This is used primarily by the mechanism that underlies the readable.pipe() method. In most typical cases, there will be no reason to use this method directly.
        abstract isPaused: unit -> bool
        /// The readable.setEncoding() method sets the character encoding for data read from the Readable stream.
        /// By default, no encoding is assigned and stream data will be returned as Buffer objects. Setting an encoding causes the stream data to be returned as strings of the specified encoding rather than as Buffer objects. For instance, calling readable.setEncoding('utf8') will cause the output data to be interpreted as UTF-8 data, and passed as strings. Calling readable.setEncoding('hex') will cause the data to be encoded in hexadecimal string format.
        /// The Readable stream will properly handle multi-byte characters delivered through the stream that would otherwise become improperly decoded if simply pulled from the stream as Buffer objects.
        abstract setEncoding: Buffer.BufferEncoding -> unit
        /// The readable.read() method pulls some data out of the internal buffer and returns it. If no data available to be read, null is returned. By default, the data will be returned as a Buffer object unless an encoding has been specified using the readable.setEncoding() method or the stream is operating in object mode.
        /// The optional size argument specifies a specific number of bytes to read. If size bytes are not available to be read, null will be returned unless the stream has ended, in which case all of the data remaining in the internal buffer will be returned.
        /// If the size argument is not specified, all of the data contained in the internal buffer will be returned.
        /// The readable.read() method should only be called on Readable streams operating in paused mode. In flowing mode, readable.read() is called automatically until the internal buffer is fully drained.
        abstract read: ?size: int -> 'a option

    and [<AllowNullLiteral>] ReadableStatic =
        [<Emit("new $0($1)")>] abstract Create<'a> : readableOptions:ReadableOptions -> Readable<'a>
        [<Emit("new $0($1)")>] abstract Create<'a> : unit -> Readable<'a>

    and [<AllowNullLiteral>] WritevChunk<'a> =
        abstract chunk: 'a with get, set
        abstract encoding: Buffer.BufferEncoding with get, set

    and [<AllowNullLiteral>] WritableOptions<'a> =
        inherit Options
        /// Whether or not to decode strings into Buffers before passing them to stream._write(). Defaults to true
        abstract decodeStrings: bool option with get, set
        /// The callback method must be called to signal either that the write completed successfully or failed with an error. The first argument passed to the callback must be the Error object if the call failed or null if the write succeeded.
        /// It is important to note that all calls to writable.write() that occur between the time writable._write() is called and the callback is called will cause the written data to be buffered. Once the callback is invoked, the stream will emit a 'drain' event. If a stream implementation is capable of processing multiple chunks of data at once, the writable._writev() method should be implemented.
        /// If the decodeStrings property is set in the constructor options, then chunk may be a string rather than a Buffer, and encoding will indicate the character encoding of the string. This is to support implementations that have an optimized handling for certain string data encodings. If the decodeStrings property is explicitly set to false, the encoding argument can be safely ignored, and chunk will remain the same object that is passed to .write().
        /// The writable._write() method is prefixed with an underscore because it is internal to the class that defines it, and should never be called directly by user programs.
        abstract write: ('a -> Buffer.BufferEncoding -> (Error option -> unit) -> unit) option with get, set
        /// The writable._writev() method may be implemented in addition to writable._write() in stream implementations that are capable of processing multiple chunks of data at once. If implemented, the method will be called with all chunks of data currently buffered in the write queue.
        /// The writable._writev() method is prefixed with an underscore because it is internal to the class that defines it, and should never be called directly by user programs.
        abstract writev: Option<Array<WritevChunk<'a>> -> (Error option -> unit) -> unit> with get, set

    and [<AllowNullLiteral>] Writable<'a> =
        inherit Stream
        /// Legacy. Always returns true.
        abstract writable: bool with get, set
        /// The writable.write() method writes some data to the stream, and calls the supplied callback once the data has been fully handled. If an error occurs, the callback may or may not be called with the error as its first argument. To reliably detect write errors, add a listener for the 'error' event.
        /// The return value is true if the internal buffer is less than the highWaterMark configured when the stream was created after admitting chunk. If false is returned, further attempts to write data to the stream should stop until the 'drain' event is emitted.
        /// While a stream is not draining, calls to write() will buffer chunk, and return false. Once all currently buffered chunks are drained (accepted for delivery by the operating system), the 'drain' event will be emitted. It is recommended that once write() returns false, no more chunks be written until the 'drain' event is emitted. While calling write() on a stream that is not draining is allowed, Node.js will buffer all written chunks until maximum memory usage occurs, at which point it will abort unconditionally. Even before it aborts, high memory usage will cause poor garbage collector performance and high RSS (which is not typically released back to the system, even after the memory is no longer required). Since TCP sockets may never drain if the remote peer does not read the data, writing a socket that is not draining may lead to a remotely exploitable vulnerability.
        ///  Writing data while the stream is not draining is particularly problematic for a Transform, because the Transform streams are paused by default until they are piped or an 'data' or 'readable' event handler is added.
        /// If the data to be written can be generated or fetched on demand, it is recommended to encapsulate the logic into a Readable and use stream.pipe(). However, if calling write() is preferred, it is possible to respect backpressure and avoid memory issues using the 'drain' event.
        abstract write: chunk: 'a -> bool
        abstract write: chunk: 'a * encoding: Buffer.BufferEncoding * ?cb: (Error option -> unit) -> bool
        abstract write: chunk: 'a * cb: (Error option -> unit) -> bool
        /// Calling the writable.end() method signals that no more data will be written to the Writable. The optional chunk and encoding arguments allow one final additional chunk of data to be written immediately before closing the stream. If provided, the optional callback function is attached as a listener for the 'finish' event.
        /// Calling the stream.write() method after calling stream.end() will raise an error.
        abstract ``end``: cb: unit -> unit
        abstract ``end``: chunk: 'a -> unit
        abstract ``end``: chunk: 'a * cb: (unit -> unit) -> unit
        abstract ``end``: chunk: 'a * encoding: Buffer.BufferEncoding * ?cb: (unit -> unit) -> unit

    and [<AllowNullLiteral>] WritableStatic =
        [<Emit("new $0($1)")>] abstract Create<'a> : writableOptions:WritableOptions<'a> -> Writable<'a>
        [<Emit("new $0($1)")>] abstract Create<'a> : unit -> Writable<'a>

    and [<AllowNullLiteral>] DuplexOptions<'a> =
        inherit WritableOptions<'a>
        inherit ReadableOptions
        /// Defaults to true. If set to false, then the stream will automatically end the writable side when the readable side ends.
        abstract allowHalfOpen: bool option with get, set
        /// Defaults to false. Sets objectMode for readable side of the stream. Has no effect if objectMode is true.
        abstract readableObjectMode: bool option with get, set
        /// Defaults to false. Sets objectMode for writable side of the stream. Has no effect if objectMode is true.
        abstract writableObjectMode: bool option with get, set

    and [<AllowNullLiteral>] Duplex<'a, 'b> =
        inherit Writable<'a>
        inherit Readable<'b>

    and [<AllowNullLiteral>] DuplexStatic =
        [<Emit("new $0($1)")>] abstract Create<'a, 'b> : duplexOptions:DuplexOptions<'a> -> Duplex<'a, 'b>

    and [<AllowNullLiteral>] TransformOptions<'a, 'b> =
        inherit DuplexOptions<'a>
        /// All Transform stream implementations must provide a _transform() method to accept input and produce output. The transform._transform() implementation handles the bytes being written, computes an output, then passes that output off to the readable portion using the readable.push() method.
        /// The transform.push() method may be called zero or more times to generate output from a single input chunk, depending on how much is to be output as a result of the chunk.
        /// It is possible that no output is generated from any given chunk of input data.
        /// The callback function must be called only when the current chunk is completely consumed. The first argument passed to the callback must be an Error object if an error occurred while processing the input or null otherwise. If a second argument is passed to the callback, it will be forwarded on to the readable.push() method.
        /// Transform._transform() is never called in parallel; streams implement a queue mechanism, and to receive the next chunk, callback must be called, either synchronously or asynchronously.
        abstract transform: Option<'a -> string -> (Error option -> 'b option -> unit) -> unit> with get, set
        /// In some cases, a transform operation may need to emit an additional bit of data at the end of the stream. For example, a zlib compression stream will store an amount of internal state used to optimally compress the output. When the stream ends, however, that additional data needs to be flushed so that the compressed data will be complete.
        /// Custom Transform implementations may implement the transform._flush() method. This will be called when there is no more written data to be consumed, but before the 'end' event is emitted signaling the end of the Readable stream.
        /// Within the transform._flush() implementation, the readable.push() method may be called zero or more times, as appropriate. The callback function must be called when the flush operation is complete.
        /// The transform._flush() method is prefixed with an underscore because it is internal to the class that defines it, and should never be called directly by user programs.
        abstract flush: ((Error option -> unit) -> unit) option with get, set

    and [<AllowNullLiteral>] Transform<'a, 'b> =
        inherit Writable<'a>
        inherit Readable<'b>
        /// All Transform stream implementations must provide a _transform() method to accept input and produce output. The transform._transform() implementation handles the bytes being written, computes an output, then passes that output off to the readable portion using the readable.push() method.
        /// The transform.push() method may be called zero or more times to generate output from a single input chunk, depending on how much is to be output as a result of the chunk.
        /// It is possible that no output is generated from any given chunk of input data.
        /// The callback function must be called only when the current chunk is completely consumed. The first argument passed to the callback must be an Error object if an error occurred while processing the input or null otherwise. If a second argument is passed to the callback, it will be forwarded on to the readable.push() method.
        /// Transform._transform() is never called in parallel; streams implement a queue mechanism, and to receive the next chunk, callback must be called, either synchronously or asynchronously.
        abstract _transform: chunk: 'a * encoding: string * cb: (Error option -> 'b option -> unit) -> unit
        /// In some cases, a transform operation may need to emit an additional bit of data at the end of the stream. For example, a zlib compression stream will store an amount of internal state used to optimally compress the output. When the stream ends, however, that additional data needs to be flushed so that the compressed data will be complete.
        /// Custom Transform implementations may implement the transform._flush() method. This will be called when there is no more written data to be consumed, but before the 'end' event is emitted signaling the end of the Readable stream.
        /// Within the transform._flush() implementation, the readable.push() method may be called zero or more times, as appropriate. The callback function must be called when the flush operation is complete.
        /// The transform._flush() method is prefixed with an underscore because it is internal to the class that defines it, and should never be called directly by user programs.
        abstract _flush: callback: (Error option -> unit) -> unit

    and [<AllowNullLiteral>] TransformStatic =
        [<Emit("new $0($1)")>] abstract Create<'a, 'b> : transformOptions:TransformOptions<'a, 'b> -> Transform<'a, 'b>


    and [<AllowNullLiteral>] PassThrough<'a> =
        inherit Transform<'a, 'a>

    type PassThroughOptions<'a> = TransformOptions<'a, 'a>

    and [<AllowNullLiteral>] PassThroughStatic =
        [<Emit("new $0()")>] abstract Create<'a> : unit -> PassThrough<'a>
        [<Emit("new $0($1)")>] abstract Create<'a> : passThroughOptions:PassThroughOptions<'a> -> PassThrough<'a>

    type IExports =
        abstract Stream: StreamStatic with get, set
        abstract Readable: ReadableStatic with get, set
        abstract Writable: WritableStatic with get, set
        abstract Duplex: DuplexStatic with get, set
        abstract Transform: TransformStatic with get, set
        abstract PassThrough: PassThroughStatic with get, set

[<SuppressMessage("NameConventions", "*")>]
module Fs =
    open System
    open Fable.Core

    type [<AllowNullLiteral>] Stats =
        abstract dev: float with get, set
        abstract ino: float with get, set
        abstract mode: float with get, set
        abstract nlink: float with get, set
        abstract uid: float with get, set
        abstract gid: float with get, set
        abstract rdev: float with get, set
        abstract size: float with get, set
        abstract blksize: float with get, set
        abstract blocks: float with get, set
        abstract atime: DateTime with get, set
        abstract mtime: DateTime with get, set
        abstract ctime: DateTime with get, set
        abstract birthtime: DateTime with get, set
        abstract isFile: unit -> bool
        abstract isDirectory: unit -> bool
        abstract isBlockDevice: unit -> bool
        abstract isCharacterDevice: unit -> bool
        abstract isSymbolicLink: unit -> bool
        abstract isFIFO: unit -> bool
        abstract isSocket: unit -> bool

    type [<StringEnum>] SymlinkType =
        | Dir | File | Junction

    type [<StringEnum>] FsWatcherEncoding =
        | Utf8 | Buffer

    type [<AllowNullLiteral>] FsWatcherOptions =
        abstract persistent: bool option with get, set
        abstract recursive: bool option with get, set
        abstract encoding: FsWatcherEncoding option with get, set

    type [<AllowNullLiteral>] FSWatcher =
        inherit Events.EventEmitter
        abstract close: unit -> unit

    type [<AllowNullLiteral>] ReadStreamOptions =
        abstract flags: string option with get, set
        abstract encoding: string option with get, set
        abstract fd: int option with get, set
        abstract mode: int option with get, set
        abstract autoClose: bool option with get, set
        abstract start: int option with get, set
        abstract ``end``: int option with get, set

    type [<AllowNullLiteral>] ReadStream<'a> =
        inherit Stream.Readable<Buffer.Buffer>
        abstract bytesRead: float with get, set
        abstract path: 'a with get, set
        abstract close: unit -> unit
        abstract destroy: unit -> unit

    type [<AllowNullLiteral>] ReadStreamStatic =
        [<Emit("new $0($1, $2)")>] abstract Create: path:string * opts:ReadStreamOptions option -> ReadStream<string>
        [<Emit("new $0($1, $2)")>] abstract Create: path:Buffer.Buffer * opts:ReadStreamOptions option -> ReadStream<Buffer.Buffer>

    type [<AllowNullLiteral>] WriteStreamOptions =
        abstract flags: string option with get, set
        abstract defaultEncoding: string option with get, set
        abstract fd: int option with get, set
        abstract mode: int option with get, set
        abstract autoClose: bool option with get, set
        abstract start: int option with get, set

    type [<AllowNullLiteral>] WriteStream<'a> =
        inherit Stream.Writable<Buffer.Buffer>
        abstract bytesWritten: float with get, set
        abstract path: 'a with get, set
        abstract close: unit -> unit

    type [<AllowNullLiteral>] WriteStreamStatic =
        [<Emit("new $0($1, $2)")>] abstract Create: path:string * opts:WriteStreamOptions option -> WriteStream<string>
        [<Emit("new $0($1, $2)")>] abstract Create: path:Buffer.Buffer * opts:WriteStreamOptions option -> WriteStream<Buffer.Buffer>

    type FsConstants =
        abstract F_OK: float with get, set
        abstract R_OK: float with get, set
        abstract W_OK: float with get, set
        abstract X_OK: float with get, set
        abstract O_RDONLY: float with get, set
        abstract O_WRONLY: float with get, set
        abstract O_RDWR: float with get, set
        abstract O_CREAT: float with get, set
        abstract O_EXCL: float with get, set
        abstract O_NOCTTY: float with get, set
        abstract O_TRUNC: float with get, set
        abstract O_APPEND: float with get, set
        abstract O_DIRECTORY: float with get, set
        abstract O_NOATIME: float with get, set
        abstract O_NOFOLLOW: float with get, set
        abstract O_SYNC: float with get, set
        abstract O_SYMLINK: float with get, set
        abstract O_DIRECT: float with get, set
        abstract O_NONBLOCK: float with get, set
        abstract S_IFMT: float with get, set
        abstract S_IFREG: float with get, set
        abstract S_IFDIR: float with get, set
        abstract S_IFCHR: float with get, set
        abstract S_IFBLK: float with get, set
        abstract S_IFIFO: float with get, set
        abstract S_IFLNK: float with get, set
        abstract S_IFSOCK: float with get, set
        abstract S_IRWXU: float with get, set
        abstract S_IRUSR: float with get, set
        abstract S_IWUSR: float with get, set
        abstract S_IXUSR: float with get, set
        abstract S_IRWXG: float with get, set
        abstract S_IRGRP: float with get, set
        abstract S_IWGRP: float with get, set
        abstract S_IXGRP: float with get, set
        abstract S_IRWXO: float with get, set
        abstract S_IROTH: float with get, set
        abstract S_IWOTH: float with get, set
        abstract S_IXOTH: float with get, set

    type IExports =
        abstract watch: filename: string * ?listener: (string -> string -> unit) -> FSWatcher
        abstract watch: filename: string * encoding: FsWatcherEncoding * ?listener: (string -> string -> unit) -> FSWatcher
        abstract watch: filename: string * options: FsWatcherOptions * ?listener: (string -> string -> unit) -> FSWatcher
        abstract ReadStream: ReadStreamStatic with get, set
        abstract WriteStream: WriteStreamStatic with get, set
        abstract createReadStream: path: string * ?options: Stream.ReadableOptions -> ReadStream<string>
        abstract createReadStream: path: Buffer.Buffer * ?options: Stream.ReadableOptions -> ReadStream<Buffer.Buffer>
        abstract createWriteStream: path: string * ?options: Stream.WritableOptions<string> -> WriteStream<string>
        abstract createWriteStream: path: Buffer.Buffer * ?options: Stream.WritableOptions<Buffer.Buffer> -> WriteStream<Buffer.Buffer>
        abstract constants: FsConstants
        abstract rename: oldPath: string * newPath: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract renameSync: oldPath: string * newPath: string -> unit
        abstract truncate: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract truncate: path: U2<string, Buffer.Buffer> * len: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract truncateSync: path: U2<string, Buffer.Buffer> * ?len: float -> unit
        abstract ftruncate: fd: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract ftruncate: fd: float * len: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract ftruncateSync: fd: float * ?len: float -> unit
        abstract chown: path: U2<string, Buffer.Buffer> * uid: float * gid: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract chownSync: path: U2<string, Buffer.Buffer> * uid: float * gid: float -> unit
        abstract fchown: fd: float * uid: float * gid: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract fchownSync: fd: float * uid: float * gid: float -> unit
        abstract lchown: path: U2<string, Buffer.Buffer> * uid: float * gid: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract lchownSync: path: U2<string, Buffer.Buffer> * uid: float * gid: float -> unit
        abstract chmod: path: U2<string, Buffer.Buffer> * mode: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract chmod: path: U2<string, Buffer.Buffer> * mode: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract chmodSync: path: U2<string, Buffer.Buffer> * mode: float -> unit
        abstract chmodSync: path: U2<string, Buffer.Buffer> * mode: string -> unit
        abstract fchmod: fd: float * mode: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract fchmod: fd: float * mode: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract fchmodSync: fd: float * mode: float -> unit
        abstract fchmodSync: fd: float * mode: string -> unit
        abstract lchmod: path: U2<string, Buffer.Buffer> * mode: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract lchmod: path: U2<string, Buffer.Buffer> * mode: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract lchmodSync: path: U2<string, Buffer.Buffer> * mode: float -> unit
        abstract lchmodSync: path: U2<string, Buffer.Buffer> * mode: string -> unit
        abstract stat: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> Stats -> obj) -> unit
        abstract lstat: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> Stats -> obj) -> unit
        abstract fstat: fd: float * ?callback: (Base.NodeJS.ErrnoException option -> Stats -> obj) -> unit
        abstract statSync: path: U2<string, Buffer.Buffer> -> Stats
        abstract lstatSync: path: U2<string, Buffer.Buffer> -> Stats
        abstract fstatSync: fd: float -> Stats
        abstract link: srcpath: U2<string, Buffer.Buffer> * dstpath: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract linkSync: srcpath: U2<string, Buffer.Buffer> * dstpath: U2<string, Buffer.Buffer> -> unit
        abstract symlink: srcpath: U2<string, Buffer.Buffer> * dstpath: U2<string, Buffer.Buffer> * ?``type``: SymlinkType * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract symlinkSync: srcpath: U2<string, Buffer.Buffer> * dstpath: U2<string, Buffer.Buffer> * ?``type``: SymlinkType -> unit
        abstract readlink: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> string -> obj) -> unit
        abstract readlinkSync: path: U2<string, Buffer.Buffer> -> string
        abstract realpath: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> string -> obj) -> unit
        abstract realpath: path: U2<string, Buffer.Buffer> * cache: obj * callback: (Base.NodeJS.ErrnoException option -> string -> obj) -> unit
        abstract realpathSync: path: U2<string, Buffer.Buffer> * ?cache: obj -> string
        abstract unlink: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract unlinkSync: path: U2<string, Buffer.Buffer> -> unit
        abstract rmdir: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract rmdirSync: path: U2<string, Buffer.Buffer> -> unit
        /// Asynchronous mkdir(2). No arguments other than a possible exception are given to the completion callback. mode defaults to 0o777.
        abstract mkdir: path: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract mkdir: path: Buffer.Buffer * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract mkdir: path: string * mode: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract mkdir: path: Buffer.Buffer * mode: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract mkdir: path: string * mode: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract mkdir: path: Buffer.Buffer * mode: string * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        /// Synchronous mkdir(2). Returns undefined.
        abstract mkdirSync: path: string -> unit
        abstract mkdirSync: path: Buffer.Buffer -> unit
        abstract mkdirSync: path: string * mode: float -> unit
        abstract mkdirSync: path: Buffer.Buffer * mode: float -> unit
        abstract mkdirSync: path: string * mode: string -> unit
        abstract mkdirSync: path: Buffer.Buffer * mode: string -> unit
        abstract mkdtemp: prefix: string * ?callback: (Base.NodeJS.ErrnoException option -> string -> unit) -> unit
        abstract mkdtempSync: prefix: string -> string
        abstract readdir: path: U2<string, Buffer.Buffer> * ?callback: (Base.NodeJS.ErrnoException option -> ResizeArray<string> -> unit) -> unit
        abstract readdirSync: path: U2<string, Buffer.Buffer> -> ResizeArray<string>
        abstract close: fd: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract closeSync: fd: float -> unit
        abstract ``open``: path: U2<string, Buffer.Buffer> * flags: U2<string, float> * callback: (Base.NodeJS.ErrnoException option -> float -> unit) -> unit
        abstract ``open``: path: U2<string, Buffer.Buffer> * flags: U2<string, float> * mode: float * callback: (Base.NodeJS.ErrnoException option -> float -> unit) -> unit
        abstract openSync: path: U2<string, Buffer.Buffer> * flags: U2<string, float> * ?mode: float -> float
        abstract utimes: path: U2<string, Buffer.Buffer> * atime: float * mtime: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract utimes: path: U2<string, Buffer.Buffer> * atime: DateTime * mtime: DateTime * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract utimesSync: path: U2<string, Buffer.Buffer> * atime: float * mtime: float -> unit
        abstract utimesSync: path: U2<string, Buffer.Buffer> * atime: DateTime * mtime: DateTime -> unit
        abstract futimes: fd: float * atime: float * mtime: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract futimes: fd: float * atime: DateTime * mtime: DateTime * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract futimesSync: fd: float * atime: float * mtime: float -> unit
        abstract futimesSync: fd: float * atime: DateTime * mtime: DateTime -> unit
        abstract fsync: fd: float * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract fsyncSync: fd: float -> unit
        abstract write: fd: float * buffer: Buffer.Buffer * offset: float * length: float * position: float * ?callback: (Base.NodeJS.ErrnoException option -> float -> Buffer.Buffer -> unit) -> unit
        abstract write: fd: float * buffer: Buffer.Buffer * offset: float * length: float * ?callback: (Base.NodeJS.ErrnoException option -> float -> Buffer.Buffer -> unit) -> unit
        abstract write: fd: float * data: obj * ?callback: (Base.NodeJS.ErrnoException option -> float -> string -> unit) -> unit
        abstract write: fd: float * data: obj * offset: float * ?callback: (Base.NodeJS.ErrnoException option -> float -> string -> unit) -> unit
        abstract write: fd: float * data: obj * offset: float * encoding: string * ?callback: (Base.NodeJS.ErrnoException option -> float -> string -> unit) -> unit
        abstract writeSync: fd: float * buffer: Buffer.Buffer * offset: float * length: float * ?position: float -> float
        abstract writeSync: fd: float * data: obj * ?position: float * ?enconding: string -> float
        abstract read: fd: float * buffer: Buffer.Buffer * offset: float * length: float * position: float * ?callback: (Base.NodeJS.ErrnoException option -> float -> Buffer.Buffer -> unit) -> unit
        abstract readSync: fd: float * buffer: Buffer.Buffer * offset: float * length: float * position: float -> float
        abstract readFile: filename: string * encoding: string * callback: (Base.NodeJS.ErrnoException option -> string -> unit) -> unit
        abstract readFile: filename: string * options: obj * callback: (Base.NodeJS.ErrnoException option -> string -> unit) -> unit
        abstract readFile: filename: string * options: obj * callback: (Base.NodeJS.ErrnoException option -> Buffer.Buffer -> unit) -> unit
        abstract readFile: filename: string * callback: (Base.NodeJS.ErrnoException option -> Buffer.Buffer -> unit) -> unit
        abstract readFileSync: filename: string * encoding: string -> string
        abstract readFileSync: filename: string * options: obj -> string
        abstract readFileSync: filename: string * ?options: obj -> Buffer.Buffer
        abstract writeFile: filename: string * data: obj * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract writeFile: filename: string * data: obj * options: obj * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract writeFileSync: filename: string * data: obj * ?options: obj -> unit
        abstract appendFile: filename: string * data: obj * options: obj * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract appendFile: filename: string * data: obj * ?callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract appendFileSync: filename: string * data: obj * ?options: obj -> unit
        abstract watchFile: filename: string * listener: (Stats -> Stats -> unit) -> unit
        abstract watchFile: filename: string * options: obj * listener: (Stats -> Stats -> unit) -> unit
        abstract unwatchFile: filename: string * ?listener: (Stats -> Stats -> unit) -> unit

        abstract exists: path: U2<string, Buffer.Buffer> * ?callback: (bool -> unit) -> unit
        abstract existsSync: path: U2<string, Buffer.Buffer> -> bool
        abstract access: path: U2<string, Buffer.Buffer> * callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract access: path: U2<string, Buffer.Buffer> * mode: float * callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract accessSync: path: U2<string, Buffer.Buffer> * ?mode: float -> unit

        abstract fdatasync: fd: float * callback: (Base.NodeJS.ErrnoException option -> unit) -> unit
        abstract fdatasyncSync: fd: float -> unit
