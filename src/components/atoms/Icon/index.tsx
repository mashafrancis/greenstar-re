import React from 'react';
import clsx from 'clsx';
import useStyles from '@components/atoms/Icon/styles';
import { IconProps } from '@components/atoms/Icon/interfaces';

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = ({
	fontIconClass,
	size = 'small',
	fontIconColor,
	className,
	...rest
}: IconProps): JSX.Element => {
	const classes = useStyles();

	return (
		<i
			className={clsx(
				'icon',
				classes.root,
				fontIconClass,
				classes[size],
				className,
			)}
			style={{ color: fontIconColor }}
			{...rest}
		/>
	);
};

export default Icon;
