import {
	blue,
	blueGrey,
	green,
	grey,
	orange,
	red,
} from '@material-ui/core/colors';

const white = '#FFFFFF';
const black = '#000000';

export default {
	black,
	white,
	alternate: 'rgb(247, 249, 250)',
	secondary: {
		main: '#F9B934',
	},
	success: {
		contrastText: white,
		dark: green[900],
		main: green[600],
		light: green[400],
	},
	info: {
		contrastText: white,
		dark: blue[900],
		main: blue[600],
		light: blue[400],
	},
	warning: {
		contrastText: white,
		dark: orange[900],
		main: orange[600],
		light: orange[400],
	},
	error: {
		contrastText: white,
		dark: red[900],
		main: red[600],
		light: red[400],
	},
	text: {
		primary: '#121037',
		secondary: blueGrey[600],
		link: blue[600],
	},
	background: {
		default: '#F4F6F8',
		paper: white,
	},
	icon: blueGrey[600],
	divider: grey[200],
};
