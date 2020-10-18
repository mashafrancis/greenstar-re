import { ReactNode } from 'react';
import { AuthorPhoto } from '@pages/Reviews/interfaces';

export interface CardReviewProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * Icon to show inside the review card
	 */
	icon: ReactNode;
	/**
	 * Review text to show inside the review card
	 */
	text?: string;
	/**
	 * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
	 */
	authorPhoto?: AuthorPhoto;
	/**
	 * Reviewer name to show inside the review card
	 */
	authorName?: string;
	/**
	 * Reviewer title to show inside the review card
	 */
	authorTitle?: string;
	/**
	 * Alignment of the content
	 */
	align?: 'left' | 'right' | 'center';
	/**
	 * Review text variant
	 */
	textVariant?: string;
	/**
	 * Additional props to pass to the text Typography component
	 */
	textProps?: any;
	/**
	 * Additional props to pass to the list item primary text Typography component
	 */
	listItemPrimaryTypographyProps?: any;
	/**
	 * Additional props to pass to the list item secondary text Typography component
	 */
	listItemSecondaryTypographyProps?: any;
}
