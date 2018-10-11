const path = require("path")

function resolve(relativePath) {
  return path.join(__dirname, relativePath)
}

const babel = {
  plugins: ["@babel/plugin-transform-modules-commonjs"],
  sourceMaps: false
}

module.exports = {
  entry: resolve("fable/fable.fsproj"),
  outDir: resolve("out/fable"),
  port: 61225, // Fable daemon port (61225 by default)
  babel,
  fable: {
    define: [
      "FX_NO_CORHOST_SIGNER",
      "FX_NO_LINKEDRESOURCES",
      "FX_NO_PDB_READER",
      "FX_NO_PDB_WRITER",
      "FX_NO_WEAKTABLE",
      "FX_REDUCED_EXCEPTIONS",
      "NO_COMPILER_BACKEND",
      "NO_EXTENSIONTYPING",
      "NO_INLINE_IL_PARSER"
    ]
  }
}
