var webpack = require('webpack');
var path = require('path');
var appConfig = require('./config.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {

	var config = {
		entry: {
			vendor: appConfig.vendor,
			main: appConfig.entry
		},
		output: {
			path: path.resolve(__dirname + '/_build/' + appConfig.name),
			filename: '[name].bundle.js'
		},
		resolve: {
			modules: ["node_modules"]
		},
		module: {
			rules: [
				{ test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
				{ test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }) },
				{ test: /\.html$/, loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html-loader' },
				{ test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
				{ test: /\.js$/, exclude: /(node_modules)/, loader: ['ng-annotate-loader', 'babel-loader?presets[]=es2015'] },
				{ test: /\.(ttf|eot|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=fonts/[name].[ext]' }
			]
		},
		plugins: [
			new ExtractTextPlugin('bundle.css'),
			new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' } ),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.LoaderOptionsPlugin({
				debug: true
			})
		],
		devtool: 'eval'
	};

	return config;
};