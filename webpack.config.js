const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    open: true
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "img",
          to: "./img",
        },
        {
          from: "js",
          to: "./js",
        },
        {
          from: "css",
          to: "./css",
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()],
            },
          },
          `sass-loader`
        ]
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img/',
          name: '[name].[ext]'
        },
      },
      {
        test: /\.(woff|ttf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        },

      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  }
};
