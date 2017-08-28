const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'main.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'test'),
      'node_modules'
    ],
    extensions: ['.js']
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  externals: ['window'],
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.template.html`
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
