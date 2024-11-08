const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/js',
  },
  watch: true,

  devtool: 'source-map',

  module: {},
};
