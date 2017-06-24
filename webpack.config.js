
const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './static/src/App.jsx',
        vendor: ['react','react-dom','whatwg-fetch'],
    },
    output: {
        path: path.resolve(__dirname,  "./static/dist"),
        filename: 'app.bundle.js'
    },
    plugins: [
        //promern book config gives error
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],
    module: {
        loaders: [
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
        ]
    },
    devServer: {
        port: 8000,
        contentBase: 'static', //where index.html resides
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    }
};