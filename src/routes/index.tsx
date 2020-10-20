// react libraries
import React from 'react';
// third party packages
import { Redirect, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import { RouteWithLayout } from '../common';
import { Main as MainLayout, Minimal as MinimalLayout } from '../layouts';

const Routes = (): any => (
	<Switch>
		<Redirect exact from="/" to="/home" />
		<RouteWithLayout component={HomePage} layout={MainLayout} path="/home" />
		<RouteWithLayout
			component={NotFoundPage}
			layout={MinimalLayout}
			path="/404"
		/>
		<Redirect to="/404" />
	</Switch>
);

export default Routes;
