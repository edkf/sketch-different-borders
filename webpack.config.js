const path = require('path')
const webpack = require('webpack')

const javascript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader']
}

module.exports = {
  mode: 'production',
  entry: './webview/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      javascript
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}