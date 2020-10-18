import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AOS from 'aos';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from '../routes';
import './App.css';
import theme from '../theme';

const browserHistory = createBrowserHistory();

browserHistory.listen((location) => {
	// Use setTimeout to make sure this runs after React Router's own listener
	setTimeout(() => {
		// Keep default behavior of restoring scroll position when user:
		// - clicked back button
		// - clicked on a link that programmatically calls `history.goBack()`
		// - manually changed the URL in the address bar (here we might want
		// to scroll to top, but we can't differentiate it from the others)
		if (location.action === 'POP') {
			return;
		}
		// In all other cases, scroll to top
		window.scrollTo(0, 0);
	});
});

const App = (): JSX.Element => {
	AOS.init({
		once: true,
		delay: 50,
		duration: 500,
		easing: 'ease-in-out',
	});
	return (
		<StrictMode>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes />
				</Router>
			</ThemeProvider>
		</StrictMode>
	);
};

export default App;
