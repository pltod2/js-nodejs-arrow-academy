const path = require('path');
const staticFolderName = 'static';

module.exports = {
  context: __dirname,
  entry: {
    app: './boot.js'
  },
  output: {
    path: path.resolve(__dirname, staticFolderName),
    filename: '[name].bundle.js',
    publicPath: '/' + staticFolderName         
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": [
                ["es2015", { "modules": false }], 
                'react',                
                "stage-0"
            ],
            "plugins": ["transform-class-properties"] 
          }
        }]
      }
    ]
  }    
}