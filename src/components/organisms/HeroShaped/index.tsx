import React from 'react';
import clsx from 'clsx';
import { Section } from '@components/organisms';
import useStyles from '@components/organisms/HeroShaped/styles';
import { HeroShapedProps } from '@components/organisms/HeroShaped/interfaces';

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = ({
	leftSide,
	rightSide,
	className,
	...rest
}: HeroShapedProps): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
			<div className={clsx('hero-shaped__wrapper', classes.hero)}>
				<Section
					className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
				>
					{leftSide}
				</Section>
				<div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
					<div className={clsx('hero-shaped__shape', classes.shapeContainer)}>
						<img
							src="/images/shapes/shape-fluid.svg"
							className={clsx('hero-shaped__shape-image', classes.shape)}
							alt=""
						/>
					</div>
					<div className={clsx('hero-shaped__cover', classes.heroCover)}>
						<div
							className={clsx(
								'hero-shaped__image-container',
								classes.heroImageContainer,
							)}
						>
							<div className={clsx('hero-shaped__image', classes.heroImage)}>
								{rightSide}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroShaped;
