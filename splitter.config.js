const path = require("path")

function resolve(relativePath) {
  return path.join(__dirname, relativePath)
}

const babel = {
  // presets: [
  //   [
  //     "babel-preset-env",
  //     {
  //       modules: false,
  //       targets: { node: "8.9.3" }
  //     }
  //   ]
  // ],
  sourceMaps: false
}

module.exports = {
  entry: resolve("core/core.fsproj"),
  outDir: resolve("out/modules"),
  port: 61225, // Fable daemon port (61225 by default)
  babel,
  fable: { define: ["DEBUG"] }
}
