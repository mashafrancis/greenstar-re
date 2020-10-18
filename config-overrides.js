const path = require('path');

/* eslint-disable @typescript-eslint/no-var-requires */
/* config-overrides.js */
// eslint-disable-next-line import/no-extraneous-dependencies
const { useBabelRc, override, addWebpackAlias } = require('customize-cra');

module.exports = override(
	useBabelRc(),
	addWebpackAlias({
		'@components': path.resolve(__dirname, './src/components'),
		'@pages': path.resolve(__dirname, './src/pages'),
		'@utils': path.resolve(__dirname, './src/utils'),
		'@context': path.resolve(__dirname, './src/context'),
	}),
);
