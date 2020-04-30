// @ts-ignore
const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "main.js",
      library: pkg.name,
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
          {
              test: /\.(tsx|ts)$/,
              exclude: /node_modules/,
              loader: "ts-loader",
              options: { allowTsInNodeModules: true }
          },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js",".jsx"]
    },
    target: 'node',
    externals: [nodeExternals()]
};
