module Fable.Repl.Metadata

let references use_net45_meta =
    if use_net45_meta then
      [|"Fable.Core"
        "Fable.Import.Browser"
        "FSharp.Core"
        "mscorlib"
        "System"
        "System.Core"
        "System.Data"
        "System.IO"
        "System.Xml"
        "System.Numerics"|]
    else
      [|"Fable.Core"
        "Fable.Import.Browser"
        "FSharp.Core"
        "Microsoft.CSharp"
        "Microsoft.VisualBasic"
        "Microsoft.Win32.Primitives"
        "mscorlib"
        "netstandard"
        "System.AppContext"
        "System.Buffers"
        "System.Collections.Concurrent"
        "System.Collections"
        "System.Collections.Immutable"
        "System.Collections.NonGeneric"
        "System.Collections.Specialized"
        "System.ComponentModel.Annotations"
        //"System.ComponentModel.Composition" // removed in 2.1.300
        "System.ComponentModel.DataAnnotations"
        "System.ComponentModel"
        "System.ComponentModel.EventBasedAsync"
        "System.ComponentModel.Primitives"
        "System.ComponentModel.TypeConverter"
        "System.Configuration"
        "System.Console"
        "System.Core"
        "System.Data.Common"
        "System.Data"
        "System.Diagnostics.Contracts"
        "System.Diagnostics.Debug"
        "System.Diagnostics.DiagnosticSource"
        "System.Diagnostics.FileVersionInfo"
        "System.Diagnostics.Process"
        "System.Diagnostics.StackTrace"
        "System.Diagnostics.TextWriterTraceListener"
        "System.Diagnostics.Tools"
        "System.Diagnostics.TraceSource"
        "System.Diagnostics.Tracing"
        "System"
        "System.Drawing"
        "System.Drawing.Primitives"
        "System.Dynamic.Runtime"
        "System.Globalization.Calendars"
        "System.Globalization"
        "System.Globalization.Extensions"
        //"System.IO.Compression.Brotli" // added in 2.1.300
        "System.IO.Compression"
        "System.IO.Compression.FileSystem"
        "System.IO.Compression.ZipFile"
        "System.IO"
        "System.IO.FileSystem"
        "System.IO.FileSystem.DriveInfo"
        "System.IO.FileSystem.Primitives"
        "System.IO.FileSystem.Watcher"
        "System.IO.IsolatedStorage"
        "System.IO.MemoryMappedFiles"
        "System.IO.Pipes"
        "System.IO.UnmanagedMemoryStream"
        "System.Linq"
        "System.Linq.Expressions"
        "System.Linq.Parallel"
        "System.Linq.Queryable"
        //"System.Memory" // added in 2.1.300
        "System.Net"
        "System.Net.Http"
        "System.Net.HttpListener"
        "System.Net.Mail"
        "System.Net.NameResolution"
        "System.Net.NetworkInformation"
        "System.Net.Ping"
        "System.Net.Primitives"
        "System.Net.Requests"
        "System.Net.Security"
        "System.Net.ServicePoint"
        "System.Net.Sockets"
        "System.Net.WebClient"
        "System.Net.WebHeaderCollection"
        "System.Net.WebProxy"
        "System.Net.WebSockets.Client"
        "System.Net.WebSockets"
        "System.Numerics"
        "System.Numerics.Vectors"
        "System.ObjectModel"
        "System.Reflection.DispatchProxy"
        "System.Reflection"
        "System.Reflection.Emit"
        "System.Reflection.Emit.ILGeneration"
        "System.Reflection.Emit.Lightweight"
        "System.Reflection.Extensions"
        "System.Reflection.Metadata"
        "System.Reflection.Primitives"
        "System.Reflection.TypeExtensions"
        "System.Resources.Reader"
        "System.Resources.ResourceManager"
        "System.Resources.Writer"
        "System.Runtime.CompilerServices.VisualC"
        "System.Runtime"
        "System.Runtime.Extensions"
        "System.Runtime.Handles"
        "System.Runtime.InteropServices"
        "System.Runtime.InteropServices.RuntimeInformation"
        "System.Runtime.InteropServices.WindowsRuntime"
        "System.Runtime.Loader"
        "System.Runtime.Numerics"
        "System.Runtime.Serialization"
        "System.Runtime.Serialization.Formatters"
        "System.Runtime.Serialization.Json"
        "System.Runtime.Serialization.Primitives"
        "System.Runtime.Serialization.Xml"
        "System.Security.Claims"
        "System.Security.Cryptography.Algorithms"
        "System.Security.Cryptography.Csp"
        "System.Security.Cryptography.Encoding"
        "System.Security.Cryptography.Primitives"
        "System.Security.Cryptography.X509Certificates"
        "System.Security"
        "System.Security.Principal"
        "System.Security.SecureString"
        "System.ServiceModel.Web"
        "System.ServiceProcess"
        "System.Text.Encoding"
        "System.Text.Encoding.Extensions"
        "System.Text.RegularExpressions"
        "System.Threading"
        "System.Threading.Overlapped"
        "System.Threading.Tasks.Dataflow"
        "System.Threading.Tasks"
        "System.Threading.Tasks.Extensions"
        "System.Threading.Tasks.Parallel"
        "System.Threading.Thread"
        "System.Threading.ThreadPool"
        "System.Threading.Timer"
        "System.Transactions"
        "System.Transactions.Local"
        "System.ValueTuple"
        "System.Web"
        "System.Web.HttpUtility"
        "System.Windows"
        "System.Xml"
        "System.Xml.Linq"
        "System.Xml.ReaderWriter"
        "System.Xml.Serialization"
        "System.Xml.XDocument"
        "System.Xml.XmlDocument"
        "System.Xml.XmlSerializer"
        "System.Xml.XPath"
        "System.Xml.XPath.XDocument"
        "WindowsBase"
        |]
