import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Button, colors, useMediaQuery } from '@material-ui/core';
import { Image } from '@components/atoms';
import { SectionHeader, IconAlternate } from '@components/molecules';
import { CardReview } from '@components/organisms';
import useStyles from '@pages/Reviews/styles';
import { ReviewsProps } from '@pages/Reviews/interfaces';

const Reviews = ({ data, className, ...rest }: ReviewsProps): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<SectionHeader
				overline={
					<Image
						src="/images/illustrations/rated-by-our-customer.png"
						alt="rating"
						className={classes.sectionHeadlineStars}
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-expect-error
						width="auto"
					/>
				}
				title={
					<span>
						<span className="text-highlighted">Rated 5 out of 5</span> stars by
						our customers!
					</span>
				}
				subtitle="Companies from across the globe have had fantastic experiences using TheFront. Here’s what they have to say."
				fadeUp
			/>
			<Grid container spacing={isMd ? 4 : 2}>
				{data.map((review) => (
					<Grid
						key={review.authorName}
						item
						container
						alignItems="center"
						direction="column"
						xs={12}
						sm={4}
						data-aos="fade-up"
					>
						<CardReview
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-expect-error
							variant="outlined"
							text={review.feedback}
							icon={
								<IconAlternate
									color={colors.blue}
									fontIconClass="fas fa-quote-right"
								/>
							}
							authorName={review.authorName}
							authorTitle={review.authorOccupation}
							authorPhoto={review.authorPhoto}
						/>
					</Grid>
				))}
				<Grid item container xs={12} justify="center">
					<Button
						variant="outlined"
						size={isMd ? 'large' : 'medium'}
						color="secondary"
					>
						See all reviews
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Reviews;
