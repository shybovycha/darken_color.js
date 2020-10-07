var path = require("path");

module.exports = {
  mode: "production",
  entry: "./target/scala-2.13/darken_color-fastopt.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.scalajs.js",
    library: 'DarkenColor',
    libraryTarget: 'umd',
  },
}
