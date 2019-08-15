// webpack的格式
const path = require('path');
// html-webpack-plugin是一个改写html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    mode:'production',
    // r入口文件entry
    entry:{
        index:'./lib/index.tsx'
    },
// 配置模块如何解析
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.jsx']  
    },
    // 
    module: {
        // 将jsx文件解析
       rules:[
           {
               test:/\.tsx?$/,
               loader:'awesome-typescript-loader'
           }
       ]
    },
    // 输出文件
    output:{
        // path:'./dist'
        // 不能像上面那样写的是因为不同的操作系统的分割符不同。————dirname就是当前的目录,path.resolvenodejs会根据不同的操作系统来生成不同的目录。
        path:path.resolve(__dirname,'dist/lib'),       
        library:"reactWheel",//导出的目录
        libraryTarget:'umd'//导出的文件的格式
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]

}