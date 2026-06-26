var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    fsharp: "./fsharp/DarkenColor.fs.js",
    gleam: "./gleam/build/dev/javascript/darken_color/darken_color.mjs",
    purescript: "./purescript/output/DarkenColor/index.js",
    rescript: "./rescript/src/darken_color.res.js",
    scalajs: "./scalajs/target/out/sjs1/scala-3.8.4/darken_color/darken_color-opt/main.js",
    typescript: "./typescript/src/darken_color.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[name].js",
    library: 'DarkenColor',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [ '.ts', '.js', '.mjs' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              context: path.join(__dirname, 'typescript'),
              // configFile: path.join(__dirname, 'typescript', 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}
