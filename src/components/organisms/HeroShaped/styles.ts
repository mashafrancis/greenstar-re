import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		borderBottom: `1px solid ${colors.grey[200]}`,
		overflow: 'hidden',
	},
	hero: {
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'flex',
		maxWidth: '1100px',
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
		},
	},
	heroLeftSide: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(3, 2),
		},
	},
	heroRightSide: {
		maxWidth: '50%',
		flex: '0 0 50%',
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
			flex: '0 0 100%',
			height: '300px',
		},
	},
	shapeContainer: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		overflow: 'hidden',
		verticalAlign: 'middle',
		zIndex: 3,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	shape: {
		transform: 'scale(2)',
		width: 'auto',
		height: '100%',
	},
	heroCover: {
		position: 'relative',
		width: '50vw',
		height: '100%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	heroImageContainer: {
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	heroImage: {
		position: 'absolute',
		left: '0%',
		width: '100%',
		height: '100%',
	},
}));

export default useStyles;
