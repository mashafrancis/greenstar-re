import React from 'react';
import clsx from 'clsx';
import { Topbar } from './components';
import useStyles from './styles';
import { MinimalProps } from './interfaces';

const Minimal = ({ children, className }: MinimalProps): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)}>
			<Topbar />
			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default Minimal;
