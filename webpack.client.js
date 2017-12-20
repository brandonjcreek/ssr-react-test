const path = require('path')

module.exports = {
    //Root file of client application
    entry: './src/client/index.js',
    //Output directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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