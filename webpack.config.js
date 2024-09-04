const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

ENTRY_PATH = path.resolve(__dirname, 'src/view/index');
DIST_PATH = path.resolve(__dirname, 'dist');
PUBLIC_PATH = path.resolve(__dirname, 'public');

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: DIST_PATH,
    filename: 'js/main.[contenthash:6].js',
    chunkFilename: 'js/[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(s[ac]ss|css)$/,
        use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'sass-loader']
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: DIST_PATH,
      serveIndex: true,
      watch: true
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      filename: 'index.html'
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PUBLIC_PATH,
          to: DIST_PATH,
          filter: (name) => {
            return !name.endsWith('index.html');
          }
        }
      ]
    }),
    new CleanWebpackPlugin()
  ]
};
