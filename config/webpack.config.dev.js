const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const URL_PATH = "/service_offering"

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/"
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "../src/components"),
      Common: path.resolve(__dirname, "../src/components/common"),
      Content: path.resolve(__dirname, "../src/components/content"),
      Hooks: path.resolve(__dirname, "../src/hooks"),
      Images: path.resolve(__dirname, "../src/images")
    },
    extensions: [".js", ".jsx", ".css"]
  },
  mode: "development",
  devServer: {
    static: path.resolve("../build"),
    open: "/",
    port: 9000,
    historyApiFallback: true,
    historyApiFallback: {
      index: "/"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser"
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CleanWebpackPlugin()
  ]
}