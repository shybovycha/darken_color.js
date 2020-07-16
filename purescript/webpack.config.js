var path = require("path");

module.exports = {
  mode: "production",
  entry: "./output/Hex2RGB/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.purescript.js",
  },
}