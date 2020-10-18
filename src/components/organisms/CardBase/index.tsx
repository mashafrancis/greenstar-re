import React from 'react';
import clsx from 'clsx';
import { Card, CardContent } from '@material-ui/core';
import { CardBaseProps } from '@components/organisms/CardBase/interfaces';
import useStyles from '@components/organisms/CardBase/styles';

/**
 * Component to display the basic card
 *
 * @param {Object} props
 */
const CardBase = ({
	withShadow,
	noShadow,
	noBorder,
	noBg,
	liftUp,
	children,
	align = 'center',
	className,
	cardContentProps = {},
	...rest
}: CardBaseProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Card
			className={clsx(
				'card-base',
				classes.root,
				withShadow ? classes.withShadow : {},
				noShadow ? classes.noShadow : {},
				noBorder ? classes.noBorder : {},
				noBg ? classes.noBg : {},
				liftUp ? classes.liftUp : {},
				className,
			)}
			{...rest}
		>
			<CardContent
				className={clsx('card-base__content', classes.content, classes[align])}
				{...cardContentProps}
			>
				{children}
			</CardContent>
		</Card>
	);
};

export default CardBase;
