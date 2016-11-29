var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    output: {
        path:   helpers.root('dist'),
        publicPath: '',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NormalModuleReplacementPlugin(
            /src\/environments\/environment\.js/,
            require.resolve(helpers.root('src/environments/environment.prod.js')))
    ]

});