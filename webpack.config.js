var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './src/dev-index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __TESTTOOLS__: false,
      __DEVTOOLS__: false // <-------- DISABLE redux-devtools HERE
    })

  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
