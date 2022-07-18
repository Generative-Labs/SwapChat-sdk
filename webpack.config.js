const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  //   watch: true,
  watchOptions: {
    // 默认为空，不监听的文件或文件夹，支持正则匹配如：ignored: "files/**/*.js"
    // 如果是多个，可以使用数组：ignored: ['files/**/*.js', 'node_modules']
    ignored: /node_modules/,
    // 监听到变化后会等 300ms 再去执行，默认 300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问 1000 次
    poll: 1000,
  },
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
