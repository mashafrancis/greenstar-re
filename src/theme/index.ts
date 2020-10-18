import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import palette from './palette';

const theme = responsiveFontSizes(
	createMuiTheme({
		palette,
		typography: {
			fontFamily: '"Google Sans", "Roboto", "Helvetica Neue", sans-serif',
		},
		zIndex: {
			appBar: 1200,
			drawer: 1100,
		},
		overrides: {
			MuiButton: {
				containedSecondary: {
					color: 'white',
				},
			},
		},
	}),
);

export default theme;
