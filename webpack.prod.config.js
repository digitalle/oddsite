const extend = require('extend');
const webpack = require('webpack');

process.env.NODE_ENV = 'production';
// Use extend instead of Object.assign to do a deep merge,
// because we're modifying nested properties on the new object.
const webpackConf = extend(true, {}, require('./webpack.common.config.js'));

webpackConf.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    sourceMap: true
  })
);

module.exports = webpackConf;
