var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		entry: './main.js',
		output: {
				path: path.resolve(__dirname, 'build'),
				filename: 'main.bundle.js'
		},
		plugins: [new HtmlWebpackPlugin()],
		module: {
				loaders: [
						{
								test: /\.js$/,
								loader: 'babel-loader',
								query: {
										presets: ['es2015']
								}
						}
				]
		},
		stats: {
				colors: true
		},
		devtool: 'source-map'
};
