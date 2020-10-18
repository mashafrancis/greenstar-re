import React from 'react';
import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import useStyles from './styles';
import { ImageProps } from './interfaces';

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image = ({
	src,
	srcSet,
	alt,
	lazy,
	className,
	// ...lazyProps,
	...rest
}: ImageProps): JSX.Element => {
	const classes = useStyles();
	if (lazy) {
		return (
			<LazyLoadImage
				className={clsx('image', classes.root, classes.dBlock, className)}
				alt={alt}
				src={src}
				srcSet={srcSet}
				effect="opacity"
				// {...lazyProps}
				{...rest}
			/>
		);
	}

	return (
		<img
			className={clsx('image', classes.root, className)}
			alt={alt}
			src={src}
			srcSet={srcSet}
			{...rest}
		/>
	);
};

Image.defaultProps = {
	alt: '...',
	lazy: true,
	lazyProps: {
		width: 'auto',
		height: 'auto',
	},
};

export default Image;
