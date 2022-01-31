const path = require('path');
const { merge } = require('webpack-merge');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 공통 설정
const common = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(sc|sa|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
              ]
            }        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
    ]
}

// 모드 별 설정 파일 merge
module.exports= (env, argv) => {
    console.log(`mode:${argv.mode}`);

    if(argv.mode === 'development') {
        return merge(common, require(`./config/webpack.dev.js`));
    } else {
        return merge(common, require(`./config/webpack.prod.js`));
    }
}