const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const webpack = require("webpack");

const PUBLIC_PATH = process.env.PUBLIC_PATH;
const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const DATABASE_URL = process.env.DATABASE_URL;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;
const USE_MOCK = process.env.USE_MOCK;

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
        "process.env.API_KEY": JSON.stringify(API_KEY),
        "process.env.AUTH_DOMAIN": JSON.stringify(AUTH_DOMAIN),
				"process.env.DATABASE_URL": JSON.stringify(DATABASE_URL),
        "process.env.PROJECT_ID": JSON.stringify(PROJECT_ID),
				"process.env.STORAGE_BUCKET": JSON.stringify(STORAGE_BUCKET),
				"process.env.MESSAGING_SENDER_ID": JSON.stringify(MESSAGING_SENDER_ID),
				"process.env.APP_ID": JSON.stringify(APP_ID),
				"process.env.USE_MOCK": JSON.stringify(USE_MOCK),
    }),
  ],
};
