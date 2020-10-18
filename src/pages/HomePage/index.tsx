import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Divider,
	Drawer,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section } from '@components/organisms';
import About from '@pages/About';
import Advantages from '@pages/Advantages';
import Integrations from '@pages/Integrations';
import Features from '@pages/Features';
import Reviews from '@pages/Reviews';

import useStyles from '@pages/HomePage/styles';
import { ContactForm } from '../../common';
import {
	partners,
	advantages,
	reviews,
	integrations,
	customizations,
} from '../../data';

const HomePage = (): JSX.Element => {
	const classes = useStyles();

	const [openBottombar, setOpenBottombar] = React.useState(false);

	const handleBottombarOpen = () => {
		setOpenBottombar(true);
	};

	const handleBottombarClose = () => {
		setOpenBottombar(false);
	};

	return (
		<div className={classes.root}>
			<Section className={classes.pagePaddingTop}>
				<About data={partners} />
				<Section>
					<Divider />
				</Section>
				<Section>
					<Divider />
				</Section>
				<Advantages data={advantages} />
				<Section>
					<Divider />
				</Section>
				<Reviews data={reviews} />
				<Section>
					<Divider />
				</Section>
				<Integrations data={integrations} />
				<Section>
					<Divider />
				</Section>
				<Features data={customizations} />
				<Section>
					<Divider />
				</Section>
			</Section>
			<Divider />
			<AppBar position="fixed" className={classes.appBarBottom}>
				<Toolbar disableGutters className={classes.toolbarBottom}>
					<IconButton
						className={classes.chatIconButton}
						onClick={handleBottombarOpen}
					>
						<ForumIcon className={classes.forumIcon} />
					</IconButton>
					<Drawer
						anchor="bottom"
						open={openBottombar}
						onClose={handleBottombarClose}
					>
						<div className={classes.contactForm}>
							<ContactForm />
						</div>
					</Drawer>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default HomePage;
