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
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
      loaders: [ {
          test: /\.ts$/ ,
          include: SRC_DIR,
          loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
     ]
  },
  resolve: {
      extensions:[ ".webpack.js", ".web.js", ".ts", ".js" ]
  }
};﻿
