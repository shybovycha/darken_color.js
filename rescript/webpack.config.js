var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/darken_color.bs.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.reasonml.js",
  },
}