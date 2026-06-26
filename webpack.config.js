var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    fsharp: "./fsharp/src/DarkenColor.fsproj",
    purescript: "./purescript/output/DarkenColor/index.js",
    reasonml: "./reasonml/src/darken_color.bs.js",
    rescript: "./rescript/src/darken_color.res.js",
    scalajs: "./scalajs/target/scala-2.13/darken_color-fastopt.js",
    typescript: "./typescript/src/darken_color.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[name].js",
    library: 'DarkenColor',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    }],
    rules: [{
        test: /\.fs(x|proj)?$/,
        use: "fable-loader"
    }],
  },
}
