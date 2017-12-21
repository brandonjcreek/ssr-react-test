const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")
const webpackNodeExternals = require("webpack-node-externals")

const config = {
    //Specify Node Bundle
    target: 'node',
    //Root file of server application
    entry: './src/index.js',
    //Output directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [
        webpackNodeExternals()
    ]
}

module.exports = merge(baseConfig, config)