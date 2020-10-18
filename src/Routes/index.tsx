// react libraries
import React from 'react';
// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';

const Routes = (): any => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/404" component={NotFoundPage} />
		<Redirect to="/404" />
	</Switch>
);

export default Routes;
