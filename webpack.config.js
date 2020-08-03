const webpack = require('webpack')
const webpackConfig = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        publicPath: '/',
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        open: true,
        host: '0.0.0.0',
        openPage: '/dist/index.html',
        hot: true,
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                [
                                    'import',
                                    {
                                        libraryName: 'antd',
                                        libraryDirectory: 'lib',
                                        style: true,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = webpackConfig
