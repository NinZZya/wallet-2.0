const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const webpack = require("webpack");

const PUBLIC_PATH = process.env.PUBLIC_PATH;
const WALLET_API_KEY = process.env.WALLET_API_KEY;
const WALLET_AUTH_DOMAIN = process.env.WALLET_AUTH_DOMAIN;
const WALET_PROJECT_ID = process.env.WALET_PROJECT_ID;

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "./bundle.js",
    publicPath: PUBLIC_PATH,
    // https://github.com/GoogleChromeLabs/worker-plugin/issues/20
    globalObject: "(typeof self!='undefined'?self:global)",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 1313,
    historyApiFallback: true,
  },
  plugins: [
    new WorkerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
    new webpack.DefinePlugin({
        "process.env.PUBLIC_PATH": JSON.stringify(PUBLIC_PATH),
        "process.env.WALLET_API_KEY": JSON.stringify(WALLET_API_KEY),
        "process.env.WALLET_AUTH_DOMAIN": JSON.stringify(WALLET_AUTH_DOMAIN),
        "process.env.WALET_PROJECT_ID": JSON.stringify(WALET_PROJECT_ID),
    }),
  ],
};
