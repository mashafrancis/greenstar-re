import { useState } from 'react';
import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
}));

interface Props {
	children: React.ReactNode;
	themeToggler: Function;
	themeMode: string;
}

const Main = ({ children, themeToggler, themeMode }: Props): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const pages = {
		discover: {
			title: 'Discover',
			id: 'discover-pages',
			children: {
				about: {
					groupTitle: 'Discover',
					pages: [
						{
							title: 'Why Almond',
							href: '/why-almond',
						},
					],
				},
			},
		},
		learn: {
			title: 'Learn',
			id: 'learn-pages',
			children: {
				resources: {
					groupTitle: 'Learn',
					pages: [
						{
							title: 'FAQ',
							href: '/faq',
						},
					],
				},
			},
		},
		support: {
			title: 'Support',
			id: 'support-pages',
			children: {
				services: {
					groupTitle: 'Support',
					pages: [
						{
							title: 'Terms of Services',
							href: '/terms-of-services',
						},
					],
				},
			},
		},
	};

	const [openSidebar, setOpenSidebar] = useState<boolean>(false);

	const handleSidebarOpen = (): void => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = (): void => {
		setOpenSidebar(false);
	};

	const open = isMd ? false : openSidebar;

	return (
		<div
			className={clsx({
				[classes.root]: true,
			})}
		>
			<Topbar
				onSidebarOpen={handleSidebarOpen}
				pages={pages}
				themeMode={themeMode}
				themeToggler={themeToggler}
			/>
			<Sidebar
				onClose={handleSidebarClose}
				open={open}
				variant="temporary"
				pages={pages}
			/>
			<main>
				<Divider />
				{children}
			</main>
			<Footer pages={pages} />
		</div>
	);
};

export default Main;
