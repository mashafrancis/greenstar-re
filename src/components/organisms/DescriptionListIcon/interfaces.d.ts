import { ReactNode } from 'react';

export interface DescriptionListIconProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * The title
	 */
	title: string;
	/**
	 * the subtitle
	 */
	subtitle?: string;
	/**
	 * Whether should show the alternate icon
	 */
	icon: ReactNode;
	/**
	 * The alignment of the items
	 */
	align?: 'left' | 'right' | 'center';
	/**
	 * Title variant
	 */
	titleVariant?: string;
	/**
	 * Subtitle variant
	 */
	subtitleVariant?: string;
	/**
	 * Additional props to pass to the title Typography component
	 */
	titleProps?: any;
	/**
	 * Additional props to pass to the subtitle Typography component
	 */
	subtitleProps?: any;
}
