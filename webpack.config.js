const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './dist/gmage-editor.common',

    output:{
        filename:'./example/gmage-editor.common.js',
        hashDigestLength: 6
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html',
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, "./example"),
        port: 9000,
        open: true
    }
}