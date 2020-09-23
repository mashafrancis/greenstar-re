import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// components
import App from './App';
// styles
import './index.css';

const rootNode = document.getElementById('root');

render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
	rootNode,
);

serviceWorker.register();
