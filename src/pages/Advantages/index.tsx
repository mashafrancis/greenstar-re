import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { LearnMoreLink } from '@components/atoms';
import { SectionHeader, IconAlternate } from '@components/molecules';
import { CardBase, DescriptionListIcon } from '@components/organisms';
import useStyles from '@pages/Advantages/styles';
import { AdvantagesProps } from '@pages/Advantages/interfaces';

const Advantages = ({
	data,
	className,
	...rest
}: AdvantagesProps): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	});

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<SectionHeader
				title={
					<span>
						TheFront is a Website Kit Platform that Helps you to{' '}
						<span className="text-highlighted">
							Build the Right Website for you Customers
						</span>
					</span>
				}
				subtitle="At TheFront, we go to great lengths to provide you with the best, highest-quality components. In fact, we’re so confident about our kit, we even back our leads with a 95% accuracy guarantee."
				fadeUp
			/>
			<Grid container spacing={isLg ? 10 : 2}>
				{data.map((item) => (
					<Grid
						key={item.title}
						item
						container
						alignItems="center"
						direction="column"
						xs={12}
						sm={6}
						data-aos="fade-up"
					>
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/* @ts-expect-error */}
						<CardBase liftUp variant="outlined">
							<DescriptionListIcon
								title={item.title}
								subtitle={item.description}
								icon={
									<IconAlternate
										fontIconClass={item.icon}
										size="medium"
										color={blue}
									/>
								}
							/>
							<LearnMoreLink
								title="Learn more"
								variant="body1"
								className={classes.learnMoreLink}
								color="secondary"
							/>
						</CardBase>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Advantages;
