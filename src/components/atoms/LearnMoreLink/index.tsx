import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Typography, IconButton } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import useStyles from '@components/atoms/LearnMoreLink/styles';
import { LearnMoreLinkProps } from '@components/atoms/LearnMoreLink/interfaces';

/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */
const LearnMoreLink = ({
	color,
	component = 'Link',
	variant = 'subtitle1',
	title,
	href = '#',
	className,
	iconProps = {},
	typographyProps = {},
	...rest
}: LearnMoreLinkProps): JSX.Element => {
	const classes = useStyles();

	const children = (
		<>
			<Typography
				component="span"
				className={clsx('learn-more-link__typography', classes.title)}
				variant={variant}
				color={color || 'primary'}
				{...typographyProps}
			>
				{title}
			</Typography>
			<IconButton
				className={clsx('learn-more-link__icon-button', classes.icon)}
				color={color || 'primary'}
				{...iconProps}
			>
				<ArrowRightAltIcon className="learn-more-link__arrow" />
			</IconButton>
		</>
	);

	if (component === 'Link') {
		return (
			<Link
				to={href}
				className={clsx('learn-more-link', classes.root, className)}
				{...rest}
			>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={href}
			className={clsx('learn-more-link', classes.root, className)}
			{...rest}
		>
			{children}
		</a>
	);
};

export default LearnMoreLink;
