var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var app_dir = __dirname + '/src';
var node_dir = __dirname + '/node_modules';

var allComponentsPaths = ['./src/field-2d/Field2D.js',
                        './src/field-3d/Field3D.js',
                        './src/game-stats/GameStats.js',
                        './src/live-events/LiveEvents.js',
                        './src/player-details/PlayerDetails.js',
                        './src/teams-table/TeamsTable.js'];

var allComponentsNames = ['Field2D',
                        'Field3D',
                        'GameStats',
                        'LiveEvents',
                        'PlayerDetails',
                        'TeamsTable'];

var allConfigs = [];

allComponentsPaths.forEach(function (componentPath, index) {
    allConfigs.push(
        {
            entry: componentPath,
            output: {
                path: './dist',
                filename: allComponentsNames[index] + '.js'
            },
            module: {
                loaders: [{
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style', 'css!sass')
                }, {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /(node_modules|bower_components)/,
                    query: {
                        presets: ["es2015", "stage-0", "react"]
                    }
                }]
            },
            plugins: [
                new ExtractTextPlugin('./' + allComponentsNames[index] + '.min.css', {
                    allChunks: true
                })
            ]
        }
    );
});

allConfigs.push(
    {
        entry: allComponentsPaths,
        output: {
            path: './dist',
            filename: 'SportsStats.all.js'
        },
        module: {
            loaders: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            }]
        },
        plugins: [
            new ExtractTextPlugin('./SportsStats.min.css', {
                allChunks: true
            })
        ]
    }
);

module.exports = allConfigs;
