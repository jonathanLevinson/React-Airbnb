const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'server/public/js/app.bundle.js',
    path: path.resolve(__dirname, '')
  },
  module: {
    rules: [
      { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
    //  { test:/\.css$/, use: ['style-loader','css-loader'] },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("server/public/css/globals.css"),
    new CopyWebpackPlugin([
          { from: 'server/public/index.html' },          
      ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats:"minimal",
    open:true,
    openPage:""
  },
  devtool:"source-map"
};