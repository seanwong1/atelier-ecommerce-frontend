var path = require("path");
const webpack = require('webpack');
var SRC_DIR = path.join(__dirname, "/src/client/src");
var DIST_DIR = path.join(__dirname, "/src/client/dist");
const dotenv = require('dotenv').config();

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
        },
      }
    ]
  },
};