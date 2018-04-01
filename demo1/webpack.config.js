/**
 * Created by Administrator on 2018/3/29.
 */
let webpack  = require('webpack');
let path     = require('path');

module.exports = {
    context:__dirname + '/src',
    entry:"./js/index.js",
    module:{
        loaders:[{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            }
        }]
    },
    output:{
        path:__dirname + "/src/",
        publicPath: "/src/",           // 指定编译后的包(bundle)的访问位置
        filename: "bundle.js"
    }
};