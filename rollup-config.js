import path from "path";
import fableUtils from "fable-utils";
import fable from "rollup-plugin-fable";
import nodeResolve from "rollup-plugin-node-resolve";

function resolve(relativePath) {
  return path.join(__dirname, relativePath);
}

var babelOptions = fableUtils.resolveBabelOptions({
  presets: [["env", { modules: false, targets: { node: "7.9" } }]]
});

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
      file: resolve("./out/bundle.js"),
      format: "cjs"
    }
  ]
};
