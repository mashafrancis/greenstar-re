import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar } from '@material-ui/core';

import { Image } from '@components/atoms';
import useStyles from './styles';
import { TopbarProps } from './interfaces';

const Topbar = ({ className, ...rest }: TopbarProps): JSX.Element => {
	const classes = useStyles();

	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar className={classes.toolbar}>
				<div className={classes.logoContainer}>
					<a href="/" title="thefront">
						<Image
							className={classes.logoImage}
							src="/images/logos/logo.svg"
							alt="thefront"
							lazy={false}
						/>
					</a>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
