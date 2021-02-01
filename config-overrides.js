const path = require('path');
// const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/* eslint-disable @typescript-eslint/no-var-requires */
/* config-overrides.js */
// eslint-disable-next-line import/no-extraneous-dependencies
const {
	useBabelRc,
	override,
	addWebpackAlias,
	addBabelPlugin,
	// addWebpackPlugin,
} = require('customize-cra');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = override(
	useBabelRc(),
	isDevMode && addBabelPlugin(require.resolve('react-refresh/babel')),
	// isDevMode && addWebpackPlugin(new ReactRefreshPlugin()),
	addWebpackAlias({
		'@components': path.resolve(__dirname, './src/components'),
		'@pages': path.resolve(__dirname, './src/pages'),
		'@utils': path.resolve(__dirname, './src/utils'),
		'@context': path.resolve(__dirname, './src/context'),
	}),
);
