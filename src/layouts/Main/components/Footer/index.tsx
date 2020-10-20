import React, { forwardRef, ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
	Typography,
	IconButton,
	Grid,
	List,
	ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import { Image } from '@components/atoms';
import createUUID from '@utils/createUUID';
import useStyles from './styles';
import { FooterProps } from './interfaces';
import { MenuGroupProps } from '../Topbar/interfaces';

type Props = {
	children: ReactNode;
	href?: string;
};
type Ref = HTMLDivElement;

const CustomRouterLink = forwardRef<Ref, Props>((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<RouterLink to="#" {...props} />
	</div>
));

CustomRouterLink.displayName = 'CustomRouterLink';

const Footer = ({ pages, className, ...rest }: FooterProps): JSX.Element => {
	const classes = useStyles();

	const { landings } = pages;
	const supportedPages = pages.pages;
	const { account } = pages;

	const MenuGroup = ({ item }: MenuGroupProps) => {
		return (
			<List disablePadding className={classes.menuItem}>
				<ListItem disableGutters className={classes.menuGroupItem}>
					<Typography variant="body2" className={classes.menuGroupTitle}>
						{item.groupTitle}
					</Typography>
				</ListItem>
				{item.pages.map((page) => (
					<ListItem
						disableGutters
						key={createUUID()}
						className={classes.menuGroupItem}
					>
						<Typography
							variant="body2"
							component={CustomRouterLink}
							// to={page.href}
							className={clsx(classes.navLink, 'submenu-item')}
						>
							{page.title}
						</Typography>
					</ListItem>
				))}
			</List>
		);
	};

	const LandingPages = () => {
		const { services, apps, web } = landings.children;
		return (
			<div className={classes.menu}>
				<div>
					<MenuGroup item={services} />
					<MenuGroup item={apps} />
				</div>
				<div>
					<MenuGroup item={web} />
				</div>
			</div>
		);
	};

	const SupportedPages = () => {
		const {
			career,
			helpCenter,
			company,
			contact,
			blog,
			portfolio,
		} = supportedPages.children;
		return (
			<div className={classes.menu}>
				<div>
					<MenuGroup item={career} />
					<MenuGroup item={helpCenter} />
				</div>
				<div>
					<MenuGroup item={company} />
					<MenuGroup item={contact} />
				</div>
				<div>
					<MenuGroup item={blog} />
					<MenuGroup item={portfolio} />
				</div>
			</div>
		);
	};

	const AccountPages = () => {
		const { settings, signup, signin, password, error } = account.children;
		return (
			<div className={classes.menu}>
				<div>
					<MenuGroup item={settings} />
					<MenuGroup item={signup} />
				</div>
				<div>
					<MenuGroup item={signin} />
					<MenuGroup item={password} />
					<MenuGroup item={error} />
				</div>
			</div>
		);
	};

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<div className={classes.footerContainer}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={2}>
						<List disablePadding>
							<ListItem disableGutters className={classes.logoContainerItem}>
								<div className={classes.logoContainer}>
									<a href="/" title="thefront">
										<Image
											className={classes.logoImage}
											src="/images/logos/logo-negative.svg"
											alt="thefront"
											lazy={false}
										/>
									</a>
								</div>
							</ListItem>
							<ListItem disableGutters>
								<IconButton className={classes.socialIcon}>
									<FacebookIcon className={classes.icon} />
								</IconButton>
								<IconButton className={classes.socialIcon}>
									<InstagramIcon className={classes.icon} />
								</IconButton>
								<IconButton className={classes.socialIcon}>
									<TwitterIcon className={classes.icon} />
								</IconButton>
								<IconButton className={classes.socialIcon}>
									<PinterestIcon className={classes.icon} />
								</IconButton>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} md={10} className={classes.menuListContainer}>
						<Grid container spacing={0}>
							<Grid item className={classes.listItem}>
								<LandingPages />
							</Grid>
							<Grid item className={classes.listItem}>
								<SupportedPages />
							</Grid>
							<Grid item className={classes.listItem}>
								<AccountPages />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
