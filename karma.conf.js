module.exports = function(config) {
	config.set({
		frameworks: ['source-map-support', 'mocha', 'chai-sinon'],
		reporters: ['mocha'],
		browsers: ['PhantomJS'],

		mochaReporter: {
			showDiff: true
		},

		files: [
			'test/**/*.js'
		],

		preprocessors: {
			'test/_setup.js': ['webpack', 'sourcemap'],
			'{src,test}/**/*.js': ['webpack', 'sourcemap']
		},

		webpack: {
			module: {
				loaders: [{
					test: /\.jsx?$/,
					exclude: [
						/node_modules/,
						/dist/
					],
					loader: 'babel'
				}]
			},
			resolve: {
				alias: {
					src: __dirname+'/src'
				}
			},
			devtool: 'inline-source-map'
		},

		webpackMiddleware: {
			noInfo: true
		}
	});
};
