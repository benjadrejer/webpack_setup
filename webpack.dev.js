const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "none",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        use: ["style-loader", { loader: "css-loader", options: { modules: true }}, "sass-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
});