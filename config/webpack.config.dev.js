const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

//plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin")
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


const devConfig = {
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    overlay:true
  },
 plugins: [
   new GenerateJsonPlugin(
     `./login/dev.oktaConfig.json`,
      {
        "env":"dev"
      }
      ),
      new OptimizeCssAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename:"[name]-[contenthash].css"
      }),
      new webpack.optimize.SplitChunksPlugin({names:['vendor','manifest']}),
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new MinifyPlugin(),
      new CompressionPlugin({
        algorithm:'gzip'
      }),
      new BundleAnalyzerPlugin({
        generateStatsFile:true
      })
    ],
    mode:"development"
}



module.exports = merge(baseConfig,devConfig)
