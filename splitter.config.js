const path = require("path");
const fableUtils = require("fable-utils");

function resolve(relativePath) {
    return path.join(__dirname, relativePath);
}

module.exports = {
  entry: resolve("core/core.fsproj"),
  outDir: resolve("out/modules"),
  babel: fableUtils.resolveBabelOptions({
    presets: [
      ["env", { modules: "commonjs" }]
    ],
    sourceMaps: false,
  }),
  fable: {
    define: ["DEBUG"]
  }
}
