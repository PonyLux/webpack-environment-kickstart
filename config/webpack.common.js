var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: helpers.root('src/index.js'),
    resolve: {
        extensions: ['.js', '.json'],
        modules: [helpers.root('src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: [ /node_modules/ ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: helpers.root('src/index.html'),
            chunksSortMode: 'dependency'
        })
    ]
};

module.exports = config;