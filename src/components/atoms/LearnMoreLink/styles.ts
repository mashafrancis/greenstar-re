import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'inline-flex',
		alignItems: 'center',
		textDecoration: 'none',
	},
	title: {
		fontWeight: 'bold',
	},
	icon: {
		padding: 0,
		marginLeft: theme.spacing(1),
		'&:hover': {
			background: 'transparent',
		},
	},
}));

export default useStyles;
