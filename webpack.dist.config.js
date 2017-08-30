const path = require('path');
const webpack = require('webpack');
const node_modules_dir = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config.js')

module.exports = Object.assign(webpackConfig, {
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: webpackConfig.plugins.concat([
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.template.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    })
  ])
})
