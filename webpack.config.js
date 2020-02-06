const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
}
