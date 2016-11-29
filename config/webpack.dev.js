var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    debug: true,
    output: {
        path:   helpers.root('dist'),
        publicPath: '',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        "historyApiFallback": true,
        "stats": 'minimal',
        "inline": true
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /src\/environments\/environment\.js/,
            require.resolve(helpers.root('src/environments/environment.dev.js')))
    ]
});