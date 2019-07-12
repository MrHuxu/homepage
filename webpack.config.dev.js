const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  mode : 'development',

  entry : './client/index',

  output : {
    path       : resolve(__dirname, 'public', 'built'),
    filename   : 'bundle.js',
    publicPath : 'http://localhost:6789/assets/'
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

  watchOptions : {
    poll : true
  },

  devServer : {
    headers : {
      'Access-Control-Allow-Origin' : '*'
    },
    port : 6789,
    hot  : true
  },

  devtool : 'source-map',

  plugins : [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
