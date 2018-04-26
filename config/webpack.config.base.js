const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VENDOR_LIBS = [
  "lodash",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "react-router-dom",
  "react-router-redux",
  "redux",
  "redux-form",
  "redux-observable",
  "rxjs",
  "ramda",
  "immutable"
];

module.exports = {
  entry: {
    bundle:['@babel/polyfill','./src/index.js'],
    vendor:VENDOR_LIBS
  },
  output:{
   path: path.join(__dirname, '../build'),
   filename: '[name].[hash].js',
   publicPath:'/'
 },
 resolve: {
   extensions: ['.js', '.jsx']
 },
 module: {
  rules: [
    {
        test: /\.scss$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
          {
            loader:"css-loader",
            options:{
              modules:true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader:'postcss-loader'
          },
          {
            loader:'sass-loader'
          }
        ]
    },
   {
         test: /\.(png|jpg|gif|pdf|svg|ico)$/,
         use: [
           {
             loader: 'url-loader',
             options: {
               limit: 8192,
               fallback: 'file-loader'
             }
           }
         ]
   },
   {
       test: /\.(png|jpe?g|gif|pdf|svg|ico)$/,
       use: {
         loader: "file-loader",
         options: {
           name: "images/[name]-[hash:8].[ext]",
         }
       }
   },
   {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory:true,
        presets: [
          [
            '@babel/preset-env',
            {
              "targets":{
                "browsers":["last 2 versions"]
              },
              "debug":true
            }
          ]
        ],
        plugins:["@babel/plugin-transform-async-to-generator"]
      }
    }
  }
  ]
}
}
