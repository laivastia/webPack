import path from 'path';
const htmlWebpackPlugin = require('html-webpack-plugin')

export default () => { 
  entry: {
    bundle: './src/insex.js'
 },
 output: {
   path: path.join(__dirname, 'dist'),
   filename: '[name].js'
 },
 module: {
    rules[
      {
         test: /\.css$/,
         use: ['style-loader', 'css-loader'],
      }
    ]
 },
 plugins: [
   htmlWebpackPlugin()
 ]   
}