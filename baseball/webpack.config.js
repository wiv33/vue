const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist') //distribution
    }
};