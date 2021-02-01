// react libraries
import React from 'react';
// third party packages
import { Route, Redirect, Switch } from 'react-router-dom';
import {
	Service as ServiceView,
	NotFoundCover as NotFoundCoverView,
} from '../pages';
import WithLayout from '../WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from '../layouts';

const Routes = (): any => (
	<Switch>
		<Redirect exact from="/" to="/home" />
		<Route
			exact
			path="/"
			render={(matchProps) => (
				<WithLayout
					{...matchProps}
					component={ServiceView}
					layout={MainLayout}
				/>
			)}
		/>
		<Route
			exact
			path="/404"
			render={(matchProps) => (
				<WithLayout
					{...matchProps}
					component={NotFoundCoverView}
					layout={MinimalLayout}
				/>
			)}
		/>
		<Redirect to="/404" />
	</Switch>
);

export default Routes;
