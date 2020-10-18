import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Button, colors, useMediaQuery } from '@material-ui/core';
import { LearnMoreLink } from '@components/atoms';
import { SectionHeader, IconAlternate } from '@components/molecules';
import { CardBase, DescriptionListIcon } from '@components/organisms';
import useStyles from '@pages/Features/styles';
import { FeaturesProps } from '@pages/Features/interfaces';
import createUUID from '@utils/createUUID';

const Features = ({ data, className, ...rest }: FeaturesProps): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<SectionHeader
				title={
					<span>
						A Website Builder Tool that{' '}
						<span className="text-highlighted">Works for You</span>
					</span>
				}
				subtitle="Companies from across the globe have had fantastic experiences using TheFront."
				ctaGroup={[
					<Button
						key={createUUID()}
						variant="outlined"
						size={isMd ? 'large' : 'medium'}
						color="secondary"
					>
						See all integrations
					</Button>,
				]}
				fadeUp
			/>
			<Grid container spacing={2}>
				{data.map((item) => (
					<Grid
						key={item.title}
						item
						container
						alignItems="center"
						direction="column"
						xs={12}
						sm={6}
						md={3}
						data-aos="fade-up"
					>
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/* @ts-expect-error */}
						<CardBase liftUp variant="outlined" align="left">
							<DescriptionListIcon
								title={item.title}
								subtitle={item.description}
								icon={
									<IconAlternate
										fontIconClass={item.icon}
										size="medium"
										color={colors.blue}
									/>
								}
								align="left"
							/>
							<div style={{ flexGrow: 1 }} />
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

export default Features;
