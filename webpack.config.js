var path = require("path");
var app_dir = __dirname + '/src';
var node_dir = __dirname + '/node_modules';

allConfigs.push(
    {
        entry: './src/index.js',
        output: {
            path: './lib',
            filename: 'index.js',
            library: 'shared-components',
            libraryTarget: 'umd'
        },
        externals: {
          'react': 'react',
          'react-dom': 'react-dom'
        },
        module: {
            loaders: [{
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            }]
        }
    }
);

module.exports = allConfigs;
