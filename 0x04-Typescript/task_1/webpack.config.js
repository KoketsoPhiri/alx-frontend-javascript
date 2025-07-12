const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './js/main.ts', // Entry point in the 'js' folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname), // Output directly to the current directory (task_1)
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname), // Serve from the current directory (task_1)
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'bundle.js',
        '*.js.map',
        'index.html'
      ],
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template in the 'public' folder
      filename: 'index.html', // Output HTML filename directly in task_1
    }),
  ],
};