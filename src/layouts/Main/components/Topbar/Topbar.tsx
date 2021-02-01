import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	Toolbar,
	Hidden,
	List,
	ListItem,
	Typography,
	Grid,
} from '@material-ui/core';
import { Image } from '@components/atoms';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import { PagesProps } from '../../../interfaces';

const useStyles = makeStyles((theme) => ({
	flexGrow: {
		flexGrow: 1,
	},
	flexGrowLeft: {
		flexGrow: 0,
	},
	navigationContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 100,
	},
	toolbar: {
		zIndex: 999,
		maxWidth: '100%',
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	navLink: {
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	listItem: {
		cursor: 'pointer',
		'&:hover > .menu-item, &:hover svg': {
			color: theme.palette.primary.main,
		},
		'&.menu-item--no-dropdown': {
			paddingRight: 0,
		},
	},
	listItemActive: {
		'&> .menu-item': {
			color: theme.palette.primary.main,
		},
	},
	listItemText: {
		flex: '0 0 auto',
		// marginLeft: theme.spacing(0),
		whiteSpace: 'nowrap',
	},
	listItemButton: {
		whiteSpace: 'nowrap',
	},
	listItemIcon: {
		minWidth: 'auto',
	},
	popover: {
		padding: theme.spacing(4),
		border: theme.spacing(2),
		boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
		minWidth: 350,
		marginTop: theme.spacing(2),
	},
	iconButton: {
		marginLeft: theme.spacing(2),
		padding: 0,
		'&:hover': {
			background: 'transparent',
		},
	},
	expandOpen: {
		transform: 'rotate(180deg)',
		color: theme.palette.primary.dark,
	},
	logoContainer: {
		width: '10%',
		height: '10%',
		[theme.breakpoints.up('md')]: {
			width: '3%',
			height: '3%',
		},
	},
	container: {
		display: 'inline-flex',
		alignItems: 'center',
		flexFlow: 'row',
	},
	logoImage: {
		width: '100%',
		height: '100%',
		[theme.breakpoints.up('md')]: {
			width: '60%',
			height: '60%',
		},
	},
	menu: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuItem: {
		marginRight: theme.spacing(5),
		'&:last-child': {
			marginRight: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
	},
	avatar: {
		// borderRadius: '50%',
		// padding: 0;
		width: '40px',
		height: '40px',
		cursor: 'pointer',
		margin: '4px',
	},
}));

interface Props {
	className?: string;
	onSidebarOpen: Function;
	pages: PagesProps;
	themeMode: string;
	themeToggler: Function;
}

const Topbar = ({
	themeMode,
	themeToggler,
	onSidebarOpen,
	pages,
	className,
	...rest
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<Toolbar disableGutters className={classes.toolbar} {...rest}>
			<div className={classes.logoContainer}>
				<NavLink to="/">
					<Grid container className={classes.container}>
						<Image
							className={classes.logoImage}
							src={themeMode === 'light' ? logo : logo}
							alt="greenstar"
							lazy={false}
						/>
						<Typography
							variant="h5"
							color="textPrimary"
							style={{ fontWeight: 600, fontSize: '16px', padding: '8px' }}
						>
							Greenstar Cleaners
						</Typography>
					</Grid>
				</NavLink>
			</div>
			<div className={classes.flexGrowLeft}>
				<Hidden smDown>
					<List disablePadding className={classes.navigationContainer}>
						<NavLink to="/resources">
							<ListItem
								aria-describedby="resources"
								className={clsx(classes.listItem)}
							>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Resources
								</Typography>
							</ListItem>
						</NavLink>

						<NavLink to="/shop">
							<ListItem
								aria-describedby="shop"
								className={clsx(classes.listItem)}
							>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Shop
								</Typography>
							</ListItem>
						</NavLink>
					</List>
				</Hidden>
			</div>
			<div className={classes.flexGrow} />
		</Toolbar>
	);
};

export default Topbar;
