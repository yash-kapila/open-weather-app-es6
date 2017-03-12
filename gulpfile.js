var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var del = require('del');
var webpackConfig = require('./webpack.config.js');
var appConfig = require('./config.json');

function getOutputPath() {
	return '_build/' + appConfig.name;
};

// build index.html
function buildIndexHtml() {
	var indexHtmlPath = appConfig.index;
	var outputPath = __dirname + '/' + getOutputPath();
	var injectPaths = gulp.src([
		outputPath + '/vendor*.js',
		outputPath + '/*.js',
		outputPath + '/*.css'
	], {
			read: false,
			cwd: outputPath
		});

	return gulp.src(indexHtmlPath)
		.pipe(inject(injectPaths, { addRootSlash: false }))
		.pipe(gulp.dest(outputPath));
};

function build() {
	return function (done) {
		var outputPath = getOutputPath();

		var config = webpackConfig();

		// clean existing folder
		gutil.log('[build]', 'Cleaning target directory...')
		del.sync(['./' + outputPath + '/**/*']);

		// run Webpack bundler
		gutil.log('[build]', 'Running Webpack bundler...');
		webpack(config, function (err, stats) {
			if (err) {
				throw new gutil.PluginError('build', err);
			}

			// build index.html
			buildIndexHtml(function () {
				gutil.log('[build]', '\' build complete.');
				done();
			});
		});
	}
}

// dev-server
function server() {
	return function (done) {
		var outputPath = getOutputPath();

		var config = webpackConfig();

		var onServerLoad = function (err, stats) {
			if (err) {
				throw new gutil.PluginError('dev-server', err);
			}

			build()(function (error) {
				done(error);
			});
		};

		//gutil.log('[dev-server]', 'Running Webpack bundler...');
		new webpackDevServer(webpack(config, onServerLoad), {
			contentBase: config.output.path,
			publicPath: '/',
			hot: true,
			stats: {
				colors: true
			},
			noInfo: true,
			proxy: {
				'/api/*': {
					target: 'http://api.openweathermap.org',
					secure: true,
					rewrite: function (req) {
						console.log(req);
						req.url = req.url.replace(/^\/api(.+)$/, '$1');
					}
				}
			}
		}).listen(8080, 'localhost', function (err) {
			if (err) {
				throw new gutil.PluginError('dev-server', err);
			}
		});
	}
};

// dev-server tasks
gulp.task('server:local', server());

gulp.task('default', ['server:local']);