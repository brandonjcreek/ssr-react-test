const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")

const config = {
    //Root file of client application
    entry: './src/client/client.js',
    //Output directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)