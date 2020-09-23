// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import matchMediaPolyfill from 'mq-polyfill';

Object.defineProperty(global, 'Node', {
	value: { firstElementChild: 'firstElementChild' },
});

matchMediaPolyfill(window);
window.resizeTo = function resizeTo(width: number, height: number) {
	Object.assign(this, {
		innerWidth: width,
		innerHeight: height,
		outerWidth: width,
		outerHeight: height,
	}).dispatchEvent(new this.Event('resize'));
};
