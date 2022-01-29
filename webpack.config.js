const path = require('path');
const devMode = process.env.NODE_ENV !== "prod";

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.bundle.js'
    },
    devServer: {
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
              ]
            }        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'HTML, CSS Basic',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}