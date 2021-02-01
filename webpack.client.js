const path = require('path');
const webpackNodeExternals = require("webpack-node-externals");


module.exports = {
    entry: './client/view/client.js',
    mode: 'development',
    target: "web",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    // externals: [webpackNodeExternals()]
};
