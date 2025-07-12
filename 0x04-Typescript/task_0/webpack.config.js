const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // The main entry point for your application. Webpack starts bundling from here.
  output: {
    filename: 'bundle.js', // The name of the bundled JavaScript file.
    path: path.resolve(__dirname, 'dist'), // The output directory for all your bundled files.
    publicPath: '/', // The public URL of the output directory when referenced in a browser.
  },
  mode: 'development', // Sets the Webpack mode. 'development' provides useful debugging tools; 'production' optimizes for performance.
  devtool: 'inline-source-map', // Generates source maps, which help in debugging your original TypeScript code in the browser.
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Specifies the directory from which to serve static files.
    },
    compress: true, // Enable gzip compression for everything served.
    port: 8080, // The port for the development server.
    open: true, // Automatically open the browser when the server starts.
    hot: true, // Enable Hot Module Replacement (HMR) for faster development.
  },
  resolve: {
    extensions: ['.ts', '.js'], // Tell Webpack which extensions to resolve (look for) when importing modules.
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // A regular expression that matches files ending with .ts (TypeScript files).
        use: 'ts-loader', // Specifies the loader to use for these files. `ts-loader` converts TypeScript to JavaScript.
        exclude: /node_modules/, // Excludes the node_modules directory from being processed by ts-loader.
      },
      // You can add more rules here for other file types like CSS, images, etc.
      // Example for CSS:
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the output directory (dist) before each new build.
    new HtmlWebpackPlugin({
      template: './public/index.html', // Specifies the path to your HTML template file.
      filename: 'index.html', // The name of the output HTML file in the 'dist' directory.
    }),
  ],
};