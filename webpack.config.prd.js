const { resolve } = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode : 'production',

  entry : [
    './client/index'
  ],

  output : {
    path     : resolve(__dirname, 'client', 'public'),
    filename : 'bundle.js'
  },

  resolve : {
    extensions : ['.jsx', '.js', '.json']
  },

  module : {
    rules : [{
      test    : /\.(js|jsx)$/,
      exclude : [/node_modules/],
      loader  : 'babel-loader',
      options : {
        presets : [
          'env',
          'react'
        ],
        plugins : [
          'syntax-decorators',
          'transform-class-properties',
          'transform-decorators-legacy',
          'transform-export-extensions',
          'transform-object-rest-spread',
          [
            'import',
            {
              libraryName      : 'antd',
              libraryDirectory : 'lib',
              style            : true
            }
          ]
        ]
      }
    }]
  },

  plugins : [
    new UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize : true
    })
  ]
};
