import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100%',
		paddingTop: 56,
		[theme.breakpoints.up('lg')]: {
			paddingTop: 64,
		},
	},
	content: {
		height: '100%',
	},
}));

export default useStyles;
