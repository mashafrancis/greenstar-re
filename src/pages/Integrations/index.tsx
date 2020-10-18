import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Button, Avatar, useMediaQuery } from '@material-ui/core';
import { Image } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import { DescriptionListIcon } from '@components/organisms';
import useStyles from '@pages/Integrations/styles';
import { IntegrationsProps } from '@pages/Integrations/interfaces';
import createUUID from '@utils/createUUID';

const Integrations = ({
	data,
	className,
	...rest
}: IntegrationsProps): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
			<SectionHeader
				title="Integrations"
				subtitle="TheFront integrates with all the tools you love and use, to allow you to work smarter and faster."
				ctaGroup={[
					<Button
						key={createUUID()}
						variant="outlined"
						size={isMd ? 'large' : 'medium'}
						color="primary"
					>
						See all integrations
					</Button>,
				]}
				fadeUp
			/>
			<Grid container spacing={4}>
				{data.map((item) => (
					<Grid
						key={item.name}
						item
						container
						alignItems="center"
						direction="column"
						xs={12}
						sm={6}
						md={4}
						data-aos="fade-up"
					>
						<DescriptionListIcon
							icon={
								<Avatar className={classes.avatar}>
									<Image src={item.logo} alt={item.name} />
								</Avatar>
							}
							title={item.name}
							subtitle={item.title}
							align="center"
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Integrations;
