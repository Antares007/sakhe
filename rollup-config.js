import path from "path"
import fable from "C:/code/Fable/src/js/rollup-plugin-fable"
import nodeResolve from "rollup-plugin-node-resolve"

function resolve(relativePath) {
  return path.join(__dirname, relativePath)
}

var babelOptions = {
  presets: [
    ["babel-preset-env", { modules: false, targets: { node: "8.9.3" } }]
  ]
}

export default {
  input: resolve("./core/core.fsproj"),
  plugins: [
    fable({ babel: babelOptions }),
    nodeResolve({
      // Other node-resolve options here
      // See https://github.com/rollup/rollup-plugin-node-resolve
      //customResolveOptions: {
      //    moduleDirectory: resolve('./node_modules')
      //}
    })
  ],
  output: [
    {
      file: resolve("./out/modules/show.js"),
      format: "cjs"
    }
  ]
}
