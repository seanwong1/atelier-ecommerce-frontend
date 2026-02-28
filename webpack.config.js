const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/src/client/src');
const DIST_DIR = path.join(__dirname, '/src/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    publicPath: './',
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
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || ''),
      'process.env.DEMO_MODE': JSON.stringify(process.env.DEMO_MODE || 'false'),
    }),
  ],
};
