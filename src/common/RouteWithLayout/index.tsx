import React from 'react';
import { Route } from 'react-router-dom';
import { RouteWithLayoutProps } from './interfaces';

const RouteWithLayout = ({
	layout: Layout,
	component: Component,
	...rest
}: RouteWithLayoutProps): JSX.Element => {
	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

export default RouteWithLayout;
