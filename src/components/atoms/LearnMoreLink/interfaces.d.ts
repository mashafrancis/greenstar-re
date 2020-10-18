export interface LearnMoreLinkProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * The component to load as a main DOM
	 */
	component?: 'Link' | 'a';
	/**
	 * Title of the link
	 */
	title: string;
	/**
	 * Variant of the link
	 */
	variant?: 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
	/**
	 * Href of the link
	 */
	href?: string;
	/**
	 * Color of the link
	 */
	color?: string;
	/**
	 * Additional properties to pass to the Icon component
	 */
	iconProps?: any;
	/**
	 * Additional properties to pass to the Typography component
	 */
	typographyProps?: any;
}
