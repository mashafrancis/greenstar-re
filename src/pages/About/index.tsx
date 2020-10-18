import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';

import { Image } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import createUUID from '@utils/createUUID';
import { AboutProps } from './intefaces';
import useStyles from './styles';

const About = ({ data, className, ...rest }: AboutProps): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<Grid container justify="space-between" spacing={isMd ? 4 : 0}>
				<Grid item xs={12} md={6} data-aos="fade-up">
					<Grid container spacing={2} alignItems="flex-start">
						<Grid item xs={12}>
							<SectionHeader
								title={
									<span>
										Guaranteed{' '}
										<span className="text-highlighted__primary">
											Company Growth
										</span>{' '}
										with Targeted Leads
									</span>
								}
								subtitle="We will help you to understand your leads and you will increase your company growth by converting the qualified leads into sales."
								ctaGroup={[
									<Button
										key={createUUID()}
										variant="contained"
										color="primary"
										size={isMd ? 'large' : 'medium'}
									>
										Start a Free Trial
									</Button>,
									<Button
										key={createUUID()}
										variant="outlined"
										color="primary"
										size={isMd ? 'large' : 'medium'}
									>
										Learn more
									</Button>,
								]}
								align={isMd ? 'left' : 'center'}
								disableGutter
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="h6"
								color="primary"
								align={isMd ? 'left' : 'center'}
								gutterBottom
							>
								TRUSTED BY:
							</Typography>
							<Grid container justify="space-between">
								{data.map((partner) => (
									<Grid
										item
										container
										justify="center"
										xs={6}
										sm={2}
										key={partner.name}
									>
										<Image
											src={partner.logo}
											alt={partner.name}
											className={classes.promoLogo}
											lazy={false}
										/>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container justify="center" xs={12} md={6} data-aos="fade-up">
					<Image
						src="/images/illustrations/dashboard-extended.svg"
						alt="Dashboard"
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
