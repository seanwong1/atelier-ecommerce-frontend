var path = require("path");
const webpack = require('webpack');
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
const dotenv = require('dotenv').config();
var path = require("path");
<<<<<<< HEAD
=======

>>>>>>> 619727a108c6ae70062cef22a8629fbba41b259f

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
    ],
  },
};