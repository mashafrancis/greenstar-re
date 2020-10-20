import { makeStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		boxShadow: 'none',
		background: '#ffffff',
		borderBottom: `1px solid ${grey[200]}`,
	},
	toolbar: {
		maxWidth: 1100,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
	},
	logoContainer: {
		width: 100,
		height: 28,
		[theme.breakpoints.up('md')]: {
			width: 120,
			height: 32,
		},
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
}));

export default useStyles;
