import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// components
import App from './App';
// styles
import './index.css';
import * as serviceWorker from './serviceWorker';

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
