import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
	pagePaddingTop: {
		paddingTop: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(5),
		},
	},
	appBarBottom: {
		top: 'auto',
		bottom: 0,
		background: 'transparent',
		boxShadow: 'none',
	},
	toolbarBottom: {
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
	},
	chatIconButton: {
		position: 'absolute',
		right: theme.spacing(5),
		left: 'auto',
		top: theme.spacing(-3),
		background: theme.palette.primary.main,
		width: 55,
		height: 55,
		boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
		'&:hover': {
			background: theme.palette.primary.main,
		},
	},
	forumIcon: {
		color: 'white',
		width: 25,
		height: 25,
	},
	contactForm: {
		padding: theme.spacing(3, 2),
		maxWidth: 800,
		margin: '0 auto',
	},
}));

export default useStyles;
