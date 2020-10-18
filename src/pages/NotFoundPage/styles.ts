import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		'& .hero-shaped': {
			borderBottom: 0,
		},
		'& .hero-shaped__wrapper': {
			[theme.breakpoints.up('md')]: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
			},
		},
	},
	formContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 500,
			margin: `0 auto`,
		},
	},
	image: {
		objectFit: 'cover',
	},
	label: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
}));

export default useStyles;
