'use strict';

// const { resolve } = require("path");
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
// const SRC = resolve(__dirname, 'node_modules');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: path.resolve(__dirname, 'js', 'main.js'),

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'bundle'),
        clean: true,
    },

    devtool: 'eval',

    module: {
        rules: [
            // css
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            // sass
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },

            // mp3
            {
              test: /\.(mp3)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'src/assets/sound/[name].mp3'
                  }
                }
              ],
            },

            // mp4
            {
               test: /\.(webm|mp4)$/,
               use: [
                   {
                       loader: 'file-loader',
                       options: {
                           name: 'src/assets/video/[name].mp3'
                       }
                   }

               ]                
           },

          // pic
          {
            test: /\.(jpg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: 'src/assets/images/[name].[ext]'
                }
              }
            ],
          },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),

        new HTMLWebpackPlugin({
          template: path.resolve(__dirname, 'index.html')
        }),
    ]   
};
