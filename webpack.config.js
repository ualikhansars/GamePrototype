var path = require('path');
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  devtool: 'source-map',
  entry: SRC_DIR + '/game.ts',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
      loaders: [ {
          test: /\.ts$/ ,
          include: SRC_DIR,
          loader: 'ts-loader'
      } ]
  },
  resolve: {
      extensions:[ ".webpack.js", ".web.js", ".ts", ".js" ]
  }
};﻿
