var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var app_dir = __dirname + '/client/app';
var node_dir = __dirname + '/node_modules';


var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body'
});

var config = {
    entry: './client/src/AppCore.js',
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            // loaders: ["style", "css", "sass"]
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/,
            query: {
                // cacheDirectory: true,
                presets: ["es2015", "stage-0", "react"]
            }
        }]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin('./dist/style/style.min.css', {
            allChunks: true
        })
    ]
};
module.exports = config;
