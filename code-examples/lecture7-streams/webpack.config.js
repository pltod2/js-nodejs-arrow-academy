var path = require('path');

module.exports = {
  entry: './public/main.js',
  output: {
    filename: './public/dist/bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./public'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: "style!css?modules" },
      { test: /\.html$/, loader: "babel!es6-template-string" }
    ]
  }
};