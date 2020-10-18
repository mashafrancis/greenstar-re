import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Icon } from '@components/atoms';
import useStyles from '@components/molecules/IconAlternate/styles';
import { IconAlternateProps } from '@components/molecules/IconAlternate/interfaces';

/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */
const IconAlternate = ({
	iconProps,
	fontIconClass,
	size = 'medium',
	color,
	shape = 'circle',
	className,
	...rest
}: IconAlternateProps): JSX.Element => {
	const classes = useStyles();
	const useBackgroundStyles = makeStyles(() => ({
		background: {
			background: color[50],
		},
	}));
	const backgroundClasses = useBackgroundStyles();

	return (
		<Avatar
			className={clsx(
				'icon-alternate',
				classes.root,
				classes[size],
				classes[shape],
				backgroundClasses.background,
				className,
			)}
			{...rest}
		>
			<Icon
				size={size}
				fontIconClass={fontIconClass}
				fontIconColor={color[500]}
				className="icon-alternate__icon"
				{...iconProps}
			/>
		</Avatar>
	);
};

export default IconAlternate;
