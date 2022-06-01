'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'js', 'main.js'),

  output: {
    // filename: '[name].js',

    // дописать уникальное название хэша к main...js
    filename: 'main[contenthash].js',
    path: path.resolve(__dirname, 'bundle'),
    clean: true,
  },

  devtool: 'eval',

  module: {
    rules: [

      // ресурсы
      {
        // регулярка для типов файлов
        test: /\.(png|jpe?g|gif|mp3)$/i,

        // лоадер для обработки наших правил
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'src/assets/sound/chicken.mp3'
            }
          }
        ],
      },

      // css
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      // sass
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),

    // показывает страничку (автоматом) какой плагин сколько занимает
    // new BundleAnalyzerPlugin,
  ],


}