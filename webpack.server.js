const path = require('path')

module.exports = {
    //Specify Node Bundle
    target: 'node',
    //Root file of server application
    entry: './src/index.js',
    //Output directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    //Tell webpack to run Babel on all JS files.
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}