const path = require('path');

module.exports = {
  entry: './main.ts', // ✅ this is the correct path
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // ✅ output will go to task_0/dist
  },
  mode: 'development' // ✅ removes the warning
};

