// встроенная в NodeJS утилита, которая 
// помогает работать с путями в файловой системе
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  // находит прямой путь до текущей директории и дальше в ней папку src с index.js
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    // чистит старые бандлы
    clean: true,
    assetModuleFilename: "[name][ext]"
  },
  devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      // на каком порте запускать
      port: 3000,
      // по дефолту открывается в браузере при запуске
      open: true,
      // hot reloading
      hot: true,
      // enable gzip compression for everything served
      compress: true
  },
  module: {
    rules: [
      {
        // здесь регулярное выражение, чтобы ко всем файлам,
        // которые его проходят, применять этот лоудер
        // эта регулярка означает anything that ends with .scss extension
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.(png|jpj|jpeg|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Gradient Generator',
      filename: "index.html",
      template: "src/index.html"
    }),
    new BundleAnalyzerPlugin(),
    new ESLintPlugin()
  ]
};