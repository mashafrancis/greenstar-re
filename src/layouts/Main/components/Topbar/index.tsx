import React, { MouseEvent, forwardRef, useState, ReactNode } from 'react';
import clsx from 'clsx';
import { NavLink as RouterLink } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	Popover,
	Typography,
	IconButton,
	Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from '@components/atoms';
import createUUID from '@utils/createUUID';
import useStyles from './styles';
import { MenuGroupProps, TopbarProps } from './interfaces';

type Props = {
	children: ReactNode;
	href?: string;
};
type Ref = HTMLDivElement;

const CustomRouterLink = forwardRef<Ref, Props>((props, ref) => (
	<div ref={ref}>
		<RouterLink to="#" {...props} />
	</div>
));

CustomRouterLink.displayName = 'CustomRouterLink';

const Topbar = ({
	className,
	onSidebarOpen,
	pages,
	...rest
}: TopbarProps): JSX.Element => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState<any>(null);
	const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);

	const handleClick = (
		event:
			| React.MouseEvent<HTMLLIElement>
			| React.MouseEvent<HTMLAnchorElement>
			| React.MouseEvent<HTMLDivElement>,
		popoverId: string,
	) => {
		setAnchorEl(event.target);
		setOpenedPopoverId(popoverId);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
		setOpenedPopoverId(null);
	};

	const { landings } = pages;
	const supportedPages = pages.pages;
	const { account } = pages;

	const MenuGroup = ({ item }: MenuGroupProps) => {
		return (
			<List disablePadding>
				<ListItem disableGutters>
					<Typography
						variant="body2"
						color="primary"
						className={classes.menuGroupTitle}
					>
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
							variant="body1"
							component={CustomRouterLink}
							// to={page.href}
							className={clsx(classes.navLink, 'submenu-item')}
							color="textSecondary"
							// onClick={handleClose}
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
				<div className={classes.menuItem}>
					<MenuGroup item={services} />
					<MenuGroup item={apps} />
				</div>
				<div className={classes.menuItem}>
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
				<div className={classes.menuItem}>
					<MenuGroup item={career} />
					<MenuGroup item={helpCenter} />
				</div>
				<div className={classes.menuItem}>
					<MenuGroup item={company} />
					<MenuGroup item={contact} />
				</div>
				<div className={classes.menuItem}>
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
				<div className={classes.menuItem}>
					<MenuGroup item={settings} />
				</div>
				<div className={classes.menuItem}>
					<MenuGroup item={signup} />
					<MenuGroup item={signin} />
				</div>
				<div className={classes.menuItem}>
					<MenuGroup item={password} />
					<MenuGroup item={error} />
				</div>
			</div>
		);
	};

	// eslint-disable-next-line consistent-return
	const renderPages = (id: string) => {
		if (id === 'landing-pages') {
			return <LandingPages />;
		}
		if (id === 'supported-pages') {
			return <SupportedPages />;
		}
		if (id === 'account') {
			return <AccountPages />;
		}
	};

	return (
		<AppBar
			{...rest}
			position="relative"
			className={clsx(classes.root, className)}
		>
			<Toolbar disableGutters className={classes.toolbar}>
				<div className={classes.logoContainer}>
					<a href="/" title="thefront">
						<Image
							className={classes.logoImage}
							src="/images/logos/logo.svg"
							alt="thefront"
							lazy={false}
						/>
					</a>
				</div>
				<div className={classes.flexGrow} />
				<Hidden smDown>
					<List className={classes.navigationContainer}>
						{[landings, supportedPages, account].map((page, i) => (
							<div key={page.id}>
								<ListItem
									aria-describedby={page.id}
									onClick={(e) => handleClick(e, page.id)}
									className={clsx(
										classes.listItem,
										openedPopoverId === page.id ? classes.listItemActive : '',
									)}
								>
									<Typography
										variant="body1"
										color="textSecondary"
										className={clsx(classes.listItemText, 'menu-item')}
									>
										{page.title}
									</Typography>
									<ListItemIcon className={classes.listItemIcon}>
										<ExpandMoreIcon
											className={
												openedPopoverId === page.id ? classes.expandOpen : ''
											}
											fontSize="small"
										/>
									</ListItemIcon>
								</ListItem>
								<Popover
									elevation={1}
									id={page.id}
									open={openedPopoverId === page.id}
									anchorEl={anchorEl}
									onClose={handleClose}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'center',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'center',
									}}
									classes={{ paper: classes.popover }}
								>
									<div>{renderPages(page.id)}</div>
								</Popover>
							</div>
						))}
						<ListItem className={classes.listItem}>
							<Typography
								variant="body1"
								color="textSecondary"
								className={classes.listItemText}
								component="a"
								target="blank"
								href="https://thefront-styleguide.maccarianagency.com/"
							>
								Documentation
							</Typography>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button
								size="large"
								variant="contained"
								color="primary"
								component="a"
								target="blank"
								href="https://material-ui.com/store/items/the-front-landing-page/"
							>
								Buy Now
							</Button>
						</ListItem>
					</List>
				</Hidden>
				<Hidden mdUp>
					<IconButton
						className={classes.iconButton}
						onClick={onSidebarOpen}
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
