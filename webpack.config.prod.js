const base = require('./webpack.config');
module.exports= Object.assign({},base,{
    mode:'production',
    // 防止将某些import的包打包到bundle中，而是在运行的时候再去外部获取这些扩展依赖。
    externals:{
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',//使用script标签引入的
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
})