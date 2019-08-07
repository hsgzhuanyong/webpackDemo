const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清楚dist文件

module.exports = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader','css-loader']
      },
      {
          test: /\.scss$/,
          use:[ 'style-loader','css-loader','sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "/images/"
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'builde.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      meta: { viewport: 'width=device-width, initial-scale=1,shrink-to-fit=no, user-scaleble=0' },
      minify: { //去除空格换行
        collapseWhitespace: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}