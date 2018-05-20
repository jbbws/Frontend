'use strict'
const path = require('path');
const process = require('process');
const webpack = require(path.resolve('../../node_modules', 'webpack'));
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require(path.resolve('../../node_modules', 'extract-text-webpack-plugin'));
module.exports = {
    context:__dirname,
    mode: 'none',
    entry:'./require',
    output:{
        filename:'../../wwwroot/js/bundle.js'
    },
    resolve:{
        extensions:['.scss','.js','.json']
    },
    resolveLoader:{
        modules:[path.resolve('./','node_modules')]
    },
    module: {
        rules: [
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use:['css-loader','sass-loader']})
            },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' },

        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: '../../wwwroot/css/style.css',
            allChunks: true
        })
    ]
}

/*
        new UglifyJsPlugin ({
            uglifyOptions: {
                output: {
                  comments: true,
                  beautify: true
                }
            }
        })
*/

//     resolve:{
//         extensions:['.scss','.js','.json']
//     }
    // ,
    // resolveLoader:{
    //     modules:[path.resolve('./','node_modules')]
    // }
//}
    // resole:{
    //     extensions:['.scss','.js','.json']
    // },
    // resolveLoader:{
    //     modules:[path.resolve('../..','node_modules')]
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /(\.scss|\.css)$/,
    //             loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use:['css-loader','sass-loader']})
    //         },
    //         { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' },

    //     ]
    // },
    // plugins:[
    //     new ExtractTextPlugin({ filename: '../../wwwroot/static/css/style.css',
    //         allChunks: true
    //     })
    // ]

