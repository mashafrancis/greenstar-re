import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Image, LearnMoreLink } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import { HeroShaped } from '@components/organisms';
import useStyles from '@pages/NotFoundPage/styles';
import { NotFoundPageProps } from '@pages/NotFoundPage/interfaces';
import createUUID from '@utils/createUUID';

const NotFoundPage = ({ history }: NotFoundPageProps): JSX.Element => {
	const classes = useStyles();

	const handleClick = () => {
		history.goBack();
	};

	return (
		<div className={classes.root}>
			<HeroShaped
				leftSide={
					<div className={classes.formContainer}>
						<SectionHeader
							label="404"
							title="Uh oh."
							subtitle={
								<span>
									There’s nothing here, but if you feel this is an error please{' '}
									<LearnMoreLink
										title="let us know"
										href="#"
										typographyProps={{ variant: 'h6' }}
									/>
								</span>
							}
							titleProps={{
								variant: 'h3',
							}}
							labelProps={{
								color: 'secondary',
								className: classes.label,
								variant: 'h5',
							}}
							ctaGroup={[
								<Button
									key={createUUID()}
									size="large"
									variant="contained"
									color="primary"
									onClick={handleClick}
								>
									Go Back
								</Button>,
							]}
							disableGutter
						/>
					</div>
				}
				rightSide={
					<Image
						src="/images/photos/account/cover-3.png"
						className={classes.image}
						lazy={false}
					/>
				}
			/>
		</div>
	);
};

export default NotFoundPage;
