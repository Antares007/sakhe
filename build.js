const path = require("path");
const fableUtils = require("fable-utils");
const fable = require("rollup-plugin-fable");
const nodeResolve = require("rollup-plugin-node-resolve");

function resolve(relativePath) {
  return path.join(__dirname, relativePath);
}
const rollup = require("rollup");

var babelOptions = fableUtils.resolveBabelOptions({
  presets: [["es2015", { modules: false }]]
});

const inputOptions = {
  input: resolve("./core/core.fsproj"),
  plugins: [
    fable({ babel: babelOptions }),
    nodeResolve({
      // Other node-resolve options here
      // See https://github.com/rollup/rollup-plugin-node-resolve
      customResolveOptions: {
        moduleDirectory: resolve("./node_modules")
      }
    })
  ]
};

const outputOptions = {
  file: resolve("./out/bundle2.js"),
  format: "cjs"
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.imports); // an array of external dependencies
  console.log("^^^^^^^^^^^^^^^^^^^^");
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log("^^^^^^^^^^^^^^^^^^^^");

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);
  console.log(code); // an array of names exported by the entry point

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
