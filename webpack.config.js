const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    library: "SwapChatSdk",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //   plugins: [
  //     // Plugin for hot module replacement
  //     new webpack.HotModuleReplacementPlugin(),
  //     new HtmlWebpackPlugin({
  //       title: "Hot Module Replacement",
  //     }),
  //   ],
  //   devServer: {
  //     static: "./lib",
  //     hot: true,
  //   },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
