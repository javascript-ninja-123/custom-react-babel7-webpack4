const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

//plugin

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');



const prodConfig = {
 plugins: [
  new OptimizeCssAssetsPlugin(),
  new MiniCssExtractPlugin({
    filename:"[name]-[contenthash].css"
  }),
  new webpack.optimize.SplitChunksPlugin({names:['vendor','manifest']}),
  new HtmlWebpackPlugin({template: './src/index.html'})
],
mode:"production"
}


module.exports = merge(baseConfig,prodConfig)
