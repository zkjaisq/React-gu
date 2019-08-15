// webpack的格式
const base = require('./webpack.config')
// html-webpack-plugin是一个改写html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= Object.assign({},base,{
    mode:'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
})