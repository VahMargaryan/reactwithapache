const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  resolve: {
    extensions: [ '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    filename: 'compile.js',
    path: path.join(__dirname, './')
  },
  devtool: 'sourcemap'
};
