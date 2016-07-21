import fs from 'fs';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

var babelRc = JSON.parse(fs.readFileSync('.babelrc','utf8'));

export default {
	exports: 'named',
	external: ['preact'],
	plugins: [
		alias({
			'react-intl': __dirname+'/node_modules/react-intl/src/react-intl.js',
			'react': __dirname+'/src/compat.js'
		}),
		nodeResolve({
			jsnext: true,
			skip: ['react', 'preact'],
			preferBuiltins: false
		}),
		commonjs({
			include: 'node_modules/**',
			exclude: ['node_modules/react-intl/**']
		}),
		babel({
			babelrc: false,
			exclude: ['**/locale-data/**'],
			presets: ['es2015-minimal-rollup'].concat(babelRc.presets.slice(1)),
			plugins: babelRc.plugins
		})
	]
};
