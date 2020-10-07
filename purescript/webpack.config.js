var path = require("path");

module.exports = {
  mode: "production",
  entry: "./output/DarkenColor/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.purescript.js",
  },
}