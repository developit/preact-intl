import jsxChai from 'preact-jsx-chai';
chai.use(jsxChai);

if (!global.Intl) {
	require('intl');
	require('intl/locale-data/jsonp/en.js');
}
