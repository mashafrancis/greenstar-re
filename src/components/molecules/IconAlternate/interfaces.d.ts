import { colors } from '@material-ui/core';

export interface IconAlternateProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * The classes of the font icon
	 */
	fontIconClass: string;
	/**
	 * Sizes of the icon
	 */
	size?: 'extraSmall' | 'small' | 'medium' | 'large';
	/**
	 * Color of the icon
	 */
	color?:
		| colors.red
		| colors.pink
		| colors.purple
		| colors.deepPurple
		| colors.indigo
		| colors.blue
		| colors.lightBlue
		| colors.cyan
		| colors.teal
		| colors.green
		| colors.lightGreen
		| colors.lime
		| colors.yellow
		| colors.amber
		| colors.orange
		| colors.deepOrange
		| colors.brown
		| colors.grey
		| colors.blueGrey;
	/**
	 * The shape of the alternate icon
	 */
	shape?: 'circle' | 'square';
	/**
	 * Additional properties to pass to the Icon component
	 */
	iconProps?: any;
}
