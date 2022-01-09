var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var APP_DIR = path.resolve(__dirname, 'src');
var BULID_DIR = path.resolve(__dirname, 'dist');
var config = {
    mode: "development",
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BULID_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              },
        ]
    },
    devServer: {
        port: 3000,
        static: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: true,
            sourceMap: true,
            chunksSortMode: "none"
        }),
        new CleanWebpackPlugin()
    ]
};
module.exports = config;