var path = require('path');
var qs = require('querystring');
var webpack = require('webpack');

var root_folder = path.resolve(__dirname, '..', '..');


module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/entry.js'
  ],
  output: {
    path: path.join(root_folder, 'www'),
    filename: 'scripts/dev_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    loaders: [
      // Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      // CSS
      {
        test: /\.css$/,
        // loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
        loader: 'style-loader!css-loader?modules',
        //  + qs.stringify({
        //   modules: true,
        //   importLoaders: 1,
        //   localIdentName: '[path][name]-[local]'
        // })
      }
    ]
  }
};
