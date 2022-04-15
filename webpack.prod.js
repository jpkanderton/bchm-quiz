const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    // publicPath: "/",
  },
  watch: true,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.done.tap("DonePlugin", (stats) => {
          console.log("Compile is done !");
          setTimeout(() => {
            process.exit(0);
          });
        });
      },
    },
  ],
};
